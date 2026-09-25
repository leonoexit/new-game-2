# Scrollable abstract-area tableau model 08

Ngày correction: 2026-09-22.

Trạng thái: **snapshot trình bày cũ, đã được CG-35/36 thay thế về cấu trúc World/Home/Field**. Đọc [kiến trúc lá lồng tableau](WORLD-NESTED-CARD-ARCHITECTURE-01.md) cho mô hình hiện hành. Tài liệu này vẫn ghi lại lý do bỏ spatial movement và các ví dụ lịch sử; scroll/focus trong một tableau vẫn là navigation 0 AP.

**Card grammar correction · 2026-09-24:** chủ dự án đã chốt World và Area là card identity theo ontology; xem [danh mục lá/entity V0 trong decision 09 §10](ON-TABLE-CARD-SHAPE-DECISION-09.md). Những đoạn dưới đây nói Area không phải card chỉ còn đúng theo nghĩa **không bắt buộc là lá target vuông trên tableau**. `Rìa Rừng` là tên bối cảnh trong Area rừng lớn hơn, không phải Area/card riêng. Sơ đồ Area và tên lá lịch sử bên dưới không thay thế danh mục V0 hiện hành.

**Mine gameplay correction · 2026-09-25:** sơ đồ Mine ở §3 đã đổi sang ba ô mở sẵn theo [Mine contract 01](MINE-CURRENT-CONTRACT-01.md). Các ví dụ CP3/`Search`/`Exposed Ore` còn lại là snapshot presentation cũ; CG-17/19/20 chốt `Break`, `Next`, `Descend`, phí và tầng. Nguyên tắc Area/scroll của tài liệu này vẫn dùng được.

**Fishing gameplay correction · 2026-09-25:** ví dụ exact `Catch`/hai loài bên dưới là snapshot cũ. [Fishing contract 01](FISHING-CURRENT-CONTRACT-01.md) chốt ba `Fishing Spot` giống nhau, odds ẩn, `Cast` 1 AP và một Fish output `Silver Minnow`; nguyên tắc cuộn Area vẫn dùng được.

**Farm correction · CG-27/35/36:** sơ đồ `[Farmhouse] [Plot]` ở §3 chỉ là snapshot cũ. [Farm land contract 01](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) chốt 0 Tilled Soil, 2 Empty Soil có thể cày ngay và các ô đất khác bị vật cản **trong Field**. Farmhouse/Shipping Bin là lá ở Home, không tiêu suất đất Field. Vị trí các lá không tạo chi phí di chuyển hay luật kề nhau.

**Lọc đất · CG-29/31/33/34:** [Field presentation contract 01](WORLD-GROUP-PRESENTATION-CONTRACT-01.md) đặt bộ lọc tùy chọn và dòng tóm tắt **trong Field**. Lọc là UI, còn Field là lá thật. `Tilled Soil` và `Empty Soil` là hai mục riêng. Mô tả lọc trực tiếp ở Farm và Farmhouse/Bin luôn hiện khi lọc là snapshot trước CG-35/36.

## 1. Core correction

Ở snapshot này, game **không có bản đồ** và World được trình bày như một dải giao diện cuộn dọc gồm nhiều **Area tableau trừu tượng**. CG-35 thay dải phẳng này bằng lá `World` mở tableau Region, rồi các lá container lồng tiếp như `Home` → `Field`.

Vuốt lên/xuống là thao tác tìm và focus nội dung khác trong giao diện. Nó không đại diện cho nhân vật đi bộ, không mô phỏng khoảng cách và không tự tiêu AP, thời gian hoặc Energy.

```text
scroll/focus — 0 AP, không phải movement
        ↓
Area tableau đang nhìn thấy
        ↓
play/target card — gameplay action thật
```

## 2. Area là gì

Area là một nhóm presentation/rulescope ổn định:

- dùng chung background, palette, material và visual motif;
- card cùng Area được đặt khít thành một tableau;
- có thể có tên/header ngắn để navigation và accessibility;
- có thể scope Weather, pool, unlock hoặc rule;
- giữ state khi nằm ngoài viewport.

Theo ontology hiện hành Area là card identity, nhưng Area không mặc định là:

- một lá target vuông trên tableau;
- một box cần mở;
- một điểm trên bản đồ;
- một khoảng cách;
- một action `Travel`;
- một target nhận item/action.

