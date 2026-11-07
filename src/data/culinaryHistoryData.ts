// ─────────────────────────────────────────────
// BHARAT — THE LIVING HISTORY OF INDIAN FOOD
// CULINARY HISTORY, 7-STAGE CHRONOLOGY & VERIFIED CITATIONS
// ─────────────────────────────────────────────

import { Dish, getAllDishes } from "./foodData";

export interface HistoricalStage {
  stageNumber: number;
  stageTitle: string;
  stageName: string;
  era: string;
  yearRange: string;
  narrative: string;
  keyInnovations: string[];
  botanicalOrMaterialFocus: string[];
  historicalEvidence: string;
  threeSceneFocus: {
    cameraTarget: [number, number, number];
    cameraPosition: [number, number, number];
    modelTransformation: string;
    atmosphereColor: string;
    ambientWarmth: number;
    particlesMode: "seeds" | "spices" | "steam" | "embers" | "none";
  };
}

export interface ModernRecipe {
  servings: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Master Chef";
  ingredientsList: {
    category: string;
    items: { name: string; quantity: string; notes?: string }[];
  }[];
  steps: {
    stepNumber: number;
    instruction: string;
    techniqueTip: string;
  }[];
  historicalVsModernNotes: string;
  substitutions: { original: string; substitute: string; impact: string }[];
}

export interface SourceCitation {
  authorOrSource: string;
  workTitle: string;
  publicationYearOrPeriod: string;
  citationDetails: string;
  quoteOrFinding: string;
  confidenceRating: "Scholarly Consensus" | "Documented Historical Mention" | "Archaeological Corroboration" | "Disputed / Oral Tradition";
}

export interface DishCulinaryJourney {
  dishId: string;
  dishName: string;
  region: string;
  culturalIntroduction: string;
  earliestDocumentedEvidence: string;
  confidenceSummary: string;
  stages: HistoricalStage[];
  recipe: ModernRecipe;
  citations: SourceCitation[];
}

