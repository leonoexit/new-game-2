# Mine + Fishing action-first square tableau v0.2.1

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED CORRECTIVE FIXTURE]`; [v0.2.3](../mine-fishing-area-tableau-v0.2.3/README.md) là current fixture; chưa có fresh-participant result.

Đây là revision hẹp của [v0.2](../mine-fishing-area-tableau-v0.2/README.md), tạo ra sau khi [internal informed pilot 01](../mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md) dừng ở Task B. Participant nhận ra square cards nhưng không hiểu vì sao phải đọc một panel đầy schema để suy ra cần làm gì.

Không thay Fishing/Mine mechanics, cost fixture hoặc state outcomes. Revision chỉ thay information grammar.

## 1. Correction

Mỗi root card nay đọc theo thứ tự:

```text
NOUN / IDENTITY
art
PAY · GET/CHANGE · SECONDARY EFFECT
IMMEDIATE VERB PHRASE
```

Ví dụ:

- `Rain Catch` → `CATCH RAIN EEL`;
- `Person Today` → `GIVE A GIFT`;
- `Current Frontier` → `STATE ONLY` + `CHOOSE A ROUTE`;
- `Working Seam` → `TAKE ORE`;
- `Safe Tunnel` → `DESCEND SAFELY`;
- `Veiled Vein` → `DESCEND FOR ORE`, với `DEPTH +1` tách khỏi `ORE UNKNOWN`.

Detail panels không còn dùng schema headings `Condition / Commit / Result / Record`. Mỗi panel mở bằng một plain-language action question rồi liệt kê numbered steps theo thứ tự resolve.

## 2. Files

| File | Vai trò |
| --- | --- |
| `boards/scroll-strip-start.png` | Corrected full-size start state |
| `boards/scroll-strip-mobile-preview.png` | Corrected two-column mobile/desk view |
| `boards/card-mobile-preview.png` | Six cards at `160x160` |
| `boards/focus-detail-panels.png` | Action-first numbered instructions |
| `boards/printable-card-sheet.png` | Two-column printable square-card sheet |
| `boards/resolution-outcomes.png` | Unchanged mechanics/state outcomes copied deterministically from v0.2 |
| `cards/` | Six corrected `400x400` cards |
| `build-fixture.sh` | Deterministic builder; first rebuilds v0.2 inputs, then applies this correction |

## 3. Retest protocol

Do not resume Task B with the old answer context and call it first-read evidence. Use this as an **iteration confirmation** with the informed participant, or start a fresh comprehension pilot with a new participant.

### Check A — action read

Show only `card-mobile-preview.png` and ask:

> “Không mở detail, hãy nói mỗi card cho phép hoặc yêu cầu bạn làm gì.”

Log exact phrases. Do not accept a noun-only answer as verb comprehension.

### Check B — state versus action

Ask:

> “Card nào chỉ giữ state và không nhận commit? Nếu muốn đào sâu hơn, bạn sẽ chọn đâu?”

Expected design intent: `Current Frontier` is inspect/state only; `Safe Tunnel` or `Veiled Vein` accepts descent commit; `Working Seam` accepts source commit without descent.

### Check C — detail sequence

Show the matching detail panel only after a card is selected. Ask participant to perform the action aloud. Record whether they preserve step order and update AP/item/record/Depth/Seam without facilitator translation.

### Check D — Area/status distinction

Use the full start strip. Ask participant to identify background/header/status strips separately from square cards. Area recognition must not be credited solely because the words `RIVER` and `MINE` are readable; note which visual cues they mention.

## 4. Preflight status

| Check | Result |
| --- | --- |
| Six root cards remain `400x400` | Pass |
| Immediate verb visible at `160x160` | Pass visually |
| Pay/get/change visible before detail | Pass visually |
| Current Frontier marked state-only | Pass visually |
| Detail uses natural ordered steps instead of schema | Pass |
| Mechanics and resolution outcomes unchanged | Pass |
| Deterministic byte-identical rebuild | Pass |
| Post-correction participant comprehension | **Open** |

## 5. Evidence boundary

- v0.2 pilot failure remains valid and tied to the old artifact.
- v0.2.1 render preflight does not erase that result.
- A positive informed iteration check is not new-player evidence.
- Do not advance to global orientation v0.3 as though the comprehension gate passed until a participant can explain the action grammar without translation.
