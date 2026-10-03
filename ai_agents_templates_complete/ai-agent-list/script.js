/**
 * AI Agent List: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const A = [
    ['Research Agent', 'Online', 96],
    ['Support Agent', 'Online', 94],
    ['Data Analyst', 'Busy', 91],
    ['Content Writer', 'Offline', 88],
    ['QA Reviewer', 'Online', 97]
];
let grid = true;
const cls = s => s === 'Online' ? 'success' : s === 'Busy' ? 'warning' : 'neutral';
function draw() {
    const q = $('#q').value.toLowerCase(), st = $('#st').value;
    const L = A.filter(a => a[0].toLowerCase().includes(q) && (st === 'All' || a[1] === st)).sort((a, b) => $('#so').value === 's' ? b[2] - a[2] : a[0].localeCompare(b[0]));
    if (!L.length) {
        $('#out').innerHTML = '<div class="empty">No agents match. Clear the search or filter.</div>';
        return;
    }
    $('#out').innerHTML = grid ? '<div class="grid grid-3">' + L.map(a => `<div class="card card-pad"><strong>${a[0]}</strong> <span class="badge ${cls(a[1])}">${a[1]}</span><div class="x-bar" style="margin-top:12px"><i style="width:${a[2]}%"></i></div><p class="small muted">${a[2]}% success</p></div>`).join('') + '</div>'
        : '<div class="card card-pad x-wrap"><table class="x-table"><tr><th>Agent</th><th>Status</th><th>Success</th></tr>' + L.map(a => `<tr><td>${a[0]}</td><td><span class="badge ${cls(a[1])}">${a[1]}</span></td><td>${a[2]}%</td></tr>`).join('') + '</table></div>';
}
['q', 'st', 'so'].forEach(i => $('#' + i).oninput = draw);
$('#view').onclick = e => {
    grid = !grid;
    e.target.textContent = grid ? 'Table view' : 'Grid view';
    draw();
};
draw();
