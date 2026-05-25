/** 拼读沙盒页：虚拟俄语键盘 */

function initSandboxPage() {
    const input = document.getElementById('sandbox-input');
    if (input) input.focus();
}

function appendLetter(char) {
    const input = document.getElementById('sandbox-input');
    if (input) {
        input.value += char.toLowerCase();
        input.focus();
    }
}

function deleteLastLetter() {
    const input = document.getElementById('sandbox-input');
    if (input) {
        input.value = input.value.slice(0, -1);
        input.focus();
    }
}

function clearSandbox() {
    const input = document.getElementById('sandbox-input');
    if (input) input.value = '';
}

function speakSandboxText() {
    const text = document.getElementById('sandbox-input')?.value?.trim();
    if (!text) {
        showToast('请先输入或拼写俄语单词', 'error');
        return;
    }
    speak(text);
}

function speakPreset(word) {
    speak(word);
    showToast(`正在播放: ${word}`);
}
