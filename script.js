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

function getHumanChoice() {
	let choice = prompt("Rock, paper, scissors?", "");

	return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();

	if (humanChoice == "rock") {
		if (computerChoice == "rock") {
			console.log("A draw!");
		} else if (computerChoice == "paper") {
			console.log("You lose! Paper beats Rock");
			computerScore += 1;
		} else if (computerChoice == "scissors") {
			console.log("You won! Rock beats Scissors");
			humanScore += 1;
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You won! Paper beats Rock");
			humanScore += 1;
		} else if (computerChoice == "paper") {
			console.log("A draw!");
		} else if (computerChoice == "scissors") {
			console.log("You lose! Scissors beats Paper");
			computerScore += 1;
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			console.log("You lose! Rock beats scissors");
			computerScore += 1;
		} else if (computerChoice = "paper") {
			console.log("You won! Scissors beats Paper");
			humanScore += 1;
		} else if (computerChoice == "scissors") {
			console.log("A draw!");
		}
	}
}

for (let i = 1; i <= 5; i++) {
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
	alert("One more round?");
}

if (humanScore > computerScore) {
	console.log("Congrats, you won the game!");
} else {
	console.log("I won the game! Better luck next time.");
}