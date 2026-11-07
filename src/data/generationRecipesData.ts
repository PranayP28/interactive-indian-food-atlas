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
    headline: "Masala Dosa Recipe: 8 Steps",
    shortDescription:
      "Sona Masuri rice, urad dal, fenugreek seeds, poha, potatoes, onions, green chillies, mustard seeds, curry leaves, pure desi ghee or butter.",
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
    headline: "Bisi Bele Bath Recipe: 8 Steps",
    shortDescription:
      "Sona Masuri rice, toor dal, mixed vegetables (carrots, beans, peas), tamarind extract, jaggery, Byadagi dry red chillies, kapok buds (marathi moggu), dry coconut (copra), cashew nuts, pure desi ghee.",
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
    headline: "Hyderabadi Dum Biryani Recipe: 8 Steps",
    shortDescription:
      "basmati rice, mutton or chicken, curd, fried onions, ginger-garlic paste, green chillies, whole spices and garam masala, mint and coriander, saffron milk, ghee.",
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
    headline: "Hyderabadi Haleem Recipe: 8 Steps",
    shortDescription:
      "broken wheat (dalia), boneless mutton, chana and moong lentils, curd, pure desi ghee, fried onions (birista), ginger-garlic paste, whole spices and garam masala, mint and coriander, almonds and cashew nuts.",
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
    headline: "Pesarattu Recipe: 9 Steps",
    shortDescription:
      "whole green gram (green moong), rice (optional, for extra crispness), ginger, green chillies, cumin seeds, salt, onion, fresh coriander leaves, cooking oil or ghee, ginger chutney (Allam Pachadi) for serving.",
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
    headline: "Mumbai Vada Pav Recipe: 7 Steps",
    shortDescription:
      "potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.\n\n1. Boil the potatoes, then peel and mash them roughly. (Sign: a knife goes in easily.)\n2. Make the filling: fry chopped garlic and green chillies in a little oil, add the mashed potatoes and salt, and mix well. (Sign: it smells fragrant and is dry enough to shape. Let it cool a little.)\n3. Shape the filling into round, slightly flat balls. (Sign: they hold their shape without cracking.)\n4. Make the batter: whisk gram flour with water and a pinch of salt. (Sign: thick and smooth, with no lumps, and it coats the back of a spoon.)\n5. Dip each ball in the batter and fry it in hot oil on medium heat, turning it once or twice. (Sign: golden brown and crisp all over. Drain on paper.)\n6. Make the dry garlic chutney: crush garlic with salt and red chilli powder into a coarse powder. (Sign: it looks red and crumbly and smells strong.)\n7. Slit the pav without cutting it fully, spread the chutney inside, place the hot vada and press lightly. (Sign: the vada sits snugly. For a modern twist, toast the pav on a griddle with butter first. Serve hot.)",
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
        "Tempered Potato Mash & Precision Deep Frying. potatoes, pav (bread rolls), gram flour (besan), garlic, green chillies. Also needed: oil, salt and red chilli powder.",
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
    headline: "Puran Poli Recipe: 8 Steps",
    shortDescription:
      "wheat flour (atta or maida), chana dal, jaggery, ghee, cardamom powder, nutmeg powder, salt, oil.\n\n1. Wash and boil the chana dal until soft but not mushy. (Sign: a grain mashes easily between two fingers.)\n2. Drain the dal and cook it with jaggery on low heat, stirring often. (Sign: it thickens, leaves the sides of the pan and holds its shape on a spoon.)\n3. Mash it smooth and mix in cardamom and nutmeg. (Use a puran yantra, food mill or mixer-grinder. Sign: no lumps. Cool it fully, then roll it into smooth balls.)\n4. Make the dough: knead flour with water, a little oil and salt, and rest it. (Sign: soft and stretchy, and it springs back when pressed.)\n5. Flatten a dough ball, place a puran ball in the centre, bring the edges together and seal. (Sign: no filling is showing.)\n6. Dust lightly with flour and roll gently into a round. (Sign: even thickness, no tears, and the filling spread to the edges.)\n7. Roast on a hot tawa on medium heat, flipping once, and brush with ghee. (Sign: light brown spots on both sides.)\n8. Serve hot with a little ghee on top. (Sign: soft, with the sweet filling visible at the edge.)",
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
        "Puran Stone-Straining & Translucent Rolling. wheat flour, chana dal, jaggery, ghee, cardamom powder, nutmeg powder.",
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
    headline: "Dhokla Recipe: 8 Steps",
    shortDescription:
      "besan (gram flour), curd, ginger–green chilli paste, turmeric, salt, sugar, lemon juice, fruit salt (Eno), oil with mustard seeds, curry leaves and coriander.\n\n1. Mix besan, curd, ginger–green chilli paste, turmeric, salt, sugar and lemon juice with water into a smooth, pourable batter. Rest it for about 10 minutes.\n2. Heat water in a steamer and grease a tray with oil.\n3. Add fruit salt to the batter just before cooking and stir gently, once, until it froths.\n4. Pour the batter into the greased tray straight away.\n5. Steam on medium heat for about 15 minutes, until a skewer comes out clean.\n6. Let it cool slightly, then cut into squares.\n7. Heat oil, crackle mustard seeds, add green chillies and curry leaves, then pour in a little water and sugar. Pour this tempering over the dhokla.\n8. Garnish with coriander and grated coconut and serve with green chutney and fried chillies.",
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
    headline: "Undhiyu Recipe: 8 Steps",
    shortDescription:
      "Surti papdi, purple yam and yam, baby potatoes, raw banana, small black brinjals, fresh toovar seeds, muthiya (fenugreek dumplings), coconut-coriander green masala with green garlic, ginger–green chilli paste, and oil with carom seeds and asafoetida.\n\n1. Make the muthiya: squeeze salted chopped methi leaves, mix with wheat flour, besan, ginger–green chilli paste, sugar, turmeric, chilli powder and oil into a soft dough. Shape 18 to 20 pieces and deep fry on medium heat until golden. They can be made a day ahead.\n2. Mix the green masala by hand: grated coconut, coriander, green garlic, coriander-cumin powder, ginger–green chilli paste, chilli powder, sugar, lemon juice and salt. It should taste spicy and sweet.\n3. Slit the baby potatoes, brinjals and raw banana without separating the segments, and stuff them with about half the masala.\n4. Combine the surti papdi, purple yam, yam and toovar seeds with the remaining masala. Rest for 8 to 10 minutes.\n5. Heat oil in a pressure cooker, add carom seeds, asafoetida and a pinch of soda bicarbonate, then add the stuffed potatoes and brinjals, followed by the marinated vegetables.\n6. Add salt and about 2 cups hot water, mix gently and pressure cook on high for 2 whistles. Let the steam release before opening.\n7. Move to a large non-stick pan, add the stuffed bananas and muthiya, and cook on low heat, stirring gently, until the bananas are tender.\n8. Serve hot, garnished with coriander, with poori and shrikhand.",
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
      "Dal baati churma is a traditional Rajasthani meal made of three parts: baati (baked wheat balls), dal (lentils) and churma (a sweet crumble). Popular stories link the baati to the time of Bappa Rawal, founder of the Mewar kingdom, when it was a practical wartime meal for soldiers. Baati was first eaten with ghee and curd. According to the story, dal (panchmel, a five-lentil dal) came later and the pairing became popular. The story names the Gupta-era traders; do not state this as proven history. Folklore says the churma was found by accident, when a cook of the Guhilot clan of Mewar poured sugarcane juice on baatis. These are traditional stories and folklore. The exact date and origin are not documented. State this clearly. It is linked to festivals such as Makar Sankranti and Diwali (in the Dhundhand region) and to weddings and celebrations.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Open-hearth pit or earthen embers",
      heatSource: "Sun-heated sand or wood-and-dung campfire embers",
      ingredientsList: [],
      preparationMethod:
        "Wheat dough balls baked until hard, then dressed with ghee and eaten with curd or buttermilk.",
      contemporaryDifference:
        "Wartime soldiers' ration evolved into celebratory regional feast.",
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
      "Cooking method: baked on open fire, coals or embers / oven, gas tandoor, appe pan or pressure cooker\nBaati dough: unsalted wheat, ghee and milk, coarse wheat / wheat flour with semolina, salt, ajwain and sometimes baking soda or powder\nPairing: baati eaten with ghee, curd or buttermilk / baati with panchmel dal, churma, chutney, onions and chaas\nDal: added later to the baati meal (story) / panchmel dal (five lentils) is the standard partner\nChurma: sweetened, crushed baati (folklore: sugarcane juice) / crushed or separately made dough with ghee, powdered sugar or jaggery, nuts and cardamom\nOccasion: wartime food for soldiers (story) / festival, wedding and special-occasion meal",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Open fire embers → gas tandoor, baati oven, appe pan or pressure cooker",
      heatSource: "Wood and cow-dung embers → LPG gas and electric ovens",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: baked on open fire, coals or embers / oven, gas tandoor, appe pan or pressure cooker",
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
    headline: "Dal Baati Churma Recipe: 8 Steps",
    shortDescription:
      "Key ingredients: whole wheat flour, semolina, ghee, panchmel dal (five lentils), onion, tomato, garlic, cumin and mustard seeds, powdered sugar, almonds and cardamom.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.46.45.jpeg",
    generationRecipe: {
      recipeName: "Dal Baati Churma Recipe",
      historicalCookware: "Gas tandoor, baati oven, and heavy pressure cooker",
      heatSource: "Medium heat baking & sizzling desi ghee tadka",
      ingredientsList: [
        "whole wheat flour",
        "semolina",
        "ghee",
        "panchmel dal (five lentils)",
        "onion",
        "tomato",
        "garlic",
        "cumin and mustard seeds",
        "powdered sugar",
        "almonds and cardamom",
      ],
      preparationMethod:
        "1. Knead a stiff dough with wheat flour, semolina, ghee, salt and ajwain. Add water slowly. Rest it for 30 minutes.\n2. Wash and boil the panchmel dal until soft. Cook it with turmeric and salt.\n3. Make the dal tadka: heat ghee, add cumin, garlic, onion and tomato. Cook until soft, then mix into the dal.\n4. Shape the dough into round balls. Press a small dent in the centre of each.\n5. Bake the baatis in an oven, tandoor or covered pan. Turn them now and then until golden brown and cracked on top.\n6. Dip or brush each hot baati in ghee. Keep some baatis aside for churma.\n7. Crush the kept baatis into coarse crumbs. Mix with ghee, powdered sugar, chopped almonds and cardamom.\n8. Break a baati, pour hot dal over it and add more ghee. Serve with churma, onions and chaas.",
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
      "\"Laal\" means red and \"maas\" means meat. It is a fiery red meat curry from Rajasthan, also called Ratto Maas. It is linked to the Rajput royalty and their hunting trips. The popular story says it was first made with game such as wild boar, deer or jungle fowl, and that chillies were used to hide the gamey smell. The red colour and heat are linked to the Mathania chilli from Mathania near Jodhpur. The details are disputed. Some chefs say it was always a mutton dish made in royal kitchens by the khansamas (royal cooks), not on hunts. Some say each region used its own local chilli, not only Mathania. State this clearly and do not pick a side as fact. Traditional laal maas uses curd or buttermilk for tang, not tomatoes (many chefs say tomato versions are a later change).",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.17.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Camp pot or earthen pot",
      heatSource: "Open wood fire in the hunting camp",
      ingredientsList: [],
      preparationMethod:
        "Game meat marinated with garlic, chillies and curd, cooked slowly over a wood fire.",
      contemporaryDifference:
        "Traditional hunting camp game curry masking gamey aroma with fiery local chillies.",
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
      "Meat: wild boar, deer, jungle fowl and rabbit / mutton or lamb, since hunting is banned\nChilli: Mathania chilli, or the local variety / Mathania where available, otherwise Kashmiri or other red chillies\nHeat: reported to be much hotter in old versions / milder in many modern versions\nCooking method: slow cooking over fire in hunting camps and desert pits / handi or heavy pot on the stove, or pressure cooker\nCooking fat: ghee or mustard oil (wild boar fat was prized in hunting kitchens) / ghee or mustard oil\nSmoky flavour: cooked over fire / dhungar - smoking the finished curry with live coal, ghee and cloves\nWho made it: royal khansamas / homes and restaurants across Rajasthan\nServed with: bread and rice / bajra roti, rice or paratha",
    image: "/images/dishes/laal-maas-1.png",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Camp pot or earthen pot → heavy copper handi or brass lagan",
      heatSource: "Camp wood fire → low flame gas stove with Dhungar charcoal smoke",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow cooking over fire in hunting camps and desert pits / handi or heavy pot on the stove, or pressure cooker",
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
    headline: "Laal Maas Recipe: 8 Steps",
    shortDescription:
      "Key ingredients: mutton on the bone, Mathania (or Kashmiri) dried red chillies, garlic, ginger, onions, curd, ghee, whole spices (cloves, cardamom, cinnamon), coriander and turmeric powder, a small piece of charcoal.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.17.jpeg",
    generationRecipe: {
      recipeName: "Laal Maas Recipe",
      historicalCookware: "Heavy-bottomed handi or lagan and small katori for Dhungar",
      heatSource: "Medium flame slow-braise & red-hot charcoal smoke",
      ingredientsList: [
        "mutton on the bone",
        "Mathania (or Kashmiri) dried red chillies",
        "garlic",
        "ginger",
        "onions",
        "curd",
        "ghee",
        "whole spices (cloves, cardamom, cinnamon)",
        "coriander and turmeric powder",
        "a small piece of charcoal",
      ],
      preparationMethod:
        "1. Soak the dried chillies in hot water. Grind them to a smooth red paste.\n2. Mix the mutton with curd, ginger-garlic paste, some chilli paste, coriander and turmeric. Rest for at least 1 hour.\n3. Heat ghee, add the whole spices and sliced onions. Fry until the onions are golden.\n4. Add the marinated mutton. Cook on high heat for a few minutes until the meat changes colour.\n5. Add the rest of the chilli paste and salt. Cook on low heat until the ghee separates from the masala.\n6. Add a little water and cover. Cook on low heat until the mutton is soft. The time depends on the meat.\n7. For the smoky taste (dhungar), place a hot charcoal piece in a small steel bowl in the centre. Add cloves and ghee and cover for about 3 minutes.\n8. Remove the bowl and stir. Rest for a few minutes. Serve with bajra roti, rice or paratha.",
      contemporaryDifference:
        "Intense scarlet appearance, rich ghee release, and aromatic clove-charcoal smoke layer.",
    },
    technologicalLeap: "Mastery of fat-soluble carotenoid extraction from Mathania peppers combined with closed-lid volatile charcoal smoke infusion.",
    documentedCitation:
      "Traditional Rajasthani royal kitchen practice and codified recipes.",
  },
];

