# Content-minimum registry 01 — shared vocabulary for sensitivity tests

Ngày lập: 2026-09-21.

Mục đích: chọn bộ content fixture nhỏ nhất đủ để Producer, Connector và Collector dùng chung một vocabulary trong các vòng calendar/economy sensitivity kế tiếp. Tài liệu này không phải danh sách content Year 1, không chốt balance, không cho phép code/prototype và không biến tên hay rule fixture thành luật.

**Phạm vi lá/entity V0 hiện hành:** tra [danh mục card grammar §10](ON-TABLE-CARD-SHAPE-DECISION-09.md) trước khi dùng bất kỳ tên nào bên dưới. Registry này giữ các tên và phép thử lịch sử, kể cả `Field Notes` reward, Runner Bean/Lemon Balm Seed chưa có nguồn, Project đã bị bác bỏ và nguồn ngoài vòng đầu; chúng không tự trở thành card V0. Khi hai tài liệu khác nhau, danh mục card grammar V0 có ưu tiên cho loại lá, nơi xuất hiện và trạng thái quyết định.

**Field V0 · CG-38/39:** [Farm land contract 01](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md) chốt tám vị trí trong lá `Field` ở tầng dưới Home: 2 Soil trống, 3 Soil có bụi và 3 lá đá. Sickle 1 AP dọn bụi, đổi ảnh trong Soil; Hoe 1 AP đập lá đá, thay bằng Soil trống ở cùng vị trí và nhận 1 Stone. Các dòng lịch sử bên dưới về Farm phẳng, sức chứa khác hoặc đất mở thêm theo tiến độ không thay quyết định này.

**Till V0 · CG-40:** Hoe lên Soil trống, 1 AP, đổi trạng thái/ảnh của **cùng lá Soil** sang đã cày. `Tilled Soil` là tên state để đọc/lọc, không là identity/Bách Khoa riêng. Plant vẫn đổi Soil đã cày thành Crop identity; Harvest trả về Soil đã cày.

**Stone · CG-41:** Clear đá Field vẫn trả Stone. Công dụng/giá bán/nguồn khác của Stone được hoãn đến giai đoạn đổ nội dung; không lấy các recipe hoặc Project lịch sử bên dưới làm luật hiện hành.

**Mine update · 2026-09-25:** registry bên dưới còn giữ `Search → Exposed Ore → Extract`, Stone source và cadence Sleep của phép thử cũ. Gameplay Mine CG-17/19/20, gồm `Break / Next / Descend`, phí và refresh, nằm trong [Mine contract 01](MINE-CURRENT-CONTRACT-01.md). Không lấy các hàng Mine lịch sử ở đây để ghi đè nguồn hoặc phí đã chốt.

**Fishing update · 2026-09-25:** §5 giữ fixture hai Fish để đọc chứng cứ cũ. [Fishing contract 01](FISHING-CURRENT-CONTRACT-01.md) là V0 hiện hành: ba `Fishing Spot` với odds ẩn, `Cast` 1 AP, một output `Silver Minnow`. `Blue Eel`/Rain Catch không nằm trong roster V0; không lấy hàng FI-R hoặc exact `Catch` bên dưới để thêm lại Fish thứ hai.

**Taxonomy correction CG-06/07 · 2026-09-24:** Character là Person card, Hand là Tool card; Fish là Item nhóm Fish; cây hoang dã, cây đang trồng và nông sản thu hoạch là Item nhóm Crop. Farmhouse là Building card thuộc Farm, chứa TV sub-card. Các tag `Forage` và phép chia raw item bên dưới là nhãn thử lịch sử nếu chúng xung đột với phân loại này.

**Taxonomy correction CG-09 · 2026-09-25:** Supermarket là Building card ở Commerce. Shipping Bin và TV cùng thuộc loại Thiết bị (Equipment), lần lượt ở Home/Farm và bên trong Farmhouse. `Sub-card` mô tả quan hệ chứa của TV; các tương tác đã chốt giữ nguyên.

Trạng thái cập nhật 2026-09-23: **partially superseded for Processing utility and Mine source topology**. Crop/item/Project/collection vocabulary remains reusable. Processing templates remain compatibility fixtures only; every requirement below that Processor create a positive minimum-loop branch, premium, request or raw-vs-Processed economic win is historical and is superseded by [post-removal audit 11](../evidence/CORE-YEAR-1-POST-REMOVAL-CONSISTENCY-GAP-AUDIT-11.md). Stone sourcing now follows Search-once → persistent source → Extract → Sleep refresh; Direct Descent never grants Stone.

