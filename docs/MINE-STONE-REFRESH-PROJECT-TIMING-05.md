# Mine Stone refresh / Project timing 05 — repeatable deterministic source

Ngày chạy: 2026-09-22.

Trạng thái: paper source-economy test tiếp nối [Mine source audit 03](MINE-LATER-DISCOVERY-SOURCE-AUDIT-03.md) và [Mine band cadence 04](MINE-BAND-CADENCE-PAPER-SIMULATION-04.md). Test chọn một refresh comparator đủ rõ để `PJ-B` và `PJ-X` cùng có recovery; không chốt quantity, exact checkpoint, final refresh cadence hoặc runtime card state.

## 1. Fixed contract

- CP6 band preview cho biết Stone source available.
- Search 1 AP reveals exact `Exposed Stone`; Depth không tăng.
- Extract 1 AP gains 1 Stone; Depth không tăng; source becomes spent.
- `Direct Descent` never grants Stone.
- Stone có Sell/Project/Keep allocation; acquisition không tự contribute.
- `PJ-B` và `PJ-X` đều cần Stone trong current fixture; contribution persist.
- Required common material không được trở thành one-time miss hoặc random hostage.

## 2. Refresh arms

### 2.1. `SR-1` — one Stone per band

Sau một Extract, source hết vĩnh viễn tới checkpoint/band mới.

**Failure:** một Stone phải chọn `PJ-B` hoặc `PJ-X`; Project còn lại bị khóa bởi content cadence chưa định nghĩa. Recovery phụ thuộc Depth expansion tương lai và làm Stone giống unique key hơn common material.

Reject cho baseline.

### 2.2. `SR-S` — Search lại mỗi unit

```text
Search 1 AP → reveal Stone
Extract 1 AP → gain Stone, source disappears
repeat Search + Extract for next Stone
```

**Strength:** deterministic; progress-vs-source cost rõ.

**Risk:** discovery verb trở thành gathering tax lặp. Khi exact source đã biết ở band, re-reveal cùng source không tạo information mới.

Giữ làm high-friction comparator, không preferred baseline.

### 2.3. `SR-P` — persistent source, refresh after Sleep

```text
first unit: Search 1 AP → reveal Exposed Stone
Extract 1 AP → gain Stone; mark spent
after Sleep: source becomes ready again
later unit: Extract 1 AP → gain Stone; mark spent
```

**Strength:**

- Search có giá trị discovery một lần;
- source identity/card persist và state change `ready ↔ spent` đọc được;
- mỗi ngày tối đa một Stone trong fixture, tránh same-day spam;
- Project thứ hai có recovery biết trước;
- player vẫn chọn Extract hay dùng AP cho Depth/opportunity.

Carry làm next paper baseline. `after Sleep` chỉ là cadence fixture; final game có thể dùng source cycle khác nếu preview/recovery tương đương.

### 2.4. `SR-U` — unlimited same-day Extract

Sau Search, player có thể Extract nhiều lần cùng ngày.

**Failure:** A7 có thể chuyển AP dư thành Stone không giới hạn; source allocation/refresh state mất nghĩa và Project material trở thành action conversion thuần.

Reject.

## 3. Timing consequences under `SR-P`

### 3.1. First Stone / `PJ-X`

Giữ trace audit 03:

| AP arm | CP6 first Search + Extract | Earliest `PJ-X` |
| --- | --- | --- |
| A5 | D2 | D3 |
| A7 | D2 | D2 |

Không đổi so với source audit.

### 3.2. Second Stone recovery

Nếu first Stone được contribute vào `PJ-X`:

| Day relation | Source state | Action needed for next Stone |
| --- | --- | --- |
| CP6 day | Search + Extract; spent | first Stone acquired |
| After Sleep | ready | Extract 1 AP |
| After second Extract | spent | wait next Sleep/cycle |

`PJ-B` không bị khóa: second Stone có earliest known recovery một Sleep sau first extraction. Nếu player chọn Sell/Keep second Stone, đó là allocation choice; source vẫn refresh theo rule.

Nếu `PJ-B` dùng first Stone thay vì `PJ-X`, same recovery áp dụng ngược lại. Không Project nào có priority ẩn.

### 3.3. Calendar interaction

Calendar 01 đặt `PJ-B` reveal sau Expansion và experienced burst, muộn hơn CP6 source access trong current traces. Vì vậy:

- `SR-P` không thêm một Gold gate;
- second Stone có thể được lấy trước reveal nhưng không bắt buộc;
- AP Extract cạnh tranh với farming/opportunity ở ngày player chọn;
- source không buộc stockpile vì recovery preview luôn tồn tại.

Exact `PJ-B` completion day chưa rerun vì Calendar 01 bundle 6 AP đã gộp material/source + Work và Project quantity vẫn fixture. Điều đã được giải ở đây là **availability/recovery**, không phải final day schedule.

## 4. UI/state implication

Paper state cần ba trạng thái, không thêm square status giả:

| State | Root consequence |
| --- | --- |
| undiscovered | Search action available; no Stone source target |
| ready | Exposed Stone square is a playable Extract target |
| spent | source target absent hoặc visibly unavailable trong Mine inspect; recovery cue at native source |

Depth/checkpoint vẫn là separate rail. `Stone Ready` không trở thành một second global status rail; state được suy từ source target/native inspect.

Không sửa v0.2.4 CP3 Ore art. Future Stone source art, nếu làm, cần `little-valley-cards-art` và owner review riêng.

## 5. Verdict

1. `[REJECT]` One-per-band source tạo Project hostage; unlimited same-day source tạo AP-to-Stone spam.
2. `[COMPARATOR]` Search lại mỗi unit deterministic nhưng biến discovery thành repeated tax.
3. `[DIRECTION]` Carry persistent source + refresh after Sleep (`SR-P`) làm next paper baseline: first Stone 2 AP, later Stone 1 AP sau known recovery.
4. `[PAPER RESULT]` `PJ-X` earliest vẫn D3/A5 và D2/A7; `PJ-B` có second-Stone recovery rõ, không bị first Project khóa.
5. `[BOUNDARY]` Sleep refresh là fixture, không final cadence. Final quantity/source count vẫn phải test cùng AP/day và Project recipes.
6. `[PRESENTATION]` Ready/spent nằm ở source target/native inspect; không thêm square state card hoặc global rail.

## 6. Handoff

Stone-source grammar/recovery đủ để dùng trong paper rerun tiếp theo. Mine workstream còn hai open layers:

- final band/depth content scale, nếu cần làm CP12 thực sự late bằng decisions chứ không counter padding;
- actual Stone/Ore quantities và Project Work, chỉ sau khi AP/day/Season bracket hẹp hơn.

`COL-N` long-horizon slot vẫn phải tìm ở non-Mine context hoặc future content-complete Mine scale; `SR-P` không được dùng làm collection stamp.
