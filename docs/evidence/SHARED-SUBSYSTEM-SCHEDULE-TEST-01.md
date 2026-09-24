# Shared subsystem schedule test 01 — Farm, Fishing, Mine, Processing và Person

Ngày chạy: 2026-09-21.

Trạng thái: stress test sáu ngày dùng các loop trong [Subsystem loops paper test 01](SUBSYSTEM-LOOPS-PAPER-TEST-01.md). Phép thử đo AP, target cho Person ability và reveal load trong một mid-early slice; không phải opening, season calendar hoặc balance đã chốt.

V0 superseding note 2026-09-23: [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) and [Grove contract 36](FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) keep the `Search Grove 1 AP` row below as a historical batch fixture. The recommended one-item V0 arm shows exact Wild Herb if present and charges 1 AP only to Collect. Processor activity in this older schedule is likewise outside the current V0 loop; its AP totals are not current route evidence.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Weather/Season hiện trên bàn; toàn bộ Person có thể gặp được announce đầu ngày.
- Xem/bỏ qua Person miễn AP; Gift tốn AP + item.
- Person đã thu nhận dùng ability bất kỳ ngày nào nếu đủ Heart/context.
- Person là tùy chọn, không phải party requirement.
- Card/group có thể mở area; game không dùng seamless movement.
- Save tiếp tục nhiều năm và bỏ lỡ không mặc định phá save.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Farming, resource, Person và Project cùng cạnh tranh AP.
- Fishing/Mine/Processing cần loop khác nhau và entry không bắt buộc first harvest.
- Rain giải phóng AP nhưng không phải ngày nào cũng cần được lấp kín.
- Processing phải tạo alternative use, không tự động thay Sell/Gift.
- Paper simulation trước code/prototype.

### 1.3. Giả thuyết cần thử

1. Ba route dùng cùng world schedule nhưng tạo ngày khác nhau.
2. A/C có target đủ rõ mà không bắt buộc.
3. Fishing 2-step có thể bộc lộ là action thừa.
4. One-slot Processing tạo timing choice thay vì luôn thắng Sell.
5. Gateway giữ objective load có thể đọc được dù nhiều subsystem cùng mở.

### 1.4. Fixture/số tạm

- 6 AP/ngày.
- Weather: D1 Sunny, D2 Rain, D3 Sunny, D4 Sunny, D5 Rain, D6 Sunny.
- Hai crop bắt đầu ở 1/3; Water D1 + Rain D2 làm chúng Mature D3.
- Crop không Water đứng yên.
- River, Mine, Grove batch và Processor đã mở; đây là slice sau onboarding.
- Processor có một slot, Load 1 AP, hoàn tất sau Sleep.
- Person A xuất hiện D2; Person C xuất hiện D4.
- Berry x1 và Herb x1 có sẵn đầu fixture để cô lập scheduling.
- Gift tạo 1 Heart; fixture cho dùng Heart vừa nhận trong cùng ngày.
- A preview một batch; C giữ một opportunity qua Sleep; ability không tốn thêm AP.

## 2. Opportunity schedule chung

| Ngày | World state/opportunity |
| --- | --- |
| D1 Sunny | River Catch condition Sun; Mine Depth 0; Grove batch; crop cần Water |
| D2 Rain | River Catch condition Rain; A xuất hiện; Rain Water crop |
| D3 Sunny | Hai crop Mature; River Catch mới; Processor có thể nhận output |
| D4 Sunny | C xuất hiện; River Catch; crop cần Water |
| D5 Rain | Một Catch hiếm xuất hiện; Grove batch giàu resource; Rain Water crop |
| D6 Sunny | Catch thường; crop cần Water; opportunity được C giữ nếu có |

Fishing Catch fixture cần hai Fish action trong cùng ngày. Mine Descend 1 AP/Depth; checkpoint ở Depth 3 và 6.

## 3. Route Producer

Ưu tiên giữ crop cycle, Water relief, expansion và conversion. Mine được dùng để lấy material/context cho Tool; Person không bắt buộc.

