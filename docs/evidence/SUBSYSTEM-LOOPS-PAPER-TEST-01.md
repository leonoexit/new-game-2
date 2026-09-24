# Subsystem loops paper test 01 — Fishing, Mine và Processing

Ngày chạy: 2026-09-21.

Trạng thái: minimal-loop test tiếp nối [Year 1 route coverage test 01](YEAR-1-ROUTE-COVERAGE-TEST-01.md). Mục đích là thay placeholder bằng ba loop có objective shape khác nhau; không thiết kế content đầy đủ, combat, recipe list hoặc balance Year 1.

> **Historical mechanics warning (2026-09-22):** Mine section giữ `Safe Tunnel / Veiled Vein` như evidence của vòng thử cũ, không phải current grammar. [Mine/Fishing contract 01](../current/MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) tách Mine thành `Direct Descent` (`Depth +1`), `Search Side Tunnel` (reveal source cùng tầng) và `Exposed Ore` (extract source); descending không tự sinh Stone.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Fishing locations có thể gồm river/lake/sea và được biểu diễn bằng card/gateway.
- Mine là một card/area quan trọng có thể mở nội dung bên trong.
- Game không dựa vào movement trên seamless map.
- Objective không được đồng loạt biến thành delivery bundle.
- Missing opportunity thường trì hoãn, không phá save.
- Card/group có thể mở area để bàn không quá tải.

Người dùng chưa chốt fishing resolution, mine depth, hazard, processing, recipe, số location, season/weather pool hoặc subsystem nào mở trước.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Connector cần một progression path độc lập khỏi farming.
- Collector cần reward đổi verb/source thay vì chỉ tăng counter.
- Processing nên nối output từ nhiều route.
- Person ability là modifier tùy chọn, không phải prerequisite.
- Paper simulation trước code/prototype.

### 1.3. Giả thuyết cần thử

1. Fishing có thể dùng một commitment window ngắn và mastery record thay vì Project nộp cá.
2. Mine có thể dùng persistent depth và checkpoint thay vì recipe unlock.
3. Processing có thể tạo conversion choice bằng AP + delay + slot limit.
4. Ba loop có thể nối economy mà vẫn giữ item identity và không bắt mọi route qua farming.

### 1.4. Fixture/số tạm

- 6 AP/ngày.
- Hai crop, nếu được chăm, dùng 2 AP trên Sunny day và 0 trên Rain.
- Fishing opportunity cần 2 Progress trong cùng ngày; mỗi Fish action 1 AP.
- Mine Descend tốn 1 AP và luôn tăng 1 Depth.
- Mine checkpoint mỗi 3 Depth trong fixture.
- Processor có 1 slot; Load tốn 1 AP và output hoàn tất sau Sleep.
- Mọi reward, sell value, mastery threshold và card pool bên dưới đều là số thử.

## 2. Fishing loop FSH — timing và repeated-use mastery

### 2.1. Action grammar thử

    River/Lake/Sea gateway     mở location group, 0 AP
    Daily Catch card           hiện condition và reward có thể bắt
    Main Person + Rod → Catch  1 AP, thêm 1 Catch Progress
    Đạt 2/2 trong ngày         nhận Fish item + ghi mastery
    Sleep khi chưa đủ 2/2      opportunity rời đi; không mất vĩnh viễn

Catch card được nhìn thấy trước khi commit. Loop không dùng hidden roll ở baseline; Weather/Season thay pool opportunity.

### 2.2. Vì sao dùng two-step commitment

- Một fish chiếm một block 2 AP thay vì là source phẳng 1 AP.
- Sau action đầu, người chơi phải quyết định hoàn tất hôm nay hay chấp nhận mất 1 AP progress tạm.
- Person/tool sau này có thể thay requirement, giữ progress hoặc đổi target mà không cần tăng payout thuần.

Rủi ro: nếu luôn hiển nhiên phải hoàn tất sau AP đầu, action đầu chỉ là thao tác thừa. Cần preview toàn bộ cost từ trước; hai action chỉ có ý nghĩa khi interruption/opportunity cạnh tranh có thể xuất hiện hoặc khi ability thay đổi bước hai.

### 2.3. Paper days

