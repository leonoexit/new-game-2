# World — kiến trúc lá lồng tableau 01

Ngày: 2026-09-25. Trạng thái: **CG-35–42: lá lồng nhau, Field V0 và điều hướng theo tầng đã được định nghĩa.** Tài liệu này thay mô hình World là dải Area cuộn phẳng trong [Area tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) và cách hiểu cũ rằng `Field` chỉ là nhóm UI. [Field presentation contract 01](WORLD-GROUP-PRESENTATION-CONTRACT-01.md) hiện quy định bộ lọc trong lá Field.

## 0. Nguyên tắc chung

```text
Card A ──contains──▶ Card X, Card Y, Card Z
  │                    └── có thể chứa các card khác nữa
  ├── tự có identity, state và tương tác
  └── chính card là nút UI để mở nội dung hoặc commit action phù hợp
```

Không ấn định một độ sâu chung cho mọi loại lá. Một lá có thể chứa lá con, đổi state, hoặc vừa chứa lá con vừa đổi state. Ví dụ cây trồng và động vật đổi state theo vòng đời mà vẫn là lá có identity; cách biểu diễn cụ thể của động vật chưa chốt cho V0. Container có thể giới hạn số lá con hoặc không giới hạn; đây là thuộc tính/luật **của từng container**, không phải trần toàn cục của World. Theo CG-38/39, `Field` V0 giới hạn **8 vị trí đất** riêng với `Home`: đầu game có 2 lá Soil trống, 3 lá Soil có bụi rậm và 3 lá đá. Đập lá đá đặt lá Soil trống vào đúng vị trí ấy. Đây chỉ là giới hạn vị trí đất của Field V0, không buộc mọi container khác có giới hạn tương tự.

Lá bài là bề mặt điều khiển UI của đối tượng game: mở tableau con, inspect hoặc thực hiện action tùy loại lá và state. Việc mở/inspect là navigation 0 AP; action thật có điều kiện, AP và kết quả riêng. Bách Khoa theo identity khi lá thực sự hiện, không theo toàn bộ cây chứa bên dưới.

## 1. Mental model hiện hành

```text
Màn đầu: [World]                         ← một lá thật
  chơi World → tableau các lá Region
    chơi [Home] → tableau Home
      [Field] → tableau Field: đất/luống/crop, đá, bụi cây…
      [Farmhouse] → tableau trong nhà: [TV], [Bed]
      [Shipping Bin] → đích gửi hàng ở Home
      [Coop] [Barn] [Greenhouse] [Shed] → ví dụ các lá Home khi có loop tương ứng
```

`World`, Region như `Home`, các lá Home như `Field`/`Farmhouse`, lá trong nhà như `TV`/`Bed`, và các lá đất là **lá thật ở các tầng khác nhau**, không phải header giả lá. Chạm/chơi lá container mở tableau lồng bên trong để thấy các lá con. Việc mở tầng là navigation, không tự trả AP hoặc thực hiện action trên mọi lá con; action có phí chỉ commit trên target của nó. Khi một lá con lần đầu thực sự hiện, Bách Khoa ghi identity đó theo UI-37; thấy `World` hoặc `Home` không tự khám phá mọi lá sâu hơn.

`Region` trong giải thích của chủ dự án là tầng lá ngay sau World. Quan hệ chính xác giữa nhãn loại `Region` và `Area` đang dùng trong sheet V0 cần được đồng bộ sau khi chốt danh mục các Region. Không suy một nhóm UI từng được đề xuất thành loại lá `Object` chung cho mọi nội dung.

## 2. Áp vào Home và Field

- `Home` là một Region card trên World tableau. Tableau của Home có các lá đối tượng/công trình; `Field` là một card identity riêng dẫn vào sân trồng. `Farmhouse` là Building card riêng dẫn vào nội thất. `Shipping Bin` tiếp tục là Equipment card của Home. Các tên Coop/Barn/Greenhouse/Shed trong sơ đồ là **hướng kiến trúc về sau**, chưa tự trở thành card V0 hoạt động khi chưa có loop, nguồn và tương tác.
- **CG-36:** Field có sức chứa đất riêng. Farmhouse, Shipping Bin và các Building/Equipment khác ở Home không tiêu một suất đất trong Field; chúng không được nhân đôi thành lá chiếm đất trong tableau Field. “Chiếm ô” ở Home chỉ là chỗ của lá trên tableau Home, không trừ vào số ô trồng trong sân.
- Bên trong `Field`, giữ quyết định một vị trí đất = một luống: đầu game 8 vị trí gồm 2 lá Soil trống, 3 Soil có bụi rậm và 3 lá đá theo [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md). `Clear` bụi bằng Sickle 1 AP không nhận item và đổi ảnh **trong cùng lá Soil**. `Clear` đá bằng Hoe 1 AP nhận 1 Stone và **thay lá đá bằng lá Soil trống** ở cùng vị trí. `Till` dùng Hoe 1 AP trên Soil trống để đổi **state của cùng lá Soil** sang đã cày; Plant sau đó mới đổi identity sang Crop. Các action vẫn nhắm lá cụ thể, không vượt tám vị trí đất. `Field` không có `Water All` hoặc AP chung cho toàn sân.
- Bên trong `Farmhouse`, `TV` là lá con đã chốt; chủ dự án bổ sung lá `Bed` trong mental model này. `Bed` là lá thật, nhưng loại lá cụ thể, thao tác Sleep và thông số cần được ghi ở contract riêng trước khi thêm vào fixture V0.
- Các bộ lọc/dòng tóm tắt đã duyệt ở CG-31/33/34 nằm **trong tableau Field**: mặc định hiện cả tám vị trí; lọc Crop Mature/Growing, `Tilled Soil`, Soil trống/có bụi và lá đá riêng. Bộ lọc đọc state/identity của lá đang chiếm mỗi vị trí, không tạo lá UI mới. Quy tắc CG-30 “mở Farm thấy đất ngay” và CG-32 “Farmhouse/Bin luôn hiện khi lọc đất” đã bị cách lồng tableau này thay: mở **Home** thấy `Field`/`Farmhouse`/`Shipping Bin`; mở **Field** mới thấy đất; Farmhouse/Bin ở Home, không phải target trong bộ lọc Field.

