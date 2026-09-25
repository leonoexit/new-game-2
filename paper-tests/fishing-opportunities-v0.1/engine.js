/* Fishing opportunity study. One successful Catch advances other fish once. */
(function (root) {
  'use strict';
  const species = {
    minnow: {name: 'Silver Minnow', cost: 1},
    eel: {name: 'Blue Eel', cost: 2}
  };
  const scenarios = {
    priority: {name: 'One Last Chance', first: [['minnow', 1], ['eel', 2], ['minnow', 3]], upcoming: [['eel', 2], ['eel', 2], ['eel', 2]]},
    choice: {name: 'Two Departures', first: [['minnow', 1], ['eel', 1], ['minnow', 3]], upcoming: [['minnow', 2], ['minnow', 3], ['minnow', 2]]}
  };
  function create(scenario = 'priority') {
    if (!scenarios[scenario]) throw new Error('Unknown scenario');
    const upcoming = scenarios[scenario].upcoming;
    const cards = [...scenarios[scenario].first, ...upcoming].map(([kind, turns], id) => ({
      id, kind, turns, status: id < 3 ? 'visible' : 'waiting'
    }));
    return {
      scenario, ap: 4, weather: 'Rain', place: 'river', selected: [], slots: [0, 1, 2],
      cards, cursor: 3, catchCount: 0, inventory: {minnow: 0, eel: 0},
      known: ['Silver Minnow', 'Blue Eel'],
      log: ['Three fish are visible. Choose a Catch; time does not pass while you decide.'],
      events: []
    };
  }
  function view(s) {
    if (s.place !== 'river') return [];
    return s.slots.map(id => {
      if (id === null) return null;
      const card = s.cards[id];
      return {id, kind: card.kind, turns: card.turns, ...species[card.kind]};
    });
  }
  function act(s, action) {
    const fail = message => ({ok: false, state: s, message});
    const n = JSON.parse(JSON.stringify(s));
    let message;
    if (action.type === 'select') {
      if (s.place !== 'river' || !['character', 'rod'].includes(action.source)) return fail('Choose a source at the river.');
      n.selected = n.selected.includes(action.source) ? n.selected.filter(x => x !== action.source) : [...n.selected, action.source];
      return {ok: true, state: n, message: 'Source selected. No AP spent; fish stay where they are.'};
    }
    if (action.type === 'catch') {
      if (s.place !== 'river' || !s.slots.includes(action.id) || action.id === null) return fail('That fish is no longer available.');
      const fish = n.cards[action.id];
      if (!fish || fish.status !== 'visible') return fail('That fish is no longer available.');
      if (!s.selected.includes('character') || !s.selected.includes('rod')) return fail('Select Character + Fishing Rod first.');
      const info = species[fish.kind];
      if (s.ap < info.cost) return fail(`You need ${info.cost} AP. No fish moved; you can return to Farm.`);
      n.ap -= info.cost; n.inventory[fish.kind]++; n.catchCount++;
      fish.status = 'caught';
      const departed = [];
      // Resolve the chosen fish before advancing only the other existing fish.
      for (let slot = 0; slot < n.slots.length; slot++) {
        const id = n.slots[slot];
        if (id === null) continue;
        if (id === fish.id) { n.slots[slot] = null; continue; }
        const other = n.cards[id];
        other.turns--;
        if (other.turns <= 0) {
          other.status = 'left'; n.slots[slot] = null; departed.push(id);
        }
      }
      const arrived = [];
      // Fill vacancies in slot order. New arrivals do not age on arrival.
      for (let slot = 0; slot < n.slots.length; slot++) {
        if (n.slots[slot] !== null || n.cursor >= n.cards.length) continue;
        const next = n.cards[n.cursor++];
        next.status = 'visible'; n.slots[slot] = next.id; arrived.push(next.id);
        const name = species[next.kind].name;
        if (!n.known.includes(name)) n.known.push(name);
      }
      n.selected = [];
      const loss = departed.length ? ` ${departed.map(id => species[n.cards[id].kind].name).join(' and ')} left.` : ' No other fish left.';
      message = `Caught ${info.name} for ${info.cost} AP.${loss}${arrived.length ? ` ${arrived.length} new fish arrived.` : ''}`;
      n.events.push({caught: fish.id, cost: info.cost, departed, arrived, apLeft: n.ap});
    } else if (action.type === 'leave') {
      if (s.place !== 'river') return fail('You are already at Farm.');
      n.place = 'farm'; n.selected = [];
      message = `Returned to Farm with ${n.ap} AP. Your fish and the river state are saved for this session.`;
    } else if (action.type === 'resume') {
      if (s.place !== 'farm') return fail('You are already at the river.');
      n.place = 'river'; n.selected = [];
      message = 'The same fish are here. No AP restored and no opportunities rerolled.';
    } else if (action.type === 'farmWork') {
      if (s.place !== 'farm' || s.ap < 1) return fail('Farm work requires 1 AP at Farm.');
      n.ap--; message = 'Used 1 AP at Farm. The river is unchanged in this test.';
    } else return fail('This test advances fish only after a successful Catch.');
    n.log.push(message);
    return {ok: true, state: n, message};
  }
  const api = {species, scenarios, create, view, act};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.FishingTrial = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
