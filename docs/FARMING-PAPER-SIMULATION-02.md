# Farming paper simulation 02 — farming cạnh Person và Project

Ngày chạy: 2026-09-21.

Trạng thái: thử nghiệm giấy nối farming F1–F6 với một cơ hội Person và hai Project. Mọi tên, số, lịch, reward và luật phụ bên dưới đều là test fixture; không phải nội dung hoặc cân bằng đã chốt.

Đọc sau [Farming paper simulation 01](FARMING-PAPER-SIMULATION-01.md).

## 1. Mục tiêu

Phép thử 01 cho thấy AP được giải phóng bởi Rain và các ngày chỉ tưới chưa có đủ nơi cạnh tranh. Phép thử 02 thêm:

1. Một nguồn resource môi trường dùng được từ Day 1.
2. Một Person cụ thể có thể kết bạn.
3. Hai Project song song.
4. Hai đường ưu tiên khác nhau để kiểm tra opportunity cost.

Câu hỏi chính:

> Khi farming, Person và Project cùng cạnh tranh 6 AP, lựa chọn đầu ngày có tạo ra hai kết quả khác nhau có ý nghĩa không?

## 2. Các fixture được thêm vào

### 2.1. Hedgerow — nguồn resource thử

- Hedgerow là một gateway/source card có từ đầu.
- Trong phép thử, Day 1 nó lộ một Wild Berry.
- Collect Wild Berry tốn 1 AP và đưa Berry vào phần sở hữu của người chơi.
- Berry không tự thu vào inventory nếu người chơi không Collect.
- Phép thử không quyết định Hedgerow làm mới hằng ngày, dùng deck, roll hay lịch mùa.

Fixture này chỉ chứng minh dạng quan hệ:

```text
Source card lộ resource
→ người chơi chi AP để thu nhận
→ resource trở thành item có thể dùng ở nhiều đích
```

### 2.2. Person K-test

- K-test tự động được công bố là có thể gặp vào Day 1 và Day 4.
- Wild Berry và crop thử đều được xem là quà hợp lệ.
- Gift tốn 1 AP + item.
- Lần đầu Gift: thu nhận K-test và nhận 1 K Heart.
- Lần sau Gift: nhận 1 K Heart; không nhận bản sao Person.
- Heart tồn tại qua ngày. Cap dùng trong phép thử là 2, chỉ để log không vượt vô hạn.

Khả năng cơ học của K-test lấy từ hạt nhân K đang được giữ để thử:

> Khi thực hiện Work, có thể tiêu 1 K Heart để đặt 1 Progress vào mỗi một trong hai Project hợp lệ, thay vì đặt 2 Progress vào một Project.

Khả năng không tốn thêm AP và không tạo thêm tổng Progress.

### 2.3. Hai Project thử

Work được biểu đạt bằng Person chính → Project:

- Work tốn 1 AP.
- Work thường đặt 2 Progress vào một Project.
- Progress vượt quá requirement bị mất.
- Project hoàn thành ngay khi đạt requirement.

| Project | Requirement | Reward thử | Mục đích trong phép thử |
| --- | ---: | --- | --- |
| Repair Seed Box | 3 Progress | Nhận 3 Seed | Bịt lỗ hổng Seed mới đến từ đâu |
| Repair Shipping Crate | 3 Progress | Mở đích Sell miễn AP vào cuối ngày | Tạo một đích cạnh tranh cho Produce |

Tên và reward chỉ phục vụ phép thử. Không suy ra game cần đúng hai Project này.

## 3. Các luật giữ lại từ phép thử 01

- 6 AP/ngày; AP thừa mất khi Sleep.
- Hai Overgrown Soil nhưng chỉ có một Seed ban đầu.
- Clear, Till, Plant, Water, Harvest: mỗi hành động 1 AP.
- Crop cần ba lần Sleep đã được tưới.
- Rain tự tưới outdoor crop.
- Không tưới làm crop đứng yên, không chết.
- Harvest tạo một Produce và trả plot về Tilled Soil.
- Weather: Day 1 Sunny, Day 2 Sunny, Day 3 Rain, Day 4 Sunny, Day 5 Sunny.

Giữ cùng bộ số giúp so sánh trực tiếp với phép thử 01; không làm chúng trở thành quyết định.

## 4. Hai chiến lược được so sánh

### Route F — Farm-first

Ưu tiên đưa hai Soil vào sản xuất sớm. Chấp nhận gặp K-test muộn hơn và sửa Shipping Crate vào Day 3.

### Route P — Person/Project-first

Ưu tiên thu Wild Berry, kết bạn K-test ngay Day 1 và dùng Heart để chia Work giữa hai Project. Chấp nhận Soil B bắt đầu muộn hơn.

Đây không phải hai lựa chọn được game đặt tên. Chúng là hai cách chơi do người thử cố ý chọn để kiểm tra divergence.

## 5. Route F — Farm-first

### Day 1 — dùng toàn bộ AP cho farm

