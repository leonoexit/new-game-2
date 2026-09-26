# Person, kết bạn và Heart — quyết định thiết kế

Ngày ghi nhận: 2026-09-20.

Tài liệu lưu kết quả trao đổi sau bản spec gốc. Phân biệt quyết định của người dùng với giá trị tạm tính và đề xuất chưa duyệt. Chưa triển khai demo.

## 0. Thuật ngữ hiện hành

- Dùng **Person** để gọi các lá con người. Không dùng “NPC” làm thuật ngữ thiết kế hiện hành vì từ này dễ kéo cách hiểu về nhân vật nền, hội thoại hoặc mô phỏng hành vi không đúng với hướng đang xét.
- Tên file và các trích dẫn từ tài liệu cũ có thể còn chữ “NPC”; chúng không thay đổi thuật ngữ hiện hành.

## 1. Phạm vi trải nghiệm

- Người dùng muốn nhân vật có đặc tính và hành vi/khả năng riêng, nhưng không muốn trải nghiệm dựa vào hội thoại hoặc chuỗi story. Lore và backstory vẫn có chỗ.
- Person không bắt buộc tự hành động để được cảm nhận là nhân vật. Người chơi sử dụng khả năng của lá Person vẫn là một hướng hợp lệ.
- Điều khiển hơi giống Stacklands là yêu cầu tối thiểu riêng; đạt điều khiển không chứng minh game đã đạt về trải nghiệm. Xem [tham chiếu Stacklands](STACKLANDS-CONTROL-REFERENCE.md).
- Các câu trong spec cũ như “NPC không phải Spell Card”, “NPC không phải effect” là cách gọi cũ và không được dùng để loại bỏ hướng thiết kế người dùng đang xem xét.

### Person được phép vận hành như reusable spell

- **Đã chốt:** không dùng tiêu chí “khả năng này có thể thay bằng Tool, Spell hoặc UI không?” để loại một cơ chế Person.
- Person là lá persistent và collectible, có activated ability. Khi sử dụng, lá có thể vận hành giống một reusable spell: tiêu Heart riêng, tạo hiệu ứng, rồi vẫn được giữ lại.
- Sự khác biệt với spell dùng một lần nằm ở toàn bộ vòng đời của lá: gặp theo lịch, kết bạn để thu nhận, giữ trong save, gặp lại để hồi Heart và tái sử dụng.
- Khả năng Person được đánh giá theo chất lượng lựa chọn, độ rõ, độ khác biệt, nhịp Heart, điều kiện sử dụng và nguy cơ phá hệ thống. Tính cách, vai trò, tên, ngoại hình và backstory có thể được gắn sau để giải thích vì sao khả năng thuộc về Person đó; chúng không phải bằng chứng bắt buộc rằng hiệu ứng “chỉ con người mới làm được”.

## 2. Gặp và kết bạn

Khung đã được người dùng đồng ý để tiếp tục thiết kế:

1. Tại địa điểm, người chơi thấy những lá Person có thể gặp.
2. Xem đặc tính và điều kiện kết bạn để lựa chọn.
3. Tặng món quà hợp lệ để kết bạn và giữ lá Person.

### Chi phí

- Thấy Person, xem lá hoặc bỏ qua không mất AP.
- AP bị tiêu khi thực hiện tặng quà hoặc kết bạn, cùng với món quà.
- Một lần tặng quà giúp kết bạn là một hành động, không tính hai lần AP.
- **1 AP/lần là giá trị tạm tính** do người dùng đề xuất. Chưa xác định tổng AP mỗi ngày hoặc cân bằng chi phí.
- Chưa có quyết định tạo hai nguồn lực Energy và AP tách biệt. Cách gọi và quan hệ với hệ Energy trong spec cần thống nhất sau.

### Hiện diện và bỏ qua

- Hướng đã ghi nhận: danh sách Person có thể gặp thay đổi theo ngày/mùa. Chưa chốt lịch cố định, ngẫu nhiên hoặc kết hợp, cũng chưa chốt số Person mỗi nơi.
- **Đã chốt:** khi ngày mới bắt đầu, game tự động công bố toàn bộ Person có thể gặp trong ngày đó. Người chơi không phải mở hoặc kiểm tra từng địa điểm/hoàn cảnh để dò xem có Person hay không.
- Thông tin công bố cần cho biết Person gắn với địa điểm hoặc hoàn cảnh nào trong ngày. Đây là cơ hội gặp hôm nay, không có nghĩa Person đứng bất động chờ người chơi cả ngày.
- Person có thể gặp trong suốt ngày đó. Người chơi có thể xem, đi kiếm quà rồi quay lại mà không mất cơ hội.
- Sang ngày mới, cập nhật danh sách theo quy tắc ngày/mùa. Nếu người ấy vắng, chờ lần xuất hiện sau.
- Bỏ qua không làm mất vĩnh viễn cơ hội kết bạn.

