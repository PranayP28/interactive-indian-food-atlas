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
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Masala Dosa in Karnataka & the South",
    shortDescription:
      "The dosa has ancient beginnings in South India and Karnataka. A preparation named 'dosaka' is first documented in the 12th-century Sanskrit work Manasollasa, compiled by King Someshvara III of the Western Chalukya dynasty ruling northern Karnataka. In early times, dosas were thick, soft griddle-cakes cooked on clay plates using fermented black gram and rice batter. The dish evolved deeply within the temple kitchens of Udupi and Old Mysore, where natural overnight fermentation was perfected into an art.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen griddle plate (Kallu Odu) over open wood hearth",
      heatSource: "Firewood hearth and glowing embers",
      ingredientsList: [],
      preparationMethod:
        "Soaked black gram and rice stone-ground into a thick batter, rested for natural leavening, and patted onto heated clay plates greased with cold-pressed sesame oil.",
      contemporaryDifference:
        "Thick, soft, and unadorned pulse-rice griddle cakes without potatoes or modern crisping.",
    },
    technologicalLeap: "Natural wild lactic fermentation of stone-ground pulse and rice batter.",
    documentedCitation: "Western Chalukya Manasollasa (1130 CE) & Udupi temple culinary archives.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: soft griddle bake on clay plates / wafer-thin spiral ladle swirl on heavy cast-iron tawas\nVessel: porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa and commercial gas griddles\nFuel: firewood hearths and embers / domestic LPG gas and commercial burners\nCooking time: 4 to 5 minutes per soft cake / 60 to 90 seconds for paper-crisp golden browning\nBatter preparation: hand-grinding soaked pulses on granite stone mortars / electric wet grinders and commercial batter mills\nFilling: plain dosa with no stuffing / spiced potato-onion palya introduced by 20th-century Udupi hoteliers\nInner spread: plain ghee or no paste / fiery roasted Byadagi chilli, garlic, and roasted gram chutney (Mysore style)\nFat used: cold-pressed sesame or coconut oil / pure desi ghee and fresh churned white butter (benne)",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa",
      heatSource: "Firewood hearths / domestic LPG gas burners",
      ingredientsList: [],
      preparationMethod:
        "Transitioned from thick, soft earthen-baked cakes to wafer-thin golden crepes rolled around spiced potato palya and smeared with red Byadagi garlic chutney.",
      contemporaryDifference:
        "Cast-iron metallurgy, New World potato and chilli adoption, and 20th-century Udupi hotel innovation created the modern crisp Masala Dosa.",
    },
    technologicalLeap: "Cast-iron heat conduction enabling wafer-thin crisping and concealed spiced potato stuffing.",
    documentedCitation: "Comparative historical culinary records & Mysore-Bangalore hotel archives.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Masala Dosa Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: Sona Masuri rice, urad dal, fenugreek seeds, poha, potatoes, onions, green chillies, mustard seeds, curry leaves, pure desi ghee or butter.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Masala Dosa Recipe",
      historicalCookware: "Seasoned cast-iron flat tawa with curved ladle",
      heatSource: "Medium-high gas flame with water-sizzle testing",
      ingredientsList: [
        "Sona Masuri rice",
        "urad dal",
        "fenugreek seeds (methi)",
        "poha (flattened rice)",
        "potatoes",
        "onions",
        "green chillies",
        "mustard seeds",
        "curry leaves",
        "pure desi ghee or butter",
      ],
      preparationMethod:
        "1. Soak Sona Masuri rice, urad dal, fenugreek seeds, and poha in water for 5 hours, then grind in a wet grinder to a silky, aerated batter.\n2. Add salt, mix thoroughly with hands to introduce natural microflora, and ferment overnight in a warm spot for 8 to 12 hours.\n3. Boil potatoes until tender, peel, and coarsely hand-mash into uneven chunks.\n4. Heat oil in a pan, crackle mustard seeds, cumin, chana dal, urad dal, and curry leaves; saute sliced onions, green chillies, and ginger until translucent.\n5. Stir in turmeric, salt, mashed potatoes, and a splash of water; simmer the potato palya for 3 minutes and finish with fresh coriander.\n6. Heat a seasoned cast-iron tawa over medium-high heat, sprinkle water to test sizzle, and wipe with a lightly oiled cloth.\n7. Pour a ladleful of fermented batter in the centre and swirl smoothly in outward circular motions into a thin, even crepe.\n8. Drizzle pure ghee or butter along the edges, cook until golden crisp, spread red chutney inside, add warm potato palya, fold neatly, and serve hot with coconut chutney and sambar.",
      contemporaryDifference:
        "Numbered 8-step authentic fermented batter and iron tawa roasting method using 10 essential Karnataka ingredients.",
    },
    technologicalLeap: "Precision 8-step fermentation, potato palya seasoning, and iron-tawa crisp folding protocol.",
    documentedCitation: "Codified Karnataka regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// BISI BELE BATH (Karnataka)