Canonical paper identity update 2026-09-23: [crop identity audit 20](../evidence/CANONICAL-CROP-IDENTITY-AUDIT-20.md) replaces the active crop labels `Shortroot / Tallbean / Dewleaf` with `Turnip / Runner Bean / Lemon Balm`. Historical test logs keep the old labels; roles, tags, access and numerical fixtures are unchanged.

Canonical paper identity update 2026-09-23: [Catch identity audit 21](../evidence/CANONICAL-CATCH-IDENTITY-AUDIT-21.md) replaces the active Catch labels `River Minnow / Rain Eel` with `Silver Minnow / Blue Eel`. Rain remains the exact FI-R eligibility condition; historical test logs keep the old labels.

Canonical paper identity update 2026-09-23: [consolidated proposal 23](../evidence/CANONICAL-IDENTITY-CONSOLIDATED-PROPOSAL-23.md) selects `Hedgerow Berry / Wood / Stone / Ore / Wild Herb`, source-card labels `Hedgerow / Woodlot / Exposed Ore / Exposed Stone / Grove Batch`, Projects `Water Trough / Harvest Bench / Grove Footbridge`, Persons `Mira=A / Nell=C / Bram=K`, and `Valley Journal → Field Notes / Connections`. Mechanics and values are unchanged; historical aliases remain in completed logs.

Grove readiness update 2026-09-23: [contract 36](../evidence/FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) tested `G-V` for the current one-output V0: exact Wild Herb opportunity visible at day setup, free inspect, 1-AP Collect, Sleep expiry unless Nell holds it. The paid Search/multi-item batch below is historical fixture grammar, not an approved hidden V0 result. Actual appearance cadence remains open. The ordinary Wild Herb source does **not** require PJ-X/Upper Grove.

Ontology correction after owner challenge: [audit 40](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) finds that `Grove Batch` is an approved paper **source-card name**, but `Grove` alone has no selected Area/place/action type. The word “Batch” may mislead for a zero-or-one Wild Herb source. `G-V`'s AP comparison remains conditional; its player-facing presentation promotion is paused until the name and source/opportunity surface are clear.

Latest Wild Herb V0 paper decision, 2026-09-24: [audit 40 §8](FIRST-PLAYABLE-GROVE-ONTOLOGY-NAMING-AUDIT-40.md) places one visible world-item card at most in the new Rìa Rừng / Woodland Edge Area, with a five-slip automatic New-Day appearance cycle, 1-AP Hand Collect and Season-boundary cleanup. The earlier `Grove Batch` source card, paid Search and one-Sleep expiry are historical paper models; Nell's old Hold Open target is no longer valid. [Package v1 §7.1–7.2](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) records the withdrawn crop-only Harvest Assist and Nell's current 2-AP same-day relief rule. Hand Collect retains its normal 1-AP cost unless Nell's general relief is active. The Herb rule is a paper baseline requested by the owner, not a final product lock.

Latest paper audit: [consistency audit 37](../evidence/FIRST-PLAYABLE-V0-CONSISTENCY-AUDIT-37.md) keeps PJ-X's reward and Mira/Bram abilities open; [Herb cadence test 38](../evidence/FIRST-PLAYABLE-WILD-HERB-CADENCE-PAPER-TEST-38.md) compares source phases without selecting a generator; [role options 39](../evidence/FIRST-PLAYABLE-MIRA-BRAM-ABILITY-OPTIONS-39.md) selects no replacement ability. [Package §7.4](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) records the owner's confirmation of Nell alone in the first-playable Person roster; Mira/Bram remain named later-content identities with no active V0 appearance, Gift, Heart or card. The registry's older minimum-set claims below remain historical where they imply a complete three-ability roster or a playable Upper-Grove reward.

First-loop source update 2026-09-24: [package §6.9](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) supersedes this registry's finite/delayed Turnip restock assumption and COL-1 “at a restock” timing for the working first loop. Two Turnip Seeds and 0G open the paper game; Commerce lists Turnip Seed without a daily quantity cap through the first paper Season; Field Notes chooses one free Bean/Lemon Balm Seed on the **next New Day after** the third family record. CP3 first Ore has collection value; Woodlot Collect, CP6 Stone and repeated Ore are outside the active first-loop reward scope until a native use exists. Names below remain reusable identities, not active V0 obligations. Later-Season Seed availability and numerical prices remain open.

