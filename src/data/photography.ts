// ─────────────────────────────────────────────
// VERIFIED FOOD PHOTOGRAPHY
// Real, credited photographs only — no AI or synthetic imagery.
//
// Every entry below was verified against its Wikimedia Commons file page:
// creator, licence and source page are recorded, and each photograph was
// reviewed visually for subject identity and presentation. Photographs that
// could not be verified for BOTH identity and reuse rights are simply absent,
// and the UI states that honestly instead of substituting something else.
// ─────────────────────────────────────────────

import raw from "./photography.json";

export type PhotoSubject = "dish" | "context";

export interface Photograph {
  /** "dish" = a photograph of this exact dish. "context" = documentary craft photograph. */
  subject: PhotoSubject;
  title: string;
  /** Original Wikimedia Commons file URL (no query string). */
  src: string;
  width: number | null;
  height: number | null;
  creator: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  alt: string;
  caption: string;
  /** Local copy shipped with the app, used only if the CDN request fails. */
  fallback?: string | null;
  library?: string;
}

export interface DishPhotography {
  /** Stage I — origin, history and regional food culture. */
  origin: Photograph;
  /** Stage II — the ingredients the dish is built from. */
  ingredients: Photograph & { items: string[] };
  /** Stage III — the technique and the making. */
  method: Photograph;
  /** Stage IV — the finished dish, plated and served. Null when unverified. */
  plated: Photograph | null;
}

interface RawLibraryPhoto {
  title: string;
  src: string;
  w: number;
  h: number;
  creator: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  caption: string;
}

interface RawDishPhoto {
  origin: { library: string; caption: string };
  ingredients: { library: string; caption: string; items?: string[] };
  method: { library: string; caption: string };
  plated: (Omit<Photograph, "subject"> & { subject?: PhotoSubject }) | null;
}

const DATA = raw as unknown as {
  schemaVersion: number;
  verifiedOn: string;
  policy: string;
  library: Record<string, RawLibraryPhoto>;
  dishes: Record<string, RawDishPhoto>;
};

export const PHOTOGRAPHY_POLICY = DATA.policy;
export const PHOTOGRAPHY_VERIFIED_ON = DATA.verifiedOn;