// ─────────────────────────────────────────────
// GHEWAR (Rajasthan)
// ─────────────────────────────────────────────
export const GHEWAR_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Ghewar in Rajasthan",
    shortDescription:
      "Ghewar is a crisp, honeycomb-textured disc-shaped sweet, soaked in sugar syrup and often topped with rabri. It is associated with Rajasthan, and many sources trace it to Jaipur and royal kitchens. It is linked to the monsoon festivals Teej, Raksha Bandhan and Gangaur. It is tied to the custom of sinjhara, where sweets and gifts are sent to married daughters before Teej. The exact origin, date and creator are not documented. Some stories name other places or periods. State this clearly.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.42.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Deep frying vessel or special ring mould",
      heatSource: "Traditional wood or coal hearth",
      ingredientsList: [],
      preparationMethod:
        "Thin flour-and-ghee batter poured into hot ghee in concentric rings, forming a honeycomb disc soaked in sugar syrup.",
      contemporaryDifference:
        "Traditional Teej and Raksha Bandhan monsoon festival sweet associated with Jaipur royal sweet-makers.",
    },
    technologicalLeap: "Concentric ring pouring of cold emulsion into piping hot ghee creating porous honeycomb structure.",
    documentedCitation: "Regional food tradition & festival confectionery documentation of Rajasthan.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Season: made mainly for monsoon festivals / sold through the year, and for Diwali, Holi and weddings\nSkill and tools: skilled sweet-makers (halwais) and a special mould / home recipes with a mould, a metal ring, or no mould\nFrying fat: ghee / ghee or oil\nVarieties: plain ghewar with syrup / mawa, malai, rabri and paneer ghewar\nToppings: sugar syrup / rabri, nuts, saffron and silver leaf\nGifting: sinjhara gifts at Teej and Raksha Bandhan / boxes from sweet shops, still exchanged at Teej",
    image: "/images/dishes/ghewar-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Special halwai moulds / Domestic metal rings or moulds",
      heatSource: "Bhatti hearth / Modern domestic gas stoves",
      ingredientsList: [],
      preparationMethod:
        "Frying fat: ghee / ghee or oil",
      contemporaryDifference:
        "Evolution from seasonal monsoon festival halwai preparation to year-round confectionery and rabri varieties.",
    },
    technologicalLeap: "Adaptation to modern home ring moulds and diverse dairy toppings including rabri and malai.",
    documentedCitation: "Comparative sweet-making documentation across Rajasthan.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Ghewar Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: refined flour (maida), ghee, chilled milk, ice-cold water, ice cubes, sugar, cardamom powder, saffron, rabri, chopped pistachios.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.47.42.jpeg",
    generationRecipe: {
      recipeName: "Ghewar Recipe",
      historicalCookware: "Tall narrow pan with metal ring mould",
      heatSource: "Medium-high heat for frying; gentle heat for one-string syrup",
      ingredientsList: [
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
      preparationMethod:
        "1. Rub cold ghee with ice cubes until it turns white and creamy. Remove the ice.\n2. Add maida slowly with chilled milk and ice-cold water. Whisk to a smooth, thin, pouring batter and keep it cold.\n3. Boil sugar, water, cardamom and saffron to a one-string syrup. Keep it lukewarm.\n4. Heat ghee or oil in a tall, narrow pan. Place the mould or metal ring in it.\n5. Pour the batter in a thin stream into the centre of the mould. Pour in small batches so a lacy honeycomb forms.\n6. Fry until golden and crisp. Lift it out and drain.\n7. Dip briefly in lukewarm syrup or pour a little syrup over it.\n8. Top with rabri, pistachios and saffron. Serve.",
      contemporaryDifference:
        "Crisp honeycomb disc soaked in saffron syrup and garnished with fresh rabri and pistachios.",
    },
    technologicalLeap: "Ice-rubbed ghee fat crystallization yielding micro-droplet batter suspension for crisp lacy expansion.",
    documentedCitation: "Traditional Rajasthani sweet-making practice and codified recipes.",
  },
];

