/**
 * Automation Workflow Builder: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

let nodes = [
    ['Trigger', 40, 80],
    ['Planner', 290, 180],
    ['Tool Agent', 540, 80],
    ['Validator', 790, 180],
    ['Response', 1040, 80]
];
function draw() {
    let c = UI.$('#canvas');
    c.innerHTML = nodes.map((n, i) => i < nodes.length - 1 ? `<div class="edge" style="left:${n[1] + 190}px;top:${n[2] + 48}px;width:${nodes[i + 1][1] - n[1] - 190}px"></div>` : '').join('') + nodes.map(n => `<div class="node" style="left:${n[1]}px;top:${n[2]}px"><div class="node-head"><h4>${n[0]}</h4><span class="handle"></span></div><p>Executable workflow node</p></div>`).join('');
}
UI.$('#layout').onclick = () => {
    nodes.forEach((n, i) => {
        n[1] = 40 + i * 240;
        n[2] = 100 + (i % 2) * 140;
    });
    draw();
    UI.toast('Workflow arranged');
};
UI.$('#run').onclick = () => {
    UI.toast('Workflow running');
    setTimeout(() => UI.toast('Workflow completed'), 1400);
};
draw();
