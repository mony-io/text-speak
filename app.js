let button = document.querySelector('button');
let text = document.querySelector('textarea');

button.addEventListener('click', () => {
  let ulterance = new SpeechSynthesisUtterance(text.value);
  speechSynthesis.speak(ulterance);
});
