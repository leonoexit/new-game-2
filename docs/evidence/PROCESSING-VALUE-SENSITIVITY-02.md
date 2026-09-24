# Processing value sensitivity 02 — uplift, delay, slot và identity

Ngày chạy: 2026-09-21.

Mục đích: tìm vùng mà Processing là một alternative use thay vì nút “tăng giá trị miễn phí”. Đây là sensitivity paper test; không chốt recipe, Gold economy, slot count hoặc processor unlock.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Farming/Fishing/resource output cần nhiều đích có ý nghĩa, không tự động Sell.
- Gift tiêu item + AP và có thể tạo Person/Heart.
- Objective không được đồng loạt trở thành delivery bundle.
- Item/card identity cần được giữ rõ.

### 1.2. Hướng đang được tiếp tục

- Processor là persistent building/context trên continuous world.
- Input + Processor preview conversion; Load tiêu AP + input; output hoàn tất sau Sleep.
- One-slot Processor nối Produce, Fish và Herb/resource route.
- Processed output giữ category/identity thay vì thành generic Processed Goods.

### 1.3. Giả thuyết

1. Positive uplift + zero AP làm Processing thành default cho mọi item không cần ngay.
2. Sleep delay tạo liquidity choice chỉ khi Gold/item có target hôm nay.
3. Một slot tạo input competition; slot thứ hai giống hệt có thể xóa tension quá sớm.
4. Processed item nên đổi tag/target compatibility, không phải strict upgrade dùng được ở mọi nơi.
5. Uplift không cần giống nhau cho mọi category.

### 1.4. Fixture

- Fresh Produce/Fish sell 3G.
- Uplift thử: +1/+2/+3G.
- Load cost thử: 0/1/2 AP.
- Completion thử: same-day hoặc sau một Sleep.
- Slot thử: 1 hoặc 2.
- Collect output 0 AP trong fixture.
- Không quy đổi Heart, Project progress, collection hoặc Depth thành Gold.

## 2. Dominance condition

Processing gần như tự động đúng khi đồng thời có:

1. output bán giá cao hơn input;
2. Load không tốn AP đáng kể;
3. output có ngay hoặc không có nhu cầu hôm nay;
4. slot không cạnh tranh input khác;
5. processed item vẫn hợp lệ cho mọi Gift/Project/collection mà fresh item dùng được.

Slot/delay một mình không cứu được nếu người chơi luôn có thể nhét mọi output vào nhiều Processor và chờ mà không mất option.

## 3. Uplift × Load AP

Đánh giá tương đối khi item chỉ xét Sell và không cần Gold ngay:

| Load cost | +1G | +2G | +3G |
| ---: | --- | --- | --- |
| 0 AP | Default nếu slot trống | Default | Default mạnh |
| 1 AP | Chỉ hấp dẫn khi AP rảnh | Cạnh tranh; baseline cũ | Dễ thành default sau relief |
| 2 AP | Thường yếu | Yếu trừ Rain/spare AP | Cạnh tranh nhưng nuốt block lớn |

Không dùng bảng này để tuyên bố giá trị 1 AP bằng bao nhiêu Gold. Nó chỉ cho thấy hướng dominance: cost 0 không có tradeoff, cost 2 dễ làm building bị bỏ, cost 1 để ngỏ nhiều context nhất.

### Kết quả

- `Load 1 AP` vẫn là fixture mạnh nhất.
- Uplift +2G (`3 → 5`) đủ hấp dẫn nhưng có nguy cơ default sau maintenance relief.
- Không nên giải quyết bằng cách tăng mọi output lên +3G.
- Có thể dùng uplift khác nhau theo recipe thay vì một multiplier toàn cục.

## 4. Completion timing

| Timing | Gold-now | Item target hôm nay | Planning |
| --- | --- | --- | --- |
| Same-day | Hầu như không mất liquidity | Có thể Process rồi vẫn dùng ngay | Conversion dễ thành strict upgrade |
| Sau Sleep | Fresh Sell thắng khi cần Gold ngay | Gift/Project/collection hôm nay cạnh tranh thật | Queue state dễ đọc, nhưng cần preview ngày hoàn tất |
| Nhiều Sleep | Delay mạnh | Dễ thành calendar chore | Chưa có bằng chứng cần |

