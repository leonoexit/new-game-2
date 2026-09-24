# Weather / Season global UI fixture v0.1

Ngày dựng: 2026-09-22.

Trạng thái: `[HISTORICAL WEATHER / SEASON UI FIXTURE — TOMORROW FIELD SUPERSEDED]`; arm A được informed owner accept về hierarchy/non-target appearance, nhưng product owner sau đó bỏ Tomorrow khỏi global rail. Không phải fresh-player evidence và không có runtime authorization.

Later owner clarification 2026-09-23: TV is a selectable Farmhouse sub-card. Playing it on day D costs 0 AP and reports D+1 Weather on TV; Sleep uses that forecast. If TV was not played, Sleep determines D+1 Weather without opening TV. The current global rail carries Season, Today Weather and AP, with no Tomorrow field. This fixture tested a **filled** Tomorrow field and its presentation; that field is superseded. The rail remains a state display rather than the TV action target. No historical board or acceptance response is rewritten.

The revised three-field rail and TV report have not received a separate visual comprehension result. This does not undo the owner's contract correction or turn the old four-field board into current evidence.

Package này tiếp tục từ [orientation v0.3.4](../orientation-area-tableau-v0.3.4/README.md) mà không mở lại bài test Area orientation. Nó chỉ thử treatment cho `Day / Season / Weather / AP` trong sticky global chrome nằm **ngoài play tableau**.

## Fixed contract inherited from v0.3.4

- Weather là global state; không đặt `RAIN` lại trong Eel Sighting hoặc River header.
- Mọi square trên Area tableau là interaction/commitment target.
- Global chrome không thuộc Area tableau và không dùng AP-cost badge, stack slot hoặc consequence line của on-table card.
- Rail mô tả world/resource state; không tổng hợp những việc player có thể tự chọn thành `Tomorrow Targets`, agenda hoặc recommended action.
- Scroll/focus/inspect vẫn là `0 AP`; state ngoài viewport không reset.
- Season length, final AP/day, Weather cadence và forecast depth vẫn chưa chốt. `DAY 5`, `SPRING`, `RAIN`, `SUNNY`, `WINDY`, `6 AP` chỉ là fixture values.

## Test question

Treatment nào cho phép owner tìm `Season`, Weather hôm nay, forecast và AP đủ nhanh nhưng không đọc Weather/Season như square playable targets?

## Arms

### A — always-visible rail

- một shallow dock chia ba field: Season, Weather today/tomorrow, Energy;
- forecast ngày mai luôn hiện, không cần mở panel;
- silhouette cố ý rộng và dính vào chrome để khác root card.

This was the treatment selected in the historical test. Its `Tomorrow` field was later removed by owner correction; the shallow non-target rail treatment remains useful evidence.

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
- the historical filled `Tomorrow` field was understood, but it was later removed from default chrome;
- B và C được giữ làm comparator/audit trail, không phải current treatment;
- art/card image có thể thay identity field của Season/Weather về sau, miễn global dock vẫn nằm ngoài play tableau và không tạo false target affordance.
- [Target-horizon announcement v0.1](../target-horizon-announcement-v0.1/README.md) về sau bị informed owner reject: target ngày mai là player intent, không phải một field cần thêm vào accepted rail.

Đây là informed-owner acceptance cho hierarchy/presentation, không phải fresh-player comprehension pass. Exact art replacement vẫn là future direction và chưa authorize raster generation.

## Decision boundary

Fixture có thể hỗ trợ chọn information hierarchy và interaction model. Nó không authorize:

- runtime implementation;
- Season length, Weather mechanics/cadence hoặc future forecast upgrade depth; historical acceptance of `Today + Tomorrow` does not override the later TV-only forecast correction;
- sửa card Eel Sighting, River tableau hoặc v0.3.4;
- claim fresh-player comprehension.

Nếu thêm visual richness, vòng art tiếp theo chỉ được thay identity treatment bên trong global chrome; không chuyển Weather/Season thành on-table square cards.
