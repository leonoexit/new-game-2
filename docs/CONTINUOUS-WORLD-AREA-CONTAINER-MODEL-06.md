# Continuous world area-container model 06

Ngày correction: 2026-09-22.

> **SUPERSEDED — 2026-09-22.** Tài liệu này đã hiểu sai ý người dùng khi biến Area thành large box/container. Hướng đúng nằm ở [Explicit surface model 07](CONTINUOUS-WORLD-EXPLICIT-SURFACE-MODEL-07.md): continuous surface tự biểu diễn geography; Area không có card, box hoặc parent node riêng. Giữ file này chỉ làm audit trail, không dùng làm direction hiện hành.

Trạng thái: `SUPERSEDED`; không phải direction hiện hành.

## 1. Correction

### 1.1. [DIRECTION] Area không phải một lá bài ngang hàng

Trên continuous world, `Home/Farm`, `Town`, `River`, `Mountain/Mine` và `Coast/Sea` nên là các **Area field/container lớn** có vị trí ổn định. Chúng định nghĩa geography, nền art, anchor, boundary và nhóm context.

Chúng không nên tiếp tục xuất hiện như một lá bài nhỏ ngang hàng với Plot, Person, Catch hoặc Project. Nếu mọi Area chỉ là một card phải chạm để mở, continuous world sẽ quay lại thành menu/table navigation được trang trí như map.

### 1.2. [HYPOTHESIS] Landmark art vẫn có vai trò

Home house, Town square, Mine Entrance hoặc Coast pier không vô nghĩa. Vai trò của chúng đổi:

- **Area identity/landmark:** art lớn hoặc header/background giúp nhận vùng và nhớ geography;
- **anchor target:** focus/jump tới vùng;
- **interactive sub-node chỉ khi có verb/state riêng:** ví dụ House có Sleep/Storage, Mine Entrance có Enter/Frontier.

Một landmark không có target/state/preview riêng thì không cần một card riêng.

## 2. Representation hierarchy

```text
Continuous world surface
└─ Area field (geography; không cầm/kéo)
   ├─ Area identity + landmark art + anchor/status
   ├─ Persistent entity cards
   ├─ Active context cards
   └─ Compressed internal-system entry/summary
```

| Layer | Biểu diễn | Có phải card tương tác? | Ví dụ |
| --- | --- | --- | --- |
| World | Continuous spatial relationship | Không | Mountain nằm trên Town; River dưới Home |
| Area | Large semantic field/container | Không | Home/Farm, Town, River |
| Landmark | Identity/header hoặc actionable sub-node | Tùy verb/state | Town square chỉ identity; Mine Entrance có thể actionable |
| Persistent entity | Card có state/target riêng | Có | Plot, Processor, Project, Market |
| Active context | Card tạm theo day/condition | Có | Person hôm nay, Catch, request, Grove batch |
| Owned source | Sticky tray/stack | Có | Tool, item stack, Person, selected source |
| Deep history/rules | Inspect/detail sheet | Không nằm tràn trên root | Mine history, full Project requirement |

## 3. Card eligibility rule

`[DIRECTION]` Một object chỉ nên thành card trên root nếu có ít nhất một trong các thuộc tính sau:

1. là target/source trực tiếp;
2. có state persistent cần đọc;
3. có eligibility/cost/result cần preview;
4. có progress/queue/expiry cần theo dõi;
5. có thể được chọn, cầm, đưa tới đích hoặc commit.

Nếu object chỉ nói “đây là Town” hoặc “đây là Home region”, nó thuộc Area identity, không cần card.

## 4. Area examples

### 4.1. [FIXTURE] Home/Farm Area

```text
HOME & FARM                         Home anchor
landmark/background: house + field

[House: Sleep / Storage]   [Processor: Ready 0/1]
[Plot: Growing/Dry]        [Plot: Mature]
[PJ-M Water Trough]        [PJ-B Harvest Bench]
```

- House chỉ là card nếu Sleep/Storage cần target/state riêng; nếu Sleep ở HUD, house trở thành landmark art.
- Tool/Seed/Produce không nằm rải trong Area; chúng ở sticky tray.
- Inactive locked plots có thể là visible slots/state, không mỗi plot phải mở full detail.

### 4.2. [FIXTURE] Town Area