## 3. Người đã kết bạn vẫn thuộc về thế giới

**Yêu cầu bắt buộc của người dùng: Person đã kết bạn vẫn xuất hiện trong thế giới theo lịch.**

Giữ lá không làm nhân vật biến mất khỏi địa điểm. Tương tác lại cần có giá trị nhỏ; không cấp thêm bản sao Person để thay cho giá trị đó.

Vị trí lưu lá đã giữ — hand, vùng bạn bè hoặc cách khác — chưa chốt. Ý tưởng mọi Person có sẵn trên hand từ đầu và dùng đúng ngày/mùa được tăng cường từng là một giả thuyết; không phải quyết định đã duyệt.

## 4. Heart đã được chọn

Người dùng đã chọn **Heart** làm hướng giải quyết giá trị của tương tác lại, thay vì tiếp tục tìm một loại phần thưởng khác.

| Trạng thái trước tương tác | Chi phí | Kết quả |
| --- | --- | --- |
| Chưa kết bạn | AP + quà hợp lệ | Giữ lá Person + nhận Heart |
| Đã kết bạn | AP + quà hợp lệ | Nhận Heart; không thêm bản sao Person |

### Hướng hiện tại: Heart gắn riêng với từng người

Ban đầu AI đề xuất Heart là tài nguyên chung. Sau đó người dùng nêu cách hiểu cụ thể hơn: **chơi Person cần Heart từ chính người ấy**, và **mỗi người chỉ được nhận quà một lần mỗi ngày**. Đây là hướng đang được xác nhận trong trao đổi, thay cho giả định Heart dùng chung.

- Tặng quà cho Person A tạo Heart gắn với A. Lần tặng giúp kết bạn cũng thuộc giới hạn tặng quà của A trong ngày đó.
- Để chơi khả năng của Person A đã sở hữu, cần đủ và **tiêu** Heart của A. Heart của B không thay thế được.
- Sử dụng khả năng giữ lại lá Person và quan hệ đã có. Heart ở đây là nguồn lực tiêu được, chưa phải cấp độ tình bạn của Person.
- Mỗi Person nhận tối đa một món quà/ngày; tổng số người có thể tặng còn phụ thuộc AP và tài nguyên.
- Giới hạn tặng quà là giới hạn nguồn sinh Heart, **chưa đồng nghĩa với chỉ được chơi Person một lần/ngày**. Nếu cho tích trữ Heart thì có thể có nhiều lần sử dụng, trừ khi bổ sung giới hạn khác.
- **Đã chốt: Heart tồn tại qua ngày và có giới hạn tích trữ riêng cho từng Person.** Chưa chốt con số giới hạn.
- Ở khung Person chung ban đầu, lượng Heart mỗi quà và chi phí mỗi khả năng còn mở; **Nell V0 về sau có luật riêng CG-50**: một Gift hợp lệ cho 1 Nell Heart, ability dùng 1 Heart/lần. Không áp số Nell cho Person tương lai.

**CG-48 · chủ dự án chốt khi Heart đã đầy (2026-09-25):** nếu Heart của Person đang bằng cap riêng, người chơi giữ quà và chưa dùng Gift. Chạm Gift lúc này là thao tác **không hợp lệ**: không tiêu item, AP, không ghi đã Gift hôm nay và không tạo Heart. Quà đã Collect ở Item vẫn ở Item; Wild Herb chưa Collect thì vẫn là world card theo luật tồn tại riêng, không tự chuyển vào túi. Khi Heart giảm xuống dưới cap, có thể Gift trong một ngày Person hiện diện nếu các điều kiện Gift khác còn đúng. Đây là quy tắc chung cho Person; V0 hiện chỉ có Nell hoạt động. Quyết định **không chốt con số cap**, Gift preference hoặc phí Gift cụ thể. [Kiểm giấy Nell hai Season 03](NELL-TWO-SEASON-GIFT-HEART-CAP-PAPER-CHECK-03.md) dùng cap `2` như fixture riêng.

**CG-49 · lựa chọn chuyển thể về quà Nell V0 (2026-09-25):** theo ủy quyền xử lý Gift preference, đúng item identity `Wild Herb` đã Collect vào Item là quà hợp lệ duy nhất cho Nell trong V0; [kiểm nguồn 04](NELL-WILD-HERB-GIFT-ELIGIBILITY-AUDIT-04.md) ghi lý do và ngoại lệ. Đây không là danh mục quà chung cho mọi Person. Phí Gift, lượng Heart và trị số cap vẫn phải phân biệt với điều kiện item này; `Fresh · Forage · Herb` trong fixture cũ không còn là cách kiểm loại lá/nguồn Gift hiện hành.

