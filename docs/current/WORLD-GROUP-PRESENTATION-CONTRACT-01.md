# Field — lọc và tóm tắt lá đất 01

Ngày: 2026-09-25. Trạng thái: **CG-29/31/33/34 còn hiệu lực cho UI bên trong Field; CG-39 phân biệt Soil có bụi với lá đá riêng.** CG-30/32 đã được CG-35/36 thay thế. Đọc cùng [kiến trúc World lồng tableau](WORLD-NESTED-CARD-ARCHITECTURE-01.md) và [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md).

## 1. Ranh giới lá thật và công cụ giao diện

`World` → `Home` → `Field` là các lá thật mở tableau con. Bộ lọc, dòng tóm tắt và cách nhóm để tìm lá **bên trong Field** chỉ là giao diện: không có card identity, mục Bách Khoa, AP, reward hoặc gameplay state riêng. Chạm lọc/focus là navigation 0 AP. Các lá đất/crop vẫn giữ identity, state, target, phí và kết quả action riêng. Bộ lọc không gom nhiều lá thành một action; Water vẫn nhắm một crop.

## 2. Tableau Field

- Chạm `Home` cho thấy lá `Field` cùng các lá Home như `Farmhouse` và `Shipping Bin`. Chạm `Field` mới thấy các lá đất/crop và vật cản. `Field` là container card, không phải nhãn nhóm UI.
- Bộ lọc đất/crop bên trong Field là **tùy chọn**, mặc định `Tất cả` khi mở lần đầu hoặc sau Sleep. Các mục lọc gồm Crop `Mature`, Crop `Growing`, Soil đã cày (`Tilled Soil`), Soil trống (`Empty Soil`) và vị trí bị cản. Đã cày/trống là **hai state khác nhau của cùng lá Soil** nhưng vẫn có mục lọc riêng theo CG-34/40. Mục bị cản gồm **Soil có bụi rậm** và **lá đá riêng**; có thể tách tiếp hai loại này để tìm đúng Tool. Bộ lọc không biến đá thành state của Soil.
- Một dòng tóm tắt phía trên các lá đất đếm từ **toàn bộ** tám vị trí đất/crop thực có trong Field, kể cả khi đang lọc. `Watered` vẫn là state của crop `Growing`. Dòng tóm tắt không là nguồn sự thật gameplay thứ hai; ở đầu game nó đọc `0 Mature / 0 Growing / 0 Tilled / 2 Empty / 6 bị cản (3 bụi, 3 đá)`.
- Lọc hoặc sắp xếp không tạo hay giải phóng suất đất, không đổi identity, AP, target, outcome hoặc nguồn. Field có sức chứa đất riêng; Farmhouse/Shipping Bin ở tầng Home nên không cần hiện trong bộ lọc Field và không tiêu suất đất Field.

## 3. Cần thử trên UI

Vị trí và hình thức của dòng tóm tắt/bộ lọc; thứ tự các lá đất; cách hiển thị đủ tám ô trên mobile. Theo CG-42, lọc/scroll giữ khi rời và quay lại Field **trong cùng ngày**, sau Sleep lọc trở lại `Tất cả`. Phép thử 2/4/8 ô tương ứng 2/4/8 ô đang cần người chơi chú ý trong Field tám ô; nó vẫn chỉ kiểm UI, không thay sức chứa. Các phép thử cần tìm crop Mature, tìm đất sẵn Plant, tìm đất cần Clear và Water hai crop riêng; kiểm rõ đường Back về Home để dùng Farmhouse/Shipping Bin.
