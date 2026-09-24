# Person roster kernel audit 02 — target density, Heart supply và overlap

Ngày audit: 2026-09-21.

Trạng thái: paper audit tám ability kernel A/C/D/E/I/J/K/M bằng content, calendar và economy fixtures của thời điểm chạy. Đây không phải roster, Person identity, final wording hoặc balance approval. A/C/K boundaries remain reusable; request- and Processor-dependent target-density examples are historical after Processing/request removal and must not be read as active minimum-loop demand. Tên ability, target count, Heart cadence và giới hạn đều là fixture/hypothesis.

Superseding K note 2026-09-23: [Bram purpose audit 33](FIRST-PLAYABLE-BRAM-K-PURPOSE-AUDIT-33.md) shows that K's earlier odd-Progress waste-prevention example does not apply to owner-selected Q4 M/B at 4 Progress each. The user-decided conserved-output boundary remains; current V0 does not yet demonstrate a useful K activation. Do not promote this audit's K target-density estimate without that purpose gate.

Mira/Nell phase note 2026-09-23: [paper test 35](FIRST-PLAYABLE-MIRA-NELL-TARGET-GIFT-PHASE-TEST-35.md) narrows A/C target evidence. Active River Catch and M/B Mine sources already reveal their exact relevant result; Mira's useful hidden Grove result remains unspecified. Nell has a conditional Grove Hold Open case, but Wild Herb source phase can miss her first Gift. The density estimates below include historical request/Processor/Veiled examples and are not active V0 counts.

Grove contract note 2026-09-23: [paper recommendation 36](FIRST-PLAYABLE-GROVE-BATCH-CONTRACT-36.md) makes the one authored Wild Herb opportunity face-up before Collect. Under that arm C retains a conditional busy-day hold, while A has no verified Grove target. The A carry verdict below is historical and needs a new native V0 purpose test.

Nguồn dùng:

- [Content-minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md)
- [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md)
- [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md)
- [Person/Heart cadence paper simulation 01](PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md)

## 1. Phân loại trạng thái

### 1.1. [DECIDED] Ranh giới kế thừa

- Person là persistent collectible với activated ability.
- Gift đầu: action cost + item → thu nhận Person + Heart.
- Gift sau: action cost + item → Heart, không tạo bản sao.
- Heart thuộc riêng từng Person, tồn tại qua ngày và có cap riêng.
- Mỗi Person nhận tối đa một Gift/ngày.
- Ability tiêu Heart của chính Person; Person card vẫn được giữ.
- Lịch chỉ giới hạn gặp/Gift/refill; ability dùng bất kỳ ngày nào nếu đủ Heart/context.
- Không có party cap cưỡng ép; Person không là prerequisite duy nhất cho core progress.

### 1.2. [DIRECTION] Không gian kernel

- A: preview information trước commitment.
- C: giữ opportunity thêm một ngày.
- D: salvage value sau discard/cancel.
- E: limited alternative item use.
- I: prepare tomorrow.
- J: change Context use.
- K: split/focus cùng tổng output.
- M: optional constraint.

A/C/K đã có paper context trước; D/E/I/J/M chưa có shared-schedule evidence. Audit này dùng fixture mới để sàng lọc, không tự biến kernel thành roster.

### 1.3. [HYPOTHESIS] Heart baseline dùng để stress

- Gift `+1 Heart`.
- Ability `−1 Heart`.
- Cap 2.
- Heart vừa nhận dùng được cùng ngày.
- Không cooldown chung.
- Chỉ ability cụ thể nhận per-day/held-target limit nếu repeat-use test chứng minh cần.

Đây vẫn là cadence hypothesis, không phải [DECIDED].

### 1.4. [FIXTURE] Supply bands từ calendar

Supply được đọc **theo từng Person**, không cộng Heart giữa Person:

| Band | Heart refill trong 12 ngày | Heart refill trong 18 ngày | Route/source fixture |
| --- | ---: | ---: | --- |
| Low | 1 | 1–2 | Collector A5 bỏ Gift hoặc Producer không theo Person đó |
| Medium | 2 | 2–3 | Producer/Collector lấy phần lớn lịch một Person |
| High | 2 | 3 | Connector/A7 lấy mọi Gift của một Person |

