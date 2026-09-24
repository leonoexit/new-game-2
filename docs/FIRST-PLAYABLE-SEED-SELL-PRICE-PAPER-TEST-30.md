# First-playable Seed/Sell price interaction paper test 30

Ngày: 2026-09-23.

Trạng thái: **numerical paper narrowing; no owner-selected prices**. This test uses `AS0` (6 AP/day, 18 days/Season), Q4 no-fee Projects, owner-selected `G0` Seed renewal/profile access, `S∞` storage, 0 AP Shipping Bin sale with **end-of-day payout**, and the working `C234-Y1` crop fixture. It tests the minimum farm economy without a Processor premium, request/order, new Gold sink, or runtime work.

Later Farm correction: [Farm action grammar and AP rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) preserves this test's same-day Plant/Water, next-day Harvest and end-of-day Shipping Bin timing, but **rejects every M/E/B completion and AP-relief route below** because the three Project designs were discarded. Prices and opening wallet remain comparison fixtures; rerun 41 tests AP only, not Seed affordability.

Sources: [crop duration/yield test 29](FIRST-PLAYABLE-CROP-DURATION-YIELD-PAPER-TEST-29.md), [Gold scope after X0 audit 16](GOLD-ROLE-POST-X0-AUDIT-16.md), [economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) (historical prices only), [content registry 01](CONTENT-MINIMUM-REGISTRY-01.md), [mini-roster fixture 01](PERSON-MINI-ROSTER-FIXTURE-01.md).

## 1. Timing contract before any price comparison

1. Buy Seed uses Gold already in the wallet at the time of purchase; a Seed must also be available at its source. Buy/Sell commit costs 0 AP, but Plant still costs AP.
2. Putting a Fresh item in the Shipping Bin marks it Sold. Its Gold arrives **at the end of that day**, so it cannot fund a same-day Seed purchase.
3. `S∞` has no storage cap or perishability. A held item may be sold on a later day; the real decision pressure arises when Seed is needed before the next payout, a Gift consumes the item, or an available profile Seed creates a timely option.
4. `COL-1` records do not consume outputs. Its chosen Seed is a reward, so a sale is not required to receive that first chosen profile; Gold matters for replacement Seeds and purchases when an unchosen profile is actually stocked.

The prior ledger's arithmetic `wallet + sale − Seed cost` is valid as an **end-of-day balance only if the wallet could already afford the Seed at purchase time**. Treating the eventual Bin payout as immediate buying power would violate the active market timing.

## 2. First Turnip renewal: exact cash timing

Use the historical fixture solely as a controlled example: starting wallet `4G`, two Turnip crops already planted, two replacement Turnip Seeds stocked on D3 at `2G` each, and each D3 Harvest produces one Fresh Turnip sold for `4G` if binned. Under `C234-Y1`, the first Harvest is D3. D3 Sunny farming load remains `Care 2 + Harvest 2 + Plant 2 = 6 AP`; Buy/Bin adds 0 AP.

| D3 allocation after Harvest | Gold spent on two Seeds before payout | Items kept for later use | Gold at end of D3 |
| --- | ---: | ---: | ---: |
| Bin both Turnips | 4G from the starting wallet | 0 | `4 − 4 + 2×4 = 8G` |
| Bin one; Keep one | 4G from the starting wallet | 1 Fresh Turnip | `4 − 4 + 1×4 = 4G` |
| Keep both | 4G from the starting wallet | 2 Fresh Turnips | `4 − 4 = 0G` |

The two-crop D3 replant is possible in all three rows **because** the fixture begins with 4G. If the starting wallet were below 4G and no replacement Seed was already owned, that same-day replant could not be funded by D3 sales; the player would wait until after a payout or use another legitimate Seed source. The earliest recovery is the next day if Seed is stocked then; exact restock timing is still open. This is not a permanent crop lock.

Under the stated same-day Plant/Care rule, the two Turnips replanted D3 receive Care D3–D4 and can be Harvested again **D5**, not D6. If both D3 outputs remain unsold through D4 **and there is no other Gold income**, the wallet entering D5 is 0G. A new two-Seed D5 replant cannot use D5's own harvest payout. Selling a held item by D4 end would restore enough Gold for D5. Thus the player can defer the Sell/Keep choice under `S∞`, but cannot consume or indefinitely hold every output and also maintain the same paid renewal cadence. A Fresh Turnip held for Bram's current Gift fixture retains a non-Gold use; whether the Gift fits a particular day depends on Weather and the Person schedule fixture.

## 3. Price and yield comparators

