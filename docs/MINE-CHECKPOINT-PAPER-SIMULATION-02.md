# Mine checkpoint paper simulation 02 — source, rule band và branch

Ngày chạy: 2026-09-21.

Mục đích: làm checkpoint thay đổi cách chơi thay vì chỉ trả resource khi Depth counter đạt mốc. Đây là variation test của Mine loop; không chốt số tầng, tên biome, combat, hazard hoặc reward Year 1.

> **Historical mechanics warning (2026-09-22):** fixture `Safe Tunnel / Veiled Vein` bên dưới giữ nguyên để audit simulation, nhưng không còn là current Mine grammar. [Mine/Fishing contract 01](MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) và [v0.2.3](../paper-tests/mine-fishing-area-tableau-v0.2.3/README.md) thay nó bằng `Direct Descent` (`Depth +1`, không tự cho Stone), `Search Side Tunnel` (`Depth +0`, reveal Ore source) và `Exposed Ore` (`Depth +0`, gain Ore, mark spent).

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Mine là một card/area quan trọng có thể mở content bên trong.
- Mine progression giữ lại; bỏ một ngày chỉ trì hoãn, không mặc định reset.
- Combat không phải core đã chốt.
- Game không dựa vào di chuyển trên seamless map.

### 1.2. Hướng đang được tiếp tục

- Mine Entrance là root landmark trên continuous world.
- Current frontier/checkpoint hiện compact; không trải mọi Depth thành permanent world tile.
- Descend tiến Depth deterministic; uncertainty chỉ nằm ở optional reward/route.
- Safe route bảo đảm planning path; Person preview không phải prerequisite.

### 1.3. Giả thuyết

1. Checkpoint cần luân phiên mở source, đổi route rule hoặc mở branch/context.
2. Chỉ tăng tier resource làm Depth thành grind counter.
3. Một band 3 Depth đủ ngắn để người chơi nhớ rule trong fixture, nhưng con số không được coi là cadence cuối.
4. Branch cần preview và recovery; không tạo lựa chọn vĩnh viễn không biết trước.

### 1.4. Fixture

- 1 Descend = 1 AP và Depth +1.
- Baseline route: Safe Tunnel biết reward; Veiled Vein biết category nhưng chưa biết exact.
- Checkpoint ở Depth 3/6/9/12; chỉ là nhịp thử.
- Không mất Depth, item hoặc Heart khi chọn route kém.
- Mỗi checkpoint thay một dimension khác nhau.

## 2. Ba checkpoint shape cần so

| Shape | Thay đổi | Nếu dùng lặp lại |
| --- | --- | --- |
| Resource chest/source | Thêm item hoặc source | Dễ hiểu nhưng nhanh thành payout staircase |
| Rule band | Thay grammar của vài Depth kế | Tạo identity; cần preview/label rõ |
| Branch/context | Chọn pool/context cho band kế | Tạo agency; cần recovery và không khóa save |

Baseline tốt nhất có thể là hỗn hợp, không cần mọi checkpoint cùng một loại.

## 3. Mine fixture 0–12

### Depth 0–3 — Baseline tunnels

- Safe Tunnel: `1 AP → Depth +1 + known common`.
- Veiled Vein: `1 AP → Depth +1 + category-known optional result`.
- Không Person vẫn đi sâu chắc chắn.

### Checkpoint 3 — Working Seam: source-vs-depth

Mở một optional action tại Mine:

    Extract Working Seam    1 AP → known Ore, Depth không tăng

Fixture cho Seam refresh một lần sau Sleep. Đây là limit thử để source không thành action spam vô hạn.

Quyết định mới:

- lấy Ore chắc chắn hôm nay;
- hay dùng AP đó để Descend tới checkpoint kế.

Checkpoint này mở **verb/source**, không chỉ tặng một Ore ngay khi chạm mốc.

### Checkpoint 6 — Unstable Gallery: speed-vs-yield band

Trong ba Depth kế, Safe/Veiled tạm được thay bằng:

| Route | Cost | Kết quả biết trước |
| --- | ---: | --- |
| Slip Through | 1 AP | Depth +1, không có resource |
| Shore Up | 2 AP | Depth +1 + known material |

Không có roll thất bại hoặc mất Depth. Player chọn tốc độ hay yield cho từng step.

Checkpoint này đổi **action economy/rule**, không mở một tier Ore đơn thuần.

### Checkpoint 9 — Fork: context band

Preview hai branch trước commit:

| Branch band D10–12 | Context/reward identity | Tradeoff fixture |
| --- | --- | --- |
| Deep Vein | Ore/crystal/Tool material | Nhiều source kỹ thuật, ít variety khác |
| Underground Flow | Fish/herb/water context | Nối collection/Processing, ít Ore |

Lựa chọn giữ trong band D10–12. Sau checkpoint 12, branch còn lại có thể quay lại bằng một route sau hoặc cycle khác; không bị mất vĩnh viễn.

Checkpoint này đổi **context/pool**, tạo route identity mà không dừng deterministic Depth.

### Checkpoint 12 — World connection

Mở một connection có vị trí trên continuous world, ví dụ Sea Cave, Mountain Spring hoặc Processor catalyst context. Exact content chưa chốt.

Checkpoint này mở **topology/cross-system horizon**, không phải ending và không reset Mine.

## 4. Hai expedition trace

### Route Fast Explorer

Mục tiêu: chạm world connection sớm; bỏ bớt resource.

