function randomNumber () {
    let rand = Math.floor(Math.random()*3);
    return rand;
}

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[randomNumber()];
    return computerChoice
}

function playRound(playerChoice, computerChoice) {
    let score;
    if (playerChoice === computerChoice) {
        return score ="It's a draw!";
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            return score ="You lost! Paper beats rock";
        }
        else {
            return score ="You win! Rock beats scissors";
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return score ="You win! Paper beats rock!";
        }
        else {
            return score ="You lost! Scissors beat paper!";
        }
    }
    else {
        if (computerChoice === "rock") {
            return score ="You lost! Rock beats scissors";
        }
        else {
            return score ="You win! Scissors beat paper";
        }
    }
}

const playerChoice = prompt("Choose your answer");
console.log(playRound(playerChoice,getComputerChoice()));


