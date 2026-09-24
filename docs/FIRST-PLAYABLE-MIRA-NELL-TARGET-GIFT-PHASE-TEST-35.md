# First-playable Mira/Nell target–Gift phase test 35

Ngày: 2026-09-23.

Trạng thái: **bounded paper test; no Grove batch generator, Person schedule, Heart value or ability wording selected**. This follows [Heart/Gift test 32](FIRST-PLAYABLE-HEART-GIFT-CADENCE-PAPER-TEST-32.md) and [Bram role review 34](FIRST-PLAYABLE-BRAM-FUNCTIONAL-ROLE-REVIEW-34.md). It tests whether Mira's information and Nell's timing have a usable target **on the same days as an actual Gift path**, without counting historical request/Processor content or inventing an Upper Grove reward. The tester remains the informed product owner; this is not fresh-player evidence.

Grove follow-up 2026-09-23: [contract 36](FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) recommends an exact visible Wild Herb opportunity for the one-item V0 Grove. This **supersedes this test's paid `Search 1 AP` scenario as the working Grove baseline**; the D8/D15 Search cases below remain conditional comparators. Under the visible arm, Nell's coherent hold moves to a full-AP D13 and Collect D14, while Mira loses the speculative hidden-batch target.

Sources: [Person/Heart decisions](NPC-HEART-DESIGN-DECISIONS.md), [mini-roster fixture](PERSON-MINI-ROSTER-FIXTURE-01.md), [kernel audit](PERSON-ROSTER-KERNEL-AUDIT-02.md), [resource-area simulation](RESOURCE-AREA-PAPER-SIMULATION-01.md), [content registry](CONTENT-MINIMUM-REGISTRY-01.md), [exact River/Mine tableau](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md), [Fishing resolution](FISHING-RESOLUTION-SENSITIVITY-02.md), [corrected all-Sunny farm route](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md), [Seasonal Weather test](FIRST-PLAYABLE-SEASONAL-WEATHER-RNG-PAPER-TEST-28.md).

## 1. Fixed rules versus test fixtures

| Status | Rule used here |
| --- | --- |
| `[OWNER DECIDED]` | Person acquired by a valid Gift, remains owned, spends own persistent capped Heart; one Gift per Person/day; appearance limits Gift/refill, not use of an owned ability; no Person gates a core verb. |
| `[OWNER SELECTED PAPER IDENTITIES]` | Mira=A Read Ahead; Nell=C Hold Open. Their ability text, accepted items and appearance dates below are still fixtures. Bram remains a Person; his functional role is separately open. |
| `[CURRENT SOURCE/TARGET BOUNDARY]` | Hedgerow Berry has a deterministic source. Wild Herb is a Grove batch opportunity. River Catch is exact and face-up before an atomic commit. CP3 Ore and CP6 Stone sources are known through Mine preview; neither is a hidden random reward. Blue Eel requires Rain. |
| `[INHERITED FIXTURE]` | 6 AP/day; S18; Sunny Turnip immediate-replant route; `Search Grove` 1 AP then `Collect` 1 AP for a shown item; uncollected batch opportunity expires at Sleep; Mira Gift D2/8/14, Nell Gift D4/10/16; Gift 1 AP, `+1 Heart`, ability `−1 Heart`, cap 2, same-day use. `Person P` uses 2 AP on D4/10/16 in route 30 and is kept as a **separate stress load**, not asserted to be Nell's Gift. |
| `[OPEN]` | Whether Grove's visible category leaves useful exact uncertainty; which batch days actually contain Wild Herb; Search/Collect final AP, actual Person schedule and Gift tags; Rain Catch held across a Sunny Sleep; probability of any target. No daily Grove or Herb guarantee follows from this test. |

Storage is `S∞`: once Wild Herb is **collected**, it can be kept for a later Nell appearance. Nell's C acts on an **uncollected expiring opportunity**, not on a held inventory item. A Grove batch with Wild Herb is a scenario input, not a promised spawn.

## 2. Where Mira can actually read ahead

