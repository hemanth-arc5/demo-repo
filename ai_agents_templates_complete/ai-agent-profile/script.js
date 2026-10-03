/**
 * AI Agent Profile: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const TABS = {
    Overview: 'Finds sources, checks claims and writes short briefs. Hands off to Content Writer for drafts.',
    Skills: ['Web search', 'Source ranking', 'Fact checking', 'Summarizing'].map(s => `<span class="chip active">${s}</span>`).join(' '),
    Runs: '<div class="task-list"><div class="task"><div><strong>#1042 Pricing research</strong><div class="small muted">42s</div></div><span class="badge success">Success</span></div><div class="task"><div><strong>#1031 Market scan</strong><div class="small muted">1m 8s</div></div><span class="badge danger">Failed</span></div></div>',
    Settings: '<div class="field"><label for="n">Display name</label><input id="n" value="Research Agent"></div>'
};
let tab = UI.load('ptab', 'Overview');
function draw() {
    $('#tabs').innerHTML = Object.keys(TABS).map(t => `<button class="chip ${t === tab ? 'active' : ''}">${t}</button>`).join('');
    $('#pane').innerHTML = TABS[tab];
    UI.save('ptab', tab);
}
$('#tabs').onclick = e => {
    if (e.target.classList.contains('chip')) {
        tab = e.target.textContent;
        draw();
    }
};
draw();
