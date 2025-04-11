const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

rockBtn.addEventListener('click', function() {
    playGame('rock');
});

paperBtn.addEventListener('click', function() {
    playGame('paper');
});

scissorsBtn.addEventListener('click', function() {
    playGame('scissors');
});

function playGame(playerChoice) {
    playerDisplay.textContent = "Your choice: " + playerChoice;

    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * 3)];
   
    computerDisplay.textContent = "Computer's choice: " + computerChoice;

    let result;
    
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    
    resultDisplay.textContent = "Result: " + result;
}