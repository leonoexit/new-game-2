# Nell — kiểm Gift, Heart và cap qua hai Season S18 03

Ngày: 2026-09-25. Trạng thái: **kiểm giấy, không chốt con số Heart mới**. [CG-46/47](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) đặt Nell ở `River` trọn ngày 6/12/18 của mỗi Season 18 ngày: Season đầu do chủ dự án chốt, các Season sau là lựa chọn chuyển thể. Tài liệu này hỏi liệu lịch ấy buộc đổi cap Heart `2` đang là fixture hay không. Không có gameplay runtime, thử người chơi mới, giá Gift cuối hoặc Gift preference đã chốt.

**Quyết định sau phép kiểm:** CG-48 chốt giữ quà và không commit Gift khi Heart đã đầy; phần so cap dưới đây là chứng cứ được viết trước quyết định đó. [Decision log](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) và [quyết định Person/Heart](NPC-HEART-DESIGN-DECISIONS.md) ghi luật hiện hành. Cap `2` vẫn là fixture, không thành con số đã chốt.

**Cập nhật item:** [CG-49](NELL-WILD-HERB-GIFT-ELIGIBILITY-AUDIT-04.md) về sau chọn chính item `Wild Herb` đã Collect làm quà Nell V0; các chỗ dưới đây nói Gift preference còn là fixture phản ánh thời điểm kiểm cap. Phí Gift, lượng Heart và cap số vẫn mở.

**Cập nhật số về sau:** [CG-50/trace 05](NELL-GIFT-AP-HEART-DAYS-6-12-18-PAPER-CHECK-05.md) chọn `1 AP/Gift` và `+1 Nell Heart/Gift` làm luật giấy V0. Các nhãn fixture cho hai số ấy bên dưới phản ánh thời điểm kiểm cap; **cap `2` vẫn là fixture**, chưa được chốt.

