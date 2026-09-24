# Year 1 route coverage test 01 — Producer, Connector, Collector

Ngày chạy: 2026-09-21.

Trạng thái: coverage test trên [Year 1 progression dependency graph v0](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V0.md). Phép thử kiểm tra dependency, reveal và reward shape; không cân bằng một mùa hoàn chỉnh. Tên route, lịch, reward và node bổ sung đều là fixture.

V0 superseding note 2026-09-23: [consistency audit 37](FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) is the current reading. Any Upper-Grove reward or Wild Herb-after-Footbridge edge in the v0 route trace is historical hypothesis; ordinary Grove/Wild Herb does not require PJ-X, and the bridge still lacks a specified playable reward. Paid Grove Search and A/K ability-purpose claims in this older coverage test are not current V0 conclusions.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Sưu tầm Person chỉ là một hướng chơi.
- Save nhiều năm; Year 1 không phải deadline/reset.
- Objective phân tán mở dần area, card và verb.
- Không ép mọi subsystem thành “nộp X item”.
- Bỏ lỡ thường trì hoãn tới chu kỳ sau, không phá save.
- Person không bị giới hạn party và không cần combo cưỡng ép.
- Automation phải giải phóng AP để người chơi sang subsystem khác.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Graph phân tán là baseline; hub trung tâm chưa được giả định.
- First harvest mở Sell/Gift/collection/giữ.
- Deterministic source hỗ trợ planning; batch area hỗ trợ variety/opportunity.
- Relief cần được nhìn thấy trước farming workload cliff.
- Paper simulation trước code/prototype.

### 1.3. Giả thuyết cần thử

1. Producer, Connector và Collector đều có thể mở ít nhất hai capability mới mà không bị ép qua cùng branch.
2. Connector có thể tiến mà không cần first harvest hoặc expansion farming.
3. Collector có thể giữ farm nhỏ và vẫn có horizon mới.
4. Reward của mỗi route thay cách hành động, không chỉ thêm currency/counter.
5. Reveal horizon giữ objective load nhỏ dù graph tổng thể phân nhánh.

### 1.4. Fixture/số tạm

- Horizon 8 ngày; 6 AP/ngày.
- Weather: Sunny, Sunny, Rain, Sunny, Rain, Sunny, Sunny, Rain.
- Hai crop khởi đầu có thể được chăm hoặc để đứng yên; không chết khi thiếu Water.
- Person A xuất hiện D2/D6; Person C xuất hiện D4/D8.
- Berry deterministic source có từ đầu để route Person không phụ thuộc crop.
- Generic deterministic Wood/Stone source dùng 1 AP/item.
- Các reward node bên dưới chỉ để kiểm tra coverage.

## 2. Reward fixtures dùng cho coverage

| Node | Reward fixture | Thay đổi cách chơi dự kiến |
| --- | --- | --- |
| W1 | Water capacity 2 | Giảm maintenance action |
| E0 | Hai plot mới | Tăng production capacity và workload |
| W2 | Harvest hoặc Plant capacity 2 | Giảm burst peak |
| R1 | Search một batch opportunity | Thêm verb chọn resource trong area |
| X2 | Mở một resource area thứ hai | Thêm context/source, không chỉ item payout |
| P-A | Preview batch trước Search | Thông tin trước commitment |
| P-C | Giữ một opportunity qua Sleep | Đổi expiry/timing |
| C1 | Khi Seed restock, xem hai option và chọn một | Thay cách lấy variety |
| C2 | Mở Process/Preserve verb | Tạo công dụng mới cho item |

Không reward nào trong bảng được xem là đã duyệt.

## 3. Route P — Producer

### Trace

```text
F1–F5 → Sell first output → W1 → E0 → F6 → W2
```

### Nhịp AP

