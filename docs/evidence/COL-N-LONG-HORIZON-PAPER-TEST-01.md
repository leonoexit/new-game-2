# COL-N long-horizon paper test 01 — collection ngoài Area root

Ngày chạy: 2026-09-22.

Trạng thái: paper structure/timing test tiếp nối [Content minimum registry 01](../current/CONTENT-MINIMUM-REGISTRY-01.md), [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md) và [Year 1 graph v1](../current/YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V1.md). Test so ba objective grammar cho một collection horizon sau `COL-1`. Nó không thêm content canonical, không authorize runtime UI và chưa chốt reward hay completion count.

## 1. Ranh giới

### 1.1. [DECIDED]

- Collection không nằm trên River root tableau và không tạo River status rail.
- Collection detail thuộc inspect/overlay; mở/xem/đóng mặc định 0 AP.
- Auto record không consume item. Nếu một collection khác consume item, đó phải là rule explicit riêng.
- Bỏ lỡ condition/season chỉ trì hoãn; không fail save hoặc khóa collection vĩnh viễn.
- `COL-N` không phải ending, completion requirement hoặc daily agenda.
- Không thêm `Tomorrow Targets`, recommended action hoặc checklist vào global Weather/Season rail.

### 1.2. [DIRECTION]

- `COL-1` D3 vẫn là first branch/Seed Choice; không kéo dài nó bằng cách tăng số family.
- Reward phải đổi source, verb hoặc choice set; không chỉ Gold/badge/% completion.
- Progress được ghi từ action/acquisition thật ở native source. Journal mô tả record đã có và recovery, không announce “việc nên làm ngày mai”.

### 1.3. Pass criteria

Một arm chỉ pass nếu:

1. dài hơn `COL-1` vì cadence/discovery có nghĩa, không vì counter phình;
2. không bắt mọi route dùng cùng một Area hoặc Person;
3. không consume item chỉ để giả lập tension;
4. có recovery cho condition/season miss;
5. reward tạo lựa chọn capability/source;
6. không biến River hoặc global chrome thành objective hub;
7. không hoàn thành gần như ngay khi reveal do backfill toàn bộ record cũ.

## 2. Ba arm

### 2.1. `N-FLAT` — extended family checklist

```text
COL-1 complete
→ record 6-of-8 item/family entries
→ reward
```

**Ưu điểm:** dễ hiểu, auto record, không consume.

**Failure:**

- quantity thay vì objective shape;
- nhiều entry đã backfill từ route trước `COL-1`, nên reveal có thể gần-complete;
- nếu không backfill, player phải reacquire item đã biết chỉ vì UI reveal muộn;
- khuyến khích thêm species/name để kéo counter, không thêm decision.

`N-FLAT` fail criteria 1 và 7.

### 2.2. `N-SUBMIT` — showcase bundles

```text
submit Crop + Fish + Herb + Mine sample
→ repeat với tier/condition khác
→ reward
```

**Ưu điểm:** tạo Sell/Gift/Process tension rõ.

**Failure:**

- biến collection thành Project delivery với artwork khác;
- cap/no-cap và economy đổi độ khó mạnh hơn discovery;
- dễ bắt người chơi giữ item theo checklist thay vì tự chọn allocation;
- rare/seasonal sample có thể thành hostage nếu recovery không đủ.

`N-SUBMIT` fail criteria 1, 2 và 3. Không dùng submit tax để “làm collection có giá”.

### 2.3. `N-REL` — relationship pages

Journal có ba page fixture, mỗi page record một **mối quan hệ đã trải nghiệm**, không chỉ một noun:

| Page | Record condition | Vì sao khác `COL-1` | Recovery |
| --- | --- | --- | --- |
| Cultivation profile | Acquire output từ Seed đã chọn ở `COL-1` | Choice seed phải đi qua care/time thành output | Crop tail/seed cycle sau |
| Condition contrast | Record một common Catch và một condition Catch | So stable source với Weather condition | Common/Rain cycle sau |
| State change | Acquire Fresh input và processed output cùng identity qua Load → Sleep | Ghi nhận transformation, không chỉ family | Input/Processor cycle sau |

Fixture completion yêu cầu đủ ba page. Record không consume output và không đòi item còn nằm trong storage lúc inspect.

Reward-shape comparator:

| Option | Opens/changes | Guardrail |
| --- | --- | --- |
| Source catalogue | Thêm một choice profile tại một source/restock đang tồn tại | Không thay core deterministic source; option không chọn quay lại |
| Recipe folio | Thêm một identity-preserving conversion choice tại Processor | Không làm Fresh/Raw obsolete; base recipe còn hợp lệ |

Tên/content cụ thể của Seed/source/recipe chưa được tạo. Hai option chỉ kiểm reward vector `source choice vs transformation choice`; không phải content authorization.

`N-REL` pass objective-shape, non-consume, recovery, reward và presentation criteria. Timing được audit riêng bên dưới.

## 3. Presentation contract

`COL-N` dùng rectangular Journal inspect/overlay theo presentation mapping hiện hành:

- entry point ở menu/journal hoặc record feedback; không phải square playable target;
- không nằm trong River root, Area header, sticky Area index hoặc Weather/Season rail;
- closed state không chiếm một permanent tableau slot;
- native Catch/Seed/Processor card chỉ cho biết consequence của chính action/context đó;
- Journal có thể ghi `recorded`, missing relationship category và recovery class, nhưng không tạo daily recommendation;
- không highlight một Area như nơi player “phải” đến ngày mai.

Collection progress là optional self-chosen pursuit. System mô tả điều đã ghi nhận và rule của journal; player quyết định có theo hay không.

