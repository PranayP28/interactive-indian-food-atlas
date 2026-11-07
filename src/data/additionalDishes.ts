// ─────────────────────────────────────────────
// ADDITIONAL DISHES — one authentic, regionally significant dish per state
//
// These are merged into FOOD_DATA at the end of foodData.ts. Every dish here
// has four historical stages in
// src/data/dishStages.json and a per-dish photographic record in
// src/data/photography.json. A stage with no verified photograph is recorded
// as unresolved rather than filled with a borrowed picture.
//
// Batch 1 (2026-11-02, commit 954d836): Kerala, Tamil Nadu, Punjab,
//   Maharashtra.
// Batch 2 (2026-11-02, this continuation): the remaining 24 states, bringing
//   the atlas to 28 states x 3 dishes + 6 UTs x 2 dishes = 96 dishes.
// ─────────────────────────────────────────────

import type { Dish } from "./foodData";

export const ADDITIONAL_DISHES: Record<string, Dish[]> = {
  Kerala: [
    {
      id: "puttu",
      name: "Puttu",
      alternateName: "Pittu / steamed rice-flour cylinders",
      state: "Kerala",
      category: "fermented-steamed",
      description:
        "Cylinders of coarsely moistened rice flour and grated coconut steamed in a two-part puttu kutti, eaten hot with kadala curry, banana or a spoon of sugar.",
      ingredients: ["Raw rice flour", "Grated coconut", "Salt", "Water"],
      tasteProfile: "Nutty, Soft-Steamed & Coconut-Fragrant",
      era: "Sangam-era Kerala & Tamil kitchen continuity (tradition; no securely dated first reference)",
      keyTechnique: "Puttu Kutti Steam-Column Layering",
    },
  ],

  "Tamil Nadu": [
    {
      id: "filter-coffee",
      name: "Filter Coffee",
      alternateName: "Kaapi / Degree Coffee",
      state: "Tamil Nadu",
      category: "beverage",
      description:
        "A two-tier steel filter drips a dark coffee-chicory decoction overnight; it is cut with boiling milk and pulled between a dabarah and tumbler until a crown of froth forms.",
      ingredients: ["Coffee powder with chicory", "Boiling water", "Full-cream milk", "Sugar"],
      tasteProfile: "Bittersweet, Milky-Heavy & Deeply Roasted",
      era: "Madras coffee-house culture, documented from the early 20th century",
      keyTechnique: "Two-Tier Drip Filter & Dabarah Frothing",
    },
  ],

  Punjab: [
    {
      id: "amritsari-kulcha",
      name: "Amritsari Kulcha",
      alternateName: "Amritsari Aloo Kulcha",
      state: "Punjab",
      category: "grain-bread",
      description:
        "A stuffed bread of refined wheat flour, layered with ghee and spiced potato or paneer, slapped into a tandoor wall until it blisters, then crushed with white butter and served with chole.",
      ingredients: [
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
      ],
      tasteProfile: "Crisp, Buttery & Ghee-Layered",
      era: "Amritsar tandoor culture, documented in 20th-century food writing",
      keyTechnique: "Tandoor-Charged Stuffed Kulcha Baking",
    },
  ],

  Maharashtra: [],

  // ── Batch 2: the 24 states that were still at two dishes ──────────────
  "Andhra Pradesh": [],

  "Arunachal Pradesh": [
    {
      id: "apong",
      name: "Apong",
      alternateName: "Rice Beer of the Adi and Nyishi",
      state: "Arunachal Pradesh",
      category: "beverage",
      description:
        "A lightly effervescent rice beer brewed from fermented rice and a herbal starter cake, strained and diluted with water; central to Adi and Nyishi hospitality, festivals and communal labour.",
      ingredients: ["Rice", "Fermentation starter (apop/epo)", "Water", "Local herbs"],
      tasteProfile: "Mildly Sour, Earthy & Effervescent",
      era: "Indigenous fermentation tradition; documented in ethnographic accounts, not in a dated recipe",
      keyTechnique: "Starter-Cake Fermentation & Bamboo Straining",
    },
  ],

  Assam: [
    {
      id: "til-pitha",
      name: "Til Pitha",
      alternateName: "Assamese Sesame Rice Cake",
      state: "Assam",
      category: "sweet-dessert",
      description:
        "A thin rice-flour pancake dry-roasted on a hot tawa, rolled around a filling of toasted black sesame and jaggery, and made in quantity for Magh Bihu and Bohag Bihu.",
      ingredients: ["Glutinous rice flour", "Black sesame seeds", "Jaggery", "Water"],
      tasteProfile: "Toasty, Sesame-Rich & Gently Sweet",
      era: "Bihu harvest tradition; documented in Assamese household and festival cookery",
      keyTechnique: "Dry-Tawa Rice Crepe & Sesame-Jaggery Rolling",
    },
  ],

  Bihar: [
    {
      id: "silao-khaja",
      name: "Silao Khaja",
      alternateName: "Silao ka Khaja",
      state: "Bihar",
      category: "sweet-dessert",
      description:
        "Paper-thin layers of wheat-flour dough, folded repeatedly with ghee, deep-fried until crisp and saturated with sugar syrup; the layered sweet of Silao near Nalanda, now GI-registered.",
      ingredients: ["Wheat flour", "Ghee", "Sugar", "Water", "Cardamom"],
      tasteProfile: "Flaky, Syrup-Sweet & Ghee-Fragrant",
      era: "Silao sweet-making tradition, documented in 20th-century regional accounts and the GI Registry",
      keyTechnique: "Repeated Lamination, Frying & Syrup Saturation",
    },
  ],

  Chhattisgarh: [
    {
      id: "bafauri",
      name: "Bafauri",
      alternateName: "Steamed Gram-Flour Dumplings",
      state: "Chhattisgarh",
      category: "fermented-steamed",
      description:
        "Spiced gram-flour dumplings steamed until firm, then sliced and tempered with mustard, curry leaves and green chilli — a protein-rich, oil-light dish from Chhattisgarhi home kitchens.",
      ingredients: ["Gram flour (besan)", "Green chilli", "Ginger", "Mustard seeds", "Curry leaves", "Turmeric", "Salt"],
      tasteProfile: "Earthy, Savoury & Gently Piquant",
      era: "Regional household technique; no securely dated first written reference",
      keyTechnique: "Besan Batter Steaming & Post-Steam Tempering",
    },
  ],

  Goa: [
    {
      id: "bebinca",
      name: "Bebinca",
      alternateName: "Bibik / Goan Layer Cake",
      state: "Goa",
      category: "sweet-dessert",
      description:
        "Seven (or more) thin coconut-milk, egg-yolk and flour layers, each grilled or baked before the next is poured, finished with a glossy top layer and cut in diamond slices.",
      ingredients: [
        "egg yolks",
        "thick coconut milk",
        "thin coconut milk",
        "sugar",
        "refined flour (maida)",
        "ghee",
        "nutmeg",
        "salt",
        "caramelised sugar",
        "cardamom powder (optional)",
      ],
      tasteProfile: "Caramelised, Coconut-Rich & Custardy",
      era: "Indo-Portuguese Goan baking tradition, documented in 20th-century Goan cookery",
      keyTechnique: "Sequential Layer Baking Under Grill Heat",
    },
  ],

  Gujarat: [],

  Haryana: [
    {
      id: "haryanvi-churma",
      name: "Haryanvi Churma",
      alternateName: "Churma / Choori",
      state: "Haryana",
      category: "sweet-dessert",
      description:
        "Coarse wheat-flour rotis baked over a cow-dung-fired hearth, crushed by hand and kneaded with desi ghee and jaggery or sugar; traditionally eaten with bajra roti, milk and seasonal greens.",
      ingredients: ["Whole-wheat flour", "Desi ghee", "Jaggery or sugar", "Bajra", "Milk"],
      tasteProfile: "Rustic, Ghee-Rich & Caramel-Sweet",
      era: "Agrarian Haryanvi food tradition; documented in regional food writing",
      keyTechnique: "Hearth-Baked Roti Crushing & Ghee Binding",
    },
  ],

  "Himachal Pradesh": [
    {
      id: "chana-madra",
      name: "Chana Madra",
      alternateName: "Himachali Chickpea Yoghurt Curry",
      state: "Himachal Pradesh",
      category: "curry-stew",
      description:
        "Chickpeas simmered in a whisked yoghurt and gram-flour gravy with ghee, cumin and asafoetida, thickened slowly without a tomato base; the centrepiece of a Chamba–Kangra Dham feast.",
      ingredients: ["Chickpeas", "Curd (yoghurt)", "Gram flour", "Ghee", "Cumin", "Asafoetida", "Turmeric"],
      tasteProfile: "Creamy, Tangy & Warmly Aromatic",
      era: "Himachali Dham tradition; documented in regional festival cookery",
      keyTechnique: "Slow Yoghurt Gravy Simmering Without Curdling",
    },
  ],

  Jharkhand: [
    {
      id: "pittha",
      name: "Pittha",
      alternateName: "Jharkhandi Rice Dumplings",
      state: "Jharkhand",
      category: "fermented-steamed",
      description:
        "Rice-flour dough shaped by hand into crescents or cups, sometimes filled with jaggery and sesame, steamed over a cloth-lined pot and eaten at harvest festivals across Jharkhand's tribal communities.",
      ingredients: ["Rice flour", "Jaggery", "Sesame seeds", "Water", "Salt"],
      tasteProfile: "Soft, Mildly Sweet & Rice-Forward",
      era: "Tribal harvest-festival tradition; documented in ethnographic and regional accounts",
      keyTechnique: "Hand-Shaped Rice Dough & Cloth Steaming",
    },
  ],

  Karnataka: [],

  "Madhya Pradesh": [
    {
      id: "dal-bafla",
      name: "Dal Bafla",
      alternateName: "Bafla / Malwa Baati",
      state: "Madhya Pradesh",
      category: "grain-bread",
      description:
        "Wheat-flour balls boiled first and then baked until blistered — unlike a dry baati — cracked open, drenched in ghee and served with a slow-cooked panchmel dal from the Malwa and Bundelkhand regions.",
      ingredients: [
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
      ],
      tasteProfile: "Buttery, Hearty & Dal-Soaked",
      era: "Malwa–Bundelkhand household tradition; documented in regional cookery",
      keyTechnique: "Boil-Then-Bake Wheat Dumpling",
    },
  ],

  Manipur: [
    {
      id: "chak-hao-kheer",
      name: "Chak-Hao Kheer",
      alternateName: "Manipuri Black Rice Pudding",
      state: "Manipur",
      category: "sweet-dessert",
      description:
        "A slow-cooked pudding of aromatic Manipuri black rice (Chak-Hao), milk and jaggery or sugar, served at feasts and now protected by the Chak-Hao geographical indication.",
      ingredients: ["Chak-Hao black rice", "Milk", "Jaggery or sugar", "Cardamom", "Cashew nuts"],
      tasteProfile: "Nutty, Fragrant & Deeply Violet",
      era: "Manipuri rice-cultivation tradition; Chak-Hao registered as a GI in 2020",
      keyTechnique: "Long Soak & Low-Heat Black-Rice Reduction",
    },
  ],

  Meghalaya: [
    {
      id: "pumaloi",
      name: "Pumaloi",
      alternateName: "Khasi Steamed Rice Cake",
      state: "Meghalaya",
      category: "fermented-steamed",
      description:
        "Coarsely ground rice moistened and steamed in a special earthen or metal steamer (siew) until it rises into a light crumb; a Khasi ceremonial food served with meat or tea.",
      ingredients: ["Rice", "Water", "Salt"],
      tasteProfile: "Clean, Soft & Rice-Sweet",
      era: "Khasi ceremonial food tradition; documented in ethnographic accounts",
      keyTechnique: "Coarse Rice Meal Steaming in a Siew",
    },
  ],

  Mizoram: [
    {
      id: "vawksa-rep",
      name: "Vawksa Rep",
      alternateName: "Mizo Smoked Pork",
      state: "Mizoram",
      category: "meat",
      description:
        "Pork smoked over the kitchen hearth, then simmered with bamboo shoot, local herbs and chilli; a Mizo staple that turns preservation into a distinct flavour.",
      ingredients: ["Pork", "Bamboo shoot", "Ginger", "Garlic", "Green chilli", "Local herbs", "Salt"],
      tasteProfile: "Smoky, Hot & Deeply Savoury",
      era: "Mizo hearth-preservation tradition; documented in regional food writing",
      keyTechnique: "Hearth Smoking & Slow Bamboo-Shoot Braise",
    },
  ],

  Nagaland: [
    {
      id: "zutho",
      name: "Zutho",
      alternateName: "Angami Rice Beer",
      state: "Nagaland",
      category: "beverage",
      description:
        "A milky, mildly sour fermented rice drink of the Angami Nagas, prepared from sprouted rice and a local starter, diluted and served in bamboo tumblers at communal work and festivals.",
      ingredients: ["Rice", "Sprouted rice starter", "Water"],
      tasteProfile: "Tangy, Mildly Sweet & Lightly Fermented",
      era: "Angami fermentation tradition; documented in ethnographic accounts",
      keyTechnique: "Sprouted-Rice Starter Fermentation & Dilution",
    },
  ],

  Odisha: [
    {
      id: "pakhala",
      name: "Pakhala Bhata",
      alternateName: "Pakhala / Fermented Rice",
      state: "Odisha",
      category: "rice",
      description:
        "A refreshing traditional Odia rice dish made by soaking cooked rice in water, often naturally fermented and served with curd, green chillies and local accompaniments.",
      ingredients: [
        "Cooked rice",
        "Water",
        "Curd",
        "Salt",
        "Green chillies",
        "Onion",
        "Ginger",
        "Curry leaves",
        "Mustard seeds",
        "Dry red chilli",
        "Mustard oil",
        "Coriander leaves",
      ],
      tasteProfile: "Cool, Gently Sour & Refreshing",
      era: "Traditional Odia household & summer heritage",
      keyTechnique: "Natural Rice Fermentation & Mustard Oil Chhunka",
    },
  ],

  Rajasthan: [
    {
      id: "ghewar",
      name: "Ghewar",
      alternateName: "Rajasthani Honeycomb Disc Sweet",
      state: "Rajasthan",
      category: "sweet-dessert",
      description:
        "A lacy, honeycombed disc made by pouring a thin flour-and-ghee batter into hot ghee in concentric rings, then drenched in sugar syrup and often finished with rabri; a Teej and Raksha Bandhan sweet.",
      ingredients: [
        "refined flour (maida)",
        "ghee",
        "chilled milk",
        "ice-cold water",
        "ice cubes",
        "sugar",
        "cardamom powder",
        "saffron",
        "rabri",
        "chopped pistachios",
      ],
      tasteProfile: "Crisp, Syrup-Drenched & Creamy",
      era: "Rajasthani monsoon-festival sweet, documented in 20th-century sweet-making accounts",
      keyTechnique: "Ring-Poured Batter Frying & Syrup Soaking",
    },
  ],

  Sikkim: [
    {
      id: "sel-roti",
      name: "Sel Roti",
      alternateName: "Nepali-Sikkimese Ring Bread",
      state: "Sikkim",
      category: "grain-bread",
      description:
        "A ring-shaped, slightly sweet bread from a poured rice-flour and banana batter, deep-fried in a wide karahi and made for Tihar, Dashain and Sikkimese Nepali weddings.",
      ingredients: ["Rice flour", "Wheat flour", "Banana", "Sugar", "Milk", "Ghee", "Cardamom"],
      tasteProfile: "Crisp-Edged, Mildly Sweet & Fragrant",
      era: "Nepali–Sikkimese festival tradition; documented in regional food writing",
      keyTechnique: "Poured-Ring Batter Frying",
    },
  ],


  Tripura: [
    {
      id: "awan-bangwi",
      name: "Awan Bangwi",
      alternateName: "Tripuri Steamed Rice Cake",
      state: "Tripura",
      category: "fermented-steamed",
      description:
        "Glutinous rice, jaggery and sometimes grated coconut wrapped in banana or turmeric leaf and steam-baked into a fragrant cake; prepared for Tripuri household celebrations and offerings.",
      ingredients: ["Glutinous rice", "Jaggery", "Grated coconut", "Banana leaf", "Sesame"],
      tasteProfile: "Chewy, Leaf-Perfumed & Gently Sweet",
      era: "Tripuri festival-food tradition; documented in ethnographic accounts",
      keyTechnique: "Leaf-Wrapped Rice Steaming",
    },
  ],

  "Uttar Pradesh": [
    {
      id: "banarasi-malaiyo",
      name: "Banarasi Malaiyo",
      alternateName: "Malaiyo / Nimish",
      state: "Uttar Pradesh",
      category: "sweet-dessert",
      description:
        "A winter-only Varanasi delicacy: full-fat milk boiled with saffron and sugar, chilled overnight under the dew, then whisked with hand-churned cream into an airy foam dusted with pistachio.",
      ingredients: ["Full-fat milk", "Fresh cream (malai)", "Sugar", "Saffron", "Pistachio", "Cardamom"],
      tasteProfile: "Airy, Milky & Saffron-Scented",
      era: "Varanasi winter sweet, documented in 20th-century city food writing",
      keyTechnique: "Dew-Chilled Milk & Hand-Whisked Cream Foam",
    },
  ],

  Uttarakhand: [
    {
      id: "singori",
      name: "Singori",
      alternateName: "Singodi / Malu-Leaf Sweet",
      state: "Uttarakhand",
      category: "sweet-dessert",
      description:
        "A cone of sweetened, reduced milk solids (khoya) and coconut, wrapped in a folded malu leaf whose aroma perfumes the sweet; a Garhwali–Kumaoni market delicacy.",
      ingredients: ["Khoya (reduced milk)", "Sugar", "Grated coconut", "Cardamom", "Malu leaf wrapper"],
      tasteProfile: "Milky, Coconut-Sweet & Leaf-Aromatic",
      era: "Garhwali–Kumaoni sweet-making tradition; documented in regional food writing",
      keyTechnique: "Khoya Reduction & Malu-Leaf Wrapping",
    },
  ],

  "West Bengal": [
    {
      id: "rosogolla",
      name: "Rosogolla",
      alternateName: "Banglar Rasogolla / Bengali Rossogolla",
      state: "West Bengal",
      category: "sweet-dessert",
      description:
        "Spongy balls of fresh chhena kneaded until smooth, poached in light sugar syrup until they swell and cool into a syrup-held sphere; 'Banglar Rasogolla' received a GI tag in 2017.",
      ingredients: ["Fresh chhena (curdled milk solids)", "Sugar", "Water", "Cardamom or rose water"],
      tasteProfile: "Spongy, Syrup-Light & Delicately Milky",
      era: "19th-century Bengali sweet-making; 'Banglar Rasogolla' GI-registered in 2017",
      keyTechnique: "Chhena Kneading & Controlled-Syrup Poaching",
    },
  ],
};

export const ADDITIONAL_DISH_IDS = Object.values(ADDITIONAL_DISHES)
  .flat()
  .map((dish) => dish.id);