Nếu Area có một verb/state chung thật sự, verb/state đó được biểu diễn bằng card hoặc control cụ thể bên trong tableau—không biến toàn background thành hit target mơ hồ.

### 2.1. On-table card shape

Theo [square-card decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md), mọi card nằm trực tiếp trên Area tableau dùng footprint square `1:1`. Portrait rectangle không còn là primary on-table shape.

Root card chỉ giữ art, name, 1–3 badge quan trọng, short cost/progress và ready/locked/selectable/persistent state. Rule dài mở trong focus/detail panel rectangle; panel là UI overlay, không phải card mới trên tableau.

Area header/background không có card border hoặc hit-target affordance. Chỉ state độc lập thật sự, không thể suy ra từ các target đang hiện, mới dùng horizontal status strip/rail. Informed-owner orientation v0.3.4 giữ Mine Depth/checkpoint nhưng loại Farm State, Market State và Fish Record khỏi root tableau.

## 3. Ngôn ngữ bố cục

```text
HOME / FARM visual band
[Farmhouse] [Plot]
[room for expansion]

neutral UI divider

RÌA RỪNG / WOODLAND EDGE visual band
[Hedgerow]
[Wild Herb world item, if present]

neutral UI divider

COMMERCE visual band
[available Seed / Sell targets]

neutral UI divider

RIVER visual band
[Exact Catch opportunity]

neutral UI divider

MINE visual band
[Depth status rail]
[Visible source 1] [Visible source 2] [Visible source 3]
[Next under each source] [Descend when a route is revealed]
```

Đây là sơ đồ rulescope, **không phải danh sách card runtime** hoặc phía bắc/nam, gần/xa, tuyến đường trong fiction. Ba ô Mine dùng nguồn `Rock`/`Ore Rock` theo [Mine contract 01](MINE-CURRENT-CONTRACT-01.md); sơ đồ không chọn tổ hợp nguồn hoặc phí `Descend`. Rìa Rừng là Area thứ năm trong [Wild Herb V0 paper decision](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md), thêm sau informed-owner pilot bốn Area; nó chưa có acceptance về orientation hoặc art. Wild Herb là card vật phẩm xuất hiện trực tiếp trong Area, không phải một `Grove Batch` gateway. Woodlot Collect hiện không được bày như target vòng đầu vì Wood chưa có công dụng đã chọn. Water Trough bị bác bỏ; Mira không thuộc roster playable V0. Đoạn package §6.9 về dừng paid Descent sau Ore đầu là phạm vi fixture lịch sử, không khóa tầng Mine CG-17.

## 4. Khi nào một thứ là target card trên tableau

Một object/context nên là card nếu ít nhất một điều đúng:

1. người chơi play/target nó;
2. nó có state hoặc progress cần giữ;
3. nó có opportunity/expiry/stock/queue riêng;
4. nó thay đổi rule và cần đọc trước commit;
5. nó là reward/source/branch có identity gameplay riêng.

Ví dụ:

| Thành phần | Card? | Lý do |
| --- | --- | --- |
| River Area | Không là target vuông mặc định | Area identity và visual/rulescope; không cần lá riêng trên bàn |
| Today's Catch | Có | exact opportunity + commit target |
| Fishing Spot duy nhất trong River | Không cần | trùng chức năng với Area + Catch |
| Hai fishing spots có pool/rule khác nhau | Có thể | mỗi spot tạo target/state riêng |
| Mine Area | Không là target vuông mặc định | Area identity và visual/rulescope; không cần lá riêng trên bàn |
| Locked/Collapsed Entrance | Có tạm thời | repair/unlock state có verb |
| Current Depth/checkpoint | Không là square card | state độc lập nằm trong horizontal status rail |
| Route có lựa chọn thật | Có khi được authored | target để preview/commit một nhánh cụ thể; không tự tạo route ngoài CP3 |
| Old Mine Floor không còn action | Không trên root | history/inspect |

## 5. Navigation contract

- Manual scroll, search/index và anchor đều là navigation UI, mặc định 0 AP.
- Với bốn Area của informed-owner pilot, owner đã yêu cầu sticky Area-name index. Rìa Rừng được thêm sau pilot vào V0 paper baseline; index vẫn chỉ focus/scroll UI và active tab cho biết Area đang focus, không phải map hoặc travel control.
- Anchor focus một Area hoặc entity; nó không teleport nhân vật trong simulation vì scroll chưa từng là travel.
- Vị trí tương đối trong dải phải ổn định đủ để hình thành interface memory.
- Unlock mới nên xuất hiện trong Area liên quan mà không re-order toàn bộ world strip tùy tiện.
- Area ngoài viewport không pause, reset hoặc mất state.
- Nếu sau này fiction cần travel cost, cost phải là action riêng với preview rõ; không suy từ pixel distance hoặc lượng scroll.

