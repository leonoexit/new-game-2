# Calendar sensitivity paper simulation 01 — AP, Rain cadence và Season length

Ngày chạy: 2026-09-21.

Trạng thái: paper/constraint simulation dùng vocabulary trong [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md). Phép thử chạy Producer, Connector và Collector qua đủ ma trận `2 AP/day × 2 Weather cadence × 2 Season length`. Nó không chốt AP, lịch, crop duration, Project cost, Person schedule hoặc Season rule.

V0 superseding note 2026-09-23: [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) preserves this matrix as historical sensitivity. The current paper frame is A6/S18 with season-conditioned Weather RNG, Q4 M/B and immediate-replant Turnip D3/D5/D7; this matrix's fixed WD/WS Rain days and D3/D6/D9 cohort rhythm are separate fixtures. Its paid Grove Search and active Processing cells do not define the one-item V0 Grove or minimum economy.

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Ranh giới kế thừa

- Season và Weather được công bố; toàn bộ Person có thể gặp trong ngày được công bố tự động.
- Xem/bỏ qua Person miễn AP; Gift tốn action cost + item hợp lệ.
- Mỗi Person nhận tối đa một Gift/ngày; Heart thuộc riêng từng Person và tồn tại qua ngày.
- Save tiếp tục nhiều năm. Hết fixture Season không kết thúc hoặc reset save.
- Bỏ lỡ thông thường trì hoãn tới lần/chu kỳ sau.

### 1.2. [DIRECTION] Hướng đang kiểm tra

- AP là budget chung cho farming, opportunity, Project, source, Fishing, Mine và Processing.
- Rain có thể giải phóng farming AP; game không tăng việc farm chỉ để lấp ngày Rain.
- Producer, Connector và Collector dùng cùng content registry và opportunity schedule.
- Required common source có deterministic path; Person không là prerequisite.
- Processing giữ identity và cạnh tranh với raw target.
- Paper simulation trước code/prototype.

### 1.3. [HYPOTHESIS] Câu hỏi

1. AP thấp/cao đổi workload cliff và opportunity miss ở route nào?
2. Rain frequency hay vị trí Rain so với burst quan trọng hơn?
3. Season ngắn có cắt một commitment hợp lý dù tổng AP nhìn có vẻ đủ không?
4. Gift load có thực sự cạnh tranh progression, hay chỉ là action tax không đáng kể?
5. Route nào nhạy với Weather, route nào hợp lệ khi gần như không nhận lợi ích từ Weather?
6. Processor có trở thành default khi economy chưa có raw target đủ mạnh không?

### 1.4. [FIXTURE] Không gian scenario

| Trục | Arm 1 | Arm 2 | Lý do bracket |
| --- | --- | --- | --- |
| AP/day | `A5 = 5 AP` | `A7 = 7 AP` | Nằm hai phía của fixture 6 AP cũ; không coi 6 là baseline đã chốt |
| Season length | `S12 = 12 ngày` | `S18 = 18 ngày` | Kiểm commitment gần boundary và thêm một recovery cycle |
| Rain cadence | `WD = D3,6,9,12,15,18` | `WS = D5,10,15` | Dense 1/3 so với sparse 1/5; đồng thời đổi phase alignment |

`WD` và `WS` là lịch tường minh, không phải distribution cuối. Không có Weather forecast ngoài thông tin ngày hiện tại trong fixture.

## 2. Shared fixture

### 2.1. [FIXTURE] Action/crop assumptions

- Manual Water: 1 crop/AP.
- `PJ-M Water Trough`: Water 2 crop/AP.
- Manual Harvest và Plant: 1 crop/AP.
- `PJ-B Harvest Bench`: Harvest 2 crop/AP; Plant vẫn atomic trong arm này.
- Rain hoàn thành Care cho crop active trước Sleep, gồm crop Plant trong ngày.
- Shortroot cần hai successful Care resolution; Dewleaf ba; Tallbean bốn.
- Crop chưa Mature khi S12/S18 kết thúc được ghi là tail commitment; không chết, biến mất hoặc reset.
- Crop single-harvest trong fixture.

Duration, capacity và Rain timing đều là fixture. Không arm nào ở đây chọn final rule.

