import json
import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "src" / "data" / "dishCatalog.json"
PHOTOGRAPHY_PATH = ROOT / "src" / "data" / "photography.json"
LOCAL_PATH = ROOT / "src" / "data" / "localPhotos.json"
CSV_PATH = ROOT / "FOOD-IMAGE-AVAILABILITY.csv"

catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
photography = json.loads(PHOTOGRAPHY_PATH.read_text(encoding="utf-8"))
local_photos = json.loads(LOCAL_PATH.read_text(encoding="utf-8"))

dishes_data = photography.get("dishes", {})
local_dishes = local_photos.get("dishes", {})

# Map dish_id -> (dish_name, state)
dish_info = {}
for group in catalog.get("groups", []):
    state = group.get("state", "Unknown")
    for dish in group.get("dishes", []):
        dish_info[dish["id"]] = (dish["name"], state)

STAGE_NAMES = [
    ("origin", "Stage 1 — Origin & History"),
    ("ingredients", "Stage 2 — Ingredients"),
    ("method", "Stage 3 — Recipe & Making"),
    ("plated", "Stage 4 — Modern Form & Serving")
]

rows = []

for dish in catalog.get("dishes", []):
    state = dish.get("state", "Unknown")
    d_id = dish["id"]
    d_name = dish["name"]
    d_record = dishes_data.get(d_id, {})
    d_local = local_dishes.get(d_id, {})
    
    for stage_key, stage_display in STAGE_NAMES:
        stage_entry = d_record.get(stage_key)
        photo = None
        if stage_entry:
            if isinstance(stage_entry, dict):
                if "photo" in stage_entry and stage_entry["photo"]:
                    photo = stage_entry["photo"]
                elif "src" in stage_entry:
                    photo = stage_entry
            
        local_rel = d_local.get(stage_key)
        local_exists = False
        if local_rel:
            p = ROOT / "public" / str(local_rel).lstrip("/")
            local_exists = p.exists()
        
        if photo and (photo.get("src") or local_exists):
            source = "Wikimedia Commons" if "wikimedia" in photo.get("sourceUrl", "").lower() else "Open Archive"
            creator = photo.get("creator") or "Unknown"
            licence = photo.get("licence") or "Unverified"
            img_url = photo.get("src") or photo.get("sourceUrl") or ""
            status = "Verified & Locally Hosted" if local_exists else "Verified (Remote CDN)"
        else:
            source = "Awaiting Verification"
            creator = "N/A"
            licence = "N/A"
            img_url = "UNRESOLVED_IMAGE"
            status = "Unresolved (Neutral Placeholder)"
        
        rows.append({
            "State or Union Territory": state,
            "Dish Name": d_name,
            "Dish ID": d_id,
            "Stage": stage_display,
            "Image Source": source,
            "Creator": creator,
            "Licence": licence,
            "Image URL": img_url,
            "Verification Status": status
        })

fieldnames = [
    "State or Union Territory",
    "Dish Name",
    "Dish ID",
    "Stage",
    "Image Source",
    "Creator",
    "Licence",
    "Image URL",
    "Verification Status"
]

with open(CSV_PATH, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print(f"Generated {CSV_PATH.name} with {len(rows)} stage records.")