| Day type | Việc farming | Fishing | Việc khác | Tổng |
| --- | ---: | ---: | ---: | ---: |
| Sunny, hai crop | Water 2 | Catch one fish 2 | Work 1 + opportunity 1 | 6 |
| Rain, một location | 0 | Catch one fish 2 | Còn 4 AP cho Mine/Person/Project | 2 + 4 spare |
| Sunny harvest burst | 4–6 | Catch 2 | Có thể vượt 6 | Buộc chọn |
| Route không farming, hai location mở | 0 | Catch tối đa hai fish 4 | Còn 2 AP | 6 |

Fishing tạo một đích AP rõ trên Sunny/Rain nhưng không tự lấp toàn bộ Rain day nếu chỉ có một location. Mở thêm location tăng opportunity, không tăng nghĩa vụ.

### 2.4. Mastery objective shape

Fixture:

- Record first catch tự động, không consume Fish.
- Catch tại cùng location trong hai condition khác nhau mở Read the Water.
- Read the Water cho xem catch option kế tiếp hoặc chọn giữa hai opportunity một lần/ngày.

Đây là repeated-use/discovery, không phải nộp ba Fish. Reward thay information/source choice.

Missing một Weather/Season condition chỉ trì hoãn mastery tới lần condition quay lại. Không khóa việc tiếp tục Fish ở location.

### 2.5. Kết quả Fishing

- Objective shape khác Project/delivery.
- Có entry độc lập: Rod + location, không cần crop.
- Có thể nối collection, Gift, Sell hoặc Processing sau khi catch.
- Two-step cost cần sensitivity với phương án 1 AP → 1 fish và 1 AP → progress persistent; chưa đủ để chốt.

## 3. Mine loop MIN — persistent depth và optional reveal

### 3.1. Action grammar thử

    Mine gateway                 mở current-depth group, 0 AP
    Hai Route card               một safe/known, một veiled/optional
    Main Person + Tool → Route   1 AP
    Kết quả bắt buộc             Depth +1
    Kết quả phụ                  Stone/Ore/empty/condition theo Route
    Mỗi 3 Depth                  checkpoint + source/context mới
    Sleep                        giữ Depth; không reset run

Depth progress luôn deterministic. Hidden/reveal chỉ ảnh hưởng reward phụ, không quyết định người chơi có được tiến hay không.

### 3.2. Hai Route shape

| Route | Thông tin trước action | Kết quả fixture |
| --- | --- | --- |
| Safe Tunnel | Biết chắc common Stone | Depth +1 + Stone |
| Veiled Vein | Biết category, chưa biết exact item | Depth +1 + Ore/empty/rare |

Người chơi không cần Person A để tiến. A có thể preview exact result của Veiled Vein; nếu không có A, Safe Tunnel vẫn là đường planning.

### 3.3. Paper days

| AP dành cho Mine | Depth đạt từ 0 | Reward phụ | Ý nghĩa |
| ---: | ---: | --- | --- |
| 1 | 1 | Một common/roll | Chạm loop, chưa checkpoint |
| 2 | 2 | Hai route result | Có progress persistent, không mất qua Sleep |
| 3 | 3 | Checkpoint đầu | Một world-state milestone trong một Rain window |
| 5 | 5 | Qua checkpoint, gần mốc hai | Rain day có thể trở thành expedition |

Nếu Sunny day có 2 AP Water + 1 opportunity, người chơi còn 3 AP và có thể chạm checkpoint. Rain giải phóng thêm AP để đi sâu hoặc rời Mine sang branch khác.

### 3.4. Checkpoint reward fixture

- Depth 3: mở deterministic Ore Vein source.
- Depth 6: mở một Mine sub-area hoặc Tool context.
- Depth không reset; checkpoint không phải elevator/travel discount vì game chưa có travel cost.

Reward là source/context mới, không phải Gold chest đơn thuần. Con số 3/6 chỉ để kiểm tra cadence.

### 3.5. Risk audit

- Nếu Veiled luôn có expected value cao hơn Safe, choice giả.
- Nếu hazard làm mất Depth/item lớn, Mine có thể tạo punishment không phù hợp life sim.
- Nếu Depth chỉ là counter và checkpoint chỉ trả resource, objective vẫn là grind số.
- Cần checkpoint thay rule/source/context để mỗi layer khác hơn, nhưng chưa thiết kế tầng cụ thể.

### 3.6. Kết quả Mine

- Connector có area progression thật không qua farming.
- Person A có lợi ích nhưng không bắt buộc.
- Persistent Depth bảo đảm missed day chỉ làm chậm.
- Loop chưa cần combat; có thể thêm sau nếu chứng minh được vai trò riêng.

