# Orientation fixture v0.3.2 — tag/Harvest/state correction

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED AFTER INFORMED-OWNER CHECK]`; navigation/index and odd-card layout passed, but non-Mine state rails and several card tags were rejected. Xem `pilot-results/informed-owner-correction-2026-09-22.md`. Không phải fresh-player evidence và không có runtime authorization.

Revision này giữ navigation/index đã pass ở [v0.3.1](../orientation-area-tableau-v0.3.1/README.md) và chỉ sửa các vấn đề quan sát được trong [informed-owner correction check](../orientation-area-tableau-v0.3.1/pilot-results/informed-owner-correction-2026-09-22.md).

## Evidence retained

- Sell được tìm đúng ở `Sell at Market`.
- Catch được tìm đúng tại River.
- `Direct Descent` được chọn đúng để tăng Mine Depth.
- Scroll được hiểu là `0 AP`; state ngoài viewport không reset.
- Mọi square được hiểu nhất quán là target. Không lặp lại câu hỏi này trong correction check.
- Sticky Area index được đọc là UI focus/scroll, không phải character movement.
- Farmhouse root interaction được hiểu đúng: commit Character để reveal selectable sub-cards.

## Bounded corrections

1. Farmhouse bỏ `CHARACTER` / `INTERIOR`; art + title + consequence giữ root interaction, không lặp schema bằng tag.
2. Water Trough bỏ tag `WATER`; không thay art, cost hoặc consequence.
3. Harvest Bench được rút khỏi orientation fixture. Interaction/action study v0.1 bị supersede vì tạo false sickle/crop-state mechanic. Project hypothesis phải được thiết kế riêng trước khi trở lại root tableau.
4. Filled state band đổi thành inline read-only rail trên Area background: state line + `READ ONLY · ... · NO INTERACTION`, không có card-like container.

Area-name index, neutral divider và scrollbar từ v0.3.1 được giữ nguyên vì movement reading đã pass.

Không thay Mine/Fishing verb, cost, outcome hoặc approved-reference art. Không normalize tag vocabulary ngoài misunderstanding cụ thể ở Farmhouse và Water Trough.

## Root contract

- Mọi square là interaction/commitment target.
- Pure status là horizontal strip/band và không nhận token.
- Signed AP cost nằm upper-left; `0 AP` chỉ dùng cho target thực sự miễn phí.
- Area background/header/index/divider/scrollbar không phải target.
- Index và manual scroll chỉ đổi UI focus; Area order không biểu diễn địa lý.
- State ở Area ngoài viewport vẫn giữ.

## Fixture contents

| Area | Square targets | State-only band |
| --- | --- | --- |
| Home / Farm | Farmhouse, Tilled Plot, Water Trough | Farm state |
| Commerce | Sell at Market, Person Today | Market state |
| River | Eel Sighting | Fish Record |
| Mine | Exposed Ore, Direct Descent, Search Side Tunnel | Depth/checkpoint |

Names, costs, scope and consequences remain fixture values. The rejected Harvest Bench study remains only as superseded evidence outside this fixture. The four approved-reference Mine/Fishing images retain their existing status. Inclusion here does not promote any asset to runtime approval.

## Package

- `boards/global-area-strip.png` — `1000x4950` full strip
- `boards/global-area-strip-mobile.png` — half-scale scroll artifact
- `boards/area-index-*.png` — sticky index states at full fixture scale
- `boards/viewport-*.png` — four `500x900` phone viewports with sticky index and scrollbar
- `boards/viewport-sequence.png` — desk comparison only
- `cards/*.png` — nine `400x400` square targets
- `build-fixture.sh` — deterministic builder

## Focused informed-owner correction check

Show `viewport-home.png` first without explaining intended answers:

1. “Area index vẫn đọc là UI focus/scroll chứ?”
2. “Farmhouse không còn tag: anh vẫn hiểu interaction của nó như thế nào?”
3. “Water Trough không còn tag: card còn đủ rõ không?”
4. “Việc bỏ Harvest Bench khỏi Home có loại bỏ false sickle/crop-state mechanic không; ô trống còn lại có khiến tableau trông như thiếu card không?”
5. “Nhìn riêng dòng `FARM STATE · 2 / 4 PLOTS ACTIVE · WATERED TODAY`: anh có nghĩ có thể tương tác/thả card lên đó không?”

Sau đó show Commerce/River/Mine viewports để kiểm active index và read-only state rails. Không hỏi lại “square nào là target”.

Nếu owner accept, cập nhật current design docs bằng informed-owner evidence, chạy visual/determinism QA, stage từng path, loại `tmp/`, và local commit. Fresh-player onboarding risk vẫn open.
