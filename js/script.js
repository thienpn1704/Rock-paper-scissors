///////// Phu Nguyen's first every Javascript program /////////

const selections = [{selection: "Rock", value: 0}, {selection: "Paper", value: 1}, {selection: "Scissors", value: 2}];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice () {
    let computerSelection = selections[Math.floor(Math.random()*selections.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const winKey = ["1-0","2-1","0-2"];
    let roundKey = `${playerSelection.value}-${computerSelection.value}`;
    if (playerSelection.value === computerSelection.value) {
        return "It's a tie game";
    }
    else if (winKey.includes(roundKey)) {
        playerScore++;
        return `You win! ${playerSelection.selection} beats ${computerSelection.selection}!`;
    }
    else {
        computerScore++;
        return `You lost! ${computerSelection.selection} beats ${playerSelection.selection}`;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let userInput = parseInt(prompt("Please choose number 0, 1, or 2"));
        console.log(playRound(selections[userInput],getComputerChoice()));
    }
}

game();

