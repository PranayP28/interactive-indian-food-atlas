#!/usr/bin/env python3
"""Build the canonical four-stage history for all 96 dishes.

Reads src/data/dishCatalog.json (exported from foodData.ts) plus the curated,
conservative research notes below, and writes src/data/dishStages.json.

Editorial policy
----------------
* Four primary stages per dish: origin/history, ingredients, recipe/making,
  modern form/serving/recognition.
* No invented dates. Where a dish has no securely dated first written
  reference, the record says so explicitly.
* Every historical claim carries a source id from the bibliography and a
  confidence label. Print sources are cited bibliographically, without a
  fabricated URL.
* A photograph never proves a historical claim; captions and evidence notes
  say what a stage photograph does and does not show.
"""

from __future__ import annotations

import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOGUE = os.path.join(ROOT, "src", "data", "dishCatalog.json")
OUTPUT = os.path.join(ROOT, "src", "data", "dishStages.json")

BIBLIOGRAPHY = [
    {
        "id": "achaya-1994",
        "title": "Indian Food: A Historical Companion",
        "author": "K. T. Achaya",
        "year": "1994",
        "publisher": "Oxford University Press, New Delhi",
        "note": "Survey of grains, pulses, oils, spices and dated textual references in Indian food history.",
    },
    {
        "id": "sen-2004",
        "title": "Food Culture in India",
        "author": "Colleen Taylor Sen",
        "year": "2004",
        "publisher": "Greenwood Press",
        "note": "Regional food cultures, festival foods and the modern restaurant history of India.",
    },
    {
        "id": "achaya-1998",
        "title": "A Historical Dictionary of Indian Food",
        "author": "K. T. Achaya",
        "year": "1998",
        "publisher": "Oxford University Press",
        "note": "Dated entries for named dishes, ingredients and cooking terms.",
    },
    {
        "id": "manasollasa-1130",
        "title": "Manasollasa (Abhilashitartha Chintamani), c. 1130 CE",
        "author": "Someshvara III, Western Chalukya court",
        "year": "12th century CE",
        "url": "https://en.wikipedia.org/wiki/Manasollasa",
        "note": "Sanskrit encyclopaedia describing dosaka and other preparations; cited only for dishes it actually names.",
    },
    {
        "id": "gi-registry",
        "title": "Geographical Indications Registry, Government of India",
        "author": "Office of the Controller General of Patents, Designs and Trade Marks",
        "year": "ongoing",
        "url": "https://ipindia.gov.in/",
        "note": "Registration record for GI-tagged foods; cited only where a registration is stated in the dish record.",
    },
    {
        "id": "columbian-exchange",
        "title": "The Columbian Exchange and Indian food",
        "author": "K. T. Achaya; Colleen Taylor Sen",
        "year": "1994 / 2004",
        "note": "Chillies, tomatoes, potatoes and some squashes reached Indian kitchens only after the 16th century; recipes using them cannot pre-date that exchange.",
    },
    {
        "id": "regional-food-writing",
        "title": "Regional food writing, state tourism documentation and household recipe literature",
        "author": "Various regional publishers and state documentation bodies",
        "year": "20th–21st century",
        "note": "Establishes a dish's regional association, ingredients, technique and present-day serving. Not evidence of an ancient origin.",
    },
    {
        "id": "ethnographic-accounts",
        "title": "Ethnographic and community food documentation of India's hill and tribal regions",
        "author": "Various ethnographers and community documentation projects",
        "year": "20th–21st century",
        "note": "Documents fermentation, smoking and festival food practice in communities whose recipes were transmitted orally.",
    },
    {
        "id": "oral-tradition",
        "title": "Oral and household tradition",
        "author": "Unattributed community tradition",
        "year": "undated",
        "note": "The dish is established in community practice but has no securely dated first written reference; no century of invention is claimed.",
    },
]

