# AP / Season bracket narrowing 03 — A6 threshold và S18 recovery horizon

Ngày chạy: 2026-09-22.

Trạng thái: paper constraint narrowing tiếp nối [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md), [Calendar/Project completion rerun 02](CALENDAR-PROJECT-COMPLETION-RERUN-02.md), [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) và [COL-N independent source cadence 03](COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md).

Repository không có executable scheduler; evidence hiện tại là explicit paper tables. Vì vậy vòng này chọn **next paper baseline và regression bounds**, không invent exact A6 Project days, không chốt final balance và không authorize runtime.

## 1. Câu hỏi narrowing

1. AP/day nào tránh mandatory farming spill của A5 nhưng không tạo surplus rộng như A7?
2. Season length nào chứa một recovery cycle có nghĩa và cả `DL-6`/`DL-8`, thay vì chỉ đặt collection đúng tại boundary?
3. Baseline mới còn giữ Weather phase, opportunity và raw/processed choice đọc được không?
4. Stress/safety arms nào vẫn cần giữ sau khi baseline hẹp hơn?

## 2. Fixed evidence

### 2.1. Daily workload thresholds

Calendar 01 đã đo hai sunny crop peaks:

| State | Routine Care | Burst | Total peak |
| --- | ---: | ---: | ---: |
| Trước `PJ-B` | 2 AP | Harvest 2 + Plant 2 = 4 AP | 6 AP |
| Sau `PJ-B` | 2 AP | Harvest 2 + Plant 2 = 3 AP | 5 AP |

AP không bank. Opportunity/Project action thêm phải cạnh tranh với peak cùng ngày.

### 2.2. Existing route evidence

| Arm | Producer | Connector | Collector |
| --- | --- | --- | --- |
| A5 | Pre-relief sunny peak bắt buộc tràn; `5-12-S` soft lock-in | Core pass, Depth 12 khoảng D5 | Miss common Catch và một số Gift trong long horizon |
| A7 | Peak fit + 1 AP; M/E/B đều D5/D7/D11 | Depth 12 khoảng D4, nhiều flexible AP | Lấy toàn bộ Catch/Gift trong minimum fixture; Processing surplus warning |

A5 và A7 đều hữu ích làm bounds nhưng đều yếu làm default: một bên có structural overflow, bên kia xóa gần hết opportunity miss.

### 2.3. Calendar events cần recovery room

| Event/context | Timing signal |
| --- | --- |
| Common Catch recovery | D14 |
| Person P third window | D16 |
| Wild Herb third window | D17 |
| Person Q third window | D18 |
| `DL-6` source response | D13/D14 |
| `DL-8` source response | D15/D16 |
| A5 dense `PJ-B` fixture | D17 |
| A5 sparse Tallbean output | khoảng D17 |

Các ngày này là fixture signals, không phải final schedule.

## 3. AP/day narrowing

### 3.1. A5 — retain as overload stress, reject as default

At pre-relief sunny peak:

```text
6 required AP > 5 available AP
```

Ít nhất một committed farm action tràn trước khi player cân nhắc Catch, Gift, Project hoặc Processing. `5-12-S` còn đẩy Expansion ra ngoài horizon dù `PJ-M` complete D8.

A5 có giá trị stress-test vì cho thấy non-bankable overload và Weather phase. Nhưng lấy nó làm default sẽ biến một fixture crop cohort thành compulsory spill trước khi route choice được tính. **Không carry A5 làm next baseline.**

### 3.2. A7 — retain as surplus guard, reject as default

At pre-relief sunny peak:

```text
6 required AP < 7 available AP
```

Một AP luôn còn lại ngay trên peak; non-peak days rộng hơn. Existing tables cho thấy:

- Producer dense/sparse cùng M/E/B timing;
- Collector lấy mọi Catch/Gift trong minimum set;
- Connector chỉ nhanh hơn khoảng một ngày rồi còn optional capacity;
- Processing dễ thành default khi raw target vắng.

