/**
 * Agent Approval Interface: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

let a = [
    ['Send customer email', 'Support Agent', 'High'],
    ['Delete temporary records', 'Data Analyst', 'Critical'],
    ['Publish announcement', 'Content Writer', 'Medium']
];
function draw() {
    UI.$('#approvals').innerHTML = a.map((x, i) => `<div class="task"><div class="kpi-icon">!</div><div><strong>${x[0]}</strong><div class="small muted">${x[1]}</div></div><span class="badge ${x[2] == 'Critical' ? 'danger' : x[2] == 'High' ? 'warning' : 'info'}">${x[2]}</span><button class="btn" onclick="dec(${i},'Rejected')">Reject</button><button class="btn btn-primary" onclick="dec(${i},'Approved')">Approve</button></div>`).join('');
}
function dec(i, d) {
    UI.toast(d);
    a.splice(i, 1);
    draw();
}
draw();
