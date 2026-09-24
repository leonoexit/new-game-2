# Project quantity/Work A6–S18 rerun 04 — responsive vs deliberate relief

Ngày chạy: 2026-09-22.

Trạng thái: quantitative paper rerun tiếp nối [AP / Season bracket narrowing 03](AP-SEASON-BRACKET-NARROWING-03.md), [Calendar/Project completion rerun 02](CALENDAR-PROJECT-COMPLETION-RERUN-02.md) và [Mine Stone refresh / Project timing 05](MINE-STONE-REFRESH-PROJECT-TIMING-05.md). Vòng này dùng `A6/S18` dưới cả `WD` và `WS`, loại một arm bị padding dominate, và ban đầu dừng ở hai bundle khả thi. Product owner sau đó chọn `Q4` làm paper baseline kế; đây vẫn chưa là runtime/content lock.

Superseding note 2026-09-23: Q4 M/B and source/timing results remain active paper evidence; all PJ-X permit values are historical after owner-selected X0 no-fee in [permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md).

Final owner correction 2026-09-24: [package v1 §6.5](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) rejects all three Project designs outright. The Q4/M/B and PJ-X calculations below are historical exercises under invalid premises, not active evidence or future content specifications.

## 1. Fixed contract và scheduler

### 1.1. Inherited rules

- `A6 = 6 AP/day`; `S18 = 18 ngày`.
- `WD = Rain D3/6/9/12/15/18`; `WS = Rain D5/10/15`.
- Pre-relief sunny cohort peak: `Care 2 + Harvest 2 + Plant 2 = 6 AP`.
- Sau `PJ-M`, Water bốn crop tốn 2 AP; sau `PJ-B`, sunny cohort peak còn 5 AP.
- `PJ-M` và `PJ-B`: material + Work, không fee.
- `PJ-X`: material + Work + selected 8G permit; market `T0`.
- `Direct Descent`: 1 AP → Depth +1, không material; tối đa ba lần/ngày trong trace.
- CP3 có accepted Ore fixture; Extract Ore tốn 1 AP và không tăng Depth.
- Từ CP6: Search 1 AP → reveal exact `Exposed Stone`; Extract 1 AP → gain Stone, không tăng Depth.
- Stone source persist; `ready → spent → ready after Sleep`. Search chỉ trả một lần.
- Project contribution giữ qua Sleep/Season/Year. S18 không phải deadline.
- Work 1 AP tạo 2 Progress. Bảng recipe luôn ghi cả Progress và số Work action.

### 1.2. Legible-earliest policy

Để không dùng hidden future target như một global agenda, main trace chỉ bắt đầu route-specific acquisition/Work sau khi Project được native preview:

- `W0/PJ-M` preview D3 sau manual-maintenance exposure;
- Expansion bắt đầu ngày sau khi `PJ-M` complete;
- `W2/PJ-B` preview ba ngày sau Expansion, sau expanded workload exposure;
- material tình cờ có sẵn có thể contribute, nhưng main table không giả định omniscient stockpile trước preview;
- farming commitment trước, Person P package D4/D10/D16 sau đó, flexible source/Work cuối cùng;
- no unused AP banks qua Sleep.

Đây là **earliest legible completion** trong scheduler đã khai báo, không phải lời hứa exact ngày cho final content. Một experienced-player stockpile counterfactual được tách riêng ở §6.

## 2. Ba cost bundles

`PJ-X` giữ nguyên ở cả ba arm để cô lập relief Work; không đổi permit hoặc tạo material mới.

| Arm | `PJ-M` Water Trough | `PJ-B` Harvest Bench | `PJ-X` Footbridge | Identity cần test |
| --- | --- | --- | --- | --- |
| `Q4 — responsive` | 1 Wood + 1 Ore + 4 Progress = 2 Work | 1 Wood + 1 Stone + 4 Progress = 2 Work | 2 Wood + 1 Stone + 6 Progress = 3 Work + 8G | Relief trả lời workload ở opportunity gần nhất |
| `Q6 — deliberate` | 1 Wood + 1 Ore + 6 Progress = 3 Work | 1 Wood + 1 Stone + 6 Progress = 3 Work | như `Q4` | Relief cần một nhịp construction rõ sau khi source đủ |
| `Q8 — long-build` | 1 Wood + 1 Ore + 8 Progress = 4 Work | 1 Wood + 1 Stone + 8 Progress = 4 Work | như `Q4` | High-Work stress comparator |

