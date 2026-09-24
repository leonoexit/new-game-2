# Farming progression graph — bản 0

Ngày ghi nhận: 2026-09-21.

Trạng thái: mô hình thử để kiểm tra cấu trúc micro-objective. Chưa chốt số AP, số ngày, số luống, resource, recipe, phần thưởng, thứ tự mở khóa hoặc tên card. Không phải đặc tả triển khai.

Cập nhật 2026-09-24: F9 dưới đây từng giả định cần một Project để giảm công tưới; cả ba Project đề xuất sau đó đã bị bác bỏ. [Farm action grammar và AP rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) là luật giấy hiện hành cho Watering Can, Rain, Sleep growth và Hand Harvest. F9 vẫn là câu hỏi lịch sử về cảm giác thao tác, không phải một Project/upgrade đã chọn.

Đọc cùng [nghiên cứu progression Stardew Valley](STARDEW-PROGRESSION-REFERENCE.md) và [thiết kế UI card](CARD-UI-DESIGN.md).

## 1. Những tiền đề đang dùng

Các điểm do người dùng mô tả hoặc đã đồng ý dùng để tiếp tục suy nghĩ:

- Weather và Season hiện trên bàn; Season luôn hiện, Weather thay đổi theo ngày.
- Luống đất và crop nằm trong thế giới thường trực.
- Person chính có thể cầm Tool. Tổ hợp Person chính + Tool tương tác với lá đích để biểu đạt hành động.
- Seed được đặt vào Soil; sau Sleep, hình trên lá crop tự thể hiện tiến trình phát triển.
- AP là ngân sách hành động đang xét; cơ chế kết thúc ngày và số AP chưa chốt.
- Một số card như River, Mine, Coop hoặc Mushroom House có thể là cổng mở area/group khác để bàn không trở thành đống thẻ.
- Hướng hiện tại là save có thể tiếp tục qua nhiều năm. Một năm không mặc định buộc reset.
- Tiến triển dùng các micro-objective mở dần; chưa có quyết định cần một objective trung tâm.

## 2. Ngữ pháp farming tối thiểu đang xét

| Thành phần | Vai trò |
| --- | --- |
| Person chính | Agent thực hiện công việc |
| Tool đang được Person chính cầm | Xác định động từ có thể dùng |
| Soil / Crop | Đích và trạng thái thường trực |
| Seed / resource | Vật được đặt, tiêu hoặc chuyển |
| AP | Chi phí hành động; giá trị chưa chốt |
| Sleep | Điểm thế giới cập nhật và crop tiến triển |

Ví dụ ngữ pháp do người dùng đưa ra:

- Person chính cầm Scythe + Overgrown Soil → dọn cỏ.
- Person chính cầm Watering Can + Crop Plot → tưới.
- Seed + Soil → bắt đầu crop; card crop đổi hình/trạng thái qua ngày.

Việc có cần Person chính tham gia thao tác gieo Seed hay không chưa chốt. Bản graph giữ đúng mô tả hiện tại và đánh dấu đây là chỗ cần kiểm tra tính nhất quán sau.

## 3. Graph tổng quát

```text
[F1 Dọn luống đầu tiên]
          ↓
[F2 Chuẩn bị đất]
          ↓
[F3 Gieo hạt]
          ↓
[F4 Chăm qua ngày]
          ↓
[F5 Thu hoạch đầu tiên]
          ↓
 [F6 Chọn đích cho crop]
      ↙        ↓         ↘
   bán/giữ    Person    project/collection
      ↓
[F7 Mở rộng số luống] ──→ [F8 Nghĩa vụ AP tăng]
                                  ↓
                       [F9 Giảm ma sát / automation]
                                  ↓
                       [F10 Đa dạng hóa mùa vụ]
                                  ↓
                       [F11 Nối sang subsystem khác]

[F5–F11] đồng thời đóng góp vào collection/mastery dài hạn,
không bắt buộc nằm trên một đường thẳng duy nhất.
```

## 4. Mười một node thử nghiệm

| Node | Micro-objective / trạng thái | Thay đổi trên bàn | Quyết định mới được tạo | Loại progression |
| --- | --- | --- | --- | --- |
| F1 | Dọn một Overgrown Soil bằng Person chính đang cầm Scythe | Overgrown Soil đổi thành Empty Soil | Dùng AP để mở capacity trồng hay dành ngày cho việc khác | Tutorial + capacity |
| F2 | Dùng Hoe chuẩn bị Empty Soil | Empty Soil đổi thành Tilled Soil | Chuẩn bị bao nhiêu luống trước khi có đủ Seed và AP chăm sóc | Tutorial + cam kết |
| F3 | Đặt một Seed hợp lệ vào Tilled Soil | Soil chứa Growing Crop; hình crop cho biết giai đoạn | Chọn loại crop nào và chấp nhận số ngày chăm sóc tương ứng | Mở tiến trình qua ngày |
| F4 | Tưới và Sleep đủ chu kỳ để crop lớn | Crop đổi mặt/trạng thái sau mỗi lần cập nhật hợp lệ | Hôm nay tưới crop nào; Weather có thay công việc hay không | Routine + world state |
| F5 | Thu hoạch crop đầu tiên | Crop tạo Produce; plot trở về trạng thái phù hợp với luật crop | Dùng Produce vào đâu thay vì tự động bán | Milestone đầu tiên |
| F6 | Đưa Produce tới một trong các đích đang mở | Produce được bán, giữ, tặng, nộp hoặc xử lý; chỉ các đích đã mở mới hiện | Lợi ích tức thì hay tiến triển dài hạn | Junction / resource tension |
| F7 | Dọn hoặc mở thêm Soil | Farm có thêm plot khả dụng | Mở rộng sản lượng hay giữ workload nhỏ | Capacity expansion |
| F8 | Duy trì nhiều crop trong cùng một ngày | Không nhất thiết tạo card mới; áp lực xuất hiện trong phân bổ AP | Crop nào đáng tưới khi không đủ AP cho mọi việc | Player-created obligation |
| F9 | Hoàn thành một project giảm công tưới | Tool được cải thiện, tưới theo nhóm hoặc một dạng automation xuất hiện; cơ chế cụ thể chưa chốt | Đầu tư resource hôm nay để giải phóng AP cho các ngày sau | Friction reduction |
| F10 | Trồng nhiều loại hoặc hoàn thành một tập mùa vụ | Seed pool, crop collection hoặc lựa chọn mùa vụ mở rộng; tiêu chí chưa chốt | Chuyên canh crop hiệu quả hay đa dạng để mở lựa chọn | Diversification + collection |
| F11 | Dùng farming output để mở một subsystem liên quan | Xuất hiện cổng/project sang cooking, Person, animal, crafting hoặc area khác | Nhánh nào của cuộc sống được ưu tiên tiếp theo | Cross-system branch |

