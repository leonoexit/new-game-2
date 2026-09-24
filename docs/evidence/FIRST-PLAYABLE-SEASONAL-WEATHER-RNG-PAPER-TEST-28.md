# First-playable seasonal Weather RNG paper test 28

Ngày: 2026-09-23.

Trạng thái: **historical three-day-burst stress trace, superseded for immediate Turnip repeats**. The owner selected RNG conditioned on Season, with no fixed Rain dates or exact seasonal Rain count. This test checks the smallest useful rule and a dry extreme under `AS0` (6 AP/day, 18 days/Season), `V0`, and Q4. Its D3/D6/D9 crop burst schedule is an imposed fixture; follow-up [Seed/Sell test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) found that 2-Care Turnip with immediate replant/Care instead bursts D3/D5/D7 and supplies a targeted all-Sunny M/E/B D8/D12/D18 route. The exact dates in this file do not transfer to that coherent repeat model. No runtime or Weather UI rerun is implied.

Sources: [Weather narrowing 26](FIRST-PLAYABLE-WEATHER-CADENCE-PHASE-NARROWING-26.md), [generation diagnostics 27](FIRST-PLAYABLE-WEATHER-GENERATION-PAPER-TEST-27.md), [Q4 A6/S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md).

## 1. Minimal generation contract

| Status | Rule |
| --- | --- |
| `[OWNER SELECTED]` | Weather is RNG conditioned on the **Season of the day being generated**. No fixed Rain dates or exact Rain count per Season. |
| `[OWNER CLARIFIED]` | Playing the Farmhouse TV sub-card on D costs 0 AP and reports D+1 Weather. If TV was skipped, Sleep determines D+1 without opening TV. There is one outcome for D+1, never a TV/Sleep reroll. |
| `[PAPER INVARIANT]` | Choosing whether or when to inspect TV must not itself change the D+1 outcome. TV gives information, not control over rain. At D18 → next Season D1, use the **incoming Season** to generate that D+1 outcome. |
| `[SIMPLE CANDIDATE, NOT OWNER LOCK]` | One independent daily Rain check using the target Season's parameter `p[Season]`; otherwise the existing non-Rain/Sunny result. This is a minimal comparator, not an approved probability table, seed scheme, or implementation algorithm. |
| `[OPEN]` | Exact `p[Season]`, day-to-day dependence if desired, first-day initialization, any exceptional Weather dates, seed handling, and any dry-gap protection. None is required by the owner's RNG direction alone. |

The independent-check candidate permits zero Rain days in a Season and arbitrarily long dry runs. For `0 < p[Season] < 1`, a completely dry 18-day Season has probability `(1 - p[Season])^18`; this is a property of the candidate, not a chosen balance target. The historical four-Rain mean in test 27 is not imported as a quota or a recommended `p`.

## 2. No-Rain S18: Q4 Producer route

This is a deliberately extreme **fixture sequence**: every D1–D18 is Sunny. It is possible under the simple candidate for any Season with `p < 1`. Keep the Q4 legible-earliest policy: farm commitments first, Person P costs 2 AP on D4/D10, Project source/Work starts after native preview, at most three Descend per day, no AP bank, and Project contributions persist. The current crop fixture has a D3/D6/D9 two-crop burst, later D12 expanded burst, and Rain would resolve Care including newly planted crops. To avoid granting free same-day Care on Sunny, the expansion trace reserves one Water AP for the two new crops on the day they are planted.