| Ngày | AP log | Kết quả |
| --- | --- | --- |
| D1 | Water 2; Mine 3; Load Herb 1 | Depth 3; Processor bận; crop 2/3 |
| D2 | Mine 3; Work W 2; 1 AP linh hoạt | Depth 6; W hoàn thành bằng material fixture; crop Mature D3; bỏ A |
| D3 | Harvest 2; Plant 2; Water bằng W 1; Load Produce 1 | Crop cycle giữ; một Produce vào queue; không Fish |
| D4 | Water bằng W 1; Clear/Till hai plot 4; Load Produce còn lại 1 | Hai plot mới ready; bỏ C |
| D5 | Plant hai plot 2; Catch Fish 2; Load Fish 1; Work 1 | Bốn active crop; Rain Water; Fish vào queue |
| D6 | Water bốn crop bằng W 2; Catch Fish 2; Work 2 | Giữ production và progression |

### Kết quả Producer

- Mine checkpoint: Depth 3 và 6.
- W hoàn thành D2.
- Bốn active crop D5.
- Bốn lượt Processor được dùng từ Herb, hai Produce và Fish.
- Hai Fish opportunity được lấy; D3 harvest khiến một Catch bị bỏ.
- Không thu nhận A/C; route vẫn mở đủ Tool, expansion, Mine và Processing.

Producer bắt đầu Process gần như mọi input khi W đã giải phóng AP. One-slot và harvest burst vẫn tạo delay, nhưng giá trị 3G → 5G có thể khiến Process trở thành default nếu không có nhu cầu Gift/Gold-now mạnh hơn.

## 4. Route Connector

Ưu tiên Mine, Grove, Person modifiers và gateway/Work. Crop được phép đứng yên; route không dùng first harvest làm cổng.

| Ngày | AP log | Kết quả |
| --- | --- | --- |
| D1 | Mine 3; Search Grove 1; Collect 2 | Depth 3; resource mix; crop không tiến |
| D2 | Gift A 1; dùng Heart preview; Mine 3; Search 1; Collect 1 | Depth 6; A Heart đã tiêu; Rain đưa crop lên 2/3 |
| D3 | Load Ore/Herb 1; Search 1; Collect 2; Work 2 | Processor hoạt động; crop không Water nên chưa Mature |
| D4 | Collect Berry 1; Gift C 1; Search 1; Collect 2; Work 1 | Thu nhận C; resource/gateway tiến; crop tiếp tục đứng |
| D5 | Search 1; Collect 3; Load 1; Work 1; dùng C giữ một batch card | C Heart đã tiêu; giữ rare resource sang D6 |
| D6 | Catch Fish 2; Collect card đã giữ 1; Load Fish 1; Work 2 | Có Fish/processed output và Project progress |

### Kết quả Connector

- Mine Depth 6 D2 mà không cần farming output.
- A giúp tránh/chọn batch D2; không A vẫn có Safe/Search path.
- C giữ đúng một opportunity D5; không C thì item quay lại batch sau.
- Processor dùng input từ Mine/Grove/Fishing.
- Hai crop chưa Mature hết horizon nhưng không mất.

Connector có việc trên cả Sunny/Rain; Weather ít ảnh hưởng hơn vì route không cam kết Water. Đây là khác biệt hợp lệ, không phải lỗi cần ép Rain bonus vào mọi subsystem.

## 5. Route Collector

Giữ farm nhỏ, bắt Fish trong condition khác nhau, tìm variety và dùng Processing. Không expansion.

| Ngày | AP log | Kết quả |
| --- | --- | --- |
| D1 | Water 2; Catch Sun Fish 2; Search 1; Collect 1 | First Fish record; crop 2/3 |
| D2 | Catch Rain Fish 2; Load Fish 1; Search 1; Collect 2 | Fishing mastery fixture hoàn thành; crop Mature D3; bỏ A |
| D3 | Harvest 2; Plant 2; Water 2 | Toàn bộ AP cho farm burst; Catch/Process bị bỏ |
| D4 | Water 2; Collect Berry 1; Gift C 1; Catch Fish 2 | Thu nhận C + 1 Heart |
| D5 | Search 1; Collect 2; Mine 2; Load Produce 1; dùng C giữ rare Catch | Mine Depth 2; rare Catch tồn tại sang D6 |
| D6 | Water 2; hoàn tất held Catch 2; Mine 1; Load Fish 1 | Mine checkpoint 3; rare Fish được xử lý |

