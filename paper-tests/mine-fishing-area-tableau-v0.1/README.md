# Mine + Fishing Area-tableau paper fixture v0.1

Ngày dựng và desk preflight: 2026-09-22.

Trạng thái: `[FIXTURE]` để kiểm play grammar và comprehension; không phải final UI, balance, content list, art approval hoặc runtime implementation.

Fixture hiện thực [Mine & Fishing area-tableau contract 01](../../docs/current/MINE-FISHING-AREA-TABLEAU-CONTRACT-01.md) trên [scrollable Area model 08](../../docs/current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md).

## 1. Câu hỏi cần kiểm

1. Người chơi có hiểu scroll/focus/inspect là navigation 0 AP, không phải travel không?
2. Người chơi có play vào exact `Catch`, route hoặc source card thay vì Area background không?
3. Fishing có đọc như condition opportunity cần commit hôm nay, còn Mine đọc như persistent progression không?
4. `Extract Seam`, `Safe Tunnel` và `Veiled Vein` có tạo ba ý định khác nhau trước commit không?
5. Rời Area có được hiểu là không reset River record hoặc Mine Depth không?

## 2. Files

| File/folder | Vai trò |
| --- | --- |
| `boards/scroll-strip-start.png` | Start state full-size (`1000x1800`) với River và Mine tableaus |
| `boards/resolution-outcomes.png` | Fishing after-state và ba Mine outcome (`1000x1180`) |
| `boards/card-sheet.png` | Sheet bảy card để in/cắt |
| `boards/*-preview.png` | Preview desk QA |
| `cards/` | Bảy playable/state cards riêng |
| `build-fixture.sh` | Rebuild deterministic fixture từ study assets hiện có |

Art chỉ là paper placeholder:

- `Rain Eel` dùng River context art vì chưa có Rain Eel art riêng.
- `Extract Seam`, `Safe Tunnel` và `Veiled Vein` dùng existing stone/mine studies để phân biệt silhouette.
- Không asset nào trong fixture được promote thành canonical/runtime art.

## 3. Setup

1. Mở/in `scroll-strip-start.png` ở full size.
2. Che `resolution-outcomes.png`.
3. Nói với participant: “Bạn có 3 AP. Vuốt/focus/inspect không tốn AP. Chỉ commit vào card mới đổi game state.”
4. River đang Rain; `Rain Eel`, `River Record` và một competing `Person Today` đang visible.
5. Mine đang ở Depth 3; Working Seam ready; cả ba route/source card visible.
6. Không giải thích thêm về “đi tới” Area hoặc khoảng cách.

## 4. Task script

### Task A — Find versus act

Prompt: “Hãy xem River rồi xem Mine. Chưa chơi card nào.”

Expected:

- participant scroll/focus hai Area;
- AP vẫn là 3;
- không target Area background/header;
- không play Entrance/Spot gateway.

### Task B — Fishing opportunity

Prompt: “Bạn muốn ghi Rain Eel hôm nay, nhưng Person Today cũng sẽ rời đi khi Sleep. Hãy cho biết bạn chọn gì và thực hiện lựa chọn.”

Nếu chọn Rain Eel:

- one commit 2 AP;
- Fresh Rain Eel +1;
- River Record `1/2 → 2/2`;
- Catch card rời/flip;
- còn 1 AP;
- future Rain có thể tạo opportunity mới.

Nếu chọn Person:

- log reason;
- Rain Eel missed nhưng không khóa Fishing;
- Catch có thể quay lại ở later Rain/cycle.

Không có Begin/Land, reaction test hoặc hidden failure roll.

### Task C — Mine source versus progress

Reset về start state hoặc dùng participant khác. Prompt:

“Bạn có 2 AP dành được cho Mine hôm nay và có thể rời Mine bất cứ lúc nào. Hãy chọn action đầu tiên.”

Expected comprehension:

| Choice | AP | Depth after | Known result | Persistent consequence |
| --- | ---: | ---: | --- | --- |
| Extract Seam | 1 | 3 | Ore +1 | Seam spent until refresh |
| Safe Tunnel | 1 | 4 | Stone +1 | Seam stays ready |
| Veiled Vein | 1 | 4 | Ore category; exact revealed after commit | Seam stays ready |

Không có đáp án tối ưu cố định. Log mục tiêu participant tự nêu: material, progress hoặc optional upside.

### Task D — Leave and return

Sau một Mine action, prompt: “Hãy xem River rồi quay lại Mine.”

Expected:

- scroll/focus tốn 0 AP;
- Depth/result từ Task C không đổi;
- participant không replay Entrance hoặc route đã resolve chỉ để “di chuyển”;
- Current Frontier phản ánh state mới.

## 5. Log sheet

| Field | Cách ghi |
| --- | --- |
| `focus_cost_error` | participant trừ AP/Energy khi chỉ scroll/focus |
| `background_target` | cố play vào Area background/header |
| `gateway_search` | tìm Entrance/Spot card không có verb/state cần thiết |
| `exact_target_first` | target đúng Catch/route/source ngay lần đầu |
| `cost_recall` | nhắc đúng total cost trước commit |
| `fishing_recurrence` | hiểu missed Catch quay lại theo condition/cycle |
| `mine_persistence` | hiểu Depth giữ khi Sleep/rời Area |
| `route_intent` | participant diễn đạt source/progress/uncertainty tradeoff |
| `wrong_state_update` | cập nhật sai AP, Depth, item, record hoặc Seam state |
| `explanation_request` | facilitator phải giải thích rule nào ngoài printed text |

Không đặt pass threshold trước pilot. Desk preflight chỉ xác nhận fixture tự nhất quán.

## 6. Desk preflight

| Check | Result |
| --- | --- |
| River/Mine là hai abstract bands, không phải map | Pass |
| Card cùng Area đặt khít | Pass |
| Scroll/focus 0 AP xuất hiện ở tray và transition | Pass |
| Exact playable targets có cost/result | Pass |
| Fishing rotating opportunity khác Mine persistent frontier | Pass |
| Mine ba choice tạo state outcome khác | Pass |
| Resolution sheet khớp start state | Pass |
| Participant data | **Chưa có** |

## 7. Không được suy ra

- 3 AP remaining, Catch 2 AP và Mine 1 AP là fixture numbers.
- River Record `1/2` không chốt mastery threshold cuối.
- Rain Eel, route names và checkpoint cadence chưa là canonical content.
- Desk readability không chứng minh mobile readability hoặc player comprehension.
- River/Mine order trong sheet không phải geography hoặc final world-strip order.
