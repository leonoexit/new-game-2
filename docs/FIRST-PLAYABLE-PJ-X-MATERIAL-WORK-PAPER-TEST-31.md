# First-playable PJ-X material/Work paper test 31

Ngày: 2026-09-23.

Trạng thái: **conditional cost diagnostic; no PJ-X quantity decision is ready**. This test compares possible Grove Footbridge recipes under the owner-selected `V0`, `AS0` (6 AP/day, 18 days/Season), `Q4` for M/B, and `X0` (material + Work, no Gold fee). It neither sets a final recipe nor adds Upper-Grove content, runtime, art, or a same-Season completion requirement. The author is constructing paper evidence, not reporting an informed-owner playtest or fresh-player evidence.

Provenance clarification: Grove Footbridge, Harvest Bench and Upper Grove are **this project's paper-design concepts**, not named elements imported from the Stardew Valley video game or board game. The quantity test assumes these existing paper slots; it does not establish that their fiction or reward will be familiar to players.

Readiness correction after owner challenge: the optional Upper-Grove context has no specified playable content, reward, or player-facing reason to build its bridge. `B3` selected a three-Project *structural slot*, not proof that this third Project has a concrete purpose. Therefore the calculations below establish only conditional AP/source pressure **if** a justified X reward is defined. They cannot support choosing `X-W` or any other quantity now. Harvest Bench has a separately observed farm AP burst, although its exact Harvest-versus-Plant relief verb is still open.

Final owner correction 2026-09-24: [package v1 §6.5](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) rejects Water Trough, Harvest Bench and Grove Footbridge as designs, including Upper Grove. The conditional language and quantities below describe a discarded premise only; there is no X reward or recipe awaiting definition.