```text
TOWN                               Town anchor
landmark/background: square + roofs

[Market]   [General Store]   [Person today]
[Active request]             [Town Project, nếu có]
```

Town square không cần một `Town` card nữa. Person/request xuất hiện inline vì có context/expiry; Market/Store là persistent targets.

### 4.3. [FIXTURE] River Area

```text
RIVER                              River anchor · Rain badge
landmark/background: broad river bend

[Fishing Spot]   [Today's Catch]
[Forage opportunity, nếu active]
```

River là Area. Fishing Spot là persistent target; Catch là condition context. Không biến cả River background thành hit target mơ hồ.

### 4.4. [FIXTURE] Mountain/Mine Area

```text
MOUNTAIN / MINE                    Mine anchor
landmark/background: mountain face

[Mine Entrance / Current Frontier]
[Working Seam, nếu open]   [Current checkpoint/rule]
```

Mọi Depth không thành root card. Entrance/frontier là compressed actionable node; history ở inspect strip.

## 5. Continuous không có nghĩa “mọi thứ luôn full-size”

`[HYPOTHESIS]` Một Area có thể dài khoảng một phần đến hơn một viewport tùy số entity active, nhưng root cần semantic compression:

- persistent/actionable card quan trọng hiện trực tiếp;
- active context xuất hiện inline;
- inactive known content collapse thành slot/summary;
- deep rule/history mở bằng inspect;
- output item đi vào stack/tray, không tạo ground card.

Nếu mọi card nhỏ đều luôn visible, continuous surface chỉ đổi từ “table rộng” thành “feed dài và dày”.

## 6. Area boundary language

`Large box` là semantic container, không bắt buộc là một cửa sổ chữ nhật có border cứng.

### [DIRECTION]

- Dùng terrain/background shift, area title, landmark silhouette và spacing để báo boundary.
- Giữ connector/path/ribbon giữa Area để world vẫn continuous.
- Area header/anchor ổn định; card con có grid/cluster bounded trong Area.
- Không dùng nested modal chỉ để vào Town/Home; root vẫn cho thấy card con quan trọng.

### [HYPOTHESIS]

- Border mềm hoặc ground plane tốt hơn nhiều panel nổi độc lập.
- Một cạnh Area kế tiếp nên hé trong viewport để người chơi hiểu surface còn tiếp tục.

## 7. Implication cho orientation test

### 7.1. Current kit v0.1

[Orientation kit v0.1](../paper-tests/orientation-home-middle-vs-top-v0.1/README.md) vẫn hữu ích để kiểm **topology skeleton** và asset identity. Nó không còn đủ đại diện runtime surface vì đang dùng một token/card cho mỗi Area.

### 7.2. [DIRECTION] Không chạy participant pilot trên v0.1 như final comparison

Trước pilot cần v0.2:

- Home/Farm, Town, River, Mountain/Mine, Grove và Coast là large Area fields;
- cùng một bộ child cards đặt trong cả Home-middle và Home-at-top;
- Area identity khác interactive child card bằng size/background/hit affordance;
- bốn task cũ vẫn giữ để đo find-target, wrong source, return Home và recall;
- log thêm `wrong_level`: participant chạm Area identity khi cần child card, hoặc tìm child card khi chỉ cần anchor.

Nếu không sửa, pilot sẽ đo khả năng tìm các landmark-card, không đo area-within-world model vừa được xác định.

## 8. Updated hypothesis

1. `[DIRECTION]` Continuous surface là **world of Areas containing cards**, không phải một list các Place cards.
2. `[DIRECTION]` Card language dành cho actionable/persistent/conditional entities; geography dùng Area field.
3. `[HYPOTHESIS]` Home/Town landmark art mạnh nhất khi làm identity layer/anchor, không phải button-card bắt buộc.
4. `[HYPOTHESIS]` Mine Entrance, House hoặc Fishing Spot chỉ giữ card form khi có verb/state riêng.
5. `[DIRECTION]` Orientation v0.2 phải kiểm đồng thời hai level: tìm đúng Area và tìm đúng child card bên trong.

## 9. Chưa kết luận

- Area cao bao nhiêu viewport.
- Số child card visible trước collapse.
- House có card riêng hay Sleep ở HUD.
- Town Market/Store là hai card hay một commerce cluster.
- Border/background/connector art cuối.
- Home-middle hay Home-at-top.
- Runtime layout, hitbox và animation.
