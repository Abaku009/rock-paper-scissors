function getComputerChoice() {
    let choices = "Rock , Paper , Scissors";
    let randomChoices = choices[Math.floor(Math.random() * choices.length)];

    console.log(randomChoices);
}

getComputerChoice();