| Hành động | AP |
| --- | ---: |
| Clear A, Till A, Plant A, Water A | 4 |
| Clear B, Till B | 2 |
| Tổng | 6 |

Sau Sleep: A `1/3`; B đã Tilled. Berry vẫn ở Hedgerow. K-test bị bỏ qua trong Day 1 nhưng chưa mất vĩnh viễn vì sẽ xuất hiện lại Day 4.

### Day 2 — mở Seed, trồng B, bắt đầu Shipping

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Water A | 1 | A được cập nhật tối nay |
| Work Seed Box lần 1 | 1 | Seed Box `2/3` |
| Work Seed Box lần 2 | 1 | Seed Box hoàn thành; nhận 3 Seed; 1 Progress tràn bị mất |
| Plant B | 1 | B: Growing Crop `0/3` |
| Water B | 1 | B được cập nhật tối nay |
| Work Shipping Crate | 1 | Shipping `2/3` |
| Tổng | 6 |  |

Sau Sleep: A `2/3`; B `1/3`.

### Day 3 — Rain hoàn tất Shipping

Rain tưới A và B.

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Work Shipping Crate | 1 | Shipping hoàn thành; 1 Progress tràn bị mất |
| AP chưa có đích trong fixture | 5 | Có thể Sleep sớm |

Sau Sleep: A `3/3`, Mature vào Day 4; B `2/3`.

### Day 4 — thu crop đầu và kết bạn K-test

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Harvest A | 1 | Nhận Produce A |
| Plant A | 1 | A bắt đầu crop mới |
| Water A | 1 | A được cập nhật tối nay |
| Water B | 1 | B được cập nhật tối nay |
| Gift Produce A → K-test | 1 + Produce | Thu nhận K-test; nhận 1 K Heart |
| AP còn | 1 | Chưa có Project trong fixture để dùng K |

Sau Sleep: A `1/3`; B `3/3`, Mature vào Day 5.

### Day 5 — thu crop thứ hai

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Harvest B | 1 | Nhận Produce B |
| Plant B | 1 | B bắt đầu crop mới |
| Water A | 1 | A được cập nhật tối nay |
| Water B | 1 | B được cập nhật tối nay |
| Sell Produce B | 0 | Có Gold thử; lượng chưa định nghĩa |
| AP còn | 2 | Không có đích fixture |

### Trạng thái Route F cuối Day 5

- Hai Project hoàn thành.
- K-test được thu nhận vào Day 4; còn 1 Heart chưa dùng.
- Hai crop đã được harvest: một dùng làm Gift, một được Sell.
- Hai Soil đang tiếp tục sản xuất.
- Berry chưa được Collect.
- Shipping mở Day 3.

## 6. Route P — Person/Project-first

### Day 1 — kết bạn trước, chỉ khởi tạo Soil A

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Collect Wild Berry | 1 | Nhận Berry |
| Gift Berry → K-test | 1 + Berry | Thu nhận K-test; nhận 1 K Heart |
| Clear A, Till A, Plant A, Water A | 4 | A bắt đầu crop `0/3` và được tưới |
| Tổng | 6 |  |

Sau Sleep: A `1/3`; B vẫn Overgrown.

### Day 2 — dùng K để hoàn tất đồng thời hai Project

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Water A | 1 | A được cập nhật tối nay |
| Work + K ability | 1 + 1 Heart | Seed Box `1/3`; Shipping `1/3` |
| Work Seed Box | 1 | Seed Box hoàn thành; nhận 3 Seed |
| Work Shipping Crate | 1 | Shipping hoàn thành |
| Clear B | 1 | B: Empty Soil |
| Till B | 1 | B: Tilled Soil |
| Tổng | 6 |  |

Không có Progress tràn ở hai Project. Sau Sleep: A `2/3`; B đã Tilled; K Heart còn 0.

### Day 3 — Rain cho phép gieo B

Rain tự tưới A và sẽ tưới B nếu B được Plant trong ngày.

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Plant B | 1 | B bắt đầu crop `0/3`; Rain tính là đã tưới |
| AP chưa có đích trong fixture | 5 | Có thể Sleep sớm |

Sau Sleep: A `3/3`, Mature vào Day 4; B `1/3`.

### Day 4 — harvest đầu và hồi Heart

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Harvest A | 1 | Nhận Produce A |
| Plant A | 1 | A bắt đầu crop mới |
| Water A | 1 | A được cập nhật tối nay |
| Water B | 1 | B được cập nhật tối nay |
| Gift Produce A → K-test | 1 + Produce | Nhận 1 K Heart |
| AP còn | 1 | Không còn Project trong fixture để dùng Heart |

Sau Sleep: A `1/3`; B `2/3`.

### Day 5 — chưa có harvest thứ hai

| Hành động | AP | Kết quả |
| --- | ---: | --- |
| Water A | 1 | A được cập nhật tối nay |
| Water B | 1 | B được cập nhật tối nay |
| AP chưa có đích trong fixture | 4 | Có thể Sleep sớm |

Sau Sleep: A `2/3`; B `3/3`, Mature vào Day 6.

