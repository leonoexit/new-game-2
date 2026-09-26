# Lô nội dung Crop đầu tiên cho V0 · 01

Ngày: 2026-09-25. Trạng thái: **lựa chọn chuyển thể để đổ nội dung giấy V0 theo hướng mới của chủ dự án**; chưa là giá, thời gian lớn, art hay gameplay runtime đã chốt. Chủ dự án yêu cầu dừng chuỗi kiểm số trên bộ lá quá thưa và đồng ý chuyển sang bổ sung hệ sinh thái lá. [CG-52/53](ON-TABLE-CARD-SHAPE-DECISION-09.md) ghi ranh giới. Lô này kích hoạt **hai crop profile đã được chủ dự án chọn tên từ trước**; không tạo cây thứ tư hoặc reward giả để làm đầy danh mục.

## 1. Chỗ thưa hiện có

Đọc [danh mục V0](LITTLE-VALLEY-CARD-REGISTER-V0.json) cùng contract hiện hành, không đếm các hàng fixture lịch sử của [registry 01](CONTENT-MINIMUM-REGISTRY-01.md) như lá đang hoạt động.

| Region | Lá/action đang có trong V0 | Chỗ thiếu nội dung thấy được |
| --- | --- | --- |
| Home / Field | Soil, Field Rock, Turnip Seed → Turnip Crop → Turnip; Tool, Farmhouse, TV, Bed, Bin | Grammar trồng có thể lặp nhưng chỉ một giống có nguồn Seed hợp lệ. Hai tên Crop đã chọn `Runner Bean` và `Lemon Balm` chưa vào loop. |
| Forest | Wild Herb hiện trực tiếp; Hand Collect và Gift Nell sau khi vào Item | Chỉ một opportunity item; Hedgerow Berry/Woodlot là tên giấy cũ chưa có công dụng/source V0 hoàn chỉnh. |
| River | Ba Fishing Spot cùng identity; một output Silver Minnow; Nell theo lịch | V0 Fishing đã chốt một Fish. Thêm loài mới sẽ sửa scope Fishing, không thuộc lô Crop này. |
| Mine | Rock, Ore Rock, Ore, Pickaxe → Copper Pickaxe; nguồn tầng hữu hạn | Có nhánh nâng đầu nhưng công dụng Ore sau Copper và cấp Tool tiếp theo chưa được author. |
| Commerce | Supermarket niêm yết Turnip Seed; Buy dùng Gold hiện có | Gold cho `crop-profile access` chưa có đích mua khác sau khi UI-23 bỏ thưởng Seed từ Bách Khoa. |

**Ưu tiên lô này:** nối Home/Field với Commerce bằng hai profile đã có identity và khác nhịp trồng. Nó cho người chơi chọn Seed/crop và tạo thêm mục Bách Khoa bằng việc **thấy chính từng lá**, không gắn reward vào Bách Khoa. Forest/Mine còn thưa được ghi nhận để chọn lô sau khi output của chúng có vai trò cụ thể; không bù bằng item không có chỗ dùng.

## 2. Sáu identity đưa vào danh mục V0 giấy

| Profile đã chọn tên | Seed ở Commerce và Item | Crop ở vị trí Field | Output trong Item | Vai trò nội dung |
| --- | --- | --- | --- | --- |
| `CR-L` · Runner Bean | `Runner Bean Seed` | `Runner Bean Crop` | `Runner Bean` | Cam kết một luống lâu hơn Turnip; người chơi đổi AP/đất/thời gian lấy một profile khác. |
| `CR-H` · Lemon Balm | `Lemon Balm Seed` | `Lemon Balm Crop` | `Lemon Balm` | Profile giữa Turnip và Bean; item Crop/Herb khác Wild Herb về identity và nguồn. |

`Runner Bean` và `Lemon Balm` là tên canonical giấy **chủ dự án đã chọn** trong [crop identity audit 20](../evidence/CANONICAL-CROP-IDENTITY-AUDIT-20.md). Sáu tên Seed/Crop/output ở bảng là cách tách identity đã có ở Turnip theo [CG-02/40](ON-TABLE-CARD-SHAPE-DECISION-09.md): Seed bị tiêu khi Plant; đúng lá ở plot đổi identity sang Crop; Hand Harvest tạo output riêng rồi plot về Soil đã cày. Đây là **lựa chọn triển khai nội dung**, không phải lời chủ dự án trực tiếp chốt từng lá hoặc con số.