STATE_CONTEXT = {
    "Andhra Pradesh": "The Krishna–Godavari deltas and the dry Rayalaseema interior give Andhra cooking rice, tamarind, gongura leaf and a tradition of chilli-and-garlic masalas.",
    "Arunachal Pradesh": "Arunachal's steep Himalayan valleys, bamboo forest and tribal smallholdings shape a cuisine of bamboo shoots, smoked meat, fermented soybean and rice beer.",
    "Assam": "The Brahmaputra valley's wet rice agriculture, wetlands and fish ponds underpin a cuisine of rice, freshwater fish, mustard and alkali (khar) preparations.",
    "Bihar": "The alluvial Gangetic plain and its pulse crops support a grain-and-pulse cuisine of sattu, fire-roasted litti, wheat sweets and mustard-oil cookery.",
    "Chhattisgarh": "Chhattisgarh's forest belt and rain-fed rice fields yield rice-flour breads, gram-flour dumplings, leafy greens and a largely home-cooked food tradition.",
    "Goa": "Goa's Konkan coast and its Indo-Portuguese history produced a cuisine of coconut, kokum, rice, seafood and vinegar-based pork masalas.",
    "Gujarat": "Gujarat's trading coast and dry interior created a largely vegetarian cuisine of fermented batters, pulses, winter vegetables and a sweet–sour balance.",
    "Haryana": "Haryana's semi-arid wheat, bajra and dairy belt favours coarse rotis, ghee, milk, churma and simple pulse and greens preparations.",
    "Himachal Pradesh": "The western Himalayan valleys of Himachal rely on lentils, curd, ghee and the slow, communal dham feast cooked by hereditary cooks.",
    "Jharkhand": "Jharkhand's plateau forests and tribal rice cultivation centre on rice-flour preparations, pulses, leafy greens and millet-based foods.",
    "Karnataka": "From the Konkan coast to the Deccan plateau and Old Mysore, Karnataka's kitchens combine rice, black gram, millets, coconut and courtly sweet-making.",
    "Kerala": "Kerala's monsoon coast, backwaters and spice hills give its food coconut, rice, black pepper and curry leaves, shaped by Hindu, Muslim and Syrian Christian kitchens.",
    "Madhya Pradesh": "Madhya Pradesh's Malwa plateau, wheat fields and Bundelkhand forests support both ghee-rich grain cookery and a substantial tribal food tradition.",
    "Maharashtra": "Maharashtra spans the Konkan coast, the Deccan plateau and Mumbai's street-food culture, drawing on rice, millets, gram flour, peanuts, coconut and jaggery.",
    "Manipur": "Manipur's valley lakes, rice fields and hill produce shape a cuisine of fermented fish, bamboo shoots, aromatic black rice and leafy herbs.",
    "Meghalaya": "Meghalaya's high-rainfall Khasi, Garo and Jaintia hills favour rice, fermented soybean, smoked meat and steamed rice cakes.",
    "Mizoram": "Mizoram's bamboo-covered hills and jhum cultivation produce a cuisine of smoked pork, bamboo shoots, leafy greens and fermented rice drinks.",
    "Nagaland": "Nagaland's Naga hill communities combine smoked and fermented meat, bamboo shoots, taro leaves, sticky rice and fiery local chillies.",
    "Odisha": "Odisha's Mahanadi delta, temple kitchens and long coast give its food rice, lentils, mustard, freshwater fish and a distinctive chhena sweet tradition.",
    "Punjab": "Punjab's irrigated wheat and dairy belt and the tandoor culture of its towns produced rotis, saag, butter-rich dals and clay-oven breads and meats.",
    "Rajasthan": "Rajasthan's deserts and princely courts developed water-sparse cooking, dried beans and berries, gram flour, ghee-rich sweets and slow-cooked meat curries.",
    "Sikkim": "Sikkim's Himalayan valleys and Tibetan–Nepali inheritance favour fermented greens, steamed dumplings, noodle soups, butter tea and ring breads.",
    "Tamil Nadu": "Tamil Nadu's Cauvery delta, temple towns and Chettinad trading households shaped a rice-and-black-gram cuisine of fermentation, steaming and roasted spices.",
    "Telangana": "Telangana's Deccan plateau and Hyderabad's courtly kitchens combine millets, rice, slow-cooked meat and wheat stews with Persianate sweets and biryanis.",
    "Tripura": "Tripura's bamboo hills and rice-growing valleys sustain a cuisine of bamboo shoots, fermented fish, leafy greens and leaf-wrapped rice cakes.",
    "Uttar Pradesh": "Uttar Pradesh stretches from Awadh's courtly kitchens to Varanasi's temple and street food, with wheat breads, kebabs, milk sweets and winter specialities.",
    "Uttarakhand": "Uttarakhand's Garhwal and Kumaon hills rely on pulses, leafy greens, coarse grains, ghee and leaf-wrapped dairy sweets.",
    "West Bengal": "West Bengal's delta rivers, hilsa fisheries and colonial-era confectionery shaped a cuisine of mustard, freshwater fish, rice and chhena sweets.",
    "Delhi": "Delhi's walled city, Mughal inheritance and Partition-era food cultures produced nihari, chaat, kebabs and a dense street-food economy.",
    "Jammu and Kashmir": "The Kashmir valley's cold climate, saffron, dried chillies and Persianate court cookery produced the rich, red, yoghurt-based wazwan tradition.",
    "Ladakh": "Ladakh's high-altitude, short-season agriculture centres on barley, wheat noodles, dried vegetables, butter tea and preserved dairy.",
    "Andaman and Nicobar Islands": "The islands' reefs, mangroves and settler communities combine seafood, coconut and Bengali, Tamil and indigenous foodways.",
    "Lakshadweep": "Lakshadweep's coral atolls and Arabian Sea fisheries shape island cooking around tuna, rice, coconut and local household traditions.",
    "Puducherry": "Puducherry's Tamil coast and French colonial quarter created a cuisine of coconut, seafood, tamarind and Indo-French baked and stewed dishes.",
}

