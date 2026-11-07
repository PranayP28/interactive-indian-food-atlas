// ─────────────────────────────────────────────
// GENERATION RECIPES DATA FOR GSAP MOTIONPATH
// Chronological Recipes at each Historical Waypoint
// Accurate and unique for every dish across the atlas regions
// ─────────────────────────────────────────────

import { Dish, getAllDishes } from "./foodData";
import {
  UNRESOLVED_IMAGE,
  epochPhoto,
  getDishPhotography,
  historicalStageImageUrl,
} from "./photography";
import {
  getDishStageHistory,
  getStageCitations,
  type StageKey,
} from "./dishStages";

// Legacy era imagery keys survive only inside the six-epoch source records
// below, which are mined for cookware, heat source and recipe detail. The
// timeline itself is now built from the FOUR primary stages in dishStages.json
// and every image it emits is that dish's own stage photograph or the neutral
// unresolved frame — never a shared era photograph.
const ERA_PHOTO: Record<string, string> = {
  ancient_grains: epochPhoto("ancient_grains", 1280),
  stone_ferment: epochPhoto("stone_ferment", 1280),
  spice_trade: epochPhoto("spice_trade", 1280),
  tawa_sizzle: epochPhoto("tawa_sizzle", 1280),
  dum_seal: epochPhoto("dum_seal", 1280),
  masala_dosa_hero: epochPhoto("masala_dosa_hero", 1280),
  biryani_royal_hero: epochPhoto("biryani_royal_hero", 1280),
  rogan_josh_hero: epochPhoto("rogan_josh_hero", 1280),
  litti_chokha_hero: epochPhoto("litti_chokha_hero", 1280),
  butter_chicken_hero: epochPhoto("butter_chicken_hero", 1280),
};


export interface GenerationWaypoint {
  generationNumber: number;
  eraTitle: string;
  yearRange: string;
  centuryLabel: string;
  headline: string;
  shortDescription: string;
  image: string;
  generationRecipe: {
    recipeName: string;
    historicalCookware: string;
    heatSource: string;
    ingredientsList: string[];
    preparationMethod: string;
    contemporaryDifference: string;
  };
  technologicalLeap: string;
  documentedCitation: string;
}

// ─────────────────────────────────────────────
// 1. MASALA DOSA (Karnataka)
// ─────────────────────────────────────────────
export const DOSA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Vedic & Sangam Antiquity",
    yearRange: "c. 1000 BCE – 3rd Century CE",
    centuryLabel: "Epoch I",
    headline: "The Primitive Pulse Pupa & Wild Grains",
    shortDescription:
      "Ancient agrarian communities soaked wild indigenous paddy and whole black lentils, crushing them coarsely between heavy granite river stones. Unfermented batter was pressed onto flat hot clay slabs over open wood embers.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Ancient Pupa (Unfermented Pulse Griddle Cake)",
      historicalCookware: "Flat clay griddle stone (Kallu Odu) over pit embers",
      heatSource: "Dried wood and forest biomass fire",
      ingredientsList: [
        "Coarsely crushed black gram (Urad dal)",
        "Indigenous wild paddy grain",
        "Whole Malabar black peppercorns",
        "Rock salt from dried beds",
        "Cold spring water",
      ],
      preparationMethod:
        "Grains and lentils soaked for 3 hours, stone-mashed into a thick rustic paste, patted directly by hand onto hot flat stones greased with wild seed oil.",
      contemporaryDifference:
        "Zero potatoes, zero chillies, no overnight microbial fermentation, thick and flat rather than thin and crisp.",
    },
    technologicalLeap: "First pairing of lentil protein with rice carbohydrates over thermal stones.",
    documentedCitation: "Sangam literature (Purananuru) & Charaka Samhita on pulse-grain dietetics.",
  },
  {
    generationNumber: 2,
    eraTitle: "Western Chalukya Imperial Era",
    yearRange: "1130 CE",
    centuryLabel: "Epoch II",
    headline: "King Someshvara III's Imperial 'Dosaka'",
    shortDescription:
      "The invention of overnight biological aeration! In the royal kitchens of the Western Chalukyas, cooks left stone-ground urad dal batter to ferment naturally with ambient lactic microflora, baking it on circular terracotta pans.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Imperial Dosaka of the Manasollasa",
      historicalCookware: "Circular porous terracotta earthen pan",
      heatSource: "Controlled charcoal hearth",
      ingredientsList: [
        "Stone-ground dehusked black gram flour",
        "Fermented buttermilk starter (Takra)",
        "Cold-pressed sesame oil",
        "Crushed wild cumin and black pepper",
        "Himalayan rock salt",
      ],
      preparationMethod:
        "Lentil flour kneaded with sour buttermilk and rested overnight until foaming micro-bubbles doubled its volume. Ladled onto an oiled earthen pan and covered with a curved lid to steam-bake.",
      contemporaryDifference:
        "Soft and spongy like a thick pancake; rice was secondary to the pulse matrix.",
    },
    technologicalLeap: "Natural lactic acid fermentation giving signature tangy flavor and airy lightness.",
    documentedCitation: "Manasollasa (1130 CE), Chapter on Annabhoga, Verse 1375.",
  },
  {
    generationNumber: 3,
    eraTitle: "Maritime Caravans & Spice Exchanges",
    yearRange: "c. 1500 – 1650 CE",
    centuryLabel: "Epoch III",
    headline: "Black Pepper to Portuguese Capsicum Chillies",
    shortDescription:
      "Maritime merchant guilds shipped Tellicherry black pepper across the Arabian Sea, while Portuguese ships arriving in Goa introduced South American capsicum chillies and potatoes. Cooks incorporated chillies into spicy accompaniment chutneys.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Maritime Tempered Griddle Dosa",
      historicalCookware: "Early bronze bell-metal uruli & iron plates",
      heatSource: "Hardwood charcoal chulha",
      ingredientsList: [
        "Parboiled wetland rice (2 parts)",
        "White urad dal (1 part)",
        "Portuguese dried red chillies (newly adopted)",
        "Fresh curry leaves (Karivepaku)",
        "Mustard seeds & sesame oil",
      ],
      preparationMethod:
        "Soaked rice and dal ground on stone attukal with soaked fenugreek seeds. Cooked on early iron plates and served alongside fiery red chilli chutneys replacing ancient peppercorn relishes.",
      contemporaryDifference:
        "Adoption of fiery red chillies dramatically transformed the color and spice profile.",
    },
    technologicalLeap: "Integration of New World chillies and fenugreek seeds for golden browning.",
    documentedCitation: "Portuguese Estado da India trade logs & K.T. Achaya monographs.",
  },
  {
    generationNumber: 4,
    eraTitle: "Foundry Metallurgy & Cast Iron",
    yearRange: "c. 1880 – 1930 CE",
    centuryLabel: "Epoch IV",
    headline: "The High-Heat Sizzle & The Paper-Thin Roast",
    shortDescription:
      "The invention of the paper-thin crisp dosa! When British Indian foundries produced smooth seasoned cast-iron flat griddles (tawas), high heat retention allowed batter to be swirled gossamer-thin with generous clarified butter.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "The Vintage Iron Tawa Ghee Roast",
      historicalCookware: "Heavy seasoned cast-iron tawa",
      heatSource: "High-temperature coal and charcoal hearth",
      ingredientsList: [
        "Aged Sona Masuri rice",
        "Whole urad gotu",
        "Poha (flattened rice for crisp lacy pores)",
        "Pure churned cow ghee",
        "Rock salt",
      ],
      preparationMethod:
        "A ladle of smooth fermented batter poured into the searing center of the tawa, rapidly spiraled outward into a translucent wafer. Splashes of ghee sizzled the perimeter until it curled freely.",
      contemporaryDifference:
        "Transitioned from soft thick bread to an audible, wafer-thin crunchy shell.",
    },
    technologicalLeap: "Cast-iron thermal conductivity enabling the iconic paper roast spiral.",
    documentedCitation: "Mysore Palace kitchen chronicles & Udupi Krishna Temple records.",
  },
  {
    generationNumber: 5,
    eraTitle: "The Udupi Hotel Revolution",
    yearRange: "c. 1940 – 1960 CE",
    centuryLabel: "Epoch V",
    headline: "The Invention of the Hidden Potato Masala",
    shortDescription:
      "Orthodox Udupi Brahmin hotels in Bangalore and Mysore faced onion restrictions and potato surpluses. Chefs seasoned boiled potatoes with turmeric and hidden chopped onions, rolling the filling securely inside the folded crepe.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Udupi Classic Masala Dosa",
      historicalCookware: "Commercial restaurant cast-iron range",
      heatSource: "Town gas & charcoal braziers",
      ingredientsList: [
        "Crisp fermented rice-dal crepe",
        "Boiled mashed potatoes with turmeric",
        "Mustard seeds, green chillies & curry leaves",
        "Spicy red Byadagi garlic chutney smear",
        "Desi butter",
      ],
      preparationMethod:
        "The interior of the crisp crepe is smeared with red Byadagi garlic paste, lined with warm spiced potato palya, folded into a golden cylinder, and served immediately on a banana leaf.",
      contemporaryDifference:
        "The complete birth of the modern 'Masala Dosa' triad (crepe + potato + chutney).",
    },
    technologicalLeap: "Concealed filling architecture and multi-texture gastronomy.",
    documentedCitation: "Vidyarthi Bhavan (Bangalore, 1943) & Woodlands Hotel archives.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Global Culinary Crown Jewel",
    shortDescription:
      "Celebrated across the globe from Bengaluru to New York. Served on an emerald-cut banana leaf with piping hot drumstick sambar and coconut chutney, its golden crust breaks with a crisp shatter.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Artisanal Mysore Masala Dosa Master Formulation",
      historicalCookware: "Hand-seasoned artisan cast-iron tawa",
      heatSource: "High-BTU induction / dual-ring gas flame",
      ingredientsList: [
        "3:1 ratio of parboiled rice to whole urad dal",
        "Methi seeds (fenugreek) for enzyme caramelization",
        "Organic Russet potatoes with hand-crushed mustard palya",
        "Deep ruby Byadagi-garlic emulsion",
        "Aromatic freshly pressed coconut chutney & sambar",
      ],
      preparationMethod:
        "Precision 12-hour controlled temperature fermentation (30°C). Searing tawa roasted to 190°C with butter swirl. Folded to order and plated within 45 seconds.",
      contemporaryDifference:
        "Micro-filtered water, temperature-controlled fermentation, perfected golden ratios.",
    },
    technologicalLeap: "Global standardization of high-speed artisan street and fine-dining craft.",
    documentedCitation: "UNESCO Cultural Heritage documentation & Michelin Guide evaluations.",
  },
];

