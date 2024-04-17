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

//console.log(getComputerChoice());

let playerSelection = "RoCk";
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        console.log("Tie!");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You WIN! Rock beats Scissors");
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("You LOSE! Paper beats Rock");
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("You WIN! Paper beats Rock");
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You LOSE! Scissors beats Paper");
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You LOSE! Rock beats Scissors");
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You WIN! Scissors beats Paper");
    } else {
        console.log("You didn't choose valid!");
    }
}

playRound(playerSelection, computerSelection);
//playRound("Rock", getComputerChoice());