## 3. Nguồn và action của lô

- Trong **Season giấy đầu tiên**, Supermarket ở Commerce niêm yết `Runner Bean Seed` và `Lemon Balm Seed` cùng Turnip Seed. Hai loại mới dùng cùng Buy commit 0 AP, trừ Gold **đã có ngay lúc mua**, nhận đúng Seed vào Item; shop không đặt giới hạn lượng/ngày trong baseline giấy này. Mở shop chỉ là navigation, và UI-37 ghi mục Bách Khoa của mỗi Seed khi lá hàng hiện, dù chưa Buy. Mở đầu vẫn **hai Turnip Seed, 0G**; không phát Bean/Balm miễn phí.
- Seed mới nhận đúng Soil đã cày trong Field; Plant 1 AP/crop, Watering Can 1 AP/crop Growing hoặc Rain 0 AP, mỗi Sleep được Watered tăng tối đa một growth, Mature chờ Hand Harvest 1 AP. Item thu hoạch có thể Keep hoặc gửi Shipping Bin; Bin trả Gold cuối ngày. Bách Khoa ghi Crop khi nó lần đầu hiện ở plot và output khi item thu hoạch lần đầu hiện, mỗi identity một mục. `Lemon Balm` **không** hợp lệ để Gift Nell vì CG-49 chỉ nhận đúng `Wild Herb` đã Collect.
- `3G/Seed` cho Bean/Balm, nhịp Lemon Balm `3` và Runner Bean `4` lần growth, một output/crop, và giá Sell trong phép thử cũ là **fixture so sánh**, không là giá hay chỉ số đã chốt trong lô này. Để mô phỏng Buy/Sell, bảng giá thử phải được khai báo trong chính phép thử; không in lên card như luật hiện hành. Season sau, giá bán, lợi nhuận, cách chọn thêm Seed và việc có thêm công dụng cho output vẫn mở.

**Nguồn đối chiếu:** [Pierre's General Store](https://stardewvalleywiki.com/Pierre%27s) bán nhiều giống Seed theo mùa; [Bean Starter](https://stardewvalleywiki.com/Bean_Starter) là một ví dụ Seed mua được rồi trồng thành Green Bean. [Rulebook *Stardew Valley: The Board Game* trang 14](<../../stardew rules.pdf>) cũng gom Buy/Plant các crop mùa vào một action cửa hàng. **Little Valley Cards tự chuyển thể** thành Seed card riêng, Buy 0 AP, Plant lên một Soil, không giới hạn shop theo ngày trong Season giấy đầu. Không nhập giá 60g, 10 ngày, trellis hoặc regrow của Green Bean gốc; Lemon Balm là identity giấy của dự án, không được gán là item có sẵn trong Stardew.

## 4. Ranh giới và công việc nội dung kế

Lô này sửa một khoảng trống nguồn **đã rõ** sau UI-23: hai profile Crop không còn phải đợi phần thưởng Bách Khoa đã bị bỏ. Nó làm Commerce có ba Seed card để chọn và Field có ba đường Seed → Crop → output theo cùng grammar, nhưng không tuyên bố game đã đủ content thương mại, không tạo hiệu ứng Herb phổ quát và không chốt thứ hạng lợi nhuận. `Field Notes` 3/4 reward trong các trace cũ vẫn là chứng cứ lịch sử. Đường Turnip đã kiểm trong [ledger 08](../evidence/FIRST-SEASON-FARM-NELL-BIN-FORMULA-AUDIT-08.md) vẫn tồn tại vì opening và Turnip listing không đổi; không cần chạy lại lịch đó chỉ để thêm hai lựa chọn tùy ý.

Lô nội dung sau nên giải **một** chỗ thiếu vai trò trong Forest hoặc Mine bằng nguồn → item → công dụng thực, trước khi thêm hàng loạt tên hoặc làm một vòng balance số nữa.
