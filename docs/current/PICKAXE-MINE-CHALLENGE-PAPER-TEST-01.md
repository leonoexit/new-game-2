# Pickaxe trong Mine — phép thử challenge hữu hạn 01

Ngày: 2026-09-25. **Phép thử lịch sử dẫn tới CG-20.** Các số `Dense 3 → 2 AP` và nguồn hữu hạn đã được chốt sau đó, nhưng tầng mẫu trong tài liệu này **không** thay [phân bố tầng và luật Upgrade hiện hành](MINE-CURRENT-CONTRACT-01.md). Đọc cùng [Mine CG-17](MINE-FISHING-REFERENCE-DIRECTIONS-02.md#11-mine-đã-chốt-khung-chơi--cg-17) và [Pickaxe CG-19](ORE-USE-REFERENCE-AND-PROPOSAL-01.md#8-pickaxe-tren-mine-cg-19).

## 1. Câu hỏi cần trả lời

Một challenge thấy được trước khi nâng có còn đáng xử lý sau khi người chơi dùng `Next` miễn phí không? Pickaxe cấp Copper có thay đổi quyết định chi AP trên **cùng một nguồn hữu hạn** không? Phép thử chỉ đánh giá giá trị của hiệu ứng giảm phí `Break`; chưa đánh giá giá nâng Tool hoặc cân bằng cả mùa.

## 2. Tầng mẫu và giả định thử

| Nguồn riêng trong tầng | Lá người chơi thấy | Phí Break với Pickaxe thường | Phí Break với cấp Copper | Kết quả khi Break hợp lệ |
| --- | --- | ---: | ---: | --- |
| O1 | `Ore Rock` | 1 AP | 1 AP | Cấp Ore một lần; O1 thành spent. |
| D1 | `Ore Rock`, state làm việc `Dense` | 3 AP | 2 AP | Cấp Ore một lần; D1 thành spent. |
| D2 | `Ore Rock`, state làm việc `Dense` | 3 AP | 2 AP | Cấp Ore một lần; D2 thành spent. |
| R1, R2 | `Rock` | Ngoài phép so phí | Ngoài phép so phí | Giữ luật kết quả Rock của CG-17; không tạo Ore trong phép thử này. |

Ba ô mở đầu cho thấy O1, D1, R1; D2 và R2 nằm trong vòng luân phiên của cùng tầng. Chẳng hạn `Next` dưới R1 có thể đưa D2 vào đúng ô đó; O1 và D1 vẫn ở chỗ cũ. Đây là **thứ tự mẫu**, không chốt tổng lá/tầng, tỷ lệ `Dense` hoặc thuật toán luân phiên. O1/D1/D2 là mã phân biệt ba nguồn trong phép thử, không phải card identity mới. `Dense` là tên state đề xuất; các lá D vẫn có identity `Ore Rock`.

Phép tính dùng khung giấy **6 AP/ngày** đã chọn cho first-playable paper balance, không coi đây là khóa thông số Mine cuối. Mỗi nguồn Ore cho một Ore **chỉ trong phép thử** để so cùng output; yield thực còn mở. Phí `1/3/2 AP` là arm thử, chưa duyệt. Không giả định chi phí, địa điểm hoặc thời điểm đổi sang Copper; hai nhánh bên dưới so cùng một trạng thái tầng với cấp Tool khác nhau.

## 3. So hai nhánh trên cùng trạng thái

**State:** O1, D1 và D2 đã được thấy; cả ba chưa spent. Người chơi bắt đầu ngày với 6 AP và chọn `Character + Pickaxe → Break` lên từng nguồn. Một Break hợp lệ hoàn tất một lá, trả phí đang hiện và cấp Ore một lần. Không có các nhát hoặc action Break trung gian.

| Nhánh | Nếu xử lý O1, D1, D2 trong ngày | Quyết định quan sát được |
| --- | --- | --- |
| Pickaxe thường | `1 + 3 + 3 = 7 AP` | 6 AP không đủ lấy cả ba trong ngày; phải để lại ít nhất một nguồn, dùng ngày khác hoặc chọn việc khác. |
| Pickaxe cấp Copper | `1 + 2 + 2 = 5 AP` | Có thể lấy cả ba trong ngày và còn 1 AP cho việc khác. Cùng ba nguồn, tổng Ore không đổi. |

**Tình huống cuối ngày:** còn 2 AP, D1 chưa spent. Pickaxe thường hiển thị `Break 3 AP` nên không commit được; Copper hiển thị `Break 2 AP` và một lần Break hợp lệ nhận Ore. Nếu ngày khác có ít nhất 3 AP, Pickaxe thường vẫn có thể phá D1. Đây là **challenge về phân bổ AP**, chưa phải khóa cấp Tool tuyệt đối.

## 4. Kiểm `Next` và trạng thái

- Người chơi thấy D1 trước khi nâng, có thể bấm `Next` dưới D1 mà không mất AP. Khi D1 trở lại, nó vẫn là cùng nguồn chưa spent và giữ state `Dense`; `Next` không giảm phí hay tạo Ore.
- O1 đã spent không thể cấp Ore lần hai. `Next` có thể đưa các nguồn khác vào ô đó nhưng không tạo O1 mới; sau khi O1 bị xử lý, người chơi không thể liên tục tìm O1 rẻ để thay D1/D2.
- Nếu người chơi rời Mine rồi quay lại với Pickaxe cấp Copper, bàn, thứ tự luân phiên và trạng thái D1/D2 vẫn còn. Phí Break hiện theo cấp Tool hiện tại; việc nâng Tool không tự phá đá hoặc cấp Ore.
- Thiếu AP, nguồn spent hoặc Tool không hợp lệ: Break không commit, không tiêu AP và không đổi vòng. `Next` vẫn là lựa chọn miễn phí trên ô hợp lệ theo CG-17.

Phép thử chỉ dùng các nguồn khi còn một nguồn hợp lệ ngoài bàn để minh họa `Next`; xử lý lúc toàn bộ pool đã spent hoặc pool nhỏ hơn ba ô vẫn là bài toán triển khai Mine riêng, chưa được suy ra từ tầng mẫu này.

## 5. Kết luận và phần còn mở

Trong arm thử này, Copper tiết kiệm **1 AP trên mỗi D1/D2**, tức 2 AP nếu người chơi xử lý cả hai. `Next` cho phép hoãn challenge nhưng không nhân nguồn dễ hoặc bỏ vĩnh viễn lá khó. Khung 6 AP làm khác biệt thấy rõ ở khả năng xử lý cả ba nguồn trong một ngày. Đây là bằng chứng **hiệu ứng có chỗ dùng trong tình huống mẫu**, không chứng minh mức giá nâng Copper sẽ đáng trả hoặc tỷ lệ `Dense` ngoài tầng mẫu đã cân bằng.

Trước khi đặt phí nâng Tool, cần chốt: loại nguồn nào chịu giảm phí, phí Break cơ bản theo từng state/cấp Tool, số nguồn khó đủ để nâng cấp có giá trị và output của chúng. Sau đó mới chọn lượng Ore/Gold nếu có, nơi/thời điểm nâng và identity Tool qua các cấp. Hướng vật cản lớn hơn cần cấp Pickaxe sau đã được đồng ý ở mức định hướng; chưa gán nó vào tầng mẫu hoặc thêm identity mới.
