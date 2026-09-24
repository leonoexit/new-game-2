# On-table card shape decision 09 — square world cards

Ngày quyết định: 2026-09-22.

Trạng thái: `[DECIDED]` cho hình học của card nằm trực tiếp trên Area tableau; không chốt pixel size runtime, card density cuối, art, balance hoặc content.

## 1. Decision

Mọi card được đặt và chơi trực tiếp trên Area tableau dùng footprint **square 1:1**.

Quyết định này áp dụng cho Action, Opportunity, Person context, persistent entity/state, route, source, Project và các world card khác. Portrait rectangle không còn là primary on-table shape. Fixture portrait cũ vẫn được giữ làm audit trail cho rule text, không điều khiển layout mới.

Square target ở trạng thái thường chỉ mang:

- square art hoặc identity field;
- name;
- một đến ba tag quyết định quan trọng;
- signed AP cost ở upper corner hoặc progress ngắn;
- ready, locked, selectable hoặc persistent state.

Các thành phần trên chưa đủ nếu player vẫn phải dịch schema thành hành động. Root grammar hiện hành là: **action art truyền immediate verb + target; opportunity art truyền visible target/context; title giữ identity/context; signed AP cost nằm ở upper corner; tag chỉ giữ state/requirement thật sự cần; dòng mô tả giữ consequence/trade-off**. Với opportunity, Tool/Item được stack vào cung cấp verb. Dòng mô tả không lặp lại art như CTA. Pure status không nhận commit phải dùng strip/control thay vì square-card silhouette.

Tag vocabulary chưa được normalize ở v0.2.4. Informed owner nhận thấy tag inconsistent/redundant nhưng cho phép defer vì title + art đã self-explain; chỉ sửa khi có observed misunderstanding.

Rule dài, provenance đầy đủ, exception, recovery và outcome sequence nằm trong focus/detail panel hoặc resolution sheet. Panel đó có thể là rectangle vì nó là UI overlay, không phải card trên tableau.

## 2. Why this is the current product decision

- Square footprints ghép thành một Area tableau khít mà không tạo cảm giác danh sách portrait dài.
- Hai cột square giữ hit target lớn và giảm scroll burden trên mobile.
- Một universal footprint giúp Action, Person, Catch, route và persistent state dùng chung visual grammar.
- Art contract 1:1 không cần crop méo hoặc che giấu asset mismatch.
- Area background/header/status strip vẫn đọc khác card, nên người chơi dễ phân biệt rulescope với exact target.

Đây là quyết định hình học và information hierarchy, không phải bằng chứng rằng mật độ, badge size hoặc Area length hiện tại đã final.

## 3. Shape taxonomy

| Surface | Shape | Có card border/hit target? | Nội dung |
| --- | --- | --- | --- |
| On-table playable/interaction target | Square 1:1 | Có | art, name, upper-corner cost, minimal state/requirement, consequence |
| Focus/detail panel | Rectangle tùy viewport | UI panel, không giả làm root card | full rule, preview, recovery, provenance |
| Area header/background | Band/field | Không | identity, palette, motif, scoped condition |
| Independent persistent summary | Horizontal status strip/rail | Không phải action target | chỉ state không thể suy ra từ các target đang hiện |
| Depth/checkpoint summary | Horizontal status strip | Không phải route target | Depth, band, next checkpoint/history cue |
| Sticky HUD/tray | Strip/control hoặc card-like UI ngoài tableau | UI | AP, Character, Tool, Weather, Season, day/condition |

Nếu một horizontal strip về sau có verb/target riêng, nó phải được redesign thành square card hoặc explicit control; không âm thầm biến status strip thành card.

Không tạo status component chỉ để mọi Area có cùng schema. v0.3.4 loại Farm State, Market State và Fish Record vì card semantics đã tự giải thích; Mine Depth/checkpoint được giữ vì current Depth không thuộc riêng action card nào.

## 4. Tableau layout contract

- Card cùng Area đặt khít theo grid; mobile baseline để test là hai cột.
- Khoảng cách giữa card trong Area nhỏ hơn khoảng chuyển giữa Area.
- Area được nhận bằng shared background/palette/motif và header không có card border.
- Manual scroll, focus và inspect vẫn là `0 AP` và không phải travel.
- Off-screen Area giữ nguyên state.
- Area có thể dài hơn một viewport; đây vẫn là open density question, không suy ra từ fixture.

## 5. Information hierarchy test

Ở root tableau, participant phải đọc được trước khi mở detail:

1. đây là card hay Area/status UI;
2. card là gì;
3. selectable/ready/locked/persistent;
4. signed AP cost ở vị trí nhất quán và state change quan trọng nhất;
5. immediate verb từ action art, visible target từ opportunity art, hoặc `state only`;
6. exact detail có thể inspect miễn phí.

Ở focus/detail panel, participant phải tìm được:

- exact commit inputs và total cost;
- deterministic result hoặc category-known result;
- state changes sau resolve;
- expiry/refresh/recovery;
- điều gì không thay đổi, ví dụ Mine Depth khi scroll đi.

## 6. Evidence gate

[Mine + Fishing Area-tableau fixture v0.2](../../paper-tests/mine-fishing-area-tableau-v0.2/README.md) là first shape-conformant paper artifact. [v0.2.4](../../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md) sửa target/cost grammar. [Global orientation v0.3.4](../../paper-tests/orientation-area-tableau-v0.3.4/README.md) là current Area fixture. [Weather/Season global UI v0.1](../../paper-tests/weather-season-global-ui-v0.1/README.md) informed-owner accept một shallow always-visible rail ngoài tableau; Season/Weather/AP đọc ngay mà không thành playable target. Fresh-player evidence unavailable.

Không promote tên, cost, mastery threshold, art study hoặc grid size trong fixture thành canonical/runtime content.

## 7. Superseded presentation

- Portrait cards trong Mine/Fishing fixture v0.1 chỉ còn là rule-text evidence.
- Spatial orientation fixtures v0.1/v0.2 chỉ còn là audit/art study.
- Final on-table card không dùng portrait rectangle làm primary footprint.

## 8. Open questions

- Exact logical square-card size và badge hierarchy trên phone.
- Hai cột luôn dùng hay chuyển một cột ở accessibility size.
- Một Area dài hơn viewport tới mức nào trước khi cần local index.
- Header Area luôn hiện hay chỉ khi onboarding/focus.
- Art-to-UI ratio trong square card.
- Hover/focus/selected treatment và tap target padding.
- Final Season/Weather field art và future forecast-upgrade depth; later owner correction keeps the shallow global rail for Season, Today Weather and AP, while Tomorrow forecast is shown by TV inside Farmhouse rather than an always-visible field.
- Generated abstraction backgrounds that preserve card dominance and Area identity.

## 9. First comprehension correction

[Internal informed pilot 01](../../paper-tests/mine-fishing-area-tableau-v0.2/pilot-results/internal-informed-pilot-01.md) nhận đúng square-card silhouette nhưng dừng ở Task B: noun badges và detail schema không cho biết hành động một cách tự nhiên. v0.2.1–v0.2.3 sửa text/art nhưng [commitment check 04](../../paper-tests/mine-fishing-area-tableau-v0.2.3/pilot-results/informed-commitment-check-04.md) cho thấy square `Mine State` vẫn đọc như target và generic Tool không khớp movement. [v0.2.4](../../paper-tests/mine-fishing-area-tableau-v0.2.4/README.md) sửa hai lỗi đó; informed owner accepted, fresh-player evidence vẫn unavailable.
