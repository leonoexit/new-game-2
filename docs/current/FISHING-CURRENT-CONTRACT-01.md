# Fishing — contract hiện hành 01

Ngày: 2026-09-25; cập nhật nội dung Fish 2026-09-26 (CG-64–67). **Loop Cast đã chốt — CG-18/22/23/24; roster và bộ lọc Season/Weather/pha theo CG-64–67.** Tài liệu này là nguồn luật Fishing hiện hành. [Đề xuất trước khi chốt](FISHING-V0-LOCK-PROPOSAL-01.md), `Before They Leave` và các fixture exact `Catch` là lịch sử; không dùng chúng để thay đổi phí, target hoặc cadence dưới đây.

## 1. Lá và thông tin người chơi thấy

River là Region card con trực tiếp của World; tableau River bày **ba instance của cùng card identity `Fishing Spot`**. Cả ba có cùng hình, tên và trạng thái đọc được; không in phần trăm, tín hiệu tốt/xấu hoặc vị trí cố định ám chỉ spot nào có cơ hội cao hơn. Ba spot là ba target riêng, không phải ba loại Fish. Người chơi là tác nhân mặc định theo UI-45; `Fishing Rod` là Tool card. Roster V0 có **mười Fish Item**: `Silver Minnow`, `Chub`, `Smallmouth Bass`, `Pike`, `Perch`, `Shad`, `Catfish`, `Walleye`, `Sunfish`, `Rainbow Trout`. `Blue Eel` thuộc nghiên cứu/fixture cũ, chưa có nguồn xuất hiện trong roster này. Chín Fish mới là lựa chọn chuyển thể nội dung theo CG-64–67, không phải tên do chủ dự án chốt trực tiếp.