### 2.2. [FIXTURE] Project và expansion workload

Producer dùng ba phase tuần tự:

| Phase | Route AP bundle | Reveal/gate | Kết quả |
| --- | ---: | --- | --- |
| `PJ-M` | 8 AP | Có thể bắt đầu từ D3 sau manual-care exposure | Water capacity 2 |
| Expansion | 6 AP | Sau `PJ-M` | Clear/Till/Plant hai plot, thành bốn active crop |
| `PJ-B` | 6 AP | Ba ngày sau Expansion để burst cost đã xuất hiện | Harvest capacity 2 |

`PJ-M` bundle gồm deterministic Wood/Mine source và Work; Expansion là world-state action; `PJ-B` dùng Wood/Stone đã biết + Work. Delivery không tốn AP trong fixture. Các bundle chỉ giữ workload nhất quán giữa tám scenario, không phải recipe/price.

Hai-crop cohort tạo burst mỗi ba ngày:

- trước `PJ-B`: `Harvest 2 + Plant 2 = 4 AP` ngoài routine Care;
- sau `PJ-B`: `Harvest cohort 2 + Plant 2 = 3 AP` ngoài routine Care.

Tallbean cohort được tính Mature sau bốn Care resolution kể từ Expansion; output ngoài Season chỉ thành tail, không fail save.

### 2.3. [FIXTURE] Opportunity schedule

| Ngày | Opportunity | Cost/policy fixture | Recovery |
| --- | --- | --- | --- |
| D2, D8, D14 | River Minnow | atomic Catch 2 AP | Lần common sau |
| Mỗi Rain | Rain Eel | atomic Catch 2 AP; Collector chỉ cần Catch đầu cho record | Rain sau |
| D4, D10, D16 | Person P | Berry collection + Gift = 2 AP package | Lịch Person P sau |
| D5, D11, D17 | Wild Herb batch | Collect 1 AP; giữ được như item | Batch sau/deterministic substitute nếu là unlock nền |
| D6, D12, D18 | Person Q | Gift Fresh Herb 1 AP nếu đã Collect | Lịch Person Q sau |

- Gift P/Q tạo Heart theo baseline fixture nhưng ability benefit không được cộng vào route result. Vì vậy chênh lệch do Gift là cost ceiling, không phải net value cuối.
- Person P/Q là schedule placeholder, không phải roster hoặc ability assignment.
- Collection `COL-1` record không consume item.
- Processor có một slot, Load 1 AP, output sau Sleep. Một raw item được giữ nếu có target Fresh/Raw ngày kế.

### 2.4. [FIXTURE] Scheduler policy

Đây là constraint trace, không phải AI tối ưu:

- Việc có deadline hôm nay không được làm sớm hôm qua nếu rule không cho phép.
- AP không dùng không bank sang ngày sau.
- Farming Care/burst đã cam kết được xử lý trước để đo lock-in.
- Opportunity cố định xử lý sau commitment route; flexible Project/Depth/Processing dùng capacity còn lại.
- Một burst có thể tràn sang ngày sau; số burst tràn và tail được ghi lại.
- Producer có thêm counterfactual `skip Gift` để đo cost của Heart supply.
- Connector dừng main trace khi hoàn thành `PJ-X` và Depth 12; AP sau đó là optional capacity, không được diễn giải là game phải tạo filler.
- Collector ưu tiên first family record, first Rain Eel, crop continuity, Person Gift rồi mới Load output còn lại.

Thay priority có thể đổi exact day nhưng không đổi workload identity. Kết luận chỉ được giữ nếu xuất hiện ở nhiều arm hoặc đến từ một collision không thể bank.

## 3. Scenario key

| Key | AP | Season | Rain days trong horizon |
| --- | ---: | ---: | --- |
| 5-12-D | 5 | 12 | 3, 6, 9, 12 |
| 5-12-S | 5 | 12 | 5, 10 |
| 5-18-D | 5 | 18 | 3, 6, 9, 12, 15, 18 |
| 5-18-S | 5 | 18 | 5, 10, 15 |
| 7-12-D | 7 | 12 | 3, 6, 9, 12 |
| 7-12-S | 7 | 12 | 5, 10 |
| 7-18-D | 7 | 18 | 3, 6, 9, 12, 15, 18 |
| 7-18-S | 7 | 18 | 5, 10, 15 |

