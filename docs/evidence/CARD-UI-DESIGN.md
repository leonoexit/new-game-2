# Ngôn ngữ thiết kế UI lá bài

Ngày ghi lại: 2026-09-20. Tách từ quá trình thiết kế và làm prototype Little Valley Cards để dùng lại độc lập với dự án.

Little Valley Cards đã hủy theo quyết định của người dùng sau chơi thử: “không có cảm giác gì”. Tài liệu này lưu cách tổ chức và tương tác với lá bài, không khẳng định UI đã được nghiệm thu hay cơ chế game đã tạo được cảm xúc.

Ý tưởng mới về một world surface cuộn liên tục, square art-first tile và text-on-inspect đang được kiểm chứng trong [Continuous world surface paper test 01](CONTINUOUS-WORLD-SURFACE-PAPER-TEST-01.md). Hướng này chưa thay thế các quyết định bên dưới; nó tách compact world representation khỏi vertical detail card và có thể dẫn tới revision của tài liệu này sau paper-layout.

[Recognition audit 04](CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md) đã sửa giả thuyết “zero text” thành **art-first, text by decision burden**. Crop state/landmark quen thuộc có thể chỉ hiện art khi nghỉ; item stack, Person, Project và opportunity vẫn cần name/status/preview theo context. Đây là kết quả paper audit, chưa phải usability validation với asset thật.

## 1. Những nguyên tắc đã thống nhất

Một lá bài cần được nhận ra bằng **hình**, hiểu bằng **tên**, rồi bổ sung ý nghĩa bằng **description**. Cả ba cùng mô tả một sự vật hoặc một tình huống rõ ràng.

- **Hình tự giải thích:** chủ thể nổi bật, dáng và chi tiết đủ khác nhau để phân biệt ở kích thước nhỏ. Phần quan trọng không bị tên, mô tả hoặc dấu số lượng che.
- **Tên tự giải thích:** ngắn, gọi đúng thứ đang nhìn thấy. Ví dụ: Đất hoang, Đất đã xới, Khay nấm khô, Khay nấm ẩm.
- **Description mô tả:** nói lá này là gì hoặc tình huống nào đang hiện hữu. Ví dụ: “Một quả trứng mới từ ổ rơm.” Hướng dẫn như “Kéo Farmer vào đây để thu” thuộc lớp tương tác bên ngoài mặt bài.
- **Mỗi mặt bài cố định:** hình, tên và description đi cùng nhau. Khi tình huống thay đổi, thay bằng một mặt bài khác hoàn chỉnh.
- **Khung chữ nhật dọc, hình phủ mặt:** tên và description đặt trên hình, chữ trắng có viền tối. Không chia mặt bài thành một ảnh vuông nhỏ ở trên và một bảng UI lớn ở dưới.

Danh tính đối tượng trong dữ liệu có thể giữ nguyên. Ví dụ, một mảnh đất vẫn là mảnh đất đó khi lá Đất hoang được thay bằng Đất đã xới. Điều cần cố định là nội dung của từng mặt bài, không phải toàn bộ thế giới đứng yên.

## 2. Bố cục một lá bài

Thứ tự các lớp từ sau ra trước:

1. Hình minh họa phủ toàn bộ khung dọc.
2. Lớp tối nhẹ ở vùng có chữ, đủ hỗ trợ độ tương phản.
3. Tên ở phía trên; mô tả ở phía dưới; chủ thể ở vùng giữa.
4. Viền thể hiện đang chọn hoặc đang nhận một lá khác.
5. Dấu số lượng nếu đây là một chồng bài cùng loại.

Tên và description dùng chữ trắng ngà, viền đen hoặc bóng tối sát chữ. Chữ và hình phải giữ được ý nghĩa khi thu nhỏ; không phụ thuộc vào đoạn mô tả dài để cứu một hình khó hiểu.

| Nằm trên mặt bài | Nằm ngoài mặt bài |
| --- | --- |
| Hình, tên, mô tả cố định | Giá, chi phí hành động, kết quả dự kiến |
| Dấu ×N của chồng bài | Số đối tượng trong khu, trang hiện tại |
| Viền lựa chọn và đích thả | Ngày, Energy, tiền, thời tiết, mục tiêu |
| | Menu, đóng nhóm, chuyển trang, xác nhận hệ thống |

Viền chọn, phát sáng và dấu số lượng là lớp UI phủ lên lá. Chúng không biến description thành một bảng trạng thái cập nhật liên tục.

