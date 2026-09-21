# AP economy paper test 01 — một ngày đầy đủ

Ngày chạy: 2026-09-21.

Trạng thái: stress test bằng số giả cho AP economy sau [Farming paper simulation 02](FARMING-PAPER-SIMULATION-02.md). Không chốt 6 AP, chi phí hành động, lịch Person, Weather, số plot hoặc thứ tự progression.

## 1. Câu hỏi thử nghiệm

1. Sáu AP có buộc người chơi bỏ một việc đáng làm trong ngày hay không?
2. AP đang bị tiêu bởi cam kết cũ, cơ hội hôm nay hay đầu tư tương lai?
3. Rain thay đổi ưu tiên hay chỉ tạo AP thừa?
4. Harvest day có làm farming chiếm toàn bộ ngày không?
5. Khi tăng số crop, automation cần xuất hiện tại mốc nào?

## 2. Bốn loại nhu cầu AP

| Loại | Ý nghĩa | Ví dụ trong fixture |
| --- | --- | --- |
| Committed AP | Việc phát sinh từ quyết định trước đó | Tưới crop đã trồng |
| Expiring AP | Cơ hội mất đi khi sang ngày | Gift Person xuất hiện hôm nay, thu resource chỉ có hôm nay |
| Investment AP | Chi hôm nay để mở hoặc giảm chi phí tương lai | Work Project, dọn và chuẩn bị plot |
| Flexible AP | AP còn lại sau các việc người chơi đã chọn | Forage thêm, Work thêm, hoặc Sleep sớm |

Không mặc định mọi Committed AP là bắt buộc. Người chơi có thể bỏ tưới và chấp nhận crop chậm một ngày; tên gọi chỉ chỉ ra nguồn gốc của nhu cầu.

## 3. Board state dùng chung

Trừ khi từng archetype ghi khác:

- 6 AP/ngày.
- Hai Growing Crop đang hoạt động.
- Tưới một crop: 1 AP.
- Hedgerow đang lộ một Wild Berry; Collect: 1 AP.
- Một Person có thể gặp hôm nay và nhận Wild Berry; Gift: 1 AP + Berry.
- Một Project hợp lệ đang mở; Work: 1 AP → 2 Progress.
- Một Overgrown Soil thứ ba có thể được chuẩn bị cho tương lai: Clear 1 AP + Till 1 AP.
- Người chơi được Sleep sớm; AP thừa không tích sang ngày sau.

Chuỗi `Collect Berry → Gift` tạo một gói hai AP nếu người chơi chưa có item hợp lệ trong storage. Nếu đã có quà, Gift chỉ cần một AP.

## 4. Archetype A — ngày Sunny không có Person

Các việc đáng làm:

| Việc | Loại | AP |
| --- | --- | ---: |
| Water hai crop | Committed | 2 |
| Collect Wild Berry để giữ cho sau | Preparation / flexible | 1 |
| Work Project | Investment | 1 |
| Clear + Till Soil thứ ba | Investment | 2 |
| Tổng nhu cầu |  | 6 |

Kết quả: sáu AP vừa đủ nếu người chơi muốn làm toàn bộ. Ngày này không tạo từ bỏ, nhưng cho cảm giác sử dụng trọn ngày và chuẩn bị cho tương lai.

Rủi ro: nếu Collect resource hoặc chuẩn bị Soil không đủ hấp dẫn, người chơi sẽ còn AP thừa và Sleep. Vì vậy “có một action để bấm” chưa chứng minh action đó đáng làm.

## 5. Archetype B — ngày Sunny có Person

Thêm cơ hội Person vào cùng board state:

| Việc | Loại | AP |
| --- | --- | ---: |
| Water hai crop | Committed | 2 |
| Collect Wild Berry | Expiring / prerequisite | 1 |
| Gift Person | Expiring | 1 |
| Work Project | Investment | 1 |
| Clear + Till Soil thứ ba | Investment | 2 |
| Tổng nhu cầu mong muốn |  | 7 |

Với 6 AP, ít nhất một AP phải bị cắt hoặc một việc phải bị trì hoãn.

### Ba plan hợp lệ

#### Plan B1 — giữ nhịp farm và gặp Person

```text
Water A + Water B          2 AP
Collect Berry + Gift      2 AP
Work Project              1 AP
Clear Soil C              1 AP
Till Soil C               hoãn
```

Hệ quả: không mất growth, không bỏ Person, Project vẫn tiến; expansion chậm một bước.

#### Plan B2 — ưu tiên expansion

```text
Water A + Water B          2 AP
Work Project              1 AP
Clear + Till Soil C        2 AP
Collect Berry              1 AP
Gift Person                bỏ qua
```

Hệ quả: giữ Berry cho lần sau nhưng mất cơ hội tạo Heart hôm nay.

#### Plan B3 — hy sinh một nhịp crop

