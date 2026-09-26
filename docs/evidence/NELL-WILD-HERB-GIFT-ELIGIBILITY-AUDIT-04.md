# Nell V0 — kiểm nguồn và chọn quà hợp lệ 04

Ngày: 2026-09-25. Trạng thái: **chứng cứ và lựa chọn chuyển thể CG-49** theo ủy quyền xử lý Gift preference, không phải quyết định trực tiếp của chủ dự án hay luật lấy nguyên từ Stardew. Không có gameplay runtime hoặc playtest người chơi mới.

**Cập nhật về sau:** [trace Gift/Heart 05](NELL-GIFT-AP-HEART-DAYS-6-12-18-PAPER-CHECK-05.md) chọn 1 AP gốc và +1 Nell Heart/Gift theo CG-50; [kiểm cap 06](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn cap 2 riêng Nell theo CG-51. Những câu bên dưới nói các số ấy còn mở phản ánh lúc chỉ kiểm item; cân bằng phát hành vẫn chưa được kiểm.

## 1. Nguồn và ranh giới chuyển thể

| Mức | Điều nguồn thực sự nói | Cách dùng cho Little Valley Cards |
| --- | --- | --- |
| Video game gốc | [Stardew Valley Wiki · Friendship](https://stardewvalleywiki.com/Friendship) ghi sở thích Gift phụ thuộc từng villager, đặc biệt nhiều item nhặt trong tự nhiên không có chung một kết quả cho tất cả. Wiki do cộng đồng biên tập trên site chính thức; `Nell` và `Wild Herb` không phải cặp quà được nguồn này xác định. | Giữ ý tưởng **điều kiện quà riêng cho Person**. Không nhập điểm friendship, quality, loved/liked multiplier hay danh sách quà của nhân vật Stardew khác. |
| Board game | [Rulebook trong repo, trang 14](<../../stardew rules.pdf>) cho hành động Make a Friend bằng cách tiêu một resource trong inventory; villager có loại Loved/Liked/Hated, và resource không Hated/No Gift vẫn có thể được tặng. Loved có thể cho nhiều Heart hơn. | Tham chiếu việc Gift dùng **item đã vào inventory** và có điều kiện hợp lệ. Không sao chép mặc định “mọi resource không ghét đều nhận”, Heart `2` cho Loved hoặc Season birthday bonus vào V0. |
| Chứng cứ dự án cũ | [Person mini-roster fixture 01](PERSON-MINI-ROSTER-FIXTURE-01.md) dùng `Fresh · Forage · Herb`, cụ thể là `Wild Herb` chứ không phải `Prepared Wild Herb` hay `Lemon Balm`. Các [kiểm lịch 01–03](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) đã chạy Collect/Gift với Wild Herb nhưng giữ nhãn fixture. | Giữ identity đã có đường nguồn/AP được kiểm; chuyển điều kiện Gift từ family/tag cũ sang **identity `Wild Herb` cụ thể**, vì CG-06 phân loại cây hoang dã là `Item · Crop`, còn `Forage` không là card type hiện hành. |

## 2. Lựa chọn Gift V0 · CG-49

**Nell nhận đúng một loại quà hợp lệ trong V0: card identity `Wild Herb` ở khu `Item` sau khi người chơi Hand Collect.** Đây là chính lá Wild Herb từ Forest đã đổi nơi, không phải lá quà/Nell mới. `Wild Herb` còn nằm trên tableau Forest chưa là item trong Item và chưa thể làm nguồn Gift; muốn tặng phải Collect trước. Kiểm **identity cụ thể** thay vì kiểm mọi Item nhóm `Crop`, mọi thứ có chữ `Herb`, hay tag `Fresh · Forage · Herb` của fixture cũ.

| Item/state người chơi có | Gift cho Nell V0 | Lý do |
| --- | --- | --- |
| `Wild Herb` đã Collect, đang ở Item | **Hợp lệ** nếu Nell hiện ở River, Heart dưới cap, chưa Gift hôm nay và trả được phí AP Gift | Trùng identity đã chọn; commit tiêu một Wild Herb, Gift đầu sở hữu Nell và tạo Heart theo Person rule. |
| `Wild Herb` còn trên Forest tableau | **Chưa hợp lệ** | Chưa Collect/đưa vào Item. `Hand → Wild Herb` là một action riêng, không gộp miễn phí vào Gift. |
| `Lemon Balm` hoặc crop/item khác có tag Herb | **Không hợp lệ** | Identity khác; crop Herb không tự thành Wild Herb. |
| `Prepared Wild Herb`/output xử lý về sau | **Không hợp lệ trong V0** | Output đã đổi state/identity, không còn chính lá Wild Herb chưa xử lý; nếu Processor được thiết kế về sau thì xét compatibility riêng. |
| Wild Herb ở Item nhưng Nell vắng, Heart đã đầy hoặc đã Gift hôm nay | **Chưa thể commit hôm đó** | Item vẫn được giữ. CG-45–48 đã phân biệt điều kiện xuất hiện, cap và giới hạn Gift; không xóa quà vì thao tác bị từ chối. |

CG-49 chỉ chọn **item hợp lệ**, không chốt số AP Gift cuối, lượng Heart mỗi Gift/cap, sale price hoặc ý nghĩa truyện của sở thích này. Các phép thử dùng `1 AP/Gift`, `+1 Heart/Gift` và cap `2` vẫn phải giữ nhãn fixture nơi chưa được chủ dự án chốt. V0 không cần thêm hated/loved tier, quà thay thế, birthday bonus hoặc cơ chế thử sai bằng cách tiêu item không hợp lệ.

## 3. Kiểm nhịp nguồn, AP và kết quả

Wild Herb mới của mỗi Season lộ chậm nhất ngày 5 nếu Forest không bị một card Herb chưa Collect chặn; Nell hiện ngày 6/12/18 theo CG-46/47. Nếu người chơi để Herb đầu chờ, ngày 6 có thể `Hand Collect` rồi `Gift` ở River. Trong fixture AP đang dùng, đó là `1 AP Collect + 1 AP Gift`, chưa kể action Farm; [kiểm Season đầu 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) cho nhánh hai Turnip ngày 6 tổng `4/6 AP`. Điều kiện item được chọn ở đây **không đổi** phép đếm nguồn Herb, lịch Nell hoặc trần Gift có nguồn của [kiểm hai Season 03](NELL-TWO-SEASON-GIFT-HEART-CAP-PAPER-CHECK-03.md).

Nếu Heart Nell đã đầy, [CG-48](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) chặn Gift: Wild Herb giữ nguyên trong Item, AP và lượt Gift chưa tiêu. Người chơi có thể dùng ability để Heart dưới cap rồi Gift nếu Nell còn hiện và các điều kiện khác hợp lệ. Nếu chưa Collect, Herb vẫn tuân luật world card/Season boundary; không tự đưa vào Item. Vì chỉ một item hợp lệ V0, thiếu Herb/thiếu AP chỉ trì hoãn nhánh Person; Farm, Mine và Fishing không lấy Nell làm gateway.

**Ranh giới:** Đây là lựa chọn chuyển thể để hoàn tất một Gift loop giấy tối thiểu. Nếu giai đoạn đổ nội dung cần Nell thích thêm món khác, thay `Wild Herb` bằng class quà, hoặc phân hạng Loved/Liked, phải bổ sung nguồn/giá/Heart effect và kiểm lại cadence; không suy những nội dung đó từ Stardew hoặc board game thành quyết định đã có.
