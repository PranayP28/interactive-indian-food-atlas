#!/usr/bin/env python3
"""Enrich Batch 2 dishes with verified Wikimedia Commons stage photographs."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOGRAPHY = ROOT / "src/data/photography.json"

updates = {
    "masala-dosa": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mysore_Palace_at_dusk_light.jpg",
                "subject": "context",
                "title": "Mysore Palace at dusk light",
                "creator": "Komalvermarjn",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mysore_Palace_at_dusk_light.jpg",
                "alt": "Mysore Palace illuminated at dusk in Karnataka",
                "caption": "Mysore Palace, Karnataka — royal capital where 20th-century chefs refined the crisp, red-chutney-lined Mysore masala dosa.",
                "fallback": None,
                "width": 4817,
                "height": 2090
            },
            "caption": "Mysore Palace, Karnataka — royal capital where 20th-century chefs refined the crisp, red-chutney-lined Mysore masala dosa.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Dosa_batter.jpg",
                "subject": "context",
                "title": "Dosa batter",
                "creator": "Pamri",
                "licence": "Public domain",
                "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dosa_batter.jpg",
                "alt": "Fermented rice and urad dal batter for dosa",
                "caption": "Naturally fermented batter of parboiled rice, dehusked black gram (urad dal), and fenugreek seeds.",
                "fallback": None,
                "width": 1419,
                "height": 1209
            },
            "caption": "Naturally fermented batter of parboiled rice, dehusked black gram (urad dal), and fenugreek seeds.",
            "label": "Ingredient reference",
            "items": ["Parboiled rice", "Urad dal", "Fenugreek seeds", "Potatoes", "Mustard seeds", "Curry leaves"]
        }
    },
    "hyderabadi-biryani": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/Night_View_of_Market%2C_Charminar%2C_Hyderabad.jpg",
                "subject": "context",
                "title": "Night View of Market, Charminar, Hyderabad",
                "creator": "Reema Jalihal",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Night_View_of_Market%2C_Charminar%2C_Hyderabad.jpg",
                "alt": "Bustling night market street in front of the illuminated Charminar, Hyderabad",
                "caption": "Charminar night market in old Hyderabad — historic epicenter of Deccan royal feast traditions.",
                "fallback": None,
                "width": 3021,
                "height": 3943
            },
            "caption": "Charminar night market in old Hyderabad — historic epicenter of Deccan royal feast traditions.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Basmati_Rice_India%2C_raw.jpg",
                "subject": "context",
                "title": "Basmati Rice India, raw",
                "creator": "cookbookman17",
                "licence": "CC BY 2.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/2.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Basmati_Rice_India%2C_raw.jpg",
                "alt": "Aged long-grain basmati rice grains",
                "caption": "Aged long-grain basmati rice, the foundation of fragrant Hyderabadi kachchi biryani.",
                "fallback": None,
                "width": 3872,
                "height": 2592
            },
            "caption": "Aged long-grain basmati rice, the foundation of fragrant Hyderabadi kachchi biryani.",
            "label": "Ingredient reference",
            "items": ["Basmati rice", "Mutton or goat meat", "Yoghurt", "Saffron", "Fried onions (birista)", "Shahi jeera"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Biryani_preparation.jpg",
                "subject": "context",
                "title": "Biryani preparation",
                "creator": "Claude Renault",
                "licence": "CC BY 2.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/2.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Biryani_preparation.jpg",
                "alt": "Biryani handi cooking over charcoal embers",
                "caption": "Layered marinated meat and par-cooked rice sealed in a heavy handi for slow dum cooking.",
                "fallback": None,
                "width": 700,
                "height": 468
            },
            "caption": "Layered marinated meat and par-cooked rice sealed in a heavy handi for slow dum cooking.",
            "label": "Preparation technique"
        }
    },
    "litti-chokha": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Temple_12_-_Nalanda_Mahavihara_%2817%29.jpg",
                "subject": "context",
                "title": "Temple 12 - Nalanda Mahavihara",
                "creator": "Sumitsurai",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Temple_12_-_Nalanda_Mahavihara_(17).jpg",
                "alt": "Ancient brick stupa ruins at Nalanda Mahavihara in Bihar",
                "caption": "Nalanda Mahavihara, Bihar — ancient Magadha heartland where roasted gram flour (sattu) has been an enduring staple.",
                "fallback": None,
                "width": 4323,
                "height": 3097
            },
            "caption": "Nalanda Mahavihara, Bihar — ancient Magadha heartland where roasted gram flour (sattu) has been an enduring staple.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/5/58/Litti_being_prepared.png",
                "subject": "context",
                "title": "Litti being prepared",
                "creator": "Imdgod",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Litti_being_prepared.png",
                "alt": "Stuffing spiced sattu into dough balls for litti",
                "caption": "Spiced sattu (roasted gram flour) with ajwain, kalonji and mustard oil stuffed into wheat dough balls.",
                "fallback": None,
                "width": 1587,
                "height": 2245
            },
            "caption": "Spiced sattu (roasted gram flour) with ajwain, kalonji and mustard oil stuffed into wheat dough balls.",
            "label": "Ingredient reference",
            "items": ["Sattu (roasted gram flour)", "Whole wheat flour", "Mustard oil", "Kalonji (nigella seeds)", "Ajwain", "Brinjal & tomatoes for chokha"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Litti_preparation_in_Kolkata%2C_India.jpg",
                "subject": "context",
                "title": "Litti preparation in Kolkata, India",
                "creator": "Salil Kumar Mukherjee",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Litti_preparation_in_Kolkata%2C_India.jpg",
                "alt": "Litti roasting over open coals",
                "caption": "Litti balls roasting over glowing charcoal embers until the crust blisters and hardens.",
                "fallback": None,
                "width": 6144,
                "height": 6883
            },
            "caption": "Litti balls roasting over glowing charcoal embers until the crust blisters and hardens.",
            "label": "Preparation technique"
        }
    },
    "butter-chicken": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg",
                "subject": "context",
                "title": "Lahori Gate, Red Fort, Delhi",
                "creator": "Ranjeet Chauhan",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lahori_Gate%2C_Red_Fort%2C_Delhi.jpg",
                "alt": "Lahori Gate of the Red Fort in Old Delhi",
                "caption": "Old Delhi near Daryaganj — where post-partition restaurateurs created the iconic butter chicken at Moti Mahal.",
                "fallback": None,
                "width": 2884,
                "height": 3419
            },
            "caption": "Old Delhi near Daryaganj — where post-partition restaurateurs created the iconic butter chicken at Moti Mahal.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/6/68/Dried_leaves_of_Fenugreek-Kasuri_Methi.jpg",
                "subject": "context",
                "title": "Dried leaves of Fenugreek-Kasuri Methi",
                "creator": "Thamizhpparithi Maari",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dried_leaves_of_Fenugreek-Kasuri_Methi.jpg",
                "alt": "Crushed dried fenugreek leaves kasuri methi",
                "caption": "Kasuri methi (sun-dried fenugreek leaves), the defining herbaceous finishing aromatic for makhani gravy.",
                "fallback": None,
                "width": 4208,
                "height": 2368
            },
            "caption": "Kasuri methi (sun-dried fenugreek leaves), the defining herbaceous finishing aromatic for makhani gravy.",
            "label": "Ingredient reference",
            "items": ["Tandoori chicken", "Tomatoes", "White butter (makkhan)", "Fresh dairy cream", "Kasuri methi", "Kashmiri degi mirch"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Tandoori_Chicken_with_oven.jpg",
                "subject": "context",
                "title": "Tandoori Chicken with oven",
                "creator": "Nitinmaul",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tandoori_Chicken_with_oven.jpg",
                "alt": "Tandoori chicken being roasted in clay tandoor oven",
                "caption": "Marinated chicken skewers roasting against the intense radiant heat of a charcoal-fired clay tandoor.",
                "fallback": None,
                "width": 3264,
                "height": 2448
            },
            "caption": "Marinated chicken skewers roasting against the intense radiant heat of a charcoal-fired clay tandoor.",
            "label": "Preparation technique"
        }
    },
    "makki-di-roti-sarson-saag": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/1/16/Mustard_field_near_Chandigarh.jpg",
                "subject": "context",
                "title": "Mustard field near Chandigarh",
                "creator": "UnpetitproleX",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mustard_field_near_Chandigarh.jpg",
                "alt": "Yellow mustard flower field in winter near Chandigarh, Punjab",
                "caption": "Mustard fields of Punjab in winter bloom — the seasonal origin of fresh sarson greens.",
                "fallback": None,
                "width": 3024,
                "height": 2268
            },
            "caption": "Mustard fields of Punjab in winter bloom — the seasonal origin of fresh sarson greens.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Makki_ki_Roti_02.jpg",
                "subject": "context",
                "title": "Makki ki Roti 02",
                "creator": "Rigourfigure",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Makki_ki_Roti_02.jpg",
                "alt": "Kneading yellow cornmeal makki flour dough into flat rounds",
                "caption": "Coarse stone-ground yellow maize flour (makki ka atta) kneaded with warm water into gluten-free dough.",
                "fallback": None,
                "width": 2992,
                "height": 2992
            },
            "caption": "Coarse stone-ground yellow maize flour (makki ka atta) kneaded with warm water into gluten-free dough.",
            "label": "Ingredient reference",
            "items": ["Fresh mustard leaves (sarson)", "Bathua greens", "Spinach", "Yellow maize flour (makki atta)", "White butter", "Jaggery"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Makki_ki_Roti_03.jpg",
                "subject": "context",
                "title": "Makki ki Roti 03",
                "creator": "Rigourfigure",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Makki_ki_Roti_03.jpg",
                "alt": "Makki ki roti baking on a flat iron tawa",
                "caption": "Hand-flattened makki roti slowly roasting on a hot iron tawa with butter until crisp and speckled.",
                "fallback": None,
                "width": 6000,
                "height": 8000
            },
            "caption": "Hand-flattened makki roti slowly roasting on a hot iron tawa with butter until crisp and speckled.",
            "label": "Preparation technique"
        }
    },
    "dal-baati-churma": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/3/31/Mehrangarh_Fort_2%2C_Jodhpur%2C_Rajasthan%2C_India.jpg",
                "subject": "context",
                "title": "Mehrangarh Fort 2, Jodhpur, Rajasthan, India",
                "creator": "Yann",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mehrangarh_Fort_2%2C_Jodhpur%2C_Rajasthan%2C_India.jpg",
                "alt": "Mehrangarh Fort on sandstone cliff overlooking Jodhpur",
                "caption": "Mehrangarh Fort, Jodhpur — historic Marwar fortress landscape where enduring desert foods like baati sustained warrior camps.",
                "fallback": None,
                "width": 3928,
                "height": 2508
            },
            "caption": "Mehrangarh Fort, Jodhpur — historic Marwar fortress landscape where enduring desert foods like baati sustained warrior camps.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/BAATI.JPG",
                "subject": "context",
                "title": "BAATI",
                "creator": "CIMSBSP",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:BAATI.JPG",
                "alt": "Dense rolled wheat flour baati balls before baking",
                "caption": "Dense whole wheat dough portioned into balls, kneaded with ghee and water for prolonged baking.",
                "fallback": None,
                "width": 5184,
                "height": 3456
            },
            "caption": "Dense whole wheat dough portioned into balls, kneaded with ghee and water for prolonged baking.",
            "label": "Ingredient reference",
            "items": ["Coarse whole wheat flour", "Pure cow ghee", "Panchmel dal (5 lentils)", "Jaggery for churma", "Fennel seeds"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/0/03/Baati_on_tandoor.jpg",
                "subject": "context",
                "title": "Baati on tandoor",
                "creator": "Sahil tiwarie",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Baati_on_tandoor.jpg",
                "alt": "Baati baking over hot tandoor coals",
                "caption": "Baati balls slow-baking over glowing coals until hard crust fissures, ready to be soaked in melted ghee.",
                "fallback": None,
                "width": 800,
                "height": 531
            },
            "caption": "Baati balls slow-baking over glowing coals until hard crust fissures, ready to be soaked in melted ghee.",
            "label": "Preparation technique"
        }
    },
    "hyderabadi-haleem": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Chowmahalla_Palace_01.jpg",
                "subject": "context",
                "title": "Chowmahalla Palace 01",
                "creator": "Bernard Gagnon",
                "licence": "CC BY-SA 3.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chowmahalla_Palace_01.jpg",
                "alt": "Chowmahalla Palace courtyard in Hyderabad",
                "caption": "Chowmahalla Palace, Hyderabad — royal seat where Arab and Persian diasporas introduced harisah to the Nizami court.",
                "fallback": None,
                "width": 4415,
                "height": 2943
            },
            "caption": "Chowmahalla Palace, Hyderabad — royal seat where Arab and Persian diasporas introduced harisah to the Nizami court.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/0/02/Haleem_garnish.jpg",
            "subject": "dish",
            "title": "Haleem garnish",
            "creator": "Halt123halt",
            "licence": "CC BY-SA 3.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Haleem_garnish.jpg",
            "alt": "Garnished bowl of Hyderabadi haleem",
            "caption": "Hyderabadi haleem garnished with crisp fried onions (birista), fresh mint, coriander, and lemon wedge.",
            "fallback": None,
            "width": 416,
            "height": 376
        }
    },
    "indori-poha": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/5/52/Rajwada_Palace%2C_Indore.jpg",
                "subject": "context",
                "title": "Rajwada Palace, Indore",
                "creator": "Bernard Gagnon",
                "licence": "CC BY-SA 3.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rajwada_Palace%2C_Indore.jpg",
                "alt": "Rajwada Palace Holkar dynasty historic facade in Indore",
                "caption": "Rajwada Palace, Indore — historic center around which Indore's distinctive morning poha stalls flourish.",
                "fallback": None,
                "width": 4779,
                "height": 3291
            },
            "caption": "Rajwada Palace, Indore — historic center around which Indore's distinctive morning poha stalls flourish.",
            "label": "Regional context"
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/8/83/Stall_at_Sarafa_Bajar.jpg",
                "subject": "context",
                "title": "Stall at Sarafa Bajar",
                "creator": "Arya Joshi",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Stall_at_Sarafa_Bajar.jpg",
                "alt": "Street food vendors preparing snacks at Sarafa Bazaar, Indore",
                "caption": "Street vendors at Indore food markets steaming poha in tiered boilers and tossing it with turmeric and jeeravan.",
                "fallback": None,
                "width": 3072,
                "height": 4080
            },
            "caption": "Street vendors at Indore food markets steaming poha in tiered boilers and tossing it with turmeric and jeeravan.",
            "label": "Preparation technique"
        }
    }
}

def main():
    p = json.loads(PHOTOGRAPHY.read_text(encoding="utf-8"))
    for did, stages in updates.items():
        if did not in p["dishes"]:
            print(f"Warning: {did} not in photography dishes")
            continue
        for st, val in stages.items():
            p["dishes"][did][st] = val

    PHOTOGRAPHY.write_text(json.dumps(p, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Applied updates for {len(updates)} dishes to photography.json")

if __name__ == "__main__":
    main()
