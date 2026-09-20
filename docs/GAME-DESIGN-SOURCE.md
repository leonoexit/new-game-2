Dưới đây là bản spec ở mức **game design + system design**, đủ để dùng làm nền cho prototype đầu tiên.

# GAME DESIGN SPEC

## Solo Card Farming Life Sim

### 1. High Concept

Một game **solo card-based life simulation** lấy cảm hứng từ cảm giác sống và phát triển trang trại của Stardew Valley, nhưng toàn bộ thế giới được biểu diễn bằng **card**.

Người chơi không điều khiển nhân vật chạy trong map.

Thay vào đó, người chơi tương tác với thế giới bằng cách:

* kéo card
* ghép card
* chọn action
* quản lý Energy
* lựa chọn nơi đến
* xây dựng relationship
* quyết định cách sử dụng từng ngày

Game không phải deck-builder truyền thống.

**Card là ngôn ngữ biểu diễn thế giới.**

Một cái cây là card.
Một NPC là card.
Một địa điểm là card.
Một cây đang lớn cũng là card.
Một cơn mưa là card trạng thái.
Một cuộc trò chuyện có thể sinh ra Event Card.

---

# 2. Core Fantasy

Fantasy chính:

> Tôi đang sống một cuộc đời nhỏ trong một thung lũng, nhưng thời gian và năng lượng của tôi có giới hạn.

Người chơi không thể làm mọi thứ trong một run.

Mỗi năm là một câu chuyện khác.

Có thể:

* trở thành farmer
* sống bằng fishing
* tập trung mining
* xây workshop
* kết bạn với một nhóm NPC
* theo đuổi cooking
* hoàn thành Community Project
* hoặc kết hợp nhiều hướng

Game phải tạo cảm giác:

> “Hôm nay mình muốn dành ngày này cho điều gì?”

---

# 3. Genre

* Solo card game
* Life simulation
* Resource management
* Light strategy
* Light roguelite / replayable run
* Decision-based game

Không tập trung vào combat.

Combat nếu có chỉ là subsystem phụ của Mining / Exploration.

---

# 4. Platform

Primary:

**Mobile portrait**

Có thể mở rộng sang PC sau.

Interaction ưu tiên:

* Tap
* Drag
* Stack
* Select
* Hold để xem chi tiết

Không yêu cầu joystick.

Không có movement realtime.

---

# 5. Session Structure

Một full run tương đương:

# 1 Year

Bao gồm:

* Spring — 7 ngày
* Summer — 7 ngày
* Autumn — 7 ngày
* Winter — 7 ngày

Tổng:

**28 ngày / run**

Target playtime:

**45–90 phút / full run**

Người chơi không nhất thiết phải hoàn thành một run trong một session.

Game autosave sau mỗi ngày.

---

# 6. Core Loop

Core loop:

**Wake Up**

↓

**Weather**

↓

**World Update**

↓

**Plan Day**

↓

**Spend Energy**

↓

**Farm / Explore / Fish / Social / Craft**

↓

**Complete Objectives**

↓

**Sleep**

↓

**Next Day**

Ở cấp độ dài hơn:

**Spring**

↓

**Summer**

↓

**Autumn**

↓

**Winter**

↓

**Final Evaluation**

↓

**Unlock / Chronicle**

↓

**New Run**

---

# 7. Card Philosophy

Không phải mọi card đều là card mà player “cầm trên tay”.

Card được dùng như một **visual grammar**.

Các loại card chính:

### Character Card

Đại diện cho con người.

Ví dụ:

* Farmer
* Abigail
* Robin
* Linus
* Willy

Character Card là persistent entity.

Không discard sau khi tương tác.

---

### Location Card

Đại diện cho khu vực.

Ví dụ:

* Farm
* Town
* Mountain
* Beach
* Mine
* Forest

Player chuyển giữa các Location Card.

Mỗi location mở một board riêng.

---

### Object Card

Vật thể trong thế giới.

Ví dụ:

* Tree
* Rock
* Chest
* Furnace
* Fishing Rod
* Watering Can

---

### Resource Card

Ví dụ:

* Wood
* Stone
* Coal
* Fiber
* Copper Ore

Resource cùng loại có thể stack.

Ví dụ:

`Wood ×12`

---

### Crop Card

Ví dụ:

`Potato`

có state:

* Seed
* Growing
* Mature

Growth được thể hiện trực tiếp trên card.

Ví dụ:

`Growth ●●○`

---

### Item Card

Ví dụ:

* Potato
* Fish
* Gem
* Milk
* Wine

Có thể:

* Sell
* Gift
* Cook
* Craft
* Donate
* Use

---

### Event Card

Card tạm thời đại diện cho một sự kiện.

Ví dụ:

* Conversation
* Festival
* Visitor
* Request
* Storm Event
* Heart Event

Event Card thường biến mất sau khi resolve.

---

### Weather Card

Ví dụ:

* Sunny
* Rain
* Storm
* Windy
* Snow

Weather tồn tại trong một ngày.

---

### Effect Card

Effect tạm thời.

Ví dụ:

* Lucky
* Energized
* Sick
* Well Fed

---

# 8. Player Card

Player được biểu diễn bằng một persistent Character Card:

## FARMER

Stats chính:

* Energy
* Gold
* Farm Level
* Skill progression
* Current Location

Không cần HP trong gameplay bình thường.

HP chỉ xuất hiện trong Mining / Combat nếu subsystem này được bật.

---

# 9. Energy System

Energy là tài nguyên quan trọng nhất trong mỗi ngày.

Default:

**6 Energy / Day**

Ví dụ action:

Water Crop
−1 Energy

Chop Tree
−1 Energy

Fish
−1 Energy

Mine
−2 Energy

Forage
−1 Energy

Travel
có thể 0 hoặc −1 tùy balance

Talk
0 Energy

Craft
0 Energy

Một ngày kết thúc khi:

* Energy về 0

hoặc

* Player chủ động Sleep

Energy không phải timer.

Không có áp lực realtime.

---

# 10. Day System

Một ngày có cấu trúc:

## Morning

* World update
* Crop growth
* Weather reveal
* NPC location update
* Quest update
* Shop update

↓

## Day

Player thực hiện action tùy ý.

↓

## Evening

Có thể:

* craft
* cook
* organize
* sell

↓

## Sleep

Resolve:

* crop state
* machine production
* income
* timed quest
* buffs
* relationship event

Sau đó:

`Day N → Day N+1`

---

# 11. Weather System

Mỗi ngày có một Weather Card.

Ví dụ:

## Sunny

* Crops cần tưới
* một số forage xuất hiện

## Rain

* Outdoor crops tự động được tưới
* Fishing modifier
* một số NPC thay đổi location

## Storm

* Rain effect
* Lightning event
* outdoor activities thay đổi

## Windy

* Forest resource modifier

## Snow

* Winter-only
* crop restrictions
* unique forage

Weather phải làm thay đổi decision của ngày hôm đó.

Không được chỉ là cosmetic.

---

# 12. Weather Forecast

Player mặc định biết:

**Today**

và

**Tomorrow**

Upgrade có thể tăng lên:

3-day forecast.

Ví dụ:

TODAY
Sunny

TOMORROW
Rain

Thông tin forecast cho phép player lên kế hoạch.

Weather không nên hoàn toàn là RNG không thể phản ứng.

---

# 13. Season System

Mỗi season kéo dài:

**7 ngày**

Season quyết định:

* crop pool
* fish pool
* forage
* weather probability
* event
* festival
* shop stock
* NPC activity
* seasonal objective

Khi chuyển mùa:

một số crop chưa trưởng thành có thể chết.

Điều này tạo deadline.

---

# 14. Farming

Basic farming chain:

`Soil + Hoe`

→

`Tilled Soil`

`Seed + Tilled Soil`

→

`Growing Crop`

