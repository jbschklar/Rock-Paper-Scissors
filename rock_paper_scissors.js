"use strict";

const computerPlay = function () {
	const choices = ["Rock", "Paper", "Scissors"];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
};

console.log(computerPlay());

const playerRound = function (a, b) {
	const winPlayer = `win! ${a} beats ${b}!`;
	const winComputer = `lose! ${b} beats ${a}!`;
	if (a === b) return "It's a draw!";
	if (a === "Rock") return `You ${b === "Scissors" ? winPlayer : winComputer}`;
	if (a === "Paper") return `You ${b === "Scissors" ? winComputer : winPlayer}`;
	return `You ${b === "Rock" ? winComputer : winPlayer}`;
};

const game = function () {
	let compScore = 0;
	let playerScore = 0;

	for (let i = 0; i < 5; i++) {
		let choice = prompt("What's your choice? Rock, Paper, or Scissors?");
		let playerSelection =
			choice[0].toUpperCase() + choice.slice(1).toLowerCase();

		if (
			playerSelection !== "Rock" &&
			playerSelection !== "Paper" &&
			playerSelection !== "Scissors"
		) {
			alert("Invalid selection. Please choose rock, paper, or scissors :)");
			// ++i;
			continue;
		}
		let computerSelection = computerPlay();
		console.log(playerSelection, computerSelection);

		const x = playerRound(playerSelection, computerSelection);
		console.log(x);
		if (x.includes("win") && !x.includes("draw")) playerScore++;
		if (x.includes("lose") && !x.includes("draw")) compScore++;
	}
	if (compScore !== playerScore)
		return compScore > playerScore
			? "You win the game!"
			: "You lose! The computer beat you!";

	return "It's a draw!";
};

console.log(game());