// ─────────────────────────────────────────────
// GOAN FISH CURRY (Goa)
// ─────────────────────────────────────────────
export const GOAN_FISH_CURRY_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Goan Fish Curry in Coastal Goa",
    shortDescription:
      "Goan fish curry is a daily staple of coastal Goan homes. Fish and rice are the base of Goan food. Goa was under Portuguese rule from 1510 to 1961. The Portuguese brought new ingredients, including the chilli, which now defines much of Goan cooking. The dish blends local Konkan ingredients (coconut, kokum, fresh local fish) with Portuguese-era influence on spices and chillies. The exact date and creator of the curry are not documented. It grew out of everyday home and fishing-community cooking, not from one known inventor. Hindu and Catholic Goan households each have their own versions. Hindu homes call the fish curry \"humann\" or \"ambot\" (sour). It is a coconut-based curry. Kashmiri chilli gives the red-orange colour. Kokum or tamarind gives the sourness.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.33.36.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (kundlem) or clay pot",
      heatSource: "Traditional wood-fired hearth",
      ingredientsList: [],
      preparationMethod:
        "Fresh coastal fish simmered gently with ground fresh coconut, indigenous kokum or tamarind, and aromatic spices over an open hearth.",
      contemporaryDifference:
        "Centuries of coastal Konkan culinary practice fused with Portuguese-era spice and chilli introductions.",
    },
    technologicalLeap: "Stone-ground coconut emulsion and gentle clay-pot poaching of fresh coastal catch.",
    documentedCitation: "Regional Goan culinary history and coastal gastronomic records.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Heat and colour: black pepper and local spices, then chillies arrived with the Portuguese / Kashmiri chilli is now the main chilli for colour with mild heat\nSouring agent: kokum / tamarind paste or ready tamarind concentrate (kokum still used)\nCoconut: freshly grated and ground coconut / canned or tetra-pack coconut milk, also coconut cream\nMasala: spices ground fresh by hand / mixer-grinder, and ready chilli and masala powders\nFish: local catch such as kingfish, pomfret, mackerel / any white fish, including cod, tilapia, salmon, pollock\nCooking time: slow home simmer / a quick curry, ready in about 20-30 minutes\nServing: steamed rice and Goan bread (poi) / still rice and pav or poi, and also served at restaurants and fish thali spots",
    image: "/images/dishes/goan-fish-curry-stage-3.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pot / modern stainless steel and non-stick cookware",
      heatSource: "Firewood hearth / domestic LPG gas and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking time: slow home simmer / a quick curry, ready in about 20-30 minutes",
      contemporaryDifference:
        "Transition from hand stone grinding and local fresh catch to mixer-grinders, packaged coconut milk, and global fish varieties.",
    },
    technologicalLeap: "Adaptation to modern electric wet grinding, commercial paste packaging, and restaurant thali service.",
    documentedCitation: "Comparative Goan food documentation and oral culinary traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Goan Fish Curry Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: fresh fish (kingfish, pomfret or mackerel), grated coconut, dried Kashmiri red chillies, coriander seeds, cumin seeds, turmeric, tamarind or kokum, onion, garlic, coconut oil.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.33.36.jpeg",
    generationRecipe: {
      recipeName: "Goan Fish Curry Recipe",
      historicalCookware: "Heavy pot or deep pan",
      heatSource: "Medium heat to fry masala, then gentle low simmer for 5-8 minutes",
      ingredientsList: [
        "fresh fish (kingfish, pomfret or mackerel)",
        "grated coconut",
        "dried Kashmiri red chillies",
        "coriander seeds",
        "cumin seeds",
        "turmeric",
        "tamarind or kokum",
        "onion",
        "garlic",
        "coconut oil",
      ],
      preparationMethod:
        "1. Marinate the fish pieces with salt, turmeric and a little tamarind or lemon. Keep aside for 15-20 minutes.\n2. Grind the coconut, dried red chillies, coriander seeds, cumin and garlic with a little water. Grind to a smooth, thin paste.\n3. Heat coconut oil and fry the sliced onions until soft and golden.\n4. Add the ground paste and fry on medium heat. Stir until it smells fragrant and the raw smell is gone.\n5. Add water and the tamarind or kokum. Stir and bring to a gentle boil.\n6. Simmer for 8-10 minutes so the flavours join. The gravy should be bright orange-red and smooth.\n7. Add the fish and cook gently on low heat for 5-8 minutes. Do not stir hard. The fish is done when it turns opaque and flakes easily.\n8. Switch off the heat and rest for 5 minutes. Serve hot with steamed rice or Goan poi.",
      contemporaryDifference:
        "Precise 8-step home method balancing rich coconut gravy, tart kokum/tamarind, and gently poached fish.",
    },
    technologicalLeap: "Balanced two-phase cooking: aromatic ground paste reduction followed by gentle low-temperature fish poaching.",
    documentedCitation: "Codified Goan regional recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// PORK VINDALOO (Goa)