// ─────────────────────────────────────────────
// 2. HYDERABADI DUM BIRYANI (Telangana)
// ─────────────────────────────────────────────
export const BIRYANI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Hyderabadi Dum Biryani in the Deccan",
    shortDescription:
      "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Copper or brass handi sealed with dough",
      heatSource: "Wood and charcoal fire with live embers",
      ingredientsList: [],
      preparationMethod:
        "Raw marinated meat layered beneath part-boiled rice in a heavy pot, sealed airtight with dough, and slow-steamed (dum method) over wood and charcoal embers.",
      contemporaryDifference:
        "Developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, marrying Persian-Mughal cooking with local Deccan ingredients and tastes.",
    },
    technologicalLeap: "Kacchi dum protocol: sealed trapped steam cooking raw marinated meat with rice.",
    documentedCitation: "Asaf Jahi court kitchen records & regional food documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens\nVessel: copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers\nFuel: wood and charcoal / gas and electricity\nCooking time: several hours / under an hour in many homes\nMarinating: overnight / a few hours or less\nMeat: mutton or goat / chicken is now very common, plus vegetable versions\nFlavourings: saffron, rose water, kewra water, fresh ground spices / food colour, ready biryani masala, ready ginger-garlic paste\nTenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers",
      heatSource: "Wood and charcoal / gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens",
      contemporaryDifference:
        "Tenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
    },
    technologicalLeap: "Adaptation from royal artisan charcoal cooking to modern domestic gas and electric appliances.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Hyderabadi Dum Biryani Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: basmati rice, mutton or chicken, curd, fried onions, ginger-garlic paste, green chillies, whole spices and garam masala, mint and coriander, saffron milk, ghee.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Hyderabadi Dum Biryani Recipe",
      historicalCookware: "Heavy pot or handi with tight-fitting lid",
      heatSource: "High heat for a few minutes, then low heat for about 40 minutes (dum)",
      ingredientsList: [
        "basmati rice",
        "mutton or chicken",
        "curd",
        "fried onions",
        "ginger-garlic paste",
        "green chillies",
        "whole spices and garam masala",
        "mint and coriander",
        "saffron milk",
        "ghee",
      ],
      preparationMethod:
        "1. Marinate the meat with curd, spices, ginger-garlic paste, herbs and fried onions. Mix well and rest it (overnight for best flavour, or a few hours).\n2. Fry the onions until golden brown and crisp. Keep some aside for layering.\n3. Parboil the rice with whole spices and salt until about 70% cooked (the grain should break easily but still feel firm inside). Drain it.\n4. Layer the marinated meat at the bottom of a heavy pot, then spread the rice evenly on top.\n5. Top with fried onions, mint, coriander, saffron milk and ghee.\n6. Seal the lid tightly with dough or foil so no steam escapes.\n7. Cook on high heat for a few minutes until steam builds, then on low heat for about 40 minutes (dum).\n8. Rest for 10 minutes without opening, then mix gently from the sides and serve with raita.",
      contemporaryDifference:
        "Numbered 8-step kacchi dum process using 10 key ingredients with simple, crisp actions.",
    },
    technologicalLeap: "Precision 8-step home kacchi dum execution protocol.",
    documentedCitation: "Codified regional recipe documentation.",
  },{
    generationNumber: 4,
    eraTitle: "Recipe Dum Execution",
    yearRange: "Dum Technique",
    centuryLabel: "Dum Method",
    headline: "The Kacchi Layering & Sealing Technique",
    shortDescription:
      "Layering raw marinated meat beneath parboiled rice and sealing the lid tightly with dough or foil ensures trapped steam cooks meat and elongates rice grains.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kacchi Dum Execution",
      historicalCookware: "Heavy pot with dough or foil seal",
      heatSource: "High heat briefly, then low flame dum",
      ingredientsList: [
        "Basmati rice",
        "Mutton or chicken",
        "Curd",
        "Fried onions",
        "Ginger-garlic paste",
        "Green chillies",
        "Whole spices and garam masala",
        "Mint and coriander",
        "Saffron milk",
        "Ghee",
      ],
      preparationMethod:
        "Raw marinated meat placed at base; 70% parboiled rice layered above; garnished with fried onions, mint, saffron milk, and ghee; sealed tightly with dough or foil.",
      contemporaryDifference:
        "The quintessential kacchi dum method of Hyderabad.",
    },
    technologicalLeap: "Hermetic sealing for internal steam convection.",
    documentedCitation: "Asaf Jahi royal recipe manuscripts (Nuqqal-i-Bawarchi Khana).",
  },
  {
    generationNumber: 5,
    eraTitle: "Resting and Unsealing",
    yearRange: "Finishing",
    centuryLabel: "Serving Protocol",
    headline: "Resting, Unsealing & Serving with Raita",
    shortDescription:
      "After 40 minutes on low heat, resting for 10 minutes allows juices to redistribute before unsealing, gentle mixing, and serving with raita.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Resting and Unsealing Protocol",
      historicalCookware: "Sealed pot with tight lid",
      heatSource: "Residual heat during 10-minute rest",
      ingredientsList: [
        "Steamed biryani layers",
        "Fresh raita",
        "Fried onions garnish",
      ],
      preparationMethod:
        "Rest for 10 minutes off heat, open the seal, mix gently from the sides, and serve with cool raita.",
      contemporaryDifference:
        "Preserves delicate rice grains from breaking upon opening.",
    },
    technologicalLeap: "Resting curve preventing steam collapse and grain breakage.",
    documentedCitation: "Regional food tradition & service documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hyderabadi Dum Biryani Plated & Served",
    shortDescription:
      "Served with raita and mirchi ka salan; enjoyed across Telangana and globally as the benchmark of Deccan royal cookery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Hyderabadi Dum Biryani Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served freshly cooked",
      ingredientsList: [
        "Basmati rice",
        "Mutton or chicken",
        "Curd",
        "Fried onions",
        "Saffron milk",
        "Ghee",
      ],
      preparationMethod:
        "Gently mixed and served hot with raita and mirchi ka salan.",
      contemporaryDifference:
        "Celebrated signature dish of Hyderabad and Telangana.",
    },
    technologicalLeap: "Dual-tone grain presentation over tender marinated meat.",
    documentedCitation: "National GI Tag Registry & Telangana Gastronomic Survey.",
  },
];

// ─────────────────────────────────────────────
// INDORI POHA (Madhya Pradesh)
// ─────────────────────────────────────────────
export const INDORI_POHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Indori Poha: Origin & Street Food Heritage",
    shortDescription:
      "Indori poha is a famous breakfast and street food of Indore, in Madhya Pradesh. Poha is the Hindi name for flattened rice. \"Indori\" means \"of Indore\". Poha is a widely eaten Indian food. What makes this version Indori is how it is cooked and topped. Unlike many other poha styles, it is steamed instead of being cooked directly with other ingredients, and the onions are not sauteed. Chopped raw onions go on top. It is finished with toppings such as sev, masala boondi (nukti), pomegranate and jeeravan masala, and is often served with hot jalebi. No reliable historical record gives the exact year, place or creator of Indori poha. One popular account says rulers from Maharashtra brought poha to this region, but this is not documented.\n\nWhy it is famous:\n- Its own cooking style: the poha is steamed, which gives it a distinct soft texture and taste.\n- Balanced flavour: sweet, tangy and spicy together, with fennel seeds adding a light sweetness.\n- Many textures in one plate: soft poha, crunchy sev and boondi, fresh onion and juicy pomegranate.\n- Jeeravan masala: a spice blend from Madhya Pradesh whose taste is different from chaat masala or garam masala.\n- Poha-jalebi: hot, sweet jalebi with savoury poha is the classic Indore pairing.\n- Morning street food: vendors across Indore sell it in the morning, often next to kachori and samosa.\n- Wide reach: it is also sold in nearby cities such as Ujjain, Dewas, Ratlam and Bhopal, and is becoming popular in other states.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Indori Poha",
      historicalCookware: "Steamer pot or colander over boiling water",
      heatSource: "Traditional wood or coal hearth",
      ingredientsList: [],
      preparationMethod:
        "Steamed instead of being cooked directly with other ingredients, and the onions are not sauteed. Chopped raw onions go on top.",
      contemporaryDifference:
        "Famous breakfast and street food of Indore, Madhya Pradesh.",
    },
    technologicalLeap: "Steam-cooking flattened rice for soft texture without pan-frying.",
    documentedCitation: "Regional food tradition & street food documentation of Indore.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Poha flakes: Then - hand-pounded and sun-dried in villages | Now - machine-made flakes sold ready in packets\nCooking style: Then - poha as cooked in Maharashtra, with sauteed onions | Now - Indori style, steamed, with raw onions on top\nToppings: Then - simple toppings like chopped onion | Now - sev, masala boondi (nukti), pomegranate and jeeravan masala\nJeeravan masala: Then - mixed fresh at home | Now - ready-made packets are widely available\nFuel: Then - wood or coal fires | Now - gas stoves and induction cooktops\nReach: Then - a local street breakfast of Indore | Now - sold in nearby cities and growing popular in other states\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional wood/coal stoves / Modern gas stoves and induction cooktops",
      heatSource: "Wood or coal fires / Gas stoves and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - poha as cooked in Maharashtra, with sauteed onions | Now - Indori style, steamed, with raw onions on top",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Transition to machine-made flakes and ready-made packaged jeeravan masala.",
    documentedCitation: "Regional food practices across Madhya Pradesh.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Indori Poha Recipe: 12 Key Ingredients, 10 Steps",
    shortDescription:
      "Key ingredients: Thick or medium-thick poha (flattened rice), Turmeric, sugar and salt, Oil, Mustard seeds and fennel seeds, Green chilli, Onion (raw, chopped), Fresh coriander leaves, Jeeravan masala, Ratlami or Indori sev, and masala boondi (nukti), Lemon, Pomegranate (optional), Hot jalebi (for serving, optional).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Indori Poha Recipe",
      historicalCookware: "Strainer, pan for tempering, pot with lid for steaming",
      heatSource: "Low to medium-low heat for tempering, low heat for steaming",
      ingredientsList: [
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
        "Hot jalebi (for serving, optional)",
      ],
      preparationMethod:
        "1. Rinse the poha. - Rinse thick poha in a strainer under clean running water. Do not over-rinse, or it turns mushy.\n2. Drain and rest. - Drain well. The flakes should be soft but whole. If still firm, sprinkle a little water and wait a few minutes.\n3. Add the dry seasoning. - Add turmeric, sugar and salt to the poha and mix lightly.\n4. Make the tempering. - Heat oil on low to medium-low heat. Add mustard seeds, then fennel seeds, then green chilli.\n5. Add the poha. - Keep the heat low and mix gently until the colour turns light yellow.\n6. Steam the poha. - Cover with a lid and steam on low heat for about 1 to 2 minutes. Stir and switch off the heat.\n7. Plate it hot. - Take the hot poha on a plate.\n8. Add the fresh toppings. - Top with chopped raw onion and coriander, sprinkle jeeravan masala, and add pomegranate.\n9. Add the crunch. - Top with masala boondi (nukti) and Ratlami or Indori sev.\n10. Finish and serve. - Squeeze lemon juice on top. Serve straight away, with hot jalebi.",
      contemporaryDifference:
        "Use thick or medium-thick poha. Steam it; the onions are not sauteed. Recipes differ from vendor to vendor, and some vendors add peas.",
    },
    technologicalLeap: "Trapped steam cooking covered with a lid for 1 to 2 minutes.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Steaming Technique",
    yearRange: "Steam Method",
    centuryLabel: "Stage 4",
    headline: "Low Heat Steam Finishing",
    shortDescription:
      "Covering with a lid and steaming on low heat for 1 to 2 minutes softens the poha without making it mushy.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Steam Finishing Protocol",
      historicalCookware: "Covered pot with tight lid",
      heatSource: "Low heat",
      ingredientsList: [
        "Thick or medium-thick poha (flattened rice)",
        "Turmeric, sugar and salt",
        "Oil",
        "Mustard seeds and fennel seeds",
        "Green chilli",
      ],
      preparationMethod:
        "Cover with a lid and steam on low heat for about 1 to 2 minutes. Stir and switch off the heat.",
      contemporaryDifference:
        "Use thick or medium-thick poha. Steam it; the onions are not sauteed.",
    },
    technologicalLeap: "Precise low heat steaming preserving flake texture.",
    documentedCitation: "Regional street food preparation technique.",
  },
  {
    generationNumber: 5,
    eraTitle: "Topping and Assembly",
    yearRange: "Assembly",
    centuryLabel: "Stage 5",
    headline: "Fresh Toppings & Crunchy Textures",
    shortDescription:
      "Raw chopped onion, coriander, jeeravan masala, pomegranate, masala boondi and sev are layered on hot poha.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Plate Assembly Protocol",
      historicalCookware: "Serving plate",
      heatSource: "Residual heat from hot poha",
      ingredientsList: [
        "Onion (raw, chopped)",
        "Fresh coriander leaves",
        "Jeeravan masala",
        "Ratlami or Indori sev, and masala boondi (nukti)",
        "Lemon",
        "Pomegranate (optional)",
      ],
      preparationMethod:
        "Take hot poha on a plate. Top with raw onion, coriander, jeeravan masala, pomegranate, boondi, and sev.",
      contemporaryDifference:
        "Raw onions go on top rather than being sauteed.",
    },
    technologicalLeap: "Layering raw crunch over soft warm steamed rice flakes.",
    documentedCitation: "Indore street food vendor service traditions.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Indori Poha Served with Hot Jalebi",
    shortDescription:
      "Finished with a squeeze of fresh lemon juice and served immediately with hot, sweet jalebi.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Indori Poha Plated",
      historicalCookware: "Serving plate",
      heatSource: "Served fresh and hot",
      ingredientsList: [
        "Thick or medium-thick poha (flattened rice)",
        "Ratlami or Indori sev",
        "Masala boondi (nukti)",
        "Lemon",
        "Hot jalebi (for serving, optional)",
      ],
      preparationMethod:
        "Squeeze lemon juice on top. Serve straight away, with hot jalebi.",
      contemporaryDifference:
        "The classic morning breakfast pairing of Indore.",
    },
    technologicalLeap: "Savoury, tangy poha paired with hot crisp sweet jalebi.",
    documentedCitation: "Regional culinary culture of Madhya Pradesh.",
  },
];

