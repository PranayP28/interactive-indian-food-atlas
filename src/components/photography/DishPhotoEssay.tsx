import React from "react";
import { BadgeCheck, Camera, ExternalLink, Leaf, ShieldCheck } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import type { Dish } from "../../data/foodData";
import {
  getDishPhotography,
  hasPlatedPhotograph,
  photoUrlWithin,
  PHOTOGRAPHY_VERIFIED_ON,
  type Photograph,
} from "../../data/photography";
import { PhotoFrame } from "./PhotoFrame";

interface DishPhotoEssayProps {
  dish: Dish;
  stateName: string;
}

const ACTS = [
  {
    numeral: "I",
    key: "origin" as const,
    title: "Origin & History",
    blurb: "Where the dish belongs — its region, its markets, its kitchen.",
  },
  {
    numeral: "II",
    key: "ingredients" as const,
    title: "Ingredients",
    blurb: "What it is built from, at full colour and full strength.",
  },
  {
    numeral: "III",
    key: "method" as const,
    title: "Recipe & Making",
    blurb: "The craft: grinding, fermenting, tempering, steaming.",
  },
];

const commonsSearch = (term: string) =>
  `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(term)}&title=Special:MediaSearch&type=image`;

const CreditLink: React.FC<{ photo: Photograph; isLight: boolean }> = ({ photo, isLight }) => (
  <a
    href={photo.sourceUrl}
    target="_blank"
    rel="noreferrer noopener"
    className={`inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.14em] ${
      isLight ? "text-amber-700 hover:text-amber-900" : "text-amber-300/80 hover:text-amber-200"
    }`}
  >
    {photo.creator} · {photo.licence}
    <ExternalLink className="h-2.5 w-2.5" />
  </a>
);

