# Rà họ Fruit Trees: Harvest và Chop · 01

**Cập nhật phạm vi · CG-59–61:** hồ sơ dưới đây là snapshot lúc cả họ còn nháp. Apricot/Cherry, Orange/Peach và Apple/Pomegranate đã được chọn vào V0; luật hiện hành ở [Fruit Tree contract](../current/FIRST-PLAYABLE-FRUIT-TREE-CONTENT-BATCH-01.md) và [lô Fruit Trees 03](../content-batches/fruit-trees-03.json). Banana/Mango vẫn nháp.

Ngày: 2026-09-26. Trạng thái: **rà kho nháp**, không phải luật V0. Dữ liệu đầy đủ của tám loài ở [lô Fruit Trees 03](../content-batches/fruit-trees-03.json), `status: imported_draft`. Nguồn game gốc: [Fruit Trees — Stardew Valley Wiki](https://stardewvalleywiki.com/Fruit_Trees).

## Hai đường action, một lá cây

| Đường | Dữ kiện nguồn | Khung chuyển thể đang thử |
| --- | --- | --- |
| `Harvest → fruit` | Cây trưởng thành cho đúng loại quả theo mùa; cây tiếp tục tồn tại để cho quả lần sau | `Hand → Fruit Tree` khi có quả: tạo Item quả; cây `Vegetation` giữ identity, đổi state khả dụng quả. AP, lượng và nhịp hồi chưa chọn. |
| `Axe → Chop` | Cây trưởng thành cho `Wood` và sapling cùng loài; cây ở stage 1 chỉ trả sapling | Nhánh tiêu cây tách khỏi Harvest. Ghi output theo loài; việc có giữ lá ở state `Stump` hay bỏ khỏi vị trí trong Little Valley Cards còn mở. |

Khung `Vegetation` dùng logic cây/bụi bám đất của CG-57; Hand Harvest dùng [Hedgerow](../current/FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md) như tham chiếu tương tác. Quả sau hái là `Item / Crop` theo CG-06; sapling có thể cất trong Item nhưng phân loại Seed/planting material còn mở. Đây là **lựa chọn chuyển thể nháp**, không suy rằng mọi Fruit Tree là Crop trên một Soil slot. [Contract Field](../current/FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) giới hạn tám vị trí Soil cho crop và định nghĩa `Soil → Crop → Soil`; lô này chưa quyết định nơi đặt cây hoặc thêm sức chứa Field.

## Ngoại lệ của cả họ

| Ngoại lệ | Ghi nhận lúc nhập | Chưa chuyển thành luật giấy |
| --- | --- | --- |
| Mùa quả | Apricot/Cherry: Spring; Banana/Mango/Orange/Peach: Summer; Apple/Pomegranate: Fall | Nhịp Season giấy, số quả/lần và trạng thái có quả |
| Banana/Mango | Sapling gắn nguồn Island trong game gốc; trồng ở Ginger Island cho quả quanh năm | Nguồn bán/trồng và việc Island có xuất hiện trong năm đầu; không đưa tự động vào năm đầu |
| Greenhouse/Island | Cây trưởng thành cho quả quanh năm ở các nơi này | Chưa map sang năm Region V0 hoặc mở sản lượng quanh năm |
| Sét | Cây bị sét tạm cho Coal thay quả rồi hồi lại | Không tự thêm Weather action, Coal output hoặc state cháy vào V0 |
| Banana/Mango trong quà tặng | Game gốc xếp sở thích Gift khác nhóm fruit-tree fruit thông thường | Không ghi đè luật Gift của NPC trong Little Valley Cards |

Nguồn game gốc dùng 28 ngày để trưởng thành, mỗi ngày một quả và giữ tối đa ba quả trước khi hái. Các số này **chỉ là dữ kiện tham chiếu**; lô nháp không gán ngày giấy, AP, xác suất, giá, recipe hoặc sink. Không lá cây, sapling hay quả nào trong lô này được kích hoạt trong [danh mục V0](../current/LITTLE-VALLEY-CARD-REGISTER-V0.json).
