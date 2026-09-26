# World — kiến trúc lá lồng tableau 01

Ngày: 2026-09-25. Trạng thái: **CG-35–51 định nghĩa lá lồng nhau, năm Region V0, Field V0, Bed/Sleep, Nell và điều hướng. Luật lá Forest nằm trong contract Forest.** Tài liệu này thay mô hình World là dải Area cuộn phẳng trong [Area tableau model 08](SCROLLABLE-AREA-TABLEAU-MODEL-08.md) và cách hiểu cũ rằng `Field` chỉ là nhóm UI. [Field presentation contract 01](WORLD-GROUP-PRESENTATION-CONTRACT-01.md) hiện quy định bộ lọc trong lá Field.

## 0. Nguyên tắc chung

```text
Card A ──contains──▶ Card X, Card Y, Card Z
  │                    └── có thể chứa các card khác nữa
  ├── tự có identity, state và tương tác
  └── chính card là nút UI để mở nội dung hoặc commit action phù hợp
```

Không ấn định một độ sâu chung cho mọi loại lá. Một lá có thể chứa lá con, đổi state, hoặc vừa chứa lá con vừa đổi state. Ví dụ cây trồng và động vật đổi state theo vòng đời mà vẫn là lá có identity; cách biểu diễn cụ thể của động vật chưa chốt cho V0. Container có thể giới hạn số lá con hoặc không giới hạn; đây là thuộc tính/luật **của từng container**, không phải trần toàn cục của World. Theo CG-38/39, `Field` V0 giới hạn **8 vị trí đất** riêng với `Home`: đầu game có 2 lá Soil trống, 3 lá Soil có bụi rậm và 3 lá đá. Đập lá đá đặt lá Soil trống vào đúng vị trí ấy. Đây chỉ là giới hạn vị trí đất của Field V0, không buộc mọi container khác có giới hạn tương tự.

Lá bài là bề mặt điều khiển UI của đối tượng game: mở tableau con, inspect hoặc thực hiện action tùy loại lá và state. Việc mở/inspect là navigation 0 AP; action thật có điều kiện, AP và kết quả riêng. Valley Almanac theo identity khi lá thực sự hiện, không theo toàn bộ cây chứa bên dưới.

## 1. Mental model hiện hành

```text
Màn đầu: [World]                         ← một lá thật
  chơi World → tableau 5 lá Region: [Home] [Forest] [River] [Mine] [Commerce]
    chơi [Home] → tableau Home
      [Field] → tableau Field: đất/luống/crop, đá, bụi cây…
      [Farmhouse] → tableau trong nhà: [TV], [Bed]
      [Farm Pond] → nguồn múc nước cho Watering Can
      [Shipping Bin] → đích gửi hàng ở Home
      [Coop] [Barn] [Greenhouse] [Shed] → ví dụ các lá Home khi có loop tương ứng
    chơi [Forest] → tableau Forest: [Hedgerow] bụi có quả/đã hái, [Oak Tree] [Maple Tree] [Pine Tree] [Mahogany Tree], [Wild Herb] khi xuất hiện
    chơi [River] → tableau River: 3 [Fishing Spot], [Nell] khi có lịch
    chơi [Mine] → tableau Mine: các nguồn [Rock]/[Ore Rock] của tầng hiện tại
    chơi [Commerce] → tableau Commerce: [Supermarket]
```

`World`, Region như `Home`, các lá Home như `Field`/`Farmhouse`, lá trong nhà như `TV`/`Bed`, và các lá đất là **lá thật ở các tầng khác nhau**, không phải header giả lá. Chạm/chơi lá container mở tableau lồng bên trong để thấy các lá con. Việc mở tầng là navigation, không tự trả AP hoặc thực hiện action trên mọi lá con; action có phí chỉ commit trên target của nó. Khi một lá con lần đầu thực sự hiện, Valley Almanac ghi identity đó theo UI-37; thấy `World` hoặc `Home` không tự khám phá mọi lá sâu hơn.

**CG-43:** `Region` là loại card ở tầng ngay dưới `World`. V0 có đúng năm identity `Home`, `Forest`, `River`, `Mine`, `Commerce`. `Area` là nhãn cũ cho cùng tầng trong tài liệu/fixture trước CG-43, không phải loại card thứ hai, tầng lồng thêm hoặc entry Valley Almanac riêng. `Forest` là tên đã chốt cho lá trước đây ghi “Area rừng (chưa đặt tên)”; `Rìa Rừng` chỉ là bối cảnh bên trong Forest, không là lá và không cần mở thêm trước khi thấy/Collect `Wild Herb`. Không suy một nhóm UI từng được đề xuất thành loại lá `Object` chung cho mọi nội dung.

