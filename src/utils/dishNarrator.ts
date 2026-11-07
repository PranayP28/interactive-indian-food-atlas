import { getDishStageHistory } from "../data/dishStages";
import { getAllDishes, getStateByDishId } from "../data/foodData";

export type NarrationStatus = "idle" | "playing" | "paused";

export interface NarrationStep {
  stageNumber: number; // 0 = Dish Name, 1 = Stage 1, 2 = Stage 2, 3 = Stage 3
  label: string;
  chunks: string[];
}

/**
 * Checks whether the browser supports the Web Speech API
 */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

/**
 * Selects the highest quality natural/neural English voice available in the browser.
 */
export function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  if (!isSpeechSynthesisSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter for English language voices
  const englishVoices = voices.filter((v) =>
    v.lang.toLowerCase().startsWith("en")
  );

  if (englishVoices.length === 0) {
    return voices[0] || null;
  }

  // Score candidate voices based on quality signals
  const scored = englishVoices.map((v) => {
    let score = 0;
    const name = v.name.toLowerCase();
    const lang = v.lang.toLowerCase();

    // Natural / Neural / Premium voices provide the clearest, human-like cadence
    if (name.includes("natural")) score += 60;
    if (name.includes("neural")) score += 55;
    if (name.includes("premium")) score += 50;
    if (name.includes("enhanced")) score += 45;
    if (name.includes("google") && lang.startsWith("en-us")) score += 40;
    if (name.includes("google") && lang.startsWith("en-in")) score += 35;
    if (name.includes("aria") || name.includes("jenny") || name.includes("guy")) score += 30;
    if (name.includes("neerja") || name.includes("heera")) score += 30;
    if (name.includes("samantha") || name.includes("ava") || name.includes("karen")) score += 25;
    if (lang === "en-us") score += 15;
    if (lang === "en-in") score += 12;
    if (lang === "en-gb") score += 10;
    if (v.default) score += 5;

    return { voice: v, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.voice || englishVoices[0];
}

/**
 * Helper to split long prose into natural sentence chunks for Web Speech API,
 * avoiding the known Chromium utterance timeout bug.
 */
function splitIntoSentences(text: string): string[] {
  if (!text) return [];
  // Split on sentence terminators followed by whitespace, or double newlines
  const rawParts = text
    .split(/(?<=[.!?])\s+|\n{2,}/g)
    .map((s) => s.trim())
    .filter(Boolean);

  return rawParts.length > 0 ? rawParts : [text.trim()];
}

/**
 * Helper to split multi-line lists (such as recipe steps or comparative lines)
 * into individual narration items, while softening slashes into natural pauses.
 */
function splitIntoLines(text: string): string[] {
  if (!text) return [];
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => l.replace(/\s*\/\s*/g, " — ")); // Replace slash with em-dash for smooth conversational cadence
}

/**
 * Extracts narration steps for a dish dynamically from the dataset.
 *
 * For Telangana dishes, strictly follows:
 * First: Dish Name
 * Second: Stage 1 (Main information ONLY. Excludes the "Evolution of Food" / epoch recipe box below)
 * Third: Stage 2 (ONLY the information inside the "Evolution of Food" section of Stage 2)
 * Fourth: Stage 3 (Recipe and ingredients information with names, quantities, and instructions)
 */
export function buildDishNarrationSteps(dishId: string, dishName: string): NarrationStep[] {
  const allDishes = getAllDishes();
  const currentDish = allDishes.find((d) => d.id === dishId);
  const state = (getStateByDishId(dishId) || currentDish?.state || "").trim().toLowerCase();
  const isTelangana = state === "telangana" || dishId === "hyderabadi-biryani" || dishId === "hyderabadi-haleem";

  const history = getDishStageHistory(dishId);
  const stages = history?.stages || [];

  const stage1 = stages.find((s) => s.number === 1 || s.key === "origin");
  const stage2 = stages.find((s) => s.number === 2 || s.key === "ingredients");
  const stage3 = stages.find((s) => s.number === 3 || s.key === "method");

  const steps: NarrationStep[] = [];

  // 1. Dish Name
  steps.push({
    stageNumber: 0,
    label: "Dish Name",
    chunks: [dishName || currentDish?.name || "Dish"],
  });

  // 2. Stage 1
  // Strictly read only the main narrative information of Stage 1.
  // Explicitly do NOT include the "Evolution of Food" box / epoch technique details below it.
  const stage1MainNarrative = stage1?.narrative || currentDish?.description || "";
  steps.push({
    stageNumber: 1,
    label: "Stage 1: Origin & History",
    chunks: splitIntoSentences(stage1MainNarrative),
  });

  // 3. Stage 2
  // For Telangana dishes: read ONLY the information inside the "Evolution of Food" section of Stage 2.
  if (isTelangana) {
    const stage2EvolutionText = stage2?.narrative || "";
    steps.push({
      stageNumber: 2,
      label: "Stage 2: Evolution of Food",
      chunks: splitIntoLines(stage2EvolutionText),
    });
  } else {
    // For other dishes: read Stage 2 narrative
    const stage2Text = stage2?.narrative || (currentDish?.ingredients?.length ? `Key ingredients include: ${currentDish.ingredients.join(", ")}.` : "");
    steps.push({
      stageNumber: 2,
      label: "Stage 2: Regional & Seasonal Produce",
      chunks: splitIntoSentences(stage2Text),
    });
  }

  // 4. Stage 3
  // Read the recipe and ingredients information (names, quantities, and preparation instructions).
  const stage3Text = stage3?.narrative || "";
  let stage3Chunks: string[] = [];

  if (stage3Text.includes("\n")) {
    // Preserve ingredients preamble and numbered steps
    stage3Chunks = splitIntoLines(stage3Text);
  } else if (stage3Text) {
    stage3Chunks = splitIntoSentences(stage3Text);
  } else if (currentDish) {
    stage3Chunks = [
      `Ingredients: ${currentDish.ingredients.join(", ")}.`,
      `Technique: ${currentDish.keyTechnique}.`,
    ];
  }

  steps.push({
    stageNumber: 3,
    label: "Stage 3: Recipe & Ingredients",
    chunks: stage3Chunks,
  });

  return steps;
}

export interface DishNarratorOptions {
  dishId: string;
  dishName: string;
  onStatusChange?: (status: NarrationStatus) => void;
  onStageChange?: (stageNumber: number | null) => void;
}

/**
 * Controller class managing Web Speech API playback, pause, resume, stop,
 * and automatic stage transition sequence.
 */
export class DishNarratorController {
  private dishId: string;
  private dishName: string;
  private steps: NarrationStep[] = [];
  private currentStepIndex = 0;
  private currentChunkIndex = 0;
  private status: NarrationStatus = "idle";
  private isDestroyed = false;
  private timerId: number | null = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private voice: SpeechSynthesisVoice | null = null;

  private onStatusChange?: (status: NarrationStatus) => void;
  private onStageChange?: (stageNumber: number | null) => void;

  constructor(options: DishNarratorOptions) {
    this.dishId = options.dishId;
    this.dishName = options.dishName;
    this.onStatusChange = options.onStatusChange;
    this.onStageChange = options.onStageChange;

    this.steps = buildDishNarrationSteps(this.dishId, this.dishName);
    this.initVoice();
  }

  private initVoice() {
    if (!isSpeechSynthesisSupported()) return;

    this.voice = getBestEnglishVoice();

    // Listen to voice changes if voices weren't ready on startup (common in Chrome)
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        if (!this.isDestroyed) {
          this.voice = getBestEnglishVoice();
        }
      };
    }
  }

  public getStatus(): NarrationStatus {
    return this.status;
  }

  public getCurrentStageNumber(): number | null {
    if (this.status === "idle") return null;
    return this.steps[this.currentStepIndex]?.stageNumber ?? null;
  }

  /**
   * Starts reading from the beginning (Dish Name) or resumes if paused.
   */
  public play() {
    if (this.status === "paused") {
      this.resume();
      return;
    }

    this.stop(); // Clean reset of any previous narration
    this.currentStepIndex = 0;
    this.currentChunkIndex = 0;
    this.setStatus("playing");
    this.playCurrentStep();
  }

  /**
   * Pauses the narration immediately.
   */
  public pause() {
    if (this.status !== "playing") return;

    this.clearTimer();
    if (isSpeechSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
    this.setStatus("paused");
  }

  /**
   * Resumes narration from where it was paused.
   */
  public resume() {
    if (this.status !== "paused") return;

    this.setStatus("playing");
    this.playCurrentChunk();
  }

  /**
   * Stops narration completely, cancelling speech immediately
   * and resetting sequence back to beginning.
   */
  public stop() {
    this.clearTimer();
    if (isSpeechSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
    this.activeUtterance = null;
    this.currentStepIndex = 0;
    this.currentChunkIndex = 0;
    this.setStatus("idle");
    this.notifyStageChange(null);
  }

  public destroy() {
    this.isDestroyed = true;
    this.stop();
  }

  private setStatus(newStatus: NarrationStatus) {
    this.status = newStatus;
    this.onStatusChange?.(newStatus);
  }

  private notifyStageChange(stageNumber: number | null) {
    this.onStageChange?.(stageNumber);
  }

  private clearTimer() {
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  private playCurrentStep() {
    if (this.isDestroyed || this.status !== "playing") return;

    if (this.currentStepIndex >= this.steps.length) {
      // Completed all stages (stopped after Stage 3)
      this.stop();
      return;
    }

    const currentStep = this.steps[this.currentStepIndex];
    this.notifyStageChange(currentStep.stageNumber);

    // If moving to a physical stage (Stage 1, 2, or 3), allow a brief pause for smooth scrolling
    const isStageTransition = currentStep.stageNumber > 0 && this.currentChunkIndex === 0;
    const transitionDelay = isStageTransition ? 450 : 50;

    this.timerId = window.setTimeout(() => {
      if (this.isDestroyed || this.status !== "playing") return;
      this.playCurrentChunk();
    }, transitionDelay);
  }

  private playCurrentChunk() {
    if (this.isDestroyed || this.status !== "playing") return;

    if (!isSpeechSynthesisSupported()) {
      console.warn("Speech Synthesis is not supported in this browser.");
      this.stop();
      return;
    }

    const currentStep = this.steps[this.currentStepIndex];
    if (!currentStep || this.currentChunkIndex >= currentStep.chunks.length) {
      // Step chunks completed: proceed to next stage
      this.currentStepIndex++;
      this.currentChunkIndex = 0;
      this.playCurrentStep();
      return;
    }

    const textToSpeak = currentStep.chunks[this.currentChunkIndex]?.trim();
    if (!textToSpeak) {
      // Skip empty chunk
      this.currentChunkIndex++;
      this.playCurrentChunk();
      return;
    }

    // Cancel any stray utterances to prevent overlapping speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Refresh voice if needed
    if (!this.voice) {
      this.voice = getBestEnglishVoice();
    }
    if (this.voice) {
      utterance.voice = this.voice;
      utterance.lang = this.voice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }

    // Comfortable, crystal-clear narration cadence
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      if (this.isDestroyed || this.status !== "playing") return;
      this.currentChunkIndex++;
      // Brief natural pause between sentences/chunks
      this.timerId = window.setTimeout(() => {
        if (this.isDestroyed || this.status !== "playing") return;
        this.playCurrentChunk();
      }, 250);
    };

    utterance.onerror = (e) => {
      // Ignore interruption errors triggered when user pauses or stops
      if (e.error === "interrupted" || e.error === "canceled") return;
      console.warn("SpeechSynthesis error:", e.error);
      if (this.status === "playing") {
        this.currentChunkIndex++;
        this.playCurrentChunk();
      }
    };

    this.activeUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }
}
