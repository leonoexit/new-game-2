# Continuous world explicit-surface model 07

Ngày correction: 2026-09-22.

Trạng thái: presentation direction sau user clarification. Không phải UI implementation spec hoặc topology final.

## 1. Core correction

### 1.1. [DECIDED] Geography đã nằm trực tiếp trên surface

Continuous world cuộn dọc **tự nó là mặt bằng thế giới**. Home, River, Mountain, Coast hoặc một district được đọc bằng vị trí, terrain, landmark, khoảng cách và cụm object trên surface.

Vì vậy Area không có:

- Area card;
- Area box/container;
- parent node phải mở;
- nút `Enter Town`/`Open Home`;
- một tile đại diện thay cho geography đã hiện tường minh.

Không có hierarchy `World → Area box → child cards`. Hướng đúng là:

```text
Continuous explicit surface
├─ terrain / paths / buildings / water / spatial clusters
├─ persistent world entities đặt trực tiếp tại vị trí của chúng
├─ active context cards gắn trực tiếp vào entity/location liên quan
└─ sticky owned-source/UI layer
```

### 1.2. [DIRECTION] Card chỉ đại diện thứ có nghĩa gameplay

Một card/tile tồn tại trên surface khi chính object đó có action, state, progress, inventory, queue, expiry hoặc eligibility cần đọc.

Ví dụ:

- House nếu có Sleep/Storage;
- Farm Plot với soil/crop state;
- Supermarket/Market với Buy/Sell;
- Processor với slot/queue;
- Project với requirement/progress;
- Person hôm nay;
- Fishing Spot/Catch;
- Mine Entrance/current frontier.

`Home`, `Town` hoặc `River Area` không trở thành card chỉ để đặt tên nơi chốn.

## 2. Ba lớp tồn tại

| Lớp | Có tồn tại trên world? | Có card riêng? | Ví dụ |
| --- | --- | --- | --- |
| Geography | Có, bằng art/vị trí/terrain | Không | đường, river ribbon, cụm nhà, farmland, mountain face |
| World entity | Có, tại vị trí cụ thể | Có nếu interactive/stateful | House, Supermarket, Plot, Mine Entrance |
| Active context | Có khi condition/day hợp lệ | Có, gắn vào entity/place | Person at store, Rain Catch at fishing spot |

Area name nếu dùng chỉ là label/anchor/địa danh đọc từ geography. Nó không tạo thêm game object.

## 3. Town có cần tồn tại không?

### 3.1. [HYPOTHESIS] Town không phải gameplay entity

Trong minimum game hiện tại, player không:

- enter Town như một mode;
- tương tác với toàn Town;
- vào từng nhà dân;
- nộp item cho Town;
- nâng cấp Town như một state chung.

Thứ thật sự có nghĩa là:

- Supermarket/Market;
- General Store nếu khác chức năng;
- một public spot nếu Person xuất hiện ở đó;
- Project/request cụ thể;
- đường và cụm kiến trúc giúp định hướng.

Vì vậy `Town` có thể chỉ là tên mô tả cho một cụm công trình, hoặc thậm chí không cần label nếu cluster tự đọc được. Nó không cần card, Area box, graph node hay interaction target.

### 3.2. [DIRECTION] Context gọi exact entity

Thay vì:

```text
Person appears in Town
```

dùng:

```text
Person appears at the Supermarket
Person appears by the fountain
Request is active at the Market
```

Điều này làm announcement dẫn thẳng tới target thật, không qua một category place trung gian.

## 4. Home có thể tồn tại theo hai nghĩa

### 4.1. Geography

`Home` có thể là tên player dùng cho cụm house + farm + nearby facilities. Nghĩa này được thấy trực tiếp trên surface và không có card đại diện.

### 4.2. World entity

`House` có thể là một entity/card riêng nếu player thực sự dùng nó cho Sleep, Storage hoặc một state khác. Khi đó card đại diện **ngôi nhà**, không đại diện cho `Home Area`.

Home anchor chỉ focus camera về coordinate/house landmark; anchor không chứng minh một Home card hoặc Area node tồn tại.

## 5. Các geography khác

### River

- River là water ribbon/terrain liên tục, không card.
- Fishing Spot là entity/hit target.
- Catch card gắn vào Fishing Spot khi condition active.

### Mountain/Mine

- Mountain là terrain/landmark, không card.
- Mine Entrance/current frontier là interactive entity.
- Working Seam/checkpoint marker chỉ hiện khi có state/action liên quan.

### Coast/Sea

