# Stardew Valley — Point-and-Click / Card-Based World Design

## 1. Mục tiêu thiết kế

Tài liệu này mô tả cách chuyển **Stardew Valley** thành một game solo theo hướng:

- Card-based / point-and-click
- Tối thiểu thao tác vật lý
- Tối đa quyền tự quyết
- Không ép người chơi theo một goal trung tâm
- Giữ lại loop gây nghiện của Stardew
- Loại bỏ phần di chuyển, căn vị trí, thao tác lặp và không gian không tạo ra quyết định

Triết lý cốt lõi:

> **Maximum agency, minimum physical input.**

Người chơi vẫn phải quyết định:

- Hôm nay làm gì
- Đi đâu
- Dùng thời gian vào đâu
- Dùng energy vào đâu
- Bán, giữ hay chế biến tài nguyên
- Theo đuổi progression nào
- Tương tác với ai
- Xây dựng farm theo hướng nào

Nhưng không phải:

- Đi bộ từng đoạn đường
- Click từng cây
- Tưới từng ô
- Chặt từng gốc cây
- Chạy tới từng NPC
- Điều khiển combat realtime
- Thực hiện thao tác tay lặp đi lặp lại

---

# 2. Triết lý Goal

Game không thật sự “không có goal”.

Nó là:

> **Goal-less ở cấp độ game, nhưng goal-rich ở cấp độ moment-to-moment.**

Game không nói:

> “Bạn phải thắng bằng cách X.”

Thay vào đó, game liên tục khiến người chơi tự nghĩ:

- Mình muốn trồng thêm cái này
- Mình muốn nâng tool
- Mình muốn kiếm nguyên liệu kia
- Mình muốn mở khu vực nọ
- Mình muốn max nghề
- Mình muốn hoàn thành collection
- Mình muốn làm thân với NPC này
- Mình muốn thử build farm khác

Stardew hoạt động tốt vì nó là một **engine tạo micro-goal tự phát**.

Người chơi trở thành người tự sản xuất mục tiêu cho chính mình.

---

# 3. Ngôn ngữ thiết kế cốt lõi

Toàn bộ game dùng một grammar thống nhất:

```text
World
→ Region
→ Object
→ Action
```

Ví dụ:

```text
World
→ Forest
→ Forage
→ Search
```

hoặc:

```text
World
→ Town
→ Residents
→ Gift
```

hoặc:

```text
World
→ Home
→ Field
→ Harvest
```

## Ý nghĩa từng tầng

### World

Là toàn bộ không gian chơi.

### Region

Một cụm gameplay loop lớn.

Ví dụ:

- Home
- Town
- Forest
- Beach
- Mountain
- Desert
- Sewers
- Ginger Island

### Object

Một hệ thống hoặc activity có gameplay riêng.

Ví dụ trong Home:

- Field
- Coop
- Barn
- Greenhouse
- Shed

### Action

Thứ người chơi thực sự bấm.

Ví dụ:

- Harvest
- Water
- Sell
- Gift
- Explore
- Mine
- Cook

---

# 4. Nguyên tắc abstraction

## 4.1 Không mô phỏng không gian nếu nó không tạo decision

Một địa điểm chỉ nên tồn tại khi nó:

- Có loop riêng
- Có economy riêng
- Có progression riêng
- Có NPC interaction riêng
- Có reward riêng
- Có decision riêng

Nếu không thì xóa.

Ví dụ:

```text
Farm → Bus Stop → Bus → Desert
```

là thừa.

Chỉ cần:

```text
Home → Desert
```

Game tự tính:

- tiền vé
- thời gian
- điều kiện unlock

---

## 4.2 Không chia nhỏ object quá mức

Ví dụ sai:

```text
Field A
Field B
Field C
Field D
```

Đúng:

```text
Field
```

Field là một object trừu tượng đại diện cho toàn bộ farming ngoài trời.

Bên trong Field mới có:

```text
Blueberry ×24
Corn ×18
Melon ×12
Empty Capacity ×26
```