Nếu crop được Watered:

Sleep

→

Growth +1

Ví dụ:

`Potato ●○○`

↓

`Potato ●●○`

↓

`Potato ●●●`

↓

`Mature Potato`

Sau đó:

`Farmer + Mature Potato`

→

`Potato`

*

`Empty Soil`

---

# 15. Farming Decisions

Người chơi không đủ Energy để chăm toàn bộ mọi thứ.

Ví dụ:

* 6 crops cần tưới
* chỉ còn 4 Energy

Player phải chọn.

Upgrade giúp giảm friction:

* better watering can
* sprinkler
* fertilizer
* speed-gro
* greenhouse

Automation là phần thưởng progression quan trọng.

---

# 16. Inventory

Không dùng inventory grid phức tạp.

Resource giống nhau tự stack.

Ví dụ:

Wood ×12
Stone ×8
Potato ×3

Có inventory capacity giới hạn nhẹ để tạo quyết định nhưng không biến game thành inventory management simulator.

---

# 17. Crafting

Crafting chủ yếu hoạt động bằng recipe.

Ví dụ:

`Wood ×10 + Stone ×5`

→

`Chest`

Hoặc qua Craft Menu khi recipe đã unlock.

Không yêu cầu player nhớ recipe thủ công.

Recipe được discover / unlock.

---

# 18. Machines

Machine là persistent cards.

Ví dụ:

`Milk + Cheese Press`

→

processing state

↓

`Cheese`

Machine cần thời gian tính bằng ngày hoặc sleep cycle.

Ví dụ:

Cheese Press

Processing:

`1 Day`

Không dùng timer realtime.

---

# 19. Selling

Player kéo Item Card vào:

`Shipping Bin`

Item được đánh dấu Sold.

Gold nhận vào cuối ngày.

Một số item có market modifiers.

Giá có thể biến động nhẹ giữa các run nhưng không nên trở thành stock-market simulator.

---

# 20. World Structure

Không có seamless map.

World là một network của Location Cards.

Ví dụ:

Farm

↓

Town

↓

Mountain

↓

Mine

↓

Forest

↓

Beach

Player chỉ nhìn board của location hiện tại.

---

# 21. Location Board

Ví dụ Town:

TOWN

* General Store
* Clinic
* Saloon
* Community Center
* NPC cards

Location hiện tại quyết định entity nào đang active.

Điều này cho phép thế giới có rất nhiều entity mà UI vẫn sạch.

---

# 22. NPC System

NPC là:

**Persistent Character Card**

Không phải Spell Card.

Một NPC tồn tại xuyên suốt run.

Ví dụ:

ABIGAIL

Friendship
♥♥○○○○○○

Tags:

* Young
* Adventurous
* Town

Likes:

* Gem
* Pumpkin

Current State:

Town

---

# 23. NPC Population

Game có thể có:

**20–40 NPC**

nhưng không hiển thị tất cả cùng lúc.

NPC tồn tại trong Resident Database.

Chỉ NPC ở location hiện tại mới xuất hiện trên Active Board.

Ví dụ:

Town hôm nay:

* Abigail
* Pierre
* Harvey

Mountain:

* Robin
* Sebastian
* Linus

---

# 24. NPC Schedule

Không mô phỏng giờ theo phút.

NPC schedule phụ thuộc:

* Day
* Season
* Weather
* Relationship
* Event

Ví dụ:

Abigail:

Sunny:

Town / Mountain

Rain:

Home

High Friendship:

có chance xuất hiện ở Farm

---

# 25. NPC Presence System

Có thể dùng weighted location system.

Ví dụ Abigail:

Town ×4
Mountain ×2
Shop ×2
Home ×1

Rain:

Home weight +3

Relationship 4+:

Farm weight +1

Mỗi Morning game resolve vị trí.

NPC vì vậy có routine nhưng vẫn có variation.

---

# 26. NPC Interaction

Basic:

`Farmer + NPC`

→

Interaction Menu

Có thể:

