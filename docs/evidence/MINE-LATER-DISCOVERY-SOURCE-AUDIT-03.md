# Mine later-discovery/source audit 03 — band availability, Stone và COL-N

Ngày chạy: 2026-09-22.

Trạng thái: paper systems audit tiếp nối [Mine/Fishing area-tableau contract 01](../current/MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md), [Calendar/Project completion rerun 02](CALENDAR-PROJECT-COMPLETION-RERUN-02.md) và [COL-N long-horizon paper test 01](COL-N-LONG-HORIZON-PAPER-TEST-01.md). [Stardew rules](<../../stardew rules.pdf>) và text extraction do owner cung cấp chỉ được dùng làm reference pattern; không copy dice, combat, map, multiplayer action hoặc win condition sang project này.

Superseding note 2026-09-23: Stone/source conclusions remain active; the PJ-X permit comparator is historical after owner-selected X0 no-fee in [permit audit 15](PJ-X-PERMIT-BOUNDARY-AUDIT-15.md).

Audit hỏi hai câu:

1. Stone có native source nào mà không phục hồi `Direct Descent → Stone`?
2. Mine checkpoint/context có thể cung cấp later recoverable discovery cho `COL-N` mà không biến Mine thành prerequisite duy nhất không?

Không tạo runtime, card art, final content hoặc exact Year 1 schedule.

## 1. Reference pattern được phép mang sang

Trong Stardew board-game rules:

- Mine Level giữ persistent depth/band identity và nêu resource nào available;
- Map Card giữ current encounter/action surface;
- khi descend, level và current map state có thể đổi;
- Stone, Ore, Geode, Staircase, Monster và Event là các result class khác nhau;
- Mine output còn nối ra Forge/Museum/Building thay vì chỉ tăng một Mine counter.

Pattern hữu ích cho project này:

> Persistent Depth có thể chọn **availability set** của source/context hiện tại; root tableau chỉ cần current actionable targets, không cần một card cho mỗi floor.

Không carry:

- random dice outcome hoặc hidden failure;
- combat/monster tax;
- dùng Stone như alternate payment để Descend;
- fixed 12-level content scale;
- Geode/Museum letter-slot collection;
- multiplayer scaling, Community Center hoặc deadline win condition.

Reference vì vậy củng cố mixed checkpoint grammar đã có, không thay nó bằng Stardew Mine.

## 2. Fixed Mine contract

- Focus/inspect/scroll 0 AP; navigation không phải movement.
- Depth persist qua Sleep và khi rời viewport.
- `Direct Descent`: Depth +1, không material.
- `Search Side Tunnel`: discovery tại current frontier, Depth không tăng.
- Source đã reveal là target riêng; Extract lấy exact resource và không tăng Depth.
- Current v0.2.4/v0.3.4 visual fixture vẫn là CP3 Ore example. Audit này không sửa đè fixture hoặc art đã accept.
- Required common material phải deterministic/recoverable; Person không là prerequisite.

## 3. Stone-source arms

### 3.1. `ST-D` — Descend tự cho Stone

```text
Direct Descent · 1 AP → Depth +1 + Stone
```

**Reject:** phục hồi đúng grammar đã bị loại. Depth progress và material yield lại dính nhau; player không còn quyết định progress vs source. Nó cũng làm card/consequence đã accept trở nên sai.

### 3.2. `ST-O` — generic off-Mine Stone action

```text
Unknown deterministic source · 1 AP → Stone
```

**Reject as solution:** dùng được như neutral calendar shim nhưng không giải quyết content/source identity. Nó chỉ dời debt ra khỏi Mine mà chưa có Area/card thật.

### 3.3. `ST-B` — band-specific source availability

CP3 giữ Ore fixture hiện tại. Từ CP6 band trở đi, checkpoint preview cho biết Stone source available trong current band:

```text
Direct Descent          1 AP → Depth +1; no material
Search Side Tunnel     1 AP → reveal exact current-band source
Exposed Stone          1 AP → gain Stone; mark source spent
```

