"use strict";

let playerScore = 0;
let computerScore = 0;
let maxPoints = 5;

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return shapes[Math.floor(Math.random() * 3)];
}

function disableButtons() {
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}

function checkWinLossCondition(playerScore, computerScore, maxPoints) {
    if (playerScore == maxPoints) {
        let gameWinningStatement = document.createElement("p");
        gameWinningStatement.textContent = `You've won the game!`;
        gameWinningStatement.style.color = "green"
        resultsContainer.insertBefore(gameWinningStatement, resultsContainer.firstElementChild);
        disableButtons();
    } else if (computerScore == maxPoints) {
        let gameLosingStatement = document.createElement("p");
        gameLosingStatement.textContent = `You've lost the game!`;
        gameLosingStatement.style.color = "red";
        resultsContainer.insertBefore(gameLosingStatement, resultsContainer.firstElementChild);
        disableButtons();
    }
}

function createRoundResults(playerChoice, winningSelection, losingSelection) {
    switch (playerChoice) {
        case winningSelection:
            let winningStatement = document.createElement("p");
            winningStatement.textContent = `You win! ${winningSelection} beats ${losingSelection}.`
            resultsContainer.insertBefore(winningStatement, resultsContainer.firstElementChild);
            playerScore += 1;
            let playerWinningScore = document.createElement("p");
            playerWinningScore.textContent = `${playerScore}`;
            playerScoresContainer.insertBefore(playerWinningScore, playerScoresContainer.firstElementChild);
            let computerLosingScore = document.createElement("p");
            computerLosingScore.textContent = `${computerScore}`;
            computerScoresContainer.insertBefore(computerLosingScore, computerScoresContainer.firstElementChild);
            break;
        case losingSelection:
            let losingStatement = document.createElement("p");
            losingStatement.textContent = `You lose! ${winningSelection} beats ${losingSelection}.`
            resultsContainer.insertBefore(losingStatement, resultsContainer.firstElementChild);
            computerScore += 1;
            let playerLosingScore = document.createElement("p");
            playerLosingScore.textContent = `${playerScore}`;
            playerScoresContainer.insertBefore(playerLosingScore, playerScoresContainer.firstElementChild);
            let computerWinningScore = document.createElement("p");
            computerWinningScore.textContent = `${computerScore}`;
            computerScoresContainer.insertBefore(computerWinningScore, computerScoresContainer.firstElementChild);
            break;
        default:
            let drawStatement = document.createElement("p");
            drawStatement.textContent = `It's a draw. Computer played ${playerChoice}.`;
            resultsContainer.insertBefore(drawStatement, resultsContainer.firstElementChild);
            let playerDrawScore = document.createElement("p");
            playerDrawScore.textContent = `${playerScore}`
            playerScoresContainer.insertBefore(playerDrawScore, playerScoresContainer.firstElementChild);
            let computerDrawScore = document.createElement("p");
            computerDrawScore.textContent = `${computerScore}`;
            computerScoresContainer.insertBefore(computerDrawScore, computerScoresContainer.firstElementChild);
            break;
    }
}

function playRound(e) {
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    if ((playerChoice == "Rock" || computerChoice == "Rock") && (playerChoice == "Scissors" || computerChoice == "Scissors")) {
        createRoundResults(playerChoice, "Rock", "Scissors");
    } else if ((playerChoice == "Scissors" || computerChoice == "Scissors") && (playerChoice == "Paper" || computerChoice == "Paper")) {
        createRoundResults(playerChoice, "Scissors", "Paper");    
    } else if ((playerChoice == "Paper" || computerChoice == "Paper") && (playerChoice == "Rock" || computerChoice == "Rock")) {
        createRoundResults(playerChoice, "Paper", "Rock"); 
    } else {
        createRoundResults(playerChoice); 
    }
    checkWinLossCondition(playerScore, computerScore, maxPoints);
}

alert("Play Rock-Paper-Scissors against the computer. First to 5 points wins!");

const playerScoresContainer = document.querySelector(".player-scores-container");
const resultsContainer = document.querySelector(".round-results-container");
const computerScoresContainer = document.querySelector(".computer-scores-container");

const playerButtons = Array.from(document.querySelectorAll(".player-button"));
playerButtons.forEach(playerButton => playerButton.addEventListener("click", playRound));