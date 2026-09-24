# Economy ledger v2 paper sensitivity 01 — sinks, transaction AP, tags và choice value

Ngày chạy: 2026-09-21.

Trạng thái: **partially superseded** paper economy sensitivity tiếp nối [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md) và [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md). Buy/Sell `T0`, exact identity tags and collection-value work remain evidence. Every `+2G`, Processed premium, Pantry/request target and positive-Processing claim is historical after [post-removal audit 11](CORE-YEAR-1-POST-REMOVAL-CONSISTENCY-GAP-AUDIT-11.md). Every infrastructure-fee arm is also historical after owner-selected M/B no-fee and PJ-X `X0` in [permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md). Tài liệu không chốt price, AP, storage, perishability hoặc reward cuối.

Timing correction from [Seed/Sell price paper test 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md): ordinary Shipping Bin payout is at **end of day**. Any older “Gold hôm nay” row below is an end-of-day ledger, not permission to spend that sale Gold on a same-day Seed or fee. Fee/Processed-premium examples remain historical for the separate reasons above.

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Ranh giới kế thừa

- Gift đầu/sau đều tốn action cost + item hợp lệ; Gift không sinh Gold.
- Heart, Project progress và collection reward không mặc định quy đổi trực tiếp sang Gold.
- Person không là prerequisite duy nhất cho core progress.
- Save tiếp tục nhiều năm; bỏ lỡ không mặc định fail save.

### 1.2. [DIRECTION] Hướng đang dùng

- First output phải tạo cạnh tranh giữa Sell, Gift, collection, Process và Keep.
- Gold sink cần gắn với lựa chọn/capability, không chỉ xóa tiền theo timer.
- Processing có Load cost, delay, slot và state/tag riêng; processed output không là universal strict upgrade.
- Required material có deterministic source; uncertainty chỉ nằm ở optional variety/opportunity.
- Collection `COL-1` dùng record và seed choice, không consume item.
- Không tăng farming cost hoặc tạo filler chỉ để hút AP/Gold.

### 1.3. [HYPOTHESIS] Câu hỏi

1. Hai loại Gold sink nào đủ tạo liquidity tension mà không bắt mọi route farm tiền?
2. Buy/Sell 0 AP hay một batched transaction 1 AP giữ choice rõ hơn?
3. Uplift Processing mức nào còn cạnh tranh ở A5 và không thành default ở A7?
4. Exact tag acceptance có tạo raw target thật cho Crop/Fish/Herb không?
5. `COL-1` Seed Choice có value lựa chọn nếu không consume item?
6. Sell/Gift/Project/Process/Keep có route/context thắng riêng, hay một target dominate?

### 1.4. [FIXTURE] Bốn calendar cells dùng lại

| Cell | Vai trò trong ledger |
| --- | --- |
| `5-12-S` | AP/liquidity stress; Producer có soft lock-in |
| `5-18-D` | A5 có recovery và hoàn thành full Project path |
| `7-12-S` | High-capacity short Season; opportunity-safe |
| `7-18-D` | Kiểm Processing/transaction có thành default khi AP rộng |

Không rerun tám cell vì calendar test đã xác định bốn cell này giữ các failure/safety mode khác nhau.

## 2. Economy fixture

### 2.1. [FIXTURE] Price classes

| Item | Fresh/Raw Sell | Seed/acquisition Gold | Processed Sell | Ghi chú |
| --- | ---: | ---: | ---: | --- |
| Shortroot | 4G | 2G/Seed | 6G | Control crop |
| Tallbean | 6G | 3G/Seed | 8G | Long commitment |
| Dewleaf | 4G | 3G/Seed nếu market-accessible | 6G | Crop + Herb cross-tag |
| Hedgerow Berry | 2G | deterministic source action | Không có recipe trong minimum set | Gift supply |
| Wild Herb | 4G | opportunity source action | 6G | Fresh target cạnh tranh Processing |
| River Minnow | 4G | Catch action | 6G | Common Fish |
| Rain Eel | 6G | Weather Catch action | 8G | Condition value fixture |
| Fallen Wood | 2G | deterministic source action | — | Common Project material |
| Plain Stone | 2G | Safe Mine route | — | Progress + material |
| Seam Ore | 5G | optional checkpoint source | — | Relief allocation |

