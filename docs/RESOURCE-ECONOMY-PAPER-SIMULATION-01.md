# Resource economy paper simulation 01 — Produce, Gold, Project và Person K

Ngày chạy: 2026-09-21.

Trạng thái: ledger test tiếp nối [Farming relief paper simulation 02](FARMING-RELIEF-PAPER-SIMULATION-02.md). Mục tiêu là thêm vừa đủ resource gates để kiểm tra `relief-first` có thật sự là lựa chọn, không thiết kế hoặc cân bằng toàn bộ economy. Tất cả giá, reward, source, requirement và lịch dưới đây là fixture.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Một item nên có nhiều đích cạnh tranh như Sell, Gift, Project/collection, chế biến hoặc giữ lại.
- Gift tốn AP + item hợp lệ; lần đầu có thể thu nhận Person và Heart.
- Heart gắn riêng với từng Person, tồn tại qua ngày và có cap riêng chưa chốt.
- Person K có thể đổi một Work `2 Progress vào một Project` thành `1 + 1 Progress vào hai Project`, không tăng tổng Progress và không tăng AP.
- Sưu tầm Person là một hướng chơi, không phải objective bắt buộc.
- Objective được hé lộ dần; không cần hiện toàn bộ checklist từ đầu.

Người dùng chưa chốt giá Produce/Seed, cách mua bán, Project recipe, nguồn Wood/Metal hoặc collection reward.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Farming, Person, Project và resource source cùng cạnh tranh AP.
- Relief/automation phải giải phóng AP thật, không chỉ tăng output.
- Save nhiều năm; không có deadline cuối Year 1 bắt buộc trong phép thử.
- Tiếp tục bằng paper simulation, không code/prototype.

### 1.3. Giả thuyết cần thử

1. First harvest có thể tạo junction thật nếu cùng Produce cần tài trợ Seed, relief, Person và collection.
2. Resource gate có thể ngăn relief-first trở thành đường luôn đúng.
3. K có thể cải thiện throughput Project nhưng không hoàn vốn ngay chỉ bằng một lần sử dụng.
4. Objective reveal phải đi kèm khả năng hiểu nguồn nguyên liệu; requirement chưa có nguồn đọc được sẽ tạo lựa chọn giả.

### 1.4. Fixture/số tạm

- 6 AP/ngày; manual farming vẫn dùng các fixture trước.
- Bắt đầu với hai crop và không có Seed dự phòng.
- Mỗi Produce bán được 3 Gold.
- Mỗi Seed mua giá 1 Gold.
- Sell và Buy không tốn AP trong ledger này; đây là biến cần sensitivity sau.
- First harvest tạo 2 Produce.
- Berry là quà hợp lệ cho K và có thể Collect từ Hedgerow bằng 1 AP.
- Gift Berry → K tốn thêm 1 AP và tạo 1 K Heart.
- Fixture cho phép dùng Heart nhận được ngay trong ngày; chưa chốt luật này.

## 2. Hai Project và một micro-objective thử

### Project W — maintenance relief

Reward fixture: Water capacity 1 → 2.

Requirement:

| Thành phần | Lượng |
| --- | ---: |
| Gold | 4 |
| Metal | 1 |
| Progress | 3 |

- Mine/source tạo 1 Metal bằng tổng 2 AP trong fixture.
- Work 1 AP → 2 Progress.
- Không dùng K: cần 2 Work, tạo 4 Progress và tràn 1.

Tổng ngoài Gold: `2 AP lấy Metal + 2 AP Work = 4 AP`.

### Project E — mở hai plot tiếp theo

Requirement mở access:

| Thành phần | Lượng |
| --- | ---: |
| Wood | 2 |
| Progress | 3 |

- Grove/source cho 1 Wood mỗi Collect 1 AP.
- Không dùng K: 2 Collect + 2 Work = 4 AP.
- Sau khi access mở, hai plot vẫn cần Clear 2 + Till 2 + Plant 2 = 6 AP và 2 Seed.

Tổng để hai plot mới hoạt động: `10 AP + 2 Gold mua Seed`.

### Micro-objective C — crop collection thử

- Nộp 1 Produce đầu tiên.
- Submission miễn AP trong fixture.
- Reward chỉ được mô tả là mở một Seed option khác; chưa định giá output.
- C không bắt buộc để tiếp tục save.

Project W, Project E, tên resource và reward đều là fixture để nối các hệ; không phải content đã chốt.

## 3. First-harvest junction

Hai Produce tạo các cách phân bổ sau:

| Lựa chọn | Gold nhận | Gold sau khi mua 2 Seed để replant | Hệ quả tức thì |
| --- | ---: | ---: | --- |
| Sell cả hai | 6 | 4 | Đủ phần Gold của W, chưa có Seed cho expansion |
| Sell 1, Gift 1 crop | 3 | 1 | Có Person/Heart nếu crop hợp lệ; W bị chậm ít nhất 3 Gold |
| Sell 1, nộp C 1 | 3 | 1 | Mở Seed option thử; W bị chậm |
| Giữ cả hai | 0 | Không đủ mua Seed | Dừng cycle nếu không có nguồn Seed/Gold khác |