```text
Water A                    1 AP
Collect Berry + Gift       2 AP
Work Project               1 AP
Clear + Till Soil C        2 AP
Water B                    bỏ qua
```

Hệ quả: làm đủ social và investment nhưng Crop B chậm một ngày.

Kết quả: đây là archetype đầu tiên mà 6 AP tạo ít nhất ba kế hoạch đọc được và có hậu quả khác nhau. Không plan nào tự động thắng nếu Heart, Project và một ngày growth đều có giá trị thực.

## 6. Archetype C — Rain có Person

Rain thay hai Water action bằng tự động tưới:

| Việc | Loại | AP |
| --- | --- | ---: |
| Water hai crop | Weather đã xử lý | 0 |
| Collect Wild Berry | Expiring / prerequisite | 1 |
| Gift Person | Expiring | 1 |
| Work Project | Investment | 1 |
| Clear + Till Soil thứ ba | Investment | 2 |
| Tổng nhu cầu |  | 5 |

Còn 1 AP linh hoạt. Nó có thể dùng để:

- Work Project thêm một lần.
- Collect một resource khác nếu source cho phép.
- Chuẩn bị một hành động tương lai khác.
- Sleep sớm.

Kết quả: Rain biến ngày có xung đột thành ngày có thể làm gần như mọi thứ. Đây là thay đổi kế hoạch có ý nghĩa, miễn là AP linh hoạt còn ít nhất một đích đáng dùng.

Nếu project không mở hoặc Soil C đã chuẩn bị xong, Rain day có thể dư 3–4 AP. Do đó Weather không thể tự gánh trách nhiệm tạo gameplay; số opportunity đang mở theo progression vẫn quyết định ngày có đầy hay không.

## 7. Archetype D — Sunny harvest day có Person

Giả sử Crop A Mature, Crop B còn Growing, Soil A được trồng lại ngay:

| Việc farming | AP |
| --- | ---: |
| Harvest A | 1 |
| Plant Seed vào A | 1 |
| Water A | 1 |
| Water B | 1 |
| Farming subtotal | 4 |

Thêm các cơ hội khác:

| Việc | AP |
| --- | ---: |
| Collect Berry + Gift Person | 2 |
| Work Project | 1 |
| Clear + Till Soil C | 2 |
| Tổng mọi nhu cầu | 9 |

Với 6 AP, người chơi phải bỏ ba AP trong số các việc đáng làm.

### Một số plan

| Plan | Farming | Person | Project | Expansion | Hệ quả chính |
| --- | ---: | ---: | ---: | ---: | --- |
| D1 — Harvest + Person | 4 | 2 | 0 | 0 | Giữ production và cơ hội social; không đầu tư tương lai |
| D2 — Harvest + Project | 4 | 0 | 1 | 1 Clear | Bỏ Person; progression và expansion đi từng bước |
| D3 — Harvest + Expand | 4 | 0 | 0 | 2 | Soil C sẵn sàng nhưng mất Person và Project |
| D4 — Không replant ngay | 2 Water/Harvest | 2 | 1 | 1 Clear | Hy sinh một ngày của cycle mới để giữ nhiều nhánh khác |

Ghi chú cho D4: Harvest A 1 AP + Water B 1 AP = 2 AP; Soil A để Tilled, chưa Plant và Water. Đây là lựa chọn hợp lệ nếu trì hoãn tái gieo không gây phạt ngoài mất một ngày sản xuất.

Kết quả: harvest day là nơi farming tạo burst cost. Nếu nhiều crop Mature cùng ngày, việc đồng bộ cycle có thể nuốt toàn bộ AP. Stagger crop không chỉ là chi tiết thẩm mỹ mà có thể là chiến lược quản lý ngày.

## 8. Sensitivity theo số active crop

Giữ ngày Sunny có Person, một Project và một bước preparation 1 AP; giả sử quà đã có sẵn nên Gift chỉ tốn 1 AP:

| Active crop cần tưới | Maintenance | Gift | Work | Prepare | Tổng | So với 6 AP |
| ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | 1 | 1 | 1 | 1 | 4 | Dư 2 |
| 2 | 2 | 1 | 1 | 1 | 5 | Dư 1 |
| 3 | 3 | 1 | 1 | 1 | 6 | Vừa đủ |
| 4 | 4 | 1 | 1 | 1 | 7 | Phải bỏ 1 |
| 5 | 5 | 1 | 1 | 1 | 8 | Farming bắt đầu thống trị |
| 6 | 6 | 1 | 1 | 1 | 9 | Không làm gì khác nếu tưới hết |

Mốc ba active crop là điểm sáu AP trở nên kín trong ngày có ba nhu cầu ngoài farm nhỏ. Mốc bốn crop bắt đầu tạo từ bỏ thường xuyên. Nếu game muốn người chơi duy trì nhiều hơn, một trong các thứ phải thay đổi:

- Water theo nhóm thay vì từng plot.
- Rain hoặc Weather khác hỗ trợ định kỳ.
- Automation xuất hiện.
- AP tăng theo progression.
- Không phải crop nào cũng cần tưới mỗi ngày.
- Bỏ tưới là một lựa chọn bình thường, không bị xem là chơi sai.

Chưa chọn phương án.

## 9. Kết quả đo bốn loại AP

| Archetype | Committed | Expiring | Investment mong muốn | Tổng mong muốn | Flexible sau khi làm hết có thể |
| --- | ---: | ---: | ---: | ---: | ---: |
| A — Sunny, không Person | 2 | 0 | 4 | 6 | 0 |
| B — Sunny, có Person | 2 | 2 | 3 | 7 | thiếu 1 |
| C — Rain, có Person | 0 | 2 | 3 | 5 | dư 1 |
| D — Harvest, có Person | 4 | 2 | 3 | 9 | thiếu 3 |

Lưu ý: “thiếu” không đồng nghĩa game cần thêm AP. Thiếu AP chính là nguồn lựa chọn nếu các việc bị bỏ đều có hậu quả hiểu được và không việc nào luôn vượt trội.

## 10. Kết luận

### 10.1. Sáu AP là một giả thuyết có khả năng tạo lựa chọn

Trong board state thử, 6 AP:

- Vừa đủ vào ngày yên tĩnh.
- Buộc bỏ một việc vào ngày có Person.
- Cho một AP linh hoạt vào Rain day.
- Buộc ưu tiên mạnh vào harvest day.

Đây là hình dạng nhịp ngày đáng tiếp tục kiểm tra. Chưa đủ để chốt 6 AP vì reward và tần suất từng archetype chưa được biết.

### 10.2. Day pressure đến từ giao nhau của lịch

Không cần mỗi subsystem tự gây áp lực lớn. Xung đột xuất hiện khi:

```text
crop cần chăm
+ Person xuất hiện
+ Project đang mở
+ resource hôm nay đáng lấy
```

Một ngày yên tĩnh cho phép chuẩn bị; một ngày nhiều lớp buộc chọn. Đây phù hợp hơn việc mọi ngày đều đầy cùng một lượng việc.

### 10.3. Farming cần cả steady cost và burst cost

- Water tạo steady cost.
- Harvest + replant tạo burst cost.
- Rain xóa hoặc giảm steady cost.
- Automation về sau cần thay đổi một trong hai dạng cost, không chỉ tăng output.

### 10.4. AP chỉ có ý nghĩa khi bỏ việc có hậu quả đọc được

Để các plan B1–B3 và D1–D4 thật sự khác nhau, game phải cho người chơi biết:

- Bỏ Water làm crop chậm bao lâu.
- Bỏ Gift phải chờ Person bao lâu.
- Trì hoãn Project làm lỡ unlock gì.
- Không chuẩn bị Soil hôm nay ảnh hưởng kế hoạch mùa vụ thế nào.

Nếu hậu quả bị ẩn hoặc không đáng kể, lựa chọn AP chỉ là noise.

## 11. Các giả định chưa được chốt

- 6 AP/ngày.
- Water từng crop riêng lẻ.
- Hedgerow resource có thể hết hạn trong ngày.
- Collect và Gift đều tốn AP.
- Clear + Till là hai action riêng.
- Harvest, Plant và Water đều tốn AP riêng.
- AP thừa mất khi Sleep.
- Rain tự tưới crop được Plant trong ngày.
- Soil giữ Tilled sau Harvest.
- Person opportunity biến mất sang ngày mới.

## 12. Bước tiếp theo

AP test đã đủ để tạm giữ 6 AP như một **giá trị thử có ích**, chưa phải quyết định. Câu hỏi tiếp theo chuyển từ lượng AP sang **cấu trúc một action**:

> Một AP tác động lên đúng một card, một stack/group, hay một động từ có thể xử lý nhiều card?

Câu trả lời sẽ quyết định trực tiếp:

- Water ba crop là 3 AP hay 1 AP.
- Harvest một stack crop chín là một hay nhiều action.
- Tool upgrade và automation còn giá trị gì.
- Bàn chơi có khuyến khích grouping hay chỉ dùng group để điều hướng UI.

Câu hỏi này đã được tiếp tục trong [Action granularity paper test 01](ACTION-GRANULARITY-PAPER-TEST-01.md). Kết quả chưa chốt luật, nhưng loại được `stack/group` và `toàn context` như đơn vị AP mặc định đủ an toàn. Giả thuyết mạnh nhất để thử tiếp là: **một AP trả cho một action instance, còn mỗi verb/Tool/effect tự công bố scope và capacity**; manual Tool tạm bắt đầu ở capacity 1 để giữ pressure đã thấy trong phép thử này.