Mỗi Region là một lá con trực tiếp của World và mở tableau của chính nó bằng navigation 0 AP. `Home` chứa `Field`, `Farm Pond`, `Farmhouse`, `Shipping Bin`; `Farm Pond` là lá nguồn hiện ngay trên tableau Home, không chiếm vị trí đất Field và không mở tầng con. Chọn Watering Can rồi chạm Pond để múc nước theo [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md). `Forest` bày Hedgerow, bốn cây thường theo CG-58/63 và Wild Herb khi xuất hiện như [contract Forest](FIRST-PLAYABLE-FOREST-CONTENT-BATCH-01.md) quy định; `River` bày `Fishing Spot` và `Nell` khi lịch cho xuất hiện; `Mine` chứa nguồn tầng hiện tại; `Commerce` chứa `Supermarket`. Valley Almanac ghi từng lá khi chính lá đó thực sự hiện ở tầng đang mở. Luật nguồn và action của các Region nằm tại contract tương ứng trong [bản đồ nguồn luật](README.md).

**Nell trong River:** World architecture chỉ sở hữu vị trí và quan hệ chứa của lá `Nell`; lịch xuất hiện, Gift, Heart và ability nằm ở [CG-45–51 trong nhật ký quyết định](ON-TABLE-CARD-SHAPE-DECISION-09.md).

## 2. Áp vào Home và Field

- `Home` là một Region card trên World tableau. Tableau của Home có các lá đối tượng/công trình; `Field` là một card identity riêng dẫn vào sân trồng. `Farm Pond` là source card nhận Watering Can để múc nước, không là lối vào River hoặc Fishing Spot. `Farmhouse` là Building card riêng dẫn vào nội thất. `Shipping Bin` tiếp tục là Equipment card của Home. Các tên Coop/Barn/Greenhouse/Shed trong sơ đồ là **hướng kiến trúc về sau**, chưa tự trở thành card V0 hoạt động khi chưa có loop, nguồn và tương tác.
- **CG-36:** Field có sức chứa đất riêng. Farm Pond, Farmhouse, Shipping Bin và các lá khác ở Home không tiêu một suất đất trong Field; chúng không được nhân đôi thành lá chiếm đất trong tableau Field. “Chiếm ô” ở Home chỉ là chỗ của lá trên tableau Home, không trừ vào số ô trồng trong sân.
- Bên trong `Field`, mỗi vị trí bày một lá đất/crop/đá và không chứa Farmhouse hoặc Bin. Sức chứa, phân bố mở đầu, Clear/Till nằm ở [Farm land contract](FARM-V0-LAND-AND-PLOT-CONTRACT-01.md); Plant/Water/Harvest ở [Farm action grammar](FIRST-PLAYABLE-FARM-ACTION-GRAMMAR-AP-RERUN-41.md).
- Bên trong `Farmhouse`, `TV` và `Bed` là hai lá con thật thuộc loại `Equipment card`. Chạm `Farmhouse` ở Home mở tableau có hai lá này bằng navigation 0 AP. Chạm trực tiếp `Bed` thực hiện `Sleep`, chuyển sang ngày mới theo các luật Sleep hiện hành; không có lớp mở Bed hoặc lá action Sleep riêng. Chạm `TV` giữ action xem dự báo D+1 riêng của nó. Valley Almanac ghi Bed khi chính lá Bed lần đầu hiện trong Farmhouse, không ghi sớm khi chỉ thấy Farmhouse.
- **UI-44:** Field hiện đủ tám lá đất/crop/đá, không có bộ lọc hoặc dòng tóm tắt; [Field presentation contract](WORLD-GROUP-PRESENTATION-CONTRACT-01.md) sở hữu cách co lá trên màn hình. Farmhouse/Bin vẫn ở Home.

## 3. Điều hướng V0 · CG-42

