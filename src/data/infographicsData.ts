// ── DISH INFOGRAPHICS & UPLOADED IMAGE ARCHIVE ─────────────────────────────
// High-resolution infographics, historical recipe cards, and multi-era visual
// guides from the updated photographic catalog in /images_updated.

export interface DishInfographic {
  id: string;
  dishId: string;
  title: string;
  subtitle: string;
  era: string;
  image: string;
  isFullTimelinePoster?: boolean;
  stageNumber?: 1 | 2 | 3;
  ingredients?: string[];
}

export const DISH_INFOGRAPHICS: DishInfographic[] = [
  {
    "id": "info-1",
    "dishId": "ladakhi-skyu",
    "title": "Ladakhi Skyu — 1900s Hearth Stew",
    "subtitle": "Traditional Himalayan barley pasta and root vegetable stew",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_bright_infographic_poster_about_ladakhi_skyu_wit.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Whole wheat flour",
      "Mountain potatoes",
      "Turnips",
      "Wild mountain caraway",
      "Garlic",
      "Meat / Vegetable broth"
    ]
  },
  {
    "id": "info-2",
    "dishId": "pesarattu",
    "title": "Pesarattu — Origin (Birth of the food)",
    "subtitle": "Traditional Andhra unfermented whole green gram breakfast crepe paired with Allam Pachadi",
    "era": "Birth of the food",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-2-evolution",
    "dishId": "pesarattu",
    "title": "Pesarattu — Evolution of Food",
    "subtitle": "Shifts in grinding stones, iron griddles, wood stoves, toppings, and accompaniments",
    "era": "Evolution of Food",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-2-recipe",
    "dishId": "pesarattu",
    "title": "Pesarattu — Recipe",
    "subtitle": "10 key ingredients and 9 simple steps for authentic Andhra Pesarattu",
    "era": "Recipe",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "whole green gram (green moong)",
      "rice (optional, for extra crispness)",
      "ginger",
      "green chillies",
      "cumin seeds",
      "salt",
      "onion",
      "fresh coriander leaves",
      "cooking oil or ghee",
      "ginger chutney (Allam Pachadi) for serving"
    ]
  },
  {
    "id": "info-avakaya-origin",
    "dishId": "avakaya",
    "title": "Avakaya — Origin (Birth of the food)",
    "subtitle": "Traditional Andhra summer raw mango preservation in ceramic jaadis with mustard and gingelly oil",
    "era": "Birth of the food",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-avakaya-evolution",
    "dishId": "avakaya",
    "title": "Avakaya — Evolution of Food",
    "subtitle": "Shifts in tree harvesting, hand-grinding, ceramic bharanis, and regional variations",
    "era": "Evolution of Food",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-avakaya-recipe",
    "dishId": "avakaya",
    "title": "Avakaya — Recipe",
    "subtitle": "9 key ingredients and 11 simple steps for authentic Andhra Avakaya",
    "era": "Recipe",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "raw green sour mangoes",
      "mustard seeds (sun-dried, ground fresh)",
      "red chilli powder",
      "crystal salt (powdered)",
      "gingelly (sesame) oil",
      "garlic cloves",
      "fenugreek (methi) seeds",
      "black chickpeas (optional, in place of garlic)",
      "hot rice with dal and ghee for serving"
    ]
  },
  {
    "id": "info-3",
    "dishId": "pondicherry-fish-curry",
    "title": "Pondicherry Creole Fish Curry",
    "subtitle": "Franco-Tamil coastal culinary heritage and slow coconut-tamarind reduction",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_colorful_detailed_infographic_poster_for_pondi.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Seer fish",
      "Fresh coconut milk",
      "Tamarind",
      "Fenugreek",
      "Aniseed",
      "Vadouvan spices",
      "Curry leaves"
    ]
  },
  {
    "id": "info-4",
    "dishId": "gur-gur-cha-khambir",
    "title": "Gur Gur Cha — Present Day Recipe",
    "subtitle": "Traditional Ladakhi churned yak butter tea with khambir bread",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_colorful_infographic_poster_same_layout_as_the.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Tibetan brick tea",
      "Yak butter",
      "Himalayan rock salt",
      "Fermented sourdough flour",
      "Water"
    ]
  },
  {
    "id": "info-5",
    "dishId": "bal-mithai",
    "title": "Bal Mithai — Modern Pahadi Confection",
    "subtitle": "Kumaoni roasted khoa fudge coated with sugar white beads",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_in_a_modern_style_about_bal.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Hill-cow milk khoya",
      "Cane sugar",
      "Small sugar-coated beads (Khas-khas dana)",
      "Pure ghee"
    ]
  },
  {
    "id": "info-6",
    "dishId": "kashmiri-dum-aloo",
    "title": "Kashmiri Dum Aloo — Present Recipe",
    "subtitle": "Iconic baby potatoes simmered in curd, fennel and dry ginger",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_kashmiri_dum_aloo_prese.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Baby potatoes",
      "Kashmiri red chilli paste",
      "Whisked yoghurt",
      "Fennel seed powder",
      "Dry ginger powder (Sonth)",
      "Mustard oil"
    ]
  },
  {
    "id": "info-7",
    "dishId": "ladakhi-skyu",
    "title": "Ladakhi Skyu — 1800s Traditional Formulation",
    "subtitle": "Original high-altitude hearth stew with indigenous grains",
    "era": "1800s Traditional",
    "image": "/images_updated/a_detailed_infographic_poster_about_ladakhi_skyu.png",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Whole wheat flour",
      "Mountain potatoes",
      "Turnips",
      "Wild mountain caraway",
      "Garlic",
      "Meat / Vegetable broth"
    ]
  },
  {
    "id": "info-8",
    "dishId": "delhi-nihari",
    "title": "Old Delhi Nihari — 1900s Heritage Recipe",
    "subtitle": "Legendary slow-cooked overnight shank stew with potli aromatics",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_about_old_delhi_niha.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Mutton shank & bone marrow",
      "Wheat flour (Atta)",
      "Ghee",
      "Fried onions",
      "Ginger juliennes",
      "Potli spices",
      "Kewra water"
    ]
  },
  {
    "id": "info-9",
    "dishId": "rogan-josh",
    "title": "Rogan Josh — 1800s Style",
    "subtitle": "The Royal Kashmiri mutton curry slow-cooked with mawal and mustard oil",
    "era": "1800s Traditional",
    "image": "/images_updated/a_detailed_infographic_poster_about_rogan_josh_in.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Tender lamb cuts",
      "Kashmiri red chillies",
      "Fennel seed powder (Saunf)",
      "Dried ginger (Sonth)",
      "Ratan jot (Alkanet root)",
      "Mustard oil",
      "Asafoetida"
    ]
  },
  {
    "id": "info-10",
    "dishId": "rogan-josh",
    "title": "Rogan Josh — Contemporary Wazwan Recipe",
    "subtitle": "Modern presentation of the classic Kashmiri festive curry",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_poster_about_rogan_josh_pr.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Tender lamb cuts",
      "Kashmiri red chillies",
      "Fennel seed powder (Saunf)",
      "Dried ginger (Sonth)",
      "Ratan jot (Alkanet root)",
      "Mustard oil",
      "Asafoetida"
    ]
  },
  {
    "id": "info-11",
    "dishId": "shorshe-ilish",
    "title": "Shorshe Ilish — 1900s Heritage Recipe",
    "subtitle": "Hilsa steaks steamed in freshly ground yellow and black mustard paste",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_about_shorshe_ilish.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Hilsa fish (Ilish)",
      "Black and yellow mustard seeds",
      "Cold-pressed mustard oil",
      "Slit green chillies",
      "Turmeric powder"
    ]
  },
  {
    "id": "info-12",
    "dishId": "andaman-coconut-prawn",
    "title": "Andaman Coconut Prawn Curry — 1900s Style",
    "subtitle": "Fresh coastal island prawns cooked in fragrant freshly pressed coconut milk",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_andaman_coconut_p.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Fresh sea prawns",
      "Island coconut cream",
      "Mustard seeds",
      "Curry leaves",
      "Green chillies",
      "Turmeric"
    ]
  },
  {
    "id": "info-13",
    "dishId": "gur-gur-cha-khambir",
    "title": "Gur Gur Cha — 1900s Formulation",
    "subtitle": "Traditional hand-churned tea with brick tea, salt, and butter",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_for_gur_gur_cha_1.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Tibetan brick tea",
      "Yak butter",
      "Himalayan rock salt",
      "Fermented sourdough flour",
      "Water"
    ]
  },
  {
    "id": "info-15",
    "dishId": "kashmiri-dum-aloo",
    "title": "Kashmiri Dum Aloo — Traditional 1900s Method",
    "subtitle": "Deep-pricked baby potatoes slow-cooked in rich yogurt gravy",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_kashmiri_dum_aloo.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Baby potatoes",
      "Kashmiri red chilli paste",
      "Whisked yoghurt",
      "Fennel seed powder",
      "Dry ginger powder (Sonth)",
      "Mustard oil"
    ]
  },
  {
    "id": "info-16",
    "dishId": "shorshe-ilish",
    "title": "Shorshe Ilish — 1800s Riverine Technique",
    "subtitle": "Traditional preparation with mustard oil, green chillies and nigella seeds",
    "era": "1800s Traditional",
    "image": "/images_updated/a_detailed_infographic_poster_on_shorshe_ilish.png",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Hilsa fish (Ilish)",
      "Black and yellow mustard seeds",
      "Cold-pressed mustard oil",
      "Slit green chillies",
      "Turmeric powder"
    ]
  },
  {
    "id": "info-17",
    "dishId": "mishti-doi",
    "title": "Mishti Doi — Clay Pot Fermentation",
    "subtitle": "Caramelized reduced milk set in earthen pots to create natural sweetness",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_style_image_about_mishti_do.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Full-cream milk",
      "Date palm jaggery (Nolen gur)",
      "Active yoghurt culture",
      "Terracotta earthen pot"
    ]
  },
  {
    "id": "info-18",
    "dishId": "banarasi-kachori",
    "title": "Banarasi Kachori Sabzi — 2026 Style",
    "subtitle": "Heeng-spiced flaky kachori served with spicy potato-chickpea curry",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_style_image_of_banarasi_ka.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Whole wheat flour",
      "Spiced urad dal paste",
      "Baby potatoes",
      "Asafoetida (Hing)",
      "Fenugreek seeds",
      "Mustard oil"
    ]
  },
  {
    "id": "info-19",
    "dishId": "kafuli",
    "title": "Kafuli — 2026 Contemporary Pahadi Recipe",
    "subtitle": "Rich Uttarakhand wild spinach and fenugreek greens tempered with jakhiya",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_modern_infographic_poster_kafuli_2026_styl.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Mountain spinach",
      "Fenugreek leaves",
      "Rice flour paste",
      "Jakhiya seeds (Wild mustard)",
      "Mustard oil",
      "Garlic"
    ]
  },
  {
    "id": "info-20",
    "dishId": "galouti-kebab",
    "title": "Galouti Kebab — 2026 Modern Formulation",
    "subtitle": "Melt-in-mouth smoked mince patties with raw papaya and 160 potli spices",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_modern_recipe_infographic_a_high_quality_food_p.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Raw green papaya",
      "Potli masala (160 spices)",
      "Pure desi ghee",
      "Rose water",
      "Saffron"
    ]
  },
  {
    "id": "info-21",
    "dishId": "hyderabadi-biryani",
    "title": "Hyderabadi Dum Biryani — Origin (Birth of the food)",
    "subtitle": "Persian & Mughal dishes entering Deccan royal kitchens under Asaf Jahi rulers; sealed dum method",
    "era": "Birth of the food",
    "image": "/images_updated/a_polished_dark_themed_infographic_card_layout_fo.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-21-evolution",
    "dishId": "hyderabadi-biryani",
    "title": "Hyderabadi Dum Biryani — Evolution of Food",
    "subtitle": "Shifts in cooking method, handi vessels, fuel, marinating, meat, flavourings, and tenderising",
    "era": "Evolution of Food",
    "image": "/images_updated/a_polished_dark_themed_infographic_card_layout_fo.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-21-recipe",
    "dishId": "hyderabadi-biryani",
    "title": "Hyderabadi Dum Biryani — Recipe",
    "subtitle": "10 key ingredients and 8 simple steps for authentic kacchi dum biryani",
    "era": "Recipe",
    "image": "/images_updated/a_polished_dark_themed_infographic_card_layout_fo.png",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "basmati rice",
      "mutton or chicken",
      "curd",
      "fried onions",
      "ginger-garlic paste",
      "green chillies",
      "whole spices and garam masala",
      "mint and coriander",
      "saffron milk",
      "ghee"
    ]
  },
  {
    "id": "info-22",
    "dishId": "mui-borok",
    "title": "Mui Borok — 1900s Traditional Tripuri Recipe",
    "subtitle": "Indigenous berma fermented fish stew with bamboo shoots and local herbs",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_polished_infographic_poster_a_modern_mui_borok.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "River fish",
      "Berma (Fermented fish paste)",
      "Green chillies",
      "Garlic",
      "Wild coriander",
      "Lemon basil"
    ]
  },
  {
    "id": "info-23",
    "dishId": "gur-gur-cha-khambir",
    "title": "Gur Gur Cha — 1800s Ancient Hearth Recipe",
    "subtitle": "Original butter tea preparation for high-altitude Tibetan-Ladakhi winters",
    "era": "1800s Traditional",
    "image": "/images_updated/a_richly_styled_infographic_poster_about_gur_gur.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Tibetan brick tea",
      "Yak butter",
      "Himalayan rock salt",
      "Fermented sourdough flour",
      "Water"
    ]
  },
  {
    "id": "info-24",
    "dishId": "andaman-coconut-prawn",
    "title": "Andaman Coconut Prawn Curry — 1800s Traditional",
    "subtitle": "Early coastal tribal preparation with wild island spices and coconut milk",
    "era": "1800s Traditional",
    "image": "/images_updated/a_vibrant_detailed_infographic_in_warm_tropical_c.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Fresh sea prawns",
      "Island coconut cream",
      "Mustard seeds",
      "Curry leaves",
      "Green chillies",
      "Turmeric"
    ]
  },
  {
    "id": "info-25",
    "dishId": "delhi-chaat",
    "title": "Chandni Chowk Papdi Chaat — 1900s Style",
    "subtitle": "Crispy flour crisps layered with spiced potatoes, curd, and saunth chutney",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vibrant_infographic_poster_for_chandni_chowk_pa.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Crisp papdi wafers",
      "Boiled potatoes",
      "Whisked sweetened curd",
      "Tamarind chutney",
      "Mint-coriander chutney",
      "Chaat masala",
      "Pomegranate"
    ]
  },
  {
    "id": "info-26",
    "dishId": "island-crab-masala",
    "title": "Island Mud Crab Masala — 1800s Recipe",
    "subtitle": "Fresh mangrove crab roasted with freshly ground island peppercorn masala",
    "era": "1800s Traditional",
    "image": "/images_updated/a_vibrant_infographic_style_poster_for_island_mu.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Mangrove mud crabs",
      "Crushed black peppercorns",
      "Shallots",
      "Garlic",
      "Tamarind pulp",
      "Coconut oil"
    ]
  },
  {
    "id": "info-27",
    "dishId": "mishti-doi",
    "title": "Mishti Doi — 1900s Heritage Recipe",
    "subtitle": "Classic Kolkata sweet yogurt made with sugarcane jaggery and date palm",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_infographic_poster_about_mishti_doi_in_t.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Full-cream milk",
      "Date palm jaggery (Nolen gur)",
      "Active yoghurt culture",
      "Terracotta earthen pot"
    ]
  },
  {
    "id": "info-28",
    "dishId": "galouti-kebab",
    "title": "Galouti Kebab — 1800s Nawabi Darbar Origin",
    "subtitle": "The original tender smoked patties crafted for Nawab Asad-ud-Daula",
    "era": "1800s Traditional",
    "image": "/images_updated/a_vintage_sepia_aged_parchment_infographic_poster.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Raw green papaya",
      "Potli masala (160 spices)",
      "Pure desi ghee",
      "Rose water",
      "Saffron"
    ]
  },
  {
    "id": "info-29",
    "dishId": "banarasi-kachori",
    "title": "Banarasi Kachori Sabzi — 1900s Heritage Recipe",
    "subtitle": "Varanasi ghats breakfast with stone-ground dal filling and hing tadka",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_sepia_cream_infographic_poster_of_ban.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Whole wheat flour",
      "Spiced urad dal paste",
      "Baby potatoes",
      "Asafoetida (Hing)",
      "Fenugreek seeds",
      "Mustard oil"
    ]
  },
  {
    "id": "info-30",
    "dishId": "galouti-kebab",
    "title": "Galouti Kebab — 1900s Colonial Era Formulation",
    "subtitle": "Smoked dhungar technique and silver varq presentation in royal Lucknow",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_sepia_toned_illustrated_recipe_poster_w.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Raw green papaya",
      "Potli masala (160 spices)",
      "Pure desi ghee",
      "Rose water",
      "Saffron"
    ]
  },
  {
    "id": "info-31",
    "dishId": "bal-mithai",
    "title": "Bal Mithai — 1900s Almora Heritage Recipe",
    "subtitle": "Traditional brown roasted milk fudge roll covered in sweet white seeds",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_style_infographic_poster_about_bal_mitha.png",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": [
      "Hill-cow milk khoya",
      "Cane sugar",
      "Small sugar-coated beads (Khas-khas dana)",
      "Pure ghee"
    ]
  },
  {
    "id": "info-32",
    "dishId": "singju",
    "title": "Singju-Present Recipe",
    "subtitle": "Contemporary Manipuri Salad (Modern Version)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.15.34 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-33",
    "dishId": "singju",
    "title": "Singju-c.1900Recipe",
    "subtitle": "Traditional Manipuri Salad (Enhanced Version)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.15.49 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-34",
    "dishId": "singju",
    "title": "Singju — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Singju",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.36.24 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-35",
    "dishId": "singju",
    "title": "Singju — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Singju",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.38.15 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-36",
    "dishId": "singju",
    "title": "Singju — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Singju",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.40.15 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-37",
    "dishId": "gongura-mutton",
    "title": "Gongura Mutton",
    "subtitle": "Traditional Andhra spicy mutton curry with tangy sorrel leaves (Gongura)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.40.52 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Mutton",
      "Gongura leaves",
      "Guntur red chillies",
      "Onion",
      "Coriander seeds",
      "Garlic"
    ]
  },
  {
    "id": "info-38",
    "dishId": "gongura-mutton",
    "title": "Gongura Mutton — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Gongura Mutton",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.41.37 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Mutton",
      "Gongura leaves",
      "Guntur red chillies",
      "Onion",
      "Coriander seeds",
      "Garlic"
    ]
  },
  {
    "id": "info-39",
    "dishId": "gongura-mutton",
    "title": "Gongura Mutton — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Gongura Mutton",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.42.15 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Mutton",
      "Gongura leaves",
      "Guntur red chillies",
      "Onion",
      "Coriander seeds",
      "Garlic"
    ]
  },
  {
    "id": "info-40",
    "dishId": "thukpa",
    "title": "Thukpa — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Thukpa",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.43.05 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Handmade wheat noodles",
      "Mountain vegetables",
      "Yak/pork broth",
      "Ginger",
      "Garlic",
      "Sichuan pepper"
    ]
  },
  {
    "id": "info-41",
    "dishId": "dohneiiong",
    "title": "Dohneiion-c.1800 Recipe",
    "subtitle": "Early Manipuri Greens Stew (Traditional Version)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.44.17 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Pork",
      "Black sesame seeds (Neiiong)",
      "Garlic",
      "Ginger",
      "Mustard oil",
      "Green chillies"
    ]
  },
  {
    "id": "info-42",
    "dishId": "dohneiiong",
    "title": "Dohneiiong — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dohneiiong",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.45.14 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Pork",
      "Black sesame seeds (Neiiong)",
      "Garlic",
      "Ginger",
      "Mustard oil",
      "Green chillies"
    ]
  },
  {
    "id": "info-43",
    "dishId": "dohneiiong",
    "title": "Dohneiiong — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dohneiiong",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.45.58 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Pork",
      "Black sesame seeds (Neiiong)",
      "Garlic",
      "Ginger",
      "Mustard oil",
      "Green chillies"
    ]
  },
  {
    "id": "info-44",
    "dishId": "dohneiiong",
    "title": "Dohneiion -c.1900 Recipe",
    "subtitle": "Manipuri Greens Stew (Early 20th Century Version)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.46.07 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Pork",
      "Black sesame seeds (Neiiong)",
      "Garlic",
      "Ginger",
      "Mustard oil",
      "Green chillies"
    ]
  },
  {
    "id": "info-45",
    "dishId": "bamboo-shoot-pork",
    "title": "Bamboo Shoot Pork — 1800s Traditional Guide",
    "subtitle": "Traditional Naga smoked pork stew with fermented bamboo shoots and wild herbs",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.46.28 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Fresh bamboo shoots",
      "Country pork",
      "Bird's eye chilli",
      "Wild garlic",
      "Ginger"
    ]
  },
  {
    "id": "info-46",
    "dishId": "bamboo-shoot-pork",
    "title": "Bamboo Shoot Pork — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bamboo Shoot Pork",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.46.59 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Fresh bamboo shoots",
      "Country pork",
      "Bird's eye chilli",
      "Wild garlic",
      "Ginger"
    ]
  },
  {
    "id": "info-47",
    "dishId": "bamboo-shoot-pork",
    "title": "Bamboo Shoot Pork — Contemporary Recipe",
    "subtitle": "Contemporary Naga pork preparation with bamboo shoots and King Chilli (Bhut Jolokia)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.47.48 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Fresh bamboo shoots",
      "Country pork",
      "Bird's eye chilli",
      "Wild garlic",
      "Ginger"
    ]
  },
  {
    "id": "info-48",
    "dishId": "dohneiiong",
    "title": "Dohneiion - Present Recipe",
    "subtitle": "Modern Manipuri Greens Stew (Dohneion)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.47.53 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Pork",
      "Black sesame seeds (Neiiong)",
      "Garlic",
      "Ginger",
      "Mustard oil",
      "Green chillies"
    ]
  },
  {
    "id": "info-49",
    "dishId": "masor-tenga",
    "title": "Masor Tenga — 1800s Traditional Recipe",
    "subtitle": "Assamese sour fish curry made with elephant apple or tomatoes and mustard oil",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.48.29 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Brahmaputra Rohu fish",
      "Elephant apple (Ou tenga)",
      "Tomatoes",
      "Mustard oil",
      "Turmeric",
      "Green chillies"
    ]
  },
  {
    "id": "info-50",
    "dishId": "masor-tenga",
    "title": "Masor Tenga — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Masor Tenga",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.49.22 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Brahmaputra Rohu fish",
      "Elephant apple (Ou tenga)",
      "Tomatoes",
      "Mustard oil",
      "Turmeric",
      "Green chillies"
    ]
  },
  {
    "id": "info-51",
    "dishId": "masor-tenga",
    "title": "Masor Tenga — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Masor Tenga",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.49.59 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Brahmaputra Rohu fish",
      "Elephant apple (Ou tenga)",
      "Tomatoes",
      "Mustard oil",
      "Turmeric",
      "Green chillies"
    ]
  },
  {
    "id": "info-52",
    "dishId": "litti-chokha",
    "title": "Litti Chokha — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Litti Chokha",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.50.39 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Whole wheat flour",
      "Roasted sattu",
      "Cow ghee",
      "Ajwain",
      "Kalonji",
      "Smoked brinjal",
      "Mustard oil"
    ]
  },
  {
    "id": "info-53",
    "dishId": "litti-chokha",
    "title": "Litti Chokha — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Litti Chokha",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.51.17 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Whole wheat flour",
      "Roasted sattu",
      "Cow ghee",
      "Ajwain",
      "Kalonji",
      "Smoked brinjal",
      "Mustard oil"
    ]
  },
  {
    "id": "info-54",
    "dishId": "mizo-bai",
    "title": "Mizo Bai- c.1800 Recipe",
    "subtitle": "Traditional Mizo Vegetable Stew (Pre-Colonial Version)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.51.48 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-55",
    "dishId": "mizo-bai",
    "title": "Mizo Bai — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Mizo Bai",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.52.10 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-56",
    "dishId": "mizo-bai",
    "title": "Bai- c. 1900 Recipe",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Mizo Bai",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.52.33 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-57",
    "dishId": "thekua",
    "title": "Thekua — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Thekua",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.53.06 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Whole wheat flour",
      "Sugarcane jaggery",
      "Ghee",
      "Fennel seeds",
      "Dry coconut",
      "Cardamom"
    ]
  },
  {
    "id": "info-58",
    "dishId": "mizo-bai",
    "title": "Mizo Bai-Present Recipe",
    "subtitle": "Contemporary Mizo Vegetable Stew (Mizo Bai)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.53.33 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-59",
    "dishId": "mizo-bai",
    "title": "Mizo Bai — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Mizo Bai",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.54.00 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-60",
    "dishId": "mizo-bai",
    "title": "Mizo Bai — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Mizo Bai",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.55.16 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Wild mustard greens",
      "Fermented bamboo shoots",
      "Pork skin / Smoked meat",
      "Alkaline cooking soda",
      "Salt"
    ]
  },
  {
    "id": "info-61",
    "dishId": "sawhchiar",
    "title": "Sawhchiar - c. 1800 Recipe",
    "subtitle": "Traditional Mizo Pork Stew (Early 19th Century)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.55.22 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-62",
    "dishId": "chhattisgarhi-chila",
    "title": "Chila — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Chila",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.56.17 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Rice batter",
      "Urad dal",
      "Sesame seeds",
      "Green chillies",
      "Coriander",
      "Mustard oil"
    ]
  },
  {
    "id": "info-63",
    "dishId": "chhattisgarhi-chila",
    "title": "Chila — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Chila",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.56.58 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice batter",
      "Urad dal",
      "Sesame seeds",
      "Green chillies",
      "Coriander",
      "Mustard oil"
    ]
  },
  {
    "id": "info-64",
    "dishId": "chhattisgarhi-chila",
    "title": "Chila — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Chila",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.57.33 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Rice batter",
      "Urad dal",
      "Sesame seeds",
      "Green chillies",
      "Coriander",
      "Mustard oil"
    ]
  },
  {
    "id": "info-65",
    "dishId": "sawhchiar",
    "title": "Sawhchiar - c. 1900 Recipe",
    "subtitle": "Traditional Mizo Pork Stew (Early 20th Century)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.57.52 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-66",
    "dishId": "fara",
    "title": "Fara — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Fara",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.58.22 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Rice flour",
      "Chana dal",
      "Garlic",
      "Green chillies",
      "Mustard seeds",
      "Curry leaves"
    ]
  },
  {
    "id": "info-67",
    "dishId": "fara",
    "title": "Fara — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Fara",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.58.55 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice flour",
      "Chana dal",
      "Garlic",
      "Green chillies",
      "Mustard seeds",
      "Curry leaves"
    ]
  },
  {
    "id": "info-68",
    "dishId": "sawhchiar",
    "title": "Sawhchiar - Present Recipe",
    "subtitle": "Contemporary Mizo Pork Stew (Sawhchiar)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.59.21 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-69",
    "dishId": "sawhchiar",
    "title": "Sawhchiar — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Sawhchiar",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.00.05 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-70",
    "dishId": "sawhchiar",
    "title": "Goan Fish",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Sawhchiar",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.01.19 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-71",
    "dishId": "sawhchiar",
    "title": "Sawhchiar — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Sawhchiar",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.01.51 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Indigenous sticky rice",
      "Country chicken / Pork",
      "Crushed ginger",
      "Garlic cloves",
      "Black peppercorns"
    ]
  },
  {
    "id": "info-72",
    "dishId": "naga-smoked-pork",
    "title": "Naga Smoked Pork - c. 1900 Recipe",
    "subtitle": "Traditional Naga Smoked Pork (Early 20th Century)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.02.17 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Hearth-smoked pork",
      "Fermented bamboo shoots",
      "Bhut Jolokia (King Chilli)",
      "Garlic cloves",
      "Ginger root"
    ]
  },
  {
    "id": "info-73",
    "dishId": "naga-smoked-pork",
    "title": "Ingredients Used (c.2000s-Now)",
    "subtitle": "2000s-Contemporary Preparation",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.02.43 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Hearth-smoked pork",
      "Fermented bamboo shoots",
      "Bhut Jolokia (King Chilli)",
      "Garlic cloves",
      "Ginger root"
    ]
  },
  {
    "id": "info-74",
    "dishId": "dhokla",
    "title": "Dhokla — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dhokla",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.03.44 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Gram flour (Besan)",
      "Fermented curd",
      "Ginger-chilli paste",
      "Mustard seeds",
      "Curry leaves",
      "Asafoetida"
    ]
  },
  {
    "id": "info-75",
    "dishId": "dhokla",
    "title": "Dhokla — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dhokla",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.04.16 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Gram flour (Besan)",
      "Fermented curd",
      "Ginger-chilli paste",
      "Mustard seeds",
      "Curry leaves",
      "Asafoetida"
    ]
  },
  {
    "id": "info-76",
    "dishId": "dhokla",
    "title": "Dhokla — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dhokla",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.04.51 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Gram flour (Besan)",
      "Fermented curd",
      "Ginger-chilli paste",
      "Mustard seeds",
      "Curry leaves",
      "Asafoetida"
    ]
  },
  {
    "id": "info-77",
    "dishId": "undhiyu",
    "title": "Jndhiyu",
    "subtitle": "(Gujarat)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.05.49 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Surti papdi",
      "Kand (purple yam)",
      "Baby eggplants",
      "Methi muthia",
      "Fresh coconut",
      "Green garlic"
    ]
  },
  {
    "id": "info-78",
    "dishId": "undhiyu",
    "title": "Undhiyu — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Undhiyu",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.06.45 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Surti papdi",
      "Kand (purple yam)",
      "Baby eggplants",
      "Methi muthia",
      "Fresh coconut",
      "Green garlic"
    ]
  },
  {
    "id": "info-79",
    "dishId": "galho",
    "title": "Galho - c. 1900 Recipe",
    "subtitle": "Naga Rice-Meat Porridge (Early-Mid 20th Century)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.14.25 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Short hill rice",
      "Smoked meat scraps",
      "Axone (Fermented soybeans)",
      "Mountain greens",
      "Bird's eye chilli"
    ]
  },
  {
    "id": "info-80",
    "dishId": "galho",
    "title": "Galho -c.1800 Recipe",
    "subtitle": "Traditional Naga Rice and Meat Porridge (Early 19th Century)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.14.38 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Short hill rice",
      "Smoked meat scraps",
      "Axone (Fermented soybeans)",
      "Mountain greens",
      "Bird's eye chilli"
    ]
  },
  {
    "id": "info-81",
    "dishId": "galho",
    "title": "Galho - Present Recipe",
    "subtitle": "Modern Naga Rice-Meat Porridge (Contemporary Version)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.17.05 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Short hill rice",
      "Smoked meat scraps",
      "Axone (Fermented soybeans)",
      "Mountain greens",
      "Bird's eye chilli"
    ]
  },
  {
    "id": "info-82",
    "dishId": "dalma",
    "title": "Dalma -c. 1800 Recipe",
    "subtitle": "Traditional Odia Lentil-Vegetable Stew (Early 19th Century)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.19.21 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Toor dal",
      "Raw banana",
      "Papaya",
      "Panch phoran",
      "Desi ghee",
      "Fresh coconut",
      "Roasted cumin powder"
    ]
  },
  {
    "id": "info-83",
    "dishId": "dalma",
    "title": "Dalma - c. 1900 Recipe",
    "subtitle": "Odia Lentil-Vegetable Stew (Early 20th Century)",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.21.12 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Toor dal",
      "Raw banana",
      "Papaya",
      "Panch phoran",
      "Desi ghee",
      "Fresh coconut",
      "Roasted cumin powder"
    ]
  },
  {
    "id": "info-84",
    "dishId": "dalma",
    "title": "Dalma - Present Recipe",
    "subtitle": "Authentic Odia Lentil-Vegetable Stew (Modern Day)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.25.31 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Toor dal",
      "Raw banana",
      "Papaya",
      "Panch phoran",
      "Desi ghee",
      "Fresh coconut",
      "Roasted cumin powder"
    ]
  },
  {
    "id": "info-85",
    "dishId": "dalma",
    "title": "Dalma — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dalma",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.36 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Toor dal",
      "Raw banana",
      "Papaya",
      "Panch phoran",
      "Desi ghee",
      "Fresh coconut",
      "Roasted cumin powder"
    ]
  },
  {
    "id": "info-86",
    "dishId": "ukadiche-modak",
    "title": "Ukadiche",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Ukadiche Modak",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.37 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Rice flour",
      "Jaggery",
      "Grated coconut",
      "Cardamom",
      "Ghee"
    ]
  },
  {
    "id": "info-87",
    "dishId": "ukadiche-modak",
    "title": "Ukadiche Modak — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Ukadiche Modak",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.37 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice flour",
      "Jaggery",
      "Grated coconut",
      "Cardamom",
      "Ghee"
    ]
  },
  {
    "id": "info-88",
    "dishId": "ukadiche-modak",
    "title": "Ukadiche Modak — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Ukadiche Modak",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.38 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice flour",
      "Jaggery",
      "Grated coconut",
      "Cardamom",
      "Ghee"
    ]
  },
  {
    "id": "info-89",
    "dishId": "puran-poli",
    "title": "Puran Poli — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Puran Poli",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.38 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Chana dal",
      "Organic jaggery",
      "Whole wheat flour",
      "Nutmeg",
      "Cardamom",
      "Pure ghee"
    ]
  },
  {
    "id": "info-90",
    "dishId": "puran-poli",
    "title": "Puran Poli — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Puran Poli",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.38 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Chana dal",
      "Organic jaggery",
      "Whole wheat flour",
      "Nutmeg",
      "Cardamom",
      "Pure ghee"
    ]
  },
  {
    "id": "info-91",
    "dishId": "puran-poli",
    "title": "Puran Poli — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Puran Poli",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.39 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Chana dal",
      "Organic jaggery",
      "Whole wheat flour",
      "Nutmeg",
      "Cardamom",
      "Pure ghee"
    ]
  },
  {
    "id": "info-92",
    "dishId": "vada-pav",
    "title": "Vada Pav — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Vada Pav",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.39 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Potatoes",
      "Besan (Gram flour)",
      "Mustard seeds",
      "Garlic",
      "Peanuts",
      "Kashmiri chilli",
      "Ladi Pav"
    ]
  },
  {
    "id": "info-93",
    "dishId": "vada-pav",
    "title": "Vada Pav — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Vada Pav",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.39 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Potatoes",
      "Besan (Gram flour)",
      "Mustard seeds",
      "Garlic",
      "Peanuts",
      "Kashmiri chilli",
      "Ladi Pav"
    ]
  },
  {
    "id": "info-94",
    "dishId": "vada-pav",
    "title": "Vada Pav — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Vada Pav",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Potatoes",
      "Besan (Gram flour)",
      "Mustard seeds",
      "Garlic",
      "Peanuts",
      "Kashmiri chilli",
      "Ladi Pav"
    ]
  },
  {
    "id": "info-95",
    "dishId": "bhutte-ka-kees",
    "title": "Bhutte Ka Kees — Origin",
    "subtitle": "Traditional grated sweet corn street delicacy of Indore & Malwa",
    "era": "Origin",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (2).jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-96",
    "dishId": "bhutte-ka-kees",
    "title": "Bhutte Ka Kees — Evolution of Food",
    "subtitle": "Then vs Now: shifts from seasonal desi corn to sweet corn, hand grating to appliances, and night street culture",
    "era": "Evolution of Food",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-97",
    "dishId": "bhutte-ka-kees",
    "title": "Bhutte Ka Kees — Recipe",
    "subtitle": "12 key ingredients and 10 simple steps for authentic Indori Bhutte Ka Kees",
    "era": "Recipe",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (2).jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Fresh tender sweet corn (bhutta, grated)",
      "Full cream milk",
      "Desi ghee or oil",
      "Mustard seeds and cumin seeds (jeera)",
      "Asafoetida (hing)",
      "Green chillies (finely chopped)",
      "Fresh ginger (grated)",
      "Turmeric powder",
      "Sugar and salt",
      "Fresh coconut (scraped/grated)",
      "Fresh coriander leaves",
      "Lemon (for tang) and jeeravan masala / sev (optional)"
    ]
  },
  {
    "id": "info-98",
    "dishId": "indori-poha",
    "title": "Indori Poha — Origin",
    "subtitle": "Famous breakfast and street food of Indore; steamed flattened rice topped with raw onions and jeeravan",
    "era": "Origin",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.41 PM (1).jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-99",
    "dishId": "indori-poha",
    "title": "Indori Poha — Recipe",
    "subtitle": "12 key ingredients and 10 simple steps for authentic steamed Indori poha",
    "era": "Recipe",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (3).jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Thick or medium-thick poha (flattened rice)",
      "Turmeric, sugar and salt",
      "Oil",
      "Mustard seeds and fennel seeds",
      "Green chilli",
      "Onion (raw, chopped)",
      "Fresh coriander leaves",
      "Jeeravan masala",
      "Ratlami or Indori sev, and masala boondi (nukti)",
      "Lemon",
      "Pomegranate (optional)",
      "Hot jalebi (for serving, optional)"
    ]
  },
  {
    "id": "info-100",
    "dishId": "indori-poha",
    "title": "Indori Poha — Evolution of Food",
    "subtitle": "Then vs Now: shifts in flakes, cooking style, toppings, jeeravan masala, fuel and reach",
    "era": "Evolution of Food",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.41 PM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-100-bafla-1",
    "dishId": "dal-bafla",
    "title": "Dal Bafla — Origin",
    "subtitle": "Historic boiled-then-baked wheat feast dumpling of Malwa and Bundelkhand",
    "era": "Origin",
    "image": "/images/dishes/dal-bafla-stage-1.webp",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-100-bafla-2",
    "dishId": "dal-bafla",
    "title": "Dal Bafla — Evolution of Food",
    "subtitle": "Then vs Now: shifts from cow-dung embers to modern ovens, stone-ground flour to sooji blends, and royal thali culture",
    "era": "Evolution of Food",
    "image": "/images/dishes/dal-bafla-stage-3.webp",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-100-bafla-3",
    "dishId": "dal-bafla",
    "title": "Dal Bafla — Recipe",
    "subtitle": "12 key ingredients and 10 traditional steps for boiled-then-baked bafla drenched in ghee with panchmel dal",
    "era": "Recipe",
    "image": "/images/dishes/dal-bafla-stage-4.webp",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Coarse whole-wheat flour (atta)",
      "Semolina (sooji / rava)",
      "Pure desi ghee",
      "Ajwain (carom seeds)",
      "Turmeric powder and pinch of baking soda",
      "Panchmel dal (toor, chana, moong, urad, masoor)",
      "Tomatoes and green chillies",
      "Fresh ginger (grated)",
      "Cumin seeds and mustard seeds",
      "Asafoetida (hing)",
      "Fresh coriander leaves",
      "Spicy red garlic chutney & lemon wedges"
    ]
  },
  {
    "id": "info-101",
    "dishId": "fish-molee",
    "title": "Kerala Fish I",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kerala Fish Molee",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.42 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Karimeen / Seer fish",
      "First & second press coconut milk",
      "Green chillies",
      "Curry leaves",
      "Turmeric",
      "Tomatoes"
    ]
  },
  {
    "id": "info-102",
    "dishId": "fish-molee",
    "title": "Kerala Fish Molee — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kerala Fish Molee",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.42 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Karimeen / Seer fish",
      "First & second press coconut milk",
      "Green chillies",
      "Curry leaves",
      "Turmeric",
      "Tomatoes"
    ]
  },
  {
    "id": "info-103",
    "dishId": "fish-molee",
    "title": "Kerala Fish Molee — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kerala Fish Molee",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.42 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Karimeen / Seer fish",
      "First & second press coconut milk",
      "Green chillies",
      "Curry leaves",
      "Turmeric",
      "Tomatoes"
    ]
  },
  {
    "id": "info-104",
    "dishId": "appam-stew",
    "title": "Appam with S",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Appam with Vegetable Stew",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.43 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Raw rice",
      "Coconut toddy/yeast",
      "Fresh coconut milk",
      "Black peppercorns",
      "Cinnamon",
      "Curry leaves"
    ]
  },
  {
    "id": "info-105",
    "dishId": "appam-stew",
    "title": "Appam with Vegetable Stew — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Appam with Vegetable Stew",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.43 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Raw rice",
      "Coconut toddy/yeast",
      "Fresh coconut milk",
      "Black peppercorns",
      "Cinnamon",
      "Curry leaves"
    ]
  },
  {
    "id": "info-106",
    "dishId": "appam-stew",
    "title": "Appam with Vegetable Stew — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Appam with Vegetable Stew",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.43 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Raw rice",
      "Coconut toddy/yeast",
      "Fresh coconut milk",
      "Black peppercorns",
      "Cinnamon",
      "Curry leaves"
    ]
  },
  {
    "id": "info-107",
    "dishId": "bisi-bele-bath",
    "title": "Bisi Bele Bath — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bisi Bele Bath",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.44 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-108",
    "dishId": "bisi-bele-bath",
    "title": "Ingredients Used (c. 2000s -Now)",
    "subtitle": "2000s-Contemporary Preparation",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.44 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-109",
    "dishId": "bisi-bele-bath",
    "title": "Bisi Bele Bath — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bisi Bele Bath",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.44 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-110",
    "dishId": "bisi-bele-bath",
    "title": "Bisi Bele Bath — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bisi Bele Bath",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.44 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-111",
    "dishId": "bisi-bele-bath",
    "title": "Bisi Bele Bath — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bisi Bele Bath",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.45 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-112",
    "dishId": "bisi-bele-bath",
    "title": "Bisi Bele Bath — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bisi Bele Bath",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.45 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Rice",
      "Toor dal",
      "Tamarind pulp",
      "Byadagi chillies",
      "Kapok buds (Marathi moggu)",
      "Ghee",
      "Cashews"
    ]
  },
  {
    "id": "info-113",
    "dishId": "masala-dosa",
    "title": "Masala Dosa",
    "subtitle": "(Karnataka)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.45 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Sona Masuri rice",
      "Urad dal",
      "Fenugreek seeds",
      "Potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Butter"
    ]
  },
  {
    "id": "info-114",
    "dishId": "masala-dosa",
    "title": "Masala Dosa — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Masala Dosa",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.46 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Sona Masuri rice",
      "Urad dal",
      "Fenugreek seeds",
      "Potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Butter"
    ]
  },
  {
    "id": "info-115",
    "dishId": "masala-dosa",
    "title": "Masala Dosa — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Masala Dosa",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.46 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Sona Masuri rice",
      "Urad dal",
      "Fenugreek seeds",
      "Potatoes",
      "Mustard seeds",
      "Curry leaves",
      "Butter"
    ]
  },
  {
    "id": "info-116",
    "dishId": "dhuska",
    "title": "Dhuska — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Dhuska",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.46 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Short-grain rice",
      "Chana dal",
      "Ginger",
      "Green chillies",
      "Cumin",
      "Mustard oil"
    ]
  },
  {
    "id": "info-117",
    "dishId": "chilka-roti",
    "title": "Chilka Roti",
    "subtitle": "(Jharkhand)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.46 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Unpolished red rice",
      "Chana dal",
      "Water",
      "Sal tree seed oil",
      "Salt"
    ]
  },
  {
    "id": "info-118",
    "dishId": "chilka-roti",
    "title": "Chilka Roti — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Chilka Roti",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.47 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Unpolished red rice",
      "Chana dal",
      "Water",
      "Sal tree seed oil",
      "Salt"
    ]
  },
  {
    "id": "info-119",
    "dishId": "himachali-dham",
    "title": "Himachali Dham",
    "subtitle": "(Himachal Pradesh)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.47 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-120",
    "dishId": "himachali-dham",
    "title": "Himachali Dham — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Himachali Dham",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.47 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-121",
    "dishId": "himachali-dham",
    "title": "Himachali Dham — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Himachali Dham",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.48 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-122",
    "dishId": "himachali-dham",
    "title": "(Himachal Pradesh)",
    "subtitle": "Evolution of Ingredients & Preparation (1800s-2000s)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.48 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-123",
    "dishId": "himachali-dham",
    "title": "Himachali Dham — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Himachali Dham",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.48 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-124",
    "dishId": "himachali-dham",
    "title": "Himachali Dham — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Himachali Dham",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.48 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Chamba Rajma",
      "Thick curd",
      "Ghee",
      "Dried raisins",
      "Cloves",
      "Cardamom"
    ]
  },
  {
    "id": "info-125",
    "dishId": "haryanvi-kadhi",
    "title": "Kadhi Pakora",
    "subtitle": "(Haryana)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.49 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Sour buttermilk",
      "Gram flour",
      "Fenugreek seeds",
      "Dried red chillies",
      "Ghee",
      "Onion pakoras"
    ]
  },
  {
    "id": "info-126",
    "dishId": "haryanvi-kadhi",
    "title": "Kadhi Pakora — Heritage & Evolution Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kadhi Pakora",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.49 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Sour buttermilk",
      "Gram flour",
      "Fenugreek seeds",
      "Dried red chillies",
      "Ghee",
      "Onion pakoras"
    ]
  },
  {
    "id": "info-127",
    "dishId": "haryanvi-kadhi",
    "title": "Kadhi Pakora — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kadhi Pakora",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.49 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Sour buttermilk",
      "Gram flour",
      "Fenugreek seeds",
      "Dried red chillies",
      "Ghee",
      "Onion pakoras"
    ]
  },
  {
    "id": "info-128",
    "dishId": "haryanvi-kadhi",
    "title": "Kadhi Pakora — 1900s Early Modern Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Kadhi Pakora",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.50 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Sour buttermilk",
      "Gram flour",
      "Fenugreek seeds",
      "Dried red chillies",
      "Ghee",
      "Onion pakoras"
    ]
  },
  {
    "id": "info-129",
    "dishId": "bajra-khichdi",
    "title": "Bajra Khichdi — 1800s Heritage Recipe",
    "subtitle": "Haryanvi pearl millet and moong dal porridge topped with fresh homemade white butter",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.50 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Bajra (Pearl millet)",
      "Moong dal",
      "Desi butter / Ghee",
      "Cumin",
      "Garlic",
      "Rock salt"
    ]
  },
  {
    "id": "info-130",
    "dishId": "bajra-khichdi",
    "title": "Bajra Khichdi — Contemporary / Present Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bajra Khichdi",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.50 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Bajra (Pearl millet)",
      "Moong dal",
      "Desi butter / Ghee",
      "Cumin",
      "Garlic",
      "Rock salt"
    ]
  },
  {
    "id": "info-131",
    "dishId": "bajra-khichdi",
    "title": "Bajra Khichdi — 1800s Traditional Guide",
    "subtitle": "Documented culinary technique, ingredients and preparation method for Bajra Khichdi",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.50 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Bajra (Pearl millet)",
      "Moong dal",
      "Desi butter / Ghee",
      "Cumin",
      "Garlic",
      "Rock salt"
    ]
  },
  {
    "id": "info-132",
    "dishId": "eromba",
    "title": "Eromba-c.1900 Recipe",
    "subtitle": "Traditional Manipuri Mash",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.15 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Ngari (Fermented fish)",
      "Mountain potatoes",
      "Yongchak (Tree beans)",
      "Ghost chillies",
      "Spring onions"
    ]
  },
  {
    "id": "info-133",
    "dishId": "eromba",
    "title": "Eromba - 1800s Recipe",
    "subtitle": "Ingredients (1800s)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.16 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Ngari (Fermented fish)",
      "Mountain potatoes",
      "Yongchak (Tree beans)",
      "Ghost chillies",
      "Spring onions"
    ]
  },
  {
    "id": "info-134",
    "dishId": "singju",
    "title": "Singju-c.1800Recipe",
    "subtitle": "Early Traditional Version (Manipuri Salad)",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.16 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Lotus stems",
      "Cabbage",
      "Roasted perilla seeds (Thoiding)",
      "Roasted chickpea powder",
      "Ngari",
      "Chillies"
    ]
  },
  {
    "id": "info-135",
    "dishId": "eromba",
    "title": "Eromba -2000s Ingredients",
    "subtitle": "Modern Variation (Contemporary Manipuri Style)",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.16 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Ngari (Fermented fish)",
      "Mountain potatoes",
      "Yongchak (Tree beans)",
      "Ghost chillies",
      "Spring onions"
    ]
  },
  {
    "id": "info-136",
    "dishId": "chhena-poda",
    "title": "Chhena Poda — c. 1800 Recipe",
    "subtitle": "Traditional Nayagarh baked cottage cheese dessert caramelized in sal leaf wrap",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.39.33 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Fresh cow milk chhena",
      "Cardamom powder",
      "Semolina",
      "Sugar",
      "Desi ghee",
      "Sal tree leaves"
    ]
  },
  {
    "id": "info-137",
    "dishId": "chhena-poda",
    "title": "Chhena Poda — c. 1900 Recipe",
    "subtitle": "Odia wood-fired earthen oven baked cheese dessert with cardamom and sugar crust",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.42.52 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Fresh cow milk chhena",
      "Cardamom powder",
      "Semolina",
      "Sugar",
      "Desi ghee",
      "Sal tree leaves"
    ]
  },
  {
    "id": "info-138",
    "dishId": "sikkimese-momos",
    "title": "Sikkimese Momos — c. 1800 Recipe",
    "subtitle": "Traditional Himalayan steamed wheat dumplings with seasoned mountain vegetable filling",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 1.17.15 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Wheat flour",
      "Minced pork / local greens",
      "Ginger",
      "Garlic",
      "Dalle Khursani chillies",
      "Fermented bamboo"
    ]
  },
  {
    "id": "info-139",
    "dishId": "sikkimese-momos",
    "title": "Sikkimese Momos — c. 1900 Recipe",
    "subtitle": "Early modern Sikkimese handmade dumplings served with fresh dalle khursani chilli paste",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 1.19.07 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Wheat flour",
      "Minced pork / local greens",
      "Ginger",
      "Garlic",
      "Dalle Khursani chillies",
      "Fermented bamboo"
    ]
  },
  {
    "id": "info-140",
    "dishId": "sikkimese-momos",
    "title": "Sikkimese Momos — Present Recipe",
    "subtitle": "Modern Himalayan dumplings steamed to perfection with spicy sesame tomato dipping sauce",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 1.20.15 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Wheat flour",
      "Minced pork / local greens",
      "Ginger",
      "Garlic",
      "Dalle Khursani chillies",
      "Fermented bamboo"
    ]
  },
  {
    "id": "info-141",
    "dishId": "makki-di-roti-sarson-saag",
    "title": "Makki di Roti & Sarson da Saag — Origin",
    "subtitle": "Traditional winter agrarian staple of stone-ground cornmeal flatbread and slow-churned mustard greens",
    "era": "Origin",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.33.04 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-142",
    "dishId": "makki-di-roti-sarson-saag",
    "title": "Makki di Roti & Sarson da Saag — Evolution of Food",
    "subtitle": "Shifts in greens sourcing, earthen pot ghotna churning to blenders, and fuel transitions",
    "era": "Evolution of Food",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.32.55 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-143",
    "dishId": "makki-di-roti-sarson-saag",
    "title": "Makki di Roti & Sarson da Saag — Recipe",
    "subtitle": "10 key ingredients and 10 simple steps for authentic saag with hand-patted corn flatbread",
    "era": "Recipe",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.35.42 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Fresh mustard greens (sarson)",
      "Spinach (palak) and bathua leaves",
      "Maize flour (makki ka atta)",
      "Fresh ginger, garlic and green chillies",
      "Onions",
      "Mustard oil or ghee",
      "Salt",
      "Warm water",
      "Fresh white butter (makhan)",
      "Jaggery (gur, for serving)"
    ]
  },
  {
    "id": "info-144",
    "dishId": "butter-chicken",
    "title": "Butter Chicken — Origin",
    "subtitle": "Post-partition innovation reviving tandoor-roasted chicken in velvety tomato-butter gravy",
    "era": "Origin",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.38.33 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-145",
    "dishId": "butter-chicken",
    "title": "Butter Chicken — Evolution of Food",
    "subtitle": "From charcoal tandoors and hand-strained tomatoes to modern domestic convection ovens and blenders",
    "era": "Evolution of Food",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.40.59 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-145-recipe",
    "dishId": "butter-chicken",
    "title": "Butter Chicken — Recipe",
    "subtitle": "11 key ingredients and 10 simple steps for authentic velvety murgh makhani",
    "era": "Recipe",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.40.59 AM.jpeg",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Chicken (boneless pieces or bone-in cuts)",
      "Hung curd (thick yogurt)",
      "Ginger-garlic paste",
      "Kashmiri red chilli powder and turmeric",
      "Ripe tomatoes",
      "Butter and ghee",
      "Fresh dairy cream",
      "Kasuri methi (dried fenugreek leaves)",
      "Whole spices (green cardamom, cinnamon, cloves)",
      "Salt and a pinch of sugar",
      "Lemon juice"
    ]
  },
  {
    "id": "info-145-kulcha-1",
    "dishId": "amritsari-kulcha",
    "title": "Amritsari Kulcha — Origin",
    "subtitle": "Historic Amritsar street food heritage: ghee-laminated layered dough stuffed with spiced potatoes",
    "era": "Origin",
    "image": "/images/dishes/amritsari-kulcha-stage-1.webp",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": []
  },
  {
    "id": "info-145-kulcha-2",
    "dishId": "amritsari-kulcha",
    "title": "Amritsari Kulcha — Evolution of Food",
    "subtitle": "From earthen pit tandoors and hand lamination to domestic tawa adaptations and varied stuffings",
    "era": "Evolution of Food",
    "image": "/images/dishes/amritsari-kulcha-stage-2.webp",
    "isFullTimelinePoster": true,
    "stageNumber": 2,
    "ingredients": []
  },
  {
    "id": "info-145-kulcha-3",
    "dishId": "amritsari-kulcha",
    "title": "Amritsari Kulcha — Recipe",
    "subtitle": "11 key ingredients and 10 simple steps for flaky, shattering tandoor-baked stuffed kulcha",
    "era": "Recipe",
    "image": "/images/dishes/amritsari-kulcha-stage-3.webp",
    "isFullTimelinePoster": true,
    "stageNumber": 3,
    "ingredients": [
      "Refined wheat flour (maida)",
      "Boiled and mashed potatoes",
      "Ghee or butter (for lamination and topping)",
      "Carom seeds (ajwain) and cumin",
      "Crushed coriander seeds",
      "Dried pomegranate seeds (anardana powder)",
      "Green chilli and fresh coriander",
      "Chopped onion",
      "Salt",
      "Water (for kneading)",
      "Fresh white butter (for serving)"
    ]
  },
  {
    "id": "info-146",
    "dishId": "dal-baati-churma",
    "title": "Dal Baati Churma — c. 1800 Recipe",
    "subtitle": "Traditional Rajasthani desert feast: sun-baked wheat dumplings dipped in desi ghee with panchmel dal",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.47.37 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Whole wheat flour",
      "Panchmel lentils (Five dals)",
      "Pure cow ghee",
      "Ajwain seeds",
      "Jaggery / Bura",
      "Cardamom"
    ]
  },
  {
    "id": "info-147",
    "dishId": "dal-baati-churma",
    "title": "Dal Baati Churma — c. 1900 Recipe",
    "subtitle": "Royal Rajput kitchen formulation with spiced lentil curry, crushed sweet wheat churma, and bati",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.51.46 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Whole wheat flour",
      "Panchmel lentils (Five dals)",
      "Pure cow ghee",
      "Ajwain seeds",
      "Jaggery / Bura",
      "Cardamom"
    ]
  },
  {
    "id": "info-148",
    "dishId": "dal-baati-churma",
    "title": "Dal Baati Churma — Present Recipe",
    "subtitle": "Iconic Rajasthani trio of crispy ghee-soaked baatis, spiced mix dal, and cardamom-scented churma",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.53.20 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Whole wheat flour",
      "Panchmel lentils (Five dals)",
      "Pure cow ghee",
      "Ajwain seeds",
      "Jaggery / Bura",
      "Cardamom"
    ]
  },
  {
    "id": "info-149",
    "dishId": "gundruk-soup",
    "title": "Gundruk Soup — Present Recipe",
    "subtitle": "Aromatic Himalayan broth prepared with sun-dried fermented leafy greens, garlic, and mustard oil",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.48.01 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Gundruk (Fermented sun-dried greens)",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Himalayan rock salt",
      "Mustard oil"
    ]
  },
  {
    "id": "info-150",
    "dishId": "chhena-poda",
    "title": "Chhena Poda — Present Recipe",
    "subtitle": "Classic Odia baked cheese cake caramelized with cardamom, semolina, and sugar",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.48.50 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Fresh chhena (cottage cheese)",
      "Semolina (suji)",
      "Cane sugar",
      "Green cardamom powder",
      "Pure desi ghee",
      "Cashews and raisins"
    ]
  },
  {
    "id": "info-151",
    "dishId": "chettinad-chicken",
    "title": "Chettinad Chicken Curry — c. 1800 Recipe",
    "subtitle": "Traditional seafaring Chettiar spice formulation with stone-ground kalpasi and country chicken",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.50.19 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Country chicken (naatu kozhi)",
      "Kalpasi (black stone flower)",
      "Star anise & marathi moggu",
      "Shallots (small onions)",
      "Gingelly (sesame) oil",
      "Curry leaves"
    ]
  },
  {
    "id": "info-152",
    "dishId": "chettinad-chicken",
    "title": "Chettinad Chicken Curry — c. 1900 Recipe",
    "subtitle": "Refined mercantile feast recipe with roasted coriander, black pepper, and coconut paste",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.51.48 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Country chicken",
      "Roasted coriander seeds",
      "Black peppercorns",
      "Fresh grated coconut",
      "Dry red chillies",
      "Curry leaves"
    ]
  },
  {
    "id": "info-153",
    "dishId": "chettinad-chicken",
    "title": "Chettinad Chicken Curry — Present Recipe",
    "subtitle": "Contemporary vibrant Chettinad pepper chicken curry with rich roasted masala and coconut",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.54.27 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Chicken",
      "Chettinad roasted masala powder",
      "Fresh coconut paste",
      "Shallots & ginger-garlic",
      "Black pepper & fennel",
      "Curry leaves"
    ]
  },
  {
    "id": "info-154",
    "dishId": "idli-sambar",
    "title": "Idli Sambar — c. 1800 Recipe",
    "subtitle": "Historic Thanjavur Maratha court sambar with freshly ground spices, lentils, and steamed idlis",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.57.05 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Parboiled idli rice",
      "Urad dal",
      "Toor dal",
      "Shallots (Madras onions)",
      "Drumsticks",
      "Tamarind",
      "Curry leaves"
    ]
  },
  {
    "id": "info-155",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 10.15.49 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-156",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.17 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-157",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.17 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-158",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.17 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-159",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.17 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-160",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.18 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-161",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.18 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-162",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.18 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-163",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.19 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-164",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.19 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-165",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.19 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-166",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.20 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-167",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.20 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-168",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.20 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-169",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.20 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-170",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.21 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-171",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.21 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-172",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.21 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-173",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 1",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.36.22 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-174",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 9",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 9.55.21 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-175",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 9",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 9.55.43 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-176",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 9",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 9.58.22 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-177",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-03 at 9",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 9.58.44 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-178",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.46 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-179",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.47 AM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-180",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.47 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-181",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.48 AM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-182",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.48 AM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-183",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.48 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-184",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.49 AM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-185",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.49 AM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-186",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.49 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-187",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.50 AM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-188",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.50 AM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-189",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.50 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-190",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.47.51 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-191",
    "dishId": "general-culinary",
    "title": "Archival Recipe Guide — WhatsApp Image 2026-11-04 at 2",
    "subtitle": "Documented regional preparation method and ingredient composition",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.48.58 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-192",
    "dishId": "general-culinary",
    "title": "A cinematic website hero header scene for bharat",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_cinematic_website_hero_header_scene_for_bharat.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-193",
    "dishId": "general-culinary",
    "title": "A clean modern infographic cooking recipe a wide",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_clean_modern_infographic_cooking_recipe_a_wide.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-194",
    "dishId": "general-culinary",
    "title": "A colorful infographic poster like the 1900s style",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_colorful_infographic_poster_like_the_1900s_style.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-195",
    "dishId": "general-culinary",
    "title": "A colorful infographic poster titled about a recip",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_colorful_infographic_poster_titled_about_a_recip.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-196",
    "dishId": "general-culinary",
    "title": "Artisanal Ingredients & Spice Palette",
    "subtitle": "Detailed visual breakdown of core spices, grains, and aromatics",
    "era": "Culinary Craft",
    "image": "/images_updated/a_detailed_food_ingredients_infographic_scene_a_w.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-197",
    "dishId": "general-culinary",
    "title": "A detailed infographic in rich warm tones and orna",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_in_rich_warm_tones_and_orna.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-198",
    "dishId": "general-culinary",
    "title": "A detailed infographic in the same style as before",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_in_the_same_style_as_before.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-199",
    "dishId": "general-culinary",
    "title": "A detailed infographic in vintage style titled as",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_in_vintage_style_titled_as.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-200",
    "dishId": "general-culinary",
    "title": "A detailed infographic in warm vintage style about",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_in_warm_vintage_style_about.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-201",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster a richly designed",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_poster_a_richly_designed.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-202",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster antique vintage sty",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_antique_vintage_sty.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-203",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster in a vibrant vintag",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_poster_in_a_vibrant_vintag.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-204",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster ornate vintage styl",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_ornate_vintage_styl.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-205",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster vintage warm parch",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_poster_vintage_warm_parch.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-206",
    "dishId": "general-culinary",
    "title": "A detailed infographic poster with rich ornate bor",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_poster_with_rich_ornate_bor.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-207",
    "dishId": "general-culinary",
    "title": "A detailed infographic recipe card ornate rustic",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_recipe_card_ornate_rustic.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-208",
    "dishId": "general-culinary",
    "title": "A detailed infographic similar to the 1900s style",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_detailed_infographic_similar_to_the_1900s_style.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-209",
    "dishId": "general-culinary",
    "title": "A detailed infographic style food illustration a",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_infographic_style_food_illustration_a.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-210",
    "dishId": "general-culinary",
    "title": "A detailed ornate infographic style food recipe p",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_detailed_ornate_infographic_style_food_recipe_p.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-211",
    "dishId": "general-culinary",
    "title": "A highly detailed cinematic sepia gold illustratio",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_highly_detailed_cinematic_sepia_gold_illustratio.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-212",
    "dishId": "general-culinary",
    "title": "A highly detailed infographic poster similar to th",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_highly_detailed_infographic_poster_similar_to_th.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-213",
    "dishId": "general-culinary",
    "title": "Artisanal Ingredients & Spice Palette",
    "subtitle": "Detailed visual breakdown of core spices, grains, and aromatics",
    "era": "Culinary Craft",
    "image": "/images_updated/a_highly_detailed_photorealistic_food_ingredient.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-214",
    "dishId": "general-culinary",
    "title": "A polished dark theme web ui screenshot for a food",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_polished_dark_theme_web_ui_screenshot_for_a_food.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-215",
    "dishId": "general-culinary",
    "title": "A rich cinematic dark navy themed card with roun",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_rich_cinematic_dark_navy_themed_card_with_roun.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-216",
    "dishId": "general-culinary",
    "title": "A richly designed infographic poster with a warm",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_richly_designed_infographic_poster_with_a_warm.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-217",
    "dishId": "general-culinary",
    "title": "A richly designed vintage infographic poster parc",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_richly_designed_vintage_infographic_poster_parc.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-218",
    "dishId": "general-culinary",
    "title": "A richly detailed cinematic warm lit food poster",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_richly_detailed_cinematic_warm_lit_food_poster.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-219",
    "dishId": "general-culinary",
    "title": "A richly styled infographic on a dark brown wood b",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "Contemporary / Present",
    "image": "/images_updated/a_richly_styled_infographic_on_a_dark_brown_wood_b.png",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-220",
    "dishId": "general-culinary",
    "title": "A vintage infographic poster on parchment paper wi",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_infographic_poster_on_parchment_paper_wi.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-221",
    "dishId": "general-culinary",
    "title": "A vintage infographic poster styled like an old pa",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_infographic_poster_styled_like_an_old_pa.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-222",
    "dishId": "general-culinary",
    "title": "A vintage parchment sepia infographic in warm brow",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/a_vintage_parchment_sepia_infographic_in_warm_brow.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  },
  {
    "id": "info-223",
    "dishId": "general-culinary",
    "title": "Vintage antique parchment infographic poster sep",
    "subtitle": "Illustrated visual culinary reference from the archival repository",
    "era": "1900s Early Modern",
    "image": "/images_updated/vintage_antique_parchment_infographic_poster_sep.png",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Spices",
      "Grains",
      "Herbs",
      "Regional Produce"
    ]
  }
];

