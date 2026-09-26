# Quy trình thêm nội dung theo họ cơ chế · 01

Ngày: 2026-09-26. Trạng thái: **quy trình tác giả nội dung**, không tự chốt thêm lá hay luật gameplay. Chủ dự án chọn hướng **nhập cả lô trước, rà và sửa lỗi logic theo họ sau**. Mục tiêu là tránh hỏi và sửa contract cho từng lá.

## Một lô gồm gì

1. **Nguồn gốc:** tra nguồn game gốc cho tên, Tool, nguồn, output và điểm khác nhau; tra board game khi hữu ích để hiểu cách nén. Ghi URL hoặc trang rulebook cho cả lô. Nguồn chỉ mô tả game tham chiếu, không tự quyết định luật Little Valley Cards.
2. **Nhập thô cả lô:** ghi tên lá, loại/nơi dự kiến, Tool, action, output và quan hệ state theo nguồn. Đặt `status: imported_draft` và ghi chỗ chưa rõ vào `issues`; **không chặn nhập** vì chưa có AP, yield, giá, recipe, sink, cadence hoặc xử lý ngoại lệ. Không tự trình bày bản nhập là luật V0.
3. **Rà logic theo họ:** đặt mẫu chung một lần, rồi kiểm đường `nguồn → action → output → state sau action`. Sửa lỗi của **mẫu chung** để mọi biến thể cùng nhận sửa; chỉ ghi `pilot_override` cho ngoại lệ thật. Không sao chép số hit/ô/ngày từ game gốc thành AP hoặc nhịp giấy. Với cây lấy gỗ thường, `Axe → Chop → Wood và output liên quan; cây còn Stump` là bộ khung để rà. Cây ăn quả dùng mẫu `Harvest → fruit` giữ cây; `Chop` là nhánh riêng với output sapling và kết quả lá cây cần rà riêng.
4. **Biến thể và ranh giới:** mỗi tên thêm một dòng dữ liệu với chỉ những điểm khác mẫu chung. `deferred` ghi tính năng phụ, recipe, giá, nguồn khác và art. Item output không cần sẵn sink. Chỉ đưa chủ dự án xét **một ngã rẽ cấp họ** khi lựa chọn làm đổi identity/state, quan hệ chứa/thay lá, action/AP, tiến trình hoặc kinh tế chính.
5. **Đưa vào chơi:** bản nhập `imported_draft` ở `docs/content-batches/` là **kho ứng viên**, chưa là lá V0. Sau lượt rà, chỉ phần được chọn và có đường action/output/state đủ để chơi mới vào [decision log](ON-TABLE-CARD-SHAPE-DECISION-09.md), contract sở hữu và [danh mục V0](LITTLE-VALLEY-CARD-REGISTER-V0.json) **theo cả lô**. Batch chọn một phần dùng `partially_selected` và `promotion` liệt kê chính xác biến thể/output đã vào V0; phần còn lại vẫn là nháp. Lỗi giá, công dụng phụ hoặc balance không chặn bước này; lỗi khiến action không thể giải quyết thì xử lý ở cấp họ trước khi chơi. Không đồng bộ snapshot lịch sử.

Các batch dùng một hồ sơ JSON với `batch_id`, `status`, `source_facts`, `adaptation`, `variants`, `support_cards`, `issues`, `deferred`. Chạy `python3 scripts/check_content_batches.py` để kiểm cấu trúc, identity trùng và nguồn; bản nhập thô được phép có trường chuyển thể chưa chốt. Đây là kiểm dữ liệu tác giả, không là test cân bằng. [Lô cây thường](../content-batches/common-trees-wood-01.json) chọn Oak/Maple/Pine cùng Axe/Wood/Sap theo CG-58 và Mahogany/Hardwood theo CG-63 vào V0; seed, Moss và tapping vẫn nháp. [Lô Fruit Trees](../content-batches/fruit-trees-03.json) chọn Apricot/Cherry (CG-59), Orange/Peach (CG-60) và Apple/Pomegranate (CG-61) cùng sapling/quả tương ứng vào V0; Banana/Mango vẫn nháp. [Lô cây đặc biệt](../content-batches/special-trees-02.json) giữ `imported_draft` sau CG-62 vì chưa có đường xuất hiện/biến đổi phù hợp V0; xem [rà ngoại lệ cây](../evidence/TREE-FAMILY-EXCEPTION-REVIEW-01.md) và [rà Fruit Trees](../evidence/FRUIT-TREE-FAMILY-REVIEW-01.md).

[Lô River Fish](../content-batches/river-fish-04.json) đã `selected`: CG-64 chọn bốn loài theo Season, CG-65 thêm `Shad`/`Catfish` ngày Rain, CG-66/67 dùng bốn pha tiến một chiều để chọn `Walleye` và hai Fish Sunny `Sunfish`/`Rainbow Trout`. Xem [Fishing contract §4](FISHING-CURRENT-CONTRACT-01.md#4-tập-loài-sau-cast-thành-công--cg-6467) cho tập loài theo Season/Today Weather/pha. Các ngoại lệ Wind, Trout Derby và Rain Totem còn để sau; odds/AP/cadence của spot không đổi.

[Lô Mine named nodes](../content-batches/mine-break-nodes-05.json) giữ `imported_draft` sau CG-68: năm node quặng/đá quý có nguồn và output rõ, dùng khung `Break → Item → spent` để rà, nhưng chưa vào tầng V0. Việc thêm nguồn vào bảng sáu instance/tầng hoặc thay `Ore` chung bằng quặng có tên sẽ đổi tiến trình Copper đã chốt; giải ở cấp họ trước khi chọn vào chơi. Giá, recipe và công dụng của Item không chặn bước nhập lô.

**Phạm vi nhóm cây V0 sau CG-63 đã khép cho vòng giấy đầu:** bốn cây thường Forest có Chop/Stump/Season và output; sáu Fruit Tree Home/Field có Plant/Harvest/Chop theo mùa. Những loài còn nháp cần Island/Desert, Green Rain, Mastery hoặc luật biến đổi cây riêng; chúng không là việc còn thiếu để hoàn thành vòng cây V0 hiện hành. Giá, recipe, tapping, art và cân bằng phát hành cũng là phần nội dung/hệ thống sau, không mở lại từng lá đã chọn.

## Quy tắc quyết định nhanh

| Trường hợp | Xử lý |
| --- | --- |
| Cùng loại, Tool, action và output với mẫu chung | Thêm dòng biến thể; không hỏi hoặc viết contract mới |
| Output đã rõ nhưng chưa có recipe/giá/sink | Ghi output và phần còn mở; không chặn lô |
| Nguồn game có nhiều hit, tile, ngày hoặc tỉ lệ | Nhập dữ kiện nguồn trước; để AP/nhịp giấy trong `issues` rồi chọn bản nén ở cấp họ |
| Khác biệt làm đổi identity/state hoặc cấu trúc action | Vẫn nhập biến thể và đánh dấu `issues`; giải quyết **một lần cho cả họ** trước khi đưa vào chơi |
| Batch chưa cần cho vòng V0 | Giữ `imported_draft`; không đưa vào danh mục đang chơi |

Quy trình này không đặt mục tiêu nhập toàn bộ nội dung Stardew vào V0. Nó cho phép chuẩn bị các họ lớn mà vẫn giữ rõ lá nào thật sự tham gia vòng giấy hiện hành.
