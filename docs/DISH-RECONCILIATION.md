# Dish reconciliation — actual repo state vs the 94-item target

Generated from `src/data/foodData.ts` and `src/data/photography.json`. **66 dishes across 33 groups** currently exist.

Target: 28 states × 3 dishes = 84, plus 5 union territories × 2 dishes = 10, **94 total**.

⚠︎ = the dish exists but has no verified finished-dish photograph yet.

## States (28) — all present, every one short of the target

| State | Class | Existing dishes | Present | Missing | Status |
|---|---|---|---|---|---|
| Andhra Pradesh | State | Pesarattu; Gongura Mutton ⚠︎ | 2 | 1 | +1 |
| Arunachal Pradesh | State | Thukpa; Bamboo Shoot Pork ⚠︎ | 2 | 1 | +1 |
| Assam | State | Masor Tenga; Khar | 2 | 1 | +1 |
| Bihar | State | Litti Chokha; Thekua | 2 | 1 | +1 |
| Chhattisgarh | State | Chila; Fara ⚠︎ | 2 | 1 | +1 |
| Goa | State | Goan Fish Curry; Pork Vindaloo | 2 | 1 | +1 |
| Gujarat | State | Dhokla; Undhiyu | 2 | 1 | +1 |
| Haryana | State | Bajra Khichdi ⚠︎; Kadhi Pakora ⚠︎ | 2 | 1 | +1 |
| Himachal Pradesh | State | Siddu; Himachali Dham ⚠︎ | 2 | 1 | +1 |
| Jharkhand | State | Dhuska; Chilka Roti | 2 | 1 | +1 |
| Karnataka | State | Masala Dosa; Bisi Bele Bath | 2 | 1 | +1 |
| Kerala | State | Appam with Vegetable Stew; Kerala Fish Molee | 2 | 1 | +1 |
| Madhya Pradesh | State | Indori Poha; Bhutte Ka Kees ⚠︎ | 2 | 1 | +1 |
| Maharashtra | State | Vada Pav; Puran Poli | 2 | 1 | +1 |
| Manipur | State | Eromba; Singju | 2 | 1 | +1 |
| Meghalaya | State | Jadoh; Dohneiiong ⚠︎ | 2 | 1 | +1 |
| Mizoram | State | Mizo Bai ⚠︎; Sawhchiar | 2 | 1 | +1 |
| Nagaland | State | Naga Smoked Pork with Bamboo Shoots; Galho ⚠︎ | 2 | 1 | +1 |
| Odisha | State | Dalma; Chhena Poda | 2 | 1 | +1 |
| Punjab | State | Makki di Roti & Sarson da Saag; Butter Chicken | 2 | 1 | +1 |
| Rajasthan | State | Dal Baati Churma; Laal Maas ⚠︎ | 2 | 1 | +1 |
| Sikkim | State | Sikkimese Momos; Gundruk Soup ⚠︎ | 2 | 1 | +1 |
| Tamil Nadu | State | Chettinad Chicken Curry; Idli Sambar | 2 | 1 | +1 |
| Telangana | State | Hyderabadi Dum Biryani; Hyderabadi Haleem ⚠︎ | 2 | 1 | +1 |
| Tripura | State | Mui Borok ⚠︎; Chakhwi | 2 | 1 | +1 |
| Uttar Pradesh | State | Awadhi Galouti Kebab ⚠︎; Banarasi Kachori Sabzi ⚠︎ | 2 | 1 | +1 |
| Uttarakhand | State | Kafuli ⚠︎; Bal Mithai | 2 | 1 | +1 |
| West Bengal | State | Shorshe Ilish; Mishti Doi | 2 | 1 | +1 |

## Union territories

| UT | Class | Existing dishes | Present | Missing | Status |
|---|---|---|---|---|---|
| Andaman and Nicobar Islands | Union Territory | Andaman Coconut Prawn Curry ⚠︎; Island Mud Crab Masala ⚠︎ | 2 | 0 | complete |
| Chandigarh | Union Territory | — | **absent** | 0 | needs all 3 |
| Dadra and Nagar Haveli and Daman and Diu | Union Territory | — | **absent** | 0 | needs all 3 |
| Delhi | Union Territory | Old Delhi Nihari; Chandni Chowk Papdi Chaat | 2 | 0 | complete |
| Jammu and Kashmir | Union Territory | Rogan Josh; Kashmiri Dum Aloo | 2 | 0 | complete |
| Ladakh | Union Territory | Ladakhi Skyu ⚠︎; Gur Gur Cha & Khambir | 2 | 0 | complete |
| Lakshadweep | Union Territory | — | **absent** | 0 | needs all 3 |
| Puducherry | Union Territory | Pondicherry Fish Curry ⚠︎; Koli Kari ⚠︎ | 2 | 0 | complete |

## What is actually missing

* **States absent entirely:** none — all 28 are present.
* **States below three dishes:** 28 of 28, each needing exactly one more dish.
* **Union territories absent:** Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Lakshadweep — none of these appear in the map or the data.
* **Union territories present:** Andaman and Nicobar Islands, Delhi, Jammu and Kashmir, Ladakh, Puducherry — all at two dishes, so nothing is missing there.
* **Dishes with no verified plate photograph:** 22 of 66.

So the shortfall is **28 dishes, one per state** — not 28 new states. The 5 UTs already meet their quota.
