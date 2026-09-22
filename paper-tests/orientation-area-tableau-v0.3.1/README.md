# Orientation fixture v0.3.1 — informed-owner correction

Ngày dựng: 2026-09-22.

Trạng thái: `[SUPERSEDED AFTER INFORMED-OWNER CHECK]`; Area index passed, but Farm tags, Harvest Bench grammar and state-band recognition failed. Xem `pilot-results/informed-owner-correction-2026-09-22.md`. Không phải fresh-player evidence và không có runtime authorization.

Revision này giữ stable vertical order của [v0.3](../orientation-area-tableau-v0.3/README.md) và chỉ sửa các vấn đề quan sát được trong [informed-owner orientation check](../orientation-area-tableau-v0.3/pilot-results/informed-owner-orientation-2026-09-22.md).

## Evidence retained from v0.3

- Sell được tìm đúng ở `Sell at Market`.
- Catch được tìm đúng tại River.
- `Direct Descent` được chọn đúng để tăng Mine Depth.
- Scroll được hiểu là `0 AP`; state ngoài viewport không reset.
- Mọi square được hiểu nhất quán là target. Không lặp lại câu hỏi này trong correction check.

## Bounded corrections

1. `Sleep at Home` được thay bằng root target `Farmhouse`: Character mở/reveal house cards. Fixture không tự phát minh danh sách interior đầy đủ; TV/Weather, Bed và các card từ bản gốc cần content inventory riêng.
2. Water Trough bỏ tag `2 Plots`; chỉ giữ `WATER`.
3. Harvest Bench dùng action-art **study** mới và information hierarchy `Use Harvest Bench` / `Character` / `Ready Crops` / `Harvest up to 2 plots`. Study chưa được approve và không được dùng runtime.
4. Area-name index sticky xuất hiện trên từng viewport: `Home / Farm`, `Commerce`, `River`, `Mine`. Nó focus/scroll UI ở `0 AP`, không phải map/travel.
5. Soft-transition band đổi thành neutral Area divider, kèm scrollbar chrome và explicit UI wording để sửa movement reading.
6. Pure state đổi thành full-width dark band với `STATE ONLY · NOT A TARGET`, tách khỏi tag pill trong square card.

Không thay Mine/Fishing verb, cost, outcome hoặc approved-reference art. Không normalize tag vocabulary ngoài hai misunderstanding cụ thể ở Water Trough và Harvest Bench.

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
| Home / Farm | Farmhouse, Tilled Plot, Water Trough, Use Harvest Bench | Farm state |
| Commerce | Sell at Market, Person Today | Market state |
| River | Eel Sighting | Fish Record |
| Mine | Exposed Ore, Direct Descent, Search Side Tunnel | Depth/checkpoint |

Names, costs, scope and consequences remain fixture values. Harvest Bench action art is `study`; the four approved-reference Mine/Fishing images retain their existing status. Inclusion here does not promote any asset to runtime approval.

## Package

- `boards/global-area-strip.png` — `1000x4950` full strip
- `boards/global-area-strip-mobile.png` — half-scale scroll artifact
- `boards/area-index-*.png` — sticky index states at full fixture scale
- `boards/viewport-*.png` — four `500x900` phone viewports with sticky index and scrollbar
- `boards/viewport-sequence.png` — desk comparison only
- `cards/*.png` — ten `400x400` square targets
- `build-fixture.sh` — deterministic builder

## Focused informed-owner correction check

Show `viewport-home.png` first without explaining intended answers:

1. “Area index này khiến anh đọc thao tác là UI focus/scroll hay nhân vật di chuyển?”
2. “Khi đưa Character vào Farmhouse, anh nghĩ điều gì sẽ hiện ra?”
3. “Water Trough còn chi tiết nào vô nghĩa không?”
4. “Use Harvest Bench đang thể hiện hành động gì; crop trên bàn có còn bị đọc là forage để nhặt không?”
5. “Band ngang nào chỉ là state và không nhận interaction?”

Sau đó show Commerce/River/Mine viewports để kiểm index active state, state-only bands và navigation wording. Không hỏi lại “square nào là target”.

Nếu owner accept, cập nhật current design docs bằng informed-owner evidence, chạy visual/determinism QA, stage từng path, loại `tmp/`, và local commit. Fresh-player onboarding risk vẫn open.
