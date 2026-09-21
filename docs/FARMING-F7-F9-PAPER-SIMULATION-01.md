# Farming F7–F9 paper simulation 01 — expansion, workload và relief

Ngày chạy: 2026-09-21.

Trạng thái: paper simulation tiếp nối [Action granularity paper test 01](ACTION-GRANULARITY-PAPER-TEST-01.md). Phép thử kiểm tra việc mở rộng từ 2 → 4 → 6 crop và đặt một dạng relief ở giữa. Không chốt số plot, lịch Weather, số AP, Tool tier, capacity, loại automation hoặc nhịp crop.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Farming có các trạng thái dọn Soil, chuẩn bị Soil, gieo Seed, chăm qua ngày và Harvest.
- Weather được công bố theo ngày; Rain có thể thay đổi nhu cầu farming.
- Crop/Soil tồn tại trên bàn hoặc trong area/group liên quan.
- Cử chỉ thả card và chi phí AP là hai vấn đề riêng.
- Group/gateway được phép dùng để giữ bàn dễ đọc.

Người dùng chưa chốt số plot, một Water action tác động lên bao nhiêu crop, Tool upgrade, sprinkler/automation hay mốc mở chúng.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- F7 expansion, F8 nghĩa vụ AP và F9 relief/automation phải được thiết kế cùng nhau.
- 6 AP đang là giá trị thử hữu ích, không phải luật.
- Pressure có thể đến từ giao nhau của crop, Person, Project, resource và Weather.
- Không bắt đầu code hoặc prototype; kiểm chứng bằng paper simulation.

### 1.3. Giả thuyết đang được mang vào phép thử

> Một AP trả cho một action instance; action tự công bố scope/capacity. Group không tự quyết định chi phí.

Manual Tool bắt đầu ở capacity 1 là fixture khởi điểm. Phép thử so hai relief có cùng mức giảm Water trên sáu crop:

1. Watering Can capacity 2.
2. Automation tưới ba plot được gắn cố định.

Hai phương án chỉ là biến thể thử, chưa phải đề xuất nội dung.

### 1.4. Fixture/số tạm

- 6 AP/ngày; AP không chuyển sang ngày sau.
- Mỗi ngày có 2 AP việc ngoài farm đáng làm:
  - 1 AP cho một opportunity hết hạn trong ngày, như Gift hoặc resource.
  - 1 AP cho một investment, như Work Project.
- Sunny cần Water; Day 3 Rain tự Water toàn bộ crop thử.
- Plant, Harvest và manual Water có giá 1 AP mỗi action instance.
- Crop không chết khi bị bỏ Water; nó chỉ chậm một nhịp.
- Khi Harvest, người chơi có thể để Soil trống và replant ngày sau.
- Mỗi crop trong cửa sổ sáu ngày được lên lịch Mature đúng một lần.

Các số này được chọn để so workload, không mô tả một mùa hoặc crop thật của game.

## 2. Hai cách đo pressure

### Tổng workload

Tổng số AP mong muốn trong cả cửa sổ cho biết economy có đủ capacity trung bình hay không.

### Overload đúng ngày

Với mỗi ngày:

```text
overload = max(0, AP mong muốn trong ngày - 6)
```

Đây là phép đo khác tổng workload. Bốn AP thừa trong Rain day không thể Harvest một crop chưa Mature hoặc Gift một Person chưa xuất hiện. Nếu action không thể làm sớm, AP rảnh hôm trước không bù được overload hôm sau.

## 3. Lịch thử chung

| Ngày | Weather | Việc ngoài farm | Ghi chú farming |
| --- | --- | ---: | --- |
| 1 | Sunny | 2 AP | Routine |
| 2 | Sunny | 2 AP | Routine hoặc một cohort Mature tùy stage |
| 3 | Rain | 2 AP | Không cần manual Water |
| 4 | Sunny | 2 AP | Một cohort Mature |
| 5 | Sunny | 2 AP | Routine |
| 6 | Sunny | 2 AP | Một cohort Mature |

Để tránh cố ý tạo một harvest day cực đoan, crop được stagger:

- Stage 1: một crop Mature Day 4, một crop Mature Day 6.
- Stage 2: hai crop Mature Day 4, hai crop Mature Day 6.
- Stage 3: hai crop Mature Day 2, hai crop Day 4, hai crop Day 6.

Mỗi harvest day trong bảng chính dùng policy tham chiếu: Harvest, replant và Water toàn bộ ngay trong ngày. Khi policy này vượt 6 AP, phần route analysis sẽ thử trì hoãn.

