# Fruit Trees · gói Home/Field V0

Ngày: 2026-09-26. Trạng thái: **lựa chọn chuyển thể giấy V0 · CG-59–61**, không phải lời chốt trực tiếp của chủ dự án về các con số. Contract này sở hữu Plant, growth, Harvest và Chop của **Apricot/Cherry** (Spring), **Orange/Peach** (Summer) và **Apple/Pomegranate** (Fall). CG-60/61 mở rộng cùng mẫu đã chọn ở CG-59, không thêm action mới. [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) sở hữu tám vị trí Field; [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) tiếp tục sở hữu crop thường. [Danh mục V0](LITTLE-VALLEY-CARD-REGISTER-V0.json) sở hữu identity, loại và nơi của lá.

## 1. Nguồn, vị trí và lá

Người chơi bắt đầu vòng giấy với **1 sapling mỗi loài đã chọn**: Apricot, Cherry, Orange, Peach, Apple và Pomegranate trong Item, bên cạnh Seed/Tool đã có. Đây là nguồn mở đầu để có thể chơi trọn vòng khi chưa chọn giá và listing shop; **không** phải nguồn sapling của Stardew Valley. Sapling là `Item / Seed · Sapling`, mỗi identity riêng, có thể giữ qua ngày và Season. Chưa có nguồn mua hay thưởng thêm trong V0. Chop trả lại đúng sapling của loài nên cùng cây có thể được trồng lại. Sapling đầu game không làm cây tự xuất hiện trên Field.

Chọn một sapling trong Item rồi chạm **một vị trí Soil đang `Empty Soil` hoặc `Tilled Soil`** ở `World → Home → Field`: `Plant` ngay, tiêu 1 sapling và **1 AP gốc**. Lá Soil ở chính vị trí đó được thay bởi cây đúng loài, một lá `Vegetation` bám đất ở state `Young 0/6`. Cây dùng **một trong tám vị trí** Field; không tạo ô thứ chín, container mới hay Region mới. `Overgrown Soil`, `Field Rock`, crop và cây đang chiếm vị trí không là đích Plant hợp lệ. Nếu hai vị trí trống mở đầu đã bận, Clear vị trí bị cản theo luật Field trước khi trồng thêm. Cho phép cả Soil đã cày là **ngoại lệ chuyển thể giấy** để vị trí không mắc kẹt sau Till/Harvest; nguồn Stardew trồng sapling trên đất chưa cày. Plant cây không có bước Hoe Till, không dùng nước và không cần ô kề trống.

| Loài | Sapling đầu game và sau Chop | Quả khi Harvest | Mùa có quả |
| --- | --- | --- | --- |
| `Apricot Tree` | `Apricot Sapling` | 1 `Apricot` | Spring |
| `Cherry Tree` | `Cherry Sapling` | 1 `Cherry` | Spring |
| `Orange Tree` | `Orange Sapling` | 1 `Orange` | Summer |
| `Peach Tree` | `Peach Sapling` | 1 `Peach` | Summer |
| `Apple Tree` | `Apple Sapling` | 1 `Apple` | Fall |
| `Pomegranate Tree` | `Pomegranate Sapling` | 1 `Pomegranate` | Fall |

Quả là `Item · Crop` sau Harvest, có thể giữ trong Item qua ngày/Season. Giá, recipe, gift preference và listing bán là phần nội dung sau; thiếu sink/giá không chặn Harvest. `Hand` và `Axe` là Tool tái dùng đã có trong V0, không tạo identity mới cho lô này. Bách Khoa ghi sapling đầu game khi thấy trong Item, cây khi chính lá được Plant và hiện ở Field, quả khi item Harvest lần đầu hiện. Hình quả trên cây chưa Harvest không mở entry quả.

## 2. Nhịp cây và hai action

`Sleep` tăng `Young` thêm một nấc, tối đa **một nấc mỗi ngày**, qua mọi Season và bất kể Rain/Water. Từ `Young 0/6` sau Plant, sau lần Sleep thứ sáu cây thành `Mature`. Nếu ngày vừa vào thuộc **mùa có quả của chính loài đó** trong bảng §1, nó ở state `Có quả`; nếu thuộc Season khác, state `Không có quả`. `Watering Can`/Rain không đổi hoặc tăng tốc cây. Cây Mature tồn tại qua ngày và Season, không tự biến mất hoặc quay về Soil.

| Nguồn → đích | Điều kiện và phí | Kết quả ngay |
| --- | --- | --- |
| `Hand → cây ăn quả đã chọn` | `Harvest`, chỉ khi Mature và `Có quả`; **1 AP gốc** | Nhận 1 quả đúng loài vào Item; **cùng lá cây** ở lại, đổi sang `Đã hái 0/3`. Không trả vị trí về Soil. |
| `Axe → cây Young` | `Chop`, **1 AP gốc** | Cây rời Field; nhận lại 1 sapling đúng loài, không Wood/quả; vị trí trở thành `Soil` ở state `Empty Soil`. |
| `Axe → cây Mature` | `Chop`, **1 AP gốc** | Cây rời Field; nhận 1 sapling đúng loài và **2 Wood**; vị trí trở thành `Soil` ở state `Empty Soil`. Quả chưa hái, nếu có, mất đi. |