## 4. Producer rerun

### 4.1. [FIXTURE] Result table

`M/E/B` là ngày hoàn thành Water Trough / Expansion / Harvest Bench. `—` nghĩa chưa hoàn thành trong horizon, không phải bị mất vĩnh viễn.

| Scenario | M / E / B | Burst tràn ngày | Tail burst AP | Gift P | Processor Load | Tallbean output trong Season |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| 5-12-D | D7 / D11 / — | 0 | 0 | 2/2 | 0 | Không; tail sau boundary |
| 5-12-S | D8 / — / — | 3 | 1 | 2/2 | 0 | Chưa Plant |
| 5-18-D | D7 / D11 / D17 | 0 | 0 | 3/3 | 4 | Có, khoảng D15 |
| 5-18-S | D8 / D13 / — | 4 | 1 | 3/3 | 0 | Có, khoảng D17 |
| 7-12-D | D5 / D7 / D11 | 0 | 0 | 2/2 | 4 | Có, khoảng D11 |
| 7-12-S | D5 / D7 / D11 | 0 | 0 | 2/2 | 4 | Có, khoảng D11 |
| 7-18-D | D5 / D7 / D11 | 0 | 0 | 3/3 | 6 | Có |
| 7-18-S | D5 / D7 / D11 | 0 | 0 | 3/3 | 6 | Có |

### 4.2. [HYPOTHESIS] Workload cliff

- Ở 5 AP, sunny burst trước `PJ-B` cần `2 routine Water + 4 Harvest/Plant = 6 AP`. Ít nhất một action phải tràn dù toàn tuần còn AP ở ngày khác.
- `WD` đặt Rain đúng D3/D6/D9... là các ngày burst, nên xóa 2 AP routine ngay ở peak. `WS` có ít Rain hơn **và** lệch khỏi burst; ba hoặc bốn cohort tràn.
- Ở 7 AP, cùng peak 6 AP còn 1 AP cho source/Project. Cả dense lẫn sparse hoàn thành cùng milestone day, nên minimum fixture gần như không còn phân biệt Weather ở Producer.
- Sau `PJ-B`, sunny cohort peak là `2 Water + 3 burst = 5 AP`: vừa kín A5, còn 2 AP ở A7. Relief pass về giảm peak nhưng A5 vẫn không có room cho opportunity trên peak day.

Rain percentage không đủ để mô tả tác động. Phase alignment giữa Rain và cohort tạo chênh lệch lớn hơn một cách đọc chỉ dựa trên “bao nhiêu ngày Rain”.

### 4.3. [HYPOTHESIS] Season length và gated progress

- `5-12-D` có tổng capacity đủ tạo AP rảnh ở vài ngày, nhưng `PJ-B` chưa reveal trước khi Expansion được trải nghiệm; AP cũ không bank qua gate. Bởi vậy B nằm ngoài S12 dù không phải mọi AP đều bận.
- `5-12-S` chỉ hoàn thành maintenance relief; expansion chưa xong và một burst còn tail. Đây là soft lock-in rõ nhất: player vẫn vận hành, nhưng commitment cũ hấp thụ capacity để mở relief kế.
- S18 cứu Tallbean output ở hai A5 arm. Nó không tự cứu `PJ-B` trong `5-18-S` khi Gift được ưu tiên; Season dài hơn tạo recovery room nhưng không xóa collision.
- A7 đưa cả ba milestone vào S12 và làm S18 chủ yếu thêm throughput. Trong minimum slice, A7 có nguy cơ quá rộng để tension còn đến từ AP.

### 4.4. [FIXTURE] Gift counterfactual

| Scenario A5 | Có Gift P | Skip Gift P | Chênh lệch progression |
| --- | --- | --- | --- |
| 5-12-D | M D7 / E D11 / B — | M D6 / E D8 / B — | Expansion sớm 3 ngày; B vẫn bị gate ra ngoài Season |
| 5-12-S | M D8 / E — / B — | M D7 / E D10 / B — | Gift quyết định Expansion có lọt S12 hay không |
| 5-18-D | M D7 / E D11 / B D17 | M D6 / E D8 / B D13 | 3 Gift đổi lấy B trễ 4 ngày và hai Load ít hơn |
| 5-18-S | M D8 / E D13 / B — | M D7 / E D10 / B D15 | 3 Gift đổi lấy việc B trượt khỏi horizon |

