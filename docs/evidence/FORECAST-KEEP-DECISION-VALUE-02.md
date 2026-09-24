# Forecast / Keep decision value 02 — Weather horizon versus target horizon

Ngày chạy: 2026-09-22.

Trạng thái: paper sensitivity tiếp nối [Storage/Keep sensitivity 01](STORAGE-KEEP-SENSITIVITY-01.md), [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) và [Weather/Season global UI v0.1](../../paper-tests/weather-season-global-ui-v0.1/README.md). Analytical `H-C` improved item ranking, nhưng informed-owner review reject việc biến nó thành global `Tomorrow Targets` UI. Không chốt storage cap, price, Weather cadence, request content hoặc runtime UI.

Superseding note 2026-09-23: any PJ-X permit example is historical after owner-selected X0 no-fee; the no-global-agenda and native-inspect conclusions remain active.

TV information/presentation correction 2026-09-23: the product owner clarified that TV is a Farmhouse sub-card. Playing it on day D costs 0 AP and reports D+1 Weather on TV; Sleep uses that forecast. If TV was skipped, Sleep determines D+1 Weather without opening TV. The `H-W` cells below test the value of Tomorrow Weather **after proactive TV use**. The Sleep decision does not give that information before D's allocation choices. The global rail now carries only Season, Today Weather and AP; its former Tomorrow field is removed. The filled-rail UI result is historical presentation evidence, not the current information contract.

## 0. Owner scope correction

[Target-horizon announcement v0.1](../../paper-tests/target-horizon-announcement-v0.1/README.md) cho thấy `Tomorrow Targets` làm kế hoạch tự quyết của player đọc như việc system yêu cầu làm ngày tiếp theo. Do đó:

- `H-C` chỉ còn là analytical comparator khi một external context **thật sự đã tồn tại**;
- không tạo universal future-target forecast hoặc recommended-action list;
- player tự đặt mục tiêu từ options, inventory, Weather và world state đang thấy;
- actual Person availability, accepted request hoặc Processor completion chỉ tự hiển thị tại source/card/inspect của nó;
- Global rail still describes world state rather than prescribing action; the later owner correction removes its Tomorrow field and puts D+1 forecast on TV.

## 1. Câu hỏi

The historical UI fixture displayed `Today + Tomorrow Weather`; the owner later moved Tomorrow forecast access to TV only. This sensitivity asks a different question:

> Forecast đó có đủ để biến `Keep` thành lựa chọn đọc được trước `Sell / Gift / Process`, đặc biệt khi storage bị giới hạn không?

Pass không có nghĩa `Keep` phải thắng. Pass nghĩa player có thể biết **vì sao** giữ item hoặc dùng item ngay, thay vì đoán target ẩn.

## 2. Ranh giới kế thừa

### 2.1. Giữ cố định

- Buy/Sell dùng `T0`: standard transaction `0 AP` trong paper baseline.
- Processor dùng một slot, Load `1 AP`, hoàn tất sau một Sleep và giữ identity/category; fixture sell uplift là `+2G`.
- Gift/Project/Process consume item; collection record không consume.
- `S∞`: không cap, không perish. `S4`: tối đa bốn commodity item-unit cuối ngày, không perish.
- Không chạy lại `P1`; perishability đã làm Sell/Process dominate và không phải baseline.
- Miss target thông thường trì hoãn tới recovery sau, không fail save.
- Current global rail chỉ chứa Season, Today Weather và AP. Tomorrow Weather appears on TV after proactive use; if TV is skipped, Sleep determines it without opening TV. Không thêm request/Person/Project vào rail.

### 2.2. Không được suy ra

- `Today + Tomorrow` không phải forecast depth cuối cho mọi subsystem.
- Target forecast không mặc định reveal exact reward hoặc toàn schedule.
- Request trong test là fixture kiểm compatibility, không phải content mới được duyệt.
- Kết quả không authorize runtime implementation hoặc chọn cap 4.

## 3. Information arms

| Arm | Thông tin trước allocation | Vai trò |
| --- | --- | --- |
| `H0` | Today state only | Control: Keep dựa vào generic uncertainty |
| `H-W` | Today Weather + D+1 forecast on TV after proactive 0 AP use | Đo Weather-only planning value khi forecast đã được reveal trước allocation |
| `H-C` | `H-W` + known external context category/state/timing + recovery | Analytical comparator; chỉ hợp lệ nếu context đã thật sự tồn tại, không phải system-generated player target |
| `H-X` | `H-C` + exact item và exact reward | Over-information comparator |

`H-C` không authorize một planning UI. Sau owner correction, nó chỉ mô tả information có thể đọc từ chính external context card/inspect khi context đó tồn tại.

