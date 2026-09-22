# Orientation fixture v0.3.3 — semantic-only Area cleanup

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED BY ACCEPTED CORRECTION]`; informed owner accepted the semantic cleanup and requested one exact final change: remove Search Side Tunnel `DEPTH +0`. Xem `pilot-results/informed-owner-final-check-2026-09-22.md`. Không phải fresh-player evidence và không có runtime authorization.

Revision này giữ navigation/index và odd-card layout đã pass ở [v0.3.2](../orientation-area-tableau-v0.3.2/README.md), rồi chỉ sửa các vấn đề quan sát được trong [informed-owner correction check](../orientation-area-tableau-v0.3.2/pilot-results/informed-owner-correction-2026-09-22.md).

## Evidence retained

- Sell được tìm đúng ở `Sell at Market`.
- Catch được tìm đúng tại River.
- `Direct Descent` được chọn đúng để tăng Mine Depth.
- Scroll được hiểu là `0 AP`; state ngoài viewport không reset.
- Mọi square được hiểu nhất quán là target. Không lặp lại câu hỏi này trong correction check.
- Sticky Area index được đọc là UI focus/scroll, không phải character movement.
- Farmhouse root interaction được hiểu đúng: commit Character để reveal selectable sub-cards.
- Home/Farm có ba target không đọc như thiếu card; khoảng trống gợi khả năng mở rộng.
- Mine cần state riêng để cho biết current Depth.

## Bounded corrections

1. Bỏ Farm State, Market State và Fish Record. Không tạo status component chỉ để mọi Area có cùng schema; card semantics tự giải thích Area.
2. Giữ duy nhất Mine Depth/checkpoint rail vì current floor không thể suy ra từ action cards.
3. Đổi system label `Person Today` thành fixture identity `Mira`; bỏ `GIFT ITEM` / `TODAY`. Presence đã có nghĩa NPC available hôm nay.
4. Bỏ `ROD` / `RAIN` khỏi Eel Sighting. Weather chuyển lên global sticky chrome và River header không còn giữ Weather state.
5. Mine chỉ giữ `DEPTH +1` trên Direct Descent và `DEPTH +0` trên Search Side Tunnel; bỏ `PICKAXE`, `READY`, `NO YIELD`, `REVEAL`.
6. Bỏ Mine footer explainer theo self-explaining-tableau rule. Đây là inference từ owner feedback, không phải direct answer cho câu hỏi footer ở v0.3.2.

Area-name index, neutral divider, scrollbar, tagless Farmhouse/Water Trough và ba-target Home từ v0.3.2 được giữ nguyên.

## Root contract

- Mọi square là interaction/commitment target.
- Chỉ state độc lập thật sự mới có horizontal status rail; không ép mọi Area có state. Status rail không nhận token.
- Signed AP cost nằm upper-left; `0 AP` chỉ dùng cho target thực sự miễn phí.
- Area background/header/index/divider/scrollbar không phải target.
- Index và manual scroll chỉ đổi UI focus; Area order không biểu diễn địa lý.
- State ở Area ngoài viewport vẫn giữ.

## Fixture contents

| Area | Square targets | Separate state |
| --- | --- | --- |
| Home / Farm | Farmhouse, Tilled Plot, Water Trough | None; card semantics carry local state |
| Commerce | Sell at Market, Mira | None |
| River | Eel Sighting | None; Weather lives in global chrome |
| Mine | Exposed Ore, Direct Descent, Search Side Tunnel | Depth/checkpoint |

Names, costs, scope and consequences remain fixture values. `Mira` is the identity of the reused portrait asset, not canonical-roster approval. The rejected Harvest Bench study remains only as superseded evidence outside this fixture. The four approved-reference Mine/Fishing images retain their existing status. Inclusion here does not promote any asset to runtime approval.

## Package

- `boards/global-area-strip.png` — `1000x4950` full strip
- `boards/global-area-strip-mobile.png` — half-scale scroll artifact
- `boards/area-index-*.png` — sticky index states at full fixture scale
- `boards/viewport-*.png` — four `500x900` phone viewports with sticky index and scrollbar
- `boards/viewport-sequence.png` — desk comparison only
- `cards/*.png` — nine `400x400` square targets
- `build-fixture.sh` — deterministic builder

## Focused informed-owner correction check

Show `viewport-sequence.png` hoặc từng viewport nếu cần phóng to, không giải thích intended answers:

1. Home/Commerce/River đã self-explain mà không cần Area state line chưa?
2. `Mira` có đọc đúng như NPC identity và Gift target mà không cần `TODAY` / `GIFT ITEM` không?
3. Global `RAIN` scope và tagless Eel Sighting có đúng không?
4. Mine Depth rail có phải status duy nhất cần tồn tại trong bốn Area này không?
5. Hai tag Depth còn lại có đủ và không dư không?

Nếu owner accept, cập nhật current design docs bằng informed-owner evidence, chạy visual/determinism QA, stage từng path, loại `tmp/`, và local commit. Fresh-player onboarding risk vẫn open.
