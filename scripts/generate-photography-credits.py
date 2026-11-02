#!/usr/bin/env python3
"""Regenerate PHOTOGRAPHY-CREDITS.md from the verified photography data.

Usage:  python3 scripts/generate-photography-credits.py

The single source of truth is src/data/photography.json; dish names and regions
are read from src/data/foodData.ts so the ledger always matches the application.
"""

from __future__ import annotations

import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "photography.json"
FOOD = ROOT / "src" / "data" / "foodData.ts"
ADDITIONAL = ROOT / "src" / "data" / "additionalDishes.ts"
OUT = ROOT / "PHOTOGRAPHY-CREDITS.md"


def load_dishes() -> dict[str, dict[str, str]]:
    source = FOOD.read_text()
    if ADDITIONAL.exists():
        source += "\n" + ADDITIONAL.read_text()
    dishes: dict[str, dict[str, str]] = {}
    for match in re.finditer(
        r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)"(?:,\s*alternateName:\s*"([^"]+)")?,\s*'
        r'state:\s*"([^"]+)"',
        source,
    ):
        dishes[match.group(1)] = {"id": match.group(1), "name": match.group(2), "state": match.group(4)}
    return dishes


def main() -> None:
    data = json.loads(DATA.read_text())
    dishes = load_dishes()
    library = data["library"]

    lines: list[str] = []
    add = lines.append

    add("# Food photography credits, licences and provenance")
    add("")
    add(
        "**Verified:** 2026-11-02 · **Imagery:** real, camera-captured photographs only · "
        "**AI-generated or synthetic images:** none"
    )
    add("")
    add(
        "The atlas presents four photographic acts per dish — I. origin & history, II. ingredients, "
        "III. recipe & making, IV. the finished dish. Every image is a photograph by a named photographer, "
        "published on Wikimedia Commons under a licence that permits reuse (CC0 / public domain / CC BY / "
        "CC BY-SA — no non-commercial and no no-derivatives terms). Creator, licence, licence URL and the "
        "source file page were checked on Commons for every file and are shown in the interface next to the "
        "photograph."
    )
    add("")
    add(
        "The site is **local-first**: WebP copies in `public/images/dishes/` are the primary source, and a "
        "Wikimedia Commons thumbnail (500 / 960 / 1280 / 1920 px) is the fallback when no local copy exists. "
        "Only a colour grade and a responsive crop are applied at display time. No pixels have been generated, "
        "added, removed or composited. Every local copy was re-encoded from the credited Commons original and "
        "is recorded, with its creator, licence and source page, in `src/data/photoImportManifest.json`."
    )
    add("")
    add(
        "Where no photograph could be verified as **both** unmistakably the dish and free to reuse, the dish "
        "shows an explicit *no verified photograph* state. Nothing is substituted — no AI image, no photograph "
        "of a different dish, no illustration."
    )
    add("")

    add("## Documentary context photographs (Stages I–III)")
    add("")
    add(
        "Shared, site-wide photographs of Indian kitchen craft — markets, grindstones, tandoors, steamers, "
        "service. They are labelled **documentary photograph** everywhere they appear and are never described "
        "as a photograph of a specific dish."
    )
    add("")
    add("| Key | Photograph | Creator | Licence | Source file |")
    add("|---|---|---|---|---|")
    for key, entry in library.items():
        add(
            f"| `{key}` | {entry['title']} | {entry['creator']} | "
            f"[{entry['licence']}]({entry['licenceUrl']}) | [Commons]({entry['sourceUrl']}) |"
        )
    add("")

    add("## Dish photographs (Stage IV — the finished dish)")
    add("")
    add("| Region | Dish | Photographer | Licence | Resolution | File hosted | Source file |")
    add("|---|---|---|---|---|---|---|")
    try:
        local_stages = json.loads((ROOT / "src/data/localPhotos.json").read_text())["dishes"]
        local_ids = set(local_stages)
    except Exception:
        local_stages = {}
        local_ids = set()
    photographed = 0
    missing: list[dict[str, str]] = []
    for dish_id, record in data["dishes"].items():
        dish = dishes.get(dish_id, {"name": dish_id, "state": ""})
        plated = record.get("plated")
        if not plated:
            missing.append(dish)
            continue
        photographed += 1
        resolution = (
            f"{plated['width']} × {plated['height']}" if plated.get("width") else "as published"
        )
        add(
            f"| {dish['state']} | {dish['name']} | {plated['creator']} | "
            f"[{plated['licence']}]({plated['licenceUrl']}) | {resolution} | "
            f"{'local' if dish_id in local_ids else 'Commons'} | "
            f"[Commons]({plated['sourceUrl']}) |"
        )
    add("")
    add(
        f"**{photographed} of {len(data['dishes'])} dishes carry a verified photograph of the finished dish.**"
    )
    add("")
    local_plated = sum(1 for did in local_stages if "plated" in local_stages[did])
    add(
        f"{local_plated} of those finished-dish photographs are mirrored into `public/images/dishes/` as "
        "`<dish>-stage-4.webp`; the remainder load from Commons until `npm run photos:fetch` is run "
        "against a machine with Wikimedia access. See `docs/PHOTO-ARCHIVE.md`."
    )
    add("")

    # Stage photographs chosen specifically for a dish (regional context,
    # ingredients, preparation technique) rather than a shared library image.
    add("## Dish-specific stage photographs (Stages I–III)")
    add("")
    add(
        "Each of these photographs is explicitly mapped to one dish and one stage, with its own caption and "
        "descriptive label (Regional context / Ingredient reference / Preparation technique). A shared library "
        "image never fills a stage."
    )
    add("")
    add("| Region | Dish | Stage | Label | Photographer | Licence | Source |")
    add("|---|---|---|---|---|---|---|")
    stage_rows = 0
    for dish_id, record in data["dishes"].items():
        for stage in ("origin", "ingredients", "method"):
            entry = record.get(stage) or {}
            photo = entry.get("photo")
            if not photo:
                continue
            dish = dishes.get(dish_id, {"name": dish_id, "state": ""})
            add(
                f"| {dish['state']} | {dish['name']} | {stage} | {entry.get('label', '')} | "
                f"{photo['creator']} | [{photo['licence']}]({photo['licenceUrl']}) | "
                f"[Commons]({photo['sourceUrl']}) |"
            )
            stage_rows += 1
    if stage_rows == 0:
        add("| — | — | — | — | — | — | — |")
    add("")

    add("## Dishes awaiting a verified photograph")
    add("")
    add(
        "These dishes show the explicit unavailable state until a source is confirmed for both dish identity "
        "and reuse rights."
    )
    add("")
    add("| Region | Dish | Status |")
    add("|---|---|---|")
    for dish in missing:
        add(
            f"| {dish['state']} | {dish['name']} | No published photograph verified as this exact dish under "
            "a reusable licence |"
        )
    add("")

    # Honest four-stage coverage statement, computed from the same JSON.
    stage_keys = ("origin", "ingredients", "method", "plated")
    assignments = 0
    local_assignments = 0
    for dish_id, record in data["dishes"].items():
        for stage in stage_keys:
            value = record.get(stage)
            explicit = bool(value) if stage == "plated" else bool(value and "photo" in value)
            if explicit:
                assignments += 1
                if dish_id in local_ids and stage in local_stages.get(dish_id, {}):
                    local_assignments += 1
    target = len(data["dishes"]) * 4

    add("## Four-stage coverage")
    add("")
    add(
        f"**{assignments} of {target}** stage photographs are verified and mapped; "
        f"**{local_assignments}** of those are self-hosted WebP files. The remaining "
        f"**{target - assignments}** stages are deliberately left as clearly labelled unresolved frames, "
        "because no genuine, dish-appropriate photograph with verified reuse rights has been found for them. "
        "They are never filled with a borrowed, generic or generated image."
    )
    add("")
    add(
        "Stage captions state exactly what each photograph shows. A region photograph does not prove a dish's "
        "origin; an ingredient photograph shows one component, not the whole recipe; a modern technique "
        "photograph is never presented as an ancient one."
    )
    add("")

    add("## Reuse obligations")
    add("")
    add(
        "- **CC BY / CC BY-SA:** retain the photographer credit, the licence name and links to both the licence "
        "and the source file. Share-alike adaptations must be distributed under the same licence; this ledger "
        "records that obligation with each file."
    )
    add("- **Modifications:** colour correction and cropping only.")
    add(
        "- Attribution travels with every image in the interface — each frame links to its source file and "
        "licence, and each dish carries a full photography-credits ledger."
    )
    add("")
    add("## Selection method")
    add("")
    add(
        "Photographs were reviewed visually before selection, not chosen from search rankings. Candidates were "
        "rejected when the dish identity was ambiguous (for example a photograph of a different regional "
        "preparation), when only a low-resolution thumbnail existed, or when the licence could not be verified. "
        "Several dishes in this atlas have no verified finished-dish photograph and are marked accordingly "
        "rather than illustrated."
    )
    add("")

    OUT.write_text("\n".join(lines))
    print(f"Wrote {OUT.relative_to(ROOT)} — {photographed} photographed, {len(missing)} awaiting a photograph")


if __name__ == "__main__":
    main()