| State | Sunny farming AP | Rain farming AP | Capacity còn lại trước việc khác |
| --- | ---: | ---: | ---: |
| Hai crop, Water atomic | 2 | 0 | 4 / 6 |
| Bốn crop, chưa relief | 4 | 0 | 2 / 6 |
| Bốn crop, Water cap 2 | 2 | 0 | 4 / 6 |
| Harvest cohort 2, có W1 nhưng chưa W2 | 6 farm AP fixture | phụ thuộc harvest timing | 0 trước Person/Project |

Sunny day có farming/production planning; Rain day có source/Project/expansion investment. Route không cần Person hoặc collection để mở W1/E0/W2.

### Hai capability mới

1. Water scope thay đổi qua W1.
2. World capacity tăng qua E0.
3. Nếu tiếp tục, burst verb thay đổi qua W2.

### Recovery

- Thiếu Gold: chờ harvest sau hoặc giữ farm nhỏ.
- Bỏ Rain investment window: Work vào ngày khác bằng cách trì hoãn crop/opportunity.
- Không mua W1: vẫn có thể expansion, nhưng chịu workload và có đường quay lại.

### Coverage result

Route pass dependency: không Person/collection bắt buộc. Rủi ro còn lại là reward W1/W2 đều là capacity upgrade; nếu mọi progression Producer chỉ tăng scope, route có thể thành đường tối ưu hóa thuần số học.

## 4. Route N — Connector

Connector ưu tiên Person, deterministic source, batch area và gateway; hai crop khởi đầu có thể đứng yên một số ngày.

### Trace ban đầu từ graph v0

```text
F0 → F1–F6 → R1 → X2
```

Trace này thất bại invariant: R1 được vẽ dưới F6 workload, làm farming expansion thành cổng ngầm cho resource play.

### Trace sửa

```text
F0 → R0 deterministic source → R1 Search area → X2 resource gateway
          |                         |
          +→ Gift Person A/C ←-----+
```

Farming output có thể dùng trong route nhưng không phải prerequisite.

### Progression fixture

1. Collect Berry hoặc common material từ R0.
2. Gift A nếu muốn preview; bỏ A vẫn Search bình thường.
3. Mở R1 bằng world/source interaction đọc được, không cần first harvest.
4. Search/Collect mixed resource.
5. Dùng resource hoặc world state để mở X2; Person ability chỉ giảm uncertainty/timing.
6. C có thể giữ opportunity hiếm, nhưng item đó cũng quay lại chu kỳ sau nếu không có C.

### Sunny và Rain

- Sunny: deterministic Collect, Gift, Search, Work/gateway vẫn hợp lệ dù crop không được Water.
- Rain: nếu còn chăm crop, route nhận thêm AP; nếu bỏ farming, Rain không tạo discount nhưng batch/resource opportunity vẫn hoạt động.

Không yêu cầu mọi route phải nhận cùng giá trị từ Weather. Route chỉ cần không trở thành ngày trống.

### Hai capability mới

1. Search/Collect batch trong R1.
2. Preview hoặc Reserve nếu thu nhận A/C.
3. Mở X2 area/context mới bằng đường không qua farming.

### Recovery

- Miss A/C: Search vẫn dùng được; chờ lịch Gift sau.
- Miss resource batch: deterministic substitute hoặc item quay lại.
- Không có Heart: loop gốc vẫn vận hành.

### Coverage result

Route chỉ pass sau khi thêm cạnh độc lập `F0 → R0 → R1`. Đây là sửa dependency thật cho graph, không phải content detail. Rủi ro còn lại: nếu cả R1 và X2 đều mở bằng `item + Progress Project`, route chỉ đổi artwork chứ không đổi objective shape.

## 5. Route C — Collector

Collector giữ hai crop, ưu tiên variety, discovery và processing; không mở thêm plot trong horizon.

### Trace

```text
F1–F5 → record/collection C0 → C1 Seed Choice
                |
                +→ R0/R1 variety → C2 Process/Preserve
```

### Hai mô hình collection được sensitivity-test

#### C-submit

- Tiêu item khi nộp.
- Tạo tension rõ với Sell/Gift.
- Có nguy cơ biến collection thành một Project nộp item khác tên.