CATEGORY_LABEL = {
    "grain-bread": "bread or grain preparation",
    "curry-stew": "curry or stew",
    "fermented-steamed": "fermented or steamed preparation",
    "roast-fried": "roasted or fried preparation",
    "sweet-dessert": "sweet or dessert",
    "beverage": "drink",
    "meat": "meat dish",
    "snack": "snack",
    "rice": "rice preparation",
}

CATEGORY_TECHNIQUE = {
    "grain-bread": "Dough is kneaded, rested and shaped by hand, then baked on a tawa, in a tandoor or over a hearth. Modern kitchens use gas or electric heat but keep the same resting and shaping.",
    "curry-stew": "Aromatics are tempered in fat, ground or whole spices are bloomed, and the main ingredient is simmered in an open or sealed vessel. Pressure cookers and gas ranges now shorten the simmer.",
    "fermented-steamed": "Grain or pulse batters are soaked, stone- or mixer-ground and left to ferment with ambient lactic microflora before steaming in moulds, leaves or steamers. Steel steamers and packaged batter now replace earthen pots.",
    "roast-fried": "Pieces are marinated and cooked over high, dry heat — skewered, grilled or shallow-fried. Ovens, air fryers and non-stick pans now stand in for the clay tandoor or iron kadai.",
    "sweet-dessert": "Milk is reduced, syrups are cooked to a measured thread or ball stage, and the mixture is set or fried before serving. Thermometers, steel kadai and refrigeration now control what was judged by eye.",
    "beverage": "The raw material is roasted or fermented, then steeped, filtered or frothed. Steel filters, blenders and refrigeration have replaced earthen pots and hand churning.",
    "meat": "Meat is marinated with tenderising agents, then slow-braised, smoked or grilled. Pressure cookers and temperature-controlled ovens now shorten cooking without changing the spice sequence.",
    "snack": "Battered or assembled components are fried, steamed or layered just before serving. Stainless-steel counters and batch fryers now support the street stall.",
    "rice": "Rice is boiled or parboiled, then folded through a reduction or tempering once it has cooled. Pressure cookers and pre-cooked rice now replace the open pot.",
}

NO_FIRST_REFERENCE = (
    "The dish is documented in regional cookery and food writing, but no securely dated earliest "
    "written reference has been established for it; this atlas therefore claims no century of invention."
)

GENERIC_MODERN = (
    "It is served in homes, regional restaurants and at festivals; present-day versions adjust fat, "
    "sugar, chilli and cooking time, and packaged or restaurant versions are now common."
)

