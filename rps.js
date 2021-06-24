function computerPlay() {
    let guess = Math.floor(Math.random() * 3);

    switch (guess) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    } 
}

function playRound(playerSelection, computerSelection) {
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

function game() {

    const playerScoreText = document.querySelector('#user-score');
    const opponentScoreText = document.querySelector('#opponent-score');
    const message = document.querySelector('#message');

    let playerScore = 0;
    let opponentScore = 0;

    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => btn.addEventListener('click', function() {

        if (playerScore < 5 && opponentScore < 5) {
            let playerPlay = btn.id;
            let opponentPlay = computerPlay();
            let result = playRound(playerPlay, opponentPlay);

            playerScore = (result == 1) ? (playerScore + 1) : playerScore;
            opponentScore = (result == -1) ? (opponentScore + 1) : opponentScore;
            message.textContent = (result == 1) ? 'You won the round!' :
                                  (result == 0) ? 'You tied the round.' :
                                                  'You lost the round!';

            playerScoreText.textContent = `Your Score: ${playerScore}`;
            opponentScoreText.textContent = `Opponent Score: ${opponentScore}`;

            if (playerScore == 5) {
                message.textContent = "You won the game!";
            } else if (opponentScore == 5) {
                message.textContent = "You lost the game!";
            }

        }

    }));
}



game();
