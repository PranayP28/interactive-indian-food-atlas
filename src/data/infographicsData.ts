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
    "title": "\u2014L\u2014a\u2014d\u2014a\u2014k\u2014h\u2014i\u2014 \u2014S\u2014k\u2014y\u2014u\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014H\u2014e\u2014a\u2014r\u2014t\u2014h\u2014 \u2014S\u2014t\u2014e\u2014w\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014H\u2014i\u2014m\u2014a\u2014l\u2014a\u2014y\u2014a\u2014n\u2014 \u2014b\u2014a\u2014r\u2014l\u2014e\u2014y\u2014 \u2014p\u2014a\u2014s\u2014t\u2014a\u2014 \u2014a\u2014n\u2014d\u2014 \u2014r\u2014o\u2014o\u2014t\u2014 \u2014v\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014s\u2014t\u2014e\u2014w\u2014",
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
    "title": "\u2014P\u2014e\u2014s\u2014a\u2014r\u2014a\u2014t\u2014t\u2014u\u2014 \u2014\u2014\u2014 \u2014T\u2014h\u2014e\u2014 \u2014G\u2014r\u2014e\u2014e\u2014n\u2014 \u2014C\u2014r\u2014e\u2014p\u2014e\u2014 \u2014o\u2014f\u2014 \u2014A\u2014n\u2014d\u2014h\u2014r\u2014a\u2014 \u2014P\u2014r\u2014a\u2014d\u2014e\u2014s\u2014h\u2014",
    "subtitle": "\u2014C\u2014o\u2014m\u2014p\u2014l\u2014e\u2014t\u2014e\u2014 \u2014e\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014a\u2014c\u2014r\u2014o\u2014s\u2014s\u2014 \u2014t\u2014h\u2014r\u2014e\u2014e\u2014 \u2014e\u2014p\u2014o\u2014c\u2014h\u2014s\u2014:\u2014 \u20141\u20145\u20140\u20140\u2014s\u2014,\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014,\u2014 \u2014a\u2014n\u2014d\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014",
    "era": "Evolution Timeline",
    "image": "/images_updated/a_cinematic_infographic_poster_in_a_dark_brown_gol.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Green moong dal",
      "Rice",
      "Ginger",
      "Green chillies",
      "Onion",
      "Cumin"
    ]
  },
  {
    "id": "info-3",
    "dishId": "pondicherry-fish-curry",
    "title": "\u2014P\u2014o\u2014n\u2014d\u2014i\u2014c\u2014h\u2014e\u2014r\u2014r\u2014y\u2014 \u2014C\u2014r\u2014e\u2014o\u2014l\u2014e\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014",
    "subtitle": "\u2014F\u2014r\u2014a\u2014n\u2014c\u2014o\u2014-\u2014T\u2014a\u2014m\u2014i\u2014l\u2014 \u2014c\u2014o\u2014a\u2014s\u2014t\u2014a\u2014l\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014h\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014a\u2014n\u2014d\u2014 \u2014s\u2014l\u2014o\u2014w\u2014 \u2014c\u2014o\u2014c\u2014o\u2014n\u2014u\u2014t\u2014-\u2014t\u2014a\u2014m\u2014a\u2014r\u2014i\u2014n\u2014d\u2014 \u2014r\u2014e\u2014d\u2014u\u2014c\u2014t\u2014i\u2014o\u2014n\u2014",
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
    "title": "\u2014G\u2014u\u2014r\u2014 \u2014G\u2014u\u2014r\u2014 \u2014C\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014D\u2014a\u2014y\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014L\u2014a\u2014d\u2014a\u2014k\u2014h\u2014i\u2014 \u2014c\u2014h\u2014u\u2014r\u2014n\u2014e\u2014d\u2014 \u2014y\u2014a\u2014k\u2014 \u2014b\u2014u\u2014t\u2014t\u2014e\u2014r\u2014 \u2014t\u2014e\u2014a\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014k\u2014h\u2014a\u2014m\u2014b\u2014i\u2014r\u2014 \u2014b\u2014r\u2014e\u2014a\u2014d\u2014",
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
    "title": "\u2014B\u2014a\u2014l\u2014 \u2014M\u2014i\u2014t\u2014h\u2014a\u2014i\u2014 \u2014\u2014\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014P\u2014a\u2014h\u2014a\u2014d\u2014i\u2014 \u2014C\u2014o\u2014n\u2014f\u2014e\u2014c\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014K\u2014u\u2014m\u2014a\u2014o\u2014n\u2014i\u2014 \u2014r\u2014o\u2014a\u2014s\u2014t\u2014e\u2014d\u2014 \u2014k\u2014h\u2014o\u2014a\u2014 \u2014f\u2014u\u2014d\u2014g\u2014e\u2014 \u2014c\u2014o\u2014a\u2014t\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014s\u2014u\u2014g\u2014a\u2014r\u2014 \u2014w\u2014h\u2014i\u2014t\u2014e\u2014 \u2014b\u2014e\u2014a\u2014d\u2014s\u2014",
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
    "title": "\u2014K\u2014a\u2014s\u2014h\u2014m\u2014i\u2014r\u2014i\u2014 \u2014D\u2014u\u2014m\u2014 \u2014A\u2014l\u2014o\u2014o\u2014 \u2014\u2014\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014I\u2014c\u2014o\u2014n\u2014i\u2014c\u2014 \u2014b\u2014a\u2014b\u2014y\u2014 \u2014p\u2014o\u2014t\u2014a\u2014t\u2014o\u2014e\u2014s\u2014 \u2014s\u2014i\u2014m\u2014m\u2014e\u2014r\u2014e\u2014d\u2014 \u2014i\u2014n\u2014 \u2014c\u2014u\u2014r\u2014d\u2014,\u2014 \u2014f\u2014e\u2014n\u2014n\u2014e\u2014l\u2014 \u2014a\u2014n\u2014d\u2014 \u2014d\u2014r\u2014y\u2014 \u2014g\u2014i\u2014n\u2014g\u2014e\u2014r\u2014",
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
    "title": "\u2014L\u2014a\u2014d\u2014a\u2014k\u2014h\u2014i\u2014 \u2014S\u2014k\u2014y\u2014u\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014F\u2014o\u2014r\u2014m\u2014u\u2014l\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014O\u2014r\u2014i\u2014g\u2014i\u2014n\u2014a\u2014l\u2014 \u2014h\u2014i\u2014g\u2014h\u2014-\u2014a\u2014l\u2014t\u2014i\u2014t\u2014u\u2014d\u2014e\u2014 \u2014h\u2014e\u2014a\u2014r\u2014t\u2014h\u2014 \u2014s\u2014t\u2014e\u2014w\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014i\u2014n\u2014d\u2014i\u2014g\u2014e\u2014n\u2014o\u2014u\u2014s\u2014 \u2014g\u2014r\u2014a\u2014i\u2014n\u2014s\u2014",
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
    "title": "\u2014O\u2014l\u2014d\u2014 \u2014D\u2014e\u2014l\u2014h\u2014i\u2014 \u2014N\u2014i\u2014h\u2014a\u2014r\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014L\u2014e\u2014g\u2014e\u2014n\u2014d\u2014a\u2014r\u2014y\u2014 \u2014s\u2014l\u2014o\u2014w\u2014-\u2014c\u2014o\u2014o\u2014k\u2014e\u2014d\u2014 \u2014o\u2014v\u2014e\u2014r\u2014n\u2014i\u2014g\u2014h\u2014t\u2014 \u2014s\u2014h\u2014a\u2014n\u2014k\u2014 \u2014s\u2014t\u2014e\u2014w\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014p\u2014o\u2014t\u2014l\u2014i\u2014 \u2014a\u2014r\u2014o\u2014m\u2014a\u2014t\u2014i\u2014c\u2014s\u2014",
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
    "title": "\u2014R\u2014o\u2014g\u2014a\u2014n\u2014 \u2014J\u2014o\u2014s\u2014h\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014S\u2014t\u2014y\u2014l\u2014e\u2014",
    "subtitle": "\u2014T\u2014h\u2014e\u2014 \u2014R\u2014o\u2014y\u2014a\u2014l\u2014 \u2014K\u2014a\u2014s\u2014h\u2014m\u2014i\u2014r\u2014i\u2014 \u2014m\u2014u\u2014t\u2014t\u2014o\u2014n\u2014 \u2014c\u2014u\u2014r\u2014r\u2014y\u2014 \u2014s\u2014l\u2014o\u2014w\u2014-\u2014c\u2014o\u2014o\u2014k\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014m\u2014a\u2014w\u2014a\u2014l\u2014 \u2014a\u2014n\u2014d\u2014 \u2014m\u2014u\u2014s\u2014t\u2014a\u2014r\u2014d\u2014 \u2014o\u2014i\u2014l\u2014",
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
    "title": "\u2014R\u2014o\u2014g\u2014a\u2014n\u2014 \u2014J\u2014o\u2014s\u2014h\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014W\u2014a\u2014z\u2014w\u2014a\u2014n\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014p\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014o\u2014f\u2014 \u2014t\u2014h\u2014e\u2014 \u2014c\u2014l\u2014a\u2014s\u2014s\u2014i\u2014c\u2014 \u2014K\u2014a\u2014s\u2014h\u2014m\u2014i\u2014r\u2014i\u2014 \u2014f\u2014e\u2014s\u2014t\u2014i\u2014v\u2014e\u2014 \u2014c\u2014u\u2014r\u2014r\u2014y\u2014",
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
    "title": "\u2014S\u2014h\u2014o\u2014r\u2014s\u2014h\u2014e\u2014 \u2014I\u2014l\u2014i\u2014s\u2014h\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014H\u2014i\u2014l\u2014s\u2014a\u2014 \u2014s\u2014t\u2014e\u2014a\u2014k\u2014s\u2014 \u2014s\u2014t\u2014e\u2014a\u2014m\u2014e\u2014d\u2014 \u2014i\u2014n\u2014 \u2014f\u2014r\u2014e\u2014s\u2014h\u2014l\u2014y\u2014 \u2014g\u2014r\u2014o\u2014u\u2014n\u2014d\u2014 \u2014y\u2014e\u2014l\u2014l\u2014o\u2014w\u2014 \u2014a\u2014n\u2014d\u2014 \u2014b\u2014l\u2014a\u2014c\u2014k\u2014 \u2014m\u2014u\u2014s\u2014t\u2014a\u2014r\u2014d\u2014 \u2014p\u2014a\u2014s\u2014t\u2014e\u2014",
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
    "title": "\u2014A\u2014n\u2014d\u2014a\u2014m\u2014a\u2014n\u2014 \u2014C\u2014o\u2014c\u2014o\u2014n\u2014u\u2014t\u2014 \u2014P\u2014r\u2014a\u2014w\u2014n\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014S\u2014t\u2014y\u2014l\u2014e\u2014",
    "subtitle": "\u2014F\u2014r\u2014e\u2014s\u2014h\u2014 \u2014c\u2014o\u2014a\u2014s\u2014t\u2014a\u2014l\u2014 \u2014i\u2014s\u2014l\u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014a\u2014w\u2014n\u2014s\u2014 \u2014c\u2014o\u2014o\u2014k\u2014e\u2014d\u2014 \u2014i\u2014n\u2014 \u2014f\u2014r\u2014a\u2014g\u2014r\u2014a\u2014n\u2014t\u2014 \u2014f\u2014r\u2014e\u2014s\u2014h\u2014l\u2014y\u2014 \u2014p\u2014r\u2014e\u2014s\u2014s\u2014e\u2014d\u2014 \u2014c\u2014o\u2014c\u2014o\u2014n\u2014u\u2014t\u2014 \u2014m\u2014i\u2014l\u2014k\u2014",
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
    "title": "\u2014G\u2014u\u2014r\u2014 \u2014G\u2014u\u2014r\u2014 \u2014C\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014F\u2014o\u2014r\u2014m\u2014u\u2014l\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014h\u2014a\u2014n\u2014d\u2014-\u2014c\u2014h\u2014u\u2014r\u2014n\u2014e\u2014d\u2014 \u2014t\u2014e\u2014a\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014b\u2014r\u2014i\u2014c\u2014k\u2014 \u2014t\u2014e\u2014a\u2014,\u2014 \u2014s\u2014a\u2014l\u2014t\u2014,\u2014 \u2014a\u2014n\u2014d\u2014 \u2014b\u2014u\u2014t\u2014t\u2014e\u2014r\u2014",
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
    "id": "info-14",
    "dishId": "pesarattu",
    "title": "\u2014P\u2014e\u2014s\u2014a\u2014r\u2014a\u2014t\u2014t\u2014u\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014P\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014W\u2014h\u2014o\u2014l\u2014e\u2014 \u2014g\u2014r\u2014e\u2014e\u2014n\u2014 \u2014m\u2014o\u2014o\u2014n\u2014g\u2014 \u2014b\u2014a\u2014t\u2014t\u2014e\u2014r\u2014 \u2014g\u2014r\u2014o\u2014u\u2014n\u2014d\u2014 \u2014o\u2014n\u2014 \u2014s\u2014t\u2014o\u2014n\u2014e\u2014 \u2014m\u2014o\u2014r\u2014t\u2014a\u2014r\u2014 \u2014a\u2014n\u2014d\u2014 \u2014g\u2014r\u2014i\u2014d\u2014d\u2014l\u2014e\u2014d\u2014 \u2014o\u2014n\u2014 \u2014i\u2014r\u2014o\u2014n\u2014 \u2014t\u2014a\u2014w\u2014a\u2014",
    "era": "1800s Traditional",
    "image": "/images_updated/a_detailed_infographic_poster_for_pesarattu_180.png",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Green moong dal",
      "Rice",
      "Ginger",
      "Green chillies",
      "Onion",
      "Cumin"
    ]
  },
  {
    "id": "info-15",
    "dishId": "kashmiri-dum-aloo",
    "title": "\u2014K\u2014a\u2014s\u2014h\u2014m\u2014i\u2014r\u2014i\u2014 \u2014D\u2014u\u2014m\u2014 \u2014A\u2014l\u2014o\u2014o\u2014 \u2014\u2014\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014M\u2014e\u2014t\u2014h\u2014o\u2014d\u2014",
    "subtitle": "\u2014D\u2014e\u2014e\u2014p\u2014-\u2014p\u2014r\u2014i\u2014c\u2014k\u2014e\u2014d\u2014 \u2014b\u2014a\u2014b\u2014y\u2014 \u2014p\u2014o\u2014t\u2014a\u2014t\u2014o\u2014e\u2014s\u2014 \u2014s\u2014l\u2014o\u2014w\u2014-\u2014c\u2014o\u2014o\u2014k\u2014e\u2014d\u2014 \u2014i\u2014n\u2014 \u2014r\u2014i\u2014c\u2014h\u2014 \u2014y\u2014o\u2014g\u2014u\u2014r\u2014t\u2014 \u2014g\u2014r\u2014a\u2014v\u2014y\u2014",
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
    "title": "\u2014S\u2014h\u2014o\u2014r\u2014s\u2014h\u2014e\u2014 \u2014I\u2014l\u2014i\u2014s\u2014h\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014R\u2014i\u2014v\u2014e\u2014r\u2014i\u2014n\u2014e\u2014 \u2014T\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014m\u2014u\u2014s\u2014t\u2014a\u2014r\u2014d\u2014 \u2014o\u2014i\u2014l\u2014,\u2014 \u2014g\u2014r\u2014e\u2014e\u2014n\u2014 \u2014c\u2014h\u2014i\u2014l\u2014l\u2014i\u2014e\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014n\u2014i\u2014g\u2014e\u2014l\u2014l\u2014a\u2014 \u2014s\u2014e\u2014e\u2014d\u2014s\u2014",
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
    "title": "\u2014M\u2014i\u2014s\u2014h\u2014t\u2014i\u2014 \u2014D\u2014o\u2014i\u2014 \u2014\u2014\u2014 \u2014C\u2014l\u2014a\u2014y\u2014 \u2014P\u2014o\u2014t\u2014 \u2014F\u2014e\u2014r\u2014m\u2014e\u2014n\u2014t\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014C\u2014a\u2014r\u2014a\u2014m\u2014e\u2014l\u2014i\u2014z\u2014e\u2014d\u2014 \u2014r\u2014e\u2014d\u2014u\u2014c\u2014e\u2014d\u2014 \u2014m\u2014i\u2014l\u2014k\u2014 \u2014s\u2014e\u2014t\u2014 \u2014i\u2014n\u2014 \u2014e\u2014a\u2014r\u2014t\u2014h\u2014e\u2014n\u2014 \u2014p\u2014o\u2014t\u2014s\u2014 \u2014t\u2014o\u2014 \u2014c\u2014r\u2014e\u2014a\u2014t\u2014e\u2014 \u2014n\u2014a\u2014t\u2014u\u2014r\u2014a\u2014l\u2014 \u2014s\u2014w\u2014e\u2014e\u2014t\u2014n\u2014e\u2014s\u2014s\u2014",
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
    "title": "\u2014B\u2014a\u2014n\u2014a\u2014r\u2014a\u2014s\u2014i\u2014 \u2014K\u2014a\u2014c\u2014h\u2014o\u2014r\u2014i\u2014 \u2014S\u2014a\u2014b\u2014z\u2014i\u2014 \u2014\u2014\u2014 \u20142\u20140\u20142\u20146\u2014 \u2014S\u2014t\u2014y\u2014l\u2014e\u2014",
    "subtitle": "\u2014H\u2014e\u2014e\u2014n\u2014g\u2014-\u2014s\u2014p\u2014i\u2014c\u2014e\u2014d\u2014 \u2014f\u2014l\u2014a\u2014k\u2014y\u2014 \u2014k\u2014a\u2014c\u2014h\u2014o\u2014r\u2014i\u2014 \u2014s\u2014e\u2014r\u2014v\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014s\u2014p\u2014i\u2014c\u2014y\u2014 \u2014p\u2014o\u2014t\u2014a\u2014t\u2014o\u2014-\u2014c\u2014h\u2014i\u2014c\u2014k\u2014p\u2014e\u2014a\u2014 \u2014c\u2014u\u2014r\u2014r\u2014y\u2014",
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
    "title": "\u2014K\u2014a\u2014f\u2014u\u2014l\u2014i\u2014 \u2014\u2014\u2014 \u20142\u20140\u20142\u20146\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014P\u2014a\u2014h\u2014a\u2014d\u2014i\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014R\u2014i\u2014c\u2014h\u2014 \u2014U\u2014t\u2014t\u2014a\u2014r\u2014a\u2014k\u2014h\u2014a\u2014n\u2014d\u2014 \u2014w\u2014i\u2014l\u2014d\u2014 \u2014s\u2014p\u2014i\u2014n\u2014a\u2014c\u2014h\u2014 \u2014a\u2014n\u2014d\u2014 \u2014f\u2014e\u2014n\u2014u\u2014g\u2014r\u2014e\u2014e\u2014k\u2014 \u2014g\u2014r\u2014e\u2014e\u2014n\u2014s\u2014 \u2014t\u2014e\u2014m\u2014p\u2014e\u2014r\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014j\u2014a\u2014k\u2014h\u2014i\u2014y\u2014a\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014o\u2014u\u2014t\u2014i\u2014 \u2014K\u2014e\u2014b\u2014a\u2014b\u2014 \u2014\u2014\u2014 \u20142\u20140\u20142\u20146\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014F\u2014o\u2014r\u2014m\u2014u\u2014l\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014M\u2014e\u2014l\u2014t\u2014-\u2014i\u2014n\u2014-\u2014m\u2014o\u2014u\u2014t\u2014h\u2014 \u2014s\u2014m\u2014o\u2014k\u2014e\u2014d\u2014 \u2014m\u2014i\u2014n\u2014c\u2014e\u2014 \u2014p\u2014a\u2014t\u2014t\u2014i\u2014e\u2014s\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014r\u2014a\u2014w\u2014 \u2014p\u2014a\u2014p\u2014a\u2014y\u2014a\u2014 \u2014a\u2014n\u2014d\u2014 \u20141\u20146\u20140\u2014 \u2014p\u2014o\u2014t\u2014l\u2014i\u2014 \u2014s\u2014p\u2014i\u2014c\u2014e\u2014s\u2014",
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
    "title": "\u2014H\u2014y\u2014d\u2014e\u2014r\u2014a\u2014b\u2014a\u2014d\u2014i\u2014 \u2014D\u2014u\u2014m\u2014 \u2014B\u2014i\u2014r\u2014y\u2014a\u2014n\u2014i\u2014 \u2014\u2014\u2014 \u2014K\u2014e\u2014y\u2014 \u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014M\u2014a\u2014t\u2014r\u2014i\u2014x\u2014",
    "subtitle": "\u2014R\u2014o\u2014y\u2014a\u2014l\u2014 \u2014N\u2014i\u2014z\u2014a\u2014m\u2014i\u2014 \u2014a\u2014r\u2014o\u2014m\u2014a\u2014t\u2014i\u2014c\u2014s\u2014:\u2014 \u2014a\u2014g\u2014e\u2014d\u2014 \u2014b\u2014a\u2014s\u2014m\u2014a\u2014t\u2014i\u2014,\u2014 \u2014p\u2014u\u2014r\u2014e\u2014 \u2014s\u2014a\u2014f\u2014f\u2014r\u2014o\u2014n\u2014,\u2014 \u2014b\u2014i\u2014r\u2014i\u2014s\u2014t\u2014a\u2014 \u2014a\u2014n\u2014d\u2014 \u2014t\u2014e\u2014n\u2014d\u2014e\u2014r\u2014 \u2014m\u2014e\u2014a\u2014t\u2014",
    "era": "Culinary Craft",
    "image": "/images_updated/a_polished_dark_themed_infographic_card_layout_fo.png",
    "isFullTimelinePoster": true,
    "stageNumber": 1,
    "ingredients": [
      "Aged Basmati rice",
      "Tender marinated meat",
      "Pure saffron",
      "Fried onions (Birista)",
      "Yoghurt",
      "Whole spices",
      "Mint & coriander"
    ]
  },
  {
    "id": "info-22",
    "dishId": "mui-borok",
    "title": "\u2014M\u2014u\u2014i\u2014 \u2014B\u2014o\u2014r\u2014o\u2014k\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014T\u2014r\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014I\u2014n\u2014d\u2014i\u2014g\u2014e\u2014n\u2014o\u2014u\u2014s\u2014 \u2014b\u2014e\u2014r\u2014m\u2014a\u2014 \u2014f\u2014e\u2014r\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014f\u2014i\u2014s\u2014h\u2014 \u2014s\u2014t\u2014e\u2014w\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014b\u2014a\u2014m\u2014b\u2014o\u2014o\u2014 \u2014s\u2014h\u2014o\u2014o\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014l\u2014o\u2014c\u2014a\u2014l\u2014 \u2014h\u2014e\u2014r\u2014b\u2014s\u2014",
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
    "title": "\u2014G\u2014u\u2014r\u2014 \u2014G\u2014u\u2014r\u2014 \u2014C\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014A\u2014n\u2014c\u2014i\u2014e\u2014n\u2014t\u2014 \u2014H\u2014e\u2014a\u2014r\u2014t\u2014h\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014O\u2014r\u2014i\u2014g\u2014i\u2014n\u2014a\u2014l\u2014 \u2014b\u2014u\u2014t\u2014t\u2014e\u2014r\u2014 \u2014t\u2014e\u2014a\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014f\u2014o\u2014r\u2014 \u2014h\u2014i\u2014g\u2014h\u2014-\u2014a\u2014l\u2014t\u2014i\u2014t\u2014u\u2014d\u2014e\u2014 \u2014T\u2014i\u2014b\u2014e\u2014t\u2014a\u2014n\u2014-\u2014L\u2014a\u2014d\u2014a\u2014k\u2014h\u2014i\u2014 \u2014w\u2014i\u2014n\u2014t\u2014e\u2014r\u2014s\u2014",
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
    "title": "\u2014A\u2014n\u2014d\u2014a\u2014m\u2014a\u2014n\u2014 \u2014C\u2014o\u2014c\u2014o\u2014n\u2014u\u2014t\u2014 \u2014P\u2014r\u2014a\u2014w\u2014n\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014",
    "subtitle": "\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014c\u2014o\u2014a\u2014s\u2014t\u2014a\u2014l\u2014 \u2014t\u2014r\u2014i\u2014b\u2014a\u2014l\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014w\u2014i\u2014l\u2014d\u2014 \u2014i\u2014s\u2014l\u2014a\u2014n\u2014d\u2014 \u2014s\u2014p\u2014i\u2014c\u2014e\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014c\u2014o\u2014c\u2014o\u2014n\u2014u\u2014t\u2014 \u2014m\u2014i\u2014l\u2014k\u2014",
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
    "title": "\u2014C\u2014h\u2014a\u2014n\u2014d\u2014n\u2014i\u2014 \u2014C\u2014h\u2014o\u2014w\u2014k\u2014 \u2014P\u2014a\u2014p\u2014d\u2014i\u2014 \u2014C\u2014h\u2014a\u2014a\u2014t\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014S\u2014t\u2014y\u2014l\u2014e\u2014",
    "subtitle": "\u2014C\u2014r\u2014i\u2014s\u2014p\u2014y\u2014 \u2014f\u2014l\u2014o\u2014u\u2014r\u2014 \u2014c\u2014r\u2014i\u2014s\u2014p\u2014s\u2014 \u2014l\u2014a\u2014y\u2014e\u2014r\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014s\u2014p\u2014i\u2014c\u2014e\u2014d\u2014 \u2014p\u2014o\u2014t\u2014a\u2014t\u2014o\u2014e\u2014s\u2014,\u2014 \u2014c\u2014u\u2014r\u2014d\u2014,\u2014 \u2014a\u2014n\u2014d\u2014 \u2014s\u2014a\u2014u\u2014n\u2014t\u2014h\u2014 \u2014c\u2014h\u2014u\u2014t\u2014n\u2014e\u2014y\u2014",
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
    "title": "\u2014I\u2014s\u2014l\u2014a\u2014n\u2014d\u2014 \u2014M\u2014u\u2014d\u2014 \u2014C\u2014r\u2014a\u2014b\u2014 \u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014F\u2014r\u2014e\u2014s\u2014h\u2014 \u2014m\u2014a\u2014n\u2014g\u2014r\u2014o\u2014v\u2014e\u2014 \u2014c\u2014r\u2014a\u2014b\u2014 \u2014r\u2014o\u2014a\u2014s\u2014t\u2014e\u2014d\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014f\u2014r\u2014e\u2014s\u2014h\u2014l\u2014y\u2014 \u2014g\u2014r\u2014o\u2014u\u2014n\u2014d\u2014 \u2014i\u2014s\u2014l\u2014a\u2014n\u2014d\u2014 \u2014p\u2014e\u2014p\u2014p\u2014e\u2014r\u2014c\u2014o\u2014r\u2014n\u2014 \u2014m\u2014a\u2014s\u2014a\u2014l\u2014a\u2014",
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
    "title": "\u2014M\u2014i\u2014s\u2014h\u2014t\u2014i\u2014 \u2014D\u2014o\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014l\u2014a\u2014s\u2014s\u2014i\u2014c\u2014 \u2014K\u2014o\u2014l\u2014k\u2014a\u2014t\u2014a\u2014 \u2014s\u2014w\u2014e\u2014e\u2014t\u2014 \u2014y\u2014o\u2014g\u2014u\u2014r\u2014t\u2014 \u2014m\u2014a\u2014d\u2014e\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014s\u2014u\u2014g\u2014a\u2014r\u2014c\u2014a\u2014n\u2014e\u2014 \u2014j\u2014a\u2014g\u2014g\u2014e\u2014r\u2014y\u2014 \u2014a\u2014n\u2014d\u2014 \u2014d\u2014a\u2014t\u2014e\u2014 \u2014p\u2014a\u2014l\u2014m\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014o\u2014u\u2014t\u2014i\u2014 \u2014K\u2014e\u2014b\u2014a\u2014b\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014N\u2014a\u2014w\u2014a\u2014b\u2014i\u2014 \u2014D\u2014a\u2014r\u2014b\u2014a\u2014r\u2014 \u2014O\u2014r\u2014i\u2014g\u2014i\u2014n\u2014",
    "subtitle": "\u2014T\u2014h\u2014e\u2014 \u2014o\u2014r\u2014i\u2014g\u2014i\u2014n\u2014a\u2014l\u2014 \u2014t\u2014e\u2014n\u2014d\u2014e\u2014r\u2014 \u2014s\u2014m\u2014o\u2014k\u2014e\u2014d\u2014 \u2014p\u2014a\u2014t\u2014t\u2014i\u2014e\u2014s\u2014 \u2014c\u2014r\u2014a\u2014f\u2014t\u2014e\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014N\u2014a\u2014w\u2014a\u2014b\u2014 \u2014A\u2014s\u2014a\u2014d\u2014-\u2014u\u2014d\u2014-\u2014D\u2014a\u2014u\u2014l\u2014a\u2014",
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
    "title": "\u2014B\u2014a\u2014n\u2014a\u2014r\u2014a\u2014s\u2014i\u2014 \u2014K\u2014a\u2014c\u2014h\u2014o\u2014r\u2014i\u2014 \u2014S\u2014a\u2014b\u2014z\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014V\u2014a\u2014r\u2014a\u2014n\u2014a\u2014s\u2014i\u2014 \u2014g\u2014h\u2014a\u2014t\u2014s\u2014 \u2014b\u2014r\u2014e\u2014a\u2014k\u2014f\u2014a\u2014s\u2014t\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014s\u2014t\u2014o\u2014n\u2014e\u2014-\u2014g\u2014r\u2014o\u2014u\u2014n\u2014d\u2014 \u2014d\u2014a\u2014l\u2014 \u2014f\u2014i\u2014l\u2014l\u2014i\u2014n\u2014g\u2014 \u2014a\u2014n\u2014d\u2014 \u2014h\u2014i\u2014n\u2014g\u2014 \u2014t\u2014a\u2014d\u2014k\u2014a\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014o\u2014u\u2014t\u2014i\u2014 \u2014K\u2014e\u2014b\u2014a\u2014b\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014C\u2014o\u2014l\u2014o\u2014n\u2014i\u2014a\u2014l\u2014 \u2014E\u2014r\u2014a\u2014 \u2014F\u2014o\u2014r\u2014m\u2014u\u2014l\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
    "subtitle": "\u2014S\u2014m\u2014o\u2014k\u2014e\u2014d\u2014 \u2014d\u2014h\u2014u\u2014n\u2014g\u2014a\u2014r\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014 \u2014a\u2014n\u2014d\u2014 \u2014s\u2014i\u2014l\u2014v\u2014e\u2014r\u2014 \u2014v\u2014a\u2014r\u2014q\u2014 \u2014p\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014i\u2014n\u2014 \u2014r\u2014o\u2014y\u2014a\u2014l\u2014 \u2014L\u2014u\u2014c\u2014k\u2014n\u2014o\u2014w\u2014",
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
    "title": "\u2014B\u2014a\u2014l\u2014 \u2014M\u2014i\u2014t\u2014h\u2014a\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014A\u2014l\u2014m\u2014o\u2014r\u2014a\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014b\u2014r\u2014o\u2014w\u2014n\u2014 \u2014r\u2014o\u2014a\u2014s\u2014t\u2014e\u2014d\u2014 \u2014m\u2014i\u2014l\u2014k\u2014 \u2014f\u2014u\u2014d\u2014g\u2014e\u2014 \u2014r\u2014o\u2014l\u2014l\u2014 \u2014c\u2014o\u2014v\u2014e\u2014r\u2014e\u2014d\u2014 \u2014i\u2014n\u2014 \u2014s\u2014w\u2014e\u2014e\u2014t\u2014 \u2014w\u2014h\u2014i\u2014t\u2014e\u2014 \u2014s\u2014e\u2014e\u2014d\u2014s\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014-\u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014S\u2014a\u2014l\u2014a\u2014d\u2014 \u2014(\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014-\u2014c\u2014.\u20141\u20149\u20140\u20140\u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014S\u2014a\u2014l\u2014a\u2014d\u2014 \u2014(\u2014E\u2014n\u2014h\u2014a\u2014n\u2014c\u2014e\u2014d\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014",
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
    "title": "\u2014G\u2014o\u2014n\u2014g\u2014u\u2014r\u2014a\u2014 \u2014M\u2014u\u2014t\u2014t\u2014o\u2014n\u2014",
    "subtitle": "\u2014(\u2014A\u2014n\u2014d\u2014h\u2014r\u2014a\u2014P\u2014r\u2014a\u2014d\u2014e\u2014s\u2014h\u2014)\u2014",
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
    "title": "\u2014G\u2014o\u2014n\u2014g\u2014u\u2014r\u2014a\u2014 \u2014M\u2014u\u2014t\u2014t\u2014o\u2014n\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014G\u2014o\u2014n\u2014g\u2014u\u2014r\u2014a\u2014 \u2014M\u2014u\u2014t\u2014t\u2014o\u2014n\u2014",
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
    "title": "\u2014G\u2014o\u2014n\u2014g\u2014u\u2014r\u2014a\u2014 \u2014M\u2014u\u2014t\u2014t\u2014o\u2014n\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014G\u2014o\u2014n\u2014g\u2014u\u2014r\u2014a\u2014 \u2014M\u2014u\u2014t\u2014t\u2014o\u2014n\u2014",
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
    "title": "\u2014T\u2014h\u2014u\u2014k\u2014p\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014T\u2014h\u2014u\u2014k\u2014p\u2014a\u2014",
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
    "title": "\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014-\u2014c\u2014.\u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014G\u2014r\u2014e\u2014e\u2014n\u2014s\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014g\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014g\u2014",
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
    "title": "\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014g\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014g\u2014",
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
    "title": "\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014 \u2014-\u2014c\u2014.\u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014G\u2014r\u2014e\u2014e\u2014n\u2014s\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014B\u2014a\u2014m\u2014b\u2014o\u2014o\u2014s\u2014",
    "subtitle": "\u2014S\u2014h\u2014o\u2014o\u2014t\u2014P\u2014o\u2014r\u2014k\u2014",
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
    "title": "\u2014B\u2014a\u2014m\u2014b\u2014o\u2014o\u2014 \u2014S\u2014h\u2014o\u2014o\u2014t\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014a\u2014m\u2014b\u2014o\u2014o\u2014 \u2014S\u2014h\u2014o\u2014o\u2014t\u2014 \u2014P\u2014o\u2014r\u2014k\u2014",
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
    "title": "\u2014a\u2014n\u2014c\u2014o\u2014o\u2014k\u2014n\u2014u\u2014n\u2014s\u2014o\u2014n\u2014",
    "subtitle": "\u20142\u20140\u20140\u20140\u2014s\u2014-\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014P\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
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
    "title": "\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014i\u2014o\u2014n\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014G\u2014r\u2014e\u2014e\u2014n\u2014s\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014D\u2014o\u2014h\u2014n\u2014e\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014o\u2014r\u2014T\u2014e\u2014n\u2014g\u2014a\u2014",
    "subtitle": "\u2014(\u2014A\u2014s\u2014s\u2014a\u2014m\u2014)\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014o\u2014r\u2014 \u2014T\u2014e\u2014n\u2014g\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014a\u2014s\u2014o\u2014r\u2014 \u2014T\u2014e\u2014n\u2014g\u2014a\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014o\u2014r\u2014 \u2014T\u2014e\u2014n\u2014g\u2014a\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014a\u2014s\u2014o\u2014r\u2014 \u2014T\u2014e\u2014n\u2014g\u2014a\u2014",
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
    "title": "\u2014L\u2014i\u2014t\u2014t\u2014i\u2014 \u2014C\u2014h\u2014o\u2014k\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014L\u2014i\u2014t\u2014t\u2014i\u2014 \u2014C\u2014h\u2014o\u2014k\u2014h\u2014a\u2014",
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
    "title": "\u2014L\u2014i\u2014t\u2014t\u2014i\u2014 \u2014C\u2014h\u2014o\u2014k\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014L\u2014i\u2014t\u2014t\u2014i\u2014 \u2014C\u2014h\u2014o\u2014k\u2014h\u2014a\u2014",
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
    "title": "\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014-\u2014 \u2014c\u2014.\u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014P\u2014r\u2014e\u2014-\u2014C\u2014o\u2014l\u2014o\u2014n\u2014i\u2014a\u2014l\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014",
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
    "title": "\u2014B\u2014a\u2014i\u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014",
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
    "title": "\u2014T\u2014h\u2014e\u2014k\u2014u\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014T\u2014h\u2014e\u2014k\u2014u\u2014a\u2014",
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
    "title": "\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014-\u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014)\u2014",
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
    "title": "\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014",
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
    "title": "\u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014B\u2014a\u2014i\u2014",
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
    "title": "\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20141\u20149\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014C\u2014h\u2014i\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014C\u2014h\u2014i\u2014l\u2014a\u2014",
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
    "title": "\u2014C\u2014h\u2014i\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014C\u2014h\u2014i\u2014l\u2014a\u2014",
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
    "title": "\u2014C\u2014h\u2014i\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014C\u2014h\u2014i\u2014l\u2014a\u2014",
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
    "title": "\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014F\u2014a\u2014r\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014F\u2014a\u2014r\u2014a\u2014",
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
    "title": "\u2014F\u2014a\u2014r\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014F\u2014a\u2014r\u2014a\u2014",
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
    "title": "\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014M\u2014i\u2014z\u2014o\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014)\u2014",
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
    "title": "\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014",
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
    "title": "\u2014G\u2014o\u2014a\u2014n\u2014 \u2014F\u2014i\u2014s\u2014h\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014",
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
    "title": "\u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014S\u2014a\u2014w\u2014h\u2014c\u2014h\u2014i\u2014a\u2014r\u2014",
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
    "title": "\u2014N\u2014a\u2014g\u2014a\u2014 \u2014S\u2014m\u2014o\u2014k\u2014e\u2014d\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014N\u2014a\u2014g\u2014a\u2014 \u2014S\u2014m\u2014o\u2014k\u2014e\u2014d\u2014 \u2014P\u2014o\u2014r\u2014k\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014U\u2014s\u2014e\u2014d\u2014 \u2014(\u2014c\u2014.\u20142\u20140\u20140\u20140\u2014s\u2014-\u2014N\u2014o\u2014w\u2014)\u2014",
    "subtitle": "\u20142\u20140\u20140\u20140\u2014s\u2014-\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014P\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
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
    "title": "\u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014",
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
    "title": "\u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014",
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
    "title": "\u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014h\u2014o\u2014k\u2014l\u2014a\u2014",
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
    "title": "\u2014J\u2014n\u2014d\u2014h\u2014i\u2014y\u2014u\u2014",
    "subtitle": "\u2014(\u2014G\u2014u\u2014j\u2014a\u2014r\u2014a\u2014t\u2014)\u2014",
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
    "title": "\u2014U\u2014n\u2014d\u2014h\u2014i\u2014y\u2014u\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014U\u2014n\u2014d\u2014h\u2014i\u2014y\u2014u\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014h\u2014o\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014N\u2014a\u2014g\u2014a\u2014 \u2014R\u2014i\u2014c\u2014e\u2014-\u2014M\u2014e\u2014a\u2014t\u2014 \u2014P\u2014o\u2014r\u2014r\u2014i\u2014d\u2014g\u2014e\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014-\u2014M\u2014i\u2014d\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014h\u2014o\u2014 \u2014-\u2014c\u2014.\u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014N\u2014a\u2014g\u2014a\u2014 \u2014R\u2014i\u2014c\u2014e\u2014 \u2014a\u2014n\u2014d\u2014 \u2014M\u2014e\u2014a\u2014t\u2014 \u2014P\u2014o\u2014r\u2014r\u2014i\u2014d\u2014g\u2014e\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20141\u20149\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014G\u2014a\u2014l\u2014h\u2014o\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014N\u2014a\u2014g\u2014a\u2014 \u2014R\u2014i\u2014c\u2014e\u2014-\u2014M\u2014e\u2014a\u2014t\u2014 \u2014P\u2014o\u2014r\u2014r\u2014i\u2014d\u2014g\u2014e\u2014 \u2014(\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014)\u2014",
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
    "title": "\u2014D\u2014a\u2014l\u2014m\u2014a\u2014 \u2014-\u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014O\u2014d\u2014i\u2014a\u2014 \u2014L\u2014e\u2014n\u2014t\u2014i\u2014l\u2014-\u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20141\u20149\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014D\u2014a\u2014l\u2014m\u2014a\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014O\u2014d\u2014i\u2014a\u2014 \u2014L\u2014e\u2014n\u2014t\u2014i\u2014l\u2014-\u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
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
    "title": "\u2014D\u2014a\u2014l\u2014m\u2014a\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014u\u2014t\u2014h\u2014e\u2014n\u2014t\u2014i\u2014c\u2014 \u2014O\u2014d\u2014i\u2014a\u2014 \u2014L\u2014e\u2014n\u2014t\u2014i\u2014l\u2014-\u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014(\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014D\u2014a\u2014y\u2014)\u2014",
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
    "title": "\u2014D\u2014a\u2014l\u2014m\u2014a\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014a\u2014l\u2014m\u2014a\u2014",
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
    "title": "\u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014 \u2014M\u2014o\u2014d\u2014a\u2014k\u2014",
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
    "title": "\u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014 \u2014M\u2014o\u2014d\u2014a\u2014k\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014 \u2014M\u2014o\u2014d\u2014a\u2014k\u2014",
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
    "title": "\u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014 \u2014M\u2014o\u2014d\u2014a\u2014k\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014U\u2014k\u2014a\u2014d\u2014i\u2014c\u2014h\u2014e\u2014 \u2014M\u2014o\u2014d\u2014a\u2014k\u2014",
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
    "title": "\u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014",
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
    "title": "\u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014",
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
    "title": "\u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014P\u2014u\u2014r\u2014a\u2014n\u2014 \u2014P\u2014o\u2014l\u2014i\u2014",
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
    "title": "\u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014",
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
    "title": "\u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014",
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
    "title": "\u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014V\u2014a\u2014d\u2014a\u2014 \u2014P\u2014a\u2014v\u2014",
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
    "title": "\u2014B\u2014h\u2014u\u2014t\u2014t\u2014e\u2014K\u2014a\u2014 \u2014K\u2014e\u2014e\u2014s\u2014",
    "subtitle": "\u2014(\u2014M\u2014a\u2014d\u2014h\u2014y\u2014a\u2014 \u2014P\u2014r\u2014a\u2014d\u2014e\u2014s\u2014h\u2014)\u2014",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Fresh sweet corn",
      "Full cream milk",
      "Mustard seeds",
      "Green chillies",
      "Asafoetida",
      "Grated coconut"
    ]
  },
  {
    "id": "info-96",
    "dishId": "bhutte-ka-kees",
    "title": "\u2014B\u2014h\u2014u\u2014t\u2014t\u2014e\u2014 \u2014K\u2014a\u2014 \u2014K\u2014e\u2014e\u2014s\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014h\u2014u\u2014t\u2014t\u2014e\u2014 \u2014K\u2014a\u2014 \u2014K\u2014e\u2014e\u2014s\u2014",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM (3).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Fresh sweet corn",
      "Full cream milk",
      "Mustard seeds",
      "Green chillies",
      "Asafoetida",
      "Grated coconut"
    ]
  },
  {
    "id": "info-97",
    "dishId": "bhutte-ka-kees",
    "title": "\u2014B\u2014h\u2014u\u2014t\u2014t\u2014e\u2014 \u2014K\u2014a\u2014 \u2014K\u2014e\u2014e\u2014s\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014h\u2014u\u2014t\u2014t\u2014e\u2014 \u2014K\u2014a\u2014 \u2014K\u2014e\u2014e\u2014s\u2014",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.40 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Fresh sweet corn",
      "Full cream milk",
      "Mustard seeds",
      "Green chillies",
      "Asafoetida",
      "Grated coconut"
    ]
  },
  {
    "id": "info-98",
    "dishId": "indori-poha",
    "title": "\u2014I\u2014n\u2014d\u2014o\u2014r\u2014i\u2014 \u2014P\u2014o\u2014h\u2014a\u2014",
    "subtitle": "\u2014 \u2014(\u2014M\u2014a\u2014d\u2014h\u2014y\u2014a\u2014",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.41 PM (1).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Thick flattened rice",
      "Fennel seeds",
      "Mustard seeds",
      "Ratlami sev",
      "Pomegranate",
      "Jeeravan masala"
    ]
  },
  {
    "id": "info-99",
    "dishId": "indori-poha",
    "title": "\u2014I\u2014n\u2014d\u2014o\u2014r\u2014i\u2014 \u2014P\u2014o\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014I\u2014n\u2014d\u2014o\u2014r\u2014i\u2014 \u2014P\u2014o\u2014h\u2014a\u2014",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.41 PM (2).jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Thick flattened rice",
      "Fennel seeds",
      "Mustard seeds",
      "Ratlami sev",
      "Pomegranate",
      "Jeeravan masala"
    ]
  },
  {
    "id": "info-100",
    "dishId": "indori-poha",
    "title": "\u2014I\u2014n\u2014d\u2014o\u2014r\u2014i\u2014 \u2014P\u2014o\u2014h\u2014a\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014I\u2014n\u2014d\u2014o\u2014r\u2014i\u2014 \u2014P\u2014o\u2014h\u2014a\u2014",
    "era": "Heritage & Evolution",
    "image": "/images_updated/WhatsApp Image 2026-11-03 at 11.33.41 PM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Thick flattened rice",
      "Fennel seeds",
      "Mustard seeds",
      "Ratlami sev",
      "Pomegranate",
      "Jeeravan masala"
    ]
  },
  {
    "id": "info-101",
    "dishId": "fish-molee",
    "title": "\u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014I\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014M\u2014o\u2014l\u2014e\u2014e\u2014",
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
    "title": "\u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014M\u2014o\u2014l\u2014e\u2014e\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014M\u2014o\u2014l\u2014e\u2014e\u2014",
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
    "title": "\u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014M\u2014o\u2014l\u2014e\u2014e\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014e\u2014r\u2014a\u2014l\u2014a\u2014 \u2014F\u2014i\u2014s\u2014h\u2014 \u2014M\u2014o\u2014l\u2014e\u2014e\u2014",
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
    "title": "\u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014S\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014",
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
    "title": "\u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014",
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
    "title": "\u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014A\u2014p\u2014p\u2014a\u2014m\u2014 \u2014w\u2014i\u2014t\u2014h\u2014 \u2014V\u2014e\u2014g\u2014e\u2014t\u2014a\u2014b\u2014l\u2014e\u2014 \u2014S\u2014t\u2014e\u2014w\u2014",
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
    "title": "\u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014",
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
    "title": "\u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014U\u2014s\u2014e\u2014d\u2014 \u2014(\u2014c\u2014.\u2014 \u20142\u20140\u20140\u20140\u2014s\u2014 \u2014-\u2014N\u2014o\u2014w\u2014)\u2014",
    "subtitle": "\u20142\u20140\u20140\u20140\u2014s\u2014-\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014P\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014",
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
    "title": "\u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014",
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
    "title": "\u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014",
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
    "title": "\u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014",
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
    "title": "\u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014i\u2014s\u2014i\u2014 \u2014B\u2014e\u2014l\u2014e\u2014 \u2014B\u2014a\u2014t\u2014h\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014D\u2014o\u2014s\u2014a\u2014",
    "subtitle": "\u2014(\u2014K\u2014a\u2014r\u2014n\u2014a\u2014t\u2014a\u2014k\u2014a\u2014)\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014D\u2014o\u2014s\u2014a\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014D\u2014o\u2014s\u2014a\u2014",
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
    "title": "\u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014D\u2014o\u2014s\u2014a\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014M\u2014a\u2014s\u2014a\u2014l\u2014a\u2014 \u2014D\u2014o\u2014s\u2014a\u2014",
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
    "title": "\u2014D\u2014h\u2014u\u2014s\u2014k\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014D\u2014h\u2014u\u2014s\u2014k\u2014a\u2014",
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
    "title": "\u2014C\u2014h\u2014i\u2014l\u2014k\u2014a\u2014 \u2014R\u2014o\u2014t\u2014i\u2014",
    "subtitle": "\u2014(\u2014J\u2014h\u2014a\u2014r\u2014k\u2014h\u2014a\u2014n\u2014d\u2014)\u2014",
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
    "title": "\u2014C\u2014h\u2014i\u2014l\u2014k\u2014a\u2014 \u2014R\u2014o\u2014t\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014C\u2014h\u2014i\u2014l\u2014k\u2014a\u2014 \u2014R\u2014o\u2014t\u2014i\u2014",
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
    "title": "\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014",
    "subtitle": "\u2014(\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014 \u2014P\u2014r\u2014a\u2014d\u2014e\u2014s\u2014h\u2014)\u2014",
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
    "title": "\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014",
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
    "title": "\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014",
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
    "title": "\u2014(\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014 \u2014P\u2014r\u2014a\u2014d\u2014e\u2014s\u2014h\u2014)\u2014",
    "subtitle": "\u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014o\u2014f\u2014 \u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014&\u2014P\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014(\u20141\u20148\u20140\u20140\u2014s\u2014-\u20142\u20140\u20140\u20140\u2014s\u2014)\u2014",
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
    "title": "\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014",
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
    "title": "\u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014H\u2014i\u2014m\u2014a\u2014c\u2014h\u2014a\u2014l\u2014i\u2014 \u2014D\u2014h\u2014a\u2014m\u2014",
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
    "title": "\u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014",
    "subtitle": "\u2014(\u2014H\u2014a\u2014r\u2014y\u2014a\u2014n\u2014a\u2014)\u2014",
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
    "title": "\u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014 \u2014\u2014\u2014 \u2014H\u2014e\u2014r\u2014i\u2014t\u2014a\u2014g\u2014e\u2014 \u2014&\u2014 \u2014E\u2014v\u2014o\u2014l\u2014u\u2014t\u2014i\u2014o\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014",
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
    "title": "\u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014",
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
    "title": "\u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014 \u2014\u2014\u2014 \u20141\u20149\u20140\u20140\u2014s\u2014 \u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014K\u2014a\u2014d\u2014h\u2014i\u2014 \u2014P\u2014a\u2014k\u2014o\u2014r\u2014a\u2014",
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
    "title": "\u2014B\u2014a\u2014j\u2014r\u2014a\u2014K\u2014h\u2014i\u2014c\u2014h\u2014d\u2014i\u2014",
    "subtitle": "\u2014(\u2014H\u2014a\u2014r\u2014y\u2014a\u2014n\u2014a\u2014)\u2014",
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
    "title": "\u2014B\u2014a\u2014j\u2014r\u2014a\u2014 \u2014K\u2014h\u2014i\u2014c\u2014h\u2014d\u2014i\u2014 \u2014\u2014\u2014 \u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014/\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014a\u2014j\u2014r\u2014a\u2014 \u2014K\u2014h\u2014i\u2014c\u2014h\u2014d\u2014i\u2014",
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
    "title": "\u2014B\u2014a\u2014j\u2014r\u2014a\u2014 \u2014K\u2014h\u2014i\u2014c\u2014h\u2014d\u2014i\u2014 \u2014\u2014\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014G\u2014u\u2014i\u2014d\u2014e\u2014",
    "subtitle": "\u2014D\u2014o\u2014c\u2014u\u2014m\u2014e\u2014n\u2014t\u2014e\u2014d\u2014 \u2014c\u2014u\u2014l\u2014i\u2014n\u2014a\u2014r\u2014y\u2014 \u2014t\u2014e\u2014c\u2014h\u2014n\u2014i\u2014q\u2014u\u2014e\u2014,\u2014 \u2014i\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014a\u2014n\u2014d\u2014 \u2014p\u2014r\u2014e\u2014p\u2014a\u2014r\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014m\u2014e\u2014t\u2014h\u2014o\u2014d\u2014 \u2014f\u2014o\u2014r\u2014 \u2014B\u2014a\u2014j\u2014r\u2014a\u2014 \u2014K\u2014h\u2014i\u2014c\u2014h\u2014d\u2014i\u2014",
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
    "title": "\u2014E\u2014r\u2014o\u2014m\u2014b\u2014a\u2014-\u2014c\u2014.\u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014M\u2014a\u2014s\u2014h\u2014",
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
    "title": "\u2014E\u2014r\u2014o\u2014m\u2014b\u2014a\u2014 \u2014-\u2014 \u20141\u20148\u20140\u20140\u2014s\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014 \u2014(\u20141\u20148\u20140\u20140\u2014s\u2014)\u2014",
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
    "title": "\u2014S\u2014i\u2014n\u2014g\u2014j\u2014u\u2014-\u2014c\u2014.\u20141\u20148\u20140\u20140\u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014V\u2014e\u2014r\u2014s\u2014i\u2014o\u2014n\u2014 \u2014(\u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014S\u2014a\u2014l\u2014a\u2014d\u2014)\u2014",
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
    "title": "\u2014E\u2014r\u2014o\u2014m\u2014b\u2014a\u2014 \u2014-\u20142\u20140\u20140\u20140\u2014s\u2014 \u2014I\u2014n\u2014g\u2014r\u2014e\u2014d\u2014i\u2014e\u2014n\u2014t\u2014s\u2014",
    "subtitle": "\u2014M\u2014o\u2014d\u2014e\u2014r\u2014n\u2014 \u2014V\u2014a\u2014r\u2014i\u2014a\u2014t\u2014i\u2014o\u2014n\u2014 \u2014(\u2014C\u2014o\u2014n\u2014t\u2014e\u2014m\u2014p\u2014o\u2014r\u2014a\u2014r\u2014y\u2014 \u2014M\u2014a\u2014n\u2014i\u2014p\u2014u\u2014r\u2014i\u2014 \u2014S\u2014t\u2014y\u2014l\u2014e\u2014)\u2014",
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
    "title": "\u2014a\u2014 \u2014P\u2014o\u2014d\u2014a\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014h\u2014h\u2014e\u2014n\u2014a\u2014",
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
    "title": "\u2014a\u2014 \u2014P\u2014o\u2014d\u2014a\u2014-\u2014c\u2014.\u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014h\u2014h\u2014e\u2014n\u2014a\u2014",
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
    "title": "\u2014S\u2014i\u2014k\u2014k\u2014i\u2014m\u2014e\u2014s\u2014e\u2014",
    "subtitle": "\u2014M\u2014o\u2014m\u2014o\u2014s\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
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
    "title": "\u2014S\u2014i\u2014k\u2014k\u2014i\u2014m\u2014e\u2014s\u2014e\u2014",
    "subtitle": "\u2014:\u2014 \u2014M\u2014o\u2014m\u2014o\u2014s\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
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
    "title": "\u2014S\u2014i\u2014k\u2014k\u2014i\u2014m\u2014e\u2014s\u2014e\u2014 \u2014M\u2014o\u2014m\u2014o\u2014s\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014b\u2014o\u2014u\u2014t\u2014 \u2014t\u2014h\u2014e\u2014 \u2014D\u2014i\u2014s\u2014h\u2014",
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
    "title": "\u2014M\u2014a\u2014k\u2014k\u2014i\u2014 \u2014d\u2014i\u2014 \u2014R\u2014o\u2014t\u2014i\u2014 \u2014&\u2014 \u2014S\u2014a\u2014r\u2014s\u2014o\u2014n\u2014 \u2014S\u2014a\u2014a\u2014g\u2014 \u2014-\u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014 \u2014C\u2014l\u2014a\u2014s\u2014s\u2014i\u2014c\u2014 \u2014P\u2014u\u2014n\u2014j\u2014a\u2014b\u2014i\u2014 \u2014W\u2014i\u2014n\u2014t\u2014e\u2014r\u2014 \u2014M\u2014e\u2014a\u2014l\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20142\u20140\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.32.55 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Mustard greens (Sarson)",
      "Bathua leaves",
      "Maize flour (Makki atta)",
      "White butter (Makhan)",
      "Ginger-garlic",
      "Jaggery"
    ]
  },
  {
    "id": "info-142",
    "dishId": "makki-di-roti-sarson-saag",
    "title": "\u2014M\u2014a\u2014k\u2014k\u2014i\u2014 \u2014d\u2014i\u2014 \u2014R\u2014o\u2014t\u2014i\u2014 \u2014&\u2014 \u2014S\u2014a\u2014r\u2014s\u2014o\u2014n\u2014 \u2014S\u2014a\u2014a\u2014g\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014 \u2014T\u2014r\u2014a\u2014d\u2014i\u2014t\u2014i\u2014o\u2014n\u2014a\u2014l\u2014 \u2014P\u2014u\u2014n\u2014j\u2014a\u2014b\u2014i\u2014 \u2014W\u2014i\u2014n\u2014t\u2014e\u2014r\u2014 \u2014M\u2014e\u2014a\u2014l\u2014 \u2014(\u2014E\u2014a\u2014r\u2014l\u2014y\u2014 \u20141\u20149\u2014t\u2014h\u2014 \u2014C\u2014e\u2014n\u2014t\u2014u\u2014r\u2014y\u2014)\u2014",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.33.04 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Mustard greens (Sarson)",
      "Bathua leaves",
      "Maize flour (Makki atta)",
      "White butter (Makhan)",
      "Ginger-garlic",
      "Jaggery"
    ]
  },
  {
    "id": "info-143",
    "dishId": "makki-di-roti-sarson-saag",
    "title": "\u2014M\u2014a\u2014k\u2014k\u2014i\u2014 \u2014d\u2014i\u2014 \u2014R\u2014o\u2014t\u2014i\u2014 \u2014&\u2014 \u2014S\u2014a\u2014r\u2014s\u2014o\u2014n\u2014 \u2014",
    "subtitle": "\u2014n\u2014 \u2014S\u2014a\u2014a\u2014g\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.35.42 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Mustard greens (Sarson)",
      "Bathua leaves",
      "Maize flour (Makki atta)",
      "White butter (Makhan)",
      "Ginger-garlic",
      "Jaggery"
    ]
  },
  {
    "id": "info-144",
    "dishId": "butter-chicken",
    "title": "\u2014C\u2014h\u2014i\u2014c\u2014k\u2014e\u2014n\u2014 \u2014-\u2014 \u20141\u20149\u20145\u20140\u2014s\u2014 \u2014O\u2014r\u2014i\u2014g\u2014i\u2014n\u2014a\u2014l\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014B\u2014u\u2014t\u2014t\u2014e\u2014r\u2014",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.38.33 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Tandoori chicken",
      "Vine tomatoes",
      "White butter",
      "Fresh dairy cream",
      "Kasuri methi",
      "Kashmiri chilli"
    ]
  },
  {
    "id": "info-145",
    "dishId": "butter-chicken",
    "title": "\u2014C\u2014h\u2014i\u2014c\u2014k\u2014e\u2014n\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014B\u2014u\u2014t\u2014t\u2014e\u2014r\u2014",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 12.40.59 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Tandoori chicken",
      "Vine tomatoes",
      "White butter",
      "Fresh dairy cream",
      "Kasuri methi",
      "Kashmiri chilli"
    ]
  },
  {
    "id": "info-146",
    "dishId": "dal-baati-churma",
    "title": "\u2014i\u2014 \u2014C\u2014h\u2014u\u2014r\u2014m\u2014a\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014D\u2014a\u2014l\u2014 \u2014B\u2014a\u2014a\u2014t\u2014i\u2014",
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
    "title": "\u2014i\u2014 \u2014C\u2014h\u2014u\u2014r\u2014m\u2014a\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014D\u2014a\u2014l\u2014 \u2014B\u2014a\u2014a\u2014t\u2014i\u2014",
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
    "title": "\u2014D\u2014a\u2014l\u2014 \u2014B\u2014a\u2014a\u2014t\u2014i\u2014",
    "subtitle": "\u2014 \u2014C\u2014h\u2014u\u2014r\u2014m\u2014a\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
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
    "title": "\u2014G\u2014u\u2014n\u2014d\u2014r\u2014u\u2014k\u2014 \u2014S\u2014o\u2014u\u2014p\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014b\u2014o\u2014u\u2014t\u2014 \u2014t\u2014h\u2014e\u2014D\u2014i\u2014s\u2014h\u2014",
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
    "dishId": "gundruk-soup",
    "title": "\u2014P\u2014o\u2014d\u2014a\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014C\u2014h\u2014h\u2014e\u2014n\u2014a\u2014",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.48.50 AM.jpeg",
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
    "id": "info-151",
    "dishId": "butter-chicken",
    "title": "\u2014C\u2014h\u2014e\u2014t\u2014t\u2014i\u2014n\u2014a\u2014d\u2014 \u2014C\u2014h\u2014i\u2014c\u2014k\u2014e\u2014n\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014H\u2014i\u2014s\u2014t\u2014o\u2014r\u2014i\u2014c\u2014a\u2014l\u2014 \u2014N\u2014o\u2014t\u2014e\u2014",
    "era": "1800s Traditional",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.50.19 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 1,
    "ingredients": [
      "Tandoori chicken",
      "Vine tomatoes",
      "White butter",
      "Fresh dairy cream",
      "Kasuri methi",
      "Kashmiri chilli"
    ]
  },
  {
    "id": "info-152",
    "dishId": "butter-chicken",
    "title": "\u2014C\u2014h\u2014e\u2014t\u2014t\u2014i\u2014n\u2014a\u2014d\u2014 \u2014C\u2014h\u2014i\u2014c\u2014k\u2014e\u2014n\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20149\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014H\u2014i\u2014s\u2014t\u2014o\u2014r\u2014i\u2014c\u2014a\u2014l\u2014 \u2014N\u2014o\u2014t\u2014e\u2014",
    "era": "1900s Early Modern",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.51.48 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 2,
    "ingredients": [
      "Tandoori chicken",
      "Vine tomatoes",
      "White butter",
      "Fresh dairy cream",
      "Kasuri methi",
      "Kashmiri chilli"
    ]
  },
  {
    "id": "info-153",
    "dishId": "butter-chicken",
    "title": "\u2014C\u2014h\u2014e\u2014t\u2014t\u2014i\u2014n\u2014a\u2014d\u2014 \u2014C\u2014h\u2014i\u2014c\u2014k\u2014e\u2014n\u2014 \u2014C\u2014u\u2014r\u2014r\u2014y\u2014 \u2014-\u2014 \u2014P\u2014r\u2014e\u2014s\u2014e\u2014n\u2014t\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014A\u2014b\u2014o\u2014u\u2014t\u2014t\u2014h\u2014e\u2014D\u2014i\u2014s\u2014h\u2014",
    "era": "Contemporary / Present",
    "image": "/images_updated/WhatsApp Image 2026-11-04 at 2.54.27 AM.jpeg",
    "isFullTimelinePoster": false,
    "stageNumber": 3,
    "ingredients": [
      "Tandoori chicken",
      "Vine tomatoes",
      "White butter",
      "Fresh dairy cream",
      "Kasuri methi",
      "Kashmiri chilli"
    ]
  },
  {
    "id": "info-154",
    "dishId": "idli-sambar",
    "title": "\u2014I\u2014d\u2014l\u2014i\u2014 \u2014S\u2014a\u2014m\u2014b\u2014a\u2014r\u2014 \u2014-\u2014 \u2014c\u2014.\u2014 \u20141\u20148\u20140\u20140\u2014 \u2014R\u2014e\u2014c\u2014i\u2014p\u2014e\u2014",
    "subtitle": "\u2014H\u2014i\u2014s\u2014t\u2014o\u2014r\u2014i\u2014c\u2014a\u2014l\u2014 \u2014N\u2014o\u2014t\u2014e\u2014",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 1",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 9",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 9",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 9",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-03 at 9",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
    "title": "Archival Recipe Guide \u2014 WhatsApp Image 2026-11-04 at 2",
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