A7 hữu ích để phát hiện content/economy có sống sót dưới surplus không. Nó quá rộng làm default cho current minimum. **Không carry A7 làm next baseline.**

### 3.3. A6 — exact threshold baseline

At pre-relief sunny peak:

```text
6 required AP = 6 available AP
```

At post-relief sunny peak:

```text
5 required AP < 6 available AP
```

Hệ quả cấu trúc:

- pre-relief commitment fit nhưng dùng hết ngày; Catch/Gift/Project phải chờ hoặc thay action;
- Rain vẫn có value vì giải phóng 2 Care AP thay vì chỉ cộng surplus;
- `PJ-B` tạo observable relief: từ zero slack lên 1 AP trên sunny burst;
- non-peak days vẫn có room cho source/Project/Processing;
- atomic Catch 2 AP không tự fit vào sunny peak, nên opportunity vẫn cạnh tranh;
- A6 không cần tăng crop workload chỉ để tiêu AP như A7.

`A6` là **next paper baseline** vì nó nằm đúng workload threshold, không vì midpoint số học. Exact M/E/B/Depth/Catch days phải được rerun sau khi Project quantity/Work được bracket; vòng này không nội suy ngày giả giữa A5/A7.

## 4. Season-length narrowing

### 4.1. S12 — retain as boundary stress, reject as baseline

S12 tạo evidence tốt cho commitment miss nhưng cắt toàn bộ later recovery band:

- common Catch D14 không có;
- `DL-6` D13/D14 và `DL-8` D15/D16 đều ngoài boundary;
- Person/Grove recovery D16–D18 không có;
- A5 Producer không có đủ room cho full Project path.

Miss vẫn recover ở save/Season sau, nên S12 không unsafe. Nhưng làm default sẽ khiến long-horizon relationship và nhiều recovery context luôn cross-Season theo cấu trúc. **Giữ S12 làm short-boundary stress, không làm baseline kế.**

### 4.2. S15/S16 — edge comparators, không đủ recovery margin

Không chạy full route mới; đây là calendar coverage check:

| Length | `DL-6` | `DL-8` | D14–D18 recovery cycle | Risk |
| --- | --- | --- | --- | --- |
| S15 | Fit D13/D14 | D16 route miss | Chỉ Catch D14 | `DL-8` straddle boundary |
| S16 | Fit | Fit tại D15/D16 | Catch D14 + P D16 | Zero margin cho D16; thiếu Herb/Q D17/D18 |

S15/S16 có thể trở lại nếu final source lead time ngắn hơn hoặc opportunity schedule đổi. Với current fixtures, chúng cắt recovery cycle và biến one-day variance/T1 market delay thành boundary verdict.

### 4.3. S18 — recovery-horizon baseline

S18 chứa:

- `DL-6` D13/D14 với 4–5 ngày room;
- `DL-8` D15/D16 với 2–3 ngày room;
- full third opportunity sequence D14/D16/D17/D18;
- A5 dense `PJ-B` D17 comparator;
- A5 sparse Tallbean output khoảng D17.

S18 không tự sửa A5 overload: sparse A5 `PJ-B` vẫn có thể trượt horizon. Vì vậy longer Season giữ recovery nhưng không thay daily capacity. Đây là separation tốt giữa hai axes.

`S18` là **next paper baseline**. Nó chưa phải final Season length; nó là shortest tested arm hiện có chứa full recovery cycle và cả hai carried delivery sensitivities mà không đặt `DL-8` ngay ngoài boundary.

## 5. Combined baseline

### 5.1. Carry

```text
Next paper baseline: A6 / S18
Weather remains two explicit phase arms: WD and WS
Source cadence remains DL-6 / DL-8 sensitivity
Market baseline remains T0; T1 stays comparator
```

Không gộp Weather thành một average rate. Calendar 01 đã chứng minh phase alignment quan trọng ngang frequency.

### 5.2. Regression cells retained

