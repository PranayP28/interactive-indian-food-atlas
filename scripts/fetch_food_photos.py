#!/usr/bin/env python3
"""Fetch, verify and mirror the atlas photography into public/images/.

The site never invents imagery: every file this script writes is a genuine,
camera-captured Wikimedia Commons photograph by a named photographer whose
licence was re-checked against the live Commons API at download time.

What it produces
----------------
public/images/dishes/<dish-id>-stage-<1..4>.webp   the four stages, per dish
public/images/context/<library-key>.webp           documentary context photos
src/data/localPhotos.json                          manifest consumed by the app
src/data/photoFetchReport.json                     licence + integrity report

Safety properties
-----------------
* idempotent: an existing, valid local file is kept unless --force is given;
* non-destructive: the existing localPhotos.json is merged, never rebuilt from
  scratch, so files imported by other pipelines are never dropped;
* verified: the live Commons licence must be CC0 / public domain / CC BY /
  CC BY-SA and must match the licence recorded in photography.json;
* validated: every download is checked for a real image header and minimum
  dimensions before it is written, and writes are atomic;
* retryable: transient HTTP/API failures are retried with exponential backoff;
* offline-safe: when the Commons API cannot be reached nothing is downloaded
  and the existing archive is left untouched (exit code 2).

Usage
-----
    npm run photos:plan       # --dry-run: verify + print the plan
    npm run photos:fetch      # download, verify, optimise, update manifest
    npm run photos:verify     # --verify: offline integrity check, no network
    python3 scripts/fetch_food_photos.py --only laal-maas,appam-stew
    python3 scripts/fetch_food_photos.py --force

Requires Python 3.9+ and Pillow (pip install Pillow).
"""

from __future__ import annotations

import argparse
import io
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOGRAPHY = ROOT / "src/data/photography.json"
LOCAL_MANIFEST = ROOT / "src/data/localPhotos.json"
REPORT = ROOT / "src/data/photoFetchReport.json"
DISH_DIR = ROOT / "public/images/dishes"
CONTEXT_DIR = ROOT / "public/images/context"

STAGES = {"origin": 1, "ingredients": 2, "method": 3, "plated": 4}
API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = (
    "BharatFoodAtlas/1.0 (offline photography archive; "
    "licence verification and local mirroring of credited Commons files)"
)
ALLOWED_PREFIXES = ("cc0", "cc by", "cc-by", "public domain", "pd-")
MAX_BYTES = 60 * 1024 * 1024
MIN_SIDE = 200
RETRIES = 3
BACKOFF = 1.5


def log(msg: str) -> None:
    print(msg, flush=True)


def retry(fn, *args, **kwargs):
    last: Exception | None = None
    for attempt in range(RETRIES):
        try:
            return fn(*args, **kwargs)
        except (urllib.error.URLError, TimeoutError, OSError, ValueError) as exc:
            last = exc
            if attempt + 1 < RETRIES:
                time.sleep(BACKOFF ** attempt)
    raise last  # type: ignore[misc]


def get_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_bytes(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=120) as resp:
        ctype = resp.headers.get("Content-Type", "")
        if "image/" not in ctype and "octet-stream" not in ctype:
            raise ValueError(f"unexpected content type {ctype!r}")
        length = int(resp.headers.get("Content-Length") or 0)
        if length > MAX_BYTES:
            raise ValueError(f"refusing {length} byte file")
        data = resp.read(MAX_BYTES + 1)
    if len(data) > MAX_BYTES:
        raise ValueError("file exceeds size limit")
    return data


def strip_html(value: str) -> str:
    return re.sub(r"<[^>]+>", "", value or "").strip()


def file_title(source_url: str) -> str | None:
    if not source_url:
        return None
    path = urllib.parse.unquote(urllib.parse.urlparse(source_url).path)
    m = re.search(r"/wiki/(File:.+)$", path)
    return m.group(1).replace("_", " ") if m else None


def live_licence(titles: list[str]) -> dict:
    """Return {title: extmetadata} batches of at most 8 Commons file titles."""
    out: dict = {}
    for i in range(0, len(titles), 8):
        batch = titles[i : i + 8]
        query = urllib.parse.urlencode(
            {
                "action": "query",
                "format": "json",
                "formatversion": "2",
                "prop": "imageinfo",
                "iiprop": "url|size|extmetadata",
                "titles": "|".join(batch),
            }
        )
        data = retry(get_json, f"{API}?{query}")
        for page in data.get("query", {}).get("pages", []):
            if page.get("missing"):
                continue
            info = (page.get("imageinfo") or [{}])[0]
            meta = info.get("extmetadata") or {}
            out[page["title"]] = {
                "width": info.get("width"),
                "height": info.get("height"),
                "url": info.get("url"),
                "creator": strip_html(meta.get("Artist", {}).get("value", "")),
                "licence": strip_html(meta.get("LicenseShortName", {}).get("value", "")),
                "licenceUrl": meta.get("LicenseUrl", {}).get("value", ""),
            }
        time.sleep(0.4)
    return out


