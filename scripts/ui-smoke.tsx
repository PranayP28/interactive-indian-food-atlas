/**
 * Server-render smoke test for the four-stage photography essay.
 *
 * It renders the real React component (real data modules, real theme context)
 * for every dish in both the light and dark palettes and asserts the four acts,
 * the researched history panel, citation list and honest unresolved frames.
 * It is intentionally not a browser test: GSAP/Three.js interactions are
 * covered by the data-driven `atlas:check` and the live preview.
 */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ThemeContext, type AppTheme } from "../src/context/ThemeContext";
import { getAllDishes } from "../src/data/foodData";
import { getDishPhotography } from "../src/data/photography";
import { getDishStageHistory } from "../src/data/dishStages";
import localPhotos from "../src/data/localPhotos.json";
import { DishPhotoEssay } from "../src/components/photography/DishPhotoEssay";

/** React escapes text in static markup; compare against the escaped form. */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const dishes = getAllDishes();
const failures: string[] = [];
let frames = 0;
let unresolved = 0;

for (const theme of ["dark", "light"] as AppTheme[]) {
  for (const dish of dishes) {
    const value = {
      theme,
      isLight: theme === "light",
      toggleTheme: () => {},
      setTheme: () => {},
    };
    let html = "";
    try {
      html = renderToStaticMarkup(
        React.createElement(
          ThemeContext.Provider,
          { value },
          React.createElement(DishPhotoEssay, { dish, stateName: dish.state }),
        ),
      );
    } catch (error) {
      failures.push(`${theme}/${dish.id}: render threw ${String(error)}`);
      continue;
    }
    const history = getDishStageHistory(dish.id);
    const photo = getDishPhotography(dish.id);
    const expected = [
      esc(dish.name),
      "Stage I",
      "Stage II",
      "Stage III",
      "Stage IV",
      "The four-stage historical record",
      "Sources",
      "Photography credits &amp; reuse terms",
      "Modern Form, Serving &amp; Recognition",
    ];
    for (const needle of expected) {
      if (!html.includes(needle)) failures.push(`${theme}/${dish.id}: missing "${needle}"`);
    }
    if (history) {
      for (const stage of history.stages) {
        const escaped = stage.title.replace(/&/g, "&amp;");
        if (!html.includes(escaped)) failures.push(`${theme}/${dish.id}: missing stage title ${stage.title}`);
      }
    }
    if (/\bundefined\b|\bNaN\b/.test(html)) failures.push(`${theme}/${dish.id}: rendered undefined/NaN`);

    frames += (html.match(/<img\b/g) || []).length;
    if (!photo?.plated) {
      unresolved += 1;
      if (!html.includes("The finished dish — photograph unavailable")) {
        failures.push(`${theme}/${dish.id}: missing honest unavailable frame`);
      }
    } else {
      const local = (localPhotos.dishes as Record<string, Record<string, string>>)[dish.id]?.plated;
      if (local && !html.includes(local)) {
        failures.push(`${theme}/${dish.id}: local-first image not used (${local})`);
      }
      if (!html.includes(esc(photo.plated.creator))) {
        failures.push(`${theme}/${dish.id}: photographer credit not rendered`);
      }
    }
  }
}

console.log(`  Rendered ${dishes.length * 2} essays (dark + light), ${frames} <img> frames, ${unresolved} honest unavailable states.`);
if (failures.length) {
  console.error(`\nFAILED — ${failures.length} UI smoke problem(s):`);
  for (const failure of failures.slice(0, 50)) console.error(`  ✗ ${failure}`);
  process.exit(1);
}
console.log("All four-stage essay smoke checks passed.");
