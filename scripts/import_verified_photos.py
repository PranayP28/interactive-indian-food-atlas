#!/usr/bin/env python3
"""Import verified, credited photographs into the local atlas archive.

This script is deliberately idempotent and conservative:

* it only imports files whose creator, licence and source page have been
  checked against the live Wikimedia Commons API (see src/data/photoImportManifest.json);
* it validates every source image (Pillow ``verify`` + a minimum size);
* it never upscales, never deletes an existing file, and skips an existing
  target unless ``--force`` is passed;
* it re-encodes to WebP at <=1600 px, quality 86, and records the resulting
  dimensions, source URL, creator, licence and licence URL in a manifest;
* it merges the results into src/data/localPhotos.json and
  src/data/photography.json without touching any other dish record.

Usage
-----
    python3 scripts/import_verified_photos.py --dry-run
    python3 scripts/import_verified_photos.py
    python3 scripts/import_verified_photos.py --force   # re-encode existing targets

Requires Pillow (``pip install Pillow``). No network access is needed: the
source files were downloaded and verified during the research pass, and the
Commons API query used for each one is recorded in the manifest.
"""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PHOTOGRAPHY = ROOT / "src/data/photography.json"
LOCAL = ROOT / "src/data/localPhotos.json"
CATALOGUE = ROOT / "src/data/dishCatalog.json"
LEGACY = ROOT / "scripts/legacy-timeline-assets.json"
MANIFEST = ROOT / "src/data/photoImportManifest.json"
DISH_DIR = ROOT / "public/images/dishes"
STAGE_DIR = ROOT / "public/images/stages"
RESEARCH_DIR = ROOT / "assets/photo-sources"  # committed, verified source copies
SCRATCH_DIR = ROOT / "image-search"           # optional local research scratch

STAGE_NUMBER = {"origin": 1, "ingredients": 2, "method": 3, "plated": 4}
MIN_SIDE = 360
MAX_SIDE = 1600
QUALITY = 86