**CG-50 · lựa chọn chuyển thể cho Nell V0 sau trace (2026-09-25):** [kiểm D6/D12/D18 05](NELL-GIFT-AP-HEART-DAYS-6-12-18-PAPER-CHECK-05.md) chọn phí gốc **1 AP/Gift** và **+1 Nell Heart/Gift hợp lệ**, kể cả Gift đầu sở hữu Nell. Heart mới dùng được sau commit cùng ngày; Nell credit kích hoạt trước Gift có thể trả AP Gift. Đây là luật giấy V0 riêng cho Nell, không phải số do chủ dự án chốt trực tiếp hoặc luật chung cho mọi Person. Cap số `2` vẫn là fixture; CG-48 tiếp tục chặn Gift khi Heart đầy.

**CG-51 · lựa chọn chuyển thể cap Nell V0 (2026-09-25):** [kiểm Farm/Mine/Fishing 06](NELL-HEART-CAP-FARM-MINE-FISHING-PAPER-CHECK-06.md) chọn **cap 2 Nell Heart** cho luật giấy V0. Heart `2/2` chặn Gift và giữ quà theo CG-48; sau khi kích hoạt ability hạ xuống `1/2`, Gift lại được xét nếu Nell đang hiện và đủ item/AP. Cap 2 cho hai ngày cần AP relief liên tiếp sau hai Gift; cap 3 có lợi trong một nhánh ba ngày nhưng cần ba quà và mục tiêu phù hợp. Đây là lựa chọn của trợ lý sau phép kiểm, **không phải trị số chủ dự án nói trực tiếp**, không mặc định cho Person khác hoặc là cân bằng phát hành đã kiểm người chơi.

Ý tưởng chơi đúng ngày/mùa được tăng cường vẫn là giả thuyết, chưa chốt.

Tham chiếu board game: trang 14 của [luật Stardew](<../../stardew rules.pdf>) cho giữ Villager và nhận Heart khi kết bạn; trang 20 cho thấy Heart là tài nguyên tiêu được. Tuy nhiên, quy trình tặng lại cho Person đã kết bạn để nhận Heart trong game này là **thiết kế của dự án**, không phải luật tặng lại được xác minh từ board game.

## 5. Cấu trúc save và objective — đã hiệu chỉnh

Trao đổi mới đã hiệu chỉnh giả định cũ về một năm và reset:

- Hướng hiện tại là save có thể tiếp tục qua nhiều năm; cuối năm không mặc định buộc reset.
- Bản game đầu tiên có thể chỉ thiết kế và cân bằng đầy đủ nội dung của năm đầu. Đây là phạm vi sản phẩm, không tự trở thành luật kết thúc save.
- Không cần thiết kế lý do bắt buộc người chơi chơi lại. Nếu đã mở hết, người chơi có thể tiếp tục sống, sưu tầm, tối ưu hoặc dừng khi thấy đủ.
- Objective đang nghiêng về mạng các micro-objective mở dần area, card và động từ. Chưa chốt có hay không một objective trung tâm tương đương Community Center.
- Objective, completion và ending là ba khái niệm độc lập. Hoàn thành objective không bắt buộc kết thúc game.

Công dụng hiện đang xét của Heart vẫn là kích hoạt khả năng Person; không bắt buộc dùng Heart làm khoản đóng góp trực tiếp cho objective.

[Spec gốc](GAME-DESIGN-SOURCE.md), mục 36–39, đã đề cập:

- Restore the Valley, gồm các nhóm đóng góp vật phẩm/thành tựu.
- Life Goal lựa chọn đầu run.
- Kết thúc năm ở Winter Day 7, đánh giá Life Goal và Valley Progress.

Những nội dung đó là nền tham khảo cũ. Các câu “kết thúc năm” và “điều kiện thắng” không còn được mặc định áp dụng sau hiệu chỉnh về save nhiều năm.

**Đề xuất trước đây của AI, chưa được người dùng duyệt:** dùng vật phẩm và Heart để hoàn thành các dự án cộng đồng trước cuối năm. Không coi đề xuất này là nơi tiêu Heart đã chốt. Sau khi người dùng lo ngại thiết kế quá gần Stardew, cuộc trao đổi chuyển sang dùng Heart để kích hoạt Person. Theme khoa học viễn tưởng chỉ được nêu như một khả năng, chưa có quyết định đổi theme.

