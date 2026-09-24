# Farming paper simulation 01 — từ dọn đất đến chọn đích cho crop

Ngày chạy: 2026-09-21.

Trạng thái: thử nghiệm giấy cho các node F1–F6 trong [Farming progression graph — bản 0](FARMING-PROGRESSION-GRAPH.md). Mọi con số và luật bên dưới chỉ là dụng cụ thử; không phải quyết định cân bằng hoặc đặc tả đã duyệt.

## 1. Câu hỏi thử nghiệm

1. Với một lượng AP hữu hạn, chuỗi dọn → xới → gieo → tưới → thu hoạch có tạo nhịp ngày đọc được không?
2. Người chơi bắt đầu có lựa chọn ở node nào?
3. Rain giải phóng AP có tạo quyết định hay chỉ làm ngày trống hơn?
4. Khi thu hoạch crop đầu tiên, các đích sử dụng có cạnh tranh thật không?
5. Giao diện thả Seed trực tiếp vào Soil có buộc hành động gieo phải miễn phí AP không?

## 2. Bộ luật thử tạm thời

### 2.1. Trạng thái bắt đầu

- Spring; Season card luôn hiện.
- Weather hôm nay luôn hiện.
- Person chính giữ được Scythe, Hoe và Watering Can; đổi Tool không tốn AP trong phép thử này.
- Hai Overgrown Soil.
- Hai Seed cùng loại.
- 6 AP mỗi ngày.
- Người chơi có thể Sleep khi muốn; AP thừa mất khi sang ngày mới.

### 2.2. Chi phí hành động

| Hành động | Chi phí thử |
| --- | ---: |
| Clear một Overgrown Soil | 1 AP |
| Till một Empty Soil | 1 AP |
| Plant một Seed | 1 AP |
| Water một Growing Crop | 1 AP |
| Harvest một Mature Crop | 1 AP |
| Gift một Produce cho Person | 1 AP + Produce |
| Đưa Produce vào nơi bán cuối ngày | 0 AP trong phép thử |

Plant vẫn tốn 1 AP dù thao tác giao diện là kéo Seed trực tiếp vào Soil. Cử chỉ xác định ý định; preview có thể thông báo và thu AP. Đây chỉ là một giả thuyết cần so với phương án Plant không tốn AP.

### 2.3. Luật tăng trưởng

- Crop cần ba lần Sleep sau một ngày được tưới để trưởng thành.
- Rain tự tính là đã tưới cho toàn bộ outdoor crop.
- Không tưới làm crop đứng yên, không chết.
- Sau lần cập nhật thứ ba, crop trở thành Mature vào đầu ngày tiếp theo.
- Harvest tạo một Produce và trả plot về Tilled Soil.

### 2.4. Chuỗi Weather thử

| Ngày | Weather |
| --- | --- |
| 1 | Sunny |
| 2 | Sunny |
| 3 | Rain |
| 4 | Sunny |
| 5 | Sunny |

Weather được chọn để kiểm tra một ngày Rain trước lần harvest đầu tiên, không phải phân bố Weather đề xuất.

## 3. Chạy chuỗi năm ngày

Ký hiệu tăng trưởng `0/3` đến `3/3` là công cụ ghi chép của phép thử, không yêu cầu card thật phải in số theo cách này.

### Day 1 — khởi tạo một crop, chuẩn bị crop thứ hai

| Thứ tự | Hành động | AP còn lại | Trạng thái liên quan |
| ---: | --- | ---: | --- |
| 1 | Person + Scythe → Soil A | 5 | A: Empty Soil |
| 2 | Person + Hoe → Soil A | 4 | A: Tilled Soil |
| 3 | Seed → Soil A | 3 | A: Growing Crop 0/3 |
| 4 | Person + Watering Can → A | 2 | A: Watered |
| 5 | Person + Scythe → Soil B | 1 | B: Empty Soil |
| 6 | Person + Hoe → Soil B | 0 | B: Tilled Soil |

Sau Sleep:

- A tăng thành `1/3`.
- B vẫn là Tilled Soil.

Nhận xét: sáu AP tạo một crop đang lớn và chuẩn bị được plot thứ hai. Ngày đầu gần như là tutorial tuyến tính; thứ tự có thể khác nhưng chưa có nhiều lý do chiến lược để làm khác.

### Day 2 — gieo crop thứ hai

| Thứ tự | Hành động | AP còn lại | Trạng thái liên quan |
| ---: | --- | ---: | --- |
| 1 | Seed → Soil B | 5 | B: Growing Crop 0/3 |
| 2 | Water A | 4 | A: Watered |
| 3 | Water B | 3 | B: Watered |

