# Person mini-roster fixture 01 — A/C/K concrete pass

Ngày dựng: 2026-09-22.

Trạng thái: `[FIXTURE]` ba-Person paper roster để rerun Gift/Heart/economy contexts. Mira, Nell và Bram chỉ là study identities đang có portrait; không phải canonical roster, canonical name hoặc final ability assignment.

## 1. Ranh giới

### 1.1. [DECIDED]

- Person là persistent collectible với activated ability.
- Gift đầu: action + valid item → thu nhận Person + Heart.
- Gift sau: action + valid item → Heart; không tạo bản sao.
- Heart riêng từng Person, giữ qua ngày; Person không bị tiêu khi dùng ability.
- Không party cap cưỡng ép; không Person nào là prerequisite duy nhất cho core progress.
- Save/Person/Heart không reset chỉ vì hết Year 1.

### 1.2. [HYPOTHESIS] Shared Heart fixture

- Gift `+1 Heart`; ability `−1 Heart`; cap 2; Heart mới dùng được cùng ngày.
- Mỗi Person nhận tối đa một Gift/ngày.
- Đây là stress fixture kế thừa, không phải balance final.

## 2. Mini-roster

| Person identity | Kernel | Short label | Gift accept fixture | Role |
| --- | --- | --- | --- | --- |
| Mira | A — Read Ahead | `PREVIEW` | `Fresh · Forage · Berry` | Information trước optional uncertainty |
| Nell | C — Hold Open | `HOLD 1` | `Fresh · Forage · Herb` | Timing; một held target active |
| Bram | K — Divide/Focus | `SPLIT/FOCUS` | `Fresh · Crop · Root` | Project Progress allocation, total conserved |

Exact compatibility:

- Mira nhận Hedgerow Berry; không nhận Shortroot Preserve/Dried Fish.
- Nell nhận Fresh Wild Herb; không nhận Prepared Wild Herb hoặc Dewleaf nếu card yêu cầu `Forage` origin.
- Bram nhận Fresh Shortroot; không nhận Shortroot Preserve.
- Invalid target không highlight; commit preview nêu item/state/origin và Heart result.

## 3. Ability text fixture

### Mira — A Read Ahead

`Spend 1 Heart: Preview the exact optional result of one unresolved Grove batch or Veiled Mine route. No reroll; required cost/result information is always free.`

- Không trả Heart lần hai cho cùng unresolved target.
- Safe/deterministic route luôn tồn tại.
- Không tăng output hoặc giữ opportunity.

### Nell — C Hold Open

`Spend 1 Heart: One expiring Catch, Grove batch or optional request remains through one additional Sleep.`

- Tối đa một held target active cho Nell.
- Không re-extend cùng target.
- Không giữ Person appearance, Season boundary, owned item hoặc core mandatory gate.

### Bram — K Divide/Focus

`Before a Work action, spend 1 Heart: distribute the same total 2 Progress as 2 on one eligible Project or 1+1 on two eligible Projects.`

- Total Progress và action cost không đổi.
- Không áp dụng Mine Depth, Fishing progress hoặc collection record.
- Work bình thường hoàn tất mọi Project; Bram chỉ đổi allocation.

## 4. Appearance/Gift schedule fixture

12-day slice:

| Day | Person | Context | Recovery |
| --- | --- | --- | --- |
| D2 | Mira | Town/Grove announcement | D8 |
| D4 | Nell | River/Grove announcement | D10 |
| D6 | Bram | Town/Project announcement | D12 |
| D8 | Mira | Town | next cycle if missed |
| D10 | Nell | River | next cycle if missed |
| D12 | Bram | Town | next cycle if missed |

Appearance không bắt player Gift. Gift preference item đều có recurring/deterministic-or-recoverable source; miss chỉ trì hoãn collection/Heart.

## 5. Economy rerun

| Person | Gift opportunity cost | Ability target horizon | Non-dominance result |
| --- | --- | --- | --- |
| Mira | Berry 2G fixture + 1 action | Optional uncertainty L–H theo route | Gift thắng khi information tránh commitment xấu; Safe route vẫn đủ |
| Nell | Wild Herb 4G/6G option + 1 action | Expiring target M–H | Gift/Heart cạnh tranh thật với Fresh target/Process; one-held limit ngăn deadline erasure |
| Bram | Shortroot 4G liquidity + 1 action | Project overlap 0–M | K chỉ đáng khi hai Project/near-complete target cùng hiện; không tăng output |

### 5.1. A5

- Mira: một Heart có thể chọn giữa Veiled result và Grove batch; không cover mọi uncertainty.
- Nell: Gift Wild Herb có thể đẩy Fresh request/Process; nếu player không Gift, Catch/Grove vẫn recur.
- Bram: Shortroot Gift cạnh tranh Seed/restock liquidity; K không phải phí vận hành vì target Project có thể chưa overlap.

### 5.2. A7

- Extra AP làm Gift dễ hơn nhưng cap/target limits ngăn mọi ability always-on.
- A vẫn no-reroll; C vẫn one-held; K vẫn conservation.
- Không thêm cooldown chung chỉ để hút surplus.

## 6. Cross-roster overlap

| Pair | Risk | Boundary |
| --- | --- | --- |
| A + C | Preview rồi giữ best opportunity | Tốn 2 Heart thuộc hai Person + two Gifts; no reroll, one-held |
| A + K | Preview source rồi allocate Project | Hợp lệ; information không tạo material/progress |
| C + K | Giữ request trong khi tập trung Project | Hợp lệ timing tradeoff; C không giữ Project deadline bắt buộc |

Không combo nào mở core source, tăng total Progress hoặc hoàn Catch miễn phí.

## 7. Orientation/UI burden

- Portrait chỉ làm identity anchor.
- Resting tile cần Heart count + short verb: `PREVIEW`, `HOLD 1`, `SPLIT/FOCUS`.
- Selection state highlight exact eligible targets.
- Inspect nêu no-reroll, one-held và total-progress-conserved.
- Không bake ability rule, Gift tag hoặc Heart vào portrait art.

Paper overlay sheet: `paper-tests/person-mini-roster-v0.1/person-mini-roster-sheet.png`.

## 8. Verdict

1. `[HYPOTHESIS]` A/C/K tạo mini-roster đủ khác role: information, timing và allocation.
2. `[HYPOTHESIS]` Gift preferences tạo economy tension thật mà không cần item mới: Berry, Wild Herb và Shortroot.
3. `[DIRECTION]` Carry mini-roster này vào package graph như test fixture, không như Year 1 roster count.
4. `[DIRECTION]` Không thêm E/J vào concrete roster vòng này; chúng vẫn conditional và sẽ làm paper fixture cần nhiều printed exceptions trước khi A/C/K baseline được đo.
5. `[DIRECTION]` D/I/M giữ reserve; không tạo content để nuôi ability.

## 9. Chưa kết luận

- Mira/Nell/Bram có vào game hay giữ ability này.
- Roster size, Gift preferences, appearance dates.
- Heart cap/cost/cadence.
- Ability wording/name cuối.
- Portrait `study` có thành canonical art hay không.