Người chơi quyết định ở cấp độ hệ thống, không phải ở cấp độ từng tile.

---

## 4.3 Giữ decision, bỏ thao tác vật lý

Ví dụ người chơi vẫn quyết định:

- trồng gì
- bao nhiêu
- dùng fertilizer không
- harvest lúc nào
- bán hay chế biến

Nhưng không quyết định:

- cây này nằm ở tile số 37 hay 38

---

# 5. World Architecture

World screen chỉ cần các Region lớn.

```text
              STARDEW VALLEY

                 HOME

     TOWN       FOREST       BEACH

              MOUNTAIN

             RAILROAD

              SEWERS

              DESERT

            WITCHLANDS

           GINGER ISLAND
```

Một số Region chỉ xuất hiện sau khi unlock.

Đầu game:

```text
HOME
TOWN
FOREST
BEACH
MOUNTAIN
```

Sau đó thế giới dần mở:

```text
+ Mine
+ Secret Woods
+ Railroad
+ Sewers
+ Desert
+ Witchlands
+ Ginger Island
+ Summit
```

Điều này tạo cảm giác:

> **Thế giới của mình ngày càng lớn.**

---

# 6. HOME

Home là khu vực quản lý farm và các hệ thống sống hằng ngày.

```text
HOME

[Field]
[Greenhouse]
[Coop]
[Barn]
[Orchard]
[Fish Pond]
[Shed]
[Cave]
[Farmhouse]
[Storage]
[Shipping]
```

---

## 6.1 Field

Field là một object duy nhất.

Không có Field A, B, C.

Ví dụ:

```text
FIELD

Blueberry ×24 — Ready
Melon ×12 — 2 days
Corn ×18 — Growing

Capacity: 54 / 80
Watered: 72%
Fertilized: 20
```

Actions:

```text
Harvest Ready
Water All
Plant
Fertilize
Clear
Inspect Crops
```

Field đại diện cho toàn bộ hệ thống trồng ngoài trời.

---

## 6.2 Greenhouse

```text
GREENHOUSE

Ancient Fruit
Starfruit
Strawberry
Other Crops
```

Actions:

```text
Harvest
Plant
Replace Crop
Water
```

Greenhouse có rule riêng:

- không phụ thuộc season
- ưu tiên crop giá trị cao
- hỗ trợ production loop dài hạn

---

## 6.3 Coop

```text
COOP

Chicken
Duck
Rabbit
Other Small Animals
```

Actions:

```text
Collect Products
Pet
Feed
Inspect
Breed / Manage
```

Không click từng chuồng nhỏ.

---

## 6.4 Barn

```text
BARN

Cow
Goat
Pig
Sheep
Other Large Animals
```

Actions:

```text
Collect
Pet
Feed
Inspect
Manage
```

---

## 6.5 Orchard

```text
ORCHARD

Apple
Peach
Pomegranate
Orange
Cherry
Other Trees
```

Actions:

```text
Harvest
Inspect
Plant Tree
Replace Tree
```

---

## 6.6 Fish Pond

```text
FISH POND

Species
Population
Request
Production
```

Actions:

```text
Collect
Fulfill Request
Change Species
Inspect
```

---

## 6.7 Shed

Shed là nơi tập trung processing.

```text
SHED

Keg
Preserves Jar
Cheese Press
Loom
Oil Maker
Other Machines
```

Actions:

```text
Collect Finished
Load Machines
Auto Fill
Inspect Queue
```

Không click từng machine.

---

## 6.8 Cave

```text
CAVE

Mushroom / Fruit Bat Output
```

Actions:

```text
Collect
Inspect
```

---

## 6.9 Farmhouse

```text
FARMHOUSE

Bed
Kitchen
TV
Calendar
Journal
Crafting
Decor
```

Actions:

```text
Sleep
Cook
Check Weather
Check Calendar
View Journal
Craft
Decorate
```

---

## 6.10 Storage

```text
STORAGE

Crops
Animal Products
Materials
Rare Items
Cooking
Equipment
```

Actions:

```text
Deposit
Withdraw
Sort
Search
Filter
```

