/**
 * 全站公共逻辑：导航栏、发音、提示、语速记忆
 */

// 导航菜单配置（id 对应各 HTML 文件名，不含 .html）
const SITE_NAV = [
    { id: 'index', href: 'index.html', label: '首页' },
    { id: 'alphabet', href: 'alphabet.html', label: '字母卡片' },
    { id: 'sandbox', href: 'sandbox.html', label: '拼读沙盒' },
    { id: 'dental', href: 'dental.html', label: '口腔词汇' },
    { id: 'game', href: 'game.html', label: '配对游戏' },
    { id: 'rules', href: 'rules.html', label: '拼读法则' }
];

let currentSpeechSpeed = 0.75;

// 页面加载时注入顶栏底栏并恢复语速
function initSite(activePageId) {
    injectSiteHeader(activePageId);
    injectSiteFooter();
    restoreSpeechSpeedUI();
    if (window.speechSynthesis) {
        speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
        speechSynthesis.getVoices();
    }
}

// 生成顶栏（含导航 + 语速）
function injectSiteHeader(activePageId) {
    const el = document.getElementById('site-header');
    if (!el) return;

    const navLinks = SITE_NAV.map(item => {
        const active = item.id === activePageId;
        const cls = active
            ? 'px-3 py-1.5 text-xs font-bold rounded-lg bg-white text-indigo-800 shadow-sm'
            : 'px-3 py-1.5 text-xs font-semibold rounded-lg text-indigo-100 hover:bg-white/15 transition-colors';
        return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
    }).join('');

    el.innerHTML = `
        <header class="bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-3">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <a href="index.html" class="flex items-center space-x-3 group">
                            <div class="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                                <svg class="w-7 h-7 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="text-lg sm:text-xl font-bold tracking-wide">俄语拼读互助站</h1>
                                <p class="text-[10px] sm:text-xs text-indigo-200">生活 · 医学 · 口腔诊所</p>
                            </div>
                        </a>
                        <div class="flex flex-wrap items-center gap-2 bg-white/10 p-2 rounded-xl self-start sm:self-auto">
                            <span class="text-[10px] font-medium text-indigo-100">语速</span>
                            <div class="inline-flex rounded-md shadow-sm" role="group">
                                <button type="button" id="speed-slow" onclick="setSpeechSpeed(0.5, 'slow')" class="px-2.5 py-1 text-[10px] font-semibold rounded-l-lg bg-indigo-800 text-indigo-200 hover:bg-indigo-600 hover:text-white transition-colors">0.5x</button>
                                <button type="button" id="speed-medium" onclick="setSpeechSpeed(0.75, 'medium')" class="px-2.5 py-1 text-[10px] font-semibold bg-indigo-600 text-white transition-colors">0.75x</button>
                                <button type="button" id="speed-normal" onclick="setSpeechSpeed(1.0, 'normal')" class="px-2.5 py-1 text-[10px] font-semibold rounded-r-lg bg-indigo-800 text-indigo-200 hover:bg-indigo-600 hover:text-white transition-colors">1.0x</button>
                            </div>
                        </div>
                    </div>
                    <nav class="flex flex-wrap gap-1.5 pb-1 border-b border-white/10" aria-label="主菜单">
                        ${navLinks}
                    </nav>
                </div>
            </div>
        </header>
    `;
}

function injectSiteFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    el.innerHTML = `
        <footer class="bg-slate-800 text-slate-400 mt-16 border-t border-slate-700 py-8">
            <div class="max-w-7xl mx-auto px-4 text-center space-y-2">
                <p class="text-sm">俄语拼读与医学 / 口腔诊所词汇学习站 © 2026</p>
                <p class="text-xs text-slate-500">点击词卡即可聆听俄语发音 · 建议使用 Chrome / Edge / Safari</p>
            </div>
        </footer>
    `;
}

function restoreSpeechSpeedUI() {
    try {
        const saved = localStorage.getItem('ru_speech_speed');
        const type = localStorage.getItem('ru_speech_speed_type') || 'medium';
        if (saved) currentSpeechSpeed = parseFloat(saved);
        setSpeechSpeed(currentSpeechSpeed, type, true);
    } catch (e) {
        setSpeechSpeed(0.75, 'medium', true);
    }
}

function speak(text) {
    if (!('speechSynthesis' in window)) {
        showToast('您的浏览器暂不支持语音，请换用 Chrome 或 Safari。', 'error');
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = currentSpeechSpeed;
    const ruVoice = speechSynthesis.getVoices().find(v => v.lang.startsWith('ru'));
    if (ruVoice) utterance.voice = ruVoice;
    window.speechSynthesis.speak(utterance);
}

function setSpeechSpeed(speed, type, silent) {
    currentSpeechSpeed = speed;
    try {
        localStorage.setItem('ru_speech_speed', String(speed));
        localStorage.setItem('ru_speech_speed_type', type);
    } catch (e) {}

    const base = 'px-2.5 py-1 text-[10px] font-semibold bg-indigo-800 text-indigo-200 hover:bg-indigo-600 hover:text-white transition-colors';
    const active = 'px-2.5 py-1 text-[10px] font-semibold bg-indigo-600 text-white transition-colors';
    const slow = document.getElementById('speed-slow');
    const medium = document.getElementById('speed-medium');
    const normal = document.getElementById('speed-normal');
    if (!slow) return;

    slow.className = base + ' rounded-l-lg';
    medium.className = base;
    normal.className = base + ' rounded-r-lg';
    if (type === 'slow') slow.className = active + ' rounded-l-lg';
    else if (type === 'medium') medium.className = active;
    else if (type === 'normal') normal.className = active + ' rounded-r-lg';

    if (!silent) showToast(`语速已设为 ${speed}x`);
}

function showToast(message, type) {
    type = type || 'info';
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `p-3 rounded-xl shadow-lg text-white text-xs font-semibold transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto flex items-center gap-2 max-w-sm ${type === 'error' ? 'bg-rose-600' : 'bg-slate-800'}`;
    toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('opacity-0', 'translate-y-2'), 10);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
