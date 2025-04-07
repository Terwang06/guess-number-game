let secretNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;
let guessHistory = [];

function checkGuess() {
  const input = document.getElementById('guess');
  const guess = parseInt(input.value);
  const message = document.getElementById('message');
  const history = document.getElementById('history');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerText = "Please enter a number between 1 and 100.";
    return;
  }

  numberOfGuesses++;
  guessHistory.push(guess);

  if (guess < secretNumber) {
    message.innerText = "Too low! Try again.";
  } else if (guess > secretNumber) {
    message.innerText = "Too high! Try again.";
  } else {
    message.innerText = `Congratulations! You guessed it in ${numberOfGuesses} tries.`;
  }

  history.innerText = "Your guesses: " + guessHistory.join(', ');
  input.value = "";
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  numberOfGuesses = 0;
  guessHistory = [];
  document.getElementById('message').innerText = "";
  document.getElementById('history').innerText = "";
  document.getElementById('guess').value = "";
}

function toggleMusic() {
  const music = document.getElementById('bgm');
  const toggleBtn = document.getElementById('musicToggle');
  if (music.paused) {
    music.play();
    toggleBtn.innerText = "Pause Music";
  } else {
    music.pause();
    toggleBtn.innerText = "Play Music";
  }
}