Không cần chạy tới từng chest.

---

## 6.11 Shipping

```text
SHIPPING BIN
```

Actions:

```text
Sell
Sell All Selected
Preview Earnings
Undo Before Sleep
```

---

# 7. TOWN

Town là region xã hội, thương mại và progression dịch vụ.

```text
TOWN

[Shop]
[Saloon]
[Blacksmith]
[Clinic]
[Museum]
[Community Center / Joja]
[Residents]
[Theater]
```

---

## 7.1 Shop

```text
SHOP
```

Actions:

```text
Buy Seeds
Buy Supplies
Sell Goods
Check Seasonal Stock
```

---

## 7.2 Saloon

```text
SALOON
```

Actions:

```text
Buy Food
Meet NPCs
Talk
Gift
Special Event
```

---

## 7.3 Blacksmith

```text
BLACKSMITH
```

Actions:

```text
Upgrade Tool
Open Geodes
Buy Materials
Sell Minerals
```

---

## 7.4 Clinic

```text
CLINIC
```

Actions:

```text
Recover
Buy Medicine
Talk
```

---

## 7.5 Museum

```text
MUSEUM
```

Actions:

```text
Donate
View Collection
Claim Reward
Inspect Missing Items
```

---

## 7.6 Community Center / Joja

```text
COMMUNITY CENTER
```

Actions:

```text
View Bundles
Donate Items
Claim Unlocks
Track Progress
```

Nếu theo route Joja:

```text
JOJA
```

Actions:

```text
Purchase Development
Track Unlocks
```

---

## 7.7 Residents

Residents là object trừu tượng.

```text
RESIDENTS

Abigail
Penny
Sam
Emily
...
```

Chỉ hiện NPC đang available tại thời điểm đó.

Actions:

```text
Talk
Gift
Invite
Quest
Inspect Relationship
```

Không cần chạy vào từng nhà.

---

## 7.8 Theater

```text
THEATER
```

Actions:

```text
Watch Movie
Invite NPC
Buy Snack
Social Event
```

---

# 8. FOREST

```text
FOREST

[Forage]
[Woodland]
[Fishing]
[Ranch]
[Wizard]
[Secret Woods]
[Traveling Cart]
[Big Tree]
[Mastery Cave]
```

---

## 8.1 Forage

```text
FORAGE
```

Actions:

```text
Search
Gather Seasonal Items
Rare Find
```

---

## 8.2 Woodland

```text
WOODLAND
```

Actions:

```text
Chop Wood
Collect Hardwood
Clear Debris
Gather Sap
```

---

## 8.3 Fishing

```text
FOREST FISHING
```

Actions:

```text
Fish
Use Bait
Use Tackle
Target Species
```

---

## 8.4 Ranch

```text
RANCH
```

Actions:

```text
Buy Animal
Buy Supplies
Talk
Manage Livestock Purchase
```

---

## 8.5 Wizard

```text
WIZARD
```

Actions:

```text
Talk
Magic Quest
Unlock Magic System
Special Service
```

---

## 8.6 Secret Woods

```text
SECRET WOODS

Hardwood
Forage
Fishing
Slimes
Old Master Cannoli
```

Actions:

```text
Gather
Fish
Fight
Offer Item
Inspect
```

---

## 8.7 Traveling Cart

```text
TRAVELING CART
```

Actions:

```text
Browse Stock
Buy Rare Item
Inspect Rotation
```

---

## 8.8 Big Tree / Raccoon

Object tiến hóa theo progression.

```text
Large Tree
→ Giant Stump
→ Raccoon Home
```

Actions thay đổi theo state.

---

## 8.9 Mastery Cave

```text
MASTERY CAVE

Farming Mastery
Mining Mastery
Foraging Mastery
Fishing Mastery
Combat Mastery
```

Thuần progression UI.

---

# 9. BEACH

```text
BEACH

[Fishing]
[Forage]
[Fish Shop]
[Tide Pools]
[Dock]
```

---

## 9.1 Fishing

