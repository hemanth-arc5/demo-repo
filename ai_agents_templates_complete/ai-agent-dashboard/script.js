/**
 * AI Agent Dashboard: behavior for this template.
 * Helpers ($, $$, UI.*) come from ../shared/core.js.
 */

UI.$('#stats').innerHTML = [
    ['Agents', '12', '+2'],
    ['Running', '4', '+1'],
    ['Executions', '1,284', '+18%'],
    ['Success', '94.2%', '+2.1%']
].map(x => `<div class="card stat"><div class="label">${x[0]}</div><div class="value">${x[1]}</div><div class="delta positive">${x[2]}</div></div>`).join('');
UI.$('#agents').innerHTML = ['Research Agent', 'Support Agent', 'Data Analyst', 'Content Writer'].map((x, i) => `<div style="margin:18px 0"><div class="section-title"><span>${x}</span><strong>${96 - i * 2}%</strong></div><div class="progress"><span style="width:${96 - i * 2}%"></span></div></div>`).join('');
