# Tham chiếu điều khiển Stacklands

Ngày ghi nhận: 2026-09-20.

Trạng thái: ghi nhận ý định của người dùng và nghiên cứu tham chiếu. Chưa phải đặc tả điều khiển được duyệt, kế hoạch triển khai hay yêu cầu làm demo.

## 1. Điều cần nhớ trước khi tiếp tục dự án

Người dùng xác định:

> “về mặt tối thiểu, cơ chế điều khiển sẽ hơi giống game stackland, đây chỉ mới là về điều khiển thôi, kể cả thoả cái này chưa chắc đã thoả mấy cái khác”

Tên chính thức của game tham chiếu là **Stacklands**, do Sokpop Collective phát triển.

**Điều khiển hơi giống Stacklands là một điều kiện cần riêng, chưa phải điều kiện đủ để dự án đạt yêu cầu.** Chưa có quyết định phải sao chép toàn bộ thao tác, bố cục hay luật chơi của Stacklands.

Bối cảnh do người dùng cung cấp: dự án đã làm đi làm lại nhiều lần và thất bại vì bắt đầu demo quá sớm, khi chưa thực sự biết sẽ làm gì. Mục đích của lần nghiên cứu này là hiểu và lưu lại nền tảng để trao đổi tiếp.

Không được suy ra từ tài liệu này rằng:

- Đã hiểu đầy đủ trò chơi cần làm.
- Đã duyệt core loop, nhịp chơi, hệ thống hay trải nghiệm cảm xúc.
- Có kéo thả và chồng bài là game đã đúng ý.
- Đã đến lúc dựng prototype hoặc mở rộng tính năng.

## 2. Phạm vi và độ chắc chắn của nghiên cứu

Nghiên cứu qua mô tả và changelog chính thức của nhà phát triển; chưa trực tiếp chơi thử trong lần ghi chép này. Các phím cụ thể dưới đây được ghi theo phiên bản nguồn, không coi là bảng điều khiển đầy đủ của bản hiện hành.

Tài liệu phân biệt ba lớp:

| Lớp | Ý nghĩa |
| --- | --- |
| Đã xác nhận từ người dùng | Mức tương đồng tối thiểu về điều khiển; đạt điều khiển chưa đủ để đạt các mặt khác |
| Đã xác minh từ nguồn | Hành vi Stacklands mà tài liệu chính thức mô tả |
| Diễn giải / câu hỏi mở | Cách đọc tham chiếu cho dự án; chưa trở thành quyết định thiết kế |

## 3. Stacklands: những cơ chế đã xác minh

### 3.1. Tương tác giữa các lá tạo ra hoạt động

