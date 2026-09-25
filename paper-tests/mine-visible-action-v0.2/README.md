# Mine · Thấy rồi làm · v0.2

Ngày 2026-09-25. **Bản so sánh được chủ dự án yêu cầu làm ngay để test**, chưa thay luật V0. [Mở fixture](fixture.html). Giữ [bản đào để lật v0.1](../mine-dig-flip-v0.1/fixture.html) để đối chiếu. Không cần server/dependency; ba file HTML/JS chạy cùng thư mục. Reload hoặc nút bắt đầu sẽ đặt lại lượt thử; chưa lưu đĩa.

Phản hồi sau khi chủ dự án chơi v0.1: vẫn cấn việc lật mất AP, kể cả khi được gọi là Dig. v0.2 thử bỏ bước trả phí mở thông tin, cho thấy đối tượng cần xử lý từ đầu. Mỗi commit xử lý xong một đối tượng làm xuất hiện đối tượng kế tiếp.

## Cấu hình

- Tầng vẫn 6 lá, tối đa 3 lá trên bàn, bắt đầu 6 AP. Có preset 2 AP với ít nhất một nguồn quặng nhìn thấy.
- 2 Exposed Ore, 3 **đá chắn** và 1 lối xuống. Đá chắn là target tạm nhìn thấy trước khi hành động, thay vai trò ba kết quả rỗng trong v0.1; chưa thêm identity Stone hoặc taxonomy vào workbook.
- Ba lá đầu hiện ngửa, không trả AP. Xáo năm lá vật liệu; lối xuống xáo trong ba lá phía sau để lượt không kết thúc ngay từ bàn đầu. Cấu hình này là giả định khác v0.1, không phải so sánh chỉ thay một biến hoặc thử nghiệm cân bằng có kiểm soát.
- Character + Pickaxe → Exposed Ore: **1 AP, nhận 1 Ore**, nguồn spent và rời bàn. Không có phí Dig trước đó. Character + Pickaxe → đá chắn: **1 AP**, dọn đối tượng; không thưởng Item.
- Sau một Extract/phá đá, **chỉ ô vừa dọn** được bổ sung bằng lá kế tiếp từ bộ lá hữu hạn; lá mới hiện ngửa và không mất thêm AP. Hai lá khác giữ nguyên. Hết bài chờ thì ô để trống.
- Lối xuống đã hiện không bị thay thế; Character dùng nó commit **0 AP**, Depth +1, kết thúc mẫu. Vì chưa xử lý thì lá không rời bàn, bản này **không dùng thay toàn nhóm hoặc vòng quay lại**. Đây là thay đổi giả thuyết đang thử, không ghi đè lựa chọn B của thiết kế trước như thể đã được duyệt chính thức.
- Về Farm miễn phí, giữ AP/Ore/bàn/bộ bài. Sleep ở Farm hồi 6 AP; không hồi nguồn spent hoặc xáo lại. Tầng chỉ kết thúc khi chọn xuống; ở 0 AP vẫn về Farm hoặc dùng lối xuống được.
- Chọn nguồn miễn phí, sau commit bỏ chọn theo grammar hiện tại. Bách Khoa/inventory đầy đủ chưa triển khai; model ghi Exposed Ore khi thấy và Ore khi nhận riêng.

## Cần cảm nhận khi test

Trước hết: trả công xử lý đối tượng đã biết có còn gây cảm giác trả phí chỉ để lật không? Sau đó: thấy quặng và đá cùng lúc, người chơi có lý do xử lý đá trước không?

**Giới hạn được biết:** cùng phí 1 AP, cả quặng lẫn đá đều mở một lá kế, trong khi quặng còn cho Ore. Do đó khai thác quặng thường có lợi hơn phá đá khi cả hai cùng hiện; mẫu chưa giải quyết chiều sâu lựa chọn này. Không tự thêm phí khác nhau, công cụ nâng cấp hoặc phần thưởng đá để che mất câu hỏi đang thử. Phá đá ở cuối khi không còn lá chờ không giúp tiến triển; UI báo rõ hết lá chờ.

Một tầng chỉ có tổng 5 đối tượng trả phí, tối đa 2 Ore; với 6 AP có thể xử lý hết rồi xuống, còn 1 AP. Vì bỏ phí mở quặng, AP kinh tế khác v0.1; dùng preset 2 AP để xem quyết định với công hạn chế. Mẫu kết thúc ở Depth +1, chưa có giá trị tầng sâu thật.

## Kiểm tra

`node paper-tests/mine-visible-action-v0.2/logic-check.cjs`

Kiểm phí nguyên tử, quặng chỉ trả một lần, bổ sung đúng một ô, không tiêu AP khi mới thấy lá, không tác động vào bài chờ, không đổi lối xuống khi xử lý lá khác, hết bộ bài, không nhận trùng, Farm/Sleep và xuống ở 0 AP. Duyệt đủ 60 thứ tự nội dung và 200 lượt tạo có seed. Kiểm syntax và tham chiếu HTML riêng. Chưa QA trực quan trong browser, chưa có kết quả người chơi cho v0.2; không dùng đường vòng vượt hạn chế browser đã ghi trong task.

Không sửa fixture v0.1 hoặc fixture tích hợp. [Research](../../docs/current/MINE-FISHING-REFERENCE-DIRECTIONS-02.md) lưu hai thử nghiệm và feedback riêng.