```text
BEACH FISHING
```

Actions:

```text
Fish
Target Species
Use Bait
Use Tackle
```

---

## 9.2 Forage

```text
BEACH FORAGE
```

Actions:

```text
Collect Shells
Collect Coral
Rare Find
```

---

## 9.3 Fish Shop

```text
FISH SHOP
```

Actions:

```text
Buy Rod
Buy Bait
Buy Tackle
Sell Fish
```

---

## 9.4 Tide Pools

```text
TIDE POOLS
```

Actions:

```text
Gather
Inspect
Rare Spawn
```

---

## 9.5 Dock

```text
DOCK
```

Actions:

```text
Travel
Special Event
Boat Access
```

---

# 10. MOUNTAIN

```text
MOUNTAIN

[Lake]
[Carpenter]
[Mine]
[Adventurer's Guild]
[Quarry]
```

---

## 10.1 Lake

```text
LAKE
```

Actions:

```text
Fish
Forage
Special Encounter
```

---

## 10.2 Carpenter

```text
CARPENTER
```

Actions:

```text
Build
Upgrade Building
Move Building
Buy Materials
```

---

## 10.3 Mine

Mine là một subsystem dạng run.

```text
MINE

Current Depth: 45
```

Actions:

```text
Explore
Mine Ore
Fight
Open Crate
Descend
Use Elevator
Leave
```

Một floor có thể reveal:

```text
2 Slimes
Iron Vein
Crate
Ladder Chance
```

Không cần tactical movement chi tiết.

---

## 10.4 Adventurer's Guild

```text
ADVENTURER'S GUILD
```

Actions:

```text
Buy Equipment
Sell Equipment
View Monster Goals
Claim Rewards
```

---

## 10.5 Quarry

```text
QUARRY

Stone
Copper
Iron
Gold
Gem Node
Rare Node
```

Actions:

```text
Mine
Mine All
Inspect Rare Nodes
```

Quarry hoạt động như resource pool tái tạo theo thời gian.

---

# 11. RAILROAD

```text
RAILROAD

[Train]
[Spa]
[Forage]
[Witch Passage]
```

---

## 11.1 Train

```text
TRAIN
```

Khi event xuất hiện:

```text
Train Passing
```

Action:

```text
Visit Train
Collect Loot
```

---

## 11.2 Spa

```text
SPA
```

Action:

```text
Rest
```

Đổi Time lấy Energy.

---

## 11.3 Forage

```text
RAILROAD FORAGE
```

Actions:

```text
Search
Gather
```

---

## 11.4 Witch Passage

Ban đầu:

```text
???
```

Sau unlock:

```text
Enter Witchlands
```

---

# 12. SEWERS

```text
SEWERS

[Krobus]
[Fishing]
[Statue]
[Mutant Lair]
```

---

## 12.1 Krobus

```text
KROBUS
```

Actions:

```text
Shop
Talk
Gift
```

---

## 12.2 Fishing

```text
SEWER FISHING
```

Actions:

```text
Fish
Target Rare Species
```

---

## 12.3 Statue

```text
STATUE OF UNCERTAINTY
```

Action:

```text
Change Profession
```

---

## 12.4 Mutant Lair

```text
MUTANT LAIR
```

Actions:

```text
Explore
Fight
Fish
Gather
```

---

# 13. DESERT

```text
DESERT

[Oasis]
[Skull Cavern]
[Trader]
[Casino]
[Forage]
```

---

## 13.1 Oasis

```text
OASIS
```

Actions:

```text
Buy
Talk
Special Stock
```

---

## 13.2 Skull Cavern

Run-based dungeon.

```text
SKULL CAVERN

Current Depth: 34
```

Actions:

```text
Explore
Fight
Mine
Open Treasure
Descend
Escape
```

Khác Mine ở:

- nguy hiểm hơn
- reward cao hơn
- progression sâu hơn
- mang tính run hơn

---

## 13.3 Desert Trader

```text
DESERT TRADER
```

Actions:

```text
Trade
Inspect Rotation
```

---

## 13.4 Casino

