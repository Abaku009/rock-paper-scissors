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

let playerSelection = prompt("Choose: Rock or Paper or Scissors");
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

//console.log(playRound(playerSelection, computerSelection));
//console.log(playRound("Rock", getComputerChoice()));


function playGame() {
    let yourScore = 0;
    let computerScore = 0;
    let winString = "WIN";
    let loseString = "LOSE";
    for (let i = 1; i <= 5; i++) { 
        let result = playRound(playerSelection, computerSelection);   
        if(result === "Tie!") {
            yourScore = yourScore + 1;
            computerScore = computerScore + 1;
            console.log("Your score is: ", yourScore);
            console.log("Computer's score is: ", computerScore);
        } else if(result === result.includes(winString)) {
            yourScore = yourScore + 1;
            computerScore = computerScore + 0;
            console.log("Your score is: ", yourScore);
            console.log("Computer's score is: ", computerScore);
        } else if(result === result.includes(loseString)) {
            computerScore = computerScore + 1;
            yourScore = yourScore + 0;
            console.log("Computer's score is: ", computerScore);
            console.log("Your score is: ", yourScore);
        }
    }

    if(yourScore === 5 && computerScore === 5) {
        console.log("IT'S A TIE!");
    } else if(yourScore === 5) {
        console.log("YOU ARE THE WINNER!");
    } else if(computerScore === 5) {
        console.log("YOU ARE THE LOSER!");
    }
}

