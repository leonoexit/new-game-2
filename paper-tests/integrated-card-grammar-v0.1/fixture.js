/* Deterministic UI fixture. This is deliberately not a game engine. */
const rail = document.getElementById('rail');
const index = document.getElementById('index');
const world = document.getElementById('world');
const hand = document.getElementById('hand');
const feedback = document.getElementById('feedback');
const overlay = document.getElementById('overlay');
const preset = document.getElementById('preset');

const areas = [
  ['farm', 'Home / Farm'],
  ['forest', 'Area rừng'],
  ['river', 'River'],
  ['mine', 'Mine'],
  ['commerce', 'Commerce'],
  ['person', 'Person']
];
const sourceInfo = {
  book: ['📚', 'Bách Khoa'],
  seed: ['🌰', 'Turnip Seed'],
  hand: ['🖐', 'Hand'],
  can: ['🪣', 'Watering Can'],
  character: ['👤', 'Character'],
  rod: ['🎣', 'Fishing Rod'],
  pickaxe: ['⛏', 'Pickaxe'],
  herb: ['🌿', 'Wild Herb'],
  turnip: ['🥬', 'Turnip']
};
let state;
let overlayType = null;
let detailId = null;
let chosenQty = 1;
let discovered = new Set();
let lastMessage = '';
let panelMessage = '';

function baseState() {
  return {
    day: 1, weather: 'Nắng', tomorrow: null, ap: 6, gold: 0, pending: 0,
    seed: 2, turnip: 0, herb: 0, fish: {}, ore: 0,
    plots: [{kind: 'tilled'}, {kind: 'tilled'}],
    wildHerb: false, catchName: 'Silver Minnow', catchReady: true,
    depth: 0, oreExposed: false, oreSpent: false,
    nellPresent: false, nellOwned: false, gifted: false,
    heart: 0, abilityUsed: false, credit: 0,
    selected: []
  };
}