| Target | Information already free | Does A add a decision in the current minimum? |
| --- | --- | --- |
| River Silver Minnow / Rain Blue Eel | Exact Catch identity, condition and total cost appear before commit. | **No**. Charging Heart for this preview duplicates the baseline. |
| CP3 Ore / CP6 Stone | Checkpoint/band announces availability; Search reveals the exact current-band source. | **No demonstrated hidden optional result** on the active M/B material path. Older “Veiled Mine” examples are not a counted V0 target. |
| Grove batch | Category is visible; exact item/opportunity *may* differ after Search. | **Conditional**. If the visible category already tells the player whether Wild Herb is present, A gives no relevant new fact. If it only says, for example, an eligible Forage category and exact Wild Herb presence is unknown, A can change the Search decision. The category's actual meaning is still unspecified. |

Bounded D8 choice under route 30: Care 2 + final M-route action 1 leaves **3 AP**. A Mira Gift on D2 can be paid with a deterministic Berry (`Collect 1 + Gift 1`) after Care 2, so one Heart is available by D8 without depending on first Harvest. Suppose D8's Grove category does **not** disclose whether the Search will reveal Wild Herb, and the player wants that Herb for Nell D10.

| D8 hidden result, before Search | Without A | With Mira A (1 Heart; no AP) | What is learned |
| --- | --- | --- | --- |
| Wild Herb is present | Search 1 + Collect 1 fits the 3 AP window. | Preview, then the same Search 1 + Collect 1. | A confirms a good commitment but saves no AP in this row. |
| No desired item is present | Search 1 discovers the miss, or the player skips Grove without knowing. | Preview, then skip Search and spend the AP elsewhere. | A can save **at most the 1 Search AP** here; its value depends on that AP having another use. |

This is an information *option*, not an expected AP saving: no batch distribution, exact alternative V0 item, or player valuation is selected. The old six-card Wood/Fiber/Mushroom batch was a resource-area fixture, not approved content. If every currently authored Grove outcome is simply the same Wild Herb, or if `Herb` is already the exact visible category, **Mira A has no demonstrated V0 target**. Nell acquisition below never requires Mira; an owner without her can still pay Search and react.

## 3. Nell's Gift source phase

Use route 30's farm-first Sunny AP load, including the separate 2-AP `Person P` stress package. A valid Wild Herb must first be Collected, then Gifted while Nell is present. `Search + Collect + Gift = 3 AP` if all happen on one day.

| Wild Herb phase in a bounded scenario | AP/availability result | Earliest Nell Gift supported by that scenario |
| --- | --- | --- |
| Only D3 batch, no stored Herb | D3 Turnip burst uses all 6 AP; no Search or Collect. The opportunity expires at Sleep. | **Not D4.** Nell is not yet owned and cannot use C to hold her own first Gift source. |
| D4 batch, separate `Person P` 2 AP remains | Care 2 + Person P 2 leaves 2 AP; Search + Collect + Gift costs 3. | D4 Gift does **not** fit this stress allocation. Other player priorities could change it; this is not a hard schedule rule. |
| D8 batch has Herb | D8 Care 2 + M-route 1 + Search 1 + Collect 1 = 5 AP. Keep the Herb under `S∞`. | D10 Gift costs 1 AP if Nell appears. |
| D10 batch has Herb but none stored | Care 1 + Person P 2 leaves 3 AP; Search + Collect + Gift exactly fills it. | D10 acquisition fits locally, but displaces that day's expansion setup and cannot inherit route 30's D12 Expansion date without a fresh allocation. |
| D14 batch has Herb after expanded-pair Harvest | Care 1 + Harvest 2 leaves 3 AP; Search + Collect 2 can fit if the player chooses Grove. | D16 Gift can use the stored item. |
| No accessible Herb in S18 | No Gift item, regardless of how many times Nell is announced. | Acquisition waits for a later accessible batch/cycle; core Farm/Mine/River still work. |

`[PAPER FINDING]` Three Nell appearance windows are **not** three refill windows. The first acquisition depends on Grove result **and** enough AP to Collect before Sleep. The recoverable Wild Herb source protects against permanent loss but supplies no fixed maximum wait under an unselected batch generator. Do not set Nell's numerical Heart cadence by counting announcements alone.

## 4. One coherent Hold Open use, with route cost included

