function getComputerChoice() {
    let choiceOne = "Rock";
    let choiceTwo = "Paper";
    let choiceThree = "Scissors";

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber === 1) {
        console.log(choiceOne);
    } else if(randomNumber === 2) {
        console.log(choiceTwo);
    } else if(randomNumber === 3) {
        console.log(choiceThree);
    }
}

getComputerChoice();