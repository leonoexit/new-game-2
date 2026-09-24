# COL-N independent source cadence audit 03 — delivery lead time và source response

Ngày chạy: 2026-09-22.

Trạng thái: paper source/content audit tiếp nối [COL-N long-horizon paper test 01](COL-N-LONG-HORIZON-PAPER-TEST-01.md), [later-context alternatives 02](COL-N-LATER-CONTEXT-ALTERNATIVES-02.md), [Calendar sensitivity 01](CALENDAR-SENSITIVITY-PAPER-SIMULATION-01.md) và [Economy ledger v2](ECONOMY-LEDGER-V2-PAPER-SENSITIVITY-01.md). Product owner đã đồng ý tiếp tục bằng một recurring world-source/context mới có native recovery.

Audit này test một Seed Restock response có delivery lead time độc lập với Season length. Nó không chốt final Season, final restock schedule, price, market AP, runtime UI, card art hoặc Year 1 content count.

## 1. Pass gate

Một arm chỉ được đưa vào `N-REL` nếu:

1. earliest timing muộn hơn chosen-seed output D7/D8;
2. S12 miss nhưng S18 có thể complete/recover trong cùng calendar trace;
3. cadence không dời theo S12/S18 boundary;
4. source state thay đổi option thật ngoài Journal;
5. không consume/submit chosen output;
6. không bắt grow Tallbean lẫn Dewleaf;
7. không bắt Mine, Person, Processor hoặc một Project cụ thể;
8. miss/ignore không khóa source hoặc collection vĩnh viễn;
9. prior valid discovery vẫn backfill;
10. timing/recovery chỉ hiện ở native Seed Restock/inspect, không ở global rail.

## 2. Fixed fixture

- `COL-1` complete D3; chosen Seed access D4 trong current calendar fixture.
- Chosen-seed output signal nằm khoảng D7/D8.
- Tallbean và Dewleaf giữ identity khác nhau: cash/long commitment so với Crop/Herb flexibility.
- Unchosen option phải quay lại ở source cycle sau; không permanent blind choice.
- `T0` — standard Buy/Sell 0 AP — là current economy baseline; `T1` chỉ là sensitivity comparator.
- `S12` và `S18` là calendar bounds, không phải final Season length.
- Journal inspect 0 AP; collection record không consume item.

## 3. New source premise — delivery lead time

Seed Restock đã là recurring source/Gold sink. Arm mới cho source một response sau khi player chứng minh profile đã chọn bằng first output:

```text
Acquire first output from chosen COL-1 Seed
→ output remains available for Sell/Gift/Process/Keep; nothing submitted
→ Seed Restock begins one stock-profile delivery lead time
→ when delivery becomes ready, choose one source profile:

   Continue   — feature the proven Seed profile for this source cycle
   Diversify  — feature the other COL-1 Seed profile for this source cycle
```

Choice đổi access timing tại source; không tự grant Seed và không yêu cầu purchase để ghi relationship. Exact stock quantity/price vẫn open. Option không chọn trở lại ở later source delivery.

Đây là source response, không phải collection reward giả dạng:

- Journal chỉ record relationship đã xảy ra;
- Seed Restock thay availability dù player không theo `COL-N`;
- Tallbean route và Dewleaf route đều eligibility-valid;
- `continue` và `diversify` đều complete relationship;
- choice persist ở source nếu player không inspect đúng ngày ready.

## 4. Cadence arms

Lead time bắt đầu sau first chosen-seed output. `+N Sleep` nghĩa delivery ready sau N lần Sleep kể từ output.

### 4.1. `DL-0` — immediate response

```text
chosen output D7/D8 → profile choice D7/D8
```

Real choice pass, nhưng không thêm horizon ngoài Cultivation page. **Reject late slot.**

### 4.2. `DL-4` — four-Sleep delivery

```text
D7 output → D11 ready
D8 output → D12 ready
```

Source cadence có meaning nhưng cả hai route có thể complete trong S12. **Fail S12/S18 differentiation.**

### 4.3. `DL-5` — five-Sleep delivery

```text
D7 output → D12 ready
D8 output → D13 ready
```

Arm straddle boundary: một ngày khác biệt ở chosen-output route quyết định toàn bộ long-horizon verdict. Nó hữu ích làm lower-edge comparator nhưng không robust; D7 route vẫn complete S12. **Do not carry.**

