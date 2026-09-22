# Weather / Season global UI fixture v0.1

Ngày dựng: 2026-09-22.

Trạng thái: `[CURRENT WEATHER / SEASON UI FIXTURE]`; arm A được informed owner accept. Không phải fresh-player evidence và không có runtime authorization.

Package này tiếp tục từ [orientation v0.3.4](../orientation-area-tableau-v0.3.4/README.md) mà không mở lại bài test Area orientation. Nó chỉ thử treatment cho `Day / Season / Weather / AP` trong sticky global chrome nằm **ngoài play tableau**.

## Fixed contract inherited from v0.3.4

- Weather là global state; không đặt `RAIN` lại trong Eel Sighting hoặc River header.
- Mọi square trên Area tableau là interaction/commitment target.
- Global chrome không thuộc Area tableau và không dùng AP-cost badge, stack slot hoặc consequence line của on-table card.
- Scroll/focus/inspect vẫn là `0 AP`; state ngoài viewport không reset.
- Season length, final AP/day, Weather cadence và forecast depth vẫn chưa chốt. `DAY 5`, `SPRING`, `RAIN`, `SUNNY`, `WINDY`, `6 AP` chỉ là fixture values.

## Test question

Treatment nào cho phép owner tìm `Season`, Weather hôm nay, forecast và AP đủ nhanh nhưng không đọc Weather/Season như square playable targets?

## Arms

### A — always-visible rail

- một shallow dock chia ba field: Season, Weather today/tomorrow, Energy;
- forecast ngày mai luôn hiện, không cần mở panel;
- silhouette cố ý rộng và dính vào chrome để khác root card.

Đây là treatment được informed owner chọn: cung cấp `Today + Tomorrow` không cần interaction phụ và không bị đọc như playable target.

### B — collapsible forecast

- Weather hôm nay có ưu tiên cao;
- forecast nằm sau một explicit UI disclosure control;
- có cả state đóng và state mở để kiểm tra liệu thao tác expand có đáng đổi lấy diện tích viewport hay không;
- state mở dùng ba ngày chỉ để stress-test density, không chọn 3-day forecast làm luật.

### C — square-tile stress comparator

- Season và Weather dùng hai card-like tile gần square;
- đặt ngoài tableau nhưng cố ý giữ silhouette dễ nhầm với target;
- dùng như comparator để kiểm tra ranh giới của square-target contract, không phải recommended baseline.

## Package

- `boards/stimulus-a-always-visible-rail.png` — mobile stimulus A, `500x900`.
- `boards/stimulus-b-collapsed-forecast.png` — mobile stimulus B đóng, `500x900`.
- `boards/stimulus-b-expanded-forecast.png` — mobile stimulus B mở, `500x900`.
- `boards/stimulus-c-square-tile-comparator.png` — mobile stress comparator C, `500x900`.
- `boards/comparison-sheet.png` — desk-only arm overview; không dùng thay stimulus riêng trong blind questions.
- `test-script/informed-owner-script.md` — bounded test script; không chứa result.
- `pilot-results/informed-owner-acceptance-2026-09-22.md` — acceptance record cho arm A.
- `build-fixture.sh` — deterministic code-native builder; chỉ đọc board đã accepted của v0.3.4, không rebuild hoặc sửa orientation fixture.

## Informed-owner acceptance

[Acceptance record](pilot-results/informed-owner-acceptance-2026-09-22.md) hỗ trợ các kết luận bounded sau:

- arm A không bị hiểu là nơi commit Character/Tool/Item;
- Season, Weather hôm nay, Weather ngày mai và AP được tìm thấy ngay;
- always-visible `Tomorrow` là đủ; không cần disclosure/expanded forecast trong default chrome;
- B và C được giữ làm comparator/audit trail, không phải current treatment;
- art/card image có thể thay identity field của Season/Weather về sau, miễn global dock vẫn nằm ngoài play tableau và không tạo false target affordance.

Đây là informed-owner acceptance cho hierarchy/presentation, không phải fresh-player comprehension pass. Exact art replacement vẫn là future direction và chưa authorize raster generation.

## Decision boundary

Fixture có thể hỗ trợ chọn information hierarchy và interaction model. Nó không authorize:

- runtime implementation;
- Season length, Weather mechanics/cadence hoặc future forecast upgrade depth; acceptance chỉ chọn `Today + Tomorrow` cho default global presentation;
- sửa card Eel Sighting, River tableau hoặc v0.3.4;
- claim fresh-player comprehension.

Nếu thêm visual richness, vòng art tiếp theo chỉ được thay identity treatment bên trong global chrome; không chuyển Weather/Season thành on-table square cards.
