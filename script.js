const speakBtn = document.getElementById('speakBtn');
const textInput = document.getElementById('textInput');
const voiceSelect = document.getElementById('voiceSelect');
let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = voice.name + ' (' + voice.lang + ')';
    voiceSelect.appendChild(option);
  });
}
window.speechSynthesis.onvoiceschanged = loadVoices;

speakBtn.addEventListener('click', () => {
  const text = textInput.value;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[voiceSelect.value];
  utterance.rate = 1;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
});