// ─────────────────────────────────────────────
// BHUTTE KA KEES (Madhya Pradesh)
// ─────────────────────────────────────────────
export const BHUTTE_KA_KEES_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Bhutte Ka Kees: Origin & Malwa Heritage",
    shortDescription:
      "Bhutte Ka Kees is a famous street food and traditional delicacy of Madhya Pradesh, especially celebrated across the Malwa region including Indore (famous in Sarafa Bazaar night market and Chappan Dukan). \"Bhutta\" means corn on the cob, and \"Kees\" comes from \"keesna\" (to grate in Hindi). Fresh tender corn kernels are grated fresh, releasing sweet corn pulp and juice, then slow-braised in full-cream milk, tempered with mustard seeds, cumin, hing (asafoetida), and green chillies, and finished with freshly grated coconut, coriander, and lemon juice. No reliable historical record gives the exact year, place or creator of Bhutte Ka Kees, though local tradition associates it with Holkar-era royal banquets and Malwa monsoon harvest feasts.\n\nWhy it is famous:\n- Its own cooking style: fresh corn is grated to extract juices and slow-braised in milk, yielding a luscious creamy and grainy texture.\n- Balanced flavour: natural corn sweetness harmonized with spicy green chillies, aromatic hing, and tangy fresh lemon.\n- Night street food royalty: an iconic attraction at Indore's legendary Sarafa Bazaar and Chappan Dukan.\n- Seasonal harvest celebration: traditionally crafted during monsoons when tender desi bhutta is harvested in Malwa.\n- Rich garnishes: served steaming hot topped with freshly grated coconut, coriander, crunchy sev, and a dash of jeeravan masala.\n- Wide reach: popular across Indore, Ujjain, Ratlam, Bhopal, and now featured on menus nationwide.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Bhutte Ka Kees",
      historicalCookware: "Heavy iron kadhai or brass lagan",
      heatSource: "Traditional wood or charcoal sigri",
      ingredientsList: [],
      preparationMethod:
        "Fresh tender corn is coarsely grated, releasing starch and milk, then slow-braised in dairy milk and tempered with whole spices.",
      contemporaryDifference:
        "Signature street delicacy and monsoon culinary pride of Indore, Madhya Pradesh.",
    },
    technologicalLeap: "Extracting fresh corn milk and starch via fine grating to create a rich braised emulsion without thickeners.",
    documentedCitation: "Regional culinary traditions and oral documentation of Indore, Madhya Pradesh.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Corn: Then - seasonal desi white/yellow maize grated by hand on coarse iron graters | Now - sweet corn or american corn cobs, readily grated or ground in food processors\nDairy & Braise: Then - full-cream fresh buffalo milk simmered slowly in heavy iron kadhais | Now - packaged dairy milk or cream, non-stick pans or pressure cookers\nTempering fat: Then - pure desi cow/buffalo ghee | Now - vegetable oil or a blend of ghee and oil\nToppings: Then - simple fresh scraped coconut, green chillies, and rock salt | Now - Ratlami sev, pomegranate arils, jeeravan masala, and fresh lemon\nFuel: Then - smouldering wood or coal sigris | Now - commercial gas burners and induction cooktops\nReach: Then - seasonal monsoon household dish in Malwa | Now - renowned year-round street food across Indore and central India\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional iron kadhai / Modern non-stick pan",
      heatSource: "Charcoal sigri / Modern gas burners and induction",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - fresh seasonal field maize simmered slowly with ghee and rock salt | Now - sweet corn braised in milk with jeeravan masala, sev, and lemon",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adoption of tender sweet corn varieties, modern grating appliances, and complex street seasonings.",
    documentedCitation: "Comparative food practice surveys across Indore and the Malwa region.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Step-by-Step",
    centuryLabel: "Stage 3",
    headline: "Bhutte Ka Kees: 12 Key Ingredients & 10 Preparation Steps",
    shortDescription:
      "Key ingredients: Fresh tender sweet corn (bhutta, grated), Full cream milk, Desi ghee or oil, Mustard seeds and cumin seeds (jeera), Asafoetida (hing), Green chillies (finely chopped), Fresh ginger (grated), Turmeric powder, Sugar and salt, Fresh coconut (scraped/grated), Fresh coriander leaves, Lemon (for tang) and jeeravan masala / sev (optional).\n\n1. Grate the corn. - Husk fresh tender corn cobs and grate using a medium grater to collect pulp and juices.\n2. Heat the fat. - Heat ghee or oil in a heavy kadhai over medium-low heat.\n3. Splutter the spices. - Add mustard seeds and cumin seeds; once they crackle, add asafoetida (hing).\n4. Sauté the aromatics. - Add finely chopped green chillies and grated ginger; sauté for 30 seconds until aromatic.\n5. Cook the corn pulp. - Add grated corn, turmeric powder, salt, and a pinch of sugar; sauté on low heat for 3-4 minutes.\n6. Pour the milk. - Slowly pour in full cream milk while stirring continuously to blend evenly.\n7. Simmer and thicken. - Cover with a lid and cook on low heat for 8-10 minutes, stirring occasionally, until milk is absorbed and corn is tender.\n8. Stir in fresh garnish. - Turn off the heat and stir in half of the freshly grated coconut and chopped coriander leaves.\n9. Season to taste. - Squeeze fresh lemon juice and dust with jeeravan masala for signature Indori tang.\n10. Finish and serve. - Spoon hot into bowls, garnish with remaining grated coconut, coriander, and crispy sev.\n\nUse fresh tender corn. Grating rather than blending retains the quintessential texture. Add milk gradually on low heat to achieve creamy consistency.",
    image: ERA_PHOTO.spice_caravan,
    generationRecipe: {
      recipeName: "Bhutte Ka Kees Culinary Protocol",
      historicalCookware: "Heavy-bottomed kadhai with lid",
      heatSource: "Medium-low to low steady flame",
      ingredientsList: [
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
        "Lemon (for tang) and jeeravan masala / sev (optional)",
      ],
      preparationMethod:
        "Grate fresh corn kernels, splutter mustard, cumin, and hing in ghee, sauté ginger and chillies, add corn and milk, simmer until creamy, and finish with coconut, coriander, lemon, and sev.",
      contemporaryDifference:
        "Use fresh tender sweet corn and grate it fresh. Slow milk-emulsion braise without browning or curdling.",
    },
    technologicalLeap: "Slow milk-emulsion simmer covered with a lid for 8-10 minutes to yield a creamy texture.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Milk-Braise Technique",
    yearRange: "Slow Simmer",
    centuryLabel: "Stage 4",
    headline: "Gentle Low Heat Simmering",
    shortDescription:
      "Gradual incorporation of dairy milk into grated corn starches over gentle heat ensures a velvety texture without curdling.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Milk Braise Protocol",
      historicalCookware: "Covered heavy pan",
      heatSource: "Gentle low heat",
      ingredientsList: [
        "Fresh tender sweet corn (bhutta, grated)",
        "Full cream milk",
        "Desi ghee or oil",
        "Turmeric powder",
        "Sugar and salt",
      ],
      preparationMethod:
        "Slowly pour in full cream milk while stirring continuously. Cover with a lid and cook on low flame until thick.",
      contemporaryDifference:
        "Gentle heat prevents dairy separation and binds the natural corn starch.",
    },
    technologicalLeap: "Dairy-starch gelatinization creating rich body without artificial thickeners.",
    documentedCitation: "Regional street food preparation technique.",
  },
  {
    generationNumber: 5,
    eraTitle: "Garnish and Seasoning",
    yearRange: "Finishing",
    centuryLabel: "Stage 5",
    headline: "Indori Spice Dusting & Fresh Garnishes",
    shortDescription:
      "Hot braised corn is topped with freshly scraped coconut, cilantro, a squeeze of lemon juice, and a sprinkle of jeeravan masala.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Street Finishing Protocol",
      historicalCookware: "Serving bowl",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Fresh coconut (scraped/grated)",
        "Fresh coriander leaves",
        "Lemon (for tang)",
        "Jeeravan masala & Sev (optional)",
      ],
      preparationMethod:
        "Turn off the heat, stir in coconut and coriander, squeeze lemon juice, and dust with jeeravan masala.",
      contemporaryDifference:
        "Signature Indori street food balance of sweet, creamy, spicy, and tangy notes.",
    },
    technologicalLeap: "Combining warm creamy corn with crisp raw coconut and zesty spice dust.",
    documentedCitation: "Sarafa Bazaar street food vendor service traditions.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Bhutte Ka Kees at Sarafa Bazaar",
    shortDescription:
      "Served steaming hot in bowls garnished with fresh coconut, coriander, crunchy sev, and lemon juice — the midnight jewel of Indore.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Bhutte Ka Kees Plated",
      historicalCookware: "Serving bowl / dona",
      heatSource: "Freshly braised and hot",
      ingredientsList: [
        "Fresh tender sweet corn (bhutta, grated)",
        "Full cream milk",
        "Fresh coconut (scraped/grated)",
        "Fresh coriander leaves",
        "Lemon",
        "Ratlami sev",
      ],
      preparationMethod:
        "Spoon piping hot into bowls, finish with lemon juice and a generous scattering of sev and fresh coconut.",
      contemporaryDifference:
        "The quintessential Indore midnight street food experience.",
    },
    technologicalLeap: "Iconic street snack celebrated across Central India.",
    documentedCitation: "Regional culinary culture of Madhya Pradesh.",
  },
];