- **Mỗi lúc chỉ có một tableau đang mở.** Màn đầu hiện lá `World`; chạm World mở tableau Region. Chạm Region `Home` mở tableau Home. Chạm `Field` hoặc `Farmhouse` ở Home mở tableau con tương ứng. Lá cha không được nhân bản vào tableau con. Chạm lá container chỉ đổi nơi đang xem, **0 AP**, không làm thời gian trôi và không chạy action của các lá con.
- Trong tableau con có **Back về đúng cha trực tiếp**: Field/Farmhouse → Home; Home → tableau Region; tableau Region → màn lá World. Màn World gốc không có Back trong cây này. Một dòng đường dẫn như `World / Home / Field` cho biết tầng hiện tại; Back và đường dẫn là **UI**, không phải card identity, không có Valley Almanac hoặc AP badge. V0 không cần shortcut nhảy thẳng giữa hai nhánh; Field → Farmhouse đi qua Home.
- Back đóng focus/detail hoặc panel đang phủ **trước** khi rời tableau; một lần Back tiếp theo mới về cha. Quay lại rồi mở lại một container cho thấy **state hiện tại của chính các lá con**: đá đã Clear vẫn là Soil, crop đã tưới vẫn Watered, nguồn Mine đã spent vẫn spent. Back/mở lại không hoàn tác action, làm mới nguồn hoặc chạy Sleep.
- Quay lại tableau luôn đọc state hiện tại của từng lá. Field không có bộ lọc hoặc vị trí cuộn dọc theo UI-44; nếu focus tạm trỏ tới lá đã biến mất sau action, bỏ focus ấy. Việc rời/quay lại hoặc Sleep không đổi state gameplay của lá ngoài những hệ quả Sleep đã chốt.
- **Nguồn Hand/Tool/Item đang chọn theo người chơi qua các tầng**, vì khu nguồn dùng chung. Chọn Seed ở Home rồi mở Field vẫn có thể Plant trên Soil đã cày; chọn Hoe rồi đi vào Field vẫn có thể Clear/Till. Back hoặc chạm lá container không tự hủy lựa chọn. Chỉ chạm **đích hợp lệ** mới commit và trả AP/item; lá container không là đích cho nguồn chỉ vì nó được chạm. Nguồn đã tiêu hết tự mất hiệu lực; chọn nguồn khác hoặc chạm lại để bỏ chọn theo UI defaults hiện hành. Mở panel độc lập như shop/Valley Almanac, hoặc sang ngày, hủy lựa chọn tạm như quy ước UI hiện có. Lá hành động không cần nguồn, như TV, vẫn thực hiện hành động riêng và hủy nguồn tạm đang chọn để không để lại lựa chọn gây nhầm.
- Valley Almanac ghi identity khi **chính lá đó thực sự hiện trong tableau đang mở**. Thấy World không tự ghi Home; thấy Home không tự ghi Field Rock/TV. Quay lại một tầng không ghi lại một identity đã thấy.

**Mặc định UI cho điện thoại (lựa chọn triển khai, không là luật card mới):** đặt nút `Back` có biểu tượng mũi tên và nhãn chữ ở góc trên trái của header tableau đang mở, ngay dưới rail trạng thái chung. Header này giữ trên màn hình khi cuộn; tên tầng/đường dẫn nằm cạnh nút để người chơi biết sẽ quay về đâu. Ở màn chỉ có lá `World`, không hiện nút `Back`. Nút không che card hoặc khu nguồn đang chọn. Cùng một nút tuân theo thứ tự đã chốt: đóng panel/focus đang phủ trước, lần chạm kế tiếp mới về tableau cha. Vị trí và hình thức này có thể tinh chỉnh sau khi kiểm trên điện thoại mà không đổi luật điều hướng CG-42.

**Các tình huống kiểm đọc:** World → Home → Field → Back → Farmhouse không trừ AP; Clear một Field Rock rồi Back/reopen Field vẫn thấy Soil thay chỗ và Stone trong Item; chọn Hoe trước khi mở Field vẫn Till được một Soil trống; Field luôn thấy đủ tám vị trí ở cả trước và sau Sleep.

## 4. Ranh giới còn mở

- Lịch `Nell` dùng ngày 6/12/18 **trong mỗi Season 18 ngày** ở khung V0; Season đầu do chủ dự án chốt (CG-46), Season sau là lựa chọn chuyển thể sau kiểm giấy (CG-47). Độ dài Season khác S18 và cân bằng Gift/Heart cuối vẫn mở. Nội dung và cách sắp xếp các lá Home bổ sung sau V0 cũng mở. `Coop`/`Barn`/`Greenhouse`/`Shed` chỉ là ví dụ kiến trúc, chưa là lá hoạt động V0.
- Cách thể hiện các Building/Equipment tương lai, mật độ card và visual chi tiết trên điện thoại còn cần kiểm. Vị trí mặc định của `Back` đã được chọn ở §3; không cần thêm quyết định card grammar để đặt nút. `Bed` đã là Equipment card và chạm trực tiếp để Sleep theo CG-44; quyết định này không đặt thêm thông số cân bằng cho Sleep.
- Thứ tự/visual sáu ô bị cản (3 bụi, 3 đá) và liệu phiên bản sau V0 có thể nâng sức chứa Field hay không; V0 giữ tám ô cố định.
