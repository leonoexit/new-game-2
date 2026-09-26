# Rà ngoại lệ họ cây không ăn quả · 01

Ngày: 2026-09-26. Trạng thái: **rà kho nháp tại thời điểm viết**, không phải luật V0. Dữ liệu: [cây thường](../content-batches/common-trees-wood-01.json) và [cây đặc biệt](../content-batches/special-trees-02.json). **Cập nhật CG-58/63:** Oak/Maple/Pine, sau đó Mahogany/Hardwood đã vào V0; dùng [Forest contract hiện hành](../current/FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md) cho luật chơi, không đọc trạng thái nháp cũ ở hồ sơ này như luật hiện tại. Bảng ngoại lệ bên dưới là snapshot nguồn trước khi chọn Mahogany.

## Mẫu chung và ngoại lệ

Khung chuyển thể để rà: một cây có identity `Vegetation`, `Axe → Chop`, cây giữ cùng identity ở state `Stump`, còn sản phẩm là `Item` riêng. Khung này là **giả định chuyển thể có thể đảo ngược**, dựa trên ví dụ của chủ dự án về cây sau khi chặt; nó chưa chốt AP, số lượng, xác suất, cách xử lý gốc hoặc nơi xuất hiện. Việc cây thường biến thành Mushroom/Green Rain Tree là ngã rẽ identity/state riêng, chưa được khung này giải quyết.

| Nhóm | Dữ kiện từ game gốc | Hệ quả với kho nháp |
| --- | --- | --- |
| Oak, Maple, Pine | Chop cho Wood và sản phẩm liên quan | Dùng output nền `Wood`; seed/Sap/Moss là ứng viên liên quan, chưa đặt tỉ lệ |
| Mahogany, Mystic | Chop cho Hardwood | Ghi `Hardwood` ở biến thể; Mystic có điều kiện trồng qua Foraging Mastery, không tự xuất hiện trong Forest |
| Green Rain Type 1, 2 | Có output Wood, Sap và vật phẩm có điều kiện | Dùng `Wood` riêng cho hai biến thể; điều kiện Green Rain chưa chuyển thành lịch V0 |
| Green Rain Type 3 | Có Fiddlehead Fern và Mossy Seed; nguồn này không nêu Wood như output nền | Ghi `Fiddlehead Fern`; không kế thừa Wood từ Type 1, 2 |
| Mushroom Tree | Cây thường có thể biến thành Mushroom Tree; Chop cho Red/Purple Mushroom, stump có thể mọc lại theo mùa | Ghi output Chop; Tapper là action riêng, còn nhịp mọc lại và cách biểu diễn biến đổi còn mở |
| Palm | Desert/Island; Shake/Chop có thể cho Coconut khi đạt điều kiện Foraging, Island có thể cho Golden Coconut | Ghi sản phẩm có điều kiện, chưa khẳng định `Wood` bắt buộc hoặc gán vào Forest |

