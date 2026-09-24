# First-playable AP/Season lock audit 25

Ngày: 2026-09-23.

Trạng thái: **closed — product owner selected `AS0 — fix A6/S18` on 2026-09-23**. Owner-selected V0 fixes the content set that balance must serve. Existing paper evidence already narrows the day/Season frame to A6/S18; this audit decides whether to treat that frame as fixed for the first-playable balance pass or keep it provisional pending fresh-player evidence. It does not rerun any completed paper test or authorize runtime implementation.

Later scope correction: [package v1 §6.5](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) removes all first-playable Projects. `A6/S18` remains the owner's paper test frame, but this audit's PJ-B relief and Q4 completion rationale is historical. Recheck Farm AP against the source-grounded Care/Harvest rules before claiming the frame is balanced.

Farm AP follow-up: [rerun 41](../current/FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) checks the new no-Project rule: two Turnips can renew for 6 AP on a Sunny day, while full immediate replant with two other Growing crops costs 8 AP. This resolves the affected Farm AP arithmetic; Seed liquidity, repeated-action feel and Nell availability are separate checks.

Nguồn:

- [AP / Season bracket narrowing 03](AP-SEASON-BRACKET-NARROWING-03.md)
- [Project quantity/Work A6–S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md)
- [Year 1 content-volume scope audit 24](YEAR-1-CONTENT-VOLUME-SCOPE-AUDIT-24.md)

## 1. Evidence already available

- A5 is the overload bound: the six-AP pre-relief crop peak cannot fit and creates compulsory spill.
- A7 is the surplus guard: the same peak leaves one AP and the minimum fixture loses much of its opportunity pressure.
- A6 exactly fits the six-AP pre-relief peak, then exposes one AP of relief after PJ-B.
- S12 removes the D14–D18 recovery sequence and pushes both DL-6/DL-8 delivery sensitivities across the boundary.
- S18 is the shortest tested Season containing the full recovery band with margin.
- Q4 M/B and the current source contracts already passed exact A6/S18 WD/WS paper traces.
- A5/S12, A5/S18 and A7/S18 roles remain useful regression cells.

No new contract requires a rerun before this scope decision.

## 2. `AS0 — fix A6/S18 for first-playable balance`

Use `6 AP/day` and `18 days/Season` as fixed inputs for the remaining first-playable paper balance work.

Consequences:

- Seed/sell prices, crop durations/yields, Weather cadence, PJ-X quantities and Heart cadence are narrowed against one stable frame;
- A5/S12 remains overload/boundary regression and A7/S18 remains the surplus guard;
- WD/WS remain separate Weather phase arms until Weather itself is selected;
- a later fresh-player or regression failure may reopen the frame, but ordinary tuning does not.

Benefits:

- converts the strongest existing threshold evidence into a usable balance contract;
- prevents every later number from carrying an avoidable AP/Season matrix;
- keeps meaningful zero-slack choice before relief and a visible relief payoff afterward.

Tradeoff:

- still lacks fresh-player evidence about felt day pressure and Season pace;
- first-playable paper lock may need revision after real play;
- 18 days is selected for recovery coverage, not emotional pacing evidence.

## 3. `AS1 — keep A6/S18 provisional`

Continue labeling A6/S18 only as the next paper baseline until fresh-player evidence exists.

Consequences:

- later numerical work must either retain broader AP/Season sensitivity or explicitly accept that its results are conditional;
- no first-playable AP/day or Season length is locked;
- fresh-player recruitment becomes the blocking evidence for promotion.

Benefits:

- avoids presenting paper thresholds as player-experience proof;
- preserves maximum flexibility if day pressure or Season pace feels wrong.

Tradeoff:

- exact economy/Weather/crop tuning remains attached to a moving frame;
- fresh-player evidence is currently unavailable, so the balance-lock sequence stalls;
- repeats uncertainty already bounded by A5/A7 and S12/S18 evidence.

## 4. Owner-choice gate

| Choose | Meaning | Accepted limitation |
| --- | --- | --- |
| `AS0 — fix A6/S18` | Lock 6 AP/day and 18 days/Season for the first-playable paper balance frame | May reopen after actual fresh-player/regression evidence |
| `AS1 — keep provisional` | Do not promote A6/S18 until fresh-player pace/pressure evidence exists | Numerical lock remains conditional or pauses |

`AS0` is recommended. It does not claim final shipped balance or fresh-player validation; it creates a stable first-playable paper contract from the strongest available evidence while preserving explicit regression bounds.

## 5. Owner decision

`[OWNER SELECTED FIRST-PLAYABLE BALANCE FRAME]` Carry `AS0 — 6 AP/day, 18 days/Season` into all remaining first-playable paper balance work.

Consequences:

- A6/S18 is fixed rather than a moving sensitivity arm for Seed/sell prices, crop duration/yield, Weather cadence, PJ-X quantities and Heart cadence;
- A5/S12 remains the overload/boundary stress, A5/S18 remains the low-AP recovery comparator, and A7/S18 remains the surplus guard;
- WD/WS remain separate Weather phase arms until Weather cadence is selected;
- the frame may reopen only for a real regression or later player evidence, not ordinary tuning convenience;
- the product owner will also serve as the available tester; all such results must be labeled **informed-owner evidence**, never fresh-player evidence;
- the next numerical workstream is first-playable Weather cadence/phase, followed by crop duration/yield and Seed/sell price interaction.

## 6. Guardrails

- Do not relabel informed-owner evidence as fresh-player evidence.
- Do not remove A5/S12 or A7 regression roles after AS0.
- Do not collapse WD/WS into an average Weather rate.
- Do not infer exact crop, price, Weather or Heart values from A6/S18 alone.
- No runtime, art, staging, commit or push is authorized.
