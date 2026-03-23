function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getComputerChoice() {
	let n = getRandomInt(3);

	if (n == 0) {
		return ("rock");
	} else if (n == 1) {
		return ("paper");
	} else if (n == 2) {
		return ("scissors");
	}
}

// function getHumanChoice() {
// 	let choice = prompt("Rock, paper, scissors?", "");

// 	return choice;
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();

	if (humanChoice === computerChoice) {
		console.log(`It's a draw!`);
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") || 
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		humanScore++;
		console.log(`You win! ${humanChoice} beats ${computerChoice}`);
	} else {
		computerScore++;
		console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
	}
}

// for (let i = 1; i <= 5; i++) {
	// const humanSelection = getHumanChoice();
	// const computerSelection = getComputerChoice();
	// playRound(humanSelection, computerSelection);
	// alert("One more round?");
// }

// if (humanScore > computerScore) {
// 	console.log("Congrats, you won the game!");
// } else {
// 	console.log("I won the game! Better luck next time.");
// }

const rockButton = document.getElementById("rock");
rockButton.onclick = () => playRound("rock", getComputerChoice());

const paperButton = document.getElementById("scissors");
paperButton.onclick = () => playRound("paper", getComputerChoice());

const scissorsButton = document.getElementById("paper");
scissorsButton.onclick = () => playRound("scissors", getComputerChoice());

const body = document.querySelector("body");
const playerScore = document.createElement("p");
playerScore.classList.add("playerScore");
playerScore.textContent = humanScore;

const compScore = document.createElement("p");
compScore.classList.add("computerScore");
compScore.textContent = computerScore;

body.appendChild(playerScore);
body.appendChild(compScore);