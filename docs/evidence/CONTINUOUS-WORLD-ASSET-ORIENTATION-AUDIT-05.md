# Continuous world asset orientation audit 05 — Home-middle vs Home-at-top

Ngày audit: 2026-09-21.

Trạng thái: asset-backed desk audit, không phải prototype hoặc usability test. Audit dùng square art đã có ở trạng thái runtime-approved cho các prototype cũ để kiểm silhouette ở 80 px và đặt vào hai paper topology. Không asset nào được đổi status, không asset nào được tuyên bố canonical cho content registry mới và không có recognition rate từ người chơi mới.

Nguồn thiết kế:

- [Continuous world surface paper test 01](CONTINUOUS-WORLD-SURFACE-PAPER-TEST-01.md)
- [Continuous world Year 1 mapping 03](CONTINUOUS-WORLD-YEAR1-MAPPING-03.md)
- [Continuous world recognition audit 04](CONTINUOUS-WORLD-RECOGNITION-AUDIT-04.md)
- [Person roster kernel audit 02](PERSON-ROSTER-KERNEL-AUDIT-02.md)

Nguồn art review:

- `art/approved/style-references/farm-high-key-style-reference-v0.1.png` — approved rendering reference.
- `art/style-studies/prototype3-square-card-art-v0.1/processed/` — square scene assets, runtime approved cho Prototype 3 only.
- `art/style-studies/character-card-*-v0.1/processed/*-preview-72-v0.1.png` — Person preview, runtime approved cho Prototype 1 only; not canonical cast.
- `art/style-studies/item-card-*/processed/` — item silhouettes approved cho prototype slot tương ứng.

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Ranh giới kế thừa

- Card là ngôn ngữ chính của world, state và action.
- Không điều khiển avatar đi trên seamless map.
- Hình, name và description cùng định nghĩa card; hình cần đọc được ở kích thước nhỏ.
- Người chơi có thể inspect để đọc detail.
- Season/Weather/Person hôm nay được công bố; Person context có thể jump tới.
- Save tiếp tục nhiều năm; topology không được ngầm tạo Year 1 ending/reset.

### 1.2. [DIRECTION] Hướng đang kiểm chứng

- Continuous scroll surface, vertical-dominant và bounded width.
- Square art-first world tile + vertical detail sheet.
- Sticky HUD/tray/carried source và region anchors.
- Text by decision burden, không zero-text tuyệt đối.
- Home-middle/open-at-Home hiện là fixture mạnh nhất về hub; Home-at-top là comparator mạnh nhất về one-direction discovery.

### 1.3. [HYPOTHESIS] Câu hỏi

1. Existing final-ish square art có giúp landmark/item/Person đọc ở 72–80 px không?
2. Home-middle hay Home-at-top giảm find-target và return-to-Home burden?
3. Wrong-source prevention đến từ art/topology hay từ label + preview?
4. Ability A/C/E/J/K cần label burden nào ở world/tray?
5. Có đủ bằng chứng chốt topology không?

### 1.4. [FIXTURE] Review setup

- Thumbnail review: 80 × 80 px, nằm giữa cell 96 × 96 px.
- Person review dùng preview 72 px đã lưu trong asset record.
- Hai deck 16 asset: landmarks/paths/farm/items/Person/Tool và opportunity/context scenes.
- Không thêm text vào raster; label được coi là UI/paper annotation.
- Layout width: tối đa bốn square tile; opening camera ở Home.

Các kích thước là fixture; audit không thay production contract 512 × 512, review at 160 px và square 1:1.

## 2. Asset-status boundary

### 2.1. [DECIDED] Theo art record

- Prototype 3 square assets chỉ runtime approved cho Prototype 3.
- Mira/Bram/Nell portraits chỉ runtime approved cho Prototype 1 và không định nghĩa canonical cast.
- Historical rectangular Landmark art không đủ điều kiện cho new card slot vì production contract hiện là square.

### 2.2. [HYPOTHESIS] Cách dùng hợp lệ trong audit

- Square Prototype 3 art được dùng như near-direction paper token để test scale/silhouette.
- Item/Person preview được dùng để test category collision, không gán identity vào registry.
- Không copy rectangular Home/Town Landmark vào square layout.
- Audit không approve, supersede hoặc đổi runtime path.

## 3. 80 px recognition desk review

### 3.1. [HYPOTHESIS] Landmark và path scenes

