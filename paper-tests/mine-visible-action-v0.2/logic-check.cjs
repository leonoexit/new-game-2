const assert = require('node:assert/strict');
const M = require('./engine.js');
function apply(s, action) {
  const r = M.act(s, action); assert(r.ok, r.message); return r.state;
}
function ready(s) { return {...s, selected: ['character', 'pickaxe']}; }
function rejected(s, action) {
  const before = JSON.stringify(s), result = M.act(s, action);
  assert.equal(result.ok, false); assert.equal(JSON.stringify(result.state), before);
  assert.equal(JSON.stringify(s), before);
}
let s = M.create(() => 0.4, true);
assert.equal(s.ap, 2); assert.equal(s.ore, 0);
assert.deepEqual(s.known, ['Exposed Ore']);
assert(M.view(s).every(c => c.kind !== 'depth'));
assert(M.view(s).some(c => c.kind === 'ore'));
rejected(s, {type: 'extract', id: 0});
rejected(ready(s), {type: 'extract', id: 4});
rejected(ready(s), {type: 'clear', id: 0});
rejected(s, {type: 'next'}); rejected(s, {type: 'dig', id: 0});
rejected(ready({...s, ap: 0}), {type: 'extract', id: 0});
const oldSlots = [...s.slots];
s = apply(ready(s), {type: 'extract', id: 0});
assert.equal(s.ore, 1); assert.equal(s.ap, 1); assert.equal(s.cursor, 4);
assert.deepEqual(s.slots, [3, oldSlots[1], oldSlots[2]]);
assert(s.cards[0].spent); assert(s.known.includes('Ore'));
rejected(ready(s), {type: 'extract', id: 0});
const floor = JSON.stringify([s.cards, s.slots, s.cursor]);
s = apply(s, {type: 'leave'}); assert.equal(s.ap, 1); assert.deepEqual(M.view(s), []);
rejected(s, {type: 'extract', id: s.slots[1]});
s = apply(s, {type: 'farmWork'}); assert.equal(s.ap, 0);
s = apply(s, {type: 'sleep'}); s = apply(s, {type: 'resume'});
assert.equal(s.ap, 6); assert.equal(s.ore, 1);
assert.equal(JSON.stringify([s.cards, s.slots, s.cursor]), floor);
function perms(xs) {
  if (!xs.length) return [[]];
  return xs.flatMap((x,i) => perms(xs.filter((_,j) => i!==j)).map(p => [x,...p]));
}
const decks = [...new Set(perms(['ore','ore','rock','rock','rock','depth']).map(x => x.join(',')))].map(x => x.split(','));
for (const deck of decks) {
  let run = M.create();
  run.cards = deck.map((kind,id) => ({kind,id,spent:false}));
  run.known = deck.slice(0,3).includes('ore') ? ['Exposed Ore'] : [];
  let resolved = 0;
  while (true) {
    const targets = M.view(run).filter(c => c && c.kind !== 'depth');
    if (!targets.length) break;
    const target = targets[0];
    const slots = [...run.slots];
    const exit = M.view(run).find(c => c && c.kind === 'depth');
    const previousOre = run.ore, previousAP = run.ap;
    run = apply(ready(run), {type: target.kind === 'ore' ? 'extract' : 'clear', id: target.id});
    resolved++;
    assert.equal(run.ap, previousAP - 1);
    assert.equal(run.ore, previousOre + (target.kind === 'ore' ? 1 : 0));
    slots.forEach((id, slot) => { if(id !== target.id) assert.equal(run.slots[slot], id); });
    if (exit) assert(M.visibleIds(run).includes(exit.id));
    rejected(ready(run), {type: target.kind === 'ore' ? 'extract' : 'clear', id: target.id});
  }
  assert.equal(resolved, 5); assert.equal(run.ore, 2); assert.equal(run.ap, 1);
  assert.equal(run.cursor, 6); assert.equal(run.slots.filter(id => id === null).length, 2);
  const exit = M.view(run).find(c => c && c.kind === 'depth');
  assert(exit);
  run = apply(ready({...run, ap: 0}), {type: 'descend', id: exit.id});
  assert.equal(run.depth, 2); assert.equal(run.ap, 0); assert(run.completed);
  rejected(run, {type: 'descend', id: exit.id});
  rejected(apply(run, {type: 'leave'}), {type: 'resume'});
}
// The actual shuffle always keeps the exit in the queue, including the 2 AP preset.
for (let seed=1; seed<=100; seed++) {
  let v=seed;
  const random=()=> {v=(Math.imul(v,1664525)+1013904223)>>>0; return v/4294967296;};
  for(const focus of [false,true]) {
    const run=M.create(random,focus);
    assert(!M.view(run).some(c=>c.kind==='depth'));
    assert.equal(run.cards.filter(c=>c.kind==='depth').length,1);
    if(focus)assert(M.view(run).some(c=>c.kind==='ore'));
  }
}
console.log(`PASS: visible targets without charge, 1 AP/Ore, one-slot refill, no free digging, stable exit, no duplicate rewards, Farm/Sleep persistence, terminal descent; ${decks.length} content orders and 200 seeded starts.`);
