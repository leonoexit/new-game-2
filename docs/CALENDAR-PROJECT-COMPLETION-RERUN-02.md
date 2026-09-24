# Calendar/Project completion rerun 02 — no-fee relief và selected optional fee

Ngày chạy: 2026-09-22.

Trạng thái: paper rerun nối [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md), [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md), [Mine/Project triple-gate audit 01](MINE-PROJECT-TRIPLE-GATE-AUDIT-01.md) và current Mine grammar trong [Mine/Fishing contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md). Rerun chỉ kiểm completion timing của `PJ-M`, Expansion, `PJ-B` và `PJ-X`; không chốt AP/day, Season length, Weather cadence, price, recipe, source topology hoặc Project quantity.

Superseding note 2026-09-23: no-fee M/B and source timing remain evidence; the selected PJ-X permit arm is historical after owner-selected X0 no-fee in [permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md).

## 1. Phạm vi và correction quan trọng

Calendar 01 đã tính `PJ-M` và `PJ-B` bằng route bundle gồm material/source AP + Work, **không đưa Gold fee vào scheduler**. Vì vậy các ngày `M/E/B` của nó đã là timing của no-fee relief arm; không được mô tả như một fee-inclusive baseline rồi trừ Gold khỏi kết quả.

Rerun này làm hai việc:

1. xác nhận bốn decisive calendar cells dưới rule `PJ-M/PJ-B = material + Work, no fee`;
2. thêm Gold layer cho `PJ-X = material + Work + selected 8G permit` dưới `T0` market để xem fee đổi completion day hay chỉ đổi allocation.

Không chạy lại orientation, Weather/Season UI hoặc rejected target-horizon fixture.

## 2. Inherited boundaries

### 2.1. [DECIDED]

- Project contribution giữ qua Sleep/Season/Year; save không reset ở boundary.
- Project preview hiện material, Work và fee trước contribution đầu.
- Fee, nếu có, trả ở final commit.
- Base routes vẫn hoạt động nếu `PJ-X` bị trì hoãn hoặc bỏ qua.
- `Direct Descent` là action duy nhất tăng Depth; descending không tự sinh Stone.

### 2.2. [DIRECTION]

- `PJ-M` và `PJ-B` dùng material + Work, không fee, trong paper baseline kế.
- `PJ-X` giữ selected fee comparator vì chỉ mở optional context/source.
- Standard Buy/Sell dùng `T0 = 0 AP` trong vòng paper này; item/resource source vẫn tốn AP.

### 2.3. [FIXTURE]

- Bốn decisive cells: `5-12-S`, `5-18-D`, `7-12-S`, `7-18-D`.
- Producer giữ nguyên scheduler, crop commitments, Gift priority và route bundles của Calendar 01.
- `PJ-X`: 2 Wood + 1 Stone + 3 Work + 8G permit, để so trực tiếp với Connector trace cũ.
- Wallet đầu trace: 4G; Ore bán 5G; permit trả ở final commit.
- Một deterministic Stone-source action tốn 1 AP được dùng như **neutral source slot**. Vị trí/card/source thật chưa được định nghĩa; action này không gắn Stone trở lại `Direct Descent`.
- CP3 có một `Exposed Ore` sẵn sàng cho Extract; `1 AP → Ore`, Depth không tăng.
- Mine tối đa ba `Direct Descent` mỗi ngày trong trace.

Các quantity và giá trên chỉ là comparator. Đặc biệt, neutral Stone source là compatibility shim để rerun timing, không phải content authorization.

## 3. Producer — no-fee relief completion

`M/E/B` là ngày hoàn thành Water Trough / Expansion / Harvest Bench. `—` nghĩa chưa hoàn thành trong horizon; contribution không mất.

| Cell | `M / E / B` | Gold gate của M/B | Kết quả so với Calendar 01 |
| --- | --- | --- | --- |
| `5-12-S` | D8 / — / — | Không | Không đổi |
| `5-18-D` | D7 / D11 / D17 | Không | Không đổi |
| `7-12-S` | D5 / D7 / D11 | Không | Không đổi |
| `7-18-D` | D5 / D7 / D11 | Không | Không đổi |

### 3.1. Kết quả timing

- No-fee không làm milestone sớm hơn bảng Calendar 01 vì bảng cũ vốn chưa schedule fee.
- `5-12-S` vẫn là soft-lock stress cell: `PJ-M` hoàn thành D8 nhưng Expansion và `PJ-B` nằm ngoài horizon do workload/reveal gate, không phải do thiếu Gold.
- `5-18-D` vẫn đưa đủ M/E/B vào Season ở D7/D11/D17.
- Hai A7 cell vẫn đưa M/E/B vào D5/D7/D11; bỏ fee không sửa cảnh báo A7 rộng trong minimum content.
- Vì market `T0`, loại fee không “hoàn AP”. Nó loại một liquidity condition và tránh việc phải bán output/material chỉ để unlock relief.

### 3.2. First-harvest allocation

Economy fixture có wallet 4G và first replant hai Seed tổng 4G. Khi `PJ-M` không còn fee 8G:

- replant có thể dùng opening wallet mà không bắt buộc bán cả hai Shortroot;
- Fresh output có thể tiếp tục cạnh tranh giữa Sell, Gift, Process và Keep;
- Ore giữ tradeoff `PJ-M material vs 5G now`, thay vì vòng lặp bán chính Ore rồi lại thiếu Ore cho Project.

Đây là allocation change, không phải completion-day change trong scheduler hiện hành.

## 4. Connector — `PJ-X` selected fee

### 4.1. Fee funded bằng CP3 Ore

#### A5 trace

