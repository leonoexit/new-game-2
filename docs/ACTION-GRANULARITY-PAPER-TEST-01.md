# Action granularity paper test 01 — một AP tác động lên gì?

Ngày chạy: 2026-09-21.

Trạng thái: paper test tiếp nối [AP economy paper test 01](AP-ECONOMY-PAPER-TEST-01.md). Tài liệu so sánh các cách xác định phạm vi của một action; không chốt mô hình, số AP, capacity của Tool, số crop hay chi phí các động từ.

Later Farm resolution 2026-09-24: [rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) uses the existing Watering Can on one Growing Crop for 1 AP and the Hand on one Mature Crop for 1 AP as a working first-playable paper rule. The upgrade/automation possibilities below remain old comparisons; no Water Trough, Harvest Bench or replacement relief has been selected.

## 1. Phân loại trạng thái thiết kế trước khi thử

### 1.1. Điều người dùng đã chốt

- Card/group có thể làm gateway mở area khác để bàn không trở thành một đống thẻ.
- Cử chỉ giao diện và chi phí game là hai vấn đề riêng. Ví dụ kéo Seed trực tiếp vào Soil không tự động làm Plant miễn AP.
- Xem hoặc bỏ qua Person không tốn AP; Gift tốn AP và item hợp lệ.
- Khả năng Person có thể thay đổi kết quả của một action. K-test đã được dùng để chia cùng tổng `2 Progress` sang hai Project mà không tăng AP.

Không có quyết định đã chốt rằng một AP phải tác động lên một card, một stack, một group hay toàn bộ các card hợp lệ.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Dùng paper simulation để kiểm chứng trước khi code hoặc prototype.
- Tạm dùng 6 AP để stress-test, không biến nó thành luật.
- Expansion F7, nghĩa vụ AP F8 và relief/automation F9 phải được xét cùng nhau.
- Group/area trước hết đang giải quyết khả năng đọc và điều hướng bàn; chưa được xác nhận là đơn vị kinh tế.

### 1.3. Giả thuyết cần thử

Một action nên được tách thành bốn phần:

```text
động từ + tập đích hợp lệ + capacity + chi phí
```

Giả thuyết ứng viên là:

> Một AP trả cho một **action instance**. Mỗi động từ hoặc hiệu ứng nói rõ instance đó xử lý bao nhiêu đích; stack/group không tự quyết định số đích được xử lý.

Đây là giả thuyết của phép thử, chưa phải luật đã chốt.

### 1.4. Fixture/số tạm của simulation

- 6 AP/ngày.
- Gift, Work và Prepare mỗi việc tốn 1 AP.
- Mỗi Growing Crop cần Water trong ngày Sunny để tiến triển khi Sleep.
- Mọi crop thử nằm trong cùng một Field group trừ khi ghi khác.
- Biến thể capacity dùng `3 target/action` chỉ để nhìn hình dạng scaling; không phải thông số Tool đề xuất.

## 2. Vì sao “card”, “stack”, “group” và “action” không đồng nghĩa

| Khái niệm | Nó trả lời câu hỏi gì? | Ví dụ |
| --- | --- | --- |
| Card | Thế giới đang biểu diễn thực thể/trạng thái nào? | Một Crop Plot, một Person, một Mine |
| Stack | Có bao nhiêu card/vật cùng loại đang được trình bày gọn? | Seed ×5 |
| Group/area | Những card nào đang được chứa hoặc xem cùng nhau? | Field chứa sáu plot; Mine mở area bên trong |
| Action instance | Người chơi đang cam kết làm việc gì một lần? | Water, Gift, Work |
| Capacity | Một instance được phép tác động lên bao nhiêu đích? | Water 1 crop hoặc tối đa 3 crop |

Nếu lấy đơn vị hiển thị làm đơn vị AP, thay đổi bố cục UI có thể vô tình thay đổi economy. Ví dụ Seed ×5 được gộp stack để tiết kiệm chỗ không nên tự động biến thành “Plant năm plot với 1 AP”. Tương tự, mở Field group để giấu sáu plot không tự động chứng minh Water Field phải tưới cả sáu.

## 3. Bốn mô hình được so sánh

### Mô hình A — atomic theo target card

- 1 AP tác động lên đúng một target card.
- Water bốn Crop Plot là bốn action và bốn AP.
- Dễ đọc, nhưng workload tăng tuyến tính với số card.

### Mô hình B — một group/stack là một đơn vị

- 1 AP áp dụng cùng một động từ lên mọi target hợp lệ trong group hoặc stack được chọn.
- Water Field group tưới toàn bộ crop bên trong.
- Hiệu quả phụ thuộc cách card được group; gom hoặc tách group có thể đổi chi phí.

### Mô hình C — một verb xử lý toàn context

- 1 AP dùng Water xử lý mọi crop hợp lệ trong context hiện tại, không phụ thuộc group.
- Tránh exploit do xếp group, nhưng chi phí gần như không tăng khi farm mở rộng.