## 3. Điều hướng V0 · CG-42

- **Mỗi lúc chỉ có một tableau đang mở.** Màn đầu hiện lá `World`; chạm World mở tableau Region. Chạm Region `Home` mở tableau Home. Chạm `Field` hoặc `Farmhouse` ở Home mở tableau con tương ứng. Lá cha không được nhân bản vào tableau con. Chạm lá container chỉ đổi nơi đang xem, **0 AP**, không làm thời gian trôi và không chạy action của các lá con.
- Trong tableau con có **Back về đúng cha trực tiếp**: Field/Farmhouse → Home; Home → tableau Region; tableau Region → màn lá World. Màn World gốc không có Back trong cây này. Một dòng đường dẫn như `World / Home / Field` cho biết tầng hiện tại; Back và đường dẫn là **UI**, không phải card identity, không có Bách Khoa hoặc AP badge. V0 không cần shortcut nhảy thẳng giữa hai nhánh; Field → Farmhouse đi qua Home.
- Back đóng focus/detail hoặc panel đang phủ **trước** khi rời tableau; một lần Back tiếp theo mới về cha. Quay lại rồi mở lại một container cho thấy **state hiện tại của chính các lá con**: đá đã Clear vẫn là Soil, crop đã tưới vẫn Watered, nguồn Mine đã spent vẫn spent. Back/mở lại không hoàn tác action, làm mới nguồn hoặc chạy Sleep.
- Trong cùng ngày, tableau nhớ vị trí cuộn/focus và bộ lọc riêng của nó khi người chơi đi sang tầng khác rồi quay lại. Nếu lá từng được focus đã biến mất hoặc bị bộ lọc ẩn, bỏ focus ấy; không giữ một target không còn hiện. Field lần đầu mở mặc định `Tất cả`; lựa chọn lọc vẫn là UI và dòng tóm tắt luôn tính từ đủ tám vị trí. Khi sang ngày mới, bộ lọc Field trở lại `Tất cả` để trạng thái mới hiện ra; dữ liệu gameplay của lá không bị reset bởi việc đổi bộ lọc.
- **Nguồn Hand/Tool/Item đang chọn theo người chơi qua các tầng**, vì khu nguồn dùng chung. Chọn Seed ở Home rồi mở Field vẫn có thể Plant trên Soil đã cày; chọn Hoe rồi đi vào Field vẫn có thể Clear/Till. Back hoặc chạm lá container không tự hủy lựa chọn. Chỉ chạm **đích hợp lệ** mới commit và trả AP/item; lá container không là đích cho nguồn chỉ vì nó được chạm. Nguồn đã tiêu hết tự mất hiệu lực; chọn nguồn khác hoặc chạm lại để bỏ chọn theo UI defaults hiện hành. Mở panel độc lập như shop/Bách Khoa, hoặc sang ngày, hủy lựa chọn tạm như quy ước UI hiện có. Lá hành động không cần nguồn, như TV, vẫn thực hiện hành động riêng và hủy nguồn tạm đang chọn để không để lại lựa chọn gây nhầm.
- Bách Khoa ghi identity khi **chính lá đó thực sự hiện trong tableau đang mở**. Thấy World không tự ghi Home; thấy Home không tự ghi Field Rock/TV. Quay lại một tầng không ghi lại một identity đã thấy.

**Các tình huống kiểm đọc:** World → Home → Field → Back → Farmhouse không trừ AP; Clear một Field Rock rồi Back/reopen Field vẫn thấy Soil thay chỗ và Stone trong Item; chọn Hoe trước khi mở Field vẫn Till được một Soil trống; lọc Field rồi ra/vào cùng ngày giữ lựa chọn lọc, sau Sleep về `Tất cả`.

## 4. Ranh giới còn mở

- Danh sách Region ở World và danh sách lá Home thực sự xuất hiện trong V0; tên `Home/Farm` cũ trong sheet cần tách sau khi phân loại Region/Field.
- Loại lá và action của `Bed`; cách thể hiện các Building/Equipment tương lai; bố cục mobile, hình thức Back/đường dẫn và mật độ card ở từng tableau. Nguyên tắc Back theo cha và 0 AP đã có, còn visual cụ thể để thử trên điện thoại.
- Thứ tự/visual sáu ô bị cản (3 bụi, 3 đá) và liệu phiên bản sau V0 có thể nâng sức chứa Field hay không; V0 giữ tám ô cố định.