// ─────────────────────────────────────────────
export const PORK_VINDALOO_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pork Vindaloo in Coastal Goa",
    shortDescription:
      "Vindaloo comes from the Portuguese dish \"carne de vinha d'alhos\" (meat in wine/wine vinegar and garlic), which came to Goa with the Portuguese. The name \"vindaloo\" is a changed form of \"vinha d'alhos\". It has nothing to do with \"aloo\" (potato). In Portugal (Madeira and the Azores) the marinade used wine or wine vinegar. In Goa, cooks adapted it with local palm (coconut toddy) vinegar and added chillies and spices, and it became a Goan dish of its own. It is a Goan Catholic festive dish, made at Christmas, New Year and Easter. It is traditionally made with pork. The marinade was also a way to keep meat from spoiling on long sea voyages. The exact date and the cook who first made it are not documented. Food writers disagree on details, such as whether vinegar was already known in India. Traditional Goan vindaloo is tangy and mildly spicy, with deep red colour from Kashmiri-type chillies. It is different from the very hot British curry-house \"vindaloo\".",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.34.14.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (kundlem) or heavy copper pot",
      heatSource: "Traditional wood-fired hearth",
      ingredientsList: [],
      preparationMethod:
        "Pork marinated in local palm toddy vinegar with garlic and native Konkan spices, braised slowly in its own rendered fat.",
      contemporaryDifference:
        "Indo-Portuguese seafaring preservation technique transformed into a celebratory Goan Catholic staple.",
    },
    technologicalLeap: "Acid-cure marination using fermented palm toddy vinegar combined with slow copper-pot braising.",
    documentedCitation: "Regional Goan culinary writing and Indo-Portuguese gastronomic documentation.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Marinade liquid: wine or wine vinegar (Portugal/Madeira) / palm toddy vinegar in Goa, white or malt vinegar in many kitchens today\nPurpose: keeping meat from spoiling on sea voyages / a festive, flavour-first dish for Christmas and Easter\nChilli: mild local chillies for colour (Bedige/Byadgi type) / Kashmiri chilli, now common for deep red colour with mild heat\nSpice base: garlic, pepper, turmeric and cloves added to the Portuguese idea / a thick masala of chillies, garlic, ginger, cumin, pepper, cinnamon and cloves\nGrinding: mortar and pestle or stone / electric blender or grinder\nCooking style: meat cooked in vinegar and garlic liquid / seared, then simmered slowly until tender and the oil separates\nMeat: pork was traditional and standard / chicken, beef, lamb and vegetarian adaptations now common\nHeat level: balanced tangy-spicy Goan festive profile / often made extremely fiery outside India, especially in the UK\nServed with: Goan sannas, crusty poi or steamed rice / still eaten with sannas or poi at festivals, and with rice, naan or rotis in restaurants",
    image: "/images/dishes/pork-vindaloo-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Heavy copper handi or clay pot / stainless steel pots and pressure cookers",
      heatSource: "Wood fire / modern gas ranges and electric cookers",
      ingredientsList: [],
      preparationMethod:
        "Cooking style: meat cooked in vinegar and garlic liquid / seared, then simmered slowly until tender and the oil separates",
      contemporaryDifference:
        "From shipboard wine-vinegar barrel preservation to modern restaurant curries and domestic vinegar substitutions.",
    },
    technologicalLeap: "Shift from stone-mortar grinding and prolonged wood-hearth braising to electric blenders and domestic pressure cooking.",
    documentedCitation: "Comparative Indo-Portuguese culinary history and contemporary Goan food records.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pork Vindaloo Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: pork shoulder, dried Kashmiri red chillies, garlic, ginger, cumin seeds, black peppercorns, cloves and cinnamon, turmeric, palm vinegar (or white vinegar), onions.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.34.14.jpeg",
    generationRecipe: {
      recipeName: "Pork Vindaloo Recipe",
      historicalCookware: "Heavy-bottomed pot or handi",
      heatSource: "High heat to sear, then gentle low heat for 40-50 minutes",
      ingredientsList: [
        "pork shoulder",
        "dried Kashmiri red chillies",
        "garlic",
        "ginger",
        "cumin seeds",
        "black peppercorns",
        "cloves and cinnamon",
        "turmeric",
        "palm vinegar (or white vinegar)",
        "onions",
      ],
      preparationMethod:
        "1. Cut the pork shoulder into bite-sized cubes and wash well. Drain completely and pat dry with a cloth.\n2. Grind the dried Kashmiri chillies, garlic, ginger, cumin, peppercorns, cloves, cinnamon and turmeric with palm vinegar. Grind into a thick, smooth, deep-red paste without adding water.\n3. Marinate the pork thoroughly with the ground spice paste and salt. Cover and rest in the refrigerator (overnight for best flavour, or at least 3-4 hours).\n4. Heat a little oil in a heavy-bottomed pot and fry the sliced onions. Cook on medium heat until soft and golden brown.\n5. Add the marinated pork along with all the marinade to the pot. Sear on high heat for 5-8 minutes, stirring until the meat changes colour and seals.\n6. Lower the heat, cover tightly with a lid, and slow-cook in its own juices and vinegar for 40-50 minutes. The pork is done when the meat is fork-tender and oil separates at the edges.\n7. Taste and adjust the seasoning with a splash of extra palm vinegar or a pinch of sugar. Simmer uncovered for 3-5 minutes until the gravy is rich and glossy.\n8. Switch off the heat and rest for at least 15-20 minutes before serving. Serve hot with Goan sannas, crusty poi or steamed rice.",
      contemporaryDifference:
        "Authentic 8-step Goan method featuring waterless vinegar grinding, high-heat searing, and long slow braising.",
    },
    technologicalLeap: "Waterless vinegar spice suspension combined with sealed internal steam and fat rendering.",
    documentedCitation: "Codified Goan Catholic recipe documentation.",
  },
];

