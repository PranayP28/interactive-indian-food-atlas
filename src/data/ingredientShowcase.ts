import type { Dish } from "./foodData";

export interface NormalizedIngredientSpotlight {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
}

export interface IngredientShowcaseAsset {
  description: string;
  thumbnailPath: string;
  spotlight?: NormalizedIngredientSpotlight;
}

export interface DishCompositionImage {
  path: string;
  width: number;
  height: number;
  alt: string;
}

interface DishIngredientAssets {
  compositionImage?: DishCompositionImage;
  ingredients: Record<string, IngredientShowcaseAsset>;
}

export interface DishIngredientShowcaseItem {
  id: string;
  name: string;
  description: string | null;
  thumbnailPath: string | null;
  spotlight: NormalizedIngredientSpotlight | null;
}

export interface DishIngredientShowcase {
  dishId: string;
  dishName: string;
  compositionImage: DishCompositionImage | null;
  ingredients: DishIngredientShowcaseItem[];
}

const DISH_INGREDIENT_ASSETS: Partial<Record<string, DishIngredientAssets>> = {
  "vada-pav": {
    compositionImage: {
      path: "/images/ingredients/vada-pav/composition.webp",
      width: 866,
      height: 597,
      alt: "Vada Pav ingredients arranged in separate bowls on a traditional serving tray",
    },
    ingredients: {
      potatoes: {
        description: "Spiced mashed potato forms the filling of the batata vada.",
        thumbnailPath: "/images/ingredients/vada-pav/potatoes.webp",
        spotlight: { centerX: 0.255, centerY: 0.275, width: 0.34, height: 0.32 },
      },
      "besan-gram-flour": {
        description: "Gram-flour batter coats the potato filling before frying.",
        thumbnailPath: "/images/ingredients/vada-pav/besan.webp",
        spotlight: { centerX: 0.56, centerY: 0.15, width: 0.28, height: 0.27 },
      },
      "mustard-seeds": {
        description: "Tempered seeds season the potato mixture.",
        thumbnailPath: "/images/ingredients/vada-pav/mustard-seeds.webp",
        spotlight: { centerX: 0.8, centerY: 0.34, width: 0.27, height: 0.28 },
      },
      garlic: {
        description: "Garlic seasons the potato filling and dry chutney.",
        thumbnailPath: "/images/ingredients/vada-pav/garlic.webp",
        spotlight: { centerX: 0.52, centerY: 0.46, width: 0.28, height: 0.3 },
      },
      peanuts: {
        description: "Peanuts are part of the dry chutney served with the pav.",
        thumbnailPath: "/images/ingredients/vada-pav/peanuts.webp",
        spotlight: { centerX: 0.2, centerY: 0.59, width: 0.29, height: 0.29 },
      },
      "kashmiri-chilli": {
        description: "Chilli contributes colour and warmth to the seasoning.",
        thumbnailPath: "/images/ingredients/vada-pav/kashmiri-chilli.webp",
        spotlight: { centerX: 0.37, centerY: 0.76, width: 0.3, height: 0.38 },
      },
      "ladi-pav": {
        description: "Soft bakery rolls hold the fried vada for serving.",
        thumbnailPath: "/images/ingredients/vada-pav/ladi-pav.webp",
        spotlight: { centerX: 0.69, centerY: 0.71, width: 0.4, height: 0.45 },
      },
    },
  },
  "hyderabadi-biryani": {
    ingredients: {
      "aged-basmati-rice": {
        description: "Aged long-grain basmati rice grains.",
        thumbnailPath: "",
      },
    },
  },
};

function ingredientKey(name: string): string {
  return name
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

function isValidSpotlight(value: NormalizedIngredientSpotlight | undefined): value is NormalizedIngredientSpotlight {
  return Boolean(
    value &&
      Number.isFinite(value.centerX) &&
      Number.isFinite(value.centerY) &&
      Number.isFinite(value.width) &&
      Number.isFinite(value.height) &&
      value.centerX >= 0 &&
      value.centerX <= 1 &&
      value.centerY >= 0 &&
      value.centerY <= 1 &&
      value.width > 0 &&
      value.width <= 1 &&
      value.height > 0 &&
      value.height <= 1,
  );
}

export function getDishIngredientShowcase(dish: Dish): DishIngredientShowcase {
  const dishAssets = DISH_INGREDIENT_ASSETS[dish.id];

  return {
    dishId: dish.id,
    dishName: dish.name,
    compositionImage: dishAssets?.compositionImage ?? null,
    ingredients: dish.ingredients.map((name) => {
      const asset = dishAssets?.ingredients[ingredientKey(name)];
      return {
        id: `${dish.id}:${ingredientKey(name)}`,
        name,
        description: asset?.description ?? `A listed ingredient in ${dish.name}.`,
        thumbnailPath: asset?.thumbnailPath ?? null,
        spotlight: isValidSpotlight(asset?.spotlight) ? asset.spotlight : null,
      };
    }),
  };
}
