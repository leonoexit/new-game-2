# Content-minimum registry 01 — shared vocabulary for sensitivity tests

Ngày lập: 2026-09-21.

Mục đích: chọn bộ content fixture nhỏ nhất đủ để Producer, Connector và Collector dùng chung một vocabulary trong các vòng calendar/economy sensitivity kế tiếp. Tài liệu này không phải danh sách content Year 1, không chốt balance, không cho phép code/prototype và không biến tên hay rule fixture thành luật.

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
3. Fresh/Raw so với Processed;
4. liquidity so với Gift/Project/collection/Process/Keep;
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

- Producer có một crop ngắn, một crop commitment dài hơn, maintenance relief, burst relief và conversion target;
- Connector có thể đi từ deterministic source tới Mine/Grove/world connection mà không cần first harvest;
- Collector có ít nhất ba family để record, một Weather-conditioned miss/recovery và một reward làm thay đổi lựa chọn;
- Gift/Heart có item supply nhưng không Person nào trở thành prerequisite;
- Processing nhận input từ Farm, Fishing và Grove mà không tạo một generic output;
- ít nhất một raw item phải thắng Processing trong một context hợp lý;
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
| CR-S | Shortroot | Short | `Fresh · Crop · Root` | Seed deterministic từ đầu/restock | First-output junction và crop dễ phục hồi |
| CR-L | Tallbean | Long | `Fresh · Crop · Bean` | Seed thấy trong ordinary restock | Commitment có nguy cơ chạm Season boundary |
| CR-H | Dewleaf | Medium | `Fresh · Crop · Herb` | Một option từ collection reward | Crop tạo Herb cross-link nhưng cạnh tranh seed choice |

### 3.1. [HYPOTHESIS] Vì sao cần ba crop profile

- `CR-S` là control: nếu route không vận hành với crop ngắn/deterministic thì lỗi không nằm ở content variety.
- `CR-L` tạo exposure với AP/day, Weather cadence và Season length mà không cần thêm rule đặc biệt.
- `CR-H` kiểm tra một item có thể giữ `Crop` identity đồng thời vào Herb Processing/target; nó không được tự động tốt hơn Wild Herb.

Hai crop chỉ đủ so short/long nhưng không thử cross-category. Bốn crop chưa thêm dimension cần thiết ở vòng này.

### 3.2. [FIXTURE] Seed và miss recovery

- Shortroot Seed luôn có một deterministic restock path trong active test season.
- Tallbean Seed có ordinary restock path; bỏ một restock chỉ trì hoãn tới restock sau.
- Dewleaf Seed là một option của reward `COL-1`; option không chọn quay lại ở restock/cycle sau.
- Crop chưa Mature ở Season boundary không được mặc định chết trong registry. Vòng calendar phải chạy ít nhất hai boundary policies như biến sensitivity nếu cần, không được ngầm chọn một policy ở đây.

## 4. Raw item và source registry

### 4.1. [FIXTURE] Raw items

| ID | Tên | Tags | Source shape | Primary tension |
| --- | --- | --- | --- | --- |
| I-BER | Hedgerow Berry | `Fresh · Forage · Berry` | Hedgerow deterministic | Gift-now so với Keep |
| I-WOD | Fallen Wood | `Raw · Material · Wood` | Woodlot deterministic | Project A/B/C cạnh tranh cùng source |
| I-STN | Plain Stone | `Raw · Material · Stone` | Safe Mine route biết trước | Descend/progress so với lấy material |
| I-ORE | Seam Ore | `Raw · Material · Ore` | Mine checkpoint source | Relief Project so với gateway Project |
| I-HRB | Wild Herb | `Fresh · Forage · Herb` | Grove batch opportunity | Gift/Process/record trước khi opportunity đổi |

Crop harvest và Catch ở §3/§5 cũng là raw item; bảng này chỉ chứa source ngoài Farm/Fishing.

### 4.2. [HYPOTHESIS] Source contract

| Source | Contract trong fixture | Không được suy ra |
| --- | --- | --- |
| Hedgerow | Berry có deterministic acquisition path | Berry là quà universal hoặc miễn AP |
| Woodlot | Wood có deterministic acquisition path | Project quantity/cost cuối |
| Safe Mine route | Stone outcome biết trước trong khi Depth vẫn tiến | Mỗi Descend luôn phải trả Stone |
| Working Seam/checkpoint source | Ore biết trước nhưng lấy Ore cạnh tranh với Depth | Mine checkpoint/cadence cuối |
| Grove batch | Category thấy trước; exact item/opportunity có thể đổi | Required gateway phụ thuộc một random Herb |