* Talk
* Give Gift
* Request
* Invite
* Leave

Không cần conversation tree cực lớn.

---

# 27. Relationship

Relationship hiển thị bằng Heart.

Ví dụ:

♥♥♥○○○○○

Friendship tăng từ:

* Talk
* Gift
* Quest
* Shared Event
* Festival
* Story choice

Relationship unlock:

* event
* location
* recipe
* story
* activity
* card
* dialogue

---

# 28. Relationship Philosophy

Không nên biến NPC thành “buff dispenser”.

Reward ưu tiên:

**Access**

**Story**

**New cards**

**New choices**

hơn là chỉ:

`+10% farming`.

Ví dụ:

Willy ♥♥♥

→ unlock Hidden Fishing Spot

Linus ♥♥♥

→ unlock Wild Bait Recipe

Robin ♥♥♥

→ unlock Workshop Project

---

# 29. NPC Personal Deck

Mỗi NPC có thể sở hữu một pool Event Cards.

Ban đầu player chỉ thấy một phần nhỏ.

Relationship càng cao:

càng unlock nhiều card.

Ví dụ:

Sebastian 1♥

* Talk
* Gift

3♥

* Basement Event

5♥

* Motorcycle Event

7♥

* Personal Story

Relationship progression vì vậy đồng nghĩa:

**NPC deck mở rộng.**

---

# 30. Fishing

Fishing không dùng minigame realtime ở MVP.

Ví dụ:

`Farmer + Fishing Rod + River`

↓

Fish Check

↓

Catch card

Outcome phụ thuộc:

* season
* weather
* location
* fishing skill
* bait
* luck

Có thể thêm lựa chọn:

Safe Cast

−1 Energy
common fish

Deep Cast

−2 Energy
higher rare chance

---

# 31. Mining

Mine gồm nhiều Depth Cards.

Ví dụ:

Mine Floor 1

→ Rock
→ Copper
→ Monster

Clear requirement:

2 Energy

Sau khi clear:

unlock Floor 2.

Mine progression giữ lại trong run.

---

# 32. Combat

Combat không phải core.

Nếu có, combat cần đơn giản.

Ví dụ:

Player:

HP 5

Monster:

HP 3

Action mỗi turn:

* Attack
* Defend
* Escape
* Use Item

Không phát triển thành full deck-builder combat.

Combat chỉ hỗ trợ Exploration.

---

# 33. Cooking

Ingredients kết hợp thành Food Card.

Food có thể:

* restore Energy
* give temporary effect
* dùng cho quest
* gift NPC
* collection

Recipe unlock từ:

* NPC
* shop
* discovery
* progression

---

# 34. Daily Objectives

Game có thể sinh Daily Request.

Ví dụ:

Pierre needs:

Potato ×3

Reward:

100 Gold

* Reputation

Daily objectives có deadline ngắn.

Không bắt buộc.

---

# 35. Seasonal Objectives

Đầu mỗi season game đưa một số goals.

Ví dụ Spring:

* Harvest 10 crops
* Catch 3 fish species
* Reach Mine Floor 5

Player không nhất thiết phải hoàn thành hết.

Season objectives giúp đẩy player sang nhiều subsystem.

---

# 36. Run Objective

Một run cần có điểm kết thúc rõ ràng.

Core objective:

# Restore the Valley

Bao gồm nhiều category.

Ví dụ:

Farming
Fishing
Mining
Community
Cooking
Crafting

Player đóng góp item / achievement vào các category.

---

# 37. Life Goal

Đầu run player chọn một Life Goal.

Ví dụ:

## Master Farmer

* Ship 20 crop types
* Complete Farming Project
* Upgrade Farm

## Explorer

* Reach deep mine
* Discover rare resources
* Complete exploration set

## Social Butterfly

* Build strong relationships
* Complete social events

## Artisan

* Craft machines
* Produce artisan goods

## Quiet Life

* Build a sustainable farm
* Avoid debt
* Complete year peacefully

