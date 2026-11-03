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
npm run photos:plan          # verify licences live and print the download plan
npm run photos:fetch         # download, verify, optimise, merge localPhotos.json
npm run photos:verify        # offline integrity check of every local WebP
npm run photos:import        # mirror the research-pass Commons files locally
npm run photos:credits       # regenerate PHOTOGRAPHY-CREDITS.md
npm run atlas:check          # full data / stage / credit / file integrity check
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

## Fetch pipeline hardening

The fetch script now merges rather than rebuilds `localPhotos.json`, unwraps the
explicit stage records used by Stages I–III, retries transient API/download
errors with backoff, validates image headers and dimensions before writing,
writes files atomically, and refuses to run without a live licence check. Use
`npm run photos:verify` for an offline integrity check of every local WebP.

Verified photographs that were mirrored during a research pass (where the
sandbox has no outbound Wikimedia access) are imported by
`scripts/import_verified_photos.py`, which uses
`scripts/legacy-timeline-assets.json` and writes
`src/data/photoImportManifest.json` with the creator, licence, licence URL,
source page, original Commons URL, local path and provenance of every file.
The ten verified Commons source JPEGs used by that import are committed under
`assets/photo-sources/` so the import stays reproducible; the scratch
`image-search/` directory remains gitignored.

## Current state (2026-11-02)

* 94 dishes across 33 groups (28 states × 3, 5 UTs × 2) in `src/data/foodData.ts`.
* 59 of 94 have a verified finished-dish photograph; the other 35 render the
  honest "no verified photograph" frame instead of a substitute.
* 84 of 376 four-stage photographs are verified and individually credited.
  61 of those are self-hosted WebP files in `public/images/dishes/`, including
  Stage I–III photographs; the rest fall back to the verified Commons URL and
  will be written locally on the next `npm run photos:fetch` from a machine
  with Wikimedia access.
* 292 stages are deliberately unresolved. Stages I–III are **not** filled by
  the nine shared documentary context photographs: a library image can never
  stand in for a dish's own stage photograph.
* Three local files are genuine but below display quality (259×194, 400×301 and
  500×375 px); `npm run photos:verify` reports them as warnings rather than
  silently upscaling them.

Attribution, licence links and reuse obligations for every file are in
[`PHOTOGRAPHY-CREDITS.md`](../PHOTOGRAPHY-CREDITS.md), generated from the same
JSON the site renders. Honest per-stage coverage is recorded in
[`DISH-RECONCILIATION.md`](./DISH-RECONCILIATION.md).
