# Fishing — đề xuất loop 01

Ngày 2026-09-25. **Tài liệu này là lịch sử đề xuất; [Fishing contract 01](FISHING-CURRENT-CONTRACT-01.md) đã chốt V0 qua CG-24.** §5/CG-18 ghi giai đoạn thử ba điểm câu với state hiện odds; CG-21 thử phí tăng theo odds. Cả hai cách trình bày đã bị ba `Fishing Spot` giống nhau với odds ẩn thay thế. CG-23 chốt làm mới qua `Sleep`; CG-24 chốt một Fish đại diện `Silver Minnow`. §2–5 và [prototype v0.1](../../paper-tests/fishing-opportunities-v0.1/fixture.html) giữ lịch sử, không áp các bảng phí/state hoặc hai Fish output cũ cho Fishing V0. Tên lá, trạng thái và control trong game dùng tiếng Anh; phần giải thích thiết kế dùng tiếng Việt.

## 1. Những gì đang có

- Nguồn hành động là Character + Fishing Rod. Fish là Item/Fish; được bắt thì chuyển vào Item với cùng identity và dùng để bán qua Shipping Bin theo CG-10.
- Fixture cũ có exact Catch cho biết trước loài cá; trả 2 AP fixture rồi nhận đúng Fish. Phí 2 AP không phải thông số cân bằng bắt buộc.
- Silver Minnow/Blue Eel và điều kiện Rain của fixture là baseline, không tự thêm loài hoặc mở mọi điều kiện xuất hiện.
- [Nghiên cứu nguồn §2–3](MINE-FISHING-REFERENCE-DIRECTIONS-02.md) đã phân biệt board (phân bổ kết quả dice vào yêu cầu cá) với Fantasy Life 3DS (kéo cá và kiểm soát căng dây). Không chép nguyên minigame thời gian thực hoặc tự nhập dice.

## 2. Hướng đang thảo luận: đối tượng → hành động → hệ quả như Mine

Chủ dự án yêu cầu tham khảo mental model Mine. Phần cần giữ là **người chơi nhìn thấy một đối tượng, chọn có bỏ công tác động hay không, rồi giải hậu quả**; việc xem/đổi lá không phải một hành động sản xuất. Chưa cần tạo một minigame riêng bên trong mỗi lần câu.

| Mine đã chốt | Fishing đề xuất để xét |
| --- | --- |
| Thấy Rock/Ore Rock trước khi hành động | Thấy Fishing Spot trước khi hành động |
| Character + Pickaxe → Break | Character + Fishing Rod → Cast |
| Trả AP phá đá rồi nhận kết quả | Trả AP thực hiện một lần câu rồi nhận kết quả |
| Ore/lối xuống/không có gì theo target | Fish hoặc No Bite trong mẫu cơ bản; chưa thêm loot khác |
| Next đổi riêng một lá, không cấp thưởng | Có thể thử Next cho từng Fishing Spot, không thu AP hoặc tạo Fish chỉ vì đổi lá |

**Fishing Spot là target giả thuyết**, chưa có identity/taxonomy được duyệt để nhập workbook/runtime. Nó là điểm có thể câu, không phải chính Fish đã nằm trên bàn. Dùng target này sẽ thay baseline exact Catch biết sẵn loài trong fixture cũ; chưa tự coi thay đổi đó đã được duyệt. Không tự thêm entry Fish chỉ vì thấy một Fishing Spot; nếu loài chỉ lộ khi bắt được thì entry mở lúc Fish thực sự hiện, vẫn theo luật Bách Khoa.

**Cast trong mẫu này resolve cả lần câu:** có đủ Character + Fishing Rod, AP và target hợp lệ → commit trả phí → tạo Fish trong Item nếu bắt được, hoặc báo No Bite nếu không. Không thêm phí Hook/Extract hoặc kéo-nhả sau Cast. Số AP và xác suất chưa chọn.

Đề xuất hình dung ban đầu: tối đa ba Fishing Spot mở sẵn để so với Mine, Next dưới từng lá đổi riêng đối tượng đang xem, không cấp thưởng. Đây là gợi ý thử cách trình bày, chưa chốt ba lá hoặc sao chép vòng tầng/Depth sang Fishing. Không có Descend tương đương được đề xuất.

