# Goal nội dung V0: một vòng đầu qua năm Region

**Hồ sơ goal đã đóng:** bảng hiện trạng bên dưới là ảnh chụp lúc kiểm goal giấy, không phải danh mục lá hay contract cần đồng bộ khi luật V0 đổi. Tra [bản đồ nguồn luật](README.md) cho nội dung hiện hành.

Ngày mở: 2026-09-25. Trạng thái: **đã kiểm đạt phạm vi luật giấy V0 của goal**, không phải luật gameplay mới hoặc bản runtime đã triển khai. Chủ dự án xác nhận việc làm giàu kho lá phục vụ đích: **năm Region có đủ lựa chọn để chơi một vòng đầu trọn vẹn**. [CG-52/53](ON-TABLE-CARD-SHAPE-DECISION-09.md) đã chuyển ưu tiên sang nội dung và đưa ba profile Crop vào vòng giấy. Các ngưỡng dưới đây là **tiêu chí làm việc do trợ lý đề xuất**, không phải số lượng lá hoặc giá trị cân bằng được chủ dự án chốt.

## Thế nào là “đủ” trong pha luật giấy

Một người chơi có thể mở `World`, đi qua `Home`, `Forest`, `River`, `Mine`, `Commerce`, thực hiện những action hiện hành, `Sleep` rồi tiếp tục mà không cần mượn lá từ fixture lịch sử. Mỗi Region đưa ra ít nhất một quyết định có hệ quả đọc được: chi AP hay giữ cho việc khác, lấy/giữ/bán vật phẩm, đổi nguồn lực lấy lựa chọn mới, hoặc giữ cơ hội để ngày sau. Các nguồn và item **mới được thêm trong goal này** phải có nơi xuất hiện, cách nhận, kết quả và một vai trò trong đường chơi hiện hành; `Keep` hoặc `Sell` là vai trò hợp lệ khi luật của chúng rõ. Bách Khoa chỉ ghi identity đã thấy, không phát reward.

Đóng goal bằng **một lượt kiểm đường đi đầu-cuối** trên bộ lá giấy sau khi các lô nội dung đủ rộng, để tìm nguồn hoặc kết quả bị cụt. [Trace năm Region 10](../evidence/FIVE-REGION-FIRST-LOOP-CONTENT-TRACE-10.md) đã thực hiện lượt kiểm ấy với fixture khai báo tại chỗ; nó không thành giá card hoặc vòng cân bằng AP lặp liên tục. Art, runtime, giá cuối và tổng nội dung Year 1 nằm ngoài điều kiện đóng goal.

## Bản đồ hiện trạng

| Region | Đường đã có trong contract/danh mục V0 | Việc còn thiếu đối với goal |
| --- | --- | --- |
| `Home` | Field có Soil/Clear/Till và ba đường Seed → Crop → output; Farmhouse có TV/Bed; Shipping Bin nhận item bán cuối ngày. | Ba profile đã có nguồn giấy, nhưng giá, thời gian lớn và chính sách Crop qua Season vẫn mở; không cần khóa số ấy trước khi mở rộng nội dung. `Stone` từ Clear Field Rock là output hiện hành được phép giữ trong lúc tìm công dụng ở pha nội dung theo CG-41. |
| `Forest` | `Wild Herb` hiện trực tiếp theo nhịp hiện hành; Hand Collect đưa vào Item; người chơi có thể Keep, Gift Nell khi hợp lệ hoặc gửi Bin. [Lô Forest 01](FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md) thêm lá bụi Hedgerow `Vegetation`, Hand hái một Berry/Season, có đường Keep/Sell → Gold cho Commerce. | Bụi và Herb khác cách tương tác, nhịp và vai trò, cùng xuất hiện trong trace đầu-cuối; không tăng quota Forest chỉ để có thêm tên. |
| `River` | Ba `Fishing Spot` khác cơ hội ẩn, một `Silver Minnow` khi Cast thành công, `Nell` xuất hiện theo lịch và nhận đúng `Wild Herb`. | Một Fish là **phạm vi Fishing V0 đã chốt**; không thêm Fish chỉ để tăng số lá. Giá Fish còn mở trong cân bằng. |
| `Mine` | Break Rock/Ore Rock, giữ tầng hoặc Descend; Ore đổi thành Copper Pickaxe, làm Dense rẻ AP hơn. | Sau lần nâng Copper, Ore chưa có vai trò thứ hai được author. Điều này chưa cản đường Mine đầu tiên; chỉ thêm nhánh mới nếu có công dụng thực. |
| `Commerce` | Supermarket niêm yết ba Seed; Gold từ Bin có thể đổi thành Seed để trở lại Field. | Giá chưa chốt nên kiểm đường mua dùng fixture tại chỗ. Không cần dựng thêm shop/currency sink chỉ để làm đầy Commerce. |