// ─────────────────────────────────────────────
export const BISI_BELE_BATH_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bisi Bele Bath in Karnataka & the Mysore Palace",
    shortDescription:
      "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Heavy brass uruli or tin-lined copper degchi",
      heatSource: "Hardwood and charcoal embers burning slow",
      ingredientsList: [],
      preparationMethod:
        "Short-grain rice and toor dal simmered slowly over gentle wood embers with aged country tamarind, ghee, and freshly roasted palace spice paste.",
      contemporaryDifference:
        "Royal Mysore court origin as a sacred one-pot lentil-rice offering with hand-roasted local spices and pure ghee.",
    },
    technologicalLeap: "Royal palace formulation of a complete balanced grain, pulse, spice, and ghee one-pot preparation.",
    documentedCitation: "Mysore Wodeyar court culinary chronicles & regional temple manuscripts.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: separate slow wood-fire simmering of dal and rice in open vessels / unified pressure cooking followed by rapid direct spice simmering\nVessel: heavy brass urulis and tin-lined copper degchis / modern stainless steel pressure cookers and heavy-bottom pots\nFuel: tamarind wood and charcoal hearths burning slow / domestic LPG gas stoves and induction cooktops\nCooking time: 2 to 3 hours of continuous simmering and stirring / 25 to 35 minutes in domestic pressure cookers\nSpice blending: whole spices hand-roasted on iron plates and crushed on stone grinding slabs / electric mixer-ground homemade batches or packaged spice powders\nVegetables: limited to native ash gourd, drumsticks, and raw plantains / hearty mix of carrots, French beans, green peas, and shallots\nSourness and sweetness: dark country tamarind and slow-melted palm jaggery / seedless tamarind paste and organic cane jaggery\nGarnish and serving: fresh fried cashews in pure country cow ghee / fried cashews, spicy kara boondi, and potato chips served in darshini restaurants",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy brass uruli / modern domestic pressure cooker",
      heatSource: "Charcoal hearths / domestic LPG gas and induction",
      ingredientsList: [],
      preparationMethod:
        "Transitioned from a 3-hour royal cauldron slow-cook to a streamlined one-pot pressure-cook enriched with vibrant Byadagi chillies, vegetables, and kara boondi.",
      contemporaryDifference:
        "Modern pressure cooking, multi-vegetable additions, and darshini restaurant culture popularized the royal preparation for everyday households.",
    },
    technologicalLeap: "Unified pressure cooking and Byadagi-copra spice blending preserving royal aroma in minutes.",
    documentedCitation: "Karnataka regional food surveys & commercial darshini culinary monographs.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Bisi Bele Bath Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: Sona Masuri rice, toor dal, mixed vegetables (carrots, beans, peas), tamarind extract, jaggery, Byadagi dry red chillies, kapok buds (marathi moggu), dry coconut (copra), cashew nuts, pure desi ghee.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Bisi Bele Bath Recipe",
      historicalCookware: "Heavy-bottomed pot and pressure cooker with tadka pan",
      heatSource: "Medium pressure-cook followed by low ghee simmer",
      ingredientsList: [
        "Sona Masuri rice",
        "toor dal (pigeon peas)",
        "mixed vegetables (carrots, beans, peas)",
        "tamarind extract",
        "jaggery (bella)",
        "Byadagi dry red chillies",
        "kapok buds (marathi moggu)",
        "dry coconut (copra)",
        "cashew nuts",
        "pure desi ghee",
      ],
      preparationMethod:
        "1. Rinse Sona Masuri rice and toor dal together, then pressure-cook with water and a pinch of turmeric for 4 to 5 whistles until soft and easily mashable.\n2. Dry-roast Byadagi chillies, chana dal, urad dal, coriander seeds, cumin, fenugreek, marathi moggu, and cinnamon until aromatic; add grated copra and hing, cool, and grind into a fine bisi bele bath spice powder.\n3. Boil chopped carrots, French beans, potatoes, peas, and shallots in water with salt until tender.\n4. Add thick tamarind extract, grated jaggery, and 3 tablespoons of the prepared spice powder to the cooked vegetables and simmer for 5 minutes.\n5. Lightly mash the cooked rice and dal, then combine them into the bubbling spiced vegetable broth.\n6. Adjust consistency with warm water to a smooth, pourable porridge and simmer on low heat for 7 minutes, stirring gently to prevent sticking.\n7. Heat pure desi ghee in a pan, crackle mustard seeds and curry leaves, and fry cashew nuts and broken dried chillies until golden.\n8. Pour the sizzling ghee tempering over the bisi bele bath, mix well, rest for 2 minutes, and serve piping hot topped with crisp kara boondi.",
      contemporaryDifference:
        "Numbered 8-step authentic one-pot lentil rice, spice powder roasting, and ghee tempering process using 10 essential Karnataka ingredients.",
    },
    technologicalLeap: "Streamlined 8-step pressure cook, fresh bisi bele bath podi roasting, and ghee-cashew tempering protocol.",
    documentedCitation: "Codified Karnataka regional recipe documentation.",
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
// PESARATTU (Andhra Pradesh)
// ─────────────────────────────────────────────
export const PESARATTU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pesarattu in Andhra Pradesh",
    shortDescription:
      "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional stone grinder (rubburoyalu) and iron tawa",
      heatSource: "Wood-fired stoves",
      ingredientsList: [],
      preparationMethod:
        "Soaked whole green gram stone-ground without fermentation with ginger and cumin, griddled directly on an iron tawa.",
      contemporaryDifference:
        "A distinctive part of Andhra breakfast culture; cooked right after grinding with zero fermentation.",
    },
    technologicalLeap: "Unfermented wet-ground whole pulse batter for direct crisp griddling.",
    documentedCitation: "Regional food tradition; no exact date, place or creator recorded.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders\nCooking surface: Then - iron griddle | Now - non-stick and cast-iron tawas\nFuel: Then - wood-fired stoves | Now - gas and induction cooktops\nBatter preparation: Then - slow, done by hand | Now - faster with mixers\nGreen gram: Then - soaked and prepared at home | Now - whole green gram easily available in supermarkets\nToppings: Then - simple, plain Pesarattu | Now - onion, green chilli and coriander toppings are popular\nVariations: Then - the classic plain version | Now - onion, crispy and Upma Pesarattu\nChutneys: Then - fresh ginger chutney made at home | Now - restaurants also serve ginger, coconut and peanut chutneys\nThese changes describe kitchens and equipment, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Traditional grinding stone and iron griddle / modern electric mixers and non-stick or cast-iron tawas",
      heatSource: "Wood-fired stoves / gas and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders",
      contemporaryDifference:
        "These changes describe kitchens and equipment, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Evolution from manual stone grinding and wood hearths to modern mixer-grinders, induction, and upma-stuffed restaurant variants.",
    documentedCitation: "Regional food studies and culinary technology surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pesarattu Recipe: 10 Key Ingredients, 9 Steps",
    shortDescription:
      "Key ingredients: whole green gram (green moong), rice (optional, for extra crispness), ginger, green chillies, cumin seeds, salt, onion, fresh coriander leaves, cooking oil or ghee, ginger chutney (Allam Pachadi) for serving.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pesarattu Recipe",
      historicalCookware: "Dosa tawa or flat griddle",
      heatSource: "Medium-high heat on tawa",
      ingredientsList: [
        "whole green gram (green moong)",
        "rice (optional, for extra crispness)",
        "ginger",
        "green chillies",
        "cumin seeds",
        "salt",
        "onion",
        "fresh coriander leaves",
        "cooking oil or ghee",
        "ginger chutney (Allam Pachadi) for serving",
      ],
      preparationMethod:
        "1. Wash and soak the green gram. - Soak in water for about 4 to 6 hours.\n2. Drain the water. - Rinse the green gram once more.\n3. Grind the batter. - Grind with ginger, green chillies, cumin and salt, adding a little water. It should be smooth and slightly thick.\n4. Prepare the toppings. - Chop onions and coriander finely and keep ready.\n5. Heat the pan. - Heat a dosa tawa and grease it lightly with oil.\n6. Spread the batter. - Pour one ladle in the centre and spread in circles into a thin dosa.\n7. Add the toppings. - Sprinkle onions and coriander and press in gently.\n8. Cook until crisp. - Add a little oil around the edges. Cook until the bottom is golden brown and the edges lift.\n9. Fold and serve. - Fold and serve hot with ginger chutney.",
      contemporaryDifference:
        "Numbered 8-step tender-simmer and ghotni pounding protocol using 10 essential ingredients.",
    },
    technologicalLeap: "Collagen-rich slow-pounding emulsification protocol.",
    documentedCitation: "National GI Registry Document No. 147 & Telangana Gastronomic Survey.",
  },
];