Cap 2 nghĩa refill thứ ba chỉ có value nếu Heart đã được dùng. Appearance count không tự bằng usable ability count.

## 2. Audit method

### 2.1. [HYPOTHESIS] Năm cổng

Mỗi candidate qua năm cổng:

1. **Target density:** có đủ target trong route/calendar, nhưng không xuất hiện mọi action đến mức thành passive tax?
2. **Heart supply:** Low/Medium/High supply có tạo lựa chọn thay vì no-target hoặc luôn-on?
3. **Repeat ×2:** tích 2 Heart rồi dùng hai lần cùng ngày có phá scope/output/timing không?
4. **No-required-Person:** loop gốc và recovery còn chạy khi không sở hữu Person?
5. **Overlap:** ability có làm Tool/building/source/preview contract mất vai trò không?

### 2.2. [FIXTURE] Density scale

| Band | Meaning trong 12-day slice |
| --- | --- |
| `0` | Không có target trong shared fixture |
| `L` | 1–2 target |
| `M` | 3–5 target |
| `H` | 6+ target hoặc gần daily |

Density không phải số lần nên dùng. Một target có thể không đáng Heart trong context cụ thể.

## 3. Candidate registry

| Kernel | [FIXTURE] Ability candidate | Exact effect boundary | Initial status |
| --- | --- | --- | --- |
| A | Read Ahead | Preview exact optional result của một unresolved opportunity trước commit | Carry forward |
| C | Hold Open | Một expiring opportunity tồn tại qua thêm một Sleep | Carry forward với held-target limit |
| D | Salvage | Sau eligible cancel/discard, thu lại một listed consumable | Reserve |
| E | Borrowed Use | Một item dùng như **một printed alternative tag** cho một target | Conditional carry forward |
| I | Set Tomorrow | Prepare một named target cho ngày mai bằng effect riêng của target | Reserve; wording chưa đủ an toàn |
| J | Retune Context | Dùng một printed alternate mode của Context cho một action | Conditional carry forward |
| K | Divide/Focus | Phân phối cùng tổng Project Progress giữa một hoặc hai target | Carry forward |
| M | Constraint Offer | Nhận một printed constraint để mở alternate known result | Reserve |

Không kernel nào được gán cho Person cụ thể trong tài liệu này.

## 4. Kernel A — Read Ahead

### 4.1. [FIXTURE] Effect

`Spend 1 Heart → preview exact optional result của một Grove batch, Veiled Mine route hoặc tương đương trước commitment.`

Cost, required result, eligibility và recovery vốn thuộc normal preview contract vẫn phải hiện miễn phí. A chỉ lộ optional information được thiết kế là uncertain.

### 4.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | L | Optional Mine/source check trước Project material choice |
| Connector | H | Veiled Mine + Grove batch, nhưng Safe route luôn còn |
| Collector | M | Grove variety và optional Catch variant; Weather condition không bị giấu |

Medium/High supply không đủ để preview mọi Connector target, nên Heart chọn đúng uncertainty quan trọng.

### 4.3. Repeat ×2

- Preview hai **target khác nhau** cùng ngày: safe; information không tăng output trực tiếp.
- Preview cùng target hai lần: không có value; UI không cho trả Heart lần hai.
- Preview rồi cancel: không đổi state/item/AP ngoài Heart đã trả.
- Không reroll result bằng lần dùng thứ hai.

### 4.4. Invariant và overlap

- Safe/deterministic route tồn tại; A không gate Mine/Grove progress.
- A không được lấy information mà mọi player cần để biết cost/result bắt buộc.
- Không overlap Tool/building; nó thay information quality, không action capacity.

### 4.5. [HYPOTHESIS] Verdict

**Carry forward.** Không cần per-day cooldown; cần `one preview per unresolved target` và no-reroll rule.

## 5. Kernel C — Hold Open

### 5.1. [FIXTURE] Effect

`Spend 1 Heart → chọn một expiring Catch, Grove batch hoặc request; target đó tồn tại qua thêm một Sleep.`

Không giữ Person schedule, không kéo Season boundary và không duplicate item.

### 5.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | M | Fresh request/Person collision với burst; occasional Catch |
| Connector | M | Grove batch hoặc branch opportunity trong ngày Project/Mine |
| Collector | H | Rain Eel, common Catch, Fresh request và Grove batch |