**Khoảng trống cần giải quyết tiếp:** các Fishing Spot khác nhau ở thông tin hữu ích nào để người chơi chọn nơi câu? Nếu chỉ có ba hình khác nhau nhưng kết quả giống nhau, Next không tạo lựa chọn có ý nghĩa. Có thể xét nhóm cá có thể gặp hoặc mức chắc chắn, nhưng chưa tự đặt loại spot/tỉ lệ. Sau Cast, spot còn hay đổi trạng thái, khi nào có lần câu tiếp và cách giữ qua rời Area/Sleep cũng cần chốt. Next không được tự hoàn lại AP, tạo reward hoặc reset một kết quả vừa resolve.

Phạm vi lượt này là xác định mental model chung; chưa dựng demo hoặc thêm identity. Fish vẫn là Item/Fish dùng để bán. Không ép Fishing có bản tương đương cho mọi loại Rock, Depth hay số lá của Mine.

## 3. Đề xuất cũ tạm gác: một lần câu có quyết định kéo hoặc nhả

Ý định: tạo quyết định trong lúc câu, thay cho việc biết trước cá rồi trả AP nhận ngay. Đây là thiết kế thử của Little Valley Cards, chưa tuyên bố là luật nguyên bản của board/Fantasy Life.

**State:** một Fish đang là cơ hội Catch hợp lệ, Character và Fishing Rod sẵn có. Giữ target Fish đã có trong grammar cho đề xuất đầu, chưa thêm Fishing Spot như identity mới hoặc giấu loài cá rồi đổi trigger Bách Khoa.

**Action mở lượt:** Character + Fishing Rod → target, bắt đầu một lần câu bằng `Hook`; trả AP tại commit này. Đề xuất Hook đưa cá vào trạng thái Hooked, chưa nhận Fish trong Item. Chưa chọn phí hoặc thêm xác suất hụt ở bước này.

**Trong lượt câu:** người chơi đọc trạng thái trên lá và chọn:

| Lựa chọn | Tác dụng muốn thử | Cái giá |
| --- | --- | --- |
| Reel | Kéo cá gần bắt được hơn | Tăng Tension; kéo quá sức có thể đứt dây |
| Ease | Giảm Tension | Mất một phần tiến độ kéo, cá ra xa hơn |

Reel/Ease là bước giải quyết của lần câu đã trả phí, **đề xuất không thu thêm AP mỗi lần chạm**. Chưa thêm timing hoặc yêu cầu thao tác nhanh. Progress/Tension là state của encounter, không phải lá hoặc Item mới. Hooked không tự tạo identity cá mới.

**Tình huống để đọc quyết định:** cá đã gần bờ, nhưng dây đang căng. Reel có thể kết thúc lần câu hoặc vượt giới hạn dây; Ease đưa dây về an toàn nhưng làm cá ra xa. Cần định nghĩa phản ứng cá và thông tin được biết trước để đây không chỉ là bấm theo một chuỗi tối ưu cố định.

**Kết thúc dự kiến:** đủ tiến độ thì nhận chính Fish vào Item; đứt dây hoặc chủ động Release thì không nhận Fish và không hoàn lại AP đã dùng cho Hook. Release chỉ bỏ cơ hội này, không mất cá đã có trong Item. Cá thoát bao lâu, khi nào opportunity mới xuất hiện, rời Area/Sleep trong lúc Hooked xử lý ra sao còn cần chốt trước khi dựng demo; không mặc định cho roll lại miễn phí.

### Phạm vi của đề xuất cũ

Phần này được giữ làm lịch sử, không phải bước tiếp theo sau chỉ đạo tham khảo Mine. Chưa đặt HP, tỷ lệ thành công, số bước, giới hạn Tension, giá cá hoặc nâng Rod. Chưa tạo demo, art, identity mới hoặc sửa fixture.

Nếu hướng này được chọn, bước kế là viết đúng một encounter có số thử và phản ứng cá cụ thể; kiểm được kết thúc, thất bại, bỏ dở và tránh chuỗi thao tác máy móc. Đây chưa phải loop hoàn chỉnh được duyệt.

