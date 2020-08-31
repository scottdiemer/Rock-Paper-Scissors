// Set array with choices
const selectionOptions = ["Rock", "Paper", "Scissors"];

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
  // Get indexs of selection to use for computation
  const player = selectionOptions.indexOf(capitalizeWord(playerSelection));
  const computer = selectionOptions.indexOf(computerSelection);

  // The higher indexes beat lower indexes with the
  // exception of Rock beating Scissors
  // Check for Rock and Scissors first
  // otherwise check for greater index value
  if (player === 0 && computer === 2) {
    console.log("Rock beats Scissors! Player Wins!");
  } else if (computer === 0 && player === 2) {
    console.log("Rock beats Scissors! Computer Wins!");
  } else if (player > computer) {
    console.log(`${playerSelection} beats ${computerSelection}! Player Wins!`);
  } else if (player === computer) {
    console.log(`Both picked ${computerSelection}. Tie!`);
  } else {
    console.log(
      `${computerSelection} beats ${playerSelection}! Computer Wins!`
    );
  }
}

// Use playRound inside of this function to play a 5 round game
// that keeps score and reports a winner or loser at the end
function game() {
  for (let x = 0; x < 5; x++) {
    // Prompt user each round
    const playerSelection = prompt(
      "Pick Rock, Paper, or Scissors! (type word)"
    );
    // Let computer randomly pick
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}

function getRandomInt(maxNumber) {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

// Run game
game();