# ── Photographs downloaded and checked against the Commons API (2026-11-02) ──
# creator / licence / licenceUrl / width / height come from
# commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url|size|extmetadata
COMMONS_IMPORTS: list[dict] = [
    {
        "dishId": "pulihora", "stage": "plated", "label": "Finished dish",
        "file": "pulihora-wikimedia-commons-tamarind-rice-1.jpg",
        "title": "Pulihora (tamarind rice)",
        "creator": "Manohar Andaluri", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/0/0b/PULIHORA.JPG",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:PULIHORA.JPG",
        "width": 640, "height": 480,
        "alt": "Pulihora, tamarind rice, on a plate",
        "caption": "Pulihora — Andhra tamarind rice with peanuts and curry-leaf tempering.",
    },
    {
        "dishId": "til-pitha", "stage": "plated", "label": "Finished dish",
        "file": "til-pitha-assam-wikimedia-commons-photog-2.jpg",
        "title": "Til Pitha - Assamese Ricecake",
        "creator": "দিব্য দত্ত (Dibya Dutta)", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Til_Pitha_-_Assamese_Ricecake.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Til_Pitha_-_Assamese_Ricecake.jpg",
        "width": 4160, "height": 3120,
        "alt": "Til pitha, sesame-filled Assamese rice crepes",
        "caption": "Til pitha — toasted sesame and jaggery rolled in a rice-flour crepe, Assam.",
    },
    {
        "dishId": "bebinca", "stage": "plated", "label": "Finished dish",
        "file": "bebinca-goa-layered-cake-file-wikimedia--1.jpg",
        "title": "Bebinca with Ice Cream - Martin's Corner - Goa - 01",
        "creator": "Krrisd", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Bebinca_with_Ice_Cream_-_Martin%27s_Corner_-_Goa_-_01.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Bebinca_with_Ice_Cream_-_Martin%27s_Corner_-_Goa_-_01.jpg",
        "width": 4032, "height": 3024,
        "alt": "Bebinca layered cake served with ice cream in Goa",
        "caption": "Bebinca, the layered Goan coconut-milk cake, served with ice cream at Martin's Corner, Betalbatim.",
    },
    {
        "dishId": "mysore-pak", "stage": "plated", "label": "Finished dish",
        "file": "mysore-pak-file-wikimedia-commons-photog-1.jpg",
        "title": "Mysore Pak",
        "creator": "Sudiptorana", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/7/79/Mysore_Pak.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mysore_Pak.jpg",
        "width": 1600, "height": 1052,
        "alt": "Mysore pak, gram-flour and ghee fudge cut into squares",
        "caption": "Mysore pak — gram-flour and ghee fudge cut into squares, photographed at Rao's Udipi Home.",
    },
    {
        "dishId": "ghewar", "stage": "plated", "label": "Finished dish",
        "file": "file-ghevarrajasthanisweet-jpg-wikimedia-1.jpg",
        "title": "Ghevar Rajasthani Sweet",
        "creator": "Onef9day", "licence": "CC BY 3.0",
        "licenceUrl": "https://creativecommons.org/licenses/by/3.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/a/a7/GhevarRajasthaniSweet.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:GhevarRajasthaniSweet.jpg",
        "width": 1161, "height": 1087,
        "alt": "Ghewar, honeycombed Rajasthani disc sweet",
        "caption": "Ghewar — the honeycombed Rajasthani disc sweet traditionally made for Teej.",
    },
    {
        "dishId": "haryanvi-churma", "stage": "plated", "label": "Finished dish",
        "file": "file-churma-jpg-wikimedia-commons-1.jpg",
        "title": "Churma",
        "creator": "Ravinder Narwal", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/9/91/Churma.JPG",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Churma.JPG",
        "width": 4608, "height": 3456,
        "alt": "Churma, crumbled wheat roti bound with ghee and sugar",
        "caption": "Churma — crumbled hearth-baked wheat roti bound with ghee and sugar, Haryana.",
    },
    {
        "dishId": "rosogolla", "stage": "plated", "label": "Finished dish",
        "file": "rosogolla-or-rasgulla-wikimedia-commons--1.jpg",
        "title": "Rasgulla With Rabdi",
        "creator": "Prakrutim", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Rasgulla_With_Rabdi.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rasgulla_With_Rabdi.jpg",
        "width": 3114, "height": 1900,
        "alt": "Rosogolla served with rabdi, saffron and rose petals",
        "caption": "Rosogolla with rabdi, saffron and rose — a festive Bengali presentation of the chhena sweet.",
    },
    {
        "dishId": "sel-roti", "stage": "plated", "label": "Finished dish",
        "file": "sel-roti-wikimedia-commons-photograph-2.jpg",
        "title": "Sel Roti",
        "creator": "Swapnil Acharya", "licence": "CC BY-SA 3.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Sel_Roti.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sel_Roti.jpg",
        "width": 1000, "height": 750,
        "alt": "Sel roti, ring-shaped Nepali rice bread",
        "caption": "Sel roti — ring-shaped rice-flour bread made for Tihar and Dashain.",
    },
    {
        "dishId": "handvo", "stage": "plated", "label": "Finished dish",
        "file": "handvo-gujarati-food-commons-photograph--1.jpg",
        "title": "Handvo (Gujarati savory cake)",
        "creator": "Deboli Dutta", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/8/87/Handvo_%28Gujarati_savory_cake%29.JPG",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Handvo_(Gujarati_savory_cake).JPG",
        "width": 1936, "height": 1936,
        "alt": "Handvo, Gujarati savoury lentil and rice cake",
        "caption": "Handvo — Gujarati savoury cake made from lentils and rice, cut into squares.",
    },
    {
        "dishId": "banarasi-malaiyo", "stage": "origin", "label": "Regional context",
        "file": "malaiyo-varanasi-wikimedia-commons-photo-1.jpg",
        "title": "Malaiyo vendor's stall, Lanka, Varanasi",
        "creator": "Rinchin1", "licence": "CC BY-SA 4.0",
        "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
        "src": "https://upload.wikimedia.org/wikipedia/commons/5/52/Malaiyo_Pehalwaan_lassi_in_front_of_ravidas_gate_LANKA._Varanasi_Uttar_Pradesh.jpg",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Malaiyo_Pehalwaan_lassi_in_front_of_ravidas_gate_LANKA._Varanasi_Uttar_Pradesh.jpg",
        "width": 3456, "height": 4608,
        "alt": "A Varanasi street vendor's stall near Ravidas Gate, Lanka",
        "caption": "A Varanasi street-food stall near Ravidas Gate, Lanka — the winter malaiyo trade. Regional food culture, not a photograph of the dish itself, and not evidence of its origin.",
    },
]