const WIKIMEDIA_FILE =
  /^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/([0-9a-f])\/([0-9a-f]{2})\/([^/?#]+)$/;

/**
 * Wikimedia only serves a fixed set of thumbnail widths to hotlinkers
 * (see mediawiki.org/wiki/Common_thumbnail_sizes). Any other width is
 * rejected outright, so we always snap to the nearest supported size.
 */
export const THUMB_STEPS = [250, 330, 500, 960, 1280, 1920] as const;

function snapWidth(width: number): number {
  return THUMB_STEPS.find((step) => step >= width) ?? THUMB_STEPS[THUMB_STEPS.length - 1];
}

/**
 * Build a Wikimedia thumbnail URL for a given CSS pixel width.
 * Falls back to the original file for non-bitmap media or non-Wikimedia hosts.
 */
export function photoUrl(src: string, width: number): string {
  const match = src.match(WIKIMEDIA_FILE);
  if (!match) return src;
  const [, bucket, shard, file] = match;
  const ext = file.split(".").pop()?.toLowerCase() ?? "";
  if (!["jpg", "jpeg", "png", "webp"].includes(ext)) return src;
  const target = snapWidth(Math.max(120, Math.round(width)));
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${bucket}/${shard}/${file}/${target}px-${file}`;
}

/**
 * Pick a thumbnail width that is both a supported step and never larger than
 * the source file itself (Wikimedia refuses upscaled thumbnails).
 */
export function photoUrlWithin(src: string, width: number, maxWidth: number | null | undefined): string {
  if (!maxWidth) return photoUrl(src, width);
  const allowed = THUMB_STEPS.filter((step) => step <= maxWidth);
  if (!allowed.length) return src;
  const target = allowed[allowed.length - 1];
  return photoUrl(src, Math.min(width, target));
}

const DEFAULT_WIDTHS = [500, 960, 1280, 1920];

export function photoSrcSet(photo: Photograph, widths: number[] = DEFAULT_WIDTHS): string {
  const capped = widths
    .map((w) => snapWidth(w))
    .filter((w, i, arr) => arr.indexOf(w) === i)
    // Never ask for an upscale beyond the original file's own resolution.
    .filter((w) => !photo.width || w <= photo.width);
  const list = capped.length ? capped : [snapWidth(photo.width ?? 500)];
  return list.map((w) => `${photoUrl(photo.src, w)} ${w}w`).join(", ");
}

function libraryPhoto(id: string, caption: string): Photograph {
  const entry = DATA.library[id];
  if (!entry) {
    throw new Error(`Unknown photography library key: ${id}`);
  }
  return {
    subject: "context",
    title: entry.title,
    src: entry.src,
    width: entry.w,
    height: entry.h,
    creator: entry.creator,
    licence: entry.licence,
    licenceUrl: entry.licenceUrl,
    sourceUrl: entry.sourceUrl,
    alt: entry.title,
    caption,
    library: id,
  };
}

/** Photographs for one dish, grouped into the four narrative acts. */
export function getDishPhotography(dishId: string): DishPhotography | null {
  const record = DATA.dishes[dishId];
  if (!record) return null;

  const plated = record.plated
    ? {
        ...record.plated,
        subject: "dish" as PhotoSubject,
        fallback: record.plated.fallback ?? null,
      }
    : null;

  return {
    origin: libraryPhoto(record.origin.library, record.origin.caption),
    ingredients: {
      ...libraryPhoto(record.ingredients.library, record.ingredients.caption),
      items: record.ingredients.items ?? [],
    },
    method: libraryPhoto(record.method.library, record.method.caption),
    plated,
  };
}

export function hasPlatedPhotograph(dishId: string): boolean {
  return Boolean(DATA.dishes[dishId]?.plated);
}

export function getPhotographyCoverage() {
  const ids = Object.keys(DATA.dishes);
  const photographed = ids.filter((id) => Boolean(DATA.dishes[id].plated));
  return {
    total: ids.length,
    photographed: photographed.length,
    missing: ids.length - photographed.length,
    missingIds: ids.filter((id) => !DATA.dishes[id].plated),
  };
}

/** Every distinct photograph used in the atlas, for the credits ledger. */
export function getAllPhotographs(): Photograph[] {
  const seen = new Map<string, Photograph>();

  for (const [id, entry] of Object.entries(DATA.library)) {
    seen.set(entry.src, {
      subject: "context",
      title: entry.title,
      src: entry.src,
      width: entry.w,
      height: entry.h,
      creator: entry.creator,
      licence: entry.licence,
      licenceUrl: entry.licenceUrl,
      sourceUrl: entry.sourceUrl,
      alt: entry.title,
      caption: entry.caption,
      library: id,
    });
  }

  for (const dish of Object.values(DATA.dishes)) {
    if (dish.plated) {
      seen.set(dish.plated.src, {
        ...dish.plated,
        subject: "dish",
        fallback: dish.plated.fallback ?? null,
      });
    }
  }

  return [...seen.values()].sort((a, b) => a.creator.localeCompare(b.creator));
}

// ── Documentary era imagery ──────────────────────────────────────────────
// Used by the chronological journey. These are real photographs of Indian
// kitchen craft (markets, grindstones, tandoors, steamers, service) shown as
// context for an era — never presented as a photograph of the dish itself.
const EPOCH_LIBRARY_MAP: Record<string, string> = {
  ancient_grains: "spice-market",
  stone_ferment: "grindstone",
  spice_trade: "spice-street",
  tawa_sizzle: "tandoor",
  dum_seal: "spice-bowls",
  masala_dosa_hero: "banana-leaf",
  biryani_royal_hero: "banana-leaf",
  rogan_josh_hero: "tandoor",
  litti_chokha_hero: "steam",
  butter_chicken_hero: "spice-bowls",
};

/** Resolve a legacy era-image key to its verified documentary photograph URL. */
export function epochPhoto(key: string, width = 1280): string {
  const id = EPOCH_LIBRARY_MAP[key] ?? "spice-street";
  const entry = DATA.library[id];
  return photoUrlWithin(entry.src, width, entry.w);
}

export function epochPhotoCredit(key: string) {
  const id = EPOCH_LIBRARY_MAP[key] ?? "spice-street";
  const entry = DATA.library[id];
  return {
    creator: entry.creator,
    licence: entry.licence,
    licenceUrl: entry.licenceUrl,
    sourceUrl: entry.sourceUrl,
    caption: entry.caption,
  };
}
