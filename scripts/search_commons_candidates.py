import urllib.parse
import urllib.request
import json
import time

API = "https://commons.wikimedia.org/w/api.php"
HEADERS = {
    "User-Agent": "IndianFoodAtlasBot/1.0 (authentic-food-preservation@indianfoodatlas.org; pair-programming; CC-BY-SA)",
    "Accept": "application/json",
}

DISHE_TERMS = {
    "bhutte-ka-kees": ["Bhutte Ka Kees", "Bhutte ka kis", "Bhutte kees", "Indori bhutta"],
    "bajra-khichdi": ["Bajra khichdi", "Bajra khichri", "Pearl millet khichdi"],
    "himachali-dham": ["Himachali Dham", "Kangra Dham", "Himachal Dham", "Dham food"],
    "chana-madra": ["Chana Madra", "Himachali Madra", "Kabuli chana madra"],
    "bafauri": ["Bafauri", "Chana dal bafauri"],
    "fara": ["Fara dish", "Phara rice", "Chhattisgarhi fara", "Rice fara"],
    "kafuli": ["Kafuli", "Kafli", "Pahari kafuli"],
    "banarasi-kachori": ["Banarasi kachori", "Kachori sabzi Varanasi", "Banaras kachori"],
    "pittha": ["Pittha", "Bihari pitha", "Dal pitha"],
    "pondicherry-fish-curry": ["Puducherry fish curry", "Pondicherry curry", "Creole fish curry"],
    "koli-kari": ["Koli kari", "Puducherry chicken", "Pondicherry koli"],
    "zutho": ["Zutho", "Naga rice beer"],
    "ladakhi-skyu": ["Skyu", "Ladakhi skyu", "Sku dish"],
    "mizo-bai": ["Mizo Bai", "Bai dish Mizoram"],
    "vawksa-rep": ["Vawksa Rep", "Smoked pork Mizoram"],
    "galho": ["Galho", "Naga galho"],
    "pumaloi": ["Pumaloi", "Khasi steamed rice"],
    "mui-borok": ["Mui Borok", "Tripura fish berma"],
    "andaman-coconut-prawn": ["Andaman prawn curry", "Coconut prawn curry India"],
    "island-crab-masala": ["Crab masala India", "Mud crab curry"],
    # Also let's search partial dishes that need method or ingredients:
    "dhokla": ["Dhokla preparation", "Dhokla batter", "Khaman dhokla steaming"],
    "thekua": ["Thekua making", "Thekua preparation", "Thekua wooden mould"],
    "rogan-josh": ["Rogan josh cooking", "Rogan josh preparation", "Ratan jot"],
    "bebinca": ["Bebinca baking", "Bebinca layers", "Bebinca preparation"],
    "chhena-poda": ["Chhena poda baking", "Chhena poda preparation", "Chhena poda making"],
    "goan-fish-curry": ["Goan fish curry preparation", "Goan fish curry cooking"],
    "siddu": ["Siddu preparation", "Siddu steaming", "Siddu dough"],
}

def search_commons(query: str):
    params = {
        "action": "query",
        "format": "json",
        "formatversion": "2",
        "generator": "search",
        "gsrsearch": f"filetype:bitmap {query}",
        "gsrnamespace": "6",
        "gsrlimit": "5",
        "prop": "imageinfo",
        "iiprop": "url|size|extmetadata",
        "iiurlwidth": "1280",
    }
    url = f"{API}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        pages = data.get("query", {}).get("pages", [])
        results = []
        for p in pages:
            info = (p.get("imageinfo") or [{}])[0]
            meta = info.get("extmetadata") or {}
            lic = meta.get("LicenseShortName", {}).get("value", "")
            title = p.get("title", "")
            w = info.get("width", 0)
            h = info.get("height", 0)
            desc = meta.get("ImageDescription", {}).get("value", "")
            results.append({
                "title": title,
                "licence": lic,
                "width": w,
                "height": h,
                "thumb": info.get("thumburl"),
                "url": info.get("url"),
                "desc": desc[:120] if desc else ""
            })
        return results
    except Exception as e:
        return []

def log_safe(s: str):
    import sys
    try:
        print(s)
    except UnicodeEncodeError:
        print(s.encode(sys.stdout.encoding or "utf-8", errors="replace").decode(sys.stdout.encoding or "utf-8"))

found = {}
for dish_id, queries in DISHE_TERMS.items():
    found[dish_id] = []
    for q in queries:
        res = search_commons(q)
        if res:
            found[dish_id].extend(res)
            time.sleep(0.3)
    # Deduplicate by title
    seen = set()
    dedup = []
    for r in found[dish_id]:
        if r["title"] not in seen:
            seen.add(r["title"])
            dedup.append(r)
    found[dish_id] = dedup
    if dedup:
        log_safe(f"[{dish_id}]: {len(dedup)} candidates found")
        for c in dedup[:2]:
            log_safe(f"   -> {c['title']} ({c['licence']}) {c['width']}x{c['height']}")
    else:
        log_safe(f"[{dish_id}]: 0 candidates")

with open("scratch_candidates.json", "w", encoding="utf-8") as f:
    json.dump(found, f, indent=2)
print("Done. Saved to scratch_candidates.json")