`Sau một Sleep` là baseline mạnh hơn same-day. Delay dài hơn chưa chứng minh tạo lựa chọn tốt hơn việc chờ.

## 5. One slot × two slots

Harvest burst fixture có hai Produce, một Fish và một Herb cùng khả dụng.

### Một slot

- Chỉ một input được Load trước Sleep.
- Item khác phải Sell/Gift/giữ/dùng Project hoặc chờ.
- Slot chọn **input nào**, không chỉ hỏi có Process hay không.

### Hai slot giống hệt

- Nếu daily output thường chỉ 1–2 item, người chơi Process gần như tất cả non-urgent output.
- Competition chỉ quay lại ở burst lớn.
- Upgrade tăng throughput nhưng có nguy cơ xóa verb choice.

### Giả thuyết tốt hơn cho expansion

Thay vì nhân đôi slot generic:

- Preserver nhận Produce.
- Dryer nhận Fish/Herb.
- Hoặc slot thứ hai có cycle/tag khác.

Specialization vẫn mở throughput nhưng giữ category decision. Đây là hypothesis, chưa phải building list.

## 6. Eight-day use-case fixture

| Ngày | Input/opportunity | Competing use | Kết quả baseline 1 AP + Sleep + 1 slot |
| --- | --- | --- | --- |
| D1 | Produce | Cần Gold mua Seed hôm nay | Sell fresh; Process thua liquidity |
| D2 | Fish condition mới | Record/Gift hôm nay | Giữ fresh; không Process trước decision |
| D3 | Herb | Project requirement D4 | Giữ raw nếu Project cần Raw Herb |
| D4 | Không output mới | AP rảnh/Rain-like window | Có thể Load item không còn urgent |
| D5 | Hai Produce Mature | Một slot, một Gift target | Gift/Process/Sell chia ba đích; slot có tension |
| D6 | Rare Fish | Collection/Gift context | Process chỉ nếu output có identity tradeoff phù hợp |
| D7 | Herb | Không target ngay | Prepared Herb hấp dẫn nếu AP rảnh |
| D8 | Produce | Cần Work/Person AP | +2G cạnh tranh với action khác; không tự động |

Baseline không làm Processor dùng mỗi ngày. Idle slot là kết quả hợp lệ; building không cần biến mọi item thành việc nhà.

## 7. Identity/tag sensitivity

Ba transformation fixture:

| Input → output | Gain | Option có thể mất | Tại sao không là strict upgrade |
| --- | --- | --- | --- |
| Fresh Produce → Preserve | Sell uplift | Một số Fresh/seasonal Gift hoặc Project target | Giá trị đổi lấy freshness/context |
| Fresh Fish → Dried Fish | Portable/sell use | Fresh Catch/location/condition target | Vẫn là Fish nhưng state khác |
| Raw Herb → Prepared Herb | Remedy/recipe target | Raw Herb Project/forage target | Đổi verb/acceptance, không chỉ Gold |

Các target mất đi chỉ là fixture. Nguyên tắc cần giữ là processed output có identity và compatibility riêng; không được hợp lệ ở mọi nơi cộng thêm giá bán cao hơn.

Collection nên record discovery phù hợp trước khi conversion tiêu item nếu collection là record, nhưng exact rule chưa chốt. Không dùng Processing để ép người chơi giữ bản sao chỉ vì UI không ghi nhận rõ.

## 8. Sell/Gift/Project comparison

### Sell

- Fresh: 0 AP, immediate Gold.
- Processed: Load AP + delay + slot, higher/different value.
- Hai option cùng tồn tại nếu immediate Gold có unlock/Seed/Tool target thật.

### Gift

- Gift hôm nay có deadline theo Person schedule; Process delay có thể làm lỡ.
- Processed item không mặc định là quà tốt hơn.
- Nếu một Person thích processed item, đó là target riêng, không phải universal multiplier.

### Project

- Project ghi exact accepted state/category.
- Prepared output có thể mở target mới nhưng không thay raw item cho mọi Project.
- Requirement preview phải cho biết conversion có cần thiết hay chỉ là một đường tùy chọn.