Life Goal thay đổi cách player ưu tiên resource.

---

# 38. Winning

Một run kết thúc sau:

**Winter Day 7**

Player không nhất thiết phải hoàn thành 100% content.

Win condition có thể là:

Complete Life Goal

*

đạt minimum Valley Progress.

Nếu không:

run vẫn kết thúc.

Không game over nặng.

---

# 39. Final Evaluation

Cuối năm game tạo:

# Farm Chronicle

Ví dụ:

Mistwood Farm
Year Complete

Main Income: Fishing

Best Friend: Linus

Crops Harvested: 32

Fish Discovered: 18

Mine Depth: 14

Community Progress: 72%

Farm Value: 12,430g

Life Goal:

Completed

---

# 40. Replayability

Replayability không dựa chủ yếu vào content quantity.

Nó đến từ system variation.

Nguồn variation:

* Weather
* NPC presence
* Shop stock
* Quest
* Seasonal goal
* Life goal
* Item availability
* Event
* rare cards
* player specialization

---

# 41. Scarcity Principle

Player không thể hoàn thành mọi thứ trong một run.

Ví dụ:

28 days × 6 Energy

=

168 Energy

Trong khi toàn bộ content có thể cần hơn 400 Energy.

Điều này buộc player chọn.

Core philosophy:

> Không phải “mình có thể làm gì?”

Mà là:

> “Trong số tất cả những thứ mình có thể làm, hôm nay mình chọn cái gì?”

---

# 42. Meta Progression

Sau mỗi run player có thể unlock:

* new seeds
* new NPC events
* new farm type
* new weather events
* new recipes
* new Life Goals
* cosmetic card backs
* new starting conditions

Meta progression không nên khiến player mạnh lên quá mức.

Ưu tiên:

**horizontal unlock**

hơn:

**permanent stat increase**

---

# 43. Farm Types

Sau này có thể có:

## Standard Farm

Balanced

## Forest Farm

More forage
Less soil

## River Farm

Better fishing
Less farm space

## Mountain Farm

More mining access
Harder farming

Farm type thay đổi initial board.

---

# 44. UI Structure

Mobile portrait.

Top:

Day
Season
Weather
Energy
Gold

Middle:

Active Location Board

Bottom:

Inventory / Action tray

Có thể swipe giữa:

* World
* Inventory
* Objectives
* Residents
* Collections

---

# 45. Board Philosophy

Board không được biến thành một đống card hỗn loạn.

Card phải tự group theo logic:

Farm Plot

Machines

NPC

Resources

Inventory

Player không phải tự kéo từng card để dọn bàn liên tục.

Game tự organize khi cần.

---

# 46. Card Visual Language

Mỗi card cần truyền tải ngay:

* type
* name
* state
* important stat
* possible interaction

Ví dụ crop:

POTATO

●●○

Watered

2 Days

Không nhét paragraph vào card.

Chi tiết mở bằng tap / hold.

---

# 47. Animation

Animation không phải trọng tâm.

Thế giới được biểu diễn thông qua card.

Ưu tiên:

* card slide
* flip
* stack
* merge
* small shake
* glow
* number tick

Không cần character animation truyền thống.

Card chính là “cửa sổ nhìn vào thế giới”.

Artwork trên card truyền tải:

* nhân vật
* địa điểm
* mùa
* tình trạng
* không khí

---

# 48. Art Direction

Có thể dùng:

* pixel art
* 16-bit inspired
* cozy illustration
* generated card illustration

Quan trọng:

mọi artwork phải thống nhất style.

NPC cần silhouette dễ nhận diện.

Location cần atmosphere khác nhau.

Season phải đọc được ngay bằng màu sắc và environment.

---

# 49. Audio

Music thay đổi theo:

* season
* location
* weather
* event

SFX:

* card draw
* stack
* harvest
* watering
* coin
* friendship
* crafting

Không cần audio complexity cao.

---

# 50. Difficulty Philosophy

Không punishment quá mạnh.