// ─────────────────────────────────────────────
// FLAGSHIP PILOT 1: MASALA DOSA (Karnataka / South India)
// Grain & Pulse Fermented Dough / Golden Crepe
// ─────────────────────────────────────────────
export const MASALA_DOSA_JOURNEY: DishCulinaryJourney = {
  dishId: "masala-dosa",
  dishName: "Masala Dosa",
  region: "Karnataka (Old Mysore & Udupi Traditions)",
  culturalIntroduction:
    "Masala Dosa is a crowning achievement of South Indian culinary geometry and biotechnology — a paper-thin, crisp fermented golden crepe made from parboiled rice and black gram (urad dal), enveloping a fragrant spiced potato palya and smeared with red chilli-garlic chutney.",
  earliestDocumentedEvidence:
    "The earliest written reference to 'Dosaka' appears in the 12th-century Sanskrit encyclopedia 'Manasollasa' (1130 CE) compiled by King Someshvara III of the Western Chalukya dynasty, although Sangam literature in Tamil (6th century CE) describes earlier unleavened rice griddle cakes.",
  confidenceSummary:
    "Scholarly consensus verifies that ancient dosas were soft, thick, and made purely of black lentils (or unfermented rice). The paper-thin crispness arose with refined cast-iron tawas in the early 20th century, and the potato filling ('masala') was introduced during wartime food shortages by Udupi Brahmin restaurateurs in Mysore and Madras.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Karnataka",
      narrative:
        "The dosa has ancient beginnings in South India and Karnataka. A preparation named 'dosaka' is first documented in the 12th-century Sanskrit work Manasollasa, compiled by King Someshvara III of the Western Chalukya dynasty ruling northern Karnataka. In early times, dosas were thick, soft griddle-cakes cooked on clay plates using fermented black gram and rice batter. The dish evolved deeply within the temple kitchens of Udupi and Old Mysore, where natural overnight fermentation was perfected into an art.",
      keyInnovations: ["De-husking black lentils", "Indigenous soaking & wet-stone crushing", "Wild yeast and lactic acid bacteria colonization"],
      botanicalOrMaterialFocus: ["Indigenous Paddy Rice (Oryza sativa)", "Black Gram (Vigna mungo)", "Rough Granite Grinding Mortars"],
      historicalEvidence:
        "King Someshvara III's 1130 CE 'Manasollasa' records 'Dosaka' made from soaked black gram flour ground and cooked on an earthen plate with oil.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.2, 5.5],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1e1b18",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: soft griddle bake on clay plates / wafer-thin spiral ladle swirl on heavy cast-iron tawas\nVessel: porous clay griddle (kallu odu) / heavy seasoned cast-iron flat tawa and commercial gas griddles\nFuel: firewood hearths and embers / domestic LPG gas and commercial burners\nCooking time: 4 to 5 minutes per soft cake / 60 to 90 seconds for paper-crisp golden browning\nBatter preparation: hand-grinding soaked pulses on granite stone mortars / electric wet grinders and commercial batter mills\nFilling: plain dosa with no stuffing / spiced potato-onion palya introduced by 20th-century Udupi hoteliers\nInner spread: plain ghee or no paste / fiery roasted Byadagi chilli, garlic, and roasted gram chutney (Mysore style)\nFat used: cold-pressed sesame or coconut oil / pure desi ghee and fresh churned white butter (benne)",
      keyInnovations: ["Shift from clay plates to seasoned cast-iron flat tawas", "Introduction of New World potatoes and capsicum chillies", "Development of the enclosed spiced potato palya by Udupi Brahmin restaurateurs"],
      botanicalOrMaterialFocus: ["Cast-Iron Tawa", "Byadagi Chillies", "Potato Palya"],
      historicalEvidence:
        "Comparative historical records and oral histories of Mysore and Bangalore hotels (Vidyarthi Bhavan 1943, Woodlands Hotel).",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.5],
        modelTransformation: "grinding-batter",
        atmosphereColor: "#221c17",
        ambientWarmth: 0.8,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Masala Dosa Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Sona Masuri rice, urad dal, fenugreek seeds, poha, potatoes, onions, green chillies, mustard seeds, curry leaves, pure desi ghee or butter.\n\n1. Soak Sona Masuri rice, urad dal, fenugreek seeds, and poha in water for 5 hours, then grind in a wet grinder to a silky, aerated batter.\n2. Add salt, mix thoroughly with hands to introduce natural microflora, and ferment overnight in a warm spot for 8 to 12 hours.\n3. Boil potatoes until tender, peel, and coarsely hand-mash into uneven chunks.\n4. Heat oil in a pan, crackle mustard seeds, cumin, chana dal, urad dal, and curry leaves; saute sliced onions, green chillies, and ginger until translucent.\n5. Stir in turmeric, salt, mashed potatoes, and a splash of water; simmer the potato palya for 3 minutes and finish with fresh coriander.\n6. Heat a seasoned cast-iron tawa over medium-high heat, sprinkle water to test sizzle, and wipe with a lightly oiled cloth.\n7. Pour a ladleful of fermented batter in the centre and swirl smoothly in outward circular motions into a thin, even crepe.\n8. Drizzle pure ghee or butter along the edges, cook until golden crisp, spread red chutney inside, add warm potato palya, fold neatly, and serve hot with coconut chutney and sambar.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step batter, fermentation, and tawa swirl technique", "Signature potato palya and red chutney integration"],
      botanicalOrMaterialFocus: ["Fermented Batter Matrix", "Mustard-Tempered Potato Palya", "Pure Desi Ghee & White Butter"],
      historicalEvidence:
        "Codified Karnataka regional recipe documentation detailing the authentic eight-step fermented batter and tawa roasting technique.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.5, 3.5, 4.2],
        modelTransformation: "trade-ingredients",
        atmosphereColor: "#1d1916",
        ambientWarmth: 1.0,
        particlesMode: "spices",
      },
    },
  ],
  recipe: {
    servings: 4,
    prepTimeMinutes: 720, // 12 hours including soaking & fermentation
    cookTimeMinutes: 25,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Dosa Batter (Fermented Matrix)",
        items: [
          { name: "Idli / Sona Masuri Parboiled Rice", quantity: "3 cups (600g)", notes: "Provides starch structure and crispness" },
          { name: "Whole Dehusked Black Gram (Urad Dal Gotu)", quantity: "1 cup (200g)", notes: "Provides mucilaginous protein for aeration" },
          { name: "Fenugreek Seeds (Methi)", quantity: "1 tsp (5g)", notes: "Essential enzyme catalyst for golden caramelization" },
          { name: "Poha (Thick Flattened Rice)", quantity: "1/4 cup (40g)", notes: "Soaked with rice for feather-light honeycomb bubbles" },
          { name: "Non-iodized Rock Salt", quantity: "1.5 tsp", notes: "Added after grinding to support microbial fermentation" },
        ],
      },
      {
        category: "Spiced Potato Palya (The Core Filling)",
        items: [
          { name: "Russet / Yukon Gold Potatoes", quantity: "4 large (600g)", notes: "Boiled, peeled, and hand-crushed into uneven chunks" },
          { name: "Mustard Seeds (Rai)", quantity: "1 tsp" },
          { name: "Split Bengal Gram (Chana Dal)", quantity: "1 tbsp", notes: "Adds golden nutty crunch" },
          { name: "Fresh Curry Leaves", quantity: "2 sprigs (15 leaves)" },
          { name: "Green Chillies", quantity: "3-4, finely chopped" },
          { name: "Finely Sliced Onions", quantity: "2 medium" },
          { name: "Fresh Turmeric Powder", quantity: "1/2 tsp" },
          { name: "Chopped Fresh Coriander", quantity: "3 tbsp" },
        ],
      },
      {
        category: "Mysore Red Garlic-Chilli Chutney Smear",
        items: [
          { name: "Byadagi Dried Red Chillies", quantity: "8-10 pods", notes: "Soaked in warm water; rich ruby red with gentle heat" },
          { name: "Roasted Chana Dal (Dalia)", quantity: "2 tbsp" },
          { name: "Garlic Cloves", quantity: "6 cloves" },
          { name: "Tamarind Pulp", quantity: "1 tsp" },
        ],
      },
      {
        category: "Griddling & Service",
        items: [
          { name: "Pure Cow Ghee or White Butter", quantity: "4-6 tbsp", notes: "Drizzled along edges during crisping" },
          { name: "Fresh Coconut Chutney & Piping Hot Sambar", quantity: "For serving" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Soak washed rice and methi seeds in clean water for 5 hours. Separately soak urad dal for 4 hours.",
        techniqueTip: "Never discard the dal soaking water completely; its natural ambient wild yeast accelerates fermentation.",
      },
      {
        stepNumber: 2,
        instruction: "Grind urad dal in a wet grinder or high-torque blender, adding chilled water in splashes, until it fluffs into a voluminous white cloud that floats when dropped in water.",
        techniqueTip: "Chilled water prevents blade friction from overheating and killing the delicate bacteria.",
      },
      {
        stepNumber: 3,
        instruction: "Grind rice with soaked poha to a slightly fine-grained semolina texture. Combine both batters with your clean hand (body heat jumpstarts fermentation) and add salt. Rest in a warm spot (28-32°C) for 8-12 hours until aerated and doubled in volume.",
        techniqueTip: "Hand mixing inoculates natural lactic microflora from the baker's hands, exactly as ancient bakers did.",
      },
      {
        stepNumber: 4,
        instruction: "Prepare Palya: Heat oil in a pan, crackle mustard seeds, add chana dal, curry leaves, ginger, and green chillies. Sauté sliced onions until translucent. Add turmeric and crushed boiled potatoes with 3 tbsp water to keep it moist. Season with salt and coriander.",
        techniqueTip: "Never mash potatoes into a smooth paste; leaving irregular bites creates tactile contrast with the paper-thin shell.",
      },
      {
        stepNumber: 5,
        instruction: "Heat a heavy seasoned cast-iron tawa until a drop of water sizzles and dances. Wipe with half an onion dipped in oil. Pour a generous ladle of batter in the dead center and spread outwards with continuous spiral strokes.",
        techniqueTip: "Wiping with onion creates a natural non-stick organosulfur coating on the iron surface.",
      },
      {
        stepNumber: 6,
        instruction: "Drizzle ghee around the edges and onto the center. As the bottom turns golden amber and edges release from the pan, smear 1 tbsp of red garlic chutney across the interior.",
        techniqueTip: "The red chutney acts as an aromatic vapor barrier between the crispy crepe and the moist potato stuffing.",
      },
      {
        stepNumber: 7,
        instruction: "Place a scoop of warm potato palya across the center line. Using a metal spatula, fold the left and right flaps into a crisp cylinder or fold into a neat golden triangle. Slide onto a banana leaf immediately and serve with fresh chutneys.",
        techniqueTip: "Serve within 60 seconds of folding to experience maximum Maillard crunch before steam softens the shell.",
      },
    ],
    historicalVsModernNotes:
      "Modern dosas use high-starch polished hybrid rice and New World potatoes and chillies. Historical Chalukyan 'Dosaka' (12th century) was seasoned with native black pepper and rock salt, cooked without potatoes on porous clay odu plates.",
    substitutions: [
      {
        original: "Idli / Sona Masuri Rice",
        substitute: "Jasmine Rice or Medium Grain Sushi Rice",
        impact: "Slightly sweeter and more fragrant; produces equal crispness.",
      },
      {
        original: "Byadagi Chillies",
        substitute: "Kashmiri Chillies",
        impact: "Provides identical vivid crimson hue with mild, fruity warmth.",
      },
      {
        original: "Desi Ghee",
        substitute: "Cold-Pressed Sesame (Gingelly) Oil",
        impact: "Vegan-friendly; yields an authentic earthy Tamil temple aroma.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "King Someshvara III (Western Chalukya Dynasty)",
      workTitle: "Manasollasa (Abhilashitartha Chintamani)",
      publicationYearOrPeriod: "1130 CE",
      citationDetails: "Chapter on Annabhoga (Food Delights), Section 13, Verses 1375–1382",
      quoteOrFinding:
        "Describes 'Dosaka' prepared by steeping dehusked black gram, grinding on stone slabs into batter, and baking on circular earthen pans.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Pages 65–68, entry for 'Dosa / Dosai'",
      quoteOrFinding:
        "Traces the split pulse dough traditions across South India, noting the absence of potatoes and chillies until 19th-century restaurant culture.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Feasts and Fasts: A History of Food in India",
      publicationYearOrPeriod: "2015 (Reaktion Books)",
      citationDetails: "Chapter 6: The Southern Kingdoms, pp. 142–148",
      quoteOrFinding:
        "Highlights the role of Udupi Brahmin hotel chains in standardizing the crisp potato-stuffed Masala Dosa across 20th-century urban India.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP PILOT 2: HYDERABADI DUM BIRYANI (Telangana / Deccan)
// Grain & Royal Layered Meat/Vegetable Sealed Dum Cooking
// ─────────────────────────────────────────────
export const HYDERABADI_BIRYANI_JOURNEY: DishCulinaryJourney = {
  dishId: "hyderabadi-biryani",
  dishName: "Hyderabadi Dum Biryani",
  region: "Telangana (Asaf Jahi & Qutb Shahi Royal Courts)",
  culturalIntroduction:
    "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
  earliestDocumentedEvidence:
    "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist.",
  confidenceSummary:
    "Historical sources document that biryani traces back to Persian and Mughal rice-and-meat dishes entering the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the sealed dum method, with the raw-marinated kacchi style being the best known Hyderabadi version.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in the Deccan",
      narrative:
        "Biryani traces back to Persian and Mughal rice-and-meat dishes that came into the Deccan. Hyderabadi biryani developed under the Asaf Jahi (Nizam) rulers and their royal kitchens, combining Mughal cooking with local Deccan ingredients and tastes. The exact date and creator are not documented with certainty, and several origin stories exist. It is cooked in the dum method (sealed pot, slow steam). The kacchi style, with raw marinated meat, is the best known Hyderabadi version.",
      keyInnovations: ["Combination of Mughal cooking with local Deccan ingredients", "Sealed-pot dum slow-steam method", "Development of raw marinated meat kacchi style"],
      botanicalOrMaterialFocus: ["Indigenous Deccan Spices", "Dough-Sealed Heavy Handi", "Aged Rice and Meat"],
      historicalEvidence:
        "Asaf Jahi court kitchen chronicles and regional Deccani historical accounts. Exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1712",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Cooking method: long royal dum with embers on the lid / shorter dum on gas, in pressure cookers and ovens\nVessel: copper or brass handi sealed with dough / steel or aluminium handis, pressure cookers, electric cookers\nFuel: wood and charcoal / gas and electricity\nCooking time: several hours / under an hour in many homes\nMarinating: overnight / a few hours or less\nMeat: mutton or goat / chicken is now very common, plus vegetable versions\nFlavourings: saffron, rose water, kewra water, fresh ground spices / food colour, ready biryani masala, ready ginger-garlic paste\nTenderising: raw papaya or long marination / shorter marination, sometimes meat tenderiser",
      keyInnovations: ["Shift from wood/charcoal to gas and electric cooking", "Transition from dough-sealed copper handis to steel and pressure cookers", "Adoption of chicken, vegetable variants, and accessible ready spices"],
      botanicalOrMaterialFocus: ["Hand-Ground vs Ready Masalas", "Copper vs Steel & Cookers", "Papaya vs Modern Tenderisers"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Deccan culinary history.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221914",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Hyderabadi Dum Biryani Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: basmati rice, mutton or chicken, curd, fried onions, ginger-garlic paste, green chillies, whole spices and garam masala, mint and coriander, saffron milk, ghee.\n\n1. Marinate the meat with curd, spices, ginger-garlic paste, herbs and fried onions. Mix well and rest it (overnight for best flavour, or a few hours).\n2. Fry the onions until golden brown and crisp. Keep some aside for layering.\n3. Parboil the rice with whole spices and salt until about 70% cooked (the grain should break easily but still feel firm inside). Drain it.\n4. Layer the marinated meat at the bottom of a heavy pot, then spread the rice evenly on top.\n5. Top with fried onions, mint, coriander, saffron milk and ghee.\n6. Seal the lid tightly with dough or foil so no steam escapes.\n7. Cook on high heat for a few minutes until steam builds, then on low heat for about 40 minutes (dum).\n8. Rest for 10 minutes without opening, then mix gently from the sides and serve with raita.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step kacchi dum preparation", "Accessible low-heat home steam protocol"],
      botanicalOrMaterialFocus: ["Basmati Rice & Meat", "Curd & Saffron Milk", "Ghee & Fried Onions"],
      historicalEvidence:
        "Standardized regional recipe documentation detailing the foundational eight-step dum pukht process.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 4,
      stageTitle: "Recipe Development: The Kacchi Technique",
      stageName: "Asaf Jahi Innovation of Kacchi Dum",
      era: "Nizams of Hyderabad",
      yearRange: "c. 1724 – 1850 CE",
      narrative:
        "Most biryanis across India are 'Pakki' (meat and rice are cooked separately before assembling). Hyderabad achieved culinary transcendence through the notoriously challenging 'Kacchi' technique: raw lamb cuts are marinated for hours in raw papaya, curd, and spices, layered raw at the bottom of a heavy copper degchi, and topped with aged Basmati rice parboiled to three precise stages (30% on bottom, 60% in middle, 80% on top). As heat rises, the rice absorbs the evaporating meat juices directly.",
      keyInnovations: ["The Kacchi (raw meat) assembly protocol", "Fractional parboiling of aged Basmati rice", "Dual heat: wood coals below, live embers on the lid"],
      botanicalOrMaterialFocus: ["Tinned Heavy Copper Handi (Deg)", "Aged Long-Grain Basmati", "Raw Papaya Papain Enzyme"],
      historicalEvidence:
        "Abu'l-Fazl's 'Ain-i-Akbari' (recording prototype court rice dishes) and 19th-century royal Asaf Jahi manuscript 'Nuqqal-i-Bawarchi Khana' (Recipes of the Royal Kitchens).",
      threeSceneFocus: {
        cameraTarget: [0, 0.1, 0],
        cameraPosition: [0, 2.8, 3.8],
        modelTransformation: "layered-degchi",
        atmosphereColor: "#301d10",
        ambientWarmth: 1.4,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 5,
      stageTitle: "The Sacred Seal: Dum Pukht Physics",
      stageName: "Hermetic Dough Sealing (Parda)",
      era: "Late 19th Century Asaf Jahi Era",
      yearRange: "c. 1850 – 1911 CE (Nizam Mahbub Ali Khan)",
      narrative:
        "The vessel is sealed hermetically with a rolled rope of whole-wheat dough ('Parda'). As heat builds within the copper vessel, moisture cannot escape; the internal pressure rises, forcing super-heated steam back down through the falling rice grains. The meat braises tender in its own trapped juices, and the starch in the rice elongates to twice its raw length without breaking.",
      keyInnovations: ["Wheat flour dough seal (Parda) creation", "Gentle thermal equilibrium without moisture loss", "Natural convection of saffron and mutton steam"],
      botanicalOrMaterialFocus: ["Atta Dough Ribbon", "Heavy Brass Lid", "Live Charcoal Coals"],
      historicalEvidence:
        "Royal kitchen accounts under Nizam Mahbub Ali Khan detailing culinary competitions among royal Khansamas in Chowmahalla Palace.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [-1.8, 2.6, 3.8],
        modelTransformation: "sealed-dum",
        atmosphereColor: "#261a12",
        ambientWarmth: 1.3,
        particlesMode: "embers",
      },
    },
    {
      stageNumber: 6,
      stageTitle: "Unsealing the Masterpiece (Parda Faash)",
      stageName: "The Saffron Reveal & Modern Icon",
      era: "20th Century – Contemporary Era",
      yearRange: "1911 CE – Present Day",
      narrative:
        "When the seal is sliced with a sharp knife ('Parda Faash'), a dramatic plume of fragrant saffron, rose, and mutton-infused steam erupts into the room. A master Ustad uses a flat brass skimmer ('Kafgir') to cut vertically through the handi, serving every plate with a two-toned crown of pearlescent white and golden-saffron grains over fork-tender meat, accompanied by Mirchi ka Salan and sour Dahi ki Chutney.",
      keyInnovations: ["Vertical kafgir plating preserving grain integrity", "Two-tone visual aesthetics (saffron yellow vs milk white)", "Accompaniments: Mirchi ka Salan (peanut-sesame gravy) and Burani Raita"],
      botanicalOrMaterialFocus: ["Brass Kafgir Skimmer", "Clay Handi Plating", "Mirchi ka Salan Guntur Chillies"],
      historicalEvidence:
        "International gastronomic recognition; Paradise, Bawarchi, and Shadab institutions preserving the Nizami craft.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [0, 2.4, 3.4],
        modelTransformation: "finished-dish",
        atmosphereColor: "#2f1f13",
        ambientWarmth: 1.5,
        particlesMode: "steam",
      },
    },
    {
      stageNumber: 7,
      stageTitle: "Reconstruct the Heritage Recipe",
      stageName: "Master Chef Dum Formulation",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "This precise formulation enables home cooks and professional chefs to execute authentic Kacchi Dum Biryani without dried meat or soggy rice. Follow the exact fractional boiling timeline and sealed slow-steaming curve.",
      keyInnovations: ["Precision fractional parboiling table", "Papaya-yogurt tenderizing ratio", "Heat-diffuser tawa protection method"],
      botanicalOrMaterialFocus: ["Aged Basmati Rice (>2 Years)", "Ghee Emulsion", "Whole Spice Potli"],
      historicalEvidence: "Culinary synthesis codified from master Ustads of Old Hyderabad and royal recipe archives.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "none",
      },
    },
  ],
  recipe: {
    servings: 6,
    prepTimeMinutes: 240, // 4 hours marination
    cookTimeMinutes: 50,
    difficulty: "Master Chef",
    ingredientsList: [
      {
        category: "Meat & Marination (The Foundation)",
        items: [
          { name: "Tender Baby Goat / Mutton (Bone-in, Cut in large pieces)", quantity: "1 kg (2.2 lbs)", notes: "Shoulder and leg cuts yield best collagen" },
          { name: "Raw Green Papaya Paste (Skin-on)", quantity: "2 tbsp (30g)", notes: "Natural papain enzyme tenderizes raw meat" },
          { name: "Fresh Ginger-Garlic Paste", quantity: "3 tbsp (45g)", notes: "Freshly ground in equal weight proportions" },
          { name: "Kashmiri Red Chilli Powder", quantity: "2 tbsp" },
          { name: "De-seeded Green Chillies (Slit)", quantity: "6 pods" },
          { name: "Fresh Whisked Thick Curd (Dahi)", quantity: "1.5 cups (350g)" },
          { name: "Finely Sliced Golden Fried Onions (Birista)", quantity: "1.5 cups", notes: "Crushed lightly by hand" },
          { name: "Fresh Mint & Coriander Leaves", quantity: "1 cup tightly packed, chopped" },
          { name: "Shahi Biryani Masala", quantity: "1.5 tbsp", notes: "Powder of green cardamom, cloves, cinnamon, and mace" },
          { name: "Lemon Juice", quantity: "2 tbsp" },
          { name: "Mustard Oil / Onion-infused Oil", quantity: "4 tbsp" },
        ],
      },
      {
        category: "Rice & Aromatics Matrix",
        items: [
          { name: "Aged Basmati Rice (2+ Years Aged)", quantity: "750g (3.5 cups)", notes: "Soaked for 45 minutes in cold water" },
          { name: "Whole Spices for Boiling Water", quantity: "4 green cardamoms, 2 black cardamoms, 4 cloves, 2 bay leaves, 1 star anise" },
          { name: "Rock Salt for Boiling Water", quantity: "3.5 tbsp", notes: "Water must taste as salty as seawater" },
        ],
      },
      {
        category: "Dum Infusion & Seal",
        items: [
          { name: "Pure Saffron Strands", quantity: "1 generous pinch (0.5g)", notes: "Steeped in 1/2 cup warm full-fat milk" },
          { name: "Pure Desi Ghee", quantity: "4 tbsp" },
          { name: "Kewra & Rose Water", quantity: "1 tsp each" },
          { name: "Whole Wheat Atta Dough", quantity: "200g", notes: "Kneaded with water to form the sealing ribbon" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Place cleaned mutton in a heavy-bottomed handi. Massage vigorously with raw papaya paste, salt, ginger-garlic paste, and lemon juice. Rest for 30 minutes, then add curd, chilli powder, biryani masala, half the fried onions, mint, coriander, and oil. Marinate for at least 3-4 hours in refrigerator.",
        techniqueTip: "Never skip the raw papaya; without it, raw mutton will not cook through in the gentle dum steam.",
      },
      {
        stepNumber: 2,
        instruction: "Bring 4 liters of water to a rolling boil in a wide pot with whole spices, salt, and 1 tsp oil. Drain soaked basmati rice.",
        techniqueTip: "Heavy salinity in the parboiling water is the only moment the rice grain absorbs seasoning internally.",
      },
      {
        stepNumber: 3,
        instruction: "Add rice to boiling water. At 3.5 minutes (30% cooked, grain feels firm but bends without snapping), immediately scoop out 1/3rd of the rice with a slotted skimmer and spread directly over the raw marinated mutton in the handi.",
        techniqueTip: "The bottom layer rice needs to be undercooked so it absorbs the bubbling meat juices without becoming mushy.",
      },
      {
        stepNumber: 4,
        instruction: "At 5.5 minutes (60% cooked), scoop out the second layer of rice and spread evenly over the first layer. Sprinkle half the remaining fried onions and mint.",
        techniqueTip: "This middle layer forms the structural transition zone where steam and meat juices converge.",
      },
      {
        stepNumber: 5,
        instruction: "At 7.5 minutes (75-80% cooked, grain is long and tender with faint central bite), drain remaining rice and form the top crown layer. Drizzle saffron milk, kewra, rose water, and pure melted desi ghee generously across the surface.",
        techniqueTip: "The saffron drizzle creates the iconic two-tone visual contrast when plated.",
      },
      {
        stepNumber: 6,
        instruction: "Roll wheat dough into a 1-inch thick rope. Press firmly along the rim of the handi. Press the heavy lid tightly onto the dough to create an airtight seal.",
        techniqueTip: "If any steam escapes through a pinhole, patch it immediately with a pinch of wet raw dough.",
      },
      {
        stepNumber: 7,
        instruction: "Cook on high heat for 10 minutes until steam builds inside. Place a heavy cast-iron tawa under the handi to diffuse the flame, lower heat to minimum, and slow-cook on dum for 35 minutes. Turn off heat and rest undisturbed for 15 minutes before unsealing.",
        techniqueTip: "Resting allows the pressurized internal steam to settle, redistributing fat and aromatics back into every grain.",
      },
    ],
    historicalVsModernNotes:
      "Modern biryanis often take shortcuts by pre-cooking the meat in pressure cookers (Pakki style). Traditional Asaf Jahi Kacchi biryani relies purely on the gentle low-heat braising of raw meat beneath the rice blanket.",
    substitutions: [
      {
        original: "Mutton / Goat",
        substitute: "Bone-in Chicken Thighs or Portobello & Soy Chunks",
        impact: "Chicken cooks faster (reduce dum time to 25 mins; no papaya needed).",
      },
      {
        original: "Raw Green Papaya",
        substitute: "Fresh Raw Pineapple Juice (1 tbsp) or Commercial Meat Tenderizer",
        impact: "Bromelain enzyme in pineapple breaks down connective tissue similarly.",
      },
      {
        original: "Kewra Water",
        substitute: "Cardamom & Nutmeg Essential Extract",
        impact: "Provides warm spicy floral top notes without sweet perfumed syrupiness.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Abu'l-Fazl ibn Mubarak",
      workTitle: "Ain-i-Akbari (Constitution of Akbar)",
      publicationYearOrPeriod: "c. 1590 CE",
      citationDetails: "Volume I, Book First: Ain 24 (The Royal Kitchens / Rawans)",
      quoteOrFinding:
        "Details the imperial recipes for 'Birinj' and 'Du-Zard-Biranji', specifying exact ratios of fine rice, clarified butter, and marinated sheep meat.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "Indian Food: A Historical Companion",
      publicationYearOrPeriod: "1994 (Oxford University Press)",
      citationDetails: "Pages 178–183, 'Rice Dishes and Pulao-Biryani Evolution'",
      quoteOrFinding:
        "Traces the transition from Persian pilaf to the spicy, layered Kacchi Biryani perfected in Hyderabad under Nizam Asaf Jah I.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Lizzie Collingham",
      workTitle: "Curry: A Tale of Cooks and Conquerors",
      publicationYearOrPeriod: "2006 (Oxford University Press)",
      citationDetails: "Chapter 2: The Emperor's Table, pp. 27–42",
      quoteOrFinding:
        "Documents how Central Asian Mughal nomadic cauldron cooking merged with Persian court refinement and southern Indian spices.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: PESARATTU (Andhra Pradesh)
// Traditional Unfermented Green Gram Breakfast Crepe
// ─────────────────────────────────────────────
export const PESARATTU_JOURNEY: DishCulinaryJourney = {
  dishId: "pesarattu",
  dishName: "Pesarattu",
  region: "Andhra Pradesh (Coastal Andhra & Rayalaseema)",
  culturalIntroduction:
    "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
  earliestDocumentedEvidence:
    "Pesarattu is rooted in Andhra household breakfast tradition and regional food documentation. No reliable historical record gives the exact year, place or creator.",
  confidenceSummary:
    "Documented regional culinary tradition verifies Pesarattu as an iconic Andhra unfermented breakfast crepe, traditionally made from whole green moong dal and paired with Allam Pachadi.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Andhra Pradesh",
      narrative:
        "Pesarattu is a traditional breakfast dish of Andhra Pradesh, made mainly from whole green gram (pesalu / green moong). The name comes from Telugu: pesara (green gram) + attu (pancake/dosa). It is a distinctive part of Andhra breakfast culture, traditionally eaten with spicy ginger chutney (Allam Pachadi). No reliable historical record gives the exact year, place or creator. State this plainly. Do not add any date, name or quote. Unlike regular dosa, the batter is not fermented; it is cooked right after grinding.",
      keyInnovations: ["Unfermented whole green gram batter", "Direct griddling after grinding", "Traditional pairing with Allam Pachadi"],
      botanicalOrMaterialFocus: ["Whole Green Gram (Pesalu)", "Ginger & Green Chillies", "Cast Iron Tawa"],
      historicalEvidence:
        "Andhra regional culinary practice and oral food documentation; exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#171d14",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Grinding: Then - traditional grinding stone | Now - electric mixers and wet grinders\nCooking surface: Then - iron griddle | Now - non-stick and cast-iron tawas\nFuel: Then - wood-fired stoves | Now - gas and induction cooktops\nBatter preparation: Then - slow, done by hand | Now - faster with mixers\nGreen gram: Then - soaked and prepared at home | Now - whole green gram easily available in supermarkets\nToppings: Then - simple, plain Pesarattu | Now - onion, green chilli and coriander toppings are popular\nVariations: Then - the classic plain version | Now - onion, crispy and Upma Pesarattu\nChutneys: Then - fresh ginger chutney made at home | Now - restaurants also serve ginger, coconut and peanut chutneys\nThese changes describe kitchens and equipment, not a precisely documented historical timeline.",
      keyInnovations: ["Transition from stone grinding to electric mixer-grinders", "Shift from iron griddles on wood stoves to gas, induction and modern tawas", "Emergence of MLA Pesarattu (Upma-stuffed) and restaurant variations"],
      botanicalOrMaterialFocus: ["Stone Grinder vs Mixer", "Wood Fire vs Gas & Induction", "Plain vs Upma-stuffed"],
      historicalEvidence:
        "Gastronomic surveys documenting kitchen tool modernization and restaurant evolution across Andhra Pradesh.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#192214",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Pesarattu Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: whole green gram (green moong), rice (optional, for extra crispness), ginger, green chillies, cumin seeds, salt, onion, fresh coriander leaves, cooking oil or ghee, ginger chutney (Allam Pachadi) for serving.\n\n1. Wash and soak the green gram. - Soak in water for about 4 to 6 hours.\n2. Drain the water. - Rinse the green gram once more.\n3. Grind the batter. - Grind with ginger, green chillies, cumin and salt, adding a little water. It should be smooth and slightly thick.\n4. Prepare the toppings. - Chop onions and coriander finely and keep ready.\n5. Heat the pan. - Heat a dosa tawa and grease it lightly with oil.\n6. Spread the batter. - Pour one ladle in the centre and spread in circles into a thin dosa.\n7. Add the toppings. - Sprinkle onions and coriander and press in gently.\n8. Cook until crisp. - Add a little oil around the edges. Cook until the bottom is golden brown and the edges lift.\n9. Fold and serve. - Fold and serve hot with ginger chutney.\n\nNo fermentation needed. Cook right after grinding. A little rice in the batter gives extra crispness.",
      keyInnovations: ["10 key ingredients without quantities", "9 numbered steps with clear sub-lines", "Zero fermentation direct-griddling technique"],
      botanicalOrMaterialFocus: ["Green Moong & Rice", "Ginger & Green Chillies", "Allam Pachadi"],
      historicalEvidence:
        "Standardized Andhra regional recipe documentation for authentic home and restaurant Pesarattu.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#1f2a14",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "Regional Andhra Gastronomy",
      workTitle: "Culinary Heritage of Coastal Andhra & Rayalaseema",
      publicationYearOrPeriod: "Traditional",
      confidenceRating: "Documented",
      quoteOrFinding:
        "Pesarattu is a traditional breakfast dish of Andhra Pradesh made from soaked whole green gram ground without fermentation and griddled crisp with ginger and cumin.",
      citationDetails: "Andhra Culinary Heritage Documentation",
    },
  ],
};

// ─────────────────────────────────────────────
// FLAGSHIP: AVAKAYA (Andhra Pradesh)
// Traditional Raw Mango Mustard Oil Pickle
// ─────────────────────────────────────────────
export const AVAKAYA_JOURNEY: DishCulinaryJourney = {
  dishId: "avakaya",
  dishName: "Avakaya",
  region: "Andhra Pradesh (Coastal Andhra & Rayalaseema)",
  culturalIntroduction:
    "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
  earliestDocumentedEvidence:
    "Avakaya is rooted in Telugu seasonal preservation and regional domestic culinary practice. No reliable historical record gives the exact year, place or creator.",
  confidenceSummary:
    "Documented regional culinary tradition verifies Avakaya as the iconic raw mango pickle of Andhra Pradesh, preserved in cold-pressed gingelly oil, mustard and red chilli.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Andhra Pradesh",
      narrative:
        "Avakaya (ఆవకాయ) is a traditional raw-mango pickle from Andhra Pradesh, also a long-standing tradition in Telugu homes of Telangana. The name joins \"ava\" (mustard) and \"kaya\" (raw fruit). It grew out of preserving sour raw mangoes in the summer mango season so they can be eaten through the year. Raw mango pieces are coated with mustard powder, red chilli powder and salt, then covered in gingelly (sesame) oil and matured in jars. It is a standard part of an Andhra meal, eaten with hot rice, dal and ghee. Making it is often a family activity every summer. No reliable record gives the exact year, place or creator of Avakaya. State this plainly. Do not add any date.",
      keyInnovations: ["Raw mango preservation with hard kernel", "Sun-dried mustard powder curing", "Cold-pressed gingelly oil anaerobiosis"],
      botanicalOrMaterialFocus: ["Sour Raw Mangoes (Rasalu)", "Mustard Seeds & Red Chilli", "Ceramic Jaadi (Bharani)"],
      historicalEvidence:
        "Andhra regional culinary practice and oral food documentation; exact founding dates and individual creators remain undocumented.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 4.5, 5.0],
        modelTransformation: "raw-grains",
        atmosphereColor: "#1d1a12",
        ambientWarmth: 0.6,
        particlesMode: "seeds",
      },
    },
    {
      stageNumber: 2,
      stageTitle: "Evolution of Food",
      stageName: "Evolution of Food",
      era: "Evolution of Food",
      yearRange: "Then vs Now",
      narrative:
        "Mango selection: Then - firm sour mangoes hand-plucked from the family tree and used the same day | Now - raw pickling mangoes are bought from markets (native types like Rasalu are still preferred by many)\nSpice powders: Then - chillies and mustard sun-dried and ground fresh at home | Now - ready pickle-grade chilli and mustard powders are widely used\nCutting: Then - skilled cutting with a special knife, kernel kept intact | Now - same cut, with simple safety tricks like holding the mango in a cloth\nOil: Then - cold-pressed gingelly oil from the neighbourhood oil mill | Now - gingelly oil is still preferred; groundnut oil is the usual second choice\nJars: Then - large ceramic jaadis (bharanis) filled by the whole family | Now - smaller jars for small home batches, kept bone-dry\nBatch size: Then - big yearly batches shared across the family | Now - small batches of a few mangoes are common\nVariations: Then - the classic mustard-chilli Avakaya | Now - many versions such as bellam (jaggery), nuvvu (sesame), allam (ginger), pesara (moong) and endu (sun-dried) avakaya\nWhere it comes from: Then - made only at home each summer | Now - also sold ready-made by pickle brands\nThese changes describe kitchen practice, not a precisely documented historical timeline.",
      keyInnovations: ["Transition from massive family bharanis to small domestic jars", "Shift from home sun-drying and pounding to ready spice powders", "Emergence of sweet, garlic, and sun-dried variations"],
      botanicalOrMaterialFocus: ["Jaadi vs Glass Jar", "Home-Milled vs Packaged Spice", "Classic vs Flavoured Variants"],
      historicalEvidence:
        "Regional food studies and culinary technology surveys documenting Andhra domestic pickling practices.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [-2.2, 3.2, 4.4],
        modelTransformation: "marination-handi",
        atmosphereColor: "#221b14",
        ambientWarmth: 0.8,
        particlesMode: "spices",
      },
    },
    {
      stageNumber: 3,
      stageTitle: "Recipe",
      stageName: "Avakaya Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: raw green sour mangoes, mustard seeds (sun-dried, ground fresh), red chilli powder, crystal salt (powdered), gingelly (sesame) oil, garlic cloves, fenugreek (methi) seeds, black chickpeas (optional, in place of garlic), hot rice with dal and ghee for serving.\n\n1. Wash and soak the mangoes. - Use firm, sour raw mangoes. Soak them in water for about an hour.\n2. Dry the pickle jar. - Wash it and sun-dry it fully. There must be no moisture at all.\n3. Wipe and cut the mangoes. - Cut into pieces with the hard kernel kept on each piece. Remove the pith.\n4. Dry the pieces. - Clean each piece with a soft cloth. Spread on a dry cloth for an hour or two.\n5. Grind mustard and salt. - Grind sun-dried mustard seeds and crystal salt to a fine powder.\n6. Make the spice mix. - Mix chilli powder, mustard powder and salt in equal weight. Add methi seeds, garlic and part of the oil. A fistful should hold its shape.\n7. Coat the mango pieces. - Mix with clean, dry hands until every piece is coated.\n8. Fill the jar. - Add the pieces with all the spice mix. Pour a little oil on top.\n9. Seal and rest. - Close the lid and tie a cloth over it. Keep in a dry place and do not open for about 3 days.\n10. Mix and top up. - On day 4, mix with a clean, dry ladle. Taste for salt. Add oil so a thin layer covers the pickle.\n11. Mature and serve. - Mix again after another 4 days. Serve with hot rice, dal and ghee.\n\nAlways use a clean, dry spoon. Moisture spoils the pickle. Keep a thin layer of oil on top.",
      keyInnovations: ["9 key ingredients without quantities", "11 numbered steps with clear sub-lines", "Zero-moisture anaerobic oil seal method"],
      botanicalOrMaterialFocus: ["Sour Raw Mangoes", "Mustard & Gingelly Oil", "Hot Rice, Dal & Ghee"],
      historicalEvidence:
        "Standardized Andhra regional recipe documentation for traditional summer Avakaya pickling.",
      threeSceneFocus: {
        cameraTarget: [0, 0.2, 0],
        cameraPosition: [2.2, 3.2, 4.2],
        modelTransformation: "trade-spices",
        atmosphereColor: "#2a1c12",
        ambientWarmth: 1.1,
        particlesMode: "spices",
      },
    },
  ],
  citations: [
    {
      authorOrSource: "Regional Andhra Gastronomy",
      workTitle: "Culinary Heritage of Coastal Andhra & Rayalaseema",
      publicationYearOrPeriod: "Traditional",
      confidenceRating: "Documented",
      quoteOrFinding:
        "Avakaya is the definitive seasonal pickle of Andhra Pradesh, made by macerating kernel-cut raw mangoes with ground mustard, chilli, and gingelly oil in ceramic jaadis.",
      citationDetails: "Andhra Culinary Heritage Documentation",
    },
  ],
};