### 4.4. `DL-6` — six-Sleep delivery

```text
D7 output → D13 ready
D8 output → D14 ready
```

- cả hai output timings miss S12;
- cả hai fit S18 với ít nhất bốn ngày recovery room;
- cadence không đổi khi Season arm đổi;
- result không phụ thuộc repeat Load/Search/Catch;
- source offer persist nếu ngày ready bị bỏ qua.

`DL-6` là **minimum robust paper comparator**. Con số sáu chưa phải final cadence; nó là lower bound chứng minh source lead time có thể tạo outcome khác nhau mà không bám Season boundary.

### 4.5. `DL-8` — eight-Sleep delivery

```text
D7 output → D15 ready
D8 output → D16 ready
```

Arm vẫn miss S12 và fit S18. Nó cho recovery room nhỏ hơn nhưng không tạo thêm choice so với `DL-6`. Carry làm upper sensitivity comparator, không ưu tiên chỉ để kéo dài collection.

### 4.6. `DL-S` — next Season delivery

```text
S12 → D13
S18 → D19
```

Giữ verdict alternatives 02: đây là moving boundary; cả hai arm đều complete sau first Season. **Reject làm timing comparator.**

## 5. Timing matrix

### 5.1. Output-to-source timing

| Arm | D7 output | D8 output | S12 outcome | S18 outcome | Verdict |
| --- | --- | --- | --- | --- | --- |
| `DL-0` | D7 | D8 | Complete | Complete | Too early |
| `DL-4` | D11 | D12 | Complete | Complete | Too early |
| `DL-5` | D12 | D13 | Route-dependent edge | Complete | Fragile |
| `DL-6` | D13 | D14 | Miss | Complete | Minimum robust pass |
| `DL-8` | D15 | D16 | Miss | Complete | Upper comparator |
| `DL-S` | D13 | D19 | Miss | Miss | Moving boundary |

### 5.2. Decisive calendar cells under `DL-6`

| Cell | Chosen-output signal | Delivery ready | First-Season result |
| --- | --- | --- | --- |
| `5-12-S` | D7/D8 bracket | D13/D14 | Miss; offer persists beyond boundary |
| `5-18-D` | D7/D8 bracket | D13/D14 | Complete/recover inside S18 |
| `7-12-S` | D7/D8 bracket | D13/D14 | Miss; extra AP cannot accelerate delivery |
| `7-18-D` | D7/D8 bracket | D13/D14 | Complete/recover inside S18 |

`DL-6` không giúp chọn A5/A7 vì delivery không tốn daily AP để mature. Đây là điều mong muốn: arm test Season horizon độc lập với AP surplus. Final AP vẫn phải được narrow bằng farming/opportunity pressure, không bằng source timer.

### 5.3. `T0` / `T1` sensitivity

- `T0`: inspect và profile choice resolve D13/D14.
- `T1`: nếu source-profile selection được batch cùng market commit 1 AP và ngày ready không còn AP, offer persist; earliest có thể dời một ngày tới D14/D15.
- Cả hai vẫn outside S12 và inside S18 dưới `DL-6`.
- Không dùng transaction AP để tạo timing pass; pass tồn tại trước T1.

## 6. Route independence và real choice

### 6.1. Chosen-profile routes

| Prior `COL-1` choice | Continue | Diversify |
| --- | --- | --- |
| Tallbean | Tallbean source profile | Dewleaf source profile |
| Dewleaf | Dewleaf source profile | Tallbean source profile |

Bốn paths đều record `cultivation outcome → source response`. Player không cần grow profile còn lại. Source timing không cần Mine, Person, Processor, Weather hit hoặc Project completion.

Farm không bị thêm một new acquisition gate: Cultivation page đã cần output từ chosen Seed. Delivery response tái dùng event đó để thay source availability, không đòi second output hoặc item copy.

### 6.2. Consequence ngoài collection

Profile choice phải đổi ít nhất một source property có gameplay value:

- chosen Seed available sớm trong current source cycle;
- other profile returns ở later delivery;
- Tallbean/Dewleaf capability distinction vẫn visible trước commit.

Không dùng badge, Journal %, free Gold hoặc cosmetic label làm sole consequence. Nếu final source không đổi availability thật, arm fail và phải reopen.

## 7. Native presentation và recovery

Seed Restock là square interaction target đã có. Source state sống tại card/inspect:

