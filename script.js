function getComputerChoice() {
	let index = Math.floor(Math.random() * 3);
	let choices = ['rock', 'paper', 'scissors'];
	return (choices[index]);
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
	button.addEventListener('click', (event) => {
		const playerChoice = event.target.id;
		console.log(playerChoice);
		const computerChoice = getComputerChoice();

		const result = playRound(playerChoice.toLowerCase(), computerChoice);

		trackScore(result);
		updateScoreDisplay(playerScore, computerScore, drawScore);
		checkWinner(playerScore, computerScore);
	});
});

function playRound(playerChoice, computerChoice) {
	if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')) {
			return 'You win!';
		} else if (playerChoice === computerChoice) {
			return "It's a draw!";
		} else {
			return 'You lose!';
		}
}

function trackScore(result) {
	if (result === 'You win!') {
		playerScore++;
	} else if (result === "It's a draw!") {
		drawScore++;
	} else if (result === 'You lose!') {
		computerScore++;
	}
}

function updateScoreDisplay(playerScore, computerScore, drawScore) {
	const player = document.getElementById('player-score');
	const comp = document.getElementById('computer-score');
	const draw = document.getElementById('draw-score');

	player.textContent = playerScore;
	comp.textContent = computerScore;
	draw.textContent = drawScore;
}

function checkWinner(playerScore, computerScore) {
	const winnerDiv = document.querySelector('.winner');
	const winner = document.createElement('p');
	winnerDiv.appendChild(winner);

	if (playerScore === 5) {
		winner.textContent = "You win!";
		resetGame(winner);
	} else if (computerScore === 5) {
		winner.textContent = "Computer wins!";
		resetGame(winner);
	}
}

function resetGame(winner) {
	const body = document.querySelector('body');
	const resetBtn = document.createElement('button');
	resetBtn.classList.add('reset-button');
	resetBtn.textContent = 'Reset Game';
	body.appendChild(resetBtn);

	resetBtn.addEventListener('click', (event) => {
		playerScore = 0;
		computerScore = 0;
		drawScore = 0;
		updateScoreDisplay(playerScore, computerScore, drawScore);
		winner.textContent = '';
		resetBtn.remove();
	})
}