### Mô hình D — action có capacity tường minh

- 1 AP trả cho một action instance; verb/Tool/effect quy định số target tối đa.
- Ví dụ thử: Water có capacity 3, nên bốn crop cần hai action.
- Group có thể là nơi chọn đích, nhưng không tự cấp capacity.

Mô hình D bao gồm A như trường hợp capacity bằng 1. Nó cũng cho phép Rain, Tool upgrade, Person ability hoặc automation thay đổi phạm vi bằng một luật được ghi rõ.

## 4. Test 1 — ngày routine theo quy mô farm

Ngoài Water, ngày thử luôn có ba việc đáng làm:

| Việc | AP fixture |
| --- | ---: |
| Gift một Person bằng quà đã có | 1 |
| Work một Project | 1 |
| Prepare một bước cho tương lai | 1 |
| Tổng ngoài farming | 3 |

Tổng nhu cầu AP theo số Growing Crop:

| Crop cần Water | A: từng card | B: cùng một group | C: toàn context | D: capacity 3 |
| ---: | ---: | ---: | ---: | ---: |
| 2 | 5 | 4 | 4 | 4 |
| 3 | 6 | 4 | 4 | 4 |
| 4 | 7 | 4 | 4 | 5 |
| 6 | 9 | 4 | 4 | 5 |

### Đọc kết quả

- A tái tạo đúng pressure của AP test 01: ba crop làm ngày kín, bốn crop buộc bỏ việc. Nhưng nếu không có relief, sáu crop khiến farming chiếm toàn ngày.
- B và C xóa gần như toàn bộ pressure do expansion. Hai hay sáu crop đều chỉ tăng một AP Water; mở thêm plot phần lớn chỉ tăng output.
- D tạo economy of scale có kiểm soát. Tuy nhiên `capacity 3` đang quá hào phóng cho early game nếu mục tiêu là để ba crop làm ngày kín; con số này chỉ chứng minh đường cong có thể được điều chỉnh.

## 5. Test 2 — thay đổi cách group mà không đổi thế giới

Giữ bốn crop giống hệt nhau và chỉ đổi cách trình bày:

| Bố cục | A: từng card | B: theo group | C: toàn context | D: capacity 3 |
| --- | ---: | ---: | ---: | ---: |
| Bốn crop trong một Field group | 4 AP Water | 1 | 1 | 2 |
| Hai Field group, mỗi group hai crop | 4 | 2 | 1 | 2 |
| Bốn crop hiện trực tiếp trên bàn | 4 | 4 nếu mỗi card thành một group | 1 | 2 |

Mô hình B làm chi phí đổi từ 1 sang 4 AP chỉ vì cấu trúc chứa/hiển thị đổi. Điều này chỉ hợp lý nếu từng group là một đơn vị thế giới có ý nghĩa cố định — chẳng hạn một luống lớn được thiết kế như một tài sản duy nhất — chứ không thể là luật chung cho mọi group/gateway.

## 6. Test 3 — harvest burst

Board thử có bốn crop: hai Mature, hai Growing; người chơi có hai Seed và muốn replant ngay. Ngoài farm còn Gift và Work.

| Việc mong muốn | A: từng card | B: theo group | C: toàn context | D: capacity 3 |
| --- | ---: | ---: | ---: | ---: |
| Harvest hai Mature | 2 | 1 | 1 | 1 |
| Plant hai Seed | 2 | 1 | 1 | 1 |
| Water bốn crop sau replant | 4 | 1 | 1 | 2 |
| Gift + Work | 2 | 2 | 2 | 2 |
| Tổng | 10 | 5 | 5 | 6 |

### Đọc kết quả

- A làm burst cost rất mạnh; người chơi không thể giữ toàn bộ cycle và làm cả Gift lẫn Work trong cùng ngày.
- B/C cho xử lý toàn bộ farm và cả hai việc ngoài farm trong 5 AP. Đồng bộ nhiều crop chín cùng ngày không còn là áp lực đáng kể.
- D giữ được cảm giác nâng cấp làm farm trơn hơn mà vẫn còn biên capacity. Với fixture capacity 3, ngày này vừa đúng 6 AP; đây không phải bằng chứng 3 là con số đúng.

## 7. Ảnh hưởng tới Tool, automation và Person

| Mô hình | Chỗ còn lại cho progression |
| --- | --- |
| A | Rõ: nâng capacity, giảm AP, Rain hoặc automation đều giải phóng workload; rủi ro early game thành việc lặp |
| B | Nếu group đã xử lý mọi card, nâng Tool khó tạo khác biệt ngoài tăng kích thước group hoặc miễn action |
| C | Tool/automation dễ trở thành dư thừa vì một verb đã xử lý toàn context từ đầu |
| D | Có nhiều trục tường minh: capacity, eligibility, số charge, AP cost hoặc tự động hóa một tập đích cố định |

