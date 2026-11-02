#!/usr/bin/env python3
"""Fetch, verify and optimise the atlas photography into public/images/.

The site never invents imagery: every file this script writes is a real
photograph by a named photographer whose licence was re-checked against the
Wikimedia Commons API at download time.

What it produces
----------------
public/images/dishes/<dish-id>-stage-<1..4>.webp   the four stages, per dish
public/images/context/<library-key>.webp           documentary context photos
src/data/localPhotos.json                          manifest consumed by the app

The app prefers a local file when one exists and falls back to the (already
verified) remote URL otherwise, so running this script upgrades the site from
"credited hotlink" to "self-hosted" without any other code change.

Usage
-----
    python3 scripts/fetch_food_photos.py --dry-run      # show the plan
    python3 scripts/fetch_food_photos.py                # download everything
    python3 scripts/fetch_food_photos.py --only laal-maas,appam-stew
    python3 scripts/fetch_food_photos.py --force        # re-encode existing files

Requires Python 3.9+ and Pillow (pip install pillow). Without Pillow the
original bytes are stored unconverted, which is slower for visitors and may
break the WebP contract, so Pillow is strongly recommended.

Licence policy: only CC0 / public domain / CC BY / CC BY-SA are accepted. Any
file whose live licence differs from the licence recorded in photography.json,
or that is not in the allowlist, is skipped and reported — never downloaded
into the site silently.
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

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTOGRAPHY = os.path.join(ROOT, "src", "data", "photography.json")
LOCAL_MANIFEST = os.path.join(ROOT, "src", "data", "localPhotos.json")
DISH_DIR = os.path.join(ROOT, "public", "images", "dishes")
CONTEXT_DIR = os.path.join(ROOT, "public", "images", "context")

STAGES = {"origin": 1, "ingredients": 2, "method": 3, "plated": 4}
API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = (
    "BharatFoodAtlas/1.0 (offline photography archive; "
    "licence verification and local mirroring of credited Commons files)"
)

ALLOWED_PREFIXES = ("cc0", "cc by", "cc-by", "public domain", "pd-")
MAX_BYTES = 60 * 1024 * 1024


def log(msg: str) -> None:
    print(msg, flush=True)


def get_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_bytes(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=120) as resp:
        length = int(resp.headers.get("Content-Length") or 0)
        if length > MAX_BYTES:
            raise ValueError(f"refusing {length} byte file")
        return resp.read()


def file_title(source_url: str) -> str | None:
    """Extract 'File:...' from a Commons description URL."""
    if not source_url:
        return None
    path = urllib.parse.unquote(urllib.parse.urlparse(source_url).path)
    m = re.search(r"/wiki/(File:.+)$", path)
    return m.group(1).replace("_", " ") if m else None


def live_licence(titles: list[str]) -> dict:
    """Return {title: extmetadata} for up to 8 Commons file titles."""
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
        data = get_json(f"{API}?{query}")
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
        time.sleep(0.4)  # be polite to the API
    return out


def strip_html(value: str) -> str:
    return re.sub(r"<[^>]+>", "", value or "").strip()


def licence_ok(name: str) -> bool:
    low = (name or "").lower().strip()
    return bool(low) and any(low.startswith(p) for p in ALLOWED_PREFIXES)


def encode(data: bytes, max_width: int, quality: int) -> tuple[bytes, str, int, int]:
    """Re-encode to WebP, downscaling only. Never crops, never upscales."""
    try:
        from PIL import Image
    except ImportError:
        return data, "original", 0, 0
    with Image.open(io.BytesIO(data)) as im:
        im = im.convert("RGB") if im.mode not in ("RGB", "L") else im
        w, h = im.size
        if w > max_width:
            h = round(h * max_width / w)
            w = max_width
            im = im.resize((w, h), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=quality, method=5)
        return buf.getvalue(), "webp", w, h


def build_plan(photography: dict, only: set[str] | None) -> list[dict]:
    jobs: list[dict] = []
    for dish_id, dish in photography["dishes"].items():
        if only and dish_id not in only:
            continue
        for stage, number in STAGES.items():
            photo = dish.get(stage)
            if not photo:
                continue
            if photo.get("library"):
                continue  # handled once, globally
            jobs.append(
                {
                    "kind": "dish",
                    "id": dish_id,
                    "stage": stage,
                    "number": number,
                    "photo": photo,
                    "out": os.path.join(DISH_DIR, f"{dish_id}-stage-{number}.webp"),
                }
            )
    for key, photo in photography.get("library", {}).items():
        jobs.append(
            {
                "kind": "context",
                "id": key,
                "stage": None,
                "number": None,
                "photo": photo,
                "out": os.path.join(CONTEXT_DIR, f"{key}.webp"),
            }
        )
    return jobs


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--only", default="")
    ap.add_argument("--max-width", type=int, default=1600)
    ap.add_argument("--quality", type=int, default=82)
    args = ap.parse_args()

    only = {s.strip() for s in args.only.split(",") if s.strip()} or None
    photography = json.load(open(PHOTOGRAPHY, encoding="utf-8"))
    jobs = build_plan(photography, only)

    os.makedirs(DISH_DIR, exist_ok=True)
    os.makedirs(CONTEXT_DIR, exist_ok=True)

    titles = [t for t in (file_title(j["photo"].get("sourceUrl", "")) for j in jobs) if t]
    try:
        live = live_licence(sorted(set(titles)))
    except Exception as exc:  # network blocked, DNS, API down…
        log(f"! Commons API unreachable: {exc}")
        log("  Cannot verify licences, so nothing will be downloaded.")
        log("  Run this script from a machine with internet access, or let CI do it.")
        return 2

    local = {"dishes": {}, "context": {}}
    downloaded = skipped = existing = 0

    for job in jobs:
        photo = job["photo"]
        title = file_title(photo.get("sourceUrl", ""))
        rel = "/" + os.path.relpath(job["out"], os.path.join(ROOT, "public")).replace(os.sep, "/")

        if os.path.exists(job["out"]) and not args.force:
            existing += 1
            target = local["context"] if job["kind"] == "context" else local["dishes"].setdefault(job["id"], {})
            target[job["id"] if job["kind"] == "context" else job["stage"]] = rel
            continue

        info = live.get(title) if title else None
        if not info:
            log(f"skip  {job['id']:<28} no live Commons record ({title or 'no source URL'})")
            skipped += 1
            continue
        if not licence_ok(info["licence"]):
            log(f"skip  {job['id']:<28} licence not reusable: {info['licence'] or 'unknown'}")
            skipped += 1
            continue
        recorded = (photo.get("licence") or "").lower().replace("-", " ")
        current = (info["licence"] or "").lower().replace("-", " ")
        if recorded and recorded.split()[0:2] != current.split()[0:2]:
            log(f"skip  {job['id']:<28} licence changed: recorded '{photo.get('licence')}' now '{info['licence']}'")
            skipped += 1
            continue
        if (photo.get("creator") or "").strip().lower() not in (info["creator"] or "").strip().lower():
            log(f"warn  {job['id']:<28} creator differs: recorded '{photo.get('creator')}' live '{info['creator']}'")

        src = info.get("url") or photo.get("src")
        if args.dry_run:
            log(f"plan  {job['id']:<28} stage {job['number'] or '-'}  {info['width']}x{info['height']}  {info['licence']}  -> {rel}")
            downloaded += 1
            continue

        try:
            raw = fetch_bytes(src)
            payload, fmt, w, h = encode(raw, args.max_width, args.quality)
        except Exception as exc:
            log(f"fail  {job['id']:<28} {exc}")
            skipped += 1
            continue

        with open(job["out"], "wb") as fh:
            fh.write(payload)
        log(f"ok    {job['id']:<28} {w or info['width']}x{h or info['height']} {fmt} {len(payload)//1024}kB  {rel}")
        downloaded += 1
        if job["kind"] == "context":
            local["context"][job["id"]] = rel
        else:
            local["dishes"].setdefault(job["id"], {})[job["stage"]] = rel
        time.sleep(0.3)

    if not args.dry_run:
        with open(LOCAL_MANIFEST, "w", encoding="utf-8") as fh:
            json.dump(local, fh, indent=2, ensure_ascii=False)
            fh.write("\n")

    log("")
    log(f"{'planned' if args.dry_run else 'downloaded'}: {downloaded}   already present: {existing}   skipped: {skipped}")
    log(f"local manifest: {os.path.relpath(LOCAL_MANIFEST, ROOT)}")
    return 0 if skipped == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
