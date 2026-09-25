# Mine & Fishing — hai hướng tham khảo 02

Ngày: 2026-09-25. Trạng thái mới nhất: **Mine CG-17/19/20 được tổng hợp ở [Mine contract 01](MINE-CURRENT-CONTRACT-01.md)**; §11 giữ quyết định Mine CG-17, §2–10 giữ lịch sử nghiên cứu/thử. Fishing hiện hành ở [Fishing proposal §5](FISHING-LOOP-PROPOSAL-01.md#5-ba-điểm-câu-với-xác-suất-theo-trạng-thái--cg-18). Đọc cùng [card grammar §10](ON-TABLE-CARD-SHAPE-DECISION-09.md).

## 1. Phạm vi quyết định · CG-14

Mine/Fishing chưa chốt được cơ chế chơi; trình tự nguồn → action → output hiện tại chưa đủ chứng minh có quyết định thú vị. Chủ dự án chỉ định hai hướng: Stardew Valley board game (phần không dùng được phải thiết kế cơ chế khác) và Fantasy Life. Không ép hai loop này theo thao tác thời gian thực của Stardew video game hoặc bảng nâng Tool vừa nghiên cứu.

CG-13 vẫn lưu định hướng vai trò Tool từ video game, nhưng không được dùng làm điều kiện bắt buộc cơ chế Mine mới phải có hit/độ cứng ngay. Tạm dừng thông số nâng và phần triển khai nó cho tới khi có loop. Farm không thuộc lượt thiết kế lại này. Fish bán và Ore dùng nâng Tool là mục đích output đã chọn; không tự mở thêm sink, card identity hay nội dung Mine.

## 2. Board game: lựa chọn từ kết quả và tài nguyên hữu hạn

Nguồn trực tiếp: [rulebook chủ dự án cung cấp](<../../stardew rules.pdf>), trang 17–18, 20.

**Mine:** trả một action, gieo hai Stardew Dice, chọn die nào làm hàng/cột trên Mine Map để xác định kết quả. Mine Level quyết định Ore/Geode khả dụng và hiệu ứng monster. Đi xuống thay level/map; Stone còn có thể dùng xây cầu thang cuối lượt. Ví dụ rulebook cho Heart + Stardrop chọn giữa một Item hoặc một Ore tùy cách đặt hàng/cột.

**Fishing:** trả một action, gieo ba dice rồi phân bổ biểu tượng để đáp ứng yêu cầu của cá đúng địa điểm trên Fish Track. Một die chỉ dùng cho một cá; có thể bắt nhiều cá. Kết thúc action mới dồn và bù track.

| Phần dùng làm tham khảo | Chỗ phải giải quyết trong Little Valley Cards |
| --- | --- |
| Mine có bất định nhưng người chơi được chọn cách xử lý kết quả | Hai die giống nhau có thể chỉ còn một kết quả; nếu bỏ dice/map thì phải giữ một lựa chọn có nghĩa, không chỉ đổi gieo dice thành rút lá nhận quà |
| Fish có yêu cầu công khai; người chơi phân bổ một lượng biểu tượng hữu hạn | V0 đang chọn exact Catch trước; board chọn cá sau roll. Phải xác định cam kết target ở thời điểm nào |
| Level/map làm một chuyến Mine thay đổi | Không chép 12 tầng, monster, Stone, Geode vào danh mục chỉ để đủ giống nguồn |
| Board resolve Ore trực tiếp từ ô kết quả | CG-08 của V0 tách Exposed Ore và Item Ore. Nếu giữ identity này, kết quả board có thể làm lộ source rồi mới Extract; đó là bước chuyển đổi, cần kiểm có biến thành thao tác thừa hay không |

Các nhận xét cột phải là phân tích thiết kế của dự án, không là luật board.

## 3. Fantasy Life: xử lý từng đối tượng khai thác

Đối chiếu bước đầu dùng **Fantasy Life 3DS**; chủ dự án chưa chỉ định phiên bản. [Manual Nintendo, mục 14](https://www.nintendo.com/eu/media/downloads/games_8/emanuals/nintendo_3ds_2/fantasy_life/ElectronicManual_Nintendo3DS_FantasyLife_EN.pdf) xác nhận gathering cần Tool/skill phù hợp và có Special Skill. Phần điều khiển chi tiết bên dưới dựa trên hướng dẫn có ảnh của Gamer Guides, không gán cho manual hoặc cho bản i.

- **Mine 3DS:** nguồn có HP; người chơi đổi góc để tìm sweet spot, đánh trúng gây sát thương cao hơn. Nhịp đánh ảnh hưởng sức đánh. Đòn kết thúc mạnh so với HP còn lại có thể tạo Excellent và tăng vật liệu. Nguồn: [Miner tutorial](https://www.gamerguides.com/fantasy-life/guide/story-walkthrough/introductory-quests/miner).
- **Fishing 3DS:** kéo để hạ HP cá, thả nút để giảm căng dây; khi cá giãy phải phản ứng theo hướng chỉ báo. Để gauge tới giới hạn sẽ đứt dây và cá thoát. Nguồn: [Angler tutorial](https://www.gamerguides.com/fantasy-life/guide/story-walkthrough/introductory-quests/angler).

**Fantasy Life i được tách riêng:** [trang chính thức](https://www.fantasylife.jp/fli/en/life/) có Miner/Angler; [patch note 2.1.0/2.1.1](https://www.fantasylife.jp/fli/en/patchnote/ver_2_1_0_ver_2_1_1/) xác nhận gathering minigame và Sweet Spot damage. Chưa có đối chiếu đầy đủ từng luật hai bản; không lấy cách câu 3DS gán cho i. Trang chính thức có [Miner Life Trial Gameplay](https://www.youtube.com/watch?v=-mK5f6JpmeI), nhưng lượt nghiên cứu này chưa xem được nội dung video, không dùng nó để xác nhận chi tiết.

| Điều đáng học | Phần chuyển sang lá phải tự thiết kế |
| --- | --- |
| Quan sát đối tượng rồi chọn cách tác động | Chuyển tìm góc/sweet spot thành thông tin đọc được và quyết định, thay vì bắt xoay camera hoặc bấm đúng nhịp |
| Cách khai thác có ảnh hưởng tới kết quả | Nếu đưa thăm dò/đánh thường/đánh mạnh vào, phải có đánh đổi thực; không để một lựa chọn luôn tốt hơn |
| Cá phản ứng trong quá trình kéo | Có thể nghiên cứu kéo/nhả theo lượt và trạng thái cá; bỏ thời gian thực đòi hỏi thiết kế lại tiến độ/nguy cơ, không chép nguyên gauge rồi cho chạy tự động |

Excellent của Fantasy Life là phần thưởng cho cách xử lý đòn kết thúc, không phải căn cứ khôi phục nâng Pickaxe +1 Ore cố định. Việc dùng Excellent hoặc thưởng thêm chưa được chọn cho V0.

## 4. Hai phương án Mine để so sánh trên giấy

Đây là **ứng viên nghiên cứu**, không là hai cơ chế cùng được đưa vào game. §6 bổ sung một tình huống giấy với AP/tỉ lệ/độ bền giả định để đọc quyết định; không phải thông số nguồn hoặc luật V0 được chốt. Không tạo card mới trong fixture.

| | A — tham khảo board | B — tham khảo Fantasy Life |
| --- | --- | --- |
| Câu hỏi người chơi xử lý | Với kết quả vừa có, chọn cơ hội nào? | Với nguồn đã thấy, khai thác theo cách nào? |
| Một lượt minh họa | Search sinh kết quả hữu hạn → người chơi chọn cách resolve → lộ nguồn/đổi tình huống → xử lý kết quả đã chọn | Search lộ Exposed Ore → đọc dấu hiệu → chọn thăm dò hoặc tác động trực tiếp → cập nhật thông tin/tiến độ → hoàn tất mới nhận Ore |
| Phần đã có thể giữ | Depth, Search, source/output identity; việc chọn diễn ra trước khi commit hậu quả | Exposed Ore là target, Character + Pickaxe là nguồn; source spent khi khai thác xong |
| Phần chưa có | Quy tắc tạo kết quả, lựa chọn thay thế có thưởng, failure/recovery và cách bỏ mục nguồn không dùng được | Thông tin có sẵn/ẩn, tác dụng và phí từng lựa chọn, tiến độ sau rời Mine và kết quả khi bỏ dở |
| Nguy cơ | Chọn giả nếu luôn có một phần thưởng tốt nhất; một lần roll không có lựa chọn | Thêm nhiều lần chạm để làm đúng một việc; thăm dò luôn bắt buộc hoặc luôn vô dụng |

Ưu tiên bước kế tiếp: dựng **cùng một tình huống Mine** cho cả hai ứng viên, so hành động và hậu quả từng lựa chọn. Chỉ sau đó mới chọn một cơ chế để đưa vào fixture. Không khóa A/B, không mặc định trộn random map, điểm yếu, charge, tension và thưởng Excellent vào cùng một lượt.

## 5. Tiêu chí chọn và trạng thái hiện tại

- Người chơi có ít nhất một quyết định làm đổi chi phí, cơ hội hoặc rủi ro; không chỉ bấm đủ số lần.
- Lá cung cấp đủ thông tin để hiểu vì sao chọn; bất định phải có cách phản ứng, không chỉ nhận kết quả.
- Phải định nghĩa hoàn tất, bỏ dở, quay lại và thất bại nếu có; không mặc định mất Ore đã mang về.
- Cơ chế chạy được với phạm vi V0 nhỏ, trước khi cần monster, crafting hoặc nhiều Tool tier.
- Tool nâng tác động vào một yếu tố đã có trong loop; thông số nâng làm sau.

Đã hoàn thành đối chiếu nguồn, khung so sánh và hai lượt mẫu §6; chưa có thông số cân bằng, phép thử người chơi hay fixture gameplay mới. Fixture tích hợp vẫn giữ hành vi cũ để tham chiếu, không phải cơ chế Mine/Fishing mới được chốt.

## 6. Hai lượt chơi mẫu — bản giấy để thảo luận

**Toàn bộ con số và lựa chọn ở phần này là giả định thử của Little Valley Cards.** Không phải sao chép luật board/Fantasy Life; chưa duyệt, chưa cài vào fixture. Chỉ dựng một tình huống cho mỗi hướng, chưa xây deck/map hoặc hệ thống hoàn chỉnh.

### 6.1. Tình huống chung

- Đã tới CP3, còn **3 AP**, Character và Pickaxe thường có sẵn, chưa Search. Không có Nell credit trong mẫu để dễ đọc chi phí.
- Mục tiêu hôm nay: lấy **1 Ore**; mỗi AP còn lại có thể đem về tưới một crop đang cần nước ở Farm. Crop/Farm chỉ tạo giá trị cho AP tiết kiệm, không đổi luật Farm.
- Search trả **1 AP**, làm hiện **một Exposed Ore**, còn 2 AP. Hoàn tất nguồn cho đúng 1 Ore rồi nguồn spent; Depth luôn giữ 3. Thấy source chưa ghi Item Ore vào Bách Khoa.
- Xem tình trạng và lựa chọn không trả AP. Hủy trước commit không mất AP; một hành động đã commit trả phí và giữ hậu quả.
- Có thể bỏ dở, rời Mine hoặc Sleep. Source giữ trạng thái đã resolve; không roll lại thông tin chỉ vì đóng/mở panel. Không mất vật phẩm đã có. Chính sách giữ qua Sleep ở đây là giả định cho phép thử, chưa thành cadence Mine chung.

### 6.2. A — chọn phương án sau Search, lấy cảm hứng từ board

Sau Search, tình huống mẫu đã resolve ra hai phương án dưới đây. Người chơi thấy đầy đủ phí, xác suất và hậu quả trước khi chọn. Việc dùng hai dice/Mine Map hoặc cách khác để tạo cặp lựa chọn này **chưa thiết kế**; không coi chúng luôn xuất hiện ở mọi Search.

| Lựa chọn | Phí | Kết quả |
| --- | ---: | --- |
| Khai thác chắc chắn | 2 AP | Nhận 1 Ore, source spent |
| Thử đường nứt | 1 AP | 50% hoàn tất và nhận 1 Ore; 50% không có tiến triển, source vẫn còn |

Khi thử thất bại và còn 1 AP, có thể thử lại với xác suất độc lập 50%, hoặc dừng để giữ AP cho Farm. Không có action chắc chắn 2 AP khi không đủ phí. Hai lần thất bại vẫn giữ source chưa spent để lần sau xử lý; không sinh reward an ủi.

**Lượt mẫu an toàn:** 3 AP → Search còn 2 → khai thác chắc chắn còn 0, nhận 1 Ore.

**Lượt mẫu mạo hiểm:** 3 AP → Search còn 2 → thử đường nứt còn 1. Nếu thành công, nhận 1 Ore và mang 1 AP về Farm. Nếu thất bại, chọn giữa dùng AP cuối thử tiếp hoặc về Farm chưa có Ore. Nếu thử cả hai lần, xác suất có Ore là 75%; vẫn có 25% không nhận Ore hôm nay.

**Lựa chọn thực:** ưu tiên chắc chắn có Ore hôm nay hay chấp nhận thất bại để có cơ hội giữ AP. Đây là sự đánh đổi do mẫu tự đặt. Board gốc chọn ô kết quả đã biết sau roll; nhánh có thêm một lần thử xác suất ở đây là phần thay thế của dự án, không phải luật nguyên bản.

**Điểm yếu cần nhìn thẳng:** A hiện mới có quyết định chấp nhận rủi ro; không có đọc dấu hiệu hay kỹ thuật khai thác. Nếu người chơi chỉ cảm thấy “bấm 50/50”, hướng này chưa đủ. Cần kiểm tra liệu phần tạo kết quả theo board có đem lại lựa chọn tốt hơn trước khi đầu tư demo.

### 6.3. B — dò điểm yếu trên source, lấy cảm hứng từ Fantasy Life

Sau Search, lá nguồn thể hiện **độ bền 3**, có ba vị trí tác động trái/giữa/phải; đúng một vị trí là điểm yếu. Điểm yếu được gán khi source xuất hiện và giữ nguyên, ba vị trí có khả năng như nhau. Người chơi biết quy tắc nhưng chưa biết vị trí đúng; đây là thông tin ẩn có chủ ý, không hứa art đang cho manh mối.

| Lựa chọn | Phí | Kết quả |
| --- | ---: | --- |
| Dò điểm yếu | 1 AP | Lộ đúng vị trí; không giảm độ bền |
| Đánh một vị trí | 1 AP | Trúng điểm yếu giảm 3 độ bền; vị trí khác giảm 1 và được đánh dấu đã loại |

Độ bền về 0 thì nhận đúng 1 Ore và source spent. Sau cú đánh không trúng, người chơi biết vị trí đó không phải điểm yếu, không phải đoán lại từ đầu. Tiến độ và dấu đã loại giữ khi bỏ dở. Không có timing, đòn Excellent, thêm SP hoặc thưởng Ore trong mẫu này.

**Lượt mẫu chắc chắn:** 3 AP → Search còn 2 → dò còn 1 → đánh đúng điểm yếu còn 0, nhận 1 Ore.

**Lượt mẫu đánh ngay:** 3 AP → Search còn 2 → đánh trái còn 1. Nếu trái là điểm yếu, nhận 1 Ore và mang 1 AP về Farm. Nếu không, nguồn còn độ bền 2; chọn một trong hai vị trí chưa thử với AP cuối, hoặc giữ AP về Farm. Đánh tiếp đúng thì nhận Ore; đánh tiếp sai thì nguồn còn độ bền 1, chưa nhận Ore và hết AP. Hôm sau chỉ cần một cú đánh thường để hoàn tất.

Nếu thử hai vị trí khác nhau, xác suất hoàn tất hôm nay là 2/3. Một lần dò + đánh bảo đảm hoàn tất trong cùng 2 AP sau Search. Không quy đổi nhát thật của Fantasy Life hay Stardew thành các số này; đây là bộ số thử để tạo đánh đổi giữa mua thông tin và tác động ngay.

**Lựa chọn thực:** bỏ AP để biết chắc điểm yếu, hay đánh ngay để vừa có cơ hội hoàn tất sớm vừa tích tiến độ. Điểm cần kiểm: việc chọn trái/giữa/phải có đem lại cảm giác học được về nguồn hay chỉ là đoán; nếu chỉ đoán, cần thiết kế dấu hiệu đọc được thay vì tăng số vị trí/HP.

### 6.4. So sánh sau khi viết lượt mẫu

| | A | B |
| --- | --- | --- |
| Quyết định chính | Chọn mức chắc chắn | Mua thông tin hoặc đánh ngay |
| Không hoàn tất thì giữ được gì? | Source vẫn còn, chưa có tiến độ | Tiến độ và vị trí đã loại |
| Cách xử lý lần sau thay đổi ra sao? | Cùng lựa chọn, cùng xác suất | Có thể rẻ hơn nhờ tiến độ hoặc thông tin đã có |
| Điều chưa đủ | Chưa có quy tắc sinh cặp lựa chọn, có nguy cơ chỉ thành trò may rủi | Chưa có manh mối trên art; ba vị trí hiện là phép đoán có loại trừ |

Hai bộ xác suất cố ý chưa cân bằng với nhau; không dùng tỷ lệ thành công hoặc giá trị AP kỳ vọng để tuyên bố hướng nào thắng. Rà trên giấy xác nhận được điều kiện trả phí, hậu quả và đường bỏ dở; chưa xác nhận cảm giác chơi.

**Nhận định thiết kế bước đầu:** B đáng làm rõ tiếp vì người chơi giữ được thông tin và tiến độ trên chính lá Exposed Ore, và sức phá Pickaxe có chỗ tác động. Tuy vậy cần giải quyết dấu hiệu điểm yếu trước; chưa chọn B thay chủ dự án. A cần hoàn thiện cách sinh lựa chọn và kiểm xem có nên giữ hai dice/map của board sát hơn, thay vì thêm lần cược 50/50.

Phần tiếp theo thử làm rõ dấu hiệu điểm yếu của B. Chỉ dựng demo sau khi có một ứng viên đủ cụ thể hoặc còn câu hỏi về thao tác/cảm giác mà bản giấy không trả lời được.

## 7. Một lá Exposed Ore có dấu hiệu điểm yếu — study 2026-09-25

Theo yêu cầu chủ dự án, đã phác một lá trước khi đánh và viết cách đọc trong [record của study](../../art/style-studies/exposed-ore-weak-point-v0.1/record.md), kèm [hình lá 224px](../../art/style-studies/exposed-ore-weak-point-v0.1/processed/exposed-ore-weak-point-card-224-v0.1.png). Đây là thử nghiệm hình ảnh, chưa duyệt cơ chế B hoặc tạo demo gameplay.

**Dấu hiệu thử:** một mảnh đá chứa nhánh quặng, sát bên phải mạch chính, bị khe tối bao quanh và gần tách khỏi vách. Người chơi suy ra phần đá này dễ phá hơn mảng dày. Mạch quặng sáng chỉ biểu thị thứ muốn lấy; không tự biểu thị điểm yếu. Bản phác bỏ cuốc và dấu chỉ vị trí để không đưa đáp án bằng hướng công cụ.

Khác với mẫu §6.3, lá này có điểm yếu cố định được thể hiện bằng cấu trúc đá, không gán trái/giữa/phải ngẫu nhiên không có manh mối. Vì vậy phép tính đoán 2/3 và đánh đổi mua thông tin ở §6.3 chỉ còn mô tả mẫu cũ. Nếu hình đã đủ thông tin, “Dò điểm yếu 1 AP” không nên thành bước bắt buộc cho người đã đọc được hình. Các thông số trên khung lá chỉ là số mẫu để minh họa hậu quả, chưa chốt lại phí hoặc cân bằng.

Rà nội bộ ở art 160px: thấy được mảnh và khe tối nhưng mạch sáng vẫn hút mắt mạnh; chưa có phép thử người chơi. Bước kiểm tra là đưa riêng hình cho người chưa biết đáp án, ghi nơi họ chọn và lý do trước khi giải thích. Chọn đúng vì nhìn cấu trúc khác với chọn đúng tình cờ hoặc nhớ vị trí. Một lá có dấu hiệu đọc được cũng chưa chứng minh loop Mine có đủ quyết định để chơi lặp lại.

## 8. Đào để lật — hướng thử CG-15

### 8.1. Lựa chọn của chủ dự án và phần còn mở

Sau khi xem hình điểm yếu, chủ dự án muốn Mine có nhịp khám phá bằng lật ô. Đã xét lật miễn phí rồi trả phí xử lý kết quả; sau đó chọn thử **đào để lật**, vì muốn bỏ công trước khi biết sẽ tìm được gì. Không tiếp tục lấy chọn điểm yếu trên hình làm cơ chế chính của phép thử này.

Các lựa chọn đã có: tổng lá mỗi tầng lớn hơn số lá đang hiển thị; lật hết nhóm mới có nhóm tiếp; **nhóm mới thay nhóm cũ (B)**; cần **một vòng quay lại** để tránh bỏ lỡ Depth+. Đào là hành động trả phí trên target chưa khai mở, việc lật là phản hồi của commit. Không yêu cầu khai thác hết nguồn đã lộ mới được tiến tới nhóm kế.

Chưa chốt: tổng lá cố định/ngẫu nhiên, cỡ nhóm, thành phần và xác suất, phí đào/Extract/xuống tầng, cadence qua Sleep, cấu trúc vòng quay lại và bảo đảm đường xuống. Giữ Depth+ riêng sau khi thấy là đề xuất trợ lý chưa được duyệt; không tự đưa vào luật hiện hành. Các tên “ô chưa khai mở”, “Dig”, “Depth+” trong mẫu mô tả vai trò/trạng thái/hành động, chưa tự tạo identity hoặc loại lá trong workbook. CG-08 vẫn phân biệt Exposed Ore với Item Ore.

### 8.2. State → action → consequences

| State | Action | Consequences trong hướng thử |
| --- | --- | --- |
| Ô chưa khai mở đang hiện, có nguồn và đủ AP | Character + Pickaxe → ô; Dig commit | Trả phí đã công khai, chính ô lộ kết quả. Không trả một phí lật riêng sau phí đào. Nội dung phía sau vẫn chưa biết trước commit. |
| Chỉ xem phí/điều kiện hoặc chọn nguồn | Inspect/chọn nguồn | Không trả phí và không lộ nội dung ẩn. Không được dùng inspect để xem trước kết quả. |
| Không đủ AP hoặc ô đã khai mở | Thử Dig không hợp lệ | Không trừ AP, không đổi kết quả, không đào/lật lại cùng ô để lấy thưởng lần nữa. |
| Ô đã lộ Exposed Ore | Extract bằng Character + Pickaxe | Nhận Ore trong Item, nguồn spent, Depth không đổi; phí là tham số cần thử. Thấy nguồn chỉ ghi Exposed Ore, thấy output mới ghi Ore. |
| Ô đã lộ lối xuống | Chọn hành động xuống | Là commit riêng làm đổi Depth; lật thấy lối xuống chưa tự xuống tầng. Điều kiện/phí chưa chốt. |

Kết quả được giữ theo từng ô trong mẫu, không sinh lại chỉ vì quay lại hoặc mở UI. Không đưa thao tác tìm pixel yếu vào Dig.

### 8.3. Một tình huống giấy — mọi con số dưới đây là giả định

Để xem nhịp hành động: tầng mẫu có **6 ô, hiển thị 3**, bắt đầu với **4 AP**, Dig thử ở **1 AP**. Thứ tự nội dung do người điều phối giữ kín: nhóm 1 là Exposed Ore / không phát hiện thêm / lối xuống; nhóm 2 là không phát hiện thêm / Exposed Ore / không phát hiện thêm. Đây là kịch bản cố định để đọc flow, không phải deck đã duyệt, tỉ lệ cân bằng hoặc đề xuất thêm tài nguyên Stone. “Không phát hiện thêm” là ô đá đã dọn, không tự tạo một lá Item.

| Bước | Thao tác và kết quả | AP còn |
| --- | --- | ---: |
| 0 | Thấy ba ô chưa khai mở; biết phí Dig, chưa biết nội dung | 4 |
| 1 | Đào ô thứ nhất: lộ Exposed Ore; chưa có Ore trong túi | 3 |
| 2 | Tạm bỏ qua Extract, đào ô thứ hai: không phát hiện thêm | 2 |
| 3 | Đào ô thứ ba: lộ lối xuống; Depth chưa đổi | 1 |
| 4 | Đọc kết quả; cả nhóm đã mở, nhóm kế đủ điều kiện xuất hiện | 1 |

**Điểm cần quyết định ở đây:** AP cuối dùng lấy nguồn đã biết, đào một ô chưa biết ở nhóm sau, hay giữ cho Farm? Nếu dùng mức Extract thử 1 AP, lấy nguồn hiện tại sẽ hết AP và nhận 1 Ore; nếu đào tiếp có thể tìm thêm cơ hội nhưng chưa chắc còn công khai thác. Mức Extract này chỉ là giả định để phơi bày vấn đề trả phí hai bước, chưa chọn làm luật.

**Đề xuất vận hành cần review:** đào ô cuối làm nhóm sau sẵn sàng, nhưng người chơi chủ động chọn sang nhóm; không tự xóa kết quả vừa lộ trước khi họ kịp xử lý. Sang nhóm không thu thêm AP, nhóm cũ rời bàn theo B. Không yêu cầu trả một Extract chỉ để mở nhóm mới. Sự khác biệt giữa tự thay ngay và chủ động sang nhóm là đề xuất bổ sung, không diễn giải thành quyết định đã có của chủ dự án.

### 8.4. Một vòng quay lại — chi tiết đề xuất cho phép thử

Sau khi đã khai mở cả tầng, xem lại các cơ hội chưa xử lý một lượt. Chúng hiện ngửa với trạng thái đã giữ, không trả Dig lần hai, không xáo nội dung mới hoặc phục hồi nguồn spent. “Một vòng” là đi qua danh sách một lần, không phải chỉ được thực hiện đúng một hành động. Extract hoặc xuống tầng nếu được thực hiện vẫn dùng điều kiện/phí của chính hành động đó.

Nếu hết AP giữa đường, mẫu tạm giữ vị trí/nguồn và cho dừng; không mất Item đã có. Lịch quay lại sau Sleep/rời Mine chưa chốt, nên lượt giấy này không tuyên bố đã giải quyết chuyến Mine nhiều ngày. Một vòng quay lại cũng chưa tự bảo đảm người chơi không bỏ lỡ Depth+ lần hai: cần xét riêng việc giữ lối xuống đã tìm thấy hoặc cách đưa nó ra khi vòng cuối kết thúc. Không khóa người chơi trong Mine chỉ vì bỏ qua lối xuống; rời Mine và xuống tầng là hai việc khác nhau.

### 8.5. Câu hỏi phải trả lời khi thử

- Sau khi thấy một nguồn, người chơi muốn Extract ngay hay bỏ công khám phá tiếp? Họ có giải thích được cái giá của quyết định không?
- Dig rồi Extract có tạo hai quyết định khác nhau hay chỉ khiến một phần thưởng bị thu phí hai lần? Chưa gộp hành động hoặc bỏ source identity trước khi kiểm điều này.
- Ô không phát hiện thêm có khiến người chơi muốn thử tiếp hay chỉ thấy mất công? Chưa dùng độ hiếm hoặc nhiều loại thưởng để che vấn đề này.
- Thời điểm thay nhóm có làm mất cơ hội xử lý lá cuối? Vòng quay lại có dễ hiểu và đủ giúp tìm lại lối xuống không?

Hiện mới viết trace và rà logic trên giấy; chưa chạy test người chơi, chưa có demo hoặc số liệu cảm giác chơi. Workbook chưa thêm identity vì bộ lá tầng và taxonomy mới chưa được duyệt. Farm, Fishing, nâng Tool và fixture hiện tại giữ nguyên phạm vi.

### 8.6. Tình huống trọng tâm đã chốt — CG-16

Chủ dự án xác nhận dùng tình huống dưới đây làm tâm điểm phép thử. Giữ **Dig để tìm cơ hội** và **Extract để tận dụng nguồn đã thấy** như hai hành động trong mẫu, trước khi kết luận cần gộp hay bỏ một bước. Phần này là phép thử tiếp theo, không tiếp tục trace §8.3 vốn đã lộ lối xuống.

**State:** còn **2 AP**; trong nhóm đang hiện có một Exposed Ore chưa khai thác và các ô chưa đào; **chưa tìm được lối xuống**. Farm còn công việc có thể dùng AP. Người chơi biết nguồn quặng hiện có, phí các hành động và quy tắc kết quả có thể gặp; không biết nội dung chính xác của ô ẩn. Không mở inspect để xem trước ô.

| Quyết định kế tiếp | Điều nhận được hoặc giữ được | Đánh đổi cần người chơi hiểu |
| --- | --- | --- |
| Extract nguồn đã lộ | Nhận Ore chắc chắn theo nguồn; nguồn spent, Depth giữ nguyên | Còn ít công khám phá/tìm lối xuống hoặc làm Farm |
| Dig một ô chưa khai mở | Trả phí rồi mới biết kết quả; có thể lộ cơ hội mới hoặc lối xuống | Không bảo đảm nhận Ore, có thể thiếu AP để xử lý thứ vừa tìm thấy |
| Dừng Mine | Giữ AP cho Farm | Chưa tận dụng nguồn hoặc tìm thêm đường tiến trong chuyến này |

Để đọc lượt giấy có thể tiếp tục dùng **Dig 1 AP, Extract 1 AP** như §8.3; đây là thông số thử, không phải phần cân bằng vừa được duyệt. Ba hàng là lựa chọn **hành động kế tiếp**, không khóa người chơi vào ba nhánh loại trừ suốt lượt: Extract còn 1 AP vẫn có thể Dig hoặc về Farm; Dig còn 1 AP thì cân nhắc lại theo kết quả đã lộ. Phí/giá trị xuống tầng chưa chốt; không suy rằng cứ phát hiện được Depth+ là đã xuống thành công.

Ghi lựa chọn đầu, lý do và cách dùng AP còn lại. Câu hỏi chính: **đã thấy quặng, có lúc nào người chơi thực sự muốn đào tiếp thay vì lấy nó?** Không ép chia đều lựa chọn để coi là thành công, và không xem một lượt trên giấy là bằng chứng cân bằng. Nếu chỉ có một lựa chọn đáng làm trong mọi hoàn cảnh, cần xét giá trị thông tin/tiến sâu và chi phí trước khi thêm loại đá, phần thưởng hoặc nâng cấp.

Đã chốt phạm vi thử, chưa thực hiện test người chơi hoặc thay fixture. Số lá/cỡ nhóm, chi tiết quay lại và chính sách nguồn qua Sleep vẫn mở như CG-15; CG-16 không duyệt ngầm những đề xuất đó.

## 9. Tầng mẫu chơi được v0.1 — giả định để thử

Theo yêu cầu đi sang bước dựng một tầng đủ luật, đã tạo [bản chơi riêng](../../paper-tests/mine-dig-flip-v0.1/fixture.html) và [luật/ghi chú kiểm tra](../../paper-tests/mine-dig-flip-v0.1/README.md). Không thay fixture tích hợp hoặc workbook; chưa ghi bộ lá tạm thành taxonomy chính thức.

Mẫu dùng 6 ô (2 nguồn Ore, 3 ô không phát hiện thêm, 1 lối xuống), hiện 3 ô; bắt đầu 6 AP, Dig/Extract mỗi lần 1 AP. Có preset CG-16 với 2 AP, một nguồn đã lộ và lối xuống chưa được thấy. Xáo tầng một lần khi bắt đầu thử; nguồn và kết quả giữ nguyên qua việc đổi nhóm, về Farm và Sleep. Sleep ở Farm hồi 6 AP; công việc Farm trong mẫu chỉ biểu thị sử dụng AP, không thay loop crop.

Người chơi tự sang nhóm sau khi khai mở hết nhóm hiện tại. Sau hai nhóm, một vòng quay lại gom nguồn chưa lấy và lối xuống thành nhóm cuối, hiện ngửa; nhóm này ở lại, không có thêm nút sang nhóm để vô tình bỏ mất lối xuống lần hai. Tối đa ba lá còn lại vừa với bộ mẫu này. Character dùng lối xuống commit 0 AP để tăng Depth và kết thúc mẫu. Đây là cách giải quyết tạm cho vòng đời đầy đủ; các phí, lượng lá, persistence và cách giữ nhóm cuối đều là **giả định prototype cần review**, không phải quyết định V0 mới.

Đã chạy kiểm tra model về phí/điều kiện, không lộ thông tin ẩn qua projection giao diện, không nhận thưởng trùng, chuyển nhóm, quay lại một lần, về Farm/Sleep và xuống tầng dù AP bằng 0. Kiểm mọi thứ tự nội dung: 720 hoán vị có nhãn, tương ứng 60 thứ tự khác nhau. JS syntax và `git diff --check` đạt. Chưa QA giao diện trực quan hoặc test người chơi; không dùng những check này để kết luận gameplay hấp dẫn.

Mẫu dừng ở Depth +1, chưa có động lực hoặc phần thưởng tầng sâu thật. Ưu tiên lượt thử tiếp theo: người chơi dùng preset 2 AP, ghi quyết định đầu và cách dùng công còn lại; rồi đi một tầng đầy đủ để đánh giá các ô không có phát hiện và vòng quay lại. Chưa mở thêm content hoặc cân bằng Tool.

## 10. Phản hồi chủ dự án và bản so sánh v0.2

Chủ dự án đã chơi v0.1, xác nhận lại lật cũng tốn AP, và phản hồi vẫn thấy cấn với việc chỉ lật mà trả phí. Đây là feedback từ chủ dự án đã biết thiết kế, không phải fresh-player test hoặc kết quả định lượng. Nhận định của trợ lý: gọi thao tác là đào chưa chắc làm phí xem thông tin có ý nghĩa; ba kết quả rỗng và phí Extract tiếp theo có thể góp phần. Chưa xác nhận nguyên nhân bằng test độc lập.

Chủ dự án yêu cầu thử ngay phương án **đối tượng hiện sẵn → trả công xử lý → lá tiếp theo xuất hiện**. Đã tạo [v0.2 chơi riêng](../../paper-tests/mine-visible-action-v0.2/fixture.html), [luật và giới hạn](../../paper-tests/mine-visible-action-v0.2/README.md). V0.1 được giữ nguyên để đối chiếu.

V0.2 có 6 lá, tối đa 3 đối tượng nhìn thấy, Dig trả phí mở lá bị bỏ. Extract Exposed Ore 1 AP cho 1 Ore; phá đá chắn 1 AP dọn đối tượng, không nhận Item. Xử lý xong thay đúng một ô bằng lá kế tiếp, hiện miễn phí; các lá chưa xử lý ở lại. Vì vậy không còn thay toàn nhóm và vòng quay lại trong **biến thể thử này**. Lối xuống nằm trong ba lá phía sau lúc bắt đầu và giữ trên bàn khi đã thấy; dùng nó commit 0 AP để kết thúc tầng. Cấu hình này thay nhiều yếu tố so với v0.1, không phải phép so sánh cân bằng chỉ đổi một biến.

Giữ 6 AP đầu lượt và preset 2 AP. Farm/Sleep lưu tiến độ trong phiên như v0.1. Hai identity Exposed Ore/Ore vẫn tách; đá chắn là target prototype, chưa thêm taxonomy hoặc workbook. Chưa chọn bản này thay CG-15/16 chính thức hoặc đổi fixture tích hợp.

Kiểm model đạt với 60 thứ tự nội dung và 200 lượt tạo có seed: phí, thưởng một lần, refill đúng ô, giữ lối xuống, hết bộ bài và trạng thái qua Farm/Sleep. Syntax/HTML tham chiếu đã kiểm tĩnh; chưa QA trực quan hoặc có feedback người chơi v0.2. Cần nhận xét trước về cảm giác trả công; đồng thời lưu ý quặng đang có lợi hơn đá nếu cùng phí và cùng mở lá mới. Chưa thêm cơ chế để cân bằng nhánh này trước khi người dùng thử.

## 11. Mine đã chốt khung chơi — CG-17

Chủ dự án xác nhận coi phần thiết kế Mine hiện tại đã xong và chuyển sang Fishing. Chốt theo bản tóm tắt được xác nhận mới nhất:

- Game dùng tên tiếng Anh nhất quán: **Rock**, **Ore Rock**, **Ore**, **Break**, **Next**, **Descend**. Ore Rock thay tên làm việc Exposed Ore, giữ hai identity nguồn và output.
- Ba lá mở sẵn, không có hành động lật hoặc phí xem. Character + Pickaxe tác động lên đá bằng Break, trả AP rồi giải hậu quả.
- Rock cho kết quả chưa biết (tài nguyên/lối xuống/không có gì); Ore Rock thể hiện trước rằng có Ore, phá để nhận Ore. Không trả thêm Extract sau khi phá và nhận quặng. Không thêm Item Stone chỉ vì có Rock.
- **Next dưới từng lá** đổi riêng ô ấy miễn phí, hai ô còn lại giữ nguyên. Lá bị bỏ qua quay lại ở lượt sau; luân phiên liên tục, không giới hạn một vòng. Không phải thay toàn bộ nhóm ba lá.
- Trạng thái từng lá được giữ, không reset nguồn đã khai thác để cấp thưởng lần nữa. Khám phá lối xuống chưa tự đổi Depth; Descend là hành động sang tầng khác và kết thúc vòng tầng hiện tại.
- Rời Mine giữ tiến độ tầng, bàn và vòng luân phiên để trở lại tiếp tục. Không diễn giải việc lưu khi rời Mine thành chốt cadence refresh/Sleep ngoài phần đã xác nhận.

Phân biệt thiết kế và triển khai: các prototype v0.1/v0.2 và workbook vẫn phản ánh các mốc cũ, chưa migrate CG-17. Tổng lá, phân bố, phí và sản lượng cụ thể chưa khóa cân bằng; không lấy bộ 6 lá/1 AP từ prototype làm luật cuối. Việc còn công triển khai/cân bằng không mở lại chủ đề Mine khi chủ dự án đã yêu cầu chuyển sang Fishing.
