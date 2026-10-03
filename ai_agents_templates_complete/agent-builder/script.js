/**
 * Agent Builder: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

let t = [
    "Web Search",
    "File Search",
    "Code Interpreter",
    "HTTP API",
    "SQL",
    "Email"
];
UI.$('#tools').innerHTML = t.map(x => `<button class="chip" onclick="this.classList.toggle('active');UI.toast('Tool toggled')">${x}</button>`).join('');
UI.$('#steps').innerHTML = ['Receive input', 'Plan', 'Use tools', 'Validate', 'Respond'].map((x, i) => `<div class="task"><div class="kpi-icon">${i + 1}</div><div><strong>${x}</strong><div class="small muted">Workflow step</div></div></div>`).join('');