## 4. Pass criteria

Một arm tạo Keep decision value nếu:

1. ít nhất một allocation đổi vì target/timing đã biết;
2. player có thể nêu compatibility nào được giữ hoặc mất;
3. `Keep` không thắng mọi context;
4. exact reward không cần thiết nếu category/state/context đã đủ phân biệt;
5. dưới `S4`, forced allocation không còn là đoán giữa các item không thể so.

Weather forecast có thể pass planning value nhưng vẫn fail storage ranking; hai kết quả này phải ghi riêng.

## 5. Decision cells

### 5.1. C1 — liquidity control: two Shortroot

State fixture:

- wallet `4G`;
- acquire 2 Fresh Shortroot;
- replant 2 Seed tốn `4G`;
- selected optional-context `PJ-X` permit `8G` có thể trả hôm nay;
- Tomorrow có recoverable target nhận `Fresh · Crop`.

| Allocation | Gold sau replant | Option giữ lại | Consequence |
| --- | ---: | --- | --- |
| Sell 2 | `8G` | none | trả `PJ-X` permit hôm nay |
| Sell 1 + Keep 1 | `4G` | Tomorrow Fresh Crop target | trì hoãn fee |
| Sell 1 + Process 1 | `4G`, rồi `+6G` sau Sleep khi bán | Processed Crop | mất Fresh target; fee trễ |

Kết quả theo horizon:

- `H0`: Keep là flexibility mơ hồ; Sell 2 có immediate optional-context target rõ.
- `H-W`: Tomorrow Weather không cho biết Shortroot có target; allocation không đổi.
- `H-C`: `Fresh Crop · Tomorrow · recurs later` làm Sell 1 + Keep 1 thành tradeoff legible, nhưng không dominate Sell 2 vì `PJ-X` timing vẫn có value.
- `H-X`: exact item/reward không cần để đọc core choice trong cell này.

`S4` không tạo pressure ở hai item; result giống `S∞`. Đây là control chứng minh forecast không tự làm cap cần thiết.

### 5.2. C2 — Fresh Herb versus Process

State fixture:

- 1 Fresh Wild Herb;
- Processor empty, `1 AP` có thể Load hôm nay;
- không có Gold sink cấp bách;
- Tomorrow Nell context nhận `Fresh · Forage · Herb`; miss quay lại ở schedule sau;
- Tomorrow Weather là Rain.

| Arm | Đọc hợp lý trước Sleep |
| --- | --- |
| `H0` | Process có `+2G` known value; Keep không có target đọc được |
| `H-W` | Rain cho biết ngày mai có thêm AP room, nên defer có thể hợp lý, nhưng không cho biết **Herb** cần giữ Fresh |
| `H-C` | Keep Fresh Herb để Gift ngày mai cạnh tranh rõ với Process; processor idle hôm nay có thể là lựa chọn đúng |
| `H-X` | Exact reward không cần thêm để phân biệt Fresh Gift với Processed output; Heart rule chung đã biết |

Weather forecast có timing value thật nhưng không tự cung cấp compatibility value.

### 5.3. C3 — Processed target requires action today

State fixture:

- 1 Fresh Shortroot;
- Processor empty;
- Tomorrow có recoverable target nhận `Processed · Crop`;
- output chỉ Ready sau một Sleep.

| Arm | Allocation |
| --- | --- |
| `H0` | Sell/Keep/Process dựa vào uplift chung; không biết deadline |
| `H-W` | Tomorrow Weather không cho biết cần Load hôm nay |
| `H-C` | `Processed Crop · Tomorrow` + one-Sleep recipe làm Load hôm nay thắng trong context này |
| `H-X` | Exact item/reward không đổi prerequisite; state + timing đã đủ |

Cell này chứng minh native inspect của một actual context phải nêu accepted **state** và earliest timing, không chỉ category `Crop`.

### 5.4. C4 — `S4` cross-system collision

State trước Sleep:

- 1 Fresh River Minnow;
- 1 Fresh Wild Herb;
- 1 Fresh Shortroot;
- 1 Raw Wood;
- vừa acquire 1 Fresh Rain Eel;
- storage cần giảm từ `5` xuống `4`;
- Tomorrow có recoverable `Fresh · Forage · Herb` context.

| Arm | `S4` result |
| --- | --- |
| `H0` | Một item phải Sell/Process/contribute nhưng ranking là đoán target ẩn |
| `H-W` | Tomorrow Rain mô tả opportunity/AP context, vẫn không phân biệt Herb với Crop/Wood/current Fish cho target ngày mai |
| `H-C` | Wild Herb được reservation có lý do; player chọn allocation trong bốn item còn lại theo known liquidity/Project/Process context |
| `H-X` | Exact reward có thể đổi tie-break, nhưng không cần để biết Herb là unit không nên đẩy khỏi Fresh state |

