/**
 * Agent Error & Retry: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const MAX = 4;
let runs = UI.load('retry', [
    { n: 'Sync CRM contacts', e: 'HTTP 429: rate limited', a: 1, t: 8 },
    { n: 'Parse invoice PDF', e: 'Timed out after 30s', a: 2, t: 16 },
    { n: 'Send weekly digest', e: 'SMTP authentication failed', a: 4, t: 0 }
]);
function draw() {
    UI.save('retry', runs);
    $('#runs').innerHTML = runs.map((r, i) => `<div class="task"><div class="kpi-icon">${r.a}/${MAX}</div>
  <div><strong>${UI.esc(r.n)}</strong><div class="small muted">${UI.esc(r.e)} · ${r.ok ? 'Recovered' : r.t ? `retry in ${r.t}s (backoff)` : 'out of automatic retries'}</div></div>
  <div class="toolbar"><span class="badge ${r.ok ? 'success' : 'danger'}">${r.ok ? 'Recovered' : 'Failed'}</span>
  ${r.ok ? '' : `<button class="btn" data-a="retry" data-i="${i}">Retry now</button><button class="btn" data-a="skip" data-i="${i}">Skip</button>`}</div></div>`).join('') || '<div class="empty">No failed runs. Everything is healthy.</div>';
}
function attempt(r) {
    r.a = Math.min(r.a + 1, MAX);
    if (Math.random() > .45) {
        r.ok = true;
        UI.toast(r.n + ' recovered');
    }
    else {
        r.t = r.a < MAX ? 2 ** (r.a + 1) : 0;
        UI.toast(r.n + ' failed again');
    }
}
$('#runs').onclick = e => {
    const b = e.target.closest('button');
    if (!b)
        return;
    const i = +b.dataset.i;
    if (b.dataset.a === 'retry')
        attempt(runs[i]);
    else
        runs.splice(i, 1);
    draw();
};
setInterval(() => {
    runs.forEach(r => {
        if (!r.ok && r.t > 0 && --r.t === 0)
            attempt(r);
    });
    draw();
}, 1000);
draw();