## 3. Thông số của bản đã triển khai

Đây là mốc để dựng lại mẫu, không phải bộ thông số đã được chứng minh phù hợp cho mọi thiết bị.

| Thành phần | Mốc trong prototype |
| --- | --- |
| Tỷ lệ lá | Rộng:cao = **5:7** |
| Khung chơi | Dọc, tối đa 480px ngang; cao theo `100dvh`, có safe area |
| Lá chính trên bàn | Rộng tối đa 184px; co theo cả chiều rộng và chiều cao ô chứa |
| Khay tay | Tối đa 4 lá/chồng mỗi trang; lá rộng tối đa 77px ở bố cục thường |
| Lá cạnh bàn | Khoảng 60×84px ở bố cục thường |
| Khung lá | Viền 2px, góc bo 8px |
| Tên trên lá chính | Khoảng 11–15px, đậm, căn trái |
| Description trên lá chính | 10px, line-height 1.35, căn trái |
| Khoảng lùi chữ | Hai bên 6px; tên cách đỉnh 9px; mô tả cách đáy 9px |
| Chữ và viền chữ | Trắng ngà `#fffdf3`, bóng viền tối `#20251c` |
| Viền đang chọn/đích hợp lệ | Vàng nhạt `#f5d27c` |

Lá nhỏ trong khay tay và cạnh bàn chỉ hiện tên; description đầy đủ vẫn có khi xem chi tiết và trong nhãn hỗ trợ đọc màn hình. Không ép tất cả chữ lên mọi kích thước lá.

Prototype từng giảm description xuống 8px ở màn hình thấp. Đây là điểm cần xem lại khi tái sử dụng, không lấy làm chuẩn đọc chữ. Cần ưu tiên đọc được và thao tác được trên kích thước thật.

**Khung lá dọc và tỷ lệ file ảnh là hai việc riêng.** Bản thử vẫn sử dụng PNG vuông có sẵn, một số hình CSS và SVG tạm. `object-fit: cover` có thể cắt mất nội dung ảnh vuông; khi làm artwork dọc cần bố trí chủ thể và khoảng trống dành cho chữ ngay từ đầu. Chưa có bộ artwork dọc hoàn chỉnh được duyệt.

## 4. Bàn chơi và nhóm bài

Bàn là một khung nhìn hữu hạn vừa màn hình. Từ trên xuống: HUD gọn, tên ngữ cảnh, vùng bài chính, các lá chuyển địa điểm/hệ thống, rồi khay bài trên tay.

Vùng bài chính trong prototype hiện tối đa bốn lá mỗi trang, thường theo lưới 2×2; một hoặc hai lá dùng một hàng. Bốn là số lượng hiển thị của mẫu UI, không phải giới hạn số tài sản hoặc đối tượng của thế giới.

Một lá có thể đại diện cho một nhóm: địa điểm chứa các đối tượng, công trình chứa các lá bên trong, nhân vật có các lá cá nhân. Chạm lá nhóm để mở; nội dung nhóm thay vùng bài chính. Tên nhóm và nút đóng nằm ngoài mặt bài. Đóng nhóm trở lại tổng quan và giữ trang trước đó khi cần.

Khay tay và vùng bài chính có phân trang riêng. Các vật cùng loại gộp thành chồng. Khi nhận một vật mới, đưa khay tay tới trang chứa vật đó để người chơi thấy kết quả.

Thông tin của nhóm có thể hiện dưới lá đại diện: số luống, số đối tượng, tên lá quan hệ. Đây là nhãn ngữ cảnh bên ngoài, không sửa description của lá đại diện.

## 5. Ngôn ngữ tương tác

Thao tác chính: **cầm lá nguồn → đưa tới lá đích → xem dự kiến → thả → thấy kết quả**.

| Giai đoạn | Phản hồi cần có |
| --- | --- |
| Chạm/giữ để xem | Mở chi tiết đủ đọc, gồm description của lá nhỏ |
| Nhấc lá để kéo | Một bản thể hiện đi theo tay; lá tại vị trí gốc mờ đi |
| Đang kéo | Những đích hợp lệ sáng viền |
| Đưa lên đích | Hiện preview cạnh đích: hành động, lượng tiêu hao và chi phí |
| Thả hợp lệ | Thực hiện đúng một giao dịch; trình bày kết quả tại nơi nhận |
| Thả sai hoặc hủy | Lá trở về vị trí cũ; tài nguyên không đổi |
| Không lưu được | Giữ trạng thái trước thao tác, báo lỗi ngắn và cho thử lại |