Sau Harvest, mỗi `Sleep` **bước vào một ngày thuộc mùa có quả của loài đó** tăng bộ đếm đã hái lên một; ở nấc `3/3`, cây trở lại `Có quả`, sẵn sàng Harvest vào ngày đó. Không cộng hồi trong ngày ngoài mùa có quả, không tích nhiều quả nếu bỏ qua Harvest. Khi bước vào mùa có quả mới, mọi cây Mature đúng loài còn đứng trên Field trở thành `Có quả` ngay, bất kể đếm dở từ năm cũ. Nếu bước ra khỏi mùa có quả, cây Mature chuyển `Không có quả`; cây Young vẫn tăng growth. Đây là nhịp hồi giấy của dự án, không phải mỗi ngày một quả/tích tối đa ba quả của game gốc.

Chop **không** để `Stump`: cây ăn quả trả sapling và giải phóng đúng vị trí của mình ngay. Vì vậy không áp luật Chop Stump và hồi cây theo Season của Oak/Maple/Pine trong Forest. Không có item cây hoặc gốc cây. Chạm xem lá, mở/Back Field hoặc chọn nguồn không commit không tốn AP. Đích sai state, hết sapling hoặc thiếu AP thì từ chối, không tiêu Item/AP và không đổi lá. Nell relief, nếu đủ điều kiện, chỉ giảm AP thực trả theo luật chung; không đổi số quả, Wood hay nhịp Sleep. Không thể Harvest và Chop cùng một lá sau khi Chop đã xóa nó.

## 3. Một đường chơi giấy và ranh giới

Ví dụ với Season 18 ngày và 6 AP/ngày hiện hành: Spring D1 Plant Apricot ở một Empty Soil (`1 AP`); sau Sleep D1–D6 cây `Mature · Có quả` ở D7; D7 Hand Harvest (`1 AP`) nhận Apricot; Sleep D7–D9 đưa cây trở lại `Có quả` ở D10. Nếu Plant Orange vào Spring D13 trên một Soil đã dọn, Sleep Spring D13–D18 làm cây Mature và **Summer D1** có quả; Harvest Summer D1 (`1 AP`) nhận Orange; Sleep Summer D1–D3 đưa cây lại `Có quả` ở Summer D4. Tương tự, Plant Apple vào Summer D13 rồi Sleep Summer D13–D18: **Fall D1** có Apple, Fall D4 có thể có quả lần nữa sau Harvest Fall D1. Người chơi có thể thay một lần Harvest bằng Axe Chop (`1 AP`) để nhận sapling + 2 Wood, trả vị trí về Empty Soil, rồi Plant lại sapling (`1 AP`) khi muốn. Cherry, Peach và Pomegranate dùng cùng mẫu theo mùa tương ứng. Sáu cây cùng lúc chiếm sáu trong tám vị trí Field; hai vị trí còn lại có thể vẫn bị cản và cần Clear trước khi trồng crop thường. Không tăng sức chứa.

[Stardew Valley Wiki — Fruit Trees](https://stardewvalleywiki.com/Fruit_Trees) là nguồn cho tên loài, mùa quả, sapling, Axe, Wood và phân biệt cây non/cây trưởng thành. [Orange Sapling](https://stardewvalleywiki.com/Orange_Sapling), [Peach Sapling](https://stardewvalleywiki.com/Peach_Sapling), [Apple Sapling](https://stardewvalleywiki.com/Apple_Sapling) và [Pomegranate Sapling](https://stardewvalleywiki.com/Pomegranate_Sapling) có đường cửa hàng trong game gốc; cặp Apple/Pomegranate cho quả mùa Thu. [Banana Sapling](https://stardewvalleywiki.com/Banana_Sapling) và [Mango Sapling](https://stardewvalleywiki.com/Mango_Sapling) gắn nguồn Island, cùng ngoại lệ cho quả quanh năm ở đó. Vì năm Region V0 chưa có Island, Banana/Mango chưa được chọn. Game gốc dùng 28 ngày lớn lên, quả hằng ngày trong mùa và tối đa ba quả chờ hái; **6 Sleep**, **3 Sleep hồi**, **1 quả**, **2 Wood**, **1 AP**, chấp nhận Tilled Soil, sapling mỗi loài đầu game và không Stump là lựa chọn chuyển thể giấy V0. Không nhập Greenhouse/Island cho quả quanh năm, sét → Coal, fruit quality, giá, Processing hay gifting. `Banana Tree`/`Mango Tree` cùng sapling/quả tương ứng vẫn là nháp trong [lô Fruit Trees 03](../content-batches/fruit-trees-03.json), chưa là card V0.