## 4. Prototype cơ hội câu — Before They Leave v0.1

Chủ dự án yêu cầu chơi thử đề xuất **chọn cá trước khi cơ hội rời đi**. Đã dựng [fixture riêng](../../paper-tests/fishing-opportunities-v0.1/fixture.html), [luật, kịch bản và giới hạn](../../paper-tests/fishing-opportunities-v0.1/README.md). Đây là cho phép thử, không phải duyệt toàn bộ cơ chế Fishing.

Ba lá Fish hiện sẵn, giữ target Fish biết loài của baseline thay vì thêm Fishing Spot. Character + Fishing Rod → Catch: kiểm điều kiện, trả AP và nhận chính Fish đó, rồi các Fish khác trên bàn tiến một bước gần lúc rời. Cứ sau số Catch ghi trên lá thì opportunity rời đi. Lingering/Leaving là trạng thái, không phải identity mới. Chọn nguồn, đọc UI, hành động thất bại và đứng suy nghĩ không làm cá rời. Không dùng thời gian thực hoặc minigame Reel/Ease.

Mẫu cố định Rain, 4 AP, Silver Minnow 1 AP và Blue Eel 2 AP; mỗi Catch thành công chỉ đẩy cá khác một bước, không phải một bước mỗi AP. Catch luôn thành công khi đủ điều kiện. Sau khi bắt và xử lý cá rời đi mới bổ sung các ô trống; cá mới không mất lượt ngay. Mỗi scene có 6 instance hữu hạn, không có Next để làm mới cơ hội miễn phí. Đây là thông số/kịch bản thử, chưa là luật cân bằng.

- **One Last Chance:** Minnow có 1 lượt, Eel 2 lượt, Minnow 3 lượt. Hàng chờ gồm ba Eel. Thứ tự Minnow đầu → Eel → Minnow cuối dùng 4 AP nhận 3 Fish; Eel trước làm mất Minnow đầu, có thể chỉ nhận Eel và Minnow còn lại rồi thiếu AP cho các Eel mới. Ví dụ này cố ý kiểm tác dụng của thứ tự.
- **Two Departures:** Minnow và Eel đều còn 1 lượt, Minnow còn lại 3 lượt; hàng chờ ba Minnow. Bắt một con đang Leaving sẽ bỏ lỡ con kia. Chưa đặt giá bán để tuyên bố một hướng tốt hơn; người chơi có thể đánh giá số lượng hoặc loài muốn lấy.

Test controls có Retry same scene và chuyển scene, giữ thứ tự arrival để so sánh; Previous attempts ghi thứ tự, Fish đã bắt, Fish đã rời và AP còn. Các nút đó không phải cơ chế reset của game. Return to Farm giữ bàn/hàng chờ/counter trong phiên, không hồi AP; chưa có Sleep hoặc cadence ngày mới. Không thay Mine, fixture tích hợp hay workbook; chỉ dùng hai identity Fish đã có.

Kiểm logic đã đạt 67 trạng thái chuỗi Catch đủ AP / 37 kết thúc, cùng các ca phí nguyên tử, departure/arrival, nguồn/target, không nhận trùng, hết hàng chờ và lưu khi về Farm. Đã kiểm JS syntax và tham chiếu HTML tĩnh; chưa QA browser trực quan hoặc có feedback người chơi cho bản này. Câu hỏi cần người chơi trả lời: **thứ tự câu có tạo cảm giác muốn giữ cơ hội, hay chỉ là bài toán theo đáp án?** Hai scene không chứng minh độ hấp dẫn dài hạn.

## 5. Ba điểm câu với xác suất theo trạng thái — CG-18

**Phản hồi:** chủ dự án đã chơi §4, thấy chưa ấn tượng và không phân biệt được các trạng thái. Yêu cầu Fishing có xác suất và một chút kỹ năng; bác bỏ hướng phản xạ real time vì đây là game lá bài. Sau đó chủ dự án đề xuất ba ô mở sẵn, tùy hình/trạng thái của lá (có thể đổi tên hiển thị để dễ đọc) mà có xác suất nhận được cá. Đã đồng ý rõ quy tắc: **sau mỗi Cast, trạng thái các điểm câu mới có thể thay đổi**.