Nếu dùng Berry để kết bạn K:

```text
Collect Berry + Gift K     2 AP
Sell 2 Produce             6 Gold
Mua 2 Seed                 -2 Gold
Còn cho W                   4 Gold
```

Berry cho phép giữ nguyên junction kinh tế của Produce nhưng không miễn opportunity cost: hai AP social cạnh tranh trực tiếp với Work, Metal hoặc Wood.

### Kết quả

Với fixture này, first harvest đã có ít nhất ba hướng không tương đương:

- Bảo toàn production và tài trợ relief.
- Đổi output lấy Person/Heart.
- Đổi output lấy diversification/collection.

Chưa biết reward tương đối có cân bằng; phép thử chỉ xác nhận cấu trúc cạnh tranh tồn tại.

## 4. Resource gate của relief-first

Để hoàn thành W sau first harvest, người chơi phải:

1. Sell cả hai Produce để còn 4 Gold sau khi mua Seed replant.
2. Dành 2 AP lấy Metal.
3. Dành 2 AP Work.

Nếu Gift hoặc nộp một Produce, W thiếu 3 Gold dù AP setup vẫn có. Nếu Mine/Metal chưa mở, 4 Gold cũng chưa đủ biến thành upgrade.

Do đó relief-first không còn là lựa chọn tự động:

- Nó cần ưu tiên Sell ở first harvest.
- Nó cần tiếp cận đúng resource source.
- Nó cạnh tranh bốn AP với social, expansion và Project khác.
- Nó trì hoãn collection/diversification ít nhất tới harvest sau nếu không có nguồn Gold khác.

### Reveal dependency

W chỉ là lựa chọn có thể đánh giá nếu người chơi biết:

- cần 4 Gold + 1 Metal + 3 Progress;
- Metal đến từ source nào hoặc ít nhất source đó sẽ mở bằng cách gì;
- upgrade thay đổi Water từ scope nào sang scope nào.

Hiện W khi Metal hoàn toàn chưa được giải thích sẽ tạo một requirement không thể lập kế hoạch, không phải một mystery hữu ích.

## 5. Resource gate của expansion-first

Để E tạo hai active crop mới:

```text
Collect 2 Wood       2 AP
Work Project         2 AP
Clear 2              2 AP
Till 2               2 AP
Plant 2              2 AP
Mua 2 Seed           2 Gold
Tổng                 10 AP + 2 Gold
```

Sau first harvest, nếu Sell cả hai rồi mua bốn Seed — hai để replant, hai cho expansion — người chơi còn:

```text
6 Gold - 4 Seed = 2 Gold
```

E có thể được tài trợ item ngay, nhưng W vẫn thiếu 2 Gold và Metal. Khi bốn crop hoạt động, Sunny routine dùng 4 Water AP; cộng hai AP ngoài farm thì không còn spare để lấy Metal hoặc Work W.

Expansion-first vì thế có hai lợi ích và một rủi ro rõ:

- Lợi ích: output capacity tăng sớm; harvest tương lai có thể sinh Gold nhanh hơn.
- Lợi ích: không phải chờ Metal source.
- Rủi ro: AP maintenance tăng trước khi W được tài trợ, tái tạo lock-in mềm từ phép thử trước.

Không thể kết luận route nào mạnh hơn cho tới khi mô phỏng timing harvest và opportunity thực tế.

## 6. K trên hai Project song song

W và E đều cần 3 Progress.

### Không dùng K

```text
Work W hai lần     4 Progress, tràn 1
Work E hai lần     4 Progress, tràn 1
Tổng               4 AP Work
```

### Dùng 1 K Heart

```text
Work + K           W +1, E +1
Work W             W +2, hoàn thành 3
Work E             E +2, hoàn thành 3
Tổng               3 AP Work + 1 Heart
```

K tiết kiệm 1 AP và 2 Progress tràn trên cặp Project.

Nếu K chưa được thu nhận, Berry route cần:

```text
Collect Berry + Gift K     2 AP
AP Work được K tiết kiệm   1 AP
Net trong hai Project      -1 AP
```

Người chơi còn giữ K cho tương lai nhưng đã tiêu Heart vừa nhận. Vì vậy K không phải lựa chọn thắng ngay nếu chỉ xét hai Project này. Giá trị của social investment phụ thuộc việc các Project phù hợp tiếp tục xuất hiện và cơ hội hồi Heart của K.

Đây tiếp tục xác nhận kết quả cũ: K cần một horizon dài hơn hoặc timing pressure thật để khác biệt nhìn thấy rõ.

## 7. Person, crop và collection không nên cùng bị ép qua một item

Fixture cho Berry làm quà thay thế crop. Điều này tạo hai route social:

| Route | Item cost | AP cost | Tác động lên Gold/Seed |
| --- | --- | ---: | --- |
| Gift crop | 1 Produce | 1 | Mất 3 Gold tiềm năng |
| Collect + Gift Berry | 1 Berry | 2 | Không mất Produce; mất thêm 1 AP Collect |

