'use strict';
const model = window.MineTrial;
let state = model.create();
const el = id => document.getElementById(id);
function dispatch(action) {
  const result = model.act(state, action);
  state = result.state;
  render(result.message);
}
function render(message = state.log[state.log.length - 1]) {
  el('stats').replaceChildren(...[`Ngày ${state.day}`, `${state.ap} AP`, `Depth ${state.depth}`, `${state.ore} Ore`].map(text => {
    const span = document.createElement('span'); span.textContent = text; return span;
  }));
  const mining = state.place === 'mine';
  el('stage').textContent = state.place === 'farm' ? 'Đã về Farm' : state.completed ? 'Đã xuống tầng · Hoàn tất mẫu' : state.pass === 2 ? 'Vòng quay lại · Nhóm cuối' : `Nhóm ${state.batch + 1} / 2`;
  el('context').textContent = state.place === 'farm' ? 'Dùng công còn lại cho Farm, hoặc Sleep để tiếp tục ngày sau. Tầng không bị xáo lại.' : state.completed ? 'Depth đã tăng 1. Bản thử dừng ở đây, chưa tạo tầng kế tiếp.' : state.pass === 2 ? 'Những cơ hội đã thấy còn ở đây. Chọn lấy quặng, xuống tầng hoặc trở về.' : 'Chọn Character + Pickaxe rồi chạm ô để đào hoặc khai thác. Character có thể dùng lối xuống đã lộ.';
  el('sources').hidden = !mining;
  for (const source of ['character', 'pickaxe']) el(source).setAttribute('aria-pressed', String(state.selected.includes(source)));
  el('board').replaceChildren(...model.view(state).map(card => {
    const b = document.createElement('button');
    const kind = card.spent ? 'spent' : card.kind;
    const info = {
      hidden: ['Đá chưa khai mở', '▨', 'Dig · 1 AP', 'dig'],
      ore: ['Exposed Ore', '◆', 'Extract · 1 AP', 'extract'],
      empty: ['Đá đã dọn', '·', 'Không phát hiện thêm', null],
      spent: ['Nguồn đã khai thác', '◇', 'Đã nhận Ore', null],
      depth: ['Lối xuống', '↓', 'Depth +1 · 0 AP', 'descend']
    }[kind];
    b.className = `card ${kind}`;
    b.setAttribute('aria-label', `Ô ${card.id + 1}: ${info[0]}. ${info[2]}`);
    for (const [className, text] of [['name', info[0]], ['symbol', info[1]], ['cost', info[2]]]) {
      const span = document.createElement('span'); span.className = className; span.textContent = text; b.append(span);
    }
    b.disabled = !info[3];
    if (info[3]) b.onclick = () => dispatch({type: info[3], id: card.id});
    return b;
  }));
  el('message').textContent = message;
  el('next').hidden = !mining || state.pass === 2;
  el('next').disabled = !model.canNext(state);
  el('next').textContent = state.batch === 0 ? 'Sang nhóm 2 · 0 AP' : 'Quay lại một vòng · 0 AP';
  el('leave').hidden = state.place === 'farm';
  el('resume').hidden = state.place !== 'farm' || state.completed;
  el('farmWork').hidden = el('sleep').hidden = state.place !== 'farm';
  el('farmWork').disabled = state.ap < 1;
  el('log').replaceChildren(...state.log.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
}
for (const source of ['character', 'pickaxe']) el(source).onclick = () => dispatch({ type: 'select', source });
for (const type of ['next', 'leave', 'resume', 'farmWork', 'sleep']) el(type).onclick = () => dispatch({ type });
el('newRun').onclick = () => { state = model.create(); render(); };
el('focusRun').onclick = () => { state = model.create(Math.random, true); render(); };
render();
