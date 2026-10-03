/**
 * AgentOS shared helpers, loaded by every page before its own script.js.
 * UI.toast, UI.save/UI.load (localStorage), UI.theme (dark mode), UI.esc, $ and $$.
 */

const UI = {
    $: (s, r = document) => r.querySelector(s),
    $$: (s, r = document) => [...r.querySelectorAll(s)],
    toast(m) {
        let x = this.$('#toast');
        if (!x) {
            x = document.createElement('div');
            x.id = 'toast';
            x.className = 'toast';
            document.body.append(x);
        }
        x.textContent = m;
        x.classList.add('show');
        clearTimeout(window.__t);
        window.__t = setTimeout(() => x.classList.remove('show'), 2200);
    },
    save(k, v) {
        localStorage.setItem(k, JSON.stringify(v));
    },
    load(k, f) {
        try {
            return JSON.parse(localStorage.getItem(k)) ?? f;
        }
        catch {
            return f;
        }
    },
    theme() {
        const d = localStorage.getItem('agent_theme') === 'dark';
        document.documentElement.classList.toggle('dark', d);
        this.$$('.theme-toggle').forEach(b => b.textContent = d ? '☀ Light mode' : '☾ Dark mode');
    }
};
document.addEventListener('DOMContentLoaded', () => {
    UI.theme();
    UI.$$('.theme-toggle').forEach(b => b.onclick = () => {
        localStorage.setItem('agent_theme', localStorage.getItem('agent_theme') === 'dark' ? 'light' : 'dark');
        UI.theme();
    });
});
const $ = (s, r) => UI.$(s, r), $$ = (s, r) => UI.$$(s, r);
UI.esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
