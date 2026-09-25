# Đối chiếu kiến trúc World từ tài liệu point-and-click 01

Ngày đọc: 2026-09-25. Trạng thái: **phân tích và đề xuất lịch sử, chưa là luật Little Valley Cards; các giả định Farm phẳng đã được CG-35–37 thay thế.** Nguồn: [Stardew Valley — Point-and-Click / Card-Based World Design](../../stardew_point_and_click_world_design.md), nhất là §3–6, §17 và §19–27. Dùng [kiến trúc World hiện hành](../current/WORLD-NESTED-CARD-ARCHITECTURE-01.md) để đọc các quyết định sau bản đối chiếu này.

## 1. Quy tắc có thể mang sang

Tài liệu đặt trọng tâm vào quyết định của người chơi và giảm thao tác vật lý. Điều này khớp với [Area tableau hiện hành](../current/SCROLLABLE-AREA-TABLEAU-MODEL-08.md): scroll/focus 0 AP, không mô phỏng đi bộ. Nó cũng giải thích vì sao một địa điểm chỉ nên có mặt khi tạo lựa chọn riêng; địa điểm chỉ để nối đường có thể là nhãn hoặc biến mất khỏi navigation.

Tuy nhiên tài liệu mẫu bỏ tưới/thu hoạch từng cây và biến Field thành một object có `Water All` (§4.2, §6.1, §25). [CG-25/26/27](../current/ON-TABLE-CARD-SHAPE-DECISION-09.md) đã chọn một lá đất = một luống, Water từng crop/1 AP, Farm có ô riêng cho đất và Building/Equipment. Vì vậy **nguyên tắc giảm thao tác** có thể dùng; `Field` gộp luật hoặc `Water All` không tự thay Farm V0.

## 2. Ánh xạ khái niệm

| Tài liệu nguồn | Little Valley Cards hiện hành | Ranh giới cần giữ |
| --- | --- | --- |
| `World` | World là một card identity chứa các Area. | Identity World không buộc thành lá vuông trên tableau. |
| `Region` | Gần với Area: Home/Farm, Area rừng, Commerce, River, Mine trong roster V0. | Không tự thêm Town/Beach/Desert hoặc đổi tên Area chỉ vì chúng có trong tài liệu nguồn. |
| `Object` | Có thể là Building/Equipment/card nguồn cụ thể, hoặc một nhóm trình bày nhiều lá như phần đất Farm. | Một nhóm UI chỉ thành card identity nếu có vai trò, state hoặc tương tác riêng được thiết kế. `Field` chưa mặc nhiên là card mới. |
| `Action` | Verb/commit trên nguồn và đích theo card grammar (`Plant`, `Water`, `Cast`, `Break`...). | Một verb không mặc nhiên có Action card riêng; phí và phạm vi tác động do luật action quyết định, không do số lá trong nhóm UI. |

**Kiến trúc đề xuất để thử:** gameplay vẫn là `World → Area → lá/đích cụ thể → action`; giao diện có thể thêm `Area tableau → nhóm trình bày tùy chọn → cách tìm/focus/lọc lá`. Tầng nhóm chỉ giúp người chơi tìm lá khi Area đông; nó không sinh AP cost, reward, Bách Khoa entry hoặc điều kiện mở khóa. Các quan hệ chứa thật như `Farmhouse → TV` vẫn được ghi theo card grammar hiện hành.

## 3. Bottleneck và cách áp dụng có giới hạn

| Vấn đề đã thấy trong dự án | Ý từ tài liệu nguồn | Phép thử phù hợp với luật hiện hành |
| --- | --- | --- |
| Farm có thể dài khi nhiều ô đất đã hiện từ đầu theo CG-27; mobile dùng hai cột card vuông. | Region như dashboard sống: cho biết nơi nào đang có việc đáng làm (§26). | Thử tóm tắt **suy ra từ các lá** trên Area index, ví dụ số crop Mature, và focus/lọc lá trong Farm. Không tạo `Farm State` gameplay card/rail mới. |
| Water từng crop lặp thao tác; phép thử giấy cũ đếm 12–14 lần Water trong một nhánh. | Giữ quyết định/AP nhưng giảm số thao tác cơ học (§4.3, §25). | Trước tiên dùng UI-05: chọn Can một lần, chạm liên tiếp các crop; mỗi chạm vẫn là một commit và 1 AP. Chỉ thử lệnh lập kế hoạch nhiều đích nếu kiểm tra UI cho thấy nhịp này vẫn mệt; lệnh đó phải giữ phí/kết quả từng crop và cần quyết định UI riêng. |
| Người chơi phải cuộn qua nhiều Area. | World/Region index bỏ các chặng di chuyển không tạo quyết định (§4.1, §18). | Dùng sticky Area index/anchor 0 AP đã có trong Area model; đo tốc độ tìm đúng Area và quay lại, không thêm Travel/Time cost. |
| World cần có cảm giác thay đổi theo ngày/mùa mà không phình roster. | Region thay nội dung theo event (§17), calendar tạo micro-goal (§19). | Giữ **cùng Area identity**, đổi các lá/cơ hội hiển thị theo luật cụ thể: Rain trên Farm, Fishing Spot làm mới ở Sleep, Wild Herb xuất hiện, Nell theo lịch. Event mới chỉ có khi có trigger và reward rõ. |
| Fish/Ore sau lần đầu và Gold ngoài Seed có lúc thiếu lý do dùng lặp. | Micro-goal nảy sinh khi output của hệ này mở lựa chọn ở hệ khác (§2, §23). | Thiết kế một công dụng có chi phí, thời điểm và lựa chọn thay thế thật trước khi thêm nguồn, Region hoặc reward mới. Kiến trúc UI không tự giải quyết khoảng trống kinh tế này. |

## 4. Những phần không đưa thẳng vào V0

- `Field` có capacity gộp, `Water All`, `Harvest Ready` và tự bỏ từng lá crop sẽ đổi card grammar/Farm AP đã chốt.
- Time **và** Energy riêng là một hệ chi phí khác với khung 6 AP/ngày của phép thử V0; không thêm đồng hồ/energy từ bảng ví dụ.
- Danh sách Greenhouse, Coop, Barn, Desert, Ginger Island, dungeon, combat, profession và hàng chục shop/NPC là catalog khả năng mở rộng, chưa phải roster được duyệt.
- Cơ chế event không có nghĩa Area tự đổi card identity hoặc Bách Khoa ghi lại mỗi ngày. Chỉ các lá/cơ hội thật xuất hiện hoặc đổi state theo contract của chúng.

## 5. Phép thử nhỏ tiếp theo

So hai bề mặt Farm có cùng luật AP và cùng bộ lá: (A) tableau hai cột cuộn trực tiếp; (B) tableau có tóm tắt và focus/lọc theo `Mature`, `Growing`, `Empty/Overgrown`. Dùng 2, 4 và 8 ô đất **chỉ làm mật độ thử**, không chốt tổng ô Farm. Đo số chạm/thời gian để tìm crop chín, Water hai crop, tìm ô cần Clear, chuyển Mine rồi quay Farm; ghi nhầm đích và cảm nhận mất quyền kiểm soát. Nếu (B) chỉ giảm cuộn mà tăng số bước hoặc che mất trạng thái quan trọng, giữ (A). Không đổi luật Water hay nội dung V0 từ phép thử UI này.
