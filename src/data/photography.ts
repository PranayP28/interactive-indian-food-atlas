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
import localRaw from "./localPhotos.json";

type HistoricalStageKey = "origin" | "ingredients" | "method" | "plated";

export const HISTORICAL_STAGE_IMAGE_PATHS: Partial<Record<HistoricalStageKey, string>> = {
  origin: "/images/dishes/stage1.png",
  ingredients: "/images/dishes/stage2.png",
  method: "/images/dishes/stage3.png",
};

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
  /** Human label for this stage photograph, e.g. "Regional context". */
  label?: string;
  /** Legacy local copy, used only if the CDN request fails. */
  fallback?: string | null;
  /**
   * Self-hosted copy in public/images, written by scripts/fetch_food_photos.py.
   * When present it is the first source the UI tries, so the atlas works
   * offline and never depends on a third-party CDN.
   */
  local?: string | null;
  library?: string;
}

export interface DishPhotography {
  /** Stage I — origin, history and regional food culture. Null when unresolved. */
  origin: Photograph | null;
  /** Stage II — the ingredients the dish is built from. Null when unresolved. */
  ingredients: Photograph | null;
  /** Stage III — the technique and the making. Null when unresolved. */
  method: Photograph | null;
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

/** A photograph written out in full, instead of a shared library reference. */
interface RawPhotoRef {
  src: string;
  title: string;
  creator: string;
  licence: string;
  licenceUrl: string;
  sourceUrl: string;
  alt?: string;
  caption?: string;
  width?: number | null;
  height?: number | null;
  subject?: PhotoSubject;
}

/**
 * A stage photograph is either one of the shared documentary library images
 * (older dishes) or a photograph chosen specifically for this dish and this
 * stage (newer dishes, where each frame carries its own caption and label).
 */
type RawStage =
  | { library: string; caption?: string; items?: string[]; label?: string }
  | { photo: RawPhotoRef; caption?: string; items?: string[]; label?: string }
  | null;

interface RawDishPhoto {
  origin: RawStage;
  ingredients: RawStage;
  method: RawStage;
  plated: (Omit<Photograph, "subject"> & { subject?: PhotoSubject }) | null;
}

type LocalManifest = {
  dishes: Record<string, Partial<Record<"origin" | "ingredients" | "method" | "plated", string>>>;
  context: Record<string, string>;
};

const LOCAL = localRaw as unknown as LocalManifest;

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
    local: LOCAL.context[id] ?? null,
  };
}

/**
 * The ordered list of URLs to try for one photograph: the self-hosted copy
 * first, then a CDN thumbnail, then the original file, then any legacy local
 * copy. PhotoFrame/DishThumb walk this list on load errors.
 */
export function photoSources(photo: Photograph, width: number): string[] {
  const list = [photo.local, photoUrlWithin(photo.src, width, photo.width), photo.src, photo.fallback];
  return list.filter((value, index, all): value is string => Boolean(value) && all.indexOf(value) === index);
}

/** First-choice URL for a photograph (local file when the archive has run). */
export function photoPrimaryUrl(photo: Photograph, width: number): string {
  return photoSources(photo, width)[0] ?? photo.src;
}

/**
 * A shared "documentary library" image is NOT a photograph of this dish, so it
 * is never used to fill a stage. Stages without a photograph chosen for that
 * dish stay unresolved and the UI says so.
 */
function stagePhoto(
  stage: RawStage,
  defaultLabel: string,
  dishId: string,
  stageKey: "origin" | "ingredients" | "method",
): Photograph | null {
  if (!stage) return null;
  if ("photo" in stage) {
    const photo = stage.photo;
    return {
      subject: photo.subject ?? "context",
      title: photo.title,
      src: photo.src,
      width: photo.width ?? null,
      height: photo.height ?? null,
      creator: photo.creator,
      licence: photo.licence,
      licenceUrl: photo.licenceUrl,
      sourceUrl: photo.sourceUrl,
      alt: photo.alt ?? photo.title,
      caption: stage.caption ?? photo.caption ?? "",
      label: stage.label ?? defaultLabel,
      // Stage I–III photographs are mirrored locally too; older builds left
      // these at null and forced a hotlink even when a WebP file existed.
      local: LOCAL.dishes[dishId]?.[stageKey] ?? null,
    };
  }
  return null;
}

