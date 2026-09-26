import test from 'node:test';
import assert from 'node:assert/strict';
import { act, currentView, newGame, eligibleFish, CAN_CAPACITY } from './game.mjs';

function doAction(state, action) {
  const result = act(state, action);
  assert.equal(result.ok, true, `${JSON.stringify(action)}: ${result.notice}`);
  return result.state;
}
function reject(state, action) {
  const result = act(state, action);
  assert.equal(result.ok, false);
  assert.equal(result.state, state);
}
function enter(state, region) {
  let s = doAction(state, { type:'open', view:'Regions' });
  return doAction(s, { type:'open', view:region });
}
function sleepAtHome(state) {
  let s = state;
  while (currentView(s) !== 'Regions') s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Home' });
  s = doAction(s, { type:'open', view:'Farmhouse' });
  return doAction(s, { type:'sleep' });
}

test('navigation, phase and Bed are distinct from AP actions', () => {
  let s = newGame(12);
  s = enter(s, 'Home');
  s = doAction(s, { type:'open', view:'Farmhouse' });
  assert.equal(s.ap, 6);
  s = doAction(s, { type:'phase' });
  s = doAction(s, { type:'phase' });
  s = doAction(s, { type:'phase' });
  reject(s, { type:'phase' });
  assert.equal(s.phase, 3);
  s = doAction(s, { type:'tv' });
  const forecast = s.tomorrow;
  s = doAction(s, { type:'sleep' });
  assert.equal(s.phase, 0);
  assert.equal(s.weather, forecast);
  assert.equal(s.ap, 6);
  assert.equal(s.day, 2);
});

test('Field Clear, Till, Plant, Water, Sleep and Harvest preserve plot identity rules', () => {
  let s = enter(newGame(2), 'Home');
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Hoe' });
  s = doAction(s, { type:'field', index:5 });
  assert.deepEqual(s.plots[5], { kind:'Soil', soil:'empty' });
  assert.equal(s.items.Stone, 1);
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.plots[0].soil, 'tilled');
  s = doAction(s, { type:'select', name:'Turnip Seed' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.plots[0].kind, 'Crop');
  assert.equal(s.items['Turnip Seed'], 1);
  s = doAction(s, { type:'select', name:'Watering Can' });
  s = doAction(s, { type:'field', index:0 });
  reject(s, { type:'field', index:0 });
  s = sleepAtHome(s);
  assert.equal(s.plots[0].growth, 1);
  if (s.weather !== 'Rain') {
    s = doAction(s, { type:'back' });
    s = doAction(s, { type:'open', view:'Field' });
    s = doAction(s, { type:'select', name:'Watering Can' });
    s = doAction(s, { type:'field', index:0 });
  }
  s = sleepAtHome(s);
  assert.equal(s.plots[0].growth, 2);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Hand' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.items.Turnip, 1);
  assert.deepEqual(s.plots[0], { kind:'Soil', soil:'tilled' });
});

test('Farm Pond refills the basic Can without AP and empty Can cannot Water', () => {
  let s = enter(newGame(22), 'Home');
  assert.equal(s.seen['Farm Pond'], true);
  reject(s, { type:'pond' });
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Hoe' });
  s = doAction(s, { type:'field', index:0 });
  s = doAction(s, { type:'select', name:'Turnip Seed' });
  s = doAction(s, { type:'field', index:0 });
  s = doAction(s, { type:'select', name:'Watering Can' });
  s.canWater = 1;
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.canWater, 0);
  s.plots[0].watered = false;
  reject(s, { type:'field', index:0 });
  s = doAction(s, { type:'back' });
  const ap = s.ap;
  s = doAction(s, { type:'pond' });
  assert.equal(s.canWater, CAN_CAPACITY);
  assert.equal(s.ap, ap);
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.canWater, CAN_CAPACITY - 1);
});

test('Fruit Tree grows over six Sleep actions and regrows after three in-season Sleep actions', () => {
  let s = enter(newGame(8), 'Home');
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Apricot Sapling' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.plots[0].name, 'Apricot');
  assert.equal(s.items['Apricot Sapling'], undefined);
  for (let i=0; i<6; i++) s = sleepAtHome(s);
  assert.equal(s.plots[0].fruitReady, true);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Hand' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.items.Apricot, 1);
  assert.equal(s.plots[0].regrow, 0);
  for (let i=0; i<2; i++) s = sleepAtHome(s);
  assert.equal(s.plots[0].fruitReady, false);
  s = sleepAtHome(s);
  assert.equal(s.plots[0].fruitReady, true);
});

test('Forest sources persist, consume AP and reset only on new Season', () => {
  let s = enter(newGame(3), 'Forest');
  s = doAction(s, { type:'select', name:'Hand' });
  s = doAction(s, { type:'forest', target:'Hedgerow' });
  assert.equal(s.items['Hedgerow Berry'], 1);
  reject(s, { type:'forest', target:'Hedgerow' });
  s = doAction(s, { type:'select', name:'Axe' });
  s = doAction(s, { type:'forest', target:'Oak Tree' });
  assert.equal(s.forest.trees['Oak Tree'], 'Stump');
  assert.equal(s.items.Wood, 2);
  s = doAction(s, { type:'forest', target:'Oak Tree' });
  assert.equal(s.forest.trees['Oak Tree'], 'Waiting');
  s.day = 18;
  s = sleepAtHome(s);
  assert.equal(s.forest.berry, true);
  assert.equal(s.forest.trees['Oak Tree'], 'Mature');
});

