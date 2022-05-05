"use strict";

const computerPlay = function () {
	const choices = ["rock", "paper", "scissors"];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
};

console.log(computerPlay());

const playerRound = function (playerSelection, computerSelection) {
	const a = playerSelection.toLowerCase();
	const b = computerSelection.toLowerCase();

	if (a === b) return "It's a draw!";
	if (a === "rock" && b === "scissors") return "You win! Rock beats Scissors!";
	if (a === "rock" && b === "paper") return "You lose! Paper beats Rock!";
	if (a === "paper" && b === "rock") return "You win! Paper beats Rock!";
	if (a === "paper" && b === "scissors")
		return "You lose! Scissors beat Paper!";
	if (a === "scissors" && b === "paper")
		return "You win! Scissors beats Paper!";
	if (a === "scissors" && b === "rock") return "You lose! Rock beats Scissors!";
};

const game = function () {
	let playerSelection = prompt("What's your choice? Rock, Paper, or Scissors?");
	let computerSelection = computerPlay();
	console.log(playerSelection, computerSelection);
	return playerRound(playerSelection, computerSelection);
};

console.log(game());
