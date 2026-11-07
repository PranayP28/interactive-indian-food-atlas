/**
 * Main State Heritage & Cuisine Poster Images from /Main_img
 * Used in the CinematicParallaxJourney scroll-effect image boxes before the timeline.
 * 
 * Centralized mapping: All dishes belonging to the same state automatically reuse
 * that state's single cuisine poster image.
 */

export const STATE_MAIN_IMAGES: Record<string, string> = {
  "Andaman and Nicobar Islands": "/Main_img/andamann%20main.jpeg",
  "Andhra Pradesh": "/Main_img/andhra%20main.jpeg",
  "Arunachal Pradesh": "/Main_img/arunachalpradesh%20main.jpeg",
  "Assam": "/Main_img/assam%20main.jpeg",
  "Bihar": "/Main_img/bihar%20main.jpeg",
  "Chhattisgarh": "/Main_img/chattisgarh%20main.jpeg",
  "Delhi": "/Main_img/delhi%20main.jpeg",
  "Gujarat": "/Main_img/gujarat%20main.jpeg",
  "Haryana": "/Main_img/haryana%20main.jpeg",
  "Himachal Pradesh": "/Main_img/himachalpradesh%20main.jpeg",
  "Jammu and Kashmir": "/Main_img/jammu%20main.jpeg",
  "Jharkhand": "/Main_img/jharkhand%20main.jpeg",
  "Karnataka": "/Main_img/karnataka%20main.jpeg",
  "Kerala": "/Main_img/kerala%20main.jpeg",
  "Ladakh": "/Main_img/ladakh%20main.jpeg",
  "Madhya Pradesh": "/Main_img/madhyapradesh%20main.jpeg",
  "Maharashtra": "/Main_img/maharastra%20main.jpeg",
  "Meghalaya": "/Main_img/meghalaya%20main.jpeg",
  "Mizoram": "/Main_img/mizoram%20main.jpeg",
  "Nagaland": "/Main_img/nagaland%20main.jpeg",
  "Odisha": "/Main_img/odisha%20main.jpeg",
  "Puducherry": "/Main_img/puducherry%20main.jpeg",
  "Punjab": "/Main_img/punjab%20main.jpeg",
  "Rajasthan": "/Main_img/rajasthan%20main.png",
  "Sikkim": "/Main_img/sikkim%20main.jpeg",
  "Tamil Nadu": "/Main_img/tamilnadu%20main.jpeg",
  "Telangana": "/Main_img/telangana%20main.jpeg",
  "Tripura": "/Main_img/tripura%20main.jpeg",
  "Uttarakhand": "/Main_img/uttarkhand%20main.jpeg",
  "Uttar Pradesh": "/Main_img/uttarpradesh%20main.jpeg",
  "West Bengal": "/Main_img/westbengal%20main.jpeg",
};

/**
 * Return the state cuisine poster image path for a given state name.
 * Uses exact match first, then normalized/alpha-only matching for flexibility.
 */
export function getStateMainImage(stateName?: string | null): string | null {
  if (!stateName) return null;
  const normalized = stateName.trim().toLowerCase();

  // 1. Direct case-insensitive match
  for (const [key, path] of Object.entries(STATE_MAIN_IMAGES)) {
    if (key.toLowerCase() === normalized) {
      return path;
    }
  }

  // 2. Alpha-only match (ignores spaces, hyphens, and punctuation)
  const alphaOnly = normalized.replace(/[^a-z]/g, "");
  for (const [key, path] of Object.entries(STATE_MAIN_IMAGES)) {
    if (key.toLowerCase().replace(/[^a-z]/g, "") === alphaOnly) {
      return path;
    }
  }

  // 3. Partial / word boundary match (e.g. "Jammu" -> "Jammu and Kashmir")
  for (const [key, path] of Object.entries(STATE_MAIN_IMAGES)) {
    const keyAlpha = key.toLowerCase().replace(/[^a-z]/g, "");
    if (keyAlpha.includes(alphaOnly) || alphaOnly.includes(keyAlpha)) {
      return path;
    }
  }

  return null;
}
