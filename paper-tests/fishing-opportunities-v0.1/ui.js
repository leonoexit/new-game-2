'use strict';
const model = window.FishingTrial;
let state = model.create();
const attempts = [];
const el = id => document.getElementById(id);
function dispatch(action) {
  const result = model.act(state, action); state = result.state; render(result.message);
}
function restart(scenario) {
  if (state.catchCount || state.ap < 4) {
    attempts.unshift({scenario: state.scenario, inventory: {...state.inventory}, ap: state.ap,
      catches: state.events.map(e => model.species[state.cards[e.caught].kind].name),
      left: state.cards.filter(c => c.status === 'left').map(c => model.species[c.kind].name)});
    attempts.splice(4);
  }
  state = model.create(scenario); render();
}
function textNode(tag, className, value) {
  const node = document.createElement(tag); node.className = className; node.textContent = value; return node;
}
function fishIcon(kind) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 100 50'); svg.setAttribute('class', 'fish'); svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', kind === 'eel' ? 'M8 35 Q25 5 50 24 Q72 42 91 15 L94 27 Q77 52 48 35 Q23 19 8 40 Z' : 'M12 25 L0 10 L0 40 Z M12 25 Q42 -2 86 25 Q42 52 12 25 Z');
  path.setAttribute('fill', 'currentColor'); svg.append(path);
  const eye = document.createElementNS(ns, 'circle');
  eye.setAttribute('cx', kind === 'eel' ? '89' : '72'); eye.setAttribute('cy', '24'); eye.setAttribute('r', '2'); eye.setAttribute('fill', '#fffdf1'); svg.append(eye);
  return svg;
}
function render(message = state.log[state.log.length - 1]) {
  el('stats').replaceChildren(...[`${state.ap} AP`, state.weather, `${state.catchCount} caught`].map(text => textNode('span','',text)));
  const river = state.place === 'river';
  el('stage').textContent = river ? model.scenarios[state.scenario].name : 'Back at Farm';
  const visible = model.view(state).filter(Boolean);
  el('context').textContent = !river ? `You kept ${state.ap} AP for Farm. You can return to the same river.` :
    !visible.length ? 'No fish remain in this scene. Return to Farm or retry a different order.' :
    !visible.some(c => c.cost <= state.ap) ? 'No affordable Catch remains. Return to Farm or retry a different order.' :
    'Catch one fish. The others move one step closer to leaving.';
  el('sources').hidden = !river;
  for (const source of ['character','rod']) el(source).setAttribute('aria-pressed', String(state.selected.includes(source)));
  el('board').replaceChildren(...model.view(state).map(fish => {
    const slot = document.createElement('div'); slot.className = 'slot';
    const button = document.createElement('button');
    if (!fish) {
      button.className = 'card empty'; button.disabled = true; button.textContent = 'Open water'; slot.append(button); return slot;
    }
    const leaving = fish.turns === 1;
    button.className = `card ${fish.kind}${leaving ? ' leaving' : ''}`;
    button.setAttribute('aria-label', `${fish.name}. Catch costs ${fish.cost} AP. Leaves after ${fish.turns} other ${fish.turns === 1 ? 'Catch' : 'Catches'}.`);
    button.append(textNode('span','name',fish.name), fishIcon(fish.kind), textNode('span','badge',leaving ? 'Leaving' : 'Lingering'), textNode('span','cost',`Catch · ${fish.cost} AP`));
    button.onclick = () => dispatch({type: 'catch', id: fish.id});
    slot.append(button, textNode('p','timer',`Leaves after ${fish.turns} other ${fish.turns === 1 ? 'Catch' : 'Catches'}`));
    return slot;
  }));
  el('message').textContent = message;
  el('leave').hidden = !river;
  el('resume').hidden = el('farmWork').hidden = river;
  el('farmWork').disabled = state.ap < 1;
  el('inventory').textContent = `Silver Minnow × ${state.inventory.minnow} · Blue Eel × ${state.inventory.eel}`;
  el('log').replaceChildren(...state.log.map(text => textNode('li','',text)));
  el('comparison').hidden = !attempts.length;
  el('attempts').replaceChildren(...attempts.map(a => {
    const card = document.createElement('div'); card.className = 'attempt';
    card.append(textNode('strong','',model.scenarios[a.scenario].name), textNode('div','',`Order: ${a.catches.join(' → ') || 'No Catch'}`),
      textNode('div','',`Kept: ${a.inventory.minnow} Silver Minnow, ${a.inventory.eel} Blue Eel · ${a.ap} AP left`),
      textNode('div','',`Missed: ${a.left.join(', ') || 'None'}`));
    return card;
  }));
}
for (const source of ['character','rod']) el(source).onclick = () => dispatch({type: 'select', source});
for (const type of ['leave','resume','farmWork']) el(type).onclick = () => dispatch({type});
el('retry').onclick = () => restart(state.scenario);
for (const scenario of ['priority','choice']) el(scenario).onclick = () => restart(scenario);
render();