Mọi giá là sensitivity point. Chênh `processed = raw +2G` được giữ để so với test cũ, không phải giá đề xuất cuối.

### 2.2. [FIXTURE] Starting state và recurring sink

- Wallet đầu trace: 4G.
- Hai Shortroot đầu đã được Plant; first replant cần mua hai Seed, tổng 4G.
- Mỗi crop harvest trả một output.
- Seed là item riêng; Produce không tự biến thành Seed trong fixture.

Recurring sink là **Seed restock**. Nó có ba vai trò thử:

1. tạo Gold-now target ngay first harvest;
2. giữ expansion có future maintenance cost;
3. làm collection Seed Choice có avoided-cost cụ thể.

Starting wallet, price và seed model đều chưa chốt.

### 2.3. [FIXTURE] Strategic sinks

| Sink | Gold fee | Resource/Work vẫn cần | Capability |
| --- | ---: | --- | --- |
| `PJ-M Water Trough` fitting fee | 8G | Wood + Ore + Work | Maintenance relief |
| `PJ-B Harvest Bench` fitting fee | 10G | Wood + Stone + Work | Burst relief |
| `PJ-X Upper-Grove Footbridge` permit | 8G | Wood + Stone + Work | Optional context/source |

Fee không thay material/Work; nó tạo liquidity gate riêng. Ba fee cùng scale chỉ để trace dễ so, không nói mọi Project cần Gold hoặc permit.

### 2.4. [HYPOTHESIS] Hai sink shape cần giữ

- **Recurring/operational:** Seed restock. Bỏ sink này làm Sell-now khó có target sau khi farm đã mở.
- **Strategic/capability:** fitting/permit cho một số infrastructure Project. Bỏ sink này làm Gold chỉ quay vòng qua Seed.

Không thêm Processor fuel, daily tax hoặc decay fee ở vòng này. Chúng có thể “sửa” dominance bằng chi phí cưỡng ép mà không chứng minh thêm decision.

## 3. Buy/Sell AP sensitivity

### 3.1. [FIXTURE] Hai arm

| Arm | Rule | Quantity scope |
| --- | --- | --- |
| `T0` | Buy/Sell commit 0 AP | Exact quantity vẫn preview |
| `T1` | Một market commit 1 AP | Một commit có thể gồm nhiều stack và cả Buy + Sell đã preview |

Không test `1 AP/item`: rule đó làm presentation stack/quantity âm thầm đổi action economy và đi ngược action-instance hypothesis.

### 3.2. First-harvest transaction

Hai Shortroot Mature cùng ngày; wallet 4G; cần hai Seed 4G và muốn trả `PJ-M` fee 8G.

| Allocation | Gold hôm nay sau replant | Gold sau Sleep/ngày kế | AP ngoài Harvest/Plant | PJ-M fee timing |
| --- | ---: | ---: | ---: | --- |
| Sell 2 Fresh | `4 + 8 - 4 = 8G` | 8G | T0: 0; T1: 1 market | Hôm nay |
| Sell 1 + Process 1 | `4 + 4 - 4 = 4G` | 10G sau bán Preserve | T0: Load 1; T1: market 1 + Load 1 + future market 1 nếu không batch | Ngày kế |
| Sell 1 + Gift 1 | 4G | 4G + 1 Heart | T0: Gift 1; T1: market 1 + Gift 1 | Chờ Gold khác |
| Sell 1 + Keep 1 | 4G | 4G + Fresh item | T0: 0; T1: market 1 | Chờ Gold khác |

### 3.3. [HYPOTHESIS] Transaction result

