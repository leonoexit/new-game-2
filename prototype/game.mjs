// Little Valley Cards V0 runtime slice. Rules: docs/current/README.md.
// Prices, weather generation and ordinary-crop growth below are test fixtures.
export const REGIONS = ['Home', 'Forest', 'River', 'Mine', 'Commerce'];
export const PHASES = ['Morning', 'Noon', 'Afternoon', 'Night'];
export const SEASONS = ['Spring', 'Summer', 'Fall', 'Winter'];
export const CROPS = {
  Turnip: { days: 2, seedPrice: 2, sell: 4 },
  'Lemon Balm': { days: 3, seedPrice: 3, sell: 5 },
  'Runner Bean': { days: 4, seedPrice: 3, sell: 6 },
};
export const FRUITS = {
  Apricot: 'Spring', Cherry: 'Spring', Orange: 'Summer',
  Peach: 'Summer', Apple: 'Fall', Pomegranate: 'Fall',
};
// Prototype fixture: one Water commit spends one of the basic Can's 40 charges.
export const CAN_CAPACITY = 40;
export const SELL_PRICES = {
  Turnip: 4, 'Lemon Balm': 5, 'Runner Bean': 6,
  'Hedgerow Berry': 2, 'Wild Herb': 2,
  'Silver Minnow': 3, Chub: 3, 'Smallmouth Bass': 4,
  Pike: 4, Perch: 4, Shad: 5, Catfish: 5, Walleye: 5,
  Sunfish: 4, 'Rainbow Trout': 5,
};