### Collection

- Record/discovery không nên buộc người chơi hy sinh item nếu hướng collection đang dùng automatic record.
- Fresh và processed có thể là hai entries nếu chúng tạo khác biệt chơi, không chỉ kéo dài checklist.

## 9. Route sensitivity

| Route | AP pressure | Processing behavior |
| --- | --- | --- |
| Producer trước relief | Cao | Chỉ Process burst/item tốt nhất; Sell fresh để có Gold-now |
| Producer sau relief | Thấp hơn | Nguy cơ Process default; identity/slot phải giữ tension |
| Connector | Mine/Grove/Work cạnh tranh | Load khi output mở gateway hoặc AP rảnh |
| Collector | Catch/collection timing | Rare/fresh identity thường thắng uplift; common item có thể Process |

Nếu Producer sau relief Process mọi item mà không nhìn target, vấn đề không chỉ ở con số +2G; output compatibility và throughput cũng đang quá rộng.

## 10. Continuous-world presentation

Processor root tile cần cho thấy:

- Empty/Busy/Ready.
- Input identity và completion point.
- Một slot; không trải queue item thành nhiều world card.

Khi chọn item stack:

- Processor highlight nếu có recipe hợp lệ.
- Preview: exact input quantity, Load AP, output, hoàn tất sau Sleep, tag/target thay đổi quan trọng.
- Commit đưa input khỏi tray và giữ queue state trên Processor.

Ready output đi vào tray/stack khi Collect; không spawn ground pile trên root.

## 11. Automation sensitivity

Các upgrade làm Processing dễ thành default theo mức rủi ro:

| Upgrade | Rủi ro dominance |
| --- | --- |
| Giảm Load 1 AP → 0 | Cao; mọi positive uplift trở thành free |
| Hoàn tất same-day | Cao; xóa liquidity/timing tradeoff |
| Thêm identical slot | Vừa–cao tùy daily output |
| Thêm specialized processor | Vừa; tăng option nhưng giữ category choice |
| Preview recipe rõ hơn | Thấp; giảm uncertainty, không tăng output |
| Cho queue trước Sleep bằng ability hiếm | Vừa; bounded bởi Heart/context |

Processing progression nên ưu tiên mở recipe/category hoặc specialization trước khi xóa toàn bộ AP/delay.

## 12. Kết luận cập nhật

### Kết quả sensitivity

1. Zero-AP positive conversion là default cho non-urgent item.
2. 1 AP + one Sleep + one slot tạo tradeoff rõ nhất trong range thử.
3. +2G là competitive nhưng có nguy cơ default sau farming relief; không dùng một uplift chung cho mọi category.
4. One slot tạo input competition; identical second slot có thể xóa tension.
5. Processed output cần compatibility/tag tradeoff, không phải strict upgrade.
6. Idle Processor là trạng thái hợp lệ; không cần tạo obligation dùng mỗi ngày.

### Baseline fixture mạnh nhất

- Load 1 AP.
- Complete sau một Sleep.
- Một generic slot ở lần mở đầu.
- Recipe-specific value/identity, không global multiplier.
- Output giữ category nhưng có state/tag khác; một số use của fresh không còn hợp lệ.
- Expansion ưu tiên specialization trước identical throughput.

Đây chưa phải luật đã chốt.

Follow-up [Raw-target / Processing A6–S18 rerun 05](RAW-TARGET-PROCESSING-A6-S18-RERUN-05.md) kiểm lại one-slot sau khi product owner chọn Project arm `Q4`. Universal `+2G` và `+1G` vẫn là eventual strict upgrade dưới `S∞`; next paper baseline chuyển sang generic market parity + bounded target-local Fresh/Processed value, giữ Load 1 AP + one Sleep + one slot.

### Chỗ còn mở

- Exact sell values và Gold sinks.
- Recipe list, unlock và item tags.
- Collect có tốn AP hay tự vào tray.
- Số building/slot theo Year 1.
- Storage/capacity và perishability có tồn tại hay không.
- Person ability tác động queue mà không thành combo bắt buộc.
