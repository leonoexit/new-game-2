# Scrollable abstract-area tableau model 08

Ngày correction: 2026-09-22.

Trạng thái: direction hiện hành cho cách trình bày world. Tài liệu này supersede spatial interpretation trong [explicit-surface model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md).

## 1. Core correction

Game **không có bản đồ**. World được trình bày như một dải giao diện cuộn dọc gồm nhiều **Area tableau trừu tượng**.

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

Area không mặc định là:

- một card;
- một box cần mở;
- một điểm trên bản đồ;
- một khoảng cách;
- một action `Travel`;
- một target nhận item/action.

Nếu Area có một verb/state chung thật sự, verb/state đó được biểu diễn bằng card hoặc control cụ thể bên trong tableau—không biến toàn background thành hit target mơ hồ.

## 3. Ngôn ngữ bố cục

```text
HOME / FARM visual band
[House] [Plot] [Water Trough]
[Storage] [Harvest Bench]

soft visual transition

COMMERCE visual band
[Supermarket] [Person Today]

soft visual transition

RIVER visual band
[Today's Catch] [Fishing mastery/status]

soft visual transition

MINE visual band
[Current Frontier] [Safe Route] [Veiled Route]
[Working Seam when unlocked]
```

Đây là thứ tự duyệt UI, không phải phía bắc/nam, gần/xa hoặc tuyến đường trong fiction.

## 4. Khi nào một thứ là card

Một object/context nên là card nếu ít nhất một điều đúng:

1. người chơi play/target nó;
2. nó có state hoặc progress cần giữ;
3. nó có opportunity/expiry/stock/queue riêng;
4. nó thay đổi rule và cần đọc trước commit;
5. nó là reward/source/branch có identity gameplay riêng.

Ví dụ:

| Thành phần | Card? | Lý do |
| --- | --- | --- |
| River Area | Không mặc định | visual/rulescope |
| Today's Catch | Có | exact opportunity + commit target |
| Fishing Spot duy nhất trong River | Không cần | trùng chức năng với Area + Catch |
| Hai fishing spots có pool/rule khác nhau | Có thể | mỗi spot tạo target/state riêng |
| Mine Area | Không mặc định | visual/rulescope |
| Locked/Collapsed Entrance | Có tạm thời | repair/unlock state có verb |
| Current Frontier | Có | persistent Depth/band state |
| Safe/Veiled Route | Có | lựa chọn trước action |
| Old Mine Floor không còn action | Không trên root | history/inspect |

## 5. Navigation contract

- Manual scroll, search/index và anchor đều là navigation UI, mặc định 0 AP.
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
6. `[HYPOTHESIS]` Stable scroll order + soft transition đủ cho orientation; cần v0.3 fixture/pilot.

## 10. Chưa kết luận

- Header Area luôn hiện hay chỉ xuất hiện lúc onboarding/focus.
- Một viewport chứa toàn Area hay cho phép Area dài hơn viewport.
- Số cột và card density trên mobile.
- Anchor/index luôn hiện hay chỉ mở qua overview.
- Có Area-wide Weather badge hay Weather chỉ gắn trên opportunity card.
- Fiction có travel cost riêng hay hoàn toàn không có travel system.
