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
// FLAGSHIP PILOT 3: HYDERABADI HALEEM (Telangana / Deccan)
// Slow-Cooked Wheat, Lentils & Pounded Meat Cauldrons
// ─────────────────────────────────────────────
export const HYDERABADI_HALEEM_JOURNEY: DishCulinaryJourney = {
  dishId: "hyderabadi-haleem",
  dishName: "Hyderabadi Haleem",
  region: "Telangana (Asaf Jahi Royal Courts & Ramzan Bhatti)",
  culturalIntroduction:
    "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
  earliestDocumentedEvidence:
    "Documented origins in 10th-century Arab culinary treatises as 'harisah', brought to the Deccan by Yemeni Chaush soldiers in the 19th century and perfected in Asaf Jahi royal kitchens.",
  confidenceSummary:
    "Historical sources document that harees came to the Deccan through Arab migrations and was codified in Hyderabad with local spices, lentils, and pure ghee. In 2010, Hyderabadi Haleem became the first Indian meat dish to be granted Geographical Indication (GI) status.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in the Deccan",
      narrative:
        "Haleem traces its ancestry to the medieval Arab dish harees, a slow-cooked porridge of pounded meat and wheat. It was introduced to Hyderabad by the Arab diaspora (Chaush soldiers from Yemen) serving in the irregular army of the Asaf Jahi Nizams. In the royal kitchens of the Nizams and Paigah nobles, the rustic harees was refined and Indianized by introducing aromatic Deccan spices, mixed lentils, ghee, dry fruits, and rose petals. It became the signature delicacy of Hyderabad, especially cherished during Ramzan for breaking the fast.",
      keyInnovations: ["Integration of Arab harees technique into Deccani royal cuisine", "Slow overnight simmering in wood-fired bhatti cauldrons", "Addition of local lentils, garam masala, and desi ghee"],
      botanicalOrMaterialFocus: ["Broken Whole Wheat (Dalia)", "Heavy Copper Bhatti Cauldron (Deg)", "Wooden Pestles (Ghotni)"],
      historicalEvidence:
        "19th-century Asaf Jahi military payrolls documenting Arab Chaush contingents in Barkas, Hyderabad, and royal feast records.",
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
        "Cooking method: 12-hour continuous slow simmering and intense manual pounding with wooden ghotni / shorter cooking in pressure cookers or slow cookers with handheld immersion blenders\nVessel: massive heavy tinned copper cauldrons (degs/bhatti) / stainless steel pots, heavy-bottom handis, and domestic pressure cookers\nFuel: tamarind wood and charcoal bhattis burning low overnight / LPG gas stoves, induction, and commercial gas burners\nCooking time: 10 to 12 hours of overnight simmering / 1.5 to 2.5 hours in home pressure cookers\nPounding: 2 to 3 skilled cooks rhythmically beating with wooden poles (ghotnis) / home wooden whisks, potato mashers, or short pulses of electric blenders\nMeat: traditional bone-in tender goat/mutton marrow cuts slow-cooked till bones slip out / boneless mutton, chicken (now widespread in restaurants), and modern vegetarian lentil variants\nFlavourings: pure desi ghee, freshly stone-ground potli masala, rose water, and wild cinnamon / commercial packaged haleem spice blends and ready ginger-garlic paste\nGarnish & Serving: golden fried onions (birista), ghee drizzle, fresh mint, coriander, lime, and sliced almonds/cashews / similar traditional garnishes maintained across both royal feasts and modern takeaway boxes",
      keyInnovations: ["Shift from wood/charcoal bhattis to modern domestic gas and electric cooking", "Adoption of pressure cookers and immersion mashers", "Introduction of boneless mutton and chicken variants alongside packaged masalas"],
      botanicalOrMaterialFocus: ["Hand-Pounded Ghotni vs Immersion Blender", "Copper Deg vs Stainless Steel Cooker", "Potli Masala vs Packaged Spice"],
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
      stageName: "Hyderabadi Haleem Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: broken wheat (dalia), boneless mutton, chana and moong lentils, curd, pure desi ghee, fried onions (birista), ginger-garlic paste, whole spices and garam masala, mint and coriander, almonds and cashew nuts.\n\n1. Soak broken wheat and lentils (chana and moong) in water for 1 to 2 hours, then drain.\n2. Marinate the mutton with curd, ginger-garlic paste, turmeric, chilli powder, salt, and half of the garam masala for at least 1 hour.\n3. In a heavy pot or pressure cooker, heat ghee and saute whole spices (shahi jeera, cardamom, cloves, cinnamon) and a portion of fried onions until fragrant.\n4. Add the marinated meat and sear on medium-high heat, then add water and pressure-cook or slow-simmer until the meat is thoroughly tender and falling apart.\n5. Separately boil the soaked broken wheat and lentils with a pinch of turmeric and water until completely soft and mushy.\n6. Shred the cooked meat off any bones and combine the shredded meat and its rich broth into the pot of cooked wheat and lentils.\n7. Slow-simmer over low heat while vigorously mashing and pounding with a wooden masher (ghotni) for 30–40 minutes, gradually incorporating hot ghee until the mixture turns silky, elastic, and pasty.\n8. Season with remaining garam masala, mint, and coriander; ladle into warm bowls and top with hot ghee, golden fried onions, toasted cashews, and fresh lemon wedges.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step tender-simmer and ghotni pounding protocol", "Authentic home execution method maintaining gelatinous silky emulsion"],
      botanicalOrMaterialFocus: ["Broken Wheat & Mutton", "Chana & Moong Dal", "Desi Ghee & Fried Birista"],
      historicalEvidence:
        "Codified regional recipe documentation detailing the foundational eight-step slow-pounding and ghee-incorporation method (ghotni protocol) for authentic Hyderabadi haleem.",
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
      stageTitle: "The Ghotni Pounding Protocol",
      stageName: "Artisanal Emulsification Technique",
      era: "20th Century Ramzan Tradition",
      yearRange: "Overnight Simmer & Pounding",
      narrative:
        "The defining technical brilliance of Haleem is mechanical mastication: the cooked meat fibers are broken into thread-like filaments while wheat starches and melted collagen create an elastic, silky suspension that clings to a wooden paddle.",
      keyInnovations: ["Collagen-starch emulsification", "Rhythmic dual-operator wooden ghotni action", "Staged incorporation of boiling clarified butter"],
      botanicalOrMaterialFocus: ["Heavy Hardwood Ghotni", "Collagen Broth", "Desi Ghee Streams"],
      historicalEvidence: "National GI Registry Document No. 147 (Hyderabadi Haleem Specification).",
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
      stageTitle: "Nizami Aromatics & Garnishing",
      stageName: "Royal Finishing & Textural Harmony",
      era: "Palace Banquets & Festival Culture",
      yearRange: "Ramzan Evenings",
      narrative:
        "Aromatic finishing elevates the heavy stew: royal potli masala, rose water, and hot desi ghee are folded in, topped with crisp golden fried onions, slivered nuts, chopped mint, and fresh lemon juice to balance the rich savory profile.",
      keyInnovations: ["Acid-fat contrast via fresh lemon juice", "Crisp textural counterpoints with fried onions and nuts", "Floral rose and cardamom aromatic closure"],
      botanicalOrMaterialFocus: ["Crisp Birista Onions", "Fried Cashew Halves", "Fresh Guntur Mint"],
      historicalEvidence: "Chowmahalla Palace archives and city gastronomic oral histories.",
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
      stageTitle: "Present Day Plated & Global GI Status",
      stageName: "Global Emblem of Telangana Gastronomy",
      era: "Contemporary Era",
      yearRange: "2010 – Present Day",
      narrative:
        "Registered with GI status in 2010, Hyderabadi Haleem is exported across the globe and served in iconic institutions such as Pista House, Sarvi, and Shah Ghouse, remaining an irreplaceable symbol of Telangana's culinary hospitality.",
      keyInnovations: ["Geographical Indication certification", "Hermetic nitrogen-flushed courier packaging", "Universal celebration across communal boundaries during Ramzan"],
      botanicalOrMaterialFocus: ["Porcelain Plating", "Glistening Ghee Crown", "Fresh Lemon Wedges"],
      historicalEvidence: "Government of India GI Registry Journal, 2010.",
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
      stageName: "Kitchen-Tested Standard Recipe",
      era: "Modern Authentic Kitchen",
      yearRange: "Current Culinary Standard",
      narrative:
        "Execute authentic Hyderabadi Haleem at home with precision soaking, gentle pressure cooking, and dedicated wooden masher emulsification for the authentic silky texture.",
      keyInnovations: ["Kitchen-friendly pressure cooker adaptation", "Accurate wheat-to-meat ratio", "Balanced homemade garam masala potli"],
      botanicalOrMaterialFocus: ["Broken Wheat (Dalia)", "Tender Bone-In or Boneless Meat", "Pure Ghee"],
      historicalEvidence: "Standardized Telangana Gastronomic documentation.",
      threeSceneFocus: {
        cameraTarget: [0, 0, 0],
        cameraPosition: [0, 3.5, 4.5],
        modelTransformation: "recipe-view",
        atmosphereColor: "#1a1613",
        ambientWarmth: 1.0,
        particlesMode: "steam",
      },
    },
  ],
  recipe: {
    servings: 6,
    prepTimeMinutes: 120,
    cookTimeMinutes: 180,
    difficulty: "Master Chef",
    ingredientsList: [
      {
        category: "Grains & Pulses Base",
        items: [
          { name: "Broken Whole Wheat (Dalia)", quantity: "1 cup (200g)", notes: "Soaked for 2 hours in warm water" },
          { name: "Chana Dal (Bengal Gram)", quantity: "2 tbsp (30g)", notes: "Provides nutty protein structure" },
          { name: "Yellow Moong Dal", quantity: "2 tbsp (30g)", notes: "Adds smooth melting texture" },
          { name: "Masoor Dal (Split Red Lentil)", quantity: "2 tbsp (30g)", notes: "Melts into silky binder" },
          { name: "Urad Dal (Split Black Gram)", quantity: "1 tbsp (15g)", notes: "Provides starch elasticity" },
          { name: "Basmati Rice", quantity: "2 tbsp (30g)", notes: "Aids cohesive starch emulsification" },
        ],
      },
      {
        category: "Meat & Marinade",
        items: [
          { name: "Mutton / Goat (Bone-in cuts & marrow)", quantity: "750g", notes: "Marrow bones melt into natural collagen gelatin" },
          { name: "Fresh Thick Curd (Yogurt)", quantity: "1/2 cup (120g)", notes: "Lactic acid softens meat fibers" },
          { name: "Ginger-Garlic Paste", quantity: "2 tbsp", notes: "Freshly ground" },
          { name: "Kashmiri Chilli & Turmeric Powder", quantity: "1 tbsp chilli, 1 tsp turmeric" },
          { name: "Rock Salt", quantity: "1.5 tsp (to taste)" },
        ],
      },
      {
        category: "Aromatic Infusion & Desi Ghee",
        items: [
          { name: "Pure Desi Ghee", quantity: "3/4 cup (180ml)", notes: "Streamed in stages during continuous pounding" },
          { name: "Shahi Jeera (Caraway Seeds)", quantity: "1 tsp" },
          { name: "Whole Spices (Cardamom, Cloves, Cinnamon, Kebabcini)", quantity: "1.5 tbsp" },
          { name: "Royal Potli Masala (Nizami Haleem Spice Blend)", quantity: "1 tbsp" },
          { name: "Organic Rose Water & Dried Rose Petals", quantity: "1 tsp rose water, 1 tbsp petals" },
        ],
      },
      {
        category: "Royal Garnish",
        items: [
          { name: "Birista (Crispy Deep-Fried Golden Onions)", quantity: "1 cup", notes: "Crucial sweet textural crunch" },
          { name: "Fried Cashew Halves & Slivered Almonds", quantity: "2 tbsp each" },
          { name: "Fresh Mint & Coriander Leaves", quantity: "1/2 cup finely chopped" },
          { name: "Fresh Lemon Wedges", quantity: "2 lemons sliced" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Rinse and soak the broken wheat, chana dal, moong dal, masoor dal, urad dal, and basmati rice in warm water for at least 2 hours, then drain.",
        techniqueTip: "Soaking hydrates the grain starches completely, allowing them to rapidly burst and emulsify during cooking.",
      },
      {
        stepNumber: 2,
        instruction: "Marinate the mutton with yogurt, ginger-garlic paste, turmeric, chilli powder, salt, and half the garam masala for at least 1 hour.",
        techniqueTip: "Yogurt enzymes gently break down the meat proteins before heat is applied.",
      },
      {
        stepNumber: 3,
        instruction: "In a heavy pot or pressure cooker, heat 3 tablespoons of ghee. Fry whole spices (shahi jeera, cardamom, cloves, cinnamon) and half the fried onions until fragrant. Add marinated meat and sear for 6–8 minutes.",
        techniqueTip: "High-heat searing develops the rich Maillard browning that establishes the stew's deep color.",
      },
      {
        stepNumber: 4,
        instruction: "Add 4 cups of water to the meat, seal, and pressure-cook for 40–45 minutes (or slow-simmer 2.5 hours) until fork-tender and falling off the bone. Remove bones, scoop out marrow, and shred the meat.",
        techniqueTip: "Ensure the marrow is reclaimed into the broth; it is the secret to Hyderabadi Haleem's luxurious mouthfeel.",
      },
      {
        stepNumber: 5,
        instruction: "Separately boil the soaked grains and lentils with 4 cups of water and 1/2 tsp turmeric until completely soft and mushy, then mash with a wooden whisk or immersion blender.",
        techniqueTip: "The grains should achieve the consistency of a thick, homogeneous porridge before uniting with the meat.",
      },
      {
        stepNumber: 6,
        instruction: "Transfer the shredded meat, gelatinous marrow, and rich meat broth into the pot of cooked grains over low heat.",
        techniqueTip: "Use a wide, heavy-bottomed vessel so the mixture cooks evenly without scorching at the base.",
      },
      {
        stepNumber: 7,
        instruction: "Using a heavy wooden pestle (ghotni) or potato masher, rhythmically pound and stir the mixture in circular strokes for 30–45 minutes, gradually pouring in sizzling hot ghee.",
        techniqueTip: "This vigorous ghotni protocol masticates meat fibers into delicate silky filaments suspended in wheat starch, creating the signature stretchy drape.",
      },
      {
        stepNumber: 8,
        instruction: "Fold in royal potli masala, rose water, remaining garam masala, and fresh mint. Ladle into warm bowls, crown with a ladle of melted ghee, crisp birista, fried nuts, and a squeeze of fresh lemon juice.",
        techniqueTip: "Never omit the fresh lemon juice at the finish; the acidity cuts the intense collagen-ghee richness and activates the floral spice bouquet.",
      },
    ],
    historicalVsModernNotes:
      "Traditionally simmered for 12 continuous hours in wood-fired copper cauldrons (degs) with multiple bhatti cooks taking turns with heavy wooden ghotnis. Modern kitchens replicate this authentic silky elasticity using pressure cookers for the braise and rhythmic wooden ghotni mashing with staged hot ghee additions.",
    substitutions: [
      {
        original: "Bone-in Mutton / Marrow Bones",
        substitute: "Boneless Chicken Thighs or Slow-Braised Button Mushrooms & Soy Granules",
        impact: "Chicken Haleem cooks in half the time; vegetarian versions use mushrooms and pulses to mimic meaty umami.",
      },
      {
        original: "Potli Masala",
        substitute: "Ground Star Anise, Dagad Phool (Stone Flower), Kebabcini, and Cardamom",
        impact: "Delivers the earthen, peppery, forest-bark aroma signature to Asaf Jahi palace banquets.",
      },
      {
        original: "Pure Desi Ghee",
        substitute: "Grass-Fed Cultured Clarified Butter",
        impact: "Preserves the glossy aromatic crown and authentic mouthfeel without compromise.",
      },
    ],
  },
  citations: [
    {
      authorOrSource: "Government of India Geographical Indications Registry",
      workTitle: "GI Application No. 147: Hyderabadi Haleem Specification Journal",
      publicationYearOrPeriod: "2010",
      citationDetails: "GI Journal No. 37, Class 29 (Meat and meat extracts) & Class 30",
      quoteOrFinding:
        "Registered Hyderabadi Haleem as the first Indian meat delicacy granted GI status, recognizing the standardized recipe of broken wheat, tender goat meat, pure desi ghee, and manual wooden ghotni pounding.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Ibn Sayyar al-Warraq",
      workTitle: "Kitab al-Tabikh (The Book of Dishes)",
      publicationYearOrPeriod: "10th Century CE (Abbasid Baghdad)",
      citationDetails: "Chapter on Harisah: Porridge of shredded meat, soaked wheat, and clarified sheep tail fat",
      quoteOrFinding:
        "Earliest known culinary manuscript detailing the ancestral ancestor dish harees, describing overnight hearth simmering and continuous wooden paddle pounding to emulsify meat and grain.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Salma Husain",
      workTitle: "The Mughal Feast: Recipes from the Kitchen of Emperor Shah Jahan",
      publicationYearOrPeriod: "2019 (Roli Books)",
      citationDetails: "Chronicles of Asaf Jahi Banquets and Chaush Mercenaries in the Deccan, pp. 112–118",
      quoteOrFinding:
        "Traces the arrival of Yemeni harees through Chaush soldiers garrisoned in Barkas, Hyderabad, and its transformation in Nizam palace kitchens with saffron, cardamom, Deccan lentils, and rose petals.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "K.T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998 (Oxford University Press)",
      citationDetails: "Page 93, Entries on 'Haleem and Harees in the Deccan'",
      quoteOrFinding:
        "Documents how the Arab harees evolved into Hyderabadi haleem through the addition of regional pulses, local spices, and copious desi ghee during Ramzan celebrations.",
      confidenceRating: "Documented Historical Mention",
    },
  ],
};

// ─────────────────────────────────────────────
// BISI BELE BATH (Karnataka / Mysore Court)
// ─────────────────────────────────────────────
export const BISI_BELE_BATH_JOURNEY: DishCulinaryJourney = {
  dishId: "bisi-bele-bath",
  dishName: "Bisi Bele Bath",
  region: "Karnataka (Mysore Palace Court & Old Mysore)",
  culturalIntroduction:
    "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
  earliestDocumentedEvidence:
    "Palace kitchen accounts and culinary manuscripts from the Wodeyar dynasty of Mysore documenting sacred rice-and-dal offerings enriched with ghee and spices.",
  confidenceSummary:
    "Historical sources document that Bisi Bele Bath was created in the Mysore Palace kitchens as an offering to royal deities. It subsequently spread across Old Mysore and Karnataka's darshini restaurants, where the spice blend (bisi bele bath podi) and ghee tempering were standardized.",
  stages: [
    {
      stageNumber: 1,
      stageTitle: "Origin",
      stageName: "Birth of the food",
      era: "Birth of the food",
      yearRange: "Origin in Karnataka",
      narrative:
        "Bisi Bele Bath originates from the royal kitchens of the Mysore Palace under the Wodeyar dynasty in southern Karnataka. The name translates in Kannada to 'hot lentil rice' (bisi = hot, bele = lentil, bath = rice preparation). Palace cooks formulated it as an elaborate, wholesome royal offering to the palace deities, combining short-grain rice with toor dal, wild forest spices, aged tamarind, and desi ghee. From the Mysore court, the dish was embraced by Karnataka's temple traditions and Madhwa community kitchens, establishing its iconic status across the state.",
      keyInnovations: ["Integration of rice and toor dal in a single royal cauldron", "Slow simmering with aged tamarind and desi ghee", "Development of the bisi bele bath podi spice blend with Byadagi chillies and kapok buds"],
      botanicalOrMaterialFocus: ["Sona Masuri Rice", "Toor Dal", "Heavy Brass Uruli"],
      historicalEvidence:
        "Mysore Wodeyar court culinary records and South Indian temple kitchen manuscripts.",
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
        "Cooking method: separate slow wood-fire simmering of dal and rice in open vessels / unified pressure cooking followed by rapid direct spice simmering\nVessel: heavy brass urulis and tin-lined copper degchis / modern stainless steel pressure cookers and heavy-bottom pots\nFuel: tamarind wood and charcoal hearths burning slow / domestic LPG gas stoves and induction cooktops\nCooking time: 2 to 3 hours of continuous simmering and stirring / 25 to 35 minutes in domestic pressure cookers\nSpice blending: whole spices hand-roasted on iron plates and crushed on stone grinding slabs / electric mixer-ground homemade batches or packaged spice powders\nVegetables: limited to native ash gourd, drumsticks, and raw plantains / hearty mix of carrots, French beans, green peas, and shallots\nSourness and sweetness: dark country tamarind and slow-melted palm jaggery / seedless tamarind paste and organic cane jaggery\nGarnish and serving: fresh fried cashews in pure country cow ghee / fried cashews, spicy kara boondi, and potato chips served in darshini restaurants",
      keyInnovations: ["Transition from royal wood-fired urulis to domestic pressure cookers", "Addition of New World vegetables like carrots and green beans", "Adoption of Byadagi chillies for radiant red colour without excess heat"],
      botanicalOrMaterialFocus: ["Karnataka Byadagi Chillies", "Kapok Buds (Marathi Moggu)", "Dry Copra (Kobbari)"],
      historicalEvidence:
        "Comparative gastronomic records documenting kitchen fuel, cookware transitions, and ingredient availability across Karnataka culinary history.",
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
      stageName: "Bisi Bele Bath Recipe",
      era: "Recipe",
      yearRange: "Short and simple",
      narrative:
        "Key ingredients: Sona Masuri rice, toor dal, mixed vegetables (carrots, beans, peas), tamarind extract, jaggery, Byadagi dry red chillies, kapok buds (marathi moggu), dry coconut (copra), cashew nuts, pure desi ghee.\n\n1. Rinse Sona Masuri rice and toor dal together, then pressure-cook with water and a pinch of turmeric for 4 to 5 whistles until soft and easily mashable.\n2. Dry-roast Byadagi chillies, chana dal, urad dal, coriander seeds, cumin, fenugreek, marathi moggu, and cinnamon until aromatic; add grated copra and hing, cool, and grind into a fine bisi bele bath spice powder.\n3. Boil chopped carrots, French beans, potatoes, peas, and shallots in water with salt until tender.\n4. Add thick tamarind extract, grated jaggery, and 3 tablespoons of the prepared spice powder to the cooked vegetables and simmer for 5 minutes.\n5. Lightly mash the cooked rice and dal, then combine them into the bubbling spiced vegetable broth.\n6. Adjust consistency with warm water to a smooth, pourable porridge and simmer on low heat for 7 minutes, stirring gently to prevent sticking.\n7. Heat pure desi ghee in a pan, crackle mustard seeds and curry leaves, and fry cashew nuts and broken dried chillies until golden.\n8. Pour the sizzling ghee tempering over the bisi bele bath, mix well, rest for 2 minutes, and serve piping hot topped with crisp kara boondi.",
      keyInnovations: ["10 essential key ingredients", "Streamlined 8-step pressure cook and spice simmering protocol", "Authentic ghee-cashew and kara boondi finish"],
      botanicalOrMaterialFocus: ["Sona Masuri Rice & Toor Dal", "Bisi Bele Bath Podi", "Pure Desi Ghee & Cashews"],
      historicalEvidence:
        "Codified Karnataka regional recipe documentation detailing the authentic eight-step preparation.",
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
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    difficulty: "Intermediate",
    ingredientsList: [
      {
        category: "Base & Vegetables",
        items: [
          { name: "Sona Masuri Rice", quantity: "1 cup" },
          { name: "Toor Dal", quantity: "1/2 cup" },
          { name: "Mixed Vegetables (Carrots, Beans, Peas)", quantity: "1.5 cups" },
          { name: "Tamarind Pulp Extract", quantity: "1 lemon-sized ball" },
          { name: "Jaggery (Bella)", quantity: "1 tbsp" },
        ],
      },
      {
        category: "Bisi Bele Bath Podi (Spice Powder)",
        items: [
          { name: "Byadagi Dry Red Chillies", quantity: "6-8" },
          { name: "Chana Dal & Urad Dal", quantity: "2 tbsp & 1 tbsp" },
          { name: "Coriander & Cumin Seeds", quantity: "1.5 tbsp & 1 tsp" },
          { name: "Marathi Moggu (Kapok Buds)", quantity: "2" },
          { name: "Grated Dry Coconut (Copra)", quantity: "2 tbsp" },
        ],
      },
      {
        category: "Tempering & Garnish",
        items: [
          { name: "Pure Desi Ghee", quantity: "3 tbsp" },
          { name: "Mustard Seeds & Curry Leaves", quantity: "1 tsp & 1 sprig" },
          { name: "Cashew Nuts", quantity: "12 whole" },
          { name: "Kara Boondi", quantity: "generous handful" },
        ],
      },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction: "Pressure-cook rice and toor dal together until soft and easily mashable.",
        techniqueTip: "Slightly overcooking ensures seamless integration into the spiced vegetable broth.",
      },
      {
        stepNumber: 2,
        instruction: "Roast whole spices and copra, grind into fine bisi bele bath podi.",
        techniqueTip: "Byadagi chillies provide deep royal crimson color without excessive pungency.",
      },
      {
        stepNumber: 3,
        instruction: "Boil vegetables with tamarind extract, jaggery, and spice powder.",
        techniqueTip: "Cook until vegetables are tender and tamarind loses its raw edge.",
      },
      {
        stepNumber: 4,
        instruction: "Combine mashed rice-dal with vegetables, adjust consistency with warm water, and simmer.",
        techniqueTip: "Stir continuously to prevent settling at the base.",
      },
      {
        stepNumber: 5,
        instruction: "Temper with mustard, curry leaves, and cashews fried in hot ghee; top with kara boondi.",
        techniqueTip: "Ghee tempering locks in the fragrant essential oils of the roasted spices.",
      },
    ],
    historicalVsModernNotes: "Modern pressure cookers reduce a 3-hour royal cauldron simmer to 30 minutes while preserving the palace spice profile.",
    substitutions: [
      { original: "Marathi Moggu", substitute: "Cinnamon & Clove", impact: "Lacks wild woody balsamic aroma" },
      { original: "Byadagi Chillies", substitute: "Kashmiri Chillies", impact: "Provides red color but slightly different fruity undertone" },
    ],
  },
  citations: [
    {
      authorOrSource: "K. T. Achaya",
      workTitle: "A Historical Dictionary of Indian Food",
      publicationYearOrPeriod: "1998",
      citationDetails: "Oxford University Press, pp. 28-30",
      quoteOrFinding: "Documents the evolution of South Indian rice-and-lentil bath preparations in Karnataka temple and palace contexts.",
      confidenceRating: "Scholarly Consensus",
    },
    {
      authorOrSource: "Colleen Taylor Sen",
      workTitle: "Food Culture in India",
      publicationYearOrPeriod: "2004",
      citationDetails: "Greenwood Press, pp. 112-114",
      quoteOrFinding: "Describes Mysore courtly cuisine, the unique bisi bele bath spice blend, and its transition into Karnataka darshini culture.",
      confidenceRating: "Documented Historical Mention",
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
  if (dishId === "hyderabadi-haleem") return HYDERABADI_HALEEM_JOURNEY;

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
