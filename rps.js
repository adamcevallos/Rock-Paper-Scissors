function computerPlay() {
    let guess = Math.floor(Math.random() * 3);

    switch (guess) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function getScore(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 0;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) 
    {
        return -1;
    } 

    return 1;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return 'You tied! Rock ties with Rock.';
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 'You Lose! Paper beats Rock.';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return 'You tied! Paper ties with Paper.';
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        return 'You win! Rock beats Rock.';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return 'You Tied! Scissors ties with Scissors.';
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 'You win! Scissors beats Paper.';
    }
}

function game() {

    let score = 0;
    let playerSelection;
    let computerSelection;

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter move: ");
        computerSelection = computerPlay();
        score += getScore(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (score < 0) {
        console.log("You lost the game.");
    } else if (score == 0) {
        console.log("You tied the game!");
    } else {
        console.log("You won the game!");
    }
}

game();