C đặc biệt có value ở A5; A7 ít miss hơn nên Heart có thể được giữ cho rare collision.

### 5.3. Repeat ×2

Hai lần cùng ngày có thể giữ hai opportunity và xóa gần hết calendar pressure ở Collector. Tích qua nhiều ngày còn có nguy cơ biến held opportunities thành inventory thứ hai.

Sensitivity:

| Rule | Kết quả |
| --- | --- |
| Không limit | Hai Heart giữ hai deadline; high-supply Person gần như neutralize một busy day |
| Một held target **mỗi Person** | Dùng lần hai không hợp lệ tới khi target resolve/expire |
| Một held target toàn game | Person khác có thể bị khóa/overlap; quá rộng ở giai đoạn roster chưa biết |

### 5.4. Invariant và overlap

- Opportunity tự quay lại theo cycle; C chỉ đổi timing.
- Owned item storage không phải target C; tránh overlap inventory.
- Không giữ Project deadline bắt buộc nếu deadline đó gate core verb.

### 5.5. [HYPOTHESIS] Verdict

**Carry forward với specific limit:** mỗi Person C chỉ có một held target active; cùng target không extend lặp. Đây là kernel đầu tiên có evidence cho limit cụ thể, không phải cooldown chung.

## 6. Kernel D — Salvage

### 6.1. [FIXTURE] Effect

`Sau khi cancel/discard một action hoặc queue được đánh dấu Salvageable, spend 1 Heart → lấy lại một listed consumable.`

Không hoàn AP, Heart, Gold fee, completed output hoặc toàn bộ bundle.

### 6.2. Target density

| Route | Density | Context hiện có |
| --- | --- | --- |
| Producer | L | Cancel Processor input hoặc Seed action nếu cancel rule tồn tại |
| Connector | 0–L | Veiled route hiện resolve ngay; ít cancel state |
| Collector | L | Catch input/bait chưa tồn tại trong registry; queue cancel hiếm |

Shared fixture chưa có bait, failed action hoặc queue cancel đủ rõ. Nếu baseline cancellation cần refund vì UX safety, D không được bán lại safety đó như power.

### 6.3. Repeat ×2

- Hai cancel + salvage có thể tạo scouting loop nếu result lộ trước khi refund.
- Cần commit order: preview → commit → outcome; D chỉ ở explicit post-commit cancel state, không sau khi đã biết random reward nếu refund tạo reroll.
- Một consumable chỉ được salvage một lần.

### 6.4. Invariant và overlap

- Core loop không cần cancel/salvage để tiến.
- Overlap mạnh với baseline cancel/refund policy và storage.
- Không đủ target để justify roster slot hiện tại.

### 6.5. [HYPOTHESIS] Verdict

**Reserve.** Chỉ audit lại sau khi Fishing input hoặc Processor cancel grammar được quyết định. Không thêm bait/failure chỉ để tạo target cho D.

## 7. Kernel E — Borrowed Use

### 7.1. [FIXTURE] Effect

`Spend 1 Heart → một item được dùng như đúng một alternative tag được in trên target cho commit này.`

Ví dụ fixture: target in `Fresh Forage Herb OR (E: Fresh Crop Herb)`. E không đổi item vĩnh viễn và không thêm output.

### 7.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | L–M | Crop substitute ở request không-core |
| Connector | L | Wild Herb thiếu đúng ngày; optional request |
| Collector | M | Dewleaf/Wild Herb hoặc Fish subtype target |

Target phải in pair cụ thể; không có UI “mọi item biến thành mọi tag”.

### 7.3. Repeat ×2

- Hai substitute cho hai target tùy chọn: có thể chấp nhận nếu mỗi commit vẫn consume item + Heart.
- Hai substitute vào cùng Project bundle có thể bypass source branch hoàn toàn.
- Không cho E thỏa toàn bộ requirement của một Project; mỗi target có `E-eligible slots` tường minh, tối đa một slot/commit trong fixture.

### 7.4. Invariant và overlap

- Core target luôn có normal source/recovery.
- Không dùng E ở `PJ-M` Ore slot, Mine Depth, Seed access hoặc Rain Catch record; những identity đó định nghĩa branch.
- Overlap với recipe/tag system cao; nếu printed pairs dày, Person trở thành universal converter và làm Processor/source mất vai trò.