Đây không chứng minh Gift quá đắt: Heart benefit đang bị đặt bằng 0 để cô lập load. Nó chứng minh A5 tạo một choice có hậu quả; A7 chủ yếu dịch milestone một ngày và không buộc bỏ target.

## 5. Connector rerun

### 5.1. [FIXTURE] Route policy

```text
2 Wood → Safe Mine tới Depth 3/Stone → Work PJ-X
→ tiếp tục deterministic Depth tới 12
→ Collect Wild Herb trước lịch Person Q
```

- `PJ-X` dùng 2 Wood, Stone đã nhận khi Descend và 3 Work trong fixture.
- Mine tối đa ba Descend/ngày trong trace để không biến toàn bộ AP thành một counter sprint.
- Wild Herb được giữ cho Person Q; chỉ Process khi không có raw target kế tiếp.

### 5.2. [FIXTURE] Result table

| AP arm | PJ-X | Depth 12 | Gift P | Gift Q | Herb Process | Weather effect |
| --- | --- | --- | --- | --- | --- | --- |
| A5, S12 | D2 | khoảng D5 | 2/2 | 2/2 | 0 | Không đổi core result |
| A5, S18 | D2 | khoảng D5 | 3/3 | 3/3 | 0 | Không đổi core result |
| A7, S12 | D2 | khoảng D4 | 2/2 | 2/2 | 0 | Không đổi core result |
| A7, S18 | D2 | khoảng D4 | 3/3 | 3/3 | 0 | Không đổi core result |

### 5.3. [HYPOTHESIS] Kết quả Connector

- Connector pass ở cả tám scenario và không cần first harvest hoặc Person.
- Dense/sparse Rain không tác động core route; đây không phải failure. Weather không cần cho mọi route cùng discount.
- A7 chỉ đưa Depth 12 sớm hơn khoảng một ngày trong minimum trace; sau đó còn nhiều optional capacity. Không nên thêm filler Mine chỉ để tiêu AP.
- Raw target thắng Processing rõ: giữ Wild Herb cho Person Q làm Processor idle. Đây là behavior mong muốn mà Producer/Collector hiện thiếu ở nhiều output.
- Vì Connector fixture ngắn, nó không đủ phân biệt AP cuối. Economy v2 phải thêm Gold/material sink hoặc một branch choice; tăng Depth target chỉ làm counter dài hơn.

## 6. Collector rerun

### 6.1. [FIXTURE] Route policy

- D1 record Berry/Forage.
- D2 ưu tiên River Minnow/common Fish.
- First Shortroot harvest tạo Crop record; đủ `COL-1` ở D3 nếu Fish đã Catch.
- Chọn Dewleaf Seed ở restock D4 để mở Crop/Herb comparison; Tallbean option quay lại cycle sau.
- Catch Rain Eel đầu tiên; các Rain Eel sau không bắt buộc cho `COL-1`.
- Giữ Wild Herb cho Person Q; Load output khác nếu còn AP và slot.

### 6.2. [FIXTURE] Result table

| Scenario | COL-1 | First Rain Eel | Common Catch | Gift P | Gift Q | Burst tràn | Processor Load |
| --- | --- | --- | --- | --- | --- | ---: | ---: |
| 5-12-D | D3 | Có | 1/2 | 2/2 | 2/2 | 0 | 6 |
| 5-12-S | D3 | Có | 1/2 | 2/2 | 1/2 | 0 + 1 AP tail | 6 |
| 5-18-D | D3 | Có | 2/3 | 2/3 | 3/3 | 0 | 12 |
| 5-18-S | D3 | Có | 2/3 | 2/3 | 2/3 | 1 | 11 |
| 7-12-D | D3 | Có | 2/2 | 2/2 | 2/2 | 0 | 8 |
| 7-12-S | D3 | Có | 2/2 | 2/2 | 2/2 | 0 | 7 |
| 7-18-D | D3 | Có | 3/3 | 3/3 | 3/3 | 0 | 13 |
| 7-18-S | D3 | Có | 3/3 | 3/3 | 3/3 | 0 | 13 |

