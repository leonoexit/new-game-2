const assert = require('node:assert/strict');
const M = require('./engine.js');
function apply(s, action) {
  const r = M.act(s, action);
  assert.equal(r.ok, true, r.message);
  return r.state;
}
function source(s, tool = true) {
  s = {...s, selected: []};
  s = apply(s, {type: 'select', source: 'character'});
  if (tool) s = apply(s, {type: 'select', source: 'pickaxe'});
  return s;
}
function reject(s, action) {
  const before = JSON.stringify(s);
  const r = M.act(s, action);
  assert.equal(r.ok, false);
  assert.equal(JSON.stringify(r.state), before);
  assert.equal(JSON.stringify(s), before);
}
let s = M.create(() => 0.5, true);
assert.equal(s.ap, 2);
assert.equal(s.cards[0].kind, 'ore');
assert.deepEqual(s.known, ['Exposed Ore']);
assert.equal(M.view(s)[1].kind, 'hidden');
assert(!JSON.stringify(M.view(s).slice(1)).includes('depth'));
reject(s, {type: 'extract', id: 0});
s = source(s);
reject(s, {type: 'dig', id: 0});
reject(s, {type: 'dig', id: 4});
reject(s, {type: 'descend', id: 0});
reject(s, {type: 'next'});
s = apply(s, {type: 'extract', id: 0});
assert.equal(s.ap, 1); assert.equal(s.ore, 1); assert.equal(s.depth, 1);
assert.deepEqual(s.known, ['Exposed Ore', 'Ore']);
reject(source(s), {type: 'extract', id: 0});
reject(source({...s, ap: 0}), {type: 'dig', id: 1});
const mineSnapshot = JSON.stringify(s.cards);
s = apply(s, {type: 'leave'});
assert.equal(s.ap, 1); assert.equal(s.ore, 1);
assert.deepEqual(M.view(s), []);
reject(source({...s, place: 'mine'}), {type: 'extract', id: 0});
reject(s, {type: 'dig', id: 1});
s = apply(s, {type: 'farmWork'});
assert.equal(s.ap, 0);
reject(s, {type: 'farmWork'});
s = apply(s, {type: 'sleep'});
assert.equal(s.ap, 6); assert.equal(s.day, 2);
s = apply(s, {type: 'resume'});
assert.equal(JSON.stringify(s.cards), mineSnapshot);
assert.equal(s.ore, 1);

function permutations(items) {
  if (!items.length) return [[]];
  return items.flatMap((item, index) => permutations(items.filter((_, i) => i !== index)).map(rest => [item, ...rest]));
}
let paths = 0;
for (const deck of permutations(['ore', 'ore', 'empty', 'empty', 'empty', 'depth'])) {
  let run = M.create();
  run.cards.forEach((c, i) => { c.kind = deck[i]; });
  // Every possible slot ordering must reach the review with exactly one exit,
  // without rewarding Ore merely for discovering its source.
  for (let group = 0; group < 2; group++) {
    for (const id of M.visibleIds(run)) {
      const before = run.ap;
      run = apply(source(run), {type: 'dig', id});
      assert.equal(run.ap, before - 1);
      assert.equal(run.depth, 1); assert.equal(run.ore, 0);
    }
    run = apply(run, {type: 'next'});
  }
  assert.equal(run.pass, 2); assert.equal(run.ap, 0);
  assert.equal(M.view(run).length, 3);
  assert(M.view(run).every(c => c.revealed));
  assert.deepEqual(run.known, ['Exposed Ore']);
  reject(run, {type: 'next'});
  const exitId = run.cards.find(c => c.kind === 'depth').id;
  const ended = apply(source(run, false), {type: 'descend', id: exitId});
  assert.equal(ended.depth, 2); assert.equal(ended.ap, 0); assert(ended.completed);
  reject(ended, {type: 'descend', id: exitId});
  reject(apply(ended, {type: 'leave'}), {type: 'resume'});
  // Returning on a new day keeps the same review; sources may be collected once.
  const saved = JSON.stringify(run.cards);
  run = apply(run, {type: 'leave'});
  run = apply(run, {type: 'sleep'});
  run = apply(run, {type: 'resume'});
  assert.equal(run.pass, 2); assert.equal(JSON.stringify(run.cards), saved);
  for (const card of run.cards.filter(c => c.kind === 'ore')) {
    run = apply(source(run), {type: 'extract', id: card.id});
    reject(source(run), {type: 'extract', id: card.id});
  }
  assert.equal(run.ore, 2); assert.equal(run.ap, 4);
  reject(run, {type: 'next'});
  paths++;
}
// Early descent stops the floor without requiring other tiles to be opened.
let early = M.create(); early.cards[0].kind = 'depth';
early = apply(source(early), {type: 'dig', id: 0});
early = apply(source(early, false), {type: 'descend', id: 0});
assert.equal(early.ap, 5); assert.equal(early.depth, 2);
assert.equal(early.cards.filter(c => c.revealed).length, 1);
console.log(`PASS: atomic costs, hidden results, source/output identity, no duplicate reward, partial-group gate, early descent, Farm/Sleep resume, one review and exit at 0 AP; ${paths} labeled permutations (60 unique content orders).`);