## 4. Processing loop PRC — conversion, delay và slot

### 4.1. Action grammar thử

    Input item + Processor      preview recipe/output
    Load                       1 AP + consume input
    Processor occupied          1 slot
    Sleep                       output hoàn tất
    Collect output              0 AP trong fixture

Processor là card/building/context. Một slot tạo lựa chọn giữa item inputs; delay làm output không dùng được ngay hôm đó.

### 4.2. Cross-route recipe fixtures

| Input | Output | Giá trị thử | Identity giữ lại |
| --- | --- | --- | --- |
| Produce | Preserve | Sell 3G → 5G | Food/crop source |
| Fish | Dried Fish | Sell 3G → 5G | Fish/source/location |
| Herb | Prepared Herb | Gift/Project flexibility | Forage/resource source |

Không dùng một generic Processed Goods cho mọi input. Output cần giữ category để Sell/Gift/collection/recipe tiếp tục khác nhau.

### 4.3. AP payback thử

Với Produce:

    Sell fresh now            3 Gold, 0 AP
    Load Processor            1 AP + item
    Sau Sleep sell output     5 Gold
    Marginal gain             +2 Gold đổi lấy 1 AP + delay + slot

Nếu 1 AP có thể kiếm hơn 2 Gold hoặc cứu Person opportunity, Process không luôn đúng. Nếu Rain day đang dư AP, conversion hấp dẫn hơn. Giá 3/5 chỉ là fixture.

### 4.4. Slot choice

Harvest day tạo:

- 1 Produce cần Gold sớm cho Seed/Tool.
- 1 Fish có condition hiếm, có thể Gift hoặc record.
- 1 Herb dùng cho Project ngày mai.
- 1 Processor slot.

Người chơi phải chọn một input; giữ/sell/gift các item khác. Slot tạo opportunity cost mà không cần inventory cap tổng quát.

### 4.5. Unlock shape

Processing không nhất thiết mở bằng delivery Project. Hai shape cần test:

1. World-state repair: tìm Processor card hỏng, dùng một số action/material để đổi mặt sang hoạt động.
2. Discovery: lần đầu sở hữu hai input category reveal một conversion recipe/card.

Project investment vẫn có thể tồn tại, nhưng core progression sau unlock đến từ khám phá conversion và slot use, không phải liên tục nộp bundle.

### 4.6. Kết quả Processing

- Nối farming, Fishing và resource area vào cùng một decision surface.
- Tạo use alternative cho item mà không xóa Sell/Gift.
- Rain/free AP có đích đáng dùng.
- Cần kiểm tra queue dài hơn, multi-slot automation và recipe readability sau; chưa chốt.

## 5. Interaction với Person kernels

| Kernel | Fishing | Mine | Processing |
| --- | --- | --- | --- |
| A — preview | Xem catch tiếp theo nếu có hidden option | Xem Veiled result | Xem output variation nếu recipe uncertain; có thể không cần |
| C — hold | Giữ Catch opportunity qua Sleep | Giữ một Vein/opportunity | Giữ output/input window; dễ trùng storage |
| D — salvage | Thu lại bait/progress khi bỏ catch | Thu partial value từ route discard | Thu partial input khi hủy queue |
| I — prepare tomorrow | Chuẩn bị bait/location | Chuẩn bị route/tool | Load trước hoặc rút ngắn cycle |
| J — change Context | Đổi cách dùng location | Đổi rule tại checkpoint | Đổi recipe/context của Processor |
| K — split/focus | Chia progress giữa catches khó phù hợp | Chia progress/reward giữa route | Chia batch output; cần tránh tăng tổng |
| M — optional constraint | Catch với điều kiện để có option khác | Chọn route hạn chế để nhận outcome khác | Chấp nhận output constraint để đổi conversion |

Bảng chỉ kiểm tra context compatibility. Không gán Person cụ thể hoặc thiết kế combo.

## 6. Coverage matrix sau khi có loop thật

| Route | Entry không qua farming | Capability 1 | Capability 2 | Cross-link |
| --- | --- | --- | --- | --- |
| Producer | Không cần; route chọn farming | W1/E0 | Processing Produce | Mine resource có thể hỗ trợ Tool |
| Connector | R0 → Mine hoặc resource gateway | Mine Depth/checkpoint | Person A/C modifier | Ore/Herb → Processing |
| Collector | Fishing location hoặc farm nhỏ | Fishing mastery/Seed choice | Processing/record | Fish/Produce/Herb cùng tạo variety |