Không arm nào thêm fee cho relief, tăng Mine payout, tăng Depth, bắt toll, thêm fixed wait hoặc tạo special-purpose material.

## 3. A6/S18 baseline traces

### 3.1. `PJ-M` exact trace

Project bundle tính cả `Wood ×1`, `Descend ×3`, `Extract Ore ×1` và Work. `Q4/Q6` cùng complete D5 vì non-bankable peak tạo cùng calendar slot; chúng khác số AP còn lại D5.

#### WD

| Day | Farming/fixed load | `Q4/Q6` Project actions | Cumulative route AP |
| --- | --- | --- | ---: |
| D3 Rain burst | Harvest 2 + Plant 2 = 4 | Descend ×2 | 2 |
| D4 | Care 2 + Person P 2 = 4 | Descend ×1 + Extract Ore | 4 |
| D5 | Care 2 | Wood ×1 + Work ×2/3 | 7/8; `PJ-M` complete D5 |

#### WS

| Day | Farming/fixed load | `Q4/Q6` Project actions | Cumulative route AP |
| --- | --- | --- | ---: |
| D3 sunny burst | Care 2 + Harvest 2 + Plant 2 = 6 | — | 0 |
| D4 | Care 2 + Person P 2 = 4 | Descend ×2 | 2 |
| D5 Rain | 0 | Descend ×1 + Extract Ore + Wood ×1 + Work ×2/3 | 7/8; `PJ-M` complete D5 |

`Q4` leaves 1 AP on D5 in both phases; `Q6` uses the full legible slot. Neither completes before the first D3 workload, and both make Water relief active for the D6 cycle.

`Q8` needs 9 route AP. It completes D6 under WD, after the D6 burst resolves, and D7 under WS because the sunny D6 peak has zero slack. The maintenance relief therefore arrives after the second pre-relief peak in WS.

### 3.2. Expansion

Expansion remains the six-action world-state fixture and begins the day after `PJ-M`:

| Arm | WD | WS | Consequence |
| --- | --- | --- | --- |
| `Q4` | D7 | D7 | four active crop state from D7 |
| `Q6` | D7 | D7 | same date; one fewer flexible AP carried nowhere |
| `Q8` | D8 | D9 | late maintenance relief propagates into expansion |

No AP from before reveal is banked. Completion persists if any arm crosses a boundary.

### 3.3. `PJ-B` exact trace

From Depth 3 after `PJ-M`, the Bench route includes:

```text
Descend ×3 → CP6
Search Stone ×1 → exact Exposed Stone
Extract Stone ×1
Wood ×1
Work ×2 / ×3 / ×4
```

Thus `Q4/Q6/Q8` require 8/9/10 AP after `W2` preview.

#### `Q4` — responsive

| Day | WD Project AP | WS Project AP | Collision/source note |
| --- | ---: | ---: | --- |
| D10 | 2 | 4 | Person P uses 2 AP; WS Rain removes Care |
| D11 | 4 | 4 | source/Work may be ordered freely after preview |
| D12 | 2 → complete | — | WD Rain burst leaves 2; WS already complete D11 |

Result: `PJ-B` D12/WD and D11/WS. WS relief is active for the sunny D12 peak; WD completes after the D12 burst. Weather phase therefore changes which peak receives relief even though both arms fit S18.

#### `Q6` — deliberate

| Day | WD Project AP | WS Project AP | Collision/source note |
| --- | ---: | ---: | --- |
| D10 | 2 | 4 | Person P collision |
| D11 | 4 | 4 | WS has 1 AP route remainder, but AP does not bank |
| D12 | 2 | 0 | WD Rain burst leaves 2; WS sunny pre-relief peak uses all 6 |
| D13 | 1 → complete | 1 → complete | same completion day, different phase path |

Result: `PJ-B` D13 under both Weather arms. It deliberately lands after the D12 expanded peak while leaving D14–D18 recovery/opportunity room.

#### `Q8` — long-build

Because `PJ-M`/Expansion already moved, `W2` appears D11/WD and D12/WS. `PJ-B` completes D13/WD but D15/WS. The WS trace spends D12 entirely on the pre-relief sunny peak, then needs D13/D14 and the remaining D15 Rain slot. Extra Work creates phase delay without a new material, branch or allocation decision.

### 3.4. Baseline result matrix