Mental model: đọc tín hiệu của đối tượng đang thấy → chọn nơi đáng bỏ công → Character + Fishing Rod → Cast trả AP → nhận Fish hoặc No Bite. Kỹ năng nhẹ nằm ở đọc thông tin và phân bổ AP, không phải bấm nhanh hoặc đếm lượt rời đi.

**Phí đã chốt ở CG-18 và giữ sau CG-22:** mỗi Cast hợp lệ trả **1 AP**, bất kể có Fish hay No Bite; không hoàn phí khi không bắt được cá. CG-21 từng đề xuất đánh đổi AP theo odds, nhưng đã bị CG-22 sửa lại thành **các spot cùng phí**. [Gói mới nhất](FISHING-V0-LOCK-PROPOSAL-01.md) giữ 1 AP cho mỗi Cast. Chọn nguồn, xem lá không có phí riêng. Không áp thay đổi này ngầm lên các action Farm/Mine/commerce đã có.

### Thứ tự resolve

1. Giữ trạng thái hiển thị hiện tại để người chơi chọn. Xem thông tin/chọn nguồn không mất AP và không đổi trạng thái.
2. Kiểm nguồn, target và AP tại Cast commit. Không hợp lệ thì từ chối toàn bộ, không trả phí hoặc làm mới cơ hội.
3. Tại thời điểm CG-18, trả **1 AP** và giải kết quả bằng xác suất gắn với state đã thấy trước commit. **CG-22 thay cách thấy thông tin:** tỷ lệ của spot được chọn là ẩn, và các spot cùng phí. Nhận Fish vào Item hoặc No Bite; cả hai đều giữ phí đã trả. Không đổi odds sau commit rồi dùng nó để giải ngược lần Cast vừa thực hiện.
4. Sau kết quả, cập nhật trạng thái các điểm câu theo quy tắc chuyển sẽ thiết kế. **No Bite vẫn là một Cast đã thực hiện**, nên cũng kích hoạt bước này. Không đòi phải nhận Fish mới cập nhật.

“Có thể thay đổi” không có nghĩa cả ba điểm phải đổi sau mọi Cast; một hoặc nhiều điểm có thể giữ trạng thái. Chưa khóa cách sinh trạng thái hoặc bắt điểm vừa câu phải xấu đi. Đổi/xem lá không được dùng để tạo lại xác suất miễn phí; việc có control Next cụ thể cho Fishing chưa phải điều kiện bắt buộc của luật này. Không có cập nhật theo đồng hồ hoặc thời gian người chơi suy nghĩ. Cadence ngày mới/rời Area chưa được quyết định từ luật này.

### Tên và thông số còn là đề xuất

| Tên hiển thị đề xuất | Dấu hiệu | Quan hệ xác suất dự kiến |
| --- | --- | --- |
| Quiet Water | Mặt nước yên, chưa thấy dấu hiệu cá | Thấp |
| Ripples | Gợn nước/bóng cá thoáng qua | Trung bình |
| Splashing Fish | Cá quẫy rõ trên mặt nước | Cao, không phải bảo đảm |

Ba tên trên là **đề xuất lịch sử về state thấy được**, nay không còn là cách trình bày đang theo. Gói mới nhất dùng ba instance `Fishing Spot` giống nhau, odds ẩn và cùng phí; tỷ lệ cụ thể, Fish output và cadence vẫn cần duyệt. Fish vẫn Item/Fish và dùng để bán; chỉ ghi identity cá khi cá thực sự được thấy.

Chưa dựng prototype xác suất mới hoặc cập nhật workbook. Bản Leaving/Lingering không còn là cơ chế đang theo. [Gói Fishing V0 mới nhất](FISHING-V0-LOCK-PROPOSAL-01.md) đề xuất cách đánh cược với odds ẩn; không được trích số hoặc cadence của gói đó như quyết định đã chốt. Ưu tiên khi thử tiếp: kiểm người chơi hiểu ba spot như nhau, mỗi lần Cast trả AP dù hụt, và không có cách xem/đổi để reroll miễn phí.