Project purpose review 2026-09-24: [package v1 §6.4](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) recommends working `B2 — Water Trough + Harvest Bench` for first playable. The Grove Footbridge name and X0 no-fee shape remain historical/conditional, but no playable PJ-X card or Upper-Grove reward enters that working scope. This count change is **not yet owner confirmed**; earlier B3 references below remain source-test fixtures.

Final owner correction: [package v1 §6.5](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) rejects **Water Trough, Harvest Bench and Grove Footbridge as designs**, not merely as first-playable content. There are zero selected or reserved Project cards/Work targets; Upper Grove is also not a reserved Area. Section 7 and the Project columns/route diagrams below preserve discarded paper fixtures only and must not be used to plan later content.

Current Farm grammar: [Farm action and AP rerun 41](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md) defines Plant, one-target Watering Can, Rain, Sleep growth and Hand Harvest without Projects. `Care` in this older registry means successful daily growth, not an extra payable action. Its 2/3/4 crop counts and one-item yield remain working numeric fixtures.

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Ranh giới kế thừa

- Game là solo card-based life sim; card là ngôn ngữ chính của world, state và action.
- Person là persistent collectible với activated ability; Person không phải party requirement.
- Save có thể tiếp tục nhiều năm. Year 1 không phải ending hoặc reset.
- Objective, completion và ending là ba khái niệm độc lập.
- Bỏ lỡ thông thường trì hoãn tới lần/chu kỳ sau, không mặc định phá save.
- Gift tốn action cost + item hợp lệ; mỗi Person nhận tối đa một Gift/ngày.
- Heart thuộc riêng từng Person và tồn tại qua ngày.

### 1.2. [DIRECTION] Ranh giới thiết kế đang dùng

- Producer, Connector và Collector cần đi qua cùng một economy thay vì mỗi route dùng một bộ token riêng.
- Common resource bắt buộc cho unlock nền cần deterministic source hoặc substitute đọc được.
- Optional variety có thể đến từ batch, Catch condition hoặc Mine branch.
- Farming relief, expansion và workload phải được đọc cùng nhau.
- Processing là conversion có delay/slot/identity tradeoff, không phải generic value upgrade.
- Collection ưu tiên discovery/record; consume chỉ dùng khi sacrifice chính là quyết định cần tạo.
- Paper simulation tiếp tục trước code/prototype.

### 1.3. [HYPOTHESIS] Vai trò của registry tối thiểu

Một content entry chỉ nên nằm trong registry này nếu nó tạo ít nhất một phép phân biệt cần đo:

1. cadence ngắn so với dài;
2. deterministic source so với opportunity source;
3. Fresh/Raw so với conditional Processed compatibility;
4. liquidity so với Gift/Project/collection/Keep;
5. maintenance relief so với burst relief;
6. Weather condition hoặc recovery khi bỏ lỡ;
7. route riêng nhưng vẫn có cross-link với route khác.

Entry chỉ khác tên, artwork hoặc payout nhưng không thêm decision surface bị loại khỏi minimum set.

### 1.4. [FIXTURE] Quy ước

- Mọi ID, tên, tag, source, compatibility và access rule trong tài liệu này đều là fixture.
- `Short`, `Medium`, `Long` là duration class để vòng calendar gắn các giá trị khác nhau; chúng chưa phải số ngày.
- `Common`, `opportunity` và `checkpoint` mô tả source shape, không nói rarity cuối.
- `Fresh`, `Raw`, `Processed`, `Crop`, `Forage`, `Fish`, `Material` và các subtype là tag thử cho target compatibility.
- Project requirement bên dưới nêu loại source bắt buộc phải giao nhau; quantity, Work cost và Gold cost được cố ý để mở.
- Tên fixture dùng để log dễ đọc, không phải tên content đã duyệt.

## 2. Minimum-set test

### 2.1. [HYPOTHESIS] Điều bộ registry phải làm được

Bộ fixture pass bước này nếu:

- Producer có một crop ngắn, một crop commitment dài hơn, maintenance relief và burst relief;
- Connector có thể đi từ deterministic source tới Mine/Grove/world connection mà không cần first harvest;
- Collector có ít nhất ba family để record, một Weather-conditioned miss/recovery và một reward làm thay đổi lựa chọn;
- Gift/Heart có item supply nhưng không Person nào trở thành prerequisite;
- Processing templates giữ identity cho Farm, Fishing và Grove nhưng nằm ngoài minimum playable loop cho tới khi approved content kích hoạt;
- mọi Project dùng vocabulary đã có, không cần material chỉ tồn tại để nuôi riêng Project đó.

### 2.2. [HYPOTHESIS] Điều bộ registry không cần làm

- Không đại diện mọi Season, biome, Person, recipe hoặc collection của Year 1.
- Không chứng minh fun, final balance, art recognition hoặc onboarding.
- Không chọn AP/day, Season length, Weather cadence, price scale, storage hoặc perishability.
- Không gán kernel ability cho roster Person cụ thể.

## 3. Crop fixture

Tất cả crop dưới đây dùng farming state chain hiện hành: `Seed → Plant → Care/Sleep → Mature → Harvest`. Registry giữ single-harvest để không thêm regrow grammar trước khi calendar sensitivity cần nó.

| ID | [FIXTURE] Tên | Duration class | Harvest identity | Access shape | Phép thử mà entry tạo |
| --- | --- | --- | --- | --- | --- |
| CR-S | Turnip | Short | `Fresh · Crop · Root` | Seed deterministic từ đầu/restock | First-output junction và crop dễ phục hồi |
| CR-L | Runner Bean | Long | `Fresh · Crop · Bean` | Seed thấy trong ordinary restock | Commitment có nguy cơ chạm Season boundary |
| CR-H | Lemon Balm | Medium | `Fresh · Crop · Herb` | Một option từ collection reward | Crop tạo Herb cross-link nhưng cạnh tranh seed choice |

### 3.1. [HYPOTHESIS] Vì sao cần ba crop profile

- `CR-S` là control: nếu route không vận hành với crop ngắn/deterministic thì lỗi không nằm ở content variety.
- `CR-L` tạo exposure với AP/day, Weather cadence và Season length mà không cần thêm rule đặc biệt.
- `CR-H` kiểm tra một item có thể giữ `Crop` identity đồng thời có `Herb` subtype; conditional Processing compatibility không được làm nó tự động tốt hơn Wild Herb.

Hai crop chỉ đủ so short/long nhưng không thử cross-category. Bốn crop chưa thêm dimension cần thiết ở vòng này.

### 3.2. [FIXTURE] Seed và miss recovery

`[HISTORICAL SOURCE-TIMING FIXTURE]` The working first-loop Turnip listing and Field Notes next-New-Day choice are in package §6.9; the ordinary restock cadence below remains for comparison/later profiles.

- Turnip Seed luôn có một deterministic restock path trong active test season.
- Runner Bean Seed có ordinary restock path; bỏ một restock chỉ trì hoãn tới restock sau.
- Lemon Balm Seed là một option của reward `COL-1`; option không chọn quay lại ở restock/cycle sau.
- Crop chưa Mature ở Season boundary không được mặc định chết trong registry. Vòng calendar phải chạy ít nhất hai boundary policies như biến sensitivity nếu cần, không được ngầm chọn một policy ở đây.

[Crop duration/yield paper test 29](../evidence/FIRST-PLAYABLE-CROP-DURATION-YIELD-PAPER-TEST-29.md) recommends the historical 2/3/4 Care counts and one Fresh item per Harvest as the **next working numerical fixture** under A6/S18. This does not promote those values or a Season-boundary policy to owner-selected rules; the `Carry`/`Wither` sensitivity remains open.

## 4. Raw item và source registry

### 4.1. [FIXTURE] Raw items

| ID | Tên | Tags | Source shape | Primary tension |
| --- | --- | --- | --- | --- |
| I-BER | Hedgerow Berry | `Fresh · Forage · Berry` | Hedgerow deterministic | Gift-now so với Keep |
| I-WOD | Wood | `Raw · Material · Wood` | Woodlot deterministic | Project A/B/C cạnh tranh cùng source |
| I-STN | Stone | `Raw · Material · Stone` | Band source từ CP6 trở đi; Search một lần rồi Extract | Dùng AP lấy material so với tiếp tục Descend |
| I-ORE | Ore | `Raw · Material · Ore` | Mine checkpoint source | Relief Project so với gateway Project |
| I-HRB | Wild Herb | `Fresh · Forage · Herb` after collection | Visible world-item card in Rìa Rừng; automatic New-Day appearance under audit 40 §8 | Gift/Sell/record/Keep after 1-AP Hand Collect |