Game tạo tension bằng:

* limited Energy
* season deadline
* limited days
* opportunity cost
* incomplete information

Không tạo tension bằng:

* permadeath
* harsh RNG
* inventory micromanagement
* constant failure

---

# 51. RNG Philosophy

RNG tạo variation.

Không được quyết định hoàn toàn thắng thua.

Bad:

“Random weather khiến toàn bộ strategy chết.”

Good:

“Weather khiến player phải đổi kế hoạch.”

Player cần có:

* forecast
* alternate actions
* mitigation tools

---

# 52. MVP

Prototype đầu tiên không cần toàn bộ game.

Chỉ cần:

## 1 Season

7 Days

## 1 Location chính

Farm

*

Town nhỏ

## 3 NPC

Ví dụ:

* Farmer
* Shopkeeper
* Fisher
* Builder

## 5 Crops

## 3 Weather Types

Sunny
Rain
Storm

## 10 Resources / Items

## 5 Craft Recipes

## 1 Fishing location

## 3 Daily quests

## 1 Seasonal objective

## 1 Final evaluation

---

# 53. MVP Core Loop

Ngày 1:

Player nhận:

* Farmer
* Farm
* Soil ×4
* Hoe
* Watering Can
* Seed ×4
* 100 Gold

Player:

Plant

↓

Water

↓

Sleep

↓

Growth

↓

Harvest

↓

Sell

↓

Buy Better Seed

↓

Craft Upgrade

↓

Meet NPC

↓

Complete Goal

↓

Day 7 Evaluation

Nếu loop này vui:

mới mở rộng game.

---

# 54. Features Không Nên Làm Trong MVP

Không làm ngay:

* 30 NPC
* marriage
* children
* 4 seasons
* deep combat
* procedural dungeon
* 100 recipes
* massive story
* multiplayer
* full decoration system
* housing customization
* pet system
* hundreds of crops

Tất cả đều là expansion.

---

# 55. Design Pillars

## Pillar 1 — Cards Are The World

Card không phải UI nằm trên thế giới.

Card chính là thế giới.

---

## Pillar 2 — Every Day Is A Choice

Player luôn có nhiều thứ muốn làm hơn số Energy hiện có.

---

## Pillar 3 — People Persist

NPC không phải effect.

Họ tồn tại xuyên suốt run, có relationship, location và event riêng.

---

## Pillar 4 — Seasons Change Strategy

Season và Weather phải ảnh hưởng gameplay thật sự.

---

## Pillar 5 — Short Run, Long Replayability

Một run có ending.

Game tổng thể được thiết kế để chơi lại.

---

## Pillar 6 — Different Lives, Same Valley

Mỗi run là một phiên bản khác của cuộc sống trong cùng thế giới.

Player có thể trở thành:

* farmer
* fisher
* miner
* artisan
* social character
* hybrid

---

# 56. Core Design Question

Mọi feature mới phải trả lời được câu hỏi:

> Feature này tạo thêm một lựa chọn thú vị cho ngày của player hay chỉ làm game phức tạp hơn?

Nếu chỉ tăng complexity mà không tăng meaningful decision:

**cắt.**

---

# 57. One-Sentence Game Pitch

> Một solo card life-sim nơi toàn bộ thế giới được biểu diễn bằng những lá bài, và mỗi ngày người chơi phải lựa chọn cách sử dụng thời gian, năng lượng và các mối quan hệ để xây dựng một cuộc đời khác nhau qua từng năm.

# 58. Player Experience Goal

Sau khi kết thúc một run, phản ứng mong muốn không phải:

> “Cuối cùng cũng phá đảo.”

Mà là:

> “Ờ, run này mình sống kiểu đó. Lần sau thử sống kiểu khác xem sao.”

Bản tiếp theo hợp lý nhất sẽ là **MVP Technical Spec**: chính xác có những card nào, state nào, data schema NPC/crop/weather ra sao, và flow Day 1 → Day 7 để có thể bắt đầu code prototype.