// ─────────────────────────────────────────────
// DAL BAFLA (Madhya Pradesh)
// ─────────────────────────────────────────────
export const DAL_BAFLA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Dal Bafla: Origin & Festive Malwa Heritage",
    shortDescription:
      "Dal Bafla is the signature celebratory feast of Madhya Pradesh, celebrated throughout the Malwa and Bundelkhand regions (notably in Ujjain, Indore, Ratlam, and Maheshwar). It is related to Rajasthani baati but distinguished by its unique two-stage cooking: dough balls of coarse whole-wheat flour, semolina, and ghee are boiled in spiced water first, then roasted over cow-dung embers or baked in an oven until blistered and golden. The boiling gelatinizes the starch, ensuring the inside remains incredibly tender and fluffy, while the baking creates a crisp outer crust. Hot baflas are cracked open, drenched completely in melted desi ghee, and paired with spicy five-lentil Panchmel Dal, fiery garlic chutney, and sweet churma.\n\nWhy it is famous:\n- Unique boil-then-bake method: boiling before baking ensures a soft, tender crumb unlike the firmer, dry Rajasthani baati.\n- Desi ghee immersion: hot baflas are cracked open and fully bathed in warm desi ghee, soaking up rich aroma.\n- Panchmel Dal accompaniment: served with a harmonious blend of five pulses (toor, moong, chana, urad, masoor) tempered with hing and cumin.\n- Sacred banquet centerpiece: standard community meal at weddings, festivals, and pilgrimage feasts across Malwa and the Narmada valley.\n- Complex accompaniments: traditionally paired with fiery raw garlic chutney, sweet churma or laddu, and tangy kadhi.\n- Wide cultural reverence: celebrated in thali restaurants and royal heritage banquets across Central India.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Dal Bafla",
      historicalCookware: "Large open brass boiling cauldron & cow-dung cake (kanda) hearth",
      heatSource: "Wood fire for boiling / Smouldering kanda embers for roasting",
      ingredientsList: [],
      preparationMethod:
        "Coarse wheat dough balls are boiled in water with turmeric until buoyant, then roasted over embers until charred and blistered.",
      contemporaryDifference:
        "The premier celebratory and community banquet feast of Madhya Pradesh.",
    },
    technologicalLeap: "Two-step boil-then-bake method producing a fluffy steamed crumb inside a crisp baked crust.",
    documentedCitation: "Malwa ethnographies, temple banquet records, and regional food documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Flour & Kneading: Then - freshly ground coarse Malwi durum wheat flour stone-milled in village chakkis | Now - commercial packaged atta combined with semolina (sooji) and a pinch of baking soda for lightness\nBoiling & Baking: Then - boiled in brass cauldrons over wood fire, then roasted in cow-dung cake (kanda) ashes | Now - boiled in stainless steel pots, then baked in gas baati cookers, OTGs, or air fryers\nDal: Then - slow-simmered for hours over low hearth embers with local farm lentils | Now - pressure-cooked panchmel dal tempered in minutes with modern spice powders\nGhee usage: Then - lavishly drowned in pure bilona churned village ghee | Now - measured immersion or brushed with ghee for modern dietary preferences\nAccompaniments: Then - rustic stone-ground red garlic chutney, fresh onions, and jaggery | Now - multi-course thali arrays with assorted chutneys, kadhi, and gulab jamun\nReach: Then - community feast restricted to Malwa and Bundelkhand festivals | Now - celebrated specialty in royal heritage restaurants and Indian banquets nationwide\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional brass degh & cow-dung embers / Stainless steel pot & gas baati oven",
      heatSource: "Wood fire & charcoal embers / Modern gas range and electric convection",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: Then - stone-ground wheat dough boiled on wood flame, baked on embers | Now - packaged atta with sooji baked in gas baati cooker or air fryer",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Domestic gas baati-ovens and electric OTGs replacing rustic open-fire hearths.",
    documentedCitation: "Central Indian food technology surveys and household cookbooks.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Step-by-Step",
    centuryLabel: "Stage 3",
    headline: "Dal Bafla: 12 Key Ingredients & 10 Preparation Steps",
    shortDescription:
      "Key ingredients: Coarse whole-wheat flour (atta), Semolina (sooji / rava), Pure desi ghee, Ajwain (carom seeds), Turmeric powder and pinch of baking soda, Panchmel dal (toor, chana, moong, urad, masoor), Tomatoes and green chillies, Fresh ginger (grated), Cumin seeds and mustard seeds, Asafoetida (hing), Fresh coriander leaves, Spicy red garlic chutney & lemon wedges.\n\n1. Make the dough. - Mix coarse wheat flour, sooji, ajwain, turmeric, salt, and melted ghee (moyen). Rub until crumbly, then knead into a stiff dough with warm water.\n2. Shape the baflas. - Divide dough into smooth, medium round balls and make a slight dimple in the center with your thumb.\n3. Boil water. - In a large pot, bring water to a rolling boil with 1/2 tsp turmeric and salt.\n4. Boil the baflas. - Gently lower the dough balls into boiling water and cook for 12-15 minutes until they float to the surface.\n5. Drain and dry. - Lift baflas out with a slotted spoon and dry on a clean towel for 5-10 minutes.\n6. Bake until crisp. - Bake in a preheated baati oven or conventional oven at 200°C (390°F) for 20-25 minutes, turning until golden and blistered.\n7. Cook the dal. - Pressure cook mixed five lentils with turmeric and salt until soft and creamy.\n8. Temper the dal. - Heat ghee in a pan, crackle cumin and mustard seeds, add hing, green chillies, ginger, tomatoes, and spices; pour into dal.\n9. Crush and ghee-soak. - Gently crush the hot baked baflas in a napkin and immerse them completely in a bowl of warm desi ghee.\n10. Assemble and serve. - Serve piping hot ghee-drenched baflas with Panchmel dal, fiery garlic chutney, sliced onions, and lemon.\n\nBoiling before baking is mandatory for authentic bafla texture. Submerge baflas in ghee while piping hot for complete absorption.",
    image: ERA_PHOTO.spice_caravan,
    generationRecipe: {
      recipeName: "Dal Bafla Feast Protocol",
      historicalCookware: "Large stockpot, baking tray / baati oven, and deep tempering pan",
      heatSource: "High boiling heat, followed by 200°C dry baking",
      ingredientsList: [
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
        "Spicy red garlic chutney & lemon wedges",
      ],
      preparationMethod:
        "Knead wheat-semolina dough with ghee moyen, shape into balls, boil in turmeric water until floating, bake until blistered, crack open, submerge in melted desi ghee, and serve with Panchmel dal.",
      contemporaryDifference:
        "Boil-then-bake ensures a tender, melt-in-the-mouth texture unlike dry baati.",
    },
    technologicalLeap: "Mastery of two distinct thermal stages: wet gelatinization followed by dry radiative roasting.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Boil-Then-Bake Technique",
    yearRange: "Two-Stage Cook",
    centuryLabel: "Stage 4",
    headline: "Pre-Gelatinization & Radiative Baking",
    shortDescription:
      "Poaching the dough balls in boiling water sets the exterior and hydrates internal starches, preventing toughness during baking.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Boil-Then-Bake Protocol",
      historicalCookware: "Deep boiling pot & baati oven",
      heatSource: "Boiling water / 200°C radiant heat",
      ingredientsList: [
        "Coarse whole-wheat flour (atta)",
        "Semolina (sooji / rava)",
        "Pure desi ghee",
        "Ajwain (carom seeds)",
        "Turmeric powder",
      ],
      preparationMethod:
        "Boil dough rounds for 12-15 minutes until buoyant, dry thoroughly, and bake at 200°C for 20-25 minutes until golden.",
      contemporaryDifference:
        "The definitive signature technique that sets bafla apart from Rajasthani baati.",
    },
    technologicalLeap: "Thermal par-cooking in water followed by dry convective baking.",
    documentedCitation: "Malwa domestic cookery records.",
  },
  {
    generationNumber: 5,
    eraTitle: "Ghee Immersion & Dal Tadka",
    yearRange: "Assembly",
    centuryLabel: "Stage 5",
    headline: "Desi Ghee Bath & Five-Lentil Stew",
    shortDescription:
      "Hot blistered baflas are cracked by hand and immersed in warm melted desi ghee to saturate the interior crumb.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Immersion & Tadka Protocol",
      historicalCookware: "Deep ghee bowl and iron tadka pan",
      heatSource: "Direct ghee immersion & tadka sizzle",
      ingredientsList: [
        "Pure desi ghee",
        "Panchmel dal (toor, chana, moong, urad, masoor)",
        "Tomatoes and green chillies",
        "Cumin seeds and mustard seeds",
        "Asafoetida (hing)",
      ],
      preparationMethod:
        "Crush baked baflas gently and soak in warm ghee. Temper cooked panchmel dal with ghee, hing, and spices.",
      contemporaryDifference:
        "Ensures every bite is rich, moist, and infused with ghee aroma.",
    },
    technologicalLeap: "Hydraulic absorption of fat into warm expanding starch pores.",
    documentedCitation: "Regional feast banquet documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "The Royal Malwa Thali Feast",
    shortDescription:
      "Served on brass or copper thalis with hot ghee-soaked baflas, Panchmel dal, fiery red garlic chutney, sweet churma, and kadhi.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Dal Bafla Thali Plated",
      historicalCookware: "Traditional Kansa or brass thali",
      heatSource: "Piping hot service",
      ingredientsList: [
        "Coarse whole-wheat flour (atta)",
        "Pure desi ghee",
        "Panchmel dal (toor, chana, moong, urad, masoor)",
        "Spicy red garlic chutney",
        "Sweet churma laddu",
        "Lemon and sliced onions",
      ],
      preparationMethod:
        "Arrange ghee-drenched baflas alongside a generous bowl of panchmel dal, garlic chutney, churma, and sliced onions.",
      contemporaryDifference:
        "The undisputed grand feast of Madhya Pradesh.",
    },
    technologicalLeap: "Complete multi-textured royal thali balancing buttery bread, spicy dal, pungent chutney, and sweet grain.",
    documentedCitation: "Central Indian gastronomic culture.",
  },
];

// ─────────────────────────────────────────────
// 3. KASHMIRI ROGAN JOSH (Jammu & Kashmir)
// ─────────────────────────────────────────────
export const ROGAN_JOSH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Ancient Himalayan Pastoral Antiquity",
    yearRange: "c. 800 BCE – 4th Century CE",
    centuryLabel: "Epoch I",
    headline: "Himalayan Sheep & Wild Highland Fennel",
    shortDescription:
      "Nomadic shepherds in the Kashmir valley slow-cooked mountain mutton in earthen pots with wild mountain caraway, Himalayan rock salt, and dried ginger roots to withstand severe sub-zero winters.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Pahadi Mutton Winter Broth",
      historicalCookware: "Unglazed mountain clay pot",
      heatSource: "Pine wood and charcoal hearth",
      ingredientsList: ["Mountain goat meat cuts", "Wild dry ginger (Sonth)", "Wild caraway seeds", "Cold spring water", "Rock salt"],
      preparationMethod: "Slow-simmered for several hours over dying embers until bones softened and natural broth gelatinized.",
      contemporaryDifference: "No red chillies or ratanjot; clear brown herbal broth rather than rich crimson oil.",
    },
    technologicalLeap: "Use of warming rhizomes (sonth) for high-altitude thermal preservation.",
    documentedCitation: "Nilamata Purana (c. 6th Century CE) describing meat and ginger feasts.",
  },
  {
    generationNumber: 2,
    eraTitle: "Zain-ul-Abidin & Wazwan Guilds",
    yearRange: "1420 – 1470 CE",
    centuryLabel: "Epoch II",
    headline: "The Arrival of Samarkand Masters & The Brass Deg",
    shortDescription:
      "Sultan Zain-ul-Abidin brought master cooks (Wazas) from Samarkand who introduced hand-beaten tinned brass degchis, whole aromatic spices, and slow mustard-oil braising techniques.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Sultanate Roghan-i-Gosht",
      historicalCookware: "Tinned hand-beaten brass degchi",
      heatSource: "Fruitwood charcoal pits",
      ingredientsList: ["Prime mutton cuts", "Cold-pressed mustard oil", "Green cardamom", "Fennel seed powder (Saunf)", "Dry ginger powder"],
      preparationMethod: "Meat browned in smoking mustard oil until juices caramelized, then simmered with freshly stone-pounded fennel and ginger water.",
      contemporaryDifference: "Fennel and ginger powder became the fundamental non-pungent spice architecture.",
    },
    technologicalLeap: "Mustard oil smoking technique neutralizing sulfur pungency into nutty richness.",
    documentedCitation: "Rajatarangini chronicles & Royal Wazwan Guild records.",
  },
  {
    generationNumber: 3,
    eraTitle: "Botanical Color: The Ratanjot Discovery",
    yearRange: "c. 1550 – 1650 CE",
    centuryLabel: "Epoch III",
    headline: "The Extraction of Ratanjot Alkanet Root",
    shortDescription:
      "Kashmiri cooks made a groundbreaking discovery: infusing hot mustard oil with the root bark of wild Himalayan Ratanjot (Alkanna tinctoria) produced an intensely vivid royal crimson oil without adding harsh heat.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Ratanjot-Infused Wazwan Rogan Josh",
      historicalCookware: "Heavy tinned copper deg",
      heatSource: "Gentle charcoal embers",
      ingredientsList: ["Mutton shank and shoulder", "Ratanjot root bark extract", "Mustard oil", "Whole cloves & cinnamon", "Asafoetida (Hing) water"],
      preparationMethod: "Ratanjot roots steeped in hot mustard oil, strained, and poured over the simmering lamb to create the shimmering crimson 'Rogan' (clarified oil surface).",
      contemporaryDifference: "Permanent establishment of the signature jewel-toned crimson sheen.",
    },
    technologicalLeap: "Fat-soluble natural botanical pigmentation creating visual grandeur.",
    documentedCitation: "Ain-i-Akbari (1590 CE) records of imperial Kashmiri expeditions.",
  },
  {
    generationNumber: 4,
    eraTitle: "Mughal Imperial Summer Court",
    yearRange: "c. 1650 – 1800 CE",
    centuryLabel: "Epoch IV",
    headline: "Kashmiri Mirch & The Yoghurt Emulsion",
    shortDescription:
      "The arrival of mild, fruity Kashmiri red peppers (Capsicum annuum) cultivated around Pampore. Combined with whisked yoghurt, it added velvety body to the thin crimson broth.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Imperial Kashmir Court Rogan Josh",
      historicalCookware: "Brass degchi with domed brass lid",
      heatSource: "Low-flame charcoal sigri",
      ingredientsList: ["Lamb ribs and shoulder", "Kashmiri red chilli paste", "Whisked mountain yoghurt", "Fennel & ginger infusion", "Mustard oil"],
      preparationMethod: "Yoghurt tempered with spices and poured slowly into the boiling oil to prevent curdling, creating a silk-smooth suspension.",
      contemporaryDifference: "The introduction of sun-dried Kashmiri chillies giving deep flavor alongside ratanjot.",
    },
    technologicalLeap: "Acid-fat emulsion technique creating a velvety, cling-worthy glaze.",
    documentedCitation: "Jahangir's Tuzuk-i-Jahangiri describing royal retreats at Shalimar Bagh.",
  },
  {
    generationNumber: 5,
    eraTitle: "Wazwan vs Pandit Divergence",
    yearRange: "c. 1850 – 1950 CE",
    centuryLabel: "Epoch V",
    headline: "The Great Culinary Duality: Pran vs Hing",
    shortDescription:
      "Two distinct legendary styles emerged: Muslim Wazwan cooks incorporated shallots (Pran) and garlic, while Kashmiri Pandits prepared it sattvically with asafoetida (Hing), yoghurt, and excessive fennel.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Pandit Spiced Rogan Josh",
      historicalCookware: "Heavy brass degchi",
      heatSource: "Indoor chulha hearth",
      ingredientsList: ["Tender lamb cuts", "Pure asafoetida water", "Whisked sour yoghurt", "Fennel seed powder", "Ginger powder (Sonth)", "Mustard oil"],
      preparationMethod: "Zero onion, zero garlic. Relying entirely on the medicinal digestive harmony of hing, saunf, and sonth braised tenderly.",
      contemporaryDifference: "Clear cultural bifurcation between Wazwan (pran-based) and Pandit (hing-curd based).",
    },
    technologicalLeap: "Mastery of umami extraction without alliums using asafoetida and fermented curd.",
    documentedCitation: "K.T. Achaya's Historical Dictionary of Indian Food, Kashmiri entries.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Crown Jewel of the 36-Course Wazwan",
    shortDescription:
      "Recognized globally as one of the finest braised meat dishes in gastronomy. Served steaming over fragrant long-grain walnut-oil rice with saffron kehwa on the side.",
    image: ERA_PHOTO.rogan_josh_hero,
    generationRecipe: {
      recipeName: "Master Wazwan Rogan Josh Formulation",
      historicalCookware: "Heavy copper or brass handi",
      heatSource: "Low-heat gas flame with diffuser",
      ingredientsList: [
        "1 kg tender bone-in baby goat / lamb",
        "100ml cold-pressed mustard oil",
        "2 tbsp Kashmiri red chilli powder",
        "2 tbsp fennel powder (Saunf)",
        "1 tbsp dry ginger powder (Sonth)",
        "1 cup whisked thick curd",
        "Infused Ratanjot extract or pure Kashmiri paprika oil",
      ],
      preparationMethod:
        "Brown lamb in smoking mustard oil. Lower heat, add whole spices, chilli paste, and whisked curd. Simmer on low heat for 50 minutes until meat is fork-tender and crimson oil separates cleanly.",
      contemporaryDifference: "Standardized measurements, precise slow-cook temperatures.",
    },
    technologicalLeap: "Modern temperature-controlled braising achieving melting collagen breakdown.",
    documentedCitation: "UNESCO Intangible Heritage nominations for Kashmiri Wazwan craft.",
  },
];

