/**
 * Agent Task Queue: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

let tasks = UI.load('tq', [
    { t: 'Analyze Q3 feedback', p: 'High' },
    { t: 'Research competitor pricing', p: 'Medium' },
    { t: 'Draft support reply', p: 'Low' }
]), drag = null;
function draw() {
    $('#q').innerHTML = tasks.map((x, i) => `<div class="task" draggable="true" data-i="${i}"><div class="kpi-icon">${i + 1}</div><div><strong>${UI.esc(x.t)}</strong></div><div class="toolbar"><span class="badge ${x.p === 'High' ? 'danger' : x.p === 'Medium' ? 'warning' : 'info'}">${x.p}</span><button class="icon-btn" data-del="${i}" aria-label="Remove task">×</button></div></div>`).join('') || '<div class="empty">Queue is empty. Add a task above.</div>';
    UI.save('tq', tasks);
}
$('#nt').onkeydown = e => {
    if (e.key === 'Enter' && e.target.value.trim()) {
        tasks.push({ t: e.target.value.trim(), p: $('#pr').value });
        e.target.value = '';
        draw();
    }
};
$('#q').onclick = e => {
    const b = e.target.closest('[data-del]');
    if (b) {
        tasks.splice(+b.dataset.del, 1);
        draw();
    }
};
$('#q').ondragstart = e => {
    drag = +e.target.closest('.task').dataset.i;
    e.target.classList.add('x-drag');
};
$('#q').ondragover = e => e.preventDefault();
$('#q').ondrop = e => {
    const to = +e.target.closest('.task')?.dataset.i;
    if (drag !== null && !isNaN(to)) {
        tasks.splice(to, 0, tasks.splice(drag, 1)[0]);
        draw();
    }
    drag = null;
};
$('#q').ondragend = draw;
draw();
