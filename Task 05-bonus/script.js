const btn = document.querySelector(".game__btn");
const turnCounter = document.querySelector(".game__turn");
const playerScore = document.querySelector(".game__score-player");
const computerScore = document.querySelector(".game__score-computer");
const playerDice = document.querySelectorAll(".game__player-dice");
const computerDice = document.querySelectorAll(".game__computer-dice");
const winner = document.querySelector(".game__winner");

let playerTotal = 0;
let computerTotal = 0;
let turn = 0;
let gameOver = false;

function diceToss() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetGame() {
  playerTotal = 0;
  computerTotal = 0;
  turn = 0;
  gameOver = false;

  turnCounter.textContent = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  winner.textContent = "";
  btn.textContent = "TOSS DICE";

  playerDice[0].textContent = 0;
  playerDice[1].textContent = 0;
  computerDice[0].textContent = 0;
  computerDice[1].textContent = 0;
}

function tossDice() {
  if (gameOver) {
    resetGame();
  }

  turn++;
  turnCounter.textContent = turn;

  const playerRolls = [diceToss(), diceToss()];
  const computerRolls = [diceToss(), diceToss()];

  playerDice[0].textContent = playerRolls[0];
  playerDice[1].textContent = playerRolls[1];

  computerDice[0].textContent = computerRolls[0];
  computerDice[1].textContent = computerRolls[1];

  const playerSum = playerRolls[0] + playerRolls[1];
  const computerSum = computerRolls[0] + computerRolls[1];

  if (playerSum > computerSum) {
    playerTotal++;
  } else if (computerSum > playerSum) {
    computerTotal++;
  }

  playerScore.textContent = playerTotal;
  computerScore.textContent = computerTotal;

  if (playerTotal >= 7 || computerTotal >= 7) {
    gameOver = true;
    const winner = playerTotal >= 7 ? "Player" : "Computer";
    showWinner(`${winner} is winner!`);
    btn.textContent = "PLAY AGAIN";
  }
}

function showWinner(message) {
  winner.textContent = message;
  winner.style.opacity = 0;
  winner.style.transform = "scale(0.5)";
  winner.style.display = "block";

  winner.animate(
    [
      { opacity: 0, transform: "scale(0.5)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    {
      duration: 800,
      easing: "ease-out",
      fill: "forwards",
    }
  );
}

btn.addEventListener("click", tossDice);
