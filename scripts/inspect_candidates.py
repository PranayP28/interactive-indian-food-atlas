import json

data = json.load(open('scratch_candidates.json', encoding='utf-8'))
for dish in ['chana-madra', 'himachali-dham', 'ladakhi-skyu', 'goan-fish-curry', 'bebinca', 'mizo-bai', 'island-crab-masala']:
    print(f"=== {dish} ===")
    for item in data.get(dish, []):
        t = item.get("title")
        lic = item.get("licence")
        desc = item.get("desc", "").replace("\n", " ")[:90]
        print(f"  {t} | {lic} | {desc}")
