# NPC, kết bạn và Heart — quyết định thiết kế

Ngày ghi nhận: 2026-09-20.

Tài liệu lưu kết quả trao đổi sau bản spec gốc. Phân biệt quyết định của người dùng với giá trị tạm tính và đề xuất chưa duyệt. Chưa triển khai demo.

## 1. Phạm vi trải nghiệm

- Người dùng muốn nhân vật có đặc tính và hành vi/khả năng riêng, nhưng không muốn trải nghiệm dựa vào hội thoại hoặc chuỗi story. Lore và backstory vẫn có chỗ.
- NPC không bắt buộc tự hành động để được cảm nhận là nhân vật. Người chơi sử dụng khả năng của lá NPC vẫn là một hướng hợp lệ.
- Điều khiển hơi giống Stacklands là yêu cầu tối thiểu riêng; đạt điều khiển không chứng minh game đã đạt về trải nghiệm. Xem [tham chiếu Stacklands](STACKLANDS-CONTROL-REFERENCE.md).
- Các câu trong spec cũ như “NPC không phải Spell Card”, “NPC không phải effect” không được dùng để loại bỏ hướng thiết kế người dùng đang xem xét.

## 2. Gặp và kết bạn

Khung đã được người dùng đồng ý để tiếp tục thiết kế:

1. Tại địa điểm, người chơi thấy những lá Person có thể gặp.
2. Xem đặc tính và điều kiện kết bạn để lựa chọn.
3. Tặng món quà hợp lệ để kết bạn và giữ lá Person.

### Chi phí

- Thấy NPC, xem lá hoặc bỏ qua không mất AP.
- AP bị tiêu khi thực hiện tặng quà hoặc kết bạn, cùng với món quà.
- Một lần tặng quà giúp kết bạn là một hành động, không tính hai lần AP.
- **1 AP/lần là giá trị tạm tính** do người dùng đề xuất. Chưa xác định tổng AP mỗi ngày hoặc cân bằng chi phí.
- Chưa có quyết định tạo hai nguồn lực Energy và AP tách biệt. Cách gọi và quan hệ với hệ Energy trong spec cần thống nhất sau.

### Hiện diện và bỏ qua

- Hướng đã ghi nhận: danh sách NPC có thể gặp thay đổi theo ngày/mùa. Chưa chốt lịch cố định, ngẫu nhiên hoặc kết hợp, cũng chưa chốt số NPC mỗi nơi.
- NPC có mặt tại địa điểm trong suốt ngày đó. Người chơi có thể xem, rời đi kiếm quà rồi quay lại.
- Sang ngày mới, cập nhật danh sách theo quy tắc ngày/mùa. Nếu người ấy vắng, chờ lần xuất hiện sau.
- Bỏ qua không làm mất vĩnh viễn cơ hội kết bạn.

## 3. Người đã kết bạn vẫn thuộc về thế giới

**Yêu cầu bắt buộc của người dùng: NPC đã kết bạn vẫn xuất hiện trong thế giới theo lịch.**

Giữ lá không làm nhân vật biến mất khỏi địa điểm. Tương tác lại cần có giá trị nhỏ; không cấp thêm bản sao Person để thay cho giá trị đó.

Vị trí lưu lá đã giữ — hand, vùng bạn bè hoặc cách khác — chưa chốt. Ý tưởng mọi NPC có sẵn trên hand từ đầu và dùng đúng ngày/mùa được tăng cường từng là một giả thuyết; không phải quyết định đã duyệt.

## 4. Heart đã được chọn

Người dùng đã chọn **Heart** làm hướng giải quyết giá trị của tương tác lại, thay vì tiếp tục tìm một loại phần thưởng khác.

| Trạng thái trước tương tác | Chi phí | Kết quả |
| --- | --- | --- |
| Chưa kết bạn | AP + quà hợp lệ | Giữ lá Person + nhận Heart |
| Đã kết bạn | AP + quà hợp lệ | Nhận Heart; không thêm bản sao Person |

### Hướng hiện tại: Heart gắn riêng với từng người

