# Mine — đào để lật · tầng mẫu v0.1

Trạng thái: **prototype riêng để thử CG-15/16, chưa phải luật V0 đã duyệt**. Ngày 2026-09-25. Chủ dự án yêu cầu bước tiếp theo là dựng một tầng có đủ luật để đi từ đầu đến cuối. Các phần còn mở được đặt thành giả định có thể sửa trong bản thử này; không ghi chúng thành quyết định gameplay chính thức.

Mở [fixture.html](fixture.html) trong trình duyệt để chơi. Không cần cài dependency hoặc server. Trình duyệt tải `engine.js` và `ui.js` cùng thư mục. Bản thử không kết nối mạng. Tải lại trang bắt đầu lượt mới; giữ tiến độ qua Farm/Sleep chỉ trong phiên đang mở, chưa có lưu đĩa.

## Luật dùng để thử

| Thành phần | Cấu hình v0.1 |
| --- | --- |
| Tầng | 6 ô: 2 Exposed Ore, 3 ô không phát hiện thêm, đúng 1 lối xuống; xáo một lần khi bắt đầu lượt |
| Bàn | 3 ô một nhóm; chưa thể nhìn nội dung nhóm sau |
| AP | Bắt đầu 6 AP; riêng preset CG-16 bắt đầu 2 AP và một nguồn đã lộ |
| Dig | Character + Pickaxe → ô chưa khai mở, trả 1 AP rồi lộ kết quả ngay tại ô |
| Extract | Character + Pickaxe → Exposed Ore đã lộ, trả 1 AP, nhận 1 Ore; nguồn spent, Depth không đổi |
| Ô không phát hiện thêm | Đá đã dọn, không thưởng Stone hoặc item khác; không có hành động đào lần hai |
| Sang nhóm | Sau khi cả nhóm đã khai mở, người chơi chủ động sang nhóm miễn phí. Không cần Extract hết; không tự thay nhóm ở cú đào cuối |
| Quay lại | Sau nhóm 2, một lần gom các nguồn chưa lấy và lối xuống lên bàn, hiện ngửa. Tối đa 3 lá với bộ mẫu này; không chia thêm đợt |
| Kết thúc vòng quay lại | Nhóm cuối ở lại cho tới khi người chơi xuống tầng hoặc về Farm. Không có nút bỏ qua lối xuống để vô tình kết thúc vòng; không xáo/rút lại |
| Xuống tầng | Character → lối xuống đang hiện, commit **0 AP**, Depth +1 và kết thúc mẫu; không tự xuống lúc khám phá, không sinh tầng mới |
| Về Farm | Bất cứ lúc nào, 0 AP, giữ Ore và AP; lưu đúng nhóm, các kết quả, nguồn spent và vòng đã dùng |
| Farm/Sleep | Nút công việc Farm dùng 1 AP để thể hiện chi phí cơ hội, không mô phỏng crop hoặc cho phần thưởng mới. Sleep ở Farm hồi 6 AP/ngày, giữ nguyên tầng |
| Trở lại | Tiếp tục đúng vị trí đã rời; không hồi nguồn, không thêm lượt quay lại. Không quay về tầng mẫu sau khi đã xuống thành công |

Trong lượt đầu, lối xuống từng thấy có thể rời bàn khi sang nhóm theo lựa chọn B. Vòng cuối đem nó trở lại và giữ trên bàn, giải quyết trường hợp bỏ lỡ lần hai trong phạm vi **một tầng 6 ô** này. Không ghim một lối xuống phụ từ lần gặp đầu, không tuyên bố cơ chế sẽ dùng được nguyên trạng với tầng lớn hơn.

Mức phí xuống tầng 0 AP tránh việc đã tìm được lối nhưng không đủ công rời tầng. Đây vẫn là gameplay commit vì đổi Depth, khác navigation về Farm. Chi phí khám phá đã nằm ở Dig. Luật nguồn tồn tại qua Sleep là giả định giúp phép thử không mắc kẹt khi hết công; cần đánh giá trước khi dùng cho progression thật.