| Cell/arm | Vai trò sau narrowing |
| --- | --- |
| `A5 / S12 / WS` | overload + short-boundary stress |
| `A5 / S18 / WD` | low-AP recovery/full-path comparator |
| `A7 / S18 / WD` | surplus/Processing-dominance guard |
| `A6 / S18 / WD` | next dense baseline |
| `A6 / S18 / WS` | next sparse/phase baseline |

Không cần rerun mọi permutation ở mỗi bước. Project quantity/Work rerun kế dùng hai A6 baseline cells và ba regression roles trên khi một result chạm failure boundary.

## 6. Cross-system checks

### 6.1. Weather

- A6 sunny pre-relief peak có zero slack, nên Rain giải phóng actual planning space.
- A6 không bảo đảm Weather sẽ phân biệt mọi route; Connector được phép Weather-neutral.
- WD/WS đều phải chạy vì cùng frequency khác phase vẫn có thể đổi result.

### 6.2. Collection

- S18 giữ cả `DL-6` và `DL-8` inside horizon.
- A6 không accelerate delivery; AP surplus không biến source timer thành grind race.
- Source offer persist, nên AP collision D13–D16 không fail collection.

### 6.3. Project

- A6 phải được rerun với current CP6 Stone Search/Extract + Sleep refresh.
- `PJ-M`/`PJ-B` tiếp tục no-fee; `PJ-X` giữ selected permit comparator.
- Exact material quantities và Work không được lấy từ A5/A7 cũ bằng interpolation.

### 6.4. Processing/opportunity

- One-slot Processor vẫn có competition vì pre-relief peak không có spare AP.
- Post-relief 1 AP slack có thể làm Load hấp dẫn nhưng không auto-fit mọi output.
- Catch 2 AP và Gift packages vẫn có thể displace flexible Work/Load.

## 7. Failure guards

- Không tăng farming workload để “cân” A6 trước khi rerun actual content.
- Không chọn S18 để biến mọi Project thành same-Season requirement; outside-horizon vẫn recover.
- Không đổi `DL-6` thành final six-Sleep rule chỉ vì nó fit S18.
- Không thêm filler Mine/Person/Processor để dùng AP rảnh.
- Không dùng total AP alone; log peak overflow, missed opportunity và recovery timing.
- Không collapse WD/WS thành average Rain percentage.

## 8. Verdict

1. `[PAPER BASELINE]` Narrow AP/day từ A5/A7 bounds sang **A6**. A6 fit đúng pre-relief 6 AP peak và giữ zero-slack choice; A5 remains overload stress, A7 remains surplus guard.
2. `[PAPER BASELINE]` Narrow Season length sang **S18**. Nó chứa full D14–D18 recovery sequence và cả `DL-6`/`DL-8` với margin; S12 remains boundary stress.
3. `[DIRECTION]` Baseline rerun pair là `A6-S18-WD` và `A6-S18-WS`; Weather phase chưa chốt.
4. `[DIRECTION]` Giữ `DL-6`/`DL-8`, T0/T1 và A5/A7 dưới dạng sensitivity/regression arms, không promote comparator thành luật cuối.
5. `[OPEN]` Final AP/day, Season length, Weather cadence, Project quantities/Work và source lead time vẫn cần quantitative rerun/value validation. “Paper baseline” không phải product lock.
6. `[NEXT]` Rerun exact Project quantities/Work trên A6/S18 với current CP6 Stone source + Sleep refresh; sau đó kiểm Produce/Fish raw targets và Processing dominance dưới one-slot baseline.

Không cần product-owner choice ở bước narrowing: A6/S18 là arm duy nhất trong current evidence vừa tránh hai failure bounds vừa giữ full recovery horizon. Product-owner decision trở lại khi quantitative Project rerun tạo hai viable cost/content bundles.

Follow-up [Project quantity/Work A6–S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md) đã chạy exact A6 traces dưới WD/WS. `Q4` responsive và `Q6` deliberate đều pass, `Q8` long-build bị reject; product owner chọn `Q4`. [Raw-target / Processing rerun 05](RAW-TARGET-PROCESSING-A6-S18-RERUN-05.md) sau đó hoàn tất mechanical follow-up.
