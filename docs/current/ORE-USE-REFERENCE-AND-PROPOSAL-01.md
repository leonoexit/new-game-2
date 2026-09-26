# Công dụng Ore — tham chiếu và đề xuất 01

Ngày đối chiếu: 2026-09-25. Trạng thái: **CG-11/13/19 giữ hướng Ore và tác dụng Tool; CG-20 đã chốt Mine/Copper cụ thể trong [Mine contract 01](MINE-CURRENT-CONTRACT-01.md). Fixture chưa triển khai.** Gói miễn AP lần đầu/+Ore cũ đã rút; không nhầm với giảm phí Break theo cấp Tool tại §8. Đọc cùng [card grammar §10](ON-TABLE-CARD-SHAPE-DECISION-09.md) và [danh mục lá V0](LITTLE-VALLEY-CARD-REGISTER-V0.xlsx).

**Cập nhật CG-26:** Farm V0 chỉ dùng Watering Can thường, Water từng crop 1 AP; không có nâng Can trong V0. Bảng phạm vi/sức chứa ở §4/7 là tham chiếu sau V0. Copper Pickaxe theo CG-20 vẫn thuộc V0.

**Cảnh báo sau CG-69:** các câu cũ bên dưới nói Can V0 không có refill là snapshot trước khi chủ dự án yêu cầu lá `Farm Pond` ở Home. Quy tắc múc nước hiện hành nằm ở [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md); hoãn nâng Can vẫn giữ.

**Cập nhật CG-14:** tạm dừng thông số/triển khai nâng Tool, thiết kế gameplay Mine rồi Fishing trước. Hai nguồn tham khảo cơ chế là [board và Fantasy Life](MINE-FISHING-REFERENCE-DIRECTIONS-02.md). §7 giữ lịch sử định hướng tác dụng Tool; không bắt loop mới có hit/độ cứng hoặc cấm xem xét dice/map.

**Điểm tiếp tục sau CG-17/18:** chủ dự án coi khung chơi Mine và Fishing đã chốt, đồng thời **bỏ qua việc dựng bản chơi tích hợp một ngày**. CG-20 đã duyệt [gói Mine/Copper](MINE-AND-COPPER-PICKAXE-LOCK-PROPOSAL-01.md) sau [phép thử challenge hữu hạn](PICKAXE-MINE-CHALLENGE-PAPER-TEST-01.md). Các mô tả Search → Exposed Ore → Extract hoặc “hoãn fishing” bên dưới là lịch sử; dùng [Mine contract 01](MINE-CURRENT-CONTRACT-01.md) cho luật Mine hiện hành.

## 1. Phạm vi đã xác nhận

- Fish dùng để bán theo CG-10. Cải thiện độ hấp dẫn của fishing để sau; chưa chốt giá bán Fish.
- Chủ dự án đánh giá loop Farm đã khá rõ, giữ vòng đang có.
- Chủ dự án đã duyệt Ore dùng trực tiếp nâng Tool, chưa cần chuỗi Furnace–Coal–Bar. Sau đối chiếu nguồn, chủ dự án chọn **giữ loop V0, chuyển hiệu ứng tương đương**; CG-13 sau đó xác định rõ tác dụng nâng phải theo video game gốc (xem §7). CG-08 vẫn giữ Exposed Ore và Item Ore là hai identity riêng.
- `Ore` hiện là tên làm việc của một Item trong V0. Các loại Copper/Iron/Gold/Iridium trong tham chiếu chưa được tự đưa vào danh mục.

## 2. Hai bản tham chiếu thực sự làm gì

