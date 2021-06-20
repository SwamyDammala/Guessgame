"use strict";

let secretNumber = Math.round(Math.random() * 20) + 1;
let highScore = 0;

const displayWinner = (message) => {};

document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  let winningScore = document.querySelector(".score").textContent;
  //when no input provided
  if (!guessNumber) {
    document.querySelector(".message").textContent = "!No Number";
  }
  //When guessing number equals to secret Number
  else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "Winner!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".score").style.width = "30rem";
    if (winningScore > highScore) {
      document.querySelector(".highscore").textContent = winningScore;
      highScore = winningScore;
    }
  }

  //When Guessing number is lower than secret Number
  else if (guessNumber < secretNumber) {
    if (winningScore > 0) {
      if (guessNumber + 3 < secretNumber) {
        document.querySelector(".message").textContent = "Too Low!";
        document.querySelector(".score").textContent = winningScore - 1;
      } else {
        document.querySelector(".message").textContent = "Low!";
        document.querySelector(".score").textContent = winningScore - 1;
      }
    } else {
      document.querySelector(".message").textContent = "You Lost!";
    }
  }
  //When Guessing number is highter than secret Number
  else if (guessNumber > secretNumber) {
    if (winningScore > 0) {
      if (guessNumber > secretNumber + 3) {
        document.querySelector(".message").textContent = "Too High!";
        document.querySelector(".score").textContent = winningScore - 1;
      } else {
        document.querySelector(".message").textContent = "High!";
        document.querySelector(".score").textContent = winningScore - 1;
      }
    } else {
      document.querySelector(".message").textContent = "You Lost!";
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
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").style.width = "15rem";
};
