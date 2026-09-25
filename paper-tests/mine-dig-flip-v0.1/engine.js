/* Isolated paper-test model. Not the runtime Mine contract. */
(function (root) {
  'use strict';
  function create(random = Math.random, focus = false) {
    const deck = ['ore', 'ore', 'empty', 'empty', 'empty', 'depth'];
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    if (focus) {
      const oreIndex = deck.indexOf('ore');
      [deck[0], deck[oreIndex]] = [deck[oreIndex], deck[0]];
    }
    return {
      day: 1, ap: focus ? 2 : 6, depth: 1, ore: 0, place: 'mine', completed: false,
      pass: 1, batch: 0, reviewIds: [], selected: [],
      cards: deck.map((kind, id) => ({ id, kind, revealed: focus && id === 0, spent: false })),
      known: focus ? ['Exposed Ore'] : [],
      log: [focus ? 'Bắt đầu tình huống 2 AP: đã lộ một nguồn, chưa tìm thấy lối xuống.' : 'Vào tầng mẫu: 6 AP, 6 ô; 3 ô đầu đang hiện.']
    };
  }
  function visibleIds(s) {
    if (s.place !== 'mine' || s.completed) return [];
    return s.pass === 2 ? s.reviewIds : [0, 1, 2].map(n => n + s.batch * 3);
  }
  function view(s) {
    return visibleIds(s).map(id => {
      const c = s.cards[id];
      return { id, revealed: c.revealed, spent: c.spent, kind: c.revealed ? c.kind : 'hidden' };
    });
  }
  function canNext(s) {
    return s.place === 'mine' && !s.completed && s.pass === 1 &&
      visibleIds(s).every(id => s.cards[id].revealed);
  }
  function act(s, action) {
    const fail = message => ({ ok: false, state: s, message });
    const n = JSON.parse(JSON.stringify(s));
    let message;
    const remember = name => { if (!n.known.includes(name)) n.known.push(name); };
    if (action.type === 'select') {
      if (s.place !== 'mine' || s.completed || !['character', 'pickaxe'].includes(action.source)) return fail('Không thể chọn nguồn lúc này.');
      n.selected = n.selected.includes(action.source) ? n.selected.filter(x => x !== action.source) : [...n.selected, action.source];
      return { ok: true, state: n, message: 'Đã đổi nguồn; chưa trả AP.' };
    }
    if (action.type === 'dig' || action.type === 'extract' || action.type === 'descend') {
      if (!visibleIds(s).includes(action.id)) return fail('Ô này không nằm trên bàn hiện tại.');
      const c = n.cards[action.id];
      if (!s.selected.includes('character')) return fail('Chọn Character trước.');
      if (action.type !== 'descend' && !s.selected.includes('pickaxe')) return fail('Ghép thêm Pickaxe.');
      if (action.type === 'dig') {
        if (c.revealed) return fail('Ô đã mở; không đào lại.');
        if (s.ap < 1) return fail('Cần 1 AP để đào. Có thể trở về Farm.');
        n.ap--; c.revealed = true;
        const result = { ore: 'Exposed Ore — chưa có Ore trong túi', empty: 'đá đã dọn, không phát hiện thêm', depth: 'lối xuống — Depth chưa đổi' }[c.kind];
        message = `Đào ô ${c.id + 1}: −1 AP, lộ ${result}.`;
        if (c.kind === 'ore') remember('Exposed Ore');
      } else if (action.type === 'extract') {
        if (!c.revealed || c.kind !== 'ore' || c.spent) return fail('Nguồn không thể khai thác.');
        if (s.ap < 1) return fail('Cần 1 AP để Extract. Có thể trở về Farm.');
        n.ap--; n.ore++; c.spent = true; remember('Ore');
        message = `Extract ô ${c.id + 1}: −1 AP, nhận 1 Ore; nguồn spent, Depth giữ nguyên.`;
      } else {
        if (!c.revealed || c.kind !== 'depth') return fail('Chưa có lối xuống tại ô này.');
        n.depth++; n.completed = true; n.place = 'finish';
        message = 'Xuống tầng: commit 0 AP, Depth +1. Kết thúc tầng mẫu; chưa sinh tầng mới.';
      }
      n.selected = [];
    } else if (action.type === 'next') {
      if (!canNext(s)) return fail('Cần đào hết nhóm đang hiện; vòng quay lại không có nhóm mới.');
      n.selected = [];
      if (s.batch === 0) {
        n.batch = 1; message = 'Sang nhóm 2: không mất AP; nhóm cũ rời bàn, trạng thái được giữ.';
      } else {
        n.pass = 2;
        n.reviewIds = n.cards.filter(c => c.kind === 'depth' || (c.kind === 'ore' && !c.spent)).map(c => c.id);
        message = 'Quay lại một vòng: hiện ngửa các nguồn còn lại và lối xuống. Đây là nhóm cuối, không rút lại.';
      }
    } else if (action.type === 'leave') {
      if (!['mine', 'finish'].includes(s.place)) return fail('Đã ở Farm.');
      n.place = 'farm'; n.selected = []; message = `Về Farm: giữ ${n.ap} AP và ${n.ore} Ore; trạng thái tầng được lưu.`;
    } else if (action.type === 'resume') {
      if (s.place !== 'farm' || s.completed) return fail('Không thể vào lại tầng đã hoàn tất.');
      n.place = 'mine'; n.selected = []; message = 'Trở lại đúng nhóm và trạng thái đã để lại; không xáo tầng.';
    } else if (action.type === 'sleep') {
      if (s.place !== 'farm') return fail('Về Farm trước khi Sleep.');
      n.day++; n.ap = 6; n.selected = []; message = 'Sleep: ngày mới có 6 AP; Mine không hồi nguồn hoặc đặt lại vòng quay lại.';
    } else if (action.type === 'farmWork') {
      if (s.place !== 'farm' || s.ap < 1) return fail('Cần ở Farm và còn 1 AP.');
      n.ap--; message = 'Dành 1 AP cho công việc Farm (đại diện chi phí cơ hội; chưa mô phỏng crop).';
    } else return fail('Hành động không hợp lệ.');
    n.log.push(message);
    return { ok: true, state: n, message };
  }
  const api = { create, visibleIds, view, canNext, act };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MineTrial = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