### 7.5. [HYPOTHESIS] Verdict

**Conditional carry forward.** Chỉ dùng trên optional target với printed pair và không hơn một E-slot/commit. Cần roster/content audit đếm số card phải in ngoại lệ trước khi duyệt.

## 8. Kernel I — Set Tomorrow

### 8.1. [FIXTURE] Candidate forms

Ba wording được thử:

1. `Giảm 1 AP cho action đầu ngày mai` — generic AP banking.
2. `Load Processor trước để output ready sớm` — overlap queue/building upgrade.
3. `Mark một named target; target-specific setup effect áp dụng ngày mai` — bounded nhưng mỗi target cần rule riêng.

### 8.2. Target density

- Form 1: H ở mọi route, vì AP luôn có target; quá generic.
- Form 2: M ở Producer/Collector, L ở Connector; biến Person thành Processor upgrade.
- Form 3: chưa có đủ printed target trong registry để đo.

### 8.3. Repeat ×2

- Form 1 bank hai AP, trực tiếp phá day-budget tension và cho A7 surplus chuyển ngày.
- Form 2 prepare hai queue dù Processor one-slot; hoặc phải thêm exception slot.
- Form 3 có thể an toàn nếu hai target khác nhau, nhưng effect không còn là một kernel thống nhất.

### 8.4. Invariant và overlap

- Generic AP banking đụng Sleep/end-day rule đang chưa chốt.
- Processor acceleration đụng specialization/queue progression.
- Target-specific setup có nguy cơ là collection các exception khó đọc.

### 8.5. [HYPOTHESIS] Verdict

**Reserve.** Không carry forward wording nào. Kernel I chỉ trở lại khi end-day/AP-leftover và một prepareable Context cụ thể đã được quyết định; không dùng Person để chốt thay rule nền.

## 9. Kernel J — Retune Context

### 9.1. [FIXTURE] Effect

`Spend 1 Heart → với một Context có hai printed modes, dùng non-current mode cho một action; preview exact cost/result trước commit.`

Context fixtures:

- Processor specialization `Crop` ↔ `Herb` cho một Load;
- Mine rule band `Slip Through` ↔ `Shore Up` khi cả hai đã reveal;
- Fresh/Processed request chỉ khi card in alternate mode.

J không mở mode chưa discovery và không đổi world Context vĩnh viễn.

### 9.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | M | Processor specialization, occasional Project mode |
| Connector | M | Mine band + Upper-Grove Context |
| Collector | M | Processor/request modes |

### 9.3. Repeat ×2

- Hai Context khác nhau: cost 2 Heart, no output increase ngoài access; có thể safe.
- Cùng Context hai lần có thể bypass specialization cả ngày.
- Fixture limit: `one retuned action per Context per day`; Person khác/Heart thứ hai phải chọn Context khác.

### 9.4. Invariant và overlap

- Normal mode luôn hoạt động; alternate mode không là prerequisite duy nhất.
- Nếu J dùng hàng ngày để xử lý mọi category, specialized Processor mất identity.
- Alternate mode cần discovery bằng non-Person path; J chỉ mượn mode, không unlock.

### 9.5. [HYPOTHESIS] Verdict

**Conditional carry forward.** Mạnh hơn I vì target/context explicit. Cần compare trực tiếp với building specialization; nếu một Person thay toàn bộ upgrade, giảm target density hoặc loại kernel.

## 10. Kernel K — Divide/Focus

### 10.1. [FIXTURE] Effect

`Spend 1 Heart trước Work → phân phối cùng tổng 2 Progress thành 2 vào một Project hoặc 1+1 vào hai Project hợp lệ.`

Action cost và total Progress không đổi. Con số 2 là fixture.

### 10.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | M | PJ-M/PJ-B overlap sau reveal; đôi lúc chỉ một target |
| Connector | L | PJ-X + optional infrastructure; Mine Depth không là Project |
| Collector | 0–L | Collection/Processing không bị Project hóa |

Uneven density là tín hiệu tốt: K không phải passive always-on và không ép mọi subsystem thành Project để tạo target.