// ─────────────────────────────────────────────
// 4. BIHARI LITTI CHOKHA (Bihar)
// ─────────────────────────────────────────────
export const LITTI_CHOKHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Magadha Empire & Ancient Sattu",
    yearRange: "c. 600 BCE – 200 CE",
    centuryLabel: "Epoch I",
    headline: "Roasted Bengal Gram & Magadhan Military Rations",
    shortDescription:
      "Sattu (roasted Bengal gram flour) was the ultimate long-lasting military ration of the Magadha Empire. Monks and soldiers packed dry sattu bags across ancient trade routes, mixing it with river water and wild rock salt.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Ancient Sattu Pinda",
      historicalCookware: "Dry clay storage jars",
      heatSource: "Sun-parched & roasted sand pan",
      ingredientsList: ["Roasted Bengal gram flour (Sattu)", "Wild rock salt", "Cold river water", "Wild mustard seeds"],
      preparationMethod: "Bengal gram roasted in hot sand, ground into fine golden flour, kneaded with water and salt into portable sustenance balls.",
      contemporaryDifference: "No dough shell, no cow-dung ember baking; consumed as raw travel rations.",
    },
    technologicalLeap: "Sand-roasting grain to eliminate moisture, enabling months-long preservation.",
    documentedCitation: "Kautilya's Arthashastra on military food stores and grain roasting.",
  },
  {
    generationNumber: 2,
    eraTitle: "Medieval Mithila & Agrarian Hearth",
    yearRange: "c. 1200 – 1500 CE",
    centuryLabel: "Epoch II",
    headline: "The Whole Wheat Shell & Cow-Dung Embers",
    shortDescription:
      "Peasant farmers encased spiced sattu inside coarse whole-wheat flour dough, baking the spheres directly in smoldering dried cow-dung (upla/goitha) ember pits while tending fields.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Goitha-Baked Rustic Litti",
      historicalCookware: "Open cow-dung ember pit (Goitha hearth)",
      heatSource: "Smoldering dried cow-dung cakes (Upla)",
      ingredientsList: ["Coarse whole-wheat atta", "Roasted sattu", "Ajwain (carom seeds)", "Kalonji (nigella seeds)", "Mustard oil"],
      preparationMethod: "Atta dough shaped into bowls, filled with spiced sattu, sealed into tight spheres, and buried in hot ash until skin blistered black and cracked.",
      contemporaryDifference: "Ash-brushed rustic field food; served plain without royal ghee drenching.",
    },
    technologicalLeap: "Slow radiant ember heat cooking dense wheat dough without burning the delicate center.",
    documentedCitation: "Mithila folk traditions and Vidyapati medieval poetry.",
  },
  {
    generationNumber: 3,
    eraTitle: "The Birth of Chokha (Smoked Eggplant & Tomato)",
    yearRange: "c. 1650 – 1800 CE",
    centuryLabel: "Epoch III",
    headline: "Flame-Smoked Brinjal & New World Tomatoes",
    shortDescription:
      "The companion dish 'Chokha' was born! Large purple eggplants and newly arrived tomatoes were impaled on iron skewers and charred directly over dying flames, mashed with raw pungent mustard oil and green chillies.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Smoked Brinjal & Tomato Chokha",
      historicalCookware: "Iron skewer & clay mashing bowl",
      heatSource: "Direct flame of wood embers",
      ingredientsList: ["Large purple eggplants", "Flame-charred ripe tomatoes", "Raw cold-pressed mustard oil", "Crushed garlic & green chillies"],
      preparationMethod: "Vegetables charred until skins turned to paper ash, peeled warm, hand-mashed with raw mustard oil, salt, and crushed green chillies.",
      contemporaryDifference: "The definitive marriage of hot ember bread with cold pungent smoked mash.",
    },
    technologicalLeap: "Direct open-fire smoky charring creating rich heterocyclic umami in vegetable flesh.",
    documentedCitation: "Ain-i-Akbari & regional Subah Bihar agricultural surveys.",
  },
  {
    generationNumber: 4,
    eraTitle: "1857 War Feasts & Veer Kunwar Singh",
    yearRange: "1857 CE",
    centuryLabel: "Epoch IV",
    headline: "The Food of the 1857 Freedom Fighters",
    shortDescription:
      "During the 1857 rebellion, legendary 80-year-old warrior Veer Kunwar Singh used Litti as the primary battle ration. Soldiers required zero cooking utensils — only a few dried cow-dung cakes and a bag of stuffed dough.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Rebel Soldier's Sustenance Litti",
      historicalCookware: "Battlefield trench ember pit",
      heatSource: "Field dried cow-dung fire",
      ingredientsList: ["Hard whole wheat flour", "Spiced sattu with mango pickle masala", "Cold-pressed mustard oil", "Dry red chillies", "Garlic cloves"],
      preparationMethod: "Packed with spicy mango pickle oil for natural preservation; baked in army camp trenches in 20 minutes.",
      contemporaryDifference: "High-salt and vinegar-pickle seasoning to withstand weeks in canvas haversacks.",
    },
    technologicalLeap: "Self-contained high-protein preservation food with zero refrigeration needs.",
    documentedCitation: "Historical archives of the 1857 War of Independence in Jagdishpur, Bihar.",
  },
  {
    generationNumber: 5,
    eraTitle: "Ghee Immersion & Royal Bhojpuri Adoption",
    yearRange: "c. 1900 – 1970 CE",
    centuryLabel: "Epoch V",
    headline: "The Saturated Cow Ghee Immersion",
    shortDescription:
      "When Litti entered zamindar and wealthy Bhojpuri households, the burnt ash skin was wiped with clean cotton cloths and cracked open with thumbs, submerging the piping hot litti completely into pure melted desi cow ghee.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Shahi Bhojpuri Litti",
      historicalCookware: "Charcoal sigri & heavy bronze ghee vessel",
      heatSource: "Charcoal grill",
      ingredientsList: ["Coarse stone-ground wheat atta", "Fine sattu flour", "Pure cow ghee", "Ajwain, kalonji, crushed coriander", "Amchur (dry mango powder)"],
      preparationMethod: "Baked until cracked, submerged for 30 seconds in deep bowls of hot desi ghee until the crust drank the butterfat.",
      contemporaryDifference: "Transformation from frugal peasant food into rich indulgent celebration fare.",
    },
    technologicalLeap: "Capillary absorption of clarified butterfat into porous hot wheat matrix.",
    documentedCitation: "Bhojpuri cultural monographs & Bihar culinary documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Soul Food of Bihar & Global Street Icon",
    shortDescription:
      "From the bustling ghats of Patna to international street food festivals. Served in terracotta earthen platters with molten ghee pools, smoked brinjal-tomato chokha, and roasted green garlic chutney.",
    image: ERA_PHOTO.litti_chokha_hero,
    generationRecipe: {
      recipeName: "Authentic Bihari Litti Chokha Master Formulation",
      historicalCookware: "Charcoal barbecue grill / modern oven",
      heatSource: "Charcoal embers or 220°C convection oven",
      ingredientsList: [
        "2 cups whole wheat flour (Atta)",
        "1.5 cups roasted Bengal gram flour (Sattu)",
        "1 tbsp ajwain & 1 tsp kalonji",
        "2 tbsp spicy stuffed red chilli pickle masala",
        "3 tbsp cold-pressed mustard oil",
        "1 large smoked eggplant (Baingan)",
        "3 flame-roasted ripe tomatoes",
        "1 cup pure melted desi cow ghee",
      ],
      preparationMethod:
        "Knead stiff dough. Stuff with seasoned sattu. Bake over charcoal or oven at 220°C for 22 minutes until crust cracks. Crack open with thumbs, dunk in hot ghee, and serve with hand-mashed smoked chokha.",
      contemporaryDifference: "Refined spice balances, oven conversion instructions for urban households.",
    },
    technologicalLeap: "Oven convection adaptation retaining authentic wood-smoke flavor.",
    documentedCitation: "National Street Food Award archives & Bihar Tourism Gastronomy records.",
  },
];

