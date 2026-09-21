# Farming relief paper simulation 02 — payback và thứ tự đầu tư

Ngày chạy: 2026-09-21.

Trạng thái: sensitivity test tiếp nối [Farming F7–F9 paper simulation 01](FARMING-F7-F9-PAPER-SIMULATION-01.md). Phép thử so ba hình dạng relief và hai thứ tự `expansion-first` / `relief-first`. Mọi chi phí mở khóa, số module, capacity và lịch đều là fixture; không phải economy đã chốt.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Farming expansion phải cạnh tranh AP với Person, Project và hoạt động khác.
- Rain có thể thay đổi công việc trong ngày.
- Save tiếp tục qua nhiều năm; Year 1 là phạm vi nội dung/cân bằng có thể chọn, không phải luật reset.
- Group/gateway có thể tổ chức bàn nhưng chưa được chốt là đơn vị action.

Người dùng chưa chọn dạng Tool upgrade, automation, chi phí mở khóa, số plot hoặc nhịp xuất hiện của relief.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Dùng paper simulation trước khi code/prototype.
- Đánh giá F7 expansion, F8 workload và F9 relief cùng nhau.
- Dùng 6 AP làm số thử, không chốt.
- Đánh giá cả steady maintenance và harvest/replant burst.

### 1.3. Giả thuyết cần thử

1. Relief-first có thể tạo một vòng lặp đầu tư lành mạnh: trả AP trước → giải phóng AP hằng ngày → dùng AP đó để expansion hoặc sang subsystem khác.
2. Expansion-first có thể tạo lock-in: plot mới lấy hết AP maintenance nên người chơi khó tài trợ relief nếu không bỏ crop hoặc opportunity.
3. Water Tool, fixed automation và burst relief có payback khác nhau dù cùng được gọi chung là “giảm việc”.

### 1.4. Fixture/số tạm

- 6 AP/ngày.
- Cửa sổ đo gồm 5 Sunny day + 1 Rain day.
- Mọi active crop cần Water trong Sunny day.
- Hai crop bắt đầu; expansion thêm hai crop cần tổng cộng 6 AP:
  - Clear hai plot: 2 AP.
  - Till hai plot: 2 AP.
  - Plant hai plot: 2 AP.
- Người chơi đã có Seed/material cần thiết; fixture chỉ đo AP.
- Việc ngoài farm đáng làm: 2 AP/ngày.
- Water, Harvest và Plant mặc định capacity 1.

## 2. Ba gói relief thử

| Gói | Hiệu ứng fixture | Setup cost fixture | Tính chất cần kiểm tra |
| --- | --- | ---: | --- |
| W — Water Tool | Water capacity 1 → 2 | 6 AP | Linh hoạt chọn target, giảm số action routine |
| A — Fixed automation | Ba module; mỗi module tự Water một plot đã gắn | 3 AP/module, 9 AP tổng | Cam kết vào infrastructure, không cần action trên plot đó |
| B — Burst kit | Harvest capacity 2 và Plant capacity 2 | 6 AP tổng | Không giảm routine; giảm peak khi nhiều crop Mature |

Chi phí khác nhau chỉ để có một phép payback cụ thể. Không suy ra automation phải đắt hơn Tool hoặc hai burst verb phải cùng nằm trong một upgrade.

## 3. Gross AP saving trong cùng cửa sổ sáu ngày

### 3.1. Water Tool W

| Active crop | Water AP cũ mỗi Sunny day | Water AP mới | Tiết kiệm/ngày | Gross saving qua 5 Sunny day |
| ---: | ---: | ---: | ---: | ---: |
| 2 | 2 | 1 | 1 | 5 |
| 4 | 4 | 2 | 2 | 10 |
| 6 | 6 | 3 | 3 | 15 |

Với setup 6 AP:

- Chưa hoàn vốn trong cửa sổ ở hai crop.
- Hoàn vốn sau ba Sunny day ở bốn crop.
- Hoàn vốn sau hai Sunny day ở sáu crop.