Còn 3 AP nhưng trong phạm vi F1–F6 không có việc farming nào khác cần làm.

Sau Sleep:

- A tăng thành `2/3`.
- B tăng thành `1/3`.

Nhận xét: nếu không có Person, forage, dọn thêm debris hoặc hoạt động nền khác từ sớm, nửa ngày thứ hai không có lựa chọn. Cho phép Sleep sớm che được AP thừa nhưng không tự tạo gameplay.

### Day 3 — Rain giải phóng toàn bộ AP farming

Rain tự tưới A và B. Không có hành động farming bắt buộc trong phạm vi phép thử; cả 6 AP đều còn.

Sau Sleep:

- A tăng thành `3/3` và sẽ Mature vào đầu Day 4.
- B tăng thành `2/3`.

Nhận xét: Rain chỉ tạo quyết định nếu game đã có việc khác đáng làm. Nếu chưa mở subsystem hoặc cơ hội nào khác, Rain đơn giản làm ngày trống. Weather và progression mở hoạt động phải được kiểm tra cùng nhau.

### Day 4 — harvest đầu tiên và lựa chọn đích

Đầu ngày:

- A: Mature Crop.
- B: Growing Crop `2/3`.
- Giả sử một Person nhận Produce này làm quà đang có thể gặp hôm nay; đây là điều kiện thử cho F6, không phải lịch Person đề xuất.

| Thứ tự | Hành động | AP còn lại | Trạng thái liên quan |
| ---: | --- | ---: | --- |
| 1 | Harvest A | 5 | Nhận Produce A; Soil A trở lại Tilled |
| 2 | Seed mới → Soil A | 4 | A: Growing Crop 0/3 |
| 3 | Water A | 3 | A: Watered |
| 4 | Water B | 2 | B: Watered |

Tại đây người chơi có lựa chọn thử:

- Đưa Produce A vào nơi bán, không tốn AP trong giả thuyết này.
- Tốn 1 AP và Produce A để tặng Person, nhằm kết bạn hoặc nhận Heart.
- Giữ Produce A, nhưng giá trị của việc giữ chưa được thiết kế trong phạm vi phép thử.

Sau Sleep:

- A tăng thành `1/3`.
- B tăng thành `3/3` và sẽ Mature vào Day 5.

Nhận xét: F6 là lần đầu một output có ít nhất hai đích khác nhau. Tuy nhiên chưa thể gọi đây là lựa chọn cân bằng: thu nhận Person + Heart có thể vượt xa giá trị bán nếu Gold chưa mở một unlock cạnh tranh.

### Day 5 — vòng sản xuất bắt đầu lặp

Đầu ngày B đã Mature.

| Thứ tự | Hành động | AP còn lại | Trạng thái liên quan |
| ---: | --- | ---: | --- |
| 1 | Harvest B | 5 | Nhận Produce B; Soil B trở lại Tilled |
| 2 | Seed mới → Soil B | 4 | B: Growing Crop 0/3 |
| 3 | Water A | 3 | A: Watered |
| 4 | Water B | 2 | B: Watered |

Hai AP còn lại có thể được dùng cho Person hoặc subsystem khác nếu đã mở. Nếu không, nhịp ngày tiếp tục có khoảng trống lớn.

## 4. Kết quả chính

### 4.1. Chuỗi thao tác đọc được nhưng F1–F5 chủ yếu là onboarding

Hai plot tạo ra một lịch crop lệch nhau và giúp các ngày harvest không hoàn toàn trùng. Tuy nhiên trước harvest đầu tiên, người chơi chưa có nhiều lựa chọn trong riêng farming. Không nên nhầm việc có nhiều thao tác với việc có nhiều quyết định.

### 4.2. Plant trực tiếp không đồng nghĩa Plant miễn AP

Người chơi có thể kéo Seed thẳng vào Soil và vẫn trả 1 AP khi thả hợp lệ. UI cần preview chi phí trước khi thực hiện. Vì vậy chưa cần thay ngữ pháp card chỉ để giải thích AP.

Phương án Plant 0 AP vẫn cần chạy như một biến thể sau nếu muốn AP chỉ đại diện cho lao động cần Tool.

### 4.3. Rain phụ thuộc vào hoạt động cạnh tranh

Rain giải phóng 2 AP ở Day 3 nhưng trong graph farming hiện tại không có nơi tiêu AP đó. Để Weather làm thay đổi kế hoạch thay vì chỉ rút ngắn ngày, ít nhất một trong các hướng sau phải khả dụng sớm:

- Gặp/tặng quà cho Person của hôm nay.
- Dọn thêm đất hoặc debris.
- Forage hoặc hoạt động tìm resource nền.
- Một project card đang mở.
- Một area cơ bản khác đã có từ đầu.

Chưa chọn hướng nào.

### 4.4. Đích sử dụng crop phải có lợi ích cạnh tranh

Sell miễn AP còn Gift tốn AP + item. Gift chỉ là lựa chọn thật nếu Person/Heart/khả năng đem lại giá trị đủ khác biệt; ngược lại, nếu lần gift đầu thu nhận hẳn một Person, Gift có thể luôn áp đảo Sell.

Phép thử chưa đủ để cân bằng F6. Cần biết Gold mở gì, Person đầu tiên làm gì và giữ crop có giá trị gì.

### 4.5. Hai plot chưa tạo áp lực AP thường nhật

Ngày không harvest chỉ cần 2 AP tưới. Nếu AP là 6, người chơi còn phần lớn ngày cho hệ khác. Đây có thể là nhịp đúng, nhưng chỉ đánh giá được sau khi đặt farming cạnh Person và một hoạt động resource khác.

### 4.6. Expansion có một ngưỡng nguy hiểm rõ ràng

Nếu mỗi crop cần 1 AP tưới:

| Active crop | AP tưới/ngày | Tỷ lệ của 6 AP |
| ---: | ---: | ---: |
| 1 | 1 | 17% |
| 2 | 2 | 33% |
| 3 | 3 | 50% |
| 4 | 4 | 67% |
| 5 | 5 | 83% |
| 6 | 6 | 100% |

Ngày harvest/replant còn đắt hơn tưới thường. Vì vậy nếu giữ 6 AP và 1 AP mỗi plot, relief/automation phải xuất hiện trước hoặc quanh mốc 3–4 active crop, không phải sau khi người chơi đã lấp sáu plot.

Đây là giới hạn suy ra trong bộ số thử, không phải đề xuất chốt sáu AP.

## 5. Những lỗi và khoảng trống đã lộ ra

1. Chưa biết hoạt động nền nào có từ Day 1 để cạnh tranh với farming.
2. Chưa biết Gold mở gì, nên không thể định giá lựa chọn Sell.
3. Chưa biết Person đầu tiên làm gì, nên không thể định giá Gift.
4. Chưa biết giữ Produce có mục đích sớm nào ngoài chờ dùng sau.
5. Chưa biết Seed mới đến từ đâu; phép thử đã tự cấp Seed mới ở Day 4–5 để tiếp tục vòng lặp.
6. Chưa biết tool switching và việc Person chính “cầm” nhiều Tool được biểu đạt ra sao.
7. Chưa biết Sleep sớm có hoàn toàn tự do hay cần một điều kiện tối thiểu.
8. Chưa biết Weather tương lai có được forecast hay chỉ Weather hôm nay được thấy.
9. Chưa biết crop sau harvest trả Soil về Tilled hay Empty; phép thử dùng Tilled.
10. Chưa biết một thao tác Water có thể tác động lên stack/group hay luôn chỉ một plot.

## 6. Quyết định chưa được phép suy ra từ phép thử

- Không chốt 6 AP/ngày.
- Không chốt hai Soil bắt đầu.
- Không chốt ba ngày lớn.
- Không chốt Plant, Harvest hoặc Gift đều tốn đúng 1 AP.
- Không chốt Rain tự tưới mọi outdoor crop.
- Không chốt bán miễn AP.
- Không chốt crop không chết khi thiếu nước.
- Không chốt Soil vẫn Tilled sau harvest.
- Không chốt có Person phù hợp vào Day 4.

## 7. Bước kiểm tra kế tiếp

Phép thử F1–F6 cho thấy chưa nên mở rộng ngay tới F7–F11. Cần thêm tối thiểu hai hoạt động cạnh tranh vào cùng chuỗi ngày để AP có ý nghĩa:

1. Một cơ hội Person cụ thể, gồm Gift và một khả năng đã biết giá trị.
2. Một nguồn resource nền hoặc project cụ thể có thể tiêu AP từ Day 1.

Việc này đã được chạy trong [Farming paper simulation 02](FARMING-PAPER-SIMULATION-02.md). Hai route đã khác nhau, nhưng Person K-test chỉ tiết kiệm một AP và chưa thay đổi kết quả crop nhìn thấy trong fixture hiện tại.
