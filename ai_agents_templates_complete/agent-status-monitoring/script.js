/**
 * Agent Status Monitoring: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

const A = [
    { n: 'Research Agent', l: [210] },
    { n: 'Support Agent', l: [320] },
    { n: 'Data Analyst', l: [540] }
];
const spark = v => `<svg viewBox="0 0 120 32" width="100%" height="40" role="img" aria-label="latency trend"><polyline fill="none" stroke="#2563eb" stroke-width="2" points="${v.map((y, i) => `${i * 120 / (v.length - 1 || 1)},${32 - Math.min(y, 800) / 800 * 30}`).join(' ')}"/></svg>`;
function tick() {
    A.forEach(a => {
        a.l.push(Math.max(80, a.l.at(-1) + Math.round((Math.random() - .5) * 160)));
        if (a.l.length > 20)
            a.l.shift();
    });
    draw();
}
function draw() {
    $('#tiles').innerHTML = A.map(a => {
        const v = a.l.at(-1), s = v > 600 ? ['Degraded', 'danger'] : v > 400 ? ['Slow', 'warning'] : ['Healthy', 'success'];
        return `<div class="card card-pad"><div class="toolbar"><strong>${a.n}</strong><span class="badge ${s[1]}">${s[0]}</span></div><h2>${v} ms</h2>${spark(a.l)}</div>`;
    }).join('');
}
for (let i = 0; i < 12; i++)
    A.forEach(a => a.l.push(Math.max(80, a.l.at(-1) + Math.round((Math.random() - .5) * 160))));
draw();
setInterval(tick, 2000);