Rain không tạo saving vì cả trước và sau upgrade đều cần 0 manual Water trong fixture.

### 3.2. Fixed automation A

Ba module tiết kiệm tối đa 3 AP mỗi Sunny day nếu cả ba plot đều có crop cần Water.

| Active crop | Module đang có target | Gross saving qua 5 Sunny day | So với setup 9 AP |
| ---: | ---: | ---: | ---: |
| 2 | 2/3 | 10 | +1 AP sau cửa sổ |
| 4 | 3/3 | 15 | +6 |
| 6 | 3/3 | 15 | +6 |

Con số ở hai crop có thể gây hiểu lầm: module thứ ba đang không làm gì, nhưng hai module còn lại đã xóa toàn bộ maintenance. Nếu module được mua từng cái, người chơi có thể chỉ trả 6 AP cho hai module rồi chờ expansion mới xây module thứ ba.

Automation không tiếp tục scale sau khi ba plot đã được gắn. Tool W tiếp tục hưởng lợi từ mọi cặp target mới nhưng vẫn cần action.

### 3.3. Burst kit B

Fixture dùng cohort tối đa hai crop Mature cùng ngày.

| Active crop | Harvest cohort trong cửa sổ | Saving mỗi cohort | Gross saving |
| ---: | --- | ---: | ---: |
| 2 | Hai cohort × 1 crop | 0 | 0 |
| 4 | Hai cohort × 2 crop | 2 AP | 4 |
| 6 | Ba cohort × 2 crop | 2 AP | 6 |

Mỗi cohort hai crop tiết kiệm:

- Harvest: 2 action → 1, tiết kiệm 1 AP.
- Plant: 2 action → 1, tiết kiệm 1 AP.

Với setup 6 AP, B chỉ vừa hoàn vốn trong cửa sổ sáu crop. Nhưng gross saving tập trung đúng harvest day, nên nó có thể đáng giá hơn một lượng AP trung bình tương đương nếu mục tiêu là tránh bỏ một Person opportunity có hạn.

## 4. Payback không đủ để xếp hạng

Nếu chỉ nhìn bảng trên, automation có vẻ hoàn vốn nhanh. Nhưng ba gói giải ba vấn đề khác nhau:

| Câu hỏi | W — Water Tool | A — Automation | B — Burst kit |
| --- | --- | --- | --- |
| Giảm routine Sunny? | Có | Có | Không |
| Giảm harvest peak? | Chỉ phần Water | Chỉ phần Water | Có |
| Linh hoạt đổi target? | Có | Không | Có trong verb hợp lệ |
| Còn giá trị khi Rain? | Không trong ngày đó | Không trong ngày đó | Có nếu Harvest/Plant vẫn diễn ra |
| Có giá trị ở hai crop? | Nhỏ | Rất mạnh nếu gắn cả hai | Không với cohort một crop |
| Scale khi thêm plot? | Có theo số cặp | Dừng ở số module | Có theo kích thước cohort |

Một gói có payback chậm vẫn có thể giữ một opportunity quan trọng đúng ngày. Một gói payback nhanh có thể dư thừa nếu Weather hoặc crop calendar khiến target của nó không hoạt động.

## 5. Route E — expansion trước relief

### 5.1. Trước expansion

Với hai crop, một Sunny routine day cần:

```text
Water 2             2 AP
Việc ngoài farm     2 AP
Spare để đầu tư     2 AP
```

Người chơi có thể dùng spare để Clear/Till/Plant hai plot mới. Tổng expansion cost fixture là 6 AP, nên ba Sunny routine day hoặc một chuỗi có Rain đủ để hoàn tất mà không bỏ việc khác.

### 5.2. Sau expansion lên bốn crop

Sunny routine day trở thành:

```text
Water 4             4 AP
Việc ngoài farm     2 AP
Spare               0 AP
```

Khi cohort hai crop Mature:

```text
Harvest 2 + Plant 2 + Water 4     8 AP farming
+ việc ngoài farm                  2 AP
= 10 AP mong muốn
```

Route E tạo một lock-in mềm:

- Routine không còn AP tự do để Work vào relief Project.
- Harvest day buộc trì hoãn crop hoặc bỏ opportunity ngay cả trước khi trả setup cost relief.
- Rain day trở thành cửa sổ gần như bắt buộc để tài trợ upgrade nếu người chơi không muốn hy sinh nhánh khác.

Đây không phải soft-lock kỹ thuật: người chơi vẫn có thể bỏ Water, để Soil trống hoặc Sleep. Nó là lock-in về economy vì quyết định expansion trước làm chi phí thoát khỏi workload cao hơn.

## 6. Route R-W — Water relief trước expansion

Ở hai crop, W giảm Water từ 2 xuống 1 action mỗi Sunny day:

```text
Water 2 bằng capacity 2     1 AP
Việc ngoài farm             2 AP
Spare sau upgrade           3 AP
```

W cần 6 AP setup nhưng chỉ tiết kiệm 1 AP/Sunny khi farm còn hai crop, nên riêng payback ngắn hạn chưa hấp dẫn. Giá trị chiến lược là nó giữ lại spare sau expansion:

```text
Bốn crop, Water cap 2       2 AP
Việc ngoài farm             2 AP
Spare                       2 AP
```

Route này có thể dùng AP được giải phóng để trả expansion cost mà không khiến routine day lập tức kín. Tuy nhiên harvest day bốn crop vẫn cần:

```text
Harvest 2 + Plant 2 + Water 2 action = 6 AP farming
+ việc ngoài farm                         2 AP
= 8 AP
```

W tránh maintenance lock-in nhưng không tránh burst tradeoff.

## 7. Route R-A — automation trước expansion

Nếu chỉ lắp hai module ở hai plot hiện có:

- Setup tạm: 6 AP.
- Sunny maintenance của hai crop: 0 AP.
- Sau khi giữ hai việc ngoài farm, còn 4 AP/ngày cho expansion hoặc subsystem khác.

Khi mở plot thứ ba và thứ tư:

- Hai plot cũ vẫn tự Water.
- Hai plot mới cần 2 AP manual Water.
- Module thứ ba có thể được xây thêm 3 AP nếu người chơi muốn cố định relief vào một plot mới.

Route A tạo payback sớm hơn W trong fixture vì nó xóa action thay vì tăng capacity. Đổi lại:

- Relief bị khóa vào plot đã gắn.
- Một plot để trống làm module tạm không tạo giá trị.
- Nếu crop cần chuyển area hoặc có indoor/outdoor rule, module không tự đi theo.

Không có dữ liệu reward/resource để kết luận A mạnh hơn W. Fixture chỉ chứng minh fixed automation có thể là một nhánh đầu tư khác về chất, không phải “Tool upgrade nhưng tự động”.

## 8. Route R-B — burst relief trước expansion

Ở hai crop được stagger thành cohort một crop, B không tiết kiệm AP. Routine vẫn còn 2 spare trên Sunny day, nhưng setup 6 AP không tự hoàn vốn trước expansion.

Sau khi lên bốn crop theo cohort hai:

```text
Harvest capacity 2          1 AP
Plant capacity 2            1 AP
Water 4                     4 AP
Farming total               6 AP
Việc ngoài farm             2 AP
Tổng                        8 AP
```

B giảm harvest day từ 10 xuống 8 AP nhưng routine vẫn kín 6 AP khi cộng việc ngoài farm. Nó phù hợp với người chơi đã có cách chịu maintenance nhưng cần bảo vệ deadline/opportunity trên harvest day; nó không phải relief tốt để tài trợ expansion ban đầu.

## 9. Weather thay đổi thứ tự đầu tư

### Rain trước expansion

Rain day ở farm hai crop giải phóng 2 Water AP. Nếu action setup hợp lệ trong ngày đó, Rain giúp hoàn tất expansion hoặc relief sớm mà không cần chọn bên nào.

### Rain ngay sau harvest