`H-C` làm cap pressure **legible**; nó không chứng minh cap pressure **desirable**. Peak day và cross-system carry vẫn có nguy cơ double-punish Producer.

### 5.5. C5 — Weather-only positive control

State fixture:

- hai crop sẽ cần tổng `2 AP` Water nếu Tomorrow Sunny;
- Today chỉ còn `1 AP`;
- Tomorrow forecast là Rain;
- player đang giữ Fresh Crop và Fresh Herb; không target nào được announce trước.

`H-W` cho biết Tomorrow không cần `2 AP` Water, nên player có thể trì hoãn một Load/Gift/market action và Keep item qua Sleep dưới `S∞`. Đây là planning value thật của Weather.

Nhưng nếu `S4` buộc chọn một trong nhiều item, Rain không nói Crop hay Herb có future compatibility cao hơn. Weather forecast giúp **when**, không luôn giúp **which item**.

## 6. Cross-cell result

| Câu hỏi | `H-W` Weather only | `H-C` category/state/context | `H-X` exact |
| --- | --- | --- | --- |
| Điều chỉnh AP/timing ngày mai | Pass | Pass | Pass |
| Biết item nào cần giữ Fresh/Raw | Fail ngoài Weather-specific target | Pass | Pass |
| Chuẩn bị Processed output đúng hạn | Fail | Pass | Pass |
| Làm `S4` allocation bớt đoán | Fail | Pass | Pass |
| Cần exact reward để tạo core choice | — | Không | Thường dư |

`H-C` là arm nhỏ nhất pass cả bốn decision cells. `H-X` không tạo thêm core decision trong sample và có nguy cơ spoil content/reward sớm.

## 7. Information contract for an actual external context

Nếu một Person/request/Processor context thật sự tồn tại và player inspect nó, preview của **context đó** cần:

1. **when** — Today, Tomorrow hoặc later band;
2. **accepted state/category/context** — ví dụ `Fresh · Forage · Herb` hoặc `Processed · Crop`;
3. **recovery cue** — recurring/later hay expiring;
4. **required preparation lead** nếu target cần Process/Sleep trước.

Không mặc định cần:

- exact reward;
- full future schedule;
- exact item khi category/state đã phân biệt đủ;
- nhét target forecast vào Weather/Season rail;
- tổng hợp optional actions thành `Tomorrow Targets` hoặc to-do list.

Không tạo target horizon surface riêng. Player plan vẫn implicit/self-directed; actual context information sống ở Person/request/Processor card hoặc inspect layer thuộc source của nó.

## 8. Storage verdict

1. `[PAPER RESULT — CONDITIONAL ON PROACTIVE TV]` D+1 Weather có planning value cho AP/opportunity timing sau khi player xem TV, nhưng không đủ làm generic owned-item ranking.
2. `[PAPER RESULT]` Với external context đã tồn tại, category + state + timing + recovery đủ để inspect compatibility; exact reward không cần trong sample.
3. `[PAPER RESULT]` `Today + Tomorrow` horizon đủ cho bốn allocation cells này; không có evidence cần 3-day exact forecast làm default.
4. `[HYPOTHESIS RETAINED]` `S∞`, no-perish vẫn là baseline sạch. Visible Weather/actual-context information có thể tạo Keep value mà không cần cap.
5. `[HYPOTHESIS RETAINED]` `S4` chỉ bớt đoán khi actual external context đủ rõ; nó vẫn có double-pressure risk và chưa được chọn.
6. `[INFORMED-OWNER CORRECTION]` Không tạo universal future-objective dashboard, `Tomorrow Targets` surface hoặc system agenda để cứu storage design.

## 9. Handoff

Không cần target-announcement revision. Chỉ kiểm compatibility tại native source khi actual Person/request/Processor context được thiết kế; player không nhận agenda ngày mai.

Follow-up completed: [Storage recurring-density slice 03](STORAGE-RECURRING-DENSITY-SLICE-03.md) giữ `S∞` no-perish làm baseline. Trong comparator có actual context, `S4` thêm một guided reservation event nhưng cũng ép two-unit harvest-day housekeeping; cap chưa được chọn.

Presentation follow-up [Target-horizon announcement v0.1](../../paper-tests/target-horizon-announcement-v0.1/README.md) bị informed owner reject ở premise và được giữ làm audit trail. Không arm nào được promote.