| Arm | WD `M / E / B` | WS `M / E / B` | Peak answered by B | S18 recovery margin |
| --- | --- | --- | --- | --- |
| `Q4` | D5 / D7 / D12 | D5 / D7 / D11 | WS: before D12; WD: after D12 | 6–7 days |
| `Q6` | D5 / D7 / D13 | D5 / D7 / D13 | after D12 in both | 5 days |
| `Q8` | D6 / D8 / D13 | D7 / D9 / D15 | WS relief drifts to D15 | 3–5 days |

These are fixture days from explicit traces, not interpolation between A5 and A7.

## 4. `PJ-X` optional comparator

With CP6 Stone and T0 market, earliest A6 Connector trace is:

| Day | Actions | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Descend ×3 + Extract CP3 Ore | Depth 3; permit funding available |
| D2 | Descend ×3 + Search Stone + Extract Stone + Work ×1 | Depth 6; Stone acquired |
| D3 | Work ×2; sell Ore/pay 8G | `PJ-X` complete D3 |

Keeping Ore and selling two extra Wood also completes D3 under A6; it changes allocation, not the completion day. Under either route:

- Footbridge opens optional Upper-Grove context only;
- Mine/Grove/common sources and both relief Projects remain valid without it;
- no Producer trace above needs `PJ-X`;
- skipping the permit retains Ore/Gold/material choices.

If `PJ-X` takes the first Stone and `PJ-B` is later chosen in the same save, the persistent source is ready after Sleep. The Bench needs one later Extract, not another Search. In the baseline table this shifts `Q4` Bench to D13 in both Weather arms; `Q6` remains D13 but consumes more D13 slack. This is recoverable allocation pressure, not a one-Stone lock.

## 5. Gate and allocation audit

### 5.1. Relief gate count

| Check | `Q4` | `Q6` | `Q8` |
| --- | --- | --- | --- |
| Gold gate on M/B | none | none | none |
| Secondary quantity | one Ore / one Stone | same | same |
| Source recovery | deterministic; Stone after Sleep | same | same |
| Work burden | 2 each | 3 each | 4 each |
| Harmful triple-gate result | no | no | yes under WS timing |

`Q4/Q6` still expose source, material allocation and Work as three readable dimensions, but they do not recreate the rejected fee + scarce material + Work stack. One secondary unit, persistent contribution and known source recovery keep failure recoverable. `Q8` turns Work into a timing pad: maintenance relief misses the second WS peak and Bench drifts to D15 without adding a decision.

### 5.2. Raw material allocation

| Material | Project use | Competing use | Result |
| --- | --- | --- | --- |
| Wood | one each for M/B; two for X | Sell 2G / Keep / other Project | common allocation remains, but not a quantity wall |
| Ore | one for M | Sell 5G / Keep / fund X permit | no-fee M avoids sell-required-material circularity |
| Stone | one for B or X | Sell 2G / Keep / other Project | first choice matters; second unit has one-Sleep recovery |

`Q4` and `Q6` use the same raw quantities. Their owner choice is therefore not hidden economy inflation: it is whether relief should answer the next workload window or require one additional Work commitment.

## 6. Stockpile sensitivity

S∞ allows inventory, but the game must not tell the player a hidden future requirement through a global agenda. If a player independently explores CP6 and Keeps Stone before `W2` preview:

- Search/Extract AP moves earlier but is not erased;
- `Q4` can complete at reveal or one day earlier than its main reactive trace, depending on Person/farm collision;
- `Q6` still needs a visible extra Work action;
- Stone sacrificed to Sell or `PJ-X` uses the explicit after-Sleep recovery above.

This experienced-player acceleration is acceptable. It rewards source knowledge and Keep without making stockpile mandatory; main dates remain the legible no-foreknowledge comparison.

## 7. Regression guards

| Guard | `Q4` | `Q6` | `Q8` | Reading |
| --- | --- | --- | --- | --- |
| `A5/S12/WS` | M D7 / E D10 / B outside | M D8 / E D11 / B outside | M D8 / E D11 / B outside | sunny peaks still overflow; B remains cross-boundary and recoverable |
| `A5/S18/WD` | M D7 / E D10 / B D16 | M D7 / E D10 / B D17 | M D7 / E D10 / B D17 | lower AP preserves meaningful late relief; Q8 adds no calendar identity over Q6 |
| `A7/S18/WD` | M D5 / E D7 / B D11 | same days, 2 fewer flexible AP total | same days, 4 fewer flexible AP total | extra Work does not repair A7 surplus; do not select padding to consume it |

Regression dates are rerun under the declared recipes/scheduler, not interpolated from prior tables.

