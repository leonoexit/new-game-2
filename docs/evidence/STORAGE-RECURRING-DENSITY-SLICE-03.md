# Storage recurring-density slice 03 — `S∞` versus `S4` with visible actual contexts

Ngày chạy: 2026-09-22.

Trạng thái: bounded paper rerun theo handoff của [Forecast / Keep decision value 02](FORECAST-KEEP-DECISION-VALUE-02.md). Trace dùng `H-C` như analytical comparator. Global `Tomorrow Targets` presentation sau đó bị informed owner reject; cap evidence được giữ vì nó cho thấy `S4` cần prescriptive information để bớt đoán. Không chốt storage cap, stack rule, prices, target schedule hoặc runtime UI.

## 1. Câu hỏi

Khi player đã biết minimum Tomorrow target information, cap bốn unit có tạo thêm allocation strategy đủ tốt so với no-cap, hay chủ yếu tạo forced housekeeping trong recurring output slice?

## 2. Arms và fixed assumptions

| Arm | Rule |
| --- | --- |
| `S∞` | No commodity cap; no perishability |
| `S4` | Tối đa 4 item-unit cuối ngày; no perishability; không discard ngầm |

Giữ cố định:

- `H-C`: comparator giả định actual Nell/Pantry context đã tồn tại và compatibility/recovery có thể inspect tại source; không phải universal target announcement;
- Gift/Process/Project consume item;
- Processor queue không chiếm commodity storage; Ready output phải collect/allocate trước slot reuse;
- Processor one slot, Load `1 AP`, complete sau một Sleep;
- Sell `0 AP` theo T0;
- không thêm Seed restock, Project fee hoặc price target mới trong slice; mục đích là isolate capacity pressure;
- mọi item/target dưới đây là fixture, không phải schedule/content final.

## 3. Six-day recurring slice

Starting carry trước D1:

- 1 Raw Wood;
- 1 Raw Stone;
- storage count `2`.

Known external contexts trong comparator:

- cuối D2: `Tomorrow · Nell Gift · Fresh · Forage · Herb · returns later`;
- cuối D4: `Tomorrow · Pantry · Processed · Crop · prepare today · returns later`.

### 3.1. Event schedule

| Day | Output / allocation event | Target-driven action |
| --- | --- | --- |
| D1 | Harvest 2 Fresh Shortroot | none |
| D2 | Acquire 1 Fresh Wild Herb | reserve Herb for Nell tomorrow |
| D3 | Gift Herb; acquire 1 Fresh River Minnow | Gift consumes Herb |
| D4 | Acquire 1 Fresh Rain Eel | Load 1 Shortroot because Processed Crop target is tomorrow |
| D5 | Collect/fulfil Shortroot Preserve; harvest 2 Fresh Shortroot | no future item target in visible horizon |
| D6 | Contribute 1 Raw Wood; acquire 1 Fresh Wild Herb | known Project contribution, no Tomorrow target |

## 4. Trace

Counts below are end-of-day commodity storage after required allocation. Processor queue is logged separately.

| Day | `S∞` end count | `S4` end count | `S4` forced allocation |
| --- | ---: | ---: | --- |
| Start | 2 | 2 | none |
| D1 | 4 | 4 | none |
| D2 | 5 | 4 | Protect Herb because of `H-C`; Sell 1 Shortroot in least-extra-AP path |
| D3 | 5 | 4 | none; Gift Herb frees one slot before Minnow enters |
| D4 | 5 + 1 queued | 4 + 1 queued | none beyond context-driven Load; Shortroot leaves storage for queue |
| D5 | 7 | 4 | After request resolves and two Shortroot enter, allocate 2 units; Sell 2 is least-extra-AP path without another target |
| D6 | 7 | 4 | none; Wood contribution frees one slot before Herb enters |

### 4.1. Inventory path — `S∞`

```text
Start: Wood, Stone                                           = 2
D1:    + Shortroot, Shortroot                                = 4
D2:    + Wild Herb                                           = 5
D3:    - Herb Gift + River Minnow                            = 5
D4:    + Rain Eel - Shortroot to Processor                   = 5 + queue 1
D5:    + Preserve - Pantry + Shortroot + Shortroot           = 7
D6:    - Wood Project + Wild Herb                            = 7
```

