# Nell V0 — kiểm kinh tế Gift / Keep / Sell Wild Herb · 07

Ngày: 2026-09-25. Trạng thái: **trace giấy và ngưỡng giá để chẩn đoán**, không chọn giá bán, tỷ giá Heart–Gold hay cân bằng phát hành. `Wild Herb` ở đây là đúng item identity đã Hand Collect vào Item theo [CG-49](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md). Các nhánh so cùng **một** item; Bách Khoa ghi identity khi thấy lá và không tiêu item, nên Record không phải cách dùng cạnh tranh.

## 1. Đầu vào hiện hành và biến chưa chốt

- [Package §6.9](../current/YEAR-1-PAPER-DESIGN-PACKAGE-V1.md): mở đầu hai Turnip Seed, 0G; Turnip Seed luôn được niêm yết trong Season giấy đầu; Buy 0 AP dùng ví hiện có. `2G/Seed`, `4G/Turnip` và hai plot mở đầu là **fixture**, không phải giá đã chốt. Shipping Bin xác nhận gửi 0 AP, trừ item ngay, ghi Gold chờ và trả **cuối ngày**; tiền chờ không mua được Seed trong ngày gửi.
- [CG-46–51 và trace 05–06](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md): Nell hiện D6/D12/D18 mỗi Season S18; Gift hợp lệ đúng `Wild Herb` tốn 1 AP, tiêu item, +1 Nell Heart, lần đầu nhận Nell; cap 2. Có Nell thì tối đa một lần/ngày chi 1 Heart, 0 AP, nhận tối đa 2 AP relief cho những action có phí **sau** activation trong ngày đó; relief còn dư hết ở Sleep. Heart chưa dùng giữ qua Sleep/Season. Heart đầy từ chối Gift, giữ item và không tiêu AP/đánh dấu Gift.
- [Registry I-HRB](../current/CONTENT-MINIMUM-REGISTRY-01.md) liệt kê Gift/Sell/Keep để kiểm lựa chọn, nhưng hàng là fixture lịch sử. Gọi giá bán Wild Herb là `P_H`, **chưa có trị số được chọn**. Số `4G` của [ledger v2 lịch sử](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) chỉ dùng làm điểm so; ledger ấy còn chứa Processed premium và Gold sink không thuộc loop hiện hành. Trace Sell bên dưới có điều kiện cần: Wild Herb được nhận vào Bin với giá `P_H` được author trước lúc chơi. Nếu chưa có giá, không thể hiển thị Gold chờ hay thực hiện một lượt bán có số tiền xác định.
- Luật giấy Keep hiện không đặt phí kho hoặc hạn hỏng cho item đã Collect. Wild Herb **chưa Collect** trên Forest mới bị dọn ở ranh giới Season; không áp dọn đó cho item trong túi.

## 2. Một đường tiền chung D1–D7

Chọn Sunny và slip Herb đầu xuất hiện D5 rồi còn ở Forest tới D6. Đây là **nhánh hợp lệ để so**, không phải lịch Weather hoặc slip được bảo đảm. D1 dùng 6 AP cho Till/Plant/Water hai Turnip; D2 Water 2; D3 Harvest 2. Bán **một** Turnip D3 ở giá fixture 4G, giữ một: ví 0G khi xác nhận Bin, 4G sau payout D3. D4 mua hai Seed ở giá fixture 2G/Seed, ví về 0G; Plant/Water hai crop tốn 4 AP. D5 Water 2; chúng Mature D6. D6 Harvest hai Turnip tốn 2 AP và Hand Collect Herb tốn 1 AP; 3 AP thường còn cho lựa chọn và các việc khác. Một Turnip D3 và hai Turnip D6 vẫn có thể đưa vào Bin, nên Herb **không phải nguồn Gold duy nhất** để mua Seed tiếp. Không cần bán cả hai Turnip D3 để tái gieo.

