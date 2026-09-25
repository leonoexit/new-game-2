# Exposed Ore — weak-point reading study v0.1

- Status: `study`; awaiting user review, not an approved direction or runtime asset.
- Date: 2026-09-25.
- Purpose: test whether one Exposed Ore can communicate a weak point through visible fracture geometry before the player strikes.
- Tool: built-in `image_gen`; model version and seed unavailable.
- Rendering reference: `art/approved/style-references/farm-high-key-style-reference-v0.1.png` (pixel construction and palette, no farm objects).
- Initial edit target: `art/style-studies/exposed-ore-action-v0.1/processed/exposed-ore-action-512-v0.1.png` (mine materials and vein).
- Full initial and correction prompts: [prompts.md](prompts.md).
- Source v0.1a: `source/exposed-ore-weak-point-source-v0.1a.png`, 1254×1254; superseded within this study because the weak plate was too far from the ore.
- Selected study source v0.1b: `source/exposed-ore-weak-point-source-v0.1b.png`, 1254×1254; targeted correction connects the fractured plate to the ore vein.
- Delivery: `processed/exposed-ore-weak-point-512-v0.1.png`, 512×512.
- Logical-size review: `processed/exposed-ore-weak-point-preview-160-v0.1.png`, 160×160.
- Static card: `processed/exposed-ore-weak-point-card-224-v0.1.png`, 224×224 with the complete 160×160 artwork inside; recreated by `build-card.sh`.
- Transformation: nearest-neighbor/point resize, no crop; PNG metadata stripped. UI frame and text composed separately with ImageMagick, not generated into artwork.

`STYLE.md` and `little-valley-cards-art-bible-v0.1.md` named by the art skill were not found in this repository. This study uses the active rendering reference and existing Exposed Ore record. Current Decision 09's square on-table card takes precedence over the skill's older portrait-frame instruction.

## Cách người chơi đọc lá

Giả thuyết hình ảnh: **đánh vào phần đá giữ quặng đã gần tách khỏi vách**. Độ sáng giúp nhận ra quặng; khe nứt và phần đá còn nối với vách giúp suy ra nơi dễ phá.

| Vùng nhìn thấy | Dấu hiệu dự định | Suy luận muốn người chơi có |
| --- | --- | --- |
| Đá bên trái | Mảng dày, chưa có mảnh gần tách | Chỗ này còn chắc |
| Mạch sáng giữa lá | Quặng lộ rõ nhưng nằm trong đá | Đây là thứ muốn lấy; sáng không tự có nghĩa là yếu |
| Mảnh đá sát bên phải mạch, khoảng giữa chiều cao | Khe tối ôm quanh một mảnh nhỏ, một nhánh quặng đi vào mảnh, vụn đá bên dưới | Đá ở đây đã gần rời; đánh vào đây có thể giải phóng quặng dễ hơn |

Không có cuốc, mũi tên hoặc vòng đánh dấu chỉ sẵn đáp án. Đây là trạng thái quan sát trước khi đánh; không thay thế hướng art hành động đã được duyệt trước đó.

Lời hướng dẫn nguyên lý, chỉ đưa sau lượt thử không gợi ý: “Tìm phần đá giữ quặng đã nứt gần rời khỏi vách. Khe nứt bao quanh một mảnh đá là dấu hiệu dễ phá.” Không dạy người chơi rằng bên phải luôn đúng.

## Hành động và hậu quả minh họa

Người chơi chọn **mảnh đá**, không phải chạm chính xác vào một pixel khe nứt. Nếu chuyển thành tương tác, vùng chọn phải đủ lớn cho thao tác ngón tay và cho xem lựa chọn trước khi trả AP; bản này chưa có hitbox hoặc tương tác.

Để nối hình với lượt giấy ở §6.3 của tài liệu nghiên cứu, có thể minh họa: đánh mảnh yếu giảm 3 độ bền; đánh mảng chắc giảm 1; về 0 nhận 1 Ore và source spent, Depth giữ nguyên. Các số 1 AP, độ bền 3 và phần thưởng trên khung chỉ là thông số mẫu, chưa phải luật được duyệt. Exposed Ore vẫn là nguồn; Ore là Item riêng, chỉ ghi Bách Khoa khi từng lá thực sự được thấy.

**Hệ quả thiết kế:** nếu người chơi đọc được điểm yếu từ art, không giữ “Dò điểm yếu 1 AP” làm bước bắt buộc. Phiên bản hình này có một vị trí cố định gắn với cấu trúc nhìn thấy, không còn là một trong ba vị trí được gán ngẫu nhiên nhưng không có manh mối. Tỷ lệ 2/3 của mẫu đoán cũ không áp dụng cho phép thử này.

## Phép thử đọc hình

1. Cho người chưa đọc phần giải thích xem riêng lá 224×224 với art 160×160. Nói: “Bạn muốn lấy quặng bằng cuốc. Bạn sẽ đánh vào đâu, vì sao?” Không nói trước màu, bên phải hoặc khe nứt.
2. Ghi lựa chọn đầu, lý do và mức tự tin; không hướng tay vào vùng đúng. Đánh vào vùng sáng vì “đó là quặng” khác với chọn mảnh nứt vì “đã gần rời”. Chọn đúng nhưng không giải thích được chưa chứng minh dấu hiệu có tác dụng.
3. Sau đó mới đưa hướng dẫn nguyên lý và hỏi người chơi chỉ ra dấu hiệu trên hình. Ghi riêng kết quả trước/sau hướng dẫn.
4. Một lá cố định chỉ kiểm tra khả năng đọc dấu hiệu ban đầu. Muốn kiểm tra học và áp dụng phải có bố cục khác ở lượt nghiên cứu sau; chưa tạo thêm asset hoặc chốt hướng.

Chủ dự án đã thấy lời giải trong trao đổi này, nên phản hồi của chủ dự án là review thiết kế; không được ghi thành phép thử không gợi ý.

## Rà hình và giới hạn

- Đã xem bản 512, bản 160 và khung lá 224; art vuông nguyên vẹn, chữ tách khỏi ảnh.
- Ở 160px có thể nhìn thấy mảnh lệch phải và khe tối, nhưng mạch sáng giữa lá vẫn là điểm hút mắt mạnh nhất; vụn đá là tín hiệu phụ yếu. Chưa chứng minh người mới phân biệt được khe bao quanh mảnh yếu với các khe đá còn lại.
- Giữ: mạch quặng liên tục, mảnh nứt có liên hệ trực tiếp với quặng, bóng khe tối, không có công cụ chỉ đáp án.
- Nếu người mới chỉ chọn mạch sáng hoặc không thấy khác biệt cấu trúc, lần sửa kế tiếp cần làm rõ khoảng hở và phần đá còn nối, giảm khe cạnh tranh; không kết luận phải thêm mũi tên ngay.
- Phép thử này chưa chứng minh loop Mine hấp dẫn. Khi đã học hình, một đáp án đúng cố định có thể thành thao tác lặp; chưa có đánh đổi giữa các cách khai thác, biến thể nguồn hoặc nâng Pickaxe.
- Chưa test người chơi, chưa sửa gameplay/fixture, chưa đổi taxonomy, chưa tích hợp runtime.