function reset() {
  state = baseState();
  overlayType = null;
  detailId = null;
  chosenQty = 1;
  panelMessage = '';
  discovered = new Set(['Bách Khoa Thung Lũng', 'Turnip Seed']);
  const name = preset.value;
  if (name === 'rain') state.weather = 'Mưa';
  if (name === 'forest') state.wildHerb = true;
  if (name === 'river') state.catchName = 'Silver Minnow';
  if (name === 'river-rain') {
    state.weather = 'Mưa';
    state.catchName = 'Blue Eel';
  }
  if (name === 'nell') {
    state.wildHerb = false;
    state.nellPresent = true;
    state.herb = 1;
    state.plots = [{kind: 'crop', growth: 0, watered: false}, {kind: 'crop', growth: 0, watered: false}];
  }
  if (name === 'commerce') state.turnip = 2;
  if (name === 'tv') state.day = 4;
  lastMessage = 'Chọn nguồn trong Item rồi chạm card đích. Chỉ mục Area chỉ cuộn, không tiêu AP.';
  render(false);
  const focus = {farm: 'farm', rain: 'farm', forest: 'forest', river: 'river', 'river-rain': 'river', nell: 'person', commerce: 'commerce', tv: 'farm'}[name];
  scrollArea(focus, false);
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, function(ch) {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[ch];
  });
}
function payable(base) { return Math.max(0, base - state.credit); }
function selectedIs() {
  return Array.from(arguments).join('|') === state.selected.join('|');
}
function say(message) {
  lastMessage = message;
  feedback.textContent = message;
  if (overlayType) {
    panelMessage = message;
    const panelFeedback = document.getElementById('panel-feedback');
    if (panelFeedback) {
      panelFeedback.textContent = message;
      panelFeedback.hidden = false;
    }
  }
}
function pay(base) {
  const actual = payable(base);
  if (state.ap < actual) {
    say('Không đủ AP. Cần ' + actual + ' AP thực trả.');
    return false;
  }
  const relief = Math.min(base, state.credit);
  state.ap -= actual;
  state.credit -= relief;
  return true;
}
function card(id, title, icon, cost, artClass, note, identity, locked) {
  const badge = cost === null ? '' : '<span class="badge">' + payable(cost) + ' AP</span>';
  const stateClass = locked ? ' locked' : '';
  const label = esc(title) + (cost === null ? '' : ', ' + payable(cost) + ' AP');
  return '<div class="card' + stateClass + '" role="button" tabindex="0" aria-label="' + label +
    '" data-card="' + esc(id) + '"' + (identity ? ' data-identity="' + esc(identity) + '"' : '') + '>' +
    badge + '<div class="art ' + (artClass || '') + '" aria-hidden="true">' + icon + '</div>' +
    (note ? '<span class="card-note">' + esc(note) + '</span>' : '') +
    '<div class="name">' + esc(title) + '</div>' +
    '<button class="info" data-info="' + esc(id) + '" aria-label="Xem thông tin ' + esc(title) + '">i</button></div>';
}
function source(id, count) {
  const meta = sourceInfo[id];
  const active = state.selected.includes(id) ? ' selected' : '';
  const quantity = count === null ? '' : '<span class="count"> ×' + count + '</span>';
  const identity = ' data-identity="' + esc(id === 'book' ? 'Bách Khoa Thung Lũng' : meta[1]) + '"';
  return '<button class="source' + active + '" data-source="' + id + '" aria-pressed="' +
    state.selected.includes(id) + '"' + identity + ' title="' + esc(meta[1]) + '">' +
    '<span class="icon" aria-hidden="true">' + meta[0] + '</span>' + esc(meta[1]) + quantity + '</button>';
}
function plotCard(plot, n) {
  if (plot.kind === 'tilled') return card('plot' + n, 'Tilled Soil', '▰', 1, 'plant', '', 'Tilled Soil', false);
  if (plot.kind === 'mature') return card('plot' + n, 'Turnip Crop', '🥬', 1, 'mature', '', 'Turnip Crop', false);
  return card('plot' + n, 'Turnip Crop', '🌱', plot.watered ? null : 1,
    plot.watered ? 'watered' : 'plant', plot.growth + '/2',
    'Turnip Crop', plot.watered);
}
function inventoryOutput(identity, icon, count) {
  return '<button class="source" data-item="' + esc(identity) + '" data-identity="' + esc(identity) +
    '" aria-label="Xem thông tin ' + esc(identity) + ', số lượng ' + count + '">' +
    '<span class="icon" aria-hidden="true">' + icon + '</span>' + esc(identity) +
    '<span class="count"> ×' + count + '</span></button>';
}
function catchEligible() { return state.catchReady && (state.catchName !== 'Blue Eel' || state.weather === 'Mưa'); }
function renderRail() {
  rail.innerHTML = '<div class="rail-top"><span>Little Valley Cards</span><span>Ngày ' + state.day + ' · Mùa 1</span></div>' +
    '<div class="stats"><span class="stat">' + (state.weather === 'Mưa' ? '☂' : '☀') + ' ' + esc(state.weather) + '</span>' +
    '<span class="stat">⚡ ' + state.ap + ' AP</span><span class="stat">🪙 ' + state.gold + 'G</span></div>';
}
function renderWorld() {
  let html = '<section class="area farm" id="area-farm"><h2 class="area-title" data-identity="Home / Farm">Home / Farm</h2><div class="grid">' +
    plotCard(state.plots[0], 0) + plotCard(state.plots[1], 1) +
    card('bin', 'Shipping Bin', '📦', null, 'shop-art', state.pending ? 'Chờ trả ' + state.pending + 'G' : '', 'Shipping Bin', false) +
    card('farmhouse', 'Farmhouse', '🏠', null, 'shop-art', '', 'Farmhouse', false) +
    '</div></section>';
  html += '<section class="area forest" id="area-forest"><h2 class="area-title" data-identity="Area rừng">Area rừng <span class="area-sub">tên chưa chốt · bối cảnh Rìa Rừng</span></h2>' +
    (state.wildHerb ? '<div class="grid">' + card('wild-herb', 'Wild Herb', '🌿', 1, '', '', 'Wild Herb', false) + '</div>' :
      '<div class="status">Chưa có Wild Herb đang hiện trong fixture này.</div>') + '</section>';
  html += '<section class="area river" id="area-river"><h2 class="area-title" data-identity="River">River</h2><div class="grid">' +
    (catchEligible() ? card('catch', state.catchName, '🐟', 2, 'river-art', 'Exact Catch', state.catchName, false) :
      '<div class="status">' + (state.catchReady ? 'Catch chưa đủ điều kiện thời tiết.' : 'Catch hôm nay đã resolve.') + '</div>') + '</div></section>';
  html += '<section class="area mine" id="area-mine"><h2 class="area-title" data-identity="Mine">Mine</h2>' +
    '<div class="status">Depth ' + state.depth + '/3 · ' + (state.oreSpent ? 'Ore đã khai thác' :
      state.oreExposed ? 'Ore đã lộ' : 'Checkpoint ở Depth 3') + '</div><div class="grid">' +
    (state.depth < 3 ? card('descent', 'Direct Descent', '⬇', 1, 'mine-art', 'Depth +1', 'Direct Descent', false) : '') +
    (state.depth >= 3 && !state.oreExposed && !state.oreSpent ?
      card('search', 'Search Side Tunnel', '🔎', 1, 'mine-art', 'Lộ Ore', 'Search Side Tunnel', false) : '') +
    (state.oreExposed && !state.oreSpent ? card('ore', 'Exposed Ore', '◈', 1, 'mine-art', '', 'Exposed Ore', false) : '') +
    '</div></section>';
  html += '<section class="area commerce" id="area-commerce"><h2 class="area-title" data-identity="Commerce">Commerce</h2><div class="grid">' +
    card('supermarket', 'Supermarket', '🏬', null, 'shop-art', '', 'Supermarket', false) +
    '</div></section>';
  html += '<section class="area person" id="area-person"><h2 class="area-title">Person</h2>' +
    (state.nellOwned ? '<button class="utility" data-action="nell-ability" data-identity="Nell"' +
      (state.heart < 1 || state.abilityUsed ? ' disabled' : '') +
      '>Nell · ♥ ' + state.heart + ' · Khả năng hôm nay ' +
      (state.abilityUsed ? 'đã dùng' : '0 AP') + '</button>' : '') +
    (state.nellPresent ? '<div class="grid">' +
      card('nell-world', 'Nell', '👩', state.gifted ? null : 1, 'person-art',
        state.gifted ? 'Đã tặng hôm nay' : 'Nhận Herb', 'Nell', state.gifted) + '</div>' :
      '<div class="status">Nell không xuất hiện hôm nay. Control sở hữu vẫn dùng được.</div>') +
    '</section>';
  world.innerHTML = html;
}
function renderHand() {
  let html = '<div class="hand-title"><span>Item / nguồn</span>' +
    (state.credit ? '<span class="credit" aria-label="Hiệu ứng Nell còn ' + state.credit + ' AP credit">✦ ' + state.credit + '</span>' :
      '<span class="muted">Chọn nguồn → chạm đích</span>') + '</div><div class="sources">';
  html += source('book', null);
  if (state.seed > 0) html += source('seed', state.seed);
  html += source('hand', null) + source('can', null) + source('character', null) +
    source('rod', null) + source('pickaxe', null);
  if (state.herb > 0) html += source('herb', state.herb);
  if (state.turnip > 0) html += source('turnip', state.turnip);
  Object.entries(state.fish).forEach(function(entry) {
    if (entry[1] > 0) html += inventoryOutput(entry[0], '🐟', entry[1]);
  });
  if (state.ore > 0) html += inventoryOutput('Ore', '◈', state.ore);
  hand.innerHTML = html + '</div>';
}
function renderIndex() {
  index.innerHTML = areas.map(function(area) {
    return '<button data-area="' + area[0] + '">' + esc(area[1]) + '</button>';
  }).join('');
}
function render(keepScroll) {
  const oldScroll = keepScroll ? world.scrollTop : 0;
  const oldHandScroll = keepScroll && hand.querySelector('.sources') ? hand.querySelector('.sources').scrollLeft : 0;
  renderRail();
  renderIndex();
  renderWorld();
  renderHand();
  feedback.textContent = lastMessage;
  world.scrollTop = oldScroll;
  hand.querySelector('.sources').scrollLeft = oldHandScroll;
  renderOverlay();
  requestAnimationFrame(recordVisible);
}
function scrollArea(id, smooth) {
  const node = document.getElementById('area-' + id);
  if (!node) return;
  const top = world.scrollTop + node.getBoundingClientRect().top - world.getBoundingClientRect().top;
  world.scrollTo({top: top, behavior: smooth ? 'smooth' : 'instant'});
  window.setTimeout(recordVisible, smooth ? 400 : 40);
}
function visibleWithin(element, container) {
  const a = element.getBoundingClientRect();
  const b = container.getBoundingClientRect();
  if (a.width === 0 || a.height === 0) return false;
  const overlapX = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left));
  const overlapY = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
  return overlapX * overlapY >= a.width * a.height * .35;
}
function recordVisible() {
  let changed = false;
  document.querySelectorAll('[data-identity]').forEach(function(node) {
    const inOverlay = node.closest('.overlay');
    const container = node.closest('.panel') || node.closest('.sources') || node.closest('.world');
    if (overlayType && inOverlay !== overlay) return;
    if (!container || !visibleWithin(node, container)) return;
    const identity = node.dataset.identity;
    if (!discovered.has(identity)) {
      discovered.add(identity);
      changed = true;
    }
  });
  if (changed && overlayType === 'book') renderOverlay();
}
function closeOverlay() {
  overlayType = null;
  detailId = null;
  panelMessage = '';
  overlay.classList.remove('open');
  overlay.innerHTML = '';
  requestAnimationFrame(recordVisible);
}
function showOverlay(type) {
  overlayType = type;
  panelMessage = '';
  if (type === 'shop' || type === 'book' || type === 'farmhouse') state.selected = [];
  render(true);
}
function panel(title, body) {
  return '<div class="panel"><div class="panel-head"><h2>' + esc(title) +
    '</h2><button class="close" data-action="close" aria-label="Đóng">×</button></div>' + body +
    '<p id="panel-feedback" class="panel-feedback" role="status" aria-live="polite"' +
    (panelMessage ? '' : ' hidden') + '>' + esc(panelMessage) + '</p></div>';
}
function renderOverlay() {
  if (!overlayType) {
    overlay.classList.remove('open');
    overlay.innerHTML = '';
    return;
  }
  let body = '';
  if (overlayType === 'farmhouse') {
    body = '<p>Chạm TV để xem dự báo ngày mai.</p>' +
      card('tv', 'TV', '📺', state.tomorrow ? null : 0, 'shop-art',
        state.tomorrow ? 'Đã xem · mai ' + state.tomorrow : 'Xem dự báo D+1', 'TV', false);
    overlay.innerHTML = panel('Farmhouse', body);
  } else if (overlayType === 'shop') {
    body = '<p>Hàng hóa là card có giá. Gold chờ trong Shipping Bin chưa dùng được.</p>' +
      '<div class="card" data-identity="Turnip Seed"><span class="price">2G / Seed</span>' +
      '<div class="art shop-art" aria-hidden="true">🌰</div><div class="name">Turnip Seed</div></div>' +
      '<div class="row"><label for="shop-qty">Số lượng</label><input id="shop-qty" type="number" min="1" step="1" value="' +
      chosenQty + '"><span id="shop-total">Tổng ' + chosenQty * 2 + 'G</span></div>' +
      '<button data-action="buy">Buy · 0 AP</button><p>Ví hiện có: ' + state.gold + 'G.</p>';
    overlay.innerHTML = panel('Supermarket', body);
  } else if (overlayType === 'bin') {
    body = '<p>Gửi Turnip vào Bin. Tiền bán đến cuối ngày; mở nhập số lượng chưa gửi hàng.</p>' +
      '<div class="row"><label for="bin-qty">Số lượng</label><input id="bin-qty" type="number" min="1" max="' +
      state.turnip + '" step="1" value="' + chosenQty + '"> / ' + state.turnip + ' Turnip</div>' +
      '<button data-action="ship">Xác nhận gửi · 0 AP</button><p>Đang chờ: ' + state.pending + 'G.</p>';
    overlay.innerHTML = panel('Shipping Bin', body);
  } else if (overlayType === 'book') {
    const areaNames = areas.filter(function(a) { return a[0] !== 'person'; }).map(function(a) { return a[1]; });
    const visibleEntries = Array.from(discovered).filter(function(name) { return !areaNames.includes(name); }).sort();
    const areaEntries = areaNames.map(function(name) {
      return '<div class="entry' + (discovered.has(name) ? '' : ' hidden') + '">' +
        esc(discovered.has(name) ? name : 'Area chưa thấy') + '</div>';
    }).join('');
    body = '<p>Có từ đầu game. Card identity nào đã xuất hiện thì có mục; không có phần thưởng Seed.</p>' +
      '<h3>Area</h3><div class="entries">' + areaEntries + '</div><h3>Card đã thấy</h3><div class="entries">' +
      visibleEntries.map(function(name) { return '<div class="entry">' + esc(name) + '</div>'; }).join('') + '</div>';
    overlay.innerHTML = panel('Bách Khoa Thung Lũng', body);
  } else if (overlayType === 'detail') {
    const details = detailText(detailId);
    overlay.innerHTML = panel(details[0], '<p>' + esc(details[1]) + '</p><p class="muted">Inspect không tốn AP và không commit.</p>');
  }
  overlay.classList.add('open');
  requestAnimationFrame(recordVisible);
}
function detailText(id) {
  if (id.startsWith('plot')) {
    const plot = state.plots[Number(id.slice(-1))];
    if (plot.kind === 'tilled') return ['Tilled Soil', 'Seed → plot: 1 AP, tiêu một Seed, chính lá ở plot đổi sang identity Turnip Crop.'];
    if (plot.kind === 'mature') return ['Turnip Crop', 'Hình cây đã chín; identity vẫn là Turnip Crop. Hand → crop: 1 AP, nhận một Turnip, plot trở lại Tilled Soil.'];
    return ['Turnip Crop', 'Can → crop chưa Watered: 1 AP. Crop ướt tăng một growth tại Sleep, tối đa một lần/ngày.'];
  }
  const map = {
    bin: ['Shipping Bin', 'Thiết bị ở Home/Farm. Chọn Turnip trong Item, chạm Bin để nhập số lượng. Chỉ xác nhận mới gửi hàng; Gold trả cuối ngày.'],
    farmhouse: ['Farmhouse', 'Building card ở Farm. Chạm mở nội thất không tốn AP; chỉ chạm TV mới xem dự báo D+1.'],
    'wild-herb': ['Wild Herb', 'Hand → Herb: 1 AP, nhặt vào Item. Bách Khoa đã ghi từ lúc thấy card.'],
    catch: [state.catchName, 'Character + Rod → exact Catch: 2 AP fixture, nhận đúng Fish hiện trên card.'],
    descent: ['Direct Descent', 'Character → route: 1 AP, Depth +1, không nhận vật liệu.'],
    search: ['Search Side Tunnel', 'Character → Search: 1 AP, lộ Exposed Ore, Depth không đổi.'],
    ore: ['Exposed Ore', 'Character + Pickaxe → Exposed Ore: 1 AP, tạo Item Ore, nguồn đã khai thác, Depth không đổi. Exposed Ore và Ore có hai mục Bách Khoa riêng khi từng lá được thấy.'],
    Ore: ['Ore', 'Item nhận từ Extract. Danh tính riêng với Exposed Ore ở Mine. Chưa có đích sử dụng tiếp theo trong fixture.'],
    'Silver Minnow': ['Silver Minnow', 'Item/Fish nhận từ Catch; giữ danh tính đã thấy ở River. Chưa có đích sử dụng tiếp theo trong fixture.'],
    'Blue Eel': ['Blue Eel', 'Item/Fish nhận từ Catch khi Rain; giữ danh tính đã thấy ở River. Chưa có đích sử dụng tiếp theo trong fixture.'],
    supermarket: ['Supermarket', 'Building ở Commerce. Chạm để mở shop, chưa Buy. Hàng hóa trong panel là card có giá.'],
    'nell-world': ['Nell', 'Character + Wild Herb item → Nell: 1 AP, nhận Heart; Gift đầu sở hữu Nell.'],
    tv: ['TV', 'Thiết bị bên trong Farmhouse. Chạm TV: 0 AP commit, xem D+1. Chạm lại chỉ xem cùng dự báo.']
  };
  return map[id] || [id, 'Thông tin fixture.'];
}
function chooseSource(id) {
  if (id === 'book') return showOverlay('book');
  if ((id === 'seed' && state.seed < 1) || (id === 'herb' && state.herb < 1) ||
      (id === 'turnip' && state.turnip < 1)) return say('Không còn item này.');
  if (state.selected.includes(id)) state.selected = [];
  else if (selectedIs('character') && ['rod', 'pickaxe', 'herb'].includes(id)) state.selected = ['character', id];
  else state.selected = [id];
  say(state.selected.length ? 'Đã chọn ' + state.selected.map(function(x) { return sourceInfo[x][1]; }).join(' + ') + '.' :
    'Đã bỏ chọn nguồn.');
  render(true);
}
function actionCard(id) {
  if (id.startsWith('plot')) {
    const n = Number(id.slice(-1));
    const plot = state.plots[n];
    if (plot.kind === 'tilled') {
      if (!selectedIs('seed')) return say('Chọn Turnip Seed trong Item trước.');
      if (state.seed < 1) return say('Không còn Seed.');
      if (!pay(1)) return;
      state.seed -= 1;
      state.plots[n] = {kind: 'crop', growth: 0, watered: state.weather === 'Mưa'};
      if (state.seed < 1) state.selected = [];
      say('Đã trồng Turnip. Chính lá đất đổi thành crop.' + (state.weather === 'Mưa' ? ' Mưa làm đất ướt ngay.' : ''));
    } else if (plot.kind === 'crop') {
      if (!selectedIs('can')) return say('Chọn Watering Can để tưới crop này.');
      if (plot.watered) return say('Crop này đã được tưới hôm nay; không có Water lần hai.');
      if (!pay(1)) return;
      plot.watered = true;
      say('Đúng crop này đã ướt. Growth chỉ xảy ra tại Sleep.');
    } else {
      if (!selectedIs('hand')) return say('Chọn Hand để thu hoạch crop chín.');
      if (!pay(1)) return;
      state.turnip += 1;
      state.plots[n] = {kind: 'tilled'};
      say('Nhận một Turnip vào Item. Plot trở lại Tilled Soil.');
    }
    render(true);
    return;
  }
  if (id === 'wild-herb') {
    if (!selectedIs('hand')) return say('Chọn Hand để Collect Wild Herb.');
    if (!state.wildHerb) return say('Wild Herb không còn ở đây.');
    if (!pay(1)) return;
    state.wildHerb = false;
    state.herb += 1;
    say('Wild Herb rời tableau, item vào túi. Bách Khoa đã ghi khi card hiện.');
  } else if (id === 'catch') {
    if (!selectedIs('character', 'rod')) return say('Ghép Character + Rod rồi chạm exact Catch.');
    if (!state.catchReady) return say('Catch hôm nay đã resolve.');
    if (!catchEligible()) return say('Blue Eel chỉ Catch được khi Rain.');
    if (!pay(2)) return;
    state.fish[state.catchName] = (state.fish[state.catchName] || 0) + 1;
    state.catchReady = false;
    state.selected = [];
    say('Nhận đúng ' + state.catchName + '. Catch opportunity đã resolve.');
  } else if (id === 'descent') {
    if (!selectedIs('character')) return say('Chọn Character trước khi Descend.');
    if (state.depth >= 3) return say('Đã tới CP3; không có paid Descent tiếp trong fixture.');
    if (!pay(1)) return;
    state.depth += 1;
    say('Depth +1. Không nhận vật liệu.');
  } else if (id === 'search') {
    if (!selectedIs('character')) return say('Chọn Character trước khi Search.');
    if (state.depth < 3 || state.oreExposed || state.oreSpent) return say('Search không còn hợp lệ.');
    if (!pay(1)) return;
    state.oreExposed = true;
    say('Exposed Ore xuất hiện. Depth vẫn là 3, chưa nhận Ore.');
  } else if (id === 'ore') {
    if (!selectedIs('character', 'pickaxe')) return say('Ghép Character + Pickaxe rồi chạm Ore.');
    if (!state.oreExposed || state.oreSpent) return say('Không còn Ore để Extract.');
    if (!pay(1)) return;
    state.ore += 1;
    state.oreSpent = true;
    state.oreExposed = false;
    state.selected = [];
    say('Nhận Ore. Depth không đổi; không mở paid target vô thưởng.');
  } else if (id === 'nell-world') {
    if (!selectedIs('character', 'herb')) return say('Ghép Character + Wild Herb item rồi chạm Nell.');
    if (!state.nellPresent || state.gifted || state.herb < 1) return say('Gift không hợp lệ lúc này.');
    if (!pay(1)) return;
    state.herb -= 1;
    state.heart += 1;
    state.nellOwned = true;
    state.gifted = true;
    state.selected = [];
    say('Gift xong: nhận một Heart, sở hữu Nell. Ability dùng được ngay.');
  } else if (id === 'supermarket') {
    chosenQty = 1;
    return showOverlay('shop');
  } else if (id === 'bin') {
    if (!selectedIs('turnip')) return say('Chọn Turnip trong Item rồi chạm Shipping Bin.');
    if (state.turnip < 1) return say('Không có Turnip để gửi.');
    chosenQty = 1;
    return showOverlay('bin');
  } else if (id === 'farmhouse') {
    return showOverlay('farmhouse');
  } else if (id === 'tv') {
    if (!state.tomorrow) {
      state.tomorrow = state.day % 2 === 0 ? 'Mưa' : 'Nắng';
      say('TV báo ngày mai: ' + state.tomorrow + '. Đây là 0 AP gameplay commit.');
    } else say('Xem lại dự báo cũ: ngày mai ' + state.tomorrow + '. Không reroll.');
  }
  render(true);
}
function sleep() {
  state.plots.forEach(function(plot, n) {
    if (plot.kind !== 'crop' || !plot.watered) return;
    plot.growth += 1;
    if (plot.growth >= 2) state.plots[n] = {kind: 'mature'};
    else plot.watered = false;
  });
  state.gold += state.pending;
  state.pending = 0;
  state.day += 1;
  state.weather = state.tomorrow || (state.day % 3 === 0 ? 'Mưa' : 'Nắng');
  state.tomorrow = null;
  state.ap = 6;
  state.credit = 0;
  state.abilityUsed = false;
  state.gifted = false;
  state.selected = [];
  state.plots.forEach(function(plot) {
    if (plot.kind === 'crop') plot.watered = state.weather === 'Mưa';
  });
  closeOverlay();
  say('Ngày mới: growth đã resolve một lần; Gold chờ đã vào ví. Weather hôm nay: ' + state.weather + '.');
  render(true);
}
function handleAction(name) {
  if (name === 'close') return closeOverlay();
  if (name === 'nell-ability') {
    if (!state.nellOwned || state.heart < 1 || state.abilityUsed) return say('Nell ability chưa hợp lệ.');
    state.heart -= 1;
    state.credit = 2;
    state.abilityUsed = true;
    say('Nell: trả một Heart, nhận 2 AP credit. AP thường chưa đổi.');
    return render(true);
  }
  if (name === 'buy') {
    const input = document.getElementById('shop-qty');
    const qty = Number(input.value);
    if (!Number.isInteger(qty) || qty < 1) return say('Số lượng Buy phải là số nguyên dương.');
    if (state.gold < qty * 2) return say('Không đủ Gold hiện có để Buy ' + qty + ' Seed.');
    state.gold -= qty * 2;
    state.seed += qty;
    chosenQty = qty;
    say('Buy ' + qty + ' Turnip Seed, trả ' + qty * 2 + 'G ngay, 0 AP.');
    return render(true);
  }
  if (name === 'ship') {
    const input = document.getElementById('bin-qty');
    const qty = Number(input.value);
    if (!Number.isInteger(qty) || qty < 1 || qty > state.turnip) return say('Số lượng Bin phải từ 1 đến số Turnip đang có.');
    state.turnip -= qty;
    state.pending += qty * 4;
    state.selected = [];
    closeOverlay();
    say('Đã gửi ' + qty + ' Turnip. ' + qty * 4 + 'G đang chờ, ví chưa tăng.');
    return render(true);
  }
}
document.addEventListener('click', function(event) {
  const action = event.target.closest('[data-action]');
  if (action) return handleAction(action.dataset.action);
  const info = event.target.closest('[data-info]');
  if (info) {
    event.stopPropagation();
    detailId = info.dataset.info;
    overlayType = 'detail';
    panelMessage = '';
    return renderOverlay();
  }
  const area = event.target.closest('[data-area]');
  if (area) return scrollArea(area.dataset.area, true);
  const src = event.target.closest('[data-source]');
  if (src) return chooseSource(src.dataset.source);
  const item = event.target.closest('[data-item]');
  if (item) {
    detailId = item.dataset.item;
    overlayType = 'detail';
    panelMessage = '';
    return renderOverlay();
  }
  const target = event.target.closest('[data-card]');
  if (target) return actionCard(target.dataset.card);
  if (event.target === overlay) closeOverlay();
});
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && overlayType) return closeOverlay();
  if (event.target.closest('[data-info]')) return;
  const target = event.target.closest('[data-card]');
  if (target && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    actionCard(target.dataset.card);
  }
});
document.addEventListener('input', function(event) {
  if (event.target.id === 'shop-qty') {
    const qty = Number(event.target.value);
    const total = document.getElementById('shop-total');
    total.textContent = Number.isInteger(qty) && qty > 0 ? 'Tổng ' + qty * 2 + 'G' : 'Số lượng không hợp lệ';
    chosenQty = qty;
  }
  if (event.target.id === 'bin-qty') chosenQty = Number(event.target.value);
});
world.addEventListener('scroll', recordVisible);
hand.addEventListener('scroll', recordVisible, true);
overlay.addEventListener('scroll', recordVisible, true);
preset.addEventListener('change', reset);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('sleep').addEventListener('click', sleep);
reset();
