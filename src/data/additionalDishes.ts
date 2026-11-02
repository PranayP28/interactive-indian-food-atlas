// ─────────────────────────────────────────────
// ADDITIONAL DISHES — one authentic, regionally significant dish per state
//
// These are merged into FOOD_DATA at the end of foodData.ts, so the original
// 66 entries are never edited. Every dish here needs four photographs in
// src/data/photography.json: regional context, ingredient reference,
// preparation technique and the finished dish.
//
// Batch 1 (2026-11-02): Kerala, Tamil Nadu, Punjab, Maharashtra.
// ─────────────────────────────────────────────

import type { Dish } from "./foodData";

export const ADDITIONAL_DISHES: Record<string, Dish[]> = {
  Kerala: [
    {
      id: "puttu",
      name: "Puttu",
      alternateName: "Pittu / Putu Mayam's steamed cousin",
      state: "Kerala",
      category: "fermented-steamed",
      description:
        "Cylinders of coarsely moistened rice flour and grated coconut steamed in a two-part puttu kutti, eaten hot with kadala curry, banana or a spoon of sugar.",
      ingredients: ["Raw rice flour", "Grated coconut", "Salt", "Water"],
      tasteProfile: "Nutty, Soft-Steamed & Coconut-Fragrant",
      era: "Sangam-era Kerala & Tamil Kitchen Continuity",
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
      era: "1930s Madras Coffee-House Culture",
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
      ingredients: ["Refined wheat flour", "Ghee", "Potato or paneer filling", "Ajwain", "Curd", "Green chilli"],
      tasteProfile: "Crisp, Buttery & Ghee-Layered",
      era: "Post-1947 Amritsar Tandoor Culture",
      keyTechnique: "Tandoor-Charged Stuffed Kulcha Baking",
    },
  ],

  Maharashtra: [
    {
      id: "ukadiche-modak",
      name: "Ukadiche Modak",
      alternateName: "Steamed Modak",
      state: "Maharashtra",
      category: "sweet-dessert",
      description:
        "A dome of freshly kneaded rice flour, pleated by hand around a filling of jaggery and grated coconut, steamed to a translucent shell and offered to Ganesha at Chaturthi.",
      ingredients: ["Rice flour", "Jaggery", "Grated coconut", "Cardamom", "Ghee"],
      tasteProfile: "Sweet, Coconut-Flecked & Soft-Steamed",
      era: "Peshwa-era Ganesh Chaturthi Tradition",
      keyTechnique: "Ukad Rice-Flour Pleating & Steam Bath",
    },
  ],
};

export const ADDITIONAL_DISH_IDS = Object.values(ADDITIONAL_DISHES)
  .flat()
  .map((dish) => dish.id);
