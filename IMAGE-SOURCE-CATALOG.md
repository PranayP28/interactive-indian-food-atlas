# Open-Source Gastronomic Image Sources & API Catalog

This catalog documents public APIs, GitHub repositories, photographic archives, and gastronomic image datasets evaluated for the **Indian Food Atlas**. Every source is assessed for image authenticity (camera vs. AI), licensing legality (commercial/share-alike vs. restricted), and suitability across the four timeline stages:

1. **Stage 1 (Origin & History):** Regional context, landscapes, heritage sites
2. **Stage 2 (Ingredients):** Raw grains, pulses, spices, fresh produce
3. **Stage 3 (Recipe & Making):** Cooking techniques, tandoors, kadhais, traditional utensils
4. **Stage 4 (Modern Form & Serving):** Restaurant-quality, authentic plated dishes

---

## 1. Open Photographic APIs

### 1.1 Wikimedia Commons API
* **Official URL:** [https://commons.wikimedia.org/](https://commons.wikimedia.org/)
* **API Documentation & Endpoint:**
  * Endpoint: `https://commons.wikimedia.org/w/api.php`
  * Imageinfo API: `https://www.mediawiki.org/wiki/API:Imageinfo`
* **Authentication:** None required. Requires descriptive `User-Agent` header with contact/project details.
* **Type of Images Available:** High-resolution documentary photography, regional food traditions, community feasts, raw agricultural ingredients, historical monuments, traditional cookware (e.g. *pattal* sal leaves, brass *deghs*, stone *sil-batta*).
* **Licence Conditions:** Creative Commons (`CC0`, `CC BY 2.0/3.0/4.0`, `CC BY-SA 2.0/3.0/4.0`), Public Domain (`PD-self`, `PD-India`).
* **Download & Local Hosting:** **Permitted and legal.** Allows permanent local hosting provided attribution metadata (author, source, licence) is preserved.
* **Suitability for Indian Food Atlas:** **EXCELLENT (Primary Source).** Highest density of rare regional Indian dishes (e.g., *Chana Madra*, *Himachali Dham*, *Pakhala Bhata*, *Ukadiche Modak*, *Awan Bangwi*, *Singori*). Camera EXIF data verifies genuine photography; AI images are strictly excluded.

---

### 1.2 Openverse API (formerly Creative Commons Search)
* **Official URL:** [https://openverse.org/](https://openverse.org/)
* **API Documentation & Endpoint:**
  * Docs: `https://docs.openverse.org/`
  * Endpoint: `https://api.openverse.org/v1/images/?q={query}&license_type=commercial,modification`
* **Authentication:** OAuth2 Client Credentials recommended for production rate limits (`100 req/min`); unauthenticated calls are throttled.
* **Type of Images Available:** Aggregates over 700 million openly licensed media items across Flickr, Wikimedia Commons, Europeana, Smithsonian, and cultural institutions.
* **Licence Conditions:** Standardized Creative Commons filter (`cc0`, `by`, `by-sa`).
* **Download & Local Hosting:** **Permitted and legal.** Returns direct image URLs (`url`), thumbnails (`thumbnail`), and license metadata.
* **Suitability for Indian Food Atlas:** **VERY GOOD.** Excellent discovery tool for finding CC-licensed photographs hosted across multiple archives, especially for stage 1 (regional heritage) and stage 2 (raw spices).

---

### 1.3 Smithsonian Open Access API
* **Official URL:** [https://www.si.edu/openaccess](https://www.si.edu/openaccess)
* **API Documentation & Endpoint:**
  * Devtools: `https://www.si.edu/openaccess/devtools`
  * Endpoint: `https://api.si.edu/openaccess/api/v1.0/search?q={query}&api_key={API_KEY}`
* **Authentication:** Free API key (`api_key=DEMO_KEY` for evaluation; registration via Smithsonian for production).
* **Type of Images Available:** 4.5+ million 2D/3D collection items. Rich archival collection of historic Indian culinary artifacts: 16th–19th century Mughal and Rajput kitchen miniatures, spice botanical specimens (National Museum of Natural History), antique brass *thalis*, betel leaf boxes, and copper cooking vessels.
* **Licence Conditions:** **CC0 (Public Domain)** for all Open Access digital assets.
* **Download & Local Hosting:** **Permitted without restriction.**
* **Suitability for Indian Food Atlas:** **EXCELLENT FOR STAGES 1 & 3.** Ideal for authentic historical regional context, royal kitchen records, and traditional culinary utensils. Does not supply modern plated recipes.

---

### 1.4 Library of Congress API
* **Official URL:** [https://www.loc.gov/](https://www.loc.gov/)
* **API Documentation & Endpoint:**
  * Docs: `https://www.loc.gov/apis/`
  * Endpoint: `https://www.loc.gov/search/?q={query}&fo=json`
* **Authentication:** No API key required, but automated requests require specific browser headers to avoid Cloudflare 403 blocks.
* **Type of Images Available:** 19th and early 20th-century historical photographs, travelogues, British-era agricultural surveys of Indian grain markets (*mandis*), and culinary ethnographies.
* **Licence Conditions:** Public Domain / No known copyright restrictions on historical government and pre-1928 collections.
* **Download & Local Hosting:** **Permitted** for items with no copyright restrictions.
* **Suitability for Indian Food Atlas:** **GOOD FOR STAGE 1 HISTORICAL CONTEXT.** Captures early colonial and pre-independence food cultivation, traditional markets, and regional street scenes.

---

### 1.5 Flickr Search API
* **Official URL:** [https://www.flickr.com/](https://www.flickr.com/)
* **API Documentation & Endpoint:**
  * API Docs: `https://www.flickr.com/services/api/`
  * Search Method: `flickr.photos.search` with `license=4,5,7,9,10` (CC BY, CC BY-SA, Public Domain, CC0)
* **Authentication:** Requires free developer API key (`api_key`).
* **Type of Images Available:** Authentic amateur and professional food photography taken by travelers and food bloggers across India.
* **Licence Conditions:** Multi-tiered. Must filter explicitly for `license=4,5,9,10` (commercial/share-alike permitted). Filter out `license=1,2,3` (NonCommercial).
* **Download & Local Hosting:** **Permitted with attribution** for approved CC licenses under Flickr Developer Terms of Use.
* **Suitability for Indian Food Atlas:** **VERY GOOD FOR STAGES 3 & 4.** High quality for street food preparation (e.g. *Vada Pav*, *Indori Poha*, *Kachori*) and regional restaurant plating.

---

### 1.6 TheMealDB API
* **Official URL:** [https://www.themealdb.com/](https://www.themealdb.com/)
* **API Documentation & Endpoint:**
  * Endpoint: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
  * Ingredients: `https://www.themealdb.com/images/ingredients/{ingredient}.png`
* **Authentication:** Free tier available with demo key `1`.
* **Type of Images Available:** Dish hero shots and standard ingredient PNGs.
* **Licence Conditions:** Crowdsourced/mixed. TheMealDB Terms of Use allow personal and educational use; individual image copyrights are held by submitting users and not systematically CC-licensed.
* **Download & Local Hosting:** **CAUTION / LIMITED.** Not recommended for permanent local redistribution due to unverified licensing on individual dish images.
* **Suitability for Indian Food Atlas:** **LOW TO MODERATE.** Mostly limited to standardized international dishes (*Chicken Tikka Masala*, generic curries). Lacks deep Indian regional items (*Bhutte Ka Kees*, *Siddu*, *Galho*).

---

### 1.7 Open Food Facts API
* **Official URL:** [https://world.openfoodfacts.org/](https://world.openfoodfacts.org/)
* **API Documentation & Endpoint:**
  * Docs: `https://openfoodfacts.github.io/documentation/`
  * Product API: `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`
* **Authentication:** Free, no key required (requires polite User-Agent).
* **Type of Images Available:** Over 3 million packaged food products: front of pack, ingredient labels, nutrition facts.
* **Licence Conditions:** Database under Open Database License (ODbL); user photos under Creative Commons Attribution-ShareAlike (`CC-BY-SA 3.0/4.0`) or `CC0`.
* **Download & Local Hosting:** **Permitted with attribution.**
* **Suitability for Indian Food Atlas:** **NOT SUITABLE FOR DISH TIMELINES.** Open Food Facts stores packaged retail goods (e.g., packaged spice powders, instant noodle boxes), not prepared regional cuisine, cooking techniques, or restaurant dishes.

---

### 1.8 Unsplash & Pexels APIs
* **Endpoints:**
  * Unsplash: `https://api.unsplash.com/search/photos`
  * Pexels: `https://api.pexels.com/v1/search`
* **Authentication:** Developer API key required.
* **Type of Images Available:** Professional, studio-quality commercial photography.
* **Licence Conditions:** Custom permissive licenses (free commercial and non-commercial use, modification permitted, no attribution required though appreciated).
* **Download & Local Hosting:** **Permitted.**
* **Suitability for Indian Food Atlas:** **MODERATE (Generic Only).** Excellent quality for generic ingredients (basmati rice, cardamom, mustard seeds, turmeric root) and popular pan-Indian dishes (*Butter Chicken*, *Biryani*, *Samosa*). Zero coverage for specific regional tribal or indigenous dishes (*Chakhwi*, *Bafauri*, *Dohneiiong*, *Zutho*).

---

## 2. GitHub Repositories and Datasets

### 2.1 DataCluster Labs: Indian-Food-Image-Dataset
* **Repository URL:** [https://github.com/datacluster-labs/Indian-Food-Image-Dataset](https://github.com/datacluster-labs/Indian-Food-Image-Dataset)
* **Type of Images:** Crowdsourced camera images of Indian food items for machine learning (YOLO/COCO formats).
* **Licence Analysis:** **RESTRICTED / PROPRIETARY.**
  * The GitHub repository provides small sample subsets only.
  * The full dataset is proprietary property of DataCluster Labs.
  * Commercial and public website redistribution is explicitly prohibited without purchasing a paid license from `sales@datacluster.ai`.
* **Download & Local Hosting:** **NOT PERMITTED for open website hosting.**
* **Suitability:** **UNSUITABLE** due to restrictive commercial licensing.

---

### 2.2 SNTL84: Indian-Food-Image-Dataset (Fork)
* **Repository URL:** [https://github.com/SNTL84/Indian-Food-Image-Dataset](https://github.com/SNTL84/Indian-Food-Image-Dataset)
* **Type of Images:** Fork containing dataset organization scripts and sample annotations.
* **Licence Analysis:** **UNVERIFIED UNDERLYING MEDIA.**
  * Code scripts are open, but the underlying media files inherit DataCluster / web-scraped origins.
  * Lacks explicit CC-BY or CC0 releases from individual photographers.
* **Download & Local Hosting:** **NOT PERMITTED** for redistribution.
* **Suitability:** **UNSUITABLE.**

---

### 2.3 e1bhl1n: Indian_Food_Classification
* **Repository URL:** [https://github.com/e1bhl1n/Indian_Food_Classification](https://github.com/e1bhl1n/Indian_Food_Classification)
* **Type of Images:** 18 Indian food classes (*Adhirasam*, *Chak Hao Kheer*, *Basundi*, *Biryani*, etc.) trained on a Kaggle dataset.
* **Licence Analysis:**
  * Code repository is licensed under **Apache-2.0**.
  * **Critical Distinction:** The underlying image binaries are sourced from Kaggle web-scrapes (search engine crawls) without individual copyright clearances, model releases, or CC licenses.
* **Download & Local Hosting:** Code can be reused; **image binaries cannot be safely hosted or published** under open-access copyright standards.
* **Suitability:** **UNSUITABLE FOR DIRECT ASSET HOSTING.**

---

### 2.4 IndoKhaadyam (`smaranjitghose/indokhaadyam`)
* **Repository URL:** [https://github.com/smaranjitghose/indokhaadyam](https://github.com/smaranjitghose/indokhaadyam)
* **Live Demo:** `https://indokhadyaam.smaranjitghose.com/`
* **Type of Content:** Open-source React web database documenting diverse Indian culinary heritage, recipes, and traditions.
* **Licence Analysis:** **MIT License** for codebase.
* **Suitability:** **VALUABLE REFERENCE.** Excellent for validating state culinary origins, recipe ingredient lists, and regional descriptions.

---

### 2.5 TensorFlow Datasets / Food-101 (ETH Zurich)
* **Repository URL:** [https://github.com/tensorflow/datasets](https://github.com/tensorflow/datasets) (`tfds.load('food101')`)
* **Dataset Home:** `https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/`
* **Type of Images:** 101,000 real images across 101 food classes.
* **Licence Analysis:** **NON-COMMERCIAL / RESEARCH ONLY.**
  * Images were scraped from `foodspotting.com`.
  * Copyright remains with the original uploaders.
  * Intended strictly for academic computer vision research, not redistributable website assets.
* **Suitability:** **UNSUITABLE FOR PRODUCTION LOCAL HOSTING.**

---

### 2.6 Flickr API Swagger (`flickr/flickr-api-swagger`)
* **Repository URL:** [https://github.com/flickr/flickr-api-swagger](https://github.com/flickr/flickr-api-swagger)
* **Description:** OpenAPI / Swagger specification for the Flickr REST API.
* **Licence:** MIT.
* **Suitability:** **VALUABLE TOOLING.** Provides the exact automated client schemas to query Flickr's Creative Commons image search API safely.

---

### 2.7 Open Food Facts Server (`openfoodfacts/openfoodfacts-server`)
* **Repository URL:** [https://github.com/openfoodfacts/openfoodfacts-server](https://github.com/openfoodfacts/openfoodfacts-server)
* **Licence:** AGPL-3.0.
* **Suitability:** **TOOLING ONLY.** Backend architecture for barcode scanning and food taxonomy; media comprises packaged grocery product photos.

---

## 3. Comparison Matrix & Recommendation

| Source | Category | Real Photography? | Permissive Open Licence? | Local Hosting Allowed? | Best Timeline Stage | Overall Atlas Suitability |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Wikimedia Commons API** | Open API | Yes | Yes (CC-BY / CC-BY-SA / CC0) | Yes | Stages 1, 2, 3, 4 | **PRIMARY (Highest)** |
| **Smithsonian Open Access** | Open API | Yes | Yes (CC0) | Yes | Stages 1, 3 | **EXCELLENT (Historical)** |
| **Openverse API** | Open API | Yes | Yes (CC-BY / CC0) | Yes | Stages 1, 2, 4 | **HIGH** |
| **Flickr API (Filtered)** | Open API | Yes | Yes (CC-BY / CC0) | Yes | Stages 3, 4 | **HIGH** |
| **Library of Congress** | Open API | Yes | Yes (Public Domain) | Yes | Stage 1 | **GOOD (Context only)** |
| **TheMealDB** | Open API | Yes | Unclear / Mixed | Risky | Stage 4 | **LOW** |
| **Open Food Facts** | Open API | Yes | Yes (CC-BY-SA) | Yes | Packaging only | **UNSUITABLE** |
| **DataCluster Labs Repo** | GitHub Repo | Yes | No (Proprietary) | No | None | **UNSUITABLE** |
| **Kaggle Indian Food Repos** | GitHub Repo | Yes | No (Scraped) | No | None | **UNSUITABLE** |
| **Food-101 (TensorFlow)** | GitHub Repo | Yes | Research Only | No | None | **UNSUITABLE** |
| **IndoKhaadyam** | GitHub Repo | Mixed | MIT (Code) | Consult Media | Metadata / Recipes | **GOOD REFERENCE** |

---

## 4. Legitimate Sourcing Architecture for Indian Food Atlas

To ensure **100% legal compliance, zero copyright risk, and zero AI imagery**, the Indian Food Atlas adheres to this pipeline:

```
[Query Pipeline]
      │
      ├──> Wikimedia Commons API (iiurlwidth=1600, license=CC-BY/CC-BY-SA/CC0)
      ├──> Smithsonian Open Access API (CC0 historical vessels, botanical spices)
      └──> Flickr CC Search API (license=4,5,9,10 verified authors)
      │
[Validation Gate]
      │
      ├── 1. Non-AI Verification (EXIF check, real human author, reputable institution)
      ├── 2. License Compatibility Check (CC0, CC-BY, CC-BY-SA; reject NC/ND/unknown)
      ├── 3. SHA-256 Binary Hash & Deduplication (Prevent any image clash across dishes)
      └── 4. Dimension & Aspect Ratio Check (Min 400px side, target 1600px)
      │
[Local Ingestion]
      │
      ├── Atomic download to public/images/dishes/<dish-id>-stage-<n>.webp
      ├── Manifest update in src/data/localPhotos.json
      ├── Canonical attribution update in src/data/photography.json
      └── Complete attribution record in PHOTOGRAPHY-CREDITS.md
```