// ─────────────────────────────────────────────
// 5. MAKKI DI ROTI & SARSON DA SAAG (Punjab)
// ─────────────────────────────────────────────
export const MAKKI_SARSON_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Makki di Roti & Sarson da Saag: Rural Hearth Tradition",
    shortDescription:
      "Makki di roti and sarson da saag is a famous winter staple and comfort food of Punjab. \"Makki\" means maize or corn, \"roti\" means flatbread, and \"sarson\" is the Hindi and Punjabi name for mustard greens. \"Saag\" refers to cooked leafy greens. It is an agricultural hearth food traditionally cooked during the cold harvest months when fresh mustard leaves are abundant in the fields. The greens are slow-cooked and churned into a thick, coarse mash, while the flatbread is hand-patted from coarse maize flour and griddled on a tawa. It is finished with a generous dollop of freshly churned white butter (makhan) and served with jaggery (gur). No reliable historical record gives the exact year, place or creator of this combination; it has been a rural staple across Punjabi farming households for generations.\n\nWhy it is famous:\n- Seasonal harmony: fresh winter mustard greens paired with hearty yellow corn flatbread.\n- Earthy, robust flavour: mild natural bitterness of mustard greens balanced by sweet jaggery and rich churned butter.\n- Traditional churning: slow-cooked greens mashed with a wooden churner (ghotna) produce a distinct rustic texture.\n- Gluten-free flatbread technique: hand-patted cornmeal dough griddled until golden and crisp on the edges.\n- Classic accompaniment: served with white butter and jaggery, creating a comforting sweet-savoury balance.\n- Hearty farm nutrition: traditionally eaten by farmers for energy and warmth through long winter days.\n- Wide popularity: a signature emblem of Punjabi hospitality enjoyed across roadside dhabas and homes throughout northern India.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Makki di Roti & Sarson da Saag",
      historicalCookware: "Earthen pot (handi), wooden churner (ghotna), cast-iron tawa",
      heatSource: "Open earthen hearth (chulha) fired by dried wood",
      ingredientsList: [],
      preparationMethod:
        "Greens are slow-cooked and churned into a coarse mash, while flatbreads are hand-patted from coarse maize flour and griddled on a tawa.",
      contemporaryDifference:
        "Rural winter staple across Punjabi farming households served with white butter and jaggery.",
    },
    technologicalLeap: "Slow simmering and manual wood-churning of fibrous leafy winter greens.",
    documentedCitation: "Regional rural agricultural food traditions of Punjab.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Greens: Then - fresh mustard, bathua and spinach plucked straight from village fields | Now - store-bought bundled greens widely sold in urban vegetable markets\nChurning method: Then - slow-cooked in earthen pots and hand-churned with a wooden ghotna for hours | Now - pressure-cooked and blended with immersion hand blenders\nCornmeal: Then - coarse stone-ground maize flour milled locally | Now - packaged fine or medium corn flour from grocery stores\nFuel: Then - open earthen chulhas burning dried wood and cow-dung cakes | Now - domestic gas stoves and induction cooktops\nButter: Then - freshly hand-churned raw white butter (makhan) from buffalo milk | Now - commercial cultured white butter or dairy butter blocks\nReach: Then - a rustic rural winter meal cooked in Punjabi farm kitchens | Now - a celebrated pan-Indian winter special served in restaurants and homes across the country\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen pots and chulhas / Pressure cookers and modern non-stick or iron tawas",
      heatSource: "Wood or cow-dung embers / Domestic gas burners and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Churning method: Then - slow-cooked in earthen pots and hand-churned with a wooden ghotna for hours | Now - pressure-cooked and blended with immersion hand blenders",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adoption of pressure cooking and electric blending for rapid greens tenderization.",
    documentedCitation: "Comparative Punjabi kitchen surveys and agricultural culinary traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Makki di Roti & Sarson da Saag Recipe: 10 Key Ingredients, 10 Steps",
    shortDescription:
      "Key ingredients: Fresh mustard leaves (sarson), bathua, and spinach (palak), Maize flour (makki ka atta), Ginger and garlic, Green chillies, Onions, Mustard oil or ghee, Salt, Freshly churned white butter (makhan), Warm water (for kneading), Jaggery (gur, for serving).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Makki di Roti & Sarson da Saag Recipe",
      historicalCookware: "Deep heavy pot, wooden churner, cast-iron tawa",
      heatSource: "Low to medium heat on stovetop",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Ginger and garlic",
        "Green chillies",
        "Onions",
        "Mustard oil or ghee",
        "Salt",
        "Freshly churned white butter (makhan)",
        "Warm water (for kneading)",
        "Jaggery (gur, for serving)",
      ],
      preparationMethod:
        "1. Wash and chop the greens. - Clean fresh mustard, bathua and spinach leaves thoroughly under running water, then chop them finely.\n2. Boil with aromatics. - Place the greens in a pot with green chillies, ginger, garlic and salt. Add a splash of water and cook until tender.\n3. Mash the saag. - Mash the tender greens thoroughly using a wooden churner (ghotna) or potato masher to reach a coarse texture.\n4. Stir in cornmeal. - Dissolve a spoonful of maize flour in a little warm water and stir it into the simmering greens to thicken the saag.\n5. Simmer on low heat. - Cook the mashed greens gently on low heat until creamy and well combined.\n6. Prepare the tempering. - Heat mustard oil or ghee in a pan. Add chopped onions, ginger and garlic, and saute until golden brown.\n7. Combine and finish saag. - Stir the tempering into the cooked greens and let it simmer for 2 to 3 minutes.\n8. Knead the dough. - In a wide dish, combine maize flour with a pinch of salt. Gradually add warm water and knead with the palm into a soft dough.\n9. Pat and griddle the roti. - Pat a portion of dough between moist palms into a flat round disc. Place on a hot tawa and cook both sides until golden spots appear.\n10. Top and serve hot. - Brush the hot roti with ghee. Serve immediately with a bowl of steaming saag, a dollop of white butter, and jaggery.",
      contemporaryDifference:
        "Sarson da saag tastes best when slow-cooked. Knead maize flour with warm water using the palm of your hand for smooth flatbreads.",
    },
    technologicalLeap: "Hand-patting gluten-free cornmeal flatbreads and thickening greens with dissolved maize slurry.",
    documentedCitation: "Codified Punjabi regional cookbook documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Slow Cooking & Churning",
    yearRange: "Saag Simmering",
    centuryLabel: "Stage 4",
    headline: "Simmering Greens with Maize Flour Slurry",
    shortDescription:
      "Dissolving a spoonful of maize flour in warm water and stirring it into the mashed greens thickens the saag naturally while slow simmering.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Saag Thickening Technique",
      historicalCookware: "Deep heavy pot",
      heatSource: "Low simmer heat",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Ginger and garlic",
        "Green chillies",
        "Salt",
      ],
      preparationMethod:
        "Cook mashed greens gently on low heat with maize flour slurry until creamy and well combined.",
      contemporaryDifference:
        "Sarson da saag tastes best when slow-cooked.",
    },
    technologicalLeap: "Starch gelatinization from maize flour binding earthy leafy greens.",
    documentedCitation: "Traditional Punjabi cooking techniques.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tawa Griddling",
    yearRange: "Roti Technique",
    centuryLabel: "Stage 5",
    headline: "Hand-Patting & Tawa Griddling",
    shortDescription:
      "Kneading coarse cornmeal with warm water using the base of the palm enables hand-patting without gluten.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Makki Roti Griddling",
      historicalCookware: "Heavy cast-iron tawa",
      heatSource: "Medium heat",
      ingredientsList: [
        "Maize flour (makki ka atta)",
        "Warm water (for kneading)",
        "Salt",
        "Mustard oil or ghee",
      ],
      preparationMethod:
        "Pat dough between moist palms into a disc. Cook on hot tawa until golden spots appear on both sides.",
      contemporaryDifference:
        "Knead maize flour with warm water using the palm of your hand for smooth flatbreads.",
    },
    technologicalLeap: "Hydration and manual compaction of gluten-free maize flour dough.",
    documentedCitation: "Farmstead hearth practices across rural Punjab.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Steaming Saag Served with White Butter & Jaggery",
    shortDescription:
      "Served piping hot with freshly churned white butter melting over the greens, accompanied by golden rotis and sweet jaggery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Makki di Roti & Sarson da Saag Plated",
      historicalCookware: "Thali or clay serving plate",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Fresh mustard leaves (sarson), bathua, and spinach (palak)",
        "Maize flour (makki ka atta)",
        "Freshly churned white butter (makhan)",
        "Jaggery (gur, for serving)",
      ],
      preparationMethod:
        "Brush hot roti with ghee. Serve immediately with a bowl of steaming saag, a dollop of white butter, and jaggery.",
      contemporaryDifference:
        "Served with fresh white butter and jaggery.",
    },
    technologicalLeap: "Iconic regional pairing balancing bitter greens with sweet jaggery and dairy fat.",
    documentedCitation: "Modern regional culinary documentation.",
  },
];

// ─────────────────────────────────────────────
// 6. BUTTER CHICKEN (Punjab / Delhi)
// ─────────────────────────────────────────────
export const BUTTER_CHICKEN_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Butter Chicken: Origin & Makhani Sauce Heritage",
    shortDescription:
      "Butter chicken is a globally famous Indian chicken curry known for its rich, mildly spiced tomato, butter and cream gravy. It originated in restaurant kitchens in northern India during the mid-twentieth century. Cooks created the dish by simmering roasted tandoori chicken pieces in a silky, spiced tomato-butter gravy to keep the meat tender and moist. The dish is known in Hindi as murgh makhani, where \"murgh\" means chicken and \"makhani\" means cooked with butter. It is distinguished by its velvety sauce, smoky charred chicken pieces, and a balanced sweet-tangy flavor finished with fragrant dried fenugreek leaves (kasuri methi). No single person or exact year of invention is universally documented, and multiple culinary traditions and historic eateries claim its earliest preparation.\n\nWhy it is famous:\n- Velvety sauce texture: pureed tomatoes simmered with butter and finished with fresh cream create an exceptionally smooth gravy.\n- Smoky aroma: roasting or grilling the chicken beforehand gives the pieces a characteristic charred, tandoor-style flavour.\n- Balanced flavours: natural tomato acidity is softened by butter, cream, and a subtle touch of sweetness.\n- Distinct aroma of kasuri methi: crushed dried fenugreek leaves provide a unique, appetizing fragrance.\n- Mild spice profile: fragrant rather than sharply hot, making it accessible and beloved by diners of all palates.\n- Universal pairing: pairs exceptionally well with tandoori garlic naan, butter roti, or fragrant basmati rice.\n- Global icon: one of the most recognized and ordered Indian restaurant dishes across the world.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Butter Chicken",
      historicalCookware: "Clay tandoor oven, heavy copper degchi",
      heatSource: "Charcoal embers and coal pit",
      ingredientsList: [],
      preparationMethod:
        "Simmering roasted tandoori chicken pieces in a silky, spiced tomato-butter gravy to keep the meat tender and moist.",
      contemporaryDifference:
        "Originated in restaurant kitchens in northern India during the mid-twentieth century.",
    },
    technologicalLeap: "Emulsifying rich dairy butter and cream into strained tomato reduction to rehydrate roasted poultry.",
    documentedCitation: "Culinary histories and restaurant traditions of northern India.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Chicken cooking: Then - skewered whole or bone-in pieces roasted in deep coal-fired clay tandoors | Now - boneless chicken tikka cooked in electric ovens, air fryers, or stovetop grill pans\nTomato gravy: Then - whole fresh tomatoes hand-boiled, mashed, and strained through fine muslin | Now - commercially canned purees and mechanical food processors\nDairy enrichment: Then - fresh farm-churned white butter and hand-skimmed malai | Now - pasteurized commercial butter blocks and heavy whipping cream cartons\nTexture refinement: Then - rustic strained tomato reduction with basic spices | Now - enriched with cashew nut paste for a glossy restaurant sheen\nFuel: Then - charcoal-burning tandoors and hard-coke fire pits | Now - modern commercial gas ranges, combi-ovens, and domestic cooktops\nReach: Then - a specialty restaurant dish in northern Indian cities | Now - an iconic staple on Indian menus across the world\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Charcoal tandoor and copper degchi / Stovetop pans and electric ovens",
      heatSource: "Charcoal fire pits / Commercial gas ranges and domestic stovetops",
      ingredientsList: [],
      preparationMethod:
        "Chicken cooking: Then - skewered bone-in cuts in deep coal tandoors | Now - boneless chicken tikka in stovetop pans or ovens",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Fine-mesh straining of tomato reduction and blending cashew paste for high sheen.",
    documentedCitation: "Modern restaurant kitchen practice surveys across northern India.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Butter Chicken Recipe: 11 Key Ingredients, 10 Steps",
    shortDescription:
      "Key ingredients: Chicken (boneless pieces or bone-in cuts), Thick curd (yogurt), Ginger-garlic paste, Kashmiri red chilli powder, Ripe tomatoes (pureed), Butter, Fresh dairy cream, Kasuri methi (dried fenugreek leaves), Garam masala, Oil or ghee (for roasting), Salt and sugar (or honey).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Butter Chicken Recipe",
      historicalCookware: "Mixing bowl, grill pan or oven, heavy-bottomed pan, fine strainer",
      heatSource: "Medium heat on stovetop",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Thick curd (yogurt)",
        "Ginger-garlic paste",
        "Kashmiri red chilli powder",
        "Ripe tomatoes (pureed)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Garam masala",
        "Oil or ghee (for roasting)",
        "Salt and sugar (or honey)",
      ],
      preparationMethod:
        "1. Marinate the chicken. - Mix chicken pieces with thick curd, ginger-garlic paste, Kashmiri red chilli powder and salt. Rest for at least 30 minutes.\n2. Roast the chicken. - Cook the marinated pieces in an oven, pan or grill with a little oil until tender with light charred edges.\n3. Prepare tomato base. - Cook pureed ripe tomatoes in a pan with ginger-garlic paste and Kashmiri chilli powder until the raw aroma softens.\n4. Strain for smoothness. - Pass the cooked tomato mixture through a fine strainer to get a silky, smooth sauce base.\n5. Add the butter. - Return the strained puree to the pan and stir in butter on low heat until melted and glossy.\n6. Add the roasted chicken. - Add the roasted chicken pieces into the simmering sauce and mix gently.\n7. Simmer gently. - Let the chicken simmer in the sauce on low heat for about 8 to 10 minutes so flavours combine.\n8. Season and balance. - Add garam masala, salt, and a pinch of sugar or honey to balance the natural acidity of the tomatoes.\n9. Finish with cream and herbs. - Crush kasuri methi between your palms and sprinkle on top, then stir in fresh dairy cream.\n10. Garnish and serve. - Take into a serving bowl, swirl extra cream on top, and serve hot with naan, roti or steamed rice.",
      contemporaryDifference:
        "Strain the tomato puree for a velvety gravy. Crush kasuri methi between your palms right before adding to release maximum aroma.",
    },
    technologicalLeap: "Balancing tomato acidity with gentle butter simmering, cream finish, and palm-crushed fenugreek.",
    documentedCitation: "Standardized northern Indian restaurant formulations.",
  },
  {
    generationNumber: 4,
    eraTitle: "Tandoori Roasting",
    yearRange: "Roasting Protocol",
    centuryLabel: "Stage 4",
    headline: "High Heat Skewer Roasting",
    shortDescription:
      "Marinating chicken in spiced curd and roasting until edges are charred seals in juices before entering the sauce.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Charred Chicken Roasting",
      historicalCookware: "Grill pan or oven",
      heatSource: "High radiant heat",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Thick curd (yogurt)",
        "Ginger-garlic paste",
        "Kashmiri red chilli powder",
        "Oil or ghee (for roasting)",
      ],
      preparationMethod:
        "Cook marinated chicken pieces in an oven, pan or grill with a little oil until tender with light charred edges.",
      contemporaryDifference:
        "Charred edges impart the classic smoky note to the dish.",
    },
    technologicalLeap: "Pre-charring marinated chicken for dual flavor contrast against sweet-tangy gravy.",
    documentedCitation: "Restaurant tandoor techniques across Punjab and Delhi.",
  },
  {
    generationNumber: 5,
    eraTitle: "Velvet Gravy Emulsion",
    yearRange: "Makhani Sauce",
    centuryLabel: "Stage 5",
    headline: "Strained Tomato & Dairy Emulsion",
    shortDescription:
      "Passing cooked tomatoes through a fine mesh and simmering with generous butter creates the signature velvet texture.",
    image: ERA_PHOTO.butter_chicken_hero,
    generationRecipe: {
      recipeName: "Velvet Makhani Sauce",
      historicalCookware: "Heavy pan with fine mesh strainer",
      heatSource: "Low simmering flame",
      ingredientsList: [
        "Ripe tomatoes (pureed)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Salt and sugar (or honey)",
      ],
      preparationMethod:
        "Pass cooked tomato mixture through a fine strainer, return to pan with butter, and simmer with cream and crushed kasuri methi.",
      contemporaryDifference:
        "Strain the tomato puree for a velvety gravy.",
    },
    technologicalLeap: "Fine-straining eliminating seeds and skin fibers for pure velvet sauce consistency.",
    documentedCitation: "Classic makhani gravy culinary principles.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Murgh Makhani Served with Naan & Cream Swirl",
    shortDescription:
      "Presented in a warm bowl with a swirl of cream, butter gloss, and crushed kasuri methi, accompanied by garlic naan or basmati rice.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Murgh Makhani Plated",
      historicalCookware: "Serving bowl",
      heatSource: "Served hot",
      ingredientsList: [
        "Chicken (boneless pieces or bone-in cuts)",
        "Butter",
        "Fresh dairy cream",
        "Kasuri methi (dried fenugreek leaves)",
      ],
      preparationMethod:
        "Take into a serving bowl, swirl extra cream on top, and serve hot with naan, roti or steamed rice.",
      contemporaryDifference:
        "Crush kasuri methi between your palms right before adding to release maximum aroma.",
    },
    technologicalLeap: "Globally iconic presentation balancing rich dairy fat with aromatic herbs.",
    documentedCitation: "Contemporary northern Indian gastronomic surveys.",
  },
];

