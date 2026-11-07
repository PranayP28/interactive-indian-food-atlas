import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flame,
  ChefHat,
  Clock,
  Scroll,
  ArrowDown,
  Compass,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Search,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
  Leaf,
  Layers,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import { GenerationWaypoint, getGenerationsForDish } from "../data/generationRecipesData";
import {
  UNRESOLVED_IMAGE,
  getDishPhotography,
  stageImageUrl,
} from "../data/photography";
import { getStateMainImage } from "../data/stateMainImages";
import type { Dish } from "../data/foodData";
import { Skiper6Summarizer, GenerationSummaryMember } from "./ui/skiper6";
import { useTheme } from "../context/ThemeContext";
import { CinematicParallaxJourney, CinematicStage, CinematicOutro } from "./CinematicParallaxJourney";
import { ImageUploadSearchModal } from "./ImageUploadSearchModal";
import {
  DishInfographic,
  getInfographicsForDish,
  getInfographicForStage,
} from "../data/infographicsData";

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

interface GsapMotionPathTimelineProps {
  dishId: string;
  dishName: string;
  dish: Dish;
  onSelectWaypoint?: (waypoint: GenerationWaypoint) => void;
  activeSpeechStage?: number | null;
}

export const GsapMotionPathTimeline: React.FC<GsapMotionPathTimelineProps> = ({
  dishId,
  dishName,
  dish,
  onSelectWaypoint,
  activeSpeechStage,
}) => {
  const { isLight } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGCircleElement>(null);
  const waypoints = useMemo(
    () => getGenerationsForDish(dishId).filter((waypoint) => waypoint.generationNumber <= 3),
    [dishId]
  );

  // Available uploaded infographics for this dish
  const dishInfographics = useMemo(() => getInfographicsForDish(dishId), [dishId]);

  // Visual mode per stage: 'level' (photo) or 'uploaded' (infographic / recipe card)
  const [stageVisualModes, setStageVisualModes] = useState<Record<number, "level" | "uploaded">>({
    1: "uploaded",
    2: "uploaded",
    3: "uploaded",
  });

  // Custom assigned uploaded images per stage (if user picked one via modal)
  const [customStageImages, setCustomStageImages] = useState<Record<number, string>>({});

  // Ingredient search filter per stage
  const [ingredientFilters, setIngredientFilters] = useState<Record<number, string>>({});

  // Selected ingredient per stage
  const [selectedIngredients, setSelectedIngredients] = useState<Record<number, string | null>>({});

  // Image Upload Search Modal state
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [modalInitialQuery, setModalInitialQuery] = useState<string>("");
  const [modalTargetStage, setModalTargetStage] = useState<number>(1);

  // High-res Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    src: string;
    title: string;
    subtitle?: string;
    era?: string;
  } | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState<number>(1);

  // The cinematic journey uses the three shared historical stages + Main_img state assets.
  const cinematicStages: CinematicStage[] = useMemo(() => {
    const photography = getDishPhotography(dishId);
    const stateMainImg = getStateMainImage(dish.state);

    const entries = [
      { key: "origin", numeral: "01", eyebrow: "Stage I", title: "Origin & History", photo: photography?.origin, stageNum: 1 },
      {
        key: "ingredients",
        numeral: "02",
        eyebrow: "Stage II",
        title:
          dishId === "hyderabadi-biryani" ||
          dishId === "hyderabadi-haleem" ||
          dishId === "masala-dosa" ||
          dishId === "bisi-bele-bath" ||
          dishId === "indori-poha" ||
          dishId === "bhutte-ka-kees" ||
          dishId === "dal-bafla" ||
          dishId === "makki-di-roti-sarson-saag" ||
          dishId === "butter-chicken" ||
          dishId === "amritsari-kulcha" ||
          dishId === "vada-pav" ||
          dishId === "puran-poli" ||
          dishId === "dhokla" ||
          dishId === "undhiyu" ||
          dishId === "dal-baati-churma" ||
          dishId === "laal-maas"
            ? "Evolution of Food"
            : "Regional & Seasonal Produce",
        photo: photography?.ingredients,
        stageNum: 2,
      },
      { key: "method", numeral: "03", eyebrow: "Stage III", title: "Recipe & Making", photo: photography?.method, stageNum: 3 },
    ] as const;

    return entries.map((entry, index) => {
      const verifiedUrl = stageImageUrl(entry.photo);
      const stageInfographic = getInfographicForStage(dishId, entry.stageNum);

      // Primary image source:
      // State-level cuisine poster image throughout all scroll-effect image boxes for all dishes in that state.
      // If a state poster is missing (Goa, Lakshadweep, Manipur), cleanly falls back to verified dish photography.
      const resolvedImage = stateMainImg || verifiedUrl || stageInfographic?.image || UNRESOLVED_IMAGE;

      const next = entries[index + 1];
      let nextUrl = next ? (stageImageUrl(next.photo) || getInfographicForStage(dishId, next.stageNum)?.image) : undefined;

      if (dishId === "puran-poli") {
        if (index === 0) {
          nextUrl = "/images/dishes/puran-poli-2.png";
        } else if (index === 1) {
          nextUrl = "/images/dishes/puran-poli-1.png";
        } else if (index === 2) {
          nextUrl = undefined;
        }
      } else if (dishId === "makki-di-roti-sarson-saag") {
        if (index === 1) {
          nextUrl = "/images/dishes/makki-2.png";
        } else if (index === 2) {
          nextUrl = undefined;
        }
      } else if (dishId === "butter-chicken") {
        if (index === 0) {
          nextUrl = "/images/dishes/butter-chicken-ingredients.png";
        } else if (index === 1) {
          nextUrl = "/images/dishes/butter-chicken-2.png";
        } else if (index === 2) {
          nextUrl = undefined;
        }
      } else if (dishId === "dhokla") {
        if (index === 0) {
          nextUrl = "/images/dishes/dhokla-1.png";
        } else if (index === 1) {
          nextUrl = "/images/dishes/dhokla-2.png";
        }
      } else if (dishId === "undhiyu") {
        if (index === 0) {
          nextUrl = "/images/dishes/undhiyu-1.png";
        } else if (index === 1) {
          nextUrl = "/images/dishes/undhiyu-2.png";
        }
      } else if (dishId === "dal-baati-churma") {
        if (index === 0) {
          nextUrl = "/images/dishes/dal-baati-churma-1.png";
        } else if (index === 1) {
          nextUrl = "/images/dishes/dal-baati-churma-2.png";
        }
      } else if (dishId === "laal-maas") {
        if (index === 0) {
          nextUrl = "/images/dishes/laal-maas-1.png";
        }
      }

      const caption =
        dishId === "dhokla" && index === 1
          ? "Evolution of Food — from ancient fermented chickpea cakes to modern steamed nylon and khaman varieties."
          : dishId === "undhiyu" && index === 1
          ? "Evolution of Food — from subterranean earthen matka roasting under coal embers to modern domestic stovetops."
          : dishId === "dal-baati-churma" && index === 1
          ? "Evolution of Food — from sand-baked wartime army rations to Rajasthan royal celebratory thali feast."
          : dishId === "laal-maas" && index === 1
          ? "Evolution of Food — from rustic Rajput hunting camp game braises to signature scarlet mutton curry with Dhungar smoke."
          : entry.photo?.caption || (stateMainImg ? `${dish.state} — Regional heritage & culinary traditions` : undefined);

      return {
        id: `${dishId}-stage-${entry.key}`,
        image: resolvedImage,
        imageAlt: stateMainImg ? `${dish.state} Regional Cuisine — ${entry.title}` : (entry.photo ? `${dishName} — ${entry.title}` : `${dish.state} — ${entry.title}`),
        secondaryImage: nextUrl || undefined,
        eyebrow: entry.eyebrow,
        title: entry.title,
        tagline: caption,
        numeral: entry.numeral,
      };
    });
  }, [dishId, dishName, dish.state]);

  const cinematicOutro: CinematicOutro | undefined = useMemo(() => {
    const photography = getDishPhotography(dishId);
    const platedUrl = stageImageUrl(photography?.plated);
    const stateMainImg = getStateMainImage(dish.state);
    const modernInfo = getInfographicForStage(dishId, 3);
    const finalImage = platedUrl || modernInfo?.image || stateMainImg;
    if (!finalImage) return undefined;
    return {
      kicker: "The Living Heritage",
      title: dishName,
      tagline: `${dish.state} · Centuries of culinary craft in every preparation.`,
      image: finalImage,
    };
  }, [dishId, dishName, dish.state]);

  const [activeWaypointIdx, setActiveWaypointIdx] = useState<number>(0);
  const waypointRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup GSAP MotionPath scroll animation
  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    const traveler = travelerRef.current;

    if (!container || !path || !traveler) return;

    // Create GSAP ScrollTrigger timeline moving the traveler along the SVG path
    const ctx = gsap.context(() => {
      gsap.to(traveler, {
        scrollTrigger: {
          trigger: container,
          start: "top 30%",
          end: "bottom 80%",
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress;
            const currentIdx = Math.min(
              waypoints.length - 1,
              Math.floor(progress * waypoints.length)
            );
            setActiveWaypointIdx(currentIdx);
          },
        },
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none",
      });

      // Animate waypoint nodes as they enter viewport
      waypointRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0.35, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [waypoints.length]);

  // Convert waypoints into Skiper6 summarizer format
  const skiper6Members: GenerationSummaryMember[] = waypoints.map((w) => {
    const stageInfo = getInfographicForStage(dishId, w.generationNumber);
    return {
      id: `gen-${w.generationNumber}`,
      name: w.eraTitle,
      roleOrEra: w.centuryLabel,
      yearPeriod: w.yearRange,
      image: stageInfo?.image || (w.generationNumber === 2 ? UNRESOLVED_IMAGE : w.image),
      summary: w.shortDescription,
      keyContribution: w.technologicalLeap,
      signatureIngredient: w.generationRecipe.ingredientsList[0] || "Ancient Grain",
      primarySource: w.documentedCitation,
    };
  });

  const scrollToWaypoint = (idx: number) => {
    setActiveWaypointIdx(idx);
    const target = waypointRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Automatically scroll to waypoint when narration moves to a new stage
  useEffect(() => {
    if (activeSpeechStage && activeSpeechStage >= 1 && activeSpeechStage <= waypoints.length) {
      scrollToWaypoint(activeSpeechStage - 1);
    }
  }, [activeSpeechStage, waypoints.length]);

  // Open Image Upload Search pre-targeted to a stage or ingredient
  const openImageUploadSearch = (stageNum: number, ingredientQuery = "") => {
    setModalTargetStage(stageNum);
    setModalInitialQuery(ingredientQuery);
    setIsSearchModalOpen(true);
  };

  // Assign an image selected from the modal to a stage
  const handleSelectImageForStage = (image: DishInfographic, stageNum: number) => {
    setCustomStageImages((prev) => ({ ...prev, [stageNum]: image.image }));
    setStageVisualModes((prev) => ({ ...prev, [stageNum]: "uploaded" }));
  };

  // Toggle visual mode for a stage
  const toggleStageMode = (stageNum: number, mode: "level" | "uploaded") => {
    setStageVisualModes((prev) => ({ ...prev, [stageNum]: mode }));
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-[#f8f5ee] text-slate-800" : "bg-[#08090e] text-slate-100"
      }`}
    >
      {/* ── SECTION HEADER ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="flex items-center justify-center gap-2">
          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
            isLight
              ? "bg-amber-100 text-amber-900 border-amber-300 shadow-sm"
              : "bg-amber-500/10 text-amber-300 border-amber-500/30"
          }`}>
            Chronological Epochs & Verified Recipe Infographics
          </span>
        </div>
        <h2 className={`font-cinzel font-black text-3xl sm:text-4xl md:text-5xl tracking-tight ${
          isLight ? "text-slate-900" : "text-white"
        }`}>
          The Living Evolution of {dishName}
        </h2>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto ${isLight ? "text-slate-600" : "text-slate-400"}`}>
          Examine each stage's level photography alongside high-resolution illustrated recipe cards and documented ingredient formulations from the archival upload catalog.
        </p>

        {/* Global Image Upload Search Trigger Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => openImageUploadSearch(1, "")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold border shadow-lg transition-all duration-300 hover:scale-105 ${
              isLight
                ? "bg-white hover:bg-amber-100/80 text-amber-950 border-amber-300/80 shadow-amber-950/5"
                : "bg-slate-900/90 hover:bg-slate-800 text-amber-300 border-amber-500/40 shadow-black/50"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Search All 223 Uploaded Recipe Infographics & Ingredients</span>
          </button>
        </div>
      </div>

      {/* ── CINEMATIC SCROLL-DRIVEN PARALLAX JOURNEY ── */}
      <div className="-mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 mb-24">
        <CinematicParallaxJourney
          key={dishId}
          stages={cinematicStages}
          label={`${dishName} · Through the Ages`}
          note={
            getStateMainImage(dish.state)
              ? `featuring ${dish.state} regional heritage photography & credited stage imagery`
              : "stage imagery: photographs chosen for this dish, each credited to its photographer"
          }
          backdropText={dishName}
          outro={cinematicOutro}
          scrollMovementCount={dishId === "fara" ? 2 : undefined}
          movementHeadings={
            dishId === "fara"
              ? [
                  [
                    "Stage I – Origins & Documented References",
                    "Stage II – Regional & Seasonal Produce",
                  ],
                  ["Stage III – Traditional Technique to Modern Kitchens"],
                ]
              : undefined
          }
          scrollPerStage={dishId === "fara" ? 0.75 : 1.1}
        />
      </div>

      {/* ── THE MOTIONPATH WAYPOINTS ROUTE CONTAINER ── */}
      <div className="relative max-w-6xl mx-auto">
        {/* Continuous SVG MotionPath in the Background */}
        <svg
          className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-24 h-full pointer-events-none z-10 hidden sm:block"
          viewBox="0 0 100 2400"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Subtle Ambient Track */}
          <path
            d="M 50 0 C 15 200, 85 400, 50 600 C 15 800, 85 1000, 50 1200 C 15 1400, 85 1600, 50 1800 C 15 2000, 85 2200, 50 2400"
            stroke={isLight ? "rgba(180, 83, 9, 0.25)" : "rgba(217, 119, 6, 0.2)"}
            strokeWidth="3"
            strokeDasharray="6 6"
          />

          {/* Active MotionPath Track */}
          <path
            ref={pathRef}
            d="M 50 0 C 15 200, 85 400, 50 600 C 15 800, 85 1000, 50 1200 C 15 1400, 85 1600, 50 1800 C 15 2000, 85 2200, 50 2400"
            stroke="url(#motionGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Glowing Traveler Spark (Animated along path by GSAP) */}
          <circle
            ref={travelerRef}
            r="7"
            fill="#fbbf24"
            filter="url(#glowFilter)"
          />

          {/* Gradients and Filters */}
          <defs>
            <linearGradient id="motionGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* ── THE WAYPOINT MILESTONE CARDS (GENERATIONS) ── */}
        <div className="space-y-24 relative z-20">
          {waypoints.map((waypoint, idx) => {
            const stageNum = waypoint.generationNumber;
            const isEven = idx % 2 === 0;
            const isActive = activeWaypointIdx === idx;

            // Resolved uploaded infographic for this stage
            const stageInfographic = getInfographicForStage(dishId, stageNum);
            const customImage = customStageImages[stageNum];
            const hasUploadedAsset = Boolean(stageInfographic || customImage);

            // Active visual mode: 'level' (photo) or 'uploaded' (infographic)
            const currentMode = stageVisualModes[stageNum] || (hasUploadedAsset ? "uploaded" : "level");

            // Compute active image to display in stage
            const activeImageSrc =
              currentMode === "uploaded" && (customImage || stageInfographic?.image)
                ? (customImage || stageInfographic?.image)!
                : waypoint.image;

            const activeImageLabel =
              currentMode === "uploaded"
                ? stageInfographic?.title || `Stage ${stageNum} Recipe Infographic`
                : `${waypoint.headline} (Level Photo)`;

            // Filtered ingredients for this stage
            const stageFilter = (ingredientFilters[stageNum] || "").trim().toLowerCase();
            const allStageIngredients = waypoint.generationRecipe.ingredientsList;
            const displayedIngredients = stageFilter
              ? allStageIngredients.filter((ing) => ing.toLowerCase().includes(stageFilter))
              : allStageIngredients;

            const selectedIng = selectedIngredients[stageNum];
            const isStageActiveSpeech = activeSpeechStage === stageNum;

            return (
              <div
                key={waypoint.generationNumber}
                id={`dish-stage-${stageNum}`}
                ref={(el) => {
                  waypointRefs.current[idx] = el;
                }}
                className={`relative transition-all duration-500 rounded-3xl ${
                  isStageActiveSpeech
                    ? "ring-2 ring-amber-500/80 p-2 sm:p-3 bg-amber-500/5 shadow-2xl shadow-amber-500/10"
                    : ""
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start transition-all duration-300 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* ── COLUMN 1: LEVEL PHOTO & UPLOADED INFOGRAPHIC CARD (5 cols) ── */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } space-y-3`}
                  >
                    <div
                      className={`relative rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 ${
                        isLight
                          ? "border-amber-900/15 bg-white shadow-amber-950/10"
                          : "border-amber-500/40 bg-slate-950 shadow-black/80"
                      }`}
                    >
                      {/* Top Control Bar: Mode Toggle & Search Buttons */}
                      <div
                        className={`p-2.5 sm:p-3 border-b flex items-center justify-between gap-2 text-xs ${
                          isLight
                            ? "bg-amber-50/80 border-amber-900/10 text-slate-800"
                            : "bg-slate-900/80 border-slate-800 text-slate-200"
                        }`}
                      >
                        {/* Dual-Mode Selector: Level Photo vs Uploaded Infographic */}
                        <div className="flex items-center gap-1 p-0.5 rounded-xl border border-amber-500/20 bg-black/20 text-[11px] font-bold">
                          <button
                            type="button"
                            onClick={() => toggleStageMode(stageNum, "level")}
                            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                              currentMode === "level"
                                ? "bg-amber-500 text-slate-950 shadow-sm"
                                : isLight
                                  ? "text-slate-600 hover:text-black"
                                  : "text-slate-400 hover:text-white"
                            }`}
                            title="View Level Photograph"
                          >
                            <ImageIcon className="w-3 h-3" />
                            <span>Level Photo</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleStageMode(stageNum, "uploaded")}
                            className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                              currentMode === "uploaded"
                                ? "bg-amber-500 text-slate-950 shadow-sm"
                                : isLight
                                  ? "text-slate-600 hover:text-black"
                                  : "text-slate-400 hover:text-white"
                            }`}
                            title="View Uploaded Recipe Infographic"
                          >
                            <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" />
                            <span>Uploaded Recipe</span>
                            {hasUploadedAsset && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            )}
                          </button>
                        </div>

                        {/* Quick Action: Search Uploads Modal & Lightbox Zoom */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => openImageUploadSearch(stageNum, "")}
                            className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-colors ${
                              isLight
                                ? "bg-amber-100 hover:bg-amber-200 text-amber-950 border-amber-300"
                                : "bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30"
                            }`}
                            title="Search / Browse Uploaded Images"
                            aria-label="Open image upload search"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Search</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setLightboxData({
                                src: activeImageSrc,
                                title: activeImageLabel,
                                subtitle: waypoint.headline,
                                era: waypoint.eraTitle,
                              });
                              setLightboxZoom(1);
                            }}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              isLight
                                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-300"
                                : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                            }`}
                            title="Fullscreen High-Res Zoom"
                            aria-label="Open image lightbox"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Main Image Frame */}
                      <div
                        className="relative aspect-[16/10] overflow-hidden bg-[#07090e] cursor-pointer group"
                        onClick={() => {
                          setLightboxData({
                            src: activeImageSrc,
                            title: activeImageLabel,
                            subtitle: waypoint.headline,
                            era: waypoint.eraTitle,
                          });
                          setLightboxZoom(1);
                        }}
                      >
                        <img
                          src={activeImageSrc}
                          alt={activeImageLabel}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.hidden = true;
                          }}
                        />

                        {/* Hover Overlay with Inspect Badge */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <Maximize2 className="w-3.5 h-3.5" />
                            Click to Inspect Full-Resolution
                          </span>
                        </div>

                        {/* Top-Left Mode Indicator Pill */}
                        <div className="absolute top-2.5 left-2.5 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/85 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-md">
                            {currentMode === "uploaded" ? "✨ Uploaded Infographic" : "📷 Level Photograph"}
                          </span>
                        </div>

                        {/* Bottom Metadata Pill */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-medium text-white/90 bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm truncate max-w-[80%]">
                            {activeImageLabel}
                          </span>
                          <span className="text-[9px] font-mono text-amber-300/90 bg-black/75 px-1.5 py-0.5 rounded">
                            Stage 0{stageNum}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Caption / Upload Section Quick Link */}
                      <div
                        className={`p-3 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] ${
                          isLight
                            ? "bg-amber-50/50 border-amber-900/10 text-slate-700"
                            : "bg-slate-900/60 border-slate-800 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <Compass className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="truncate">
                            {currentMode === "uploaded"
                              ? stageInfographic?.subtitle || "Documented archival recipe guide"
                              : waypoint.headline}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => openImageUploadSearch(stageNum, "")}
                          className="shrink-0 text-amber-500 hover:text-amber-400 font-bold flex items-center gap-1"
                        >
                          <span>Browse Upload Archive</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* ── CENTER WAYPOINT MARKER (Desktop Node) ── */}
                  <div className="hidden lg:flex lg:col-span-2 justify-center items-center lg:order-2 pt-16">
                    <div
                      onClick={() => scrollToWaypoint(idx)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-cinzel font-black text-sm cursor-pointer transition-all duration-300 shadow-xl border ${
                        isActive
                          ? "bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 border-white scale-110 shadow-amber-500/50"
                          : isLight
                            ? "bg-white text-amber-900 border-amber-900/15 hover:scale-105 shadow-md"
                            : "bg-slate-900 text-amber-300 border-amber-700/40 hover:scale-105"
                      }`}
                    >
                      0{waypoint.generationNumber}
                    </div>
                  </div>

                  {/* ── COLUMN 2: INGREDIENTS SEARCH & GENERATION RECIPE (5 cols) ── */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-3" : "lg:order-1"
                    } space-y-4`}
                  >
                    {/* Waypoint Header */}
                    <div>
                      <div
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-1 ${
                          isLight ? "text-amber-800" : "text-amber-400"
                        }`}
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{waypoint.eraTitle}</span>
                        <span>•</span>
                        <span className={isLight ? "text-slate-500" : "text-slate-400"}>
                          {waypoint.yearRange}
                        </span>
                      </div>

                      <h3
                        className={`font-cinzel font-bold text-2xl sm:text-3xl leading-tight ${
                          isLight ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {waypoint.headline}
                      </h3>
                    </div>

                    {/* Short Historical Description */}
                    <div
                      className={`text-sm leading-relaxed ${
                        isLight ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      {waypoint.shortDescription.includes("\n") ? (
                        <div className="space-y-1.5">
                          {waypoint.shortDescription.split("\n").map((line, lIdx) => (
                            <p key={lIdx} className="leading-snug">{line}</p>
                          ))}
                        </div>
                      ) : (
                        <p>{waypoint.shortDescription}</p>
                      )}
                    </div>

                    {/* ── STAGE INGREDIENTS MATRIX & SEARCH SECTION ── */}
                    {(dishId === "dhokla" ||
                    dishId === "undhiyu" ||
                    dishId === "dal-baati-churma" ||
                    dishId === "laal-maas" ||
                    dishId === "vada-pav" ||
                    dishId === "puran-poli" ||
                    dishId === "hyderabadi-biryani" ||
                    dishId === "hyderabadi-haleem" ||
                    dishId === "masala-dosa" ||
                    dishId === "bisi-bele-bath"
                      ? stageNum === 3
                      : true) &&
                      allStageIngredients.length > 0 && (
                      <div
                        className={`p-4 rounded-2xl border shadow-xl space-y-3 ${
                          isLight
                            ? "bg-white/95 border-amber-900/15 text-slate-800 shadow-amber-950/5"
                            : "bg-slate-900/90 border-amber-500/30 text-slate-100 shadow-black/40"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-2.5 border-slate-700/40">
                          <div className="flex items-center gap-2">
                            <Leaf className={`w-4 h-4 ${isLight ? "text-amber-700" : "text-amber-400"}`} />
                            <h4
                              className={`font-cinzel font-bold text-xs sm:text-sm ${
                                isLight ? "text-amber-900" : "text-amber-200"
                              }`}
                            >
                              Ingredients Known in this Epoch
                            </h4>
                          </div>
                          <span
                            className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border self-start sm:self-center ${
                              isLight
                                ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                                : "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                            }`}
                          >
                            {allStageIngredients.length} Documented Ingredients
                          </span>
                        </div>

                        {/* Live Ingredient Search Bar */}
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-500" />
                          <input
                            type="text"
                            value={ingredientFilters[stageNum] || ""}
                            onChange={(e) =>
                              setIngredientFilters((prev) => ({
                                ...prev,
                                [stageNum]: e.target.value,
                              }))
                            }
                            placeholder={`Filter ingredients in Stage 0${stageNum} (e.g. rice, ginger, spices)...`}
                            className={`w-full pl-8 pr-8 py-1.5 rounded-xl border text-xs font-medium outline-none transition-all focus:ring-1 focus:ring-amber-500 ${
                              isLight
                                ? "bg-amber-50/50 border-amber-900/15 text-slate-900 placeholder:text-slate-400"
                                : "bg-slate-950/70 border-slate-800 text-white placeholder:text-slate-500"
                            }`}
                          />
                          {ingredientFilters[stageNum] && (
                            <button
                              onClick={() =>
                                setIngredientFilters((prev) => ({
                                  ...prev,
                                  [stageNum]: "",
                                }))
                              }
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-[11px]"
                            >
                              ×
                            </button>
                          )}
                        </div>

                        {/* Interactive Ingredient Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {displayedIngredients.map((ing, i) => {
                            const isSelected = selectedIng === ing;
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => {
                                  setSelectedIngredients((prev) => ({
                                    ...prev,
                                    [stageNum]: isSelected ? null : ing,
                                  }));
                                }}
                                className={`group px-2.5 py-1 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md font-bold scale-105"
                                    : isLight
                                      ? "bg-amber-50/90 text-amber-950 border-amber-300/80 hover:bg-amber-100 hover:border-amber-400"
                                      : "bg-slate-800/80 text-amber-100 border-slate-700 hover:bg-slate-750 hover:border-amber-500/50"
                                }`}
                                title={`Click to search upload images for ${ing}`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform"></span>
                                <span>{ing}</span>
                              </button>
                            );
                          })}
                          {displayedIngredients.length === 0 && (
                            <p className="text-xs text-slate-400 italic py-1">
                              No ingredient matches "{ingredientFilters[stageNum]}".
                            </p>
                          )}
                        </div>

                        {/* Selected Ingredient Quick Search Prompt */}
                        {selectedIng && (
                          <div
                            className={`p-2 rounded-xl border flex items-center justify-between gap-2 text-xs animate-in fade-in duration-200 ${
                              isLight
                                ? "bg-amber-100/90 border-amber-300 text-amber-950"
                                : "bg-amber-950/30 border-amber-800/40 text-amber-200"
                            }`}
                          >
                            <div className="flex items-center gap-1.5 truncate">
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span className="truncate">
                                Selected: <strong>{selectedIng}</strong>
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => openImageUploadSearch(stageNum, selectedIng)}
                              className="shrink-0 px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors flex items-center gap-1 text-[11px]"
                            >
                              <Search className="w-3 h-3" />
                              <span>Search in Uploads</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* ── THE GENERATION RECIPE BOX ── */}
                    {!(
                      (dishId === "hyderabadi-biryani" ||
                        dishId === "hyderabadi-haleem" ||
                        dishId === "masala-dosa" ||
                        dishId === "bisi-bele-bath") &&
                      stageNum === 3
                    ) && (
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border shadow-xl space-y-3 ${
                          isLight
                            ? "bg-white/95 border-amber-900/15 text-slate-800 shadow-amber-950/5"
                            : "bg-slate-900/90 border-amber-500/30 text-slate-100"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between border-b pb-2 ${
                            isLight ? "border-amber-900/10" : "border-slate-800"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <ChefHat
                              className={`w-4 h-4 ${isLight ? "text-amber-700" : "text-amber-400"}`}
                            />
                            <h4
                              className={`font-cinzel font-bold text-xs sm:text-sm ${
                                isLight ? "text-amber-900" : "text-amber-200"
                              }`}
                            >
                              {waypoint.generationRecipe.recipeName}
                            </h4>
                          </div>
                          <span
                            className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                              isLight
                                ? "bg-amber-100 text-amber-900 border-amber-300"
                                : "text-amber-400 bg-amber-500/10 border-amber-500/30"
                            }`}
                          >
                            Epoch Technique
                          </span>
                        </div>

                        {/* Cookware & Heat */}
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div
                            className={`p-2 rounded-xl border ${
                              isLight
                                ? "bg-amber-50/70 border-amber-200/70"
                                : "bg-black/40 border-slate-800"
                            }`}
                          >
                            <span
                              className={`text-[10px] uppercase font-bold block ${
                                isLight ? "text-amber-900/70" : "text-slate-400"
                              }`}
                            >
                              Cookware:
                            </span>
                            <span
                              className={`font-medium truncate block ${
                                isLight ? "text-slate-900" : "text-white"
                              }`}
                            >
                              {waypoint.generationRecipe.historicalCookware}
                            </span>
                          </div>
                          <div
                            className={`p-2 rounded-xl border ${
                              isLight
                                ? "bg-amber-50/70 border-amber-200/70"
                                : "bg-black/40 border-slate-800"
                            }`}
                          >
                            <span
                              className={`text-[10px] uppercase font-bold block ${
                                isLight ? "text-amber-900/70" : "text-slate-400"
                              }`}
                            >
                              Heat Source:
                            </span>
                            <span
                              className={`font-medium truncate block ${
                                isLight ? "text-orange-700" : "text-orange-300"
                              }`}
                            >
                              {waypoint.generationRecipe.heatSource}
                            </span>
                          </div>
                        </div>

                        {/* Preparation Method */}
                        <div
                          className={`pt-2 text-xs leading-relaxed border-t ${
                            isLight
                              ? "text-slate-700 border-amber-900/10"
                              : "text-slate-300 border-slate-800/80"
                          }`}
                        >
                          <strong className={isLight ? "text-amber-900" : "text-amber-300"}>
                            Method:{" "}
                          </strong>
                          {waypoint.generationRecipe.preparationMethod.includes("\n") ? (
                            <div className="mt-1 space-y-1">
                              {waypoint.generationRecipe.preparationMethod.split("\n").map((step, sIdx) => (
                                <p key={sIdx}>{step}</p>
                              ))}
                            </div>
                          ) : (
                            waypoint.generationRecipe.preparationMethod
                          )}
                        </div>

                        {/* Contemporary Contrast */}
                        <div
                          className={`p-2.5 rounded-xl border text-[11px] leading-relaxed ${
                            isLight
                              ? "bg-amber-100/60 border-amber-300/80 text-amber-950"
                              : "bg-amber-950/20 border-amber-800/30 text-amber-200/90"
                          }`}
                        >
                          <strong className={isLight ? "text-amber-900" : "text-amber-400"}>
                            Era Contrast:{" "}
                          </strong>
                          {waypoint.generationRecipe.contemporaryDifference}
                        </div>
                      </div>
                    )}

                    {/* YouTube Recipe Link (below ingredients and recipe, at the end of Stage 3) */}
                    {(dishId === "hyderabadi-biryani" ||
                      dishId === "hyderabadi-haleem" ||
                      dishId === "masala-dosa" ||
                      dishId === "bisi-bele-bath" ||
                      dishId === "indori-poha" ||
                      dishId === "bhutte-ka-kees" ||
                      dishId === "dal-bafla" ||
                      dishId === "makki-di-roti-sarson-saag" ||
                      dishId === "butter-chicken" ||
                      dishId === "amritsari-kulcha" ||
                      dishId === "vada-pav" ||
                      dishId === "puran-poli" ||
                      dishId === "dhokla" ||
                      dishId === "undhiyu" ||
                      dishId === "dal-baati-churma" ||
                      dishId === "laal-maas") &&
                      stageNum === 3 && (
                      <div className="pt-2 relative z-30">
                        <a
                          href={
                            dishId === "hyderabadi-haleem"
                              ? "https://www.youtube.com/watch?v=dPpERMQzICs"
                              : dishId === "masala-dosa"
                              ? "https://www.youtube.com/watch?v=e9XFHjdw3Cg"
                              : dishId === "bisi-bele-bath"
                              ? "https://www.youtube.com/watch?v=VEArdyBWvdw"
                              : dishId === "laal-maas"
                              ? "https://youtu.be/bG2nwUSWezg?si=aMRMKL__enemVXzn"
                              : dishId === "dal-baati-churma"
                              ? "https://youtu.be/IdAYLQmSEj8?si=Ye0ose7VOrO7fHJO"
                              : dishId === "undhiyu"
                              ? "https://youtu.be/76WP69qtDi8?si=pJ2OxBhrMlE4jino"
                              : dishId === "dhokla"
                              ? "https://youtu.be/w_2eb9uaXns?si=KIDHVXoEFHrjkhiR"
                              : dishId === "puran-poli"
                              ? "https://youtu.be/l7Efb-HjDPU?si=EscTTWw7kdAoJfmO"
                              : dishId === "vada-pav"
                              ? "https://youtu.be/r4saZD0J_gU?si=5bMEbxfAfzxEhTd3"
                              : dishId === "indori-poha"
                              ? "https://youtu.be/XuttnylxuXY?si=ckFXqQLdjLIC2nCB"
                              : dishId === "bhutte-ka-kees"
                              ? "https://www.youtube.com/watch?v=ELuQxGELBgw"
                              : dishId === "dal-bafla"
                              ? "https://www.youtube.com/watch?v=3X0-I1GTOq0"
                              : dishId === "makki-di-roti-sarson-saag"
                              ? "https://youtu.be/-YpLF57Pnec?si=3h_Bvw7MUcU2QhTO"
                              : dishId === "butter-chicken"
                              ? "https://youtu.be/D_fYk8mBaF4?si=3DBkbxk0dzjxELBy"
                              : dishId === "amritsari-kulcha"
                              ? "https://www.youtube.com/watch?v=pbI8PkiSB8E"
                              : "https://www.youtube.com/watch?v=8Fw_zWPbGog"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-4 decoration-dotted transition-colors ${
                            isLight
                              ? "text-amber-800 hover:text-amber-950 decoration-amber-800/60"
                              : "text-amber-400 hover:text-amber-300 decoration-amber-400/60"
                          }`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Watch the full recipe on YouTube</span>
                        </a>
                      </div>
                    )}

                    {/* Scholarly Citation Link */}
                    <div
                      className={`flex items-center gap-2 text-[11px] pt-1 ${
                        isLight ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      <Scroll
                        className={`w-3.5 h-3.5 ${isLight ? "text-amber-700" : "text-amber-400"}`}
                      />
                      <span>Documented in: </span>
                      <span
                        className={
                          isLight ? "text-slate-900 font-semibold" : "text-slate-300 italic"
                        }
                      >
                        {waypoint.documentedCitation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── AT LAST: SKIPER-UI / SKIPER6 DETAILED GENERATION SUMMARIZER ── */}
      <div className="max-w-6xl mx-auto mt-28">
        <Skiper6Summarizer
          title={`Chronological Epoch Summarizer: ${dishName}`}
          subtitle={`Interactive summary matrix powered by @skiper-ui/skiper6 — explore the three historical stages, their primary sources, and documented innovations.`}
          members={skiper6Members}
        />
      </div>

      {/* ── IMAGE UPLOAD & INGREDIENTS SEARCH MODAL ── */}
      <ImageUploadSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        dishId={dishId}
        dishName={dishName}
        initialQuery={modalInitialQuery}
        initialStageNumber={modalTargetStage}
        onSelectImageForStage={handleSelectImageForStage}
      />

      {/* ── FULL-RESOLUTION STAGE LIGHTBOX MODAL ── */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-200"
          onClick={() => setLightboxData(null)}
        >
          {/* Lightbox Header */}
          <div
            className="p-4 flex items-center justify-between border-b border-white/10 bg-black/60 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2">
                {lightboxData.era && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                    {lightboxData.era}
                  </span>
                )}
                <h3 className="font-sans font-bold text-white text-base sm:text-lg tracking-tight">
                  {lightboxData.title}
                </h3>
              </div>
              {lightboxData.subtitle && (
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                  {lightboxData.subtitle}
                </p>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightboxZoom((prev) => Math.min(prev + 0.35, 3))}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLightboxZoom((prev) => Math.max(prev - 0.35, 0.7))}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLightboxZoom(1)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs text-amber-300 font-mono px-1">
                {Math.round(lightboxZoom * 100)}%
              </span>
              <button
                onClick={() => setLightboxData(null)}
                className="p-2 ml-2 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-200 hover:text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Viewport */}
          <div
            className="flex-1 overflow-auto p-4 flex items-center justify-center cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxData.src}
              alt={lightboxData.title}
              style={{
                transform: `scale(${lightboxZoom})`,
                transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
                maxHeight: "85vh",
                maxWidth: "90vw",
              }}
              className="object-contain shadow-2xl rounded-lg"
            />
          </div>

          {/* Lightbox Footer */}
          <div
            className="p-3 border-t border-white/10 bg-black/60 flex items-center justify-between text-xs text-slate-400 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Scroll or drag to inspect high-resolution recipe ingredients & historical details</span>
            <button
              onClick={() => setLightboxData(null)}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
