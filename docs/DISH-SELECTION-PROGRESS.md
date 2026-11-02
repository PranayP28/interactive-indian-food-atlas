# Dish selection — progress report

**Goal:** 28 states × 3 dishes + 5 union territories × 2 dishes = **94 dishes**, each with four
stages, each stage a real photograph with verified reuse permission.

**Current:** 66 dishes. Missing: **one dish for every one of the 28 states** (see
[`DISH-RECONCILIATION.md`](./DISH-RECONCILIATION.md)). The five union territories in the data
already meet their quota of two.

## Selection rule applied

A dish is only added when **all four** of these can be evidenced by a real photograph whose
licence has been checked against the live Commons API:

| Stage | What the photograph must show |
| --- | --- |
| I | the dish's place of origin — its city, market, or the establishment/community it comes from |
| II | the dish's own ingredients (not a generic spice flat-lay) |
| III | that dish actually being made — its technique |
| IV | the finished dish, served in its regional style |

If a dish cannot evidence all four, it is **not** added, and the next well-known dish from the
same state is evaluated instead. No dish is ever added with a placeholder stage.

## Method

1. `commons.wikimedia.org/w/api.php?list=search&srnamespace=6` for the dish — returns file titles
   and descriptions, which reveal whether process photography exists at all.
2. View the shortlisted files to confirm what they actually show.
3. `prop=imageinfo&iiprop=url|size|extmetadata` for creator, licence, resolution and original URL.
4. Only files that pass all three become stage photographs.

The API search is decisive: it tells us in one call whether a dish has *any* preparation
photography, which is the binding constraint.

## Batch 1 — evidence log (2026-11-02)

| State | Candidate | Plated photo | Ingredients | Making | Origin | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| Gujarat | Khandvi | yes, several | none found | none found | region only | **rejected** |
| West Bengal | Rasgulla | yes, several | none found | none found | region only | **rejected** |
| Maharashtra | Pav bhaji | yes | none found | none found | region only | **rejected** |
| Kerala | Puttu | yes, many | partial | **yes** — `Puttu Launch.jpg` shows the puttu being released from its mould; `Puttu-004.jpg` shows it being turned out | region only | **promising, under review** |
| Tamil Nadu | Filter coffee | yes — dabarah set, frothing, `Filter Kaapi.jpg` | partial — coffee/chicory, no dish-specific set | **yes** — `Disassembled South Indian coffee filter.jpg`, `Indian coffee filter.jpg` | Madras coffee-house culture | **promising, under review** |
| Punjab | Amritsari kulcha | yes, several at Amritsar eateries | none found | **yes** — `Paneer Kulcha Baking.jpg`, charcoal-oven kulcha-making | the Golden Temple kulcha shops | **promising, under review** |

### What the evidence says

* Finished-dish photography on Commons is abundant. **Preparation photography is rare**, and
  ingredient photography for a named dish is rarer still: almost every search returns plated
  food, category hubs, or unrelated farm cooking.
* A dish whose technique is distinctive (puttu in its mould, dum-sealed biryani, a tandoor,
  bamboo-tube steaming) is far more likely to clear the bar than a dish that is simply "a curry"
  or "a sweet".
* Three of the four batch-1 candidates therefore failed. That is the rule working as intended —
  but it also means the 94 target cannot be met by picking famous dishes alone; selection has to
  be driven by what has been photographed, state by state.

### The one stage that keeps failing

Ingredients, not the making. Every "promising" dish above has a plated photograph, a technique
photograph and an origin story — what is missing is a photograph of *that dish's own mise en
place*. Commons has thousands of spice flat-lays and almost no "ingredients for kulcha" file.

Two honest ways forward, both of which keep the rule that a photograph may never be passed off as
something it is not:

1. **Signature-ingredient photography.** For each new dish, photograph-by-photograph source its
   own defining ingredient in the form the dish uses it — the gram flour for a kadhi, the bamboo
   shoot for an Arunachali pork dish, the colocasia for a Manipuri singju. Never a stock spice
   bowl.
2. **Drop the ingredients stage to a documentary label** only where no such file exists, and say so
   on the frame rather than filling it.

Option 1 is the plan; option 2 is the fallback that keeps the page truthful.

## Next candidates (to be evaluated in this order)

| State | Candidate | Why it may clear the bar |
| --- | --- | --- |
| Kerala | Puttu | puttu kutti moulds are photographed in use |
| Punjab | Amritsari Kulcha | tandoor baking is heavily documented |
| Telangana | Hyderabadi Dum Biryani (already present) | dum sealing is documented — reuse as a benchmark |
| West Bengal | Kosha Mangsho | slow-cooked, but likely plated only |
| Odisha | Pakhala | fermented rice, communal serving — plated only? |
| Assam | Pitha | rice-flour shaping is a visible technique |
| Tamil Nadu | Ven Pongal / filter coffee | filter brewing is well documented |
| Goa | Bebinca | layered baking is visible in process shots |

Dishes will be added state by state, one committed batch at a time, with the four stage
photographs recorded in `src/data/photography.json` exactly like the existing dishes.

## Honest status of the photographic requirement

The site is currently honest by construction: 44 dishes carry a verified plate photograph, the
other 22 show an explicit "no verified photograph" frame. No dish has ever been given a
photograph that was not verified to be that dish.

Stages I–III of the existing dishes use nine documentary context photographs (markets, a
grindstone, a tandoor, a steamer) that are always labelled "Documentary photograph" and never
captioned as the dish. That is broader than the four-stage rule above; new dishes are held to
the stricter standard.
