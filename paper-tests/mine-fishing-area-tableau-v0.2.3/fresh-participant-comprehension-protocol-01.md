# Fresh-participant comprehension protocol 01 — Mine + Fishing v0.2.3

Ngày chuẩn bị: 2026-09-22.

Mục tiêu: kiểm tra first-read comprehension của [v0.2.3](README.md) mà không dạy trước grammar, tên mechanic hoặc câu trả lời. Một người đã xem fixture cũ không hợp lệ cho gate này.

## 1. Materials

- `boards/card-mobile-preview.png`
- `boards/scroll-strip-mobile-preview.png`
- `boards/focus-detail-panels.png`, chỉ đưa sau khi participant đã chọn target
- Sáu token/card vật lý nếu test trên bàn
- Character, Rod, Tool và Gift item proxy

Không đưa README, outcome sheet hoặc giải thích `progress / discovery / extraction` trước test.

## 2. Moderator rule

- Đọc prompt đúng nguyên văn.
- Không dịch title, tag hoặc mô tả.
- Không chỉ vào card đúng, không nhắc `Depth`, `Ore`, `Eel` hoặc tên Tool khi participant đang suy nghĩ.
- Nếu participant hỏi luật, trả lời: “Hãy nói bạn nghĩ giao diện đang yêu cầu gì; sau khi chọn tôi sẽ đưa detail.”
- Ghi nguyên văn câu trả lời và hesitation; không sửa thành design vocabulary.

## 3. Task A — root read

Chỉ đưa `card-mobile-preview.png`.

Prompt:

> “Hãy nói mỗi lá này dùng để làm gì. Lá nào chỉ là trạng thái, lá nào là nơi bạn có thể thực hiện hành động?”

Ghi:

- participant có gọi `Mine State` là state/inspect-only không;
- participant có phân biệt Person/Eel opportunity với acquired item không;
- participant có phân biệt ba Mine action bằng hình trước khi đọc detail không;
- phần nào chỉ được hiểu nhờ title/tag/description.

## 4. Task B — physical commitment

Đưa Character, Rod, Tool và Gift proxy.

Prompt:

> “Nếu muốn dùng những card này, bạn sẽ đặt Character và vật nào vào đâu?”

Không nêu trước action list. Pass khi participant tự đặt:

- Character + Rod vào `Eel Sighting`;
- Character + Gift item vào `Person Today`;
- Character + Tool vào một Mine action, không vào `Mine State`.

## 5. Task C — consequence prediction

Prompt:

> “Nếu chọn từng Mine action, bạn nghĩ Depth, Ore và card trên bàn sẽ thay đổi thế nào?”

Sau câu trả lời đầu tiên mới đưa matching detail panel. Pass khi participant có thể resolve:

| Action | Required read |
| --- | --- |
| Exposed Ore | `Depth +0`; gain Ore; source becomes spent |
| Direct Descent | `Depth +1`; no item |
| Search Side Tunnel | `Depth +0`; reveal an Ore source; gain no Ore yet |

Không bắt participant dùng từ `progress`, `discovery` hoặc `extraction` nếu state update đúng.

## 6. Task D — Eel fiction

Che title/tags/description của `Eel Sighting`, chỉ cho art.

Prompt:

> “Trong hình đang có chuyện gì? Con cá đã được bắt chưa? Bước tiếp theo của người chơi là gì?”

Pass khi participant hiểu một Eel/fish-like target đang sống dưới nước, chưa bị bắt, và Fishing Tool sẽ được dùng tiếp. Log riêng nếu silhouette chỉ đọc như rắn, vệt nước hoặc decoration.

## 7. Task E — Area/navigation

Đưa `scroll-strip-mobile-preview.png`.

Prompt:

> “Bạn muốn xem River rồi Mine nhưng chưa làm action nào. Bạn sẽ làm gì, và bạn nghĩ việc đó có tốn AP hoặc thay đổi state không?”

Pass khi participant hiểu scroll/focus/inspect là navigation UI, `0 AP`, không phải travel, và state không đổi khi rời viewport.

## 8. Gate

Gate chỉ pass khi một fresh participant hoàn thành B–E mà moderator không dịch schema thành hành động. Một lỗi vocabulary không làm fail nếu target, commitment và state consequence đều đúng.

Nếu fail, sửa đúng observed cause; không thêm generic gateway, free reveal click hoặc schema panel để che art/interaction ambiguity.