Theo CG-45–51, lá Person `Nell` hiện trong tableau River **trọn ngày 6, 12 và 18 của mỗi Season 18 ngày**: Season đầu là lịch chủ dự án chốt, các Season sau là lựa chọn chuyển thể từ [kiểm giấy ranh giới](../evidence/NELL-SEASON-BOUNDARY-SCHEDULE-PAPER-CHECK-02.md). Nell hiện cả khi đã sở hữu hoặc chưa có Herb để Gift. Nell là target Gift cho đúng item `Wild Herb` đã Collect vào Item theo [CG-49](../evidence/NELL-WILD-HERB-GIFT-ELIGIBILITY-AUDIT-04.md); [CG-50](../evidence/NELL-GIFT-AP-HEART-DAYS-6-12-18-PAPER-CHECK-05.md) chọn 1 AP gốc và +1 Nell Heart/Gift hợp lệ, [CG-51](../evidence/NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn cap 2 Nell Heart trong luật giấy V0. Nell đứng ngoài ba `Fishing Spot`; sự hiện/vắng mặt không đổi odds ẩn, số Cast hoặc cadence Sleep của Fishing. Control ability sau sở hữu nằm ở khu `Person`, trỏ tới cùng Nell identity. Lịch/Gift của Nell không phải luật Fishing và không bảo đảm Gift.

Bách Khoa ghi `Fishing Spot` khi identity nguồn lần đầu hiện. Chỉ khi bắt được và lá Fish tương ứng xuất hiện mới ghi **đúng identity Fish đó**. Thấy River hoặc spot không tự ghi Fish. Fish nhận được vào Item với chính identity được rút; có thể giữ hoặc gửi qua Shipping Bin theo luật bán chung. Giá bán thuộc cân bằng Commerce, chưa được gói Fishing này ấn định.

## 2. Tỷ lệ ẩn và một `Cast`

Mỗi ngày có đúng một spot **25%**, một spot **50%**, một spot **75%**; phép gán được xáo ngẫu nhiên và **ẩn với người chơi**. Không có cách inspect, xem lại, cuộn, đổi nguồn hoặc rời/quay lại River để nhìn tỷ lệ hay reroll phép gán. Tỷ lệ cố định cho spot đó suốt ngày và chỉ được xáo lại ở `Sleep`.

`Fishing Rod → Fishing Spot → Cast` là một commit. Kiểm nguồn, spot chưa spent và đủ AP; nếu không hợp lệ thì không trừ AP, không rút kết quả, không đổi spot. Khi hợp lệ, trả **1 AP** (Nell relief áp dụng theo luật chung), dùng tỷ lệ ẩn của spot **đã chọn trước commit** để rút một kết quả độc lập. Thành công tạo **đúng 1 Fish Item** theo bảng loài ở §4; thất bại cho `No Bite` và không rút loài. Cả hai đều giữ phí đã trả, làm spot vừa dùng thành **spent** và không tác động đến tỷ lệ của hai spot khác. Không có `Hook`/`Reel`, thao tác thời gian thực hoặc phí thứ hai.

Người chơi thấy Fish hoặc `No Bite`, AP còn lại và spot nào đã spent. Tỷ lệ thật không lật sau Cast; ba con số chỉ thuộc luật hệ thống/test log. Với ba spot chưa phân biệt ở đầu ngày, mỗi lần chọn ngẫu nhiên có cơ hội trung bình 50%. Nếu dùng cả ba spot, kỳ vọng là 1,5 Fish/ngày; đây là kiểm tra sản lượng của luật, không phải lời hứa nhận Fish hay giá trị Gold. Quyết định chính là có tiêu AP cho một cơ hội ẩn hay dành AP cho việc khác.

## 3. Spent, rời River và `Sleep`

Mỗi spot nhận **tối đa một Cast mỗi ngày**. `No Bite` cũng tiêu cơ hội đó. Khi cả ba spent, River không còn target Cast hợp lệ trong ngày. Không có `Next` hoặc cách làm mới miễn phí. Rời River rồi trở lại giữ đúng spot spent, phép gán tỷ lệ ẩn và Fish đã nhận. Chỉ `Sleep` sang ngày mới mở lại cả ba spot và xáo phép gán **một lần**; Rain và chuyển pha không đổi các tỷ lệ ấy. Season, `Today Weather` và pha hiện tại quyết định tập loài đủ điều kiện ở §4; Weather không đổi giữa ngày và chuyển pha không làm mới spot. Đọc thông tin, đổi lá nguồn, cuộn World và Cast bị từ chối không làm mới hoặc đổi kết quả.

Trong runtime về sau, save/load phải giữ ngày/Season/Today Weather/**pha hiện tại**, phép gán ẩn, spot spent và Fish đã nhận; kết quả ngẫu nhiên của một Cast đã commit cũng phải giữ nguyên qua reload để không rút lại loài. Prototype trình duyệt hiện lưu state V0 trong localStorage; đây vẫn là contract giấy sở hữu luật Fishing, không phải quyết định về backend/save cuối.

## 4. Tập loài sau Cast thành công · CG-64–67

Sau khi spot báo **thành công**, lấy tập Fish đủ điều kiện theo **Season, `Today Weather` và pha hiện tại lúc Cast**, rồi rút **đều một identity** từ tập đó (mỗi identity một phần bằng nhau, các lần Cast độc lập). Đây là lựa chọn chuyển thể giấy dùng chung cho cả họ Fish, **không phải tỷ lệ loài từ Stardew Valley**. Không gắn loài vào spot, không lật odds ẩn và không thêm AP. Người chơi không chọn trước loài; nhìn thấy identity Fish sau Cast. `Silver Minnow` là Fish gốc của Little Valley Cards, có trong mọi Season/Weather/pha.

| Fish Item | Season | Today Weather | Pha | Nguồn tham chiếu và phần chuyển thể |
| --- | --- | --- | --- | --- |
| `Silver Minnow` | Tất cả | Tất cả | Tất cả | Identity V0 đã có theo CG-24; giữ làm loài phổ thông. |
| `Chub` | Tất cả | Tất cả | Tất cả | [Chub](https://stardewvalleywiki.com/Chub): Forest River, mọi mùa/giờ/thời tiết; gộp Forest River vào `River` giấy. |
| `Smallmouth Bass` | Spring, Fall | Tất cả | Tất cả | [Smallmouth Bass](https://stardewvalleywiki.com/Smallmouth_Bass): Town River, mọi giờ/thời tiết trong hai mùa; gộp Town River vào `River` giấy. |
| `Pike` | Summer, Winter | Tất cả | Tất cả | [Pike](https://stardewvalleywiki.com/Pike): Town/Forest River, mọi giờ/thời tiết trong hai mùa. |
| `Perch` | Winter | Tất cả | Tất cả | [Perch](https://stardewvalleywiki.com/Perch): Town/Forest River, mọi giờ/thời tiết trong Winter. |
| `Shad` | Spring, Summer, Fall | **Rain** | Tất cả | [Shad](https://stardewvalleywiki.com/Shad): River, Rain, 9am–2am; Morning/Night là pha rộng, không khớp từng giờ. |
| `Catfish` | Spring, Fall | **Rain** | Tất cả | [Catfish](https://stardewvalleywiki.com/Catfish): River, Rain, 6am–12am; Night là pha rộng. Không nhập Summer Secret Woods/Winter Rain Totem. |
| `Walleye` | Fall | **Rain** | Noon, Afternoon, Night | [Walleye](https://stardewvalleywiki.com/Walleye): River, Fall Rain, 12pm–2am; Winter cần Rain Totem ở nguồn. |
| `Sunfish` | Spring, Summer | **Sunny** | Morning, Noon, Afternoon | [Sunfish](https://stardewvalleywiki.com/Sunfish): River, 6am–7pm, Spring/Summer, Sun hoặc Wind; V0 chỉ chọn Sunny, Wind để sau. |
| `Rainbow Trout` | Summer | **Sunny** | Morning, Noon, Afternoon | [Rainbow Trout](https://stardewvalleywiki.com/Rainbow_Trout): River, 6am–7pm, Summer Sun; Trout Derby là ngoại lệ để sau. |

Ví dụ, Spring Sunny ở Morning có bốn loài (thêm Sunfish vào ba loài chung), Summer Sunny ban ngày có năm (thêm Sunfish/Rainbow Trout), Fall Rain ở Morning có năm và từ Noon có sáu (thêm Walleye). Winter vẫn có bốn loài chung. Xác suất thành công 25%/50%/75% của spot không đổi. Hai lần Cast thành công có thể cho cùng loài. `No Bite` không chọn Fish. Đây là quy tắc sản lượng theo loài, không đặt giá bán hay tỷ lệ nhận Fish khác.

**Bộ lọc pha · CG-66/67:** [CG-66 trong nhật ký](ON-TABLE-CARD-SHAPE-DECISION-09.md) sở hữu nút `Next Phase` và bốn pha `Morning → Noon → Afternoon → Night`. Không có đồng hồ hoặc giờ trôi theo action. Để chuyển dữ kiện nguồn, `Morning` bao trùm sáng trước trưa, `Noon` bắt đầu từ 12pm, `Afternoon` là phần chiều, `Night` là tối đến hết ngày nguồn. Cửa 6am–7pm chọn ba pha đầu; cửa 12pm–2am chọn ba pha cuối. Cửa dài của `Shad`/`Catfish` chạm cả bốn pha và được nén thành cả pha Morning/Night dù không khớp mọi giờ bên trong. Đây là chuyển thể giấy, không là giờ hay tỷ lệ bắt cá của Stardew. `Next Phase` không rút lại kết quả Cast cũ hoặc khôi phục spot spent.

## 5. Ranh giới V0

Chỉ thêm roster/output sau thành công; vẫn một hành động `Cast`. Ngoại lệ `Walleye` Winter bằng Rain Totem, `Sunfish` trong Wind và `Rainbow Trout` tại Trout Derby chưa có nguồn giấy; giá, bait, nâng `Fishing Rod` và minigame chưa vào V0. `Blue Eel` thuộc fixture cũ, chưa có đường trong roster này. Bản `Before They Leave` với exact `Catch`/Leaving và state hiện odds đã bị thay thế. Có thể cân bằng lại phần trăm, trọng số loài hoặc giá bán khi thử kinh tế chung; hiện trọng số bằng nhau là quy tắc giấy CG-64–67. Fishing được đóng ở mức **contract và roster mười Fish V0**; migration runtime/visual QA là việc triển khai về sau.