| Chọn sau Collect D6 | AP thêm ngoài 1 AP Collect | Item/Heart/Nell sau commit | Gold dùng được D6 → sớm nhất D7 |
| --- | ---: | --- | --- |
| Gift Nell khi Heart dưới 2 | 1 AP Gift; lần đầu Nell được nhận, Heart `0→1` | Herb tiêu; có Nell và 1 Heart. Nếu kích hoạt sau Gift, chỉ action có phí tiếp theo trong D6 mới dùng tối đa 2 AP relief. | `0G → 0G` từ Herb. Không quy Heart thành Gold. |
| Sell qua Bin, **nếu có giá `P_H`** | 0 AP xác nhận | Herb tiêu; không nhận Nell/Heart từ item này. | `0G → P_H` sau payout D6. Khoản này không mua Seed trong D6. |
| Keep | 0 AP | Herb ở Item; chưa có Nell/Heart/Gold từ item này. Có thể Gift D12/D18 nếu Nell hiện và Heart còn chỗ, hoặc bán vào ngày sau nếu có giá. | `0G → 0G` từ Herb; bán muộn thì payout cũng muộn. |

Trong **nhánh cô lập** ví 0G và không bán Turnip/Fish/item khác D6, mua hai Seed D7 giá fixture 2G cần `P_H ≥ 4G`. Ledger cũ đặt `P_H=4G` đúng ngưỡng này; `P_H<4G` không đủ và `P_H>4G` để dư. Đây là **ngưỡng chẩn đoán theo fixture**, không phải chọn `4G` cho Wild Herb. Trong đường Farm chung, người chơi có Turnip giữ từ D3 và Turnip mới D6 để bán; vì thế không được gọi Sell Herb là điều kiện sống còn của Seed renewal. Nếu bán item khác D6, nó cũng chỉ trả ở cuối D6.

## 3. Giá trị thời điểm của Gift và Keep

- **Gift D6 khi Heart 0:** trả Collect 1 + Gift 1 AP và mất Herb. Nếu D6 còn ít nhất hai AP chi phí cho action sau Gift và người chơi kích hoạt Nell, relief có thể tiết kiệm đủ 2 AP ngay D6. Nếu không có action phù hợp, Heart vẫn ở kho cho một ngày sau; lời hứa "Gift = 2 AP ngay" không đúng. Lần Gift đầu còn trao Nell lâu dài, một giá trị chưa có tỷ giá Gold. Một Heart vẫn chịu giới hạn một activation/ngày và cap 2.
- **Keep D6:** giữ quyền chọn Gift ở D12/D18, miễn item còn trong túi; cũng giữ quyền Sell sau khi có giá. Đổi lại, không nhận Heart ở D6 nên không dùng Nell relief trong D6 từ Herb ấy; nếu bán sau D6, Gold vào ví chậm thêm ít nhất một cuối ngày. Keep không trội tuyệt đối khi cần Seed D7 hoặc có hai AP action đang chờ relief D6.
- **Khi Heart đang `2/2`:** CG-48 làm Gift không hợp lệ; Keep hoặc Sell vẫn là lựa chọn. Nếu Nell còn hiện và chưa kích hoạt trong ngày, người chơi có thể kích hoạt `2→1` **trước** Collect/Gift; credit sau đó có thể trả 1 AP Collect và 1 AP Gift, Gift trả Heart về 2. Việc này dùng item, một activation và hai credit; không nhân vô hạn Heart/AP. Nếu không có lượt Gift hợp lệ hoặc không muốn tiêu item, giữ Herb không ép dùng quà.

Ba lựa chọn vì vậy có giá trị khác đơn vị và khác ngày: Sell tạo `P_H` Gold **ngày sau mới tiêu được**; Gift tạo Nell/Heart và relief tối đa 2 AP có điều kiện; Keep giữ cả hai quyền chọn nhưng dời lợi ích. Không suy ưu tiên cố định hoặc tỷ giá AP–Gold từ trace một nhánh. Giá bán Wild Herb, tác động của giá đó so với Sell Turnip/Fish, và cảm giác người chơi về việc dành Herb cho Nell vẫn mở cho phép thử kinh tế sau khi có bảng giá thử nhất quán.