function random(s) {
  s.rng = (Math.imul(s.rng, 1664525) + 1013904223) >>> 0;
  return s.rng / 4294967296;
}
function shuffle(s, values) {
  const a = [...values];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random(s) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function weather(s) { return random(s) < 0.35 ? 'Rain' : 'Sunny'; }
function makeFloor(s, depth) {
  const route = Math.floor(random(s) * 2);
  const sources = [
    { id: `d${depth}r0`, kind: 'Rock', route: route === 0 },
    { id: `d${depth}r1`, kind: 'Rock', route: route === 1 },
    ...Array.from({ length: depth === 1 ? 2 : 0 }, (_, i) =>
      ({ id: `d${depth}o${i}`, kind: 'Ore Rock', dense: false })),
    ...Array.from({ length: depth === 1 ? 2 : 4 }, (_, i) =>
      ({ id: `d${depth}x${i}`, kind: 'Ore Rock', dense: true })),
  ];
  const order = shuffle(s, sources);
  return { depth, visible: order.slice(0, 3), queue: order.slice(3), routeOpen: false };
}
function reveal(s, names) { for (const name of names) s.seen[name] = true; }
function add(s, name, count = 1) {
  s.items[name] = (s.items[name] || 0) + count;
  reveal(s, [name]);
}
function remove(s, name, count = 1) {
  if ((s.items[name] || 0) < count) throw new Error(`Not enough ${name}.`);
  s.items[name] -= count;
  if (!s.items[name]) delete s.items[name];
}
function charge(s, ap) {
  const credit = Math.min(ap, s.nell.credit);
  const due = ap - credit;
  if (s.ap < due) throw new Error(`Need ${due} AP; you have ${s.ap}.`);
  s.ap -= due;
  s.nell.credit -= credit;
}
export function shownCost(s, ap) { return Math.max(0, ap - s.nell.credit); }
export function currentSeason(s) { return SEASONS[s.seasonIndex]; }
export function eligibleFish(s) {
  const season = currentSeason(s), rain = s.weather === 'Rain';
  const daylight = s.phase < 3;
  const names = ['Silver Minnow', 'Chub'];
  if (season === 'Spring' || season === 'Fall') names.push('Smallmouth Bass');
  if (season === 'Summer' || season === 'Winter') names.push('Pike');
  if (season === 'Winter') names.push('Perch');
  if (rain && season !== 'Winter') names.push('Shad');
  if (rain && (season === 'Spring' || season === 'Fall')) names.push('Catfish');
  if (rain && season === 'Fall' && s.phase >= 1) names.push('Walleye');
  if (!rain && daylight && (season === 'Spring' || season === 'Summer')) names.push('Sunfish');
  if (!rain && daylight && season === 'Summer') names.push('Rainbow Trout');
  return names;
}
export function newGame(seed = Date.now()) {
  const s = {
    version: 1, rng: seed >>> 0, day: 1, seasonIndex: 0,
    phase: 0, weather: 'Sunny', tomorrow: null, tvSeen: false,
    ap: 6, gold: 0, pendingGold: 0, pendingItems: {}, canWater: CAN_CAPACITY,
    location: ['World'], selected: [], panel: null,
    items: { 'Turnip Seed': 2 }, seen: { World: true,
      Hand: true, Hoe: true, Sickle: true, Axe: true,
      'Watering Can': true, Pickaxe: true, 'Fishing Rod': true,
      'Valley Almanac': true, 'Turnip Seed': true },
    plots: [
      { kind: 'Soil', soil: 'empty' }, { kind: 'Soil', soil: 'empty' },
      ...Array.from({ length: 3 }, () => ({ kind: 'Soil', soil: 'overgrown' })),
      ...Array.from({ length: 3 }, () => ({ kind: 'Field Rock' })),
    ],
    fruit: {}, forest: {
      herb: false, slips: [], berry: true,
      trees: Object.fromEntries(['Oak Tree','Maple Tree','Pine Tree','Mahogany Tree']
        .map(name => [name, 'Mature'])),
    },
    fish: { odds: [], spent: [false, false, false] },
    mine: null, copperPickaxe: false,
    nell: { owned: false, hearts: 0, credit: 0, gifted: false, used: false },
    notice: 'Tap World to begin.',
  };
  for (const fruit of Object.keys(FRUITS)) add(s, `${fruit} Sapling`);
  s.forest.slips = shuffle(s, [true, false, false, false, false]);
  s.forest.herb = s.forest.slips.shift();
  s.fish.odds = shuffle(s, [0.25, 0.5, 0.75]);
  s.mine = makeFloor(s, 1);
  s.tomorrow = weather(s);
  return s;
}
export function currentView(s) { return s.location.at(-1); }
export function visibleNames(s) {
  const view = currentView(s);
  switch (view) {
    case 'World': return ['World'];
    case 'Regions': return REGIONS;
    case 'Home': return ['Field', 'Farm Pond', 'Farmhouse', 'Shipping Bin'];
    case 'Field': return s.plots.map(p => p.kind === 'Crop' ? `${p.name} Crop`
      : p.kind === 'Fruit Tree' ? `${p.name} Tree` : p.kind);
    case 'Farmhouse': return ['TV', 'Bed'];
    case 'Forest': return [
      'Hedgerow', ...Object.entries(s.forest.trees)
        .filter(([, state]) => state !== 'Waiting').map(([name]) => name),
      ...(s.forest.herb ? ['Wild Herb'] : []),
    ];
    case 'River': return ['Fishing Spot', ...(s.day % 18 === 6 || s.day % 18 === 12 || s.day % 18 === 0 ? ['Nell'] : [])];
    case 'Mine': return s.mine.visible.map(x => x.kind);
    case 'Commerce': return ['Supermarket'];
    default: return [];
  }
}
function enter(s, view) {
  s.location.push(view);
  reveal(s, visibleNames(s));
}
function nextHerb(s) {
  if (s.forest.herb) return;
  if (!s.forest.slips.length) s.forest.slips = shuffle(s, [true, false, false, false, false]);
  s.forest.herb = s.forest.slips.shift();
  if (s.forest.herb && currentView(s) === 'Forest') reveal(s, ['Wild Herb']);
}
function sleep(s) {
  for (const plot of s.plots) {
    if (plot.kind === 'Crop') {
      if (plot.watered) plot.growth = Math.min(CROPS[plot.name].days, plot.growth + 1);
      plot.watered = false;
    } else if (plot.kind === 'Fruit Tree' && plot.growth < 6) {
      plot.growth++;
    }
  }
  s.gold += s.pendingGold;
  s.pendingGold = 0;
  s.pendingItems = {};
  s.day++;
  let seasonChanged = false;
  if (s.day > 18) {
    s.day = 1;
    s.seasonIndex = (s.seasonIndex + 1) % 4;
    seasonChanged = true;
    s.forest.herb = false;
    s.forest.slips = shuffle(s, [true, false, false, false, false]);
    s.forest.berry = true;
    for (const name of Object.keys(s.forest.trees)) {
      if (s.forest.trees[name] === 'Waiting') s.forest.trees[name] = 'Mature';
    }
  }
  for (const plot of s.plots) {
    if (plot.kind !== 'Fruit Tree' || plot.growth < 6) continue;
    const seasonFruit = FRUITS[plot.name] === currentSeason(s);
    if (!seasonFruit) { plot.fruitReady = false; continue; }
    if (seasonChanged) { plot.fruitReady = true; plot.regrow = 0; plot.harvested = false; }
    else if (plot.harvested) {
      plot.regrow++;
      if (plot.regrow >= 3) { plot.fruitReady = true; plot.regrow = 0; plot.harvested = false; }
    } else if (!plot.fruitReady) plot.fruitReady = true;
  }
  nextHerb(s);
  s.weather = s.tomorrow;
  s.tomorrow = weather(s);
  if (s.weather === 'Rain') {
    for (const plot of s.plots) if (plot.kind === 'Crop' && plot.growth < CROPS[plot.name].days) plot.watered = true;
  }
  s.fish.odds = shuffle(s, [0.25, 0.5, 0.75]);
  s.fish.spent = [false, false, false];
  s.ap = 6; s.phase = 0; s.tvSeen = false;
  s.nell.credit = 0; s.nell.gifted = false; s.nell.used = false;
  s.selected = []; s.panel = null;
  return `Day ${s.day} · ${currentSeason(s)} · ${s.weather}. Shipping Bin Gold paid.`;
}
function selected(s, ...required) {
  return required.length === s.selected.length && required.every(x => s.selected.includes(x));
}
function fieldAction(s, index) {
  const p = s.plots[index];
  if (!p) throw new Error('This plot does not exist.');
  if (p.kind === 'Field Rock' && selected(s, 'Hoe')) {
    charge(s, 1); s.plots[index] = { kind: 'Soil', soil: 'empty' }; add(s, 'Stone');
    reveal(s, ['Soil']); return 'Cleared Field Rock: gained 1 Stone.';
  }
  if (p.kind === 'Soil') {
    if (p.soil === 'overgrown' && selected(s, 'Sickle')) {
      charge(s, 1); p.soil = 'empty'; return 'Cleared weeds: Soil is empty. No item gained.';
    }
    if (p.soil === 'empty' && selected(s, 'Hoe')) {
      charge(s, 1); p.soil = 'tilled'; return 'Tilled Soil is ready to plant.';
    }
    if (s.selected.length === 1 && s.selected[0].endsWith(' Sapling') && p.soil !== 'overgrown') {
      const name = s.selected[0].slice(0, -8);
      if (!(name in FRUITS)) throw new Error('Invalid Sapling.');
      if (!s.items[s.selected[0]]) throw new Error('No Sapling left.');
      charge(s, 1); remove(s, s.selected[0]);
      s.plots[index] = { kind: 'Fruit Tree', name, growth: 0, fruitReady: false, regrow: 0, harvested: false };
      reveal(s, [`${name} Tree`]); s.selected = [];
      return `Plant ${name} Tree · Young 0/6.`;
    }
    if (p.soil === 'tilled' && s.selected.length === 1 && s.selected[0].endsWith(' Seed')) {
      const name = s.selected[0].slice(0, -5);
      if (!(name in CROPS)) throw new Error('Invalid Seed.');
      if (!s.items[s.selected[0]]) throw new Error('No Seed left.');
      charge(s, 1); remove(s, s.selected[0]);
      s.plots[index] = { kind: 'Crop', name, growth: 0, watered: s.weather === 'Rain' };
      reveal(s, [`${name} Crop`]);
      if (!s.items[s.selected[0]]) s.selected = [];
      return `Plant ${name} Crop · 0/${CROPS[name].days}.`;
    }
  }
  if (p.kind === 'Crop') {
    if (selected(s, 'Watering Can') && p.growth < CROPS[p.name].days && !p.watered) {
      if (s.canWater <= 0) throw new Error('Watering Can is empty. Refill at Farm Pond in Home.');
      charge(s, 1); s.canWater--; p.watered = true;
      return `Watered ${p.name}; Can ${s.canWater}/${CAN_CAPACITY}. Growth advances after Sleep.`;
    }
    if (selected(s, 'Hand') && p.growth >= CROPS[p.name].days) {
      charge(s, 1); add(s, p.name);
      s.plots[index] = { kind: 'Soil', soil: 'tilled' };
      return `Harvested 1 ${p.name}; Soil stays tilled.`;
    }
  }
  if (p.kind === 'Fruit Tree') {
    if (selected(s, 'Hand') && p.growth >= 6 && p.fruitReady) {
      charge(s, 1); add(s, p.name); p.fruitReady = false; p.regrow = 0; p.harvested = true;
      return `Harvested 1 ${p.name}; the tree remains in the Field.`;
    }
    if (selected(s, 'Axe')) {
      charge(s, 1); add(s, `${p.name} Sapling`);
      if (p.growth >= 6) add(s, 'Wood', 2);
      s.plots[index] = { kind: 'Soil', soil: 'empty' };
      return `Chopped ${p.name} Tree; gained a Sapling${p.growth >= 6 ? ' and 2 Wood' : ''}.`;
    }
  }
  throw new Error('Select a matching Tool or Seed, then tap a valid target.');
}
function forestAction(s, target) {
  if (target === 'Hedgerow' && selected(s, 'Hand') && s.forest.berry) {
    charge(s, 1); s.forest.berry = false; add(s, 'Hedgerow Berry');
    return 'Picked 1 Hedgerow Berry.';
  }
  if (target === 'Wild Herb' && selected(s, 'Hand') && s.forest.herb) {
    charge(s, 1); s.forest.herb = false; add(s, 'Wild Herb');
    return 'Collected Wild Herb into your hand.';
  }
  if (target in s.forest.trees && selected(s, 'Axe')) {
    const state = s.forest.trees[target];
    if (state === 'Mature') {
      charge(s, 1); s.forest.trees[target] = 'Stump';
      add(s, target === 'Mahogany Tree' ? 'Hardwood' : 'Wood', 2);
      add(s, 'Sap'); return `Chopped ${target}: it became a Stump.`;
    }
    if (state === 'Stump') {
      charge(s, 1); s.forest.trees[target] = 'Waiting'; add(s, 'Wood');
      return 'Chopped Stump: gained 1 Wood; tree returns next season.';
    }
  }
  throw new Error('This Forest target does not match the selected source.');
}
function riverAction(s, target, index) {
  if (target === 'Nell') {
    if (!(s.day === 6 || s.day === 12 || s.day === 18)) throw new Error('Nell is not at the River today.');
    if (!selected(s, 'Wild Herb')) throw new Error('Gift requires Wild Herb in your hand.');
    if (s.nell.hearts >= 2) throw new Error('Nell’s Hearts are full. Keep the Gift.');
    if (s.nell.gifted) throw new Error('You already gave Nell a Gift today.');
    if (!s.items['Wild Herb']) throw new Error('No Wild Herb in your hand.');
    charge(s, 1); remove(s, 'Wild Herb');
    s.nell.owned = true; s.nell.hearts++; s.nell.gifted = true;
    s.selected = []; return `Gift Nell: Heart ${s.nell.hearts}/2.`;
  }
  if (target === 'Fishing Spot') {
    if (!selected(s, 'Fishing Rod')) throw new Error('Select Fishing Rod to Cast.');
    if (s.fish.spent[index]) throw new Error('Fishing Spot already used today.');
    charge(s, 1);
    s.fish.spent[index] = true;
    if (random(s) >= s.fish.odds[index]) return 'No Bite. Spot spent for today.';
    const pool = eligibleFish(s);
    const fish = pool[Math.floor(random(s) * pool.length)];
    add(s, fish); return `Caught 1 ${fish}.`;
  }
  throw new Error('Invalid River target.');
}
function mineAction(s, target, index) {
  const source = s.mine.visible[index];
  if (!source || source.kind !== target) throw new Error('This Mine source is no longer here.');
  if (!selected(s, s.copperPickaxe ? 'Copper Pickaxe' : 'Pickaxe'))
    throw new Error('Select your current Pickaxe to Break.');
  const cost = source.kind === 'Rock' || !source.dense ? 1 : s.copperPickaxe ? 2 : 3;
  charge(s, cost);
  let result;
  if (source.kind === 'Rock') {
    if (source.route) { s.mine.routeOpen = true; result = 'Descent revealed.'; }
    else result = 'Nothing Found.';
  } else { add(s, 'Ore'); result = 'Gained 1 Ore.'; }
  s.mine.visible.splice(index, 1);
  if (s.mine.queue.length) s.mine.visible.splice(index, 0, s.mine.queue.shift());
  reveal(s, visibleNames(s));
  return `Break ${source.dense ? 'Dense ' : ''}${source.kind}: ${result}`;
}
function actMutable(s, a) {
  switch (a.type) {
    case 'open': {
      const view = currentView(s);
      const allowed = view === 'World' ? ['Regions']
        : view === 'Regions' ? REGIONS
        : view === 'Home' ? ['Field', 'Farmhouse'] : [];
      if (!allowed.includes(a.view)) throw new Error('You cannot open this card from here.');
      enter(s, a.view); return `Opened ${a.view}.`;
    }
    case 'back': {
      if (s.panel) { s.panel = null; return 'Panel closed.'; }
      if (s.location.length <= 1) throw new Error('You are already in World.');
      s.location.pop(); return `Back to ${currentView(s)}.`;
    }
    case 'select': {
      const name = a.name;
      const known = ['Hand','Hoe','Sickle','Axe','Watering Can','Fishing Rod',
        s.copperPickaxe ? 'Copper Pickaxe' : 'Pickaxe'];
      if (!known.includes(name) && !s.items[name]) throw new Error('This source is not in your hand.');
      if (s.selected.includes(name)) s.selected = s.selected.filter(x => x !== name);
      else s.selected = [name];
      return s.selected.length ? `Selected: ${s.selected.join(' + ')}.` : 'Source deselected.';
    }
    case 'field':
      if (currentView(s) !== 'Field') throw new Error('Open Field first.');
      return fieldAction(s, a.index);
    case 'pond':
      if (currentView(s) !== 'Home') throw new Error('Farm Pond is in Home.');
      if (!selected(s, 'Watering Can')) throw new Error('Select Watering Can, then tap Farm Pond to refill.');
      if (s.canWater >= CAN_CAPACITY) return 'Watering Can is already full.';
      s.canWater = CAN_CAPACITY;
      return `Refilled Watering Can at Farm Pond: ${CAN_CAPACITY}/${CAN_CAPACITY} · 0 AP.`;
    case 'forest':
      if (currentView(s) !== 'Forest') throw new Error('Open Forest first.');
      return forestAction(s, a.target);
    case 'river':
      if (currentView(s) !== 'River') throw new Error('Open River first.');
      return riverAction(s, a.target, a.index);
    case 'mine':
      if (currentView(s) !== 'Mine') throw new Error('Open Mine first.');
      return mineAction(s, a.target, a.index);
    case 'mineNext': {
      if (currentView(s) !== 'Mine' || !s.mine.queue.length || !s.mine.visible[a.index])
        throw new Error('No other source to show here.');
      s.mine.queue.push(s.mine.visible[a.index]);
      s.mine.visible[a.index] = s.mine.queue.shift();
      reveal(s, visibleNames(s)); return 'Next: changed the source in this slot.';
    }
    case 'descend':
      if (currentView(s) !== 'Mine' || !s.mine.routeOpen) throw new Error('Descent is not open yet.');
      s.mine = makeFloor(s, s.mine.depth + 1);
      reveal(s, visibleNames(s)); return `Descended to Depth ${s.mine.depth} · 0 AP.`;
    case 'upgrade':
      if (s.copperPickaxe) throw new Error('You already have a Copper Pickaxe.');
      if ((s.items.Ore || 0) < 3) throw new Error('Need 3 Ore to upgrade Pickaxe.');
      remove(s, 'Ore', 3); s.copperPickaxe = true;
      s.selected = s.selected.map(x => x === 'Pickaxe' ? 'Copper Pickaxe' : x);
      reveal(s, ['Copper Pickaxe']); return 'Upgraded to Copper Pickaxe · 0 AP.';
    case 'phase':
      if (s.phase >= 3) throw new Error('It is Night. Use Bed to start a new day.');
      s.phase++; return `Current phase: ${PHASES[s.phase]}.`;
    case 'tv':
      if (currentView(s) !== 'Farmhouse') throw new Error('TV is in Farmhouse.');
      s.tvSeen = true; s.selected = [];
      return `Tomorrow’s forecast: ${s.tomorrow}.`;
    case 'sleep':
      if (currentView(s) !== 'Farmhouse') throw new Error('Tap Bed in Farmhouse to Sleep.');
      return sleep(s);
    case 'shop':
      if (currentView(s) !== 'Commerce') throw new Error('Supermarket is in Commerce.');
      s.panel = 'shop'; s.selected = [];
      reveal(s, Object.keys(CROPS).map(name => `${name} Seed`));
      return 'Supermarket open. Choose a quantity, then Buy.';
    case 'buy': {
      if (s.panel !== 'shop' || !CROPS[a.name]) throw new Error('Open Supermarket first.');
      const count = a.count;
      if (!Number.isInteger(count) || count < 1) throw new Error('Quantity must be a positive whole number.');
      const price = CROPS[a.name].seedPrice * count;
      if (s.gold < price) throw new Error(`Need ${price} Gold; you have ${s.gold}.`);
      s.gold -= price; add(s, `${a.name} Seed`, count);
      return `Bought ${count} ${a.name} Seed for ${price} Gold.`;
    }
    case 'bin': {
      if (currentView(s) !== 'Home' || !s.items[a.name] || !(a.name in SELL_PRICES))
        throw new Error('Select a sellable item before tapping Shipping Bin.');
      s.panel = { kind: 'bin', name: a.name }; return `Choose how many ${a.name} to ship.`;
    }
    case 'ship': {
      if (s.panel?.kind !== 'bin') throw new Error('Open Shipping Bin first.');
      const name = s.panel.name, count = a.count;
      if (!Number.isInteger(count) || count < 1 || count > (s.items[name] || 0))
        throw new Error('Choose a valid quantity from your hand.');
      remove(s, name, count);
      s.pendingItems[name] = (s.pendingItems[name] || 0) + count;
      s.pendingGold += SELL_PRICES[name] * count;
      if (!s.items[name]) s.selected = [];
      s.panel = null; return `Shipped ${count} ${name}; pending Gold: ${s.pendingGold}.`;
    }
    case 'encyclopedia':
      s.panel = 'encyclopedia'; s.selected = [];
      return 'Opened Valley Almanac. It records cards you have seen.';
    case 'closePanel':
      s.panel = null; return 'Panel closed.';
    case 'nellAbility':
      if (!s.nell.owned || s.nell.hearts < 1 || s.nell.used) throw new Error('Nell’s ability is not available today.');
      s.nell.hearts--; s.nell.credit += 2; s.nell.used = true;
      return 'Nell: spent 1 Heart for 2 AP relief today.';
    default: throw new Error('Action not supported.');
  }
}
export function act(state, action) {
  const next = structuredClone(state);
  try {
    const notice = actMutable(next, action);
    next.notice = notice;
    return { state: next, ok: true, notice };
  } catch (error) {
    return { state, ok: false, notice: error.message };
  }
}
