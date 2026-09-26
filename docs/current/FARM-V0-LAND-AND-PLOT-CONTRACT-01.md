# Farm V0 — ô đất và luống 01

Ngày: 2026-09-25. Trạng thái: **CG-27/35/36/38–40: Field V0 có 8 vị trí đất; Clear và Till đã chốt.** Đọc cùng [kiến trúc World lồng tableau](WORLD-NESTED-CARD-ARCHITECTURE-01.md), [card grammar](ON-TABLE-CARD-SHAPE-DECISION-09.md) và [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md).

## 1. Farm lúc bắt đầu

- Khi chơi lá `Field` ở Home, tableau Field có **8 vị trí đất** từ đầu: **2 lá `Soil` hiện đất trống, 3 lá `Soil` hiện bụi rậm, 3 lá đá riêng**; không lá Soil nào đã cày. Hai lá đất trống có thể cày ngay; sáu vị trí bị cản cần `Clear` trước. Chủ dự án đã giao chọn tổng tám vị trí; phân bố 3 bụi/3 đá là lựa chọn V0 để cả Sickle lẫn Hoe có ba đích dùng rõ ràng.
- **Sức chứa đất Field V0 là hữu hạn, tối đa 8 vị trí đất/luống cùng lúc.** Cả tám vị trí đã hiện diện từ đầu. Dọn bụi đổi **ảnh/state trong cùng lá Soil**; đập đá **thay lá đá bằng lá Soil đất trống ở chính vị trí cũ**. `Till` dùng Hoe để đổi **state/ảnh của cùng lá Soil** từ trống sang đã cày; Plant crop thường đổi lá trên cùng vị trí sang card identity Crop theo giống và Harvest trả về `Soil` đã cày. **CG-59:** Fruit Tree cũng chiếm đúng một vị trí hiện có, nhưng giữ lá cây sau Harvest và chỉ trả về `Soil` trống khi Chop; xem [Fruit Tree contract](FIRST-PLAYABLE-FRUIT-TREE-CONTENT-BATCH-01.md). Không thêm vị trí thứ chín bằng mốc ngày, nhiệm vụ, mua đất hoặc cuộn giao diện trong V0. Đây là trần **vị trí đất**, không phải trần mọi loại lá con Field.
- **Nội dung Crop CG-53:** [lô Crop V0 01](FIRST-PLAYABLE-CROP-CONTENT-BATCH-01.md) dùng cùng grammar Soil → Crop → Soil cho `Runner Bean` và `Lemon Balm`, mỗi loại có Seed/Crop/output identity riêng. Listing Seed ở Commerce là lựa chọn chuyển thể nội dung, không đổi trần tám vị trí, phí Plant/Water/Harvest hay điều kiện Gift Nell. Nhịp growth, yield và giá của hai loại mới còn là fixture, chưa là thông số Farm đã chốt.
- Mỗi vị trí Field chứa tối đa **một** crop hoặc Fruit Tree theo CG-25/59. **CG-36:** Farmhouse, Shipping Bin và Building/Equipment khác là lá ở tableau Home, không tiêu suất đất Field. `TV` và `Bed` là Equipment card nằm trong Farmhouse; `Supermarket` không thuộc Home/Field. Chạm Bed để Sleep theo CG-44, không tương tác với suất đất Field.
- **CG-28:** ô đất Field là suất sức chứa, không mang luật khoảng cách hoặc kề nhau. Tám ô không ấn định lưới 2×4; thứ tự xếp các lá đất trên màn hình có thể phục vụ tìm/focus mà không đổi identity, phí/action hoặc sức chứa. Chưa có bonus lân cận hoặc tưới theo hàng/cột.

## 2. Clear và vòng đời một ô trồng

`Sickle` và `Hoe` là **Tool card có từ đầu V0**, dùng lại sau mỗi action. Người chơi chọn Tool rồi chạm đúng lá đích trong Field; chạm đích hợp lệ commit `Clear` ngay, **1 AP mỗi lá**, không cần xác nhận thêm. Không có action `Clear` trên Soil đã trống/đã cày hoặc trên Crop. Bụi/đá không tự mọc lại qua `Sleep`; một vị trí chỉ cho reward Clear một lần.

