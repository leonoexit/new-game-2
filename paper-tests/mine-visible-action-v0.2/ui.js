'use strict';
const model = window.MineTrial;
let state = model.create();
const el = id => document.getElementById(id);
function dispatch(action) {
  const result = model.act(state, action); state = result.state; render(result.message);
}
function render(message = state.log[state.log.length - 1]) {
  el('stats').replaceChildren(...[`Ngày ${state.day}`, `${state.ap} AP`, `Depth ${state.depth}`, `${state.ore} Ore`].map(text => {
    const span = document.createElement('span'); span.textContent = text; return span;
  }));
  const mining = state.place === 'mine';
  el('stage').textContent = state.place === 'farm' ? 'Đã về Farm' : state.completed ? 'Đã xuống tầng · Hoàn tất mẫu' : `Trên bàn · Còn ${state.cards.length - state.cursor} lá phía sau`;
  el('context').textContent = state.place === 'farm' ? 'Giữ các đối tượng chưa xử lý. Dùng công còn lại hoặc Sleep rồi trở lại.' : state.completed ? 'Depth đã tăng 1. Bản thử dừng ở đây, chưa tạo tầng kế tiếp.' : 'Bạn đã thấy việc cần làm. Chọn Character + Pickaxe, rồi chạm quặng hoặc đá chắn. Xử lý xong mới lộ lá kế tiếp tại ô đó.';
  el('sources').hidden = !mining;
  for (const source of ['character', 'pickaxe']) el(source).setAttribute('aria-pressed', String(state.selected.includes(source)));
  el('board').replaceChildren(...model.view(state).map(card => {
    const b = document.createElement('button');
    const info = card ? {
      ore: ['Exposed Ore', '◆', 'Khai thác · 1 AP', state.cursor < state.cards.length ? '+1 Ore · lộ lá kế' : '+1 Ore · dọn ô', 'extract'],
      rock: ['Đá chắn', '▨', 'Phá đá · 1 AP', state.cursor < state.cards.length ? 'Dọn ô · lộ lá kế' : 'Dọn ô · hết lá chờ', 'clear'],
      depth: ['Lối xuống', '↓', 'Xuống tầng · 0 AP', 'Depth +1 · kết thúc', 'descend']
    }[card.kind] : ['Ô đã dọn', '·', 'Không còn lá chờ', '', null];
    b.className = `card ${card ? card.kind : 'spent'}`;
    b.setAttribute('aria-label', `${info[0]}. ${info[2]}. ${info[3]}`);
    for (const [className, text] of [['name', info[0]], ['symbol', info[1]], ['cost', info[2]], ['cost', info[3]]]) {
      const span = document.createElement('span'); span.className = className; span.textContent = text; b.append(span);
    }
    b.disabled = !info[4];
    if (info[4]) b.onclick = () => dispatch({type: info[4], id: card.id});
    return b;
  }));
  el('message').textContent = message;
  el('leave').hidden = state.place === 'farm';
  el('resume').hidden = state.place !== 'farm' || state.completed;
  el('farmWork').hidden = el('sleep').hidden = state.place !== 'farm';
  el('farmWork').disabled = state.ap < 1;
  el('log').replaceChildren(...state.log.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
}
for (const source of ['character', 'pickaxe']) el(source).onclick = () => dispatch({type: 'select', source});
for (const type of ['leave', 'resume', 'farmWork', 'sleep']) el(type).onclick = () => dispatch({type});
el('newRun').onclick = () => { state = model.create(); render(); };
el('focusRun').onclick = () => { state = model.create(Math.random, true); render(); };
render();