### Kết quả Collector

- Fishing mastery đạt D2 qua hai Weather condition.
- Farm giữ hai crop; không mở plot.
- C biến một D5 opportunity thành kế hoạch D6.
- Mine checkpoint đầu đạt chậm bằng AP thừa.
- Produce D3 không thể Process ngay; phải chờ tới D5 hoặc Sell fresh.

Processing không luôn thắng trong timing: D3 slot rảnh nhưng route không có AP Load. Nếu Gold cần ngay, Sell fresh vẫn có lợi thế rõ.

## 6. AP distribution

| Route | Farm AP | Fishing AP | Mine/AP source | Processing AP | Gift AP | Work/khác |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Producer | 16 | 4 | 6 | 4 | 0 | 5 + 1 linh hoạt |
| Connector | 0 | 2 | 23 | 3 | 2 | 6 |
| Collector | 12 | 8 | 12 | 3 | 1 | 0 |

Tổng từng hàng là 36 AP; AP Collect quà nằm trong “Mine/AP source”, còn “Gift AP” chỉ tính action Gift. Cách nhóm chỉ phục vụ fixture, không dùng để cân bằng subsystem thật.

Ba route có profile khác rõ:

- Producer dùng AP lớn cho farming/infrastructure.
- Connector dùng phần lớn AP trong area/resource.
- Collector chia giữa upkeep nhỏ, Fishing và variety.

## 7. Fishing resolution sensitivity

Trong cả ba route, người chơi biết trước Catch cần 2 AP và hoặc dành trọn block 2 AP, hoặc bỏ hẳn. Không route nào tạo tình huống hợp lý “trả 1 AP rồi đổi ý” ngoài misplay.

### Same-day two-step

- Hai thao tác giống nhau.
- Progress 1/2 mất khi Sleep.
- Không tạo lựa chọn mới trong schedule; chỉ tăng số lần kéo/thả.

### Atomic cost 2

- Một action instance, preview rõ 2 AP, nhận Fish.
- Giữ nguyên AP economy và timing window.
- Ít thao tác lặp hơn.

### Persistent progress

- Mỗi Fish action 1 AP; progress giữ qua ngày.
- Cho phép đầu tư lẻ và dùng C/I-like effects.
- Làm Catch opportunity expiry yếu hơn và giảm timing pressure.

### Kết quả sensitivity

Same-day two-step không chứng minh được giá trị. **Giả thuyết mạnh hơn cho vòng sau là một Catch action atomic giá 2 AP**, hoặc persistent progress nếu muốn fish khó là một Project nhỏ. Đây chưa phải luật đã chốt.

## 8. Person/Heart cadence

| Person | Acquisition/use trong fixture | Nếu không có Person |
| --- | --- | --- |
| A | Gift D2, dùng Heart ngay để preview batch | Search/Safe path vẫn hoạt động; có thể tốn AP vào batch kém phù hợp |
| C | Gift D4, dùng Heart D5 giữ opportunity | Rare card rời đi và quay lại chu kỳ sau |

Mỗi Person chỉ can thiệp một lần trong sáu ngày. Ability thay route nhưng không vận hành loop thay người chơi.

Fixture dùng Heart ngay trong ngày làm acquisition rất mạnh về timing. Cần sensitivity sau:

- dùng ngay;
- chỉ dùng từ ngày sau;
- Heart cap 1/2;
- Person xuất hiện mỗi 4–6 ngày.

Không có bằng chứng cần cooldown nếu Heart supply đã đủ hạn chế.

## 9. Reveal-load audit

D2 có thể đồng thời tồn tại:

- Weather Rain.
- Person A announcement.
- Crop state.
- River Catch.
- Mine Routes.
- Grove batch.
- Processor output.