| Lá đích ở Field | Tool và phí Clear | Kết quả ngay |
| --- | --- | --- |
| `Soil` có ảnh bụi rậm: 3 lá lúc đầu | `Sickle`, **1 AP** | Chính lá Soil đổi ảnh sang đất trống; **không nhận item** |
| Lá đá ở Field: 3 lá lúc đầu | `Hoe`, **1 AP** | Lá đá rời vị trí; **lá Soil đất trống thay vào đúng vị trí cũ**; nhận **1 `Stone` Item** vào Item/inventory |

Bụi rậm là **ảnh/state trên lá Soil**. Đá là **lá vật cản riêng**, không phải ảnh của Soil; lá Soil đất trống chỉ xuất hiện ở vị trí đó sau khi đập đá. Tên làm việc của lá đá ở Field là `Field Rock` để phân biệt với `Rock` source card trong Mine. `Stone` nhận được là Item identity riêng. **Công dụng, giá bán và các nguồn Stone khác để đến giai đoạn đổ nội dung vào game** theo quyết định CG-41; việc thiếu công dụng hiện tại không xóa output của Clear. `Rock` trong Mine không bị thay bằng Soil và không dùng luật Clear của Field.

**Till · CG-40:** chọn `Hoe` rồi chạm một lá `Soil` đang **trống, chưa cày**. Chạm đích commit ngay, trả **1 AP**; Hoe không bị tiêu và chính lá Soil đổi ảnh sang đất đã cày. Soil có bụi, lá đá, Soil đã cày và Crop không phải đích Till hợp lệ. Till không sinh item hoặc thêm vị trí đất.

| Trạng thái trên cùng ô | Tương tác | Sau tương tác |
| --- | --- | --- |
| `Soil` có bụi | `Clear` bằng Sickle | Cùng identity `Soil`, ảnh đổi sang đất trống |
| Lá đá ở Field | `Clear` bằng Hoe | Lá đá được thay bằng lá `Soil` đất trống ở cùng vị trí; nhận 1 Stone |
| `Soil` trống, chưa cày | Hoe → Soil, `Till` **1 AP** | Cùng lá `Soil` đổi ảnh/state sang đã cày; sẵn Plant |
| `Soil` đã cày | Plant một Seed | Chính lá trên ô đổi identity thành crop theo giống Seed |
| Crop | Water/Rain, Sleep, rồi Hand Harvest khi Mature | Crop trả ô về `Soil` đã cày; không phải Clear/Till lại sau mỗi Harvest |

`Empty Soil`, `Overgrown Soil` (bụi) và `Tilled Soil` là **tên trạng thái để đọc trên cùng identity `Soil`**; đá vẫn là lá riêng. `Soil`, `Field Rock` và từng Crop có mục Bách Khoa riêng khi từng identity hiện; đổi ảnh bụi → đất trống → đã cày trong cùng lá Soil không mở mục mới. CG-40 sửa phân loại `Tilled Soil` identity ở CG-02/34; quyết định Plant đổi identity Soil → Crop theo giống vẫn giữ. UI-44 bỏ bộ lọc/tóm tắt Field nhưng không đổi state. Không lấy hình học của ô Field để quy đổi thành phạm vi tưới nhiều lá; CG-26 vẫn giữ Watering Can thường tưới một crop/1 AP trong V0.

## 3. Nhịp AP và ranh giới còn mở

Với **Till 1 AP đã chốt**, người chơi có thể chọn dùng trọn 6 AP ngày đầu để Till hai Soil trống, Plant hai Seed, Water hai crop (`2 + 2 + 2`). Đó là lựa chọn tối đa trong phép thử, không phải lịch bắt buộc. Người chơi có thể chuẩn bị/trồng một ô và dùng AP còn lại ở Region khác. Hai Soil trống giúp bắt đầu Farm mà không phải Clear trước.

**Chưa chốt trong phạm vi cơ chế Field:** vị trí/thứ tự cụ thể của 3 bụi và 3 đá; kích thước/chữ cuối của lá trên thiết bị thấp theo UI-44. **Để đến giai đoạn đổ nội dung:** công dụng, giá bán và nguồn Stone khác. `Clear 1 AP` đã chốt theo CG-39; `Till` dùng Hoe, 1 AP, đổi state trong lá Soil theo CG-40. Không suy ra `Wood`, `Axe` hoặc phần thưởng từ bụi rậm.
