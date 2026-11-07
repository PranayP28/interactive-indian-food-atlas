import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Search,
  Sparkles,
  MapPin,
  ChevronRight,
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Globe2,
} from "lucide-react";
import {
  FOOD_DATA,
  STATE_EMOJIS,
  CULINARY_REGIONS,
  getTasteColor,
  StateFood,
} from "../data/foodData";
import { useTheme } from "../context/ThemeContext";

interface AllStatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectState: (stateName: string) => void;
  selectedState?: string | null;
}

export const AllStatesModal: React.FC<AllStatesModalProps> = ({
  isOpen,
  onClose,
  onSelectState,
  selectedState,
}) => {
  const { isLight } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const allStateNames = useMemo(() => Object.keys(FOOD_DATA).sort(), []);

  // Filter states by region & search query
  const filteredStates = useMemo(() => {
    return allStateNames.filter((stateName) => {
      const data: StateFood | undefined = FOOD_DATA[stateName];
      if (!data) return false;

      // Region filter
      if (activeRegion) {
        const region = CULINARY_REGIONS[activeRegion];
        if (
          !region?.states.some(
            (s) => s.trim().toLowerCase() === stateName.trim().toLowerCase()
          )
        ) {
          return false;
        }
      }

      // Search query filter (matches state name, dish name, or tagline)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = stateName.toLowerCase().includes(q);
        const matchesTagline = data.tagline.toLowerCase().includes(q);
        const matchesDishes = data.dishes.some(
          (d) =>
            d.name.toLowerCase().includes(q) ||
            (d.alternateName && d.alternateName.toLowerCase().includes(q)) ||
            d.tasteProfile.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesTagline && !matchesDishes) return false;
      }

      return true;
    });
  }, [allStateNames, activeRegion, searchQuery]);

  // Find region key for a given state
  const getStateRegionName = (stateName: string) => {
    for (const [key, reg] of Object.entries(CULINARY_REGIONS)) {
      if (
        reg.states.some(
          (s) => s.trim().toLowerCase() === stateName.trim().toLowerCase()
        )
      ) {
        return reg.name;
      }
    }
    return "Indian Territory";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="all-states-modal-title"
          className={`fixed inset-0 z-[100] backdrop-blur-md flex items-center justify-center p-3 sm:p-6 ${
            isLight ? "bg-slate-900/40" : "bg-black/85"
          }`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={`border rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden ${
              isLight
                ? "bg-[#faf8f5] border-amber-900/15 text-slate-800 shadow-amber-950/10"
                : "bg-slate-900 border-amber-500/30 text-slate-100 shadow-black/70"
            }`}
          >
            {/* Modal Header */}
            <div
              className={`p-5 sm:p-6 border-b flex items-start justify-between gap-4 ${
                isLight
                  ? "bg-gradient-to-r from-amber-100/90 via-[#fdfbf7] to-orange-100/80 border-amber-900/15"
                  : "bg-gradient-to-r from-amber-950/80 via-slate-900 to-orange-950/60 border-amber-900/30"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                      isLight
                        ? "bg-amber-100 text-amber-900 border-amber-300"
                        : "bg-amber-500/20 text-amber-300 border-amber-400/30"
                    }`}
                  >
                    Expanded State Directory
                  </span>
                </div>
                <h2
                  id="all-states-modal-title"
                  className={`text-xl sm:text-2xl font-black tracking-tight ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  All {allStateNames.length} States & Union Territories
                </h2>
                <p
                  className={`text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed ${
                    isLight ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  Explore every region without truncated names or missing details. Click any state to immediately focus on it on the 3D map and view all curated signature dishes.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close all states directory"
                className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all group shrink-0 ${
                  isLight
                    ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/80 shadow-sm hover:scale-105 active:scale-95"
                    : "bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800/50 hover:scale-105 active:scale-95"
                }`}
              >
                <X className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              </button>
            </div>

            {/* Filter Bar: Search + Regional Buttons */}
            <div
              className={`p-4 border-b flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 ${
                isLight ? "bg-amber-50/60 border-amber-900/10" : "bg-slate-950/60 border-slate-800"
              }`}
            >
              {/* Search input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter states by name, dish or flavor..."
                  className={`w-full text-xs sm:text-sm pl-10 pr-9 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all ${
                    isLight
                      ? "bg-white text-slate-800 placeholder-slate-400 border-amber-900/15 shadow-inner"
                      : "bg-slate-900 text-slate-100 placeholder-slate-400 border-slate-700 shadow-inner"
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    title="Clear filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Regional Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500 shrink-0 mr-1" />
                <button
                  onClick={() => setActiveRegion(null)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeRegion === null
                      ? "bg-amber-500 text-slate-950 shadow-sm font-extrabold"
                      : isLight
                      ? "bg-white text-slate-700 hover:bg-amber-100/70 border border-amber-900/10"
                      : "bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-750"
                  }`}
                >
                  All ({allStateNames.length})
                </button>
                {Object.entries(CULINARY_REGIONS).map(([key, reg]) => (
                  <button
                    key={key}
                    onClick={() => setActiveRegion(key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeRegion === key
                        ? "bg-amber-500 text-slate-950 shadow-sm font-extrabold"
                        : isLight
                        ? "bg-white text-slate-700 hover:bg-amber-100/70 border border-amber-900/10"
                        : "bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-750"
                    }`}
                  >
                    {reg.name}
                  </button>
                ))}
              </div>
            </div>

            {/* States Content Grid - Completely UNTRUNCATED */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin">
              {filteredStates.length === 0 ? (
                <div
                  className={`text-center py-12 px-4 rounded-2xl border ${
                    isLight
                      ? "bg-amber-50/60 border-amber-200 text-slate-600"
                      : "bg-slate-850/60 border-slate-800 text-slate-300"
                  }`}
                >
                  <Search className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                  <h4 className="font-bold text-sm">No matching states found</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Try searching for another state name, dish or resetting the regional filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveRegion(null);
                    }}
                    className="mt-3 px-4 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-sm hover:bg-amber-400 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {filteredStates.map((stateName) => {
                    const data = FOOD_DATA[stateName];
                    const isCurrent = selectedState === stateName;
                    const regionName = getStateRegionName(stateName);

                    return (
                      <div
                        key={stateName}
                        onClick={() => {
                          onSelectState(stateName);
                          onClose();
                        }}
                        className={`rounded-2xl p-4 border transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-md ${
                          isCurrent
                            ? isLight
                              ? "bg-amber-100/90 border-amber-400 ring-2 ring-amber-400/30"
                              : "bg-amber-950/40 border-amber-400 ring-2 ring-amber-500/30"
                            : isLight
                            ? "bg-white hover:bg-amber-50/70 border-amber-900/10 hover:border-amber-400/80"
                            : "bg-slate-850/90 hover:bg-slate-800 border-slate-750 hover:border-amber-500/40"
                        }`}
                      >
                        <div>
                          {/* Card Top: Emoji + Full Name + Region Badge */}
                          <div className="flex items-start justify-between gap-2.5 mb-2">
                            <div className="flex items-start gap-2.5 min-w-0">
                              <span className="text-2xl shrink-0 filter drop-shadow">
                                {STATE_EMOJIS[stateName] || "🍲"}
                              </span>
                              <div>
                                {/* Full State Name without any truncation */}
                                <h3
                                  className={`font-black text-sm sm:text-base leading-snug transition-colors group-hover:text-amber-600 dark:group-hover:text-amber-400 ${
                                    isLight ? "text-slate-900" : "text-white"
                                  }`}
                                >
                                  {stateName}
                                </h3>
                                <span
                                  className={`text-[10px] font-semibold ${
                                    isLight ? "text-amber-800" : "text-amber-300/80"
                                  }`}
                                >
                                  {regionName}
                                </span>
                              </div>
                            </div>
                            <span
                              className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                                data?.classification === "Union Territory"
                                  ? isLight
                                    ? "bg-purple-100 text-purple-900 border-purple-200"
                                    : "bg-purple-900/30 text-purple-300 border-purple-700/40"
                                  : isLight
                                  ? "bg-amber-100 text-amber-900 border-amber-200"
                                  : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                              }`}
                            >
                              {data?.classification || "State"}
                            </span>
                          </div>

                          {/* Full Tagline (Un-truncated) */}
                          <p
                            className={`text-xs leading-relaxed mb-3 ${
                              isLight ? "text-slate-600" : "text-slate-300"
                            }`}
                          >
                            {data?.tagline}
                          </p>

                          {/* Signature Dishes Preview */}
                          <div className="space-y-1.5 pt-2 border-t border-amber-900/10 dark:border-slate-750">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
                                isLight ? "text-slate-500" : "text-slate-400"
                              }`}
                            >
                              <Flame className="w-3 h-3 text-orange-500" />
                              {data?.dishes.length} Signature Dishes:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {data?.dishes.map((dish, i) => (
                                <span
                                  key={dish.id || i}
                                  className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                                    isLight
                                      ? "bg-amber-50/80 text-amber-950 border-amber-200/80"
                                      : "bg-slate-900 text-amber-200/90 border-slate-700"
                                  }`}
                                >
                                  {dish.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom: Click to Explore */}
                        <div
                          className={`mt-4 pt-2 border-t flex items-center justify-between text-xs font-bold ${
                            isLight
                              ? "border-amber-900/10 text-amber-800 group-hover:text-amber-950"
                              : "border-slate-750/80 text-amber-400 group-hover:text-amber-300"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                            Explore on 3D Map
                          </span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              className={`p-4 border-t flex items-center justify-between text-xs ${
                isLight ? "bg-amber-50/60 border-amber-900/15 text-slate-600" : "bg-slate-950/80 border-slate-800 text-slate-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>
                  Showing {filteredStates.length} of {allStateNames.length} total regions
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm transition-all"
              >
                Close Directory
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
