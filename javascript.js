function getComputerChoice() {
    let choiceOne = "Rock";
    let choiceTwo = "Paper";
    let choiceThree = "Scissors";

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        return choiceOne;
    } else if(randomNumber === 2) {
        return choiceTwo;
    } else if(randomNumber === 3) {
        return choiceThree;
    }
}

let playerSelection = "RoCk";
let computerSelection = getComputerChoice();

console.log("Computer's choice is:");
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "Tie!";
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You WIN! Rock beats Scissors";
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You LOSE! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You WIN! Paper beats Rock";
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You LOSE! Scissors beats Paper";
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You LOSE! Rock beats Scissors";
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You WIN! Scissors beats Paper";
    } else {
        return "Your choice is not valid!";
    }
}

console.log(playRound(playerSelection, computerSelection));
//console.log(playRound("Rock", getComputerChoice()));

