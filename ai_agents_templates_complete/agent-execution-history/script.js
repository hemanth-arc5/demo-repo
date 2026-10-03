/**
 * Agent Execution History: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const R = [
    [
        "#1042",
        "Research Agent",
        "Success",
        "42s",
        "Searched 6 sources, wrote summary."
    ],
    [
        "#1041",
        "Support Agent",
        "Failed",
        "12s",
        "Ticket API returned 500 on step 3."
    ],
    [
        "#1040",
        "Data Analyst",
        "Success",
        "2m 8s",
        "Cleaned 4,812 rows, built chart."
    ],
    [
        "#1039",
        "Content Writer",
        "Running",
        "1m 3s",
        "Drafting section 2 of 4."
    ],
    ['#1038', 'Support Agent', 'Success', '19s', 'Replied to 3 tickets.']
];
let f = 'All';
function draw() {
    $('#f').innerHTML = ['All', 'Success', 'Failed', 'Running'].map(x => `<button class="chip ${x === f ? 'active' : ''}">${x}</button>`).join('');
    $('#t').innerHTML = '<tr><th>Run</th><th>Agent</th><th>Result</th><th>Time</th></tr>' + R.filter(r => f === 'All' || r[2] === f).map((r, i) => `<tr data-id="${r[0]}" tabindex="0" style="cursor:pointer"><td>${r[0]}</td><td>${r[1]}</td><td><span class="badge ${r[2] === 'Success' ? 'success' : r[2] === 'Failed' ? 'danger' : 'warning'}">${r[2]}</span></td><td>${r[3]}</td></tr>`).join('');
}
$('#f').onclick = e => {
    if (e.target.classList.contains('chip')) {
        f = e.target.textContent;
        draw();
    }
};
$('#t').onclick = e => {
    const tr = e.target.closest('tr[data-id]');
    if (!tr)
        return;
    const r = R.find(x => x[0] === tr.dataset.id);
    $('#d').innerHTML = `<h2>Run ${r[0]}</h2><p><strong>${r[1]}</strong> · ${r[3]}</p><p class="muted">${r[4]}</p>`;
};
draw();