export const DishPhotoEssay: React.FC<DishPhotoEssayProps> = ({ dish, stateName }) => {
  const { isLight } = useTheme();
  const photography = getDishPhotography(dish.id);
  if (!photography) return null;

  const { origin, ingredients, method, plated } = photography;
  const photographed = hasPlatedPhotograph(dish.id);

  const surface = isLight
    ? "border-amber-900/15 bg-[#faf7f2]"
    : "border-amber-900/25 bg-[#080a10]";
  const ink = isLight ? "text-slate-900" : "text-white";
  const soft = isLight ? "text-slate-600" : "text-slate-400";
  const hairline = isLight ? "border-amber-900/15" : "border-amber-900/25";

  return (
    <section
      id="photographic-record"
      aria-labelledby="photographic-record-heading"
      className={`relative w-full scroll-mt-20 border-y ${surface} ${hairline}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  isLight
                    ? "border-amber-900/20 bg-amber-100/70 text-amber-900"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-300"
                }`}
              >
                <Camera className="h-3 w-3" />
                The Photographic Record
              </span>
              <span className={`text-[10px] uppercase tracking-[0.18em] ${soft}`}>{stateName}</span>
            </div>
            <h2
              id="photographic-record-heading"
              className={`font-cormorant text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${ink}`}
            >
              Four acts of {dish.name}, in real photographs
            </h2>
            <p className={`mt-3 text-[13px] leading-relaxed sm:text-sm ${soft}`}>
              Every frame on this page is a photograph by a named photographer, published under a licence that
              permits reuse. Nothing here is generated, illustrated or composited. Context photographs are labelled
              as context — they are never passed off as a portrait of the dish.
            </p>
          </div>

          <div
            className={`flex shrink-0 items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-[11px] ${
              isLight ? "border-emerald-800/20 bg-emerald-50 text-emerald-900" : "border-emerald-500/25 bg-emerald-500/5 text-emerald-200"
            }`}
          >
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span className="leading-tight">
              <span className="block font-semibold">
                {photographed ? "Dish photograph verified" : "No verified dish photograph"}
              </span>
              <span className="opacity-75">Licences checked {PHOTOGRAPHY_VERIFIED_ON}</span>
            </span>
          </div>
        </div>

        {/* ── Stage IV: the finished dish ─────────────────────────── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <PhotoFrame
              photo={plated}
              ratio="aspect-[16/10]"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              badge={plated ? "dish" : undefined}
              caption={plated?.caption}
              unavailable={{
                title: "The finished dish — photograph unavailable",
                body: `No photograph of ${dish.name} could be verified as both unmistakably this dish and free to reuse. We have left the frame empty rather than substitute a different dish or a synthetic image.`,
                searchUrl: commonsSearch(dish.name),
              }}
            />
          </div>

          <div className="flex flex-col justify-between gap-5 lg:col-span-4">
            <div
              className={`rounded-[1.75rem] border p-5 sm:p-6 ${hairline} ${
                isLight ? "bg-white/70" : "bg-gradient-to-br from-slate-900/80 to-black/40"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${soft}`}>Stage IV</span>
                  <h3 className={`mt-1 font-cormorant text-2xl ${ink}`}>Modern Form, Serving & Recognition</h3>
                </div>
                <span
                  className={`font-cormorant text-4xl leading-none ${isLight ? "text-amber-900/25" : "text-amber-200/25"}`}
                >
                  IV
                </span>
              </div>

              <p className={`mt-3 text-[12.5px] leading-relaxed ${soft}`}>
                {dish.description}
              </p>

              <dl className={`mt-4 space-y-2 border-t pt-4 text-[11px] ${hairline}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className={`uppercase tracking-[0.16em] ${soft}`}>Taste</dt>
                  <dd className={`text-right font-medium ${ink}`}>{dish.tasteProfile}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className={`uppercase tracking-[0.16em] ${soft}`}>Technique</dt>
                  <dd className={`text-right font-medium ${ink}`}>{dish.keyTechnique}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className={`uppercase tracking-[0.16em] ${soft}`}>Region</dt>
                  <dd className={`text-right font-medium ${ink}`}>{stateName}</dd>
                </div>
              </dl>
            </div>

            {plated && (
              <div className={`flex items-center gap-2 px-1 text-[10px] uppercase tracking-[0.14em] ${soft}`}>
                <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />
                Credit <CreditLink photo={plated} isLight={isLight} />
              </div>
            )}
          </div>
        </div>

        {/* ── Stages I–III ────────────────────────────────────────── */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ACTS.map((act) => {
            const photo =
              act.key === "origin" ? origin : act.key === "ingredients" ? ingredients : method;
            const caption =
              act.key === "ingredients" ? ingredients.caption : photo.caption;

            return (
              <article key={act.key} className="flex flex-col gap-3">
                <PhotoFrame
                  photo={photo}
                  ratio="aspect-[4/5]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                  badge="context"
                  caption={caption}
                />
                <div className="px-1">
                  <div className="flex items-baseline gap-2">
                    <span className={`font-cormorant text-2xl leading-none ${isLight ? "text-amber-800" : "text-amber-400"}`}>
                      {act.numeral}
                    </span>
                    <h3 className={`font-cormorant text-xl ${ink}`}>{act.title}</h3>
                  </div>
                  <p className={`mt-1.5 text-[12px] leading-relaxed ${soft}`}>{act.blurb}</p>

                  {act.key === "ingredients" && ingredients.items.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {ingredients.items.slice(0, 8).map((item) => (
                        <li
                          key={item}
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] ${
                            isLight
                              ? "border-amber-900/15 bg-white/70 text-amber-950"
                              : "border-amber-500/20 bg-amber-500/5 text-amber-100/90"
                          }`}
                        >
                          <Leaf className="h-2.5 w-2.5 opacity-60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={`mt-3 border-t pt-2 ${hairline}`}>
                    <CreditLink photo={photo} isLight={isLight} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Credits & licence ledger ────────────────────────────── */}
        <details
          className={`group mt-8 rounded-2xl border px-4 py-3 text-[11px] sm:px-5 ${
            isLight ? "border-amber-900/15 bg-white/60" : "border-amber-900/25 bg-black/25"
          }`}
        >
          <summary className={`cursor-pointer list-none font-semibold uppercase tracking-[0.16em] ${soft}`}>
            Photography credits & reuse terms
          </summary>
          <ul className="mt-3 space-y-2">
            {[plated, origin, ingredients, method].filter(Boolean).map((photo) => {
              const p = photo as Photograph;
              return (
                <li key={p.src} className={`flex flex-col gap-0.5 border-b pb-2 last:border-0 ${hairline}`}>
                  <span className={ink}>
                    {p.subject === "dish" ? dish.name : p.title}
                  </span>
                  <span className={soft}>
                    {p.creator} ·{" "}
                    <a href={p.licenceUrl} target="_blank" rel="noreferrer noopener" className="underline decoration-dotted underline-offset-2">
                      {p.licence}
                    </a>{" "}
                    ·{" "}
                    <a href={p.sourceUrl} target="_blank" rel="noreferrer noopener" className="underline decoration-dotted underline-offset-2">
                      source file
                    </a>
                    {p.subject === "context" && " · documentary context photograph"}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className={`mt-3 leading-relaxed ${soft}`}>
            Photographs are served from Wikimedia Commons and may be colour-corrected and cropped by this site under
            the terms of their licence; no content has been added, removed or generated. Photographer credit and the
            licence link must travel with every image reuse.
          </p>
        </details>
      </div>
    </section>
  );
};

export default DishPhotoEssay;

/** Small helper used by the map sidebar to show a thumbnail when one exists. */
export function dishPhotoThumb(dishId: string, width = 160): string | null {
  const photography = getDishPhotography(dishId);
  if (!photography?.plated) return null;
  return photoUrlWithin(photography.plated.src, width, photography.plated.width);
}
