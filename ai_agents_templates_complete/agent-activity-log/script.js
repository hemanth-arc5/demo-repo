/**
 * Agent Activity Log: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const MSG = [
    ['info', 'Research Agent started task "Competitor pricing"'],
    ['info', 'Support Agent replied to ticket #512'],
    ['warn', 'Data Analyst: dataset has 3% missing values'],
    ['error', 'Content Writer: tool "publish" returned 403'],
    ['info', 'Workflow "Weekly report" completed']
];
let lv = 'all', paused = false, logs = UI.load('log', []);
const col = { info: '#2563eb', warn: '#d97706', error: '#dc2626' };
function draw() {
    $('#lv').innerHTML = ['all', 'info', 'warn', 'error'].map(x => `<button class="chip ${x === lv ? 'active' : ''}">${x}</button>`).join('');
    $('#log').innerHTML = logs.filter(l => lv === 'all' || l.l === lv).map(l => `<div><span class="muted">${l.t}</span> <b style="color:${col[l.l]}">${l.l}</b> ${UI.esc(l.m)}</div>`).join('') || '<div class="empty">No log lines for this level.</div>';
    UI.save('log', logs.slice(0, 60));
}
setInterval(() => {
    if (paused)
        return;
    const m = MSG[Math.floor(Math.random() * MSG.length)];
    logs.unshift({ l: m[0], m: m[1], t: new Date().toLocaleTimeString() });
    draw();
}, 1800);
$('#lv').onclick = e => {
    if (e.target.classList.contains('chip')) {
        lv = e.target.textContent;
        draw();
    }
};
$('#pause').onclick = e => {
    paused = !paused;
    e.target.textContent = paused ? 'Resume' : 'Pause';
};
$('#clear').onclick = () => {
    logs = [];
    draw();
};
draw();