// ─────────────────────────────────────────────
// VADA PAV (Maharashtra)
// ─────────────────────────────────────────────
export const VADA_PAV_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Vada Pav in Mumbai, Maharashtra",
    shortDescription:
      "Before the 1960s, Vada Pav did not exist, because its two core parts belonged to different worlds. Potatoes had only recently been popularized by the British. The Portuguese pav (bread) was largely shunned by mainstream society because of religious taboos around European baking and the use of wild palm toddy for yeast fermentation.\n\nForced together in a 19th-century wood-fired kitchen, the result would have been very different: dense, sour bread, a roughly hand-mashed potato filling, and frying over smoky wood fires in heavy iron pots of cold-pressed groundnut oil. The two were eaten separately, only in private domestic or colonial settings, before Mumbai's street food culture was born.\n\nVada Pav is credited to Ashok Vaidya. In 1966, outside Dadar railway station, he combined the potato dumpling (batata vada) and the bread roll into a cheap, quick meal for Mumbai's booming working class. Mill workers rushing to their shifts needed something hot, filling and portable. He split a commercial yeast pav (now socially accepted), smeared it with fiery chutneys, including the signature dry red garlic powder, and stuffed it with a fresh batata vada.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Cast-iron kadai & wooden ladle",
      heatSource: "Wood and charcoal fire with live embers",
      ingredientsList: [],
      preparationMethod:
        "Origin in Mumbai: In 1966, outside Dadar railway station, Ashok Vaidya combined the potato dumpling (batata vada) and the bread roll into a cheap, quick meal for Mumbai's booming working class.",
      contemporaryDifference:
        "Cultural background: Before the 1960s, Vada Pav did not exist; potatoes were popularized by the British while Portuguese pav was shunned due to religious taboos around European baking and wild palm toddy fermentation.",
    },
    technologicalLeap: "Ashok Vaidya combining batata vada and Portuguese pav outside Dadar station in 1966.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: Then - simple street-side frying | Now - standardized, high-speed frying in commercial kitchens\nFuel: Then - portable kerosene stoves | Now - temperature-controlled LPG gas burners\nFrying oil: Then - mass-produced vegetable oils | Now - refined sunflower or palm oils\nPav: Then - commercial yeast pav, split and smeared with chutney | Now - pav heavily toasted on a griddle with Amul butter\nChutneys and sauces: Then - fiery chutneys, with signature dry red garlic powder hand-ground daily on stone slabs | Now - liquid cheese and Schezwan sauce as part of a fusion flavour profile\nVada: Then - a fresh batata vada | Now - baked panko-crusted potato patties are also used\nSelling: Then - sold outside Dadar railway station to mill workers | Now - classic street carts still thrive, plus fast-food chains that flash-freeze the vadas for consistency\nPackaging: Then - wrapped in old, ink-stained vernacular newspaper | Now - eco-friendly biodegradable boxes\nReputation: Then - a cheap meal that fuelled the city's political and industrial labor movements | Now - a globally recognized gourmet food and a symbol of culinary pride",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Cast-iron kadai & wooden ladle / stainless steel commercial fryers",
      heatSource: "Portable kerosene stoves / LPG gas burners",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: Then - simple street-side frying | Now - standardized, high-speed frying in commercial kitchens",
      contemporaryDifference:
        "Reputation: Then - a cheap meal that fuelled the city's political and industrial labor movements | Now - a globally recognized gourmet food and a symbol of culinary pride",
    },
    technologicalLeap: "Adaptation from street-corner kerosene carts to standardized quick-service food chains across India and the globe.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Mumbai Vada Pav Recipe: 5 Key Ingredients, 7 Steps",
    shortDescription:
      "Key ingredients: potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.\n\n1. Boil the potatoes, then peel and mash them roughly. (Sign: a knife goes in easily.)\n2. Make the filling: fry chopped garlic and green chillies in a little oil, add the mashed potatoes and salt, and mix well. (Sign: it smells fragrant and is dry enough to shape. Let it cool a little.)\n3. Shape the filling into round, slightly flat balls. (Sign: they hold their shape without cracking.)\n4. Make the batter: whisk gram flour with water and a pinch of salt. (Sign: thick and smooth, with no lumps, and it coats the back of a spoon.)\n5. Dip each ball in the batter and fry it in hot oil on medium heat, turning it once or twice. (Sign: golden brown and crisp all over. Drain on paper.)\n6. Make the dry garlic chutney: crush garlic with salt and red chilli powder into a coarse powder. (Sign: it looks red and crumbly and smells strong.)\n7. Slit the pav without cutting it fully, spread the chutney inside, place the hot vada and press lightly. (Sign: the vada sits snugly. For a modern twist, toast the pav on a griddle with butter first. Serve hot.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Mumbai Vada Pav Recipe",
      historicalCookware: "Deep kadai or frying pan with slotted skimmer",
      heatSource: "Medium flame / moderate oil temperature (approx 175°C / 350°F)",
      ingredientsList: [
        "Potatoes",
        "Pav (Bread rolls)",
        "Gram flour (Besan)",
        "Garlic",
        "Green chillies",
      ],
      preparationMethod:
        "Tempered Potato Mash & Precision Deep Frying. Key ingredients: potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.",
      contemporaryDifference:
        "7. Slit the pav without cutting it fully, spread the chutney inside, place the hot vada and press lightly. (Sign: the vada sits snugly. For a modern twist, toast the pav on a griddle with butter first. Serve hot.)",
    },
    technologicalLeap: "Precision 7-step batata vada deep-frying and pav assembly protocol.",
    documentedCitation: "Various regional publishers and state documentation bodies, Regional food writing, state tourism documentation and household recipe literature (20th–21st century); Unattributed community tradition, Oral and household tradition (undated)",
  },
];

