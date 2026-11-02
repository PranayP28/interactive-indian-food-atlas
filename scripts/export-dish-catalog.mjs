/**
 * Export the TypeScript dish catalogue to plain JSON so the Python data
 * generators and validators read exactly what the app renders.
 *
 * Usage: node scripts/export-dish-catalog.mjs
 */
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { writeFileSync, mkdirSync } from "node:fs";

const root = process.cwd();
const cache = resolve(root, ".cache");
mkdirSync(cache, { recursive: true });
const out = resolve(cache, "food-data.mjs");

await build({
  entryPoints: [resolve(root, "src/data/foodData.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: out,
  logLevel: "silent",
});

const mod = await import(pathToFileURL(out).href);
const dishes = mod.getAllDishes();
const catalogue = {
  schemaVersion: 1,
  generatedFrom: "src/data/foodData.ts",
  totalDishes: dishes.length,
  groups: Object.entries(mod.FOOD_DATA).map(([state, block]) => ({
    state,
    classification: block.classification,
    tagline: block.tagline,
    dishIds: block.dishes.map((d) => d.id),
  })),
  dishes,
};

writeFileSync(
  resolve(root, "src/data/dishCatalog.json"),
  `${JSON.stringify(catalogue, null, 2)}\n`,
);
console.log(`Wrote src/data/dishCatalog.json (${dishes.length} dishes, ${catalogue.groups.length} groups)`);
