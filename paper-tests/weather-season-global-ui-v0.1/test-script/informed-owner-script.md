# Informed-owner script — Weather / Season global UI v0.1

Trạng thái: script đề xuất, chưa chạy. Ghi kết quả là `informed-owner evidence`; không dùng từ `fresh-player`, `new-player` hoặc `usability pass`.

## Setup

1. Mở từng stimulus riêng ở kích thước hiển thị tương đương điện thoại; không bắt đầu bằng `comparison-sheet.png`.
2. Randomize A/B/C nếu thuận tiện. Với arm B, luôn cho xem state đóng trước; chỉ mở state expanded khi tới câu 5.
3. Không giải thích trước rằng chrome nằm ngoài tableau hoặc square nào là target. Đây là điều fixture cần kiểm tra.
4. Không lặp lại câu hỏi orientation/index đã accepted ở v0.3.4.

## Blind read — hỏi cho từng A/B/C

1. “Bạn nghĩ những phần nào trên màn hình này có thể nhận Character, Tool hoặc Item để resolve một action?”
2. “Hôm nay là mùa gì, Weather gì và còn bao nhiêu AP?”
3. “Nếu muốn lên kế hoạch cho ngày mai, bạn tìm thông tin ở đâu?”
4. “Weather/Season đang đọc như world state, UI control, hay playable target? Điều gì làm bạn nghĩ vậy?”

Không sửa hoặc diễn giải câu trả lời trong lúc đang chạy arm.

## Forecast disclosure — arm B only

5. Cho xem `stimulus-b-expanded-forecast.png`: “Bạn có hiểu đây là cùng global UI được mở rộng không? Việc mở forecast có đáng với phần tableau bị chiếm thêm không?”
6. “Bạn muốn mặc định thấy Today + Tomorrow, hay Today và một nút Forecast? Vì sao?”

## Cross-arm choice

7. Sau khi hoàn tất blind read, cho xem `comparison-sheet.png`: “Arm nào cho thông tin đúng nhanh nhất mà ít giống playable target nhất?”
8. “Có thành phần nào đang lặp thông tin, tạo CTA giả, hoặc che quá nhiều River tableau không?”
9. “Nếu chỉ được giữ một thay đổi cho revision tiếp theo, đó là gì?”

## Record format

Tạo file result mới trong `pilot-results/`; không sửa script này. Ghi riêng:

- direct quotes ngắn;
- observed selection/search path;
- `[ACCEPT]`, `[REJECT]`, `[CORRECT]`, `[OPEN]`;
- arm được chọn, nếu có;
- ambiguity còn lại;
- explicit note rằng evidence đến từ current informed owner only.

Không promote arm nếu owner chỉ thích thẩm mỹ nhưng vẫn đọc nó như playable target.