## 5. Không phải node nào cũng là một lá Objective

Để tránh biến game thành quest journal:

| Node | Cách biểu đạt có thể phù hợp |
| --- | --- |
| F1–F5 | Hướng dẫn ngữ cảnh, đích sáng và card state; không nhất thiết tạo objective card |
| F6 | Các đích hợp lệ trên bàn tự thể hiện lựa chọn |
| F7 | Overgrown Soil hiện hữu là một khả năng, không phải mệnh lệnh |
| F8 | Hệ quả nổi lên từ AP và số crop; không cần thanh tiến độ |
| F9 | Project card hoặc upgrade card hữu hình |
| F10 | Collection page, seasonal set hoặc seed discovery; chưa chọn cách biểu đạt |
| F11 | Gateway/project card của subsystem được mở |

Micro-objective ở đây là đơn vị tiến triển người chơi có thể hướng tới, không đồng nghĩa mọi đơn vị đều cần hiện thành nhiệm vụ.

## 6. Những quan hệ cần kiểm tra bằng tình huống chơi

### 6.1. Expansion có thực sự tạo lựa chọn hay chỉ tạo việc nhà?

Nếu mỗi plot cần một AP tưới mỗi ngày, số plot tối đa có thể bị khóa cứng bởi AP và làm mọi ngày giống nhau. F7–F9 phải được kiểm tra cùng nhau; không cân bằng expansion riêng khỏi automation.

### 6.2. Crop đầu tiên có ít nhất hai đích đáng cân nhắc không?

F6 chỉ có ý nghĩa khi giữ, bán, tặng hoặc nộp tạo lợi ích khác nhau. Không cần mở mọi đích ngay, nhưng tại mỗi giai đoạn nên có ít nhất hai lựa chọn có lý.

### 6.3. Weather thay đổi kế hoạch hay chỉ miễn một thao tác?

Rain tự tưới có thể giải phóng AP, nhưng cần xem AP đó tạo cơ hội gì khác. Nếu không có hoạt động cạnh tranh đáng làm, Weather không tạo quyết định.

### 6.4. Card crop chứa bao nhiêu state?

Tối thiểu cần phân biệt loại crop, giai đoạn lớn và trạng thái liên quan đến lần cập nhật tiếp theo. Không tự thêm nhiều token nếu hình ảnh/mặt card đã truyền đạt đủ.

### 6.5. Farming nối sang Person ở đâu?

Produce có thể làm quà để kết bạn hoặc hồi Heart, nhưng không nên mặc định mọi crop chỉ là gift currency. Cần kiểm tra xung đột giữa bán, project và tặng quà có tạo lựa chọn hay khiến một đích luôn vượt trội.

## 7. Các biến cố ý chưa điền số

- AP mỗi ngày và chi phí từng thao tác.
- Cách kết thúc ngày, khả năng Sleep sớm và điều xảy ra với AP thừa.
- Số Soil bắt đầu, cách mở thêm Soil và giới hạn capacity.
- Crop đầu tiên, thời gian lớn, có cần tưới mỗi ngày hay không.
- Hậu quả khi không tưới; trì hoãn tăng trưởng hay tổn thất khác.
- Cách Seed xuất hiện và được mua, tìm hoặc tái tạo.
- Cách bán và vai trò của tiền.
- Dạng automation: nâng Tool, tưới nhóm, sprinkler, Person ability hoặc công trình.
- Tiêu chí diversity/collection và phần thưởng.
- Subsystem đầu tiên farming nên nối tới.

Không điền các biến này cho đến khi graph chứng minh được mỗi bước tạo lựa chọn đáng quan tâm.

## 8. Bộ lọc cho vòng tiếp theo

Với từng node, loại hoặc sửa nếu:

- Chỉ tăng con số mà không thay đổi cách chơi.
- Tạo thêm việc lặp nhưng không có đường giảm ma sát.
- Chỉ có một lựa chọn hợp lý về kinh tế.
- Cần một màn hình quest riêng trong khi card state đã truyền đạt đủ.
- Mở subsystem mới nhưng không cho subsystem đó quay lại ảnh hưởng farming.
- Buộc người chơi hoàn thành mọi nhánh để tiếp tục save.

Chuỗi đầu tiên đã được chạy trong [Farming paper simulation 01](FARMING-PAPER-SIMULATION-01.md). Kết quả cho thấy cần đặt farming cạnh ít nhất một cơ hội Person và một nguồn resource/project nền trước khi kiểm tra F7–F11.