### 6.3. [HYPOTHESIS] Kết quả Collector

- `COL-1` D3 ở mọi arm: reward quá sớm để Season length hoặc Weather cadence tác động. Nó hợp làm first-choice fixture, nhưng chưa chứng minh cadence collection Year 1.
- A5 luôn bỏ một common Catch vì D8 collision với Dewleaf/crop workload. S18 thêm một Catch D14 nhưng không phục hồi Catch D8; opportunity mới tăng tổng record/use, không retroactively xóa miss.
- A5 bắt đầu bỏ Gift trong horizon dài. `5-18-S` bỏ một P và một Q; `5-18-D` bỏ một P. Heart supply vì vậy route-dependent dù lịch Person giống nhau.
- A7 lấy mọi Catch/Gift trong fixture và vẫn Load nhiều output. Minimum set không tạo đủ scarcity ở A7.
- Processor gần như ăn mọi output không có target ngày kế. Đây là dominance warning, không phải bằng chứng one-slot thất bại: economy chưa có Gold-now, exact Gift acceptance, storage hoặc Project raw demand cho Crop/Fish.

## 7. Cross-scenario metrics

### 7.1. [HYPOTHESIS] Workload cliff

| Route | A5 | A7 |
| --- | --- | --- |
| Producer | Sunny pre-relief burst vượt day cap; Weather alignment quyết định tràn | Peak fit; Weather gần mất sức phân biệt |
| Connector | Core trace fit, nhiều action flexible | Thêm AP chủ yếu tăng tốc Depth một ngày |
| Collector | Một common Catch và một số Gift bị bỏ | Lấy toàn bộ opportunity trong minimum fixture |

A5 tạo decision pressure nhưng có một arm soft lock-in (`5-12-S`). A7 bảo vệ opportunity tốt nhưng làm cả ba route quá ít tradeoff trong content minimum. Chưa đủ bằng chứng chọn 5, 6 hoặc 7.

### 7.2. [HYPOTHESIS] Rain windows

- Dense Rain giúp Producer mạnh bất thường vì trùng đúng cohort cadence. Đây là phase resonance của fixture, không phải “Rain luôn tốt 2 AP”.
- Sparse Rain vẫn tạo investment window, nhưng khi rơi ngoài burst nó không cứu peak không-bankable.
- Collector hưởng Rain vừa như free Care vừa như Rain Eel opportunity; cùng một Weather vừa mở capacity vừa tạo demand 2 AP, nên Rain không hoàn toàn là ngày rảnh.
- Connector gần như Weather-neutral; lịch vẫn có việc và không cần bonus bù.

Calendar test sau không nên chỉ randomize tổng số Rain. Nó phải giữ hoặc stratify khoảng cách Rain-to-burst/Person/Catch để phát hiện resonance.

### 7.3. [HYPOTHESIS] Gift/Heart load

- Producer A5: ba Gift có thể đẩy burst relief ra ngoài S18 sparse; cost có hậu quả thật.
- Connector: lấy toàn bộ Gift mà không gate core route; Heart supply cao hơn vì route actions flexible.
- Collector A5: opportunity collision làm 1–2 Gift bị bỏ trong S18; A7 xóa gần hết load.
- Cùng Person cadence không tạo cùng Heart supply giữa route. Person kernel audit phải dùng route-specific supply, không chỉ đếm appearance.
- Vì ability benefit đang bằng 0, không kết luận Gift nên rẻ hơn. Vòng roster phải đặt target/effect cụ thể để so net value.

### 7.4. [HYPOTHESIS] Miss và recovery

| Miss | Recovery trong trace | Kết quả |
| --- | --- | --- |
| Producer burst tràn | Hoàn thành ngày sau | Progress chậm; không mất crop/save |
| Tallbean ngoài boundary | Giữ tail commitment | Không reset; output trì hoãn |
| Common Catch D8 | Common Catch D14/D20 | Có opportunity lại nhưng item D8 không được bù ngược |
| Rain Eel | Rain sau | Cả cadence đều có lại; sparse wait dài hơn |
| Person P/Q | Lịch kế | Heart supply giảm, Person/ability không mất |
| Project ngoài Season | Tiếp tục save/Season sau | Không biến S12/S18 thành deadline fail |

