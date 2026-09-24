# First-playable Weather generation paper test 27

Ngày: 2026-09-23.

Trạng thái: **historical paper evidence; owner later selected season-conditioned RNG**. This is a bounded mathematical and route-timing test under owner-selected `AS0` (6 AP/day, 18 days/Season), `V0`, and `Q4`. It compares randomization shapes without choosing a Rain rate, runtime algorithm, or new Weather type. The owner subsequently selected RNG conditioned on Season, with neither fixed Rain dates nor a fixed seasonal Rain count; this test's equal-mean arms remain diagnostic only. The TV/Sleep and three-field rail corrections in [Weather narrowing 26](FIRST-PLAYABLE-WEATHER-CADENCE-PHASE-NARROWING-26.md) are fixed inputs. No completed UI test is rerun.

Crop-cadence guard: the D3/D6/D9/D12/D15/D18 cohort in tables below is the historical imposed three-day-burst fixture. Working two-Care Turnip with immediate replant/Care repeats D3/D5/D7; [test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md) is the coherent all-Sunny route. This file's burst-phase probabilities describe its stated fixture, not the corrected Turnip calendar.

Sources: [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md), [AP/Season narrowing 03](AP-SEASON-BRACKET-NARROWING-03.md), [Q4 A6/S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [AS0 lock 25](FIRST-PLAYABLE-AP-SEASON-LOCK-AUDIT-25.md), [Weather narrowing 26](FIRST-PLAYABLE-WEATHER-CADENCE-PHASE-NARROWING-26.md).

## 1. Contract and question

- Global rail: Season, Today Weather, AP. No Tomorrow field, target agenda, or recommended action.
- TV is a Farmhouse sub-card. Playing it on D costs 0 AP and reports D+1 Weather. Sleep uses that result. If TV was not played, Sleep determines D+1 Weather without opening TV. TV and Sleep are not two Weather chances for one day.
- Blue Eel requires Rain. A miss waits for a later Rain/cycle; no single Rain gates Field Notes or other core progression.
- `WD = D3/6/9/12/15/18` and `WS = D5/10/15` remain explicit **phase fixtures**, not recurring rules or RNG distributions.
- Weather generation must be examined against non-bankable A6 crop peaks, Q4 relief timing, Blue Eel recovery, and cross-Season gaps. Rain percentage alone is insufficient. Under the owner-selected direction, the outcome for D+1 is generated using **D+1's Season**, including at a Season boundary.

Question: does generated Weather ever block core progression, and which delays matter to the player? A specific Rain count, D5 Project completion, or short Blue Eel wait is not a pass criterion. No dry-gap cap is presumed.

## 2. Equal-mean diagnostic arms, not product candidates

All arms below use only Rain versus the existing non-Rain/Sunny fixture. The common **four Rain per 18-day mean** is a mathematical control between the old three-Rain WS and six-Rain WD traces, not a proposed Rain target.

| Diagnostic arm | Construction for one 18-day Season | What it isolates |
| --- | --- | --- |
| `R4` — daily draw | Independent Rain chance `2/9` each day, giving an expected four Rain days; a seed may make a run reproducible | Variable count and unconstrained gaps |
| `B4` — season shuffle | Choose exactly four of 18 days uniformly for Rain | Fixed count but unconstrained placement |
| `B4-I5` — intra-Season filter | Uniformly choose among four-Rain sequences with no run of six dry days **inside** S18 | Whether an inside-Season dry-gap filter is enough |

The arms are analytical controls. `2/9`, four Rain, and five dry days are **not** owner-approved balance values. No visible Weather deck, draw animation, or additional card is introduced by the paper model.

## 3. Exact sequence counts and phase metrics

`R4` metrics sum the Bernoulli weight of all `2^18` Rain/non-Rain sequences. `B4` has `C(18,4) = 3,060` equally weighted sequences. Filtering `B4` by no six-day dry run within the Season leaves 735 sequences for `B4-I5`. Values below are exact enumerations rounded to one decimal point; they are model probabilities, not player evidence.

| Metric within S18 | `R4` | `B4` | `B4-I5` | Meaning |
| --- | ---: | ---: | ---: | --- |
| Zero Rain days | 1.1% | 0% | 0% | Fixed count removes a whole-Season Blue Eel absence; it does not set phase. |
| First five days dry | 28.5% | 23.4% | 19.0% | First Blue Eel chance can still arrive after D5. |
| At least one run of six dry days | 71.0% | 76.0% | 0% | Same mean or fixed count does not bound recovery gaps. |
| No Rain on early burst D3/D6/D9/D12 | 36.6% | 32.7% | 30.5% | Even a dry-gap filter does not promise burst-day Rain. |
| No Rain on all six cohort days D3/D6/D9/D12/D15/D18 | 22.1% | 16.2% | 21.1% | Frequency does not determine Rain-to-burst phase. |
| No Rain on D3–D5 | 47.1% | 44.6% | 35.6% | Under the Q4 legible-earliest policy, Water Trough cannot complete D5 in this case. |

The last row follows the existing Q4 action bundle: after the D3 preview, Water Trough needs `Wood 1 + Descend 3 + Extract Ore 1 + Work 2 = 7 AP`. If D3, D4, and D5 are all sunny, the route has at most `0 + 2 + 4 = 6` flexible AP after the D3 crop burst, D4 Care/Person package, and D5 Care. The old WD and WS fixtures both place a Rain within D3–D5, so they both reached Water Trough on D5. That result cannot be generalized to every generated sequence. This is a **necessary timing failure for D5**, not proof that the Project or Season fails; progress persists and later days recover.

**Scale of the effect in this fixture:** on an active crop-care day, Rain replaces at most two Care AP. The D3 sunny crop burst therefore uses all six AP, while a D3 Rain burst leaves two AP for another action. If three Sunny days are changed to Rain with every other day held fixed, those three changes release **at most six AP**, and only if each falls on a day with two Care AP due. A Rain day without that Care load releases less or none. This bound does not isolate the historical WD/WS traces, which also move Rain between days. AP cannot be carried forward, so the timing of relief can move a Project completion by a day, but these calculations do not show a large change in total progression or establish an ideal Rain count. The exact peak is also tied to the current paper crop-duration and schedule fixtures.

## 4. Same Rain count, different phase: two Q4 traces

These are deliberately selected four-Rain **test sequences** with no more than four consecutive dry days within S18. They have the same count and satisfy the D3–D5 Water Trough window, so the remaining difference tests phase rather than Rain quantity.

| Trace | Rain days | D3/D4/D5 flexible Project AP | Water Trough / Expansion | D10/D11/D12 Bench-route AP | Harvest Bench |
| --- | --- | --- | --- | --- | --- |
| `P-BURST` | D3, D8, D12, D17 | `2 / 2 / 4` | D5 / D7 | `2 / 4 / 2` | D12, after the D12 Rain burst |
| `P-WORK` | D4, D8, D11, D16 | `0 / 4 / 4` | D5 / D7 | `2 / 6 / 0` | D11, before the D12 sunny peak |

The Bench route needs eight AP after its D10 preview: three Descend, one Stone Search, one Extract, one Wood, and two Work. Both traces use the same Q4 legible-earliest scheduler, D4/D10 Person package, source rules, and no pre-preview stockpile. `P-BURST` uses Rain to cushion D3 and D12 bursts. `P-WORK` uses Rain for D4 source progress and D11 construction, then Bench creates one AP of relief on the D12 sunny peak. This reproduces the useful WD/WS identity split **with equal Rain count**, so the phase effect cannot be dismissed as only dense-versus-sparse frequency.

Blue Eel's first and next opportunities also differ: D3 → D8 under `P-BURST`, D4 → D8 under `P-WORK`. A miss of the final D17/D16 Rain still needs a cross-Season recovery rule. The full sequences above are shown only to the paper tester; the player sees D+1 Weather by proactively playing TV, or sees the day's result after Sleep if TV was skipped.

## 5. Season boundary test

If independent `B4` shuffles are restarted each Season, the last Rain can be as early as D4 in one Season and the first Rain as late as D15 in the next: **28 dry days between Rain days**. Across independent adjacent Seasons, a boundary-spanning run of at least six dry days occurs in 45.4% of `B4` sequence pairs.

Filtering each Season independently to `B4-I5` does **not** fix this. Its trailing and leading dry runs can each be five days, producing ten dry days across the boundary; the probability of a boundary-spanning run of at least six dry days is 52.2% across independent accepted pairs. The surprising increase comes from conditioning the within-Season arrangements; it is a warning that the filter must carry prior Weather state if a finite recovery gap becomes a requirement. It is not evidence that ten days is inherently unacceptable to the owner.

**Informed-owner recovery tableau:** suppose the player misses Blue Eel on S1 D13. An otherwise valid `B4-I5` sequence can have no Rain on S1 D14–D18 and S2 D1–D5, with the next Rain on S2 D6. The player can continue core progression and use 0 AP TV to check each following day, but the next Blue Eel opportunity comes after **ten dry days**. The owner should judge whether that still reads as ordinary recoverable delay or whether generation needs a cross-Season gap guard. Record the judgment as informed-owner evidence, not fresh-player evidence; no ceiling is silently inferred from this paper example.

## 6. TV information timing under a generated sequence

| D action path | Same D+1 outcome | Planning consequence |
| --- | --- | --- |
| Play TV before allocating remaining AP | TV determines/reveals the outcome for 0 AP; Sleep uses it | A revealed Rain can justify moving Water or another flexible action before Sleep. |
| Skip TV | Sleep determines the outcome without opening TV | D actions were chosen without D+1 information; the result cannot retroactively create forecast value. |

This rule applies to every generation arm. A model that gives TV a reroll, draws again at Sleep after TV, or fills a global Tomorrow field fails the owner-corrected contract regardless of its Rain statistics.

## 7. Verdict and next evidence gate

1. `[PAPER RESULT]` Rain **count and phase are separate**. Equal-count `P-BURST`/`P-WORK` traces preserve Q4 M/E timing but shift Bench relief from after D12 to before D12.
2. `[PAPER RESULT]` Neither an equal expected count (`R4`) nor an exact seasonal count (`B4`) bounds dry spells. A per-Season dry-gap filter (`B4-I5`) still permits a longer cross-boundary gap if Season draws reset independently.
3. `[PAPER RESULT]` The old WD/WS D5 Water Trough completion is conditional on a Rain in D3–D5. Generated sequences lacking that Rain require a targeted Q4 timing/recovery trace; they are not automatic failures.
4. `[PAPER RESULT]` TV timing remains a player decision even at 0 AP: proactive TV creates D planning information; Sleep-only Weather determination does not.
5. `[OWNER SELECTED AFTER THIS TEST]` Weather uses season-conditioned RNG. No fixed Rain dates or exact seasonal Rain quota are selected. Exact seasonal probabilities, day-to-day dependence, seed handling, starting-day setup, and any dry-gap ceiling remain open. The math alone cannot decide what delay feels fair for optional Blue Eel or how often burst relief should occur. A long dry spell is not a design failure by itself. This is informed-owner/evidence territory, not fresh-player proof.

Next paper comparison should stress **season-conditioned RNG** with low or late Rain against the Q4 core route, including a Season boundary. The fixed-count shuffle above remains a historical comparison arm, not a required guarantee of four Rain days. Judge whether core play remains viable and whether optional Blue Eel waiting feels acceptable; add a cross-Season gap guard only if player evidence gives a reason. D5/D11/D12 dates are diagnostic outputs, not pass/fail milestones. Do not add content, a new Weather type, Processor, order system, or Gold sink to repair these metrics. No runtime, art, staging, commit, or push is authorized.

That targeted no-Rain route and boundary check are recorded in [seasonal Weather RNG paper test 28](FIRST-PLAYABLE-SEASONAL-WEATHER-RNG-PAPER-TEST-28.md). Its result supersedes the “next paper comparison” instruction above; the figures and diagnostic arms in this file remain historical evidence.
