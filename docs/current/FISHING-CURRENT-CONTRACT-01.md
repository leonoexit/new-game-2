# Fishing — contract hiện hành 01

Ngày: 2026-09-25. **Fishing V0 đã chốt để chuyển sang task khác — CG-18/22/23/24.** Tài liệu này là nguồn luật Fishing hiện hành. [Đề xuất trước khi chốt](FISHING-V0-LOCK-PROPOSAL-01.md), `Before They Leave` và các fixture exact `Catch` là lịch sử; không dùng chúng để thay đổi phí, target, Fish output hoặc cadence dưới đây.

## 1. Lá và thông tin người chơi thấy

River bày **ba instance của cùng card identity `Fishing Spot`**. Cả ba có cùng hình, tên và trạng thái đọc được; không in phần trăm, tín hiệu tốt/xấu hoặc vị trí cố định ám chỉ spot nào có cơ hội cao hơn. Ba spot là ba target riêng, không phải ba loại Fish. `Character` là Person card, `Fishing Rod` là Tool card. `Silver Minnow` là **Fish Item duy nhất trong Fishing V0**; `Blue Eel` thuộc nghiên cứu/fixture cũ, chưa có nguồn xuất hiện trong roster V0 này.

Bách Khoa ghi `Fishing Spot` khi identity nguồn lần đầu hiện. Chỉ khi bắt được và lá `Silver Minnow` xuất hiện mới ghi Fish đó. Thấy River hoặc spot không tự ghi Fish. Fish nhận được vào Item với chính identity `Silver Minnow`; có thể giữ hoặc gửi qua Shipping Bin theo luật bán chung. Giá bán thuộc cân bằng Commerce, chưa được gói Fishing này ấn định.

## 2. Tỷ lệ ẩn và một `Cast`

Mỗi ngày có đúng một spot **25%**, một spot **50%**, một spot **75%**; phép gán được xáo ngẫu nhiên và **ẩn với người chơi**. Không có cách inspect, xem lại, cuộn, đổi nguồn hoặc rời/quay lại River để nhìn tỷ lệ hay reroll phép gán. Tỷ lệ cố định cho spot đó suốt ngày và chỉ được xáo lại ở `Sleep`.

`Character + Fishing Rod → Fishing Spot → Cast` là một commit. Kiểm nguồn, spot chưa spent và đủ AP; nếu không hợp lệ thì không trừ AP, không rút kết quả, không đổi spot. Khi hợp lệ, trả **1 AP** (Nell relief áp dụng theo luật chung), dùng tỷ lệ ẩn của spot **đã chọn trước commit** để rút một kết quả độc lập. Thành công tạo **1 `Silver Minnow`** trong Item; thất bại cho `No Bite`. Cả hai đều giữ phí đã trả, làm spot vừa dùng thành **spent** và không tác động đến tỷ lệ của hai spot khác. Không có `Hook`/`Reel`, thao tác thời gian thực hoặc phí thứ hai.

Người chơi thấy Fish hoặc `No Bite`, AP còn lại và spot nào đã spent. Tỷ lệ thật không lật sau Cast; ba con số chỉ thuộc luật hệ thống/test log. Với ba spot chưa phân biệt ở đầu ngày, mỗi lần chọn ngẫu nhiên có cơ hội trung bình 50%. Nếu dùng cả ba spot, kỳ vọng là 1,5 Fish/ngày; đây là kiểm tra sản lượng của luật, không phải lời hứa nhận Fish hay giá trị Gold. Quyết định chính là có tiêu AP cho một cơ hội ẩn hay dành AP cho việc khác.

## 3. Spent, rời River và `Sleep`

Mỗi spot nhận **tối đa một Cast mỗi ngày**. `No Bite` cũng tiêu cơ hội đó. Khi cả ba spent, River không còn target Cast hợp lệ trong ngày. Không có `Next` hoặc cách làm mới miễn phí. Rời River rồi trở lại giữ đúng spot spent, phép gán tỷ lệ ẩn và Fish đã nhận. Chỉ `Sleep` sang ngày mới mở lại cả ba spot và xáo phép gán **một lần**; Weather/Rain không đổi tỷ lệ hoặc loài Fish trong V0. Đọc thông tin, đổi lá nguồn, cuộn World và Cast bị từ chối không làm mới hoặc đổi kết quả.

Trong runtime về sau, save/load phải giữ ngày, phép gán ẩn, spot spent và Fish đã nhận để reload không tạo thêm cơ hội. Đây là yêu cầu triển khai; hiện repository vẫn chỉ có luật giấy/fixture cũ, chưa có bản chạy Fishing V0 hoặc save trên đĩa.

## 4. Ranh giới V0

Fishing V0 dừng ở một Fish đại diện và một hành động `Cast`; không thêm `Blue Eel`, Rain catch, bait, nâng `Fishing Rod` hoặc minigame để kéo dài loop. Bản `Before They Leave` với exact `Catch`/Leaving và đề xuất state hiện odds đã bị thay thế. Có thể cân bằng lại phần trăm hoặc giá bán khi thử kinh tế chung, nhưng không coi các fixture cũ là luật hiện hành. Fishing được đóng ở mức **contract và roster V0**; migration runtime/visual QA là việc triển khai về sau, không phải một vòng thiết kế Fishing mới.
