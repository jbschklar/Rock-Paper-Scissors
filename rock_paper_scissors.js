"use strict";

const computerPlay = function () {
	const choices = ["rock", "paper", "scissors"];
	const choice = choices[Math.floor(Math.random() * choices.length)];
	return choice;
};

console.log(computerPlay());
