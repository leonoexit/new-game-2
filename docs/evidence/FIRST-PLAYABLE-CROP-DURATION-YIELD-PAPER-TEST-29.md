# First-playable crop duration/yield paper test 29

Ngày: 2026-09-23.

Trạng thái: **numerical paper narrowing; repeat-cadence regression found in follow-up 30**. This test uses owner-selected `AS0` (6 AP/day, 18 days/Season), `V0`, Q4 M/B, season-conditioned Weather RNG, and the current three canonical crop identities. It does not set prices, seasonal crop restrictions, regrowth, or runtime rules. The all-Sunny [Weather stress 28](FIRST-PLAYABLE-SEASONAL-WEATHER-RNG-PAPER-TEST-28.md) uses an imposed three-day burst fixture; follow-up [Seed/Sell test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) found that it is not the same as immediate replant under the 2-Care Turnip convention. Completed UI tests are not rerun.

Later Farm correction: [Farm action grammar and AP rerun 41](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) defines `Care` as a Watered growth resolution at Sleep, not a separate action. The 2/3/4 growth counts and one-output yield below remain working numeric fixtures; Water Trough/Harvest Bench and all Q4-assisted route conclusions are rejected historical premises.

Sources: [content registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md), [calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md), [Q4 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [chosen-seed delivery audit 03](COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md), [Weather stress 28](FIRST-PLAYABLE-SEASONAL-WEATHER-RNG-PAPER-TEST-28.md).

## 1. Fixed roles and counting convention

| Crop | Canonical role | Existing numerical fixture |
| --- | --- | --- |
| Turnip `CR-S` | Short, deterministic first output and renewal control | 2 successful Care resolutions |
| Lemon Balm `CR-H` | Medium `Crop · Herb` cross-tag, one `COL-1` Seed option | 3 successful Care resolutions |
| Runner Bean `CR-L` | Long commitment, other `COL-1` Seed option | 4 successful Care resolutions |

For this paper comparison, a Plant action costs 1 AP per crop. A successful Care resolution can occur on the planting day; on Sunny it requires Water, and on Rain the current fixture supplies it. After the required number of Care resolutions, the crop becomes Mature **after Sleep** and can be Harvested the next day for 1 AP per crop. One Harvest initially gives one Fresh item; produce does not turn back into Seed. These are counting assumptions for candidate comparison, not a newly approved farming contract. Water Trough and Harvest Bench retain their Q4 relief scopes.

## 2. Duration and yield arms

| Arm | Turnip / Lemon Balm / Runner Bean Care count | Output per Harvest | D4 chosen Seed first Harvest if cared daily | Paper reading |
| --- | --- | --- | --- | --- |
| `C234-Y1` | `2 / 3 / 4` | `1 / 1 / 1` | Lemon Balm D7; Runner Bean D8 | Preserves Short/Medium/Long separation and the existing chosen-output D7/D8 signal. |
| `C235-Y1` | `2 / 3 / 5` | `1 / 1 / 1` | Lemon Balm D7; Runner Bean D9 | Adds one Long Care and one day's delay with no currently established reward; moves the chosen-output signal and later Journal response. |
| `C234-YL2` | `2 / 3 / 4` | `1 / 1 / 2` | Lemon Balm D7; Runner Bean D8 | Same calendar, but one Runner Bean harvest produces two items; tests whether quantity, rather than later price, should pay for Long commitment. |

`C234-Y1` is the **recommended next paper baseline**, not an owner lock. The D4 Seed choice is a fixture from the earlier `COL-1` route: D3 records the first three families, then the chosen Seed is planted D4. With daily Care, Lemon Balm resolves D4–D6 and is harvested D7; Runner Bean resolves D4–D7 and is harvested D8. The two-crop Turnip control planted D1 resolves D1–D2 and reaches first Harvest D3. Rain may save Water AP, but does not add extra Care progress or secretly speed maturity under these arms.

**Repeat-cadence correction:** under this same counting convention, Turnip replanted and cared on D3 receives its second Care on D4 and reaches the next Harvest on **D5**. The historical D3/D6/D9 burst trace is a separate imposed calendar fixture; it is not derived from `C234` with immediate replant. The D3 and D7/D8 *first-output* claims above remain valid; the targeted all-Sunny Q4 repeat-cycle regression in [test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) gives M/E/B D8/D12/D18 for one explicit farm allocation.

The historic `DL-6` delivery comparator responds six Sleeps after first chosen output: D7/D8 output implies D13/D14 response under `C234` and D7/D9 implies D13/D15 under `C235`. Both fit S18, but the D7/D8 signal used by the existing collection timing evidence is specifically the `C234` fixture; a D9 Runner Bean output needs a targeted downstream regression before promotion.

## 3. AP and output separation

Without Rain or relief, one crop costs `Plant 1 + Care N + Harvest 1 = N+2 AP` through its first Fresh output. Thus `C234-Y1` costs 4/5/6 crop-specific AP for Turnip/Lemon Balm/Runner Bean. Shared Water Trough actions can lower the marginal Care AP when crops are batched; Rain can remove those Care AP on a given day. Neither changes Plant or Harvest cost.

The `C234-YL2` arm uses the **same six AP through Runner Bean's first harvest** but gives two items from that single harvest. With unlimited storage and 0 AP Shipping Bin commitment, the extra item would increase Sell/Keep/Gift supply without another farming action. No approved Seed/sell price or target demand yet justifies that quantity advantage. It should remain an economy comparator, not be promoted to balance Y1 versus YL2 by intuition. In `C234-Y1`, the Long crop's eventual value can still differ through Seed/sell price and compatibility, which are the next workstream.

For any two-Turnip immediate-replant burst under A6, the Sunny load is `Care 2 + Harvest 2 + Plant 2 = 6 AP`; Rain removes the two Care AP. The **cost shape** remains, but the burst dates become D3/D5/D7 rather than the D3/D6/D9 fixture. Therefore the exact Weather Q4 route dates in test 28 are not preserved by `C234-Y1` with immediate replant. Changing yield from one to two items would not change a given burst's AP cost, but it would change item throughput and the economics of every repeat cycle.

## 4. Season-boundary sensitivity

The registry does not say an immature crop dies at a Season boundary. To keep that question explicit, compare two **boundary policies**, neither owner-selected:

| Boundary arm | Plant near S18 end | Consequence |
| --- | --- | --- |
| `Carry` | Crop and accumulated Care persist into the next Season | Long commitment has a delayed output; the incoming Season's Weather RNG can save later Care AP. |
| `Wither` | Immature crop is lost at the boundary | The same valid Plant action can consume Seed and AP without output; the player needs a clearly visible cutoff before committing. |

For `C234`, the last planting days that can produce a Harvest **by S18 D18** under uninterrupted daily Care are Turnip D16, Lemon Balm D15, and Runner Bean D14. Planting one day later makes the earliest harvest next Season D1. Under `Carry`, this is a tail commitment. Under `Wither`, it is a loss despite uninterrupted Care. No boundary policy is chosen here; the D1–D14 core and first-output comparisons do not depend on that choice.

## 5. Verdict and next gate

1. `[PAPER RECOMMENDATION]` Carry `C234-Y1` as the **working first-output fixture** for the Seed/sell price interaction test: Turnip 2, Lemon Balm 3, Runner Bean 4 successful Care resolutions, one Fresh item per Harvest, single-harvest, no regrow. This preserves the D3 and D7/D8 first-output signals and a six-AP Sunny Turnip burst. It does **not** preserve the old three-day repeat cadence without an additional rule or player scheduling choice.
2. `[NOT SELECTED]` `C235-Y1` remains a longer-timing comparator; `C234-YL2` remains a quantity/economy comparator. Neither is an approved improvement or failure. Any promotion needs a targeted Journal timing or price/target-value regression, respectively.
3. `[OPEN]` Season-boundary crop survival, exact Seed/sell prices, crop season eligibility, and final yield are not owner-locked. Do not infer real-world Turnip/Bean/Balm agronomy from the chosen names.
4. `[NEXT EVIDENCE]` Test Seed renewal and Fresh Sell/Keep/Gift choices using `C234-Y1` versus the `YL2` quantity comparator, with Q4 no-fee Projects and no active Processor premium/order. Revisit Weather probabilities only after crop Care load and prices are measured together.

No runtime, art, staging, commit, or push is authorized by this paper result.

Follow-up [Seed/Sell price interaction paper test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) compares one-output crop prices with the two-output Runner Bean arm and corrects same-day liquidity for end-of-day Shipping Bin payout.
