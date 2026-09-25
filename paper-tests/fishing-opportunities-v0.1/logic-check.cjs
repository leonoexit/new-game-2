const assert = require('node:assert/strict');
const M = require('./engine.js');
function apply(s, action) {const r=M.act(s,action); assert(r.ok,r.message); return r.state;}
function ready(s) {return {...s,selected:['character','rod']};}
function catchFish(s,id) {return apply(ready(s),{type:'catch',id});}
function reject(s,action) {
  const before=JSON.stringify(s), result=M.act(s,action);
  assert.equal(result.ok,false); assert.equal(JSON.stringify(result.state),before);
  assert.equal(JSON.stringify(s),before);
}
let s=M.create();
assert.equal(s.ap,4); assert.equal(s.weather,'Rain'); assert.equal(M.view(s).length,3);
assert.equal(JSON.stringify(M.view(s)).includes('waiting'),false);
reject(s,{type:'catch',id:0}); reject(ready(s),{type:'catch',id:3});
reject(ready(s),{type:'catch',id:null}); reject(s,{type:'next'});
const cardsBefore=JSON.stringify(s.cards);
s=apply(s,{type:'select',source:'character'});s=apply(s,{type:'select',source:'rod'});
assert.equal(s.ap,4);assert.equal(JSON.stringify(s.cards),cardsBefore);
// Chosen Leaving fish is caught before other fish age. Arrivals are not aged.
s=apply(s,{type:'catch',id:0});
assert.equal(s.ap,3);assert.equal(s.inventory.minnow,1);
assert.equal(s.cards[0].status,'caught');assert.equal(s.cards[1].turns,1);
assert.equal(s.cards[2].turns,2);assert.equal(s.cards[3].turns,2);
assert.deepEqual(s.events[0].departed,[]);assert.deepEqual(s.events[0].arrived,[3]);
reject(ready(s),{type:'catch',id:0});
s=catchFish(s,1);assert.equal(s.ap,1);assert.equal(s.cards[2].turns,1);
s=catchFish(s,2);assert.equal(s.ap,0);
assert.deepEqual(s.inventory,{minnow:2,eel:1});
reject(ready(s),{type:'catch',id:s.slots.find(id=>id!==null)});
// A 2 AP Catch still advances other fish once, not twice.
let eelFirst=catchFish(M.create(),1);
assert.equal(eelFirst.ap,2);assert.equal(eelFirst.cards[2].turns,2);
assert.equal(eelFirst.cards[0].status,'left');
assert.deepEqual(eelFirst.events[0].departed,[0]);
assert.equal(eelFirst.cards[3].turns,2);assert.equal(eelFirst.cards[4].turns,2);
eelFirst=catchFish(eelFirst,2);assert.equal(eelFirst.ap,1);
assert.deepEqual(eelFirst.inventory,{minnow:1,eel:1});
assert(!M.view(eelFirst).filter(Boolean).some(c=>c.cost<=eelFirst.ap));
// In Two Departures, choosing either Leaving fish loses the other opportunity.
for (const id of [0,1]) {
  const run=catchFish(M.create('choice'),id);
  assert.equal(run.cards[id].status,'caught');assert.equal(run.cards[1-id].status,'left');
}
// No AP or opportunity reset through Farm; invalid Catch is atomic.
let farm=catchFish(M.create(),0);
const riverState=JSON.stringify([farm.cards,farm.slots,farm.cursor]);
farm=apply(farm,{type:'leave'});assert.deepEqual(M.view(farm),[]);
reject(ready(farm),{type:'catch',id:1});
farm=apply(farm,{type:'farmWork'});assert.equal(farm.ap,2);
farm=apply(farm,{type:'resume'});assert.equal(farm.ap,2);
assert.equal(JSON.stringify([farm.cards,farm.slots,farm.cursor]),riverState);
reject(ready({...farm,ap:1}),{type:'catch',id:1});
// Explore all affordable Catch sequences in both fixed scenes.
let states=0,terminals=0;
function explore(run) {
  states++;
  const visible=M.view(run).filter(Boolean);
  assert.equal(new Set(visible.map(c=>c.id)).size,visible.length);
  assert.equal(run.inventory.minnow+run.inventory.eel,run.catchCount);
  assert.equal(run.cards.filter(c=>c.status==='caught').length,run.catchCount);
  assert(run.ap>=0);assert(run.cursor<=run.cards.length);
  for(const c of visible){assert(c.turns>0);assert.equal(run.cards[c.id].status,'visible');}
  for(const c of run.cards.filter(c=>['left','caught'].includes(c.status)))assert(!run.slots.includes(c.id));
  const affordable=visible.filter(c=>c.cost<=run.ap);
  if(!affordable.length){terminals++;return;}
  for(const fish of affordable) {
    const next=catchFish(run,fish.id);
    assert.equal(next.ap,run.ap-fish.cost);
    const e=next.events.at(-1);
    for(const id of e.arrived)assert.equal(next.cards[id].turns,run.cards[id].turns);
    explore(next);
  }
}
explore(M.create('priority'));explore(M.create('choice'));
// Exhaust the finite queue with a larger AP budget; every instance resolves once.
let longRun={...M.create('choice'),ap:20};
while(M.view(longRun).some(Boolean))longRun=catchFish(longRun,M.view(longRun).find(Boolean).id);
assert.equal(longRun.cursor,6);assert(longRun.cards.every(c=>['left','caught'].includes(c.status)));
assert.deepEqual(M.view(longRun),[null,null,null]);
console.log(`PASS: ${states} affordable-sequence states / ${terminals} endings; Catch cost, departure timing, arrival timing, finite queue, no duplicate Fish, no hidden access, Farm persistence and scenario comparisons.`);