- A5 overload remains visible in all arms; `Q4` does not erase the S12 boundary because `PJ-B` still lies outside it.
- A7 absorbs every arm without changing the main milestone dates. `Q8` therefore fails as a surplus fix; it merely removes flexible actions.
- S18 contains recovery for `Q4/Q6`, but neither Project is a same-Season requirement. S12 explicitly demonstrates persistent continuation.

## 8. Arm verdicts

### 8.1. `Q4 — responsive`: viable

- M arrives D5 after real manual-maintenance exposure.
- B arrives after one expanded peak; Weather phase determines whether it helps the next peak.
- A5 still overloads and misses B inside S12.
- One Stone remains an allocation fork against X/Sell/Keep.
- Risk: WD/WS produce different relief feel at D12; this may be desirable Weather identity or feel arbitrary.

### 8.2. `Q6 — deliberate`: viable

- M still arrives D5, so extra Work does not strand early maintenance.
- B arrives D13 after the D12 peak in both Weather arms.
- One additional Work per relief Project creates a visible construction commitment without another material or fee.
- A5 reaches B D17; A7 keeps surplus warning.
- Risk: compared with Q4, the extra Work is pacing-only; it needs owner intent that relief should be earned after two workload exposures.

### 8.3. `Q8 — long-build`: reject

- WS Water relief arrives D7, after the second pre-relief peak.
- WS Bench reaches D15 and adds no new source/allocation decision.
- A5 dates mostly collapse onto Q6, while A7 milestone days remain unchanged.
- It neither fixes surplus nor strengthens material identity. Four Work is fixed padding, so this arm is dominated for the current relief purpose.

## 9. Product-owner choice and stop condition

Hai bundle cùng pass structural/calendar/recovery guards nhưng có identity khác:

| Choice | Chọn khi muốn | Chấp nhận tradeoff |
| --- | --- | --- |
| `Q4 — responsive` | relief trả lời ngay opportunity kế sau khi player hiểu workload | Weather phase có thể quyết định Bench giúp D12 hay chỉ từ D15 |
| `Q6 — deliberate` | Project là một construction commitment rõ; player chịu D12 peak trước relief | thêm 2 Work AP tổng cho M+B và B luôn muộn tới D13 |

Vì cả hai viable và khác intended feel, paper process dừng tại đây để product owner chọn. Không arm nào được gọi là accepted/final.

Theo thứ tự workstream, Produce/Fish raw-target và one-slot Processing rerun **chưa chạy**. Nó chỉ bắt đầu sau khi `Q4` hoặc `Q6` được chọn; không thêm generic Load tax để bù dominance.

## 10. Verdict

1. `[VIABLE — OWNER CHOICE]` `Q4`: M/B dùng `1 common + 1 secondary + 4 Progress`; M D5, B D12/WD hoặc D11/WS.
2. `[VIABLE — OWNER CHOICE]` `Q6`: M/B dùng `1 common + 1 secondary + 6 Progress`; M D5, B D13 ở cả WD/WS.
3. `[REJECT]` `Q8`: extra Work trở thành timing padding, trễ WS relief nhưng không tạo source/allocation identity hoặc sửa A7 surplus.
4. `[PAPER RESULT]` Một Ore/Stone + no fee không tái tạo harmful triple gate; first Stone vẫn cạnh tranh B/X/Sell/Keep và second Project recover sau Sleep.
5. `[PAPER RESULT]` `PJ-X` earliest A6 D3 với selected permit, nhưng vẫn optional; không relief/base route nào cần nó.
6. `[BOUNDARY]` Exact days, quantity, Work, Weather và permit vẫn là fixture cho tới owner choice/content lock. Đây không phải fresh-player evidence hoặc owner acceptance.

## 11. Owner decision follow-up

Product owner chọn **`Q4 — responsive`** ngày 2026-09-22.

- `[OWNER SELECTED PAPER BASELINE]` `PJ-M`: 1 Wood + 1 Ore + 4 Progress = 2 Work, no fee.
- `[OWNER SELECTED PAPER BASELINE]` `PJ-B`: 1 Wood + 1 Stone + 4 Progress = 2 Work, no fee.
- `Q6` giữ làm deliberate/high-Work comparator; không còn là co-baseline.
- `Q8` vẫn reject.
- Selection này mở handoff sang [Raw-target / Processing A6–S18 rerun 05](RAW-TARGET-PROCESSING-A6-S18-RERUN-05.md); không authorize runtime, art, commit hoặc push.
