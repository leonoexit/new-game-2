# First-playable Farm action grammar and AP rerun 41

Ngày: 2026-09-24.

Trạng thái: **working paper rule after owner request to resolve Farm**. This document replaces the old Project-assisted Farm schedule for first-playable paper tests. It does not set final crop prices, Weather probabilities, crop durations/yields or runtime implementation. Water Trough, Harvest Bench and Grove Footbridge are rejected designs, not later unlocks.

## 1. What the source games establish

| Source | Actual farming relationship | What this card game carries |
| --- | --- | --- |
| [Stardew Valley: Watering Cans](https://stardewvalleywiki.com/Watering_Cans) and [Crops](https://stardewvalleywiki.com/Crops) | Watering Can waters crop/soil; rain waters outdoor crops; an unwatered immature crop pauses rather than dies; ripe single-harvest crops can wait. Upgraded cans cover more tiles. | The player targets a Growing Crop with a Watering Can card. Watered state advances growth once at Sleep. Rain supplies that state without a manual action. Mature Crop waits for the Hand. |
| [Stardew Valley: The Board Game, official rules](https://www.dropbox.com/s/ek7h6zn9ul2gxp1/Stardew%20Rules%20v2%20for%20Download.pdf?dl=0), p. 13 | One Water Crops action advances **all** planted crops on the track and automatically harvests crops leaving it; crops do not wither. | The board game demonstrates a valid global abstraction, but its automatic harvest would erase the owner-selected Hand interaction. We retain visible growth progress and, for this first-playable paper rule, no automatic Season-boundary wither. |

The exact AP values below are **Little Valley Cards** paper costs, not rules attributed to either Stardew game. Area grouping and visual stacks do not determine how many crops an action affects; [action granularity test 01](../evidence/ACTION-GRANULARITY-PAPER-TEST-01.md) already rejected that shortcut.

## 2. Working card rule

| Event | Legal target and cost | Immediate result | At Sleep |
| --- | --- | --- | --- |
| Plant | Seed on one Tilled Soil; **1 AP** | Consume one Seed; place one Growing Crop at `0/N` | Can gain the day's first growth if Watered |
| Water | Reusable **Watering Can** on one unwatered Growing Crop; **1 AP** | Mark that crop Watered for today; a second Water has no effect | If Watered, growth `+1`, maximum once this day |
| Rain | All outdoor Growing Crops, including crops planted later that day; **0 AP** | They count as Watered today without a Water action | Each gains at most one growth |
| Harvest | Reusable **Hand / Bàn tay** on one Mature Crop; **1 AP** | Gain the printed Fresh output; return that plot to Tilled Soil | No further growth on the harvested crop |

`Care` is **not** a separate card, action or AP cost. In older traces it meant a successful daily Watered resolution. At Sleep, a Growing Crop that was not Watered stays at its current growth; it does not die. Reaching `N/N` at Sleep makes it Mature on the next day. Mature single-harvest crops need no Water, remain visible until Hand Harvest, and do not produce an item automatically. A crop cannot receive two growth points from Water plus Rain or repeated Tool use on the same day.

This first-playable paper rule carries existing crops and progress across a Season boundary rather than silently killing them. That follows the board-game persistence abstraction and the project's recovery rule. Season-specific crop eligibility and any printed exception would need their own design; none exists for the three current crop profiles.

The earlier `C234-Y1` numbers remain a **working test fixture**, not owner-locked crop balance: Turnip needs 2 successful daily growths, Lemon Balm 3, Runner Bean 4; each yields one Fresh item with no regrow. A planted crop may be watered on its planting day. Exact output value, Seed stock and prices remain open.

## 3. No-Project AP rerun

Assume 6 AP/day, Sunny every day, two Tilled Soil and two Turnip Seeds on D1, enough later Seed stock, and two extra Overgrown Soil available. `Clear` and `Till` each cost 1 AP per plot in the old Farm fixture. This tests AP only; it does not assert that the opening wallet can buy every Seed.

| Day | Crop state and chosen actions | Farm AP | Other AP | End-of-day result |
| --- | --- | ---: | ---: | --- |
| D1 | Plant two Turnips `2`, Water both `2` | 4 | 2 | Both `1/2` after Sleep |
| D2 | Water both `2` | 2 | 4 | Both Mature on D3 |
| D3 | Hand Harvest both `2`, replant both `2`, Water both `2` | **6** | 0 | New pair `1/2` |
| D4 | Water the pair `2`; Clear and Till two extra plots `4` | **6** | 0 | Original pair Mature; four plots ready |
| D5 | Hand Harvest original pair `2`, replant that pair `2`, Water pair `2` | **6** | 0 | Original pair `1/2`; extra plots remain free |
| D6 | Water original pair `2`, Plant two extra Turnips `2`, Water new pair `2` | **6** | 0 | Original pair Mature; extra pair `1/2` |
| D7 | If keeping **all four** on cadence: Hand Harvest original pair `2`, replant it `2`, Water all four `4` | **8** | **short 2** | Cannot perform this full plan with ordinary 6 AP |

At D7 the shortfall is a **choice cost**, not a forced failed day. For example, Hand Harvest the mature pair `2`, Water the two Growing crops `2`, and spend the remaining 2 AP elsewhere; postpone replanting. Or replant the mature pair but leave them unwatered today, delaying their growth by one day. Rain on D7 removes all four Water AP from the full plan, making it cost 4 AP. A Nell Heart can conditionally cover the 2-AP shortfall if Nell is owned, a Heart is available and her once-per-day ability is unused; this trace does **not** assume those timing conditions occur by D7.

General Sunny-day cost under this rule is `H Harvest + P Plant + (G existing Growing + P newly planted) Water` AP, where `H`, `P` and `G` count distinct crop cards and Mature crops do not need Water. Rain removes the Water term. A normal two-Turnip renewal day is `2+2+2=6`; an expanded day with two Mature, two other Growing and immediate replant is `2+2+4=8`.

## 4. Result and boundaries

1. **No Farm relief card is needed to make the initial two-crop loop function.** The all-Sunny two-Turnip repeat uses all 6 AP on harvest/replant days and leaves 4 AP on ordinary watering days. Rain and deliberate pauses create room for other play.
2. **Expansion has a visible cost.** Four plots can be prepared, but trying to keep four crops progressing while immediately replanting two Mature crops produces an 8-AP Sunny day. The player can delay watering or replanting, wait for Rain, or use a legitimately available Nell Heart. No arbitrary Project is inserted to erase that tradeoff.
3. The old M/E/B D8/D12/D18 route, Project material sinks, and the claim that a Bench makes the expanded peak 5 AP are void. The opening Seed wallet and exact Nell timing are not proven by this AP-only rerun. Wood/Ore/Stone need a purpose check separate from farming.
4. This working rule must be reviewed for **feel**, not only arithmetic: repeated one-crop Water actions may be tedious. A future improvement needs a clear physical Tool or weather rule and its own paper test; none is selected by this document.