# Curated research notes. Keys are dish ids. Anything not listed is derived from
# the dish catalogue plus the state/technique notes above.
FACTS: dict[str, dict] = {
    # ── Flagships with dated textual evidence ──────────────────────────────
    "masala-dosa": {
        "origin": "Old Mysore and the Udupi temple kitchens of coastal Karnataka",
        "first": "A preparation called dosaka is described in the 12th-century Sanskrit encyclopaedia Manasollasa (c. 1130 CE); the paper-thin crisp crepe and the potato filling are 20th-century developments.",
        "tradition": "Fermented rice–black gram batter became a temple and hotel staple across South India.",
        "modern": "Served on a banana leaf or steel plate with sambar and coconut chutney; Udupi restaurants Standardised it nationally and instant batter mixes are now sold commercially.",
        "sources": ["manasollasa-1130", "achaya-1998", "sen-2004"],
        "confidence": "documented",
    },
    "idli-sambar": {
        "origin": "The rice-and-black-gram fermentation belt of Tamil Nadu and Karnataka",
        "first": "Fermented rice cakes related to idli are discussed in medieval South Indian Sanskrit and Kannada food writing; the modern idli–sambar pairing is documented in South Indian household cookery.",
        "tradition": "Steamed idli became a breakfast and temple food, with sambar supplying pulse protein and tamarind acidity.",
        "modern": "Steel idli stands, pressure-cooked sambar and packaged batter made it a national breakfast; it is also served in miniature 'button idli' and podi-tossed forms.",
        "sources": ["achaya-1998", "achaya-1994", "sen-2004"],
        "confidence": "documented",
    },
    "hyderabadi-biryani": {
        "origin": "The Asaf Jahi court kitchens of Hyderabad on the Deccan plateau",
        "first": "Layered rice-and-meat cookery is described in Mughal and Deccani court records; the Hyderabadi kachchi dum form is associated with the 18th–19th-century court.",
        "tradition": "Raw marinated meat and part-boiled rice are sealed in a handi and cooked by dum (slow, trapped steam) for a wedding and feast centrepiece.",
        "modern": "Served with mirchi ka salan and raita; now cooked in sealed degs, pressure cookers and restaurant biryani pots, and sold as a packaged meal.",
        "sources": ["sen-2004", "achaya-1994", "regional-food-writing"],
        "confidence": "documented",
    },
    "hyderabadi-haleem": {
        "origin": "Hyderabad's Ramzan kitchens, from the Arab harees tradition of pounded wheat and meat",
        "first": "Harees is a documented medieval Arab wheat-and-meat porridge; the spiced Hyderabadi form is documented in 20th-century city food writing.",
        "tradition": "Wheat, pulses and meat are pounded together over wood-fired cauldrons through the night and distributed during Ramzan.",
        "modern": "Hyderabadi Haleem was registered as a Geographical Indication in 2010; it is now sold by restaurants and packaged for delivery during Ramzan.",
        "sources": ["gi-registry", "sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    "butter-chicken": {
        "origin": "Post-Partition Delhi, in the tandoori restaurants of Daryaganj",
        "first": "Restaurant histories of Moti Mahal describe the 1940s–50s practice of returning tandoori chicken to a tomato, butter and cream gravy.",
        "tradition": "The dish repurposed leftover tandoori chicken, turning dry clay-oven meat into a mild, enriched curry.",
        "modern": "A global restaurant and ready-meal standard, with vegan, low-fat and regional variations.",
        "sources": ["sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    "rogan-josh": {
        "origin": "The Kashmir valley's wazwan and Persianate court cookery",
        "first": "The Persianate name and the Kashmiri technique of colouring meat with dried red chillies and ratanjot are documented in Kashmir food writing; no securely dated first recipe is claimed.",
        "tradition": "A centrepiece of the wazwan, prepared by hereditary waza cooks with yoghurt, ghee and praan (Kashmiri shallot).",
        "modern": "Served at weddings and in Kashmiri restaurants nationwide; tomato-based and pressure-cooked shortcuts are common home variations.",
        "sources": ["sen-2004", "regional-food-writing", "achaya-1994"],
        "confidence": "documented",
    },
    "litti-chokha": {
        "origin": "The Bihar plains and the sattu-and-open-fire cooking of the Gangetic countryside",
        "first": "Sattu (roasted gram flour) is a long-documented staple of the region; litti as a named stuffed, fire-roasted ball is documented in regional food writing rather than a dated text.",
        "tradition": "A travel and peasant food, carried to fields and eaten with mashed fire-roasted aubergine, potato and tomato chokha.",
        "modern": "Now sold at urban stalls and served in plated restaurant form, often with ghee and papad.",
        "sources": ["achaya-1994", "regional-food-writing"],
        "confidence": "regional-tradition",
    },
    # ── Batch 1 ───────────────────────────────────────────────────────────
    "puttu": {
        "origin": "The coconut-and-rice breakfast kitchens of Kerala's central coast",
        "first": "Steamed rice-flour and coconut preparations are described in Kerala household cookery; no securely dated first written reference is claimed.",
        "technique": "Moistened rice flour is layered with grated coconut into a cylindrical puttu kutti and steamed over a perforated disc; the steel puttu maker now replaces the bamboo tube.",
        "modern": "Served with kadala curry, banana or sugar, and now made with instant flour and microwave steamers.",
        "sources": ["regional-food-writing", "achaya-1998", "oral-tradition"],
        "confidence": "regional-tradition",
    },
    "filter-coffee": {
        "origin": "The coffee-house culture of Madras and the coffee-growing hills of the Tamil south",
        "first": "Coffee cultivation expanded in South India in the 19th century; the two-chamber steel filter and the dabarah–tumbler service are documented in 20th-century Madras coffee-house writing.",
        "technique": "A dark coffee–chicory decoction drips overnight through a perforated upper chamber, then is pulled between tumbler and dabarah to build froth.",
        "modern": "Served in steel tumblers in cafés and households; instant 'degree coffee' and espresso-based versions now coexist with the filter.",
        "sources": ["achaya-1998", "sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    "amritsari-kulcha": {
        "origin": "The tandoor shops and langar-adjacent food streets of Amritsar",
        "first": "Tandoor-baked stuffed breads are documented in Punjabi urban food writing of the 20th century; no dated first recipe is claimed.",
        "modern": "Served crushed under white butter with chole and onion; now baked in gas and electric tandoors and sold frozen.",
        "sources": ["sen-2004", "regional-food-writing", "oral-tradition"],
        "confidence": "regional-tradition",
    },
    "ukadiche-modak": {
        "origin": "Maharashtrian Ganesh Chaturthi household and temple offerings",
        "first": "Modak as a sweet offering is described in Marathi religious and festival literature; the steamed ukadiche form is documented in household cookery.",
        "modern": "Offered as prasad and sold in sweet shops during Chaturthi; moulds, ready-made shells and chocolate or dry-fruit fillings are now common.",
        "sources": ["sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    # ── Batch 2 ───────────────────────────────────────────────────────────
    "apong": {
        "origin": "Adi and Nyishi households of Arunachal Pradesh's Siang and Subansiri valleys",
        "tradition": "A hospitality drink served at festivals, community work and dispute settlement, prepared and kept by household brewers.",
        "technique": "Cooked rice is mixed with a herbal starter cake, fermented in an earthen or bamboo vessel, then strained and diluted with water.",
        "modern": "Still home-brewed; bottled and festival-market versions now appear, and rice-beer service is a marker of indigenous identity.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "til-pitha": {
        "origin": "Assamese Bihu households across the Brahmaputra valley",
        "tradition": "Made in quantity for Magh Bihu and offered to guests as a harvest-season rice cake.",
        "technique": "A thin rice-flour crepe is dry-roasted on a hot tawa, filled with toasted sesame and jaggery, and rolled while still pliable.",
        "modern": "Sold in sweet shops and at Bihu fairs; shaped into rolls and small envelopes with coconut or date jaggery variations.",
        "sources": ["regional-food-writing", "oral-tradition"],
        "confidence": "regional-tradition",
    },
    "silao-khaja": {
        "origin": "The sweet makers of Silao, near Nalanda in Bihar",
        "tradition": "A layered sweet associated with the pilgrimage and market traffic around Nalanda and Rajgir.",
        "technique": "Thin wheat dough sheets are folded repeatedly with ghee, fried into crisp layers and soaked in cardamom-scented sugar syrup.",
        "modern": "Silao Khaja received a Geographical Indication registration in 2018; it is now packed for regional retail and online sale.",
        "sources": ["gi-registry", "regional-food-writing"],
        "confidence": "documented",
    },
    "bafauri": {
        "origin": "Chhattisgarhi home kitchens of the rice-growing central plains",
        "tradition": "A light, inexpensive protein dish made from gram flour rather than a festive sweet or meat preparation.",
        "technique": "A spiced besan batter is steamed into a firm cake, cooled, sliced and finished with a mustard, curry-leaf and chilli tempering.",
        "modern": "Now made in steel steamers and served as a snack or light meal with chutney.",
        "sources": ["regional-food-writing", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "bebinca": {
        "origin": "Goan Indo-Portuguese convent and household baking",
        "tradition": "A Christmas and wedding sweet whose seven (or more) layers are traditionally counted as they are baked.",
        "technique": "A thin coconut-milk, egg-yolk and flour batter is poured in layers, each grilled or baked before the next is added, so the top stays glossy.",
        "modern": "Sold in tins by Goan bakeries and served with ice cream; oven-baked, eggless and jaggery versions now exist.",
        "sources": ["sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    "handvo": {
        "origin": "Gujarati household kitchens of the Ahmedabad–Surat belt",
        "tradition": "A fermented savoury cake that uses leftover dals and seasonal gourd, often made for travel and fasting-adjacent meals.",
        "technique": "Rice and mixed pulses are soaked, ground and fermented with curd, then baked or steamed in a greased mould with a mustard–sesame crackle on top.",
        "modern": "Baked in ovens and air fryers, sold as a packaged mix, and served with chutney or pickle.",
        "sources": ["regional-food-writing", "achaya-1998"],
        "confidence": "regional-tradition",
    },
    "haryanvi-churma": {
        "origin": "The wheat, bajra and dairy households of rural Haryana",
        "tradition": "A coarse, ghee-bound sweet eaten with bajra roti, milk and seasonal greens, and made for harvest and family celebrations.",
        "technique": "Thick wheat rotis are baked over a slow hearth, pounded or crumbled by hand, then kneaded with melted desi ghee and jaggery until they bind.",
        "modern": "Now made from pre-baked rotis or ready churma flour, formed into laddus and sold in sweet shops.",
        "sources": ["regional-food-writing", "achaya-1994", "oral-tradition"],
        "confidence": "regional-tradition",
    },
    "chana-madra": {
        "origin": "The Chamba and Kangra dham kitchens of Himachal Pradesh",
        "tradition": "A festival and wedding dish cooked by hereditary boti cooks for the communal dham feast, traditionally without onion, garlic or tomato.",
        "technique": "Chickpeas are simmered in whisked curd thickened with a little gram flour; constant stirring and low heat stop the yoghurt splitting.",
        "modern": "Served on leaf plates with rice and other dham courses; pressure-cooked chickpeas and cream-enriched restaurant versions are common.",
        "sources": ["regional-food-writing", "sen-2004"],
        "confidence": "regional-tradition",
    },
    "pittha": {
        "origin": "Tribal rice-growing households across the Jharkhand plateau",
        "tradition": "Prepared at harvest festivals and family ceremonies, often by shaping the dough by hand rather than with a mould.",
        "technique": "Warm rice-flour dough is pressed into crescents or cups, filled with jaggery and sesame, and steamed on a cloth over a boiling pot.",
        "modern": "Steel steamers and banana-leaf liners are now used; sweet and savoury filled versions are served with chutney.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "mysore-pak": {
        "origin": "The royal kitchen of Mysore in southern Karnataka",
        "tradition": "Associated with the Mysore palace kitchens and with festive sweet boxes across Karnataka.",
        "technique": "Gram flour is roasted in ghee, sugar syrup is cooked to a precise stage, and the two are emulsified until the mixture sets with a characteristic porous grain.",
        "modern": "Sold in sweet shops in ghee-rich and 'diamond' cuts, with chocolate, sesame and low-sugar variations.",
        "sources": ["achaya-1998", "regional-food-writing"],
        "confidence": "documented",
    },
    "dal-bafla": {
        "origin": "The Malwa and Bundelkhand regions of Madhya Pradesh",
        "tradition": "A wheat-and-dal feast dish related to Rajasthani baati but distinguished by boiling the dumpling before baking it.",
        "technique": "Wheat balls are simmered in water until partly cooked, then baked or grilled until blistered, cracked open and drenched in ghee before serving with panchmel dal.",
        "modern": "Served in thali restaurants and at weddings; ovens and air fryers now replace the cow-dung hearth.",
        "sources": ["regional-food-writing", "achaya-1994"],
        "confidence": "regional-tradition",
    },
    "chak-hao-kheer": {
        "origin": "Manipur's valley rice cultivators and Meitei feast cookery",
        "tradition": "Chak-Hao, the aromatic black-purple rice of Manipur, is reserved for ceremonial and festive sweets.",
        "technique": "The rice is soaked for hours and simmered slowly in milk until the grains release a deep violet colour and a nutty aroma.",
        "modern": "Chak-Hao was granted a Geographical Indication in 2020; the kheer is now served chilled in restaurants and sold as a packaged rice product.",
        "sources": ["gi-registry", "ethnographic-accounts", "regional-food-writing"],
        "confidence": "documented",
    },
    "pumaloi": {
        "origin": "Khasi households of the Meghalaya hills",
        "tradition": "A ceremonial steamed rice preparation served at community gatherings and offered with meat or tea.",
        "technique": "Coarsely pounded rice is moistened and steamed in a siew, a narrow vessel that lets steam rise through the meal and set it into a light crumb.",
        "modern": "Metal steamers now stand in for earthen ones; it is served at cultural festivals and in Khasi food stalls.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "vawksa-rep": {
        "origin": "Mizo hill households of Mizoram",
        "tradition": "Smoking pork above the kitchen hearth preserved meat in a humid hill climate and became a defining flavour of Mizo cooking.",
        "technique": "Pork is hung over hearth smoke, then simmered with bamboo shoot, ginger, garlic and local chilli until the fat renders.",
        "modern": "Refrigeration has reduced the need for smoking, but the smoked flavour is retained and the dish appears on regional restaurant menus.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "zutho": {
        "origin": "Angami Naga villages of Nagaland",
        "tradition": "A milky fermented rice drink served at communal labour, feasts and village ceremonies from bamboo vessels.",
        "technique": "Rice is germinated, dried and pounded with a starter, fermented, then diluted with water and strained.",
        "modern": "Home-brewed and sold at cultural festivals; its production is documented as part of Naga food heritage.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "pakhala": {
        "origin": "Odia household and temple kitchens of the Mahanadi delta",
        "tradition": "A cooling summer meal, historically eaten by farmers and offered as part of simple temple food; Pakhala Dibasa is now marked publicly.",
        "technique": "Leftover cooked rice is covered with water and left overnight to ferment lightly, then served with curd, chilli, ginger and roasted vegetables.",
        "modern": "Served in Odia restaurants and promoted as a regional identity dish, with 'basi pakhala' and freshly made variants.",
        "sources": ["regional-food-writing", "achaya-1998", "sen-2004"],
        "confidence": "documented",
    },
    "ghewar": {
        "origin": "Rajasthani sweet shops of Jaipur, Jodhpur and the monsoon-festival belt",
        "tradition": "Made for Teej and Raksha Bandhan and traditionally gifted to daughters and sisters.",
        "technique": "A very thin flour–ghee batter is poured in rings into hot ghee so it foams into a honeycomb disc, which is then dipped in sugar syrup.",
        "modern": "Sold in plain, malai and rabri-topped versions and shipped in tins; smaller moulds and ovens now support mass production.",
        "sources": ["regional-food-writing", "sen-2004"],
        "confidence": "regional-tradition",
    },
    "sel-roti": {
        "origin": "Nepali–Sikkimese households of the Darjeeling–Sikkim Himalaya",
        "tradition": "Made for Tihar, Dashain and weddings, where the ring shape is part of the ritual offering.",
        "technique": "A pourable rice-flour batter with banana, sugar and milk is poured as a closed ring into hot ghee and turned until evenly golden.",
        "modern": "Sold in Sikkimese bakeries and at festivals; blenders and pre-mixed rice flour now replace hand grinding.",
        "sources": ["ethnographic-accounts", "regional-food-writing"],
        "confidence": "regional-tradition",
    },
    "qubani-ka-meetha": {
        "origin": "Hyderabad's Deccani kitchens, drawing on Central Asian dried-fruit cookery",
        "tradition": "A wedding and banquet dessert that made imported dried apricots into a local sweet.",
        "technique": "Dried apricots are soaked, stewed with sugar until glossy, and sometimes strained or stoned before being served with cream.",
        "modern": "Served warm or chilled with custard, cream or ice cream in Hyderabadi restaurants; compressed and pre-packaged versions are sold.",
        "sources": ["sen-2004", "regional-food-writing"],
        "confidence": "documented",
    },
    "awan-bangwi": {
        "origin": "Tripuri households of Tripura's hill and valley villages",
        "tradition": "A ceremonial rice cake prepared for family celebrations, offerings and guests.",
        "technique": "Glutinous rice is mixed with jaggery and coconut, wrapped in banana or turmeric leaf and steam-baked so the leaf perfumes the cake.",
        "modern": "Steel steamers and foil are sometimes substituted for leaf wrapping; the cake is sold at tribal food fairs.",
        "sources": ["ethnographic-accounts", "oral-tradition"],
        "confidence": "oral-tradition",
    },
    "banarasi-malaiyo": {
        "origin": "Varanasi's winter sweet shops and milk vendors",
        "tradition": "A cold-season delicacy whose light foam depends on the city's winter dew and night chilling; sold at dawn in the old city.",
        "technique": "Saffroned sweetened milk is boiled, left uncovered overnight, then whisked with hand-skimmed malai into a stable foam.",
        "modern": "Sold in small earthen bowls with pistachio; refrigeration and electric whisks now make it more reliably, and it is promoted as a heritage city food.",
        "sources": ["regional-food-writing", "sen-2004"],
        "confidence": "regional-tradition",
    },
    "singori": {
        "origin": "The Garhwal and Kumaon hill markets of Uttarakhand",
        "tradition": "A leaf-wrapped khoya sweet sold in hill bazaars and made for local festivals.",
        "technique": "Milk is reduced to khoya, sweetened and portioned into cones folded from malu leaves, which perfume the set sweet.",
        "modern": "Now often set in paper or silicone cones, with coconut, chocolate and saffron variations in hill-town sweet shops.",
        "sources": ["regional-food-writing", "oral-tradition"],
        "confidence": "regional-tradition",
    },
    "rosogolla": {
        "origin": "19th-century Bengali sweet makers of Kolkata and the Hooghly belt",
        "tradition": "A chhena-based sweet that became a marker of Bengali confectionery skill and a staple of celebrations.",
        "technique": "Fresh chhena is kneaded until smooth, rolled without cracks and poached in a light, actively boiling sugar syrup so it swells into a spongy sphere.",
        "modern": "'Banglar Rasogolla' received a Geographical Indication tag in 2017; canned, mini, baked and flavoured versions are sold nationally.",
        "sources": ["gi-registry", "achaya-1998", "sen-2004"],
        "confidence": "documented",
    },
}

STAGE_META = [
    {
        "key": "origin",
        "number": 1,
        "numeral": "I",
        "title": "Origin & History",
        "label": "Regional context",
        "eyebrow": "Stage I",
        "era": "Origins & documented history",
    },
    {
        "key": "ingredients",
        "number": 2,
        "numeral": "II",
        "title": "Ingredients",
        "label": "Ingredient reference",
        "eyebrow": "Stage II",
        "era": "Regional & seasonal produce",
    },
    {
        "key": "method",
        "number": 3,
        "numeral": "III",
        "title": "Recipe & Making",
        "label": "Preparation technique",
        "eyebrow": "Stage III",
        "era": "Traditional technique & cookware",
    },
    {
        "key": "plated",
        "number": 4,
        "numeral": "IV",
        "title": "Modern Form, Serving & Recognition",
        "label": "Finished dish",
        "eyebrow": "Stage IV",
        "era": "Present day",
    },
]


def list_phrase(items: list[str]) -> str:
    items = [i for i in items if i]
    if not items:
        return "regional staples"
    if len(items) == 1:
        return items[0]
    return ", ".join(items[:-1]) + " and " + items[-1]


def build(dish: dict, classification: str = "State") -> dict:
    did = dish["id"]
    state = dish["state"]
    f = FACTS.get(did, {})
    context = STATE_CONTEXT.get(state, "the region's food culture")
    cat = dish.get("category", "curry-stew")
    cat_label = CATEGORY_LABEL.get(cat, "regional preparation")
    ingredients = dish.get("ingredients", [])
    first = f.get("first", NO_FIRST_REFERENCE)
    origin = f.get("origin", f"the {state} region")
    tradition = f.get(
        "tradition",
        f"It belongs to the {cat_label} tradition of {state} and is embedded in household, festival and regional food practice.",
    )
    technique = f.get("technique", f"{dish.get('keyTechnique', 'traditional preparation')} — {CATEGORY_TECHNIQUE.get(cat, '')}")
    modern = f.get("modern", GENERIC_MODERN)
    sources = f.get("sources", ["regional-food-writing", "oral-tradition"])
    confidence = f.get("confidence", "regional-tradition")

    ing_note = (
        "Chillies, tomatoes, potatoes and some squashes reached Indian kitchens only after the "
        "16th-century Columbian exchange; where they appear in this recipe they are later additions, "
        "not ancient components."
    )
    ing_change = (
        "Regional and seasonal substitution is normal: household versions replace a local green, "
        "pulse, oil or sweetener with what the season and the region provide."
    )
    photo_caveat = {
        "origin": "A photograph of a region or food culture illustrates the setting; it does not prove where or when the dish was invented.",
        "ingredients": "A photograph of a single ingredient illustrates one component of the recipe, not the complete ingredient list.",
        "method": "A modern photograph of a technique or utensil illustrates current practice; it is not a historical photograph of an ancient kitchen.",
        "plated": "A present-day photograph shows the modern plated dish; it is not evidence of an earlier form.",
    }

    stage_data = {
        "origin": {
            "headline": f"{dish['name']} in the food geography of {state}",
            "narrative": f"{context} {dish['name']} is a {cat_label} associated with {origin}. {tradition} {first}",
            "details": [
                f"Geographical & cultural origin: {origin}, in {state}.",
                f"Historical background: {first}",
                f"Regional food tradition: {tradition}",
                f"Cultural significance: {dish.get('description', '').split('.')[0]}.",
            ],
            "evidence": f"Regional food writing supports the dish's association with {state}. {photo_caveat['origin']}",
        },
        "ingredients": {
            "headline": f"What {dish['name']} is built from",
            "narrative": f"The recipe centres on {list_phrase(ingredients)}. These are the staple grains, pulses, vegetables, spices or dairy products of {state}; {ing_change}",
            "details": [f"Principal ingredient: {item}." for item in ingredients[:8]]
            + [
                f"Regional & seasonal ingredients: {context}",
                f"Documented ingredient change: {ing_note}",
            ],
            "evidence": f"Ingredient list from regional recipe documentation. {photo_caveat['ingredients']}",
        },
        "method": {
            "headline": f"How {dish['name']} is made",
            "narrative": f"The defining technique is {technique} Soaking, grinding, fermenting, kneading, stuffing or tempering is done in the order the recipe requires; {CATEGORY_TECHNIQUE.get(cat, '')}",
            "details": [
                f"Traditional technique: {technique}",
                f"Traditional cookware & utensils: {CATEGORY_TECHNIQUE.get(cat, '').split('.')[0]}.",
                f"Key process: {dish.get('keyTechnique', 'traditional preparation')}.",
                "Modern evolution: gas and electric heat, mixer-grinders, steel moulds, pressure cookers and refrigeration now shorten the same sequence of steps.",
            ],
            "evidence": f"Technique and cookware are described in regional recipe documentation. {photo_caveat['method']}",
        },
        "plated": {
            "headline": f"{dish['name']} today",
            "narrative": f"{modern} It is presented in the serving style of {state}, with the {dish.get('tasteProfile', 'regional').lower()} profile that identifies it. {dish.get('description', '')}",
            "details": [
                f"Present-day form & serving: {modern}",
                f"Flavour identity: {dish.get('tasteProfile', 'regional')}.",
                f"Variations: household, festival, street-stall and restaurant versions differ in richness, heat and portion size.",
                "Recognition: GI or commercial recognition is recorded here only where a registration is documented in the cited sources.",
            ],
            "evidence": f"Present-day form from regional food writing and restaurant documentation. {photo_caveat['plated']}",
        },
    }

    stages = []
    for meta in STAGE_META:
        body = stage_data[meta["key"]]
        stages.append(
            {
                "number": meta["number"],
                "key": meta["key"],
                "numeral": meta["numeral"],
                "eyebrow": meta["eyebrow"],
                "title": meta["title"],
                "photoLabel": meta["label"],
                "era": meta["era"],
                "headline": body["headline"],
                "narrative": body["narrative"],
                "details": body["details"],
                "evidenceNote": body["evidence"],
                "sources": sources,
                "confidence": confidence,
            }
        )

    return {
        "dishId": did,
        "dishName": dish["name"],
        "state": state,
        "classification": classification,
        "confidence": confidence,
        "sources": sources,
        "stageCount": 4,
        "stages": stages,
    }


def main() -> None:
    with open(CATALOGUE, encoding="utf-8") as fh:
        catalogue = json.load(fh)
    dishes = catalogue["dishes"]
    classification = {
        did: group["classification"]
        for group in catalogue["groups"]
        for did in group["dishIds"]
    }
    records = {d["id"]: build(d, classification.get(d["id"], "State")) for d in dishes}
    out = {
        "schemaVersion": 1,
        "generatedFrom": "src/data/dishCatalog.json + scripts/build_stage_data.py",
        "policy": (
            "Four primary historical stages per dish. Real, credited photographs only; a stage with no "
            "verified photograph is rendered as a clearly labelled unresolved frame. No historical claim "
            "is inferred from a photograph, and no undated tradition is given an invented century."
        ),
        "stageCount": 4,
        "stageKeys": [m["key"] for m in STAGE_META],
        "bibliography": BIBLIOGRAPHY,
        "totalDishes": len(records),
        "totalStages": sum(len(r["stages"]) for r in records.values()),
        "dishes": records,
    }
    with open(OUTPUT, "w", encoding="utf-8") as fh:
        json.dump(out, fh, indent=2, ensure_ascii=False)
        fh.write("\n")
    print(f"Wrote {OUTPUT}: {out['totalDishes']} dishes, {out['totalStages']} stages")


if __name__ == "__main__":
    main()