```text
CASINO
```

Actions:

```text
Play
Spend Tokens
Buy Rewards
```

---

## 13.5 Desert Forage

```text
DESERT FORAGE
```

Actions:

```text
Search
Gather
Rare Find
```

---

# 14. WITCHLANDS

```text
WITCHLANDS

[Swamp]
[Witch Hut]
```

---

## 14.1 Swamp

```text
SWAMP
```

Actions:

```text
Fish
Explore
Interact
```

---

## 14.2 Witch Hut

```text
WITCH HUT

Dark Shrine of Memory
Dark Shrine of Selfishness
Dark Shrine of Night Terrors
Magic Quest
```

Actions:

```text
Use Shrine
Inspect
Complete Quest
```

---

# 15. GINGER ISLAND

Ginger Island gần như là một World 2.

Không cần chia North / South / East / West nếu các phân chia này chỉ mang tính địa lý.

```text
GINGER ISLAND

[Island Farm]
[Jungle]
[Dig Site]
[Field Office]
[Volcano]
[Beach Resort]
[Pirate Cove]
[Island Trader]
[Qi's Room]
```

---

## 15.1 Island Farm

```text
ISLAND FARM

[Field]
[Farmhouse]
[Shipping]
[Gather]
```

Field có rule riêng:

```text
All-Season Crops
```

---

## 15.2 Jungle

```text
JUNGLE

[Forage]
[Leo]
[Gem Birds]
[Gourmand Frog]
[Puzzles]
```

Thiên về:

- exploration
- secrets
- collection
- progression đặc biệt

---

## 15.3 Dig Site

```text
DIG SITE

Bone Nodes
Clay
Rocks
Fossils
Mushroom Cave
```

Actions:

```text
Excavate
Mine
Gather
Inspect
```

---

## 15.4 Field Office

```text
FIELD OFFICE
```

Actions:

```text
Donate Fossils
Island Survey
View Collection
Claim Rewards
```

---

## 15.5 Volcano

Dungeon riêng.

```text
VOLCANO

Current Floor: 4 / 10
```

Actions:

```text
Explore
Fight
Mine
Open Treasure
Advance
```

Identity:

- Cinder Shards
- Magma monsters
- special loot
- Forge

### Forge

```text
FORGE
```

Actions:

```text
Enchant
Combine Rings
Upgrade Weapon
```

---

## 15.6 Beach Resort

```text
BEACH RESORT
```

Actions:

```text
Visit
Meet NPCs
Talk
Social Event
```

Resort chủ yếu làm biến đổi NPC presence.

---

## 15.7 Pirate Cove

```text
PIRATE COVE

[Fishing]
[Pirates]
[Darts]
[Secrets]
```

Actions:

```text
Fish
Play
Talk
Explore
```

---

## 15.8 Island Trader

```text
ISLAND TRADER
```

Economy dạng barter.

Actions:

```text
Trade A → B
Inspect Stock
```

Không nhất thiết dùng Gold.

---

## 15.9 Qi's Room

```text
QI'S ROOM

[Challenges]
[Qi Gems]
[Shop]
[Perfection]
```

Đây là endgame engine tạo optional goals.

Người chơi có thể hoàn toàn bỏ qua.

---

# 16. SUMMIT

Summit không cần là gameplay region thường xuyên.

```text
SUMMIT
LOCKED
```

Sau khi đạt điều kiện:

```text
SUMMIT
UNLOCKED
```

Vai trò:

- reward destination
- event
- achievement
- ending-like scene

Không cần loop riêng.

---

# 17. EVENT LOCATIONS

Một số region/object chỉ nên tồn tại tạm thời.

Ví dụ Night Market.

Beach bình thường:

```text
BEACH

Fishing
Fish Shop
Forage
Dock
```

Khi Night Market diễn ra:

```text
BEACH — NIGHT MARKET

Merchants
Submarine
Mermaid Show
Special Fishing
```

Điều này cho phép:

> **Region Card biến hình theo ngày, season hoặc event.**

Đây là một cơ chế rất mạnh.