## 4. Timing audit với content minimum

Các event sớm nhất đã có trong fixture:

| Event | Existing timing signal |
| --- | --- |
| `COL-1` | D3 ở mọi calendar arm |
| Common Catch | D2 opportunity |
| First Rain condition | D3 dense hoặc D5 sparse |
| CP3/Ore discovery | Có thể đạt trong early Connector trace |
| Chosen Seed access | Restock sau `COL-1`, fixture D4 |
| Chosen Seed output | Sau 3–4 Care resolution; later than D3 but still inside an ordinary short horizon in current trace |
| First processed output | Một Sleep sau Load; Processor activation day chưa canonical |

### 4.1. Backfill on

Nếu Journal credit mọi relationship đã trải nghiệm trước reveal:

- Condition contrast có thể complete D3/D5;
- State change có thể complete rất sớm nếu Processor active;
- toàn `N-REL` bị chặn chủ yếu bởi chosen Seed output.

Kết quả: `N-REL` dài hơn D3, nhưng minimum registry vẫn có thể hoàn thành trong phần đầu/middle của S12. Nó chưa phân biệt S12 với S18 và chưa chứng minh một long-calendar arc.

### 4.2. Backfill off

Nếu chỉ action sau reveal mới count, player có thể phải Catch lại common fish, chờ lại Rain hoặc Process lại identity đã làm. Delay đến từ invalidating prior knowledge, không từ discovery mới.

Kết quả: duration tăng nhưng fail criteria 1. Không dùng “journal chưa mở nên lần trước không tính” làm time gate.

### 4.3. Timing verdict

| Arm | Structure | Recovery | Long-calendar timing | Verdict |
| --- | --- | --- | --- | --- |
| `N-FLAT` | Weak | Pass | Artificial/count-dependent | Reject |
| `N-SUBMIT` | Project-like | Risky | Economy/storage-dependent | Reject |
| `N-REL` | Strongest | Pass | Chưa pass với content minimum | Carry as structural candidate |

Current vocabulary không có đủ một naturally later discovery để kéo `N-REL` qua calendar mà không thêm grind. Đây là evidence gap thật, không phải lý do tăng record count.

## 5. Later-discovery slot cần có trước rerun

Một future `N-REL` timing rerun cần đúng **một** discovery/context class đến muộn hơn và recoverable. Candidate class, chưa chọn content:

- một Mine checkpoint/context thực sự muộn hơn early CP3;
- một condition/cycle source ngoài common + first Rain Catch;
- một later source/restock profile mở từ world state, không từ fixed day;
- một actual Processor specialization/context có input identity riêng.

[Mine source audit 03](MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md) và [Mine band cadence 04](MINE-BAND-CADENCE-PAPER-SIMULATION-04.md) đã test Mine candidate: CP12 world connection + first native interaction pass relationship/recovery nhưng xảy ra D5/A5 hoặc D4/A7, sớm hơn chosen-seed output D7/D8. Vì vậy Mine connection chỉ là optional record, không phải long-horizon clock.

Follow-up [later-context alternatives 02](COL-N-LATER-CONTEXT-ALTERNATIVES-02.md) so later Seed Restock với Processor specialization. Actual Processor conflict có meaning nhưng vẫn xuất hiện D5–D8. Seasonal source renewal tạo choice `continue vs diversify` mà không bắt grow cả hai Seed, nhưng D13/S12 và D19/S18 đều là cùng outcome “sau first Season”; đây là moving boundary, không phải long-calendar pass. `N-REL` chưa rerun và vẫn open.

Follow-up [independent source cadence audit 03](COL-N-INDEPENDENT-SOURCE-CADENCE-AUDIT-03.md) test delivery lead time độc lập với Season. `DL-6` là minimum robust comparator: chosen output D7/D8 → source response D13/D14 trong cả S12/S18, nên S12 miss với persistent recovery và S18 complete. `N-REL` pass paper timing dưới arm này; exact delivery cadence/value chưa final.

Guardrails:

- không yêu cầu Mine/Weather/Processor cụ thể nếu nó biến một subsystem thành prerequisite duy nhất; dùng route alternative hoặc `any N-of-M` khi content thật tồn tại;
- không thêm dummy late stamp, wait timer hoặc second copy chỉ để kéo dài;
- không reveal reward/content không tồn tại;
- không đặt later-discovery forecast vào global UI.

## 6. Verdict

1. `[REJECT]` Không mở rộng `COL-1` thành flat family/species checklist.
2. `[REJECT]` Không dùng submit bundle/item consumption làm grammar mặc định cho `COL-N`.
3. `[HYPOTHESIS STRENGTHENED]` Themed relationship pages trong Journal inspect/overlay là structure tốt nhất: chúng record cách hệ thống liên hệ, không chiếm Area root và không prescribe ngày mai.
4. `[FAIL — TIMING]` Với content minimum hiện tại, `N-REL` chưa đủ bằng chứng là long-calendar horizon; backfill làm nó sớm, no-backfill làm nó grind.
5. `[DIRECTION]` Giữ `COL-N` open cho tới khi có một later recoverable discovery/context thật. Sau đó rerun timing bằng backfill hợp lệ và không tăng counter tùy tiện.
6. `[DIRECTION]` Reward giữ shape `source choice vs transformation choice`, option không chọn quay lại; exact content/value chưa được authorize.

Không cần product-owner decision ở bước này: chưa có hai content-complete arm đủ mạnh để chọn. Bước kế đúng là định nghĩa/test một later discovery trong system content, rồi quay lại `N-REL` timing.
