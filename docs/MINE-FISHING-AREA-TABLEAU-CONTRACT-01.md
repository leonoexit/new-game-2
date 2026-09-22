# Mine & Fishing area-tableau play contract 01

Ngày: 2026-09-22.

Mục đích: định hình người chơi **làm gì** khi focus Mine và các Area liên quan tới Fishing trong [scrollable area-tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md). Tài liệu hợp nhất evidence từ [Fishing resolution sensitivity 02](FISHING-RESOLUTION-SENSITIVITY-02.md) và [Mine checkpoint simulation 02](MINE-CHECKPOINT-PAPER-SIMULATION-02.md); không chốt final AP, content count, reward value, tool tier hoặc art.

Paper artifact hiện hành: [Mine + Fishing square Area-tableau fixture v0.2](../paper-tests/mine-fishing-area-tableau-v0.2/README.md). [v0.1](../paper-tests/mine-fishing-area-tableau-v0.1/README.md) được giữ làm portrait rule-text audit trail.

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
- Root card chỉ mang art, name, 1–3 badge, short cost/progress và state.
- Full rule/preview/recovery nằm trong focus/detail panel rectangle hoặc resolution sheet.
- Area header/background không có card border và không phải target.
- River Record/mastery và Mine Depth/checkpoint dùng horizontal status strip khi không có verb riêng.

Shape contract đầy đủ nằm ở [on-table card shape decision 09](ON-TABLE-CARD-SHAPE-DECISION-09.md).

## 2. Fishing tableau

### 2.1. Root shape

Minimum River tableau:

```text
RIVER visual language / condition badge

[Today's Catch square] [active Person/context square]
[Fishing Record / mastery horizontal status strip]
```

Player Rod/Character state nằm trong hand/HUD; không lặp một Rod card trong từng Area.

Nếu River chỉ có một interaction context, không cần thêm `Fishing Spot` card ở giữa Area và Catch. `Today's Catch` là exact target. Chỉ tạo Fishing Spot card khi trong cùng Area có ít nhất hai spot với pool, rule, state hoặc unlock thật sự khác nhau.

### 2.2. Daily setup

1. Area đọc Season/Weather và unlock state.
2. Nó tạo một hoặc nhiều Catch opportunity hợp lệ.
3. Catch card cho thấy trước exact fish/identity, condition và total commit cost.
4. Không có hidden failure roll trong baseline.

Minimum fixture giữ:

- `River Minnow` — common River control;
- `Rain Eel` — Rain opportunity; bỏ lỡ thì chờ Rain/cycle sau, không khóa Fishing.

### 2.3. Player turn

```text
Focus River                           0 AP
Inspect Today's Catch                 0 AP
Play Character + Fishing Rod → Catch  atomic commitment
Resolve                               acquire exact Fresh Fish
                                      record first/condition catch
                                      remove/flip opportunity
```

`[HYPOTHESIS]` Paper baseline tiếp tục dùng một atomic `2 AP → exact Catch` commit vì four-cell sensitivity cho thấy global partial/persistent Catch làm yếu calendar choice và thêm bookkeeping. Strength cần giữ là **one informed commitment**; con số 2 AP vẫn là fixture.

Không có `Begin/Land` mặc định. Một named Long Catch sau này có thể có multi-day rule riêng nếu preview, recovery và provenance rõ.

### 2.4. Fishing progression

Fishing progression dùng discovery/knowledge, không delivery bundle:

- first catch tự ghi record, không consume item;
- catch cùng location dưới condition khác nhau có thể tăng mastery;
- reward nên đổi information/source choice, ví dụ preview hoặc chọn giữa opportunities;
- Fish item sau acquisition vẫn có thể Sell, Gift, Keep hoặc Process;
- Processing giữ location/condition provenance nhưng không retroactively tạo Fresh Catch record.

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

## 3. Mine tableau

### 3.1. Root shape

```text
MINE visual language
Depth 5 · current band: Baseline Tunnels  [horizontal status strip]

[Current Frontier square] [Working Seam square — if ready]
[Safe Tunnel square]      [Veiled Vein square]
[Latest Checkpoint — only while relevant]
```

`Mine Entrance` chỉ là card khi nó đang Locked/Collapsed và có unlock/repair action. Sau khi access ổn định, entrance trở thành identity/header hoặc anchor; player không phải play qua nó mỗi lần focus Mine.