#### C-record

- Tự ghi nhận lần đầu acquire item; item vẫn dùng được.
- Ít resource tension hơn.
- Quyết định nằm ở việc đi tìm/grow variety và chọn reward path, không nằm ở sacrifice item.

Hybrid fixture cho route coverage:

- C0 record lần đầu acquire, không tiêu item.
- C1 yêu cầu đạt một diversity state nhỏ và mở Seed Choice.
- C2 yêu cầu thực hiện một transformation/discovery action, không chỉ nộp thêm bộ item, rồi mở Process/Preserve.

### Sunny và Rain

- Sunny: Water hai crop 2 AP; còn 4 AP tìm Seed/variety/source hoặc Process.
- Rain: 6 AP cho R1 Search, Collect và collection horizon.
- Harvest day: chọn Sell/Gift/Process; record không tự lấy item khỏi các đích đó.

### Hai capability mới

1. Seed acquisition đổi từ fixed option sang choice set qua C1.
2. Item có verb mới Process/Preserve qua C2.

### Recovery

- Miss seasonal item: chờ mùa/năm sau; branch khác vẫn mở.
- Batch không có variety cần: deterministic substitute hoặc batch sau.
- Không expansion: collection nhỏ vẫn tiến; reward không yêu cầu số plot lớn.

### Coverage result

Route pass về dependency nếu collection dùng record/discovery nhiều hơn submit. Reward C1/C2 hiện mới là fixture và cần loop test; nhưng chúng thay verb/source thay vì chỉ tăng counter.

## 6. Coverage matrix

| Tiêu chí | Producer | Connector | Collector |
| --- | --- | --- | --- |
| Sunny có việc đáng làm | Có | Có | Có |
| Rain có việc đáng làm | Có, Project/investment | Có, area/source | Có, variety/processing |
| ≥2 capability mới | W1 + E0/W2 | R1 + X2/A/C | C1 + C2 |
| Person bắt buộc | Không | Không; chỉ là modifier | Không |
| Farming expansion bắt buộc | Có nếu theo đúng fantasy route | Không sau sửa graph | Không |
| Seasonal miss phá route | Không | Không | Không, chỉ trì hoãn |
| Reward đổi cách chơi | Có | Có | Có theo fixture |
| Ending bị ép | Không | Không | Không |
| Điểm chưa chứng minh | Upgrade variety | Objective shape của gateway | C1/C2 loop và reward value |

## 7. Objective-shape audit

Nếu dùng version thô của mọi node:

```text
W1 = nộp Gold/Metal + Work
E0 = nộp Wood + Work
R1 = nộp Wood/Stone + Work
X2 = nộp mixed resource + Work
C1 = nộp crop set
C2 = nộp variety set
```

thì cả graph vẫn chỉ là một chuỗi bundle/Project dù có nhiều branch. Điều này vi phạm bài học đã giữ: không ép mọi subsystem thành “nộp X item”.

Các objective shape cần phân tán:

| Shape | Node phù hợp để thử |
| --- | --- |
| World-state transformation | F1–F5, E0 |
| Investment Project | W1 hoặc infrastructure cụ thể |
| Discovery/record | C0/C1 |
| Repeated-use mastery | R1 Search hoặc Fishing/processing sau này |
| Timing/opportunity | Person Gift, seasonal item |
| Choice-with-constraint | Person M hoặc special Project |
| Area traversal/depth | Mine/Fishing location loop |

Không cần mỗi node một shape riêng; cần tránh mọi reward đi qua cùng một recipe grammar.

## 8. Reveal load audit

### Orientation

Người chơi thấy:

- Farm/home context.
- Overgrown Soil.
- R0 deterministic source/gateway.
- Weather/Season và Person announcement.

Không thấy toàn bộ W/E/R/C/X list.

### Sau first actions

- Water/care reveal W0.
- Interact R0 reveal R1 horizon.
- First item acquisition tạo collection record/hint.
- First harvest reveal Produce destinations.