- `T0` vẫn tạo liquidity choice vì item allocation và Project fee, dù market không tốn AP.
- `T1` làm fresh Sell 2 cạnh tranh thêm 1 AP đúng harvest/replant peak. Trong `5-12-S`, peak vốn vượt A5; market commit chắc chắn tràn hoặc đẩy action khác.
- Processing dưới `T1` trả market AP ít nhất hai ngày nếu output bán riêng. Batch sau có thể giảm cost nhưng tăng delay/storage.
- A7 hấp thụ T1 tốt hơn, nhưng dùng transaction AP để “sửa” A7 rộng sẽ làm A5 nặng hơn không cân xứng.
- Batched 1 AP đọc được hơn per-item AP, nhưng tạo incentive giữ hàng chỉ để amortize click/action; storage trở thành economy dù chưa thiết kế.

**Giả thuyết mạnh hơn cho vòng kế:** giữ `T0` làm standard Buy/Sell baseline. Nếu muốn commerce commitment, test một target/market order explicit 1 AP có reward/condition riêng, không đánh thuế mọi giao dịch. Chưa chốt.

## 4. Exact tag compatibility

### 4.1. [FIXTURE] State/tag contract

| Output | Tags |
| --- | --- |
| Shortroot | `Fresh · Crop · Root` |
| Shortroot Preserve | `Processed · Crop · Root` |
| Dewleaf | `Fresh · Crop · Herb` |
| Prepared Dewleaf | `Processed · Crop · Herb` |
| Wild Herb | `Fresh · Forage · Herb` |
| Prepared Wild Herb | `Processed · Forage · Herb` |
| River Minnow | `Fresh · Fish · River` |
| Dried River Minnow | `Processed · Fish · River` |
| Rain Eel | `Fresh · Fish · River · Rain` |
| Dried Rain Eel | `Processed · Fish · River · Rain` |

Processing thay state, không xóa subtype/origin. `Rain` vẫn là provenance của Dried Rain Eel nhưng không làm nó hợp lệ ở target yêu cầu `Fresh Rain Catch`.

### 4.2. [FIXTURE] Target acceptance

| Target | Accept | Reject/không thay thế |
| --- | --- | --- |
| Market | Fresh/Raw và Processed theo price table | — |
| Person P Gift window | `Fresh · Berry` | Processed Crop/Fish/Herb |
| Person Q Gift window | `Fresh · Herb` | Prepared Herb |
| Fresh Crop request fixture | `Fresh · Crop` | Preserve |
| Rain Catch record | `Fresh · Fish · Rain` lần đầu acquire | Dried item không retroactively tạo fresh catch |
| COL-1 family record | First raw/fresh family acquire | Processed copy không tạo family mới |
| PJ-M | Raw Wood + Raw Ore | Crop/Fish/processed substitute |
| PJ-B/PJ-X | Raw Wood + Raw Stone | Processed substitute |
| Processed pantry request fixture | `Processed · Crop` **hoặc** `Processed · Herb` theo card | Fresh không tự thay thế |

Fresh Crop request và Processed pantry request là target fixture để kiểm dominance; chúng chưa là content/Project mới trong registry.

### 4.3. [HYPOTHESIS] Compatibility result

- Wild Herb raw thắng Process khi Person Q được announce trước commitment hoặc đang hiện cùng ngày.
- Fresh Crop raw thắng Process khi liquidity/target hôm nay quan trọng.
- Processed pantry target làm Process thắng mà không cần tăng sell price.
- Rain Eel có thể record rồi mới Process vì record không consume; đây là synergy hợp lệ, không phải double-spend item. Gift/Project nếu consume vẫn cạnh tranh.
- Dewleaf và Wild Herb không trở thành cùng item: Crop/Forage origin còn ảnh hưởng collection/target.

Exact compatibility tạo choice tốt hơn một rule “processed luôn đắt hơn nên luôn tốt hơn”.

## 5. Collection reward value

### 5.1. [FIXTURE] COL-1 payout vector

Khi record ba trong bốn family, player chọn một:

| Option | Immediate value | Capability/timing value | Recovery |
| --- | --- | --- | --- |
| Tallbean Seed | Tránh 3G seed cost | Long crop/output profile sớm một restock | Dewleaf quay lại restock/cycle sau |
| Dewleaf Seed | Tránh 3G seed cost | Mở Crop + Herb cross-tag sớm một restock | Tallbean quay lại restock/cycle sau |