## 4. Stage 1 — hai crop, manual capacity 1

| Ngày | Farm AP | Ngoài farm | Tổng mong muốn | Overload |
| --- | ---: | ---: | ---: | ---: |
| 1 — routine | Water 2 = 2 | 2 | 4 | 0 |
| 2 — routine | Water 2 = 2 | 2 | 4 | 0 |
| 3 — Rain | 0 | 2 | 2 | 0 |
| 4 — Harvest 1 | Harvest 1 + Plant 1 + Water 2 = 4 | 2 | 6 | 0 |
| 5 — routine | Water 2 = 2 | 2 | 4 | 0 |
| 6 — Harvest 1 | Harvest 1 + Plant 1 + Water 2 = 4 | 2 | 6 | 0 |
| **Tổng** | **14** | **12** | **26/36 capacity** | **0** |

Kết quả:

- Hai crop không gây áp lực thường xuyên.
- Hai harvest day vừa chạm 6 AP nhưng vẫn làm được cả hai việc ngoài farm.
- Cửa sổ còn mười AP không dùng; điều này không có nghĩa game chắc chắn thiếu nội dung, vì fixture cố ý chỉ giữ hai việc ngoài farm mỗi ngày.

## 5. Stage 2 — bốn crop trước relief

Manual Water, Plant và Harvest đều capacity 1.

| Ngày | Farm AP | Ngoài farm | Tổng mong muốn | Overload |
| --- | ---: | ---: | ---: | ---: |
| 1 — routine | Water 4 = 4 | 2 | 6 | 0 |
| 2 — routine | Water 4 = 4 | 2 | 6 | 0 |
| 3 — Rain | 0 | 2 | 2 | 0 |
| 4 — Harvest 2 | Harvest 2 + Plant 2 + Water 4 = 8 | 2 | 10 | 4 |
| 5 — routine | Water 4 = 4 | 2 | 6 | 0 |
| 6 — Harvest 2 | Harvest 2 + Plant 2 + Water 4 = 8 | 2 | 10 | 4 |
| **Tổng** | **28** | **12** | **40/36 capacity** | **8** |

### 5.1. Vì sao tổng thiếu 4 nhưng overload là 8

Day 3 còn 4 AP, nhưng crop chưa Mature nên không thể Harvest trước. Hai harvest day mỗi ngày vượt 4 AP. Không có banking hoặc preparation rule nào trong fixture để chuyển bốn AP Rain sang các action tương lai.

Do đó chỉ nhìn `40 nhu cầu / 36 capacity` sẽ đánh giá thấp pressure thực tế.

### 5.2. Hai route trên Day 4

#### Route 4A — giữ opportunity, trì hoãn cycle

```text
Harvest 2                     2 AP
Water 2 crop còn đang lớn     2 AP
Opportunity + Work            2 AP
Plant 2 crop vừa harvest      hoãn
```

Day 5 phải Plant 2 + Water 4 = 6 AP nếu muốn khôi phục toàn bộ cycle, nên hai việc ngoài farm Day 5 bị bỏ hoặc tiếp tục bị đẩy. Hai crop mới cũng chậm ít nhất một ngày.

#### Route 4B — giữ production, hy sinh nhánh khác

```text
Harvest 2 + Plant 2           4 AP
Water 2 trong 4 crop          2 AP
Opportunity + Work            bỏ
2 crop không được Water       chậm một nhịp
```

Ngay cả khi bỏ cả hai việc ngoài farm, full farming policy vẫn cần 8 AP. Bốn plot với hai crop chín cùng ngày đã vượt capacity của một ngày chỉ bằng farming.

### 5.3. Kết quả Stage 2

Expansion từ hai lên bốn crop không chỉ làm ngày routine kín. Nó làm harvest day vượt toàn bộ ngân sách trước khi Person hoặc Project được xét. Nếu đây không phải nhịp mong muốn, relief phải xuất hiện trước hoặc cùng lúc cohort hai crop đầu tiên Mature, chứ không chỉ sau khi người chơi đã chịu nhiều cycle quá tải.

Đây là kết quả trong fixture synchronized theo cohort hai crop; chưa chứng minh bốn plot luôn là quá nhiều.

## 6. Stage 3A — sáu crop, chỉ nâng Water capacity lên 2

Ba cohort, mỗi cohort hai crop. Water sáu crop cần ba action; Plant và Harvest vẫn atomic.