### Trạng thái Route P cuối Day 5

- Hai Project hoàn thành vào Day 2, sớm hơn Route F một ngày đối với Shipping.
- K-test được thu nhận vào Day 1; hiện còn 1 Heart.
- Chỉ một crop đã được harvest và đã dùng làm Gift; chưa có Produce để Sell.
- Soil B chậm hơn Route F một ngày.
- Hai Soil đang tiếp tục sản xuất.

## 7. So sánh kết quả

| Kết quả cuối Day 5 | Route F: Farm-first | Route P: Person/Project-first |
| --- | --- | --- |
| Thu nhận K-test | Day 4 | Day 1 |
| Hai Project hoàn thành | Day 3 | Day 2 |
| Crop đã harvest | 2 | 1 |
| Item đã Gift | 1 Produce | 1 Produce + 1 Berry |
| Produce có thể Sell | 1 | 0 |
| Soil B bắt đầu lớn | Day 2 | Day 3 |
| K Heart cuối phép thử | 1 | 1 |
| AP tràn do Project | 2 Progress | 0 Progress |

Hai route đã tạo divergence thật: Route F có sản lượng sớm hơn; Route P có Person và infrastructure sớm hơn. Tuy nhiên divergence chưa cân bằng về giá trị vì Gold, giá trị mở Shipping sớm và khả năng tương lai của K chưa được định lượng.

## 8. Kiểm tra riêng giá trị của K

Nếu Route P vẫn kết bạn K-test nhưng không dùng ability ở Day 2:

- Seed Box cần hai Work để vượt từ `0/3` lên hoàn thành.
- Shipping Crate cũng cần hai Work.
- Cộng Water A, tổng là 5 AP; chỉ còn 1 AP để Clear B.
- Day 3 phải Till B rồi Plant B; do Rain, B vẫn đạt `1/3` cuối Day 3.

K ability tiết kiệm đúng 1 AP và cho Till B sớm hơn một ngày, nhưng trong chuỗi Weather này B vẫn trưởng thành cùng ngày dù có hoặc không dùng K. Rain đã hấp thụ khác biệt.

Kết luận thử:

> K tạo hiệu quả số học nhưng chưa tạo khác biệt kết quả nhìn thấy trong early farming fixture này.

K chỉ trở nên rõ khi ít nhất một điều sau đúng:

- Hai Project có deadline khác nhau hoặc cùng phải xong trước một mốc.
- Mở Project sớm một ngày tạo reward dùng được ngay.
- AP thực sự kín vì còn nhiều hoạt động cạnh tranh.
- Progress tràn gây tổn thất đủ đáng kể.
- Có Project mới tiếp tục xuất hiện để Heart đã tích còn nơi dùng.

Đây không phải lý do loại K. Nó cho biết early farming không phải hoàn cảnh tốt để chứng minh giá trị của K nếu Project không có timing pressure.

## 9. Những unknown unknowns mới xuất hiện

1. Project completion có hiệu lực ngay hay sáng hôm sau?
2. Project có chỉ cần Work/AP hay còn cần item cụ thể?
3. Progress vượt requirement bị mất, được hoàn lại hay action không được phép nếu dư?
4. Source card như Hedgerow lộ item theo ngày, theo mùa hay theo hành động?
5. Resource đã lộ nhưng không Collect có tồn tại sang ngày sau không?
6. Rain có tưới crop được Plant trong chính ngày Rain không?
7. Person thu nhận trong ngày có thể dùng ability ngay hay phải chờ ngày sau?
8. Heart nhận từ Gift có thể tiêu ngay trong cùng ngày không?
9. Một Project mở đích Sell có nên xuất hiện sớm đến mức nào?
10. Nếu người chơi chưa mở Sell khi có Produce, storage mặc định nằm ở đâu?

## 10. Kết luận và bước kế tiếp

Phép thử thành công ở việc tạo hai đường chơi khác nhau, nhưng đồng thời cho thấy fixture vẫn quá ít nội dung:

- Day 3 và Day 5 còn nhiều AP không có đích.
- K không thay đổi ngày trưởng thành của crop hoặc số crop harvest trong route dùng K so với cùng route không dùng K.
- Reward của Project đang giải quyết các lỗ hổng test hơn là tạo một economy hoàn chỉnh.

Bước hợp lý tiếp theo không phải tăng thêm Project tùy ý. Cần kiểm tra **AP economy theo một ngày đầy đủ**, gồm:

- Farming maintenance.
- Một Person opportunity.
- Một resource source.
- Một Project đang mở.
- Ít nhất một hoạt động không tạo progress trực tiếp nhưng có giá trị chuẩn bị.

Việc này đã được chạy trong [AP economy paper test 01](AP-ECONOMY-PAPER-TEST-01.md). Sáu AP tạo được nhịp thử đáng quan tâm: vừa đủ ở ngày yên tĩnh, thiếu một ở ngày có Person, dư một ở Rain day và thiếu ba ở harvest day. Câu hỏi tiếp theo là một AP tác động lên một card hay một nhóm/card stack.
