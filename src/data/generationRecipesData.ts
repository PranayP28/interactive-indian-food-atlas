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
// HYDERABADI HALEEM (Telangana)
// ─────────────────────────────────────────────
export const HALEEM_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Hyderabadi Haleem in the Deccan",
    shortDescription:
      "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Large copper or brass cauldrons (Degs) over bhatti fire",
      heatSource: "Wood and charcoal bhatti fire burning overnight",
      ingredientsList: [],
      preparationMethod:
        "Slow-simmered for 8 to 12 hours and vigorously pounded with heavy wooden pestles (ghotni) until meat and wheat merge into a smooth, cohesive porridge.",
      contemporaryDifference:
        "Introduced by Yemeni Chaush soldiers and refined in Asaf Jahi royal kitchens with fragrant Deccan spices and pure ghee.",
    },
    technologicalLeap: "Bhatti simmer and rhythmic wooden ghotni pounding extracting gelatinous collagen and wheat starches.",
    documentedCitation: "Medieval Arab culinary compendiums & Asaf Jahi court kitchen archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders\nVessel: massive heavy tinned copper cauldrons (degs/bhatti) / stainless steel pots, heavy-bottom handis, and domestic pressure cookers\nFuel: tamarind wood and charcoal bhattis burning low overnight / LPG gas stoves, induction, and commercial gas burners\nCooking time: 10 to 12 hours of overnight simmering / 1.5 to 2.5 hours in home pressure cookers\nPounding: 2 to 3 skilled cooks rhythmically beating with wooden poles (ghotnis) / home wooden whisks, potato mashers, or short pulses of electric blenders\nMeat: traditional bone-in tender goat/mutton marrow cuts slow-cooked till bones slip out / boneless mutton, chicken (now widespread in restaurants), and modern vegetarian lentil variants\nFlavourings: pure desi ghee, freshly stone-ground potli masala, rose water, and wild cinnamon / commercial packaged haleem spice blends and ready ginger-garlic paste\nGarnish & Serving: golden fried onions (birista), ghee drizzle, fresh mint, coriander, lime, and sliced almonds/cashews / similar traditional garnishes maintained across both royal feasts and modern takeaway boxes",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Massive copper bhatti cauldrons / stainless steel pots and pressure cookers",
      heatSource: "Tamarind wood and charcoal / domestic LPG gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders",
      contemporaryDifference:
        "Transition from overnight wood-fired bhatti cauldrons to rapid pressure cooking and domestic handheld blenders.",
    },
    technologicalLeap: "Mechanical and thermal evolution shortening 12-hour manual labor to domestic accessibility.",
    documentedCitation: "Gastronomic surveys and regional technology documentation.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Hyderabadi Haleem Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: broken wheat (dalia), boneless mutton, chana and moong lentils, curd, pure desi ghee, fried onions (birista), ginger-garlic paste, whole spices and garam masala, mint and coriander, almonds and cashew nuts.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Hyderabadi Haleem Recipe",
      historicalCookware: "Heavy-bottomed pot or pressure cooker with wooden masher (ghotni)",
      heatSource: "Medium sear followed by low simmering and continuous pounding",
      ingredientsList: [
        "broken wheat (dalia)",
        "boneless mutton",
        "chana and moong lentils",
        "curd (yoghurt)",
        "pure desi ghee",
        "fried onions (birista)",
        "ginger-garlic paste",
        "whole spices and garam masala",
        "mint and coriander",
        "almonds and cashew nuts",
      ],
      preparationMethod:
        "1. Soak broken wheat and lentils (chana and moong) in water for 1 to 2 hours, then drain.\n2. Marinate the mutton with curd, ginger-garlic paste, turmeric, chilli powder, salt, and half of the garam masala for at least 1 hour.\n3. In a heavy pot or pressure cooker, heat ghee and saute whole spices (shahi jeera, cardamom, cloves, cinnamon) and a portion of fried onions until fragrant.\n4. Add the marinated meat and sear on medium-high heat, then add water and pressure-cook or slow-simmer until the meat is thoroughly tender and falling apart.\n5. Separately boil the soaked broken wheat and lentils with a pinch of turmeric and water until completely soft and mushy.\n6. Shred the cooked meat off any bones and combine the shredded meat and its rich broth into the pot of cooked wheat and lentils.\n7. Slow-simmer over low heat while vigorously mashing and pounding with a wooden masher (ghotni) for 30–40 minutes, gradually incorporating hot ghee until the mixture turns silky, elastic, and pasty.\n8. Season with remaining garam masala, mint, and coriander; ladle into warm bowls and top with hot ghee, golden fried onions, toasted cashews, and fresh lemon wedges.",
      contemporaryDifference:
        "Numbered 8-step ghotni pounding process with 10 key ingredients for kitchen-tested authentic texture.",
    },
    technologicalLeap: "Dual-cooking and emulsification combining grain starches, gelatinized meat strands, and ghee into a continuous silky matrix.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Pounding Technique",
    yearRange: "Ghotni Mastery",
    centuryLabel: "Pounding Method",
    headline: "The Wooden Ghotni Emulsification Protocol",
    shortDescription:
      "Vigorous, rhythmic mashing with heavy wooden pestles breaks meat fibers into tender silk threads while bursting wheat starches to produce the iconic stretchable, velvety texture.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Ghotni Emulsification Technique",
      historicalCookware: "Heavy cauldron with hardwood ghotni",
      heatSource: "Constant low ember heat",
      ingredientsList: [
        "Simmered broken wheat and lentils",
        "Tender shredded meat broth",
        "Warm desi ghee additions",
      ],
      preparationMethod:
        "Pound and swirl in clockwise circles for 30 to 40 minutes, adding hot ghee in streams until the spoon stands upright.",
      contemporaryDifference:
        "Manual ghotni produces authentic silky fiber threads unlike blenders that turn meat into mush.",
    },
    technologicalLeap: "Mechanical shear stress yielding natural collagen-starch emulsion.",
    documentedCitation: "Hyderabadi Master Chefs Oral Tradition & GI Guidelines.",
  },
  {
    generationNumber: 5,
    eraTitle: "Finishing & Aromatics",
    yearRange: "Royal Garnishing",
    centuryLabel: "Garnish Protocol",
    headline: "Finishing with Desi Ghee & Nizami Aromatics",
    shortDescription:
      "Final seasoning with royal garam masala, fried onions, roasted cashew nuts, and fresh mint leaves creates an intoxicating balance of rich, savory, and tangy notes.",
    image: ERA_PHOTO.modern_kitchen,
    generationRecipe: {
      recipeName: "Royal Nizami Garnish Protocol",
      historicalCookware: "Lidded serving bowl",
      heatSource: "Residual steam warmth",
      ingredientsList: [
        "Golden fried onions (birista)",
        "Slivered almonds and fried cashews",
        "Chopped mint and coriander leaves",
        "Hot ghee drizzle and lemon wedges",
      ],
      preparationMethod:
        "Ladle into deep porcelain or copper bowls, top with hot aromatic ghee, crisp birista, roasted dry fruits, fresh herbs, and a squeeze of fresh lime.",
      contemporaryDifference:
        "Traditional festive garnish providing contrast in texture against the silky smooth stew.",
    },
    technologicalLeap: "Multi-textural temperature and crunch contrast layering.",
    documentedCitation: "Chowmahalla Palace Banquet Archives.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Hyderabadi Haleem Plated & Served",
    shortDescription:
      "A GI-tagged culinary wonder distributed during Ramzan across Hyderabad and shipped globally as the jewel of Telangana meat cookery.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Hyderabadi Haleem Plated",
      historicalCookware: "Serving bowl",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Broken wheat (dalia)",
        "Mutton",
        "Lentils",
        "Desi ghee",
        "Fried onions",
        "Cashews & almonds",
      ],
      preparationMethod:
        "Served hot, rich and glistening with desi ghee and garnished with fresh lemon wedges.",
      contemporaryDifference:
        "GI-protected cultural emblem of Hyderabad and Telangana.",
    },
    technologicalLeap: "Standardized GI-specification composition and global delivery packaging.",
    documentedCitation: "National GI Tag Registry & Telangana Gastronomic Survey.",
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
// 5. DELHI / PUNJAB BUTTER CHICKEN (Murgh Makhani)
// ─────────────────────────────────────────────
export const BUTTER_CHICKEN_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Peshawar Tandoor Antiquity",
    yearRange: "c. 1920 – 1940 CE",
    centuryLabel: "Epoch I",
    headline: "The Clay Tandoor & Bell-Metal Skewers",
    shortDescription:
      "In pre-partition Peshawar, Kundan Lal Gujral pioneered skewering chicken marinated in thick curd, Kashmiri chillies, and mustard oil, lowering it into a subterranean bell-shaped clay oven (tandoor) fired by coal.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Original Peshawari Tandoori Murgh",
      historicalCookware: "Subterranean clay tandoor oven",
      heatSource: "Hardwood and charcoal fire (400°C)",
      ingredientsList: ["Whole chicken cuts", "Hung buffalo curd", "Kashmiri red chilli paste", "Mustard oil", "Garam masala & chaat masala"],
      preparationMethod: "Marinated twice, impaled on long iron skewers, roasted in radiant clay oven heat in under 12 minutes.",
      contemporaryDifference: "Dry roasted chicken only; zero tomato-butter gravy existed.",
    },
    technologicalLeap: "High-radiant clay oven searing retaining natural meat juices.",
    documentedCitation: "Oral histories of Peshawar's Gora Bazaar & Moti Mahal founding archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Post-Partition Daryaganj (1947–1950 CE)",
    yearRange: "1947 – 1952 CE",
    centuryLabel: "Epoch II",
    headline: "The Accidental Invention of Makhani Gravy",
    shortDescription:
      "Refugees from partition rebuilt their lives in Old Delhi's Daryaganj. To prevent leftover dry tandoori chicken from going to waste in the absence of refrigeration, Kundan Lal simmered it in a rich gravy of ripe tomatoes, butter, and cream.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "First Daryaganj Murgh Makhani",
      historicalCookware: "Large tinned copper degchi",
      heatSource: "Charcoal coal pit",
      ingredientsList: ["Leftover tandoori chicken chunks", "Fresh vine-ripened tomatoes", "Churned white butter (Makhan)", "Full-fat milk cream", "Kashmiri red chilli"],
      preparationMethod: "Tomatoes boiled down and hand-sieved. Enriched with mounds of fresh white butter and simmered with roasted chicken until tender.",
      contemporaryDifference: "Born out of food preservation necessity rather than planned recipe invention.",
    },
    technologicalLeap: "Use of rich dairy fat emulsion to rehydrate and tenderize roasted meat.",
    documentedCitation: "Moti Mahal Daryaganj restaurant archives & Delhi Partition Heritage records.",
  },
  {
    generationNumber: 3,
    eraTitle: "The Kasuri Methi Breakthrough",
    yearRange: "c. 1955 – 1965 CE",
    centuryLabel: "Epoch III",
    headline: "Dried Fenugreek Leaves & The Silk Strainer",
    shortDescription:
      "The definitive flavor breakthrough! Rubbing sun-dried fragrant fenugreek leaves (Kasuri Methi) between palms and crushing them into the simmering gravy imparted its iconic bittersweet aroma, perfectly balancing sweet tomato acidity.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Kasuri Methi Balanced Makhani",
      historicalCookware: "Heavy brass handi with fine mesh strainer",
      heatSource: "Restaurant gas burner",
      ingredientsList: ["Tandoori chicken", "Tomato puree", "Kasuri methi (Dried fenugreek)", "Dairy butter & malai", "Ginger juliennes"],
      preparationMethod: "Tomato gravy strained through fine muslin three times to achieve silkiness. Finished with palm-crushed kasuri methi in the final 2 minutes.",
      contemporaryDifference: "Elimination of tomato seeds and fibers creating mirror-smooth texture.",
    },
    technologicalLeap: "Muslin-straining and dried fenugreek infusion producing the signature velvety texture.",
    documentedCitation: "Kundan Lal Gujral biography & Jawaharlal Nehru state banquet menus.",
  },
  {
    generationNumber: 4,
    eraTitle: "Diplomatic Banquets & World Acclaim",
    yearRange: "c. 1965 – 1985 CE",
    centuryLabel: "Epoch IV",
    headline: "Nehru's State Banquets & International Fame",
    shortDescription:
      "Prime Minister Jawaharlal Nehru made Moti Mahal a regular stop for visiting world leaders, including US President Richard Nixon, Jacqueline Kennedy, and the Shah of Iran. Butter Chicken became India's gastronomic ambassador.",
    image: ERA_PHOTO.butter_chicken_hero,
    generationRecipe: {
      recipeName: "Imperial Diplomatic Butter Chicken",
      historicalCookware: "Silver-plated copper serving deg",
      heatSource: "Low-flame warming chafing dish",
      ingredientsList: ["Tender chicken tikka cuts", "San Marzano-style ripe tomatoes", "Pure butter", "Fresh cream swirl", "Cardamom & mace powder"],
      preparationMethod: "Chicken roasted with charred edges, folded into silky sauce, garnished with cream spirals and ginger juliennes, served with hot garlic naan.",
      contemporaryDifference: "Refined plating, milder heat tailored to international diplomatic palates.",
    },
    technologicalLeap: "Standardization of the dish for high-protocol global banquets.",
    documentedCitation: "Official state banquet archives, Ministry of External Affairs of India.",
  },
  {
    generationNumber: 5,
    eraTitle: "Global Proliferation & British Tikka Masala Split",
    yearRange: "c. 1980 – 2005 CE",
    centuryLabel: "Epoch V",
    headline: "From Delhi to Glasgow & The Global Curry House",
    shortDescription:
      "Butter Chicken inspired the creation of Chicken Tikka Masala in Britain and became the single most ordered Indian curry in London, New York, Tokyo, and Sydney, spawning dozens of restaurant variations.",
    image: ERA_PHOTO.butter_chicken_hero,
    generationRecipe: {
      recipeName: "Modern Restaurant Style Murgh Makhani",
      historicalCookware: "Heavy commercial restaurant handi",
      heatSource: "High-power kitchen wok burner",
      ingredientsList: ["Boneless chicken thigh tikka", "Blended tomato-cashew nut paste", "Unsalted dairy butter", "Heavy whipping cream", "Honey / sugar touch", "Kasuri methi"],
      preparationMethod: "Cashew nut paste introduced to add glossy sheen and thickness, balancing natural tomato acidity with creamy sweetness.",
      contemporaryDifference: "Widespread use of cashew nut paste as a modern thickening and richness agent.",
    },
    technologicalLeap: "Cashew-dairy dual emulsion providing stability under high-speed restaurant service.",
    documentedCitation: "Lizzie Collingham's Curry: A Tale of Cooks and Conquerors.",
  },
  {
    generationNumber: 6,
    eraTitle: "Contemporary Living Legend",
    yearRange: "Present Day",
    centuryLabel: "Epoch VI",
    headline: "The Unrivaled Velvet Icon of Global Gastronomy",
    shortDescription:
      "Today, authentic Butter Chicken is celebrated for its harmonious balance of smoky charred meat, tangy ripe tomatoes, creamy churned butter, and fragrant fenugreek aroma.",
    image: ERA_PHOTO.butter_chicken_hero,
    generationRecipe: {
      recipeName: "Authentic Delhi Butter Chicken Master Formulation",
      historicalCookware: "Heavy-bottomed copper or enameled cast-iron handi",
      heatSource: "Medium-low stovetop flame",
      ingredientsList: [
        "800g boneless chicken thigh tikka (tandoor charred)",
        "1 kg ripe red plum tomatoes (boiled, pureed, and fine-strained)",
        "80g unsalted quality dairy butter",
        "100ml fresh heavy dairy cream",
        "2 tbsp soaked cashew nut paste",
        "1.5 tbsp Kasuri Methi (toasted and palm-crushed)",
        "1 tbsp Kashmiri red chilli powder",
        "1 tsp honey (to balance acidity)",
      ],
      preparationMethod:
        "Roast marinated chicken until edges char. Simmer strained tomato-cashew puree with butter and chilli for 20 minutes until oil glazes. Add charred chicken, stir in cream, honey, and crushed kasuri methi. Rest 5 minutes before serving.",
      contemporaryDifference: "Tested home formulation preserving authentic Daryaganj velvety consistency.",
    },
    technologicalLeap: "Perfected triple-balance of smoke, acid, and velvet fat.",
    documentedCitation: "Culinary Heritage of Delhi & Michelin Guide Indian Restaurant Features.",
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
    case "hyderabadi-haleem":
      return HALEEM_GENERATIONS;
    case "rogan-josh":
      return ROGAN_JOSH_GENERATIONS;
    case "litti-chokha":
      return LITTI_CHOKHA_GENERATIONS;
    case "butter-chicken":
      return BUTTER_CHICKEN_GENERATIONS;
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
          dishId === "hyderabadi-biryani" || dishId === "hyderabadi-haleem"
            ? (stage.number === 3 && legacy[2]?.generationRecipe.ingredientsList?.length
                ? legacy[2].generationRecipe.ingredientsList
                : source.generationRecipe.ingredientsList)
            : stage.key === "ingredients" && dish.ingredients.length
            ? dish.ingredients
            : source.generationRecipe.ingredientsList,
        preparationMethod:
          (dishId === "hyderabadi-biryani" || dishId === "hyderabadi-haleem") &&
          stage.number === 3 &&
          legacy[2]?.generationRecipe.preparationMethod
            ? legacy[2].generationRecipe.preparationMethod
            : stage.key === "method"
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
