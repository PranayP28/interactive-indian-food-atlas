import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Search,
  X,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  Leaf,
  Compass,
  Check,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  DishInfographic,
  getAllUploadedImages,
  searchUploadedImages,
} from "../data/infographicsData";
import { useTheme } from "../context/ThemeContext";

interface ImageUploadSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  dishId?: string;
  dishName?: string;
  initialQuery?: string;
  initialStageNumber?: number;
  onSelectImageForStage?: (image: DishInfographic, stageNumber: number) => void;
}

export const ImageUploadSearchModal: React.FC<ImageUploadSearchModalProps> = ({
  isOpen,
  onClose,
  dishId,
  dishName,
  initialQuery = "",
  initialStageNumber = 1,
  onSelectImageForStage,
}) => {
  const { isLight } = useTheme();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedEra, setSelectedEra] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"dish" | "all">("dish");
  const [lightboxImage, setLightboxImage] = useState<DishInfographic | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeStageTarget, setActiveStageTarget] = useState<number>(initialStageNumber);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync state on open or props change
  useEffect(() => {
    if (isOpen) {
      setSearchQuery(initialQuery);
      setActiveStageTarget(initialStageNumber);
      if (initialQuery.trim().length > 0) {
        setActiveTab("all");
      } else if (dishId) {
        setActiveTab("dish");
      }
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setLightboxImage(null);
      setZoomLevel(1);
    }
  }, [isOpen, initialQuery, initialStageNumber, dishId]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, lightboxImage, onClose]);

  const allImages = useMemo(() => getAllUploadedImages(), []);

  // Filtered images calculation
  const displayedImages = useMemo(() => {
    if (activeTab === "dish" && dishId && !searchQuery.trim()) {
      let filtered = allImages.filter((img) => img.dishId === dishId);
      if (selectedEra !== "All") {
        filtered = filtered.filter((img) =>
          img.era.toLowerCase().includes(selectedEra.toLowerCase())
        );
      }
      return filtered;
    }

    return searchUploadedImages(searchQuery, selectedEra, activeTab === "dish" ? dishId : undefined);
  }, [allImages, activeTab, dishId, searchQuery, selectedEra]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  const eraOptions = ["All", "1800s Traditional", "1900s Early Modern", "Contemporary / Present"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 backdrop-blur-md bg-black/75 animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 ${
          isLight
            ? "bg-[#faf8f5] border-amber-900/20 text-slate-800 shadow-amber-950/20"
            : "bg-[#0b0e14] border-amber-500/30 text-slate-100 shadow-black/80"
        }`}
      >
        {/* ── MODAL HEADER ── */}
        <div
          className={`p-4 sm:p-6 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
            isLight
              ? "bg-amber-50/80 border-amber-900/10"
              : "bg-slate-900/80 border-slate-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold shadow-md border ${
                isLight
                  ? "bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 border-amber-300"
                  : "bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 border-amber-400/40"
              }`}
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-cinzel font-bold text-lg sm:text-xl">
                  Image Upload & Ingredients Search
                </h3>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    isLight
                      ? "bg-amber-100 text-amber-900 border-amber-300"
                      : "bg-amber-500/10 text-amber-300 border-amber-500/30"
                  }`}
                >
                  223 Verified Assets
                </span>
              </div>
              <p
                className={`text-xs mt-0.5 ${
                  isLight ? "text-slate-600" : "text-slate-400"
                }`}
              >
                High-resolution recipe infographics, historical stage formulations, and pantry ingredient visuals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors ${
                isLight
                  ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-300"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
              }`}
              title="Close (Esc)"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── SEARCH & FILTER CONTROLS BAR ── */}
        <div
          className={`p-4 border-b space-y-3 ${
            isLight ? "bg-white border-amber-900/10" : "bg-slate-950/60 border-slate-800"
          }`}
        >
          {/* Main Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ingredient (e.g. ginger, saffron, mustard, ghee), dish name, epoch, or recipe keywords..."
              className={`w-full pl-10 pr-10 py-2.5 rounded-2xl border text-sm font-medium transition-all outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isLight
                  ? "bg-amber-50/50 border-amber-900/15 text-slate-900 placeholder:text-slate-400"
                  : "bg-slate-900/90 border-slate-700 text-white placeholder:text-slate-500"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Scope Tabs & Era Filter Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1">
            {/* View Scope Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl border border-amber-500/20 bg-black/20 text-xs font-semibold">
              {dishId && (
                <button
                  type="button"
                  onClick={() => setActiveTab("dish")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === "dish"
                      ? "bg-amber-500 text-slate-950 shadow-sm"
                      : isLight
                        ? "text-slate-700 hover:text-black"
                        : "text-slate-400 hover:text-white"
                  }`}
                >
                  This Dish ({dishName || dishId})
                </button>
              )}
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === "all"
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : isLight
                      ? "text-slate-700 hover:text-black"
                      : "text-slate-400 hover:text-white"
                }`}
              >
                Browse All Uploads (223)
              </button>
            </div>

            {/* Era Filter Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 mr-1">
                Era:
              </span>
              {eraOptions.map((era) => (
                <button
                  key={era}
                  type="button"
                  onClick={() => setSelectedEra(era)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border whitespace-nowrap transition-all ${
                    selectedEra === era
                      ? isLight
                        ? "bg-amber-200/90 text-amber-950 border-amber-400 font-bold"
                        : "bg-amber-500/25 text-amber-300 border-amber-500/60 font-bold"
                      : isLight
                        ? "bg-white text-slate-600 border-slate-200 hover:border-amber-300"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {era}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── IMAGE CARDS GRID (SCROLLABLE) ── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {displayedImages.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-cinzel font-bold text-lg">No Matching Images Found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No uploaded infographics matched "{searchQuery}". Try searching for specific ingredients like "rice", "mustard", "chilli", or switch to "Browse All Uploads".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedEra("All");
                  setActiveTab("all");
                }}
                className="mt-2 px-4 py-1.5 text-xs font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedImages.map((imgItem) => {
                const isCurrentDish = imgItem.dishId === dishId;

                return (
                  <div
                    key={imgItem.id}
                    className={`group relative rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      isLight
                        ? "bg-white border-amber-900/15 shadow-sm hover:border-amber-400"
                        : "bg-slate-900/90 border-slate-800 hover:border-amber-500/50"
                    }`}
                  >
                    {/* Thumbnail Container */}
                    <div
                      className="relative aspect-[16/10] overflow-hidden bg-black/60 cursor-pointer"
                      onClick={() => {
                        setLightboxImage(imgItem);
                        setZoomLevel(1);
                      }}
                    >
                      <img
                        src={imgItem.image}
                        alt={imgItem.title}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      {/* Hover Overlay with Zoom Prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <span className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          Inspect High-Res
                        </span>
                      </div>

                      {/* Era Tag & Dish Badge */}
                      <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-sm">
                          {imgItem.era}
                        </span>
                        {isCurrentDish && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500 text-slate-950 shadow-md">
                            Active Dish
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4
                          className={`font-sans font-bold text-sm leading-snug line-clamp-1 tracking-tight ${
                            isLight ? "text-slate-900" : "text-amber-100"
                          }`}
                          title={imgItem.title}
                        >
                          {imgItem.title}
                        </h4>
                        <p
                          className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                            isLight ? "text-slate-600" : "text-slate-400"
                          }`}
                        >
                          {imgItem.subtitle}
                        </p>
                      </div>

                      {/* Key Ingredients Chips */}
                      {imgItem.ingredients && imgItem.ingredients.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {imgItem.ingredients.slice(0, 4).map((ing, i) => (
                            <span
                              key={i}
                              className={`text-[10px] px-2 py-0.5 rounded-md border ${
                                isLight
                                  ? "bg-amber-100/60 border-amber-300/70 text-amber-950"
                                  : "bg-slate-800 border-slate-700 text-amber-200/90"
                              }`}
                            >
                              {ing}
                            </span>
                          ))}
                          {imgItem.ingredients.length > 4 && (
                            <span className="text-[10px] px-1 text-slate-500 self-center">
                              +{imgItem.ingredients.length - 4} more
                            </span>
                          )}
                        </div>
                      )}

                      {/* Footer Actions */}
                      <div className="pt-2 border-t flex items-center justify-between gap-2 border-slate-800/40">
                        <button
                          type="button"
                          onClick={() => {
                            setLightboxImage(imgItem);
                            setZoomLevel(1);
                          }}
                          className={`text-xs font-semibold flex items-center gap-1 ${
                            isLight
                              ? "text-amber-800 hover:text-amber-900"
                              : "text-amber-400 hover:text-amber-300"
                          }`}
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          View Full
                        </button>

                        {onSelectImageForStage && (
                          <button
                            type="button"
                            onClick={() => {
                              onSelectImageForStage(imgItem, activeStageTarget);
                              onClose();
                            }}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-amber-500/40 transition-colors flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Use in Stage {activeStageTarget}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── MODAL FOOTER ── */}
        <div
          className={`p-3.5 sm:p-4 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
            isLight ? "bg-amber-50/70 border-amber-900/10 text-slate-600" : "bg-slate-950 border-slate-800 text-slate-400"
          }`}
        >
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              Showing {displayedImages.length} of {allImages.length} uploaded visual recipe assets
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400">Target Stage:</span>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setActiveStageTarget(num)}
                className={`px-2 py-0.5 rounded-md text-[11px] font-bold border transition-colors ${
                  activeStageTarget === num
                    ? "bg-amber-500 text-slate-950 border-amber-400"
                    : isLight
                      ? "bg-white text-slate-700 border-slate-300"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                }`}
              >
                Stage {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HIGH DEFINITION LIGHTBOX VIEWER ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          {/* Lightbox Header */}
          <div
            className="p-4 flex items-center justify-between border-b border-white/10 bg-black/60 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                  {lightboxImage.era}
                </span>
                <h3 className="font-sans font-bold text-white text-base sm:text-lg tracking-tight">
                  {lightboxImage.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                {lightboxImage.subtitle}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs text-amber-300 font-mono px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 ml-2 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white transition-colors"
                title="Close Lightbox (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container */}
          <div
            className="flex-1 overflow-auto p-4 flex items-center justify-center cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.image}
              alt={lightboxImage.title}
              style={{
                transform: `scale(${zoomLevel})`,
                transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
                maxHeight: "85vh",
                maxWidth: "90vw",
              }}
              className="object-contain shadow-2xl rounded-lg"
            />
          </div>

          {/* Lightbox Footer Actions */}
          <div
            className="p-3 border-t border-white/10 bg-black/60 flex items-center justify-between text-xs text-slate-400 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Click and scroll to inspect recipe composition & ingredients</span>
            {onSelectImageForStage && (
              <button
                type="button"
                onClick={() => {
                  onSelectImageForStage(lightboxImage, activeStageTarget);
                  setLightboxImage(null);
                  onClose();
                }}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                Assign to Stage {activeStageTarget}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
