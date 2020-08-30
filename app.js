const playerSelection = "rock";
const selectionOptions = ["rock", "paper", "scissors"];
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))

// Randomly return either Rock, Paper, or Scissors
function computerPlay() {
  // Pick random number
  const computerPick = getRandomInt(selectionOptions.length);
  // return corresponding selection option
  return selectionOptions[computerPick];
}

// Play single round of Rock, Paper, Scissors
// and return a string that declares the winner
// example: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  const player = selectionOptions.indexOf(playerSelection);
  const computer = selectionOptions.indexOf(computerSelection);

  if (player > computer) {
    console.log(playerSelection + " beats " + computerSelection);
  }
}

// Use playRound inside of this function to play a 5 round game
// that keeps score and reports a winner or loser at the end
function game() {}

function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

// console.log(computerPlay());
console.log(selectionOptions.indexOf(computerSelection));
// console.log(selectionOptions[getRandomInt(selectionOptions.length)]);