**Cập nhật cap về sau:** [kiểm Farm/Mine/Fishing 06](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn **cap 2 Nell Heart** làm luật giấy V0 theo CG-51. Những câu bên dưới gọi cap 2 là fixture phản ánh lúc tài liệu 03 được viết, không phải trạng thái hiện hành. Cân bằng phát hành vẫn chưa được thử người chơi mới.

## 1. Luật mang vào và giả định tách riêng

| Trạng thái | Input |
| --- | --- |
| Chủ dự án đã chốt | Person là identity giữ được; Gift đầu hợp lệ tiêu item và AP, sở hữu Person và tạo Heart; Gift sau tạo Heart của cùng Person. Mỗi Person nhận tối đa một Gift/ngày. Heart riêng của Person, giữ qua ngày và có cap riêng, **chưa chốt trị số**. Đã sở hữu thì dùng ability cả ngày Person không hiện. Xem [quyết định Person/Heart](NPC-HEART-DESIGN-DECISIONS.md) và [Nell §7.2](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md). |
| Luật giấy Nell V0 | Nell tiêu **1 Heart, 0 AP**, tối đa **một lần/ngày**, để miễn tối đa **2 AP của các action có phí tiếp theo cùng ngày**; Heart vừa nhận từ Gift đầu dùng được ngay. Relief chưa dùng hết biến mất ở Sleep. Không có hồi Heart tự động khi đổi Season. |
| Nguồn/schedule hiện hành | `Wild Herb` world card ở Forest tối đa một lá chưa Collect; khi đổi Season xóa lá chưa Collect, xáo lại năm slip và kiểm từ ngày 1. Herb mới lộ chậm nhất ngày 5 nếu không bị một lá khác chặn. [Kiểm lịch Season đầu](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) và [ranh giới](NELL-SEASON-BOUNDARY-SCHEDULE-PAPER-CHECK-02.md) phân biệt nguồn lộ với Gift thật. |
| Fixture chỉ để so cap | Một Gift bằng Wild Herb hợp lệ giá **1 AP**, sinh **1 Heart**, cap so sánh `1/2/3`; Hand Collect giá 1 AP. Chỉ Collect khi Nell hiện, Gift tối đa một lần ở ngày đó nếu có Herb và AP. Không giả định Seed/Gold, sở thích Gift hoặc chọn sử dụng Heart được chủ dự án chốt. |

## 2. Trần nguồn trong hai Season, không phải số Gift dự kiến

Sáu lần Nell hiện ở ngày toàn save **6, 12, 18, 24, 30, 36**. Nếu mỗi Season giữ Herb đầu tới ngày 6 và Collect + Gift hôm đó, một Herb thứ hai luôn lộ chậm nhất ngày 15, nên có thể chờ để Gift ngày 18. Như vậy có **hai cửa Gift có nguồn mỗi Season** theo chính sách fixture và nếu trả được AP. Gift thứ ba mỗi Season cần Herb thứ hai sẵn ngày 12 **và** Herb thứ ba sẵn ngày 18; [kiểm Season đầu](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md) đếm được **66/125** bộ ba slip cho nhánh ấy. Mọi Season xáo slip mới độc lập ở ranh giới; Gift, inventory và Heart của người chơi không bị tự reset.

| Hai Season, cùng chính sách Collect/Gift ở ngày Nell hiện | Số bộ slip trên `125²` | Ý nghĩa |
| --- | ---: | --- |
| Hai cửa có nguồn mỗi Season | `59² = 3481` | Tối đa bốn Gift trong fixture, nếu item/AP/điều kiện Gift đều hợp lệ và người chơi chọn Gift. |
| Một Season có cửa thứ ba, một Season không | `2×66×59 = 7788` | Tối đa năm Gift trong fixture. |
| Cả hai Season có cửa thứ ba | `66² = 4356` | Tối đa sáu Gift trong fixture, bằng sáu lần Nell hiện. |

Đây là **phân bố cơ hội nguồn có điều kiện trên bộ slip đều nhau**, không phải tỷ lệ Gift, Heart hay số lần ability sử dụng khi chơi. Collect sớm, giữ Herb trong Item, bỏ một lần Nell hiện, thiếu AP hoặc Gift tag cuối khác sẽ đổi lịch thực tế. Herb world chưa Collect ở ngày 18 biến mất trước Season kế; Herb đã Collect trong Item theo luật storage bình thường vẫn giữ và không bị bảng trên đếm là nguồn mới.

## 3. So cap `1/2/3` trên cùng nguồn `+1 Heart/Gift`

| Policy giấy | Nếu dùng một lần trên mỗi ngày Gift đủ điều kiện | Nếu muốn để dành, không dùng ability | Cái cap thực sự đổi |
| --- | --- | --- | --- |
| Cap `1` | Tối đa một activation trên mỗi Gift, tức tối đa sáu trong trần hai Season; mỗi activation vẫn chỉ miễn tối đa 2 AP. | Chỉ cất một Heart; CG-48 về sau chặn Gift kế khi stock vẫn ở cap. | Khó giữ một Heart dự phòng đồng thời nhận Gift mới nếu không tiêu trước. |
| **Cap `2` · fixture đang dùng** | **Cùng trần tối đa sáu activation** nếu Gift và action trả AP đều có; không tăng số lần dùng trong ngày. | Giữ được hai Heart qua ranh giới; một Heart có thể dùng ở hai ngày khác nhau trước cửa Nell tiếp theo. | Có một suất dự phòng sau Heart đầu; Gift khi stock đã 2 không tăng stock trừ khi dùng Heart trước. |
| Cap `3` | Vẫn cùng trần sáu activation và một lần dùng/ngày. | Có thể cất ba Heart, nhưng cần ba Gift có nguồn/AP trước khi tiêu; **trong chính sách nguồn của §2**, chỉ nhánh cửa thứ ba mới làm được trong một Season nếu bắt đầu từ 0 Heart, không mang Herb từ Season trước. | Chỉ thêm một suất tích trữ; chưa có chứng cứ hai suất của cap 2 thiếu cho một chuỗi ba ngày cần relief. |

**Hai trace cụ thể:**

1. S1 ngày 6, vòng hai Turnip Sunny trong [kiểm lịch 01](NELL-RIVER-WILD-HERB-SCHEDULE-PAPER-CHECK-01.md): Water 2 + Collect 1 + Gift fixture 1 = **4/6 AP thường**. Heart đầu có thể kích hoạt ngay cho các action **sau** đó, tối đa 2 AP relief; nếu không có action có phí tiếp theo, giữ Heart qua Sleep có giá trị hơn và relief dùng dở không tích được.
2. Giả sử Gift hợp lệ S1 ngày 6 và ngày 18, **không dùng ability**, stock cap 2 là `0→1→2`. Sang S2 ngày 1 và ngày 2, kích hoạt mỗi ngày một lần cho hai action có phí đủ dùng relief, stock `2→1→0` trước cửa Nell S2 ngày 6. Cap 1 chỉ giữ một lần dùng, cap 3 không thêm gì cho đúng trace này. Đây là nhánh lựa chọn, không chứng minh S2 hai ngày đầu luôn có action đáng miễn phí.

Ở một cửa Gift khi stock cap 2 đã đầy, nếu người chơi **chủ động kích hoạt trước** rồi Collect + Gift: stock `2→1→2`; 2 AP relief có thể trả Collect 1 + Gift fixture 1. Cùng ngày chỉ kích hoạt một lần, Gift tối đa một lần và Herb bị tiêu, nên không có vòng lặp Heart/AP vô hạn. **CG-48 về sau chốt:** nếu chưa hạ Heart mà chạm Gift ở cap, action bị từ chối, giữ item/AP và quyền Gift hôm nay. UI báo Heart đầy trước commit; không cần một thao tác riêng để cất quà.

## 4. Kết luận giấy và ranh giới quyết định

**Chưa có bằng chứng phải đổi cap `2` đang dùng để thử.** Cap `2` cho phép hai Heart qua ranh giới Season và không tăng trần AP relief/ngày; cap `3` chỉ thêm chỗ cất, còn cap `1` giảm quyền để dành. Giữ **cap `2` làm fixture so sánh**, không ghi nó là trị số chủ dự án đã chốt hoặc cân bằng cuối. `+1 Heart/Gift` và `1 AP/Gift` cũng giữ nhãn fixture nơi chưa được chủ dự án chốt; khả năng Nell `1 Heart → 2 AP relief, một lần/ngày` là luật giấy hiện hành riêng.

Để khóa **con số cap**, còn thiếu giá trị sử dụng Heart trong nhiều ngày Farm/Mine/Fishing thực tế, giá trị của Herb so với giữ/bán, Gift preference cuối và quan sát người chơi. CG-48 đã giải quyết trường hợp Heart đầy mà không đổi cap. Những thiếu hụt còn lại không chặn lịch Nell, Herb generator, ability hay nhánh Gift đầu đã mô tả; không thêm nguồn Herb/Heart, không sửa Season length và không biến trần sáu lần hiện thành sáu Gift bảo đảm.