`I-BER` và `I-WOD` giữ early planning không hostage bởi draw. `I-HRB` tồn tại để thử opportunity timing; nếu Wild Herb là requirement duy nhất của unlock nền thì fixture fail.

## 5. Fishing output fixture

| ID | [FIXTURE] Tên | Condition | Tags | Miss/recovery | Phép thử |
| --- | --- | --- | --- | --- | --- |
| FI-C | River Minnow | Common River condition | `Fresh · Fish · River` | Condition quay lại thường xuyên | Control cho Catch/Sell/Process |
| FI-R | Rain Eel | Rain tại River | `Fresh · Fish · River · Rain` | Rain/cycle sau; không khóa Fishing | Weather opportunity, Gift/record/Process conflict |

### 5.1. [HYPOTHESIS] Vì sao chỉ hai Catch

- Một common Catch bảo đảm Fishing loop không chỉ tồn tại khi Weather hiếm.
- Một Rain Catch buộc calendar sensitivity đo missed opportunity và recovery.
- Thêm Lake/Sea Catch lúc này chủ yếu tăng content count; location expansion chưa cần để phân biệt hai Weather cadence.

Atomic hay persistent Catch vẫn mở. Registry chỉ cố định identity/condition để các resolution model có cùng input.

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
- Dewleaf Preserve/Prepared Dewleaf phải giữ `Crop` origin; Prepared Wild Herb phải giữ `Forage` origin.
- Processor idle là trạng thái hợp lệ; không tạo pity bonus chỉ vì player không Load.

## 7. Project fixture

Ba Project cùng dùng resource vocabulary đã có nhưng thay ba dimension khác nhau. Chúng không đại diện mọi unlock và không phải ba Project bắt buộc.

| ID | [FIXTURE] Tên | Requirement shape, chưa có quantity | Reward shape | Vai trò route |
| --- | --- | --- | --- | --- |
| PJ-M | Water Trough | Wood + Ore + Work | Tăng Water scope/capacity | Producer maintenance relief |
| PJ-B | Harvest Bench | Wood + Stone + Work | Tăng Harvest **hoặc** Plant burst scope | Producer burst relief; verb cuối vẫn mở |
| PJ-X | Upper-Grove Footbridge | Wood + Stone + Work | Mở một context/source route phụ ở Upper Grove | Connector/Collector cross-link, không là gateway nền duy nhất |

### 7.1. [HYPOTHESIS] Project distinctions

- `PJ-M` giảm recurring maintenance; nó không giải quyết harvest/replant peak.
- `PJ-B` giảm peak; nó không giảm daily Water.
- `PJ-X` mở context thay vì capacity. R0, Mine và common Grove loop vẫn có entry không qua Project này.
- Cả ba dùng overlapping materials để tạo allocation tension. Không tạo `Trough Part`, `Bench Part` hoặc `Bridge Token` chỉ phục vụ một recipe.

### 7.2. [FIXTURE] Cost slots để vòng sau gắn số

Mỗi Project có vector:

```text
material quantities + Work total + optional Gold sink + completion timing
```

Registry không điền số vì bước calendar phải đo AP pressure trước, rồi economy ledger v2 mới so Gold/material sinks. Nếu một schedule cần số để chạy, số đó phải nằm trong scenario table của schedule và mang nhãn `[FIXTURE]`; không được âm thầm quay lại thành thuộc tính cố định của Project.

## 8. Collection fixture

### 8.1. [FIXTURE] COL-1 — Field Notes

Acquisition lần đầu tự record family, không consume item:

- `Crop`;
- `Forage`;
- `Fish`;
- `Mine Material`.

Requirement thử: record bất kỳ **ba trong bốn** family. Reward: tại một seed restock, xem `Tallbean Seed` và `Dewleaf Seed`, chọn một; option còn lại quay lại ở restock/cycle sau.

### 8.2. [HYPOTHESIS] Vì sao reward này có value lựa chọn