`S∞` không xóa decision: D2 vẫn reserve Fresh Herb cho Gift; D4 vẫn Process hôm nay vì state/timing target; Wood vẫn có Project use. Nó chỉ không buộc resolve mọi output không có target trong slice.

### 4.2. Inventory path — `S4`

```text
Start: Wood, Stone                                           = 2
D1:    + Shortroot, Shortroot                                = 4
D2:    + Wild Herb - Sell 1 Shortroot                        = 4
D3:    - Herb Gift + River Minnow                            = 4
D4:    + Rain Eel - Shortroot to Processor                   = 4 + queue 1
D5:    + Preserve - Pantry + 2 Shortroot - Sell 2 Shortroot  = 4
D6:    - Wood Project + Wild Herb                            = 4
```

D2 chỉ có information value nếu Nell context thật sự đã tồn tại và player tự chọn theo đuổi nó; không được system biến thành task. D5 không có context differentiation; hai fresh outputs phải rời storage ngay trên harvest day chỉ để trở lại `4/4`.

## 5. Pressure classification

| Metric trong slice | `S∞` | `S4` |
| --- | ---: | ---: |
| Peak owned commodity units | 7 | 4 |
| Target-driven allocation decisions | 2 | 2 |
| Additional cap-pressure moments | 0 | 2 |
| Units forced out/queued solely to meet cap | 0 | 3 |
| Cap moments with useful target ranking | — | 1 of 2 |
| Cap moments landing on harvest/output burst | — | 1 of 2 |

Không đọc `1 of 2` như tỷ lệ balance. Sample chỉ đủ phân biệt một good pressure shape với một housekeeping shape.

## 6. Counterfactual checks

### 6.1. Nếu D2 không có `H-C`

`S4` không biết bảo vệ Herb hay item khác; cap trở lại forced guess. Forecast là prerequisite cho legibility, không phải bonus cho cap.

### 6.2. Nếu D5 chọn Process thay vì Sell

Player có thể Load một Shortroot và Sell một Shortroot để đạt cap, nhưng phải trả thêm `1 AP` đúng harvest burst dù không có Processed target. Điều này tái tạo double-pressure đã thấy trong Storage/Keep sensitivity 01. Positive uplift một mình không làm action thành strategic.

### 6.3. Nếu stack chiếm một slot thay vì mỗi unit

Hai Shortroot D5 có thể gộp, xóa phần lớn pressure. Vì stack geometry chưa chốt, result này chỉ áp dụng cho existing `S4 unit-cap` arm; không promote nó thành inventory architecture.

## 7. Verdict

1. `[PAPER RESULT]` Khi actual Nell/Pantry contexts đã tồn tại, player có thể tự chọn hai allocation dưới cả `S∞` và `S4`: keep Fresh Herb, prepare Processed Crop.
2. `[PAPER RESULT]` Cap không cần thiết để tạo các decision đó.
3. `[PAPER RESULT]` `S4` thêm một actual-context-guided reservation event ở D2 nhưng cũng thêm một two-unit harvest-day housekeeping event ở D5.
4. `[HYPOTHESIS RETAINED]` `S∞`, no-perish vẫn là baseline mạnh hơn cho package hiện tại.
5. `[DO NOT SELECT]` Chưa chọn `S4`; một bounded slice có 50% pressure moments thiếu context differentiation, stack rule vẫn open, và owner reject prescriptive target UI.
6. `[BOUNDARY]` Không dùng perishability, transaction AP hoặc fake target để làm D5 pressure có vẻ meaningful.

## 8. Handoff

- [Target-announcement fixture v0.1](../../paper-tests/target-horizon-announcement-v0.1/README.md) đã bị informed owner reject; không carry `H-C` thành global UI.
- Giữ `S∞` no-perish baseline. Player tự đặt kế hoạch từ current options và actual contexts.
- Storage cap chỉ quay lại sau khi stack unit và recurring target density có design reason riêng; không dùng agenda UI để làm cap legible.
