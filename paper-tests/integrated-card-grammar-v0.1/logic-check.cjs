/* Rule traces with a minimal DOM stub. No browser layout or player evidence. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const code = fs.readFileSync(path.join(__dirname, 'fixture.js'), 'utf8');
let visibleNodes = [];
const frames = [];
const elements = new Map();
const rect = (left, top, width, height) => ({left, top, width, height, right: left + width, bottom: top + height});
function element(id) {
  if (!elements.has(id)) elements.set(id, {
    innerHTML: '', textContent: '', value: id === 'preset' ? 'farm' : '1', scrollTop: 0, scrollLeft: 0,
    classList: {add() {}, remove() {}}, addEventListener() {},
    querySelector() { return element('sources'); },
    getBoundingClientRect() { return rect(0, 0, 390, 600); },
    scrollTo({top}) { this.scrollTop = top; }
  });
  return elements.get(id);
}
const context = vm.createContext({
  document: {getElementById: element, querySelectorAll() { return visibleNodes; }, addEventListener() {}},
  window: {setTimeout() {}}, requestAnimationFrame(fn) { frames.push(fn); }
});
vm.runInContext(code, context);
const run = expression => vm.runInContext(expression, context);
const read = expression => JSON.parse(run(`JSON.stringify(${expression})`));
const state = () => read('state');
function setup(preset = 'farm') {
  visibleNodes = [];
  frames.length = 0;
  element('preset').value = preset;
  run('reset()');
}
function act(source, target) {
  run(`state.selected = ${JSON.stringify(source)}; actionCard(${JSON.stringify(target)})`);
}
function identityNode(identity, container, location = rect(0, 0, 60, 60), inOverlay = false) {
  return {
    dataset: {identity}, getBoundingClientRect: () => location,
    closest(selector) {
      if (selector === '.overlay') return inOverlay ? element('overlay') : null;
      if (selector === '.panel') return inOverlay ? container : null;
      if (selector === '.sources') return inOverlay ? null : container;
      return null;
    }
  };
}
let checks = 0;
function check(name, fn) { fn(); checks++; console.log('PASS ' + name); }

check('Plant → Water/Sleep → Mature → Harvest preserves crop identity and returns Soil', () => {
  setup();
  act(['seed'], 'plot0');
  assert.equal(state().seed, 1);
  assert.deepEqual(state().selected, ['seed']);
  assert.equal(read('discovered.has("Turnip Crop")'), false); // Output must actually be seen.
  act(['can'], 'plot0');
  const paid = state();
  act(['can'], 'plot0');
  assert.deepEqual(state(), paid);
  run('sleep()');
  assert.equal(state().plots[0].growth, 1);
  act(['can'], 'plot0');
  run('sleep()');
  assert.equal(state().plots[0].kind, 'mature');
  assert.match(run('plotCard(state.plots[0], 0)'), /data-identity="Turnip Crop"/);
  act(['hand'], 'plot0');
  assert.equal(state().turnip, 1);
  assert.equal(state().plots[0].kind, 'tilled');
  assert.deepEqual(state().selected, ['hand']);
});

check('Rain waters a newly planted crop; rejected Water spends nothing', () => {
  setup('rain'); act(['seed'], 'plot0');
  assert.equal(state().plots[0].watered, true);
  run('state.selected = ["can"]'); const before = state();
  run('actionCard("plot0")'); assert.deepEqual(state(), before);
});

check('Catch preserves each Fish identity in Item and rejects Blue Eel without Rain', () => {
  setup('river'); act(['character', 'rod'], 'catch');
  assert.deepEqual(state().fish, {'Silver Minnow': 1});
  assert.match(element('hand').innerHTML, /data-identity="Silver Minnow"/);
  run('state.catchName = "Blue Eel"; state.catchReady = true; state.weather = "Nắng"; state.selected = ["character", "rod"]');
  const before = state(); run('actionCard("catch")'); assert.deepEqual(state(), before);
  run('state.weather = "Mưa"; actionCard("catch")');
  assert.deepEqual(state().fish, {'Silver Minnow': 1, 'Blue Eel': 1});
  assert.match(element('hand').innerHTML, /data-identity="Blue Eel"/);
  setup('river-rain'); assert.equal(read('catchEligible()'), true);
});

check('Descent → Search → Extract creates separate Ore output with no refresh or extra paid route', () => {
  setup('river');
  for (let n = 0; n < 3; n++) act(['character'], 'descent');
  act(['character'], 'search');
  assert.equal(state().ore, 0); assert.equal(state().depth, 3);
  assert.match(element('world').innerHTML, /data-identity="Exposed Ore"/);
  assert.doesNotMatch(element('hand').innerHTML, /data-identity="Ore"/);
  act(['character', 'pickaxe'], 'ore');
  assert.equal(state().ore, 1); assert.equal(state().oreSpent, true); assert.equal(state().depth, 3);
  assert.match(element('hand').innerHTML, /data-identity="Ore"/);
  assert.doesNotMatch(element('world').innerHTML, /data-card="(?:ore|descent|search)"/);
  run('sleep()'); assert.equal(state().oreSpent, true);
  run('state.selected = ["character", "pickaxe"]'); const before = state();
  run('actionCard("ore")'); assert.deepEqual(state(), before);
});

check('Bách Khoa observes separate source/output only when visible, including clipped Item and overlays', () => {
  setup();
  const tray = {getBoundingClientRect: () => rect(0, 0, 100, 60)};
  visibleNodes = [identityNode('Exposed Ore', tray)]; run('recordVisible()');
  assert.equal(read('discovered.has("Exposed Ore")'), true);
  assert.equal(read('discovered.has("Ore")'), false);
  visibleNodes = [identityNode('Ore', tray, rect(110, 0, 60, 60))]; run('recordVisible()');
  assert.equal(read('discovered.has("Ore")'), false);
  visibleNodes = [identityNode('Ore', tray)]; run('recordVisible()');
  assert.equal(read('discovered.has("Ore")'), true);
  visibleNodes = [identityNode('Wild Herb', tray)]; run('showOverlay("farmhouse"); recordVisible()');
  assert.equal(read('discovered.has("Wild Herb")'), false);
  run('closeOverlay()'); frames.splice(0).forEach(fn => fn());
  assert.equal(read('discovered.has("Wild Herb")'), true);
  assert.equal(read('discovered.has("TV")'), false);
  visibleNodes = [identityNode('TV', tray, rect(0, 0, 60, 60), true)];
  run('showOverlay("farmhouse"); recordVisible()');
  assert.equal(read('discovered.has("TV")'), true);
});

check('Herb keeps identity through Collect; Nell Gift/ability share state and failed AP keeps credit', () => {
  setup('forest'); act(['hand'], 'wild-herb');
  assert.equal(state().wildHerb, false); assert.equal(state().herb, 1);
  assert.match(element('hand').innerHTML, /data-identity="Wild Herb"/);
  run('state.nellPresent = true'); act(['character', 'herb'], 'nell-world');
  assert.equal(state().heart, 1); assert.equal(state().nellOwned, true);
  run('state.nellPresent = false; handleAction("nell-ability")');
  assert.equal(state().credit, 2); assert.equal(state().heart, 0);
  assert.match(element('world').innerHTML, /data-action="nell-ability" data-identity="Nell"/);
  run('state.credit = 1; state.ap = 0; state.selected = ["character", "rod"]');
  const before = state(); run('actionCard("catch")'); assert.deepEqual(state(), before);
  run('state.ap = 1; actionCard("catch")');
  assert.equal(state().credit, 0); assert.equal(state().ap, 0);
});

check('Bin requires confirmation; quantity failures are atomic; Gold arrives only at Sleep', () => {
  setup('commerce'); act(['turnip'], 'bin');
  assert.equal(state().turnip, 2); assert.equal(state().pending, 0);
  element('bin-qty').value = '3'; const before = state();
  run('handleAction("ship")'); assert.deepEqual(state(), before);
  element('bin-qty').value = '1'; run('handleAction("ship")');
  assert.equal(state().turnip, 1); assert.equal(state().pending, 4); assert.equal(state().gold, 0);
  run('showOverlay("shop")'); element('shop-qty').value = '1';
  run('handleAction("buy")'); assert.equal(state().seed, 2);
  run('sleep(); showOverlay("shop")'); element('shop-qty').value = '2'; run('handleAction("buy")');
  assert.equal(state().seed, 4); assert.equal(state().gold, 0); assert.equal(state().pending, 0);
});

check('Farmhouse only opens TV; TV forecast is stable, absent from rail and used at Sleep', () => {
  setup('tv'); run('actionCard("farmhouse")'); assert.equal(state().tomorrow, null);
  run('actionCard("tv")'); const forecast = state().tomorrow;
  assert.match(element('overlay').innerHTML, /Đã xem/);
  assert.doesNotMatch(element('rail').innerHTML, /TV:|mai|Tomorrow/);
  run('actionCard("tv")'); assert.equal(state().tomorrow, forecast);
  run('sleep()'); assert.equal(state().weather, forecast); assert.equal(state().tomorrow, null);
});
check('Panel feedback reports rejected and successful commits inside the active panel', () => {
  setup('commerce'); act(['turnip'], 'bin');
  element('bin-qty').value = '3'; run('handleAction("ship")');
  assert.match(element('panel-feedback').textContent, /Số lượng Bin phải/);
  assert.equal(element('panel-feedback').hidden, false);
  run('closeOverlay(); showOverlay("shop")');
  assert.equal(read('panelMessage'), '');
  element('shop-qty').value = '1'; run('handleAction("buy")');
  assert.match(element('panel-feedback').textContent, /Không đủ Gold/);
  run('state.gold = 2; handleAction("buy")');
  assert.match(element('overlay').innerHTML, /id="panel-feedback"[^>]*>Buy 1 Turnip Seed/);
  run('closeOverlay(); showOverlay("farmhouse")');
  assert.equal(read('panelMessage'), '');
  assert.doesNotMatch(element('overlay').innerHTML, /Buy 1 Turnip Seed/);
});
console.log(`${checks} rule traces passed. DOM geometry is synthetic; no browser/phone/player QA.`);