Người chơi tự làm route nổi lên bằng hành động. Cùng một save có thể thấy nhiều hint, nhưng chỉ node gần/actionable có full requirement.

### Kết quả

Ba route không cần hiện đồng thời như ba menu lựa chọn đầu game. Chúng emerge từ card/world state. Objective load pass ở mức dependency; mobile board load vẫn chưa được kiểm tra trực quan.

## 9. Sửa graph v0 từ coverage test

### Sửa 1 — resource entry độc lập

Thêm:

```text
F0 → R0 deterministic source → R1 batch area → X2
```

R1 không còn phụ thuộc F6 workload.

### Sửa 2 — collection không mặc định consume

C0/C1 được mô tả chung là `record/collection state`; từng collection có thể record, submit hoặc transformation tùy mục đích. Baseline coverage dùng record để tránh biến mọi objective thành delivery.

### Sửa 3 — reward node phải ghi loại thay đổi

Mỗi reward candidate cần được đánh dấu một trong:

- verb mới;
- scope/capacity mới;
- source mới;
- target/context mới;
- conversion mới;
- chỉ currency/counter.

Node chỉ tăng currency/counter không tự đủ làm progression milestone.

## 10. Kết luận mới

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Producer và Collector pass graph v0 với reward fixtures; Connector không pass cho tới khi R1 có entry độc lập khỏi farming.**
2. **Một home farm có thể tồn tại trong mọi save mà không buộc mọi route phải duy trì/expand nó.** Crop đứng yên là recovery fixture; hậu quả chính thức chưa chốt.
3. **Weather không cần ảnh hưởng mọi route giống nhau.** Rain discount mạnh cho farming nhưng chỉ là một ngày area bình thường cho Connector vẫn có thể hợp lệ.
4. **Collection record giải quyết objective-shape tốt hơn submit-only.** Nó chuyển lựa chọn sang acquisition/diversity, nhưng làm giảm resource tension.
5. **Graph đang có nguy cơ Project hóa mọi unlock.** Fishing/Mine/processing cần dùng objective shape khác để kiểm tra.
6. **Reveal theo hành động giữ ba route khỏi biến thành ba menu đầu game.**

### 10.2. Giả thuyết mạnh nhất để mang sang bước sau

- Giữ R0/R1 như entry độc lập, không cần first harvest.
- Dùng Project investment cho một số infrastructure, không cho mọi gateway.
- Dùng record/discovery baseline cho collection; chỉ consume item khi sacrifice chính là lựa chọn cần tạo.
- Thiết kế minimal Fishing và Mine loop bằng hai objective shape khác nhau.
- Cho processing là conversion verb để nối output của nhiều route, không chỉ farming.

Tất cả vẫn là giả thuyết cần thử.

## 11. Fixture chưa được phép hóa thành luật

- Horizon 8 ngày và Weather sequence.
- Hai crop có thể đứng yên vô hạn.
- R0 có Berry/Wood/Stone deterministic.
- A/C schedule và gift availability.
- C1 Seed Choice, C2 Process/Preserve.
- X2 resource area thứ hai.
- Mọi AP estimate trong route.

## 12. Bước tiếp theo

Thiết kế và paper-test ba loop tối thiểu:

1. Fishing: repeated-use/timing loop, không dùng delivery Project làm core.
2. Mine: area depth/traversal loop, có deterministic progress và optional reveal.
3. Processing: conversion verb nhận input từ farming, fishing hoặc resource area.

Sau đó chạy lại coverage matrix để kiểm tra Connector/Collector có progression thực thay vì placeholder.

Ba loop đã được dựng và paper-test bước đầu trong [Subsystem loops paper test 01](SUBSYSTEM-LOOPS-PAPER-TEST-01.md). Fishing dùng timing/mastery, Mine dùng persistent Depth và Processing dùng delayed conversion; graph không còn phải dựa hoàn toàn vào delivery Project.