Depth là persistent state trên `Current Frontier`, không phải khoảng cách scroll và không yêu cầu một card cho mỗi floor.

### 3.2. Player turn

```text
Focus Mine                         0 AP
Inspect Current Frontier/routes    0 AP
Choose one route                   informed choice
Play Character + Tool → Route      commit cost
Resolve required result            Depth +1 deterministic
Resolve optional route result      known common or previewed category
Refresh frontier/checkpoint state
```

Safe route luôn cho planning path; Person ability không là prerequisite. Veiled route có thể giấu exact optional result nhưng phải cho biết category/risk trước commit. Không route nào dùng hidden failure để chặn Depth baseline.

### 3.3. Checkpoint grammar

Checkpoint phải đổi cách chơi, không chỉ tăng payout tier:

| Checkpoint shape | Root-tableau consequence | Decision tạo ra |
| --- | --- | --- |
| Source unlock | thêm `Working Seam` khi ready | lấy Ore chắc chắn hay dùng AP để Descend |
| Rule band | thay Safe/Veiled bằng speed/yield routes | đi nhanh hay lấy material |
| Branch/context | hiện hai branch preview trước commit | chọn pool/context cho band kế |
| Cross-system connection | thêm context card phù hợp vào Mine hoặc Area liên quan | mở horizon mới, không phải ending |

Fixture hiện hành để test grammar:

- CP3: Working Seam, `Extract` lấy Ore nhưng không tăng Depth;
- CP6: `Slip Through` nhanh so với `Shore Up` chậm + yield;
- CP9: preview `Deep Vein` so với `Underground Flow`;
- CP12: cross-system connection chưa có content cuối.

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
| Main pressure | commit hôm nay hay bỏ opportunity | dùng AP cho Depth, yield hay source |
| Persistence | record/mastery; Catch rotates | Depth/checkpoints giữ lâu dài |
| Information | exact Catch/cost visible | Depth certain; optional reward có thể category-known |
| Failure baseline | miss waits for recurrence | no loss of Depth |
| Growth | pool knowledge/choice | rule/source/branch checkpoints |
| Root density | ít active Catch cards | frontier + 2–4 decision cards |

Nếu cả hai chỉ trở thành `spend AP → random item`, design fail.

## 5. Current paper fixture

v0.2 giữ play grammar của v0.1 nhưng chuyển root surface sang shape final: six square cards, River Record strip, Mine Depth strip, two-column density và rectangular detail panels. Numbers/names vẫn là fixture.

### 5.1. Fishing decision card

```text
RAIN EEL
Condition: Rain · River
Commit: 2 AP total [fixture]
Result: Fresh · Fish · River · Rain
Miss: returns on a later Rain/cycle
```

Compare với một ordinary day có River Minnow và một competing Person/Project action. Log whether player understands exact cost, recurrence và item provenance trước commit.

### 5.2. Mine decision tableau

Start at Depth 3 with Working Seam ready:

```text
[Extract Seam: known Ore, no Depth]
[Safe Tunnel: Depth +1 + known common]
[Veiled Vein: Depth +1 + category-known result]
```

Give 2–3 AP Mine budget and one outside opportunity. Log source-vs-depth choice, route comprehension and whether leaving Mine is understood to preserve state.

### 5.3. Minimum test questions

1. Participant có hiểu scroll/focus không tiêu AP và không phải travel không?
2. Participant có target Catch/frontier/route thay vì Area background không?
3. Fishing commit và Mine route cho biết đủ thông tin trước action không?
4. Participant có hiểu Catch có thể rotate nhưng Mine Depth vẫn giữ không?
5. Mine/Fishing có tạo hai kiểu planning khác nhau hay cùng đọc như resource vending machine?

## 6. Status

### [DECIDED]

- Scroll không phải movement/travel.
- Fishing/Mine được chơi trong abstract Area tableaus.
- Missing ordinary opportunity trì hoãn; không phá save.
- Mine Depth không reset chỉ vì Sleep/rời Area.
- On-table cards dùng square 1:1; detail panel rectangle không phải card.

### [DIRECTION]

- Fishing baseline là exact, face-up Catch opportunity với one informed atomic commit.
- Mine baseline là deterministic Depth với informed route choice và mixed checkpoints.
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