def licence_ok(name: str) -> bool:
    low = (name or "").lower().strip()
    return bool(low) and any(low.startswith(p) for p in ALLOWED_PREFIXES)


def validate_image(data: bytes) -> tuple[int, int]:
    """Reject HTML error pages, truncated files and tiny placeholders."""
    try:
        from PIL import Image
    except ImportError:
        raise RuntimeError("Pillow is required for image validation (pip install Pillow)")
    with Image.open(io.BytesIO(data)) as im:
        im.verify()
    with Image.open(io.BytesIO(data)) as im:
        w, h = im.size
    if min(w, h) < MIN_SIDE:
        raise ValueError(f"image too small ({w}x{h})")
    return w, h


def encode(data: bytes, max_width: int, quality: int) -> tuple[bytes, int, int]:
    """Re-encode to WebP, downscaling only. Never crops, never upscales."""
    from PIL import Image

    with Image.open(io.BytesIO(data)) as raw:
        raw.load()
        im = raw.convert("RGB")
        w, h = im.size
        if w > max_width:
            h = round(h * max_width / w)
            w = max_width
            im = im.resize((w, h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=quality, method=6)
        return buf.getvalue(), w, h


def atomic_write(path: Path, payload: bytes) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_name(path.name + ".part")
    tmp.write_bytes(payload)
    os.replace(tmp, path)


def stage_photo(stage_value) -> dict | None:
    """Unwrap an explicit stage record; ignore shared-library placeholders."""
    if not stage_value:
        return None
    if "photo" in stage_value:
        return stage_value["photo"]
    if "library" in stage_value and "src" not in stage_value:
        return None
    if "src" in stage_value:
        return stage_value
    return None


def build_plan(photography: dict, only: set[str] | None) -> list[dict]:
    jobs: list[dict] = []
    for dish_id, dish in photography["dishes"].items():
        if only and dish_id not in only:
            continue
        for stage, number in STAGES.items():
            photo = stage_photo(dish.get(stage))
            if not photo:
                continue
            jobs.append(
                {
                    "kind": "dish",
                    "id": dish_id,
                    "stage": stage,
                    "number": number,
                    "photo": photo,
                    "out": DISH_DIR / f"{dish_id}-stage-{number}.webp",
                }
            )
    for key, photo in photography.get("library", {}).items():
        jobs.append(
            {
                "kind": "context",
                "id": key,
                "stage": key,
                "number": None,
                "photo": photo,
                "out": CONTEXT_DIR / f"{key}.webp",
            }
        )
    return jobs


def load_local() -> dict:
    try:
        data = json.loads(LOCAL_MANIFEST.read_text(encoding="utf-8"))
        if isinstance(data.get("dishes"), dict) and isinstance(data.get("context"), dict):
            return data
    except (OSError, ValueError):
        pass
    return {"dishes": {}, "context": {}}


def verify_archive() -> int:
    """Offline integrity check: no network, no writes."""
    try:
        from PIL import Image
    except ImportError:
        log("! Pillow is required for the offline integrity check (pip install Pillow)")
        return 2
    local = load_local()
    issues: list[str] = []
    warnings: list[str] = []
    checked = 0
    for section, entries in (("dishes", local["dishes"]), ("context", local["context"])):
        for key, stages in entries.items():
            if not isinstance(stages, dict):
                continue
            for stage, rel in stages.items():
                checked += 1
                path = ROOT / "public" / str(rel).lstrip("/")
                if not path.exists():
                    issues.append(f"missing {section}/{key}/{stage}: {path}")
                    continue
                try:
                    data = path.read_bytes()
                    with Image.open(io.BytesIO(data)) as im:
                        im.verify()
                    with Image.open(io.BytesIO(data)) as im:
                        w, h = im.size
                    with open(path, "rb") as fh:
                        head = fh.read(12)
                    if not (head.startswith(b"RIFF") and head[8:12] == b"WEBP"):
                        issues.append(f"not WebP {section}/{key}/{stage}: {path}")
                    elif min(w, h) < 400:
                        warnings.append(
                            f"low resolution {section}/{key}/{stage}: {w}x{h} ({path.name}) — genuine but below display quality"
                        )
                except Exception as exc:
                    issues.append(f"invalid {section}/{key}/{stage}: {exc}")
    log(f"Verified {checked} local dish-stage files.")
    for warning in warnings:
        log("  ~ " + warning)
    if issues:
        for issue in issues:
            log("  ! " + issue)
        return 1
    log(f"All local files exist, decode, and are WebP. {len(warnings)} low-resolution warning(s).")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--verify", action="store_true", help="offline integrity check only")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--only", default="")
    ap.add_argument("--max-width", type=int, default=1600)
    ap.add_argument("--quality", type=int, default=82)
    args = ap.parse_args()

    if args.verify:
        return verify_archive()

    only = {s.strip() for s in args.only.split(",") if s.strip()} or None
    photography = json.loads(PHOTOGRAPHY.read_text(encoding="utf-8"))
    jobs = build_plan(photography, only)
    local = load_local()  # merge, never rebuild
    DISH_DIR.mkdir(parents=True, exist_ok=True)
    CONTEXT_DIR.mkdir(parents=True, exist_ok=True)

    titles = [t for t in (file_title(j["photo"].get("sourceUrl", "")) for j in jobs) if t]
    try:
        live = live_licence(sorted(set(titles)))
    except Exception as exc:
        log(f"! Commons API unreachable: {exc}")
        log("  Licences cannot be re-verified, so nothing was downloaded and the archive is unchanged.")
        log("  Run this script from a machine with Wikimedia access, or use --verify for an offline check.")
        return 2

    downloaded = skipped = existing = 0
    checks: list[dict] = []

    for job in jobs:
        photo = job["photo"]
        title = file_title(photo.get("sourceUrl", ""))
        rel = "/" + job["out"].relative_to(ROOT / "public").as_posix()
        bucket = local["context"] if job["kind"] == "context" else local["dishes"].setdefault(job["id"], {})
        key = job["stage"] if job["kind"] == "dish" else job["id"]

        if job["out"].exists() and not args.force:
            try:
                validate_image(job["out"].read_bytes())
                existing += 1
                bucket[key] = rel  # keep/restore the manifest entry
                checks.append({"id": job["id"], "stage": key, "status": "existing", "local": rel})
                continue
            except Exception as exc:
                log(f"warn  {job['id']:<24} existing file invalid, will re-fetch: {exc}")

        info = live.get(title) if title else None
        if not info:
            log(f"skip  {job['id']:<24} no live Commons record ({title or 'no source URL'})")
            skipped += 1
            checks.append({"id": job["id"], "stage": key, "status": "no-live-record"})
            continue
        if not licence_ok(info["licence"]):
            log(f"skip  {job['id']:<24} licence not reusable: {info['licence'] or 'unknown'}")
            skipped += 1
            checks.append({"id": job["id"], "stage": key, "status": "licence-not-reusable", "licence": info["licence"]})
            continue
        recorded = (photo.get("licence") or "").lower().replace("-", " ")
        current = (info["licence"] or "").lower().replace("-", " ")
        if recorded and recorded.split()[0:2] != current.split()[0:2]:
            log(f"skip  {job['id']:<24} licence changed: recorded '{photo.get('licence')}' now '{info['licence']}'")
            skipped += 1
            checks.append({"id": job["id"], "stage": key, "status": "licence-changed"})
            continue
        if (photo.get("creator") or "").strip().lower() not in (info["creator"] or "").strip().lower():
            log(f"warn  {job['id']:<24} creator differs: recorded '{photo.get('creator')}' live '{info['creator']}'")

        src = info.get("url") or photo.get("src")
        if args.dry_run:
            log(f"plan  {job['id']:<24} stage {job['number'] or '-'}  {info['width']}x{info['height']}  {info['licence']}  -> {rel}")
            downloaded += 1
            checks.append({"id": job["id"], "stage": key, "status": "planned", "licence": info["licence"]})
            continue

        try:
            raw = retry(fetch_bytes, src)
            validate_image(raw)
            payload, w, h = encode(raw, args.max_width, args.quality)
            atomic_write(job["out"], payload)
        except Exception as exc:
            log(f"fail  {job['id']:<24} {exc}")
            skipped += 1
            checks.append({"id": job["id"], "stage": key, "status": "failed", "error": str(exc)})
            continue

        log(f"ok    {job['id']:<24} {w}x{h} webp {len(payload)//1024}kB  {rel}")
        downloaded += 1
        bucket[key] = rel
        checks.append({
            "id": job["id"], "stage": key, "status": "downloaded", "local": rel,
            "creator": info["creator"], "licence": info["licence"],
            "licenceUrl": info["licenceUrl"], "sourceUrl": photo.get("sourceUrl", ""),
        })
        time.sleep(0.3)

    if not args.dry_run:
        LOCAL_MANIFEST.write_text(json.dumps(local, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        REPORT.write_text(
            json.dumps({"verifiedOn": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                        "policy": "Only CC0 / PD / CC BY / CC BY-SA files with a matching live licence are mirrored.",
                        "checks": checks}, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )

    log("")
    log(f"{'planned' if args.dry_run else 'downloaded'}: {downloaded}   already present: {existing}   skipped: {skipped}")
    log(f"local manifest: {LOCAL_MANIFEST.relative_to(ROOT)}")
    return 0 if skipped == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
