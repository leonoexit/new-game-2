# Internal informed pilot 01 — Mine/Fishing square tableau v0.2

Ngày: 2026-09-22.

Trạng thái: `[STOPPED AT TASK B — ARTIFACT COMPREHENSION FAILURE]`.

Participant profile: project owner/designer, đã biết direction và fixture context. Kết quả chỉ là internal informed usability evidence; không được tính là new-player comprehension evidence.

Facilitation rule: dùng prompt trong fixture README, không xác nhận đúng/sai giữa các task, giữ raw response trước interpretation.

## Task A — Shape và target

### Prompt

“Hãy chỉ mọi thứ bạn nghĩ là card có thể focus/target, rồi chỉ các phần chỉ là Area hoặc status.”

### Raw response

> 1.
>
> rain catch: để câu cá
>
> person today: để tặng quà
>
> current frontier: đào mỏ ở đây đúng không
>
> safe tunnel: hình như cũng là đào mỏ
>
> working seam: có vẻ là có thể nhặt hòn đá này lên
>
> veil vein: không hiểu cái này
>
> 2. không thấy area ngoại trừ việc đọc chữ mine hoặc river là có thể phân biệt dc

### Provisional coding — do not treat as final until debrief

- `square_card_recognition`: 6/6 square cards noticed.
- `area_as_target`: no explicit background/header target.
- `status_as_target`: unclear; River Record and Mine Depth strips were not classified.
- `gateway_search`: none.
- `two_column_scan_error`: none observed.
- `explanation_request`: Current Frontier purpose questioned; Veiled Vein not understood.
- Observation: Area identity appears text-led (`RIVER`/`MINE`) rather than background-led for this participant.

## Task B — Find versus act

### Presented artifact

Participant was shown the `Rain Catch` rectangular detail panel and asked how much AP remained, whether any state changed, and how they described moving attention from River to Mine without committing.

### Raw response

> thực sự là không hiểu, không phải vì nghĩa tiếng anh, lý do tôi đang thắc mắc tại sao phải đọc một đóng schema tỏng lá bái để hiểu ìmmh cần làm gì

### Stop decision

Facilitator stopped the pilot before collecting prompted rule answers. Continuing would measure coaching/decoding after a clear presentation failure rather than first-read comprehension.

### Coding

- `detail_discovery`: fail — panel discovered but did not translate into an obvious action.
- `explanation_request`: yes — participant challenged why schema must be decoded to know the verb.
- `badge_recall`, `focus_cost_error`, `travel_language`, `fishing_recurrence`, `mine_persistence`, `wrong_state_update`: not measured because the artifact failed before action comprehension.

## Finding

The square silhouette worked as card recognition, but neither the root card nor detail panel presented an action-first grammar. Noun labels and schema fields (`Condition`, `Commit`, `Result`, `Record`) forced the participant to translate data into a verb and sequence.

Specific ambiguity:

- `Current Frontier` looked like a place to mine rather than an inspect-only persistent state card.
- `Safe Tunnel` read as generic mining, not a distinct deterministic descent action.
- `Working Seam` suggested taking a stone, close to the intended source action but without cost/state consequence.
- `Veiled Vein` had no understandable action.
- Area identity was recognized mainly from text labels, not the background treatment.
- River Record and Mine Depth strips were not spontaneously classified.

## Required correction before another pilot

1. Root card must state an immediate verb phrase, not only a noun/state name.
2. Root card must show `pay → get/change` in short natural language.
3. `Current Frontier` must explicitly say it is state/inspect-only and direct the player to choose a route.
4. Detail panel must use numbered action steps and a plain-language question, not schema fields.
5. `Veiled Vein` must name its guaranteed action and the uncertainty separately.

Corrective artifact: `mine-fishing-area-tableau-v0.2.1` (action-first revision), to be tested separately. This pilot remains tied to commit `7d4f85d` and must not be reinterpreted as new-player evidence.
