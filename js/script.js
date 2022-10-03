function randomNumber () {
    let rand = Math.floor(Math.random()*3);
    return rand;
}

function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[randomNumber()];
    return computerChoice
}

console.log(getComputerChoice());