| Ngày | 5 AP route | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Direct Descent ×3 | Depth 3; đủ Wood |
| D2 | deterministic Stone source + Extract Exposed Ore + Work ×3; bán Ore ở `T0`; trả 8G | `PJ-X` complete D2; wallet 1G; Depth 3 |
| D3 | Direct Descent ×3 | Depth 6 |
| D4 | Person P package 2 AP + Direct Descent ×3 | Depth 9 |
| D5 | Direct Descent ×3 | Depth 12 |

#### A7 trace

| Ngày | 7 AP route | End state |
| --- | --- | --- |
| D1 | Wood ×2 + deterministic Stone source + Direct Descent ×3 | Depth 3; material đủ; 1 AP flexible |
| D2 | Extract Exposed Ore + Work ×3 + Direct Descent ×3; bán Ore ở `T0`; trả 8G | `PJ-X` complete D2; wallet 1G; Depth 6 |
| D3 | Direct Descent ×3 | Depth 9; 4 AP flexible |
| D4 | Person P package 2 AP + Direct Descent ×3 | Depth 12; 2 AP flexible |

| AP arm | `PJ-X` | Depth 12 | So với Connector trace cũ |
| --- | --- | --- | --- |
| A5 | D2 | D5 | Không đổi ngày |
| A7 | D2 | D4 | Không đổi ngày |

Permit không tự động tạo delay trong minimum trace vì opening wallet + một Ore sale đủ trả 8G, và CP3 Ore có thể lấy trước final commit. Cost thật là:

- 1 AP Extract;
- mất Ore option cho Sell sau, `PJ-M` cross-route hoặc Keep;
- wallet giảm từ 9G xuống 1G.

Vì `PJ-X` optional, người chơi có thể không trả permit và giữ Ore/base route. Đây là strategic allocation fork hợp lệ; completion D2 không biến Project thành bắt buộc.

### 4.2. Keep Ore counterfactual

Nếu player giữ Ore và bù 4G bằng hai extra Wood sale:

| AP arm | Earliest `PJ-X` | Lý do |
| --- | --- | --- |
| A5 | D3 | D2 cần Stone 1 + extra Wood 2 + Work 3 = 6 AP, vượt cap 5 |
| A7 | D2 | Sáu action fit; fee không đổi completion day |

Selected fee vì vậy phân biệt A5 khi player muốn giữ Ore, nhưng không bảo đảm Project trễ trong mọi route. Không nên mô tả 8G như một fixed “+N ngày” gate.

## 5. Source-grammar debt

Rerun phát hiện một contract gap giữa historical registry và current Mine grammar:

- `PJ-B`/`PJ-X` vẫn yêu cầu Stone;
- registry/economy cũ nói Stone đến từ Safe Mine route;
- current accepted Mine grammar nói `Direct Descent` không cho material và chỉ mô tả Search/Extract cho Ore;
- chưa có current native Stone source/card/timing.

Neutral 1 AP Stone source giữ phép so timing chạy được mà không phục hồi `Safe Tunnel → Stone`. Trước khi exact Project days trở thành content schedule, một vòng source audit phải chọn Stone đến từ source hiện hữu nào hoặc đổi Project requirement. Đây là content/system dependency, không phải lý do sửa Mine descent hay tạo runtime card ngay.

Follow-up [Mine later-discovery/source audit 03](MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md) chọn band-specific Search → Exposed Stone → Extract làm next paper arm. Dưới CP6 source access, `PJ-X` earliest timing thành A5 D3 / A7 D2; neutral shim D2/D2 không còn là preferred source model. Stone refresh/quantity vẫn open tại bước audit đó.

[Stone refresh / Project timing 05](MINE-STONE-REFRESH-PROJECT-TIMING-05.md) tiếp tục chọn persistent source refresh after Sleep làm baseline paper: Search một lần, later Stone Extract sau known recovery. Điều này giải availability cho cả `PJ-B` và `PJ-X`; exact Project quantity/Work/day vẫn open.

## 6. Verdict

1. `[HYPOTHESIS STRENGTHENED]` `PJ-M`/`PJ-B` no-fee baseline loại Gold gate mà không làm mất calendar pressure: workload, reveal timing, material allocation và non-bankable peaks vẫn phân biệt bốn cells.
2. `[HYPOTHESIS STRENGTHENED]` `PJ-X` selected fee tạo `open optional context vs keep/sell Ore` dưới fixture hiện tại; nó không nhất thiết trì hoãn D2.
3. `[DIRECTION]` Giữ Project fees selected, không universal. Không thêm fee lại vào relief chỉ để ép completion muộn.
4. `[DIRECTION]` Giữ các ngày D5/D7/D11... là fixture evidence, không promote thành exact Year 1 schedule.
5. `[DIRECTION]` Current Stone source dùng band-specific Search → exact Stone source → Extract; source persist và refresh after Sleep trong paper baseline kế. Exact quantity/checkpoint/cadence vẫn cần quantitative rerun.
6. `[OPEN]` Final AP/day, Season length, Weather cadence, Project quantity/Work, fee amount và source refresh vẫn chưa chốt.

## 7. Handoff

Calendar completion rerun đủ để đóng action item “no-fee relief + selected optional fee” ở mức paper. Workstream hệ thống kế tiếp là `COL-N`: một collection horizon dài hơn `COL-1`, nằm ngoài River root tableau, có recovery và không trở thành checklist bắt buộc/ngầm định completion.

Follow-up [Project quantity/Work A6–S18 rerun 04](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md) thay neutral Stone shim bằng CP6 Search → Exposed Stone → Extract + Sleep refresh và chạy exact A6/S18 dates. `Q4` responsive và `Q6` deliberate đều viable, `Q8` bị reject; product owner sau đó chọn `Q4` làm paper baseline.