| Ngày | Farm AP | Ngoài farm | Tổng mong muốn | Overload |
| --- | ---: | ---: | ---: | ---: |
| 1 — routine | Water 3 action | 2 | 5 | 0 |
| 2 — Harvest 2 | Harvest 2 + Plant 2 + Water 3 = 7 | 2 | 9 | 3 |
| 3 — Rain | 0 | 2 | 2 | 0 |
| 4 — Harvest 2 | Harvest 2 + Plant 2 + Water 3 = 7 | 2 | 9 | 3 |
| 5 — routine | Water 3 action | 2 | 5 | 0 |
| 6 — Harvest 2 | Harvest 2 + Plant 2 + Water 3 = 7 | 2 | 9 | 3 |
| **Tổng** | **27** | **12** | **39/36 capacity** | **9** |

### 6.1. Giá trị thật của upgrade

Nếu sáu crop vẫn Water atomic, riêng Water trong năm ngày Sunny cần 30 AP. Capacity 2 giảm nó còn 15 AP, tiết kiệm 15 AP trong cửa sổ.

Không có relief, cùng lịch sáu crop sẽ có:

- 42 farming AP.
- 54 AP khi cộng việc ngoài farm.
- 22 AP overload đúng ngày.

Water capacity 2 giảm farming từ 42 xuống 27 AP và overload từ 22 xuống 9. Đây là khác biệt lớn, không chỉ giảm thao tác tay.

### 6.2. Nhưng upgrade chỉ giải steady cost

Mỗi harvest day vẫn cần 7 farming AP trước khi làm Person/Project. Vì vậy upgrade đã trả được phần lớn maintenance do expansion tạo ra nhưng chưa xử lý Harvest + Plant burst.

Một route có thể trì hoãn Plant:

```text
Harvest 2                     2 AP
Water 4 crop còn lại          2 AP (capacity 2)
Opportunity + Work            2 AP
Plant 2                       hoãn
```

Nếu ngày sau là Rain như cặp Day 2 → Day 3, Plant 2 vào Rain day tốn 2 AP và Rain tự Water chúng trong fixture. Weather hấp thụ phần trì hoãn khá tốt. Với Day 4 → Day 5 Sunny, Plant trễ tạo thêm workload và mất ít nhất một nhịp sản xuất.

Do đó cùng một upgrade có giá trị khác nhau tùy lịch Weather và vị trí harvest day.

## 7. Stage 3B — automation ba plot thay cho Tool capacity 2

Automation fixture tự Water đúng ba plot được gắn với nó; ba plot còn lại cần manual Water atomic.

Trong lịch này, chi phí Water cũng là 3 AP mỗi Sunny day và 0 vào Rain day. Vì vậy bảng AP giống Stage 3A:

- 27 farming AP.
- 39 AP tổng mong muốn.
- 9 AP overload đúng ngày.

Hai relief không giống nhau về cấu trúc dù cùng số AP:

| Watering Can capacity 2 | Automation ba plot |
| --- | --- |
| Linh hoạt chọn crop nào được Water | Cố định vào ba plot đã gắn |
| Vẫn cần ba action instance | Ba plot không cần action; ba plot còn lại cần ba action |
| Có thể dùng ở area khác nếu luật cho phép | Giá trị gắn với infrastructure đã xây |
| Người chơi quyết định target mỗi lần | Quyết định chính xảy ra khi bố trí/gắn plot |

Automation fixture không dùng “mọi card trong group được miễn phí”. Ba plot được gắn là scope cơ học tường minh; đổi cách hiển thị group không đổi phạm vi.

## 8. Sensitivity — relief cho cả burst verb

Để biết overload còn lại đến từ đâu, thử cho Water, Harvest và Plant đều capacity 2 ở Stage 3. Đây là một **gói relief chẩn đoán**, không phải một Tool hoặc upgrade được đề xuất.

| Loại ngày | Farm AP | Ngoài farm | Tổng | Overload |
| --- | ---: | ---: | ---: | ---: |
| Routine Sunny | Water 3 | 2 | 5 | 0 |
| Harvest cohort 2 | Harvest 1 + Plant 1 + Water 3 = 5 | 2 | 7 | 1 |
| Rain | 0 | 2 | 2 | 0 |

Trong cửa sổ sáu ngày:

- Farming còn 21 AP.
- Tổng mong muốn còn 33 AP.
- Ba harvest day mỗi ngày buộc bỏ đúng một AP, nên overload đúng ngày là 3 dù tổng capacity vẫn dư.

Đây là hình dạng lựa chọn dễ đọc hơn fixture Water-only:

> Harvest day cho phép giữ trọn cycle nhưng chỉ chọn một trong hai việc ngoài farm.

