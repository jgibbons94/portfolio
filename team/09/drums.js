let presses = {};
window.addEventListener('keydown', function (e) {
  let keyCode = e.code;
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  let key = document.querySelector(`div.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
  audio.addEventListener('ended', function () {
    key.classList.remove('playing');
  });
  if (presses[keyCode] === undefined) presses[keyCode] = 0;
  else if (presses[keyCode] < 10) {
    key.style.transform += "translateY(10px)";
    presses[keyCode]++;
  }
  else {
    key.style.transform = "translateY(0px)";
    presses[keyCode] = 0;
  }
});
