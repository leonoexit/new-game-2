# Informed-owner acceptance — Weather / Season global UI v0.1 — 2026-09-22

Tester: current product owner. Đây là informed-owner evidence, không phải fresh-player/new-player evidence.

Stimulus: arm A `boards/stimulus-a-always-visible-rail.png`, sau khi owner đã xem comparison fixture A/B/C.

## Questions

1. “Các ô `Season / Weather / Energy` trong A có bị hiểu là card có thể đặt Character/Tool vào không?”
2. “Bạn có tìm ngay được Season hiện tại, Weather hôm nay, Weather ngày mai và AP còn lại không?”
3. “Việc luôn hiện `Tomorrow` đã đủ chưa, hay bạn vẫn muốn nút mở forecast nhiều ngày?”

## Verbatim response

> 1. không
>
> 2. có ngay lặp tức, ui này có vẻ tuân thủ tốt các best practice về design . Về sau muốn lấy lá bài thay thế vào các ô mùa và thời tiết tôi nghĩ cũng dễ, vì bản thân hình ảnh của 1 card đã self-explain
>
> 3. Đủ

## Observed design evidence

- `[ACCEPT]` Arm A không bị đọc như playable/commitment target.
- `[ACCEPT]` Season, Weather hôm nay, Weather ngày mai và AP được tìm thấy ngay.
- `[ACCEPT]` Always-visible `Tomorrow` là đủ trong default global chrome; không cần forecast disclosure mặc định.
- `[PREFERENCE]` Owner thấy A dễ nhìn nhất trong comparison A/B/C.
- `[FUTURE DIRECTION]` Season/Weather identity fields có thể dùng card art về sau vì image có thể self-explain identity/state. Điều này không authorize asset generation và không chuyển các field thành on-table targets.
- `[RETAIN]` B collapsed/expanded và C square-tile stress comparator được giữ làm audit trail; feedback hiện tại không cần promote chúng.

## Result

`[INFORMED-OWNER ACCEPTED]`: arm A always-visible rail là current Weather/Season global UI treatment cho paper design. Nó nằm trong sticky global chrome ngoài play tableau, hiển thị Season + Today Weather + Tomorrow Weather + remaining AP, và không dùng on-table square-card grammar.

Acceptance này không chốt Season length, Weather cadence, future 3-day upgrade, art cuối hoặc runtime implementation. Fresh-player comprehension risk vẫn open.
