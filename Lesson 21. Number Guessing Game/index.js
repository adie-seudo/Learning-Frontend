const max = 100;
const min = 1;
const answer = Math.floor(Math.random() * (max - min + 1));

/* let input;
let guesscount = 0;

document.getElementById("submit").onclick = function () {
  input = document.getElementById("guess").value;

  if (input < answer) {
    document.getElementById("clue").textContent = `Higher`;
    guesscount++;
    document.getElementById("guesscount").textContent =
      `Guesscount(s): ${guesscount}`;
  } else if (input > answer) {
    guesscount++;
    document.getElementById("guesscount").textContent =
      `Guesscount(s): ${guesscount}`;
    document.getElementById("clue").textContent = `Lower`;
  } else if (input == answer) {
    document.getElementById("guesscount").textContent =
      `Guesscount(s): ${guesscount}`;
    document.getElementById("clue").textContent = `Correct Answer: ${answer}`;
  }
}; */

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess the number between ${min} and ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please only type a number");
  } else if (guess > answer) {
    window.alert("Lower");
  } else if (guess < answer) {
    window.alert("Higher");
  } else {
    window.alert("Congrats");
    running = false;
  }
}
