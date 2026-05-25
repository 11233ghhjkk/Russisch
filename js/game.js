/** 医学词汇配对游戏页 */

let selectedGameWord = null;
let selectedGameTranslation = null;
let matchedPairsCount = 0;

function initGamePage() {
    initGame();
}

function initGame() {
    selectedGameWord = null;
    selectedGameTranslation = null;
    matchedPairsCount = 0;
    const feedback = document.getElementById('game-feedback');
    if (feedback) {
        feedback.innerText = '挑战目标：完成 4 组医学词汇配对！';
        feedback.className = 'text-sm font-semibold text-indigo-300';
    }

    const shuffled = [...alphabetData].sort(() => 0.5 - Math.random());
    const selection = shuffled.slice(0, 4);
    const ruWords = selection.map(item => ({ id: item.letter, word: item.medical.word }));
    const cnWords = selection.map(item => ({ id: item.letter, cn: item.medical.cn }));
    const shuffledRu = [...ruWords].sort(() => 0.5 - Math.random());
    const shuffledCn = [...cnWords].sort(() => 0.5 - Math.random());

    const ruCol = document.getElementById('game-ru-column');
    const cnCol = document.getElementById('game-cn-column');
    if (!ruCol || !cnCol) return;
    ruCol.innerHTML = '';
    cnCol.innerHTML = '';

    shuffledRu.forEach(item => {
        ruCol.innerHTML += `<button type="button" onclick="selectGameWord('${item.id}', this)" id="game-ru-${item.id}" class="game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left font-bold text-slate-200 flex justify-between"><span>${escapeHtml(item.word)}</span><span class="text-[10px] text-indigo-300">🔊</span></button>`;
    });
    shuffledCn.forEach(item => {
        cnCol.innerHTML += `<button type="button" onclick="selectGameTranslation('${item.id}', this)" id="game-cn-${item.id}" class="game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-sm font-semibold text-slate-200">${escapeHtml(item.cn)}</button>`;
    });
}

function selectGameWord(id, element) {
    const item = alphabetData.find(x => x.letter === id);
    if (item) speak(item.medical.word);
    document.querySelectorAll('#game-ru-column .game-btn').forEach(btn => {
        if (!btn.disabled) btn.className = 'game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left font-bold text-slate-200 flex justify-between';
    });
    selectedGameWord = id;
    element.className = 'game-btn w-full p-3 bg-teal-500 border border-teal-400 rounded-xl text-left font-bold text-white ring-2 ring-teal-300 flex justify-between';
    checkMatch();
}

function selectGameTranslation(id, element) {
    document.querySelectorAll('#game-cn-column .game-btn').forEach(btn => {
        if (!btn.disabled) btn.className = 'game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-sm font-semibold text-slate-200';
    });
    selectedGameTranslation = id;
    element.className = 'game-btn w-full p-3 bg-teal-500 border border-teal-400 rounded-xl text-left text-sm font-semibold text-white ring-2 ring-teal-300';
    checkMatch();
}

function checkMatch() {
    if (!selectedGameWord || !selectedGameTranslation) return;
    const feedback = document.getElementById('game-feedback');
    if (selectedGameWord === selectedGameTranslation) {
        const wordBtn = document.getElementById(`game-ru-${selectedGameWord}`);
        const transBtn = document.getElementById(`game-cn-${selectedGameTranslation}`);
        if (wordBtn) { wordBtn.disabled = true; wordBtn.className = 'game-btn w-full p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl opacity-60'; }
        if (transBtn) { transBtn.disabled = true; transBtn.className = 'game-btn w-full p-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl opacity-60'; }
        matchedPairsCount++;
        if (feedback) {
            feedback.innerText = matchedPairsCount === 4 ? '完美通关！🏆' : '配对正确！✨';
            feedback.className = 'text-sm font-semibold text-emerald-400';
        }
    } else {
        const badWordBtn = document.getElementById(`game-ru-${selectedGameWord}`);
        const badTransBtn = document.getElementById(`game-cn-${selectedGameTranslation}`);
        if (badWordBtn) badWordBtn.className = 'game-btn w-full p-3 bg-rose-600 border border-rose-500 rounded-xl text-white';
        if (badTransBtn) badTransBtn.className = 'game-btn w-full p-3 bg-rose-600 border border-rose-500 rounded-xl text-white';
        if (feedback) {
            feedback.innerText = '选错了，再试一次';
            feedback.className = 'text-sm font-semibold text-rose-400';
        }
        const tw = selectedGameWord, tt = selectedGameTranslation;
        setTimeout(() => {
            const w = document.getElementById(`game-ru-${tw}`);
            const t = document.getElementById(`game-cn-${tt}`);
            if (w && !w.disabled) w.className = 'game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left font-bold text-slate-200 flex justify-between';
            if (t && !t.disabled) t.className = 'game-btn w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-left text-sm font-semibold text-slate-200';
        }, 1000);
    }
    selectedGameWord = null;
    selectedGameTranslation = null;
}