Seed reward không tốn market AP trong T0/T1 fixture; nó là direct reward delivery. Điều này cho T1 thêm 1 AP avoided value, nhưng AP không quy đổi thành Gold cố định.

### 5.2. [HYPOTHESIS] Vector value, không scalar Gold

Reward có ít nhất ba dimension:

```text
liquidity: 3G seed cost tránh được
timing: access sớm một restock/cycle
capability: Long Crop hoặc Crop+Herb target space
```

Không cộng ba dimension thành một số Gold. Route chọn khác nhau:

- Producer thiếu output/cash horizon có thể chọn Tallbean.
- Collector/Connector muốn Herb compatibility có thể chọn Dewleaf.
- A5 có thể ưu tiên avoided AP/Gold timing; A7 có thể ưu tiên tag/capability.

### 5.3. [HYPOTHESIS] Dominance check

Với price fixture, Tallbean có raw margin tốt hơn Dewleaf. Nếu không có Fresh Herb/Prepared Herb target, Tallbean dominate Dewleaf. Vì vậy Dewleaf option chỉ hợp lệ khi ít nhất một Herb target nằm trong actionable/recoverable horizon và được preview trước choice.

Ngược lại, nếu Dewleaf thỏa mọi Herb target và bán/Process ngang Tallbean, Dewleaf có thể dominate. Giữ:

- Tallbean: cash/long-commit identity;
- Dewleaf: tag flexibility nhưng lower immediate margin;
- unchosen option quay lại, tránh permanent blind trap.

`COL-1` có decision value, nhưng reward D3 trong calendar fixture vẫn quá sớm để đại diện toàn bộ collection progression.

## 6. Item allocation ledgers

### 6.1. [FIXTURE] Shortroot first output

| Target | Immediate return | Delayed/option return | Khi thắng |
| --- | --- | --- | --- |
| Sell | 4G now | — | Seed/PJ-M liquidity |
| Gift | 1 Heart | Ability target sau | Heart effect đáng hơn Gold timing |
| Collection | Auto record, không consume | COL-1 progress | Luôn xảy ra lần đầu; không quyết định allocation |
| Process | 6G after Sleep | Processed target | AP/slot rảnh hoặc pantry target |
| Keep | Giữ Fresh option | Future Fresh target | Chỉ khi target/uncertainty/storage cho option value |

Trong fixture hiện tại, Keep không có target biết trước ngoài flexibility; nó yếu và có thể bị Sell dominate. Đây là open risk cần storage/forecast/requests, không phải lý do gán bonus vô cớ cho Keep.

### 6.2. [FIXTURE] Wild Herb

| Target | Return | Timing consequence |
| --- | --- | --- |
| Sell Fresh | 4G now | Bỏ Gift/Prepared target |
| Gift Person Q | 1 Heart | Mất 4G/6G option; giữ ability resource |
| Process | Prepared Herb 6G hoặc processed target sau Sleep | Miss Fresh Q nếu Load trước Gift |
| Keep | Fresh Q/Raw request sau | Storage/perishability còn mở |

Wild Herb pass non-dominance trong shared schedule: Connector giữ raw cho Q; A7/no-target case có thể Process; liquidity case Sell.

### 6.3. [FIXTURE] River Minnow và Rain Eel

| Target | Common Fish | Rain Fish |
| --- | --- | --- |
| Sell Fresh | 4G now | 6G now |
| Record | Fish family; không consume | Fresh Rain record; không consume |
| Gift | Chỉ khi exact Person context accept | Chỉ khi exact Person context accept |
| Process | +2G after Sleep/slot | +2G after Sleep/slot; mất Fresh state |
| Keep | Future Fresh target | Weather provenance option |

Condition value nằm một phần ở timing/record, không chỉ +2G. Nếu Rain Eel chỉ là Minnow giá cao hơn, Weather content trở thành payout roll.