```text
Current stock profile
Profile delivery: preparing / ready
When ready: Continue or Diversify
Recovery: other profile returns next delivery
```

Guardrails:

- không thêm square `Delivery Status` card;
- không thêm countdown vào global Weather/Season rail;
- không highlight Commerce như việc phải làm hôm nay;
- source inspect có thể nêu lead time/recovery của chính source;
- ready choice persist, nên player không cần checklist hoặc notification agenda;
- Journal có thể ghi `recorded` sau choice nhưng không recommend profile.

## 8. `N-REL` rerun

Rerun giữ relationship grammar, backfill và non-consume contract:

| Page | Record condition | Earliest signal |
| --- | --- | --- |
| Cultivation profile | Acquire output từ chosen `COL-1` Seed | D7/D8 |
| Condition contrast | Record common Catch + condition Catch | D3/D5 |
| State change | Fresh identity → processed identity qua Load/Sleep | trước hoặc quanh D7/D8 |
| Source response | Chọn Continue hoặc Diversify khi `DL-6` delivery ready | D13/D14 |

### 8.1. Backfill behavior

- Catch/Process/output đã xảy ra trước Journal reveal vẫn count.
- Chosen output auto-enables source response; output không cần còn trong storage.
- Nếu profile choice xảy ra trước Journal detail reveal, choice vẫn backfill.
- Không bắt repeat Catch, Process, grow hoặc source choice.

### 8.2. Result

| Calendar | Core pages | Source response | `N-REL` earliest | Outcome |
| --- | --- | --- | --- | --- |
| S12 | D7/D8 | D13/D14 | ngoài boundary | Miss with persistent recovery |
| S18 | D7/D8 | D13/D14 | D13/D14 | Complete with 4–5 days room |

`N-REL` pass long-calendar timing ở paper level dưới `DL-6`; duration đến từ a source change with future access consequence, không từ flat count, item submission, no-backfill hoặc Season-relative gate.

## 9. Failure audit

| Risk | Check |
| --- | --- |
| Fake fixed wait | Lead time changes actual recurring Seed access; if that consequence is removed, fail |
| Counter padding | One source response, no repeat-count requirement |
| Forced second Seed | Continue and Diversify both valid; no second grow required |
| Forced route | No Mine/Person/Processor/Project/Weather dependency |
| Item submission | First output auto-enables source; item remains usable |
| Moving Season gate | `+6 Sleep` stays D13/D14 in both S12/S18 arms |
| Miss hostage | Ready offer persists; later profile returns in next delivery |
| Global agenda | Timing/recovery only at native Seed Restock inspect |
| Backfill invalidation | Prior relationships and prior source choice remain valid |
| Reward/content circularity | Source availability changes before `COL-N` reward; reward remains a separate source-vs-transformation choice |

## 10. Verdict

1. `[REJECT]` Immediate, four-Sleep and Season-relative response do not create a robust S12/S18 outcome difference.
2. `[EDGE ONLY]` Five-Sleep delivery straddles D12/D13 and is too sensitive to one-day chosen-output variance.
3. `[PAPER DIRECTION]` Carry independent delivery lead time, with `DL-6` as minimum robust comparator and `DL-8` as upper sensitivity arm. Exact cadence is not final.
4. `[PAPER RESULT]` Under `DL-6`, source response is ready D13/D14 in both Season arms: S12 misses with persistent recovery; S18 completes with four to five days room.
5. `[PAPER RESULT]` `N-REL` now passes structure, recovery, backfill and long-calendar timing at paper level. It still does not pass fresh-player comprehension or final value/balance.
6. `[DIRECTION]` Keep `continue vs diversify` at native Seed Restock. Either profile choice records the relationship; neither purchase nor growing both is required.
7. `[OPEN]` Final lead time, stock quantities, profile benefit, market AP, reward value and final Season length remain unresolved. If final Seed source does not have a real delivery/recovery cycle, reopen `COL-N` timing.

This closes the missing paper timing gate sufficiently to proceed to AP/day and Season-length narrowing. It does not authorize runtime implementation, UI fixture production or art.

Follow-up [AP / Season bracket narrowing 03](AP-SEASON-BRACKET-NARROWING-03.md) carries A6/S18 as the next paper baseline. S18 keeps `DL-6` D13/D14 and `DL-8` D15/D16 inside the horizon with recovery room; neither delivery arm becomes final content automatically.