Người chơi có thể Harvest hôm nay, trì hoãn Plant sang Rain day và để Weather xử lý Water sau khi Plant — **chỉ nếu luật Rain tưới crop mới Plant cùng ngày được giữ**. Khi đó Rain đóng vai trò burst relief gián tiếp.

### Chuỗi Rain dày

Nhiều Rain day kéo dài payback của W/A vì số manual Water bị thay thế ít hơn. B vẫn tiết kiệm Harvest/Plant trên Rain day. Vì vậy Weather forecast có thể làm thứ tự đầu tư thay đổi:

- Gần chuỗi Sunny: W/A hấp dẫn hơn.
- Gần harvest cohort trong Rain: B có thể hấp dẫn hơn.

Đây là một tương tác có triển vọng, nhưng phụ thuộc việc người chơi biết forecast tới đâu; forecast chưa được chốt.

## 10. Kết luận mới

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Relief-first và expansion-first tạo hai đường progression khác nhau thật.** Expansion-first cho output sớm nhưng có thể xóa spare AP cần để tài trợ relief.
2. **Water relief có hiệu ứng compounding.** Nó không chỉ giảm việc hiện tại; nó giữ capacity để mở plot hoặc bước sang subsystem khác.
3. **Burst relief không thay thế maintenance relief.** Nó bảo vệ harvest day nhưng không tạo spare trong routine day.
4. **Automation và Tool không nên chỉ khác artwork.** Fixed target và flexible capacity tạo các cam kết khác nhau.
5. **Gross AP payback không đủ để cân bằng.** Timing của AP saving và loại opportunity được cứu quan trọng ngang tổng lượng saving.
6. **Rain có thể là cửa sổ đầu tư hoặc relief gián tiếp.** Điều này chỉ có nghĩa khi action setup và forecast đủ rõ.

### 10.2. Giả thuyết mạnh nhất để mang sang bước sau

- Cho người chơi thấy expansion sẽ làm tăng workload trước khi cam kết.
- Đưa ít nhất một maintenance relief vào tầm với trước khi bốn crop tạo cohort harvest đầu tiên.
- Giữ burst relief thành một lựa chọn riêng, không mặc định mọi Water upgrade cũng batch Harvest/Plant.
- Tránh cấu trúc mà Rain là cách duy nhất để thoát expansion lock-in.
- Dùng preview của Project/upgrade để nói rõ: setup cost, target scope và AP dự kiến được giải phóng.

Các điểm trên vẫn là giả thuyết cần kiểm chứng bằng reward/resource economy.

## 11. Các fixture chưa được phép hóa thành luật

- W setup 6 AP và Water capacity 2.
- Module automation giá 3 AP và tự Water đúng một plot.
- B setup 6 AP, Harvest/Plant capacity 2.
- Expansion hai plot giá tổng 6 AP.
- Năm Sunny + một Rain trong cửa sổ.
- Hai AP việc ngoài farm mỗi ngày.
- Cohort tối đa hai crop.
- Rain tưới crop Plant trong cùng ngày.

## 12. Lỗ hổng cần xử lý tiếp

Phép thử cố ý cho người chơi có sẵn Seed/material, nên chưa trả lời được:

- Expansion và relief cạnh tranh item nào, không chỉ AP.
- Gold có mua Tool/module/Seed hay mở một đích khác.
- Project cần Work thuần hay cần nộp resource.
- Crop được Sell, Gift, giữ, nộp Project hoặc dùng chế biến tạo giá trị tương đối nào.
- Person ability có thể thay đổi setup cost/payback ra sao.

Bước kế tiếp phải thêm một resource/economy ledger nhỏ. Không cần định giá toàn game; chỉ cần đủ để kiểm tra liệu route relief-first có thật sự là lựa chọn hay luôn bị một resource gate làm bất khả thi.

Ledger này đã được dựng trong [Resource economy paper simulation 01](RESOURCE-ECONOMY-PAPER-SIMULATION-01.md). First harvest hiện tạo tension giữa Seed, relief, Gift và collection; Person K tiết kiệm một Work AP trên cặp Project nhưng chưa hoàn vốn trong horizon ngắn.