K-test đã là một ví dụ nhỏ của action scope tường minh:

```text
Work thường: 2 Progress vào 1 Project
Work + K:    1 Progress vào mỗi 1 trong 2 Project
```

Group của Project không quyết định hiệu ứng. K sửa scope của Work, giữ nguyên tổng output và AP. Điều này nhất quán với D, nhưng không đủ để chốt D cho toàn game.

## 8. Kết luận mới từ phép thử

### 8.1. Điều có thể bác bỏ như một luật chung

Không nên dùng quy tắc chung “1 AP = 1 stack/group”. Group/gateway đang phục vụ tổ chức bàn và có thể thay đổi theo UI; cho nó tự quyết định chi phí làm economy phụ thuộc bố cục. Một card đại diện thật sự cho một đơn vị thế giới lớn vẫn có thể có action riêng tác động lên cả đơn vị đó.

Không nên dùng quy tắc chung “1 AP = verb tác động lên mọi card hợp lệ”. Trong fixture, mô hình này làm expansion từ hai lên sáu crop gần như miễn phí về AP và thu hẹp chỗ cho automation.

Hai nhận định này là kết quả phân tích của phép thử, chưa phải quyết định do người dùng chốt.

### 8.2. Giả thuyết mạnh nhất để mang sang vòng sau

> **1 AP = 1 action instance; action tự công bố scope/capacity.**

Fixture tiếp theo nên bắt đầu manual Tool ở capacity 1 để giữ kết quả đã quan sát trong AP economy test 01. Sau đó mới cho một upgrade thử tăng capacity hoặc một automation thử bỏ Water ở một số plot, nhằm đo relief có xuất hiện đúng lúc không.

Điều này không có nghĩa mọi verb phải capacity 1:

- Gift vẫn có thể là một item → một Person.
- Work + K có thể chia effect sang hai Project.
- Rain có thể xử lý mọi outdoor crop vì đó là Weather rule tường minh.
- Một upgraded Watering Can có thể xử lý nhiều crop vì capacity được ghi rõ.
- Một công trình có thể tự xử lý các plot được gắn với nó vì phạm vi automation được ghi rõ.

Đây vẫn là **giả thuyết cần thử**, không phải luật đã chốt.

## 9. Hệ quả UI cần giữ nếu thử giả thuyết D

- Preview phải nói rõ số target và AP trước khi thả: `Water 3 crop · 1 AP`.
- Nếu source là stack, preview phải nói rõ số lượng bị tiêu: `Plant 2 Seed · 1 AP`, không suy từ dấu `×N`.
- Nếu thả Tool vào group, game cần highlight chính xác card nào sẽ bị tác động hoặc cho chọn tối đa capacity.
- Card không đủ điều kiện không được âm thầm tính vào capacity.
- Cùng một luật scope phải hoạt động bằng kéo-thả và bàn phím.

Các điểm này chỉ mô tả cách làm cho paper rule đọc được; không cho phép bắt đầu prototype.

## 10. Các biến vẫn mở

- Manual Tool khởi đầu có capacity 1 hay lớn hơn.
- Capacity khác nhau theo từng verb hay theo Tool tier.
- Người chơi chọn từng target trong capacity hay action tự lấy mọi target hợp lệ theo thứ tự đã biết.
- Plant và Harvest có nên được batch giống Water hay giữ atomic lâu hơn.
- “Một plot card” đại diện cho một cây, một ô đất hay một luống có nhiều cây.
- Rain tác động lên crop mới Plant cùng ngày hay chỉ crop có từ đầu ngày.
- Automation thay capacity, xóa AP, hay chuyển Water thành điều kiện resource khác.
- Stack vật phẩm là số lượng vật lý hay chỉ là cách hiển thị inventory trong từng context.

## 11. Phép thử kế tiếp

Chạy một chuỗi F7–F9 có ba giai đoạn trên cùng lịch Person/Project:

1. Hai crop với manual capacity 1.
2. Mở rộng lên bốn crop trước khi có relief.
3. Nhận một Tool upgrade hoặc automation rồi mở rộng lên sáu crop.

Cần đo ở mỗi giai đoạn:

- AP farming trung bình và burst.
- Số ngày người chơi phải bỏ Person/Project.
- Upgrade giải phóng bao nhiêu AP thực, không chỉ giảm số thao tác tay.
- Expansion sau upgrade có tái tạo lựa chọn hay chỉ đưa workload trở lại đúng chỗ cũ.

Chuỗi này đã được chạy trong [Farming F7–F9 paper simulation 01](FARMING-F7-F9-PAPER-SIMULATION-01.md). Kết quả cho thấy maintenance relief và harvest/replant burst relief phải được đo riêng; Water capacity 2 có thể tiết kiệm nhiều AP thật nhưng vẫn không đủ để một farm sáu crop giữ toàn bộ cycle trên harvest day.