| Ngày | AP Mine | Action | Depth cuối |
| --- | ---: | --- | ---: |
| D1 | 3 | Ba Descend baseline | 3 |
| D2 | 3 | Bỏ Extract; ba Descend | 6 |
| D3 | 3 | Slip Through ×3 | 9 |
| D4 | 3 | Chọn branch; Descend ×3 | 12 |

Tổng: 12 AP cho 12 Depth; nhận ít resource ở Unstable Gallery.

### Route Supplier/Connector

Mục tiêu: lấy deterministic Ore/material và đi sâu chậm hơn.

| Ngày | AP Mine | Action | Depth cuối |
| --- | ---: | --- | ---: |
| D1 | 3 | Ba Descend baseline | 3 |
| D2 | 4 | Extract 1 + ba Descend | 6 |
| D3 | 6 | Shore Up ×3 | 9 |
| D4 | 3 | Chọn Deep Vein; Descend ×3 | 12 |

Tổng: 16 AP cho cùng 12 Depth, đổi thêm 4 AP lấy deterministic source/material fixture.

### Kết quả route comparison

- Cùng Depth không đồng nghĩa cùng output.
- Fast route không bị phạt bằng mất progress; tradeoff là bỏ yield.
- Supplier không bị khóa ở Mine; có thể Extract rồi rời area trong ngày.
- Rain/free AP window làm Shore Up/Extract hấp dẫn hơn mà không buộc mọi route dùng Weather bonus.

## 5. So với resource staircase

Resource staircase fixture:

- Depth 3 mở Ore I.
- Depth 6 mở Ore II.
- Depth 9 mở Ore III.
- Depth 12 mở rare chest.

Nó dễ đọc nhưng có ba vấn đề:

1. Quyết định mỗi Depth không đổi; chỉ payout tăng.
2. Người chơi tối ưu bằng cách Descend cho tới tier tốt nhất rồi farm source.
3. Checkpoint không nối sang action grammar hoặc world context.

Mixed checkpoint fixture tạo ít nhất ba quyết định khác: depth vs source, speed vs yield và branch context. Vì vậy mixed model là giả thuyết mạnh hơn.

## 6. Person interaction audit

| Kernel | Baseline Mine | Working Seam | Unstable Gallery | Fork band |
| --- | --- | --- | --- | --- |
| A preview | Xem exact Veiled result | Ít giá trị vì source known | Không cần; route known | Preview representative outcomes trước branch |
| C hold | Giữ Veiled opportunity | Có thể giữ Seam refresh; dễ quá mạnh nếu tích | Ít target | Giữ một branch opportunity qua Sleep nếu expiry tồn tại |
| K split/focus | Chưa rõ | Chia Work không phù hợp | Có thể đổi scope Shore Up nhưng dễ tăng tổng | Không nên đổi cả branch miễn phí |

Kết quả:

- Ability usefulness thay theo band; đây là điều tốt nếu không Person nào là lời giải cho toàn Mine.
- A không có target ở mọi checkpoint, nên Heart không trở thành phí vận hành.
- Không thêm ability vào checkpoint chỉ để đảm bảo mọi Person luôn dùng được.

## 7. Continuous-world footprint

Root surface chỉ cần:

- Mine Entrance.
- Current band/frontier tile.
- Latest checkpoint marker/state.
- Optional Working Seam/source marker khi available.

Inspect Mine mở compact strip:

    CP3 source — CP6 rule band — CP9 chosen branch — frontier D10/12

Checkpoint cũ hơn có thể nằm trong history/inspect. World không tạo 12 square Depth tiles.

Text burden:

- Entrance/known checkpoint có thể art-first + stable label.
- Unstable Gallery và Fork là L2/L3 vì rule/cost phải đọc trước commit.
- Branch preview phải nêu recovery; art không đủ để biểu đạt “không mất vĩnh viễn”.

## 8. Failure/recovery rules trong fixture

- Không action nào giảm Depth.
- Bỏ lỡ một day chỉ trì hoãn.
- Chọn Fast route không xóa resource source đã mở ở CP3.
- Chọn một branch D10–12 không xóa branch kia khỏi save.
- Không checkpoint nào yêu cầu một Person cụ thể.
- Nếu exact cross-system connection chưa có content, CP12 không được reveal sớm như một promise giả.

## 9. Kết luận cập nhật

### Kết quả paper simulation

1. Checkpoint hỗn hợp tạo route identity tốt hơn resource staircase.
2. Source-vs-depth, speed-vs-yield và branch context là ba loại thay đổi khác nhau.
3. Deterministic Depth vẫn giữ recovery-friendly life-sim tone.
4. Mine có progression riêng không qua farming hoặc delivery Project.
5. Compact frontier/checkpoint representation tương thích continuous world.
6. Person A có lúc hữu ích, có band không có target; không gate progress.

### Giả thuyết mang sang package

- Giữ deterministic Depth.
- Luân phiên checkpoint mở source, đổi rule và mở branch/context.
- Dùng checkpoint strip/frontier, không trải mọi Depth trên root.
- Branch có preview và recovery; không permanent blind choice.

### Fixture chưa được phép thành luật

- 1 AP/Depth; mốc 3/6/9/12.
- Working Seam refresh một lần/ngày.
- Slip Through/Shore Up và cost 1/2.
- Deep Vein/Underground Flow.
- Connection tại Depth 12.
- Không combat/hazard.

### Cần kiểm tra tiếp

- Reward economy của Extract/Shore Up.
- Số band/checkpoint trong Year 1.
- Cách quay lại branch chưa chọn mà không tạo grind.
- Mine Tool progression có làm Fast/Supplier mất cân bằng không.
- Recognition của rule-band tile ở kích thước mobile.
