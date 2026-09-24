# First-playable Wild Herb cadence and Nell Gift paper test 38

Ngày: 2026-09-23.

Trạng thái: **phase comparison, no generator or Person schedule selected**. This follows [Grove contract 36](FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) and [V0 consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md). It uses owner-selected `AS0` (6 AP/day, S18), Q4 M/B, and the working two-Care Turnip immediate-replant route of [Seed/Sell test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md). It neither reruns a completed paper test nor claims a runtime or fresh-player result. The existing tester is the informed owner.

Ontology follow-up: [audit 40](../current/FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) leaves `Grove` unclassified as an Area/place and pauses `G-V`'s player-facing presentation recommendation. The phase calculations here use only an **abstract Wild Herb opportunity** and conditional Collect/Gift AP; they do not validate a Grove location, card layout or final source name.

## 1. Comparison contract

- `G-V` remains a **conditional interaction comparator**, not an owner decision or accepted presentation baseline: a present Wild Herb opportunity is exact and visible at day setup; inspect 0 AP, Collect 1 AP, uncollected opportunity expires at Sleep. A held opportunity still needs Collect 1 AP next day. No hidden Search, second output or Grove Area is assumed.
- Nell's D4/D10/D16 appearances, Wild Herb Gift preference, Gift 1 AP, `+1 Heart`, Hold `−1 Heart`, and one-Sleep hold are **fixtures**. Person appearance is announced at day start. Her ability cannot hold the first Herb before she is acquired. `S∞` allows a Collected Herb to wait in inventory; it does not preserve an uncollected opportunity.
- The all-Sunny route keeps two original Turnips on D3/D5/D7/D9/D11/D13/D15/D17, expands D12, Harvests two expansion plots D14, and leaves those plots open. M D8, Expansion D12 and B D18 are possible in its original allocation, not deadlines. The separate `Person P` stress load costs 2 AP on D4/D10/D16; it is **not** Nell's Gift. Where noted, a flexible route/setup AP moves to an available later slot.
- No phase table establishes Season eligibility, first-spawn guarantee, period, independent probability, or maximum wait. A later S18 with no Herb remains a valid boundary case.

## 2. AP windows that govern access

| Day(s) | Fixed farm + separate Person P AP | Remaining before optional route/setup | Implication for visible Herb |
| --- | ---: | ---: | --- |
| D3/D5/D7 | 6 | 0 | First opportunity expires if Nell is not already owned; cannot use C. |
| D4 | 2 + 2 = 4 | 2 | Collect + first Gift can both fit by moving D4's two M-route AP to D8. |
| D8 | 2 | 4 | The original M-route uses 1; Collect 1 fits with M D8. |
| D9/D11 | 5 | 1 | Collect 1 can use the spare slot; D9 setup can move. |
| D10 | 1 + 2 = 3 | 3 | Collect + first Gift costs 2; two setup actions can move from D10 to D11/D12, leaving D12 Expansion possible in this branch. |
| D12 | 4 | 2 | Collect 1 fits without moving the expansion actions. |
| D13 | 6 | 0 | A **previously acquired** Nell can hold this opportunity to D14; without her, preserving the full farm allocation loses the Herb. |
| D14 | 3 | 3 | Collect 1 fits, including a held D13 opportunity. |
| D15/D17 | 5 | 1 | Collect can replace that day's planned B-route AP. The D15–D18 B window has 10 flexible AP against B's 8-AP requirement, so this need not delay B D18; a Hold is possible but not necessary for this objective. |
| D16 | 1 + 2 = 3 | 3 | Collect + first Gift can fit locally, or Collect a previously held D15 card; route AP can move within the 10-AP B window. |
| D18 | 1 | 5 | Collect fits alongside the final three B-route AP in the original allocation. A first Gift still needs a later Nell appearance. |

The D10 branch has D9 setup 1, D10 setup 1 after Collect + Gift, D11 setup 1 and D12 setup 1 before Plant/Care: four setup actions total. D12 then uses its full six AP (`Care original 1 + setup 1 + Plant 2 + Care expansion 1 = 5`, leaving one AP); this is sufficient and does not require payout from a same-day sale. The table isolates AP access; actual Seed stock, wallet, item value and Weather remain fixture-dependent.