Crop harvest và Catch ở §3/§5 cũng là raw item; bảng này chỉ chứa source ngoài Farm/Fishing.

### 4.2. [HYPOTHESIS] Source contract

| Source | Contract trong fixture | Không được suy ra |
| --- | --- | --- |
| Hedgerow | Berry có deterministic acquisition path | Berry là quà universal hoặc miễn AP |
| Woodlot | Wood có deterministic acquisition path | Project quantity/cost cuối |
| Exposed Stone source | Từ eligible band, Search Side Tunnel một lần reveal exact source; Extract không tăng Depth; spent source ready lại sau Sleep | Direct Descent cho Stone hoặc phải Search lặp lại trước mỗi Extract |
| Working Seam/checkpoint source | Ore biết trước nhưng lấy Ore cạnh tranh với Depth | Mine checkpoint/cadence cuối |
| Grove Batch (historical) | Approved earlier paper source-card label, now superseded for Wild Herb pickup by direct item appearance in Rìa Rừng | Its earlier approval requires a Grove Area, gateway card, multi-card batch or paid Search in the V0 baseline |

`I-BER` và `I-WOD` giữ early planning không hostage bởi draw. `I-HRB` tồn tại để thử opportunity timing; nếu Wild Herb là requirement duy nhất của unlock nền thì fixture fail.

## 5. Fishing output fixture — lịch sử trước CG-24

| ID | [FIXTURE] Tên | Condition | Tags | Miss/recovery | Phép thử |
| --- | --- | --- | --- | --- | --- |
| FI-C | Silver Minnow | Common River condition | `Fresh · Fish · River` | Condition quay lại thường xuyên | Control cho Catch/Sell/record/Keep |
| FI-R | Blue Eel | Rain tại River | `Fresh · Fish · River · Rain` | Rain/cycle sau; không khóa Fishing | Weather opportunity, Gift/record/Keep conflict |

### 5.1. [HYPOTHESIS] Vì sao chỉ hai Catch

- Một common Catch bảo đảm Fishing loop không chỉ tồn tại khi Weather hiếm.
- Một Rain Catch buộc calendar sensitivity đo missed opportunity và recovery.
- Thêm Lake/Sea Catch lúc này chủ yếu tăng content count; location expansion chưa cần để phân biệt hai Weather cadence.

Đoạn trên giữ identity/condition cho các phép thử cũ. V0 hiện hành dùng một output và cadence ở [Fishing contract 01](FISHING-CURRENT-CONTRACT-01.md).

## 6. Processing output fixture

### 6.1. [HYPOTHESIS] Identity-preserving rule

Processed output kế thừa category/subtype của input và thêm `Processed`; nó không thay bằng một item `Processed Goods` dùng chung. `Fresh` hoặc `Raw` bị bỏ khi recipe nói rõ, nên target có thể chấp nhận raw mà từ chối processed và ngược lại.

### 6.2. [FIXTURE] Output templates

| Recipe ID | Input eligibility | Output | Tags giữ/thay đổi | Tradeoff phải tồn tại |
| --- | --- | --- | --- | --- |
| PR-C | `Fresh · Crop` | `[crop] Preserve` | Giữ `Crop` + subtype; `Fresh → Processed` | Mất Fresh target/liquidity hôm nay |
| PR-F | `Fresh · Fish` | `Dried [fish]` | Giữ `Fish` + location/condition subtype; `Fresh → Processed` | Mất Fresh Catch/condition target |
| PR-H | `Fresh · Herb` | `Prepared [herb]` | Giữ `Herb` + Crop/Forage origin; `Fresh → Processed` | Raw/Fresh Herb Project hoặc Gift có thể từ chối |

### 6.3. [HYPOTHESIS] Compatibility guardrails

- Processed output không tự động hợp lệ ở mọi Gift, Project hoặc collection record nhận raw input.
- Sell uplift nếu có phải đổi lấy AP, delay, slot và ít nhất một lost option.
- Lemon Balm Preserve/Prepared Lemon Balm phải giữ `Crop` origin; Prepared Wild Herb phải giữ `Forage` origin.
- Processor idle là trạng thái hợp lệ; không tạo pity bonus chỉ vì player không Load.

