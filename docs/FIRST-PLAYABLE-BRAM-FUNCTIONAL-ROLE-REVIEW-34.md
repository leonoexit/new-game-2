# First-playable Bram functional-role review 34

Ngày: 2026-09-23.

Trạng thái: **review vai trò V0; giữ Bram là Person trong roster; chưa chọn ability thay thế**. Yêu cầu mới của owner là xem lại chức năng của Bram, không loại Bram. Review này tiếp nối [audit K 33](FIRST-PLAYABLE-BRAM-K-PURPOSE-AUDIT-33.md) và dùng nội dung V0 đang có; không bổ sung Project, request, Processor target, source hay reward giả để tạo chỗ dùng ability.

Nguồn: [quyết định Person/Heart](NPC-HEART-DESIGN-DECISIONS.md), [roster R3](PERSON-OWNERSHIP-MINIMUM-ROSTER-AUDIT-12.md), [kernel audit](PERSON-ROSTER-KERNEL-AUDIT-02.md), [registry](CONTENT-MINIMUM-REGISTRY-01.md), [Q4](PROJECT-QUANTITY-WORK-A6-S18-RERUN-04.md), [farm/Seed route 30](FIRST-PLAYABLE-SEED-SELL-PRICE-PAPER-TEST-30.md), [Heart test 32](FIRST-PLAYABLE-HEART-GIFT-CADENCE-PAPER-TEST-32.md), [PJ-X test 31](FIRST-PLAYABLE-PJ-X-MATERIAL-WORK-PAPER-TEST-31.md).

## 1. Ranh giới của lần review

- `[GIỮ]` Bram vẫn là một Person persistent, có thể gặp/tặng quà/thu nhận và dùng Heart của riêng Bram. R3 ba Person là lựa chọn của owner; Mira và Nell vẫn lần lượt mang vai trò A và C ở paper baseline.
- `[ĐANG XEM LẠI]` `Bram=K Divide/Focus` là assignment paper đã được chọn trước đây, nhưng [audit 33](FIRST-PLAYABLE-BRAM-K-PURPOSE-AUDIT-33.md) chứng minh wording K hiện tại không cho một lần kích hoạt đáng Heart dưới Q4. Chỉ dẫn mới cho phép mở lại **vai trò chức năng**, không tự chọn một effect mới hoặc thay đổi các quyết định hệ thống khác.
- `[QUYẾT ĐỊNH CŨ CỦA K]` Nếu tiếp tục dùng K, một Work vẫn chỉ phân phối cùng tổng Progress, không tăng Progress/AP. Nếu chọn một vai trò khác cho Bram, cần mô tả và duyệt ranh giới mới một cách tường minh; không gọi bonus output là “K cũ”.
- `[GIỮ]` Không Person nào là khóa duy nhất của Farm/Mine/River/Project. Gift tốn action + item; Heart riêng từng Person, có cap và tồn tại qua ngày. `+1/−1`, cap 2, Gift 1 AP, lịch và item Bram nhận vẫn là fixture, không phải lock.

## 2. V0 thực sự đưa cho Bram mục tiêu nào?

| Hệ hiện có | Quy tắc/đầu ra đủ cụ thể | Khoảng trống đối với Bram |
| --- | --- | --- |
| Water Trough và Harvest Bench | Mỗi Project cần `1 Wood + 1 Ore/Stone + 4 Progress`; Work thường cho 2 Progress/1 AP. | Một target đơn lẻ thì K focus giống Work thường; cả hai target cộng lại cần đúng bốn Work, không có Progress dư để K cứu. Chúng thường reveal nối tiếp trong route. |
| Wood, Ore, Stone | M/B mỗi bên chỉ cần một đơn vị của từng material. Stone có Search một lần rồi Extract, spent source ready lại sau Sleep. | Bonus yield hoặc refresh source không tiết kiệm action cho các bundle một đơn vị này. Tự cho Stone/Ore sẽ xóa lựa chọn Depth so với source. |
| Farm và Seed | Care/Harvest/Plant đã có AP tension; Water Trough/Harvest Bench là relief cụ thể. Gold hiện phục vụ Seed renewal/profile access. Bin trả Gold cuối ngày. | Giảm một Care lặp vai trò Project relief; cho mua Seed bằng tiền bán cùng ngày sẽ đổi luật market, không phải ability nhỏ. |
| Grove/Fishing và Person | Mira A đọc optional uncertainty; Nell C giữ một expiring opportunity qua Sleep. | Thêm preview hoặc giữ opportunity cho Bram tạo trùng chức năng. Wild Herb/Blue Eel là điều kiện/cơ hội, không phải nguồn vật liệu phải giao cho Bram. |
| Optional content | PJ-X/Upper Grove chưa có reward playable; Processor/request đã rời minimum loop; printed alternate modes/tags chưa đủ. | Không thể tính PJ-X, E hoặc J thành “target density” hiện hữu của Bram. |