Stacklands là game xây dựng làng bằng bài. Ví dụ chính thức: kéo **Villager lên Berry Bush** để tạo **Berry**. Xếp **2 Wood + 1 Stone + 1 Villager** có thể xây **House**; Idea Card chỉ ra công thức. Đây là ví dụ về dùng tổ hợp bài để thực hiện công việc. [Nguồn: Sokpop trên itch.io](https://sokpop.itch.io/stacklands).

### 3.2. Có thao tác với cả chồng bài và khung nhìn

Changelog v1.0.9, ngày 21-04-2022, ghi nhận:

- Giữ **Shift trước khi kéo** để di chuyển cả chồng mà không tách nó.
- Phím **+ / −** có thể điều chỉnh zoom.
- Nút Moon có thể chuyển sang trạng thái tạm dừng.
- Chỉ nhấc được bài sau khi bài đã lật ngửa.

Nguồn này xác nhận sự phân biệt giữa di chuyển cả chồng và thao tác có thể tách chồng; không đủ để mô tả mọi quy tắc chọn lá ở từng vị trí trong chồng. [Nguồn: Stacklands v1.0.9](https://sokpop.itch.io/stacklands/devlog/372184/stacklands-v109).

### 3.3. Có hỗ trợ tổ chức bàn và nhận biết nơi thả

Island Update, ngày 11-07-2022, ghi nhận:

- Nhấn **E** để căn bài vào lưới; có thể đổi phím.
- Vùng mua gói bài và bán bài sáng lên khi có thể nhận bài kéo tới.
- Có tùy chọn tự tạm dừng khi kéo bài.
- Một số công trình nhận nhiều nguyên liệu xếp lên để tiếp tục sản xuất; ví dụ lò luyện và bếp.
- Có hỗ trợ controller và đổi phím điều khiển.

Không suy rộng việc sáng vùng mua/bán thành khẳng định rằng mọi đích tương tác đều được highlight. [Nguồn: Island Update](https://sokpop.itch.io/stacklands/devlog/403017/island-update-out-now).

### 3.4. Những luật chơi đi kèm cần nhận biết để tránh nhập nhằng

Stacklands có bán bài lấy tiền, mua gói bài, nuôi dân vào cuối mỗi Moon và giao chiến tự động khi Villager gặp sinh vật thù địch. Đây là hệ thống của game tham chiếu; yêu cầu “hơi giống về điều khiển” chưa lựa chọn những hệ thống này cho dự án. [Nguồn: trang Steam chính thức](https://store.steampowered.com/app/1948280/Stacklands/).

## 4. Cách hiểu tham chiếu cho dự án — chưa chốt thiết kế

Diễn giải từ các ví dụ đã xác minh: giá trị cần nghiên cứu là **dùng việc thao tác trực tiếp với bài để biểu đạt ý định**.

Chuỗi tương tác có thể mô tả bằng lời:

**Chọn lá → cầm/kéo → đưa tới lá hoặc chồng liên quan → thả → hệ thống xử lý quan hệ giữa các lá → người chơi nhận biết kết quả.**

Đây là mô hình khái quát để trao đổi. Nó chưa quy định kết quả xảy ra tức thì, theo thời gian, theo Energy hay qua Sleep.

Cần phân biệt ba ý nghĩa có thể cùng dùng động tác kéo:

| Ý nghĩa | Câu hỏi cần làm rõ cho dự án |
| --- | --- |
| Di chuyển để sắp xếp | Chỉ đổi vị trí hay có thể vô tình kích hoạt việc gì? |
| Gom / tách một chồng | Chồng biểu thị nhiều đơn vị cùng loại hay một tổ hợp đang làm việc? |
| Đưa các lá vào tương tác | Lá nào là người thực hiện, đối tượng, công cụ, nguyên liệu hoặc nơi nhận? |

Không thể chỉ nhìn thấy bài đè lên nhau rồi kết luận chúng đang làm cùng một việc. Cũng chưa thể đồng nhất một chồng bài nhìn thấy trên bàn với ký hiệu số lượng như `Wood ×12`.

Một cách đánh giá sau này là xem người chơi có hiểu được “mình đang dùng thứ này với thứ kia” qua thao tác và phản hồi hay không. Cách đánh giá này là đề xuất phân tích, chưa phải bộ tiêu chí người dùng đã nghiệm thu.

## 5. Đặt cạnh bản game design đã cung cấp

Đối chiếu với [GAME-DESIGN-SOURCE.md](GAME-DESIGN-SOURCE.md), đặc biệt các mục 4, 7, 9–10, 14, 18, 26 và 45. Những chi tiết trong bản spec là nền để tiếp tục thảo luận, không được coi là đã kiểm chứng chỉ vì đã được viết ra.

| Nội dung trong spec | Liên hệ với tham chiếu điều khiển | Vấn đề vẫn còn mở |
| --- | --- | --- |
| Card là ngôn ngữ của thế giới | Thao tác với card có thể biểu đạt tương tác với sự vật | Cụ thể những tương tác nào bắt buộc dùng kéo/chồng? |
| Farmer, công cụ, đất và cây | Có thể diễn tả công việc qua quan hệ giữa các lá | Kéo Farmer, công cụ hay tổ hợp nào? |
| Seed + Tilled Soil | Đã có ví dụ ghép hai đối tượng trong spec | Trồng xong, bài biến đổi và được đặt ở đâu? |
| Resource cùng loại tự stack | Cần xem xét thao tác số lượng | Kéo một lá lấy một đơn vị hay cả chồng? |
| Machine xử lý qua ngày / Sleep | Đặt nguyên liệu có thể là cách giao việc | Có hàng đợi không, lấy lại nguyên liệu thế nào? |
| Farmer + NPC mở menu | Kéo bài có thể mở một lựa chọn tiếp theo | Khi nào thực hiện trực tiếp, khi nào cần chọn? |
| Energy hữu hạn, không áp lực realtime | Có thể tham khảo cử chỉ mà giữ nhịp ngày riêng | Lúc nào tính chi phí và hoàn tất hành động? |
| Board tự tổ chức, không bắt dọn liên tục | Phải làm rõ quan hệ giữa kéo bài và bố trí tự động | Người chơi được tự đặt bài tới mức nào? |

Các ví dụ trên lấy từ spec hoặc là câu hỏi phân tích; không phải tính năng mới vừa được duyệt.

Nền tảng mobile portrait cũng còn cần thiết kế riêng. Nguồn về Shift, phím E hoặc zoom trên máy tính chưa giải quyết việc chọn một lá trong chồng bằng ngón tay, phân biệt kéo bài với cuộn màn hình, hay nhìn đích thả khi tay che bài.

## 6. Những mặt khác phải được xem xét độc lập

Dù điều khiển đã đạt, các câu hỏi sau vẫn cần câu trả lời riêng:

- **Lựa chọn mỗi ngày:** có nhiều điều đáng muốn làm và có đánh đổi thực sự không?
- **Cảm giác sống:** người chơi có cảm thấy đang chăm sóc một nơi chốn, gắn bó với con người không?
- **Nhịp chơi:** công việc có ý nghĩa hay chỉ là lặp thao tác?
- **Tiến triển:** những thay đổi có khiến người chơi mong chờ ngày tiếp theo không?
- **Khả năng đọc và hiểu:** có hiểu thế giới, trạng thái, chi phí và hệ quả trên màn hình điện thoại không?
- **Tiến triển dài hạn:** save nhiều năm còn mở ra lựa chọn gì, và khi đã mở hết thì những vòng chơi nào vẫn có giá trị tự thân?

Đây là những khía cạnh rút từ bản spec để giữ phạm vi đánh giá rõ ràng. Danh sách này chưa khẳng định đã bao quát hết mong muốn của người dùng.

## 7. Những chi tiết chưa được chốt hoặc kiểm chứng

- Mức độ tương đồng cụ thể mà người dùng muốn ở cảm giác cầm, kéo, đặt và chồng.
- Bàn tự do, bố trí theo vùng, theo ô hay cách tổ chức khác.
- Quy tắc lấy một phần chồng, thứ tự lá trong chồng và giới hạn số lượng.
- Phản hồi khi thả hợp lệ, không hợp lệ, thiếu tài nguyên hoặc có nhiều hành động khả dĩ.
- Hủy trước khi thả, hoàn tác sau khi thả và xử lý một công việc đang chạy.
- Cách xem thông tin, đổi địa điểm và dùng menu bên cạnh thao tác bài.
- Thông số cử chỉ, vùng bắt thả, chuyển động và độ dễ dùng trên thiết bị thật.

Các nguồn đã đọc chưa đủ để xác nhận đầy đủ những chi tiết này ở Stacklands. Tài liệu không tự bổ sung chúng như sự thật, cũng không tự chọn phương án cho dự án.

## 8. Hướng dẫn đọc lại cùng các tài liệu cũ

- Đọc mục 1 của tài liệu này trước khi dùng Stacklands làm lý do triển khai.
- [GAME-DESIGN-SOURCE.md](GAME-DESIGN-SOURCE.md) lưu bản ý tưởng rộng. Câu mở đầu cũ cho rằng bản spec đủ làm nền prototype không thay thế chỉ dẫn hiện tại của người dùng về việc cần hiểu rõ thiết kế trước.
- [CARD-UI-DESIGN.md](CARD-UI-DESIGN.md) lưu thiết kế và những thông số của lần thử trước. Tài liệu đó tự ghi nhận prototype chưa chứng minh được cảm giác chơi; không lấy các thông số ấy làm câu trả lời mặc định cho những câu hỏi đang mở ở đây.
- Khi có quyết định tiếp theo, ghi rõ đâu là xác nhận mới của người dùng, đâu là đề xuất và đâu là điều đã kiểm chứng. Không biến diễn giải của AI thành yêu cầu đã được duyệt.

**Mốc ghi nhớ: điều khiển hơi giống Stacklands; đây mới là một phần tối thiểu của trò chơi cần hiểu và thiết kế.**