| Asset class | First-glance desk result | Label burden |
| --- | --- | --- |
| Little Home square | House/garden silhouette mạnh; candidate anchor tốt | L0 sau onboarding; name khi focus |
| Creek Path | Water ribbon và bank đọc rõ | L0/L1 nếu stable River position |
| Hill Path | Uphill/path đọc được, destination không rõ | Region label cần ở lần đầu/L1 |
| Bramble Path | Dense hedge/path khác Hill nhưng cùng green-path family | Short label/badge cần khi hai path cùng visible |
| Forgotten Garden | Overgrowth rõ | L0 state candidate |
| Turned Garden | Prepared soil rows rõ | L0 state candidate |
| Young Bean Trellis | Trellis + sparse young growth rõ | L0 state candidate; current art record đã sửa false maturity |
| Wild Mint scene | Plant by water đọc được; `Forage`, `Herb`, exact opportunity không tự rõ | L2 khi active opportunity |

Home/River/state pass desk silhouette. Path art chỉ nói “một nơi/đường khác”, không nói Mine/Grove/Town hoặc locked/unlocked rule.

### 3.2. [HYPOTHESIS] Portable items

Ở 80 px, Carrot, Potato, Radish và Green Bean có bốn silhouette khác nhau:

- orange roots + leafy top;
- round tan pile;
- magenta bulbs + broad leaves;
- long green pod bundle.

Chúng pass category identity trong deck nhỏ. Chúng chưa chứng minh:

- Shortroot/Tallbean/Dewleaf art mới;
- Fresh so với Processed state;
- six-stack hand scan;
- exact tag/price/Gift acceptance.

Vì vậy item vẫn L1: art + quantity, name khi focus/selected, exact source/quantity trong preview.

### 3.3. [HYPOTHESIS] Person

Mira/Bram/Nell preview 72 px giữ face/hair/clothing silhouette khác nhau. Portrait phân biệt identity tốt trong bộ ba; nó không truyền được:

- ability A/C/E/J/K;
- Heart count;
- hôm nay Person ở đâu;
- Gift item accepted.

Person đã biết vẫn L1 với Heart/status; Person mới hoặc announcement L3 với name/context. Không dùng portrait art để giảm rule text.

### 3.4. [HYPOTHESIS] Opportunity/context scenes

Deck gồm Footbridge, old gate, Rain scene, mill steps, creek stones, seeds, sapling, herbs, tree, flowers, tea, stone/cairn/feather và trail.

Desk result:

- scene khác nhau đủ để nhớ một moment sau khi đã biết;
- exact verb, AP, expiry, item requirement và reward không đọc được từ art;
- nhiều scene dùng cùng foliage/path/house palette, nên scan 16 tile chỉ bằng art không đáng tin;
- object-focused result như smooth stone/blue feather mạnh hơn rule-focused scene như old gate/mill steps.

Opportunity/Project tiếp tục cần L2; unfamiliar branch L3.

## 4. Two topology fixtures

### 4.1. [FIXTURE] M — Home-middle/open-at-Home

```text
        [Mountain / Mine]
     [Town] — [Upper Grove]
         \     /
        [Upper River]
      [HOME — FARM]        opening camera
        [Lower River]
     [Crossroad] — [Field]
         [Coast / Sea]
```

World tồn tại ở hai phía của Home. Home square là visual anchor; HUD/overview phải chỉ rõ `↑ Town/Mine` và `↓ River/Coast` ở orientation lần đầu.

### 4.2. [FIXTURE] T — Home-at-top

```text
      [HOME — FARM]        opening camera
     [Town] — [Upper Grove]
       [Upper River]
     [Mountain / Mine]
       [Lower River]
     [Crossroad] — [Field]
       [Coast / Sea]
```

World discovery chủ yếu scroll xuống. Home rời viewport sau excursion và phụ thuộc sticky Home anchor để return.

Không layout nào tạo travel/AP cost từ khoảng cách.

## 5. Find-target audit

### 5.1. [FIXTURE] Four tasks

1. Sunny: Farm → Fresh Crop target ở Town/River → Farm.
2. Rain: so Mine/Grove/River rồi chọn hai context.
3. Person announcement: jump tới Person context, Gift, quay Home.
4. Cross-region source: carry Wood/Ore/Fresh item tới Project target.

### 5.2. [HYPOTHESIS] Home-middle