## 7. Rejected Project fixture — historical only

Ba Project cùng dùng resource vocabulary đã có nhưng thay ba dimension khác nhau. Chúng không đại diện mọi unlock và không phải ba Project bắt buộc.

| ID | [FIXTURE] Tên | Requirement shape, chưa có quantity | Reward shape | Vai trò route |
| --- | --- | --- | --- | --- |
| PJ-M | Water Trough | Wood + Ore + Work | Tăng Water scope/capacity | Producer maintenance relief |
| PJ-B | Harvest Bench | Wood + Stone + Work | Tăng Harvest **hoặc** Plant burst scope | Producer burst relief; verb cuối vẫn mở |
| PJ-X | Grove Footbridge | Material + Work, exact recipe open; no Gold fee | Proposed optional Upper-Grove context; **playable reward undefined** | Third structural slot chosen by `B3`, purpose not yet proven |

Readiness note after [PJ-X cost diagnostic 31](../evidence/FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md): Upper Grove is a proposed project-specific context, **not yet a defined playable source/reward**. The row records the structural slot chosen for paper comparison, not evidence that Grove Footbridge has a justified player-facing purpose. Its exact cost should not be selected until that purpose is established; ordinary Grove/Wild Herb remain accessible without X.

### 7.1. [HYPOTHESIS] Project distinctions

- `PJ-M` giảm recurring maintenance; nó không giải quyết harvest/replant peak.
- `PJ-B` giảm peak; nó không giảm daily Water.
- `PJ-X` is intended to open an optional context rather than capacity, but that context has no specified playable action/reward yet. R0, Mine and common Grove remain accessible without it.
- Cả ba dùng overlapping materials để tạo allocation tension. Không tạo `Trough Part`, `Bench Part` hoặc `Bridge Token` chỉ phục vụ một recipe.

### 7.2. [FIXTURE] Cost slots để vòng sau gắn số

Mỗi Project có vector:

```text
material quantities + Work total + completion timing
```

Registry không điền số ở phiên lịch sử này; later owner-selected `Q4` specifies M/B, and `X0` specifies material + Work with **no Gold fee** for X. X quantity remains open until its optional reward is defined. Nếu một schedule cần số để chạy, số đó phải nằm trong scenario table của schedule và mang nhãn `[FIXTURE]`; không được âm thầm quay lại thành thuộc tính cố định của Project.

## 8. Collection fixture

### 8.1. [CANONICAL PAPER IDENTITY]/[FIXTURE VALUES] Valley Journal — Field Notes (`COL-1`)

Acquisition lần đầu tự record family, không consume item:

- `Crop`;
- `Forage`;
- `Fish`;
- `Mine Material`.

Requirement thử: record bất kỳ **ba trong bốn** family. Reward: tại một seed restock, xem `Runner Bean Seed` và `Lemon Balm Seed`, chọn một; option còn lại quay lại ở restock/cycle sau.

`[UPDATED FIRST-LOOP TIMING]` Package §6.9 replaces “tại một seed restock” above with **New Day kế tiếp sau khi ghi đủ ba nhóm**. Reward gives one chosen Seed once, without Gold/AP; the unchosen profile's later return remains open.

The later `COL-N` relationship/source-response section is canonically named `Connections`. `COL-1` and `COL-N` remain internal paper IDs.

### 8.2. [HYPOTHESIS] Vì sao reward này có value lựa chọn

- Reward thay source/choice, không chỉ tăng Gold hoặc completion counter.
- `3-of-4` cho phép Farm + Forage + Fish, Farm + Forage + Mine hoặc route mix khác; Mine không thành requirement duy nhất của Collector.
- Runner Bean tăng exposure với long commitment; Lemon Balm mở Crop/Herb cross-link. Hai option không cùng chức năng.
- Choice không permanent và không ending; bỏ lỡ/không chọn chỉ trì hoãn access.
- Record không lấy item khỏi Sell/Gift/Keep, nên tension nằm ở acquisition route và seed choice. Conditional Process compatibility chỉ được xét nếu approved content sau này kích hoạt Processor.

Con số `3-of-4`, hai seed option và timing restock đều là fixture.