Nguồn kiểm: [Trees](https://stardewvalleywiki.com/Trees), [Palm Tree](https://stardewvalleywiki.com/Palm_Tree), [Mushroom Tree](https://stardewvalleywiki.com/Mushroom_Tree), [Mystic Tree](https://stardewvalleywiki.com/Mystic_Tree), [Green Rain Trees](https://stardewvalleywiki.com/Green_Rain_Trees). Rulebook board game, trang 11, nén Tree tile thành Wood khi nhận; không dùng quy tắc nhặt tile đó để suy AP của Little Valley Cards.

## Các vấn đề gom theo họ

1. **Một lần Chop:** chọn AP và output đủ rõ để giải quyết một lượt giấy; không sao chép số hit hoặc xác suất rơi từ video game.
2. **Gốc cây:** xử lý `Stump` còn trên bàn, có thể chặt tiếp và có thể mọc lại theo từng loại; quyết định ở cấp họ trước khi chọn lá vào chơi.
3. **Nguồn xuất hiện và biến hình:** Forest, Farm, Desert/Island, thời tiết và mastery không được nhập thành một nơi chung. Cây thường biến thành Mushroom/Green Rain Tree trong game gốc; cần chọn identity mới hay state/overlay ở cấp họ trước khi dùng biến hình trong V0.
4. **Action phụ:** shake/forage/tap, trồng hạt và vật phẩm phụ cần lô action riêng nếu được chọn; chúng không làm sai output Chop đã rõ.

[Fruit Trees](https://stardewvalleywiki.com/Fruit_Trees) là họ thu hoạch trái theo mùa, gồm Apple, Apricot, Banana, Cherry, Mango, Orange, Peach và Pomegranate. Chúng có nhánh Chop nhưng vòng chính là **Harvest → fruit**, nên cần mẫu dữ liệu riêng; chưa trộn vào lô cây lấy Wood. Giá, recipe và sink của Wood/Hardwood không chặn việc lưu output trong kho nháp.

## Rà chọn Forest V0 sau CG-61 · CG-62

**Kết luận phạm vi:** chưa đưa biến thể nào của [lô cây đặc biệt 02](../content-batches/special-trees-02.json) vào Forest V0. Cả sáu biến thể đều có đường output khi đã có cây, nhưng thiếu **đường xuất hiện phù hợp** với năm Region và luật hiện hành. Cố định một cây đặc biệt sẵn trong Forest chỉ để có target Chop sẽ tự đổi nơi xuất hiện hoặc điều kiện tiến trình từ nguồn; đó không còn là thêm biến thể theo mẫu Oak/Maple/Pine. Đây là kết luận rà nội dung theo điều kiện hiện hành, không phải quyết định xóa loài khỏi dự án.

| Biến thể nháp | Đường đã có trong nguồn | Chỗ chặn trước khi chọn V0 |
| --- | --- | --- |
| `Palm Tree` | Axe/Shake có thể cho Coconut; Golden Coconut ở Island. | [Nguồn Palm](https://stardewvalleywiki.com/Palm_Tree) đặt cây ở Desert/Island, ngoài năm Region V0; nguồn không xác nhận Wood bắt buộc. Chưa có địa điểm hay nguồn cây tại Forest. |
| `Mushroom Tree` | Axe Chop cho Red hoặc Purple Mushroom; để lại Stump, có nhịp hồi mùa. | [Nguồn Mushroom](https://stardewvalleywiki.com/Mushroom_Tree) dùng biến đổi từ cây thường trên Farm vào Fall hoặc seed sau Qi unlock. Chưa chọn liệu biến đổi ấy là **identity thay cây** hay **state của cây cũ**, và Field hiện chỉ có tám vị trí Soil/crop/Fruit Tree. Không gán sẵn Mushroom Tree cho Forest. |
| `Mystic Tree` | Axe Chop cho Hardwood; Stump cho thêm Hardwood. | [Nguồn Mystic](https://stardewvalleywiki.com/Mystic_Tree) cần crafted seed sau Foraging Mastery. V0 chưa có Mastery, recipe/Plant của loại seed này hoặc vị trí cây. Chọn sẵn cây ở Forest sẽ bỏ qua cổng tiến trình. |
| `Green Rain Tree Type 1/2` | Axe Chop có Wood/Sap và vật phẩm điều kiện. | [Nguồn Green Rain](https://stardewvalleywiki.com/Green_Rain_Trees) đặt cây qua Green Rain/Mossy Seed hoặc biến đổi tạm Oak/Maple. V0 chưa có Green Rain hay luật identity/state và hoàn nguyên cho cây đang có. |
| `Green Rain Tree Type 3` | Axe Chop cho Fiddlehead Fern; không dùng Wood làm output nền. | Cùng thiếu nguồn Green Rain/Mossy Seed và luật hoàn nguyên; output khác Type 1/2 nên không áp bảng Wood/Sap hiện hành. |

**Phân biệt nguồn và chuyển thể:** các địa điểm, điều kiện và output trong bảng đến từ trang nguồn liên kết; kết luận “chưa chọn” là đánh giá của Little Valley Cards dựa trên [World architecture](../current/WORLD-NESTED-CARD-ARCHITECTURE-01.md) và [Forest contract](../current/FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md). AP, số lượng rơi, Tapper và nhịp Stump của các loài đặc biệt chưa được chuyển thể. Không đưa Red/Purple Mushroom, Hardwood, Coconut, Fiddlehead Fern hoặc Mossy Seed vào [danh mục V0](../current/LITTLE-VALLEY-CARD-REGISTER-V0.xlsx) chỉ vì đã biết tên output. Khi một đường xuất hiện được chọn ở cấp họ, rà lại cả nguồn → action → output → state sau action; không mở từng Item bằng câu hỏi riêng.