### 6.4. [FIXTURE] Wood/Stone/Ore

| Target | Sell | Project | Keep |
| --- | --- | --- | --- |
| Wood | 2G | M/B/X shared bottleneck | Giữ route flexibility |
| Stone | 2G | B/X | Giữ branch choice |
| Ore | 5G | M relief | Liquidity option vs maintenance relief |

Không Process construction material trong minimum set. Ore có Sell value cao nhất để source-vs-relief là choice thật; price chưa chốt.

## 7. Route ledger across decisive cells

### 7.1. [HYPOTHESIS] Producer

| Cell | T0 behavior | T1 pressure | Dominance signal |
| --- | --- | --- | --- |
| 5-12-S | Sell Fresh để replant/PJ-M; Process rất khó fit | Market AP làm burst/Expansion trễ thêm | Liquidity thắng uplift |
| 5-18-D | Có Rain room để Load sau khi fee trả | Batch sell hợp lý nhưng second market commit vẫn đắt | Sell và Process cùng có window |
| 7-12-S | Có AP Load hầu hết output sau target | T1 fit nhưng ít tạo choice | Process dễ thành default nếu không có raw request |
| 7-18-D | Gold sinks trả sớm; surplus lớn | Batching chỉ là bookkeeping | Uplift/default warning mạnh nhất |

### 7.2. [HYPOTHESIS] Connector

| Resource | Choice |
| --- | --- |
| Wood/Stone | Sell tạo liquidity nhưng trì hoãn PJ-X |
| Ore | Sell 5G hoặc dành PJ-M cross-route; không gate PJ-X |
| Wild Herb | Gift Q thắng Process khi Fresh target active |
| Gold | PJ-X fee là optional context sink; route Mine cơ bản vẫn không bị khóa |

Connector không cần farm Gold. Nó có thể bán Mine/resource output, nhưng required base route không đòi permit `PJ-X` để tồn tại.

### 7.3. [HYPOTHESIS] Collector

| Cell | Behavior |
| --- | --- |
| A5 | Seed reward 3G/market avoidance đáng kể; Fresh/Gift target thường thắng Load vì AP collision |
| A7 | Reward capability quan trọng hơn 3G; Process output không target dễ thành default |
| S12 | Chọn Tallbean có boundary risk; Dewleaf linh hoạt hơn nếu Herb target hiện |
| S18 | Cả hai seed có time hoàn vốn; choice dựa route/tag hơn liquidity |

Collection record không consume nên không trực tiếp cạnh tranh item sau acquisition. Reward phải mang choice/timing; nếu chỉ 3G free Seed, nó là cash rebate mỏng.

## 8. Dominance audit

### 8.1. [HYPOTHESIS] Sell

- Thắng khi Gold-now mở Seed hoặc relief trong cùng ngày.
- Không dominate khi Project material, Gift target hoặc processed target có horizon rõ.
- T0 không làm Sell miễn phí về economy: item vẫn bị consume và mất option.

### 8.2. [HYPOTHESIS] Gift

- Thắng nếu Heart có target/effect đủ giá trị; calendar đã chứng minh action/item cost có thể đẩy progression.
- Hiện chưa định giá net vì Person kernel audit chưa chạy.
- Không được “cân” bằng cách gán Gold-equivalent cố định cho Heart.

### 8.3. [HYPOTHESIS] Project

- Material Project thắng Sell khi capability relief/context cứu AP/opportunity tương lai.
- Fee + material + Work có nguy cơ triple gate. Nếu A5 route không thể trả fee mà không bán chính material Project cần, giảm/loại một layer trước khi tăng payout.
- Không phải mọi gateway cần Gold fee.

### 8.4. [HYPOTHESIS] Process

- +2G/1 AP/Sleep/one slot cạnh tranh ở A5 nhưng default ở A7 khi không có raw target.
- Tăng Load cost lên 2 AP sẽ làm A5 gần như bỏ system nhưng không sửa identity ở A7.
- Fix mạnh hơn là exact raw/processed target, strategic slot use và liquidity, không chỉ nerf số.

