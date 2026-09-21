# Resource area paper simulation 01 — source phẳng, reveal batch và Person A/C

Ngày chạy: 2026-09-21.

Trạng thái: paper test tiếp nối [Resource economy daily routes 02](RESOURCE-ECONOMY-DAILY-ROUTES-02.md). Phép thử tìm một resource loop có lựa chọn cho Rain/free-capacity window mà không biến common resource thành loot ngẫu nhiên bắt buộc. Không chốt area, deck, số card, expiry, Person ability hay Heart cadence.

## 1. Phân loại trạng thái thiết kế

### 1.1. Điều người dùng đã chốt

- Một số card/group có thể là gateway mở area khác để giữ bàn dễ đọc.
- Person đã thu nhận có activated ability dùng được bất kỳ ngày nào nếu đủ Heart và có target/context hợp lệ.
- Heart riêng từng Person, tồn tại qua ngày và có cap chưa chốt.
- Hạt nhân A là xem thông tin ẩn trước khi cam kết.
- Hạt nhân C là giữ một card/cơ hội thêm một ngày.
- Bỏ lỡ thông thường nên là trì hoãn đến chu kỳ sau, không phá save.
- Không dùng party slot hoặc combo cưỡng ép.

Người dùng chưa chốt source có random/reveal hay không, việc mở area có tốn AP không, resource opportunity có hết hạn không hoặc A/C có effect cụ thể nào.

### 1.2. Hướng hiện tại đã được đồng ý để tiếp tục

- Rain cần giải phóng AP vào những đích đáng dùng, không tự gánh toàn bộ gameplay.
- Resource source phải cạnh tranh với farming, Person và Project.
- Group/area trước hết là cấu trúc điều hướng; không tự động là một action miễn phí cho mọi card bên trong.
- Paper simulation trước code/prototype.

### 1.3. Giả thuyết cần thử

1. Một batch resource có nhiều item hơn capacity Collect trong ngày có thể tạo lựa chọn thật.
2. Search cost có thể tạo economy of commitment: lấy nhiều item trong một lần vào area hiệu quả hơn chỉ lấy một.
3. A giúp tránh cam kết vào batch không phù hợp; C giúp dời một opportunity hiếm qua ngày bận.
4. Reveal loop không nên thay mọi deterministic source, vì recipe-critical common resource cần đường lập kế hoạch đáng tin cậy.

### 1.4. Fixture/số tạm

- Mở/đóng area group là điều hướng và không tốn AP.
- `Search Grove`: 1 AP, reveal sáu opportunity card của ngày.
- `Collect`: 1 AP/card, đưa resource vào storage.
- Opportunity chưa Collect biến mất khi Sleep và có thể quay lại ở batch sau; không mất vĩnh viễn.
- Mỗi ngày chỉ Search Grove một lần.
- Flat source đối chứng: Collect đúng resource đã biết với 1 AP/item.
- Người chơi cần 2 Wood cho E và có thể cần 1 Berry để Gift.

Tên Grove và batch contents chỉ là fixture. Không suy ra Wood, Berry, Fiber, Herb hoặc Mushroom sẽ cùng nằm trong một area thật.

## 2. Ba mô hình source được so

### F — flat deterministic source

```text
Chọn Wood source → trả 1 AP → nhận 1 Wood
```

- Chi phí và output biết trước.
- Tốt cho recipe planning.
- Không có quyết định bên trong source ngoài “lấy hay không”.

### B — paid batch reveal

```text
Search area 1 AP
→ reveal 6 opportunity
→ Collect từng card 1 AP
→ card còn lại hết hạn khi Sleep
```

- Item đầu tiên tốn tổng 2 AP; item thứ hai trở đi tốn thêm 1 AP.
- Giá trị tăng khi người chơi cam kết nhiều AP vào cùng area.
- Tạo lựa chọn nếu số card hữu ích lớn hơn AP Collect còn lại.

### H — hidden one-shot choice

```text
Chọn một card úp → trả 1 AP → nhận kết quả
```

- Rẻ nhưng lựa chọn không có thông tin nếu không dùng A.
- Dễ biến thành đoán/may rủi thay vì lập kế hoạch.
- Được giữ làm đối chứng, không dùng làm ứng viên chính trong phép thử này.

## 3. Action grammar của mô hình B

```text
Grove gateway             mở group, 0 AP
Main Person → Search      reveal daily batch, 1 AP
Main Person → resource    Collect đúng card đó, 1 AP
Sleep                     discard/return card chưa lấy
```

Group chỉ chứa và trình bày opportunity. `Search` có scope reveal cả batch vì verb ghi rõ; `Collect` vẫn capacity 1. Đây là ứng dụng của giả thuyết `1 AP = một action instance có scope tường minh`, không phải “1 AP tác động mọi card trong group”.

## 4. Test 1 — recipe có target rõ

Người chơi cần `2 Wood + 1 Berry`.

Batch fixture:

| Ngày | AP có thể dành cho source | Batch sau Search |
| --- | ---: | --- |
| D1 Sunny | 2 | Wood, Berry, Fiber, Herb, Empty, Empty |
| D3 Rain | 5 | Wood, Wood, Berry, Herb, Fiber, Empty |

### F — flat source

Ba item cần đúng 3 Collect AP. Người chơi có thể lấy theo thứ tự mong muốn; không có phí mở batch.

### B — batch source

- D1: Search 1 + Collect Wood 1 = 2 AP.
- D3: Search 1 + Collect Wood 1 + Collect Berry 1 = 3 AP.
- Tổng: 5 AP để lấy đúng ba item nếu đã Search cả hai ngày.

Nếu bỏ D1 và chỉ Search D3, người chơi có thể lấy `Wood + Wood + Berry` trong 4 AP. Forecast/resource knowledge vì thế thay đổi giá trị của việc Search sớm.

### Kết quả

Với một recipe cụ thể, B đắt hơn F từ 1–2 AP và phụ thuộc batch timing. Nếu E bắt buộc 2 Wood để progression cơ bản, thay F hoàn toàn bằng B sẽ biến planning thành chờ đúng draw.

Batch source chỉ tạo giá trị bổ sung nếu:

- item thay thế cũng hữu ích;
- batch được preview đủ để lập kế hoạch;
- hoặc output/variety bù Search cost.

## 5. Test 2 — Rain day không có target duy nhất

D7 Rain để lại 5 AP sau một opportunity khác. Batch:

```text
Wood, Wood, Berry, Herb, Fiber, Mushroom
```

Search tốn 1 AP, còn 4 Collect. Người chơi phải bỏ hai trong sáu resource:

| Kế hoạch | Bốn card lấy | Hướng được ưu tiên |
| --- | --- | --- |
| Build | Wood, Wood, Fiber, Herb | Project/crafting |
| Social | Berry, Mushroom, Herb, Wood | Quà và variety |
| Stockpile | Wood, Wood, Berry, Fiber | Resource linh hoạt gần hạn |

Không kế hoạch nào được chứng minh tối ưu vì reward chưa định giá. Nhưng khác với source phẳng, Rain day đã tạo một lựa chọn phân bổ trong area thay vì chỉ lặp `Collect Wood` nhiều lần.

Rủi ro: nếu storage không có giới hạn và mọi resource đều chắc chắn hữu ích sau này, lựa chọn chỉ là “bỏ item ít hiếm nhất”. Loop cần demand/readability, không thể dựa vào rarity mơ hồ.

## 6. Test 3 — Person A xem trước khi cam kết

Fixture ability A:

> Tiêu 1 A Heart để xem batch Grove hôm nay trước khi trả AP cho Search.

A không đổi batch, không Collect miễn phí và không giảm Search cost nếu người chơi vẫn vào area.

Ba tình huống:

| Batch ẩn thực tế | Mục tiêu hiện tại | Không A | Dùng A |
| --- | --- | --- | --- |
| Không có Metal/item cần | Tìm đúng item hiếm | Có thể mất 1 AP Search rồi bỏ | Biết trước để dành AP cho việc khác |
| Có Wood + Berry | E và Gift đều mở | Search như bình thường | Không tiết kiệm AP; chỉ xác nhận quyết định |
| Có Mushroom hiếm nhưng ngày bận | Collection | Search mới biết, có thể không còn AP Collect | Biết trước để đổi kế hoạch ngày hoặc dùng C nếu có |

A chỉ tạo giá trị khi thông tin có thể đổi hành động. Nếu người chơi luôn Search vì mọi batch đều đáng lấy, A trở thành effect không có quyết định. Nếu batch thường vô dụng, Search loop tự nó có vấn đề.

## 7. Test 4 — Person C giữ opportunity

Fixture ability C:

> Sau khi batch được reveal, tiêu 1 C Heart để giữ đúng một resource opportunity qua một lần Sleep.

Tình huống:

- D3 Search reveal Metal/rare item cần cho W.
- Sau Search, AP còn lại phải dùng cho crop hoặc Person hết hạn.
- Không C: item rời đi khi Sleep; chờ lần xuất hiện sau.
- Có C: đặt item vào Reserve; D4 Collect nó bằng 1 AP.

C không tạo resource và không miễn Collect. Nó đổi expiry thành planning window. Đây phù hợp hạt nhân C và không buộc combo với A: người chơi có thể reveal batch bình thường rồi dùng C; A chỉ giúp biết trước có đáng mở area hay không.

Rủi ro: nếu C giữ được mọi item hoặc dùng hằng ngày, expiry mất ý nghĩa. Capacity và Heart cadence cần hạn chế tần suất, không nhất thiết thêm cooldown riêng.

## 8. Heart cadence sensitivity cho A/C

Fixture cadence để kiểm tra:

- Ba Search day giữa hai lần Person A hoặc C xuất hiện.
- Mỗi Gift tạo 1 Heart.
- Ability tốn 1 Heart.
- Cap thử là 2 Heart.

