import urllib.parse
import urllib.request
import json
import re

API = "https://commons.wikimedia.org/w/api.php"
HEADERS = {
    "User-Agent": "IndianFoodAtlasBot/1.0 (authentic-food-preservation@indianfoodatlas.org; pair-programming; CC-BY-SA)",
    "Accept": "application/json",
}

candidates = [
    # Chana Madra (HP) - finished dish
    {
        "dishId": "chana-madra",
        "stage": "plated",
        "file": "File:White Chana Madra.jpg",
        "caption": "Pahari Chana Madra: chickpeas simmered in spiced yogurt gravy with cardamom, cloves, and asafoetida.",
        "alt": "White Chana Madra in a ceramic bowl with spiced yogurt gravy",
        "title": "White Chana Madra"
    },
    # Chana Madra (HP) - regional context
    {
        "dishId": "chana-madra",
        "stage": "origin",
        "file": "File:Tea garden at Nagri in the Kangra Valley of Himachal Pradesh, India.jpg",
        "caption": "Kangra Valley, Himachal Pradesh — lush Himalayan foothills where traditional Pahari cooks (Botis) developed the yogurt-based Madra tradition.",
        "alt": "Tea garden landscape in Kangra Valley against Himalayan slopes",
        "title": "Kangra Valley, Himachal Pradesh"
    },
    # Himachali Dham (HP) - finished dish
    {
        "dishId": "himachali-dham",
        "stage": "plated",
        "file": "File:Mandi Dham 2.jpg",
        "caption": "Traditional Mandi Dham feast: steamed rice served alongside Madra, Sepu Badi, mah ki dal, and sweet meethe chawal.",
        "alt": "Traditional Dham feast platter from Mandi, Himachal Pradesh",
        "title": "Himachali Mandi Dham Feast"
    },
    # Himachali Dham (HP) - stage 3 preparation / traditional leaf plate
    {
        "dishId": "himachali-dham",
        "stage": "method",
        "file": "File:Stitched sal leaves used as traditional plate for Dham, Mandi district, Himachal Pradesh.jpg",
        "caption": "Pattal plate stitched from dry sal leaves (pattal / taur), traditional biodegradable dining serviceware used for serving community Dham.",
        "alt": "Stitched dry sal leaves forming a traditional biodegradable plate for Dham",
        "title": "Traditional Sal Leaf Pattal for Dham"
    },
    # Himachali Dham (HP) - stage 1 regional context
    {
        "dishId": "himachali-dham",
        "stage": "origin",
        "file": "File:Panchvaktar Temple, Mandi, Himachal Pradesh.jpg",
        "caption": "Historic Mandi town at the confluence of the Beas and Suketi rivers — cultural heart of the centuries-old royal Mandi Dham culinary tradition.",
        "alt": "Stone shikhara temple of Panchvaktar along the Beas river in Mandi",
        "title": "Historic Mandi on the Beas River, Himachal Pradesh"
    },
    # Goan Fish Curry (Goa) - stage 3 preparation underway
    {
        "dishId": "goan-fish-curry",
        "stage": "method",
        "file": "File:Goan fish curry preparation, underway.jpg",
        "caption": "Goan fish curry simmering: fresh fish steaks poaching in freshly ground coconut paste, Kashmiri red chilies, and tangy kokum extract.",
        "alt": "Fresh fish steaks cooking in rich orange coconut curry sauce in a pot",
        "title": "Simmering Goan Fish Curry"
    },
    # Bebinca (Goa) - stage 4 plated
    {
        "dishId": "bebinca",
        "stage": "plated",
        "file": "File:Bebinca, a delicacy and sweet from Goa.jpg",
        "caption": "Indo-Portuguese Bebinca: multi-layered coconut milk, egg yolk, flour, and clarified butter cake baked stage by stage.",
        "alt": "Layered brown Bebinca cake slice on a plate showing distinct stratified layers",
        "title": "Traditional Goan Bebinca"
    },
    # Thekua (Bihar) - stage 3 traditional carved wooden mould pressing
    {
        "dishId": "thekua",
        "stage": "method",
        "file": "File:KHAJUR.JPG",
        "caption": "Thekua sancha: whole wheat dough balls pressed onto hand-carved wooden moulds before deep frying in pure desi ghee during Chhath Puja.",
        "alt": "Pressed patterned wheat dough discs ready for frying",
        "title": "Thekua Dough Pressed on Wooden Mould"
    },
    # Ladakhi Skyu (Ladakh) - stage 1 regional context
    {
        "dishId": "ladakhi-skyu",
        "stage": "origin",
        "file": "File:Skyu 2010.jpg",
        "caption": "Skiu village in the rugged Markha Valley of Ladakh, where hand-rolled thumb-pressed Skyu pasta sustained pastoral families through freezing winters.",
        "alt": "High altitude arid stone village of Skiu nestled against Himalayan mountain slopes in Ladakh",
        "title": "Skiu Village, Markha Valley, Ladakh"
    },
    # Mizo Bai (Mizoram) - stage 4 plated
    {
        "dishId": "mizo-bai",
        "stage": "plated",
        "file": "File:Mizo food.jpg",
        "caption": "Authentic Mizo meal: steamed rice served with traditional Bai (vegetables boiled with sa-um fermented pork fat and Chingal bamboo shoot soda).",
        "alt": "Traditional Mizo food spread with rice, vegetable Bai soup, and boiled greens",
        "title": "Traditional Mizo Meal with Bai"
    },
    # Island Mud Crab Masala (A&N) - stage 4 plated
    {
        "dishId": "island-crab-masala",
        "stage": "plated",
        "file": "File:Crab Masala (Steamed).JPG",
        "caption": "Island Mud Crab Masala: whole freshly caught mangrove crab cooked in island spices, roasted coriander, black pepper, and fresh coconut.",
        "alt": "Whole crab cooked in thick spiced dark masala on a plate",
        "title": "Island Mud Crab Masala"
    },
    # Siddu (HP) - stage 3 preparation / steaming
    {
        "dishId": "siddu",
        "stage": "method",
        "file": "File:Kullvi Siddu (Himachal Pradesh).jpg",
        "caption": "Traditional Kullu Siddu preparation: fermented wheat dough parcels stuffed with crushed walnuts, poppy seeds, and roasted spices before steam cooking.",
        "alt": "Steamed stuffed Siddu bread resting on a cutting surface",
        "title": "Steamed Kullvi Siddu Preparation"
    }
]

