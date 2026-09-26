# Field — trình bày tám vị trí đất 01

Ngày: 2026-09-26. Trạng thái: **UI-44 thay bộ lọc và dòng tóm tắt Field ở CG-31/33/34.** Đọc cùng [kiến trúc World lồng tableau](WORLD-NESTED-CARD-ARCHITECTURE-01.md) và [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md).

## 1. Tableau Field hiện hành

- `World` → `Home` → `Field` vẫn là đường mở lá container. Chạm `Field` cho thấy **đủ tám lá/vị trí đất** theo state hiện tại; không có dải thống kê, nút lọc hay nhóm UI ở phía trên. `Farmhouse` và `Shipping Bin` ở tableau Home, không chiếm vị trí đất Field.
- Mỗi vị trí tiếp tục có một lá vuông làm đích riêng. Ảnh vuông hiện trọn mặt lá; **tên lá nằm ở footer overlay bằng chữ trắng viền đen** theo UI-50. `Empty Soil`, `Overgrown Soil`, `Tilled Soil`, Crop và Fruit Tree có ảnh/state tương ứng; trạng thái, mô tả và phí không phủ thêm lên mặt lá. Soil có bụi là state/ảnh của `Soil`; `Field Rock` là lá vật cản riêng. Việc bỏ lọc không đổi identity, sức chứa, Tool, AP, target hoặc kết quả action. Water vẫn nhắm từng crop.
- Prototype tính số cột và cỡ lá từ **diện tích nhìn thấy giữa header và hand**, kể cả khi hand xòe, để mọi lá vuông trong tableau đang mở nằm trọn màn hình và trang không cần cuộn dọc. Ảnh được fit trọn tỷ lệ 1:1, không cắt để lấp ô. Khi chưa chọn nguồn, chạm lá mở bản chi tiết, chạm lại bản đó để đóng; lá có navigation hoặc action độc lập có nút hành động riêng trong bản chi tiết. Khi đã chọn nguồn, chạm target vẫn commit trực tiếp. Bản chi tiết hiện có là UI thử; thiết kế lá full còn cần chốt. Art còn thiếu dùng biểu tượng tạm trong demo.

## 2. Ranh giới và kiểm đọc

CG-29/31/33/34 là lịch sử quyết định nhóm, lọc và tóm tắt; UI-44 và UI-50 thay **cách trình bày Field hiện hành**. Không tạo gameplay state `fieldFilter`; bản lưu cũ có trường đó vẫn đọc được nhưng trường không tác dụng. Kiểm tiếp độ đọc footer, bản chi tiết và hit target ở khung điện thoại thấp, khi hand mở, và ở Mine có nút `Next` dưới lá. Nếu số lá trong một container tương lai tăng nhiều, cần thiết kế thêm tầng/nhóm riêng; quy tắc co cỡ hiện tại chỉ được kiểm với nội dung V0 đang có.