Sources: [Year 1 package](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md), [dependency graph](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md), [content registry](CONTENT-MINIMUM-REGISTRY-01.md), [Q4 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [X0 decision 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md), and [corrected crop/economy regression 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md).

## 1. Fixed contract and counting rules

- `[OWNER SELECTED]` M is 1 Wood + 1 Ore + 4 Progress (two 1-AP Work actions); B is 1 Wood + 1 Stone + 4 Progress (two Work); all three Projects have no Gold fee. X opens only an **optional Upper-Grove context/source route**. R0, the common Grove loop, Mine, Farm, River, Field Notes, and Person progress remain accessible without X.
- `[PAPER SOURCE CONTRACT]` One Direct Descent costs 1 AP and adds one Depth, never a material; the existing trace limits Descent to three per day. At CP6 or later, a one-time 1-AP Search reveals exact Exposed Stone. Each 1-AP Extract supplies one Stone without Depth. A spent source is ready after Sleep, so two Stone require two Extracts on separate days, not two Searches. Woodlot supplies Wood deterministically at 1 AP per item in these traces. Project contributions persist.
- `[WORKING FIXTURE]` For the farm overlap only, `C234-Y1` has two-Care Turnips with same-day Plant/Care and one Fresh output. Immediate replant yields D3/D5/D7/... Harvests. The all-Sunny allocation in test 30 has M D8, Expansion D12, first expanded Harvest D14, B preview D15, and B D18 after leaving the expansion plots unplanted. These are one possible allocation, not mandatory milestone dates. Its 4G opening wallet and Seed stock/sales are fixture prerequisites for the immediate replant; end-of-day Shipping Bin payout cannot buy same-day Seed.
- `[OPEN]` Exact X material/Work quantity, crop values, Seed prices/stock, Weather probabilities, and the exact Upper-Grove reward remain unselected. No Rain is required by the X source path; a Rain day may change available farm AP, not the recipe or Stone recovery rule.

## 2. Four quantity arms

`Work` adds 2 Progress per 1 AP. All arms retain the same source identities and optional reward. The old 8G permit is excluded by X0; its historical trace is not a current recipe.

| Arm | X recipe | Source-to-completion AP from Depth 0 | Distinct pressure |
| --- | --- | ---: | --- |
| `X-L` lean parity | 1 Wood + 1 Stone + 4 Progress = 2 Work | 11 | Same raw quantity and Work as B; the first Stone still asks which reward to fund. |
| `X-W` extra common material | 2 Wood + 1 Stone + 4 Progress = 2 Work | 12 | One extra deterministic Wood competes with B/M/Keep/Sell; no extra Stone wait. |
| `X-H` historical high Work | 2 Wood + 1 Stone + 6 Progress = 3 Work | 13 | One more Work than `X-W`, with no new source or allocation type. The former 8G fee is removed. |
| `X-S` extra Stone stress | 1 Wood + 2 Stone + 4 Progress = 2 Work | 12 | A second Extract after Sleep consumes another CP6 source turn before B can use that source. |

AP arithmetic is `6 Descent + 1 Search + Stone Extract count + Wood count + Work count`. This assumes no Stone already held, no Person ability discount, and no travel AP. `X-L` and `X-S` both add to 12-or-fewer AP, but `X-S` also has a one-Sleep source cadence constraint that the scalar sum hides. No arm assigns a Gold value to the optional context.

### Connector source-first trace

This trace isolates X from farming. It is an **existence proof** under six AP/day, not an exact early-X promise: X's native preview and material contribution must be available when the relevant source is known. On D1, Descend ×3 and collect the arm's Wood (4 or 5 AP). On D2, Descend ×3, Search Stone, Extract Stone, then Work ×1 (6 AP). On D3, finish the remaining Work; `X-S` also Extracts its second Stone after D2 Sleep. Every arm can therefore complete on D3. `X-W` uses one more AP than `X-L`; `X-H` adds a further Work AP; `X-S` forces a repeat source visit. Equal D3 completion dates do **not** make these costs equivalent, because unused D1/D3 AP and future Stone availability differ.

This route does not use CP3 Ore, a sale, a permit, Person support, or a fixed Rain day. A player may skip X and keep using Mine/Upper-Grove-adjacent common sources; X is not a prerequisite for CP6 Search or for B.

## 3. Competing allocation with Harvest Bench

The corrected all-Sunny farm route in test 30 leaves B-route capacity `D15=1, D16=3, D17=1, D18=5` AP after its farm and Person commitments: **10 AP total**. Starting from Depth 3 after M, B alone needs `Descend 3 + Search 1 + Extract 1 + Wood 1 + Work 2 = 8 AP`, so it can finish D18 with two AP spare. The first Exposed Stone can instead go to X; subsequent Extracts need Sleep between them.

| Priority after D15 B preview | Required AP for B + X from Depth 3, sharing the one-time Search | Consequence through D18 in this declared farm allocation |
| --- | ---: | --- |
| B only | 8 | B completes D18; X remains optional and unstarted. |
| B + `X-L` | 12 | Both cannot complete by D18: 2 AP short even before considering daily source order. |
| B + `X-W` | 13 | Both cannot complete by D18: 3 AP short. |
| B + `X-H` | 14 | Both cannot complete by D18: 4 AP short. |
| B + `X-S` | 13 | Both cannot complete by D18: 3 AP short; three total Stone Extracts also require three ready-source days. |

The shared sum is `3 Descent + 1 Search + (1 + X Stone count) Extract + (1 + X Wood count) Wood + (2 + X Work count) Work`. It counts B's own Stone, Wood, and two Work once. This is a lower bound on combined AP, not an optimal calendar search. The 10-AP window is conditional on the test-30 farm choice and all-Sunny Weather; it is **not** a rule that both Projects must finish by S18.

An explicit first-Stone fork shows the direction of delay. Spend D15 on Descend ×1, D16 on Descend ×2 + Search, and D17 on the first Stone Extract. If B receives that Stone, D18 can spend Wood ×1 + Work ×2 to finish B, with two AP available for X preparation, including another Stone Extract after D17 Sleep. If X receives it, completing `X-L` on D18 needs Wood ×1 + Work ×2, leaving only two of D18's five AP for B's next Stone/wood/Work needs. `X-W` needs four D18 AP, `X-H` five, and `X-S` needs its second Stone Extract plus Wood and two Work (four). In all cases the player can favor the optional context, but B then extends beyond D18 under this allocation. That is a choice about the first Stone and the remaining AP, not a permanent B lock: Exposed Stone refreshes after Sleep, B contributions persist, and the save continues across Seasons.

Prestocking Stone or starting X earlier can change these dates. The graph allows such knowledgeable play; the table measures **reactive concurrency** after B's preview and does not claim an earliest possible combined finish. If crop survival, stock, Person choices, or Weather change, rerun only the affected calendar comparison before using exact dates as evidence.

## 4. Tradeoff and readiness verdict

| Arm | Reading under Q4/X0 | Paper disposition |
| --- | --- | --- |
| `X-L` | Clean, accessible context opening, but identical quantity vector to B. The first-Stone allocation differs only if the context reward has actual value. | Lean cost comparator; no selection. |
| `X-W` | Adds one recoverable common-material commitment while leaving the scarce CP6 Stone requirement at one. It makes X slightly dearer than B without changing the Mine source grammar. | Extra-Wood cost comparator; the previous recommendation is withdrawn pending reward definition. |
| `X-H` | Same allocation decision as `X-W`; extra Work only consumes an AP. D3 Connector completion stays the same, while B competition worsens. | Do not promote the historical quantity by inertia; retain as high-Work comparator. |
| `X-S` | Second Stone creates a real source-cadence decision, but puts an optional context reward in direct competition with B for multiple CP6 cycles. Recovery exists, yet this adds the strongest source queue without evidence that X's still-undefined reward warrants it. | Stress comparator; no current reason to select it. |

`[PAPER VERDICT — COST GATE PAUSED]` `X-L` and `X-W` differ by one deterministic Wood/1 AP, but neither is worth selecting until Upper Grove has a concrete optional action/source and a reason the bridge opens it. The earlier `X-W` recommendation was premature. Do not treat the four-arm table as evidence that Grove Footbridge itself should exist, or add content merely to justify the table. Keep the owner-selected B3 structural intent visible while auditing whether X has a real role; if it does not, revisit the B3 boundary with the owner before more X balancing.

The next step for X is **purpose before price**: specify the optional Upper-Grove interaction and compare the package with and without it. Heart/Gift cadence is a separate workstream and need not wait for a manufactured X cost choice. Existing Person schedule/Gift values are fixtures, and the current owner's eventual response is informed-owner evidence; no fresh-player evidence has been collected. No completed Weather UI test or historical D3/D6/D9 farm fixture is rerun here.