### 8.5. [HYPOTHESIS] Keep

- Keep cần future known/forecastable target, storage option value hoặc price/condition timing.
- Nếu inventory vô hạn, không perish và mọi target không forecast, Keep có option value mơ hồ nhưng không tạo decision đọc được.
- Storage/perishability chưa được thêm; ledger chỉ đánh dấu Keep là yếu trong current fixture.

## 9. Economy verdict

### 9.1. [HYPOTHESIS] Kết luận mạnh nhất

1. **Seed restock + selected infrastructure fee đủ tạo hai Gold sink shape cho vòng test.** Chưa cần daily tax hoặc Processor fuel.
2. **[HISTORICAL CLAIM SUPERSEDED]** This row originally credited Fresh Sell with “same-day liquidity” for replant + `PJ-M`. Under the current Shipping Bin contract, Fresh sale Gold arrives at day end and can support **next-day** Seed renewal/profile access only; same-day replant needs pre-existing Gold or Seed. `PJ-M` has no Gold fee under Q4/G0. The older Process/fee comparison remains a historical ledger arm, not an active V0 reason to Sell.
3. **Standard Buy/Sell 0 AP là baseline mạnh hơn cho vòng kế.** Batched 1 AP làm A5 peak nặng hơn và tạo batching/storage incentive ngoài scope; per-item AP bị loại khỏi test.
4. **+2G Processing vẫn quá dễ thành default ở A7 nếu output không có raw target.** Exact compatibility sửa đúng nguyên nhân hơn tăng Load cost.
5. **Raw Herb target chứng minh Processor idle có thể là lựa chọn đúng.** Crop/Fish cần tương đương: Fresh request, condition record hoặc liquidity.
6. **COL-1 reward có value vector thật:** 3G avoided cost + earlier access + distinct capability. Không quy đổi toàn bộ thành Gold.
7. **Tallbean/Dewleaf choice chỉ hợp lệ khi actual Herb context/compatibility đã tồn tại và có thể inspect.** Không tạo future-target agenda để cứu choice; nếu Herb context không có, Tallbean dominate theo price fixture.
8. **Keep đang yếu.** Cần forecast/request/storage sensitivity sau này; không giả định perishability để ép bán.

### 9.2. [DIRECTION] Handoff sang Person roster kernel audit

Person audit nên dùng economy contexts cụ thể:

- A: preview exact batch/Mine result trước khi quyết định item/AP;
- C: giữ Rain Catch, Fresh request hoặc Wild Herb opportunity thêm một ngày;
- D: salvage một phần Seed/bait/input sau cancel nhưng không hoàn Gold fee;
- E: cho một item có limited alternative target mà không biến universal substitute;
- I: prepare market/Processor/Project action ngày mai mà không bank generic AP;
- J: đổi Context use, ví dụ Fresh request hoặc Processor recipe, không đổi mọi item;
- K: split/focus Project Work cùng tổng progress;
- M: optional constraint đổi solution/compatibility, không chỉ thêm payout.

Audit phải so A5 và A7 target density, Heart supply theo route, use hai lần/ngày và no-required-Person invariant.

### 9.3. Chưa được kết luận

- Mọi price, wallet, Seed cost hoặc Project fee.
- Buy/Sell chắc chắn 0 AP ở game cuối.
- Gold fee áp dụng cho mọi Project.
- +2G là uplift cuối.
- Storage vô hạn, inventory cap hoặc perishability.
- Fresh/processed request là content cuối.
- `COL-1` grant một free Seed hoặc xuất hiện D3.
- Heart/ability đáng bao nhiêu Gold.

Follow-up [Raw-target / Processing A6–S18 rerun 05](RAW-TARGET-PROCESSING-A6-S18-RERUN-05.md) dùng owner-selected `Q4` trên A6/S18. Bram Fresh Shortroot Gift passes Produce raw-target need; Fish record-only fails vì không consume. Rerun rejects universal Processed `+2G/+1G` under `S∞` and carries target-local value with generic Fresh/Processed market parity as the next paper baseline.