- Reward thay source/choice, không chỉ tăng Gold hoặc completion counter.
- `3-of-4` cho phép Farm + Forage + Fish, Farm + Forage + Mine hoặc route mix khác; Mine không thành requirement duy nhất của Collector.
- Tallbean tăng exposure với long commitment; Dewleaf mở Crop/Herb cross-link. Hai option không cùng chức năng.
- Choice không permanent và không ending; bỏ lỡ/không chọn chỉ trì hoãn access.
- Record không lấy item khỏi Sell/Gift/Process, nên tension nằm ở acquisition route và seed choice. Economy ledger v2 vẫn phải kiểm tra liệu reward có đủ giá trị khi collection không consume item.

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
Shortroot → Fresh Crop junction
  ├─ Sell/Keep để giữ liquidity
  ├─ PJ-M Water Trough → maintenance relief
  ├─ Tallbean/extra crop commitment
  ├─ PJ-B Harvest Bench → burst relief
  └─ PR-C → identity-preserving Preserve
```

Required shared inputs: Wood, Stone/Ore, Work và crop output. Person, Fishing và COL-1 không bắt buộc.

### 10.2. [FIXTURE] Connector trace

```text
Hedgerow Berry / Woodlot
  ├─ optional Gift Person
  ├─ Safe Mine → Stone + deterministic Depth
  ├─ Working Seam → Ore vs more Depth
  └─ PJ-X Footbridge → Upper-Grove context
                         └─ Wild Herb → PR-H / Gift / Keep
```

First harvest không xuất hiện trong dependency. Person ability có thể đổi information/timing nhưng loop gốc vẫn chạy.

### 10.3. [FIXTURE] Collector trace

```text
Shortroot record + Hedgerow/Grove record + River Catch record
  → COL-1 Field Notes
  → choose Tallbean Seed or Dewleaf Seed
  → pursue missing family / Rain Eel / PR-F or PR-H
```

Farm có thể giữ nhỏ. Miss Rain Eel chỉ trì hoãn condition record/target; COL-1 vẫn có route `3-of-4` không phụ thuộc Rain.

### 10.4. [HYPOTHESIS] Coverage result

- Producer có maintenance và burst pressure riêng.
- Connector có progression không qua farming và không cần Person.
- Collector có acquisition/condition/choice loop không biến thành delivery Project.
- Wood/Stone/Ore có ít nhất hai target nên allocation có nghĩa.
- Crop, Fish và Herb đều có raw-vs-processed tension.
- Registry đủ để chạy calendar sensitivity; chưa đủ để xếp hạng route hoặc price.

## 11. Minimality audit

| Nếu bỏ entry | Mất phép thử nào |
| --- | --- |
| Shortroot | Không còn control crop/first-output deterministic |
| Tallbean | Không còn long commitment × Season boundary |
| Dewleaf | Không còn Crop/Herb cross-tag và seed-choice khác chức năng |
| Berry | Gift supply deterministic không qua harvest biến mất |
| Wood | Project common-source allocation biến mất |
| Stone | Safe Mine known outcome và Project material cross-link yếu đi |
| Ore | Depth-vs-source tension và maintenance Project cross-link biến mất |
| Wild Herb | Opportunity source và Forage-Herb vs Crop-Herb comparison biến mất |
| River Minnow | Fishing control phụ thuộc Weather hiếm |
| Rain Eel | Weather miss/recovery không có content target cụ thể |
| Một trong ba Processing template | Route tương ứng không còn conversion compatibility test |
| PJ-M | Maintenance relief không có concrete target |
| PJ-B | Maintenance bị nhầm là đã giải quyết burst |
| PJ-X | Connector/Collector thiếu optional context-opening Project để so objective shape |
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
- Processor loads, idle-by-choice, queue conflict và raw item thắng conversion;
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
Processor load cost + completion timing + slot count
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

Bộ này đủ cụ thể để cùng một tên/item chạy qua ba route, nhưng cố ý chưa có price, AP/day, Season length hoặc Project quantity. Vì vậy nó là vocabulary fixture cho sensitivity, không phải content spec hoặc balance conclusion.

### 13.2. Chưa được kết luận

- Ba crop, hai Catch hoặc ba Project là số lượng Year 1.
- Shortroot/Tallbean/Dewleaf hoặc tên nào khác sẽ vào game.
- `3-of-4` là collection cadence cuối.
- Weather, Season hoặc Processing rule nào đã được cân bằng.
- Route nào mạnh hơn, nhanh hơn hoặc nên là default.
- Person nào thích item nào hoặc có ability nào.