Ban đầu AI đề xuất Heart là tài nguyên chung. Sau đó người dùng nêu cách hiểu cụ thể hơn: **chơi Person cần Heart từ chính người ấy**, và **mỗi người chỉ được nhận quà một lần mỗi ngày**. Đây là hướng đang được xác nhận trong trao đổi, thay cho giả định Heart dùng chung.

- Tặng quà cho NPC A tạo Heart gắn với A. Lần tặng giúp kết bạn cũng thuộc giới hạn tặng quà của A trong ngày đó.
- Để chơi khả năng của Person A đã sở hữu, cần đủ và **tiêu** Heart của A. Heart của B không thay thế được.
- Sử dụng khả năng giữ lại lá Person và quan hệ đã có. Heart ở đây là nguồn lực tiêu được, chưa phải cấp độ tình bạn của NPC.
- Mỗi NPC nhận tối đa một món quà/ngày; tổng số người có thể tặng còn phụ thuộc AP và tài nguyên.
- Giới hạn tặng quà là giới hạn nguồn sinh Heart, **chưa đồng nghĩa với chỉ được chơi Person một lần/ngày**. Nếu cho tích trữ Heart thì có thể có nhiều lần sử dụng, trừ khi bổ sung giới hạn khác.
- Chưa chốt lượng Heart mỗi món quà, chi phí mỗi khả năng, việc tích trữ qua ngày, hạn mức hoặc thời hạn Heart, và các điều kiện sử dụng khác. Không mặc định một quà bằng một lần chơi lá.

Ý tưởng chơi đúng ngày/mùa được tăng cường vẫn là giả thuyết, chưa chốt.

Tham chiếu board game: trang 14 của [luật Stardew](../stardew%20rules.pdf) cho giữ Villager và nhận Heart khi kết bạn; trang 20 cho thấy Heart là tài nguyên tiêu được. Tuy nhiên, quy trình tặng lại cho NPC đã kết bạn để nhận Heart trong game này là **thiết kế của dự án**, không phải luật tặng lại được xác minh từ board game.

## 5. Mục tiêu cuối run

**Người dùng yêu cầu game phải có mục tiêu cuối run rõ ràng.** Yêu cầu này vẫn giữ. Công dụng hiện đang xét của Heart là kích hoạt khả năng Person; không bắt buộc dùng Heart làm khoản đóng góp trực tiếp cho mục tiêu cuối run.

[Spec gốc](GAME-DESIGN-SOURCE.md), mục 36–39, đã đề cập:

- Restore the Valley, gồm các nhóm đóng góp vật phẩm/thành tựu.
- Life Goal lựa chọn đầu run.
- Kết thúc năm ở Winter Day 7, đánh giá Life Goal và Valley Progress.

Những nội dung đó là nền tham khảo; điều kiện thắng cụ thể chưa được chốt lại trong cuộc trao đổi hiện tại.

**Đề xuất trước đây của AI, chưa được người dùng duyệt:** dùng vật phẩm và Heart để hoàn thành các dự án cộng đồng trước cuối năm. Không coi đề xuất này là nơi tiêu Heart đã chốt. Sau khi người dùng lo ngại thiết kế quá gần Stardew, cuộc trao đổi chuyển sang dùng Heart để kích hoạt Person. Theme khoa học viễn tưởng chỉ được nêu như một khả năng, chưa có quyết định đổi theme.

Thiết kế mục tiêu phải giữ khả năng sống theo nhiều hướng đã nêu trong spec; chưa suy ra rằng mọi run bắt buộc hoàn thành toàn bộ farming, fishing, mining và các hệ khác.

## 6. Câu hỏi tiếp tục, theo mức phụ thuộc

1. Heart riêng từng NPC có được tích trữ qua ngày không, và điều đó tạo nhịp sử dụng Person thế nào?
2. Khả năng cụ thể của Person là gì; ngoài chi phí Heart còn có điều kiện hoặc giới hạn sử dụng nào?
3. Điều kiện thành công cuối run chính xác là gì; Life Goal đóng vai trò gì?
4. Cân bằng AP, quà, lượng Heart và chi phí khả năng sau khi biết chúng đem lại kết quả nào.

Không dùng các chỗ còn mở làm lý do tự bổ sung hội thoại, hệ mô phỏng NPC, thanh tình bạn, hoặc bắt đầu dev.