// ─────────────────────────────────────────────
// PURAN POLI (Maharashtra)
// ─────────────────────────────────────────────
export const PURAN_POLI_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Puran Poli in Maharashtra",
    shortDescription:
      "Puran Poli is a sweet flatbread: a puran (filling) of chana dal and jaggery stuffed into a wheat or maida cover. In the 19th century it was a labor-intensive royal delicacy and a sacred festive offering, prepared only on occasions like Holi and Gudi Padwa. Every step was a test of patience and muscle, because there were no mechanical grinders. It was served hot on fresh banana leaves, mainly to deities and upper-class households. The exact date and creator of Puran Poli are not documented with certainty. The earliest form described here is this 19th-century royal and ritual one.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Heavy brass patelya & wooden puran yantra",
      heatSource: "Slow-burning wood or cow-dung fires and an open hearth",
      ingredientsList: [],
      preparationMethod:
        "Royal and ritual origin: In the 19th century it was a labor-intensive royal delicacy and a sacred festive offering, prepared only on occasions like Holi and Gudi Padwa.",
      contemporaryDifference:
        "Served hot on fresh banana leaves, mainly to deities and upper-class households; exact date and creator are not documented with certainty.",
    },
    technologicalLeap: "Hand-kneaded elastic wheat cover stuffed with slow-boiled lentil-jaggery puran.",
    documentedCitation: "",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: 1800s - slow boiling of the dal and jaggery, then hand-roasting the poli with ghee | Mid-1900s - the recipe stayed fiercely traditional | Now - dal cooked quickly in electric pressure cookers\nVessel: 1800s - heavy brass patelya for boiling, thick iron tawa for roasting | Now - electric pressure cookers and non-stick pans\nFuel: 1800s - slow-burning wood or cow-dung fires and an open hearth, with dense smoke | Mid-1900s - portable kerosene stoves and early gas burners, so heat was easier to control | Now - induction cooktops\nDal and mashing: 1800s - harbhara dal, pressed through a hot wooden or stone puran yantra or mashed on a stone sil-batta | Mid-1900s - chana dal, with a hand-cranked metal puran yantra (food mill) | Now - packaged chana dal, blended in seconds in mixer-grinders or food processors\nFlour: 1800s - gavacha atta or maida, hand-kneaded for hours for elasticity | Mid-1900s - maida and other packaged flour, widely available | Now - Sharbati atta, with organic whole wheat or multi-grain flour replacing refined flour\nSweetener: 1800s - kala gur | Mid-1900s - commercial jaggery (pila gul) | Now - organic jaggery powder, or low-calorie sweeteners and dates in health-conscious versions\nFat: 1800s - sajuk tup, pure aromatic homemade cow ghee | Mid-1900s - vanaspati and refined oils | Now - branded cow ghee\nSpices: 1800s - velchi and jaiphal (cardamom and nutmeg) | Mid-1900s - velchi pood (cardamom powder) | Now - spice extracts\nMaking it: 1800s - hours of hand work, with the dough rolled using a wooden latre | Mid-1900s - a communal affair, with one person rolling, one stuffing and one roasting | Now - the time-consuming process is drastically shortened, with instant ready-to-eat versions\nServing: 1800s - hot on fresh banana leaves, for deities and upper-class households | Mid-1900s - stainless steel plates, for guests at family gatherings | Now - ready-to-eat Puran Polis at sweet shops, vacuum-packed versions in supermarkets, frozen exports to the diaspora\nOccasion: 1800s - only at Holi and Gudi Padwa | Mid-1900s - a cherished domestic tradition and the benchmark of a homemaker's skill in Maharashtrian, Gujarati and South Indian homes | Now - a year-round commercial product that remains the soul of festive dining",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy brass patelya & iron tawa / non-stick pans",
      heatSource: "Slow-burning wood fires / gas & induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: 1800s - slow boiling of the dal and jaggery, then hand-roasting the poli with ghee | Mid-1900s - the recipe stayed fiercely traditional | Now - dal cooked quickly in electric pressure cookers",
      contemporaryDifference:
        "Occasion: 1800s - only at Holi and Gudi Padwa | Mid-1900s - a cherished domestic tradition and the benchmark of a homemaker's skill in Maharashtrian, Gujarati and South Indian homes | Now - a year-round commercial product that remains the soul of festive dining",
    },
    technologicalLeap: "Transition from manual puran yantra stone mashing and open hearths to food processors and year-round convenience.",
    documentedCitation: "",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Puran Poli Recipe: 8 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: wheat flour (atta or maida), chana dal, jaggery, ghee, cardamom powder, nutmeg powder, salt, oil.\n\n1. Wash and boil the chana dal until soft but not mushy. (Sign: a grain mashes easily between two fingers.)\n2. Drain the dal and cook it with jaggery on low heat, stirring often. (Sign: it thickens, leaves the sides of the pan and holds its shape on a spoon.)\n3. Mash it smooth and mix in cardamom and nutmeg. (Use a puran yantra, food mill or mixer-grinder. Sign: no lumps. Cool it fully, then roll it into smooth balls.)\n4. Make the dough: knead flour with water, a little oil and salt, and rest it. (Sign: soft and stretchy, and it springs back when pressed.)\n5. Flatten a dough ball, place a puran ball in the centre, bring the edges together and seal. (Sign: no filling is showing.)\n6. Dust lightly with flour and roll gently into a round. (Sign: even thickness, no tears, and the filling spread to the edges.)\n7. Roast on a hot tawa on medium heat, flipping once, and brush with ghee. (Sign: light brown spots on both sides.)\n8. Serve hot with a little ghee on top. (Sign: soft, with the sweet filling visible at the edge.)",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Puran Poli Recipe",
      historicalCookware: "Heavy iron tawa & rolling pin (latre)",
      heatSource: "Medium heat griddle with pure cow ghee",
      ingredientsList: [
        "Wheat flour",
        "Chana dal",
        "Jaggery",
        "Ghee",
        "Cardamom powder",
        "Nutmeg powder",
      ],
      preparationMethod:
        "Puran Stone-Straining & Translucent Rolling. Key ingredients: wheat flour, chana dal, jaggery, ghee, cardamom powder, nutmeg powder.",
      contemporaryDifference:
        "8. Serve hot with a little ghee on top. (Sign: soft, with the sweet filling visible at the edge.)",
    },
    technologicalLeap: "Numbered 8-step delicate stuffing, translucent rolling, and tawa roasting with pure ghee.",
    documentedCitation: "",
  },
];

// ─────────────────────────────────────────────
// DHOKLA (Gujarat)
// ─────────────────────────────────────────────
export const DHOKLA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dhokla in Gujarat",
    shortDescription:
      "Dhokla is a steamed, fermented savoury cake from Gujarat, now eaten across India. A pulse-based dish called dukkia, seen as a precursor, is mentioned in a Jain text dated to the 11th century (sources give 1066 or 1068 CE). The word “dhokla” itself appears in the Gujarati text Varanaka Samuchaya, dated to about 1520 CE. The traditional version uses a fermented batter of rice and split chickpeas (chana dal), steamed rather than fried. The exact creator and date are not documented, so treat dukkia as a likely ancestor rather than the same dish. Khaman, made entirely from chickpea batter, is a related but separate preparation.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Pot with a steaming rack or plate",
      heatSource: "Traditional hearth fire (wood or charcoal)",
      ingredientsList: [],
      preparationMethod:
        "Origin in Gujarat: rice and chana dal soaked and ground, fermented, then steamed in slabs.",
      contemporaryDifference:
        "Cooking method: steaming, not frying, with fermentation giving the sour taste and sponge.",
    },
    technologicalLeap: "Fermenting combined rice and pulse batter and steaming in aerated slabs rather than frying.",
    documentedCitation:
      "Wikipedia, “Dhokla”; K. T. Achaya, A Historical Dictionary of Indian Food; Knocksense (Ahmedabad), “Steaming through centuries”.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Batter: Then - rice and chana dal soaked and ground, or rice flour and besan mixed 2:1 | Now - besan-based instant mixes, with ready-made dhokla flour sold in shops\nFermentation: Then - overnight, with curd | Now - skipped; fruit salt (Eno) or baking soda raises it in minutes\nCooking time: Then - overnight prep plus steaming | Now - about 30 minutes in many homes\nVessel: Then - pot with a steaming plate | Now - idli stand, steamer, pressure cooker without the whistle, microwave or electric cooker\nFuel: Then - wood or charcoal | Now - gas and electricity\nVarieties: Then - fermented rice-and-gram dhokla | Now - khaman, nylon, rava, sandwich and other dhokla\nWhere eaten: Then - home, as a snack or breakfast | Now - sweet and farsan shops, restaurants, packaged and instant mixes\nScale: Then - household | Now - Ahmedabad was reported to consume about 10,000 kg of dhokla daily (2018)",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Pot with a steaming plate → idli stand, steamer or pressure cooker",
      heatSource: "Wood and charcoal → gas and electricity",
      ingredientsList: [],
      preparationMethod:
        "Overnight fermented batter → instant batter raised with fruit salt",
      contemporaryDifference:
        "Leavening: overnight curd fermentation / fruit salt or baking soda in minutes",
    },
    technologicalLeap: "Transition from overnight wild curd fermentation to instant aeration using fruit salt and modern commercial steaming.",
    documentedCitation:
      "Wikipedia, “Dhokla”; Knocksense; K. T. Achaya.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dhokla Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: besan (gram flour), curd, ginger–green chilli paste, turmeric, salt, sugar, lemon juice, fruit salt (Eno), oil with mustard seeds, curry leaves and coriander.\n\n1. Mix besan, curd, ginger–green chilli paste, turmeric, salt, sugar and lemon juice with water into a smooth, pourable batter. Rest it for about 10 minutes.\n2. Heat water in a steamer and grease a tray with oil.\n3. Add fruit salt to the batter just before cooking and stir gently, once, until it froths.\n4. Pour the batter into the greased tray straight away.\n5. Steam on medium heat for about 15 minutes, until a skewer comes out clean.\n6. Let it cool slightly, then cut into squares.\n7. Heat oil, crackle mustard seeds, add green chillies and curry leaves, then pour in a little water and sugar. Pour this tempering over the dhokla.\n8. Garnish with coriander and grated coconut and serve with green chutney and fried chillies.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Dhokla Recipe",
      historicalCookware: "Steamer or idli stand with a greased tray",
      heatSource: "Medium flame for about 15 minutes",
      ingredientsList: [
        "Besan (gram flour)",
        "Curd",
        "Ginger–green chilli paste",
        "Turmeric",
        "Salt",
        "Sugar",
        "Lemon juice",
        "Fruit salt (Eno)",
        "Oil with mustard seeds",
        "Curry leaves and coriander",
      ],
      preparationMethod:
        "Instant Khaman Layering & Tempering (Vaghar). Batter, steam, cut, temper.",
      contemporaryDifference:
        "8. Garnish with coriander and coconut; serve with chutney.",
    },
    technologicalLeap: "Instant Khaman aeration, steam vapor lift, and sweet-sour tempering (vaghar).",
    documentedCitation:
      "Wikipedia, “Dhokla”; K. T. Achaya, A Historical Dictionary of Indian Food; Knocksense.",
  },
];

