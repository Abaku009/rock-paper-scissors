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

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log("Tie!");
    } else if(playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You WIN! Rock beats Scissors");
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You LOSE! Paper beats Rock");
    } else if(playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You WIN! Paper beats Rock");
    } else if(playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You LOSE! Scissors beats Paper");
    } else if(playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You LOSE! Rock beats Scissors");
    } else if(playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You WIN! Scissors beats Paper");
    } 
    
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();
