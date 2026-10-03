/**
 * Agent Configuration: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const ids = ['model', 'temp', 'max', 'ap'];
const saved = UI.load('cfg', {});
ids.forEach(i => {
    if (saved[i] !== undefined)
        $('#' + i).value = saved[i];
});
function draw() {
    const c = {};
    ids.forEach(i => c[i] = $('#' + i).value);
    $('#tv').textContent = c.temp;
    $('#out').textContent = JSON.stringify({ model: c.model, temperature: +c.temp, max_steps: +c.max, approval: c.ap }, null, 2);
    UI.save('cfg', c);
}
ids.forEach(i => $('#' + i).oninput = draw);
$('#copy').onclick = () => navigator.clipboard?.writeText($('#out').textContent).then(() => UI.toast('Config copied'));
draw();