Connector và Collector không còn dựa hoàn toàn vào placeholder X2/C2. Tuy vậy Fishing mastery reward và Mine checkpoint content vẫn là fixture.

## 7. Objective-shape coverage

| Shape | Subsystem/node |
| --- | --- |
| World-state transformation | Farming Soil, repair Processor |
| Investment Project | Water relief/infrastructure |
| Repeated-use mastery | Fishing condition record |
| Persistent traversal/depth | Mine |
| Conversion/queue | Processing |
| Discovery/record | Collection |
| Timing/opportunity | Person, Catch card, batch area |

Graph hiện có nhiều shape hơn delivery bundle. Đây là structural pass, không phải balance/content pass.

## 8. Kết luận mới

### 8.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Fishing có thể tạo loop riêng bằng daily Catch commitment + condition mastery.** Nó không cần Project nộp cá làm core.
2. **Mine có thể tiến deterministic bằng Depth dù reward phụ có reveal.** Person A cải thiện lựa chọn nhưng không gate progress.
3. **Processing là bridge mạnh nhất giữa route.** AP + delay + one-slot conversion tạo item tension mà không cần objective trung tâm.
4. **Three-loop set sửa được nguy cơ Project hóa graph.** Mỗi subsystem dùng một objective shape khác.
5. **Two-step Fishing có nguy cơ là thao tác thừa.** Cần sensitivity trước khi giữ.
6. **Mine checkpoint phải thay rule/source/context.** Nếu chỉ trả resource, Depth là grind counter.
7. **Processed output phải giữ identity.** Generic high-value output sẽ làm mọi input chỉ còn là tiền.

### 8.2. Giả thuyết mạnh nhất để mang sang bước sau

- Test ba resolution cho Fishing: atomic catch, same-day two-step, persistent progress.
- Giữ Mine progress deterministic; chỉ reward/path phụ được hidden.
- Dùng Processor one-slot làm baseline cho conversion test.
- Cho ít nhất một entry vào Fishing/Mine không yêu cầu first harvest.
- Dùng các loop này trong một shared 6–8 day schedule để stress AP và Heart.

Tất cả vẫn là giả thuyết cần thử.

## 9. Fixture chưa được phép hóa thành luật

- Fishing 2 Progress cùng ngày và một Catch/location/day.
- Read the Water mastery requirement/reward.
- Mine 1 AP/Depth, checkpoint 3/6, Safe/Veiled rewards.
- Processor 1 slot, Load 1 AP, hoàn tất sau một Sleep.
- Sell values 3G/5G.
- Mọi recipe/category và area order.
- Không combat/hazard trong Mine fixture.

## 10. Bước tiếp theo

Chạy một shared-schedule stress test với:

- hai crop nhỏ;
- một Fishing opportunity;
- Mine depth;
- một Processor slot;
- Person A/C hoặc K opportunities;
- Sunny/Rain sequence.

So ba route để đo:

- subsystem nào nuốt AP;
- Rain có tạo kế hoạch khác;
- Process có luôn thắng Sell hay không;
- Person ability có target vừa đủ nhưng không bắt buộc;
- objective reveal trên một ngày có bị quá tải.

Shared schedule đã được chạy trong [Shared subsystem schedule test 01](SHARED-SUBSYSTEM-SCHEDULE-TEST-01.md). Ba route tạo AP profile khác nhau; same-day two-step Fishing không tạo quyết định nên atomic Catch 2 AP là giả thuyết mạnh hơn.

Checkpoint variation đã được chạy trong [MINE-CHECKPOINT-PAPER-SIMULATION-02.md](MINE-CHECKPOINT-PAPER-SIMULATION-02.md). Mixed checkpoints—source-vs-depth, speed-vs-yield và branch/context—tạo thay đổi luật rõ hơn resource staircase, trong khi Depth vẫn deterministic. Toàn bộ tên, cost và mốc vẫn là fixture.

Processing sensitivity đã được chạy trong [PROCESSING-VALUE-SENSITIVITY-02.md](PROCESSING-VALUE-SENSITIVITY-02.md). Vùng fixture mạnh nhất hiện tại là Load 1 AP, complete sau một Sleep, one slot và recipe-specific identity/value; zero-AP hoặc same-day positive uplift dễ thành default.