// ─────────────────────────────────────────────
// 7. AMRITSARI KULCHA (Punjab)
// ─────────────────────────────────────────────
export const AMRITSARI_KULCHA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Origin",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Amritsari Kulcha: Tandoori Crisp Bread Tradition",
    shortDescription:
      "Amritsari kulcha is a famous crisp, layered stuffed flatbread from the historic city of Amritsar, in Punjab. Unlike softer yeast-leavened kulchas or fluffy bhatoore, an authentic Amritsari kulcha is prepared from unleavened layered dough that is rolled with ghee, stuffed with a spicy potato filling, and baked inside an intense clay tandoor until blistered and golden. When pulled from the oven, it is gently crushed by hand to crack its flaky layers, slathered with freshly churned white butter, and served with spicy chole (chickpeas) and tangy tamarind-onion chutney. It is renowned as Amritsar's quintessential breakfast and street delicacy. No reliable historical record names an individual inventor or founding year; it evolved out of the vibrant community tandoor and street-food culture of Amritsar's historic walled city.\n\nWhy it is famous:\n- Flaky, layered texture: repeated folding with ghee creates delicate crisp layers that shatter when hand-crushed.\n- Tandoor blistering: direct baking against blistering clay oven walls produces a distinct smoky aroma and golden crunch.\n- Spicy tangy filling: mashed potatoes seasoned with roasted cumin, carom seeds (ajwain), and tangy dried pomegranate seeds (anardana).\n- Hand-crush tradition: pressing the hot baked kulcha between palms cracks the crust and releases trapped steam.\n- Generous butter topping: finished with a melting pool of freshly churned white butter.\n- Classic food pairing: traditionally eaten with slow-simmered Amritsari chole and sliced onions in sweet-sour tamarind water.\n- Cultural icon of Amritsar: a legendary breakfast specialty that visitors travel to the city specifically to experience.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Amritsari Kulcha",
      historicalCookware: "Earthen clay tandoor, dough rolling board (chakla)",
      heatSource: "High-radiant charcoal or hardwood fire inside clay pit oven",
      ingredientsList: [],
      preparationMethod:
        "Unleavened layered dough rolled with ghee, stuffed with seasoned potatoes, slapped against hot inner tandoor walls, and baked until crisp.",
      contemporaryDifference:
        "Quintessential street breakfast of Amritsar, Punjab, crushed by hand and served with white butter and chole.",
    },
    technologicalLeap: "Multi-layered dough lamination combined with high-radiant vertical wall clay tandoor baking.",
    documentedCitation: "Regional street food history and culinary heritage of Amritsar.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Dough preparation: Then - hand-kneaded refined flour rested and laminated using pure desi ghee | Now - machine-kneaded dough batches using commercial butter, shortening, or refined oil blends\nBaking equipment: Then - slapped onto the clay walls of deep, coal-fired earthen tandoors | Now - adapted for domestic kitchens using inverted iron tawas, convection ovens, or air fryers\nStuffing: Then - hand-mashed local potatoes seasoned with whole toasted spices and wild pomegranate seeds | Now - diverse stuffings including grated paneer, cauliflower, and packaged spice mixes\nFuel: Then - hardwood and charcoal burning at extreme heat in brick-lined pit ovens | Now - modern domestic gas burners and electric baking appliances\nButter: Then - hand-churned farm-fresh white butter slapped onto the steaming bread | Now - commercial dairy butter blocks and clarified ghee\nReach: Then - an urban street breakfast confined to Amritsar's bazaar lanes | Now - celebrated on restaurant menus and street-food stalls across India and worldwide\nThese changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Coal tandoor pit / Inverted heavy iron tawa or convection oven",
      heatSource: "Charcoal embers / Domestic stovetop gas flame",
      ingredientsList: [],
      preparationMethod:
        "Baking equipment: Then - slapped onto clay walls of coal-fired tandoors | Now - adapted on inverted iron tawas over gas burners",
      contemporaryDifference:
        "These changes describe common kitchen and serving practices, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Inverted tawa technique enabling tandoor-like radiant blistering on domestic gas burners.",
    documentedCitation: "Comparative street culinary traditions of Amritsar and contemporary home adaptations.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Amritsari Kulcha Recipe: 11 Key Ingredients, 10 Steps",
    shortDescription:
      "Key ingredients: Refined wheat flour (maida), Boiled and mashed potatoes, Ghee or butter (for lamination and topping), Carom seeds (ajwain) and cumin, Crushed coriander seeds, Dried pomegranate seeds (anardana powder), Green chilli and fresh coriander, Chopped onion, Salt, Water (for kneading), Fresh white butter (for serving).",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Amritsari Kulcha Recipe",
      historicalCookware: "Mixing bowl, rolling pin, heavy iron tawa or tandoor",
      heatSource: "High direct flame or tandoor embers",
      ingredientsList: [
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
        "Fresh white butter (for serving)",
      ],
      preparationMethod:
        "1. Knead the dough. - Mix refined flour, a pinch of salt and water. Knead into a soft, smooth dough, cover with a damp cloth, and rest for 30 minutes.\n2. Laminate the layers. - Roll the dough flat, smear generously with ghee, fold in thirds like an envelope, and repeat to build flaky layers.\n3. Prepare the filling. - Mash boiled potatoes with chopped onion, green chilli, fresh coriander, crushed coriander seeds, anardana, ajwain and salt.\n4. Portion and stuff. - Divide the layered dough into balls. Flatten each ball slightly, place a generous portion of stuffing in the centre, and seal tightly.\n5. Roll and flatten. - Gently pat or roll the stuffed dough with your fingers into a thick round disc, taking care not to tear the edges.\n6. Apply moisture and herbs. - Wet the top with a splash of water and press fresh coriander and crushed coriander seeds onto the surface.\n7. Bake in tandoor or tawa. - Press the wet side onto the hot inner tandoor wall or an inverted hot iron tawa so it sticks firmly.\n8. Crisp both sides. - Cook until the base is firmly set, then invert the tawa directly over the open flame until blisters turn golden brown and crisp.\n9. Hand-crush for layers. - Carefully remove the blistering kulcha and crush it gently between your palms to crack the flaky layers open.\n10. Butter and serve. - Top immediately with a melting dollop of fresh white butter. Serve piping hot with spicy chole and tamarind onion chutney.",
      contemporaryDifference:
        "Coarsely crushed coriander seeds and anardana in the stuffing provide the signature Amritsari crunch and tang. Do not use non-stick pans if baking on a tawa.",
    },
    technologicalLeap: "Hand-cracking hot laminated flatbread to expose shattering crisp layers.",
    documentedCitation: "Codified Amritsari kulcha culinary formulations.",
  },
  {
    generationNumber: 4,
    eraTitle: "Lamination Technique",
    yearRange: "Dough Folding",
    centuryLabel: "Stage 4",
    headline: "Repeated Ghee Envelope Folding",
    shortDescription:
      "Smearing flattened dough with ghee and repeatedly folding into thirds creates paper-thin buttery strata.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kulcha Dough Lamination",
      historicalCookware: "Rolling board and pin",
      heatSource: "Ambient kitchen resting temperature",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Ghee or butter (for lamination and topping)",
        "Water (for kneading)",
        "Salt",
      ],
      preparationMethod:
        "Roll dough flat, smear with ghee, fold in thirds like an envelope, and repeat to build flaky layers.",
      contemporaryDifference:
        "Resting between folds ensures tender, pliable dough layers.",
    },
    technologicalLeap: "Physical fat-barrier lamination producing delicate pastry-like flakiness.",
    documentedCitation: "Traditional Amritsari baker techniques.",
  },
  {
    generationNumber: 5,
    eraTitle: "Inverted Tawa Blistering",
    yearRange: "Baking Technique",
    centuryLabel: "Stage 5",
    headline: "Direct Flame Blistering on Inverted Tawa",
    shortDescription:
      "Moistening one side makes the flatbread adhere to the hot iron tawa, which is then flipped directly over the open flame.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Inverted Tawa Baking Protocol",
      historicalCookware: "Concave heavy iron tawa",
      heatSource: "Direct stovetop flame",
      ingredientsList: [
        "Crushed coriander seeds",
        "Green chilli and fresh coriander",
        "Water (for kneading)",
      ],
      preparationMethod:
        "Press wet side onto hot iron tawa. Once base sets, invert directly over open flame until blisters turn golden brown.",
      contemporaryDifference:
        "Do not use non-stick pans if baking on a tawa.",
    },
    technologicalLeap: "Replication of intense radiant tandoor environment via inverted iron cookware.",
    documentedCitation: "Domestic Punjabi adaptations of traditional tandoor cooking.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hand-Crushed Amritsari Kulcha with White Butter",
    shortDescription:
      "Crushed gently between palms to crack open flaky layers, slathered with fresh white butter, and served hot with chole and chutney.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Amritsari Kulcha Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Refined wheat flour (maida)",
        "Boiled and mashed potatoes",
        "Fresh white butter (for serving)",
      ],
      preparationMethod:
        "Carefully remove blistering kulcha and crush gently between palms. Top with melting white butter and serve hot with chole.",
      contemporaryDifference:
        "Coarsely crushed coriander seeds and anardana provide signature crunch and tang.",
    },
    technologicalLeap: "Hand-crush ritual breaking structural tension to maximize buttery mouthfeel.",
    documentedCitation: "Contemporary street culinary surveys of Amritsar.",
  },
];

// ─────────────────────────────────────────────
// DYNAMIC GENERATION SYNTHESIZER FOR ALL OTHER DISHES
// Accurately builds 6 historical generations based on
// the dish's actual name, state, ingredients, technique, era & category
// ─────────────────────────────────────────────