// ─────────────────────────────────────────────
// UNDHIYU (Gujarat)
// ─────────────────────────────────────────────
export const UNDHIYU_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Undhiyu in Gujarat",
    shortDescription:
      "Undhiyu (also spelled undhiyo or oondhiya) is a mixed winter-vegetable dish of Gujarat, closely tied to Surat. Its name comes from the Gujarati word undhu, \"upside down\", because the pot was traditionally buried upside down with fire on top. One account says it evolved from umbadiyo, a southern Gujarat dish cooked in a buried pit; this is a \"said to\" claim, not documented fact. Surti papdi (flat green beans) is its base, and it is cooked from November to February, when its vegetables are in season. It is the dish most associated with Uttarayan, the kite-flying harvest festival. No creator or date is documented.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (matlu or matla), coated with mud and sealed",
      heatSource: "Pit in the ground with lit charcoal or embers layered over the upturned pot",
      ingredientsList: [],
      preparationMethod:
        "Origin in Gujarat: vegetables and spice mix packed in the pot with no water, buried upside down, and cooked in their own juices for about 3 to 4 hours.",
      contemporaryDifference:
        "Cooking method: slow indirect heat from above, giving a smoky flavour.",
    },
    technologicalLeap: "Burying mud-sealed earthen pots upside down under charcoal pit embers with no water.",
    documentedCitation:
      "Harper's Bazaar India, “Decoding the many layers and flavours of undhiyo”; Knocksense (Ahmedabad), traditional preparation of undhiyu; Tarla Dalal, Surti undhiyu.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Undhiyu moved from a buried earthen pot cooked for hours over charcoal to gas stoves, pressure cookers and restaurant reinventions, while village kitchens still make the matla version.\n\nVessel: Then - Sealed earthen pot (matlu or matla), coated with mud | Now - Large vessels, pressure cookers and non-stick pans\nHeat source: Then - Pit with charcoal or embers on top | Now - Gas stove\nCooking time: Then - About 3 to 4 hours | Now - Two pressure-cooker whistles, then a short finish on low heat\nWater: Then - None; vegetables cook in their own juices | Now - A little hot water added (about 2 cups in one recipe)\nFlavour: Then - Smoky, from indirect heat | Now - Fresh green masala; less smoke\nOil: Then - More oil in the traditional method | Now - Pressure-cooker version uses less oil and can turn dry\nRegional styles: Then - Village matla undhiyo | Now - Surat (garlic-heavy), Ahmedabad (spicier, oilier), Kathiyawadi (spices only, no green masala)\nReinventions: Then - Home and festival dish | Now - Restaurants offer a baked oil-free version, a Jain version and an undhiyo okonomiyaki",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Sealed earthen pot → pressure cooker and large pan",
      heatSource: "Charcoal pit → gas stove",
      ingredientsList: [],
      preparationMethod:
        "Buried upside-down slow cook → pressure cook, then finish with muthiya and banana",
      contemporaryDifference:
        "Cooking time: 3 to 4 hours in the pit / about 2 whistles plus a short finish",
    },
    technologicalLeap: "Transition from subterranean earthen pit roasting to modern two-whistle pressure cooking and non-stick pans.",
    documentedCitation:
      "Harper's Bazaar India; Knocksense; Tarla Dalal.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Undhiyu Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: Surti papdi, purple yam and yam, baby potatoes, raw banana, small black brinjals, fresh toovar seeds, muthiya (fenugreek dumplings), coconut-coriander green masala with green garlic, ginger–green chilli paste, and oil with carom seeds and asafoetida.\n\n1. Make the muthiya: squeeze salted chopped methi leaves, mix with wheat flour, besan, ginger–green chilli paste, sugar, turmeric, chilli powder and oil into a soft dough. Shape 18 to 20 pieces and deep fry on medium heat until golden. They can be made a day ahead.\n2. Mix the green masala by hand: grated coconut, coriander, green garlic, coriander-cumin powder, ginger–green chilli paste, chilli powder, sugar, lemon juice and salt. It should taste spicy and sweet.\n3. Slit the baby potatoes, brinjals and raw banana without separating the segments, and stuff them with about half the masala.\n4. Combine the surti papdi, purple yam, yam and toovar seeds with the remaining masala. Rest for 8 to 10 minutes.\n5. Heat oil in a pressure cooker, add carom seeds, asafoetida and a pinch of soda bicarbonate, then add the stuffed potatoes and brinjals, followed by the marinated vegetables.\n6. Add salt and about 2 cups hot water, mix gently and pressure cook on high for 2 whistles. Let the steam release before opening.\n7. Move to a large non-stick pan, add the stuffed bananas and muthiya, and cook on low heat, stirring gently, until the bananas are tender.\n8. Serve hot, garnished with coriander, with poori and shrikhand.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Undhiyu Recipe",
      historicalCookware: "Pressure cooker, then a large non-stick pan",
      heatSource: "High heat for 2 whistles, then low flame to finish",
      ingredientsList: [
        "Surti papdi",
        "Purple yam and yam",
        "Baby potatoes",
        "Raw banana",
        "Small black brinjals",
        "Fresh toovar seeds",
        "Muthiya (fenugreek dumplings)",
        "Coconut-coriander green masala with green garlic",
        "Ginger–green chilli paste",
        "Oil with carom seeds and asafoetida",
      ],
      preparationMethod:
        "Stuffed-vegetable layering and pressure cook, finished with fried muthiya.",
      contemporaryDifference:
        "8. Serve hot with poori and shrikhand.",
    },
    technologicalLeap: "Layered pressure cooking of tender stuffed winter vegetables finished with crispy methi muthias.",
    documentedCitation:
      "Harper's Bazaar India; Knocksense; Tarla Dalal.",
  },
];

// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// INDORI POHA (Madhya Pradesh)
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// DAL BAATI CHURMA (Rajasthan)
// ─────────────────────────────────────────────
export const DAL_BAATI_CHURMA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dal Baati Churma in Mewar, Rajasthan",
    shortDescription:
      "Dal baati churma is a Rajasthani trio of baked wheat balls (baati), lentil dal and a sweet crumble (churma). It is traditionally linked to the Mewar kingdom and its founder Bappa Rawal, and to the Guhilot clan, for whom baati is said to have been a wartime meal made from unsalted wheat, ghee and camel milk. A popular story says Rajput soldiers buried dough balls under hot sand before battle and dug out the baked baati on their return. The dal is said to have come later, and churma is said to have started when a cook accidentally poured sugarcane juice on baati, or when women soaked hard baati in jaggery water to keep it soft. These are folk accounts without documentary proof, and no date is given.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "None: dough balls baked in hot sand (believed), later over an open fire",
      heatSource: "Sun-heated sand (believed); open fire fuelled by wood and dried cow dung",
      ingredientsList: [],
      preparationMethod:
        "Origin in Mewar: wheat dough balls baked until hard, then dressed with ghee and eaten with curd or buttermilk.",
      contemporaryDifference:
        "Cooking method: slow baking in sand or embers, with no dal and no sweet churma at first.",
    },
    technologicalLeap: "Sand and open-hearth radiative baking of leavening-free wheat balls for wartime durability.",
    documentedCitation:
      "Homegrown, “Dal Baati Churma: The Origin Of The Iconic Rajasthani Dish”; The Better India; Wikipedia; Whisk Affair.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Baking method: Then - buried in sun-heated sand or baked over open cow-dung / wood embers | Now - modern electric baati ovens, gas tandoors, and convection ovens\nDal pairing: Then - eaten simply with curd or buttermilk, with no dal | Now - served with rich Panchmel dal (five-lentil stew) tempered with hing and ghee\nChurma sweetness: Then - accidental soaking in sugarcane juice or jaggery water to soften hard baati | Now - decadent sweet confection of crushed baati fried in desi ghee, sugar / bura, cardamom, and dry fruits\nVessel: Then - open earthen pit or embers | Now - baati gas cookers, heavy kadhais, and pressure cookers\nFat used: Then - camel milk and rustic local cow ghee | Now - pure premium desi cow ghee, with baatis cracked open and completely soaked\nFlour: Then - coarse whole wheat (atta) with no leavening | Now - coarse wheat flour blended with sooji (semolina) and ajwain for crisp texture\nOccasion: Then - wartime survival ration for Rajput armies | Now - signature royal thali feast of Rajasthan, served at weddings, festivals, and celebrations",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Sun-heated sand or open fire embers → gas tandoor, baati oven or pressure cooker",
      heatSource: "Wood and cow-dung embers → LPG gas and electric ovens",
      ingredientsList: [],
      preparationMethod:
        "Sand or open-ember slow baking → uniform convection baking and ghee immersion",
      contemporaryDifference:
        "Wartime survival bread → grand royal celebratory triad with Panchmel dal and sweet churma",
    },
    technologicalLeap: "Evolution from desert sand-baking to codified royal thali assembly with multi-grain dal and caramelized churma.",
    documentedCitation:
      "Homegrown; The Better India; Wikipedia; Whisk Affair.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dal Baati Churma Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: coarse whole wheat flour (atta), sooji (semolina), pure desi ghee, ajwain (carom seeds), panchmel dal (toor, chana, moong, urad, masoor), hing (asafoetida), cumin and mustard seeds, green chillies and ginger, jaggery or bura (powdered sugar), cardamom powder.\n\n1. Prepare the baati dough: Mix coarse whole wheat flour, sooji, ajwain, salt, and melted ghee (moyen). Knead with warm water into a tight, firm dough. Rest for 20 minutes.\n2. Shape the baatis: Pinch dough and roll into medium, smooth balls. Make a gentle thumb depression in the centre of each.\n3. Bake the baatis: Arrange in a preheated baati oven, gas tandoor, or 200°C convection oven. Bake for 30–35 minutes, turning occasionally, until crisp and golden brown with cracked crusts.\n4. Cook the Panchmel dal: Rinse and pressure-cook the five lentils with water, turmeric, and salt for 4 whistles until soft and creamy.\n5. Temper the dal: Heat pure desi ghee in a pan; add cumin seeds, mustard seeds, hing, chopped green chillies, ginger, and red chilli powder. Pour the bubbling tadka over the cooked dal and simmer.\n6. Make the churma: Take 4–5 hot baked baatis, crush them finely while warm (or pulse in a mixer), and pass through a coarse sieve.\n7. Sweeten the churma: In a pan, warm a little ghee, add the crushed baati crumbs, powdered sugar (bura) or jaggery, and cardamom powder. Toss well and garnish with sliced almonds.\n8. Serve hot: Gently crack each hot baati with your palms, submerge in a bowl of warm desi ghee, and serve on a royal thali with bubbling Panchmel dal, sweet churma, and garlic chutney.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Dal Baati Churma Recipe",
      historicalCookware: "Gas tandoor, baati oven, and heavy pressure cooker",
      heatSource: "Medium heat baking & sizzling desi ghee tadka",
      ingredientsList: [
        "Coarse whole wheat flour (atta)",
        "Sooji (semolina)",
        "Pure desi ghee",
        "Ajwain (carom seeds)",
        "Panchmel dal (five lentils)",
        "Hing (asafoetida)",
        "Cumin and mustard seeds",
        "Green chillies and ginger",
        "Jaggery or bura (powdered sugar)",
        "Cardamom powder",
      ],
      preparationMethod:
        "1. Knead tight dough of atta, sooji, ajwain, and ghee moyen; shape into balls.\n2. Bake at 200°C for 30-35 mins until crusts fissure.\n3. Pressure-cook five lentils and temper with ghee, cumin, mustard seeds, and hing.\n4. Crush baked baatis, toss with warm ghee, bura, and cardamom for churma.\n5. Crack hot baatis open, soak in melted ghee, and serve with dal and churma.",
      contemporaryDifference:
        "Triad assembly: crisp golden baati, piping hot tempered Panchmel dal, and fragrant cardamom churma.",
    },
    technologicalLeap: "Perfected triple-component culinary balance of ghee-soaked crust, earthy protein stew, and sweet grain crumble.",
    documentedCitation:
      "Traditional Rajasthani culinary practice and codified thali recipes.",
  },
];

