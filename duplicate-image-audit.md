# Automated Duplicate Image and Anti-Clash Integrity Audit

**Project:** Indian Food Atlas  
**Total Catalog Dishes:** 94 (28 States × 3 + 5 UTs × 2)  
**Total Required Stages:** 376 (94 × 4 = 376)  
**Verified Local Photographs:** 143  

---

## 1. Executive Summary

- **Binary Duplicate Clashes Across Dishes:** 0
- **Metadata Image URL Reuses Across Unrelated Dishes:** 0
- **Broken Local File Paths:** 0
- **Unverified / Non-Compliant Licences:** 0
- **Fully Verified (4/4 Stages) Dishes:** 15
- **Partially Verified Dishes:** 64
- **Zero-Image Dishes (Awaiting Authentic Acquisition):** 15

---

## 2. Duplicate Detection & Anti-Clash Verification

### ✅ Zero Image Clashes Detected

- Every downloaded image has a unique SHA-256 checksum across unrelated dishes.
- No shared generic stage arrays or spice-market placeholders are reused between different dishes.
- Every dish ID maps strictly to its own verified photographic assets.

---

## 3. Local File System & Path Integrity

### ✅ All Local Image Paths Exist and Are Valid

- All 143 local file paths registered in `src/data/localPhotos.json` exist in `public/images/dishes/`.
- Zero broken links or missing files detected on disk.

---

## 4. Licence Compliance & Reuse Validation

### ✅ All Licences Verified and Legally Permissible

- 100% of photographed assets carry verified Creative Commons (`CC0`, `CC BY`, `CC BY-SA`) or Public Domain dedications.
- No commercial-restricted (`CC BY-NC`) or no-derivatives (`CC BY-ND`) assets are present.
- Zero AI-generated graphics detected; all assets derive from camera photography by human creators.

---

## 5. Timeline Stage Coverage Breakdown

### A. Dishes with All 4 Stages Completed (15 dishes)

- **Litti Chokha** (`litti-chokha`) — Bihar
- **Masala Dosa** (`masala-dosa`) — Karnataka
- **Puttu** (`puttu`) — Kerala
- **Indori Poha** (`indori-poha`) — Madhya Pradesh
- **Vada Pav** (`vada-pav`) — Maharashtra
- **Ukadiche Modak** (`ukadiche-modak`) — Maharashtra
- **Pakhala Bhata** (`pakhala`) — Odisha
- **Makki di Roti & Sarson da Saag** (`makki-di-roti-sarson-saag`) — Punjab
- **Butter Chicken** (`butter-chicken`) — Punjab
- **Amritsari Kulcha** (`amritsari-kulcha`) — Punjab
- **Dal Baati Churma** (`dal-baati-churma`) — Rajasthan
- **Idli Sambar** (`idli-sambar`) — Tamil Nadu
- **Filter Coffee** (`filter-coffee`) — Tamil Nadu
- **Hyderabadi Dum Biryani** (`hyderabadi-biryani`) — Telangana
- **Hyderabadi Haleem** (`hyderabadi-haleem`) — Telangana

### B. Partially Verified Dishes (64 dishes)

