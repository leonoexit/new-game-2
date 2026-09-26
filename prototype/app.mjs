import {
  REGIONS, PHASES, CROPS, FRUITS, SELL_PRICES, CAN_CAPACITY, currentSeason,
  currentView, visibleNames, newGame, act, shownCost,
} from './game.mjs';

const KEY = 'little-valley-cards-v0-prototype-1';
const SETTINGS_KEY = 'little-valley-cards-v0-display';
const CARD_MODE_KEY = 'little-valley-cards-v0-card-mode';
const PHASE_ICONS = ['sunrise', 'sun-medium', 'sunset', 'moon'];
const FISH_NAMES = ['Silver Minnow', 'Chub', 'Smallmouth Bass', 'Pike', 'Perch', 'Shad', 'Catfish', 'Walleye', 'Sunfish', 'Rainbow Trout'];
const root = document.querySelector('#app');
let registerArt = new Map();
let registerActions = new Map();
function artFor(base, state = '') {
  return registerArt.get(state ? `${base} (${state})` : base) || '';
}
let display = { font: 'itim', scale: 100 };
try {
  const savedDisplay = JSON.parse(localStorage.getItem(SETTINGS_KEY));
  if (['itim', 'patrick', 'pixel'].includes(savedDisplay?.font)) display.font = savedDisplay.font;
  if ([60, 70, 80, 90, 100].includes(savedDisplay?.scale)) display.scale = savedDisplay.scale;
} catch { /* Keep display defaults. */ }
let game;
try {
  const saved = JSON.parse(localStorage.getItem(KEY));
  game = saved?.version === 1 ? saved : newGame();
  game.canWater ??= CAN_CAPACITY;
  game.selected = game.selected.filter(name => name !== 'Character');
  delete game.seen.Character;
  delete game.seen['Bách Khoa Thung Lũng'];
  game.seen['Valley Almanac'] = true;
  if (/[À-ỹ]/.test(game.notice)) game.notice = 'Ready to play.';
  if (currentView(game) === 'Home') game.seen['Farm Pond'] = true;
} catch { game = newGame(); }
let pendingToast = game.notice;
let resetConfirm = false;
let handOpen = false;
let settingsOpen = false;
let cardMode = localStorage.getItem(CARD_MODE_KEY) === 'preview' ? 'preview' : 'action';
let inspected = null;
function esc(value) { return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'); }
function uiIcon(name, className = '') { return `<img class="ui-icon ${className}" src="./icons/${name}.svg" alt="" aria-hidden="true">`; }
function inspectAttr(info) { return `data-inspect="${esc(JSON.stringify(info))}"`; }
function tableauKind(type, name) {
  if (name === 'World') return 'World';
  if (REGIONS.includes(name)) return 'Region';
  if (name === 'Farmhouse' || name === 'Supermarket') return 'Building';
  if (name === 'Field') return 'Container';
  if (type.startsWith('field-soil')) return 'Plot';
  if (type.startsWith('field-crop')) return 'Item · Crop';
  if (type.startsWith('field-fruit-tree')) return 'Vegetation';
  if (type.startsWith('field-rock')) return 'Obstacle';
  return ({ place:'Place', vegetation:'Vegetation', water:'Source', equipment:'Equipment', person:'Person', stone:'Source', 'item-card':'Item · Crop' })[type.split(' ')[0]] || 'Card';
}
function send(action) {
  const result = act(game, action);
  if (result.ok) {
    game = result.state;
    localStorage.setItem(KEY, JSON.stringify(game));
  }
  if (action.type !== 'select') handOpen = false;
  pendingToast = result.notice;
  render();
}
function card({ name, type = 'card', sub = '', detail = '', cost = null, action = '', selected = false, disabled = false, art = '', position = '' }) {
  const info = { name, kind:tableauKind(type, name), location:currentView(game), state:sub, detail, cost, art, position, action };
  return `<button class="card ${type} ${selected ? 'selected' : ''} ${disabled ? 'disabled' : ''}" data-action="${esc(action)}" ${inspectAttr(info)} ${disabled && cardMode === 'action' ? 'aria-disabled="true"' : ''} aria-label="${esc([name, sub, position].filter(Boolean).join(', '))}" title="${esc(name)}">
    ${art ? `<span class="art-window" aria-hidden="true"><img src="./assets/${esc(art)}" alt="" loading="lazy"></span>` : `<span class="glyph" aria-hidden="true">${glyph(name)}</span>`}
    <span class="card-name" aria-hidden="true">${esc(name)}</span>
  </button>`;
}
function glyph(name) {
  const lookup = {
    World:'🌎', Home:'🏡', Forest:'🌲', River:'🐟', Mine:'💎', Commerce:'🧺',
    Field:'🌿', 'Farm Pond':'💧', Farmhouse:'🏠', 'Shipping Bin':'📦', TV:'📺', Bed:'🛏️',
    Soil:'🌱', 'Field Rock':'🪨', Hedgerow:'🫐', 'Wild Herb':'🌼',
    'Fishing Spot':'🎣', Nell:'💝', Rock:'🪨', 'Ore Rock':'💎',
    Supermarket:'🛒',
  };
  if (name.includes('Tree')) return '🌳';
  if (name.includes('Crop')) return '🌾';
  if (name.includes('Seed') || name.includes('Sapling')) return '🌱';
  if (name.includes('Pickaxe')) return '⛏️';
  if (name === 'Watering Can') return '🚿';
  if (name === 'Fishing Rod') return '🎣';
  if (name === 'Axe') return '🪓';
  if (name === 'Hoe' || name === 'Sickle') return '🛠️';
  if (name === 'Hand') return '🤲';
  return lookup[name] || '✨';
}
function hasSources(...names) {
  return names.length === game.selected.length && names.every(name => game.selected.includes(name));
}
function fieldCost(p) {
  if (p.kind === 'Field Rock' && hasSources('Hoe')) return shownCost(game, 1);
  if (p.kind === 'Soil') {
    if (p.soil === 'overgrown' && hasSources('Sickle')) return shownCost(game, 1);
    if (p.soil === 'empty' && hasSources('Hoe')) return shownCost(game, 1);
    if (p.soil !== 'overgrown' && game.selected.length === 1 && game.selected[0].endsWith(' Sapling')) return shownCost(game, 1);
    if (p.soil === 'tilled' && game.selected.length === 1 && game.selected[0].endsWith(' Seed')) return shownCost(game, 1);
  }
  if (p.kind === 'Crop') {
    if (hasSources('Watering Can') && game.canWater > 0 && p.growth < CROPS[p.name].days && !p.watered) return shownCost(game, 1);
    if (hasSources('Hand') && p.growth >= CROPS[p.name].days) return shownCost(game, 1);
  }
  if (p.kind === 'Fruit Tree' && (hasSources('Axe') || hasSources('Hand') && p.growth >= 6 && p.fruitReady)) return shownCost(game, 1);
  return null;
}
function regionCards() {
  return REGIONS.map(name => card({ name, type:`place region-${name.toLowerCase()}`, sub:'Region · open tableau', action:`open:${name}` })).join('');
}
function fieldCards() {
  return game.plots.map((p, i) => {
    let name, sub, detail, art = '';
    if (p.kind === 'Soil') {
      name = 'Soil'; sub = p.soil === 'empty' ? 'Empty Soil' : p.soil === 'tilled' ? 'Tilled Soil' : 'Overgrown Soil';
      detail = p.soil === 'empty' ? 'Hoe → Till · Seed/Sapling → Plant' : p.soil === 'tilled' ? 'Seed/Sapling → Plant' : 'Sickle → Clear';
      art = artFor('Soil', sub);
    } else if (p.kind === 'Field Rock') {
      name = 'Field Rock'; sub = 'Blocked plot'; detail = 'Hoe → Clear · gain Stone';
      art = artFor('Field Rock');
    } else if (p.kind === 'Crop') {
      name = `${p.name} Crop`; sub = p.growth >= CROPS[p.name].days ? 'Mature' : `Growing ${p.growth}/${CROPS[p.name].days}${p.watered ? ' · Watered today' : ''}`;
      detail = p.growth >= CROPS[p.name].days ? 'Hand → Harvest' : p.watered ? 'Watered today' : game.canWater <= 0 ? 'Can empty · refill at Farm Pond' : 'Watering Can → Water';
      art = artFor(name, p.growth >= CROPS[p.name].days ? 'Mature' : p.watered ? 'Watered' : 'Growing');
    } else {
      name = `${p.name} Tree`; sub = p.growth < 6 ? `Young ${p.growth}/6` : p.fruitReady ? 'Fruit ready' : FRUITS[p.name] === currentSeason(game) ? `Regrowing ${p.regrow}/3` : 'No fruit';
      detail = p.fruitReady ? 'Hand → Harvest · Axe → Chop' : 'Axe → Chop';
    }
    const stateClass = p.kind === 'Soil' ? ` soil-${p.soil}` : p.kind === 'Crop' && p.watered ? ' crop-watered' : '';
    return card({ name, sub, detail, art, cost:fieldCost(p), type:`field-${p.kind.toLowerCase().replaceAll(' ','-')}${stateClass}`, action:`field:${i}`, position:`Plot ${i + 1}/8` });
  }).join('');
}
function forestCards() {
  let html = card({ name:'Hedgerow', type:'vegetation', sub:game.forest.berry ? 'Berries ready' : 'Picked', detail:game.forest.berry ? 'Hand → Pick Berry' : 'Returns next season', cost:hasSources('Hand') && game.forest.berry ? shownCost(game,1) : null, action:'forest:Hedgerow', art:game.forest.berry ? artFor('Hedgerow', 'Berries ready') : artFor('Hedgerow', 'Picked') });
  for (const [name, state] of Object.entries(game.forest.trees)) {
    if (state === 'Waiting') continue;
    html += card({ name, type:'vegetation', sub:state, detail:state === 'Mature' ? 'Axe → Chop' : 'Axe → Chop Stump', cost:hasSources('Axe') ? shownCost(game,1) : null, action:`forest:${name}` });
  }
  if (game.forest.herb) html += card({ name:'Wild Herb', type:'item-card', sub:'Forest edge', detail:'Hand → Collect', cost:hasSources('Hand') ? shownCost(game,1) : null, action:'forest:Wild Herb' });
  return html;
}
function riverCards() {
  let html = game.fish.spent.map((spent, i) => card({ name:'Fishing Spot', type:'water', sub:spent ? 'Used today' : 'Ready', detail:spent ? 'Resets after Sleep' : 'Fishing Rod → Cast', cost:!spent && hasSources('Fishing Rod') ? shownCost(game,1) : null, action:`river:Fishing Spot:${i}`, disabled:spent })).join('');
  if ([6,12,18].includes(game.day)) html += card({ name:'Nell', type:'person', sub:`Heart ${game.nell.hearts}/2`, detail:game.nell.gifted ? 'Gifted today' : 'Wild Herb → Gift', cost:hasSources('Wild Herb') && !game.nell.gifted && game.nell.hearts < 2 ? shownCost(game,1) : null, action:'river:Nell:0' });
  return html;
}
function mineCards() {
  let html = game.mine.visible.map((source, i) => {
    const cost = source.kind === 'Rock' || !source.dense ? 1 : game.copperPickaxe ? 2 : 3;
    return `<div class="mine-slot">${card({ name:source.kind, type:'stone', sub:source.dense ? 'Dense' : 'Ordinary', detail:'Pickaxe → Break', cost:hasSources(game.copperPickaxe ? 'Copper Pickaxe' : 'Pickaxe') ? shownCost(game,cost) : null, action:`mine:${source.kind}:${i}` })}
      ${game.mine.queue.length && cardMode === 'action' ? `<button class="small-button" data-action="mineNext:${i}">Next · 0 AP</button>` : ''}</div>`;
  }).join('');
  if (game.mine.routeOpen) html += card({ name:'Descend', type:'place', sub:'Next floor', detail:'Leave unused sources behind', cost:0, action:'descend' });
  return html || '<p class="empty">No sources remain here. Descend if the route is open.</p>';
}
function content() {
  const view = currentView(game);
  if (view === 'World') return card({ name:'World', type:'place hero-card world-card', sub:'Open five Regions', detail:'Tap to begin', action:'open:Regions' });
  if (view === 'Regions') return regionCards();
  if (view === 'Home') return card({ name:'Field', type:'place region-field', sub:'8 plots', detail:'Open the field', action:'open:Field' })
    + card({ name:'Farm Pond', type:'water', sub:`Can ${game.canWater}/${CAN_CAPACITY}`, detail:'Watering Can → Refill', cost:hasSources('Watering Can') && game.canWater < CAN_CAPACITY ? 0 : null, action:'pond', art:artFor('Farm Pond') })
    + card({ name:'Farmhouse', type:'place region-home', sub:'TV · Bed', detail:'Go inside', action:'open:Farmhouse', art:artFor('Farmhouse') })
    + card({ name:'Shipping Bin', type:'equipment', sub:`${game.pendingGold} Gold pending`, detail:'Select a sellable item, then tap', action:'bin' });
  if (view === 'Field') return fieldCards();
  if (view === 'Farmhouse') return card({ name:'TV', type:'equipment', sub:game.tvSeen ? `Tomorrow: ${game.tomorrow}` : 'Tomorrow’s forecast', detail:'Tap to watch', cost:game.tvSeen ? null : 0, action:'tv' })
    + card({ name:'Bed', type:'equipment', sub:'Start a new day', detail:'Sleep from any phase', cost:0, action:'sleep' });
  if (view === 'Forest') return forestCards();
  if (view === 'River') return riverCards();
  if (view === 'Mine') return mineCards();
  if (view === 'Commerce') return card({ name:'Supermarket', type:'place', sub:'3 Seed varieties', detail:'Open shop', action:'shop' });
  return '';
}
function handDetail(name) {
  const details = {
    Hand:'Collect, pick, or harvest from a matching tableau card.',
    Hoe:'Till Empty Soil or clear a Field Rock.',
    Sickle:'Clear Overgrown Soil.',
    'Watering Can':'Water a growing crop; refill at the Farm Pond.',
    Axe:'Chop trees or stumps.',
    'Fishing Rod':'Cast at an available Fishing Spot.',
    Pickaxe:'Break Rock and Ore Rock in the Mine.',
    'Copper Pickaxe':'Break Rock and Ore Rock in the Mine.',
    'Valley Almanac':'Open the record of cards you have seen.',
  };
  if (details[name]) return details[name];
  if (name.endsWith(' Seed')) return 'Plant on Tilled Soil in the Field.';
  if (name.endsWith(' Sapling')) return 'Plant on an available Field plot.';
  if (name === 'Wild Herb') return 'Gift to Nell when she is available.';
  if (SELL_PRICES[name]) return `Select, then tap the Shipping Bin to sell for ${SELL_PRICES[name]} Gold each.`;
  return 'Held in your hand. More uses may be added during content development.';
}
function dock() {
  const sources = ['Hand','Hoe','Sickle','Watering Can','Axe','Fishing Rod', game.copperPickaxe ? 'Copper Pickaxe' : 'Pickaxe'];
  const entries = [
    ...sources.map(name => ({ name, kind:'tool', meta:name === 'Watering Can' ? `${game.canWater}/${CAN_CAPACITY}` : 'Source', action:`select:${name}` })),
    { name:'Valley Almanac', kind:'utility', meta:'Discoveries', action:'encyclopedia' },
    ...Object.entries(game.items).filter(([, count]) => count > 0).sort(([a],[b]) => a.localeCompare(b))
      .map(([name,count]) => ({ name, kind:'item', meta:`×${count}`, action:`select:${name}` })),
  ];
  const span = Math.max(220, Math.min(window.innerWidth, 430) - 80);
  const step = entries.length > 1 ? Math.min(38, span / (entries.length - 1)) : 0;
  const cards = entries.map((entry, i) => {
    const offset = i - (entries.length - 1) / 2;
    const normalized = entries.length > 1 ? offset / ((entries.length - 1) / 2) : 0;
    const fanStyle = `--fan-x:${Math.round(offset * step)}px;--fan-y:${Math.round(18 * normalized * normalized)}px;--fan-angle:${Math.round(normalized * 18)}deg;--fan-z:${Math.round(entries.length - Math.abs(offset))};--open-angle:${((i % 5) - 2) * 2}deg;--open-y:${Math.abs((i % 5) - 2) * 3}px`;
    const on = game.selected.includes(entry.name);
    const kind = entry.kind === 'item' ? entry.name.endsWith(' Seed') || entry.name.endsWith(' Sapling') ? 'Item · Seed' : FISH_NAMES.includes(entry.name) ? 'Item · Fish' : [...Object.keys(CROPS), ...Object.keys(FRUITS), 'Wild Herb', 'Hedgerow Berry'].includes(entry.name) ? 'Item · Crop' : 'Item' : entry.kind === 'tool' ? 'Tool' : 'Utility';
    const info = { name:entry.name, kind, location:'Hand', state:entry.meta, detail:handDetail(entry.name), selected:on, action:entry.action };
    return `<button class="hand-card ${entry.kind} ${on ? 'on' : ''}" style="${fanStyle}" data-action="${esc(entry.action)}" ${inspectAttr(info)} aria-label="${esc(entry.name)} ${esc(entry.meta)}${on ? ', selected' : ''}" ${entry.kind === 'utility' ? '' : `aria-pressed="${on}"`}><span class="hand-card-head"><span aria-hidden="true">${glyph(entry.name)}</span></span><strong>${esc(entry.name)}</strong><small>${esc(entry.meta)}</small></button>`;
  }).join('');
  const selected = game.selected.length ? `Selected: ${game.selected.join(' + ')}` : 'Tap to fan out cards';
  return `<aside class="dock hand ${handOpen ? 'open' : ''}" aria-label="Player hand"><button class="hand-toggle" data-action="handToggle" aria-controls="hand-cards" aria-expanded="${handOpen}"><span class="hand-label"><strong>Hand · ${entries.length} cards</strong><small>${esc(selected)}</small></span><span class="hand-resources"><span class="hand-resource-row"><span class="hand-ap ${game.ap === 0 && !game.nell.credit ? 'exhausted' : ''}">AP ${game.ap}/6</span><span class="hand-gold">${uiIcon('coins')} ${game.gold} Gold</span></span>${game.nell.credit ? `<span class="hand-relief">Nell +${game.nell.credit}</span>` : ''}</span><span class="hand-chevron" aria-hidden="true">${uiIcon(handOpen ? 'chevron-down' : 'chevron-up')}</span></button>
    <div id="hand-cards" class="hand-cards" ${handOpen ? '' : 'inert'}>${cards}</div>
    ${handOpen ? `<div class="hand-actions">${!game.copperPickaxe ? `<button class="small-button" data-action="upgrade">Upgrade Pickaxe · 3 Ore · 0 AP</button>` : ''}
    ${game.nell.owned ? `<button class="small-button" data-action="nellAbility" ${game.nell.used || !game.nell.hearts ? 'disabled' : ''}>Nell · ${game.nell.hearts}/2 ♡ → 2 relief</button>` : ''}</div>` : '<button class="hand-peek" data-action="handToggle" aria-label="Open hand to select a card"></button>'}
  </aside>`;
}
function fallbackFullCardActions(info) {
  if (info.location === 'Hand') {
    if (info.name === 'Valley Almanac') return ['Open'];
    const byName = {
      Hand:['Collect', 'Pick Berry', 'Harvest'], Hoe:['Till', 'Clear'], Sickle:['Clear'],
      'Watering Can':['Water', 'Refill'], Axe:['Chop', 'Chop Stump'], 'Fishing Rod':['Cast'],
      Pickaxe:['Break', 'Upgrade'], 'Copper Pickaxe':['Break'], 'Wild Herb':['Gift', 'Ship'],
    };
    if (byName[info.name]) return byName[info.name];
    if (info.name.endsWith(' Seed') || info.name.endsWith(' Sapling')) return ['Plant'];
    return SELL_PRICES[info.name] ? ['Ship'] : [];
  }
  if (info.name === 'Soil') return info.state === 'Empty Soil' ? ['Till', 'Plant'] : info.state === 'Tilled Soil' ? ['Plant'] : ['Clear'];
  if (info.name.endsWith(' Crop')) return info.state.startsWith('Mature') ? ['Harvest'] : info.state.includes('Watered today') ? [] : ['Water'];
  if (info.name.endsWith(' Tree')) return info.state === 'Fruit ready' ? ['Harvest', 'Chop'] : ['Chop'];
  const byName = {
    'Field Rock':['Clear'], Hedgerow:info.state === 'Berries ready' ? ['Pick Berry'] : [],
    'Wild Herb':['Collect'], 'Fishing Spot':info.state === 'Ready' ? ['Cast'] : [],
    Nell:info.detail === 'Gifted today' || info.state === 'Heart 2/2' ? [] : ['Gift'],
    Rock:['Break'], 'Ore Rock':['Break'], 'Farm Pond':['Refill'],
    'Shipping Bin':['Ship'], TV:['Watch'], Bed:['Sleep'], Descend:['Descend'],
  };
  if (byName[info.name]) return byName[info.name];
  return info.action?.startsWith('open:') || info.action === 'shop' ? ['Open'] : [];
}
function registerActionKey(info) {
  const { name, state, location } = info;
  if (location === 'Hand') return name;
  if (name === 'TV') return `TV (${game.tvSeen ? 'Watched' : 'Unwatched'})`;
  if (name === 'Rock') return 'Rock (Ready)';
  if (name === 'Ore Rock') return `Ore Rock (${state === 'Dense' ? 'Dense' : 'Ordinary'})`;
  if (name === 'Soil' || name === 'Hedgerow' || name === 'Fishing Spot') return `${name} (${state})`;
  if (name.endsWith(' Crop')) return `${name} (${state.startsWith('Mature') ? 'Mature' : state.includes('Watered today') ? 'Watered' : 'Growing'})`;
  if (name.endsWith(' Tree')) {
    const namedState = state.startsWith('Young') ? 'Young' : state.startsWith('Regrowing') ? 'Regrowing' : state;
    return `${name} (${namedState})`;
  }
  return name;
}
function fullCardActions(info) {
  const key = registerActionKey(info);
  if (!registerActions.has(key)) return fallbackFullCardActions(info);
  let actions = registerActions.get(key);
  if (info.name === 'Wild Herb') actions = actions.filter(action => info.location === 'Hand' ? action !== 'Collect' : action === 'Collect');
  if (info.location === 'Hand' && info.name.endsWith(' Seed')) actions = actions.filter(action => action !== 'Buy');
  if (info.name === 'Nell' && (info.detail === 'Gifted today' || info.state === 'Heart 2/2')) return [];
  return actions;
}
function fullCardState(info) {
  if (info.location === 'Hand') {
    if (info.name === 'Watering Can') return `Water ${game.canWater}/${CAN_CAPACITY}`;
    return info.selected ? 'Selected' : 'No tracked state';
  }
  if (info.name === 'TV') return game.tvSeen ? 'Watched today' : 'Unwatched today';
  if (['World', ...REGIONS, 'Field', 'Farm Pond', 'Farmhouse', 'Supermarket', 'Bed', 'Wild Herb'].includes(info.name)) return 'No tracked state';
  return info.state || 'No tracked state';
}
function fullCardActionContext(info, action) {
  if (info.location === 'Hand') return '';
  if (action === 'Open') return '';
  if (['Sleep', 'Watch', 'Descend', 'Refill', 'Ship'].includes(action)) {
    const source = action === 'Refill' ? 'Watering Can · ' : action === 'Ship' ? 'Sellable item · ' : '';
    return `${source}0 AP`;
  }
  const source = ({
    Till:'Hoe', Plant:info.state === 'Empty Soil' ? 'Sapling' : 'Seed / Sapling',
    Water:'Watering Can', Harvest:'Hand', Chop:'Axe', 'Chop Stump':'Axe',
    Clear:info.name === 'Field Rock' ? 'Hoe' : 'Sickle',
    'Pick Berry':'Hand', Collect:'Hand', Cast:'Fishing Rod',
    Break:game.copperPickaxe ? 'Copper Pickaxe' : 'Pickaxe', Gift:'Wild Herb',
  })[action];
  if (!source) return '';
  const baseCost = action === 'Break' && info.state === 'Dense' ? game.copperPickaxe ? 2 : 3 : 1;
  return `${source} · ${shownCost(game, baseCost)} AP`;
}
function fullCardDescription(info) {
  if (info.name === 'Soil') return info.state === 'Empty Soil'
    ? 'An open Field plot. Hoe turns it into Tilled Soil; a sapling grows here without tilling.'
    : info.state === 'Tilled Soil' ? 'Prepared soil for a seed or sapling.' : 'An overgrown plot. Clearing restores empty soil.';
  if (info.name.endsWith(' Crop')) return info.state.startsWith('Mature')
    ? 'A mature crop yields a harvested item and returns this plot to soil.'
    : 'A watered crop advances one growth step after Sleep. Harvest becomes available when mature.';
  if (info.name === 'Bed') return 'Sleeping starts a new day and resolves daily changes.';
  if (info.name === 'TV') return 'The TV shows tomorrow’s weather forecast.';
  if (info.name === 'Farm Pond') return 'The pond refills the Watering Can.';
  if (info.name === 'Shipping Bin') return 'Shipped items pay Gold after Sleep.';
  if (info.name === 'Hedgerow') return 'This bush produces one Hedgerow Berry each season and remains after picking.';
  if (info.name === 'Fishing Spot') return 'A spot can be fished once per day. The catch depends on season, weather, and phase.';
  if (info.name === 'Nell') return 'Nell accepts Wild Herb when a Gift is available and her Heart is below its cap.';
  if (info.name === 'Field Rock') return 'Clearing this obstacle reveals Soil and yields Stone.';
  if (info.name === 'Wild Herb') return info.location === 'Hand' ? 'A collected herb that Nell accepts as a Gift.' : 'A wild herb growing in Forest.';
  if (info.name.endsWith(' Tree')) return 'A tree stays in place through growth and harvest; chopping changes its wood state.';
  if (info.name === 'Rock' || info.name === 'Ore Rock') return 'A Mine source that can be broken with a Pickaxe.';
  if (info.location === 'Hand') {
    const tools = {
      Hand:'A reusable source for collecting, picking berries, and harvesting mature crops.',
      Hoe:'A reusable tool for tilling Empty Soil and clearing Field Rock.',
      Sickle:'A reusable tool for clearing Overgrown Soil.',
      'Watering Can':'A reusable tool that waters growing crops and refills at the Farm Pond.',
      Axe:'A reusable tool for chopping trees and stumps.',
      'Fishing Rod':'A reusable tool for casting at Fishing Spots.',
      Pickaxe:'A reusable tool for breaking Mine sources.',
      'Copper Pickaxe':'An upgraded tool for breaking Mine sources.',
    };
    if (tools[info.name]) return tools[info.name];
    if (info.name.endsWith(' Seed')) return 'A seed for Tilled Soil in the Field.';
    if (info.name.endsWith(' Sapling')) return 'A sapling for an available Field plot.';
    if (SELL_PRICES[info.name]) return `A held item with a playtest Shipping Bin price of ${SELL_PRICES[info.name]} Gold.`;
    if (info.name === 'Valley Almanac') return 'A record of cards already seen.';
    return 'A reusable source card for matching tableau actions.';
  }
  if (info.name === 'World') return 'The world contains five Regions.';
  if (info.name === 'Farmhouse') return 'The farmhouse contains the TV and Bed.';
  if (info.name === 'Field') return 'The Field contains eight plots.';
  if (info.name === 'Supermarket') return 'The shop sells seeds for Gold.';
  if (info.name === 'Descend') return 'This route leads to the next Mine floor.';
  return 'This card opens its contained tableau.';
}
function panel() {
  if (inspected) {
    const actions = fullCardActions(inspected);
    return `<div class="overlay" data-action="inspectClose"><div class="inspect-stack"><section class="panel narrow inspect-panel" role="dialog" aria-modal="true" aria-label="Card details" data-action="inspectClose"><header><div><small>Identity</small><h2>${esc(inspected.name)}</h2></div><span class="inspect-type"><small>Type</small>${esc(inspected.kind)}</span></header>
    <div class="inspect-visual" aria-hidden="true">${inspected.art ? `<img src="./assets/${esc(inspected.art)}" alt="">` : `<span>${glyph(inspected.name)}</span>`}</div>
    <dl class="inspect-facts"><div class="inspect-state"><dt>State</dt><dd>${esc(fullCardState(inspected))}</dd></div><div class="inspect-actions"><dt>Action</dt><dd>${actions.length ? actions.map(name => `<span class="inspect-action-row"><strong>${esc(name)}</strong><small>${esc(fullCardActionContext(inspected, name))}</small></span>`).join('') : 'None available'}</dd></div><div class="inspect-description"><dt>Description</dt><dd>${esc(fullCardDescription(inspected))}</dd></div></dl></section>
    <div class="inspect-controls"><button class="small-button" data-action="inspectClose">Back</button></div></div></div>`;
  }
  if (settingsOpen) return `<div class="overlay"><section class="panel narrow settings-panel" role="dialog" aria-modal="true" aria-label="Options"><header><h2>Options</h2><button data-action="settingsClose" aria-label="Close options">×</button></header>
    <div class="setting-group"><strong>Font</strong><div class="setting-fonts">${[['itim','Itim'],['patrick','Patrick Hand'],['pixel','Pixelify Sans']].map(([id,label]) => `<button class="small-button ${display.font === id ? 'active' : ''}" data-action="font:${id}" aria-pressed="${display.font === id}">${label}</button>`).join('')}</div></div>
    <div class="setting-group"><strong>Tableau card size</strong><div class="setting-size"><button class="small-button" data-action="scale:-10" aria-label="Decrease tableau card size" ${display.scale <= 60 ? 'disabled' : ''}>−</button><output>${display.scale}%</output><button class="small-button" data-action="scale:10" aria-label="Increase tableau card size" ${display.scale >= 100 ? 'disabled' : ''}>+</button></div><small>100% is the largest size that fits the screen.</small></div>
    <button class="primary" data-action="settingsClose">Done</button></section></div>`;
  if (resetConfirm) return `<div class="overlay"><section class="panel narrow"><header><h2>Start over?</h2></header><p>This will erase this browser’s playtest progress.</p><div class="confirm-actions"><button class="small-button" data-action="resetCancel">Keep playing</button><button class="primary" data-action="resetDo">Start over</button></div></section></div>`;
  if (!game.panel) return '';
  if (game.panel === 'shop') return `<div class="overlay"><section class="panel"><header><h2>Supermarket</h2><button data-action="closePanel" aria-label="Close">×</button></header><p>Playtest prices. Buy costs 0 AP and spends Gold now.</p><div class="shop-grid">${Object.entries(CROPS).map(([name, crop]) => `<article class="shop-item"><div class="mini-glyph">✿</div><strong>${esc(name)} Seed</strong><span>${crop.seedPrice} Gold / card</span><label>Quantity <input type="number" min="1" step="1" value="1" data-count="${esc(name)}"></label><button data-action="buy:${name}">Buy · 0 AP</button></article>`).join('')}</div></section></div>`;
  if (game.panel === 'encyclopedia') return `<div class="overlay"><section class="panel"><header><h2>Valley Almanac</h2><button data-action="closePanel" aria-label="Close">×</button></header><p>Records each card when first seen. No rewards.</p><div class="seen-list">${Object.keys(game.seen).sort().map(name => `<span>${esc(name)}</span>`).join('')}</div></section></div>`;
  if (game.panel.kind === 'bin') {
    const name = game.panel.name;
    return `<div class="overlay"><section class="panel narrow"><header><h2>Shipping Bin</h2><button data-action="closePanel" aria-label="Close">×</button></header><p>Ship ${esc(name)}. Gold arrives after Sleep. Playtest price: ${SELL_PRICES[name]} Gold each.</p><label>Quantity <input id="ship-count" type="number" min="1" max="${game.items[name]}" step="1" value="1"></label><button class="primary" data-action="ship">Ship · 0 AP</button></section></div>`;
  }
  return '';
}
function fitTableau() {
  const shell = root.querySelector('.app-shell');
  const dock = root.querySelector('.dock.hand');
  const tableau = root.querySelector('.tableau');
  if (!shell || !dock || !tableau) return;
  shell.style.setProperty('--dock-height', `${Math.ceil(dock.getBoundingClientRect().height)}px`);
  const tiles = [...tableau.children].filter(element => element.matches('.card, .mine-slot'));
  if (!tiles.length) return;
  const gap = 8;
  const nextButton = tableau.querySelector('.mine-slot .small-button');
  const extra = nextButton ? Math.ceil(nextButton.getBoundingClientRect().height) + 4 : 0;
  const width = tableau.clientWidth;
  const height = tableau.clientHeight;
  let best = { columns:1, rows:tiles.length, size:0 };
  for (let columns = 1; columns <= tiles.length; columns++) {
    const rows = Math.ceil(tiles.length / columns);
    const size = Math.floor(Math.min(
      (width - gap * (columns - 1)) / columns,
      (height - gap * (rows - 1) - extra * rows) / rows,
    ));
    if (size > best.size) best = { columns, rows, size };
  }
  const fitSize = Math.max(0, Math.min(best.size, currentView(game) === 'World' ? 280 : 220));
  const size = Math.floor(fitSize * display.scale / 100);
  tableau.style.setProperty('--tile-size', `${size}px`);
  tableau.style.setProperty('--tile-row', `${size + extra}px`);
  tableau.style.setProperty('--columns', best.columns);
  tableau.style.setProperty('--rows', best.rows);
  tableau.classList.toggle('compact', size < 135);
}
function render() {
  const view = currentView(game);
  const handScroll = root.querySelector('.hand-cards')?.scrollLeft || 0;
  const toast = pendingToast;
  pendingToast = '';
  root.innerHTML = `<div class="app-shell" data-font="${display.font}"><div class="topbar"><header class="status"><div class="status-top"><div class="header-actions"><button class="settings-trigger" data-action="settings" aria-label="Options" title="Options">${uiIcon('settings')}</button><button class="reset-link" data-action="reset">Start over</button></div></div><div class="status-cluster" role="group" aria-label="Today’s status"><div class="status-unit calendar-status"><strong>${currentSeason(game)}</strong><span>D${game.day}/18</span></div><div class="status-unit weather-status">${uiIcon(game.weather === 'Rain' ? 'cloud-rain' : 'sun', 'status-icon')}<span>${game.weather}</span></div><div class="status-unit phase-status"><div class="phase-current">${uiIcon(PHASE_ICONS[game.phase], 'status-icon')}<span>${PHASES[game.phase]}</span></div><button class="phase-advance" data-action="phase" aria-label="${game.phase === 3 ? 'Night; sleep in Bed to start a new day' : `Next Phase: ${PHASES[game.phase + 1]}`}" title="${game.phase === 3 ? 'Sleep in Bed to start a new day' : `Next Phase: ${PHASES[game.phase + 1]}`}" ${game.phase === 3 ? 'disabled' : ''}>${uiIcon('arrow-right')}</button></div></div></header>
  <div class="nav"><button class="back" data-action="back" ${game.location.length <= 1 ? 'disabled' : ''}>${uiIcon('arrow-left')} Back</button><div><span class="breadcrumb">${game.location.map(esc).join(' / ')}</span><h1>${esc(view === 'Regions' ? 'Five Regions' : view)}</h1></div></div></div>
  <main>${view === 'Mine' ? `<div class="section-meta">Depth ${game.mine.depth} · ${game.mine.routeOpen ? 'Descent open' : 'No descent yet'} · ${game.mine.visible.length + game.mine.queue.length} sources left</div>` : ''}<div class="tableau-toolbar"><button class="tableau-mode ${cardMode}" data-action="cardMode" aria-label="Card mode: ${cardMode === 'action' ? 'Action; switch to Preview' : 'Preview; switch to Action'}" title="Switch card tap mode"><span aria-hidden="true">${cardMode === 'action' ? '▶' : '◉'}</span> ${cardMode === 'action' ? 'Action' : 'Preview'}</button><small>${cardMode === 'action' ? 'Tap cards to act' : 'Tap cards to read'}</small></div><div class="tableau ${view === 'World' ? 'world-tableau' : ''}">${content()}</div></main>${dock()}${panel()}${toast ? `<div class="game-toast" role="status">${esc(toast)}</div>` : ''}</div>`;
  if (handOpen) root.querySelector('.hand-cards').scrollLeft = handScroll;
  fitTableau();
}
root.addEventListener('click', event => {
  const el = event.target.closest('[data-action]');
  if (!el || el.disabled) return;
  let [kind, ...parts] = el.dataset.action.split(':');
  let value = parts.join(':');
  if (kind === 'cardMode') {
    cardMode = cardMode === 'action' ? 'preview' : 'action';
    localStorage.setItem(CARD_MODE_KEY, cardMode);
    render(); return;
  }
  if (kind === 'inspectClose') { inspected = null; render(); return; }
  if (el.dataset.inspect && cardMode === 'preview') {
    inspected = JSON.parse(el.dataset.inspect); render(); return;
  }
  if (el.closest('.tableau') && cardMode === 'preview') return;
  if (el.getAttribute('aria-disabled') === 'true') return;
  if (kind === 'settings') { settingsOpen = true; render(); return; }
  if (kind === 'settingsClose') { settingsOpen = false; render(); return; }
  if (kind === 'font' && ['itim', 'patrick', 'pixel'].includes(value)) {
    display.font = value; localStorage.setItem(SETTINGS_KEY, JSON.stringify(display)); render(); return;
  }
  if (kind === 'scale') {
    display.scale = Math.max(60, Math.min(100, display.scale + Number(value)));
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(display)); render(); return;
  }
  if (kind === 'reset') {
    handOpen = false; resetConfirm = true; render();
    return;
  }
  if (kind === 'resetCancel') { resetConfirm = false; render(); return; }
  if (kind === 'resetDo') {
    game = newGame(); localStorage.setItem(KEY, JSON.stringify(game));
    handOpen = false; resetConfirm = false; pendingToast = game.notice; render(); return;
  }
  if (kind === 'handToggle') { handOpen = !handOpen; render(); return; }
  if (kind === 'open') return send({ type:'open', view:value });
  if (kind === 'select') return send({ type:'select', name:value });
  if (kind === 'field') return send({ type:'field', index:Number(value) });
  if (kind === 'forest') return send({ type:'forest', target:value });
  if (kind === 'river' || kind === 'mine') return send({ type:kind, target:parts[0], index:Number(parts[1]) });
  if (kind === 'mineNext') return send({ type:'mineNext', index:Number(value) });
  if (kind === 'buy') return send({ type:'buy', name:value, count:Number(root.querySelector(`[data-count="${CSS.escape(value)}"]`)?.value) });
  if (kind === 'ship') return send({ type:'ship', count:Number(root.querySelector('#ship-count')?.value) });
  if (kind === 'bin') return send({ type:'bin', name:game.selected[0] });
  send({ type:kind });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && inspected) { inspected = null; render(); return; }
  if (event.key === 'Escape' && settingsOpen) { settingsOpen = false; render(); return; }
  if (event.key === 'Escape' && handOpen) { handOpen = false; render(); }
});
root.addEventListener('wheel', event => {
  const cards = event.target.closest('.hand.open .hand-cards');
  if (!cards || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
  cards.scrollLeft += event.deltaY;
  event.preventDefault();
}, { passive:false });
window.addEventListener('resize', fitTableau);
window.visualViewport?.addEventListener('resize', fitTableau);
document.fonts.ready.then(fitTableau);
fetch('/api/card-register', { cache:'no-store' })
  .then(response => response.ok ? response.json() : Promise.reject(new Error('Card Register unavailable')))
  .then(payload => {
    registerArt = new Map(payload.register.entries.filter(entry => entry.art[0]).map(entry => [entry.values.Identity, entry.art[0].path.split('/').at(-1)]));
    registerActions = new Map(payload.register.entries.map(entry => [entry.values.Identity, entry.values.Action.split('\n').filter(Boolean)]));
    render();
  })
  .catch(() => render());