Recovery pass về an toàn save. Tuy nhiên “có lần sau” không đồng nghĩa miss không có giá trị: route mất timing, Heart hoặc output trong horizon.

## 8. Sensitivity verdict

### 8.1. [HYPOTHESIS] Kết luận mạnh nhất

1. **Không thể chọn AP/day bằng AP tổng.** A5 có ngày quá tải dù có AP rảnh ở ngày khác; action không bank và reveal gate quyết định.
2. **Weather phase quan trọng ngang frequency.** Dense fixture cứu Producer vì Rain trùng burst; thay offset có thể đảo kết quả dù cùng tỷ lệ.
3. **A5 là stress arm hữu ích nhưng `5-12-S` chạm soft lock-in.** Nó không fail save, nhưng farming commitment đẩy Expansion/relief và để tail ngay trong minimum route.
4. **A7 là safety arm nhưng quá rộng cho content minimum.** Nó xóa gần mọi Catch/Gift miss và làm Weather ít ảnh hưởng Producer.
5. **S12 phân biệt commitment; S18 cho recovery nhưng không tự sửa overload.** Longer Season không thay relief hoặc day capacity.
6. **Heart supply là route outcome.** Connector lấy đủ, Producer đổi progression để lấy, Collector A5 bỏ một phần.
7. **Collection reward D3 quá sớm để làm long-calendar target.** Nó vẫn hữu ích như first branch, nhưng economy v2 cần định giá choice và có thể cần collection horizon thứ hai sau này; không thêm ngay trong minimum registry.
8. **Processing dominance xuất hiện ở output không có raw target.** Connector chứng minh raw target có thể thắng; economy ledger v2 phải tạo cùng loại tension cho Crop/Fish thay vì tăng Load cost tùy tiện.

### 8.2. [DIRECTION] Handoff sang economy ledger v2

Giữ cả A5 và A7 như sensitivity bounds; chưa chọn midpoint/final AP. Economy ledger v2 nên dùng bốn decisive cells thay vì lặp mọi cell trước:

- `5-12-S`: workload/soft-lock stress;
- `5-18-D`: recovery + full Project path;
- `7-12-S`: opportunity-safe/high-capacity stress;
- `7-18-D`: dominance/too-much-capacity stress.

Ledger cần thêm:

- ít nhất hai Gold sinks khác chức năng;
- Buy/Sell AP arm `0 vs 1`;
- exact raw/processed compatibility cho Crop/Fish/Herb;
- Gold-now target để raw Sell có thể thắng Process;
- value model cho `COL-1` Seed Choice;
- Person Gift benefit đặt cạnh Heart use target, không chỉ cost;
- storage/perishability chỉ dưới dạng sensitivity arm, không giả định luật.

### 8.3. Chưa được kết luận

- 5, 6 hoặc 7 AP là final.
- Season dài 12 hoặc 18 ngày.
- Rain mỗi 3 hoặc 5 ngày.
- Shortroot/Dewleaf/Tallbean duration cuối.
- Rain tưới crop Plant cùng ngày.
- Catch atomic 2 AP.
- Project bundle, reveal day hoặc reward capacity cuối.
- Person P/Q schedule, Gift preference hoặc Heart cap.
- Processor cần nerf; dominance có thể đến từ target/economy còn thiếu.
- Hết Season làm crop chết, reset hoặc kết thúc save.

Follow-up [AP / Season bracket narrowing 03](AP-SEASON-BRACKET-NARROWING-03.md) dùng workload threshold thay vì total AP: A6 fit đúng pre-relief sunny peak 6 AP, trong khi A5 bắt buộc tràn và A7 tạo surplus. S18 là next recovery-horizon baseline vì chứa D14–D18 opportunity cycle và `DL-6`/`DL-8`; A5/S12 và A7 giữ vai trò regression bounds. Đây là paper baseline, không phải final lock.
