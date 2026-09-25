# Tầng nhóm hiển thị trong World — đề xuất 01

Ngày: 2026-09-25. Trạng thái: **bản đề xuất/lịch sử; cách đặt nhóm trên Farm phẳng đã được CG-35–37 thay thế.** Dùng [kiến trúc lá lồng tableau](../current/WORLD-NESTED-CARD-ARCHITECTURE-01.md) và [Field presentation contract 01](../current/WORLD-GROUP-PRESENTATION-CONTRACT-01.md) cho luật hiện hành. Dựa trên [bản đối chiếu tài liệu point-and-click](WORLD-ARCHITECTURE-REFERENCE-CROSSWALK-01.md), [card grammar](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) và [Farm land contract](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md).

## 1. Phân tầng đề xuất

```text
Gameplay:     World identity → Area identity → lá/đích thật → action riêng
Presentation: Area tableau → nhóm hiển thị tùy chọn → cách tìm/focus/lọc các lá ấy
```

**CG-29 đã chốt:** nhóm hiển thị không là card identity: không có mục Bách Khoa, AP, reward, progress hoặc chủ sở hữu gameplay. Chạm tên nhóm để focus/mở/đóng chỉ là navigation 0 AP, không có AP badge. Nếu một hệ thống sau này có quy tắc hoặc tương tác độc lập, cần quyết định entity/card riêng, không tự biến nhóm UI thành gameplay card. Số liệu ngắn trên tên nhóm, nếu có, phải tính từ các lá thật (`2 Mature`, `3 ô bị cản`) thay vì lưu một state thứ hai.

Mỗi lá có một identity và một state gameplay dù xuất hiện ở chế độ xem tổng quan hoặc focus. UI không nhân đôi Farmhouse, Shipping Bin, crop, Fishing Spot hoặc nguồn Mine. Nhóm không đổi phạm vi action: Water một crop/1 AP, Plant một luống, Clear một ô, và Rain theo luật Weather riêng.

## 2. Farm: điều gì nhóm được làm

**CG-30/31/33/34 đã chốt sau bản đề xuất này:** mở Farm là thấy các lá đất ngay, không phải chạm mở `Đất trồng` trước. Mặc định hiện tất cả; bộ lọc và dòng tóm tắt tách `Mature`, `Growing`, `Tilled Soil`, `Empty Soil`, `Overgrown Soil`. Bộ lọc không đổi card identity hoặc số ô. Tên nhóm như `Đất trồng` không tự thành lá `Field`.

**CG-28 đã chọn ô chỉ là sức chứa.** UI có thể sắp hoặc lọc các lá theo trạng thái để giảm cuộn, miễn mọi lá vẫn tìm được và Building/Equipment vẫn chiếm đúng một suất ô. Bộ lọc không tiêu AP, không làm mới lá và không thay đổi kết quả một action. World navigation vẫn 0 AP; `Đất trồng` không là card gộp để `Water All`.

**CG-32 đã chốt:** Farmhouse và Shipping Bin luôn hiện khi lọc đất/crop, vẫn mỗi lá chiếm một ô và không có bản sao trong nhóm UI.

## 3. Phép thử đề xuất cho tầng nhóm

So (A) Farm tableau hiển thị trực tiếp và (B) cùng tableau có tên nhóm, tóm tắt suy ra từ lá và focus nhanh. Dùng tình huống 2/4/8 ô đất **chỉ là mật độ thử**. Người thử cần tìm crop Mature, Water hai crop, tìm ô bị cản, chuyển Mine rồi quay lại Farm. Đếm số chạm, thời gian, nhầm target và khả năng nhận ra Building/Equipment chiếm ô. Không đổi AP hoặc tác dụng của lá giữa hai cách.
