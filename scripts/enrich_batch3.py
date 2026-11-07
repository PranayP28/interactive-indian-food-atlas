#!/usr/bin/env python3
"""Enrich Batch 3 dishes with verified open-source Wikimedia Commons stage photographs."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOGRAPHY = ROOT / "src/data/photography.json"

updates = {
    "pakhala": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Jagannath_Temple%2C_Puri_04.jpg",
                "subject": "context",
                "title": "Jagannath Temple, Puri",
                "creator": "Bernard Gagnon",
                "licence": "CC BY-SA 3.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/3.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Jagannath_Temple,_Puri_04.jpg",
                "alt": "Jagannath Temple in Puri, Odisha",
                "caption": "Jagannath Temple, Puri — spiritual center where fermented Dahi Pakhala is offered as sacred Mahaprasad.",
                "fallback": None,
                "width": 5184,
                "height": 3456
            },
            "caption": "Jagannath Temple, Puri — spiritual center where fermented Dahi Pakhala is offered as sacred Mahaprasad.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Water_rice_with_curd_%28Dahi_pakhala%29.jpg",
                "subject": "context",
                "title": "Water rice with curd (Dahi pakhala)",
                "creator": "Somya.prity",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Water_rice_with_curd_(Dahi_pakhala).jpg",
                "alt": "Cooked rice submerged in water and curd",
                "caption": "Cooked parboiled rice cooling in clean water with fresh curd, ginger, and green chillies.",
                "fallback": None,
                "width": 3000,
                "height": 4000
            },
            "caption": "Cooked parboiled rice cooling in clean water with fresh curd, ginger, and green chillies.",
            "label": "Ingredient reference",
            "items": ["Cooked parboiled rice", "Water", "Curd (dahi)", "Green chillies", "Ginger", "Curry leaves", "Mustard seeds"]
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Dahi_Pakhala_for_Pakhala_Dibasa.jpg",
                "subject": "context",
                "title": "Dahi Pakhala for Pakhala Dibasa",
                "creator": "Sangram Keshari Senapati",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dahi_Pakhala_for_Pakhala_Dibasa.jpg",
                "alt": "Dahi Pakhala being tempered with mustard seeds and curry leaves",
                "caption": "Chhunka (tempering) hot mustard seeds and curry leaves poured directly over the cold fermented water rice.",
                "fallback": None,
                "width": 6000,
                "height": 4000
            },
            "caption": "Chhunka (tempering) hot mustard seeds and curry leaves poured directly over the cold fermented water rice.",
            "label": "Preparation technique"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/9/95/Pakhala_bhat.jpg",
            "subject": "dish",
            "title": "Pakhala bhat",
            "creator": "Subhransu",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pakhala_bhat.jpg",
            "alt": "Odia Pakhala platter with fried fish, badi chura, and roasted vegetables",
            "caption": "Traditional Odia Pakhala platter served in a brass bowl with badi chura, saga bhaja, and fried fish.",
            "fallback": None,
            "width": 5472,
            "height": 3648
        }
    },
    "dal-bafla": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/f/fd/River_Narmada_from_Maheshwar_Fort.jpg",
                "subject": "context",
                "title": "River Narmada from Maheshwar Fort",
                "creator": "Sumit Surai",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:River_Narmada_from_Maheshwar_Fort.jpg",
                "alt": "Maheshwar Fort on the sacred Narmada river in Madhya Pradesh",
                "caption": "Maheshwar on the Narmada River, Malwa — historic heartland of Madhya Pradesh where bafla is the community feast centerpiece.",
                "fallback": None,
                "width": 3000,
                "height": 1817
            },
            "caption": "Maheshwar on the Narmada River, Malwa — historic heartland of Madhya Pradesh where bafla is the community feast centerpiece.",
            "label": "Regional context"
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Daal_Bafla_in_Indore.jpg",
                "subject": "context",
                "title": "Daal Bafla in Indore",
                "creator": "Brihaspati",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Daal_Bafla_in_Indore.jpg",
                "alt": "Bafla dough rounds boiling and roasting over charcoal in Indore",
                "caption": "Bafla dough balls poached in boiling water then roasted on wire grates over embers until golden and crusty.",
                "fallback": None,
                "width": 3024,
                "height": 3781
            },
            "caption": "Bafla dough balls poached in boiling water then roasted on wire grates over embers until golden and crusty.",
            "label": "Preparation technique"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Daal_Bafla.jpg",
            "subject": "dish",
            "title": "Daal Bafla",
            "creator": "Sumit Surai",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Daal_Bafla.jpg",
            "alt": "Daal Bafla served with tuvar dal, coriander chutney, and laddu",
            "caption": "Malwa Daal Bafla: boiled and roasted wheat bafla drenched in ghee, served with spicy tuvar dal and churma.",
            "fallback": None,
            "width": 5440,
            "height": 3544
        }
    },
    "laal-maas": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Chittorgarh_Fort%2C_Chittor%2C_Rajasthan.jpg",
                "subject": "context",
                "title": "Chittorgarh Fort, Chittor, Rajasthan",
                "creator": "Awara05",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chittorgarh_Fort,_Chittor,_Rajasthan.jpg",
                "alt": "Chittorgarh Fort standing atop a hill in Mewar, Rajasthan",
                "caption": "Chittorgarh Fort, Mewar — royal citadel where Rajput hunting camps developed the wood-smoked game meat dish of Laal Maas.",
                "fallback": None,
                "width": 3850,
                "height": 2048
            },
            "caption": "Chittorgarh Fort, Mewar — royal citadel where Rajput hunting camps developed the wood-smoked game meat dish of Laal Maas.",
            "label": "Regional context"
        },
        "method": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/8/83/Rajasthani_Lal_Maas.jpg",
                "subject": "context",
                "title": "Rajasthani Lal Maas",
                "creator": "Raghvendrarrathore",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Rajasthani_Lal_Maas.jpg",
                "alt": "Braising goat meat with red Mathania chilli paste in a kadai",
                "caption": "Slow-braising mutton in mustard oil and garlic with a rich paste of stone-ground dried Mathania chillies.",
                "fallback": None,
                "width": 960,
                "height": 720
            },
            "caption": "Slow-braising mutton in mustard oil and garlic with a rich paste of stone-ground dried Mathania chillies.",
            "label": "Preparation technique"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/8/84/Lal_Maas.jpg",
            "subject": "dish",
            "title": "Lal Maas",
            "creator": "Aakash Singh Chauhan",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Lal_Maas.jpg",
            "alt": "Fiery red bowl of Rajasthani Laal Maas",
            "caption": "Authentic Rajasthani Laal Maas: tender bone-in goat meat in a pungent, fiery Mathania chilli and garlic gravy.",
            "fallback": None,
            "width": 640,
            "height": 640
        }
    },
    "qubani-ka-meetha": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/1/12/Golconda_Fort%2C_Hyderabad_%28Oct_2025%29_-_3.jpg",
                "subject": "context",
                "title": "Golconda Fort, Hyderabad",
                "creator": "Kuldeepburjbhalaike",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Golconda_Fort,_Hyderabad_(Oct_2025)_-_3.jpg",
                "alt": "Golconda Fort battlements and stone architecture in Hyderabad",
                "caption": "Golconda Fort, Hyderabad — historic citadel of the Qutb Shahi and Asaf Jahi dynasties where Persian dried-fruit confectionary took root.",
                "fallback": None,
                "width": 3000,
                "height": 4000
            },
            "caption": "Golconda Fort, Hyderabad — historic citadel of the Qutb Shahi and Asaf Jahi dynasties where Persian dried-fruit confectionary took root.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Khobani_Ka_Meetha.JPG",
            "subject": "dish",
            "title": "Khobani Ka Meetha",
            "creator": "Miansari66",
            "licence": "CC0 1.0",
            "licenceUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Khobani_Ka_Meetha.JPG",
            "alt": "Stewed apricot compote dessert with crushed kernels",
            "caption": "Hyderabadi Qubani ka Meetha: slow-stewed dried apricots in sugar syrup, finished with cracked apricot kernels (badam).",
            "fallback": None,
            "width": 2816,
            "height": 2112
        }
    },
    "silao-khaja": {
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/3/39/Khaja_cakes_%2826711978840%29.jpg",
                "subject": "context",
                "title": "Khaja cakes",
                "creator": "juggadery",
                "licence": "CC BY-SA 2.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/2.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Khaja_cakes_(26711978840).jpg",
                "alt": "Flaky wheat dough pastry layers before sugar coating",
                "caption": "Delicate puff-pastry layers rolled from refined wheat flour and ghee, ready for deep-frying.",
                "fallback": None,
                "width": 1024,
                "height": 768
            },
            "caption": "Delicate puff-pastry layers rolled from refined wheat flour and ghee, ready for deep-frying.",
            "label": "Ingredient reference",
            "items": ["Refined wheat flour (maida)", "Ghee", "Sugar syrup", "Cardamom", "Water"]
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/9/97/Khaja_of_Silao.jpg",
            "subject": "dish",
            "title": "Khaja of Silao",
            "creator": "Odantapuribs",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Khaja_of_Silao.jpg",
            "alt": "Golden multi-layered crisp Silao Khaja from Nalanda, Bihar",
            "caption": "GI-tagged Silao Khaja from Nalanda, Bihar — hundreds of paper-thin, crisp fried layers glazed with sugar syrup.",
            "fallback": None,
            "width": 3456,
            "height": 4608
        }
    },
    "chak-hao-kheer": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/2/29/Loktak_Lake_Manipur_01.jpg",
                "subject": "context",
                "title": "Loktak Lake Manipur 01",
                "creator": "Sharada Prasad CS",
                "licence": "CC BY 2.0",
                "licenceUrl": "https://creativecommons.org/licenses/by/2.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Loktak_Lake_Manipur_01.jpg",
                "alt": "Phumdis floating on the waters of Loktak Lake in Manipur",
                "caption": "Loktak Lake, Manipur — fertile valley landscape where indigenous black glutinous rice (Chak-Hao) has been cultivated for centuries.",
                "fallback": None,
                "width": 2592,
                "height": 1944
            },
            "caption": "Loktak Lake, Manipur — fertile valley landscape where indigenous black glutinous rice (Chak-Hao) has been cultivated for centuries.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Chahao_kheer.jpg",
            "subject": "dish",
            "title": "Chahao kheer",
            "creator": "BengaliHindu",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Chahao_kheer.jpg",
            "alt": "Deep purple Chak-Hao black rice kheer served in a traditional bowl",
            "caption": "GI-tagged Manipuri Chak-Hao Kheer: scented black aromatic rice slow-simmered in whole milk, turning rich royal purple.",
            "fallback": None,
            "width": 3264,
            "height": 1836
        }
    },
    "apong": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/6/61/Ziro_valley_of_Aruncahl_in_summer_season.jpg",
                "subject": "context",
                "title": "Ziro valley of Arunachal in summer season",
                "creator": "Arunachal2007",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ziro_valley_of_Aruncahl_in_summer_season.jpg",
                "alt": "Terraced paddy fields in the green Ziro Valley, Arunachal Pradesh",
                "caption": "Ziro Valley, Arunachal Pradesh — homeland of the Apatani tribe where rice cultivation and traditional home brewing are entwined.",
                "fallback": None,
                "width": 2048,
                "height": 1350
            },
            "caption": "Ziro Valley, Arunachal Pradesh — homeland of the Apatani tribe where rice cultivation and traditional home brewing are entwined.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Apong_-_Rice_beer_of_Assam_In_A_Traditional_Pot.jpg",
            "subject": "dish",
            "title": "Apong - Rice beer of Assam In A Traditional Pot",
            "creator": "Nadeem.gaikwad",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Apong_-_Rice_beer_of_Assam_In_A_Traditional_Pot.jpg",
            "alt": "Fermented rice beer served in traditional earthen and bamboo containers",
            "caption": "Apong: indigenous fermented hill rice beverage prepared with wild medicinal starter cakes (eeppoh).",
            "fallback": None,
            "width": 4608,
            "height": 3456
        }
    },
    "gundruk-soup": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Peaks_of_the_Kanchenjunga_as_seen_from_the_West_Sikkim_district_of_Sikkim.jpg",
                "subject": "context",
                "title": "Peaks of the Kanchenjunga as seen from West Sikkim",
                "creator": "Billjones94",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Peaks_of_the_Kanchenjunga_as_seen_from_the_West_Sikkim_district_of_Sikkim.jpg",
                "alt": "Snow-covered Kanchenjunga peaks rising above pine valleys in West Sikkim",
                "caption": "Kanchenjunga mountain range, Sikkim — Himalayan highlands where preserving green vegetables by lactic acid fermentation is vital.",
                "fallback": None,
                "width": 4608,
                "height": 2128
            },
            "caption": "Kanchenjunga mountain range, Sikkim — Himalayan highlands where preserving green vegetables by lactic acid fermentation is vital.",
            "label": "Regional context"
        },
        "ingredients": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/4/41/Gundruk_1.jpg",
                "subject": "context",
                "title": "Gundruk",
                "creator": "Gaurav Dhwaj Khadka",
                "licence": "CC BY-SA 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Gundruk_1.jpg",
                "alt": "Sun-dried fermented mustard and radish leaves",
                "caption": "Gundruk — leafy mustard and radish greens wilted, earthen-pot fermented, and sun-dried for the mountain winter.",
                "fallback": None,
                "width": 3024,
                "height": 4032
            },
            "caption": "Gundruk — leafy mustard and radish greens wilted, earthen-pot fermented, and sun-dried for the mountain winter.",
            "label": "Ingredient reference",
            "items": ["Fermented dried gundruk leaves", "Tomatoes", "Garlic", "Onions", "Mustard oil", "Green chillies"]
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/1/11/Gundruk_soup_at_Nepal House in Baltimore.jpg",
            "subject": "dish",
            "title": "Gundruk soup at Nepal House in Baltimore",
            "creator": "Ser Amantio di Nicolao",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Gundruk_soup_at_Nepal_House_in_Baltimore.jpg",
            "alt": "Steaming bowl of dark earthy Himalayan gundruk soup",
            "caption": "Warm, tangy Sikkimese Gundruk soup tempered with garlic, mustard oil, and fresh mountain chillies.",
            "fallback": None,
            "width": 8160,
            "height": 6120
        }
    },
    "singori": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/4/48/1_Almora_Uttarakhand_India.jpg",
                "subject": "context",
                "title": "Almora, Uttarakhand",
                "creator": "Travelling Slacker from Mumbai, India",
                "licence": "CC BY 2.0",
                "licenceUrl": "https://creativecommons.org/licenses/by/2.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:1_Almora_Uttarakhand_India.jpg",
                "alt": "Almora hillside town overlooking snowcapped Kumaon Himalayas",
                "caption": "Almora town, Kumaon — historical hill station where Kumaoni halwais invented both Bal Mithai and leaf-wrapped Singori.",
                "fallback": None,
                "width": 1133,
                "height": 750
            },
            "caption": "Almora town, Kumaon — historical hill station where Kumaoni halwais invented both Bal Mithai and leaf-wrapped Singori.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Singori.jpg",
            "subject": "dish",
            "title": "Singori",
            "creator": "Vinaysharmahbd",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Singori.jpg",
            "alt": "Singori sweet cones wrapped in maalu leaf",
            "caption": "Kumaoni Singori: caramelized khoa (mawa) and coconut wrapped in fresh fragrant maalu (Bauhinia vahlii) leaves.",
            "fallback": None,
            "width": 4032,
            "height": 3024
        }
    },
    "bamboo-shoot-pork": {
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Pork_and_bamboo_shoot_curry_%282560159109%29.jpg",
            "subject": "dish",
            "title": "Pork and bamboo shoot curry",
            "creator": "pelican from Tokyo, Japan",
            "licence": "CC BY-SA 2.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/2.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pork_and_bamboo_shoot_curry_(2560159109).jpg",
            "alt": "Tender pork curry cooked with bamboo shoots",
            "caption": "Tribal-style slow-cooked pork curry prepared with fermented bamboo shoots and fiery bird's eye chillies.",
            "fallback": None,
            "width": 3008,
            "height": 2000
        }
    },
    "awan-bangwi": {
        "origin": {
            "photo": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/d/db/Right_Facade_of_Ujjayanta_Palace%2C_Agartala%2C_Tripura_06.JPG",
                "subject": "context",
                "title": "Right Facade of Ujjayanta Palace, Agartala, Tripura",
                "creator": "Kingshuk Mondal",
                "licence": "CC BY 4.0",
                "licenceUrl": "https://creativecommons.org/licenses/by/4.0",
                "sourceUrl": "https://commons.wikimedia.org/wiki/File:Right_Facade_of_Ujjayanta_Palace,_Agartala,_Tripura_06.JPG",
                "alt": "Ujjayanta Palace neoclassical royal facade in Agartala, Tripura",
                "caption": "Ujjayanta Palace in Agartala — royal heritage center of Tripura where indigenous Tripuri culinary arts are preserved.",
                "fallback": None,
                "width": 6000,
                "height": 4000
            },
            "caption": "Ujjayanta Palace in Agartala — royal heritage center of Tripura where indigenous Tripuri culinary arts are preserved.",
            "label": "Regional context"
        },
        "plated": {
            "src": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Awang_Bangwi.jpg",
            "subject": "dish",
            "title": "Awang Bangwi",
            "creator": "Tirengma",
            "licence": "CC BY-SA 4.0",
            "licenceUrl": "https://creativecommons.org/licenses/by-sa/4.0",
            "sourceUrl": "https://commons.wikimedia.org/wiki/File:Awang_Bangwi.jpg",
            "alt": "Awan Bangwi sticky rice cone wrapped in lairu leaves",
            "caption": "Tripuri Awan Bangwi: fragrant sticky guria rice mixed with cashews, raisins, and pork, steamed in woven lairu leaf cones.",
            "fallback": None,
            "width": 552,
            "height": 475
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
    print(f"Successfully applied Batch 3 updates for {len(updates)} dishes to photography.json")

if __name__ == "__main__":
    main()
