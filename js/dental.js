/** 口腔词汇页：翻转卡片与例句 */

let dentalArmedWord = null;
let dentalSentenceReadyWord = null;
let dentalSearchQuery = '';

function initDentalPage() {
    renderDentalVocab();
    const box = document.getElementById('dental-search-box');
    if (box) box.addEventListener('input', filterDentalVocab);
}

function handleDentalCardClick(word) {
    const item = dentalClinicVocab.find(d => d.word === word);
    const card = document.querySelector(`.dental-flip-card[data-word="${word.replace(/"/g, '\\"')}"]`);
    if (!item || !card) return;

    if (card.classList.contains('is-flipped')) {
        if (dentalSentenceReadyWord === word) {
            card.classList.remove('is-flipped', 'dental-sentence-ready');
            dentalSentenceReadyWord = null;
            showToast('已翻回词条');
            return;
        }
        speak(item.sentence);
        card.classList.add('dental-sentence-ready');
        dentalSentenceReadyWord = word;
        showToast('例句已朗读 · 再点翻回');
        return;
    }

    if (dentalArmedWord === word) {
        card.classList.remove('dental-armed');
        card.classList.add('is-flipped');
        dentalArmedWord = null;
        dentalSentenceReadyWord = null;
        showToast('点击卡片朗读例句');
        return;
    }

    document.querySelectorAll('.dental-flip-card').forEach(c => {
        c.classList.remove('dental-armed', 'is-flipped', 'dental-sentence-ready');
    });
    dentalArmedWord = word;
    dentalSentenceReadyWord = null;
    card.classList.add('dental-armed');
    speak(item.word);
    showToast('再点一次查看例句');
}

function filterDentalVocab() {
    const box = document.getElementById('dental-search-box');
    dentalSearchQuery = box ? box.value : '';
    renderDentalVocab();
}

function renderDentalVocab() {
    const grid = document.getElementById('dental-vocab-grid');
    if (!grid) return;

    dentalArmedWord = null;
    dentalSentenceReadyWord = null;

    const q = dentalSearchQuery.trim().toLowerCase();
    const filtered = dentalClinicVocab.filter(item => {
        if (!q) return true;
        return item.word.toLowerCase().includes(q)
            || item.cn.includes(dentalSearchQuery.trim())
            || item.hint.includes(dentalSearchQuery.trim())
            || item.tag.includes(dentalSearchQuery.trim())
            || (item.sentence && item.sentence.toLowerCase().includes(q))
            || (item.sentenceCn && item.sentenceCn.includes(dentalSearchQuery.trim()));
    });

    const countEl = document.getElementById('dental-displayed-count');
    if (countEl) countEl.innerText = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full py-10 text-center text-slate-400"><p class="font-bold">未找到匹配词汇</p></div>';
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const w = escapeHtml(item.word);
        return `
            <div class="dental-flip-card group hover:shadow-md transition-shadow rounded-xl" data-word="${w}">
                <div class="dental-flip-inner">
                    <div class="dental-flip-front">
                        <span class="text-[10px] font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">${escapeHtml(item.tag)}</span>
                        <h4 class="text-base font-bold text-slate-800 mt-2">${w}</h4>
                        <p class="text-xs text-slate-600 mt-1">${escapeHtml(item.cn)}</p>
                        <p class="text-[10px] text-slate-400 font-mono mt-1">${escapeHtml(item.hint)}</p>
                        <p class="text-[10px] text-violet-500 mt-2 dental-hint-armed">↻ 再点查看例句</p>
                    </div>
                    <div class="dental-flip-back">
                        <span class="text-[10px] font-bold text-violet-200 uppercase">诊所例句</span>
                        <p class="text-sm font-semibold leading-relaxed mt-2">${escapeHtml(item.sentence)}</p>
                        <p class="text-xs text-violet-100/90 mt-2 border-t border-white/20 pt-2">${escapeHtml(item.sentenceCn)}</p>
                        <p class="text-[10px] text-violet-200/90 mt-auto pt-2 dental-hint-sentence">🔊 点击朗读例句</p>
                        <p class="text-[10px] text-violet-200/80 mt-1 dental-hint-flipback">↻ 再点翻回</p>
                    </div>
                </div>
            </div>`;
    }).join('');

    grid.querySelectorAll('.dental-flip-card').forEach(card => {
        card.addEventListener('click', () => handleDentalCardClick(card.dataset.word));
    });
}