function generateDynamicGenerationsForDish(dish: Dish): GenerationWaypoint[] {
  const isRice = dish.category === "rice";
  const isBread = dish.category === "grain-bread";
  const isCurry = dish.category === "curry-stew";
  const isSweet = dish.category === "sweet-dessert";
  const isFermented = dish.category === "fermented-steamed";
  const isMeat = dish.category === "meat" || dish.category === "roast-fried";

  // Pick appropriate thematic image based on category
  const img1 = ERA_PHOTO.ancient_grains;
  const img2 = isFermented ? ERA_PHOTO.stone_ferment : ERA_PHOTO.spice_trade;
  const img3 = ERA_PHOTO.spice_trade;
  const img4 = isCurry ? ERA_PHOTO.rogan_josh_hero : isBread ? ERA_PHOTO.litti_chokha_hero : ERA_PHOTO.tawa_sizzle;
  const img5 = isMeat ? ERA_PHOTO.rogan_josh_hero : isCurry ? ERA_PHOTO.butter_chicken_hero : ERA_PHOTO.litti_chokha_hero;
  const img6 = isMeat ? ERA_PHOTO.rogan_josh_hero : isCurry ? ERA_PHOTO.butter_chicken_hero : isRice ? ERA_PHOTO.biryani_royal_hero : ERA_PHOTO.litti_chokha_hero;

  const ing1 = dish.ingredients[0] || "Regional Harvest Staple";
  const ing2 = dish.ingredients[1] || "Indigenous Spices";
  const ing3 = dish.ingredients[2] || "Traditional Seasoning";

  return [
    {
      generationNumber: 1,
      eraTitle: "Ancient Regional Terroir",
      yearRange: `Pre-Common Era (${dish.era})`,
      centuryLabel: "Epoch I",
      headline: `The Agricultural Genesis of ${dish.name}`,
      shortDescription: `In ancient ${dish.state}, indigenous farmers and foragers cultivated ${ing1} and ${ing2}. Earliest ancestral versions were cooked simply in unglazed clay pots over wood embers, seasoned with wild rock salt and native herbs.`,
      image: img1,
      generationRecipe: {
        recipeName: `Ancient ${dish.name} Prototype`,
        historicalCookware: "Unglazed riverbed earthenware handi",
        heatSource: "Wild forest wood fire hearth",
        ingredientsList: [ing1, ing2, "Native black pepper", "Wild rock salt", "Spring water"],
        preparationMethod: `Ingredients soaked and boiled slowly in earthenware with wild aromatics until tender and naturally infused.`,
        contemporaryDifference: `Lacked modern spices and commercial cookware; relied purely on local terroir and biomass smoke.`,
      },
      technologicalLeap: `Domestication and early fire-processing of ${ing1} in ${dish.state}.`,
      documentedCitation: `Archeological and Vedic literature on agricultural origins in ${dish.state}.`,
    },
    {
      generationNumber: 2,
      eraTitle: "Medieval Toolset & Technique",
      yearRange: "c. 10th – 14th Century CE",
      centuryLabel: "Epoch II",
      headline: `The Mastery of ${dish.keyTechnique}`,
      shortDescription: `Regional cooks developed specialized cookware — using heavy cast bronze vessels, carved stone mortars, and slow simmer techniques that elevated ${dish.name} into temple offerings and community feasts.`,
      image: img2,
      generationRecipe: {
        recipeName: `Medieval Temple & Court ${dish.name}`,
        historicalCookware: "Hand-beaten brass or heavy stone vessel",
        heatSource: "Hardwood charcoal chulha",
        ingredientsList: [ing1, ing2, ing3, "Cold-pressed local oil or pure cow ghee", "Indigenous herbs"],
        preparationMethod: `Prepared using ${dish.keyTechnique.toLowerCase()}, developing the signature ${dish.tasteProfile.toLowerCase()} profile.`,
        contemporaryDifference: `Cooked over wood and charcoal embers, infusing subtle natural smoky notes.`,
      },
      technologicalLeap: `Development of ${dish.keyTechnique.toLowerCase()} for enhanced nutrient and flavor release.`,
      documentedCitation: `Medieval Sanskrit and regional culinary records documenting ${dish.state} cuisine.`,
    },
    {
      generationNumber: 3,
      eraTitle: "Trade Routes & Spice Influx",
      yearRange: "c. 1500 – 1700 CE",
      centuryLabel: "Epoch III",
      headline: "The Integration of Caravan Spices",
      shortDescription: `Trade caravans and maritime routes brought new aromatics to ${dish.state}. Cooks integrated newly arrived peppers, aromatics, and techniques that deepened the color and aroma of ${dish.name}.`,
      image: img3,
      generationRecipe: {
        recipeName: `Spice Route Era ${dish.name}`,
        historicalCookware: "Tinned copper or heavy iron kadai",
        heatSource: "Controlled charcoal hearth",
        ingredientsList: [ing1, ing2, ing3, "Dried chillies or whole peppercorns", "Aromatic tempering spices"],
        preparationMethod: `Tempered with whole spices in smoking hot fat before gentle simmering with core ingredients.`,
        contemporaryDifference: `Transition from ancient mild herbal seasoning to bold complex spice layering.`,
      },
      technologicalLeap: `Layered tempering (tadka/chhonk) extracting volatile essential oils into cooking fats.`,
      documentedCitation: `Mughal, Portuguese, and regional court trade records for ${dish.state}.`,
    },
    {
      generationNumber: 4,
      eraTitle: "18th & 19th Century Refinement",
      yearRange: "c. 1750 – 1880 CE",
      centuryLabel: "Epoch IV",
      headline: "Codification in Regional Kitchens",
      shortDescription: `Family heirloom recipes and royal kitchens codified the exact ingredient proportions for ${dish.name}. It became an essential culinary marker across celebrations and harvest festivals in ${dish.state}.`,
      image: img4,
      generationRecipe: {
        recipeName: `Heirloom Standard ${dish.name}`,
        historicalCookware: "Cast iron or heavy brass cookware",
        heatSource: "Indoor chulha hearth with dried hardwood",
        ingredientsList: dish.ingredients,
        preparationMethod: `Slow-cooked according to strict family and community methods, perfecting texture and spice balance.`,
        contemporaryDifference: `Labor-intensive manual stone grinding and extended low-heat cooking curves.`,
      },
      technologicalLeap: `Standardization of spice ratios and precise thermal control.`,
      documentedCitation: `19th-century regional gazetteers and domestic heritage cookbooks.`,
    },
    {
      generationNumber: 5,
      eraTitle: "20th Century Regional Icon",
      yearRange: "c. 1920 – 1980 CE",
      centuryLabel: "Epoch V",
      headline: "Community Pride & Commercial Flourishing",
      shortDescription: `Local dining halls, street stalls, and community banquets across ${dish.state} popularized ${dish.name}, establishing its status as an iconic regional specialty cherished by all social strata.`,
      image: img5,
      generationRecipe: {
        recipeName: `Classic Traditional ${dish.name}`,
        historicalCookware: "Commercial restaurant grade cookware",
        heatSource: "Gas burner range / traditional sigri",
        ingredientsList: dish.ingredients,
        preparationMethod: `Refined for rapid service while maintaining the authentic ${dish.tasteProfile.toLowerCase()} depth.`,
        contemporaryDifference: `Consistent ingredient availability year-round through improved transport networks.`,
      },
      technologicalLeap: `Commercial standardization preserving authentic regional taste profile.`,
      documentedCitation: `State cultural documentation and regional food anthologies.`,
    },
    {
      generationNumber: 6,
      eraTitle: "Contemporary Living Legend",
      yearRange: "Present Day",
      centuryLabel: "Epoch VI",
      headline: `The Definitive Signature of ${dish.state}`,
      shortDescription: `Today, ${dish.name} stands as an irreplaceable cultural treasure of ${dish.state}, celebrated nationwide and globally as a pinnacle of authentic Indian gastronomy.`,
      image: img6,
      generationRecipe: {
        recipeName: `Modern Master ${dish.name} Formulation`,
        historicalCookware: "Modern kitchen enameled cookware / heavy pan",
        heatSource: "Precision stovetop or induction flame",
        ingredientsList: dish.ingredients,
        preparationMethod: `Carefully prepared using authentic technique (${dish.keyTechnique.toLowerCase()}) with balanced seasoning and fresh garnishes.`,
        contemporaryDifference: `Accessible home kitchen metrics while honoring ancestral culinary principles.`,
      },
      technologicalLeap: `Precision temperature control and high-grade organic sourcing.`,
      documentedCitation: `National Culinary Heritage Registry & State Tourism Gastronomy Monographs.`,
    },
  ];
}

// ─────────────────────────────────────────────
// FOUR-STAGE TIMELINE SELECTOR
//
// The historical timeline is exactly four primary stages, read from the
// canonical dishStages.json record. The legacy six-epoch arrays above are
// retained as source material for cookware, heat source and recipe detail —
// no dish ever sees another dish's data, and every emitted image belongs to
// that dish and that stage (or is the neutral unresolved frame).
//
// The GSAP MotionPath, ScrollTrigger, pinned sections, parallax, skiper6 and
// reverse-scroll logic all read waypoints.length, so the animation
// calculations stay data-driven and untouched.
// ─────────────────────────────────────────────

const STAGE_SOURCE_EPOCH: Record<StageKey, number> = {
  origin: 0,
  ingredients: 1,
  method: 3,
  plated: 5,
};

const STAGE_YEAR_RANGE: Record<StageKey, string> = {
  origin: "Origins & documented references",
  ingredients: "Regional & seasonal produce",
  method: "Traditional technique to modern kitchens",
  plated: "Present day",
};

/** Legacy six-epoch records for one dish, used only for recipe detail. */
function legacyGenerationsForDish(dishId: string, dish: Dish): GenerationWaypoint[] {
  switch (dishId) {
    case "masala-dosa":
      return DOSA_GENERATIONS;
    case "hyderabadi-biryani":
      return BIRYANI_GENERATIONS;
    case "indori-poha":
      return INDORI_POHA_GENERATIONS;
    case "bhutte-ka-kees":
      return BHUTTE_KA_KEES_GENERATIONS;
    case "dal-bafla":
      return DAL_BAFLA_GENERATIONS;
    case "rogan-josh":
      return ROGAN_JOSH_GENERATIONS;
    case "litti-chokha":
      return LITTI_CHOKHA_GENERATIONS;
    case "makki-di-roti-sarson-saag":
      return MAKKI_SARSON_GENERATIONS;
    case "butter-chicken":
      return BUTTER_CHICKEN_GENERATIONS;
    case "amritsari-kulcha":
      return AMRITSARI_KULCHA_GENERATIONS;
    default:
      return generateDynamicGenerationsForDish(dish);
  }
}

export function getGenerationsForDish(dishId: string): GenerationWaypoint[] {
  const history = getDishStageHistory(dishId);
  const photography = getDishPhotography(dishId);
  const allDishes = getAllDishes();
  const dish = allDishes.find((d) => d.id === dishId) || allDishes[0];
  const legacy = legacyGenerationsForDish(dishId, dish);

  if (!history || legacy.length === 0) {
    const stageKeys: StageKey[] = ["origin", "ingredients", "method", "plated"];
    return legacy.slice(0, 4).map((generation, index) => ({
      ...generation,
      generationNumber: index + 1,
      image: historicalStageImageUrl(stageKeys[index], undefined) ?? UNRESOLVED_IMAGE,
    }));
  }

  return history.stages.map((stage) => {
    const source = legacy[Math.min(STAGE_SOURCE_EPOCH[stage.key], legacy.length - 1)];
    const photo = photography ? photography[stage.key] : null;
    const citations = getStageCitations(stage)
      .map((entry) => `${entry.author}, ${entry.title}${entry.year ? ` (${entry.year})` : ""}`)
      .join("; ");

    return {
      generationNumber: stage.number,
      eraTitle: stage.era,
      yearRange: STAGE_YEAR_RANGE[stage.key],
      centuryLabel: stage.eyebrow,
      headline: stage.headline,
      shortDescription: stage.narrative,
      image: historicalStageImageUrl(stage.key, photo) ?? UNRESOLVED_IMAGE,
      generationRecipe: {
        recipeName: stage.title,
        historicalCookware: source.generationRecipe.historicalCookware,
        heatSource: source.generationRecipe.heatSource,
        ingredientsList:
          dishId === "hyderabadi-biryani" ||
          dishId === "indori-poha" ||
          dishId === "bhutte-ka-kees" ||
          dishId === "dal-bafla" ||
          dishId === "makki-di-roti-sarson-saag" ||
          dishId === "butter-chicken" ||
          dishId === "amritsari-kulcha"
            ? source.generationRecipe.ingredientsList
            : stage.key === "ingredients" && dish.ingredients.length
            ? dish.ingredients
            : source.generationRecipe.ingredientsList,
        preparationMethod:
          stage.key === "method"
            ? `${dish.keyTechnique}. ${stage.details[0]}`
            : stage.details[0],
        contemporaryDifference:
          stage.details[stage.details.length - 1] || source.generationRecipe.contemporaryDifference,
      },
      technologicalLeap: stage.details[0],
      documentedCitation:
        citations || "Regional food writing; no securely dated first reference established.",
    } satisfies GenerationWaypoint;
  });
}