- Coast/Sea là geography hiện trực tiếp.
- Pier, tide pool hoặc Fishing Spot chỉ tồn tại nếu có verb/content.

### Grove/Field

- Tree density, paths và plant terrain có thể tạo Grove/Field mà không cần label/card.
- Batch/source/Project cụ thể được đặt trực tiếp tại vị trí của nó.

## 6. Card eligibility rule

`[DIRECTION]` Trước khi tạo một world card, hỏi:

1. Player có trực tiếp target/select/commit lên object này không?
2. Nó có persistent state, progress, queue, stock hoặc expiry không?
3. Nó có preview/cost/result khác object xung quanh không?
4. Nó có cần giữ identity trong hand/tray/record không?

Nếu cả bốn đều `không`, object thuộc world art/geography, không phải card.

Đây là lý do `Town` thường không có card, còn `Supermarket` có thể có.

## 7. Root surface example

```text
mountain art
  [Mine Entrance] [Working Seam when active]

path + clustered roofs + fountain art
  [Supermarket] [General Store] [Person today]

river ribbon crosses the surface
  [Upper Fishing Spot] [Rain Catch when active]

house + farmland art
  [House if actionable] [Plot] [Plot] [Processor] [Project]

river continues
  [Lower Fishing Spot]

field/coast terrain
  [specific source/spot only when meaningful]
```

Không có card `Mountain`, `Town`, `River`, `Home/Farm` hoặc `Coast`. Geography nối các entity và làm chúng có vị trí.

## 8. Semantic compression vẫn cần

Explicit không đồng nghĩa mọi chi tiết thành card:

- item output về stack/tray;
- Mine Depth history ở inspect;
- inactive opportunity không tạo empty card;
- houses không có gameplay chỉ là art;
- decoration không có hitbox/card;
- label chỉ dùng khi recognition cần, không tạo entity.

Whole-world explicit nghĩa là **mọi gameplay-relevant persistent entity và active context có vị trí/representation rõ**, không phải mọi object trang trí đều interactive.

## 9. Graph correction

Graph node phải là state/action dependency, không phải địa danh presentation.

- `Town` không là dependency node nếu không có Town-wide verb/state.
- `Home/Farm` trong graph chỉ là shorthand cho starting entities/coordinates, không phải một card.
- Person context trỏ tới exact entity/spot.
- Project/source/Catch trỏ tới exact world object.
- Topology mô tả relative position của entities, không chuỗi Place cards.

## 10. Orientation-test correction

### 10.1. v0.1 đã test sai representation level

[Orientation kit v0.1](../paper-tests/orientation-home-middle-vs-top-v0.1/README.md) dùng token `Town`, `Home`, `River` như Place cards. Nó chỉ còn giá trị lịch sử cho topology skeleton/art identity; không đại diện direction hiện hành.

### 10.2. [DIRECTION] v0.2 cần test explicit surface

- Một continuous background dài, không Area box.
- House, Plot, Supermarket, Store, Fishing Spot, Mine Entrance và Project đặt trực tiếp trên surface.
- Geography art/clustering tạo cảm giác home/town/river mà không card đại diện.
- Task gọi exact entity: `Supermarket`, `Fishing Spot`, `Mine Entrance`, `House`.
- So Home-middle vs Home-at-top bằng relative placement của entity clusters, không bằng sắp các Place cards.
- Log `false_entity`: participant tìm/chạm một decoration/region label như thể nó là card.
- Recall sketch hỏi vị trí House, Supermarket, Fishing Spot, Mine Entrance và Coast—not bắt buộc hỏi `Town` nếu Town không là entity.

## 11. Current status

1. `[DECIDED]` Area đã visible trên surface thì không có card đại diện riêng.
2. `[DIRECTION]` Gameplay entities/cards nằm trực tiếp trên continuous world.
3. `[HYPOTHESIS]` Town không cần tồn tại như gameplay entity; có thể chỉ là environmental cluster hoặc label tùy recognition.
4. `[DIRECTION]` Home chỉ có entity card nếu House có action/state; không có Home Area card.
5. `[DIRECTION]` Orientation v0.2 phải bỏ Area boxes và Place-card tokens.

## 12. Chưa kết luận

- Town label có cần hiện hay cluster art đã đủ.
- House có Sleep/Storage target hay các verb nằm ở HUD.
- Supermarket và General Store là một hay hai entity.
- Exact vertical order/spacing của entities.
- Home-middle hay Home-at-top.
- Runtime card size, hitbox, animation hoặc art density.