- Home/Farm nhìn thấy ngay khi ngày mở; strong square Home silhouette hỗ trợ return mental anchor.
- Town/Mine và Coast nằm hai hướng. Nếu HUD không cho directional hint, player có thể scroll sai hướng ngay task đầu.
- Rain compare có thể ngắn hơn về hub distance nếu destinations phân bố quanh Home, nhưng overview/anchor vẫn quan trọng hơn manual scroll count.
- Region art cần stable position + short first-time labels; two green paths không đủ báo `Mine` so với `Grove`.

### 5.3. [HYPOTHESIS] Home-at-top

- First discovery dễ: mọi chưa-biết node nằm xuống dưới.
- Target ở sâu biến route thành “scroll farther down”, làm topology dễ đọc như progression feed.
- Return Home bằng manual reverse scroll tăng theo world length; sticky Home anchor là requirement, không phải convenience.
- Path art cùng palette có thể hòa thành một chuỗi scene; region headings/landmark silhouettes phải ngăn list-feel.

### 5.4. [HYPOTHESIS] Result

- Home-at-top thắng first-session directional instruction.
- Home-middle thắng hub/geography hypothesis và tận dụng Home art làm center-of-life landmark.
- Asset desk review không đo memory/orientation error; không đủ chốt winner.
- Home-middle vẫn là stronger fixture cho **vòng user test kế**, vì nó kiểm tra câu hỏi khó hơn: liệu directional hint + anchor có đủ để người mới hiểu world hai hướng không. Nếu fail, Home-at-top là fallback rõ.

## 6. Return-to-Home audit

### 6.1. [HYPOTHESIS] Manual vs anchor

| Condition | Home-middle | Home-at-top |
| --- | --- | --- |
| Manual từ nearby Town/River | Thường ngắn | Ngắn–vừa |
| Manual từ Coast/deep node | Vừa | Dài nhất, luôn reverse |
| Sticky Home anchor | Một jump | Một jump |
| Recall after jump | Home là giữa hai world halves | Home là origin/top |

Anchor làm thao tác bằng nhau nhưng không làm mental model bằng nhau. Sau jump Home-middle cần cue “vừa ở upper/lower half”; Home-at-top chỉ cần depth/path cue.

### 6.2. [HYPOTHESIS] Required UI information

- Sticky Home anchor luôn visible sau khi rời Home.
- Back-to-last-action riêng với Home; không ép Home anchor gánh cả hai nhiệm vụ.
- Overview/anchor nêu region + active badge, không chỉ icon art.
- Jump không tốn AP trong fixture; nếu travel trở thành mechanic, audit phải chạy lại.

## 7. Wrong-source prevention

### 7.1. [HYPOTHESIS] Asset contribution

Produce/Tool silhouettes giúp chọn category đúng. Chúng không đủ cho:

- Fresh vs Processed;
- Crop Herb vs Forage Herb;
- exact Person Gift preference;
- Raw Wood/Stone/Ore Project requirement;
- E alternative slot hoặc J alternate Context mode.

### 7.2. [HYPOTHESIS] Prevention stack

1. Sticky carried source giữ art + quantity + selected name.
2. Invalid target không highlight.
3. Focus summary nêu exact accepted tag/item.
4. Commit preview nêu source/quantity/state, target, AP/Heart/item cost, result và timing.
5. Cancel trước commit không đổi state/resource.

Topology không sửa wrong-source. Home-middle và Home-at-top cần cùng prevention stack.

## 8. Ability label burden

| Kernel | Resting tile/tray | Target mode | Inspect burden |
| --- | --- | --- | --- |
| A Preview | Portrait + Heart + short verb `Preview` khi selected | Optional hidden targets highlight | Exact info revealed/no-reroll |
| C Hold | Portrait + Heart + held-state marker | Expiring targets only | Expiry extension + one-held limit |
| E Borrowed Use | Portrait + Heart; không art-only | Printed E-slot on eligible target | Exact original/alternative tag |
| J Retune | Portrait + Heart + Context icon | Contexts with discovered alternate mode | Current vs borrowed mode, one/Context/day |
| K Divide/Focus | Portrait + Heart + Work icon | One/two Project targets | Total Progress unchanged |

### 8.1. [HYPOTHESIS] Result