All prices below are **paper numbers**, not owner-approved values. Each entry is `Seed cost / Fresh Sell` in G. A cycle means Plant, required Care, then one Harvest; a new cycle needs a replacement Seed. The table's Gold-per-AP calculation assumes manual single-crop Care without Rain or Water Trough batching. **With Care on planting day and immediate replant after Harvest, repeat Harvest spacing is N days for an N-Care crop:** Turnip 2, Lemon Balm 3, Runner Bean 4. The older D3/D6/D9 Turnip burst fixture instead imposes a three-day rhythm and must not be combined with this formula as if both were one rule. The table compares a coherent immediate-replant cycle, not complete play strategy.

| Arm | Turnip | Lemon Balm | Runner Bean | Net Gold if sold and replanted, T/H/L | Net per crop-specific AP, T/H/L | Net per plot-day, T/H/L |
| --- | --- | --- | --- | --- | --- | --- |
| `P-HIST`, `Y1` | `2 / 4` | `3 / 4` | `3 / 6` | `2 / 1 / 3` | `0.50 / 0.20 / 0.50` | `1.00 / 0.33 / 0.75` |
| `P-STEP`, `Y1` | `2 / 4` | `3 / 5` | `3 / 7` | `2 / 2 / 4` | `0.50 / 0.40 / 0.67` | `1.00 / 0.67 / 1.00` |
| `P-HIST`, `YL2` | `2 / 4` | `3 / 4` | `3 / 6`, **two Bean items per Harvest** | `2 / 1 / 9` | `0.50 / 0.20 / 1.50` | `1.00 / 0.33 / 2.25` |

`P-HIST` preserves the old 2/4, 3/4, 3/6 fixture. It makes Runner Bean's single item worth more than Turnip's, but its longer cycle leaves Bean **behind** Turnip in sold Gold per occupied plot-day, while both have the same simple net/AP. That can still be a valid tradeoff if slower, larger payouts are intended; it does not by itself establish a superior cash crop.

`P-STEP` changes only Lemon Balm Sell to 5G and Runner Bean Sell to 7G. It makes the Bean's repeat margin 4G: ahead on the simplified Gold/AP measure, but **equal** to Turnip's 1G per occupied plot-day if immediate replant and same-day Care are used. For Bean to exceed Turnip on that measure with a 3G Bean Seed, its margin must be **strictly above 4G**, requiring at least 8G Sell at integer prices. This is a diagnostic threshold, not a required final price. Rain and Water Trough batching can shift the AP ranking, and exact stock access remains open.

`YL2` with historical prices produces two 6G Bean items for the same six crop-specific AP and one Seed. Its 9G repeat margin is three times the one-item Bean margin, while the second item can also be Kept or Gifted. Lowering each item's Sell price to 3G would restore the old 6G total sale but still give two distinct items for other uses. Without an approved counterweight, `YL2` is a much larger change than a small price adjustment; it is **not** the recommended first-playable working yield.

## 4. Profile access and non-Gold choices

| Choice | What current evidence actually supports | What remains unproven |
| --- | --- | --- |
| Sell Turnip | Funds future renewal after payout and, when stocked, a profile Seed. Turnip's short cycle is a real liquidity advantage. | A D3 sale cannot pay for D3 Seed; extra Gold is not an active Project fee. |
| Keep/Gift Turnip | Preserves Bram's `Fresh · Crop · Root` Gift fixture; collection recording already happened without consuming the item. | Bram's exact schedule/Heart value is not final; Gift may collide with a Sunny farming peak. |
| Choose Runner Bean Seed reward | The first Seed can be free via `COL-1`; Bean's longer cycle and cash shape differ from Turnip. | A higher price alone does not prove the longer wait is enjoyable or that its first sale beats the alternative profile. |
| Choose Lemon Balm Seed reward | Opens the `Crop · Herb` identity and chosen-output Journal signal. | The current minimum does not establish a recurring Herb-specific buyer or premium; its cross-tag alone is not a measured Gold advantage. |

With no Gold fee on M/B/X and no active Processor markup or order, prices cannot make every future sale meaningful after desired Seed access and renewal are funded. This is the owner-selected `G0` scope limit, not a defect to repair with a tax or fabricated purchase.

## 5. Targeted all-Sunny recurrence regression

This is a **new regression caused by the cadence contradiction**, not a rerun of the old three-day Weather fixture. Apply the paper `C234-Y1` rule literally: the original two Turnips are immediately replanted and cared for on each Harvest day, giving main-cohort Harvests D3/D5/D7/D9/D11/D13/D15/D17. Keep Person P's 2 AP on D4/D10/D16, Q4 recipes, farm-first priority, no AP banking, and no Rain. The player sells enough Turnips ahead of purchases to fund replacement and later two expansion Seeds under the 4G starting-wallet and 2G Turnip-Seed fixture. This is an explicit possible allocation, not a forced farming policy or final price lock.