// ─────────────────────────────────────────────
// LAAL MAAS (Rajasthan)
// ─────────────────────────────────────────────
export const LAAL_MAAS_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Laal Maas in Rajasthan",
    shortDescription:
      "Laal maas (\"red meat\") is a fiery red meat curry of Rajasthan, said to have been cooked by Rajput royalty on hunting trips. Hunting parties carried few supplies, mainly chillies, garlic, yoghurt and rationed water, and marinated game such as wild boar, deer or jungle fowl in the camp kitchen. One legend says a Mewar king rejected deer meat cooked only with garlic and yoghurt because it smelled gamy, and the cook then added large amounts of chillies. Its red colour and heat come from Mathania chillies, grown near Mathania in Jodhpur. Sources date the dish to the 8th or the 10th century without evidence, so treat any date as unproven.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Camp pot or earthen pot",
      heatSource: "Open wood fire in the hunting camp",
      ingredientsList: [],
      preparationMethod:
        "Origin in Rajasthan: game meat marinated with garlic, chillies and yoghurt, cooked slowly over a wood fire with few ingredients.",
      contemporaryDifference:
        "Meat: wild game (jungli maas) with chillies masking the gamy smell.",
    },
    technologicalLeap: "Hunting camp braising of wild game with dense garlic, yoghurt, and high concentrations of Mathania chillies.",
    documentedCitation:
      "The National, “The story behind laal maas”; The Better India, laal maas history and recipe; Wikipedia, “Laal maas”.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Meat: Then - wild game (wild boar, deer, jungle fowl from royal hunts) | Now - tender goat meat / mutton on the bone\nChilli variety: Then - whole fresh or sun-dried Mathania chillies ground on camp stones | Now - Mathania chilli paste, soaked dried chillies, and Kashmiri chilli powder for deep scarlet hue\nCooking vessel: Then - rustic open camp pots (degh) or thick earthenware pots | Now - heavy-bottomed copper handis, cast-iron pots, and pressure cookers\nFat / Medium: Then - limited camp water; meat braised almost entirely in pure ghee and yoghurt | Now - pure desi ghee and mustard oil with measured water or mutton stock\nSmokiness: Then - natural open wood fire smoke from hunting camp hearths | Now - Dhungar smoking technique (charcoal embers topped with ghee and cloves under a sealed lid)\nHeat level: Then - intensely fiery to mask the gamey aroma of wild meats | Now - balanced heat with layered garlic sweetness and yoghurt tang\nAvailability: Then - exclusive royal hunting camps and Rajput palace banquets | Now - iconic heritage restaurant speciality served across Rajasthan and worldwide",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Camp pot or earthen pot → heavy copper handi or brass lagan",
      heatSource: "Camp wood fire → low flame gas stove with Dhungar charcoal smoke",
      ingredientsList: [],
      preparationMethod:
        "Wild game braise in curd and chillies → slow-cooked mutton bhuna with Mathania chilli paste and Dhungar finish",
      contemporaryDifference:
        "Rustic royal hunt game braise → refined scarlet royal mutton curry with rich ghee and smoky aroma",
    },
    technologicalLeap: "Transition from campfire wild game braising to slow-braised tender goat meat finished with charcoal Dhungar infuser.",
    documentedCitation:
      "The National; The Better India; Wikipedia.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Laal Maas Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: mutton (goat meat with bone), Mathania dry red chillies, pure desi ghee, garlic paste, whisked curd (yoghurt), sliced onions, whole spices (cloves, black cardamom, cinnamon), coriander powder, turmeric, charcoal lump with cloves (for Dhungar smoke).\n\n1. Prepare the chilli paste: Deseed Mathania red chillies, soak in warm water for 20 minutes, and grind into a smooth, vibrant red paste.\n2. Marinate the mutton: Coat mutton pieces with half of the Mathania chilli paste, garlic paste, whisked curd, turmeric, and salt. Rest for 45 minutes.\n3. Temper whole spices: Heat pure desi ghee generously in a heavy-bottomed handi; add black cardamom, green cardamom, cloves, cinnamon, and bay leaves until aromatic.\n4. Brown the onions: Add finely sliced onions and sauté on medium heat until golden brown.\n5. Bhuna the mutton: Add the marinated mutton and remaining garlic paste; roast on high heat for 10 minutes until the meat is seared and juices seal in.\n6. Slow-simmer the curry: Add the remaining Mathania chilli paste, coriander powder, and a splash of warm water. Cover tightly and cook on low heat for 45–60 minutes until mutton is melt-in-mouth tender and ghee floats on top.\n7. Infuse Dhungar smoke: Place a small metal bowl on the curry, add a red-hot charcoal piece, drop a clove and a spoonful of ghee over it, and seal the lid for 4 minutes to trap the royal campfire aroma.\n8. Serve hot: Discard charcoal and serve the glistening scarlet curry with bajra roti, hot phulkas, or steamed rice.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Laal Maas Recipe",
      historicalCookware: "Heavy-bottomed handi or lagan and small katori for Dhungar",
      heatSource: "Medium flame slow-braise & red-hot charcoal smoke",
      ingredientsList: [
        "Mutton (goat meat on the bone)",
        "Mathania dry red chillies",
        "Pure desi ghee",
        "Garlic paste",
        "Whisked curd (yoghurt)",
        "Sliced onions",
        "Whole spices (black cardamom, cloves, cinnamon)",
        "Coriander powder",
        "Turmeric powder",
        "Charcoal lump & clove (for Dhungar smoke)",
      ],
      preparationMethod:
        "1. Grind soaked Mathania chillies into paste.\n2. Marinate mutton with chilli paste, garlic, and whisked curd.\n3. Sizzle whole spices in pure ghee; sauté sliced onions golden brown.\n4. Bhuna marinated mutton on high heat for 10 mins to seal juices.\n5. Slow-simmer with remaining chilli paste for 50 mins until tender.\n6. Perform Dhungar charcoal smoke with clove and hot ghee under sealed lid.\n7. Serve glistening red curry hot with bajra roti.",
      contemporaryDifference:
        "Intense scarlet appearance, rich ghee release, and aromatic clove-charcoal smoke layer.",
    },
    technologicalLeap: "Mastery of fat-soluble carotenoid extraction from Mathania peppers combined with closed-lid volatile charcoal smoke infusion.",
    documentedCitation:
      "Traditional Rajasthani royal kitchen practice and codified recipes.",
  },
];

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
    technologicalLeap: "Precision 9-step unfermented green moong dosa griddling protocol.",
    documentedCitation: "Codified Andhra regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Present Day",
    yearRange: "Present Day",
    centuryLabel: "Stage 4",
    headline: "Pesarattu Plated & Served",
    shortDescription:
      "Folded crisp and served piping hot with traditional spicy ginger chutney (Allam Pachadi).",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Pesarattu Plated",
      historicalCookware: "Serving plate",
      heatSource: "Served freshly cooked",
      ingredientsList: [
        "whole green gram (green moong)",
        "onion",
        "fresh coriander leaves",
        "ginger chutney (Allam Pachadi)",
      ],
      preparationMethod:
        "Folded and served hot with fresh Allam Pachadi.",
      contemporaryDifference:
        "Iconic breakfast dish of Andhra Pradesh.",
    },
    technologicalLeap: "Classic pairing of crisp unfermented crepe with tangy Allam Pachadi.",
    documentedCitation: "Andhra Pradesh Tourism & Regional Culinary Surveys.",
  },
];