Root chỉ hiện source target khi ready. `Search Side Tunnel` vẫn là discovery verb; output identity do current band/checkpoint preview quyết định. Current accepted CP3 board vẫn đúng vì ở band đó exact source là Ore.

Guardrails:

- Stone availability biết trước, không roll;
- revealed source persist tới khi Extract;
- source có explicit repeat/recovery sau extraction; exact refresh cadence chưa chốt;
- Search không tăng Depth và Extract không giả vờ là checkpoint progress;
- future Stone card/art cần review riêng; audit này không authorize asset generation.

`ST-B` là direction mạnh nhất: nó giữ progress-vs-source choice, giải thích vì sao source set đổi theo Depth và không phục hồi Safe Tunnel yield.

## 4. Project timing under `ST-B`

Comparator giữ Calendar rerun fixture:

- `PJ-X`: 2 Wood + 1 Stone + 3 Work + selected 8G permit;
- wallet 4G; CP3 Ore bán 5G; market T0;
- CP3 Exposed Ore ready; CP6 unlock Stone availability;
- tối đa ba Direct Descent/ngày.

### 4.1. A5

| Day | Route | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Direct Descent ×3 | Depth 3; Wood ready |
| D2 | Direct Descent ×3 + Search Stone + Extract Stone | Depth 6; Stone ready |
| D3 | Extract CP3 Ore + Work ×3; sell Ore; pay permit | `PJ-X` complete D3; wallet 1G |

### 4.2. A7

| Day | Route | End state |
| --- | --- | --- |
| D1 | Wood ×2 + Direct Descent ×3 + Extract CP3 Ore + Work ×1 | Depth 3; Ore funding ready |
| D2 | Direct Descent ×3 + Search Stone + Extract Stone + Work ×2 | Depth 6; `PJ-X` complete D2; wallet 1G |

| Arm | Neutral 1 AP Stone shim | `ST-B` CP6 Stone | Change |
| --- | --- | --- | --- |
| A5 | `PJ-X` D2 | `PJ-X` D3 | +1 day; source band matters |
| A7 | `PJ-X` D2 | `PJ-X` D2 | no day change; all actions fit |

`ST-B` làm timing khác nhau vì source access thật, không vì fee tăng. Đây là shape tốt hơn neutral shim, nhưng exact D2/D3 vẫn là fixture và không được promote thành Year 1 schedule.

Đối với `PJ-B`, CP6 Stone availability xảy ra trước burst-relief completion trong current calendar traces. Exact competition giữa `PJ-B` và `PJ-X` cần rerun sau khi Stone refresh/quantity được chọn; audit này chỉ giải quyết source grammar.

## 5. Mine later-discovery arms cho COL-N

### 5.1. `LD-S` — first Stone source

Record relation `Depth band → new material availability` khi first Exposed Stone được reveal/acquire.

- Structure: hợp relationship-page grammar.
- Recovery: source persist/repeat.
- Timing: CP6 nằm trong D2 ở fast minimum trace.

**Fail long-horizon timing.** Stone source giải contract Project nhưng quá sớm để làm `COL-N` late slot.

### 5.2. `LD-B` — CP9 branch/context choice

Record một context band sau khi player inspect hai branch và commit một branch đã preview, ví dụ technical-source band hoặc underground-water context.

- Structure: thay context/action availability, không chỉ payout.
- Recovery: unchosen branch trở lại qua route/cycle.
- Agency: player chọn branch; journal chỉ record choice đã trải nghiệm.
- Timing: current minimum có thể chạm CP9 khoảng D3–D4.

**Pass structure, fail proven duration.** Có thể là one-of-many relationship entry, không đủ một mình để tạo long-calendar horizon.

### 5.3. `LD-X` — CP12 world connection + first native interaction

Không record chỉ vì counter đạt CP12. Record khi:

```text
reach world-connection checkpoint
→ connection/context appears at its native source
→ player performs first informed interaction there
```

- Structure: checkpoint mở horizon mới thay vì trả stamp.
- Recovery: connection persist; interaction có cycle/substitute riêng.
- Presentation: context card sống ở native Area/source; Journal backfill record sau interaction.
- Timing: current minimum vẫn có thể reach CP12 D4/D5 trước chosen-seed output.