The following is a **conditional branch** of route 30, not a claim that its Grove generator produces these days. It uses *only* Wild Herb as the batch item, and does not require Mira.

| Day | Actions added or reallocated versus route 30 | State |
| --- | --- | --- |
| D8 | Care 2 + final M-route action 1 + Search 1 + Collect Wild Herb 1 = 5 AP. | M still completes D8; one Wild Herb is stored. |
| D9–D11 | D9 uses its spare 1 AP on setup. D10 Care 1 + Person P 2 + Nell Gift 1 + setup 2 = 6. D11 uses its spare 1 AP on the fourth setup action. | Nell is acquired with 1 Heart on D10; all four Clear/Till setup actions still finish by D11. |
| D12–D14 | Keep the route-30 expansion/peak/partial-downsize choices. | Expansion completes D12; expanded peak D13; Bench preview D15 remains possible in this branch. |
| D15 | Original-pair farm burst 5 leaves 1 AP. Search Grove 1 reveals a second Wild Herb, but no AP remains to Collect. Spend Nell Heart to hold **that one uncollected Herb** through Sleep. | Without C, it expires at Sleep. With C, it is a target for D16 Collect, not an inventory item or a free Herb. |
| D16 | Care 1 + Person P 2 + Collect held Herb 1 leaves 2 AP for Bench route. | Wild Herb acquired; no second Nell Gift is needed to demonstrate the ability. |
| D17–D18 | D17 farm burst 5 leaves 1 Bench AP. D18 Care 1 leaves 5 Bench AP. | B route still has `2+1+5=8` AP from D16–D18: Descend 3, Search Stone 1, Extract 1, Wood 1, Work 2; B can still finish D18 with valid action order. |

The first D8 Herb paid for Nell's card/Heart, and the held D15 Herb is a **second** opportunity used for Keep/Sell/record or a later Gift. C does not give an extra item, refund Search, or remove Collect AP. Compared with a player who never recruits Nell, the first Herb and Gift AP are still real opportunity costs; this branch shows a meaningful optional use **for a player who chose the relationship**, not an economic dominance proof. A player can always prioritize Bench and ignore Grove. D8/D15 Herb appearances, Person P load, costs and exact completion days remain scenario fixtures.

## 5. Catch boundary and verdict

An exact Blue Eel Catch is a possible C target on a Rain day when the player chooses another AP use. But “hold through one Sleep” has no settled rule for a Rain opportunity carried into Sunny: the game must say whether eligibility was locked at appearance or must still hold at Catch, and what the acquired Fish's `Rain` provenance means. The earlier generic persistent-Catch arm explicitly rejected unclear cross-Weather provenance. **Do not count a Sunny-day held Eel as a validated Nell use** until this is specified; the Grove case above avoids that ambiguity. Common Silver Minnow recurrence alone does not prove C valuable.

1. `[PAPER RESULT]` Nell C has one concrete, conditional V0 use on the Grove batch: D15's uncollected Wild Herb can be saved to D16 after an earlier accessible Herb enabled D10 acquisition. It can fit alongside Q4 B in the stated fork. The first Gift may still miss D4/D10 if the source phase is unfavorable.
2. `[PAPER RESULT]` Mira can acquire Heart from deterministic Berry, but her claimed Grove preview value is **conditional on a useful hidden exact result**. River and current M/B Mine sources cannot be counted as A targets merely because they are opportunities. No target-frequency or Gift/Heart number is validated for Mira yet.
3. `[NOT SELECTED]` No Grove batch content/cadence, alternate hidden item, Person schedule, accepted Gift tag, Heart cap/gain/spend or cross-Weather Catch exception is locked by this scenario. The working cap 2 remains the prior paper baseline.
4. `[NEXT DESIGN GATE]` Specify the **Grove batch contract for its own play value**: what category is visible before Search, which existing output(s) can actually appear, when an uncollected card expires, and its recoverable cadence. Then rerun A/C target-versus-Gift counts. If the Grove has no useful hidden result, redesign Mira's ability rather than conceal mandatory information or manufacture loot for her. If Wild Herb remains too sparse to acquire Nell, revise the Gift-source/appearance relationship before raising Heart supply.
