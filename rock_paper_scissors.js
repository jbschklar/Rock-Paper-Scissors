"use strict";

const computerPlay = function () {
	const choices = ["Rock", "Paper", "Scissors"];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
};

console.log(computerPlay());

const playerRound = function (a, b) {
	const winA = `win! ${a} beats ${b}!`;
	const winB = `lose! ${b} beats ${a}!`;
	if (a === b) return "It's a draw!";
	if (a === "Rock") return `You ${b === "Scissors" ? winA : winB}`;
	if (a === "Paper") return `You ${b === "Scissors" ? winB : winA}`;
	if (a === "Scissors") return `You ${b === "Rock" ? winB : winA}`;
};

const game = function () {
	let x = prompt("What's your choice? Rock, Paper, or Scissors?");
	let playerSelection = x[0].toUpperCase() + x.slice(1).toLowerCase();

	if (
		playerSelection !== "Rock" &&
		playerSelection !== "Paper" &&
		playerSelection !== "Scissors"
	) {
		alert("Invalid selection. Please choose rock, paper, or scissors :)");
		location.reload();
	}
	let computerSelection = computerPlay();
	console.log(playerSelection, computerSelection);
	return playerRound(playerSelection, computerSelection);
};

console.log(game());
