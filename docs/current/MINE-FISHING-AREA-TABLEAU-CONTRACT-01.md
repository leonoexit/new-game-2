# Mine & Fishing area-tableau play contract 01

Ngày: 2026-09-22.

**Cập nhật 2026-09-25 · CG-17/18/19/20:** Mine hiện hành nằm ở [Mine contract 01](MINE-CURRENT-CONTRACT-01.md), Fishing ở [Fishing proposal §5](FISHING-LOOP-PROPOSAL-01.md#5-ba-điểm-câu-với-xác-suất-theo-trạng-thái--cg-18). Contract bên dưới là lịch sử presentation/fixture từ trước các quyết định này: `Search`, `Exposed Ore`, `Extract`, CP3, exact Catch và phí của chúng không còn là luật gameplay Mine/Fishing hiện hành. Giữ các đoạn đó làm evidence UI, không dùng làm danh sách target hoặc action mới.

Mục đích: định hình người chơi **làm gì** khi focus Mine và các Area liên quan tới Fishing trong [scrollable area-tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md). Tài liệu hợp nhất evidence từ [Fishing resolution sensitivity 02](../evidence/FISHING-RESOLUTION-SENSITIVITY-02.md) và [Mine checkpoint simulation 02](../evidence/MINE-CHECKPOINT-PAPER-SIMULATION-02.md); không chốt final AP, content count, reward value, tool tier hoặc art.

Latest interaction artifact: [Mine + Fishing target/cost fixture v0.2.4](../../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md). Nó kiểm hierarchy target/cost, **không phải danh sách nội dung V0 hiện tại**. [Package §6.9–6.11](YEAR-1-PAPER-DESIGN-PACKAGE-V1.md) giới hạn Mine vòng đầu ở Ore đầu CP3, chưa có paid Descent/repeated material reward tiếp theo. [v0.2](../../paper-tests/mine-fishing-area-tableau-v0.2/README.md) giữ first square-shape result và failed internal-pilot evidence; [v0.2.1](../../paper-tests/mine-fishing-area-tableau-v0.2.1/README.md)–[v0.2.3](../../paper-tests/mine-fishing-area-tableau-v0.2.3/README.md) là correction trail; [v0.1](../../paper-tests/mine-fishing-area-tableau-v0.1/README.md) là portrait rule-text audit trail.

## 1. Shared contract

### 1.1. Navigation không phải play

```text
Scroll tới Area       0 AP — chỉ focus giao diện
Inspect card          0 AP — đọc exact cost/result/condition
Commit vào card       gameplay action — cost hiện trước
Resolve               đổi state/item/progress
Scroll sang Area khác 0 AP — state cũ vẫn giữ
```

Không dùng độ dài scroll để tính travel. Không bắt player play một `Enter River` hoặc `Enter Mine` card chỉ để mở tableau đã unlock.

### 1.2. Card budget

Root tableau chỉ giữ card hiện đang tạo quyết định:

- persistent current state;
- action/route/source có thể chọn;
- active opportunity;
- newly reached checkpoint/branch cần resolve.

History, full pool, collection record và old checkpoints nằm trong inspect/overlay. Không trải mọi fish species hoặc Mine Depth thành permanent root cards.

### 1.3. Card/panel shape

- On-table Catch, Person, frontier, route và source cards dùng square `1:1`.
- Root card chỉ mang art, name, upper-corner signed AP cost, tối đa vài tag cần thiết, short consequence/trade-off và state.
- Action card phải để art truyền immediate verb + target. Opportunity card phải cho thấy target/context đã được phát hiện; Tool/Item stack vào mới cung cấp verb. Title giữ identity/context, tag giữ cost/state/requirement, dòng mô tả giữ consequence/trade-off và không lặp lại art như CTA.
- Pure status không nhận commit phải là horizontal strip/control, không dùng square-card silhouette. Trong current fixture, mọi square đều là target.
- Full rule/preview/recovery nằm trong focus/detail panel rectangle hoặc resolution sheet.
- Area header/background không có card border và không phải target.
- Mine Depth/checkpoint dùng horizontal status rail vì state này không thuộc riêng action card nào. Informed-owner v0.3.4 loại Fish Record khỏi River root vì nó không mang quyết định hữu ích; collection/mastery nếu quay lại phải ở UI khác và phải chứng minh decision value.

Shape contract đầy đủ nằm ở [on-table card shape decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md).

## 2. Fishing tableau

### 2.1. Root shape

Minimum River tableau:

```text
RIVER visual language / condition badge

[Exact Catch opportunity square]
```

Player Rod/Character state nằm trong hand/HUD; không lặp một Rod card trong từng Area.

Nếu River chỉ có một interaction context, không cần thêm `Fishing Spot` card ở giữa Area và Catch. `Today's Catch` là exact target. Chỉ tạo Fishing Spot card khi trong cùng Area có ít nhất hai spot với pool, rule, state hoặc unlock thật sự khác nhau.

### 2.2. Daily setup

1. Area đọc Season/Weather và unlock state.
2. Nó tự reveal một hoặc nhiều Catch opportunity hợp lệ; không bắt player click một generic spot chỉ để mở target đã biết.
3. Catch card cho thấy trước exact fish/identity, condition và total commit cost. Art phải cho thấy dấu hiệu/target trong nước để exact foreknowledge có cơ sở hình ảnh.
4. Không có hidden failure roll trong baseline.

Minimum fixture giữ:

- `Silver Minnow` — common River control;
- `Blue Eel` — Rain opportunity; bỏ lỡ thì chờ Rain/cycle sau, không khóa Fishing.

### 2.3. Player turn

```text
Focus River                           0 AP
Inspect Today's Catch                 0 AP
Play Character + Fishing Rod → Catch  atomic commitment
Resolve                               acquire exact Fresh Fish
                                      remove/flip opportunity
```

`[HYPOTHESIS]` Paper baseline tiếp tục dùng một atomic `2 AP → exact Catch` commit vì four-cell sensitivity cho thấy global partial/persistent Catch làm yếu calendar choice và thêm bookkeeping. Strength cần giữ là **one informed commitment**; con số 2 AP vẫn là fixture.

Không có `Begin/Land` mặc định. Một named Long Catch sau này có thể có multi-day rule riêng nếu preview, recovery và provenance rõ.

### 2.4. Fishing progression — future, outside River root

Current orientation root không có Fish Record/mastery rail. Nếu Fishing progression được mở lại, nó phải nằm trong collection/inspect/global UI và dùng discovery/knowledge, không delivery bundle:

- first catch tự ghi record, không consume item;
- catch cùng location dưới condition khác nhau có thể tăng mastery;
- reward nên đổi information/source choice, ví dụ preview hoặc chọn giữa opportunities;
- Fish item sau acquisition vẫn có thể Sell, Gift, Keep hoặc Process;
- Processing giữ location/condition provenance nhưng không retroactively tạo Fresh Catch record.

### 2.4.1. River target boundary after source audit

[No-River-buyer rerun 08](../evidence/FISH-SALE-PROCESSING-NO-RIVER-BUYER-RERUN-08.md) supersedes the earlier distributed Fresh request proposal. The minimum River root contains only the exact Catch target:

```text
[Exact Catch — Catch 2 AP]
```

After acquisition, a Fresh Fish may be placed in the source-backed `Shipping Bin`, kept, used by an independently valid future context, or Loaded into the Processor. There is no `Fresh Catch Request`, `Fish Buyer` or `Supply` target at River, and no Catch-vs-Supply comprehension test remains.

### 2.5. Khi nào thêm River/Lake/Coast

Một Fishing Area mới chỉ đáng tồn tại nếu thay ít nhất một decision dimension:

| Dimension | Ví dụ hợp lệ | Ví dụ chưa đủ |
| --- | --- | --- |
| Opportunity structure | chọn 1 trong 2 Catch đang face-up | cùng một Catch rule, chỉ đổi tên fish |
| Condition rhythm | tide/season window có recovery rõ | rarity thấp hơn nhưng không đổi planning |
| Information | pool biết trước khác mức | hidden roll chỉ để bất ngờ |
| Persistent state | mastery/unlock riêng tạo verb mới | counter số cá cao hơn |
| Cross-system use | Catch có Processing/Gift/collection tension riêng | payout chỉ lớn hơn |

Current minimum chỉ cần River. Hai expansion hypothesis để test sau, không phải content đã chốt:

- **Lake:** knowledge/choice tableau—hai Catch face-up, commit một; cái còn lại rotate theo rule đọc được.
- **Coast/Sea:** timing tableau—tide/season tạo window đã preview; missed window quay lại theo cycle.

Nếu Lake hoặc Coast chỉ thêm skin/pool mà không đổi decision, giữ chúng như content set trong cùng Fishing grammar thay vì tạo Area mới.

## 3. Mine tableau — lịch sử fixture trước CG-17

Các mục §3.1–3.5 dưới đây ghi cách trình bày và phép thử `Direct Descent / Search / Extract` cũ. [Mine contract 01](MINE-CURRENT-CONTRACT-01.md) thay chúng ở cấp gameplay; chỉ giữ các nguyên tắc UI không xung đột, như focus/inspect không tốn AP và Depth là status.

### 3.1. Root shape

```text
MINE visual language
Depth 5 · current band: Baseline Tunnels  [horizontal status strip]

[Exposed Ore square — if ready] [Direct Descent square]
[Search Side Tunnel square]
[Latest Checkpoint — only while relevant]
```

`Mine Entrance` chỉ là card khi nó đang Locked/Collapsed và có unlock/repair action. Sau khi access ổn định, entrance trở thành identity/header hoặc anchor; player không phải play qua nó mỗi lần focus Mine.

Depth là persistent state trên status strip, không phải khoảng cách scroll và không yêu cầu một card cho mỗi floor. `Mine State` square đã bị bỏ ở v0.2.4 vì square silhouette khiến informed participant coi nó là target.

### 3.2. Player turn

```text
Focus Mine                              0 AP
Inspect Mine status/actions             0 AP
Choose one action                       informed choice
Play Character (+ exact required item)  commit cost
Direct Descent                          Depth +1; no material
Search Side Tunnel                      Depth +0; reveal an Ore source
Extract Exposed Ore                     Depth +0; gain Ore; mark source spent
Refresh frontier/source/checkpoint state
```

`Direct Descent` luôn cho deterministic planning path; Person ability không là prerequisite. `Direct Descent` và `Search Side Tunnel` nhận Character như transition/context action. `Exposed Ore` nhận Character + Pickaxe. Search là discovery ở cùng tầng, không giả vờ tăng Depth; extraction chỉ xảy ra ở source đã lộ. Không action nào dùng hidden failure để chặn Depth baseline.

### 3.3. Checkpoint grammar

Checkpoint phải đổi cách chơi, không chỉ tăng payout tier:

| Checkpoint shape | Root-tableau consequence | Decision tạo ra |
| --- | --- | --- |
| Source unlock | thêm `Exposed Ore` khi ready | lấy Ore chắc chắn hay dùng AP để Descend/Search |
| Rule band | thay action set hoặc cost/consequence đã preview | progress, discovery hay extraction |
| Branch/context | hiện hai branch preview trước commit | chọn pool/context cho band kế |
| Cross-system connection | thêm context card phù hợp vào Mine hoặc Area liên quan | mở horizon mới, không phải ending |

Fixture hiện hành để test grammar:

- CP3: Exposed Ore, `Extract` lấy Ore nhưng không tăng Depth;
- CP6: `Slip Through` nhanh so với `Shore Up` chậm + yield;
- CP9: preview `Deep Vein` so với `Underground Flow`;
- CP12: cross-system connection chưa có content cuối.

Follow-up [Mine later-discovery/source audit 03](../evidence/MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md) giữ CP3 Ore fixture/art nguyên vẹn và test một future band-specific source arm: từ CP6, checkpoint preview có thể làm Stone available; Search vẫn reveal exact source và source target riêng mới Extract. Đây là paper direction để giải Stone-source gap, chưa authorize card/art hoặc đổi đè v0.2.4/v0.3.4.

[Stone refresh / Project timing 05](../evidence/MINE-STONE-REFRESH-PROJECT-TIMING-05.md) từng dùng source persistence để tính Project timing. Vì các Project đã bị bác bỏ và Stone chưa có công dụng trong vòng đầu, nhịp `ready → spent → ready after Sleep` ở đây chỉ còn là phép thử lịch sử, không phải reward cadence V0.

Tên, cadence và cost đều chưa phải luật.

### 3.4. State persistence và recovery

- Sleep không giảm/reset Depth.
- Rời Mine hoặc scroll sang Area khác không đổi Mine state.
- Fast route bỏ yield chứ không mất progress đã có.
- Source đã unlock không bị xóa vì chọn branch khác.
- Branch chưa chọn quay lại qua route/cycle đọc được; không permanent blind lock.
- Không checkpoint nào yêu cầu một Person cụ thể.
- Combat/hazard không nằm trong baseline; nếu thêm sau, nó phải tạo decision riêng và không xóa Depth/item lớn như punishment mặc định.

### 3.5. Mine–Fishing cross-link

`Underground Flow` là một candidate context kết nối hai grammar mà không tạo map route:

- unlock từ Mine checkpoint;
- xuất hiện như Catch context/card trong Mine tableau hoặc như một Fishing subcontext được index từ cả hai Area;
- dùng atomic Catch grammar và giữ subtype `Mine/Underground`;
- không biến River thành prerequisite cho Mine Depth;
- không yêu cầu player “đi” từ Mine tới River bằng scroll.

Candidate này chỉ hợp lệ nếu nó thêm collection/Processing/choice khác với River; nếu chỉ là River fish đổi màu, loại.

## 4. Mine và Fishing phải cảm thấy khác nhau

| Dimension | Fishing | Mine |
| --- | --- | --- |
| Core object | condition-bound Catch opportunity | persistent Current Frontier |
| Main pressure | commit hôm nay hay bỏ opportunity | dùng AP cho progress, discovery hay extraction |
| Persistence | Catch rotates; no River root status | Depth/checkpoints giữ lâu dài |
| Information | exact Catch/cost visible | Depth certain; optional reward có thể category-known |
| Failure baseline | miss waits for recurrence | no loss of Depth |
| Growth | pool knowledge/choice | rule/source/branch checkpoints |
| Root density | ít active Catch cards | frontier + 2–4 decision cards |

Nếu cả hai chỉ trở thành `spend AP → random item`, design fail.

## 5. Current paper fixture

v0.2 giữ play grammar của v0.1 nhưng chuyển root surface sang shape final. Internal informed pilot nhận ra card nhưng fail action comprehension vì noun/badge + schema panel. v0.2.1 và v0.2.2 cho thấy plain-language text vẫn không cứu được art mô tả sai thời điểm. v0.2.3 sửa action/target art. v0.2.4 loại square status target giả, đặt signed AP ở góc trên và thay generic Tool bằng Pickaxe cụ thể. [Orientation v0.3.4](../../paper-tests/orientation-area-tableau-v0.3.4/README.md) tiếp tục cleanup: bỏ River record rail và Eel tags, chuyển Weather lên global UI scope, giữ riêng Mine Depth cùng `DEPTH +1` trên Direct Descent. Numbers/names vẫn là fixture; fresh-player evidence không có, informed owner đã accept interaction hierarchy và global orientation revision.

### 5.1. Fishing decision card

```text
EEL SIGHTING
Requirement/condition tags: Rod · Rain
Commit: 2 AP total [fixture]
Result: Fresh · Fish · River · Rain
Miss: returns on a later Rain/cycle
```

`Eel Sighting` tự xuất hiện khi day/weather setup tạo opportunity. Eel còn sống phải nhìn thấy dưới mặt nước; đây chưa phải item. Không thêm một free-click `Ripples → reveal Eel` nếu reveal đó không tạo cost, choice hoặc uncertainty thật.

Compare với một ordinary day có Silver Minnow và một hành động Farm/Nell cạnh tranh AP. Log whether player understands exact cost, recurrence và item provenance trước commit. Đây là hướng cho phép thử sau; không coi Project cũ là action V0.

### 5.2. Mine decision tableau

Start at Depth 3 with Exposed Ore ready. Depth is a status strip; the three squares below are targets:

```text
[Exposed Ore: Depth +0; gain Ore; mark spent]
[Direct Descent: Depth +1; no material]
[Search Side Tunnel: Depth +0; reveal exact Ore source]
```

Give 2–3 AP Mine budget and one outside opportunity. Log progress-vs-discovery-vs-extraction choice, action-art comprehension and whether leaving Mine is understood to preserve state.

### 5.3. Minimum test questions

1. Participant có hiểu scroll/focus không tiêu AP và không phải travel không?
2. Participant có target Catch/frontier/route thay vì Area background không?
3. Fishing commit và Mine route cho biết đủ thông tin trước action không?
4. Participant có hiểu Catch có thể rotate nhưng Mine Depth vẫn giữ không?
5. Mine/Fishing có tạo hai kiểu planning khác nhau hay cùng đọc như resource vending machine?

## 6. Status của fixture lịch sử

Các nhãn `[DECIDED]`, `[DIRECTION]` và `[OPEN]` dưới đây phản ánh thời điểm fixture được viết, không phải Mine/Fishing CG-17/18/19 hiện hành.

### [DECIDED]

- Scroll không phải movement/travel.
- Fishing/Mine được chơi trong abstract Area tableaus.
- Missing ordinary opportunity trì hoãn; không phá save.
- Mine Depth không reset chỉ vì Sleep/rời Area.
- On-table targets dùng square 1:1; pure status dùng strip; detail panel rectangle không phải card.

### [DIRECTION]

- Fishing baseline là exact, face-up Catch opportunity với one informed atomic commit.
- Mine baseline là deterministic Depth through Direct Descent, plus separate discovery and extraction actions with mixed checkpoints.
- Entrance/Spot card chỉ tồn tại khi có verb/state riêng; không thêm gateway card thừa.
- River minimum đủ cho vòng đầu; Lake/Coast phải chứng minh decision dimension mới.

### [OPEN]

- Final AP/Energy costs.
- Rod/Tool progression và bait.
- Exact mastery reward.
- Số Fishing Areas và pool.
- Mine checkpoint cadence/bands/content.
- Combat/hazard.
- Mobile tableau density và transition treatment.