## 3. So các hướng trên cùng V0

Các dòng dưới là **phép thử/giả thuyết**, không phải ability được chọn. Một ability cần cho người chơi lý do chi quà và Heart, có target tự nhiên, có lựa chọn khác với Mira/Nell và không làm luật nền vô nghĩa.

| Hướng | Test cụ thể | Kết quả V0 | Trạng thái |
| --- | --- | --- | --- |
| Giữ K chia `2` hoặc `1+1` | Q4 M/B cần tổng 8 Progress; bốn Work thường đã đủ 8. | Không tiết kiệm Work, AP hoặc ngày hoàn thành. | **Không dùng wording này làm lời hứa functional V0.** K boundary vẫn là quyết định lịch sử. |
| K “để dành Work” | Giả sử 1 Heart cho phép làm Work 2 Progress thành một voucher Project trước khi B reveal. Trong route all-Sunny của test 30, B cần 8 AP sau preview D15 và D15–D17 chỉ có `1+3+1=5` AP route. Một voucher làm trước D15 vẫn để lại 7 AP sau preview, nên B vẫn sang D18. | Chuyển Work qua ngày nhưng không chứng minh mốc sớm hơn trong route này; còn cần grammar voucher, target trước reveal và giới hạn tích trữ để tránh AP banking. | Chưa đủ căn cứ để chọn; không tự lách luật reveal bằng một ability. |
| Tăng Work lên 4 Progress hoặc tạo Progress miễn AP | Một Project Q4 chỉ cần một Work/activation. | Có target thật nhưng tăng output, trái boundary K; Gift 1 AP + Turnip đổi lấy một Work AP tiết kiệm, và audit 33 chưa tìm thấy cải thiện ngày trong route đã đo. | Chỉ xem lại nếu owner chủ động đổi luật K và có purpose test mới. |
| Tăng/đổi vật liệu từ source | M/B mỗi bundle cần một Wood và một Ore/Stone; PJ-X cần hai Wood nhưng reward chưa rõ. | Bonus một Wood/Stone khi gather/Extract thường không giảm số action cho M/B; source substitution có thể bỏ qua Mine. | Không chọn để “nuôi” Bram bằng surplus hoặc PJ-X. |
| Bớt một Care/Harvest hoặc đẩy tiền Seed | Một AP Farm được chuyển khỏi busy day, hoặc sale có tiền sớm hơn. | Care/Harvest relief trùng hai Project M/B và một lần Bram Gift cũng tốn AP/item; payout sớm trái timing đã dùng để test Seed liquidity. | Không chọn khi chưa có thắng lợi khác biệt và ranh giới economy mới. |
| E/J/D/I/M từ kernel audit | E cần printed alternative tag; J cần alternate Context mode; D cần cancel/salvage; I là prepare/bank; M cần printed constraint. | Các target từng dùng để ước lượng density chủ yếu là Processor/request hoặc rule chưa có trong minimum V0. | Chưa có kernel sẵn đủ native target để gán ngay cho Bram. |

Voucher row is a **bounded counterfactual**: test 30 does not include a voucher rule, and its D14 spare AP does not authorize Work toward an unrevealed Project. The calculation only asks whether one such transfer would actually improve that route. It does not prove all possible conserved-output roles fail forever.

## 4. Kết luận và bước quyết định

1. `[REVIEW RESULT]` Giữ Bram là Person V0. Không có bằng chứng rằng wording K hiện tại, hay một kernel khác đã được mô tả, cho Bram một lần kích hoạt có giá trị rõ trên nội dung V0 hiện tại.
2. `[SPEC STATUS]` R3 ba Person vẫn là **ý định roster đã chọn**; câu “ba vai trò functional đã pass” hiện **chưa được chứng minh**. `Bram=K` là assignment paper trước review, còn slot ability V0 của Bram đang cần thiết kế lại/kiểm chứng. Không được viết Bram như một Person không có activated ability trong sản phẩm: Person contract yêu cầu ability.
3. `[RECOMMENDATION]` Giữ nguyên tên/card Bram trong baseline, đánh dấu role/wording `OPEN — functional purpose gate`. Không chốt nhịp Heart/Gift của Bram, không giảm Q4, không định nghĩa PJ-X chỉ để cho Bram một mục tiêu, và không tự chuyển ông sang một kernel thiếu native target.
4. `[NEXT DESIGN GATE]` Trước khi lock functional R3, chọn một **hành động/cơ hội V0 thật** mà Bram phải thay đổi, viết kết quả trước/sau khi dùng Heart và chạy một case có ngày/AP/item cụ thể. Nếu giữ K, chỉ có thể tìm một dạng phân bổ Progress có ích mà vẫn bảo toàn tổng; nếu đổi vai trò, cần duyệt hiệu ứng và boundary mới. Nếu không tìm được case đó, status trung thực là “Bram Person đã chọn, ability V0 chưa xong”, không phải loại Bram.