Nguồn luật cho các hàng: [World architecture](WORLD-NESTED-CARD-ARCHITECTURE-01.md), [Farm contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md), [lô Crop](FIRST-PLAYABLE-CROP-CONTENT-BATCH-01.md), [Fishing](FISHING-CURRENT-CONTRACT-01.md), [Mine](MINE-CURRENT-CONTRACT-01.md), [danh mục V0](LITTLE-VALLEY-CARD-REGISTER-V0.json). [Package Year 1](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) và [registry tối thiểu](CONTENT-MINIMUM-REGISTRY-01.md) còn giữ các tên/đường fixture cũ; chúng không tự kích hoạt lá trong V0.

## Lô Forest 01 đã chọn

`Hedgerow → Hedgerow Berry` đã được chọn cho luật giấy ở [contract Forest 01](FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md): bụi cây bám đất `Vegetation` nhận Hand để hái một Berry/Season với phí 1 AP; Berry có thể Keep hoặc Bin Sell trả cuối ngày. Đây là lựa chọn chuyển thể từ quan hệ bụi → quả; CG-56 đã sửa cách gọi “lá nguồn/Collect” gây hiểu nhầm. Berry không là Gift Mira/Nell; giá cuối vẫn mở.

Sau lô Forest, [trace 10](../evidence/FIVE-REGION-FIRST-LOOP-CONTENT-TRACE-10.md) đã kiểm đường đầu-cuối qua năm Region. `Stone` và Ore sau Copper vẫn là output có phạm vi mở đã ghi riêng, không được tự tạo Project/recipe chỉ để làm đầy graph. Chỉ thêm identity sau V0 khi action hoặc lựa chọn tạo bởi nó đủ cụ thể; không đặt quota lá theo Region.

## Kiểm hoàn thành phạm vi giấy V0

| Yêu cầu goal | Chứng cứ hiện hành | Kết luận |
| --- | --- | --- |
| Năm Region ở đúng tầng và mỗi Region có đường chơi | [World architecture](WORLD-NESTED-CARD-ARCHITECTURE-01.md), contract Farm/Forest/River/Mine và [trace 10](../evidence/FIVE-REGION-FIRST-LOOP-CONTENT-TRACE-10.md) D1–D8 | Đạt: đường đầu-cuối đi qua cả năm, có action hoặc mua ở từng Region, qua Sleep và quay về Field. |
| Lựa chọn có hệ quả, không chỉ thêm tên | [Lô Crop 01](FIRST-PLAYABLE-CROP-CONTENT-BATCH-01.md), [lô Forest 01](FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md), [Fishing](FISHING-CURRENT-CONTRACT-01.md), [Mine](MINE-CURRENT-CONTRACT-01.md), [trace 10](../evidence/FIVE-REGION-FIRST-LOOP-CONTENT-TRACE-10.md) | Đạt ở mức giấy: Seed khác profile; Berry chắc chắn đổi AP lấy Gold/Keep; Herb giữ cho Nell; Cast có thể hụt; Ore đổi Copper rồi giảm phí Dense. |
| Mỗi identity thêm trong goal có nơi, action, output, vai trò | [Danh mục V0](LITTLE-VALLEY-CARD-REGISTER-V0.json) hàng 42–49; [CG-53/55–57](ON-TABLE-CARD-SHAPE-DECISION-09.md) và hai contract lô | Đạt cho sáu lá Seed/Crop/output của Bean/Balm và hai lá bụi Hedgerow/quả Berry. CG-56 sửa cách đọc action; CG-57 sửa taxonomy của bụi; không dùng fixture cũ làm lá hoạt động. |
| Ranh giới quyết định/provenance và không khóa số cuối/runtime | [CG-52–55](ON-TABLE-CARD-SHAPE-DECISION-09.md), hai contract lô, [trace 10](../evidence/FIVE-REGION-FIRST-LOOP-CONTENT-TRACE-10.md) | Đạt: tên crop/Region do chủ dự án chọn được tách khỏi nguồn/cadence chuyển thể; giá/growth/yield trong trace được ghi là fixture, runtime chưa có. |

Giá, cảm giác chơi, art, Stone sink, Ore sau Copper và tổng content Year 1 **vẫn là công việc sau goal này**; không suy bảng trên thành khóa sản phẩm.