### 10.3. Repeat ×2

- Hai Work action × K vẫn cho tổng 4 Progress, bằng focus baseline.
- Có thể phân phối 1+1 hai lần; không tạo progress mới.
- Waste prevention có value khi Project còn 1 progress, nhưng không hoàn AP/Gold/material.
- Không cần per-day limit theo evidence hiện có.

### 10.4. Invariant và overlap

- Work bình thường hoàn tất mọi Project.
- K không tăng Tool/building capacity hoặc action scope ngoài Progress distribution.
- Không thêm Project giả chỉ để K có target.

### 10.5. [HYPOTHESIS] Verdict

**Carry forward.** Đây là candidate an toàn nhất về output conservation; roster vẫn cần đủ non-Project kernel để không kéo graph về delivery/Work.

## 11. Kernel M — Constraint Offer

### 11.1. [FIXTURE] Effect

`Spend 1 Heart → chọn một optional constraint được in trên opportunity; nếu commit thỏa constraint, nhận alternate known result có cùng output budget class.`

Ví dụ fixture:

- Catch chỉ chấp nhận Fresh bait/source cụ thể để đổi Fish subtype, không tăng quantity;
- Mine route bỏ optional material để đổi Context marker, Depth vẫn +1;
- Processor khóa slot thêm một Sleep để đổi state/tag, không tăng sell value đồng thời.

### 11.2. Target density

| Route | Density | Context |
| --- | --- | --- |
| Producer | L | Specialized conversion/Project branch |
| Connector | L–M | Mine branch/context |
| Collector | M | Catch/Processing subtype |

### 11.3. Repeat ×2

- Hai constraint trên hai actions có thể safe nếu alternate result conservation rõ.
- Chồng hai constraint lên một action dễ tạo combinatorial preview và bonus stacking.
- Fixture chỉ cho một M-constraint/action; constraint/result phải biết trước.

### 11.4. Invariant và overlap

- Base action luôn tồn tại.
- Overlap mạnh với Mine branch, Fishing condition và recipe specialization; có nguy cơ những subsystem chỉ “đặc biệt” khi có Person.
- `Cùng output budget class` chưa có metric đủ rõ ngoài Gold, tag và timing; không thể chứng minh non-dominance toàn diện.

### 11.5. [HYPOTHESIS] Verdict

**Reserve.** Kernel conceptually distinct nhưng content-authoring/preview burden cao. Chỉ quay lại sau khi một subsystem có printed constraint tự thân; Person không được là nguồn duy nhất của grammar này.

## 12. Cross-kernel matrix

| Kernel | Density | ×2 safety | No-required pass | Main overlap risk | Status |
| --- | --- | --- | --- | --- | --- |
| A | L–H theo route | Pass, no reroll | Pass qua Safe route | Required preview info | Carry |
| C | M–H | Fail nếu giữ 2 target | Pass qua recurrence | Storage/deadline erasure | Carry + one-held limit |
| D | 0–L | Exploit nếu refund sau reveal | Pass | Baseline cancel/refund | Reserve |
| E | L–M | Conditional | Conditional | Tag/source/Processor bypass | Conditional carry |
| I | M–H | Fail ở generic forms | Chưa rõ | AP banking/queue upgrade | Reserve |
| J | M | Conditional | Pass nếu normal mode đủ | Building specialization | Conditional carry |
| K | 0–M | Pass, total conserved | Pass | Project overpopulation | Carry |
| M | L–M | Conditional | Pass nếu base action đủ | Native branch/condition grammar | Reserve |

## 13. Heart supply × target density

### 13.1. [HYPOTHESIS] Low supply

Với 1 Heart/12 ngày:

- A/C/J có meaningful “save for the right context” decision.
- K có thể không thấy hai Project cùng lúc; Heart giữ qua ngày nên không mất.
- D/I/M dễ không có target trong cả slice; roster slot cảm giác blank.

### 13.2. [HYPOTHESIS] Medium supply

Với 2 Heart/12 ngày:

- A dùng được ở hai uncertainties mà không cover toàn bộ Connector.
- C cần one-held limit; nếu không, hai busy-day misses đều bị xóa.
- E/J có thể bypass hai target; printed eligibility phải hiếm và rõ.
- K vẫn conservation-safe khi dùng hai lần.

