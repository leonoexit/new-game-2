# Storage/Keep sensitivity 01 — no cap, small cap và perishability arm

Ngày chạy: 2026-09-22.

Trạng thái: paper sensitivity nối [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) với [Content-minimum registry 01](CONTENT-MINIMUM-REGISTRY-01.md). Mọi capacity, horizon và spoil rule dưới đây là `[FIXTURE]`; không chốt inventory system.

## 1. Ranh giới

### 1.1. [DECIDED]

- Save tiếp tục qua nhiều năm; item/state không mặc định biến mất ở Year boundary.
- Fresh/Raw và Processed là state/tag khác nhau; Processed không tự hợp mọi target Fresh/Raw.
- Gift/Project/Process consume item khi commit; collection record lần đầu không consume.
- Recovery edge phải tồn tại; thiếu target/opportunity chỉ trì hoãn tới lần sau, không làm fail save.

### 1.2. [DIRECTION]

- Keep cần option value đọc được: forecast target, compatibility hoặc timing—not bonus vô cớ.
- Storage pressure không được âm thầm biến mọi subsystem thành inventory management.
- Perishability chỉ là arm riêng; không được giả định để ép Sell/Process.
- Tool, Person, Gold, active Project progress và item đang nằm trong Processor queue không chiếm commodity storage trong test này.

## 2. Arms

| Arm | Rule |
| --- | --- |
| `S∞` | Không cap commodity storage; Fresh không perish |
| `S4` | Cuối ngày giữ tối đa 4 item-unit Fresh/Processed/Material; stack quantity vẫn chiếm theo unit; không perish |
| `P1` | Dùng `S∞`, nhưng Fresh mất `Fresh` sau một Sleep nếu chưa allocate; đây là destructive stress arm, không baseline |

Trong `S4`, player không discard ngầm. Trước Sleep phải Sell, Gift, load Process, contribute Project hoặc chọn bốn unit Keep. Exact preview nêu item nào rời storage và kết quả.

## 3. Four pressure snapshots

### 3.1. [FIXTURE] First harvest

State: 2 Fresh Shortroot, 0 material retained, first replant cần 4G.

| Arm | Available allocations | Pressure |
| --- | --- | --- |
| `S∞` | Sell/Gift/Process/Keep cả hai | Keep miễn capacity nhưng vẫn mất 4G liquidity nếu không Sell |
| `S4` | Như `S∞`; còn 2 slot | Không tạo decision mới |
| `P1` | Sell/Process hôm nay hoặc mất Fresh target sau Sleep | Process/Sell bị đẩy quá mạnh trước khi target horizon rõ |

Kết quả: small cap không sửa first-output choice. Liquidity + target preview đã đủ tạo tension; perishability thêm urgency cưỡng ép.

### 3.2. [FIXTURE] Project-material overlap

State: giữ 1 Wood + 1 Ore cho `PJ-M`, sau đó harvest 2 Shortroot.

| Arm | End-of-day state nếu Keep mọi thứ | Consequence |
| --- | --- | --- |
| `S∞` | 4 unit | Hợp lệ; player giữ cả relief route và Fresh option |
| `S4` | 4/4 | Hợp lệ nhưng storage đầy; output kế tiếp buộc allocation |
| `P1` | 2 material + Fresh đổi state | Fresh request/Gift có thể bị mất chỉ vì Sleep |

`S4` bắt đầu tạo forecast value: player cần biết output/opportunity kế tiếp trước khi giữ đủ bốn. Nó chưa tạo forced sale ở chính snapshot này.

### 3.3. [FIXTURE] Harvest burst + cross-system carry

State: 1 Wood + 1 Stone đang giữ; harvest 4 Fresh Crop trong một burst.

| Arm | Unit cần giữ | Result |
| --- | ---: | --- |
| `S∞` | 6 | Keep mọi option; Sell chỉ thắng vì liquidity/known target |
| `S4` | 6 vào cap 4 | Buộc allocate ít nhất 2 unit trong đúng peak day |
| `P1` | 6, trong đó 4 Fresh có timer | Process/Sell/Gift cạnh tranh gấp dù A5 vốn đã quá tải |

Trong A5, `S4` biến relief Project material thành đối thủ trực tiếp của crop inventory. Đây là cross-system choice thật, nhưng cũng có nguy cơ double-punish Producer: harvest peak đã thiếu AP, nay còn buộc transaction/target resolution trước Sleep.

### 3.4. [FIXTURE] Weather/source collision

State: 1 Fresh River Minnow, 1 Fresh Wild Herb, 1 Fresh Shortroot, 1 Wood; Rain Eel vừa acquire.

| Arm | Result |
| --- | --- |
| `S∞` | Có thể Keep cả 5, chờ exact Gift/request/Processing |
| `S4` | Một trong Fish/Herb/Crop/Wood phải rời storage; exact forecast quyết định hợp lý |
| `P1` | Ba Fresh family cùng timer; C Hold Open chỉ giữ opportunity, không cứu owned item |

`S4` có value nếu HUD cho forecast đủ để so target. Nếu target ẩn, quyết định chỉ là đoán và cap không tạo strategy.

## 4. Keep value matrix

| Information horizon | `S∞` | `S4` |
| --- | --- | --- |
| Không có target forecast | Keep là option mơ hồ; Sell thường dominate | Forced allocation thành đoán |
| Target category thấy trước 1–3 ngày | Keep có timing value | Tạo ranking hữu ích giữa item |
| Exact item/state target thấy trước | Keep cạnh tranh rõ với Sell/Process | Cap tạo deliberate reservation |
| Target có recovery xa hơn | Keep tùy liquidity | Có thể bỏ target hiện tại mà không fail save |

`[DIRECTION]` Forecast nên cho category/state/context + earliest timing, không cần reveal toàn bộ reward pool.

## 5. Person và subsystem overlap

- A Preview có thể cải thiện forecast optional result, nhưng required target compatibility vẫn miễn phí.
- C Hold Open giữ opportunity, không tăng owned-item storage và không reset perish timer nếu arm P1 tồn tại.
- K không tác động storage.
- Processor queue không là hidden extra storage: một slot chứa input; output ready phải được collect/allocate trước khi slot reuse.
- `S4` không được dùng để tạo target giả cho D Salvage hoặc biến J thành universal storage bypass.

## 6. Verdict

1. `[HYPOTHESIS]` `S∞` vẫn là baseline sạch nhất cho vòng package hiện tại; Keep chỉ có decision value khi target horizon được forecast.
2. `[HYPOTHESIS]` `S4` tạo lựa chọn thật ở harvest burst và cross-system carry, nhưng double-punish A5 nếu mọi allocation còn tốn AP.
3. `[DIRECTION]` Nếu test small cap tiếp, giữ Buy/Sell 0 AP và không thêm perishability trong cùng arm; nếu không sẽ không biết pressure đến từ đâu.
4. `[HYPOTHESIS]` `P1` làm Sell/Process default, làm Fresh request punitive và đè lên calendar scarcity. Không carry làm baseline.
5. `[DIRECTION]` Keep cần forecast 1–3 ngày theo category/state/context; không cần giá bonus riêng.
6. `[DIRECTION]` Cap nếu có nên mở rộng bằng capability rõ hoặc storage module, không bằng Person bắt buộc.

## 7. Chưa kết luận

- Inventory vô hạn hay cap 4.
- Stack chiếm slot theo unit hay theo stack ở game cuối.
- Fresh có perish hay không.
- Storage upgrade/cost.
- Target forecast chính xác bao xa.