---

# 18. Những location nên xóa khỏi navigation

## Bus Stop

Không cần tồn tại như một node.

Sai:

```text
Home
→ Bus Stop
→ Bus
→ Desert
```

Đúng:

```text
Home
→ Desert
```

Game tự tính cost.

---

## Backwoods

Xóa.

Chỉ là đường nối.

---

## Tunnel

Không phải normal navigation.

Chỉ xuất hiện khi có:

```text
Special Event
→ Tunnel
```

---

# 19. Calendar System

Calendar là một trong các hệ thống không được bỏ.

Ví dụ:

```text
Summer 18
Sunny
10:40 AM
```

Calendar ảnh hưởng:

- Crop
- Fish
- Forage
- NPC schedule
- Festival
- Shop inventory
- Quest
- Weather
- Event
- Region state

Calendar tự tạo micro-goal:

> Còn 4 ngày nữa hết mùa.

> Crop này không kịp lớn.

> Hôm nay NPC này xuất hiện ở Resort.

> Ngày mai mưa nên không cần Water Field.

---

# 20. Time và Energy

Mỗi Action có thể tiêu:

- Time
- Energy
- Gold
- Item
- Combination

Ví dụ:

```text
Harvest Ready
Cost: 20 min
Energy: 1
```

hoặc:

```text
Mine
Cost: 40 min
Energy: 5
```

Game vẫn giữ tension Stardew:

- có nên đi Mine không
- có nên về Home sớm
- có nên câu cá thêm
- có đủ energy làm farm không

Nhưng bỏ thao tác thừa.

---

# 21. NPC System

NPC không cần mô phỏng từng bước di chuyển.

Mỗi thời điểm NPC có state:

```text
Abigail
Location: Mountain
Available: Yes
Relationship: 4 Hearts
```

Người chơi:

```text
World
→ Mountain
→ Residents
→ Abigail
→ Gift
```

NPC schedule vẫn tồn tại, nhưng ở cấp độ dữ liệu.

---

# 22. Dungeon Abstraction

Mine / Skull Cavern / Volcano cùng chung framework.

```text
Dungeon
→ Explore
→ Encounter
→ Resolve
→ Reward
→ Advance / Leave
```

Encounter có thể gồm:

```text
Monster
Ore
Treasure
Obstacle
Special Event
Exit
```

Không cần map tactical chi tiết nếu mục tiêu là point-and-click.

---

# 23. Một ngày ở Home khi đã unlock đầy đủ

Ví dụ một ngày không rời Home:

```text
Wake Up
→ Check Weather
→ Field: Harvest Ready
→ Field: Water All
→ Greenhouse: Harvest
→ Coop: Collect
→ Barn: Collect
→ Shed: Load Kegs
→ Fish Pond: Fulfill Request
→ Cave: Collect
→ Storage: Sort
→ Kitchen: Cook
→ Build Menu: Start New Pond
→ Decorate Farm
→ Shipping: Sell
→ Sleep
```

Không có một objective bắt buộc.

Chuỗi micro-goal tự sinh:

```text
Ancient Fruit ready
→ Keg empty
→ Start Wine

Pig found Truffle
→ Oil Maker available
→ Make Truffle Oil

Fish Pond requests Seaweed
→ Storage has Seaweed
→ Upgrade Pond

Hardwood enough
→ New construction possible
→ Start Fish Pond
```

Đây chính là loop mong muốn.

---

# 24. Điều phải giữ từ Stardew

Các hệ thống cốt lõi:

1. Calendar
2. Time
3. Energy
4. Farming
5. Processing
6. Animals
7. Fishing
8. Mining
9. Combat abstraction
10. NPC relationship
11. Economy
12. Collection
13. Crafting
14. Building
15. Seasonal change
16. Exploration unlock
17. Optional long-term progression
18. World state change

---

# 25. Điều có thể bỏ hoặc nén mạnh

Có thể bỏ:

- Đi bộ
- Collision
- Tile-by-tile movement
- Tưới từng cây
- Chặt từng cây
- Harvest từng crop
- Search NPC bằng cách chạy map
- Realtime combat
- Fishing dexterity
- Animation dài
- Empty travel space
- Hallway / road / connector map

---

# 26. UI Philosophy

Mỗi Region nên giống một dashboard sống.

Ví dụ:

```text
HOME

Field          Ready: 36 Crops
Greenhouse     Ready: 8 Crops
Coop           Products Ready
Barn           Truffle Found
Shed           5 Machines Done
Fish Pond      Request Active
Cave           Items Ready
Storage        184 Items
Shipping       0g Pending
```

Người chơi nhìn vào là biết:

> Có gì đáng làm?

UI không nói:

> Phải làm gì?

---

# 27. Core Design Rule

Toàn bộ chuyển thể có thể quy về một rule:

> **Chỉ giữ lại những thứ tạo ra quyết định.**

Nếu một mechanic chỉ tồn tại để:

- kéo dài thời gian
- buộc người chơi đi bộ
- yêu cầu thao tác lặp
- mô phỏng khoảng cách mà không tạo trade-off

thì nén hoặc bỏ.

---

# 28. Tóm tắt hệ thống

```text
WORLD
│
├── HOME
│   ├── Field
│   ├── Greenhouse
│   ├── Coop
│   ├── Barn
│   ├── Orchard
│   ├── Fish Pond
│   ├── Shed
│   ├── Cave
│   ├── Farmhouse
│   ├── Storage
│   └── Shipping
│
├── TOWN
│   ├── Shop
│   ├── Saloon
│   ├── Blacksmith
│   ├── Clinic
│   ├── Museum
│   ├── Community Center / Joja
│   ├── Residents
│   └── Theater
│
├── FOREST
│   ├── Forage
│   ├── Woodland
│   ├── Fishing
│   ├── Ranch
│   ├── Wizard
│   ├── Secret Woods
│   ├── Traveling Cart
│   ├── Big Tree
│   └── Mastery Cave
│
├── BEACH
│   ├── Fishing
│   ├── Forage
│   ├── Fish Shop
│   ├── Tide Pools
│   └── Dock
│
├── MOUNTAIN
│   ├── Lake
│   ├── Carpenter
│   ├── Mine
│   ├── Adventurer's Guild
│   └── Quarry
│
├── RAILROAD
│   ├── Train
│   ├── Spa
│   ├── Forage
│   └── Witch Passage
│
├── SEWERS
│   ├── Krobus
│   ├── Fishing
│   ├── Statue
│   └── Mutant Lair
│
├── DESERT
│   ├── Oasis
│   ├── Skull Cavern
│   ├── Trader
│   ├── Casino
│   └── Forage
│
├── WITCHLANDS
│   ├── Swamp
│   └── Witch Hut
│
├── GINGER ISLAND
│   ├── Island Farm
│   ├── Jungle
│   ├── Dig Site
│   ├── Field Office
│   ├── Volcano
│   ├── Beach Resort
│   ├── Pirate Cove
│   ├── Island Trader
│   └── Qi's Room
│
└── SUMMIT
    └── Endgame / Event / Reward
```

---

# 29. Kết luận

Bản chuyển thể này không cố tái tạo Stardew Valley theo nghĩa không gian.

Nó tái tạo **bản chất ra quyết định** của Stardew.

Thay vì:

> “Đi nhân vật tới đâu?”

Game hỏi:

> “Hôm nay bạn muốn sống như thế nào?”

Thay vì:

> “Bạn có đủ kỹ năng điều khiển không?”

Game hỏi:

> “Bạn muốn dành thời gian và tài nguyên cho cái gì?”

Đích cuối cùng là một game:

- tự do
- không ép goal
- có progression sâu
- có hàng trăm micro-goal tự phát
- thao tác cực ít
- phù hợp point-and-click
- phù hợp card-based
- vẫn giữ được cảm giác “chơi thêm một ngày nữa thôi”

Đây là abstraction level phù hợp nhất cho một phiên bản **Stardew Valley solo card / point-and-click**.
