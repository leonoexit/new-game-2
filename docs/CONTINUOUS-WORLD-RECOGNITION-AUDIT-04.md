# Continuous world recognition audit 04 — art, label và inspect

Ngày chạy: 2026-09-21.

Mục đích: xác định entity nào có thể art-first trên square world tile và entity nào cần text để người chơi lập kế hoạch. Đây là collision/label audit trên giấy, không phải usability test với asset hoàn chỉnh; vì chưa có art set và người chơi mới, tài liệu không được tuyên bố recognition rate.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Hình, tên và description cùng mô tả một card; hình cần tự giải thích ở kích thước nhỏ.
- Người chơi có thể chủ động inspect card trên bàn hoặc hand để đọc rõ nội dung.
- Card là ngôn ngữ chính của world và action.

### 1.2. Hướng đang được tiếp tục kiểm chứng

- Square art-first tile trên continuous world.
- Vertical 5:7 card/detail sheet khi inspect.
- World topology và state tường minh; exact content có thể reveal theo condition.

### 1.3. Giả thuyết

- Stable position + state silhouette có thể thay label thường trực cho crop/landmark quen thuộc.
- Item identity, Person ability, Project và opportunity tradeoff không thể dựa hoàn toàn vào art.
- Text policy nên theo information burden của entity, không theo một luật “mọi tile đều zero-text”.

### 1.4. Fixture

- Sáu crop/soil state, sáu item dễ lẫn, ba Person state, ba Project và ba opportunity.
- `L0–L3` bên dưới là cấp presentation thử, không phải tên UI đã chốt.

## 2. Bốn cấp text burden

| Cấp | Presentation nghỉ | Khi focus/chọn | Khi inspect | Dùng cho |
| --- | --- | --- | --- | --- |
| L0 — art/state | Art, vị trí, state ring | Name ngắn | Full card | State quen thuộc, vị trí ổn định |
| L1 — identity | Art + quantity/status | Name + category | Full card | Item stack, Person đã biết |
| L2 — decision | Art + short label/progress | Cost/result summary | Full rule | Project, processor queue, opportunity |
| L3 — unfamiliar/critical | Art + name luôn thấy | Rule preview | Full rule + source/recovery | Entity mới hoặc lựa chọn khó đảo ngược |

L0 không có nghĩa accessibility name biến mất. Screen reader luôn cần entity, state và trạng thái tương tác.

## 3. Deck A — sáu Soil/Crop state

Fixture:

1. Overgrown Soil.
2. Empty Soil.
3. Tilled Soil.
4. Growing/Dry Crop.
5. Growing/Watered Crop.
6. Mature Crop.

### Collision audit

| Cặp dễ lẫn | Hậu quả nếu nhầm | Art/state contract cần có | Text baseline |
| --- | --- | --- | --- |
| Empty vs Tilled | Plant/Tool target sai | Ground pattern và silhouette khác rõ | L0 sau onboarding |
| Dry vs Watered | Lãng phí AP hoặc bỏ care | Soil/water state phải đổi cả hình, không chỉ viền màu | L0; focus đọc state |
| Growing vs Mature | Bỏ Harvest hoặc thao tác sớm | Mature đổi silhouette/fruit, không chỉ sparkle | L0; badge nếu burst |
| Overgrown vs Growing | Dùng sai Tool | Vegetation composition khác, Tool preview chỉ sáng target hợp lệ | L0 |

### Kết quả giấy

- Đây là nhóm phù hợp nhất với L0 vì tile giữ vị trí và state transition quen dần.
- Không được mã hóa Watered chỉ bằng xanh/đỏ; cần shape/texture để không phụ thuộc màu.
- Onboarding và lần đầu state xuất hiện vẫn cần name; “art-only sau familiarity” khác “art-only ngay từ đầu”.
- Target highlight là lớp xác nhận thứ hai: Tool chỉ làm sáng state hợp lệ.

## 4. Deck B — sáu item gần hình

Fixture cố ý tạo ba cặp cùng category:

- Root A / Root B.
- Herb A / Herb B.
- Ore A / Ore B.

Tên cụ thể chưa chốt; mục tiêu là kiểm tra trường hợp silhouette gần nhau nhưng recipe/Gift/Project chấp nhận khác nhau.

### Collision audit

| Context | Art-only có đủ? | Vì sao | Baseline |
| --- | --- | --- | --- |
| Một item vừa nhận, không có lựa chọn | Có thể | Result animation + nguồn vừa biết tạo context | L1 ngay khi vào tray |
| Sáu stack cùng hand | Không | Người chơi cần exact identity trước khi chọn | Art + quantity; selection hiện name |
| Gift target chấp nhận subset | Không | Nhầm item tiêu tài nguyên có hậu quả | Valid target filter + item name + result preview |
| Project cần exact item | Không | Requirement là symbolic rule, không chỉ appearance | L2/L3 ở Project; item L1 |
| Sell nhiều item khác giá | Không | Value comparison cần number/text | Inspect/preview |

### Kết quả giấy

- Item stack tối thiểu là L1; quantity và exact name phải xuất hiện khi focus/selection.
- Nếu hai item khác luật đáng kể nhưng chỉ khác màu nhỏ, đó là lỗi art direction chứ không được đẩy toàn bộ gánh nặng sang inspect.
- Preview trước commit phải nêu exact item và lượng bị tiêu; art không thay được transaction text.

## 5. Deck C — Person mới, đã biết và đang có Heart