- **Pesarattu** (`pesarattu`) — Andhra Pradesh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Gongura Mutton** (`gongura-mutton`) — Andhra Pradesh: **1/4 stages** (Awaiting: origin, method, plated)
- **Pulihora** (`pulihora`) — Andhra Pradesh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Thukpa** (`thukpa`) — Arunachal Pradesh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Bamboo Shoot Pork** (`bamboo-shoot-pork`) — Arunachal Pradesh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Apong** (`apong`) — Arunachal Pradesh: **2/4 stages** (Awaiting: ingredients, method)
- **Masor Tenga** (`masor-tenga`) — Assam: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Khar** (`khar`) — Assam: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Til Pitha** (`til-pitha`) — Assam: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Thekua** (`thekua`) — Bihar: **2/4 stages** (Awaiting: origin, ingredients)
- **Silao Khaja** (`silao-khaja`) — Bihar: **2/4 stages** (Awaiting: origin, method)
- **Chila** (`chhattisgarhi-chila`) — Chhattisgarh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Goan Fish Curry** (`goan-fish-curry`) — Goa: **2/4 stages** (Awaiting: origin, ingredients)
- **Pork Vindaloo** (`pork-vindaloo`) — Goa: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Bebinca** (`bebinca`) — Goa: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Dhokla** (`dhokla`) — Gujarat: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Undhiyu** (`undhiyu`) — Gujarat: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Handvo** (`handvo`) — Gujarat: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Kadhi Pakora** (`haryanvi-kadhi`) — Haryana: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Haryanvi Churma** (`haryanvi-churma`) — Haryana: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Siddu** (`siddu`) — Himachal Pradesh: **2/4 stages** (Awaiting: origin, ingredients)
- **Himachali Dham** (`himachali-dham`) — Himachal Pradesh: **3/4 stages** (Awaiting: ingredients)
- **Chana Madra** (`chana-madra`) — Himachal Pradesh: **2/4 stages** (Awaiting: ingredients, method)
- **Dhuska** (`dhuska`) — Jharkhand: **2/4 stages** (Awaiting: origin, ingredients)
- **Chilka Roti** (`chilka-roti`) — Jharkhand: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Bisi Bele Bath** (`bisi-bele-bath`) — Karnataka: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Mysore Pak** (`mysore-pak`) — Karnataka: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Appam with Vegetable Stew** (`appam-stew`) — Kerala: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Kerala Fish Molee** (`fish-molee`) — Kerala: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Dal Bafla** (`dal-bafla`) — Madhya Pradesh: **3/4 stages** (Awaiting: ingredients)
- **Puran Poli** (`puran-poli`) — Maharashtra: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Eromba** (`eromba`) — Manipur: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Singju** (`singju`) — Manipur: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Chak-Hao Kheer** (`chak-hao-kheer`) — Manipur: **2/4 stages** (Awaiting: ingredients, method)
- **Jadoh** (`jadoh`) — Meghalaya: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Dohneiiong** (`dohneiiong`) — Meghalaya: **1/4 stages** (Awaiting: origin, method, plated)
- **Mizo Bai** (`mizo-bai`) — Mizoram: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Sawhchiar** (`sawhchiar`) — Mizoram: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Naga Smoked Pork with Bamboo Shoots** (`naga-smoked-pork`) — Nagaland: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Dalma** (`dalma`) — Odisha: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Chhena Poda** (`chhena-poda`) — Odisha: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Laal Maas** (`laal-maas`) — Rajasthan: **3/4 stages** (Awaiting: ingredients)
- **Ghewar** (`ghewar`) — Rajasthan: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Sikkimese Momos** (`sikkimese-momos`) — Sikkim: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Gundruk Soup** (`gundruk-soup`) — Sikkim: **3/4 stages** (Awaiting: method)
- **Sel Roti** (`sel-roti`) — Sikkim: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Chettinad Chicken Curry** (`chettinad-chicken`) — Tamil Nadu: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Qubani ka Meetha** (`qubani-ka-meetha`) — Telangana: **2/4 stages** (Awaiting: ingredients, method)
- **Chakhwi** (`chakhwi`) — Tripura: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Awan Bangwi** (`awan-bangwi`) — Tripura: **2/4 stages** (Awaiting: ingredients, method)
- **Awadhi Galouti Kebab** (`galouti-kebab`) — Uttar Pradesh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Banarasi Malaiyo** (`banarasi-malaiyo`) — Uttar Pradesh: **1/4 stages** (Awaiting: ingredients, method, plated)
- **Bal Mithai** (`bal-mithai`) — Uttarakhand: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Singori** (`singori`) — Uttarakhand: **2/4 stages** (Awaiting: ingredients, method)
- **Shorshe Ilish** (`shorshe-ilish`) — West Bengal: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Mishti Doi** (`mishti-doi`) — West Bengal: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Rosogolla** (`rosogolla`) — West Bengal: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Rogan Josh** (`rogan-josh`) — Jammu and Kashmir: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Kashmiri Dum Aloo** (`kashmiri-dum-aloo`) — Jammu and Kashmir: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Old Delhi Nihari** (`delhi-nihari`) — Delhi: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Chandni Chowk Papdi Chaat** (`delhi-chaat`) — Delhi: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Ladakhi Skyu** (`ladakhi-skyu`) — Ladakh: **1/4 stages** (Awaiting: ingredients, method, plated)
- **Gur Gur Cha & Khambir** (`gur-gur-cha-khambir`) — Ladakh: **1/4 stages** (Awaiting: origin, ingredients, method)
- **Island Mud Crab Masala** (`island-crab-masala`) — Andaman and Nicobar Islands: **1/4 stages** (Awaiting: origin, ingredients, method)

### C. Dishes Awaiting Initial Photographic Acquisition (15 dishes)

- **Fara** (`fara`) — Chhattisgarh: 0/4 stages (Honest neutral placeholder active)
- **Bafauri** (`bafauri`) — Chhattisgarh: 0/4 stages (Honest neutral placeholder active)
- **Bajra Khichdi** (`bajra-khichdi`) — Haryana: 0/4 stages (Honest neutral placeholder active)
- **Pittha** (`pittha`) — Jharkhand: 0/4 stages (Honest neutral placeholder active)
- **Bhutte Ka Kees** (`bhutte-ka-kees`) — Madhya Pradesh: 0/4 stages (Honest neutral placeholder active)
- **Pumaloi** (`pumaloi`) — Meghalaya: 0/4 stages (Honest neutral placeholder active)
- **Vawksa Rep** (`vawksa-rep`) — Mizoram: 0/4 stages (Honest neutral placeholder active)
- **Galho** (`galho`) — Nagaland: 0/4 stages (Honest neutral placeholder active)
- **Zutho** (`zutho`) — Nagaland: 0/4 stages (Honest neutral placeholder active)
- **Mui Borok** (`mui-borok`) — Tripura: 0/4 stages (Honest neutral placeholder active)
- **Banarasi Kachori Sabzi** (`banarasi-kachori`) — Uttar Pradesh: 0/4 stages (Honest neutral placeholder active)
- **Kafuli** (`kafuli`) — Uttarakhand: 0/4 stages (Honest neutral placeholder active)
- **Andaman Coconut Prawn Curry** (`andaman-coconut-prawn`) — Andaman and Nicobar Islands: 0/4 stages (Honest neutral placeholder active)
- **Pondicherry Fish Curry** (`pondicherry-fish-curry`) — Puducherry: 0/4 stages (Honest neutral placeholder active)
- **Koli Kari** (`koli-kari`) — Puducherry: 0/4 stages (Honest neutral placeholder active)