### 13.3. [HYPOTHESIS] High supply

Với 3 refill/18 ngày và cap 2:

- Player phải dùng ít nhất một Heart trước refill thứ ba để tránh overflow; target-poor D/I/M có nguy cơ mất value.
- A/C/J có đủ target, nhưng C/J cần target limits để không trở thành always-on modifier.
- Không cần cooldown chung: vấn đề đến từ effect-specific stacking, không từ mọi ability.

### 13.4. Route consequence

- Producer có thể có Heart thấp hơn vì Gift đẩy relief; ability nên cứu một decision đủ lớn, không trở thành phí vận hành daily.
- Connector có Heart đều hơn và target A/J dày; cùng ability có value cao hơn route khác.
- Collector A5 miss Gift; C/E/J target lại dày. Đây là scarcity hợp lý nếu base route vẫn recover.

Một roster không nên định giá ability chỉ bằng target count trung bình toàn game; route-specific supply × density mới là pressure thật.

## 14. Roster-shape implications

### 14.1. [HYPOTHESIS] Five candidates đủ mạnh để tiếp tục

1. A — information.
2. C — timing, với one-held limit.
3. E — item flexibility, printed optional slots only.
4. J — Context flexibility, one retuned action/Context/day.
5. K — allocation, total output conserved.

Đây là five-kernel test set, không phải five-Person roster và không yêu cầu mỗi kernel chỉ xuất hiện một lần trong game cuối.

### 14.2. [HYPOTHESIS] Ba kernel giữ reserve

- D cần cancel/refund grammar thật.
- I cần end-day/prepareable Context thật và không được bank generic AP.
- M cần native optional-constraint grammar trước khi Person modifier tồn tại.

Giữ reserve tốt hơn viết thêm bait, deadline hoặc branch chỉ để ability có target.

### 14.3. [HYPOTHESIS] Overlap boundary

| System | Person được phép làm | Person không nên thay thế |
| --- | --- | --- |
| Information | Lộ optional uncertainty | Cost/result bắt buộc trong preview |
| Timing | Giữ một expiring target | Inventory/storage và mọi deadline |
| Item tags | Một printed alternative slot | Universal recipe/substitute |
| Context | Mượn một discovered mode | Unlock/specialization progression |
| Project | Đổi distribution | Tăng total progress hoặc bắt buộc để hoàn thành |

## 15. Audit verdict

### 15.1. [HYPOTHESIS] Kết luận mạnh nhất

1. **A và K pass repeat-use mà không cần cooldown chung.** A cần no-reroll; K giữ total output.
2. **C cần limit cụ thể:** một held target active per Person và không re-extend cùng target.
3. **E/J đủ context để tiếp tục nhưng rủi ro overlap cao.** Eligibility phải in trên optional target; normal route vẫn tồn tại.
4. **D/I/M chưa đủ evidence.** Thêm content chỉ để nuôi ability sẽ đảo dependency và làm Person thành design tax.
5. **Heart supply khác theo route.** Connector có refill/target dày hơn Producer/Collector A5; không dùng một global “uses per Season” để cân mọi ability.
6. **Cap 2/same-day vẫn chịu được audit này.** Vấn đề ×2 giải bằng target/effect limits, chưa có bằng chứng cần global cooldown.
7. **Five-kernel carry set có role khác nhau:** information, timing, item flexibility, Context flexibility và allocation.

### 15.2. [DIRECTION] Handoff

- Orientation/recognition test cần biểu diễn ít nhất A/C/E/J/K ở square tile + detail sheet để kiểm label burden; chưa thể coi placeholder recognition là validation.
- Year 1 graph v1 chỉ nên dùng A/C/K như evidence-backed nodes. E/J có thể là candidate branch; D/I/M ở reserve, không dùng làm dependency.
- Không gán Person identity, Gift preference hoặc Season band cho roster trước orientation/economy follow-up.

### 15.3. Chưa được kết luận

- Roster có năm hay tám Person.
- Ability name/text, Person identity hoặc Gift preference.
- Heart cap 2, +1/−1 hoặc same-day use là final.
- C/E/J limit là final UI wording.
- Mỗi kernel xuất hiện một lần.
- Person ability có Gold value cố định.
