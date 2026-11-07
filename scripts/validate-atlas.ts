/**
 * Atlas integrity checks. Bundled by esbuild (see `npm run atlas:check`) so it
 * reads exactly the same TypeScript/JSON data modules the application renders.
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { CULINARY_REGIONS, FOOD_DATA, getAllDishes } from "../src/data/foodData";
import {
  BIBLIOGRAPHY,
  FOUR_STAGE_KEYS,
  getDishStageHistory,
  STAGE_COUNT,
  TOTAL_STAGE_RECORDS,
} from "../src/data/dishStages";
import { getDishPhotography, getPhotographyCoverage } from "../src/data/photography";
import { getGenerationsForDish } from "../src/data/generationRecipesData";
import { getCulinaryJourneyForDish } from "../src/data/culinaryHistoryData";

const root = process.cwd();
const errors: string[] = [];
const notes: string[] = [];

function check(condition: boolean, message: string) {
  if (!condition) errors.push(message);
}

const dishes = getAllDishes();
const groups = Object.entries(FOOD_DATA);
const states = groups.filter(([, g]) => g.classification === "State");
const territories = groups.filter(([, g]) => g.classification === "Union Territory");

check(dishes.length === 96, `expected 96 dishes, found ${dishes.length}`);
check(groups.length === 34, `expected 34 regions, found ${groups.length}`);
check(states.length === 28, `expected 28 states, found ${states.length}`);
check(territories.length === 6, `expected 6 union territories, found ${territories.length}`);
for (const [name, group] of states) {
  check(group.dishes.length === 3, `${name} must have exactly 3 dishes, found ${group.dishes.length}`);
}
for (const [name, group] of territories) {
  check(group.dishes.length === 2, `${name} must have exactly 2 dishes, found ${group.dishes.length}`);
}

const expectedTerritories = [
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Andaman and Nicobar Islands",
  "Lakshadweep",
  "Puducherry",
];
for (const name of expectedTerritories) {
  check(FOOD_DATA[name] !== undefined, `required union territory missing: ${name}`);
}

const regionAssignments = Object.values(CULINARY_REGIONS).flatMap((region) => region.states);
const expectedRegionSizes: Record<keyof typeof CULINARY_REGIONS, number> = {
  north: 8,
  south: 6,
  west: 4,
  east: 4,
  northeast: 8,
  central: 2,
  islands: 2,
};
for (const [regionKey, expectedSize] of Object.entries(expectedRegionSizes)) {
  check(
    CULINARY_REGIONS[regionKey as keyof typeof CULINARY_REGIONS].states.length === expectedSize,
    `${regionKey} must contain ${expectedSize} states/territories`,
  );
}
check(
  new Set(regionAssignments).size === regionAssignments.length,
  "a state or territory is assigned to multiple culinary regions",
);
for (const [name] of groups) {
  check(
    regionAssignments.filter((assignedName) => assignedName.toLowerCase() === name.toLowerCase()).length === 1,
    `${name} must be assigned to exactly one culinary region`,
  );
}
for (const name of regionAssignments) {
  check(FOOD_DATA[name] !== undefined, `culinary region references missing food data: ${name}`);
}

const ids = dishes.map((d) => d.id);
check(new Set(ids).size === ids.length, `duplicate dish ids found: ${ids.length - new Set(ids).size}`);
for (const [name, group] of groups) {
  for (const dish of group.dishes) {
    check(dish.state === name, `dish ${dish.id} declares state ${dish.state} but sits under ${name}`);
  }
}

check(STAGE_COUNT === 4, `stage count must be 4, found ${STAGE_COUNT}`);
check(FOUR_STAGE_KEYS.length === 4, `four stage keys required`);
check(TOTAL_STAGE_RECORDS === 384, `expected 384 stage records, found ${TOTAL_STAGE_RECORDS}`);
check(BIBLIOGRAPHY.length >= 5, `bibliography too short`);

const stageKeys = ["origin", "ingredients", "method", "plated"] as const;
let stageNarratives = 0;
for (const dish of dishes) {
  const history = getDishStageHistory(dish.id);
  if (!history) {
    errors.push(`missing four-stage history for ${dish.id}`);
    continue;
  }
  check(history.stageCount === 4, `${dish.id}: stageCount ${history.stageCount}`);
  check(history.stages.length === 4, `${dish.id}: ${history.stages.length} stages`);
  check(history.state === dish.state, `${dish.id}: history state mismatch`);
  history.stages.forEach((stage, index) => {
    check(stage.number === index + 1, `${dish.id}: stage ${index + 1} numbered ${stage.number}`);
    check(stage.key === stageKeys[index], `${dish.id}: stage key order wrong at ${index + 1}`);
    check(stage.narrative.length > 80, `${dish.id}: stage ${index + 1} narrative too short`);
    check(stage.details.length >= 3, `${dish.id}: stage ${index + 1} missing details`);
    check(stage.evidenceNote.length > 30, `${dish.id}: stage ${index + 1} missing evidence note`);
    check(stage.sources.length > 0, `${dish.id}: stage ${index + 1} has no citations`);
    for (const source of stage.sources) {
      check(
        BIBLIOGRAPHY.some((entry) => entry.id === source),
        `${dish.id}: unknown bibliography id ${source}`,
      );
    }
    check(stage.photoLabel.length > 0, `${dish.id}: stage ${index + 1} missing photo label`);
    stageNarratives += 1;
  });

  // The historical timeline must always produce exactly four data-driven stages.
  const waypoints = getGenerationsForDish(dish.id);
  check(waypoints.length === 4, `${dish.id}: timeline produced ${waypoints.length} waypoints (must be 4)`);
  waypoints.forEach((waypoint, index) => {
    check(waypoint.generationNumber === index + 1, `${dish.id}: waypoint number wrong`);
    check(waypoint.documentedCitation.length > 10, `${dish.id}: waypoint ${index + 1} has no citation`);
    check(Boolean(waypoint.image), `${dish.id}: waypoint ${index + 1} has no image`);
  });

  // Keep the seven-stage historical journey data intact alongside the four-stage timeline.
  const journey = getCulinaryJourneyForDish(dish.id);
  check(journey.stages.length === 7, `${dish.id}: historical journey stage count changed (${journey.stages.length})`);
}
check(stageNarratives === 384, `expected 384 narratives, found ${stageNarratives}`);

// Photography records: every dish has four explicit stage slots, and every
// verified photograph carries a full, reusable attribution.
const photography = JSON.parse(readFileSync(resolve(root, "src/data/photography.json"), "utf8"));
const local = JSON.parse(readFileSync(resolve(root, "src/data/localPhotos.json"), "utf8"));
const catalog = JSON.parse(readFileSync(resolve(root, "src/data/dishCatalog.json"), "utf8"));
check(catalog.totalDishes === dishes.length, `dishCatalog.json is stale (${catalog.totalDishes} dishes)`);

let verifiedAssignments = 0;
let localAssignments = 0;
const platedSources = new Map<string, string>();
for (const dish of dishes) {
  const record = photography.dishes[dish.id];
  if (!record) {
    errors.push(`missing photography record for ${dish.id}`);
    continue;
  }
  const photo = getDishPhotography(dish.id);
  if (!photo) {
    errors.push(`getDishPhotography returned null for ${dish.id}`);
    continue;
  }
  for (const key of stageKeys) {
    const raw = record[key];
    const p = photo[key];
    const explicit = key === "plated" ? Boolean(raw) : Boolean(raw && raw.photo);
    check(Boolean(p) === explicit, `${dish.id}/${key}: raw record and resolved photo disagree`);
    if (!p) continue;
    verifiedAssignments += 1;
    for (const field of ["src", "title", "creator", "licence", "licenceUrl", "sourceUrl", "caption", "alt"] as const) {
      check(Boolean(p![field]), `${dish.id}/${key}: photograph missing ${field}`);
    }
    check(
      /^https:\/\/(upload\.wikimedia\.org|commons\.wikimedia\.org)/.test(p!.src),
      `${dish.id}/${key}: unexpected source host ${p!.src}`,
    );
    check(
      /creativecommons\.org|publicdomain/.test(p!.licenceUrl),
      `${dish.id}/${key}: licence URL missing`,
    );
    check(Boolean(p!.label), `${dish.id}/${key}: missing descriptive label`);
    if (key === "plated") {
      const previous = platedSources.get(p!.src);
      check(!previous, `finished-dish photograph reused by ${previous} and ${dish.id}`);
      platedSources.set(p!.src, dish.id);
    }
    const localPath = local.dishes[dish.id]?.[key];
    if (localPath) {
      localAssignments += 1;
      const file = resolve(root, "public", String(localPath).replace(/^\//, ""));
      check(existsSync(file), `${dish.id}/${key}: local file missing ${file}`);
      if (existsSync(file)) {
        check(statSync(file).size > 1000, `${dish.id}/${key}: local file suspiciously small`);
        const head = readFileSync(file).subarray(0, 12);
        check(
          head.subarray(0, 4).toString() === "RIFF" && head.subarray(8, 12).toString() === "WEBP",
          `${dish.id}/${key}: local file is not WebP`,
        );
      }
    }
  }
}

// No local manifest entry may point to a nonexistent file.
for (const [dishId, stages] of Object.entries(local.dishes)) {
  for (const [key, rel] of Object.entries(stages as Record<string, string>)) {
    const file = resolve(root, "public", String(rel).replace(/^\//, ""));
    check(existsSync(file), `orphan local manifest entry ${dishId}/${key}: ${rel}`);
  }
}

const coverage = getPhotographyCoverage();
check(coverage.total === 96, `photography coverage total ${coverage.total}`);
check(coverage.assignments === verifiedAssignments, `coverage assignment count mismatch`);
check(coverage.localAssignments === localAssignments, `coverage local count mismatch`);

notes.push(`Dishes: ${dishes.length} (${states.length} states × 3 + ${territories.length} UTs × 2)`);
notes.push(`Four-stage histories: ${stageNarratives} (96 × 4)`);
notes.push(`Historical timeline waypoints per dish: 4; long-form historical stages per dish: 7`);
notes.push(`Verified stage photographs: ${verifiedAssignments} / ${coverage.targetAssignments}`);
notes.push(`Locally hosted stage photographs: ${localAssignments}`);
notes.push(`Unresolved stage photographs (honest empty frames): ${coverage.targetAssignments - verifiedAssignments}`);

for (const note of notes) console.log(`  ${note}`);
if (errors.length) {
  console.error(`\nFAILED — ${errors.length} integrity problem(s):`);
  for (const error of errors.slice(0, 60)) console.error(`  ✗ ${error}`);
  if (errors.length > 60) console.error(`  … and ${errors.length - 60} more`);
  process.exit(1);
}
console.log("\nAll atlas integrity checks passed.");