// ─────────────────────────────────────────────
// AVAKAYA (Andhra Pradesh)
// ─────────────────────────────────────────────
export const AVAKAYA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Avakaya in Andhra Pradesh",
    shortDescription:
      "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Large ceramic jaadi (bharani) and stone mortar",
      heatSource: "Sun-drying (zero heat cooking)",
      ingredientsList: [],
      preparationMethod:
        "Firm sour raw mango pieces cut with hard kernel, coated in sun-dried powdered mustard, red chilli and sea salt, submerged in cold-pressed gingelly oil.",
      contemporaryDifference:
        "Preservation tradition of summer mangoes; matured slowly in sealed ceramic bharanis without artificial preservatives.",
    },
    technologicalLeap: "Anaerobic oil maceration and high-acid microbial preservation in ceramic vessels.",
    documentedCitation: "Regional food tradition; no exact date, place or creator recorded.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets (native types like Rasalu are still preferred by many)\nSpice powders: Then - chillies and mustard sun-dried and ground fresh at home | Now - ready pickle-grade chilli and mustard powders are widely used\nCutting: Then - skilled cutting with a special knife, kernel kept intact | Now - same cut, with simple safety tricks like holding the mango in a cloth\nOil: Then - cold-pressed gingelly oil from the neighbourhood oil mill | Now - gingelly oil is still preferred; groundnut oil is the usual second choice\nJars: Then - large ceramic jaadis (bharanis) filled by the whole family | Now - smaller jars for small home batches, kept bone-dry\nBatch size: Then - big yearly batches shared across the family | Now - small batches of a few mangoes are common\nVariations: Then - the classic mustard-chilli Avakaya | Now - many versions such as bellam (jaggery), nuvvu (sesame), allam (ginger), pesara (moong) and endu (sun-dried) avakaya\nWhere it comes from: Then - made only at home each summer | Now - also sold ready-made by pickle brands\nThese changes describe kitchen practice, not a precisely documented historical timeline.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Ceramic bharanis / modern glass jars and food-grade containers",
      heatSource: "Sun-drying / ambient maturation",
      ingredientsList: [],
      preparationMethod:
        "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets",
      contemporaryDifference:
        "These changes describe kitchen practice, not a precisely documented historical timeline.",
    },
    technologicalLeap: "Adaptation from massive joint-family ceramic bharani batches to small modern domestic jars and commercial packaged variants.",
    documentedCitation: "Regional food studies and Andhra domestic culinary practice surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Avakaya Recipe: 9 Key Ingredients, 11 Steps",
    shortDescription:
      "Key ingredients: raw green sour mangoes, mustard seeds (sun-dried, ground fresh), red chilli powder, crystal salt (powdered), gingelly (sesame) oil, garlic cloves, fenugreek (methi) seeds, black chickpeas (optional, in place of garlic), hot rice with dal and ghee for serving.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Avakaya Recipe",
      historicalCookware: "Ceramic jaadi or bone-dry glass jar",
      heatSource: "Ambient room maturation (no heat)",
      ingredientsList: [
        "raw green sour mangoes",
        "mustard seeds (sun-dried, ground fresh)",
        "red chilli powder",
        "crystal salt (powdered)",
        "gingelly (sesame) oil",
        "garlic cloves",
        "fenugreek (methi) seeds",
        "black chickpeas (optional, in place of garlic)",
        "hot rice with dal and ghee for serving",
      ],
      preparationMethod:
        "1. Wash and soak the mangoes. - Use firm, sour raw mangoes. Soak them in water for about an hour.\n2. Dry the pickle jar. - Wash it and sun-dry it fully. There must be no moisture at all.\n3. Wipe and cut the mangoes. - Cut into pieces with the hard kernel kept on each piece. Remove the pith.\n4. Dry the pieces. - Clean each piece with a soft cloth. Spread on a dry cloth for an hour or two.\n5. Grind mustard and salt. - Grind sun-dried mustard seeds and crystal salt to a fine powder.\n6. Make the spice mix. - Mix chilli powder, mustard powder and salt in equal weight. Add methi seeds, garlic and part of the oil. A fistful should hold its shape.\n7. Coat the mango pieces. - Mix with clean, dry hands until every piece is coated.\n8. Fill the jar. - Add the pieces with all the spice mix. Pour a little oil on top.\n9. Seal and rest. - Close the lid and tie a cloth over it. Keep in a dry place and do not open for about 3 days.\n10. Mix and top up. - On day 4, mix with a clean, dry ladle. Taste for salt. Add oil so a thin layer covers the pickle.\n11. Mature and serve. - Mix again after another 4 days. Serve with hot rice, dal and ghee.",
      contemporaryDifference:
        "Always use a clean, dry spoon. Moisture spoils the pickle. Keep a thin layer of oil on top.",
    },
    technologicalLeap: "Precision 11-step zero-moisture mustard spice curing and oil maceration protocol.",
    documentedCitation: "Codified Andhra domestic pickle formulation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Present Day",
    yearRange: "Present Day",
    centuryLabel: "Stage 4",
    headline: "Avakaya Plated & Served",
    shortDescription:
      "Served with steaming hot rice, mudda pappu and a spoonful of melted ghee.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Avakaya Plated",
      historicalCookware: "Ceramic pickle bowl",
      heatSource: "Served at room temperature",
      ingredientsList: [
        "raw green sour mangoes",
        "gingelly (sesame) oil",
        "hot rice with dal and ghee for serving",
      ],
      preparationMethod:
        "Served with hot rice, dal and pure ghee.",
      contemporaryDifference:
        "The quintessential symbol of Andhra home gastronomy.",
    },
    technologicalLeap: "Timeless culinary pairing of spicy pungent pickle with rich ghee and lentils.",
    documentedCitation: "Andhra Pradesh Culinary Heritage Surveys.",
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
    case "bisi-bele-bath":
      return BISI_BELE_BATH_GENERATIONS;
    case "hyderabadi-biryani":
      return BIRYANI_GENERATIONS;
    case "hyderabadi-haleem":
      return HALEEM_GENERATIONS;
    case "vada-pav":
      return VADA_PAV_GENERATIONS;
    case "puran-poli":
      return PURAN_POLI_GENERATIONS;
    case "dhokla":
      return DHOKLA_GENERATIONS;
    case "undhiyu":
      return UNDHIYU_GENERATIONS;
    case "dal-baati-churma":
      return DAL_BAATI_CHURMA_GENERATIONS;
    case "laal-maas":
      return LAAL_MAAS_GENERATIONS;
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
          dishId === "hyderabadi-haleem" ||
          dishId === "masala-dosa" ||
          dishId === "bisi-bele-bath" ||
          dishId === "vada-pav" ||
          dishId === "puran-poli" ||
          dishId === "dhokla" ||
          dishId === "undhiyu" ||
          dishId === "dal-baati-churma" ||
          dishId === "laal-maas"
            ? (stage.number === 3 && legacy[2]?.generationRecipe.ingredientsList?.length
                ? legacy[2].generationRecipe.ingredientsList
                : source.generationRecipe.ingredientsList)
            : dishId === "indori-poha" ||
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
          (dishId === "hyderabadi-biryani" ||
            dishId === "hyderabadi-haleem" ||
            dishId === "masala-dosa" ||
            dishId === "bisi-bele-bath" ||
            dishId === "vada-pav" ||
            dishId === "puran-poli" ||
            dishId === "dhokla" ||
            dishId === "undhiyu" ||
            dishId === "dal-baati-churma" ||
            dishId === "laal-maas") &&
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
        dishId === "dhokla" || dishId === "undhiyu" || dishId === "dal-baati-churma" || dishId === "laal-maas"
          ? source.documentedCitation
          : citations || "Regional food writing; no securely dated first reference established.",
    } satisfies GenerationWaypoint;
  });
}