Thiết kế mục tiêu phải giữ khả năng sống theo nhiều hướng đã nêu trong spec; chưa suy ra rằng mọi save bắt buộc hoàn thành toàn bộ farming, fishing, mining và các hệ khác.

### Sưu tầm Person trong một save

- Phát biểu cũ “một năm là end game rồi bắt buộc reset” đã bị thay thế bởi hướng save có thể tiếp tục nhiều năm.
- Không mặc định có bộ sưu tập Person, khả năng hoặc meta-progression tồn tại xuyên các save độc lập.
- **Đã chốt:** sưu tầm Person là một hướng sống mà người chơi có thể theo đuổi, không phải mục tiêu chung bắt buộc mọi save phải tối đa hóa.
- Dành AP, quà và cơ hội để kết bạn với nhiều Person phải cạnh tranh với farming, fishing, crafting hoặc các hướng sống khác.
- Người dùng dùng Genshin Impact chỉ như một cách giải thích cảm giác thu nhận Person để mở thêm cách chơi. Đây không phải tham chiếu để lấy gacha, party combat, nâng cấp nhân vật, cấu trúc progression, đội hình hay combo định sẵn.
- **Đã chốt:** không có giới hạn party/nhóm Person chủ động chỉ để buộc người chơi chọn đội hình. Người chơi giữ tất cả Person đã kết bạn; hoàn cảnh, hoạt động và kế hoạch trong ngày tự quyết định Person nào có thể phát huy.
- Game không cần chỉ dẫn hoặc ép các combo giữa Person. Khả năng có kết hợp với nhau hay không và người chơi có muốn dùng cách kết hợp đó hay không là việc của người chơi.

### Lịch Person sau khi đã thu nhận

- **Đã chốt:** lịch của Person chỉ giới hạn cơ hội gặp lại và tặng quà để hồi Heart của chính Person đó.
- Người chơi phải chờ đến ngày Person xuất hiện theo lịch nếu muốn tạo thêm Heart cho họ.
- Lịch không giới hạn việc sử dụng khả năng của Person đã thu nhận. Nếu còn đủ Heart và có hoàn cảnh hoặc mục tiêu hợp lệ, người chơi có thể dùng khả năng vào bất kỳ ngày nào, kể cả ngày Person không xuất hiện để gặp lại.
- Không dùng thêm điều kiện “Person phải xuất hiện hôm nay” để khóa khả năng; điều đó sẽ tạo một lớp khóa thứ hai ngoài Heart và không thuộc hướng đã chọn.
- Việc tự động công bố toàn bộ Person có thể gặp trong ngày áp dụng cả trước và sau khi thu nhận. Với Person đã thu nhận, thông tin này cho người chơi biết hôm nay có cơ hội tặng quà để hồi Heart.

## 6. Câu hỏi tiếp tục, theo mức phụ thuộc

Cadence cap/timing đã được paper-test trong [PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md](PERSON-HEART-CADENCE-PAPER-SIMULATION-01.md). Kết quả của phép thử cũ chỉ là fixture; về sau CG-51 đã chọn cap 2 **riêng Nell V0**, và §7.2 cho dùng Heart vừa nhận trong cùng ngày. Chưa có bằng chứng cần cooldown chung hoặc cap chung cho Person về sau.

1. Khi thêm Person sau Nell V0, giới hạn Heart riêng của họ là bao nhiêu và tạo nhịp sử dụng thế nào? Nell đã có cap 2 theo CG-51.
2. Cơ hội gặp Person được tự động công bố đầu ngày sẽ được biểu đạt như thế nào để đọc là “có thể gặp hôm nay”, không phải Person đứng chờ cả ngày?
3. Nếu không có di chuyển trên map, địa điểm hoặc hoàn cảnh gắn với mỗi cơ hội gặp được biểu đạt bằng cấu trúc nào?
4. Khả năng cụ thể của Person là gì; ngoài chi phí Heart còn có điều kiện hoặc giới hạn sử dụng nào?
5. Khả năng Person chịu điều kiện hoàn cảnh nào để mỗi Person có chỗ phát huy mà không tạo party hoặc combo định sẵn?
6. Mạng micro-objective mở area, card và động từ theo thứ tự nào; có cần một objective trung tâm hay không?
7. Cân bằng AP, quà, lượng Heart và chi phí khả năng sau khi biết chúng đem lại kết quả nào.

Không dùng các chỗ còn mở làm lý do tự bổ sung hội thoại, hệ mô phỏng Person, thanh tình bạn, hoặc bắt đầu dev.