## Ranh giới grammar

`Đá chưa khai mở` mô tả target tạm của phép thử; tên identity/loại lá chính thức chưa chốt. `Đá đã dọn` là trạng thái kết quả, không tự thêm Item Stone. `Lối xuống` là target hành động Depth+, chưa chốt taxonomy. Bản thử không thêm chúng vào workbook.

Exposed Ore và Ore giữ hai identity theo CG-08: thấy nguồn không tạo Ore; chỉ Extract tạo output. Model ghi thời điểm biết hai identity riêng, giao diện tối giản hiện nguồn trên bàn và số Ore đã nhận, chưa có inventory/Bách Khoa đầy đủ. Chọn nguồn không mất AP; sau commit bỏ chọn nhóm nguồn theo UI defaults hiện hành. Ô đã mở không thể Dig lại, source spent không thể Extract lần nữa. Không đủ AP hoặc target không hiện thì từ chối toàn bộ, không thay state.

## Chơi thử

1. Dùng lượt 6 AP để cảm nhận một tầng hoàn chỉnh. Đọc thành phần tầng và phí, không mở mã hoặc xem nội dung ẩn trước khi chơi.
2. Mở “Điều khiển phép thử” → “Tình huống CG-16 · 2 AP”. Ghi lựa chọn đầu và lý do: lấy Ore chắc chắn, đào thêm tìm đường, hay về Farm. Sau một hành động, ghi cách dùng AP còn lại. Có thể kết hợp Extract rồi Dig; không coi ba hướng là ba nhánh loại trừ cả lượt.
3. Cố tình bỏ qua quặng/lối xuống, đi hết hai nhóm, rồi dùng vòng quay lại. Kiểm xem người chơi có hiểu đây là cơ hội cũ, không phải tầng mới.
4. Về Farm lúc hết AP, Sleep, trở lại: kiểm người chơi có hiểu phần đã làm được giữ và không có Ore miễn phí lặp lại.

Nhật ký ghi hành động và hậu quả. Lý do quyết định cần người thử nói hoặc ghi bên ngoài; nhật ký không tự suy ra cảm giác chơi. Không coi việc có người chọn mỗi hướng là bằng chứng cân bằng.

## Kết quả kiểm tra và giới hạn

Chạy `node paper-tests/mine-dig-flip-v0.1/logic-check.cjs` từ repo. Kiểm phí nguyên tử, nội dung ẩn qua projection UI, target ngoài bàn, không thưởng Ore khi mới thấy nguồn, không lấy trùng, khóa đổi nhóm trước khi khai mở đủ, xuống sớm, xuống ở 0 AP, lưu qua Farm/Sleep và một vòng quay lại trên mọi thứ tự nội dung (720 hoán vị có nhãn, 60 thứ tự nội dung khác nhau). Đây là test logic, không phải phép thử người chơi hoặc QA hình ảnh.

Chưa kiểm giao diện trực quan bằng browser; hạn chế truy cập browser với artifact local đã được ghi trong task và không dùng đường vòng. Chưa có evidence người chơi. Mẫu chỉ có một tầng, chưa thể chứng minh động lực đào sâu lâu dài; xuống tầng hiện là đạt mục tiêu của lượt thử. Không có Nell, Tool tier, monster, Geode, minigame điểm yếu, art mới hoặc nền kinh tế nâng Tool. Fixture tích hợp và luật Farm thật không đổi.

Nguồn quyết định: [CG-15/16](../../docs/current/ON-TABLE-CARD-SHAPE-DECISION-09.md), [research §8](../../docs/current/MINE-FISHING-REFERENCE-DIRECTIONS-02.md#8-đào-để-lật--hướng-thử-cg-15). Các luật đủ để chạy mẫu không đồng nghĩa chủ dự án đã duyệt từng giả định để vào V0.
