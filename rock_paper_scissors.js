"use strict";

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll(".btn");
const results = document.querySelector(".results");
const scores = document.querySelector(".scores");
const round = document.querySelector(".current-round");
const final = document.querySelector(".final");
let playerScore = 0;
let compScore = 0;

const reset = function () {
	playerScore = 0;
	compScore = 0;
};

const computerPlay = function () {
	const choices = ["Rock", "Paper", "Scissors"];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
};

const playerRound = function (playerSelection) {
	const a = playerSelection;
	const b = computerPlay();
	const winPlayer = `win! ${a} beats ${b}!`;
	const winComputer = `lose! ${b} beats ${a}!`;
	if (a === b) return "It's a draw!";
	if (a === "Rock") return `You ${b === "Scissors" ? winPlayer : winComputer}`;
	if (a === "Paper") return `You ${b === "Scissors" ? winComputer : winPlayer}`;
	return `You ${b === "Rock" ? winComputer : winPlayer}`;
};

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const playerSelection = e.target.textContent;
		game(playerSelection);
		final.textContent = finalResult(compScore, playerScore);
	});
});

const finalResult = function (score1, score2) {
	if (score1 === 5 || score2 === 5) {
		reset();
		if (score1 !== score2)
			return score1 < score2
				? "You win the game!"
				: "You lose! The computer beat you!";

		return "It's a draw!";
	}
};

const game = function (playerSelection) {
	const x = playerRound(playerSelection);
	if (x.includes("win") && !x.includes("draw")) playerScore++;
	if (x.includes("lose") && !x.includes("draw")) compScore++;

	scores.textContent = `You: ${playerScore} Computer: ${compScore}`;
	round.textContent = x;
};