| Window | Farm/route allocation | Cumulative outcome |
| --- | --- | --- |
| D3–D8 | D3/D5/D7 use the full 6 AP for Care 2 + Harvest 2 + Plant 2. D4 leaves 2 route AP after Care 2 + Person 2; D6 leaves 4 after Care 2; D8 has Care 2 and spends 1 route AP. | M route 2+4+1 = 7 AP; Water Trough completes **D8**. |
| D9–D12 | D9 and D11 Turnip bursts each use 5 AP after M, leaving one spare; D10 Care 1 + Person 2 leaves 3 AP. Complete the four Clear/Till setup actions using D9's one and D10's three AP. D11's single AP cannot both Plant and Care a new crop. On D12, Care the original pair for 1 AP, Plant two expansion Turnips for 2 AP, and Care that new pair for 1 AP. | Six expansion actions complete **D12**; four crops are active. |
| D13–D14 | D13 Care four crops 2 + Harvest/replant original pair 4 = 6 AP, exposing the expanded peak. The expansion Turnips receive their second Care on D13 and can be Harvested D14. D14 Care the original pair 1 + Harvest expansion pair 2 = 3 AP; the player chooses **not** to replant the expansion pair then. | Two original Turnips remain active; two expansion plots are open. This is a player allocation choice, not an automatic crop loss. |
| D15–D18 | D15 and D17 original-pair bursts cost 5 AP each and leave 1 route AP each. D16 Care 1 + Person 2 leaves 3 route AP. D18 Care 1 leaves 5 route AP. Bench preview occurs D15, three days after Expansion and after the D13 expanded peak. Use route AP `1 + 3 + 1 + 3 = 8`: Descend 3, Search Stone 1, Extract Stone 1, Wood 1, Work 2. | Harvest Bench completes **D18**. Exact action order within the route respects CP6 and source readiness. |

`[PAPER PASS, CONDITIONAL]` The coherent immediate-replant route completes Q4 M/E/B without Rain inside S18, **if the player accepts a smaller ongoing farm after harvesting the expansion pair**. It has no spare Season days after B, unlike the older three-day-burst fixture. Replanting all four indefinitely, Gift choices, different Seed stock, or later crop/price changes can move B across the boundary; Project progress persists and S18 is not a completion deadline. This is a concrete tradeoff between crop throughput and construction AP, not a Rain requirement.

## 6. Verdict and next dependency

1. `[PAPER RESULT]` Seed renewal is feasible in the first D3 cycle at the historical 4G starting wallet, but **only because that wallet pre-funds two Seeds**. End-of-day Bin payout cannot fund a same-day purchase. The exact starting wallet, opening Seed stock and restock dates must be explicit before a final price lock.
2. `[PAPER RESULT]` `P-HIST` permits positive renewal margins, but does not give the one-item Runner Bean a clear cash-throughput lead over Turnip. `P-STEP` is a legible one-item comparator that does; neither is owner-selected. The stronger `YL2` supply effect is deferred rather than promoted by price arithmetic alone.
3. `[PAPER RECOMMENDATION]` Keep `C234-Y1`, Q4 no-fee, and `G0` as working assumptions. `P-STEP` (`Turnip 2/4`, `Lemon Balm 3/5`, `Runner Bean 3/7`) is a **comparison fixture only**: it tests higher per-action Bean return but does not create a clear per-plot-day cash lead under coherent immediate replant. Keep `P-HIST` as the lower-price arm. Do not call either final values or a complete Year 1 economy.
4. `[REGRESSION RESOLVED FOR ONE ROUTE]` The D3/D6/D9 Turnip burst fixture conflicts with `C234` plus same-day replant/Care, which yields D3/D5/D7. Section 5 supplies a coherent all-Sunny Q4 route at M/E/B D8/D12/D18. Do not transfer the old Weather test 28 dates to this route or assume every crop-replant policy also completes B by D18.
5. `[OPEN]` Exact starting wallet, Seed stock/restock timing, price scale, Gift/Heart value, and crop survival at Season boundary. A price selection cannot settle these. The next paper dependency can return to optional Grove Footbridge material/Work quantity under Q4 and X0; do not restore a Gold permit or invent a replacement sink.

No runtime, art, staging, commit, or push is authorized by this paper result.
