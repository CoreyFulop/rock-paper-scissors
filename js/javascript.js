"use strict";

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return shapes[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionTitleCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelectionTitleCase == "Rock" || computerSelection == "Rock") && (playerSelectionTitleCase == "Scissors" || computerSelection == "Scissors")) {
        return (playerSelectionTitleCase == "Rock") ? "You win! Rock beats Scissors" : "You lose! Rock beats Scissors";
    } else if ((playerSelectionTitleCase == "Scissors" || computerSelection == "Scissors") && (playerSelectionTitleCase == "Paper" || computerSelection == "Paper")) {
        return (playerSelectionTitleCase == "Scissors") ? "You win! Scissors beats Paper" : "You lose! Scissors beats Paper";
    } else if ((playerSelectionTitleCase == "Paper" || computerSelection == "Paper") && (playerSelectionTitleCase == "Rock" || computerSelection == "Rock")) {
        return (playerSelectionTitleCase == "Paper") ? "You win! Paper beats Rock" : "You lose! Paper beats Rock";
    } else {
        return "It's a draw!";
    }

}