# Local photograph archive

The atlas shows **real, credited photographs only** — no generated, illustrated
or composited imagery anywhere. Each dish has four narrative stages, and every
stage is either backed by a verified photograph or says plainly that none could
be verified.

## Naming convention

```
public/images/dishes/<dish-id>-stage-<1..4>.webp   Stage I–IV, per dish
public/images/context/<library-key>.webp           documentary context photographs
```

| Stage | Act | Subject |
| --- | --- | --- |
| `1` | Origin & history | the region, market or kitchen the dish belongs to |
| `2` | Ingredients | the ingredients the dish is built from |
| `3` | Recipe & making | the technique — grinding, fermenting, tempering, steaming |
| `4` | Modern form, serving & recognition | the finished dish, plated in its regional style |

Files are encoded to WebP at ≤1600 px on the long edge, quality 82. They are
downscaled only — never cropped, never upscaled, never re-coloured beyond the
site's CSS grade.

## Fetching the archive

```bash
npm run photos:plan          # print what would be downloaded and from where
npm run photos:fetch         # download, verify, optimise, write localPhotos.json
npm run photos:credits       # regenerate PHOTOGRAPHY-CREDITS.md
```

`scripts/fetch_food_photos.py` reads `src/data/photography.json` and, for every
photograph, re-queries the Wikimedia Commons API for the **current** creator,
licence and original file URL before writing anything:

* a file is skipped if its live licence is not CC0 / public domain / CC BY / CC BY-SA;
* a file is skipped if the live licence no longer matches the recorded one;
* a creator mismatch is reported as a warning;
* nothing is downloaded when the API cannot be reached, because an unverified
  file must never enter the site.

`src/data/localPhotos.json` is the result. The app prefers a listed local file
and falls back to the verified Commons URL, so the site works both before and
after the archive is populated.

## Current state

* 66 dishes across 24 state/UT groups in `src/data/foodData.ts`.
* 44 of 66 have a verified finished-dish photograph; the other 22 render the
  honest "no verified photograph" frame instead of a substitute.
* 38 finished-dish photographs are self-hosted in `public/images/dishes/`.
  The remaining six verified dishes are still served from Commons and will be
  written locally on the next `npm run photos:fetch`.
* Stages I–III use the nine documentary context photographs in
  `public/images/context/` and are always labelled "Documentary photograph".
  They are never captioned as a photograph of the dish itself.

Attribution, licence links and reuse obligations for every file are in
[`PHOTOGRAPHY-CREDITS.md`](../PHOTOGRAPHY-CREDITS.md), generated from the same
JSON the site renders.
