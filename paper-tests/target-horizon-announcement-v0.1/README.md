# Target-horizon announcement fixture v0.1

Ngày dựng: 2026-09-22.

Trạng thái: `[REJECTED / SUPERSEDED]`; informed owner reject premise `Tomorrow Targets` vì nó biến kế hoạch tự quyết của player thành agenda do system giao. Giữ toàn bộ package làm audit trail. Không phải fresh-player evidence và không có runtime authorization.

Fixture này đã thử trình bày `H-C` như một global Tomorrow-target surface ngoài [Weather/Season rail A](../weather-season-global-ui-v0.1/README.md). [Informed-owner scope correction](pilot-results/informed-owner-scope-correction-2026-09-22.md) cho thấy lỗi nằm ở premise, không phải arm layout: target ngày mai là kế hoạch do player tự chọn, nên một system surface liệt kê chúng làm mất cảm giác tự do.

Không chọn A, B hoặc C. Không tạo revision thay thế cùng premise.

## Fixed contract

- Weather rail A giữ nguyên Season + Today Weather + Tomorrow Weather + AP.
- Target horizon là global planning UI riêng; không phải on-table card, Area status hoặc commitment target.
- Root chỉ cần báo có context ngày mai; inspect `0 AP` cho compatibility/timing/recovery.
- Fixture dùng một Fresh target và một Processed target:
  - Nell Gift: `Fresh · Forage · Herb`;
  - Pantry Request: `Processed · Crop`, cần prepare trước một Sleep.
- Cả hai có recovery cue `RETURNS LATER`; miss không fail save.
- Nell/Pantry, timing và wording là fixture values; không promote roster/request content.
- Không hiện exact reward vì paper sensitivity chưa tìm thấy decision value cần nó.

## Historical arms

### A — compact summary + inspect

- resting state chỉ báo `2 contexts to plan for`;
- explicit `INSPECT` control mở hai horizontal rows;
- ít chiếm tableau nhất nhưng đặt discoverability vào một UI action miễn phí.

Arm này không còn là proposed baseline.

### B — always-visible rows

- cả hai compatibility/timing/recovery rows luôn hiện;
- không cần inspect để lấy minimum information;
- tốn nhiều vertical space và có nguy cơ biến global chrome thành dashboard dài.

### C — square reminder stress comparator

- cùng thông tin nhưng dùng near-square reminder tiles;
- kiểm tra liệu square silhouette ngoài tableau vẫn gây false playable-target affordance;
- không phải recommended baseline.

## Package

- `boards/stimulus-a-compact-summary.png` — A resting state, `500x900`.
- `boards/stimulus-a-inspect-open.png` — A inspect state, `500x900`.
- `boards/stimulus-b-always-visible-rows.png` — B, `500x900`.
- `boards/stimulus-c-square-reminder-comparator.png` — C stress comparator, `500x900`.
- `boards/comparison-sheet.png` — desk-only arm overview.
- `test-script/informed-owner-script.md` — historical script; không chạy tiếp vì premise đã bị reject.
- `pilot-results/informed-owner-scope-correction-2026-09-22.md` — owner evidence loại global Tomorrow-target surface.
- `build-fixture.sh` — deterministic code-native builder; consumes accepted Weather UI board without modifying it.

## Scope correction

- Weather/Season rail tiếp tục hợp lệ vì nó mô tả world state ngoài quyền quyết định của player.
- Player tự quyết định muốn Keep, Gift, Process, Sell hoặc chuẩn bị gì ngày mai.
- Không biến những lựa chọn đó thành `Tomorrow Targets`, checklist, agenda hoặc recommended action do system phát ra.
- Nếu một external context thật sự tồn tại—Person availability, accepted request, Processor completion—nó chỉ hiển thị ở card/source/inspect thuộc chính context đó và vẫn là option, không được tổng hợp thành to-do rail.
- Storage design không được cứu bằng prescriptive forecast UI. `S∞` no-perish vẫn là baseline.

## Decision boundary

Fixture không được promote/reuse làm direction. Raster/HTML presentation có thể giữ làm evidence cho failure mode, nhưng không được đưa vào runtime hoặc dùng làm nền cho revision nếu chưa thay premise.
