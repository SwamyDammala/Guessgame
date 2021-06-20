"use strict";

let secretNumber = Math.round(Math.random() * 20) + 1;
let highScore = 0;

const displayWinner = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  let winningScore = document.querySelector(".score").textContent;

  //when no input provided
  if (!guessNumber) {
    displayWinner("⛔️ No number!");
  }

  //When guessing number equals to secret Number
  else if (guessNumber === secretNumber) {
    displayWinner("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".score").style.width = "30rem";
    if (winningScore > highScore) {
      document.querySelector(".highscore").textContent = winningScore;
      highScore = winningScore;
    }
  }
  //When guessing number is not equal to target number
  else if (guessNumber !== secretNumber) {
    if (winningScore > 0) {
      displayWinner(guessNumber < secretNumber ? "📉 Low!" : "📈High!");
      document.querySelector(".score").textContent = winningScore - 1;
    } else {
      displayWinner("💥 You lost the game!");
    }
  }
});

//To reset the game when want to play again

document.querySelector(".again").addEventListener("click", () => {
  reset();
});

const reset = () => {
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  displayWinner("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").style.width = "15rem";
};
