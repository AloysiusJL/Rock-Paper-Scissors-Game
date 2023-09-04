let computerScore = 0;
let userScore = 0;
let gameRound = 0;
let gameEnded = false;

const modalInstructions = document.getElementById('instructionsModal');
const modalWinner = document.getElementById('winnerModal');
const instructions = document.getElementById('instructions');
const winnerMessage = document.getElementById('winnerMessage');
const playAgainBtn = document.getElementById('playAgainBtn');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playGame));

modalInstructions.style.display = 'block';

function playGame(e) {
    if (gameEnded) return;

    const userSelection = e.target.getAttribute('data-choice');
    const computerSelection = getComputerChoice();

    const saveResult = playRound(userSelection, computerSelection);

    updateUserInterface(userSelection, computerSelection, saveResult);
    checkWinner();

    // Indicate the player's choice and the computer's choice
    document.getElementById('playerChoice').textContent = `You chose: ${userSelection}`;
    document.getElementById('computerChoice').textContent = `Computer chose: ${computerSelection}`;
}

function getComputerChoice() {
    const arrOfChoice = ["✊", "✋", "✌"];
    const randomNumber = Math.floor(Math.random() * arrOfChoice.length);
    const computerChoice = arrOfChoice[randomNumber];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === '✊' && computerSelection === '✌') ||
        (playerSelection === '✋' && computerSelection === '✊') ||
        (playerSelection === '✌' && computerSelection === '✋')
    ) {
        userScore++;
        return 'You win this round!';
    } else {
        computerScore++;
        return 'Computer wins this round.';
    }
}

function updateUserInterface(userSelection, computerSelection, result) {
    const currentUserScore = document.getElementById('yourScore');
    const currentComputerScore = document.getElementById('computerScore');
    const showResult = document.getElementById('result');

    currentUserScore.textContent = userScore;
    currentComputerScore.textContent = computerScore;
    showResult.textContent = result;
}

function checkWinner() {
    gameRound++;
    if (userScore === 5 || computerScore === 5) {
        gameEnded = true;
        if (userScore === 5) {
            winnerMessage.textContent = 'Congratulations! You win the game!';
        } else {
            winnerMessage.textContent = 'Computer wins the game. Better luck next time!';
        }
        modalWinner.style.display = 'block';
    }
}

// Event listeners for modals
modalInstructions.addEventListener('click', (e) => {
    if (e.target === modalInstructions || e.target.classList.contains('close')) {
        closeModal(modalInstructions);
    }
});

modalWinner.addEventListener('click', (e) => {
    if (e.target === modalWinner || e.target.classList.contains('close')) {
        closeModal(modalWinner);
        resetGame();
    }
});

playAgainBtn.addEventListener('click', () => {
    closeModal(modalWinner);
    resetGame();
});

function closeModal(modal) {
    modal.style.display = 'none';
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    gameRound = 0;
    gameEnded = false;
    document.getElementById('yourScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    instructions.textContent = 'Click on your choice to start the game.';
}