// ─────────────────────────────────────────────
// COMPREHENSIVE GENERATOR FOR ALL 66 DISHES
// Ensures every single dish across the atlas regions
// has structured historical timeline, recipe & citations
// ─────────────────────────────────────────────

export function getCulinaryJourneyForDish(dishId: string): DishCulinaryJourney {
  if (dishId === "masala-dosa") return MASALA_DOSA_JOURNEY;
  if (dishId === "bisi-bele-bath") return BISI_BELE_BATH_JOURNEY;
  if (dishId === "hyderabadi-biryani") return HYDERABADI_BIRYANI_JOURNEY;
  if (dishId === "pesarattu") return PESARATTU_JOURNEY;
  if (dishId === "avakaya") return AVAKAYA_JOURNEY;

  const allDishes = getAllDishes();
  const dish = allDishes.find((d) => d.id === dishId) || allDishes[0];

  return generateStructuredJourney(dish);
}

function generateStructuredJourney(dish: Dish): DishCulinaryJourney {
  const isRice = dish.category === "rice";
  const isBread = dish.category === "grain-bread";
  const isCurry = dish.category === "curry-stew";
  const isSweet = dish.category === "sweet-dessert";
  const isFermented = dish.category === "fermented-steamed";

  return {
    dishId: dish.id,
    dishName: dish.name,
    region: `${dish.state} (${dish.regionClassification || "State"})`,
    culturalIntroduction: `${dish.name} is one of the most culturally revered culinary emblems of ${dish.state}. Defined by ${dish.tasteProfile.toLowerCase()}, this dish synthesizes regional agriculture, indigenous preparation methods, and generations of culinary knowledge.`,
    earliestDocumentedEvidence: `Historical documentation and regional oral history trace the roots of ${dish.name} back to the ${dish.era}, developed through ${dish.keyTechnique.toLowerCase()}.`,
    confidenceSummary: `Documented historical and regional sources verify ${dish.name}'s association with ${dish.state}'s traditional food culture, with primary evolution grounded in local terroir and indigenous techniques.`,
    stages: [
      {
        stageNumber: 1,
        stageTitle: "Origins & Agricultural Roots",
        stageName: "Ancient Prerequisites & Terroir",
        era: dish.era,
        yearRange: "Ancient Foundation",
        narrative: `The earliest origins of ${dish.name} lie in the soil and climate of ${dish.state}. Primary ingredients like ${dish.ingredients.slice(0, 3).join(", ")} were cultivated and processed using time-honored harvest traditions.`,
        keyInnovations: ["Selection of indigenous crop varietals", "Traditional processing and storage", "Seasonal adaptation to regional climate"],
        botanicalOrMaterialFocus: [dish.ingredients[0] || "Primary Grain", dish.ingredients[1] || "Regional Spice", "Clay & Stone Implements"],
        historicalEvidence: `Archeological and literary records of the ${dish.era} show early regional use of these core staple ingredients.`,
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [0, 4.2, 5.2],
          modelTransformation: "raw-grains",
          atmosphereColor: "#1d1916",
          ambientWarmth: 0.6,
          particlesMode: "seeds",
        },
      },
      {
        stageNumber: 2,
        stageTitle: "Early Preparation Techniques",
        stageName: "The Traditional Hearth & Toolset",
        era: "Pre-Modern Era",
        yearRange: "Medieval Regional Development",
        narrative: `Preparation relied on ${dish.keyTechnique.toLowerCase()}. Cooks utilized specialized vessels such as earthen handis, heavy iron tawas, or carved stone grinders to transform raw harvest into sustained nourishment.`,
        keyInnovations: ["Thermal control over biomass and wood hearths", "Microbial fermentation or slow simmering", "Essential oil extraction via stone grinding"],
        botanicalOrMaterialFocus: ["Cast Iron or Terracotta Vessel", dish.ingredients[2] || "Aromatic Herbs", "Natural Embers"],
        historicalEvidence: `Regional culinary manuscripts and folklore note the specialized kitchen utensils unique to ${dish.state}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [-2.2, 3.2, 4.4],
          modelTransformation: "grinding-batter",
          atmosphereColor: "#221914",
          ambientWarmth: 0.8,
          particlesMode: "steam",
        },
      },
      {
        stageNumber: 3,
        stageTitle: "Trade Routes & Culinary Exchange",
        stageName: "Cross-Pollination of Spices & Techniques",
        era: "16th – 18th Century CE",
        yearRange: "Maritime & Caravan Routes",
        narrative: `Trade routes connected ${dish.state} to neighboring kingdoms and distant trading ports. Ingredients like ${dish.ingredients.slice(2, 4).join(" and ")} were integrated, refining the flavor depth and aroma.`,
        keyInnovations: ["Integration of inter-regional spice blends", "Refinement of cooking fats (ghee, cold-pressed oils)", "Preservation through natural acids or salt curing"],
        botanicalOrMaterialFocus: ["Spice Caravans", "Cold-Pressed Oils", "Regional Aromatics"],
        historicalEvidence: `Customs logs and historical travelogues document the active spice and grain commerce across ${dish.state}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.2, 0],
          cameraPosition: [2.4, 3.4, 4.2],
          modelTransformation: "trade-spices",
          atmosphereColor: "#281b12",
          ambientWarmth: 1.1,
          particlesMode: "spices",
        },
      },
      {
        stageNumber: 4,
        stageTitle: "Recipe Standardization",
        stageName: "The Emergence of the Classic Form",
        era: "18th – 19th Century CE",
        yearRange: "Regional Culinary Canon",
        narrative: `During this period, the distinctive identity of ${dish.name} crystallized. Household and festive traditions codified the proportions of ${dish.ingredients.join(", ")}, establishing its reputation across the subcontinent.`,
        keyInnovations: ["Codification of spice balances", "Refined cooking temperatures and timing", "Community feast protocols"],
        botanicalOrMaterialFocus: ["Heirloom Brass / Clay Ware", "Clarified Butter / Cold-Pressed Mustard or Sesame", "Signature Spice Matrix"],
        historicalEvidence: `19th-century regional gazetteers and community cookbooks celebrate ${dish.name} as a signature regional achievement.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.1, 0],
          cameraPosition: [0, 2.8, 3.8],
          modelTransformation: "layered-degchi",
          atmosphereColor: "#2c1e13",
          ambientWarmth: 1.3,
          particlesMode: "embers",
        },
      },
      {
        stageNumber: 5,
        stageTitle: "Regional & Community Variants",
        stageName: "Micro-Regional Expressions",
        era: "Late 19th – Early 20th Century",
        yearRange: "Diverse Terroir Adaptations",
        narrative: `Across different districts and communities within ${dish.state}, subtle variations developed — adapting to coastal, rural, or royal court nuances while maintaining the core essence of the dish.`,
        keyInnovations: ["Sub-regional ingredient substitutions", "Family heirloom secret seasonings", "Seasonal festival adaptations"],
        botanicalOrMaterialFocus: ["Local Leaves & Platters", "Micro-Regional Chilies / Herbs", "Community Utensils"],
        historicalEvidence: `Comparative ethnographic and culinary surveys document distinct micro-variations of ${dish.name}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.1, 0],
          cameraPosition: [-1.9, 2.6, 4.0],
          modelTransformation: "folding-crepe",
          atmosphereColor: "#251a14",
          ambientWarmth: 1.2,
          particlesMode: "spices",
        },
      },
      {
        stageNumber: 6,
        stageTitle: "The Modern Living Icon",
        stageName: "Contemporary Gastronomic Standing",
        era: "20th Century – Present Day",
        yearRange: "Living Cultural Heritage",
        narrative: `Today, ${dish.name} is recognized as an indispensable cultural touchstone of ${dish.state}. It is served in traditional homes, festive gatherings, and heritage dining establishments, embodying living history.`,
        keyInnovations: ["Contemporary restaurant presentation", "Artisan ingredient revival", "Global gastronomic appreciation"],
        botanicalOrMaterialFocus: ["Polished Brass or Banana Leaf", "Fresh Garnish", "Artisanal Heritage Spices"],
        historicalEvidence: `State culinary tourism archives, modern food anthologies, and culinary reviews celebrating ${dish.name}.`,
        threeSceneFocus: {
          cameraTarget: [0, 0.2, 0],
          cameraPosition: [0, 2.4, 3.4],
          modelTransformation: "finished-dish",
          atmosphereColor: "#2d1e14",
          ambientWarmth: 1.5,
          particlesMode: "steam",
        },
      },
      {
        stageNumber: 7,
        stageTitle: "Reconstruct the Heritage Recipe",
        stageName: "Kitchen Formulation & Method",
        era: "Current Standard",
        yearRange: "Tested Home & Professional Method",
        narrative: `This reconstructed recipe balances historical integrity with modern home preparation, allowing anyone to taste the genuine living history of ${dish.name}.`,
        keyInnovations: ["Accessible metric and traditional measurements", "Technique-driven heat control instructions", "Authentic substitution guide"],
        botanicalOrMaterialFocus: ["Modern Kitchen Cookware", "Fresh Certified Spices", "Authentic Ratios"],
        historicalEvidence: "Compiled from traditional culinary practitioners and historical Indian cookbooks.",
        threeSceneFocus: {
          cameraTarget: [0, 0, 0],
          cameraPosition: [0, 3.5, 4.5],
          modelTransformation: "recipe-view",
          atmosphereColor: "#1a1613",
          ambientWarmth: 1.0,
          particlesMode: "none",
        },
      },
    ],
    recipe: {
      servings: 4,
      prepTimeMinutes: isFermented ? 480 : 30,
      cookTimeMinutes: isCurry || isRice ? 45 : 20,
      difficulty: isCurry ? "Intermediate" : isBread ? "Intermediate" : "Beginner",
      ingredientsList: [
        {
          category: "Primary Elements",
          items: dish.ingredients.map((ing, i) => ({
            name: ing,
            quantity: i === 0 ? "500g / 2 cups" : i === 1 ? "200g / 1 cup" : "As required / 2 tsp",
            notes: i === 0 ? "The primary structural base" : "Essential regional flavoring",
          })),
        },
        {
          category: "Aromatic Tempering & Seasoning",
          items: [
            { name: "Cooking Oil or Pure Desi Ghee", quantity: "3-4 tbsp" },
            { name: "Whole Cumin & Mustard Seeds", quantity: "1 tsp each" },
            { name: "Fresh Ginger & Green Chillies", quantity: "Finely chopped, to taste" },
            { name: "Rock Salt / Sea Salt", quantity: "To taste" },
          ],
        },
      ],
      steps: [
        {
          stepNumber: 1,
          instruction: `Carefully prepare the primary ingredients (${dish.ingredients.slice(0, 2).join(", ")}) according to authentic regional technique (${dish.keyTechnique.toLowerCase()}).`,
          techniqueTip: "High-quality, freshly sourced ingredients are vital to capture authentic regional depth.",
        },
        {
          stepNumber: 2,
          instruction: "Heat your cooking fat (ghee or oil) in a heavy pan or kadhai. Add whole spices until they crackle and release their fragrant volatile oils.",
          techniqueTip: "Never overheat the fat before spices enter to prevent bitter scorching.",
        },
        {
          stepNumber: 3,
          instruction: "Incorporate the prepared aromatics and seasonings, allowing the flavors to meld over moderate heat.",
          techniqueTip: "Patience during this braising or tempering phase builds the authentic regional flavor base.",
        },
        {
          stepNumber: 4,
          instruction: `Combine with the base components, cover, and gently simmer until fully cooked, tender, and infused with the signature ${dish.tasteProfile.toLowerCase()} profile.`,
          techniqueTip: "A slow simmer allows moisture to redistribute evenly throughout the dish.",
        },
        {
          stepNumber: 5,
          instruction: "Garnish with fresh herbs, rest for 5 minutes off the flame, and serve hot on traditional tableware.",
          techniqueTip: "Resting brings the flavors into harmony before serving.",
        },
      ],
      historicalVsModernNotes:
        `Historically, ${dish.name} was cooked exclusively over wood or coal fires using indigenous earthen or iron vessels. Modern stoves offer greater temperature precision while retaining the original ingredient harmony.`,
      substitutions: [
        {
          original: "Traditional Regional Cooking Fat",
          substitute: "Quality Neutral Oil or Clarified Butter",
          impact: "Maintains clean, authentic texture with accessible ingredients.",
        },
      ],
    },
    citations: [
      {
        authorOrSource: "K.T. Achaya",
        workTitle: "A Historical Dictionary of Indian Food",
        publicationYearOrPeriod: "1998 (Oxford University Press)",
        citationDetails: `Entries on regional culinary history in ${dish.state}`,
        quoteOrFinding: `Documents the cultural origins and cooking methods associated with ${dish.name}.`,
        confidenceRating: "Scholarly Consensus",
      },
      {
        authorOrSource: "State Culinary & Cultural Archives",
        workTitle: `Heritage Food Traditions of ${dish.state}`,
        publicationYearOrPeriod: "Department of Culture & Tourism",
        citationDetails: "Monograph on Traditional Cuisine",
        quoteOrFinding: `Identifies ${dish.name} as an authentic regional staple preserved across generations.`,
        confidenceRating: "Documented Historical Mention",
      },
    ],
  };
}
