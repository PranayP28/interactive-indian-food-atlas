// ─────────────────────────────────────────────
// CANONICAL FOUR-STAGE HISTORICAL TIMELINE
//
// Exactly four primary stages for every dish. This module is the single
// source of truth for stage titles, narratives, evidence notes and citations.
// The GSAP / cinematic animation layer reads its stage count and labels from
// here, so changing data never requires changing animation calculations.
// ─────────────────────────────────────────────

import raw from "./dishStages.json";

export type StageKey = "origin" | "ingredients" | "method" | "plated";
export type Confidence = "documented" | "regional-tradition" | "oral-tradition";

export interface BibliographyEntry {
  id: string;
  title: string;
  author: string;
  year: string;
  publisher?: string;
  url?: string;
  note: string;
}

export interface DishStage {
  number: 1 | 2 | 3 | 4;
  key: StageKey;
  numeral: "I" | "II" | "III" | "IV";
  eyebrow: string;
  title: string;
  /** Accurate caption label for the photograph at this stage. */
  photoLabel: string;
  era: string;
  headline: string;
  narrative: string;
  details: string[];
  /** Explicit statement of what the photograph does and does not prove. */
  evidenceNote: string;
  sources: string[];
  confidence: Confidence;
}

export interface DishStageHistory {
  dishId: string;
  dishName: string;
  state: string;
  classification: "State" | "Union Territory";
  confidence: Confidence;
  sources: string[];
  stageCount: 4;
  stages: DishStage[];
}

interface StageDataFile {
  schemaVersion: number;
  policy: string;
  stageCount: number;
  stageKeys: StageKey[];
  bibliography: BibliographyEntry[];
  totalDishes: number;
  totalStages: number;
  dishes: Record<string, DishStageHistory>;
}

const DATA = raw as unknown as StageDataFile;

export const FOUR_STAGE_KEYS: readonly StageKey[] = DATA.stageKeys;
export const STAGE_COUNT = DATA.stageCount;
export const HISTORY_POLICY = DATA.policy;
export const BIBLIOGRAPHY: readonly BibliographyEntry[] = DATA.bibliography;
export const TOTAL_STAGE_RECORDS = DATA.totalStages;

export function getDishStageHistory(dishId: string): DishStageHistory | null {
  return DATA.dishes[dishId] ?? null;
}

export function getStageRecord(dishId: string, key: StageKey): DishStage | null {
  return DATA.dishes[dishId]?.stages.find((stage) => stage.key === key) ?? null;
}

export function getStageByIndex(dishId: string, index: number): DishStage | null {
  return DATA.dishes[dishId]?.stages[index] ?? null;
}

/** Resolve the source ids of one stage into full bibliography entries. */
export function getStageCitations(stage: DishStage): BibliographyEntry[] {
  return stage.sources
    .map((id) => BIBLIOGRAPHY.find((entry) => entry.id === id))
    .filter((entry): entry is BibliographyEntry => Boolean(entry));
}

export function getBibliographyEntry(id: string): BibliographyEntry | undefined {
  return BIBLIOGRAPHY.find((entry) => entry.id === id);
}

/** Every dish × four stages, in atlas order. Used by validators and reports. */
export function getAllStageRecords(): Array<{ dishId: string; stage: DishStage }> {
  return Object.values(DATA.dishes).flatMap((dish) =>
    dish.stages.map((stage) => ({ dishId: dish.dishId, stage })),
  );
}