`LD-X` là Mine candidate mạnh nhất về meaning nhưng **chưa pass long-calendar timing** với Depth scale hiện tại. Không kéo nó muộn bằng fixed wait day hoặc dummy stamp.

### 5.4. `LD-R` — random event/rare mineral

Geode/event/rare outcome kiểu reference có thể tạo discovery bất ngờ.

**Reject cho required later slot:** RNG làm collection horizon hostage; pity/recovery sẽ tạo thêm system chỉ để cứu một objective. Rare optional record có thể tồn tại về sau, nhưng không là gate cho `COL-N` baseline.

## 6. COL-N implication

Mine không được trở thành prerequisite duy nhất. Nếu future content dùng `LD-X`, `N-REL` chỉ nên nhận nó như một alternative late relationship:

```text
complete core relationship pages
+ record any 1 later relationship from an actual unlocked context
  - Mine world connection interaction
  - later source/restock context
  - Processor specialization context
```

Chỉ thêm `any 1` khi ít nhất hai alternative content thật đã tồn tại. Hiện mới có Mine shape, chưa có content-complete alternatives; vì vậy `COL-N` vẫn open và không được sửa requirement ngay.

Backfill rule:

- action/discovery thật đã xảy ra trước khi Journal page reveal vẫn được credit;
- không bắt repeat Mine branch/connection chỉ vì UI xuất hiện muộn;
- Journal không forecast branch, target hoặc ngày phải làm; native Mine checkpoint/context tự preview rule/recovery của chính nó.

## 7. Verdict

1. `[REFERENCE INFERENCE]` Stardew pattern hữu ích là `level/band controls available sources and current action surface`; không carry dice/combat/map/deadline.
2. `[REJECT]` Không phục hồi `Direct Descent → Stone`.
3. `[DIRECTION]` Dùng band-specific Search → exact source → Extract cho Stone; CP3 Ore fixture giữ nguyên, CP6 Stone là next paper source arm.
4. `[PAPER RESULT]` Với CP6 Stone, `PJ-X` earliest timing đổi từ D2/D2 thành D3/D2 ở A5/A7. Source access tạo timing difference thật.
5. `[PAPER RESULT]` CP6 Stone quá sớm cho `COL-N`; CP9 branch và CP12 connection pass meaning/recovery nhưng current Depth scale chưa chứng minh long-calendar timing.
6. `[DIRECTION]` Carry `LD-X` như one-of-many later relationship candidate, không làm Mine mandatory và chưa thêm vào `COL-N` requirement.
7. `[DIRECTION/OPEN]` Paper recovery dùng persistent source + refresh after Sleep; exact Stone quantity, final refresh cadence, CP cadence, Depth scale và non-Mine later contexts vẫn chưa chốt.

## 8. Handoff

Next systems test nên là **Mine band cadence 04**:

- so fast Depth-only route với source-invested/Project route qua CP3/CP6/CP9/CP12;
- log ngày branch/world connection thực sự xuất hiện dưới A5/A7 và opportunity load;
- không tăng Depth count hoặc thêm mandatory checkpoint tax chỉ để làm `COL-N` dài;
- nếu CP12 vẫn luôn trước chosen-seed output, Mine chỉ là alternative relationship content, không phải long-horizon clock.

Follow-up [Mine band cadence 04](MINE-BAND-CADENCE-PAPER-SIMULATION-04.md) xác nhận CP12 native interaction ở D5/A5 và D4/A7 trên fast, source-invested và `PJ-X` routes. Vì chosen-seed output nằm khoảng D7/D8, Mine connection pass relationship meaning nhưng fail long-calendar timing; không dùng nó làm required `COL-N` clock.

[Stone refresh / Project timing 05](MINE-STONE-REFRESH-PROJECT-TIMING-05.md) chọn persistent source refresh after Sleep làm next paper baseline: Search chỉ cần lần đầu; first Stone tốn 2 AP, later Stone tốn 1 AP sau known recovery. `PJ-B` và `PJ-X` không khóa nhau bằng one-shot source; exact cadence/quantity vẫn là fixture.