Preview chỉ tồn tại trong ngữ cảnh tương tác. Ví dụ: “Tặng 1 Củ cải · Làm quen · 0 Energy”. Nội dung này không được ghi vào description của Củ cải hoặc nhân vật.

Nhấn xuống chưa thực hiện hành động; phải có ngưỡng di chuyển để phân biệt kéo và chạm. Hủy khi thả ngoài đích, Escape, pointercancel, mất capture hoặc mất focus. Ngón thứ hai không chiếm cử chỉ đang diễn ra. Click phát sinh sau khi thả không được thực hiện thêm một giao dịch.

Bàn phím dùng Tab tới nguồn, Enter để chọn; Tab tới đích, Enter để thả; Escape bỏ chọn. Cùng một luật áp dụng cho cả kéo thả và bàn phím. Focus phải nhìn thấy, nhãn đọc màn hình phải nêu tên và mô tả lá.

## 6. Trình bày kết quả

Kết quả phải trả lời được: **lá nào còn, lá nào mất, lá nào xuất hiện và xuất hiện ở đâu**.

| Kết quả | Cách thể hiện |
| --- | --- |
| Thay mặt bài | Lá đích được thay bằng mặt tương ứng, giữ vị trí/danh tính đối tượng khi thích hợp |
| Tiêu hao | Giảm đúng số lượng nguồn; hết chồng thì nguồn biến mất |
| Tạo vật | Lá mới xuất hiện ở khay tay hoặc nơi nhận đã xác định |
| Chuyển vật | Nguồn giảm, nơi nhận tăng; cho thấy hướng di chuyển |
| Mở nhóm | Vùng bàn chuyển sang nhóm liên quan, có tên và đường trở về rõ |

Hiệu ứng ngắn phục vụ việc nhận ra thay đổi. Prototype có nhấn sáng lá kết quả khoảng 450ms và chuyển vật khoảng 340ms. Hỗ trợ `prefers-reduced-motion`; khi tắt chuyển động, kết quả vẫn phải rõ bằng hình, tên và vị trí.

Chỉ trình bày thành công sau khi giao dịch đã được lưu. Preview và animation không quyết định luật. Hộp thoại dùng cho chi tiết hoặc xác nhận hệ thống khi cần; một tương tác thông thường có thể hoàn tất ngay trên bàn.

Ví dụ đã thử: Củ cải → An tiêu hao một Củ cải; mặt An giữ nguyên; nhóm An mở với lá Quen mặt thay cho Chưa quen. Đây là ví dụ về cách trình bày kết quả, không phải bằng chứng tương tác đó tạo được cảm xúc.

## 7. Cách dùng lại tài liệu

Với mỗi lá, định nghĩa bộ nội dung cố định: mã mặt, hình, tên, description. Với mỗi tương tác, định nghĩa nguồn, đích, điều kiện, chi phí, phần giữ lại, phần mất, phần xuất hiện và nơi nhận. Sau đó mới quyết định preview và hiệu ứng.

Khi dựng lại, kiểm tra trên màn hình thật:

- Nhìn hình và tên có hiểu lá đại diện cho gì không?
- Chữ có đọc được và chủ thể có bị che/cắt không?
- Có phân biệt được xem chi tiết, kéo lá và mở nhóm không?
- Khi thả, có nhận ra kết quả mà không cần đọc thông báo dài không?
- Chuyển trang và mở nhóm có làm gián đoạn thao tác thường xuyên không?
- Hủy thao tác có dễ, bàn phím có dùng được, giảm chuyển động có giữ rõ kết quả không?

Tách đánh giá độ rõ của UI khỏi đánh giá sức hấp dẫn của game. Test code có thể kiểm tra giao dịch và trạng thái; cảm giác chơi cần được đánh giá bằng chơi thử. Phản hồi cuối của dự án là người dùng không cảm thấy gì và quyết định hủy; không kết luận nguyên nhân cụ thể khi chưa có thêm bằng chứng.

## 8. Mã tham khảo của prototype cũ

Prototype 5:7 đã dừng và mã nguồn không còn trong repository này. Các tên file trước đây (`views.js`, `styles.css`, `gestures.js`, `pointer-input.js`, `interactions.js`, `app.js`) chỉ là ghi chú lịch sử, không phải dependency hoặc đường dẫn triển khai hiện hành.
