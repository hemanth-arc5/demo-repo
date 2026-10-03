/**
 * Agent Permissions: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const tools = [
    ['Read files', 0],
    ['Web search', 0],
    ['Send email', 1],
    ['Run code', 1],
    ['Delete data', 2]
];
const agents = ['Research Agent', 'Support Agent', 'Data Analyst'];
let on = UI.load('perm', { '0-0': 1, '0-1': 1, '1-0': 1, '1-2': 1, '2-0': 1, '2-3': 1 });
function draw() {
    $('#mx').innerHTML = '<tr><th>Agent</th>' + tools.map(t => `<th>${t[0]}<br><span class="badge ${['success', 'warning', 'danger'][t[1]]}">${['Low', 'Medium', 'High'][t[1]]}</span></th>`).join('') + '</tr>'
        + agents.map((a, i) => `<tr><td><strong>${a}</strong></td>${tools.map((t, j) => `<td><input type="checkbox" class="x-sw" aria-label="${a}: ${t[0]}" data-k="${i}-${j}" ${on[i + '-' + j] ? 'checked' : ''}></td>`).join('')}</tr>`).join('');
    const hi = agents.filter((a, i) => tools.some((t, j) => t[1] == 2 && on[i + '-' + j])).length;
    $('#risk').textContent = hi ? hi + ' agent(s) can delete data. Review before shipping.' : 'No agent has high-risk access.';
    UI.save('perm', on);
}
$('#mx').onchange = e => {
    on[e.target.dataset.k] = e.target.checked ? 1 : 0;
    draw();
    UI.toast('Permission updated');
};
draw();
