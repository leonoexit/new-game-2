const DATA_URL = './card-register-data.json';
const FEEDBACK_KEY = 'little-valley-cards-register-feedback-v1';
const root = document.querySelector('#register-app');
const labels = ['Identity', 'Type', 'State', 'Action', 'Description', 'Belongs to', 'Appears when', 'Source / destination', 'Transformation / result', 'State notes (dev)', 'Encyclopedia', 'Decision status', 'Open questions', 'References', 'Base identity'];
const issues = ['Wrong image', 'Wrong order / state', 'Image fails to load', 'Hard to recognize', 'Image missing', 'Other'];
const collator = new Intl.Collator('en', { sensitivity: 'base', numeric: true });
let data;
let feedback = {};
let selected = null;
const view = { search: '', category: '', state: '', art: '', feedback: '', sort: 'row', descending: false };

function esc(value) { return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;'); }
function normal(value) { return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('đ', 'd').replaceAll('Đ', 'D').toLowerCase(); }
function category(card) { return card.values[1].split(/[·/;]/)[0].trim().replace(/ card$/i, '') || 'Unclassified'; }
function feedbackFor(card) { return feedback[card.id] || null; }
function visibleCards() {
  const query = normal(view.search.trim());
  const cards = data.cards.filter(card => {
    if (query && !normal([card.row, ...card.values].join(' ')).includes(query)) return false;
    if (view.category && category(card) !== view.category) return false;
    if (view.state && (view.state === 'none' ? !!card.values[2] : card.values[2] !== view.state)) return false;
    if (view.art === 'with' && !card.art.length) return false;
    if (view.art === 'without' && card.art.length) return false;
    if (view.feedback === 'with' && !feedbackFor(card)) return false;
    if (view.feedback === 'without' && feedbackFor(card)) return false;
    return true;
  });
  const fieldIndex = { identity: 0, type: 1, state: 2, belongs: 5, decision: 11, base: 14 }[view.sort];
  cards.sort((a, b) => (fieldIndex === undefined ? a.row - b.row : collator.compare(a.values[fieldIndex], b.values[fieldIndex]) || a.row - b.row) * (view.descending ? -1 : 1));
  return cards;
}
function readFeedback() {
  try {
    const parsed = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || '{}');
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) feedback = parsed;
  } catch { feedback = {}; }
}
function saveFeedback() { localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback)); }
function categoryOptions() {
  const values = [...new Set(data.cards.map(category))].sort(collator.compare);
  return values.map(value => `<option value="${esc(value)}" ${view.category === value ? 'selected' : ''}>${esc(value)}</option>`).join('');
}
function stateOptions() {
  const values = [...new Set(data.cards.map(card => card.values[2]).filter(Boolean))].sort(collator.compare);
  return values.map(value => `<option value="${esc(value)}" ${view.state === value ? 'selected' : ''}>${esc(value)}</option>`).join('');
}
function listRow(card) {
  const art = card.art[0];
  return `<tr class="card-row ${card.id === selected ? 'active' : ''}" data-card="${esc(card.id)}" tabindex="0" aria-label="Open ${esc(card.values[0])}, workbook row ${card.row}" aria-selected="${card.id === selected}">
    <td><div class="identity-cell"><span class="thumb">${art ? `<img src="${esc(art.path)}" alt="" loading="lazy">` : '◇'}</span><span><span class="identity-name">${esc(card.values[0])}</span><span class="secondary">Excel row ${card.row}</span></span></div></td>
    <td class="type-cell">${esc(card.values[1] || '—')}</td><td class="belongs-cell belongs-col">${esc(card.values[5] || '—')}</td>
    <td><span class="chip ${art ? '' : 'missing'}">${art ? `${card.art.length} image${card.art.length > 1 ? 's' : ''}` : 'Unassigned'}</span></td>
    <td>${feedbackFor(card) ? '<span class="chip issue">Feedback</span>' : '—'}</td>
  </tr>`;
}
function renderList() {
  const cards = visibleCards();
  document.querySelector('#list-count').textContent = `${cards.length} / ${data.cards.length} entries`;
  document.querySelector('#card-rows').innerHTML = cards.length ? cards.map(listRow).join('') : '<tr><td colspan="5" class="empty-list">No cards match these filters.</td></tr>';
  document.querySelector('#feedback-count').textContent = `${Object.keys(feedback).filter(id => data.cards.some(card => card.id === id)).length} saved feedback item(s)`;
}
function artMarkup(card) {
  if (!card.art.length) return '<div class="art-empty">No runtime image assigned to this card. This is a content gap, not a broken file.</div>';
  return `<div class="art-grid">${card.art.map(variant => `<figure class="art-card"><div class="art-frame"><img src="${esc(variant.path)}" alt="${esc(card.values[0])}: ${esc(variant.label)}" data-art-path="${esc(variant.path)}"><span class="image-error" hidden>Image failed to load</span></div><figcaption>${esc(variant.label)}<code>${esc(variant.path.split('/').at(-1))}</code></figcaption></figure>`).join('')}</div>`;
}
function detailMarkup(card) {
  const saved = feedbackFor(card) || {};
  return `<div class="detail-head"><span class="kicker">ENTRY ${String(data.cards.indexOf(card) + 1).padStart(2, '0')} / ${data.cards.length} · EXCEL ROW ${card.row}</span><div class="detail-heading"><h2>${esc(card.values[0])}</h2><span class="chip">${esc(category(card))}</span></div><div class="count">${esc(card.values[1] || 'No type specified')} · Gameplay identity: ${esc(card.values[14])}</div></div>
    <div class="detail-body"><h3 class="section-title">Runtime artwork</h3>${artMarkup(card)}
      <h3 class="section-title field-section-title">Full-card fields</h3>
      <dl class="field-list">${data.headers.slice(0, 5).map((header, index) => `<div class="field card-field"><dt title="${esc(header)}">${esc(labels[index])}</dt><dd class="${card.values[index] ? '' : 'no-data'}">${card.values[index] ? esc(card.values[index]) : 'Copy pending'}</dd></div>`).join('')}</dl>
      <h3 class="section-title field-section-title">Development fields</h3>
      <dl class="field-list">${data.headers.slice(5).map((header, offset) => { const index = offset + 5; return `<div class="field"><dt title="${esc(header)}">${esc(labels[index])}</dt><dd class="${card.values[index] ? '' : 'no-data'}">${card.values[index] ? esc(card.values[index]) : 'Not specified'}</dd></div>`; }).join('')}</dl>
      <p class="source-note">Source: ${esc(data.source)} · ${esc(data.sheet)} · row ${card.row}. Original workbook text is preserved; field labels above are navigation labels.</p></div>
    <section class="feedback"><h3 class="section-title">Image feedback</h3><p class="feedback-intro">Saved only in this browser. Copy a report into our chat or export the JSON when you want me to review it.</p>
      <form id="feedback-form" class="feedback-form">
        <label>Issue <select name="issue" required><option value="">Select an issue</option>${issues.map(issue => `<option value="${esc(issue)}" ${saved.issue === issue ? 'selected' : ''}>${esc(issue)}</option>`).join('')}</select></label>
        <label>Image / state <select name="variant"><option value="">Whole card / unassigned image</option>${card.art.map(variant => `<option value="${esc(variant.path)}" ${saved.variant === variant.path ? 'selected' : ''}>${esc(variant.label)} · ${esc(variant.path.split('/').at(-1))}</option>`).join('')}</select></label>
        <label>What looks wrong? <textarea name="note" placeholder="For example: the watered and growing images appear swapped.">${esc(saved.note || '')}</textarea></label>
        <div class="feedback-actions"><button class="primary-button" type="submit">Save feedback</button><button class="ghost-button" type="button" id="copy-report">Copy card report</button>${saved.issue ? '<button class="ghost-button" type="button" id="delete-feedback">Delete feedback</button>' : ''}<span id="feedback-status" class="feedback-status" aria-live="polite"></span></div>
      </form>
    </section>`;
}
function renderDetail() {
  const card = data.cards.find(item => item.id === selected);
  document.querySelector('#detail').innerHTML = card ? detailMarkup(card) : '<div class="detail-body"><h2>Select a card</h2><p class="count">Choose a row to read all workbook fields and inspect its artwork.</p></div>';
  document.querySelectorAll('.art-card img').forEach(img => {
    img.addEventListener('error', () => { img.hidden = true; img.nextElementSibling.hidden = false; img.closest('.art-frame').dataset.broken = 'true'; });
  });
}
function selectCard(id) {
  if (!data.cards.some(card => card.id === id)) return;
  selected = id;
  history.replaceState(null, '', `#${id}`);
  renderList(); renderDetail();
  if (window.matchMedia('(max-width: 1050px)').matches) document.querySelector('#detail').scrollIntoView({ block: 'start', behavior: 'smooth' });
}
function report(card) {
  const saved = feedbackFor(card);
  if (!saved) return `Little Valley Cards image review — ${card.values[0]} (Excel row ${card.row})\nNo feedback saved yet.`;
  return `Little Valley Cards image feedback\nRegister entry: ${card.values[0]}\nGameplay identity: ${card.values[14]}\nState: ${card.values[2] || '(no named state)'}\nExcel row: ${card.row}\nType: ${card.values[1]}\nIssue: ${saved.issue}\nImage/state: ${saved.variant || 'Whole card / unassigned'}\nDetails: ${saved.note || '(none)'}\nSource workbook: ${data.source}`;
}
function exportFeedback() {
  const entries = data.cards.filter(card => feedbackFor(card)).map(card => ({ row: card.row, registerLabel: card.values[0], baseIdentity: card.values[14], state: card.values[2], type: card.values[1], ...feedbackFor(card) }));
  const payload = { source: data.source, sourceSha256: data.sourceSha256, exportedAt: new Date().toISOString(), entries };
  const blob = new Blob([JSON.stringify(payload, null, 2) + '\n'], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = 'little-valley-card-image-feedback.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function initEvents() {
  document.querySelector('#search').addEventListener('input', event => { view.search = event.target.value; renderList(); });
  for (const [id, key] of [['category', 'category'], ['state-filter', 'state'], ['art-filter', 'art'], ['feedback-filter', 'feedback'], ['sort', 'sort']]) {
    document.getElementById(id).addEventListener('change', event => { view[key] = event.target.value; renderList(); });
  }
  document.querySelector('#reverse').addEventListener('click', event => { view.descending = !view.descending; event.target.textContent = view.descending ? '↓ Descending' : '↑ Ascending'; renderList(); });
  document.querySelector('#reset-filters').addEventListener('click', () => {
    Object.assign(view, { search: '', category: '', state: '', art: '', feedback: '', sort: 'row', descending: false });
    for (const id of ['search', 'category', 'state-filter', 'art-filter', 'feedback-filter']) document.getElementById(id).value = '';
    document.querySelector('#sort').value = 'row'; document.querySelector('#reverse').textContent = '↑ Ascending'; renderList();
  });
  document.querySelector('#card-rows').addEventListener('click', event => { const row = event.target.closest('[data-card]'); if (row) selectCard(row.dataset.card); });
  document.querySelector('#card-rows').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { const row = event.target.closest('[data-card]'); if (row) { event.preventDefault(); selectCard(row.dataset.card); } } });
  document.querySelector('#export-feedback').addEventListener('click', exportFeedback);
  document.querySelector('#detail').addEventListener('submit', event => {
    if (event.target.id !== 'feedback-form') return;
    event.preventDefault();
    const card = data.cards.find(item => item.id === selected);
    const form = new FormData(event.target);
    const issue = String(form.get('issue') || '');
    if (!issues.includes(issue)) return;
    feedback[card.id] = { issue, variant: String(form.get('variant') || ''), note: String(form.get('note') || '').trim(), updatedAt: new Date().toISOString() };
    saveFeedback(); renderList(); renderDetail(); document.querySelector('#feedback-status').textContent = 'Saved in this browser.';
  });
  document.querySelector('#detail').addEventListener('click', async event => {
    const card = data.cards.find(item => item.id === selected);
    if (!card) return;
    if (event.target.id === 'delete-feedback') { delete feedback[card.id]; saveFeedback(); renderList(); renderDetail(); return; }
    if (event.target.id === 'copy-report') {
      const status = document.querySelector('#feedback-status');
      try { await navigator.clipboard.writeText(report(card)); status.textContent = 'Report copied. Paste it into our chat.'; }
      catch { status.textContent = 'Clipboard unavailable. Use Export feedback JSON.'; }
    }
  });
}
async function main() {
  try {
    const response = await fetch(DATA_URL, { cache: 'no-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    data = await response.json();
    if (!Array.isArray(data.cards) || data.headers?.join('|') !== labels.join('|')) throw new Error('Unexpected register data format');
    readFeedback();
    root.innerHTML = `<div class="workspace"><section class="panel catalog"><div class="catalog-head"><div class="catalog-title"><div><span class="kicker">WORKBOOK VIEW / V0</span><h2>Browse all entries</h2></div><span id="list-count" class="count"></span></div>
      <div class="controls"><input id="search" type="search" placeholder="Search every workbook field…" aria-label="Search cards">
        <select id="category" aria-label="Filter category"><option value="">All categories</option>${categoryOptions()}</select>
        <select id="state-filter" aria-label="Filter state"><option value="">Any state</option><option value="none">No named state</option>${stateOptions()}</select>
        <select id="art-filter" aria-label="Filter runtime art"><option value="">Any art status</option><option value="with">With runtime image</option><option value="without">No runtime image</option></select>
        <select id="feedback-filter" aria-label="Filter feedback"><option value="">Any feedback</option><option value="with">With feedback</option><option value="without">Without feedback</option></select></div>
      <div class="sortline"><label for="sort">Sort by</label><select id="sort"><option value="row">Excel row</option><option value="identity">Identity</option><option value="base">Base identity</option><option value="type">Type</option><option value="state">State</option><option value="belongs">Belongs to</option><option value="decision">Decision status</option></select><button id="reverse">↑ Ascending</button><button id="reset-filters">Clear filters</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Card</th><th>Type</th><th class="belongs-col">Belongs to</th><th>Art</th><th>Note</th></tr></thead><tbody id="card-rows"></tbody></table></div>
      <div class="export-bar"><span id="feedback-count"></span><button id="export-feedback" class="ghost-button">Export feedback JSON ↓</button></div></section><aside class="panel detail" id="detail"></aside></div>`;
    initEvents();
    const requested = location.hash.slice(1);
    selected = data.cards.some(card => card.id === requested) ? requested : data.cards[0]?.id || null;
    renderList(); renderDetail();
  } catch (error) { root.innerHTML = `<p class="error">Could not load the card register. Serve the <code>prototype</code> directory over HTTP and regenerate the export. (${esc(error.message)})</p>`; }
}
main();