- A/C có short verbs đủ ổn ở selection state; full rule vẫn inspect.
- E/J có rule symbolic, bắt buộc L2/L3; portrait hoặc ability icon đơn độc không đủ ngăn source/context bypass.
- K cần progress preview trực tiếp trên Project targets; art không truyền conservation rule.
- Square Person portrait có thể là identity anchor, nhưng ability verb/status là UI text/icon layer.

## 9. Test protocol còn thiếu

### 9.1. [DIRECTION] New-player paper test

Để thật sự chọn topology, cần ít nhất một người chưa biết map thực hiện cả M và T, counterbalanced order. Dùng square art gần direction cuối + paper labels/overlays, không cần code.

Log:

- time-to-first-target;
- wrong-direction scroll/touch;
- anchor opens và wrong anchor;
- wrong-source selection bị preview chặn;
- time return Home;
- số lần inspect chỉ để nhớ identity;
- label requests/đọc nhầm;
- recall sketch sau ba task: Home, Town, River, Mine, Coast ở đâu.

Không đặt pass threshold trước pilot; một người chỉ giúp sửa protocol, không chứng minh population rate.

### 9.2. [DIRECTION] Asset gaps trước test

Cần square paper token, status `study` hoặc `candidate`, cho:

- Town landmark;
- Mine Entrance;
- River spot khác Creek Path;
- Coast/Sea landmark;
- Water Trough, Harvest Bench và Upper-Grove Footbridge Project identity;
- Fresh/Processed pairs của ít nhất Crop, Fish và Herb;
- ability selection markers A/C/E/J/K do UI/paper overlay tạo, không bake vào art.

Existing rectangular Town/Home Landmark không được crop để lấp gap.

## 10. Audit verdict

### 10.1. [HYPOTHESIS] Kết luận mạnh nhất

1. **Square native-pixel direction pass desk readability cho Home, River, basic farm states, four Produce và three Person portraits ở 72–80 px.** Đây không phải new-player recognition rate.
2. **Path/opportunity scenes không đủ semantic precision.** Stable position + label/badge/preview vẫn cần cho destination và rule.
3. **Home-at-top dễ dạy direction hơn; Home-middle giữ hub/geography mạnh hơn.** Anchor làm thao tác gần nhau nhưng không xóa mental-model difference.
4. **Home-middle là fixture nên user-test trước, không phải topology đã chốt.** Fail condition rõ: repeated wrong-direction search hoặc recall map hai nửa kém dù có directional cue.
5. **Wrong-source prevention không phụ thuộc topology.** Nó nằm ở selected-name, valid-target filter và exact commit preview.
6. **A/C/E/J/K không thể art-only.** Portrait nhận diện Person; ability/Heart/limit cần UI text/icon theo burden L1–L3.
7. **Chưa đủ asset coverage để gọi đây là orientation validation cuối.** Mine/Town/Sea/Projects và Fresh/Processed pairs còn thiếu square final-ish tokens.

### 10.2. [DIRECTION] Effect của art-review skill

- Chỉ dùng square assets phù hợp slot contract; loại rectangular Landmark khỏi new layout.
- Review tại 80 px/72 px ngoài full-size record.
- Giữ status prototype-specific; không nâng thành canonical/runtime approval mới.
- Tách art responsibility (silhouette/identity) khỏi UI responsibility (name, cost, progress, Heart, targeting).

### 10.3. Chưa được kết luận

- Home-middle hoặc Home-at-top là topology cuối.
- Vertical-serpentine đã được user chốt.
- Existing Prototype 3 scenes là Year 1 geography/content.
- Mira/Bram/Nell là canonical Person roster.
- Asset set hiện tại đạt new-player recognition.
- 72–80 px là final runtime size.

## 11. Follow-up closure — 2026-09-22

Các gap asset/protocol của audit này đã được xử lý ở cấp paper fixture:

- square Town, Mine Entrance, River Fishing Spot và Coast/Sea study;
- Water Trough, Harvest Bench và Upper-Grove Footbridge study;
- Fresh/Processed Crop, Fish và Herb pairs;
- Home-middle/Home-at-top board, interaction-token sheet, four-task protocol, counterbalance và log fields.

Kit: [Orientation paper-test kit v0.1](../../paper-tests/orientation-home-middle-vs-top-v0.1/README.md).

`[DIRECTION]` Asset/protocol preflight pass. Gap còn lại là **participant evidence**. Không retroactively đổi desk audit thành new-player validation, không chốt topology và không nâng art `study` thành canonical/runtime.