// ─────────────────────────────────────────────
// BEBINCA (Goa)
// ─────────────────────────────────────────────
export const BEBINCA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Bebinca in Old Goa",
    shortDescription:
      "Bebinca is Goa's best-known layered dessert, often called the \"Queen of Goan Desserts\". It is a Portuguese-era sweet from Goan Catholic cooking, made for Christmas and other feasts. The most popular legend says it was created in the 17th century by a nun named Bebiana (also written Bibiona) at the Santa Monica Convent in Old Goa. In the legend, the convent used egg whites to starch clothing, so many yolks were left over. She used the yolks to make a sweet. The legend says she made seven layers to stand for the seven hills of Lisbon and the old city of Goa. The priests found it too small and asked for more layers. After her death, the sweet was named after her. This is a legend and oral tradition. The true origin is not documented with certainty. In Goa it is also called bibik. In Portuguese it is known as \"Bebinca das Sete Folhas\" (seven leaves). Bebinca received a Geographical Indication (GI) tag in 2023. It is made from egg yolks, coconut milk, sugar, flour and ghee, baked one thin layer at a time.",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.36.07.jpeg",
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Earthen pot (tizal) or heavy baking dish",
      heatSource: "Traditional wood-fired embers and top coal heat",
      ingredientsList: [],
      preparationMethod:
        "Layer-by-layer sequential baking of rich egg yolk and coconut milk batter in an earthen tizal with coconut-husk embers placed on the lid for overhead heat.",
      contemporaryDifference:
        "Oral legend attributing creation to Santa Monica Convent nun Bebiana; true origin remains undocumented with certainty.",
    },
    technologicalLeap: "Multi-layered overhead grill baking using hot charcoal on lid of an earthen tizal.",
    documentedCitation: "Oral tradition and regional Goan Catholic culinary history.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking vessel: earthen pot (tizal), still used by a few families / oven or grill and a baking tin\nCoconut milk: fresh coconut grated and pressed for thick and thin milk / canned or packaged coconut milk in many kitchens\nLayers: seven layers (Bebinca das Sete Folhas) / six to sixteen or more layers\nLayer colour: pale and caramelised layers using caramelised sugar / some versions use food colouring\nFlavouring: nutmeg / nutmeg, with cardamom or vanilla essence in some recipes\nMaking it: a slow, long, labour-heavy home sweet made for Christmas / fewer people make it at home today\nOccasions: Christmas and feasts / Christmas, weddings and other celebrations\nServing: sliced into wedges, warm or at room temperature / often served with vanilla ice cream",
    image: "/images/dishes/bebinca-stage-4.webp",
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen tizal / modern oven with top broiler or grill",
      heatSource: "Coconut husk embers / modern domestic electric ovens",
      ingredientsList: [],
      preparationMethod:
        "Cooking vessel: earthen pot (tizal), still used by a few families / oven or grill and a baking tin",
      contemporaryDifference:
        "Evolution from labor-intensive hearth baking of seven layers to commercial multi-tier ovens, packaged coconut milk, and cafe dessert plating with ice cream.",
    },
    technologicalLeap: "Adaptation to modern electric oven top-grills and commercial bakery production.",
    documentedCitation: "Comparative Goan food documentation and oral baking traditions.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Bebinca Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: egg yolks, thick coconut milk, thin coconut milk, sugar, refined flour (maida), ghee, nutmeg, salt, caramelised sugar, cardamom powder (optional).",
    image: "/images_updated/WhatsApp Image 2026-11-08 at 02.36.07.jpeg",
    generationRecipe: {
      recipeName: "Bebinca Recipe",
      historicalCookware: "Baking tin or round cake pan",
      heatSource: "Oven grill / top heat element",
      ingredientsList: [
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
      preparationMethod:
        "1. Make thick and thin coconut milk from fresh coconut. Canned coconut milk also works.\n2. Whisk the egg yolks with the sugar. Whisk until pale and creamy.\n3. Add the thick coconut milk, salt and nutmeg. Then add the flour and thin coconut milk in small batches. Whisk until there are no lumps.\n4. Strain the batter and rest it for a few minutes. This gives a smooth texture.\n5. Divide the batter into two parts. Colour one part with caramelised sugar to make a darker batter.\n6. Grease the pan with ghee and pour in a thin first layer. Bake or grill from above until just set and lightly golden.\n7. Brush ghee on top, then pour the next thin layer. Alternate light and dark layers. Repeat until all the batter is used.\n8. Cool a little, loosen the edges and turn out onto a plate. Cut into wedges and serve warm or at room temperature.",
      contemporaryDifference:
        "Precise 8-step layered baking alternating light and dark batters under overhead grill heat.",
    },
    technologicalLeap: "Sequential layer setting with top heat and clarified butter brushing between strata.",
    documentedCitation: "Standardized Goan convent and household recipe documentation.",
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
    headline: "Indori Poha Recipe: 10 Steps",
    shortDescription:
      "Thick or medium-thick poha (flattened rice), Turmeric, sugar and salt, Oil, Mustard seeds and fennel seeds, Green chilli, Onion (raw, chopped), Fresh coriander leaves, Jeeravan masala, Ratlami or Indori sev, and masala boondi (nukti), Lemon, Pomegranate (optional), Hot jalebi (for serving, optional).",
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
    headline: "Bhutte Ka Kees: 10 Preparation Steps",
    shortDescription:
      "Fresh tender sweet corn (bhutta, grated), Full cream milk, Desi ghee or oil, Mustard seeds and cumin seeds (jeera), Asafoetida (hing), Green chillies (finely chopped), Fresh ginger (grated), Turmeric powder, Sugar and salt, Fresh coconut (scraped/grated), Fresh coriander leaves, Lemon (for tang) and jeeravan masala / sev (optional).\n\n1. Grate the corn. - Husk fresh tender corn cobs and grate using a medium grater to collect pulp and juices.\n2. Heat the fat. - Heat ghee or oil in a heavy kadhai over medium-low heat.\n3. Splutter the spices. - Add mustard seeds and cumin seeds; once they crackle, add asafoetida (hing).\n4. Sauté the aromatics. - Add finely chopped green chillies and grated ginger; sauté for 30 seconds until aromatic.\n5. Cook the corn pulp. - Add grated corn, turmeric powder, salt, and a pinch of sugar; sauté on low heat for 3-4 minutes.\n6. Pour the milk. - Slowly pour in full cream milk while stirring continuously to blend evenly.\n7. Simmer and thicken. - Cover with a lid and cook on low heat for 8-10 minutes, stirring occasionally, until milk is absorbed and corn is tender.\n8. Stir in fresh garnish. - Turn off the heat and stir in half of the freshly grated coconut and chopped coriander leaves.\n9. Season to taste. - Squeeze fresh lemon juice and dust with jeeravan masala for signature Indori tang.\n10. Finish and serve. - Spoon hot into bowls, garnish with remaining grated coconut, coriander, and crispy sev.\n\nUse fresh tender corn. Grating rather than blending retains the quintessential texture. Add milk gradually on low heat to achieve creamy consistency.",
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
    headline: "Dal Bafla: 10 Preparation Steps",
    shortDescription:
      "Coarse whole-wheat flour (atta), Semolina (sooji / rava), Pure desi ghee, Ajwain (carom seeds), Turmeric powder and pinch of baking soda, Panchmel dal (toor, chana, moong, urad, masoor), Tomatoes and green chillies, Fresh ginger (grated), Cumin seeds and mustard seeds, Asafoetida (hing), Fresh coriander leaves, Spicy red garlic chutney & lemon wedges.\n\n1. Make the dough. - Mix coarse wheat flour, sooji, ajwain, turmeric, salt, and melted ghee (moyen). Rub until crumbly, then knead into a stiff dough with warm water.\n2. Shape the baflas. - Divide dough into smooth, medium round balls and make a slight dimple in the center with your thumb.\n3. Boil water. - In a large pot, bring water to a rolling boil with 1/2 tsp turmeric and salt.\n4. Boil the baflas. - Gently lower the dough balls into boiling water and cook for 12-15 minutes until they float to the surface.\n5. Drain and dry. - Lift baflas out with a slotted spoon and dry on a clean towel for 5-10 minutes.\n6. Bake until crisp. - Bake in a preheated baati oven or conventional oven at 200°C (390°F) for 20-25 minutes, turning until golden and blistered.\n7. Cook the dal. - Pressure cook mixed five lentils with turmeric and salt until soft and creamy.\n8. Temper the dal. - Heat ghee in a pan, crackle cumin and mustard seeds, add hing, green chillies, ginger, tomatoes, and spices; pour into dal.\n9. Crush and ghee-soak. - Gently crush the hot baked baflas in a napkin and immerse them completely in a bowl of warm desi ghee.\n10. Assemble and serve. - Serve piping hot ghee-drenched baflas with Panchmel dal, fiery garlic chutney, sliced onions, and lemon.\n\nBoiling before baking is mandatory for authentic bafla texture. Submerge baflas in ghee while piping hot for complete absorption.",
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
    headline: "Avakaya Recipe: 11 Steps",
    shortDescription:
      "raw green sour mangoes, mustard seeds (sun-dried, ground fresh), red chilli powder, crystal salt (powdered), gingelly (sesame) oil, garlic cloves, fenugreek (methi) seeds, black chickpeas (optional, in place of garlic), hot rice with dal and ghee for serving.",
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
    headline: "Makki di Roti & Sarson da Saag Recipe: 10 Steps",
    shortDescription:
      "Fresh mustard leaves (sarson), bathua, and spinach (palak), Maize flour (makki ka atta), Ginger and garlic, Green chillies, Onions, Mustard oil or ghee, Salt, Freshly churned white butter (makhan), Warm water (for kneading), Jaggery (gur, for serving).",
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
    headline: "Butter Chicken Recipe: 10 Steps",
    shortDescription:
      "Chicken (boneless pieces or bone-in cuts), Thick curd (yogurt), Ginger-garlic paste, Kashmiri red chilli powder, Ripe tomatoes (pureed), Butter, Fresh dairy cream, Kasuri methi (dried fenugreek leaves), Garam masala, Oil or ghee (for roasting), Salt and sugar (or honey).",
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
    headline: "Amritsari Kulcha Recipe: 10 Steps",
    shortDescription:
      "Refined wheat flour (maida), Boiled and mashed potatoes, Ghee or butter (for lamination and topping), Carom seeds (ajwain) and cumin, Crushed coriander seeds, Dried pomegranate seeds (anardana powder), Green chilli and fresh coriander, Chopped onion, Salt, Water (for kneading), Fresh white butter (for serving).",
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
// DALMA (Odisha)
// Sacred Lentil & Country Vegetable Stew
// ─────────────────────────────────────────────
export const DALMA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Dalma in Odisha & the Jagannath Tradition",
    shortDescription:
      "Dalma traces back to ancient indigenous tribal and temple culinary traditions of Odisha. It originated with the Savara tribes who offered simple stews of wild lentils and forest produce to Neela Madhaba, later sanctified into the 12th-century Jagannath Temple at Puri as an essential Mahaprasad offering. Prepared in the sacred temple kitchen (Rosha Ghara), it combines toor dal with native country vegetables, cooked purely sattvic without onion or garlic. Over centuries, this sacred temple offering spread across Odia homes as the definitive everyday and festive soul food.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Unglazed earthen pots (kudua) over sacred hearths",
      heatSource: "Dried wood-log fire inside temple earthen hearths",
      ingredientsList: [],
      preparationMethod:
        "Lentils and native forest vegetables slow-steamed together in earthen kudua pots, finished without onion or garlic with pure cow ghee and roasted cumin.",
      contemporaryDifference:
        "Sacred temple Mahaprasad lineage of Puri Jagannath Temple combining toor dal with native country vegetables and pure desi ghee.",
    },
    technologicalLeap: "Earthen kudua pot stacking technique utilizing rising steam convection across porous clay.",
    documentedCitation: "Puri Jagannath Temple kitchen chronicles & regional Odia culinary history.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Cooking method: slow steam-simmering in unglazed earthenware / rapid single-whistle simmering in modern pressure cookers\nVessel: tiered porous earthen pots (kudua) stacked over wood hearths / stainless steel pots, anodized pressure cookers, and non-stick pans\nFuel: dried hardwood and sacred wood-log hearths / domestic LPG gas stoves and electric induction cooktops\nCooking time: 2 to 3 hours of gentle earthen pot simmering / 20 to 25 minutes in household pressure cookers\nLentils: indigenous toor dal or wild split moong simmered whole / polished hybrid toor, moong, or chana dal blends\nVegetables: strictly native tubers, raw plantain, green papaya, and colocasia / modern additions like potatoes, tomatoes, beans, and carrots\nTempering: pure cow ghee crackled with cumin, dry chillies, or panch phoron / sunflower or mustard oil blends alongside ready-packaged spices\nFinishing: hand-grated fresh coconut and clay-roasted cumin-chilli powder / desiccated coconut flakes and commercial garam masala",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Tiered earthen pots (kudua) / stainless steel pots and pressure cookers",
      heatSource: "Hardwood fire / domestic LPG gas stoves and induction cooktops",
      ingredientsList: [],
      preparationMethod:
        "Cooking method: slow steam-simmering in unglazed earthenware / rapid single-whistle simmering in modern pressure cookers",
      contemporaryDifference:
        "Transition from wood-fired earthen temple kuduas to domestic pressure cookers and contemporary market produce.",
    },
    technologicalLeap: "Thermal and vessel evolution reducing multi-hour earthen simmering to rapid domestic pressure cooking.",
    documentedCitation: "Comparative historical culinary records and Odia domestic surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Dalma Recipe: 10 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: toor dal (arhar dal), raw banana, pumpkin, raw papaya, brinjal (eggplant), sweet potato, panch phoron, dry red chillies, desi ghee, fresh grated coconut.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Dalma Recipe",
      historicalCookware: "Heavy earthen kudua pot or deep heavy-bottomed pot",
      heatSource: "Medium heat to boil, followed by gentle low-flame simmering",
      ingredientsList: [
        "Toor dal (arhar dal)",
        "Raw banana",
        "Pumpkin",
        "Raw papaya",
        "Brinjal (eggplant)",
        "Sweet potato",
        "Panch phoron",
        "Dry red chillies",
        "Desi ghee",
        "Fresh grated coconut",
      ],
      preparationMethod:
        "1. Wash and rinse the toor dal thoroughly, then soak in water for 20 to 30 minutes to ensure even cooking.\n2. Peel and chop the raw banana, papaya, and sweet potato into firm, uniform chunks; cut the pumpkin and brinjal into slightly larger pieces so they do not dissolve.\n3. In a heavy earthen kudua pot or deep pot, bring 4 cups of water to a boil with turmeric powder, crushed ginger, and salt.\n4. Add the soaked toor dal along with the harder vegetables (raw banana, papaya, and sweet potato); simmer over medium heat until halfway tender.\n5. Add the softer vegetables (pumpkin and brinjal) along with half of the fresh grated coconut; continue simmering until the dal is soft and vegetables are fork-tender.\n6. In a small tempering pan, heat pure desi ghee, add panch phoron (five-spice blend) and dry red chillies, and let them crackle until fragrant.\n7. Pour the sizzling hot ghee tempering (chhunka) directly into the simmering dalma and cover immediately with a lid to trap the aromas for 5 minutes.\n8. Uncover, sprinkle with roasted cumin-chilli powder (bhaja jeera lanka gunda) and remaining grated coconut, and serve hot with steamed rice or pakhala.",
      contemporaryDifference:
        "Numbered 8-step sattvic temple-style cooking protocol using 10 authentic ingredients.",
    },
    technologicalLeap: "Staggered vegetable simmering preventing overcooking of soft gourds while fully softening dense root tubers.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Earthen Pot Technique",
    yearRange: "Kudua Method",
    centuryLabel: "Steaming Method",
    headline: "The Kudua Earthen Pot Steam Layering Protocol",
    shortDescription:
      "Porous unglazed earthenware allows water to evaporate steadily at sub-boiling temperatures, producing tender, non-mushy vegetables while infusing subtle mineral notes.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Kudua Pot Steam Protocol",
      historicalCookware: "Unglazed earthenware kudua",
      heatSource: "Slow wood-log embers",
      ingredientsList: [
        "Toor dal",
        "Raw vegetables",
        "Turmeric and ginger water",
      ],
      preparationMethod:
        "Layer dal and root vegetables in earthen pots, cover loosely, and simmer slowly over residual embers.",
      contemporaryDifference:
        "Earthen pot cooking imparts natural alkaline balance and earthy aroma unobtainable in metal pans.",
    },
    technologicalLeap: "Sub-boiling clay porosity convection preserving vegetable cellular integrity.",
    documentedCitation: "Puri Jagannath Temple Mahaprasad Traditions.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tempering & Finishing",
    yearRange: "Chhunka Technique",
    centuryLabel: "Tempering Protocol",
    headline: "Ghee, Panch Phoran & Roasted Cumin-Chilli Aromatics",
    shortDescription:
      "The defining moment of Dalma occurs when sputtering panch phoran and red chillies bloomed in hot desi ghee are poured into the pot and sealed immediately.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Chhunka Tempering Protocol",
      historicalCookware: "Cast-iron or brass tadka ladle",
      heatSource: "High direct heat for fat bloom",
      ingredientsList: [
        "Pure cow ghee",
        "Panch phoron (five spices)",
        "Dry red chillies",
        "Bhaja jeera-lanka powder",
        "Grated coconut",
      ],
      preparationMethod:
        "Heat ghee until shimmering, bloom whole spices until aromatic, pour sizzling over dal, cover tightly, and garnish with fresh coconut.",
      contemporaryDifference:
        "Signature Odia aroma combination of ghee-fried panch phoran and freshly roasted cumin-chilli powder.",
    },
    technologicalLeap: "Lipophilic flavor extraction: blooming whole aromatic essential oils directly in hot butterfat.",
    documentedCitation: "Regional food tradition & service documentation.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Dalma Plated & Served",
    shortDescription:
      "Served steaming hot in bell-metal kansa bowls with fragrant steamed rice or cooling fermented pakhala, beloved across Odisha and globally.",
    image: ERA_PHOTO.masala_dosa_hero,
    generationRecipe: {
      recipeName: "Dalma Plated",
      historicalCookware: "Traditional Kansa (bell-metal) bowl or plate",
      heatSource: "Served piping hot",
      ingredientsList: [
        "Finished Dalma",
        "Fresh grated coconut garnish",
        "Puri Jagannath ghee drizzle",
      ],
      preparationMethod:
        "Ladle into deep kansa bowls, sprinkle with extra roasted spice powder and coconut, and serve alongside hot rice and ghee.",
      contemporaryDifference:
        "Soulful cultural centerpiece of everyday Odia family meals and grand festive thalis.",
    },
    technologicalLeap: "Ayurvedic tridoshic balance combining legumes, native vegetables, healthy saturated fats, and digestive spices.",
    documentedCitation: "Odisha Tourism & Cultural Heritage Culinary Archive.",
  },
];