export function getInfographicsForDish(dishId: string): DishInfographic[] {
  return DISH_INFOGRAPHICS.filter((item) => item.dishId === dishId);
}

export function hasInfographic(dishId: string): boolean {
  return DISH_INFOGRAPHICS.some((item) => item.dishId === dishId);
}

export function getInfographicForStage(dishId: string, stageNumber: number): DishInfographic | undefined {
  const dishItems = DISH_INFOGRAPHICS.filter((item) => item.dishId === dishId);
  if (dishItems.length === 0) return undefined;
  
  // Try exact stage number match
  const exact = dishItems.find((item) => item.stageNumber === stageNumber);
  if (exact) return exact;

  // Try matching by era substring
  if (stageNumber === 1) {
    const s1 = dishItems.find((item) => /1800|ancient|traditional/i.test(item.era));
    if (s1) return s1;
  } else if (stageNumber === 2) {
    const s2 = dishItems.find((item) => /1900|early modern|heritage/i.test(item.era));
    if (s2) return s2;
  } else if (stageNumber === 3) {
    const s3 = dishItems.find((item) => /present|contemporary|modern/i.test(item.era));
    if (s3) return s3;
  }

  // Fallback to full timeline poster or first available
  return dishItems.find((item) => item.isFullTimelinePoster) || dishItems[0];
}

export function getAllUploadedImages(): DishInfographic[] {
  return DISH_INFOGRAPHICS;
}

export function searchUploadedImages(query: string, filterEra?: string, dishId?: string): DishInfographic[] {
  const q = query.trim().toLowerCase();
  return DISH_INFOGRAPHICS.filter((item) => {
    // If dishId specified, prioritize matching that dish or general culinary
    if (dishId && item.dishId !== dishId && item.dishId !== "general-culinary" && !q) {
      return false;
    }

    if (filterEra && filterEra !== "All" && !item.era.toLowerCase().includes(filterEra.toLowerCase())) {
      return false;
    }

    if (!q) return true;

    // Check title, subtitle, era, dishId, image path, or ingredients
    const inTitle = item.title.toLowerCase().includes(q);
    const inSubtitle = item.subtitle.toLowerCase().includes(q);
    const inEra = item.era.toLowerCase().includes(q);
    const inDishId = item.dishId.toLowerCase().includes(q);
    const inImage = item.image.toLowerCase().includes(q);
    const inIngredients = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));

    return inTitle || inSubtitle || inEra || inDishId || inImage || inIngredients;
  });
}
