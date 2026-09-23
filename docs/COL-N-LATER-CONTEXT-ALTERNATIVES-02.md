# COL-N later-context alternatives 02 — source renewal và Processor conflict

Ngày chạy: 2026-09-22.

Trạng thái: paper alternatives test tiếp nối [COL-N long-horizon paper test 01](COL-N-LONG-HORIZON-PAPER-TEST-01.md), [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md), [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md) và [Processing value sensitivity 02](PROCESSING-VALUE-SENSITIVITY-02.md). Test này so hai context ngoài Mine gần nhất: later restock/source return và Processor specialization. Nó không authorize runtime UI, card/art, final Season length, final restock cadence hoặc content canonical.

Mục tiêu là tìm đúng một later relationship có:

- cadence đến từ world state thật, không từ counter hoặc ngày chờ tùy ý;
- recovery rõ và backfill hợp lệ;
- không bắt player acquire/grow cả hai Seed;
- không biến Processor thành prerequisite duy nhất;
- timing muộn hơn chosen-seed output D7/D8 và tạo outcome khác nhau giữa S12/S18;
- một quyết định native có consequence, không chỉ một journal stamp.

## 1. Fixed contract

- `COL-1` vẫn complete D3 trong current calendar fixture; chosen Seed access ở D4.
- Chosen-seed output signal nằm khoảng D7/D8. Đây là fixture timing, không phải crop duration cuối.
- `N-REL` dùng Journal inspect/overlay; record không consume item và prior valid action được backfill.
- Native source/Processor tự trình bày compatibility, timing và recovery của chính nó. Global Season/Weather rail không tạo target hoặc recommendation.
- Unchosen Tallbean/Dewleaf option phải quay lại; recovery này không tự động là một collection discovery.
- Processor có một slot, Load 1 AP và complete sau Sleep trong current fixture. Idle là hợp lệ.
- `S12`/`S18` là sensitivity bounds, chưa phải Season length final.

## 2. Later restock/source arms

### 2.1. `RS-U` — unchosen Seed chỉ quay lại ordinary restock

```text
COL-1 choice
→ unchosen Seed appears again at a later ordinary restock
→ inspect/buy/grow it for a record
```

Recovery của `COL-1` cần giữ, nhưng nó không đủ làm later discovery:

- chỉ inspect option cũ tạo một journal stamp không có quyết định mới;
- bắt mua hoặc grow Seed còn lại biến recovery thành checklist hai Seed;
- delay phụ thuộc một restock index chưa có world-state meaning;
- không có lý do để prior chosen output đổi source behavior.

`RS-U` **reject** làm `COL-N` late slot. Unchosen option vẫn quay lại như recovery bình thường, nhưng collection không yêu cầu player dùng cả hai.

### 2.2. `RS-R` — seasonal source renewal sau chosen output

Paper arm này dùng conjunction của hai world states đã có:

1. Seed đã chọn ở `COL-1` đã tạo output;
2. Seed source đã đi qua một Season rollover và refresh profile.

Khi cả hai đúng, native Seed Restock giữ một persistent renewal choice:

```text
Continue current profile
→ feature the already-proven Tallbean/Dewleaf profile for this source cycle

Diversify profile
→ feature the other COL-1 profile for this source cycle
```

`Feature` chỉ đổi access timing/profile tại source; nó không tự grant Seed, không consume output và không yêu cầu player trồng cả hai. Option không chọn trở lại ở source refresh sau. Exact stock quantity, price, market AP và profile benefit vẫn dùng rule hiện hành hoặc để open; paper arm không thêm transaction tax.

Journal record là relationship `cultivation outcome → renewed source choice`, được ghi khi player chọn một profile tại native restock. Cả `continue` lẫn `diversify` đều hợp lệ. Vì vậy record không đồng nghĩa với “hãy lấy Seed còn thiếu”.

#### Cadence và recovery

- Nếu chosen output có trước rollover, renewal xuất hiện ở source refresh đầu Season kế.
- Nếu chosen output đến sau rollover, renewal xuất hiện khi source kế tiếp được inspect sau output; không bắt chờ thêm trọn một Season.
- Renewal choice persist cho tới khi player chọn; bỏ qua ngày đầu Season không làm miss.
- Sau lựa chọn, profile không chọn quay lại ở refresh sau; không có permanent blind choice.
- Journal reveal muộn vẫn backfill một renewal choice đã thực hiện.

Season chỉ là cause của source refresh. Global rail không highlight Commerce, không list Seed và không bảo player phải chọn.

#### Earliest timing

Với chosen output D7/D8:

| Season arm | Chosen output ready | First source renewal | `RS-R` record earliest |
| --- | --- | --- | --- |
| S12 | D7/D8 | rollover sau D12 | D13 |
| S18 | D7/D8 | rollover sau D18 | D19 |

S12/S18 thay đổi clock sáu ngày vì source cycle tự dời theo chính Season length. Exact labels `D13`/`D19` chỉ là cross-boundary notation của paper fixture.

#### Route và choice check

- Không cần Mine, Person, Project hoặc Processor.
- Farm không bị thêm một acquisition requirement: chosen-output page vốn đã là core relation của `N-REL`; source renewal chỉ phản hồi output đó ở một cadence muộn hơn.
- Hai profile phải giữ khác biệt Tallbean cash/long commitment và Dewleaf Crop/Herb flexibility; nếu later balance làm hai option tương đương, choice phải được test lại.
- Không mua/grow profile còn lại vẫn complete record; decision là source timing, không phải checklist completion.

`RS-R` pass meaning, recovery và route checks, nhưng **fail S12/S18 outcome differentiation**: nó luôn nằm ngay sau boundary đang được test. S12 lẫn S18 đều cho cùng kết quả “không complete trong first Season”; chỉ số ngày đổi theo moving boundary. Dùng nó làm clock sẽ đảm bảo collection cross-Season bằng định nghĩa thay vì chứng minh content cadence.

Vì vậy `RS-R` chỉ được carry như source-choice shape. Nó chưa phải later slot và không authorize một seasonal restock rule.

## 3. Processor specialization arms

### 3.1. `PS-N` — unlock sau N Load

```text
Load Processor N lần
→ choose Preserver/Dryer specialization
```

**Reject.** Duration đến từ repeat count; tối ưu là feed machine để mở unlock. Nó biến idle-by-choice thành punishment và làm collection tác động ngược lên Processor economy.

### 3.2. `PS-C` — specialization từ actual cross-identity slot conflict

Một conflict hợp lệ tồn tại khi:

- player đang giữ ít nhất hai eligible Fresh inputs thuộc identity khác nhau;
- one-slot Processor chỉ nhận một input trước Sleep;
- ít nhất một input có native competing use đang inspect được;
- specialization choice đổi future conversion availability, không chỉ cộng throughput.

Comparator dùng Processing 02:

```text
Preserver profile → ưu tiên Crop conversion identity
Dryer profile     → ưu tiên Fish/Herb conversion identity
```

Profile không chọn phải có recovery qua later reconfiguration/source; exact cost và availability chưa tồn tại. Journal chỉ record specialization khi player thực sự chọn profile, không record việc sở hữu hai item.

#### Meaning và timing

`PS-C` pass meaning tốt hơn `PS-N`: conflict là state thật và hai profile đổi future compatibility. Nhưng current content tạo conflict quá sớm:

- Processing 02 đã có two-Produce/one-slot collision ở D5;
- Fish/Herb/Crop đều có thể cùng eligible trước chosen-seed output;
- nếu cố yêu cầu một input phải là chosen-seed output, earliest chỉ dời tới D7/D8 và bỏ qua các conflict hợp lệ trước đó.

| Processor arm | Earliest meaningful signal | S12/S18 differentiation | Result |
| --- | --- | --- | --- |
| First valid cross-identity conflict | khoảng D5 hoặc sớm hơn tùy activation | Không | Meaning pass; timing fail |
| Conflict bắt buộc có chosen-seed identity | D7/D8 | Không | Piggyback bottleneck; không thêm horizon |
| N Load rồi specialize | Counter-dependent | Có thể kéo tùy ý | Grind; reject |

Recovery chưa đủ content-complete: current registry có profile hypothesis nhưng chưa có native reconfiguration source/cost. Không được invent một fixed-day technician hoặc Project gate chỉ để làm specialization muộn.

`PS-C` **carry as optional relationship content, fail late-slot timing**. Processor không được dùng làm required `COL-N` clock ở vòng này.

## 4. Cross-arm result

| Arm | Real choice | Earliest vs D7/D8 | S12/S18 | Recovery | Route independence | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| `RS-U` unchosen return | Không; option cũ hoặc checklist | Cadence chưa có nghĩa | Chưa chứng minh | Unchosen returns | Không thêm route | Reject late slot |
| `RS-R` seasonal renewal | Có; continue vs diversify | D13 / D19 | Không; cả hai đều sau boundary | Persistent choice + later refresh | Không Mine/Person/Processor | Meaning pass; clock fail |
| `PS-N` N Load | Counter giả | Tùy N | Artificial | Repeat Load | Processor required | Reject |
| `PS-C` actual conflict | Có | D5 hoặc D7/D8 | Không | Reconfiguration còn open | Processor required nếu bắt buộc | Optional only |