## 9. Target compatibility matrix

Ký hiệu: `Y` = target hợp lệ trong fixture; `C` = context-specific, preview phải nói rõ; `—` = không thuộc minimum test.

| Item family/state | Sell | Gift | Project | COL-1 record | Process | Keep |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Fresh Crop | Y | C | C | Y | Y | Y |
| Fresh Forage Berry | C | Y | — | Y | — | Y |
| Fresh Forage Herb | C | C | C | Y | Y | Y |
| Fresh Fish | Y | C | — | Y | Y | Y |
| Raw Wood/Stone/Ore | C | — | Y | Mine family only | — | Y |
| Processed Crop | Y | C | C | Không thay raw record | — | Y |
| Processed Fish | Y | C | — | Không thay raw record | — | Y |
| Processed Herb | Y | C | C | Không thay raw record | — | Y |

### 9.1. [HYPOTHESIS] Preview consequences

- `C` không nghĩa là random acceptance. Target hiện tại phải preview exact item/state accepted trước commit.
- Gift schedule phải công bố Person/context; registry không gán preference cho roster cuối.
- Project preview phải phân biệt `Raw Herb`, `Fresh Herb` và `Processed Herb` nếu state quan trọng.
- Collection UI phải nói record không consume; nếu collection khác consume sau này, đó là rule riêng.

## 10. Three-route vocabulary trace

### 10.1. [FIXTURE] Producer trace

```text
Turnip → Fresh Crop junction
  ├─ Sell/Keep để giữ liquidity
  ├─ PJ-M Water Trough → maintenance relief
  ├─ Runner Bean/extra crop commitment
  └─ PJ-B Harvest Bench → burst relief

Conditional only after approved activation:
  └─ PR-C → identity-preserving Preserve
```

Required shared inputs: Wood, Stone/Ore, Work và crop output. Person, Fishing và COL-1 không bắt buộc.

### 10.2. [FIXTURE] Connector trace

```text
Hedgerow / Woodlot
  ├─ optional Gift Person
  ├─ Direct Descent → deterministic Depth, no material
  ├─ Search Side Tunnel → exact current-band Ore/Stone source
  ├─ Extract exposed source → material, no Depth
  ├─ Rìa Rừng Area → visible Wild Herb world card when the New-Day appearance check succeeds
  │                          └─ Hand + 1 AP Collect → Gift / Record / Keep
  └─ PJ-X Footbridge → proposed Upper-Grove context (playable reward open)
```

First harvest không xuất hiện trong dependency. Person ability có thể đổi information/timing nhưng loop gốc vẫn chạy.

### 10.3. [FIXTURE] Collector trace

```text
Turnip record + Hedgerow/Grove record + River Catch record
  → COL-1 Field Notes
  → choose Runner Bean Seed or Lemon Balm Seed
  → pursue missing family / Blue Eel / chosen Seed profile
```

Farm có thể giữ nhỏ. Miss Blue Eel chỉ trì hoãn condition record/target; COL-1 vẫn có route `3-of-4` không phụ thuộc Rain.

### 10.4. [HYPOTHESIS] Coverage result

- Producer có maintenance và burst pressure riêng.
- Connector có progression không qua farming và không cần Person.
- Collector có acquisition/condition/choice loop không biến thành delivery Project.
- Wood/Stone/Ore có ít nhất hai target nên allocation có nghĩa.
- Crop, Fish và Herb đều giữ enough identity tags for conditional Processed compatibility without making Processor a current route.
- Registry đủ để chạy calendar sensitivity; chưa đủ để xếp hạng route hoặc price.

## 11. Minimality audit

| Nếu bỏ entry | Mất phép thử nào |
| --- | --- |
| Turnip | Không còn control crop/first-output deterministic |
| Runner Bean | Không còn long commitment × Season boundary |
| Lemon Balm | Không còn Crop/Herb cross-tag và seed-choice khác chức năng |
| Berry | Gift supply deterministic không qua harvest biến mất |
| Wood | Project common-source allocation biến mất |
| Stone | CP6-or-later persistent source và Project allocation cross-link yếu đi |
| Ore | Depth-vs-source tension và maintenance Project cross-link biến mất |
| Wild Herb | Opportunity source và Forage-Herb vs Crop-Herb comparison biến mất |
| Silver Minnow | Fishing control phụ thuộc Weather hiếm |
| Blue Eel | Weather miss/recovery không có content target cụ thể |
| Một trong ba Processing template | Route tương ứng không còn conversion compatibility test |
| PJ-M | Maintenance relief không có concrete target |
| PJ-B | Maintenance bị nhầm là đã giải quyết burst |
| PJ-X | Removes the owner-selected third structural comparison slot; because its playable reward is undefined, this row does **not** prove the bridge belongs in a functional minimum |
| COL-1 | Collection không có reward có giá trị lựa chọn |