/** Self-hosted copy when the archive has run, otherwise a CDN thumbnail. */
export function stageImageUrl(photo: Photograph | null | undefined, width = 1280): string | null {
  if (!photo) return null;
  return photo.local ?? photoUrlWithin(photo.src, width, photo.width);
}

export function historicalStageImageUrl(
  stage: HistoricalStageKey,
  photo: Photograph | null | undefined,
): string | null {
  return HISTORICAL_STAGE_IMAGE_PATHS[stage] ?? stageImageUrl(photo);
}

/** Neutral, non-photographic placeholder for a stage with no verified photo. */
export const UNRESOLVED_IMAGE =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#1e293b"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs>' +
      '<rect width="16" height="10" fill="url(#g)"/></svg>'
  );

/** Photographs for one dish, grouped into the four narrative acts. */
export function getDishPhotography(dishId: string): DishPhotography | null {
  const record = DATA.dishes[dishId];
  if (!record) return null;

  const plated = record.plated
    ? {
        ...record.plated,
        subject: "dish" as PhotoSubject,
        label: record.plated.label ?? "Finished dish",
        fallback: record.plated.fallback ?? null,
        local: LOCAL.dishes[dishId]?.plated ?? record.plated.fallback ?? null,
      }
    : null;

  return {
    origin: stagePhoto(record.origin, "Regional context", dishId, "origin"),
    ingredients: stagePhoto(record.ingredients, "Ingredient reference", dishId, "ingredients"),
    method: stagePhoto(record.method, "Preparation technique", dishId, "method"),
    plated,
  };
}

export function hasPlatedPhotograph(dishId: string): boolean {
  return Boolean(DATA.dishes[dishId]?.plated);
}

/** Live coverage of the four-stage photographic record. */
export function getPhotographyCoverage() {
  const ids = Object.keys(DATA.dishes);
  const stageKeys = ["origin", "ingredients", "method", "plated"] as const;
  let assignments = 0;
  let localAssignments = 0;

  for (const id of ids) {
    const record = DATA.dishes[id];
    for (const key of stageKeys) {
      const stage = record[key];
      const explicit = key === "plated" ? Boolean(stage) : Boolean(stage && "photo" in stage);
      if (!explicit) continue;
      assignments += 1;
      if (LOCAL.dishes[id]?.[key]) localAssignments += 1;
    }
  }

  const photographed = ids.filter((id) => Boolean(DATA.dishes[id].plated));
  const localIds = ids.filter((id) => Boolean(LOCAL.dishes[id]?.plated));
  return {
    total: ids.length,
    stageCount: stageKeys.length,
    targetAssignments: ids.length * stageKeys.length,
    assignments,
    localAssignments,
    unresolvedAssignments: ids.length * stageKeys.length - assignments,
    photographed: photographed.length,
    missing: ids.length - photographed.length,
    missingIds: ids.filter((id) => !DATA.dishes[id].plated),
    /** Dishes whose finished-dish photograph is self-hosted in public/images. */
    localCount: localIds.length,
    localIds,
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
      local: LOCAL.context[id] ?? null,
    });
  }

  for (const [dishId, dish] of Object.entries(DATA.dishes)) {
    for (const [stageKey, stage] of [
      ["origin", dish.origin],
      ["ingredients", dish.ingredients],
      ["method", dish.method],
    ] as const) {
      if (stage && "photo" in stage) {
        const photo = stage.photo;
        seen.set(`${photo.src}#${stage.caption ?? ""}`, {
          subject: photo.subject ?? "context",
          title: photo.title,
          src: photo.src,
          width: photo.width ?? null,
          height: photo.height ?? null,
          creator: photo.creator,
          licence: photo.licence,
          licenceUrl: photo.licenceUrl,
          sourceUrl: photo.sourceUrl,
          alt: photo.alt ?? photo.title,
          caption: stage.caption ?? photo.caption ?? "",
          label: stage.label,
          local: LOCAL.dishes[dishId]?.[stageKey] ?? null,
        });
      }
    }
    if (dish.plated) {
      seen.set(dish.plated.src, {
        ...dish.plated,
        subject: "dish",
        fallback: dish.plated.fallback ?? null,
        local: LOCAL.dishes[dishId]?.plated ?? dish.plated.fallback ?? null,
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