Không arm nào đủ cadence, recovery **và** S12/S18 outcome differentiation để rerun `N-REL`. `RS-R` là source-choice shape mạnh hơn `RS-U`; `PS-C` là Processor-choice shape mạnh hơn `PS-N`; cả hai vẫn fail late clock.

## 5. Gate check trước `N-REL` rerun

Counterfactual dưới đây kiểm xem `RS-R` có đủ điều kiện để trở thành later page hay không; nó **không** tích hợp page vào `N-REL`:

| Page | Record condition | Earliest signal |
| --- | --- | --- |
| Cultivation profile | Acquire output từ Seed đã chọn ở `COL-1` | D7/D8 |
| Condition contrast | Common Catch + condition Catch | D3/D5 |
| State change | Fresh identity → processed identity qua Load/Sleep | Trước hoặc quanh D7/D8 |
| Proposed source renewal | Chọn `continue` hoặc `diversify` tại first eligible seasonal Seed Restock | D13/S12; D19/S18 |

Backfill on:

- mọi prior valid relationship vẫn được credit;
- nếu Journal page/reward reveal sau source choice, player không chọn lại;
- counterfactual completion sẽ bị chặn bởi source renewal D13/D19, không bởi repeat action.

Backfill off vẫn reject như test 01; không dùng UI reveal để invalidate prior Catch, output, Process hoặc source choice.

### 5.1. Result matrix

| Calendar bound | Core pages earliest | Source renewal earliest | `N-REL` earliest | Trong first Season? |
| --- | --- | --- | --- | --- |
| S12 | D7/D8 | D13 | D13 | Không; đầu cycle kế |
| S18 | D7/D8 | D19 | D19 | Không; đầu cycle kế |

Kết quả **không phân biệt outcome S12/S18**: `N-REL` trở thành cross-cycle arc trong cả hai arm. Một late slot hợp lệ cần cadence độc lập với Season-length parameter, sao cho ít nhất một decisive cell miss trong S12 nhưng recover/complete trong S18 vì actual source/context availability.

### 5.2. Failure checks

- Không cần acquire/grow Tallbean và Dewleaf: pass.
- Không consume item để record: pass.
- Không repeat Load/Search/Catch chỉ vì Journal reveal: pass.
- Không dùng Mine/Processor/Person làm unique later prerequisite: pass.
- Không tạo global target/agenda: pass; choice nằm ở native Seed Restock.
- Không hoàn thành gần như ngay khi reveal: pass nếu Journal reveal trước first eligible source renewal.
- Không dùng fixed wait vô nghĩa: source change có world-state reason, nhưng timing vẫn fail vì gate bám vào moving boundary.
- Tạo outcome khác nhau giữa S12/S18: fail; cả hai đều complete sau first Season.

## 6. Verdict

1. `[REJECT]` Unchosen Seed reappearing by itself is recovery, not a new relationship; do not require inspect/buy/grow both Seed options.
2. `[CARRY SHAPE, FAIL CLOCK]` `RS-R` creates a valid native `continue vs diversify` source choice without requiring both Seed outputs, but D13/S12 and D19/S18 are the same after-boundary outcome. Do not integrate it into `N-REL` yet.
3. `[FAIL — TIMING]` A Season-relative refresh is a moving gate, not evidence that `N-REL` distinguishes S12 from S18.
4. `[CARRY, NOT LATE SLOT]` Actual Processor identity/slot conflict creates a valid specialization choice, but current conflict occurs D5–D8 and does not distinguish S12/S18. Keep it optional until native reconfiguration content exists.
5. `[REJECT]` Do not gate specialization behind `Load N`, a fixed-day technician or an unrelated Project merely to make it late.
6. `[OPEN]` Final Season length, exact restock cadence, market transaction rule, profile benefit and `N-REL` reward value remain unselected. A future candidate needs an independent recurring cadence or state transition that lands after D12 but within at least one S18 decisive cell, with persistent recovery and no forced route.

Không cần product-owner choice giữa restock và Processor ở bước này: chưa có hai content-complete arms và chưa arm nào pass timing. Không narrow AP/day/Season hoặc rerun final Project balance từ kết quả này; `COL-N` vẫn open.

Follow-up [independent source cadence audit 03](COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md) thay Season-relative refresh bằng source delivery lead time độc lập. `DL-6` đưa source response tới D13/D14 ở cả hai Season arms: S12 miss, S18 complete/recover. Đây là paper timing pass; exact cadence/source value vẫn open.