## 3. Five-day clock as a phase comparator

Assume for comparison only one visible Herb every five days, with all five possible phases. For D1/D2 opportunities, the result below conservatively uses the later listed opportunity because the opening route's exact free AP is not established here. A player might acquire earlier.

| Phase and S18 opportunity days | First dependable Collect in the declared route | First Nell Gift using D4/D10/D16 fixture | Strict Hold target after acquisition while preserving the declared farm allocation |
| --- | --- | --- | --- |
| `P1`: D1/6/11/16 | D6 by moving 1 M-route AP to D8 | D10 | 0; D11 and D16 can be Collected by allocating a free/flexible AP. |
| `P2`: D2/7/12/17 | D12 (D7 is a full farm day) | D16 | 0; D17 Collect can replace one B-route AP without losing B D18. |
| `P3`: D3/8/13/18 | D8 (D3 is full) | D10 | **1**, D13 Hold → D14 Collect; the D13 opportunity is a second Herb after the first paid for Nell. |
| `P4`: D4/9/14 | D4 Collect + Gift by moving M-route AP to D8 | D4 | 0; D9/D14 have an available or movable AP. |
| `P5`: D5/10/15 | D10 Collect + Gift by moving setup AP to D11/D12 | D10 | 0; D15 Collect can use that day's flexible B-route AP. |

Thus a five-day **fixture** gives a first Gift no later than D16 in each listed phase under this route, but only one of five phases supplies a clear Hold decision before S18. The number of announcements is not the number of valuable Holds. Even `P3` presents a tradeoff, not free value: the first Herb item and Gift AP bought access to Nell; the second card still needs a next-day Collect AP. The exact AP reallocation and Seed pre-funding must remain visible if this arm is used again.

## 4. Sparse and empty-source comparators

| S18 Herb opportunity input | Collect / first Nell Gift | Hold target | Reading |
| --- | --- | --- | --- |
| Only D3 or only D13 | No Collect while preserving the declared farm allocation; Nell is unowned at that opportunity. No Gift in S18. | 0 | A source can technically appear yet fail to provide first-Gift access. D13 cannot be rescued by Nell C before acquisition. |
| Only D8 | Collect D8, Gift D10. | 0 | Acquisition works, but no later card exists for C. |
| Only D10 | Collect + Gift D10 with the setup reallocation above. | 0 | Same-day acquisition is feasible under the fixture, not guaranteed by a schedule. |
| Only D17 | Collect D17 by shifting a B-route AP; first fixture appearance after collection is beyond D18. | 0 in S18 | Inventory can carry forward under `S∞`, but no S18 Gift follows. |
| No Herb D1–D18 | No Collect and no Gift for a player starting without stored Herb. | 0 | This is compatible with an unbounded RNG source; core Farm/Mine/River remain playable. |

An independent daily occurrence model with per-day chance `p` would assign `(1−p)^18` to no Herb in S18 **only if** all 18 days are eligible and independent. Neither assumption nor `p` is selected. A deterministic five-day clock avoids the empty case but can still put a first opportunity on a full farm day; it also creates a conspicuous rhythm and only one strong Hold phase in this route. A sparse/no-quota generator preserves surprise but offers no finite first-Gift reliability. A bounded recovery rule could reduce that tail, but would be a new product rule needing its own purpose and Season-boundary definition; it is not inferred from this table.

## 5. Paper verdict and gate

`[PAPER RESULT]` Source **presence**, collectible AP, and Nell's later appearance are three separate conditions. The D4/D10/D16 schedule fixture does not guarantee acquisition. Under a regular five-day comparator every phase can Gift by D16 in this one all-Sunny allocation, while sparse or empty S18 inputs can leave Nell unowned. The only strict in-Season Hold example in the five-phase table is `P3` D13→D14. A player may also choose to change farming priorities instead of using C; no dominance claim is made.

`[OPEN PRODUCT CHOICE]` Define Wild Herb's eligibility/generator and what recovery reliability Nell should have, then test Person appearances against that source. Do not increase Heart gain/cap to compensate for missing Gift items. Do not treat a held opportunity as an acquired item or promote the five-day clock to a final spawn rule.
