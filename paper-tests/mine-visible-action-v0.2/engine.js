/* Experiment: visible targets; resolving one reveals its replacement. */
(function (root) {
  'use strict';
  function shuffle(list, random) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }
  function create(random = Math.random, focus = false) {
    const material = shuffle(['ore', 'ore', 'rock', 'rock', 'rock'], random);
    if (focus) {
      const index = material.indexOf('ore');
      [material[0], material[index]] = [material[index], material[0]];
    }
    const deck = [...material.slice(0, 3), ...shuffle([...material.slice(3), 'depth'], random)];
    return {
      day: 1, ap: focus ? 2 : 6, depth: 1, ore: 0, place: 'mine', completed: false,
      slots: [0, 1, 2], cursor: 3, selected: [],
      cards: deck.map((kind, id) => ({ id, kind, spent: false })),
      known: deck.slice(0, 3).includes('ore') ? ['Exposed Ore'] : [],
      log: [focus ? 'Tình huống 2 AP: có nguồn quặng nhìn thấy, lối xuống còn phía sau.' : 'Vào tầng: 3 đối tượng đã hiện, không mất AP để xem.']
    };
  }
  function visibleIds(s) {
    return s.place === 'mine' && !s.completed ? s.slots.filter(id => id !== null) : [];
  }
  function view(s) {
    return s.place === 'mine' && !s.completed ? s.slots.map(id => id === null ? null : {
      id, kind: s.cards[id].kind
    }) : [];
  }
  function act(s, action) {
    const fail = message => ({ ok: false, state: s, message });
    const n = JSON.parse(JSON.stringify(s));
    const remember = name => { if (!n.known.includes(name)) n.known.push(name); };
    let message;
    if (action.type === 'select') {
      if (s.place !== 'mine' || s.completed || !['character', 'pickaxe'].includes(action.source)) return fail('Không thể chọn nguồn lúc này.');
      n.selected = n.selected.includes(action.source) ? n.selected.filter(x => x !== action.source) : [...n.selected, action.source];
      return { ok: true, state: n, message: 'Đã đổi nguồn; chưa trả AP.' };
    }
    if (['extract', 'clear', 'descend'].includes(action.type)) {
      if (!visibleIds(s).includes(action.id)) return fail('Đối tượng không có trên bàn hiện tại.');
      const c = n.cards[action.id];
      const required = {extract: 'ore', clear: 'rock', descend: 'depth'}[action.type];
      if (c.kind !== required || c.spent) return fail('Hành động không hợp lệ với đối tượng này.');
      if (!s.selected.includes('character')) return fail('Chọn Character trước.');
      if (action.type === 'descend') {
        n.depth++; n.completed = true; n.place = 'finish';
        message = 'Xuống tầng: commit 0 AP, Depth +1. Hoàn tất tầng mẫu.';
      } else {
        if (!s.selected.includes('pickaxe')) return fail('Ghép thêm Pickaxe.');
        if (s.ap < 1) return fail('Cần 1 AP để xử lý đối tượng. Có thể về Farm.');
        n.ap--; c.spent = true;
        if (action.type === 'extract') {
          n.ore++; remember('Ore');
          message = 'Khai thác Exposed Ore: −1 AP, nhận 1 Ore.';
        } else message = 'Phá đá chắn: −1 AP, dọn đối tượng khỏi ô; không nhận Item.';
        const slot = n.slots.indexOf(action.id);
        if (n.cursor < n.cards.length) {
          const next = n.cards[n.cursor++];
          n.slots[slot] = next.id;
          const label = {ore: 'Exposed Ore', rock: 'đá chắn', depth: 'lối xuống'}[next.kind];
          if (next.kind === 'ore') remember('Exposed Ore');
          message += ` Ô vừa trống lộ ${label}, không thu thêm AP.`;
        } else {
          n.slots[slot] = null;
          message += ' Không còn lá chờ; ô này đã dọn xong.';
        }
      }
      n.selected = [];
    } else if (action.type === 'leave') {
      if (!['mine', 'finish'].includes(s.place)) return fail('Đã ở Farm.');
      n.place = 'farm'; n.selected = []; message = `Về Farm: giữ ${n.ap} AP và ${n.ore} Ore, giữ các đối tượng chưa xử lý.`;
    } else if (action.type === 'resume') {
      if (s.place !== 'farm' || s.completed) return fail('Không thể trở lại tầng đã hoàn tất.');
      n.place = 'mine'; n.selected = []; message = 'Trở lại đúng bàn và phần bài còn lại; không xáo lại.';
    } else if (action.type === 'sleep') {
      if (s.place !== 'farm') return fail('Về Farm trước khi Sleep.');
      n.day++; n.ap = 6; n.selected = []; message = 'Ngày mới: 6 AP. Giữ tiến độ Mine, không hồi nguồn.';
    } else if (action.type === 'farmWork') {
      if (s.place !== 'farm' || s.ap < 1) return fail('Cần ở Farm và có 1 AP.');
      n.ap--; message = 'Dành 1 AP cho công việc Farm (chỉ mô phỏng chi phí cơ hội).';
    } else return fail('Không có thao tác lật hoặc đổi nhóm miễn phí trong bản thử này.');
    n.log.push(message);
    return { ok: true, state: n, message };
  }
  const api = {create, visibleIds, view, act};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MineTrial = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