| State | Người chơi cần biết | Presentation baseline |
| --- | --- | --- |
| Person mới được announce | Ai, context hôm nay, điều kiện/quà hợp lệ ở mức đủ lập kế hoạch | L3: portrait + name + context; inspect ability/condition |
| Person đã thu nhận, xuất hiện lại | Đây là cơ hội Gift/hồi Heart | L1/L2: portrait + name + Gift/Heart marker |
| Person trong sticky tray | Identity, Heart hiện có, có target hợp lệ không | L1: portrait + Heart count + enabled state; selection hiện ability verb |
| Ability đang target | Effect, Heart/AP/item cost và scope | L2 preview trước commit |

Portrait có thể phân biệt Person, nhưng không thể tự giải thích ability hoặc lịch/context. Vì vậy Person mới không phù hợp zero-text.

## 6. Deck D — ba Project

Fixture:

- Maintenance relief.
- Area gateway.
- Processor repair.

Ba Project đều có thể dùng hình công trình, nhưng quyết định khác nhau ở requirement, progress, reward và timing.

### Kết quả giấy

- Project luôn ít nhất L2: short name hoặc reward verb + progress phải thấy trên tile/focus state.
- Requirement đầy đủ chỉ cần inspect, nhưng source category và reward consequence phải đọc được trước khi người chơi mang item qua world.
- Art có nhiệm vụ tạo identity của công trình; không được kỳ vọng mã hóa một recipe/progress table.
- Project mới hoặc irreversible branch dùng L3 cho tới khi người chơi đã hiểu.

## 7. Deck E — ba opportunity

Fixture:

- Grove Search batch.
- River Catch.
- Mine Veiled Route.

| Lớp | Thông tin cần có |
| --- | --- |
| HUD/anchor badge | Location, category, urgency/expiry |
| Focus summary | AP block/cost class và outcome category |
| Node inspect | Exact rule/reward visibility theo reveal policy |
| Target preview | Verb + cost + consumed source + result |

Chỉ dùng một chấm màu cho cả ba không đủ để plan Rain day. Badge có thể nhỏ, nhưng focus phải nói “Catch · 2 AP · hôm nay” khác “Veiled Route · 1 AP · progress giữ lại”.

## 8. Stable position không giải quyết mọi thứ

Stable position giúp:

- nhận Home/Farm/Mine/River;
- nhớ cluster nào chứa loại action nào;
- đọc state transition của cùng entity.

Stable position không giúp:

- phân biệt item đổi chỗ trong hand;
- hiểu Project requirement/reward mới;
- hiểu ability Person;
- so opportunity có cost/expiry khác nhau;
- biết một locked silhouette sẽ mở chính xác gì.

Vì vậy continuous world giảm label burden cho geography, không xóa text khỏi economy và rules.

## 9. Baseline text policy sau audit

| Entity | Cấp thử | Luôn thấy trên resting surface |
| --- | --- | --- |
| Quen thuộc: Home/Farm/River/Mine | L0 | Art + vị trí; label khi focus hoặc tùy accessibility/preference |
| Soil/Crop state | L0 | State art; quantity/cohort nếu cluster |
| Item stack | L1 | Art + quantity; name khi focus/selected |
| Person đã biết | L1 | Portrait + Heart/status marker |
| Person mới/announcement | L3 | Name + context |
| Processor queue | L2 | Input/output identity + ready/busy state |
| Project | L2–L3 | Short name/reward verb + progress |
| Opportunity | L2 | Category + urgency; cost summary khi focus |
| Locked landmark | L0–L3 tùy spoil | Silhouette + region name; exact content ẩn |

Một accessibility/text preference có thể ép name luôn hiện mà không đổi mechanics. Đây là presentation option cần giữ chỗ, chưa phải setting đã chốt.

## 10. Pass/fail và giới hạn bằng chứng

### Pass ở cấp cấu trúc

- Square tile có thể gánh world topology và crop state.
- Vertical inspect có vai trò rõ, không chỉ phóng to art.
- Text chỉ xuất hiện nơi có decision burden, nên surface không trở lại thành wall of text.
- Person/Project/opportunity không bị ép vào policy art-only gây thiếu thông tin.

### Chưa được chứng minh

- Người chơi mới có phân biệt được sáu crop state thật không.
- Hai item cùng category có bị nhận nhầm ở kích thước 72–80 px không.
- Tên chỉ hiện khi focus có đủ nhanh cho hand scan không.
- Landmark không nhãn có được nhớ sau bao nhiêu lần.
- Localized name dài có làm vỡ tile/preview không.

## 11. Vòng test cần asset/người chơi sau này

1. First-glance: nhìn tile 1–2 giây và gọi entity/state.
2. Find-target: tìm đúng item/plot/Person trong một surface đông.
3. Plan-before-inspect: chọn route Rain day chỉ từ HUD/badge/focus summary.
4. Error recovery: chọn nhầm source nhưng preview phải ngăn commit sai.
5. Accessibility: grayscale/low contrast, text-always-on và screen reader labels.

Không chạy các test này bằng placeholder rồi coi kết quả là validation art cuối.

## 12. Kết luận cập nhật

- Không chốt “mỗi card trên table đều không có text”. Baseline mạnh hơn là **art-first, text by decision burden**.
- Crop state và stable landmark là ứng viên art-only khi nghỉ.
- Item stack, Person, Project và opportunity cần text tăng dần từ L1 đến L3.
- Inspect chứa full rule; focus/target preview vẫn phải cung cấp đủ thông tin trước commit.
- Recognition thật vẫn là chỗ mở cho vòng có asset và người chơi mới.