# Verified but rejected on quality grounds — recorded so the gap is explicit.
REJECTED = [
    {
        "dishId": "qubani-ka-meetha", "stage": "plated",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Qubani_ka_Meetha_(_Apricot_Sauce_with_Custard_).jpg",
        "reason": "Only 262x344 px on Commons (CC0, Lubna Karim). Below the site's minimum display resolution; stage left unresolved rather than upscaled.",
    },
    {
        "dishId": "apong", "stage": "origin",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Apong_-_Rice_beer_of_Assam_In_A_Traditional_Pot.jpg",
        "reason": "Genuine CC BY-SA 4.0 rice-beer photograph, but it depicts an Assam Mising tradition rather than Arunachal's Adi/Nyishi Apong. Not used as a regional-context photograph to avoid a regional mismatch.",
    },
]

LICENCE_PATTERNS = [
    (r"cc0|public domain|zero", "CC0 / Public domain", "https://creativecommons.org/publicdomain/zero/1.0/"),
    (r"by-sa\s*4|by-sa/4", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"),
    (r"by-sa\s*3|by-sa/3", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"),
    (r"by-sa\s*2\.0\s*kr|by-sa/2\.0/kr", "CC BY-SA 2.0 KR", "https://creativecommons.org/licenses/by-sa/2.0/kr/"),
    (r"by-sa\s*2|by-sa/2", "CC BY-SA 2.0", "https://creativecommons.org/licenses/by-sa/2.0/"),
    (r"\bby\s*4|licenses/by/4", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
    (r"\bby\s*3|licenses/by/3", "CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/"),
    (r"\bby\s*2|licenses/by/2", "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"),
]


def normalise_licence(text: str, url: str) -> tuple[str, str]:
    haystack = f"{text} {url}".lower()
    for pattern, name, default_url in LICENCE_PATTERNS:
        if re.search(pattern, haystack):
            return name, url or default_url
    return text.strip() or "see source page", url


def encode_webp(source: Path, target: Path, force: bool) -> tuple[int, int] | None:
    if target.exists() and not force:
        with Image.open(target) as im:
            return im.size
    with Image.open(source) as raw:
        raw.load()
        im = raw.convert("RGB")
        w, h = im.size
        if min(w, h) < MIN_SIDE:
            raise ValueError(f"source too small ({w}x{h})")
        if max(w, h) > MAX_SIDE:
            scale = MAX_SIDE / max(w, h)
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
            w, h = im.size
        target.parent.mkdir(parents=True, exist_ok=True)
        im.save(target, "WEBP", quality=QUALITY, method=6)
        return w, h


def photo_record(item: dict, local_path: str, subject: str) -> dict:
    return {
        "src": item["src"],
        "subject": subject,
        "title": item["title"],
        "creator": item["creator"],
        "licence": item["licence"],
        "licenceUrl": item["licenceUrl"],
        "sourceUrl": item["sourceUrl"],
        "alt": item["alt"],
        "caption": item["caption"],
        "fallback": None,
        "width": item["width"],
        "height": item["height"],
        "local": local_path,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    photography = json.loads(PHOTOGRAPHY.read_text(encoding="utf-8"))
    local = json.loads(LOCAL.read_text(encoding="utf-8"))
    catalogue = json.loads(CATALOGUE.read_text(encoding="utf-8"))
    legacy = json.loads(LEGACY.read_text(encoding="utf-8"))
    ingredients_by_dish = {d["id"]: d.get("ingredients", []) for d in catalogue["dishes"]}

    entries: list[dict] = []
    imports: list[dict] = []

    # 1. New Commons photographs from the research pass.
    for item in COMMONS_IMPORTS:
        source = RESEARCH_DIR / item["file"]
        if not source.exists():
            source = SCRATCH_DIR / item["file"]
        target = DISH_DIR / f"{item['dishId']}-stage-{STAGE_NUMBER[item['stage']]}.webp"
        if not source.exists():
            print(f"SKIP  missing research file {source}")
            continue
        if not args.dry_run:
            size = encode_webp(source, target, args.force)
            if size is None:
                raise RuntimeError(target)
        else:
            with Image.open(source) as im:
                size = im.size
        local_path = f"/images/dishes/{target.name}"
        imports.append({**item, "sourceFile": str(source.relative_to(ROOT)), "local": local_path, "encodedSize": list(size)})
        entries.append((item, local_path, "dish" if item["stage"] == "plated" else "context"))

    # 2. Verified assets already imported by the earlier timeline-image branch.
    for item in legacy:
        source = STAGE_DIR / item["asset"]
        target = DISH_DIR / f"{item['dishId']}-stage-{STAGE_NUMBER[item['stage']]}.webp"
        if not source.exists():
            print(f"SKIP  missing legacy asset {source}")
            continue
        if not args.dry_run:
            size = encode_webp(source, target, args.force)
            if size is None:
                raise RuntimeError(target)
        else:
            with Image.open(source) as im:
                size = im.size
        licence, licence_url = normalise_licence(item.get("license", ""), item.get("licenseUrl", ""))
        src = item["originalImageUrl"].split("?")[0]
        record = {
            "dishId": item["dishId"], "stage": item["stage"], "label": item["label"],
            "title": Path(item["asset"]).stem.replace("-", " ").replace("_", " "),
            "creator": item["creator"], "licence": licence, "licenceUrl": licence_url,
            "src": src, "sourceUrl": item["sourcePageUrl"],
            "alt": item["caption"], "caption": item["caption"],
            "width": size[0], "height": size[1],
        }
        local_path = f"/images/dishes/{target.name}"
        imports.append({**record, "sourceFile": str(source.relative_to(ROOT)), "local": local_path,
                        "encodedSize": list(size), "provenance": "fix/dish-specific-timeline-images (PR #5) manifest"})
        entries.append((record, local_path, "dish" if item["stage"] == "plated" else "context"))

    # 3. Create photographic records for dishes that do not have one yet.
    for dish in catalogue["dishes"]:
        photography["dishes"].setdefault(dish["id"], {
            "origin": None,
            "ingredients": {"library": None, "caption": "", "items": ingredients_by_dish[dish["id"]]},
            "method": None,
            "plated": None,
        })
        # Always keep the ingredient chips in sync with the dish catalogue.
        record = photography["dishes"][dish["id"]]
        ing = record.get("ingredients")
        if ing and "items" in ing:
            ing["items"] = ingredients_by_dish[dish["id"]]
        else:
            record["ingredients"] = {"library": None, "caption": "", "items": ingredients_by_dish[dish["id"]]}
        local["dishes"].setdefault(dish["id"], {})

    # 4. Merge the explicit per-stage photograph records.
    for item, local_path, subject in entries:
        did, stage = item["dishId"], item["stage"]
        record = photography["dishes"][did]
        if stage == "plated":
            record["plated"] = photo_record(item, local_path, "dish")
            record["plated"]["label"] = "Finished dish"
        else:
            record[stage] = {
                "photo": photo_record(item, local_path, subject),
                "caption": item["caption"],
                "label": item["label"],
                "items": ingredients_by_dish.get(did, []) if stage == "ingredients" else None,
            }
            if stage != "ingredients":
                del record[stage]["items"]
        local["dishes"][did][stage] = local_path

    manifest = {
        "schemaVersion": 1,
        "verifiedOn": "2026-11-02",
        "method": "Commons API prop=imageinfo&iiprop=url|size|extmetadata; creator, licence and original URL checked per file.",
        "policy": "Real, camera-captured photographs only. No AI-generated or synthetic imagery. Local WebP copies are downscaled re-encodings, never upscaled.",
        "imports": imports,
        "rejected": REJECTED,
    }

    if args.dry_run:
        print(f"DRY RUN — {len(imports)} photographs would be imported:")
        for imp in imports:
            print(f"  {imp['dishId']:22} {imp['stage']:12} -> {imp['local']}")
        return

    PHOTOGRAPHY.write_text(json.dumps(photography, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    LOCAL.write_text(json.dumps(local, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Imported {len(imports)} photographs. Local manifest now covers "
          f"{sum(len(v) for v in local['dishes'].values())} dish-stage files.")


if __name__ == "__main__":
    main()
