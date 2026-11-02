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


## The decisive test (2026-11-02)

`Category:Puttu` on Commons — the richest single-dish category found so far — contains **76 files**.
Read end to end, they break down as:

| Kind of file | Count | Examples |
| --- | --- | --- |
| The finished dish (plated) | ~68 | `Puttu with kadala curry.jpg`, `Rice Puttu with Gram Curry.jpg` |
| The equipment in use | 3 | `Puttu Cooker 1.jpg`, `Puttu maker - cley.jpg` |
| The dish being turned out | 2 | `Puttu Launch.jpg`, `Puttu-004.jpg` |
| An illustration, not a photograph (excluded) | 1 | `Puttu Cooking process Cross Section.svg` |
| **Ingredients of puttu** | **0** | — |
| **The place puttu comes from** | **0** | — |

This is not a weak dish; it is the best-documented dish tested. Khandvi, rasgulla and pav bhaji
were worse. The pattern is consistent across every search run this session:

> **Commons photographs dishes, not their mise en place.** There is no corpus of
> "ingredients for *this dish*" or "the origin of *this dish*" photography for Indian food.

### What that means for the 94 target

Applied literally, rule 4 ("all four stages must have dish-specific photographs") admits **zero**
candidates: no dish in any state has been found with a verified ingredients photograph *and* a
verified origin photograph. Adding 28 dishes therefore requires one decision about what stages I
and II are illustrated with:

**Option A — dish-matched documentary photography (recommended).** Stage IV is the dish itself,
verified. Stage III is that dish's technique, verified (`Puttu Launch.jpg`). Stage II is its own
principal ingredient photographed as the dish uses it (rice flour, coconut, jaggery) — never a stock
spice bowl. Stage I is the place the dish comes from. Each frame is captioned for exactly what it
shows and carries the "Documentary photograph" badge. This reaches 94 and never passes one dish off
as another.

**Option B — literal four-stage rule.** Zero dishes qualify. The atlas stays at 66.

**Option C — plated photograph only, three text stages.** Every dish has one real photograph and
three written stages. Reaches 94 but drops imagery from three of the four timeline stages.

A and C both reach 94; A is the only one that keeps four photographs per dish.


---

# Batch 1 — shipped (2026-11-02)

Commit `954d836`. Four dishes added, each with four verified photographs.

| State | New dish | Regional context | Ingredient reference | Preparation technique | Finished dish |
| --- | --- | --- | --- | --- | --- |
| Kerala | Puttu | Alappuzha backwaters (Vyacheslav Argenberg, CC BY 4.0) | Rice flour (Thamizhpparithi Maari, CC BY-SA 4.0) | Puttu released from the kutti (Jyothishbabu, CC BY-SA 4.0) | Puttu with kadala curry (Jackson John 10, CC BY-SA 4.0) |
| Tamil Nadu | Filter Coffee | Kapaleeshwarar Temple, Mylapore (N. Vivekananthamoorthy, CC BY 4.0) | Roasted coffee beans (freestock.ca, CC BY-SA 3.0) | The two chambers of the steel filter (Cheeni, CC BY-SA 3.0) | Filter coffee frothed tumbler-to-dabarah (Charles Haynes, CC BY-SA 2.0) |
| Punjab | Amritsari Kulcha | Harmandir Sahib at night (Sasha India, CC BY-SA 2.0) | Wheat-flour dough (Libreravi, CC BY-SA 4.0) | Kulcha baking in the tandoor (Divya Kudua, CC BY 2.0) | Kulcha with chhole (Ravi Dwivedi, CC BY-SA 4.0) |
| Maharashtra | Ukadiche Modak | Shaniwar Wada, Pune (Rohan Sandeep Pawar, CC BY-SA 4.0) | Jaggery cubes (Mangosapiens, CC BY-SA 4.0) | Modaks steaming (Durvankur Patil, CC BY-SA 4.0) | Modak, whole and split (Dharmadhyaksha, CC BY-SA 4.0) |

State of the atlas after batch 1: **70 dishes**, 4 states at three dishes, 24 states still at two.
Every new dish passed an automated check: four distinct stage URLs, no duplicate dish ids, no
uncredited photograph.

### What batch 2 needs

Goa (bebinca) and Gujarat (handvo) were rejected as batch-2 candidates on inspection:
`Category:Bebinca` holds 7 files, all of the finished dessert, and there is no handvo category at
all. Odisha's `Category:Pakhala` holds 50+ files, again all plated or served. A dish only enters a
batch when a genuine technique photograph exists, so batch 2 must be chosen from states whose
dishes are made in a visible, photographed way — steaming, tandoor baking, frying, pleating,
filtering — rather than from the most famous dish.
