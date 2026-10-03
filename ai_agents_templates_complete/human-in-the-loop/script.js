/**
 * Human-in-the-loop Workflow: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const Q = [
    {
        a: 'Support Agent',
        t: 'Refund $240 to order #1842',
        d: 'Customer reports a duplicate charge.'
    },
    {
        a: 'Data Analyst',
        t: 'Delete 1,200 stale rows from "leads"',
        d: 'Rows unchanged for 18 months.'
    },
    {
        a: 'Content Writer',
        t: 'Publish blog post "Q3 roadmap"',
        d: 'Draft passed the style check.'
    }
];
let done = UI.load('hitl_done', []), i = UI.load('hitl_i', 0);
function draw() {
    const q = Q[i];
    $('#ask').innerHTML = q ? `<p><span class="badge warning">${q.a} is paused</span></p><h3>${q.t}</h3><p class="muted">${q.d}</p>
  <div class="field"><label>Note (optional)</label><input id="note"></div><div class="actions" style="margin-top:12px"><button class="btn btn-primary" data-d="Approved">Approve</button><button class="btn" data-d="Rejected">Reject</button></div>` : '<div class="empty">Nothing is waiting. The agents are running.</div>';
    $('#done').innerHTML = done.map(x => `<div class="timeline-item"><h4>${x.d}: ${UI.esc(x.t)}</h4><p>${UI.esc(x.n || 'No note')}</p></div>`).join('') || '<div class="empty">No decisions yet.</div>';
    UI.save('hitl_done', done);
    UI.save('hitl_i', i);
}
$('#ask').onclick = e => {
    const d = e.target.dataset.d;
    if (!d)
        return;
    done.unshift({ d, t: Q[i].t, n: $('#note').value });
    i++;
    draw();
    UI.toast(d);
};
draw();