def strip_html(v):
    return re.sub(r"<[^>]+>", "", v or "").strip()

def check_all():
    titles = [c["file"] for c in candidates]
    query = urllib.parse.urlencode({
        "action": "query",
        "format": "json",
        "formatversion": "2",
        "prop": "imageinfo",
        "iiprop": "url|size|extmetadata",
        "iiurlwidth": "1600",
        "titles": "|".join(titles),
    })
    req = urllib.request.Request(f"{API}?{query}", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode("utf-8"))
    
    pages = {p["title"]: p for p in data.get("query", {}).get("pages", [])}
    
    verified = []
    for c in candidates:
        p = pages.get(c["file"])
        if not p or p.get("missing"):
            print(f"MISSING: {c['file']}")
            continue
        info = p["imageinfo"][0]
        meta = info.get("extmetadata", {})
        lic = strip_html(meta.get("LicenseShortName", {}).get("value", ""))
        artist = strip_html(meta.get("Artist", {}).get("value", ""))
        lic_url = meta.get("LicenseUrl", {}).get("value", "")
        thumb = info.get("thumburl") or info.get("url")
        src = info.get("url")
        w = info.get("width", 0)
        h = info.get("height", 0)
        
        print(f"OK: {c['dishId']} ({c['stage']}) -> {c['file']} | {lic} | {w}x{h} | {artist}")
        verified.append({
            "dishId": c["dishId"],
            "stage": c["stage"],
            "title": c["title"],
            "caption": c["caption"],
            "alt": c["alt"],
            "file": c["file"],
            "licence": lic,
            "licenceUrl": lic_url,
            "creator": artist,
            "thumb": thumb,
            "src": src,
            "width": w,
            "height": h,
            "sourceUrl": f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(c['file'].replace(' ', '_'))}"
        })
    
    with open("scratch_batch4_verified.json", "w", encoding="utf-8") as f:
        json.dump(verified, f, indent=2)
    print(f"Successfully verified {len(verified)} candidates.")

if __name__ == "__main__":
    check_all()
