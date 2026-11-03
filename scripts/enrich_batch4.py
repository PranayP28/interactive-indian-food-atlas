import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOGRAPHY_PATH = ROOT / "src" / "data" / "photography.json"
VERIFIED_PATH = ROOT / "scratch_batch4_verified.json"

photography = json.loads(PHOTOGRAPHY_PATH.read_text(encoding="utf-8"))
verified = json.loads(VERIFIED_PATH.read_text(encoding="utf-8"))
dishes = photography.setdefault("dishes", {})

STAGE_LABELS = {
    "origin": "Regional context",
    "ingredients": "Ingredient reference",
    "method": "Preparation technique",
    "plated": "Finished dish",
}

updated_count = 0

for item in verified:
    dish_id = item["dishId"]
    stage = item["stage"]
    if dish_id not in dishes:
        dishes[dish_id] = {
            "origin": None,
            "ingredients": None,
            "method": None,
            "plated": None,
        }
    
    stage_data = {
        "src": item["src"],
        "subject": "context" if stage == "origin" else "dish",
        "title": item["title"],
        "creator": item["creator"],
        "licence": item["licence"],
        "licenceUrl": item["licenceUrl"],
        "sourceUrl": item["sourceUrl"],
        "alt": item["alt"],
        "caption": item["caption"],
        "fallback": None,
        "width": item["width"],
        "height": item["height"]
    }
    
    if stage == "origin":
        dishes[dish_id]["origin"] = {
            "photo": stage_data,
            "caption": item["caption"],
            "label": "Regional context"
        }
    elif stage in ("ingredients", "method"):
        dishes[dish_id][stage] = {
            "photo": stage_data,
            "caption": item["caption"],
            "label": STAGE_LABELS[stage]
        }
    elif stage == "plated":
        dishes[dish_id]["plated"] = stage_data
        
    updated_count += 1
    print(f"Updated {dish_id} -> {stage} ({item['title']})")

PHOTOGRAPHY_PATH.write_text(json.dumps(photography, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"\nDone: {updated_count} stages successfully merged into src/data/photography.json")