test('River odds stay hidden, spot spent survives navigation, Fish filters change with phase', () => {
  let s = enter(newGame(9), 'River');
  s = doAction(s, { type:'select', name:'Fishing Rod' });
  const beforeOdds = [...s.fish.odds];
  s = doAction(s, { type:'river', target:'Fishing Spot', index:0 });
  assert.equal(s.fish.spent[0], true);
  assert.deepEqual(s.fish.odds, beforeOdds);
  reject(s, { type:'river', target:'Fishing Spot', index:0 });
  s = doAction(s, { type:'phase' });
  s = doAction(s, { type:'phase' });
  s = doAction(s, { type:'phase' });
  assert.equal(eligibleFish(s).includes('Sunfish'), false);
  assert.equal(s.fish.spent[0], true);
  s = sleepAtHome(s);
  assert.deepEqual(s.fish.spent, [false,false,false]);
});

test('Character is implicit for Cast, Break and Gift', () => {
  let s = enter(newGame(6), 'River');
  reject(s, { type:'select', name:'Character' });
  s.day = 6;
  s.items['Wild Herb'] = 1;
  s = doAction(s, { type:'select', name:'Wild Herb' });
  s = doAction(s, { type:'river', target:'Nell', index:0 });
  assert.equal(s.nell.hearts, 1);
  assert.equal(s.items['Wild Herb'] || 0, 0);
  assert.deepEqual(s.selected, []);
});

test('Mine six sources, Rock route and first Copper upgrade remain intact', () => {
  let s = enter(newGame(14), 'Mine');
  assert.equal(s.mine.visible.length + s.mine.queue.length, 6);
  s.ap = 30; // Isolate the Mine source graph from daily AP cadence.
  s = doAction(s, { type:'select', name:'Pickaxe' });
  while (s.mine.visible.length) {
    const target = s.mine.visible[0].kind;
    s = doAction(s, { type:'mine', target, index:0 });
  }
  assert.equal(s.mine.routeOpen, true);
  assert.equal(s.items.Ore, 4);
  s = doAction(s, { type:'upgrade' });
  assert.equal(s.items.Ore, 1);
  assert.equal(s.copperPickaxe, true);
  s = doAction(s, { type:'descend' });
  assert.equal(s.mine.depth, 2);
  assert.equal(s.mine.visible.length + s.mine.queue.length, 6);
  assert.equal([...s.mine.visible,...s.mine.queue].filter(x => x.dense).length, 4);
});

test('Bin Gold is pending until Bed and shop spends current Gold only', () => {
  let s = enter(newGame(20), 'Home');
  s.items.Turnip = 1;
  s = doAction(s, { type:'select', name:'Turnip' });
  s = doAction(s, { type:'bin', name:'Turnip' });
  s = doAction(s, { type:'ship', count:1 });
  assert.equal(s.gold, 0);
  assert.equal(s.pendingGold, 4);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Commerce' });
  s = doAction(s, { type:'shop' });
  reject(s, { type:'buy', name:'Turnip', count:1 });
  s = doAction(s, { type:'closePanel' });
  s = sleepAtHome(s);
  assert.equal(s.gold, 4);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Commerce' });
  s = doAction(s, { type:'shop' });
  s = doAction(s, { type:'buy', name:'Turnip', count:2 });
  assert.equal(s.gold, 0);
  assert.equal(s.items['Turnip Seed'], 4);
});

test('one play route crosses all five Regions and returns to Field after Sleep', () => {
  let s = enter(newGame(31), 'Forest');
  s = doAction(s, { type:'select', name:'Hand' });
  s = doAction(s, { type:'forest', target:'Hedgerow' });
  assert.equal(s.items['Hedgerow Berry'], 1);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Home' });
  s = doAction(s, { type:'select', name:'Hedgerow Berry' });
  s = doAction(s, { type:'bin', name:'Hedgerow Berry' });
  s = doAction(s, { type:'ship', count:1 });
  s = doAction(s, { type:'open', view:'Farmhouse' });
  s = doAction(s, { type:'sleep' });
  assert.equal(s.gold, 2);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Commerce' });
  s = doAction(s, { type:'shop' });
  s = doAction(s, { type:'buy', name:'Turnip', count:1 });
  assert.equal(s.gold, 0);
  s = doAction(s, { type:'closePanel' });
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'River' });
  s = doAction(s, { type:'select', name:'Fishing Rod' });
  s = doAction(s, { type:'river', target:'Fishing Spot', index:0 });
  assert.equal(s.fish.spent[0], true);
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Mine' });
  s = doAction(s, { type:'select', name:'Pickaxe' });
  s = doAction(s, { type:'mine', target:s.mine.visible[0].kind, index:0 });
  s = doAction(s, { type:'back' });
  s = doAction(s, { type:'open', view:'Home' });
  s = doAction(s, { type:'open', view:'Field' });
  s = doAction(s, { type:'select', name:'Hoe' });
  s = doAction(s, { type:'field', index:0 });
  s = doAction(s, { type:'select', name:'Turnip Seed' });
  s = doAction(s, { type:'field', index:0 });
  assert.equal(s.plots[0].kind, 'Crop');
  assert.equal(s.ap >= 0, true);
  for (const name of ['Home','Forest','River','Mine','Commerce']) assert.equal(s.seen[name], true);
});
