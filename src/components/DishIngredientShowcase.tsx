import { useEffect, useMemo, useState, type FC } from "react";
import { ImageOff, Leaf, Sparkles } from "lucide-react";
import type { Dish } from "../data/foodData";
import { getDishIngredientShowcase } from "../data/ingredientShowcase";

interface DishIngredientShowcaseProps {
  dish: Dish;
  isLight: boolean;
  layout?: "default" | "timeline";
  timelineStage?: {
    number: string;
    marker: string;
    title: string;
    image: string;
    isActive: boolean;
    onClick: () => void;
  };
}

export const DishIngredientShowcase: FC<DishIngredientShowcaseProps> = ({
  dish,
  isLight,
  layout = "default",
  timelineStage,
}) => {
  const showcase = useMemo(() => getDishIngredientShowcase(dish), [dish]);
  const [selectedId, setSelectedId] = useState(showcase.ingredients[0]?.id ?? "");

  useEffect(() => {
    setSelectedId(showcase.ingredients[0]?.id ?? "");
  }, [showcase]);

  const selectedIngredient = showcase.ingredients.find((ingredient) => ingredient.id === selectedId);
  const ink = isLight ? "text-stone-900" : "text-amber-50";
  const muted = isLight ? "text-stone-600" : "text-amber-100/55";
  const frame = isLight ? "border-amber-900/20 bg-[#18110b]" : "border-amber-500/20 bg-[#100b08]";
  const renderCompositionVisual = (compact = false) => {
    if (!showcase.compositionImage) {
      return (
        <div className={`flex ${compact ? "min-h-[170px]" : "min-h-[300px] sm:min-h-[380px]"} flex-col items-center justify-center rounded-[1.2rem] border border-dashed border-amber-500/25 bg-[radial-gradient(ellipse_at_center,rgba(120,72,24,0.18),rgba(8,7,6,0.94)_68%)] px-6 text-center`}>
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300">
            <ImageOff className="h-5 w-5" />
          </span>
          <h3 className="font-cormorant text-xl text-amber-100">Composition photograph unavailable</h3>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-amber-100/55">
            A verified, dish-specific image showing these ingredients separately has not been added yet.
            No unrelated photograph is substituted.
          </p>
          {selectedIngredient && (
            <p className="mt-3 rounded-full border border-amber-500/20 bg-black/30 px-3 py-1.5 text-[11px] text-amber-200/70">
              Selected: {selectedIngredient.name} · hotspot pending
            </p>
          )}
        </div>
      );
    }

    return (
      <div
        className="relative mx-auto w-full overflow-hidden rounded-[1.2rem] bg-black"
        style={{ aspectRatio: `${showcase.compositionImage.width} / ${showcase.compositionImage.height}` }}
      >
        <img
          src={showcase.compositionImage.path}
          alt={showcase.compositionImage.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {showcase.ingredients.map((ingredient) => {
          if (!ingredient.spotlight) return null;
          const active = ingredient.id === selectedId;
          const isVadaPavPotato = dish.id === "vada-pav" && ingredient.id === "vada-pav:potatoes";
          const { centerX, centerY, width, height } = ingredient.spotlight;

          return (
            <button
              key={ingredient.id}
              type="button"
              aria-label={`Highlight ${ingredient.name} in the composition`}
              aria-pressed={active}
              onClick={() => setSelectedId(ingredient.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                active
                  ? "z-10 scale-[1.04] animate-pulse border-2 border-amber-200 bg-[radial-gradient(circle,rgba(251,191,36,0.16)_0%,rgba(245,158,11,0.08)_55%,rgba(245,158,11,0)_78%)] shadow-[0_0_30px_8px_rgba(245,158,11,0.5)] motion-reduce:animate-none"
                  : `border-transparent ${isVadaPavPotato ? "bg-[radial-gradient(ellipse,rgba(0,0,0,0.04)_42%,rgba(0,0,0,0.8)_100%)]" : "bg-black/5"} hover:border-amber-200/70`
              }`}
              style={{
                left: `${centerX * 100}%`,
                top: `${centerY * 100}%`,
                width: `${width * 100}%`,
                height: `${height * 100}%`,
              }}
            />
          );
        })}
        {selectedIngredient?.spotlight ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full border border-amber-200/90 bg-[#2a1c0c]/95 px-3 py-1.5 text-xs font-semibold text-amber-100 shadow-[0_0_18px_rgba(245,158,11,0.4)] transition-all duration-500"
            style={{
              left: `clamp(10%, ${selectedIngredient.spotlight.centerX * 100}%, 90%)`,
              top: `clamp(13%, ${(selectedIngredient.spotlight.centerY - selectedIngredient.spotlight.height / 2) * 100}%, 90%)`,
            }}
          >
            {selectedIngredient.name}
          </span>
        ) : (
          <div className="absolute inset-x-3 bottom-3 rounded-xl border border-amber-200/15 bg-black/75 px-3 py-2 text-center text-xs text-amber-100/75 backdrop-blur-sm">
            A verified hotspot for {selectedIngredient?.name ?? "this ingredient"} is not available.
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      aria-labelledby="dish-ingredients-heading"
      className={
        layout === "timeline"
          ? "relative min-w-0"
          : `border-y px-4 py-10 sm:px-8 sm:py-14 md:px-12 ${
              isLight ? "border-amber-900/10 bg-[#faf8f5]" : "border-slate-800 bg-[#07090e]"
            }`
      }
    >
      <div className={layout === "timeline" ? "min-w-0" : "mx-auto max-w-7xl"}>
        <div className={`mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between ${layout === "timeline" ? "px-1" : ""}`}>
          <div>
            {timelineStage ? (
              <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-lg">
                Stage {timelineStage.number} <span className="opacity-60">·</span> {timelineStage.title}
              </span>
            ) : (
              <p className={`text-[10px] font-bold uppercase tracking-[0.24em] ${isLight ? "text-amber-800" : "text-amber-400"}`}>
                From the pantry · {dish.state}
              </p>
            )}
            <h2 id="dish-ingredients-heading" className={`mt-1 font-cormorant text-3xl sm:text-4xl ${ink}`}>
              Ingredients
            </h2>
          </div>
          <p className={`text-xs ${muted}`}>
            {showcase.ingredients.length} listed ingredient{showcase.ingredients.length === 1 ? "" : "s"} · {dish.name}
          </p>
        </div>

        {showcase.ingredients.length === 0 ? (
          <div className={`rounded-2xl border p-8 text-center ${frame}`}>
            <p className="text-sm text-amber-100/70">No ingredient data is available for this dish yet.</p>
          </div>
        ) : (
          <div
            className={`grid gap-5 ${
              layout === "timeline"
                ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-6 lg:grid-cols-[minmax(0,5fr)_5rem_minmax(0,5fr)] lg:gap-4"
                : "lg:grid-cols-[minmax(19rem,0.82fr)_minmax(0,1.5fr)] lg:gap-6"
            }`}
          >
            <div className="flex flex-col gap-2.5">
              {showcase.ingredients.map((ingredient, index) => {
                const active = ingredient.id === selectedId;
                return (
                  <button
                    key={ingredient.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedId(ingredient.id)}
                    className={`group flex min-h-[76px] items-center gap-3 rounded-2xl border p-2.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      active
                        ? "border-amber-300 bg-[#2b1d0d] shadow-[0_0_24px_rgba(245,158,11,0.22)]"
                        : isLight
                          ? "border-amber-900/20 bg-[#21170f] hover:border-amber-500/60 hover:bg-[#2a1c12]"
                          : "border-amber-900/35 bg-[#100c09] hover:border-amber-500/50 hover:bg-[#17100b]"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                        active
                          ? "border-amber-300 bg-amber-300 text-stone-950"
                          : "border-amber-500/40 bg-black/30 text-amber-300"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
                        active ? "border-amber-300/70 bg-amber-500/10" : "border-amber-900/40 bg-black/25"
                      }`}
                    >
                      {ingredient.thumbnailPath ? (
                        <img src={ingredient.thumbnailPath} alt="" className="h-full w-full object-cover" loading="lazy" />
                      ) : (
                        <span className="flex flex-col items-center gap-0.5 text-amber-300/70" aria-label="Ingredient thumbnail unavailable">
                          <Leaf className="h-4 w-4" />
                          <span className="text-[7px] uppercase tracking-wide">Pending</span>
                        </span>
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block truncate text-sm font-semibold ${active ? "text-amber-300" : "text-amber-100/85"}`}>
                        {ingredient.name}
                      </span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-amber-100/50">
                        {ingredient.description ?? `A listed ingredient in ${dish.name}.`}
                      </span>
                    </span>
                    {active && <Sparkles className="h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>

            {timelineStage && (
              <div className="hidden items-center justify-center lg:flex">
                <button
                  type="button"
                  onClick={timelineStage.onClick}
                  aria-label={`Go to Stage ${timelineStage.number}: ${timelineStage.title}`}
                  aria-current={timelineStage.isActive ? "step" : undefined}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border font-cinzel text-sm font-black shadow-xl transition-all duration-300 ${
                    timelineStage.isActive
                      ? "scale-110 border-white bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-amber-500/50"
                      : isLight
                        ? "border-amber-900/15 bg-white text-amber-900 shadow-md hover:scale-105"
                        : "border-amber-700/40 bg-slate-900 text-amber-300 hover:scale-105"
                  }`}
                >
                  {timelineStage.marker}
                </button>
              </div>
            )}

            <div className={`relative min-h-[330px] overflow-hidden rounded-[1.65rem] border p-3 sm:min-h-[420px] sm:p-4 ${showcase.compositionImage || (layout === "timeline" && timelineStage) ? "flex items-center justify-center" : ""} ${frame}`}>
              {layout === "timeline" && timelineStage ? (
                <div className="flex w-full flex-col items-center gap-3">
                  <div className="relative mx-auto w-full overflow-hidden rounded-[1.2rem] bg-black" style={{ aspectRatio: "882 / 362" }}>
                    <img
                      src={timelineStage.image}
                      alt={`${dish.name} — Stage ${timelineStage.number}: ${timelineStage.title}`}
                      className="absolute inset-0 h-full w-full object-contain"
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                      }}
                    />
                  </div>
                  {renderCompositionVisual(true)}
                </div>
              ) : (
                renderCompositionVisual()
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
