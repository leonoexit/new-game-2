const API = '/api/card-register';
const LEGACY_FEEDBACK_KEY = 'little-valley-cards-register-feedback-v1';
const root = document.querySelector('#register-app');
const issues = ['Wrong image', 'Wrong order / state', 'Image fails to load', 'Hard to recognize', 'Image missing', 'Other'];
const collator = new Intl.Collator('en', { sensitivity: 'base', numeric: true });
let data, revision, assets = [], selected = null, mode = 'detail', legacyFeedback = {}, notice = '';
const view = { search: '', category: '', state: '', art: '', feedback: '', sort: 'register', descending: false };
const esc = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const normal = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replaceAll('đ', 'd').replaceAll('Đ', 'D').toLowerCase();
const val = (entry, field) => entry.values[field] || '';
const category = entry => val(entry, 'Type').split(/[·/;]/)[0].trim().replace(/ card$/i, '') || 'Unclassified';
const feedbackFor = entry => entry.feedback || legacyFeedback[entry.id] || null;
const entryFor = id => data.entries.find(entry => entry.id === id);
function readLegacyFeedback() {
  try { legacyFeedback = JSON.parse(localStorage.getItem(LEGACY_FEEDBACK_KEY) || '{}') || {}; } catch { legacyFeedback = {}; }
}
function visibleEntries() {
  const query = normal(view.search.trim());
  const entries = data.entries.filter(entry => {
    if (query && !normal(Object.values(entry.values).join(' ')).includes(query)) return false;
    if (view.category && category(entry) !== view.category) return false;
    if (view.state && (view.state === 'none' ? !!val(entry, 'State') : val(entry, 'State') !== view.state)) return false;
    if (view.art === 'with' && !entry.art.length) return false;
    if (view.art === 'without' && entry.art.length) return false;
    if (view.feedback === 'with' && !feedbackFor(entry)) return false;
    if (view.feedback === 'without' && feedbackFor(entry)) return false;
    return true;
  });
  const field = { identity: 'Identity', base: 'Base identity', type: 'Type', state: 'State', belongs: 'Belongs to', decision: 'Decision status' }[view.sort];
  entries.sort((a, b) => (field ? collator.compare(val(a, field), val(b, field)) || data.entries.indexOf(a) - data.entries.indexOf(b) : data.entries.indexOf(a) - data.entries.indexOf(b)) * (view.descending ? -1 : 1));
  return entries;
}
function options(values, current) { return values.map(value => `<option value="${esc(value)}" ${current === value ? 'selected' : ''}>${esc(value)}</option>`).join(''); }
function selectOptions() {
  document.querySelector('#category').innerHTML = '<option value="">All types</option>' + options([...new Set(data.entries.map(category))].sort(collator.compare), view.category);
  document.querySelector('#state-filter').innerHTML = '<option value="">Any state</option><option value="none">No named state</option>' + options([...new Set(data.entries.map(entry => val(entry, 'State')).filter(Boolean))].sort(collator.compare), view.state);
}
function listRow(entry) {
  const art = entry.art[0];
  return `<tr class="card-row ${entry.id === selected ? 'active' : ''}" data-card="${esc(entry.id)}" tabindex="0" aria-label="Open ${esc(val(entry, 'Identity'))}" aria-selected="${entry.id === selected}">
    <td><div class="identity-cell"><span class="thumb">${art ? `<img src="${esc(art.path)}" alt="" loading="lazy">` : '◇'}</span><span><span class="identity-name">${esc(val(entry, 'Identity'))}</span><span class="secondary">${esc(val(entry, 'State') || 'No named state')}</span></span></div></td>
    <td class="type-cell">${esc(val(entry, 'Type') || '—')}</td><td class="belongs-cell belongs-col">${esc(val(entry, 'Belongs to') || '—')}</td>
    <td><span class="chip ${art ? '' : 'missing'}">${art ? `${entry.art.length} image${entry.art.length > 1 ? 's' : ''}` : 'Unassigned'}</span></td>
    <td>${feedbackFor(entry) ? '<span class="chip issue">Feedback</span>' : '—'}</td></tr>`;
}
function renderList() {
  const entries = visibleEntries();
  document.querySelector('#list-count').textContent = `${entries.length} / ${data.entries.length} entries`;
  document.querySelector('#card-rows').innerHTML = entries.length ? entries.map(listRow).join('') : '<tr><td colspan="5" class="empty-list">No cards match these filters.</td></tr>';
  document.querySelector('#feedback-count').textContent = `${data.entries.filter(entry => feedbackFor(entry)).length} feedback item(s)`;
}
function artMarkup(entry) {
  if (!entry.art.length) return '<div class="art-empty">No runtime image assigned to this card.</div>';
  return `<div class="art-grid">${entry.art.map(variant => `<figure class="art-card"><div class="art-frame"><img src="${esc(variant.path)}" alt="${esc(val(entry, 'Identity'))}: ${esc(variant.label)}"><span class="image-error" hidden>Image failed to load</span></div><figcaption>${esc(variant.label)}<code>${esc(variant.path.split('/').at(-1))}</code></figcaption></figure>`).join('')}</div>`;
}
function fieldList(entry, fields, cardFields) {
  return `<dl class="field-list">${fields.map(field => `<div class="field ${cardFields ? 'card-field' : ''}"><dt>${esc(field)}</dt><dd class="${val(entry, field) ? '' : 'no-data'}">${esc(val(entry, field) || (cardFields ? 'Copy pending' : 'Not specified'))}</dd></div>`).join('')}</dl>`;
}
function detailMarkup(entry) {
  const saved = feedbackFor(entry) || {};
  const local = !entry.feedback && !!legacyFeedback[entry.id];
  return `<div class="detail-head"><span class="kicker">ENTRY ${String(data.entries.indexOf(entry) + 1).padStart(2, '0')} / ${data.entries.length}</span><div class="detail-heading"><h2>${esc(val(entry, 'Identity'))}</h2><span class="chip">${esc(category(entry))}</span></div><div class="count">${esc(val(entry, 'Type'))} · Base identity: ${esc(val(entry, 'Base identity'))}</div><div class="detail-actions"><button class="primary-button" id="edit-entry">Edit entry</button><button class="ghost-button" id="add-state">Add state</button></div></div>
    <div class="detail-body"><h3 class="section-title">Runtime artwork</h3>${artMarkup(entry)}<h3 class="section-title field-section-title">Full-card fields</h3>${fieldList(entry, data.fields.slice(0, 5), true)}<h3 class="section-title field-section-title">Development fields</h3>${fieldList(entry, data.fields.slice(5), false)}<p class="source-note">Source: versioned Card Register JSON in the repo.${entry.legacyWorkbookRow ? ` Migrated from workbook row ${entry.legacyWorkbookRow}.` : ''}</p></div>
    <section class="feedback"><h3 class="section-title">Image feedback</h3><p class="feedback-intro">${local ? 'An older browser-only note was found. Save it to move it into the project.' : 'Saved in the project register. Commit changes to share them.'}</p>
    <form id="feedback-form" class="feedback-form"><label>Issue <select name="issue" required><option value="">Select an issue</option>${options(issues, saved.issue)}</select></label>
    <label>Image / state <select name="variant"><option value="">Whole card / unassigned image</option>${entry.art.map(variant => `<option value="${esc(variant.path)}" ${saved.variant === variant.path ? 'selected' : ''}>${esc(variant.label)} · ${esc(variant.path.split('/').at(-1))}</option>`).join('')}</select></label>
    <label>What looks wrong? <textarea name="note" maxlength="5000" placeholder="For example: the watered and growing images appear swapped.">${esc(saved.note || '')}</textarea></label>
    <div class="feedback-actions"><button class="primary-button" type="submit">Save feedback</button><button class="ghost-button" type="button" id="copy-report">Copy card report</button>${saved.issue ? '<button class="ghost-button" type="button" id="delete-feedback">Clear feedback</button>' : ''}<span id="feedback-status" class="feedback-status" aria-live="polite"></span></div></form></section>`;
}
function fieldInput(field, value) {
  const multiline = ['Description', 'Action', 'State notes (dev)', 'Open questions', 'References', 'Source / destination', 'Transformation / result', 'Encyclopedia'].includes(field);
  const required = ['Identity', 'Type', 'Base identity'].includes(field) ? 'required' : '';
  if (field === 'Type') return `<label class="editor-field">Type<select name="Type" required><option value="">Choose a type</option>${options(data.types, value)}</select></label>`;
  return `<label class="editor-field">${esc(field)}${multiline ? `<textarea name="${esc(field)}" ${required}>${esc(value)}</textarea>` : `<input name="${esc(field)}" value="${esc(value)}" ${required}>`}</label>`;
}
function artRow(variant = { label: '', path: '' }) {
  return `<div class="art-edit-row"><label>Image label <input name="art-label" value="${esc(variant.label)}" placeholder="e.g. Growing"></label><label>Runtime image <select name="art-path"><option value="">Choose an image</option>${assets.map(name => `<option value="./assets/${esc(name)}" ${variant.path === `./assets/${name}` ? 'selected' : ''}>${esc(name)}</option>`).join('')}</select></label><button class="ghost-button remove-art" type="button" aria-label="Remove image">Remove</button></div>`;
}
function editorMarkup(entry, isState) {
  const base = entry ? val(entry, 'Base identity') : '';
  const seed = Object.fromEntries(data.fields.map(field => [field, entry && !isState ? val(entry, field) : '']));
  if (isState && entry) { seed['Base identity'] = base; seed.Type = val(entry, 'Type'); seed['Belongs to'] = val(entry, 'Belongs to'); }
  const title = isState ? `Add state to ${base}` : entry ? `Edit ${val(entry, 'Identity')}` : 'Add card';
  return `<div class="detail-head"><span class="kicker">CARD REGISTER EDITOR</span><h2>${esc(title)}</h2><p class="count">Changes are saved to the versioned JSON file in this repo.</p></div><form id="entry-form" class="detail-body editor-form"><h3 class="section-title">Full-card fields</h3><div class="editor-fields">${data.fields.slice(0, 5).map(field => fieldInput(field, seed[field])).join('')}</div><h3 class="section-title field-section-title">Development fields</h3><div class="editor-fields">${data.fields.slice(5).map(field => fieldInput(field, seed[field])).join('')}</div><h3 class="section-title field-section-title">Runtime artwork</h3><div id="art-rows">${(entry && !isState ? entry.art : []).map(artRow).join('')}</div><button class="ghost-button" type="button" id="add-art">+ Add image</button><div class="editor-actions"><button class="primary-button" type="submit">Save entry</button><button class="ghost-button" type="button" id="cancel-edit">Cancel</button></div><p id="editor-status" class="feedback-status" role="status"></p></form>`;
}
function renderDetail() {
  const entry = entryFor(selected);
  document.querySelector('#detail').innerHTML = mode === 'edit' || mode === 'new' || mode === 'state' ? editorMarkup(mode === 'new' ? null : entry, mode === 'state') : entry ? detailMarkup(entry) : '<div class="detail-body"><h2>Select a card</h2></div>';
  document.querySelectorAll('.art-card img').forEach(img => img.addEventListener('error', () => { img.hidden = true; img.nextElementSibling.hidden = false; }));
  if (notice) { const status = document.querySelector('#editor-status, #feedback-status'); if (status) status.textContent = notice; notice = ''; }
}
function selectEntry(id) { if (!entryFor(id)) return; selected = id; mode = 'detail'; history.replaceState(null, '', `#${id}`); renderList(); renderDetail(); if (matchMedia('(max-width: 1050px)').matches) document.querySelector('#detail').scrollIntoView({ block: 'start', behavior: 'smooth' }); }
function report(entry) { const note = feedbackFor(entry); return `Little Valley Cards image feedback\nRegister entry: ${val(entry, 'Identity')}\nBase identity: ${val(entry, 'Base identity')}\nState: ${val(entry, 'State') || '(none)'}\nType: ${val(entry, 'Type')}\nIssue: ${note?.issue || '(none)'}\nImage/state: ${note?.variant || 'Whole card / unassigned'}\nDetails: ${note?.note || '(none)'}`; }
function exportFeedback() {
  const entries = data.entries.filter(entry => feedbackFor(entry)).map(entry => ({ id: entry.id, identity: val(entry, 'Identity'), baseIdentity: val(entry, 'Base identity'), state: val(entry, 'State'), type: val(entry, 'Type'), ...feedbackFor(entry) }));
  const blob = new Blob([JSON.stringify({ registerRevision: revision, exportedAt: new Date().toISOString(), entries }, null, 2) + '\n'], { type: 'application/json' });
  const url = URL.createObjectURL(blob), link = document.createElement('a'); link.href = url; link.download = 'little-valley-card-image-feedback.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function apiWrite(method, path, payload) {
  const response = await fetch(path, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ revision, ...payload }) });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
  data = result.register; revision = result.revision; selectOptions(); renderList();
  return result;
}
function statusError(error, id) { const target = document.querySelector(id); if (target) target.textContent = error.message; }
function initEvents() {
  document.querySelector('#search').addEventListener('input', event => { view.search = event.target.value; renderList(); });
  for (const [id, key] of [['category', 'category'], ['state-filter', 'state'], ['art-filter', 'art'], ['feedback-filter', 'feedback'], ['sort', 'sort']]) document.getElementById(id).addEventListener('change', event => { view[key] = event.target.value; renderList(); });
  document.querySelector('#reverse').addEventListener('click', event => { view.descending = !view.descending; event.target.textContent = view.descending ? '↓ Descending' : '↑ Ascending'; renderList(); });
  document.querySelector('#reset-filters').addEventListener('click', () => { Object.assign(view, { search: '', category: '', state: '', art: '', feedback: '', sort: 'register', descending: false }); for (const id of ['search', 'category', 'state-filter', 'art-filter', 'feedback-filter']) document.getElementById(id).value = ''; document.querySelector('#sort').value = 'register'; document.querySelector('#reverse').textContent = '↑ Ascending'; renderList(); });
  document.querySelector('#card-rows').addEventListener('click', event => { const row = event.target.closest('[data-card]'); if (row) selectEntry(row.dataset.card); });
  document.querySelector('#card-rows').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { const row = event.target.closest('[data-card]'); if (row) { event.preventDefault(); selectEntry(row.dataset.card); } } });
  document.querySelector('#export-feedback').addEventListener('click', exportFeedback);
  document.querySelector('#add-entry').addEventListener('click', () => { mode = 'new'; renderDetail(); document.querySelector('#detail').scrollIntoView({ block: 'start' }); });
  document.querySelector('#detail').addEventListener('click', async event => {
    const id = event.target.id, entry = entryFor(selected);
    if (id === 'edit-entry') { mode = 'edit'; renderDetail(); }
    if (id === 'add-state') { mode = 'state'; renderDetail(); }
    if (id === 'cancel-edit') { mode = 'detail'; renderDetail(); }
    if (id === 'add-art') document.querySelector('#art-rows').insertAdjacentHTML('beforeend', artRow());
    if (event.target.classList.contains('remove-art')) event.target.closest('.art-edit-row').remove();
    if (id === 'copy-report' && entry) { try { await navigator.clipboard.writeText(report(entry)); document.querySelector('#feedback-status').textContent = 'Report copied.'; } catch { document.querySelector('#feedback-status').textContent = 'Clipboard unavailable; use Export feedback JSON.'; } }
    if (id === 'delete-feedback' && entry) { try { await apiWrite('PUT', `${API}/entries/${encodeURIComponent(entry.id)}/feedback`, { feedback: null }); delete legacyFeedback[entry.id]; localStorage.setItem(LEGACY_FEEDBACK_KEY, JSON.stringify(legacyFeedback)); renderDetail(); } catch (error) { statusError(error, '#feedback-status'); } }
  });
  document.querySelector('#detail').addEventListener('input', event => {
    if (!['new', 'state'].includes(mode) || !event.target.closest('#entry-form')) return;
    const form = event.target.form;
    const identity = form.elements.namedItem('Identity');
    const base = form.elements.namedItem('Base identity');
    const state = form.elements.namedItem('State');
    if (mode === 'new' && event.target === identity && (!base.value || base.dataset.auto === 'true')) {
      base.value = identity.value;
      base.dataset.auto = 'true';
    }
    if (mode === 'state' && (event.target === state || event.target === base) && (!identity.value || identity.dataset.auto === 'true')) {
      identity.value = state.value.trim() ? `${base.value.trim()} (${state.value.trim()})` : '';
      identity.dataset.auto = 'true';
    }
    if (event.target === identity) identity.dataset.auto = 'false';
    if (event.target === base) base.dataset.auto = 'false';
  });
  document.querySelector('#detail').addEventListener('submit', async event => {
    event.preventDefault();
    if (event.target.id === 'entry-form') {
      const form = new FormData(event.target), values = Object.fromEntries(data.fields.map(field => [field, String(form.get(field) || '').trim()]));
      const labels = [...event.target.querySelectorAll('[name="art-label"]')], paths = [...event.target.querySelectorAll('[name="art-path"]')];
      const art = labels.map((label, index) => ({ label: label.value.trim(), path: paths[index].value })).filter(item => item.label || item.path);
      try { const result = await apiWrite(mode === 'edit' ? 'PUT' : 'POST', mode === 'edit' ? `${API}/entries/${encodeURIComponent(selected)}` : `${API}/entries`, { values, art, ...(mode === 'state' ? { afterId: selected } : {}) }); selected = result.entryId; mode = 'detail'; notice = 'Entry saved to the project register.'; history.replaceState(null, '', `#${selected}`); renderDetail(); }
      catch (error) { statusError(error, '#editor-status'); }
    }
    if (event.target.id === 'feedback-form') {
      const entry = entryFor(selected), form = new FormData(event.target);
      const feedback = { issue: String(form.get('issue') || ''), variant: String(form.get('variant') || ''), note: String(form.get('note') || '').trim(), updatedAt: new Date().toISOString() };
      try { await apiWrite('PUT', `${API}/entries/${encodeURIComponent(entry.id)}/feedback`, { feedback }); delete legacyFeedback[entry.id]; localStorage.setItem(LEGACY_FEEDBACK_KEY, JSON.stringify(legacyFeedback)); notice = 'Feedback saved to the project register.'; renderDetail(); }
      catch (error) { statusError(error, '#feedback-status'); }
    }
  });
}
async function main() {
  try {
    const response = await fetch(API, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json(); data = payload.register; revision = payload.revision; assets = payload.assets;
    if (!Array.isArray(data.entries) || data.fields?.slice(0, 5).join('|') !== 'Identity|Type|State|Action|Description') throw new Error('Unexpected register schema');
    readLegacyFeedback();
    root.innerHTML = `<div class="workspace"><section class="panel catalog"><div class="catalog-head"><div class="catalog-title"><div><span class="kicker">PROJECT SOURCE / V0</span><h2>Card Register</h2></div><span id="list-count" class="count"></span></div><div class="catalog-actions"><button id="add-entry" class="primary-button">+ Add card</button><span class="count">Edits save directly to the repo</span></div>
      <div class="controls"><input id="search" type="search" placeholder="Search every field…" aria-label="Search cards"><select id="category" aria-label="Filter type"></select><select id="state-filter" aria-label="Filter state"></select><select id="art-filter" aria-label="Filter runtime art"><option value="">Any art status</option><option value="with">With runtime image</option><option value="without">No runtime image</option></select><select id="feedback-filter" aria-label="Filter feedback"><option value="">Any feedback</option><option value="with">With feedback</option><option value="without">Without feedback</option></select></div>
      <div class="sortline"><label for="sort">Sort by</label><select id="sort"><option value="register">Register order</option><option value="identity">Identity</option><option value="base">Base identity</option><option value="type">Type</option><option value="state">State</option><option value="belongs">Belongs to</option><option value="decision">Decision status</option></select><button id="reverse">↑ Ascending</button><button id="reset-filters">Clear filters</button></div></div>
      <div class="table-wrap"><table><thead><tr><th>Card</th><th>Type</th><th class="belongs-col">Belongs to</th><th>Art</th><th>Note</th></tr></thead><tbody id="card-rows"></tbody></table></div><div class="export-bar"><span id="feedback-count"></span><button id="export-feedback" class="ghost-button">Export feedback JSON ↓</button></div></section><aside class="panel detail" id="detail"></aside></div>`;
    selectOptions(); initEvents(); const requested = location.hash.slice(1); selected = entryFor(requested) ? requested : data.entries[0]?.id || null; renderList(); renderDetail();
  } catch (error) { root.innerHTML = `<p class="error">Could not load the Card Register. Start the local project server with <code>python3 scripts/run_prototype.py</code>. (${esc(error.message)})</p>`; }
}
main();
