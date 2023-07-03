const options = document.querySelector('.options');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const playerHand = document.querySelector('#player-hand');
const cpuHand = document.querySelector('#cpu-hand');

const scoreboard = document.querySelector('.scoreboard');
const result = document.querySelector('.result');
const playAgainBtn = document.querySelector('.play-again');

// Rounds

let computerChoice;
let playerChoice;
let winner;

let playerPoints = 0;
let cpuPoints = 0;

let gamesNumber = 1;

function getComputerChoice() {
    let randomNumber = Math.trunc(Math.random() * 3 + 1);

    switch (randomNumber) {
        case 1:
            computerChoice = 'rock';
            cpuHand.src = 'style/images/rock-hand.png';
            break;
        case 2:
            computerChoice = 'paper';
            cpuHand.src = 'style/images/paper-hand.png';
            break;
        case 3:
            computerChoice = 'scissors';
            cpuHand.src = 'style/images/scissors-hand.png';
            break;
    };

    return computerChoice;
};

options.addEventListener('click', function (e) {
    switch (e.target) {
        case rockBtn.children[0]:
            playerChoice = 'rock';
            playerHand.src = 'style/images/rock-hand.png';
            break;
        case paperBtn.children[0]:
            playerChoice = 'paper';
            playerHand.src = 'style/images/paper-hand.png';
            break;
        case scissorsBtn.children[0]:
            playerChoice = 'scissors';
            playerHand.src = 'style/images/scissors-hand.png';
            break;
        case options:
            return;
            break;
    };

    getComputerChoice();
    playRound();
    endGame();
});

function playRound() {
    switch (playerChoice + '|' + computerChoice) {
        case 'rock|rock':
        case 'paper|paper':
        case 'scissors|scissors':
            result.textContent = "It's a tie!";
            scoreboard.textContent = `${playerPoints} - ${cpuPoints}`;
            break;
        case 'rock|scissors':
        case 'paper|rock':
        case 'scissors|paper':
            result.textContent = "You won!";
            playerPoints++;
            scoreboard.textContent = `${playerPoints} - ${cpuPoints}`;
            break;
        case 'rock|paper':
        case 'paper|scissors':
        case 'scissors|rock':
            result.textContent = "You lost...";
            cpuPoints++;
            scoreboard.textContent = `${playerPoints} - ${cpuPoints}`;
            break;
    };
};

function endGame() {
    if (playerPoints === 5) {
        result.textContent = "You won! You're in luck.";

        playerHand.src = 'style/images/trophy.png';
        cpuHand.src = 'style/images/sad-bot.png';
        options.style.display = 'none';

        playAgainBtn.style.display = 'block';

    } else if (cpuPoints === 5) {
        result.textContent = 'You lost... Try again.'

        playerHand.src = 'style/images/sad-player.png';
        cpuHand.src = 'style/images/trophy.png';
        options.style.display = 'none';

        playAgainBtn.style.display = 'block';
    };
};

playAgainBtn.addEventListener('click', () => {
    playerPoints = 0;
    cpuPoints = 0;
    gamesNumber++;

    scoreboard.textContent = 'Choose your next action';
    result.textContent = 'Score 5 points to win'

    playerHand.src = 'style/images/like-hand.png';
    cpuHand.src = 'style/images/like-hand.png';
    options.style.display = 'flex';

    playAgainBtn.style.display = 'none';
});