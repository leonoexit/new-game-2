# Fishing V0 — gói luật đánh cược trước khi chốt

Ngày: 2026-09-25. **Lịch sử đề xuất; [Fishing contract hiện hành](FISHING-CURRENT-CONTRACT-01.md) đã chốt CG-24 và thay tài liệu này.** Chủ dự án chọn ba `Fishing Spot` giống nhau, odds ẩn, cùng phí AP, một Cast/spot/ngày và làm mới qua `Sleep`. Gói hiện hành dùng một Fish đại diện `Silver Minnow`. Các câu bên dưới ghi phương án trong lúc thảo luận, kể cả những chỗ còn ghi “chưa chốt”; không dùng chúng để mở lại contract V0. Bảng state hiện odds và phí tăng theo 1/2/3 AP của phiên trước đã rút.

## 1. Đề xuất tối giản để thử

- River bày **ba instance `Fishing Spot`** cùng hình/tên/trạng thái nhìn thấy, không có ký hiệu hoặc phần trăm ám chỉ spot nào tốt hơn. Mỗi `Cast` hợp lệ trả **1 AP** theo CG-18, được giữ lại sau sửa hướng CG-22; `No Bite` vẫn mất AP. Xem/chọn spot không tốn AP hoặc rút lại kết quả.
- Ba tỷ lệ **25% / 50% / 75%** chỉ là **bộ số thử chưa chốt**, **ẩn với người chơi**. Nhịp đã chốt là khi bắt đầu ngày, hệ thống xáo và gán ngẫu nhiên một tỷ lệ ẩn cho mỗi spot, giữ nguyên phép gán đó suốt ngày. Không có định luật “trái tốt hơn phải” hoặc dấu hiệu art ngầm tiết lộ tỷ lệ. Khi duyệt bộ số khác, vẫn dùng nhịp xáo một lần ở `Sleep`.
- `Character + Fishing Rod → Fishing Spot → Cast`: kiểm spot và AP, trừ **1 AP** ở mọi spot, rút kết quả theo tỷ lệ ẩn của **spot đã chọn**, rồi nhận đúng một Fish hoặc `No Bite`. **Đã chốt:** cả hai kết quả đều khiến spot đó **spent đến `Sleep`**. Không thể Cast lại spot đã dùng; không có `Next` hoặc refresh miễn phí. Thiếu AP/target/source không hợp lệ thì không commit và không đổi gì.
- **Đã chốt:** `Sleep` mở lại cả ba spot và xáo lại phép gán tỷ lệ ẩn **đúng một lần** cho ngày mới. Rời River rồi quay lại trong cùng ngày giữ nguyên spot spent và phép gán ẩn; xem, cuộn hoặc reload không tạo lượt xáo khác. Save/load khi triển khai phải giữ phép gán và các kết quả đã giải; hiện chưa có runtime save.

Đây là **cược thuần may rủi**, không giả vờ ba spot giống nhau tạo kỹ năng đọc dấu hiệu. Trước Cast đầu tiên, mỗi lá có xác suất trung bình 50% vì người chơi không phân biệt được chúng. Nếu dùng cả ba spot trong ngày thì kỳ vọng là **1,5 Fish** trước khi xét Weather và loại Fish, bất kể thứ tự chọn. Quyết định thực tế là có tiêu 1 AP cho một cơ hội chưa biết hay dành AP cho Farm/Mine. Nếu muốn thử kỹ năng, cần một action hoặc thông tin thật sự khác trong một vòng thiết kế sau; không tự thêm nó vào gói đơn giản này.

## 2. Fish output và thông tin cho người chơi

Để không dùng state hiển thị đã rút làm điều kiện loài, đề xuất khi Cast thành công ở River: **`Rain` → `Blue Eel`; ngày khác → `Silver Minnow`**. Đây là cách dùng hai Fish identity đã có và điều kiện Rain của `Blue Eel`, **chưa được duyệt**. Fish xuất hiện trong Item với chính identity đó; `Fishing Spot` không cho Bách Khoa thấy trước Fish ẩn. Giá bán Fish vẫn mở.

Sau Cast, chỉ báo **Fish hoặc `No Bite`, AP còn lại và spot đã spent**. Không cần hiện tỷ lệ thật trước Cast; việc có lật tỷ lệ sau Cast hay giữ bí mật cả ngày cũng chưa chốt. Để phép thử đầu giữ đúng ý đánh cược, đề xuất **không lật tỷ lệ**; ba con số chỉ thuộc luật hệ thống/test log.

## 3. Điểm cần chốt khi duyệt

CG-18 từng nói state các điểm câu *có thể* đổi sau Cast. Với ba spot nhìn giống nhau và odds bị giấu, việc âm thầm đổi odds của spot khác sau Cast không cho người chơi quyết định hay phản hồi có thể đọc được. **CG-23 đã chốt thay phần cadence đó:** odds của spot khác giữ nguyên trong ngày; chỉ spot vừa Cast thành spent, rồi `Sleep` mới mở lại và xáo tỷ lệ. Không lấy câu “có thể đổi sau Cast” của CG-18 để reroll ẩn giữa ngày.

Khi các thông số còn lại được duyệt, cập nhật Fishing contract và workbook theo `Fishing Spot` cùng Fish output; giữ các prototype `Leaving/Lingering`, exact `Catch` và bảng state hiện odds làm lịch sử. Một fixture Fishing riêng sau đó nên kiểm phí/`No Bite`, ba lượt hữu hạn, xáo khi `Sleep`, không thể free reroll, và cảm giác cược. Không dựng bản tích hợp một ngày.
