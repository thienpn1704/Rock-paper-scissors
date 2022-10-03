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
    if (playerChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lost! Paper beats rock");
        }
        else {
            console.log("You win! Rock beats scissors");
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock!");
        }
        else {
            console.log("You lost! Scissors beat paper!");
        }
    }
    else {
        if (computerChoice === "rock") {
            console.log("You lost! Rock beats scissors");
        }
        else {
            console.log("You win! Scissors beat paper");
        }
    }
}

let playerChoice = prompt("Enter your answer");
playRound(playerChoice,getComputerChoice());