| Heart sẵn có đầu chu kỳ | Số Search có thể can thiệp | Hệ quả |
| ---: | ---: | --- |
| 0 | 0/3 | Chơi loop nguyên bản; chờ dịp Gift |
| 1 | 1/3 | Chọn ngày thông tin/expiry quan trọng nhất |
| 2 | 2/3 | Có buffer nhưng không vô hiệu hóa toàn bộ loop |
| ≥3 hoặc Gift hằng ngày | Gần 3/3 | Ability dễ trở thành thao tác mặc định thay vì lựa chọn |

Con số 3 Search, 1 Heart và cap 2 đều là fixture. Kết quả cần giữ là tỷ lệ `Heart kiếm được / opportunity hợp lệ` quyết định ability là lựa chọn hay default.

## 9. So sánh tổng hợp

| Tiêu chí | F — flat | B — batch reveal | H — hidden one-shot |
| --- | --- | --- | --- |
| Lập kế hoạch recipe | Mạnh | Phụ thuộc batch | Yếu |
| Quyết định trong area | Thấp | Cao khi AP không đủ lấy hết | Thấp nếu không có info |
| Dùng Rain capacity | Lặp nhiều Collect | Có commitment + selection | Nhiều lần gamble |
| Chỗ cho A | Hầu như không | Có, nếu preview đổi quyết định | Rất mạnh, có nguy cơ bắt buộc |
| Chỗ cho C | Ít | Có qua expiry | Chỉ khi result tồn tại |
| Nguy cơ frustration | Thấp | Chờ batch đúng | Cao |
| Nguy cơ thành chore | Collect lặp | Search tax nếu chỉ cần một item | Random click |

## 10. Kết luận mới

### 10.1. Kết quả phân tích, chưa phải quyết định đã chốt

1. **Không nên thay mọi source phẳng bằng reveal batch.** Common resource bắt buộc cho recipe cần ít nhất một đường deterministic.
2. **Batch reveal phù hợp với opportunity đa dạng hơn là nguyên liệu nền duy nhất.** Nó có thể chứa quà, collection item, resource phụ hoặc cách lấy hiệu quả hơn.
3. **Search cost chỉ hợp lý khi batch có giá trị tùy chọn và có thể Collect nhiều item.** Nếu người chơi chỉ cần một Wood, nó là thuế 1 AP.
4. **A và C có context rõ mà không cần combo.** A bảo vệ cam kết thông tin; C bảo vệ timing/expiry.
5. **Heart cadence phải thưa hơn opportunity cadence.** Nếu ability dùng trên mọi batch, loop mất tension và Gift trở thành phí vận hành.
6. **Rain day có thể trở thành ngày khai thác area.** Nhưng choice chỉ thật khi không đủ AP lấy mọi thứ và nhu cầu resource đã đọc được.

### 10.2. Giả thuyết mạnh nhất để mang sang bước sau

- Giữ deterministic source cho resource nền hoặc cho phép recipe substitution đáng tin cậy.
- Dùng batch area như nguồn cơ hội/variety, không làm cổng duy nhất của progression bắt buộc.
- Cho batch hết hạn mềm: item quay lại trong chu kỳ sau, không mất vĩnh viễn.
- Test A và C riêng lẻ trước; không thiết kế content yêu cầu phải sở hữu cả hai.
- Reveal đủ thông tin về category/demand để lựa chọn không chỉ dựa vào rarity.

Tất cả vẫn là giả thuyết cần thử.

## 11. Fixture chưa được phép hóa thành luật

- Search 1 AP, batch 6 card, Collect 1 AP/card.
- Batch biến mất sau một Sleep.
- Grove chỉ Search một lần/ngày.
- Các batch D1/D3/D7 và mọi resource bên trong.
- Ability A preview toàn batch với 1 Heart.
- Ability C giữ một card qua một Sleep với 1 Heart.
- Ba Search giữa các lần gặp Person; Gift 1 Heart; cap 2.
- Flat source luôn có đúng item cần với 1 AP.

## 12. Bước tiếp theo

Resource loop đã tạo context đầu tiên có thể kiểm tra A/C và Heart cadence. Bước kế tiếp cần mở rộng từ một loop sang **mạng micro-objective/reveal**:

- Khi nào deterministic source, batch area, W/E Project, collection và Person opportunity được reveal.
- Mỗi completion mở card, area hay verb nào.
- Có ít nhất hai đường đi từ early farming sang subsystem khác.
- Không subsystem nào trở thành cổng bắt buộc cho mọi save.
- Missing một seasonal/resource opportunity chỉ trì hoãn, không phá save.

Cần dựng graph Year 1 ở mức dependency trước khi tiếp tục điền giá.

Graph v0 đã được dựng trong [Year 1 progression dependency graph](YEAR-1-PROGRESSION-DEPENDENCY-GRAPH-V0.md). Nó dùng reveal theo state, ba route phân tán và recovery edges; objective trung tâm vẫn chưa được giả định.