## 6. Area boundary không phải container chrome

Area được đọc bằng:

- shared background/material;
- card spacing khít trong nhóm;
- khoảng thở/chuyển cảnh nhẹ giữa nhóm;
- header hoặc icon nhỏ nếu recognition cần;
- stable order trong world strip.

Flat palette fields đã hỗ trợ nhận Area một phần trong informed-owner check. Generated abstraction background là future art direction để tăng sinh động, chưa được tạo hoặc runtime-authorize trong v0.3.4.

Không cần panel lớn, border bao quanh hoặc card đại diện Area. Việc dùng background band không tạo một parent object có thể target.

## 7. Town

`Town` chỉ tồn tại nếu nó giúp navigation hoặc scope rule. Trong content hiện tại, commerce có thể chỉ là một visual band chứa `Supermarket` và active Person/context.

Không có Town-wide verb/state nên chưa cần:

- Town card;
- enter/exit Town;
- Town progress;
- Town interaction target.

Một header accessibility như `Commerce` hoặc `Town` có thể được test sau; nó vẫn chỉ là label, không là entity.

## 8. Implication cho orientation evidence

Home-middle vs Home-at-top là câu hỏi spatial topology nên không còn đo đúng model hiện hành. Bài test kế tiếp phải đo:

- người chơi nhận ra Area bằng visual language hay không;
- người chơi nhớ Area/card nằm trước hay sau trong scroll order hay không;
- card cùng nhóm có đọc như một tableau nhưng vẫn có hitbox riêng hay không;
- participant có nhầm background/header thành playable card không;
- anchor/index có giảm scroll burden mà không tạo cảm giác travel action hay không.

## 9. Current status

1. `[DECIDED]` Scroll không phải movement/travel và mặc định không có gameplay cost.
2. `[DECIDED]` World presentation không cần cảm giác bản đồ.
3. `[DIRECTION]` World là một vertical strip của abstract Area tableaus.
4. `[DIRECTION]` Card cùng Area đặt khít và chia sẻ visual language.
5. `[DIRECTION]` Chỉ verb/state/opportunity cụ thể mới cần card.
6. `[INFORMED-OWNER ACCEPTED]` Stable order + sticky Area-name index + neutral UI divider đọc như interface focus/scroll, không phải character movement.
7. `[INFORMED-OWNER ACCEPTED FOR THE FOUR-AREA PILOT]` Home/Commerce/River tự giải thích bằng card semantics và không cần synthetic Area state; Mine Depth/checkpoint là separate status duy nhất cần trong pilot đó. Rìa Rừng là paper extension sau pilot, chưa được kiểm tra orientation.
8. `[INFORMED-OWNER ACCEPTED / LATER OWNER CORRECTED]` Weather/Season dùng shallow rail trong sticky global chrome ngoài play tableau. Current fields are Season, Today Weather and remaining AP; the former Tomorrow field was removed on 2026-09-23. The rail treatment was not read as a commitment target. Tomorrow forecast is available through the 0 AP TV sub-card inside Farmhouse; if TV is skipped, Sleep determines next-day Weather without opening TV.
9. `[INFORMED-OWNER REJECTED]` Không thêm global `Tomorrow Targets` rail. Kế hoạch ngày mai do player tự quyết định; system chỉ trình bày world/resource state và actual context tại native source của context đó.

## 10. Chưa kết luận

- Header Area luôn hiện hay chỉ xuất hiện lúc onboarding/focus.
- Một viewport chứa toàn Area hay cho phép Area dài hơn viewport.
- Số cột và card density trên mobile.
- Runtime index luôn sticky hay collapse sau onboarding; paper fixture dùng sticky index vì owner đã cần index ở bốn Area.
- Exact final art cho Season/Today Weather fields và future forecast-upgrade depth; Tomorrow forecast is shown by TV, not as an always-visible global field.
- Generated abstraction background cho từng Area và mức độ motif cần thiết ngoài palette.
- Exact logical square-card size, badge hierarchy và accessibility reflow.
- Fiction có travel cost riêng hay hoàn toàn không có travel system.