Nếu mọi child card bung trên bàn, objective load quá cao. Gateway model giữ được khả năng đọc nếu:

- top level chỉ hiện Farm, River, Mine, Grove và Processor cards;
- badge/state cho biết area nào có opportunity mới;
- mở một gateway thay vùng main board;
- Person announcement chỉ nêu Person + context, không tự mở context;
- requirement chi tiết chỉ hiện khi inspect/drag.

Đây là UI hypothesis dựa trên card/group direction, chưa phải visual test. Mobile board load vẫn cần mock bằng paper layout, không code.

## 10. Kết luận mới

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Ba route tạo AP profile khác biệt trên cùng world schedule.**
2. **Connector có progression thật không qua first harvest.** R0/Mine/R1 correction của graph hoạt động.
3. **Person A/C có target rõ và không bắt buộc.** Mỗi ability chỉ can thiệp một opportunity trong horizon.
4. **Same-day two-step Fishing là thao tác thừa trong fixture.** Atomic 2 AP giữ cùng economy rõ hơn.
5. **Processing không luôn thắng về timing, nhưng uplift +2G/AP có nguy cơ thành default sau relief.**
6. **Rain tạo kế hoạch khác theo route.** Producer đầu tư/mở rộng, Collector tìm variety, Connector tiếp tục expedition.
7. **Gateway là cần thiết cho objective load.** Không thể để mọi subsystem child card cùng trải trên bàn.

### 10.2. Giả thuyết mạnh nhất để mang sang bước sau

- Dùng atomic Catch 2 AP làm baseline tiếp theo.
- Giữ Mine Depth/checkpoint, nhưng thiết kế ít nhất hai checkpoint rule khác nhau.
- Giữ one-slot Processor; test value uplift và alternative use.
- Test Heart timing/cap qua nhiều lần Person xuất hiện.
- Dựng paper board inventory cho một ngày D2 đông opportunity để kiểm tra card count/reveal.

Tất cả vẫn là giả thuyết cần thử.

## 11. Fixture chưa được phép hóa thành luật

- Toàn bộ lịch sáu ngày.
- Crop start 1/3, Rain D2/D5.
- River/Mine/Grove/Processor đều mở trong cùng slice.
- Berry/Herb bắt đầu trong storage.
- Gift và dùng Heart cùng ngày.
- A/C effect, Person schedule và không tốn AP riêng.
- Atomic Catch đề xuất 2 AP.
- Processor uplift 3G → 5G.
- Mọi AP distribution.

## 12. Ba bài test phụ thuộc đã chạy

Ba bài test được yêu cầu từ schedule này:

1. Heart cadence simulation dài hơn cho A/C/K với cap và lịch Gift.
2. Mine checkpoint variation để Depth không chỉ là counter.
3. Processing value sensitivity để Process không tự động thắng Sell/Gift.

Các test dưới đây đã hoàn tất ở cấp paper fixture; bước tiếp theo là tổng hợp action grammar/economy assumptions vào design package Year 1 và audit chỗ còn thiếu.

Heart cadence đã được chạy trong [PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md](PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md). Baseline mạnh nhất hiện tại là cap 2, same-day use, không cooldown chung; toàn bộ vẫn là fixture cần kiểm tra lại với item/AP economy đầy đủ.

Mine checkpoint variation đã được chạy trong [MINE-CHECKPOINT-PAPER-SIMULATION-02.md](MINE-CHECKPOINT-PAPER-SIMULATION-02.md). Mixed checkpoint vượt resource staircase ở cấp paper test: checkpoint lần lượt có thể mở source, đổi action economy hoặc mở branch/context mà không làm mất deterministic Depth.

Processing sensitivity đã được chạy trong [PROCESSING-VALUE-SENSITIVITY-02.md](PROCESSING-VALUE-SENSITIVITY-02.md). Baseline fixture giữ one slot, Load 1 AP và one-Sleep delay, đồng thời yêu cầu processed output đổi compatibility/tag thay vì là strict upgrade dùng ở mọi đích.