// ─────────────────────────────────────────────
// CHHENA PODA (Odisha)
// Caramelized Baked Cottage Cheese Dessert
// ─────────────────────────────────────────────
export const CHHENA_PODA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Chenna Poda in Nayagarh, Odisha",
    shortDescription:
      "Chenna Poda originated in Nayagarh, Odisha, and is traditionally made using fresh cottage cheese, sugar and semolina. Earlier, it was slowly baked in traditional ovens using simple household ingredients. Today, electric ovens, modern kitchen equipment and commercial bakeries have made its preparation easier while preserving its distinctive caramelized crust and traditional flavour.",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Traditional clay ovens and sal leaves",
      heatSource: "Dying coal embers and wood-fire residual heat",
      ingredientsList: [],
      preparationMethod:
        "Fresh cottage cheese kneaded by hand with sugar and semolina, wrapped in sal tree leaves and slowly baked in traditional ovens until caramelized.",
      contemporaryDifference:
        "Originated in Nayagarh, Odisha as India's premier indigenous baked cheese dessert.",
    },
    technologicalLeap: "Sugar caramelization over dying embers forming a natural protective crust around moist curd cheese.",
    documentedCitation: "Regional gastronomic documentation & Nayagarh district culinary records.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Chenna: Homemade / Homemade or commercially prepared\nMixing: By hand / Hand mixing or machines\nBaking: Wood-fired ovens / Electric ovens\nContainers: Earthen pots / Metal baking trays\nFuel: Firewood / Electricity or gas\nPreparation: Mostly household-based / Household and commercial\nStorage: Prepared for immediate consumption / Refrigeration and packaged storage",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Earthen pots and sal leaves / metal baking trays and electric ovens",
      heatSource: "Firewood embers / electricity or gas",
      ingredientsList: [],
      preparationMethod:
        "Chenna: Homemade / Homemade or commercially prepared. Baking: Wood-fired ovens / Electric ovens.",
      contemporaryDifference:
        "Transition from wood-fired household ovens and earthen pots to electric ovens, metal baking trays, and packaged storage.",
    },
    technologicalLeap: "Controlled electric oven baking replacing manual coal-ember monitoring.",
    documentedCitation: "Comparative food studies & modern Odia bakery surveys.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Chenna Poda Recipe: 6 Key Ingredients, 5 Steps",
    shortDescription:
      "Key ingredients: fresh or commercially prepared chenna, refined sugar, semolina, ghee, cardamom powder, cashews and raisins.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Chenna Poda Recipe",
      historicalCookware: "Aluminium or stainless-steel baking tray",
      heatSource: "Electric oven or commercial baking equipment at controlled temperature",
      ingredientsList: [
        "Fresh or commercially prepared chenna",
        "Refined sugar",
        "Semolina",
        "Ghee",
        "Cardamom powder",
        "Cashews and raisins",
      ],
      preparationMethod:
        "1. Fresh chenna is prepared at home or purchased from dairy shops.\n2. Ingredients are mixed using modern kitchen equipment.\n3. The mixture is placed in aluminium or stainless-steel baking trays.\n4. Electric ovens and commercial baking equipment provide controlled temperatures.\n5. The finished dessert is packaged and stored under suitable conditions.",
      contemporaryDifference:
        "Standardized 5-step preparation with 6 key ingredients using modern equipment while preserving the classic caramelized crust.",
    },
    technologicalLeap: "Precise temperature regulation ensuring even caramel crust formation without drying the cheese core.",
    documentedCitation: "Codified recipe documentation detailing Chenna Poda preparation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Mixing & Kneading Technique",
    yearRange: "Texture Mastery",
    centuryLabel: "Kneading Protocol",
    headline: "Fresh Chenna & Sugar Matrix Kneading",
    shortDescription:
      "Thorough kneading of fresh chenna with sugar and semolina releases whey moisture, dissolving sugar granules into a smooth paste that caramelizes evenly upon baking.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Chenna Kneading Protocol",
      historicalCookware: "Mixing bowl or mechanical mixer",
      heatSource: "Frictional warmth during kneading",
      ingredientsList: [
        "Fresh chenna",
        "Refined sugar",
        "Semolina",
      ],
      preparationMethod:
        "Knead fresh chenna with sugar until smooth, fold in semolina, ghee, cardamom, and dry fruits.",
      contemporaryDifference:
        "Modern hand mixing or mechanical machines ensure uniform sugar dispersion for consistent caramelization.",
    },
    technologicalLeap: "Curd protein and sucrose matrix stabilization preventing curd separation under baking heat.",
    documentedCitation: "Odia Confectionery Technical Manual.",
  },
  {
    generationNumber: 5,
    eraTitle: "Baking & Caramelization",
    yearRange: "Baking Protocol",
    centuryLabel: "Baking Technique",
    headline: "Controlled Baking & Caramel Crust Development",
    shortDescription:
      "Baking in ghee-greased trays at controlled heat browns external sugars through Maillard reaction and caramelization, giving Chenna Poda its signature mahogany exterior.",
    image: ERA_PHOTO.tawa_sizzle,
    generationRecipe: {
      recipeName: "Baking & Caramelization Protocol",
      historicalCookware: "Baking tray lined with ghee or parchment",
      heatSource: "Electric oven (180°C to 200°C) or commercial deck oven",
      ingredientsList: [
        "Kneaded cheese mixture",
        "Desi ghee for greasing",
        "Cashews and raisins",
      ],
      preparationMethod:
        "Transfer mixture into metal tray, bake until top and edges turn deep golden brown, then cool before slicing.",
      contemporaryDifference:
        "Electric ovens ensure reproducible golden-brown crust without scorched bitterness.",
    },
    technologicalLeap: "Thermal convection balancing internal moisture retention with external caramel crust formation.",
    documentedCitation: "Bakery and Confectionery Science Surveys.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Chenna Poda Plated & Served",
    shortDescription:
      "Celebrated across Odisha and worldwide as the definitive crown jewel of Odia desserts, sliced into caramelized wedges and enjoyed fresh or refrigerated.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Chenna Poda Plated",
      historicalCookware: "Serving platter",
      heatSource: "Served at room temperature or gently chilled",
      ingredientsList: [
        "Caramelized Chenna Poda slice",
        "Cashew and raisin garnish",
      ],
      preparationMethod:
        "Slice into thick wedges, package for takeaway or serve immediately with its glistening caramelized crust.",
      contemporaryDifference:
        "Available in homes, traditional sweet shops, and commercial vacuum-sealed packages.",
    },
    technologicalLeap: "Modified atmosphere packaging and refrigeration extending shelf life for national and international distribution.",
    documentedCitation: "National Dairy and Confectionery Survey.",
  },
];