| Day/window | Sunny commitment and route capacity | Result |
| --- | --- | --- |
| D3 | Care 2 + Harvest 2 + Plant 2 = 6 AP | M preview; no route AP on first peak. |
| D4 | Care 2 + Person P 2; Descend 2 | M route 2/7; Depth 2. |
| D5 | Care 2; Descend 1 + Extract Ore 1 + Wood 1 + Work 1 | M route 6/7; Depth 3. |
| D6 | Care 2 + Harvest 2 + Plant 2 = 6 AP | Route waits; progress persists. |
| D7 | Care 2 + Work 1 | Water Trough M completes D7; later Care uses its 2 crops/AP capacity. |
| D8 | Care of two existing crops 1; four setup actions Clear/Till for two new plots | Expansion 4/6. One spare AP cannot both Plant and Care a new crop. |
| D9 | Care 1 + Harvest 2 + Plant 2 = 5 AP | Expansion waits; one spare AP cannot both Plant and Care a new crop. |
| D10 | Care of existing crops 1 + Person P 2 + Plant two new crops 2 + Care of the new pair 1 = 6 AP | Expansion E completes D10; four active crops. |
| D12 | Care of four crops 2 + Harvest 2 + Plant 2 = 6 AP | Expanded peak is experienced before Bench preview. |
| D13 | Care of four crops 2; four Bench-route AP | B route: Descend 3 + Search Stone 1. |
| D14 | Care of four crops 2; four Bench-route AP | Extract Stone 1 + Wood 1 + Work 2; Harvest Bench B completes D14. |

The full M route is `Wood 1 + Descend 3 + Extract Ore 1 + Work 2 = 7 AP`. The B route after D13 preview is `Descend 3 + Search Stone 1 + Extract Stone 1 + Wood 1 + Work 2 = 8 AP`. The table gives a feasible path, not a unique optimal player schedule. Optional actions or different crop choices can move the dates.

`[PAPER RESULT, FIXTURE-LIMITED]` Even with **zero Rain across S18**, M/E/B finish D7/D10/D14 under this stated **three-day burst fixture**, inside the selected 18-day frame. Rain creates AP relief and can move milestones earlier. These dates do not transfer to immediate replant under `C234`; that targeted recurrence regression is required before claiming the all-Sunny Producer route passes on exact dates. The Projects themselves have deterministic materials and persistent progress, so no Rain outcome is a direct prerequisite.

## 3. Blue Eel and Season boundary

- With no Rain in S1, Blue Eel has no S1 eligibility window. It remains optional; Field Notes can use the common Silver Minnow route and does not stall. The phrase “recover on later Rain/cycle” describes the **next eligible opportunity**, not a guaranteed maximum wait under unbounded RNG.
- On S1 D18, proactive TV for S2 D1 must use S2's Weather parameters and show that single result. If TV was skipped, Sleep determines S2 D1 under S2 parameters without opening TV. Either path reaches the same Weather outcome for that save/day; inspecting TV must not manipulate the result.
- A later Rain in S2 restores Blue Eel eligibility. A further dry S2 is also possible under the simple candidate. No cross-Season dry-gap cap is inferred from this paper trace.

## 4. Verdict and next evidence

1. `[PAPER PASS WITH FIXTURE LIMIT]` The stated no-Rain, three-day-burst stress does not lock Q4 Producer core progression or Field Notes. It does not establish M/E/B dates under a two-day immediate Turnip repeat. The old D5/D11/D12 milestone dates are fixture outputs, not pass criteria.
2. `[PAPER RISK]` A Rain-only optional catch can be delayed for an unbounded number of days under an independent daily RNG model. Whether that feels acceptable is player-experience evidence; mathematical possibility alone does not authorize a quota or pity rule.
3. `[PROPOSED SIMPLE MODEL]` Keep one target-Season daily check and no fixed Rain quota or forced schedule while numerical crop balance is still fixture-level. Preserve the one-outcome TV/Sleep contract. Do not silently promote the example `R4/B4` probabilities or shuffle rules from test 27.
4. `[NEXT DEPENDENCY]` Move to crop duration/yield against A6/S18 and this dry-route regression. Revisit seasonal `p` only after crop Care load and the Rain relief value are better grounded. Exact seasonal probabilities, seed implementation, first-day setup, and any optional Blue Eel wait guard remain open.

No runtime, art, staging, commit, or push is authorized by this paper result.

Follow-up [crop duration/yield paper test 29](FIRST-PLAYABLE-CROP-DURATION-YIELD-PAPER-TEST-29.md) checks the 2/3/4 Care and one-output first-output fixture. [Seed/Sell test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) identifies the repeat-cadence contradiction and provides a separate coherent all-Sunny Q4 route; the old D7/D10/D14 dates remain historical.
