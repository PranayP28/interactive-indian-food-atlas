import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  ChevronRight,
  CheckCircle2,
  Share2,
  Layers,
  Milestone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { FOOD_DATA, getAllDishes, getStateByDishId } from "../data/foodData";
import {
  getCulinaryJourneyForDish,
  DishCulinaryJourney,
} from "../data/culinaryHistoryData";
import { GsapMotionPathTimeline } from "./GsapMotionPathTimeline";
import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "./ui/ThemeToggle";
import { AboutModal } from "./AboutModal";
import { AllStatesModal } from "./AllStatesModal";
import { CulinaryChatbot } from "./CulinaryChatbot";
import { DishContextInfo } from "../services/grokService";
import {
  DishNarratorController,
  NarrationStatus,
  isSpeechSynthesisSupported,
} from "../utils/dishNarrator";

interface BharatDishExperienceProps {
  dishId: string;
  onBackToMap: () => void;
  onSelectDish: (newDishId: string) => void;
  onSelectState?: (stateName: string) => void;
}
export const BharatDishExperience: React.FC<BharatDishExperienceProps> = ({
  dishId,
  onBackToMap,
  onSelectDish,
  onSelectState,
}) => {
  const { isLight } = useTheme();
  const allDishes = getAllDishes();
  const journey: DishCulinaryJourney = getCulinaryJourneyForDish(dishId);
  const currentDish = allDishes.find((d) => d.id === dishId) || allDishes[0];
  const dishContextInfo: DishContextInfo = {
    id: currentDish.id,
    name: currentDish.name,
    alternateName: currentDish.alternateName,
    state: currentDish.state,
    category: currentDish.category,
    description: currentDish.description,
    ingredients: currentDish.ingredients,
    tasteProfile: currentDish.tasteProfile,
    era: currentDish.era,
    keyTechnique: currentDish.keyTechnique,
    culturalIntroduction: journey?.culturalIntroduction,
    earliestDocumentedEvidence: journey?.earliestDocumentedEvidence,
    stages: journey?.stages?.map((s) => ({
      stageName: s.stageName,
      headline: s.headline,
      detail: s.narrative,
    })),
  };

  // UI state
  const [showSourcesModal, setShowSourcesModal] = useState(false);
  const [showDishSwitcher, setShowDishSwitcher] = useState(false);
  const [showAllStatesModal, setShowAllStatesModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Text-to-Speech Narrator state
  const [narrationStatus, setNarrationStatus] = useState<NarrationStatus>("idle");
  const [activeSpeechStage, setActiveSpeechStage] = useState<number | null>(null);
  const narratorRef = useRef<DishNarratorController | null>(null);

  // Update URL hash when dishId changes
  useEffect(() => {
    window.location.hash = `/dish/${dishId}`;
  }, [dishId]);

  // Initialize and update narrator controller when dishId changes
  useEffect(() => {
    if (narratorRef.current) {
      narratorRef.current.destroy();
      narratorRef.current = null;
    }

    const controller = new DishNarratorController({
      dishId,
      dishName: currentDish.name,
      onStatusChange: (status) => setNarrationStatus(status),
      onStageChange: (stage) => setActiveSpeechStage(stage),
    });

    narratorRef.current = controller;
    setNarrationStatus("idle");
    setActiveSpeechStage(null);

    return () => {
      controller.destroy();
      narratorRef.current = null;
    };
  }, [dishId, currentDish.name]);

  // Clean stop on page unload or visibility hide
  useEffect(() => {
    const handleUnload = () => {
      narratorRef.current?.destroy();
    };
    window.addEventListener("beforeunload", handleUnload);
    window.addEventListener("pagehide", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      window.removeEventListener("pagehide", handleUnload);
    };
  }, []);

  const handleToggleNarration = () => {
    if (!isSpeechSynthesisSupported()) {
      alert("Text-to-Speech is not supported by your browser.");
      return;
    }
    if (!narratorRef.current) return;

    if (narrationStatus === "playing") {
      narratorRef.current.pause();
    } else if (narrationStatus === "paused") {
      narratorRef.current.resume();
    } else {
      narratorRef.current.play();
    }
  };

  const handleStopNarration = () => {
    if (!narratorRef.current) return;
    narratorRef.current.stop();
  };

  const copyShareLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#/dish/${dishId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col font-sans transition-colors duration-300 ${
        isLight
          ? "bg-[#faf8f5] text-slate-800 selection:bg-amber-500/20 selection:text-amber-900"
          : "bg-[#07090e] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200"
      }`}
    >
      {/* ── TOP CINEMATIC NAVIGATION BAR ── */}
      <header
        className={`sticky top-0 z-50 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 py-2 px-3 sm:px-4 md:px-6 lg:px-8 backdrop-blur-md border-b transition-colors duration-300 md:h-16 md:py-0 ${
          isLight
            ? "bg-[#faf8f5]/90 border-amber-900/15 shadow-sm shadow-amber-950/5 text-slate-800"
            : "bg-[#07090e]/90 border-amber-900/25 text-slate-100"
        }`}
      >
        {/* Left: Return & Brand */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 justify-between md:justify-start">
          <button
            onClick={onBackToMap}
            className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all text-xs font-semibold group shadow-sm border shrink-0 whitespace-nowrap ${
              isLight
                ? "bg-amber-100/80 hover:bg-amber-200/90 text-amber-950 border-amber-300/80 shadow-amber-950/5"
                : "bg-slate-900/80 hover:bg-amber-950/40 text-amber-300 hover:text-amber-200 border-amber-700/30"
            }`}
            aria-label="Return to the interactive India map"
            title="Explore India Map"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform shrink-0" />
            <span className="whitespace-nowrap">Explore India Map</span>
          </button>

          <div className={`h-4 w-px shrink-0 ${isLight ? "bg-amber-900/20" : "bg-slate-800"}`} />

          {/* Wordmark */}
          <div className="flex items-baseline gap-2 shrink-0">
            <span
              className={`font-cinzel font-black tracking-[0.2em] text-sm md:text-base whitespace-nowrap ${
                isLight ? "text-slate-900" : "text-amber-100"
              }`}
            >
              BHARAT
            </span>
            <span
              className={`hidden xl:inline font-cormorant italic text-xs tracking-wide whitespace-nowrap ${
                isLight ? "text-amber-800/90" : "text-amber-300/80"
              }`}
            >
              The Living History of Indian Food
            </span>
          </div>
        </div>

        {/* Right: Navigation Items (MotionPath, All States, All Dishes, Citations, Audio, Theme, About, Share) */}
        <nav
          aria-label="Dish navigation tools"
          className="flex items-center gap-2 overflow-x-auto scrollbar-thin py-1 px-1 max-w-full shrink min-w-0 md:ml-auto pr-3"
        >
          {/* MotionPath Waypoints Button (orange button) */}
          <div
            className={`flex items-center p-0.5 rounded-2xl border shadow-inner shrink-0 transition-colors ${
              isLight
                ? "bg-amber-100/70 border-amber-300/80"
                : "bg-black/50 border-amber-500/30"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                document.getElementById("motionpath-waypoints")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              aria-current="page"
              title="MotionPath Waypoints"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap shrink-0 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Milestone className="w-3.5 h-3.5 shrink-0" />
              <span>MotionPath Waypoints</span>
            </button>
          </div>

          {/* Expand to All States Button */}
          <button
            onClick={() => setShowAllStatesModal(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shadow-sm shrink-0 whitespace-nowrap active:scale-95 cursor-pointer ${
              isLight
                ? "bg-amber-100/90 hover:bg-amber-200 text-amber-950 border-amber-300/80 hover:border-amber-400"
                : "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40"
            }`}
            title={`Expand to all ${Object.keys(FOOD_DATA).length} Indian states and territories`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>All States ({Object.keys(FOOD_DATA).length})</span>
          </button>

          {/* Dish Switcher Button */}
          <button
            onClick={() => setShowDishSwitcher(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all shrink-0 whitespace-nowrap active:scale-95 cursor-pointer ${
              isLight
                ? "bg-white/90 hover:bg-white text-slate-800 border-amber-900/15 shadow-sm hover:border-amber-400"
                : "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-slate-600"
            }`}
            aria-label="Open dish selector"
            title="Browse all dishes"
          >
            <Layers className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>All {getAllDishes().length} Dishes</span>
          </button>

          {/* Sources & Citations Modal Button */}
          <button
            onClick={() => setShowSourcesModal(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all shrink-0 whitespace-nowrap active:scale-95 cursor-pointer ${
              isLight
                ? "bg-white/90 hover:bg-white text-slate-800 border-amber-900/15 shadow-sm hover:border-amber-400"
                : "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-slate-600"
            }`}
            title="View Scholarly Sources & Historical Citations"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Citations ({journey?.citations?.length ?? 0})</span>
          </button>

          {/* Read Aloud Narration Sound Icon */}
          {narrationStatus === "idle" ? (
            <button
              onClick={handleToggleNarration}
              className={`p-2 rounded-xl border text-xs transition-all shrink-0 active:scale-95 cursor-pointer ${
                isLight
                  ? "bg-white/90 text-slate-600 border-amber-900/15 hover:text-slate-900 hover:border-amber-400 shadow-sm"
                  : "bg-slate-850 text-slate-400 border-slate-750 hover:text-slate-200 hover:border-amber-500/40"
              }`}
              title="Listen to Dish Narration"
              aria-label="Listen to dish narration"
            >
              <Volume2 className="w-4 h-4 shrink-0" />
            </button>
          ) : narrationStatus === "playing" ? (
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleToggleNarration}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isLight
                    ? "bg-amber-200 text-amber-950 border-amber-400 shadow-sm"
                    : "bg-amber-500/20 text-amber-300 border-amber-500/40"
                }`}
                title="Pause Narration"
                aria-label="Pause narration"
              >
                <Volume2 className="w-4 h-4 animate-pulse text-amber-600 shrink-0" />
                <Pause className="w-3.5 h-3.5 fill-amber-800 text-amber-800 dark:fill-amber-300 dark:text-amber-300 shrink-0" />
              </button>
              <button
                onClick={handleStopNarration}
                className={`p-1.5 rounded-xl border text-xs transition-all shrink-0 cursor-pointer ${
                  isLight
                    ? "bg-white/90 hover:bg-red-50 text-red-600 border-red-200 shadow-sm"
                    : "bg-slate-800 hover:bg-red-950/40 text-red-400 border-red-900/40"
                }`}
                title="Stop Narration"
                aria-label="Stop narration"
              >
                <Square className="w-3.5 h-3.5 fill-current shrink-0" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleToggleNarration}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isLight
                    ? "bg-amber-100/90 text-amber-950 border-amber-300 shadow-sm"
                    : "bg-slate-800 text-amber-300 border-amber-600/40"
                }`}
                title="Resume Narration"
                aria-label="Resume narration"
              >
                <VolumeX className="w-4 h-4 text-amber-600 shrink-0" />
                <Play className="w-3.5 h-3.5 fill-amber-800 text-amber-800 dark:fill-amber-300 dark:text-amber-300 shrink-0" />
              </button>
              <button
                onClick={handleStopNarration}
                className={`p-1.5 rounded-xl border text-xs transition-all shrink-0 cursor-pointer ${
                  isLight
                    ? "bg-white/90 hover:bg-red-50 text-red-600 border-red-200 shadow-sm"
                    : "bg-slate-800 hover:bg-red-950/40 text-red-400 border-red-900/40"
                }`}
                title="Stop Narration"
                aria-label="Stop narration"
              >
                <Square className="w-3.5 h-3.5 fill-current shrink-0" />
              </button>
            </div>
          )}

          {/* Theme Toggle (Light / Dark) */}
          <div className="shrink-0 flex items-center">
            <ThemeToggle />
          </div>

          {/* About Team / Profile Button */}
          <button
            type="button"
            onClick={() => setShowAboutModal(true)}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-medium transition-all shrink-0 whitespace-nowrap active:scale-95 cursor-pointer ${
              isLight
                ? "bg-white/90 hover:bg-white text-slate-800 border-amber-900/15 shadow-sm hover:border-amber-400"
                : "bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700 hover:border-slate-600"
            }`}
            title="About / Team Profile"
            aria-label="About team profile"
          >
            <Users className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>About</span>
          </button>

          {/* Share Link */}
          <button
            onClick={copyShareLink}
            className={`p-2 rounded-xl border transition-all shrink-0 active:scale-95 cursor-pointer ${
              isLight
                ? "bg-white/90 hover:bg-white text-slate-700 border-amber-900/15 shadow-sm hover:border-amber-400"
                : "bg-slate-850 hover:bg-slate-750 text-slate-300 border-slate-750 hover:border-slate-650"
            }`}
            title="Copy Direct Link to Dish Journey"
            aria-label="Copy direct link to dish"
          >
            <Share2 className="w-4 h-4 shrink-0" />
          </button>
        </nav>
      </header>

      {/* ── COPIED LINK TOAST ── */}
      {copiedLink && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-950 border border-emerald-500 text-emerald-200 text-xs px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Direct link copied to clipboard!</span>
        </div>
      )}

      {/* ── MOTIONPATH WAYPOINTS WITH GENERATION RECIPES & SKIPER6 ── */}
      <div id="motionpath-waypoints" className="flex-1 w-full scroll-mt-16 animate-in fade-in duration-300">
        <GsapMotionPathTimeline
          dishId={dishId}
          dishName={currentDish.name}
          dish={currentDish}
          activeSpeechStage={activeSpeechStage}
        />
      </div>

      {/* ── SCHOLARLY SOURCES & CITATIONS MODAL ── */}
      {showSourcesModal && (
        <div
          className={`fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center p-4 ${
            isLight ? "bg-slate-900/40" : "bg-black/80"
          }`}
        >
          <div
            className={`border rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 ${
              isLight
                ? "bg-[#faf8f5] border-amber-900/15 text-slate-800"
                : "bg-slate-900 border-amber-600/40 text-slate-100"
            }`}
          >
            <div
              className={`p-5 border-b flex items-center justify-between ${
                isLight ? "bg-amber-50/80 border-amber-900/15" : "bg-slate-950/60 border-slate-800"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className={`w-5 h-5 ${isLight ? "text-amber-700" : "text-amber-400"}`} />
                <div>
                  <h3
                    className={`font-cinzel font-bold text-base ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Historical Sources & Citations
                  </h3>
                  <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                    Academic references supporting the chronological narrative of {currentDish.name}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSourcesModal(false)}
                aria-label="Cancel and close sources"
                title="Cancel"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all group ${
                  isLight
                    ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/80 shadow-sm hover:scale-105 active:scale-95"
                    : "bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800/50 hover:scale-105 active:scale-95"
                }`}
              >
                <X className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 scrollbar-thin">
              <div
                className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                  isLight
                    ? "bg-amber-100/70 border-amber-300 text-amber-950"
                    : "bg-amber-950/30 border-amber-700/30 text-amber-200"
                }`}
              >
                <span className={`font-bold ${isLight ? "text-amber-900" : "text-amber-300"}`}>
                  Confidence Summary:{" "}
                </span>
                {journey?.confidenceSummary ?? "Historical documentation verifies regional authenticity."}
              </div>

              {(journey?.citations || []).map((cite, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border space-y-2 ${
                    isLight
                      ? "bg-white border-amber-900/15 text-slate-800 shadow-sm"
                      : "bg-black/40 border-slate-800 text-slate-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4
                        className={`font-bold text-sm ${
                          isLight ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {cite.authorOrSource}
                      </h4>
                      <p
                        className={`font-serif italic text-xs ${
                          isLight ? "text-amber-800" : "text-amber-300"
                        }`}
                      >
                        {cite.workTitle} ({cite.publicationYearOrPeriod})
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                        isLight
                          ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                          : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      }`}
                    >
                      {cite.confidenceRating}
                    </span>
                  </div>

                  <p
                    className={`text-xs leading-relaxed ${
                      isLight ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    "{cite.quoteOrFinding}"
                  </p>

                  <div
                    className={`text-[10px] pt-1 border-t ${
                      isLight
                        ? "text-slate-500 border-amber-900/10"
                        : "text-slate-500 border-slate-800/60"
                    }`}
                  >
                    Location: {cite.citationDetails}
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`p-4 border-t flex justify-end ${
                isLight ? "bg-amber-50/60 border-amber-900/15" : "bg-slate-950/80 border-slate-800"
              }`}
            >
              <button
                onClick={() => setShowSourcesModal(false)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md"
              >
                Close Sources
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── ALL DISHES SWITCHER DRAWER ── */}
      {showDishSwitcher && (
        <div
          className={`fixed inset-0 z-50 backdrop-blur-md flex justify-end animate-in fade-in duration-200 ${
            isLight ? "bg-slate-900/40" : "bg-black/80"
          }`}
        >
          <div
            className={`border-l w-full max-w-md h-full flex flex-col shadow-2xl ${
              isLight
                ? "bg-[#faf8f5] border-amber-900/20 text-slate-900"
                : "bg-slate-900 border-amber-700/40 text-slate-100"
            }`}
          >
            <div
              className={`p-5 border-b flex items-center justify-between ${
                isLight ? "bg-amber-50/90 border-amber-900/15" : "bg-slate-950/80 border-slate-800"
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className={`w-5 h-5 ${isLight ? "text-amber-700" : "text-amber-400"}`} />
                <div>
                  <h3
                    className={`font-cinzel font-bold text-base ${
                      isLight ? "text-slate-900" : "text-white"
                    }`}
                  >
                    Signature Culinary Archive
                  </h3>
                  <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                    {getAllDishes().length} Iconic Dishes across {Object.keys(FOOD_DATA).length} Indian Regions
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDishSwitcher(false)}
                aria-label="Cancel and close dish drawer"
                title="Cancel"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all group ${
                  isLight
                    ? "bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/80 shadow-sm hover:scale-105 active:scale-95"
                    : "bg-red-950/40 hover:bg-red-900/60 text-red-400 border border-red-800/50 hover:scale-105 active:scale-95"
                }`}
              >
                <X className="w-4 h-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              </button>
            </div>

            {/* Quick Button to Expand to All States */}
            <div className={`p-3 border-b ${isLight ? "bg-white" : "bg-slate-900"}`}>
              <button
                onClick={() => {
                  setShowDishSwitcher(false);
                  setShowAllStatesModal(true);
                }}
                className={`w-full py-2 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isLight
                    ? "bg-gradient-to-r from-amber-50 to-orange-50 hover:bg-amber-100 text-amber-950 border-amber-300 shadow-sm"
                    : "bg-slate-800 hover:bg-slate-750 text-amber-300 border-amber-500/30"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Expand to All {Object.keys(FOOD_DATA).length} States & Territories</span>
              </button>
            </div>

            {/* Quick Pilot Jump Banner */}
            <div
              className={`p-4 border-b space-y-2 ${
                isLight
                  ? "bg-amber-100/60 border-amber-300/60"
                  : "bg-amber-950/30 border-amber-800/30"
              }`}
            >
              <span
                className={`text-[10px] uppercase font-bold tracking-wider ${
                  isLight ? "text-amber-900" : "text-amber-400"
                }`}
              >
                Contrasting Flagship Pilots:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onSelectDish("masala-dosa");
                    setShowDishSwitcher(false);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    dishId === "masala-dosa"
                      ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm"
                      : isLight
                      ? "bg-white hover:bg-amber-50 text-slate-800 border-amber-900/15 shadow-sm"
                      : "bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold">Masala Dosa</div>
                  <div
                    className={`text-[10px] ${isLight ? "text-slate-500" : "opacity-80"}`}
                  >
                    Karnataka • Fermented Grain
                  </div>
                </button>
                <button
                  onClick={() => {
                    onSelectDish("hyderabadi-biryani");
                    setShowDishSwitcher(false);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    dishId === "hyderabadi-biryani"
                      ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-sm"
                      : isLight
                      ? "bg-white hover:bg-amber-50 text-slate-800 border-amber-900/15 shadow-sm"
                      : "bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700"
                  }`}
                >
                  <div className="text-xs font-bold">Dum Biryani</div>
                  <div
                    className={`text-[10px] ${isLight ? "text-slate-500" : "opacity-80"}`}
                  >
                    Telangana • Royal Handi
                  </div>
                </button>
              </div>
            </div>

            {/* Dishes List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin">
              {allDishes.map((d) => {
                const isSelected = d.id === dishId;
                const state = getStateByDishId(d.id);
                return (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDish(d.id);
                      setShowDishSwitcher(false);
                    }}
                    className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? isLight
                          ? "bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-sm"
                          : "bg-amber-500/20 border-amber-400/80 text-white"
                        : isLight
                        ? "bg-white hover:bg-amber-50/70 border-amber-900/10 text-slate-800 shadow-sm"
                        : "bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-xs ${
                            isLight ? "text-slate-900" : "text-white"
                          }`}
                        >
                          {d.name}
                        </span>
                        {d.hasPilot3D && (
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded font-black ${
                              isLight
                                ? "bg-amber-200 text-amber-950"
                                : "bg-amber-500/30 text-amber-300"
                            }`}
                          >
                            3D PILOT
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          isLight ? "text-slate-500" : "text-slate-400"
                        }`}
                      >
                        {state} • {d.tasteProfile}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isLight ? "text-slate-400" : "text-slate-500"}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* About Team Modal */}
      <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)} />

      {/* All States Directory Modal */}
      <AllStatesModal
        isOpen={showAllStatesModal}
        onClose={() => setShowAllStatesModal(false)}
        onSelectState={(stateName) => {
          setShowAllStatesModal(false);
          onSelectState?.(stateName);
          onBackToMap();
        }}
      />

      {/* Floating Culinary Chatbot (Ask me anything! - Grok Cloud AI) */}
      <CulinaryChatbot dish={dishContextInfo} isLight={isLight} />
    </div>
  );
};