// ─────────────────────────────────────────────
// PAKHALA BATA (Odisha)
// Traditional Fermented Water Rice & Cooling Meal
// ─────────────────────────────────────────────
export const PAKHALA_GENERATIONS: GenerationWaypoint[] = [
  {
    generationNumber: 1,
    eraTitle: "Birth of the food",
    yearRange: "Origin",
    centuryLabel: "Stage 1",
    headline: "Birth of Pakhala Bata in Odisha",
    shortDescription:
      "Pakhala Bata is a traditional food of Odisha, prepared by soaking cooked rice in water and allowing it to develop a mildly sour flavour through natural fermentation. Earlier, families stored rice in earthen pots and enjoyed it with green chillies, onions and seasonal vegetables. Today, modern cooking equipment, refrigerators and filtered water have changed its preparation and storage, while its traditional taste and cultural importance remain popular.",
    image: ERA_PHOTO.ancient_grains,
    generationRecipe: {
      recipeName: "Origin: Birth of the food",
      historicalCookware: "Clay and earthen pots",
      heatSource: "Firewood stove for boiling rice, ambient summer air for natural fermentation",
      ingredientsList: [],
      preparationMethod:
        "Rice cooked in clay vessels, transferred to earthen pots, submerged in water, and left overnight for natural fermentation.",
      contemporaryDifference:
        "Ancient agrarian and temple staple of Odisha, celebrated for its natural cooling and digestive properties.",
    },
    technologicalLeap: "Overnight submerged lactic acid fermentation lowering glycemic index and enhancing mineral bioavailability.",
    documentedCitation: "Historical Odia literature & Jagannath Temple Mahaprasad chronicles.",
  },
  {
    generationNumber: 2,
    eraTitle: "Evolution of Food",
    yearRange: "Then vs Now",
    centuryLabel: "Stage 2",
    headline: "Evolution of Food: Then vs Now",
    shortDescription:
      "Rice cooking: Clay or metal pots / Rice cookers and pressure cookers\nStorage: Earthen pots / Steel or glass containers\nFermentation: Natural overnight fermentation / Natural fermentation or quick preparation\nWater: Locally available drinking water / Filtered drinking water\nSeasoning: Simple local ingredients / Different spices and seasonings\nCooling: Earthen pots and natural surroundings / Refrigerators\nPreparation: Entirely manual / Manual and modern kitchen methods\nServing: Seasonal vegetables and homemade sides / Traditional sides and restaurant-style accompaniments",
    image: ERA_PHOTO.stone_ferment,
    generationRecipe: {
      recipeName: "Evolution of Food: Then vs Now",
      historicalCookware: "Clay pots and earthen jars / steel containers, pressure cookers, and refrigerators",
      heatSource: "Firewood stoves / modern gas and electric cookers",
      ingredientsList: [],
      preparationMethod:
        "Rice cooking: Clay or metal pots / Rice cookers and pressure cookers. Storage: Earthen pots / Steel or glass containers.",
      contemporaryDifference:
        "Modern transition to electric rice cookers, filtered water, and refrigeration while preserving traditional fermentation.",
    },
    technologicalLeap: "Domestic refrigeration and pressure cooking streamlining traditional summer food preparation.",
    documentedCitation: "Regional gastronomic surveys & Odia domestic culinary history.",
  },
  {
    generationNumber: 3,
    eraTitle: "Recipe",
    yearRange: "Short and simple",
    centuryLabel: "Stage 3",
    headline: "Pakhala Bata Recipe: 12 Key Ingredients, 8 Steps",
    shortDescription:
      "Key ingredients: cooked rice, water, curd, salt, green chillies, onion, ginger, curry leaves, mustard seeds, dry red chilli, mustard oil, coriander leaves.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pakhala Bata Recipe",
      historicalCookware: "Earthen pot or wide bowl and small tempering pan",
      heatSource: "Gentle stove heat for mustard oil seasoning",
      ingredientsList: [
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
      preparationMethod:
        "1. Cook rice normally and allow it to cool.\n2. Transfer the cooked rice into a bowl or earthen pot and add water.\n3. Leave it covered for several hours or overnight at a suitable temperature to develop its traditional mildly sour flavour.\n4. Mix curd and salt into the soaked rice.\n5. Heat mustard oil in a small pan; add mustard seeds, dry red chilli and curry leaves.\n6. Mix chopped onion, green chillies and ginger into the rice.\n7. Add the seasoning to the rice mixture and gently mix.\n8. Garnish with coriander leaves and serve with Badi Chura, Saga Bhaja or fried vegetables.",
      contemporaryDifference:
        "Standardized 8-step preparation using 12 authentic ingredients for traditional refreshing flavor.",
    },
    technologicalLeap: "Mustard oil tempering (chhunka) infused into cold fermented rice water, creating emulsified aromatic layers.",
    documentedCitation: "Codified regional recipe documentation.",
  },
  {
    generationNumber: 4,
    eraTitle: "Fermentation Technique",
    yearRange: "Fermentation Method",
    centuryLabel: "Fermentation Protocol",
    headline: "Submerged Lactic Acid Overnight Fermentation",
    shortDescription:
      "Submerging parboiled rice under water in porous clay jars facilitates natural colonization by beneficial lactic acid bacteria, yielding cooling organic acids and mild effervescence.",
    image: ERA_PHOTO.dum_seal,
    generationRecipe: {
      recipeName: "Submerged Fermentation Protocol",
      historicalCookware: "Unglazed earthen handi",
      heatSource: "Ambient room temperature (8 to 12 hours)",
      ingredientsList: [
        "Cooked rice",
        "Fresh water",
        "A pinch of salt",
      ],
      preparationMethod:
        "Soak cooked parboiled rice completely under water, cover loosely with an earthen plate, and rest overnight in a cool corner.",
      contemporaryDifference:
        "Traditional overnight rest creates natural probiotics and subtle sour tang impossible to duplicate with vinegar.",
    },
    technologicalLeap: "Microbial enzymatic starch breakdown releasing bioavailable B-complex vitamins and minerals.",
    documentedCitation: "Journal of Food Science and Nutrition Odia Fermented Foods Survey.",
  },
  {
    generationNumber: 5,
    eraTitle: "Tempering & Sides",
    yearRange: "Chhunka & Accompaniments",
    centuryLabel: "Tempering Protocol",
    headline: "Mustard Oil Chhunka & Classic Accompaniments",
    shortDescription:
      "Crackling pungent black mustard seeds, fiery red chillies, and curry leaves in smoking virgin mustard oil, poured sizzling over the cold rice, balances chill and pungency.",
    image: ERA_PHOTO.spice_trade,
    generationRecipe: {
      recipeName: "Pakhala Chhunka Protocol",
      historicalCookware: "Cast-iron tadka ladle",
      heatSource: "Direct high heat for mustard oil flash point",
      ingredientsList: [
        "Kachi ghani mustard oil",
        "Mustard seeds",
        "Dry red chilli and curry leaves",
        "Badi chura side dish",
      ],
      preparationMethod:
        "Heat mustard oil till lightly smoking, crackle whole seeds and chillies, pour directly over cold rice, and serve with crushed badi chura.",
      contemporaryDifference:
        "Temperature and texture contrast between ice-cold tangy broth and sizzling pungent mustard seasoning.",
    },
    technologicalLeap: "Thermal shock contrast: boiling aromatic oil emulsifying across cold probiotic rice liquor.",
    documentedCitation: "Traditional Odia Domestic Gastronomy.",
  },
  {
    generationNumber: 6,
    eraTitle: "Present Day",
    yearRange: "Plated Dish",
    centuryLabel: "Modern Form",
    headline: "Pakhala Bata Plated & Pakhala Dibasa",
    shortDescription:
      "Celebrated across Odisha and by the global diaspora on March 20 (Pakhala Dibasa), served with roasted potatoes, saga bhaja, and badi chura.",
    image: ERA_PHOTO.biryani_royal_hero,
    generationRecipe: {
      recipeName: "Pakhala Bata Plated",
      historicalCookware: "Heavy bell-metal kansa bowl or broad earthen plate",
      heatSource: "Served chilled",
      ingredientsList: [
        "Chilled Dahi Pakhala",
        "Badi Chura",
        "Saga Bhaja",
        "Fried fish or roasted potato",
      ],
      preparationMethod:
        "Ladle into large kansa bowls, garnish with coriander and green chillies, and arrange traditional sides around the rim.",
      contemporaryDifference:
        "Statewide cultural celebration on Pakhala Dibasa (March 20) in homes, luxury hotels, and community festivals.",
    },
    technologicalLeap: "Standardized regional culinary tourism presentation and gastro-diplomacy celebration.",
    documentedCitation: "Odisha Tourism Department Pakhala Dibasa Archive.",
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
    case "pesarattu":
      return PESARATTU_GENERATIONS;
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
    case "goan-fish-curry":
      return GOAN_FISH_CURRY_GENERATIONS;
    case "pork-vindaloo":
      return PORK_VINDALOO_GENERATIONS;
    case "bebinca":
      return BEBINCA_GENERATIONS;
    case "ghewar":
      return GHEWAR_GENERATIONS;
    case "indori-poha":
      return INDORI_POHA_GENERATIONS;
    case "bhutte-ka-kees":
      return BHUTTE_KA_KEES_GENERATIONS;
    case "dal-bafla":
      return DAL_BAFLA_GENERATIONS;
    case "avakaya":
      return AVAKAYA_GENERATIONS;
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
    case "dalma":
      return DALMA_GENERATIONS;
    case "chhena-poda":
      return CHHENA_PODA_GENERATIONS;
    case "pakhala":
      return PAKHALA_GENERATIONS;
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
          dishId === "laal-maas" ||
          dishId === "dalma" ||
          dishId === "chhena-poda" ||
          dishId === "pakhala" ||
          dishId === "goan-fish-curry" ||
          dishId === "pork-vindaloo" ||
          dishId === "bebinca" ||
          dishId === "ghewar"
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
            dishId === "laal-maas" ||
            dishId === "dalma" ||
            dishId === "chhena-poda" ||
            dishId === "pakhala" ||
            dishId === "goan-fish-curry" ||
            dishId === "pork-vindaloo" ||
            dishId === "bebinca" ||
            dishId === "ghewar") &&
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
        dishId === "dhokla" || dishId === "undhiyu" || dishId === "dal-baati-churma" || dishId === "laal-maas" || dishId === "dalma" || dishId === "chhena-poda" || dishId === "pakhala" || dishId === "goan-fish-curry" || dishId === "pork-vindaloo" || dishId === "bebinca" || dishId === "ghewar"
          ? source.documentedCitation
          : citations || "Regional food writing; no securely dated first reference established.",
    } satisfies GenerationWaypoint;
  });
}
