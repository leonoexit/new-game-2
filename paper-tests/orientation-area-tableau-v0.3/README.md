# Orientation fixture v0.3 — vertical Area tableaus

Ngày dựng: 2026-09-22.

Trạng thái: `[CURRENT ORIENTATION FIXTURE]`; render QA pending, informed-owner orientation check open.

Mục tiêu: kiểm tra world như một dải UI dọc gồm bốn abstract Area tableaus, không phải map, geography hoặc travel surface. Fixture kế thừa target/status/cost grammar từ [Mine + Fishing v0.2.4](../mine-fishing-area-tableau-v0.2.4/README.md).

## One variable

v0.3 chỉ mở rộng từ River/Mine sang một stable global order:

```text
HOME / FARM
COMMERCE
RIVER
MINE
```

Không có Area index/anchor trong first arm. Scroll/focus/inspect là `0 AP`; only square targets commit gameplay. Nếu scroll burden xuất hiện, index là revision riêng thay vì được thêm trước evidence.

## Root contract

- Mọi square là interaction/commitment target.
- Pure status là horizontal strip và không nhận token.
- Signed AP cost nằm upper-left; `0 AP` chỉ in trên square target thực sự miễn phí.
- Area background/header không có border/hit target.
- Area order là interface memory, không phải gần/xa.
- State ở Area ngoài viewport vẫn giữ.
- Tag vocabulary giữ nguyên fixture hiện có; cleanup deferred.

## Fixture contents

| Area | Square targets | Status |
| --- | --- | --- |
| Home / Farm | Sleep at Home, Tilled Plot, Water Trough, Harvest Bench | Farm state |
| Commerce | Sell at Market, Person Today | Market state |
| River | Eel Sighting | Fish Record |
| Mine | Exposed Ore, Direct Descent, Search Side Tunnel | Depth/checkpoint |

Names, costs, project scope and consequences are fixture values. The four Mine/Fishing images remain user-approved art references; reused Home/Commerce/Project images retain their source-record statuses and are not promoted by inclusion here.

## Package

- `boards/global-area-strip.png` — `1000x4950` full strip
- `boards/global-area-strip-mobile.png` — half-scale scroll artifact
- `boards/viewport-*.png` — four phone-size scroll positions
- `boards/viewport-sequence.png` — desk comparison only
- `cards/*.png` — ten `400x400` square targets
- `build-fixture.sh` — deterministic builder

## Informed-owner test

Show one viewport at a time in order; do not show the sequence sheet first.

1. “Bạn đang nhìn Area nào? Ngoài chữ header, chi tiết hình ảnh/màu nào khiến bạn nghĩ vậy?”
2. “Square nào là target? Strip nào chỉ báo trạng thái?”
3. “Từ Home/Farm, hãy tìm nơi Sell, Catch và tăng Mine Depth. Scroll có tốn AP hoặc đổi state không?”
4. “Khi target vừa rời viewport, bạn có nghĩ state/action bị reset không?”
5. “Đến lúc nào dải bắt đầu dài tới mức anh muốn có Area index?”

This is informed-owner evidence. Fresh-player navigation risk remains open because no additional tester is available.
