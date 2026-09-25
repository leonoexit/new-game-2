# Fishing opportunities v0.1 — Before They Leave

Ngày 2026-09-25. Chủ dự án yêu cầu chơi thử để hình dung đề xuất **chọn cá trước khi cơ hội rời đi**. Đây là prototype riêng, không phải luật Fishing đã duyệt. [Mở bản thử](fixture.html). Giao diện, tên Fish và action đều dùng tiếng Anh. Không sửa Mine hoặc fixture tích hợp.

## Chơi thử

Chọn Character + Fishing Rod rồi chạm một Fish. Catch thành công nếu đủ AP. Mỗi lần commit bỏ chọn nguồn theo UI defaults hiện hành.

- **One Last Chance:** 4 AP; Silver Minnow có 1 lượt, Blue Eel có 2 lượt, Silver Minnow có 3 lượt trước khi rời đi. Thử Minnow đang Leaving → Eel → Minnow còn lại, sau đó Retry và thử Eel trước.
- **Two Departures:** 4 AP; Minnow và Eel đều Leaving. Câu một con sẽ khiến con kia rời đi. Thử chọn theo số lượng cá hoặc loài cá muốn mang về.
- **Retry same scene** giữ nguyên tình huống và thứ tự cá sắp tới, chỉ đặt lại phiên test. Bảng Previous attempts giữ tối đa bốn kết quả gần nhất để so thứ tự, cá nhận được, cá đã rời và AP còn lại. Đây là control test, không phải thao tác trong gameplay.

Không có timer thời gian thực; có thể đọc hoặc suy nghĩ tùy ý. Departure tính theo **số lần Catch thành công khác**, không theo giây hoặc AP: Catch 2 AP vẫn chỉ đẩy cá khác một bước. Reading/select/invalid Catch không đổi tiến độ.

## Luật tạm và thứ tự resolve

1. Kiểm target đang hiện, Character + Fishing Rod và đủ AP. Silver Minnow 1 AP; Blue Eel 2 AP. Rain cố định để tôn trọng điều kiện Eel của baseline.
2. Trừ AP, đưa đúng Fish đã chọn vào Item với cùng identity; bắt nó trước khi xét việc rời đi. Không có xác suất hụt hoặc thao tác Reel/Ease.
3. Các Fish khác đã trên bàn giảm counter 1. Counter về 0 thì rời bàn; Fish đã có trong Item không bị ảnh hưởng.
4. Bổ sung các ô trống từ hàng chờ, theo thứ tự ô trái sang phải. Cá mới không bị giảm counter ngay trong lượt vừa xuất hiện.
5. Mỗi scene có đúng 6 instance: 3 trên bàn + 3 tới sau. One Last Chance có ba Eel trong hàng chờ; Two Departures có ba Minnow. Thành phần này cố định để tạo tình huống rõ, không phải xác suất sinh cá chính thức. Hết hàng chờ thì để ô trống.

Lingering/Leaving là trạng thái của Fish, không phải identity mới. Model ghi loài được biết khi thấy nó, không đợi Catch. Inventory giao diện hiện loài và số lượng; chưa có Bách Khoa/shop đầy đủ. Cá dùng để bán theo hướng chung nhưng prototype không tự đặt giá hoặc thưởng Gold.

Return to Farm không tốn AP; giữ cá đã bắt, số AP, bàn, hàng chờ và counter. Return to River không đổi cá/reset AP. Nút Farm work chỉ tiêu 1 AP để thể hiện chi phí cơ hội, không đổi luật crop. Không có Sleep trong mẫu ngắn này; refresh ngày/thời tiết/chuyến mới cần thiết kế sau. Reload trang hoặc test controls bắt đầu lại, chưa có lưu đĩa.

Không đủ AP để bắt con nào vẫn có thể về Farm. Bản thử không bắt chờ timer hoặc mua thêm AP. Không có Next/reroll gameplay; ở đây nguồn thay đổi sau Catch, không sao chép vòng luân phiên Mine.

## Kiểm tra và giới hạn

`node paper-tests/fishing-opportunities-v0.1/logic-check.cjs`

Kiểm nguyên tử AP, target/source, không nhận trùng, cá được chọn không rời trước khi bắt, đếm theo Catch thay vì phí, arrival không bị già ngay, hàng chờ hữu hạn, target ẩn không thể tác động và trạng thái qua Farm. Duyệt mọi chuỗi Catch đủ AP trong cả hai scene; có trace so sánh thứ tự rõ ràng. JS/HTML được kiểm tĩnh. Chưa QA trực quan bằng browser, chưa có feedback người chơi cho artifact mới này; không sử dụng đường vòng vượt hạn chế browser local đã ghi trong task.

**Điều muốn người chơi nhận xét:** có muốn đổi thứ tự câu để giữ một cơ hội không, hay counter chỉ khiến việc câu trở thành bài toán làm theo đáp án? One Last Chance cố ý có thứ tự tốt hơn; Two Departures thử quyết định phải bỏ một cơ hội. Hai scene dựng sẵn chưa chứng minh tính chơi lại. Với chỉ hai loài và chưa có giá bán, chưa kết luận cân bằng hoặc giá trị kinh tế của lựa chọn.

Không thêm fish species, bait, loài hiếm, thuộc tính Rod hoặc mini-game. Fish mới sau Catch ở đây là giả định của phép thử; chưa chốt cadence Fishing thực. [Proposal](../../docs/current/FISHING-LOOP-PROPOSAL-01.md) lưu trạng thái mới nhất.