### 11.1. [HYPOTHESIS] Những entry chưa được đưa vào

- Không thêm Animal, Coop hoặc Mushroom House: chưa cần cho calendar/economy dimensions hiện tại.
- Không thêm Lake/Sea Catch: River common + Rain condition đã đủ cho cadence test đầu.
- Không thêm rare currency, bait, fertilizer hoặc food buff: chúng tạo economy mới trước khi Gold/AP/storage nền được kiểm tra.
- Không thêm generic processed good hoặc universal Gift: chúng xóa identity tension.
- Không thêm Person roster/name/ability assignment: đó là bước Person kernel audit sau calendar/economy.
- Không thêm objective hub hoặc ending reward.

## 12. Handoff sang calendar sensitivity

### 12.1. [DIRECTION] Các trục bắt buộc

Vòng kế tiếp phải dùng đúng registry này và so tối thiểu:

- hai mức AP/day;
- hai Weather cadence có tỷ lệ/vị trí Rain khác nhau;
- hai Season lengths;
- Producer, Connector và Collector trên cùng world opportunity schedule.

### 12.2. [HYPOTHESIS] Metrics cần log

- farming routine AP và harvest/replant peak;
- AP không dùng được so với AP chủ động để dành;
- Rain investment windows và action nào thực sự chuyển vào đó;
- ngày Project/route bị trì hoãn vì source hay AP;
- Gift opportunities thấy, thực hiện, bỏ lỡ và recovery;
- Catch condition thấy, lấy, bỏ và lần recovery;
- Processor metrics chỉ log trong một explicit future arm có approved content kích hoạt nó; không thuộc core minimum trace;
- COL-1 completion timing, seed choice và opportunity cost;
- workload cliff, soft lock-in và số ngày phục hồi về planned route;
- mọi trường hợp Person hoặc random batch vô tình thành prerequisite.

### 12.3. [FIXTURE] Parameter slots chưa điền

Calendar sensitivity phải công bố riêng cho từng scenario:

```text
AP/day
Season length
Weather sequence hoặc cadence generation
Short/Medium/Long care requirement
Harvest/Plant/Water action scope
Catch resolution/cost
Gift schedule + accepted fixture item
Project material quantities + Work total
Processor load cost + completion timing + slot count (conditional arm only)
Seed restock timing
```

Không được lấy một giá trị cũ như `6 AP`, `cap 2`, `Catch 2 AP`, `checkpoint 3/6/9/12` hoặc `3G→5G` làm luật ngầm. Nếu dùng lại, nó phải là một arm được ghi rõ của sensitivity test.

## 13. Kết luận

### 13.1. [HYPOTHESIS] Kết quả của bước content-minimum

Registry nhỏ hiện có:

- ba crop profile;
- năm raw item/source ngoài crop/fish;
- hai Catch profile;
- ba identity-preserving Processing template;
- ba Project với reward shape khác nhau;
- một collection record reward có choice và recovery;
- một compatibility matrix chung cho Sell/Gift/Project/Collection/Process/Keep.

Bộ này đủ cụ thể để cùng một tên/item chạy qua ba route, nhưng cố ý chưa có price, AP/day, Season length hoặc Project quantity. Selected identity labels are canonical at paper level; their mechanics and values remain fixtures rather than a balance conclusion or runtime spec.

### 13.2. Chưa được kết luận

- Ba crop, hai Catch hoặc ba Project là số lượng Year 1.
- Turnip/Runner Bean/Lemon Balm are owner-selected canonical paper names; external clearance, localization and final production naming remain open.
- `3-of-4` là collection cadence cuối.
- Weather, Season hoặc Processing rule nào đã được cân bằng.
- Route nào mạnh hơn, nhanh hơn hoặc nên là default.
- Person nào thích item nào hoặc có ability nào.