Đây là một tradeoff dễ đọc: trả bằng output kinh tế hoặc bằng thời gian tìm quà.

Nếu mọi Person chỉ nhận crop và mọi early Project/collection cũng đòi crop, farming trở thành nguồn bắt buộc cho tất cả hướng sống. Điều đó sẽ mâu thuẫn với hướng sưu tầm Person là tùy chọn và nhiều lối sống cùng tồn tại. Phép thử gợi ý cần ít nhất một số gift/resource source ngoài crop; chưa chốt Hedgerow/Berry là content thật.

## 8. Objective reveal thử

Một trình tự reveal có thể kiểm tra tiếp:

| Trigger fixture | Thứ được reveal | Lý do |
| --- | --- | --- |
| Bắt đầu với hai crop | Overgrown Soil / E access | Cho thấy expansion là khả năng, không phải quest bắt buộc |
| Sau lần đầu Water đủ hai crop | W preview | Người chơi đã trải nghiệm maintenance trước khi thấy relief |
| Đầu ngày K xuất hiện | K + context/area | Đúng luật công bố Person đầu ngày |
| Source Mine/Grove được mở | Metal/Wood source và requirement liên quan | Requirement có nguồn để lập kế hoạch |
| First harvest | Sell, Gift, C cùng trở thành đích hợp lệ | Junction xuất hiện khi người chơi thật sự có Produce |

Đây là giả thuyết reveal, không phải lịch Year 1. Điểm cần giữ là objective chỉ nên xuất hiện khi người chơi hiểu ít nhất một hành động có thể tiến tới nó.

## 9. Kết luận mới

### 9.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Resource gate làm relief-first thành lựa chọn thật.** Muốn W sớm, người chơi phải Sell cả first harvest, tìm Metal và dành AP Work.
2. **Expansion-first mua output tương lai bằng cả Gold lẫn workload.** Nó có thể tăng thu nhập sớm nhưng làm AP để hoàn tất relief khan hiếm hơn.
3. **Produce đã có tension đa đích trong fixture.** Replant, W, Gift và collection không thể cùng được tài trợ từ hai Produce đầu.
4. **Quà ngoài crop đổi loại chi phí chứ không xóa chi phí.** Berry route giữ Gold nhưng tốn thêm AP.
5. **K chưa hoàn vốn trong horizon hai Project.** Điều này tốt cho việc tránh Person trở thành lựa chọn bắt buộc, nhưng giá trị dài hạn vẫn chưa được chứng minh.
6. **Objective reveal và source reveal phụ thuộc nhau.** Requirement không có nguồn đọc được tạo lựa chọn giả.

### 9.2. Giả thuyết mạnh nhất để mang sang bước sau

- Giữ ít nhất một gift source ngoài crop trong early economy test.
- Để first harvest mở nhiều đích cùng lúc, nhưng không bắt buộc người chơi dùng đủ mọi đích.
- Cho W và E cùng có thể được nhìn thấy trước quyết định first-harvest allocation, với source requirement đủ rõ.
- Không cân bằng Person chỉ bằng AP tiết kiệm ngay; đo quyền tiếp cận action mới qua nhiều Project/day.
- Dùng một daily route comparison để đo chính xác khi nào W-first vượt E-first và opportunity nào bị bỏ.

Tất cả vẫn là giả thuyết cần thử.

## 10. Fixture chưa được phép hóa thành luật

- Produce bán 3 Gold; Seed giá 1 Gold.
- Buy/Sell miễn AP.
- W cần 4 Gold + 1 Metal + 3 Progress và cho Water capacity 2.
- E cần 2 Wood + 3 Progress rồi thêm 6 AP + 2 Seed để activate hai plot.
- Metal tốn 2 AP; Wood tốn 1 AP/item.
- C nhận 1 Produce miễn AP và mở Seed option.
- K nhận Berry, tạo/tiêu Heart ngay trong ngày và được phép Work Project chưa đủ resource.
- Project chấp nhận Progress trước khi nộp đủ item.

## 11. Bước tiếp theo

Chạy hai route theo ngày trên cùng Weather/Person/source schedule:

1. W-first: Sell first harvest, lấy Metal, hoàn thành relief rồi mở plot.
2. E-first: mua Seed expansion, lấy Wood, mở plot rồi dùng output tăng thêm để quay lại W.
3. Một nhánh social/collection để đo chi phí của việc không tối ưu Gold.

Cần ghi ở mỗi ngày:

- AP farm, AP source, AP Project, AP Person.
- Gold, Seed, Produce, Wood, Metal.
- Project progress và Heart.
- Opportunity hết hạn bị bỏ.
- Ngày đạt W, ngày đạt bốn active crop và harvest/output tích lũy.

Ba route đã được chạy trong [Resource economy daily routes 02](RESOURCE-ECONOMY-DAILY-ROUTES-02.md). W-first giữ nhiều opportunity và thu nhận K; E-first đạt output milestone sớm hơn; collection-first trả một cost rõ nhưng reward chưa đủ dữ liệu để định giá.