| Nguồn | Vai trò của Ore | Cơ chế cần phân biệt |
| --- | --- | --- |
| Stardew Valley video game | Copper Ore có thể luyện thành Copper Bar. Bar dùng nâng Tool và làm nguyên liệu chế tạo; Ore cũng có một số recipe trực tiếp. | Ví dụ luyện 5 Copper Ore + 1 Coal trong Furnace thành 1 Copper Bar. Nâng Tool tại Blacksmith dùng Gold + Bar và mất hai ngày. Đây là chuỗi có bước trung gian và thời gian xử lý. |
| Stardew Valley: The Board Game | Ore dùng cho nâng Tool theo yêu cầu in trên lá, có thể góp vào Bundle phù hợp hoặc bán theo luật bán resource. | Trang 20: cuối lượt, chọn một loại End of Turn Effect, có thể làm loại đó nhiều lần nếu đủ tài nguyên. Upgrade Starting Tool tiêu resource in trên lá để lên cấp kế. Hình Watering Can cho thấy biểu tượng Ore ở phí nâng; luật này không yêu cầu Furnace/Bar. |

Nguồn video game đã đọc ngày 2026-09-25: [Copper Ore](https://stardewvalleywiki.com/Copper_Ore), [Copper Bar](https://stardewvalleywiki.com/Copper_Bar), [Tools](https://stardewvalleywiki.com/Tools). Bảng chi tiết ở §4 giữ thông số nguồn; chưa coi chúng là luật V0 khi đơn vị/cơ chế khác nhau.

Nguồn board game: [rulebook chủ dự án cung cấp](<../../stardew rules.pdf>), trang 9, 14, 17, 20. Trang 9 có Blacksmith Bundle nhận Ore; trang 14 cho bán resource khi dùng action tại Pierre's; trang 17 cho Mine Level quyết định loại Ore có thể nhận. Đã đọc text các trang này và kiểm hình trang 9/20. Không đồng nhất việc bán của board game với Bin trả tiền cuối ngày của Little Valley Cards.

Spec gốc của dự án có nêu Furnace và Copper Ore trong [GAME-DESIGN-SOURCE](../evidence/GAME-DESIGN-SOURCE.md), nhưng đó là danh mục ý tưởng lịch sử. Việc xuất hiện trong spec cũ không đủ để đưa chúng trở lại V0 khi §10 hiện hành chưa chọn.

## 3. Hướng đã duyệt · CG-11

**Ore dùng trực tiếp nâng Tool.** Có Tool nâng được và đủ nguyên liệu → chọn nâng → tiêu Ore, Tool đạt cấp có hiệu ứng tương ứng. Không cần thêm Furnace–Coal–Bar ở bước này. Đây là quyết định về công dụng Ore; yêu cầu lấy thông số từ nguồn không tự làm hai hệ luật nguồn trở nên tương đương.

Phạm vi đối chiếu trước mắt là các Tool đang có: Watering Can, Pickaxe, Fishing Rod và Hand. Không thêm Hoe/Axe chỉ vì chúng tồn tại trong nguồn. Các cấp Tool, loại Ore, nơi/thời điểm nâng và cách ghi Bách Khoa cho cấp mới chưa được triển khai.

Fixture hiện chỉ có một source CP3, không tự refresh. Nhu cầu nâng Tool không tự mở Mine sâu hơn hoặc lặp nguồn. Bundle/bán Ore chưa được chọn; không phục hồi Water Trough, Harvest Bench, Grove Footbridge hoặc phần thưởng Seed từ Bách Khoa.

## 4. Thông số video game đã đối chiếu

### 4.1. Watering Can và Pickaxe — cùng bảng phí

| Từ cấp → cấp | Phí nâng trong video game |
| --- | --- |
| Thường → Copper | 2.000g + 5 Copper Bar |
| Copper → Steel | 5.000g + 5 Iron Bar |
| Steel → Gold | 10.000g + 5 Gold Bar |
| Gold → Iridium | 25.000g + 5 Iridium Bar |

Nâng tuần tự tại Blacksmith, mất hai ngày; Tool không dùng được trong thời gian nâng. Đây là **Bar**, không phải Ore. Đổi chữ Bar thành Ore mà giữ số 5/tiền là một bản chuyển đổi, không phải phí gốc hay phí board. Nguồn: [Blacksmith](https://wiki.stardewvalley.net/Blacksmith).

### 4.2. Watering Can

| Cấp | Sức chứa nước | Vùng tưới tối đa khi charge |
| --- | ---: | --- |
| Thường | 40 | 1 ô |
| Copper | 55 | 3 ô thẳng |
| Steel | 70 | 5 ô thẳng |
| Gold | 85 | 3 × 3 ô |
| Iridium | 100 | 6 × 3 ô |

Đây là vùng ô đất trong video game, không phải số bước tăng trưởng hay số crop trong một action V0. Charge có chi phí energy; bảng này không có nghĩa “tưới 18 lá với 1 AP”. Nguồn: [Watering Cans](https://wiki.stardewvalley.net/Watering_Cans).

### 4.3. Pickaxe

| Cấp | Hiệu ứng nguồn tiêu biểu đã xác minh |
| --- | --- |
| Thường | Copper Node cần 3 hit; không phá được boulder trên Farm. |
| Copper | Copper Node còn 2 hit; đá ở Mine tầng 1–39 còn 1 hit. |
| Steel | Copper/Iron/Gold/Iridium Node lần lượt 1/2/3/6 hit; phá được boulder trên Farm. |
| Gold | Copper/Iron/Gold/Iridium Node lần lượt 1/1/2/4 hit; phá được meteorite. |
| Iridium | Đá ở Quarry Mine/Skull Cavern cần 1 hit; boulder ở Quarry Mine cần 3 hit. |

Nguồn: [Pickaxes](https://wiki.stardewvalley.net/Pickaxes). Đây là số hit theo loại vật cản, không phải giảm một lượng AP cố định hoặc nhân số Ore. V0 hiện Extract một lần làm nguồn spent, chưa có độ cứng/hit để áp bảng này.

### 4.4. Fishing Rod và Hand

| Rod trong video game | Giá/điều kiện | Khả năng |
| --- | --- | --- |
| Training Rod | 25g | Dễ câu hơn; giới hạn cá thường |
| Bamboo Pole | Willy tặng; mua lại 500g | Cần cơ bản |
| Fiberglass Rod | 1.800g; Fishing level 2 | Gắn bait |
| Iridium Rod | 7.500g; Fishing level 6 | Gắn bait và 1 tackle |
| Advanced Iridium Rod | Fishing Mastery; mua thêm 25.000g | Gắn bait và 2 tackle |

Nguồn: [Tools — Fishing Poles](https://wiki.stardewvalley.net/Tools#Fishing_Poles). Đây là mua/nhận Rod, không phải chuỗi kim loại trả Ore. V0 chưa có level, bait hoặc tackle; fishing đang hoãn chỉnh. Hand là Tool theo taxonomy của Little Valley Cards, không có thang nâng tương ứng trong hai nguồn đã đọc. Không tự đặt một thang Ore cho Rod/Hand.

## 5. Thông số board đã xác minh và phần còn thiếu

Nguồn chính là [rulebook được cung cấp](<../../stardew rules.pdf>), trang 5, 13, 17, 20. Trang 20 đã kiểm hình phóng lớn; hình là các lá xếp chồng, không phải bảng thông số toàn bộ deck.

| Nội dung | Dữ liệu xác minh được | Mức bằng chứng |
| --- | --- | --- |
| Deck nâng Tool | Watering Can, Hoe, Fishing Rod, Pickaxe; bắt đầu level 0 | Rulebook trang 5 |
| Lúc nâng | Cuối lượt tại bước End of Turn; chọn một loại effect, được lặp loại đó nếu đủ tài nguyên; bỏ resource in trên lá để lên cấp kế | Rulebook trang 20 |
| Can thường → Copper | 1 Copper Ore; Copper Can đưa **tất cả crop 2 bước** khi Water | Mặt lá level 0 và 1 hiện rõ ở trang 20 |
| Copper Can → Iron | 1 Iron Ore | Biểu tượng phí ở chân lá Copper Can, trang 20 |
| Tên cấp Can | Thường → Copper → Iron → Gold → Iridium | Tên các lá trong hình trang 20; board gọi Iron, game gốc gọi Steel |
| Copper Pickaxe | Được dịch kết quả lên 1 ô trên Mine Map; không vòng qua mép bảng | [Trả lời của designer Cole Medeiros](https://boardgamegeek.com/thread/2628250/does-the-copper-pickaxe-allow-you-to-adjust-your-p) |

**Chưa có bằng chứng đọc được cho toàn bộ phí/hiệu ứng các cấp còn lại của Can, Pickaxe và Rod.** Không suy ra mọi Tool cùng phí từ một ví dụ Can, không điền dãy 2/3/4/5 bước hoặc hướng dịch Pickaxe bằng phỏng đoán. Cần mặt lá đầy đủ hoặc dữ liệu chính thức tương đương để hoàn tất bảng “nguyên xi”. Nghiên cứu web hiện chưa cung cấp được bộ lá đủ rõ; không coi bảng này là bản nhập hoàn chỉnh.

Trong board, Water cơ bản đã di chuyển tất cả crop một bước và cây rời track được thu hoạch; Mine dùng hai dice chọn ô trên Mine Map. Bởi vậy, “Copper Can = 2 bước” không đồng nghĩa “tưới 2 crop”, “Copper Pickaxe = lên 1 ô” không đồng nghĩa “Depth +1” hay “Ore +1”.

## 6. Lựa chọn cách ghép · CG-12, được làm rõ bởi CG-13

Hướng Ore trực tiếp phù hợp cách trả phí của board. Tại thời điểm CG-12, Watering Can/Pickaxe là hai Tool cần đối chiếu tiếp; Rod không được mặc định vào cùng thang kim loại. Sau đó CG-20 đã chốt nâng Copper Pickaxe cho V0, còn CG-26 hoãn nâng Watering Can sang sau V0. Fixture hiện chưa triển khai các luật nâng.

| Lựa chọn | Thay đổi cần làm | Quan hệ với yêu cầu lấy nguyên bản |
| --- | --- | --- |
| Giữ loop V0 | Giữ tưới từng crop → Sleep → Hand Harvest và Search → Exposed Ore → Extract; thiết kế hiệu ứng Tool tương đương trên các action ấy | Chi phí nguồn có thể giữ sau khi xác minh; hiệu ứng phải ghi rõ là chuyển đổi, cần chốt thông số V0 |
| Dùng nguyên luật board liên quan | Cần thiết kế lại quan hệ Farm với crop track/thu hoạch và Mine với dice/Mine Map; lấy đủ các mặt lá Tool trước | Có thể giữ hiệu ứng board chính xác, nhưng thay các loop V0 đã chốt |

**Chủ dự án đã chọn “Giữ loop V0, chuyển hiệu ứng tương đương” ngày 2026-09-25.** Bảng trên lưu hai lựa chọn đã đối chiếu; chỉ hàng đầu được chọn. Farm vẫn Water từng crop → growth tại Sleep → Hand Harvest; Mine vẫn Search → Exposed Ore → Character + Pickaxe Extract, nguồn spent và Depth giữ nguyên. Hoãn cải thiện fishing theo CG-10. Không cần nhập crop track hoặc Mine Map/dice để có nâng Tool.

CG-13 làm rõ giới hạn chuyển đổi: giữ tác dụng của video game gốc, chỉ thiết kế cách biểu diễn bằng lá và thao tác của V0. Quy tắc Water một crop/Extract một commit trong fixture hiện tại mô tả bản chưa nâng, không được dùng để biến tác dụng nâng thành miễn AP hoặc cộng Ore. Các ô nguồn board chưa xác minh ở §5 vẫn để thiếu.

## 7. Hiệu ứng nâng theo bản gốc — CG-13

Sau khi xem bảng video game, chủ dự án xác nhận **cần theo bản gốc** cho hướng nâng Tool được thảo luận ở CG-13. Các cấp Thường → Copper → Steel → Gold → Iridium và bảng nguồn ở §4 là tham chiếu; CG-26 đã loại nâng Watering Can khỏi phạm vi V0. Không dùng dãy cộng sản lượng tự đặt.

| Tool | Tác dụng được chọn | Số liệu nguồn dùng làm chuẩn |
| --- | --- | --- |
| Watering Can | Tăng phạm vi tưới và sức chứa nước | Phạm vi tối đa 1 → 3 ô thẳng → 5 ô thẳng → 3×3 → 6×3; sức chứa 40 → 55 → 70 → 85 → 100 |
| Pickaxe | Tăng sức phá: ít nhát hơn trên cùng vật cản, mở khả năng phá vật cản lớn hơn | Copper Node cần 3 nhát ở cấp thường, 2 ở Copper, 1 ở Steel; Steel phá được boulder Farm, Gold phá được meteorite. Các loại khác theo §4.3 |
| Fishing Rod | Khi thiết kế nâng sẽ bám khả năng gắn bait/tackle của nguồn | Hiện giữ hoãn chỉnh fishing theo CG-10; chưa nhập bait/tackle hoặc thang nâng |
| Hand | Giữ vai trò Harvest/Collect đã có | Không có thang nâng tương ứng trong nguồn |

Nguồn số liệu: [Watering Cans](https://wiki.stardewvalley.net/Watering_Cans), [Pickaxes](https://wiki.stardewvalley.net/Pickaxes). Phạm vi tưới là hình học của các ô, không phải tùy chọn bất kỳ 3/5/9/18 crop ở mọi vị trí. Pickaxe không tự tăng lượng Ore rơi ra từ một node.

### 7.1. Các đề xuất đã rút

- Miễn AP cho Water/Extract đầu ngày và phí chung 1 Ore ở bản §7 trước đã rút; không còn là phương án triển khai hiện hành.
- Đề xuất trong hội thoại Can +1 crop và Pickaxe +1 Ore không được nhập thành luật. Can theo đúng bậc phạm vi nguồn; Pickaxe theo sức phá.
- Luồng nâng trước Sleep, kích hoạt sáng sau, cùng identity qua các cấp và phép tính hoàn vốn 5 ngày thuộc gói đề xuất cũ; chưa được duyệt, không kế thừa tự động.

### 7.2. Phần phải nối vào biểu diễn V0

1. **Farm:** CG-25 chốt một lá đất = một luống, mỗi lá chứa tối đa một crop. Phương án trước đây là xác định vị trí giữa các plot, xem trước vùng 3 ô thẳng/5 ô thẳng/3×3/6×3 rồi commit Water trên vùng đó. **Đây là phương án cũ, không phải luật V0:** chủ dự án nhận thấy ép nhiều luống được tưới đồng thời sẽ cứng nhắc trong card game. CG-26 chốt Farm V0 chỉ dùng Can thường, Water từng crop 1 AP và tăng trưởng tại Sleep. Không có Can nâng cấp hoặc chứa nước/refill trong V0; số phạm vi/sức chứa nguồn chỉ để tham khảo sau V0.
2. **Mine:** xác định loại vật cản và sức phá/số nhát cần thiết trước khi bật nâng Pickaxe. Generic Exposed Ore chưa có loại node hay độ cứng; không tự gọi nó là Copper Node. Giữ Search làm lộ nguồn, khai thác hoàn tất mới nhận Ore và làm nguồn spent; Depth không đổi. Cách biểu diễn tiến độ phá và quy đổi thao tác/AP còn phải thiết kế. Một nhát trong nguồn không mặc định bằng một action 1 AP của V0.
3. **Phí và nơi nâng:** CG-11 vẫn chọn tiêu Ore trực tiếp, chưa cần Furnace–Coal–Bar. Bảng tiền + 5 Bar, Blacksmith và hai ngày chờ ở §4 là luật video game; chưa tự nhập các phần đó vào V0. Số lượng/loại Ore, phí Gold nếu có, nơi/thời điểm nâng chưa chốt sau khi rút gói 1 Ore cũ.

Đây là công việc nối cơ chế theo tác dụng nguồn đã chọn, không phải lý do quay lại miễn AP/+Ore hoặc nhập Mine dice của board. Fixture hiện vẫn là bản chưa nâng, chưa có layout vùng tưới, refill hay độ cứng nguồn. Không mở nguồn Ore lặp hoặc thêm vật cản mới chỉ từ quyết định về Tool này.

**Đã chốt ở CG-26:** giữ Watering Can thường trong Farm V0 và hoãn nâng Can cho đến khi Farm có một thử thách có thể chỉ ra tác dụng nâng rõ ràng. Vòng hiện có tưới từng crop 1 AP; hai luống chạy được trong phép thử AP, còn bốn luống tạo lựa chọn trì hoãn tưới/trồng hoặc chờ Rain. Không thêm refill vào Can thường chỉ để tạo lý do tăng sức chứa, không thêm state khô hạn/loại crop mới chỉ để nâng cấp có tác dụng, và không đổi một Water commit thành tưới nhiều lá tùy ý. Khi nghiên cứu lại sau V0, cần thiết kế hiệu ứng và thử AP trước khi chốt phí Ore/cấp Can.

## 8. Pickaxe trên Mine — CG-19

**Quyết định mới nhất:** chuyển tác dụng ít nhát hơn thành **phí AP thấp hơn cho một Break hoàn chỉnh**, không thành nhiều action Break trên cùng lá. Khi Character + Pickaxe tác động lên lá hợp lệ, cấp Pickaxe quyết định phí thực trả và hiển thị phí đó trước commit. Pickaxe cấp Copper tự giảm phí trên những lá khó hơn mà nó tác động được; không cần action giảm phí riêng. Break hợp lệ trả AP một lần, giải kết quả một lần, giữ nguồn spent và không có phí Extract thứ hai. Thiếu AP hoặc Tool không đáp ứng điều kiện thì không commit. Next vẫn miễn phí và giữ trạng thái từng lá theo CG-17.

**Challenge có trước upgrade:** CG-20 đã chốt `Ore Rock` với state `Dense` cho cấp Copper: cùng một lá có phí Break 3 AP khi dùng Pickaxe thường và 2 AP khi dùng Copper. Đây không phải identity mới hoặc một loại Ore mới. Hai nguồn Dense có mặt ngay ở tầng đầu; từ tầng thứ hai, cả bốn Ore Rock đều Dense. Vật cản lớn hơn chờ cấp Pickaxe sau vẫn chỉ là định hướng, chưa có identity, vị trí, cấp yêu cầu hoặc phần thưởng. Workbook Mine đã cập nhật; fixture vẫn chưa triển khai.

**Số đã được CG-20 duyệt sau ví dụ này:** `Ore Rock` ở state `Dense` trả `3 AP` với Pickaxe thường hoặc `2 AP` với Copper cho một `Break`; mỗi nguồn cho đúng 1 Ore. `Rock` và Ore Rock thường đều trả 1 AP ở hai cấp. [Mine contract 01](MINE-CURRENT-CONTRACT-01.md) ghi cả phân bố tầng và upgrade; đoạn §8 trước CG-20 ở trên giữ provenance đề xuất.

**Ranh giới nguồn:** video game gốc giảm số hit trên cùng node và cấp Steel/Gold mở một số vật cản lớn hơn (§4.3, §7). Phí AP theo cấp trên một Break là chuyển đổi riêng cho Little Valley Cards; không suy ra một hit nguồn bằng 1 AP. CG-20 chốt lần nâng Copper dùng 3 Ore trực tiếp, 0 Gold/AP, tác dụng ngay và Tool đổi thành identity `Copper Pickaxe`; cấp sau còn mở.

[Phép thử challenge hữu hạn 01](PICKAXE-MINE-CHALLENGE-PAPER-TEST-01.md) đặt hai nguồn khó và một nguồn thường trong cùng tầng để kiểm tác dụng AP. CG-20 sau đó chốt mức `3 → 2 AP`, tỷ lệ tầng và upgrade trong [Mine contract 01](MINE-CURRENT-CONTRACT-01.md); phép thử vẫn là evidence lịch sử.