Chưa biết game có muốn hình dạng này hay không. Kết quả chỉ chỉ ra rằng burst relief và maintenance relief là hai biến riêng.

## 9. Staggering giúp gì?

Nếu cả sáu crop ở Stage 3A Mature cùng ngày:

```text
Harvest 6 + Plant 6 + Water 3 = 15 farming AP
+ 2 AP ngoài farm = 17 AP
```

Ngày đó overload 11 AP. Chia thành ba cohort hai crop giảm peak xuống 9 AP tổng/ngày, tức overload 3.

Staggering là chiến lược có ý nghĩa, nhưng không tự giải quyết throughput:

- Nó đổi một peak cực lớn thành nhiều peak nhỏ.
- Với Harvest/Plant atomic, mỗi cohort hai crop vẫn làm farming vượt 6 AP trong Stage 3A.
- Nếu người chơi không thấy trước ngày Mature hoặc hậu quả bỏ Water, staggering sẽ trở thành mẹo ẩn thay vì lựa chọn có thể lập kế hoạch.

## 10. Kết luận mới từ phép thử

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Đo AP trung bình là chưa đủ.** Phải đo overload đúng ngày vì nhiều action không thể làm sớm.
2. **Bốn crop có thể chạm cliff trước relief.** Với cohort hai crop và các verb atomic, full farming đã cần 8 AP trên harvest day.
3. **Water relief có giá trị kinh tế thật.** Ở sáu crop, capacity 2 giảm 15 AP Water trong năm Sunny day của fixture.
4. **Maintenance relief không tự giải burst.** Harvest và Plant vẫn khiến mỗi harvest day vượt budget.
5. **Staggering giảm peak nhưng không thay thế progression.** Nó là một chiến lược scheduling, không nên là cách duy nhất để farm lớn còn chơi được.
6. **Tool và automation có thể cùng tiết kiệm một lượng AP nhưng tạo quyết định khác nhau.** Một bên linh hoạt theo action, một bên cam kết vào infrastructure cố định.

### 10.2. Giả thuyết mạnh nhất để thử tiếp

- Giữ manual capacity 1 ở giai đoạn hai crop.
- Cho maintenance relief xuất hiện trước hoặc quanh lúc bốn crop bắt đầu Mature theo cohort, không đợi sau nhiều ngày quá tải.
- Khi hướng tới sáu crop, thử một nguồn burst relief riêng cho Harvest hoặc Plant thay vì giả định Water upgrade giải quyết toàn bộ farming.
- Giữ một harvest-day tradeoff nhỏ; không nhất thiết giảm mọi ngày xuống mức làm được tất cả.

Tất cả vẫn là giả thuyết cần thử.

## 11. Các biến còn mở

- Người chơi có được biết chính xác ngày Mature để chủ động stagger không.
- Replant trễ một ngày ảnh hưởng economy bao nhiêu.
- Harvest có bắt buộc tốn AP trên từng crop hay Produce có thể được lấy theo một đơn vị luống.
- Plant nhiều Seed có hợp với ngữ pháp kéo-thả hiện tại không.
- Tool upgrade và automation mở bằng Gold, Project, collection hay một nhánh khác.
- Automation có cần resource vận hành hoặc chỉ cần xây một lần.
- Rain có tưới crop Plant trong cùng ngày hay không.
- Opportunity ngoài farm có thật sự đều đặn 2 AP/ngày hay có nhịp thưa/dày hơn.
- Người chơi có thể chuẩn bị action nào trong Rain day để giảm harvest overload tương lai.

## 12. Bước tiếp theo

Phép thử tiếp theo cần so **ba gói relief** trên cùng một lịch dài hơn, thay vì chỉ tăng capacity tùy ý:

1. Water Tool linh hoạt.
2. Automation cố định theo plot.
3. Một burst tool/effect cho Harvest hoặc Plant.

Mỗi gói cần có một cost mở khóa tạm và phải cạnh tranh với việc mở thêm plot. Cần đo:

- Payback theo AP mất để mở và AP được giải phóng.
- Route mở rộng trước hay đầu tư relief trước.
- Person/Project opportunities bị bỏ trong mỗi route.
- Weather làm thay đổi thứ tự đầu tư hay chỉ làm kết quả nhiễu.

Phép so này đã được chạy trong [Farming relief paper simulation 02](FARMING-RELIEF-PAPER-SIMULATION-02.md). Kết quả cho thấy relief-first giữ được capacity để tài trợ expansion, còn expansion-first có thể tạo một lock-in mềm; Water Tool, fixed automation và burst relief không thể được đánh giá chỉ bằng tổng AP tiết kiệm.
