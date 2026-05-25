/** 字母卡片页：搜索、筛选、进度、卡片渲染 */

let currentFilter = 'all';
let searchQuery = '';
let masteredLetters = new Set();

function initAlphabetPage() {
    try {
        const saved = localStorage.getItem('ru_mastered_letters');
        if (saved) masteredLetters = new Set(JSON.parse(saved));
    } catch (e) {}

    renderCards();
    updateProgress();
}

function renderCards() {
    const grid = document.getElementById('alphabet-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filteredData = alphabetData.filter(item => {
        if (currentFilter !== 'all' && item.type !== currentFilter) return false;
        if (searchQuery !== '') {
            const q = searchQuery.toLowerCase();
            return item.letter.toLowerCase().includes(q)
                || item.lowercase.toLowerCase().includes(q)
                || item.everyday.word.toLowerCase().includes(q)
                || item.everyday.cn.includes(searchQuery.trim())
                || item.medical.word.toLowerCase().includes(q)
                || item.medical.cn.includes(searchQuery.trim());
        }
        return true;
    });

    const countEl = document.getElementById('displayed-count');
    if (countEl) countEl.innerText = filteredData.length;

    if (filteredData.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-12 text-center text-slate-400"><p class="font-bold">未找到匹配内容</p></div>`;
        return;
    }

    filteredData.forEach(item => {
        const isMastered = masteredLetters.has(item.letter);
        let typeBadgeColor, cardBorderAccent, typeName;
        if (item.type === 'vowel') {
            typeBadgeColor = 'bg-rose-100 text-rose-800 border-rose-200';
            cardBorderAccent = 'border-t-4 border-t-rose-500';
            typeName = '元音';
        } else if (item.type === 'consonant') {
            typeBadgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
            cardBorderAccent = 'border-t-4 border-t-blue-500';
            typeName = '辅音';
        } else {
            typeBadgeColor = 'bg-gray-100 text-gray-800 border-gray-200';
            cardBorderAccent = 'border-t-4 border-t-slate-400';
            typeName = '无音符号';
        }

        const card = document.createElement('div');
        card.id = `card-${item.letter}`;
        card.className = `letter-card bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between ${cardBorderAccent}`;
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start">
                    <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${typeBadgeColor}">${typeName}</span>
                    <button type="button" onclick="toggleMastered('${item.letter}')" class="text-slate-300 hover:text-amber-500 p-1" title="标记已掌握">
                        <svg class="w-6 h-6 ${isMastered ? 'text-amber-500 fill-amber-500' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.583 1.828l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.77-.576-.37-1.828.583-1.828h4.907a1 1 0 00.95-.69l1.519-4.674z"/></svg>
                    </button>
                </div>
                <div class="text-center my-3">
                    <button type="button" onclick="triggerLetterSpeak('${item.letter}')" class="text-5xl font-black text-slate-800 hover:scale-110 transition-transform">${item.letter} <span class="text-3xl text-slate-400">${item.lowercase}</span></button>
                    <div class="text-xs text-slate-400 mt-2"><span class="bg-slate-100 px-2 py-0.5 rounded-md font-mono">${item.ipa}</span> 口诀: <strong>${item.chinese_hint}</strong></div>
                </div>
                <div class="mt-4 space-y-3.5">
                    <div onclick="speak('${item.everyday.word.replace(/'/g, "\\'")}')" class="cursor-pointer p-3 bg-amber-50/50 hover:bg-amber-50 rounded-xl border border-amber-100/60">
                        <span class="text-[10px] font-bold text-amber-700">生活高频词</span>
                        <h4 class="text-base font-bold text-slate-800">${item.everyday.word}</h4>
                        <p class="text-xs text-slate-500">${item.everyday.cn}</p>
                    </div>
                    <div onclick="speak('${item.medical.word.replace(/'/g, "\\'")}')" class="cursor-pointer p-3 bg-teal-50/50 hover:bg-teal-50 rounded-xl border border-teal-100/60">
                        <span class="text-[10px] font-bold text-teal-700">医学 / 口腔高频词</span>
                        <h4 class="text-base font-bold text-slate-800">${item.medical.word}</h4>
                        <p class="text-xs text-slate-500">${item.medical.cn}</p>
                    </div>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

function triggerLetterSpeak(letter) {
    speak(letter);
    const card = document.getElementById(`card-${letter}`);
    if (card) {
        card.classList.add('active-glow');
        setTimeout(() => card.classList.remove('active-glow'), 800);
    }
}

function filterAlphabet() {
    const box = document.getElementById('search-box');
    searchQuery = box ? box.value : '';
    renderCards();
}

function setFilter(type) {
    currentFilter = type;
    ['all', 'vowel', 'consonant', 'sign'].forEach(b => {
        const btn = document.getElementById(`filter-${b}`);
        if (!btn) return;
        btn.className = b === type
            ? 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white shadow-sm transition-colors'
            : 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-50 text-slate-600 border border-slate-100 hover:bg-slate-100 transition-colors';
    });
    renderCards();
}

function toggleMastered(letter) {
    if (masteredLetters.has(letter)) masteredLetters.delete(letter);
    else masteredLetters.add(letter);
    try {
        localStorage.setItem('ru_mastered_letters', JSON.stringify([...masteredLetters]));
    } catch (e) {}
    updateProgress();
    renderCards();
    showToast(masteredLetters.has(letter) ? `已掌握 ${letter} 🎉` : `取消掌握 ${letter}`);
}

function updateProgress() {
    const percent = Math.round((masteredLetters.size / 33) * 100);
    const bar = document.getElementById('progress-bar');
    const text = document.getElementById('progress-text');
    if (bar) bar.style.width = `${percent}%`;
    if (text) text.innerText = `${percent}%`;
}
