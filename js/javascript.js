"use strict";

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return shapes[Math.floor(Math.random() * 3)];
}

function createRoundResults(playerSelection, winningSelection, losingSelection) {
    switch (playerSelection) {
        case winningSelection:
            let winningStatement = document.createElement("p");
            winningStatement.textContent = `You win! ${winningSelection} beats ${losingSelection}.`
            resultsContainer.insertBefore(winningStatement, resultsContainer.firstElementChild);
            break;
        case losingSelection:
            let losingStatement = document.createElement("p");
            losingStatement.textContent = `You lose! ${winningSelection} beats ${losingSelection}.`
            resultsContainer.insertBefore(losingStatement, resultsContainer.firstElementChild);
            break;
        default:
            let drawStatement = document.createElement("p");
            drawStatement.textContent = "It's a draw.";
            resultsContainer.insertBefore(drawStatement, resultsContainer.firstElementChild);
            break;
    }
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    if ((playerSelection == "Rock" || computerSelection == "Rock") && (playerSelection == "Scissors" || computerSelection == "Scissors")) {
        createRoundResults(playerSelection, "Rock", "Scissors");
    } else if ((playerSelection == "Scissors" || computerSelection == "Scissors") && (playerSelection == "Paper" || computerSelection == "Paper")) {
        createRoundResults(playerSelection, "Scissors", "Paper");    
    } else if ((playerSelection == "Paper" || computerSelection == "Paper") && (playerSelection == "Rock" || computerSelection == "Rock")) {
        createRoundResults(playerSelection, "Paper", "Rock"); 
    } else {
        createRoundResults(playerSelection); 
    }

}

const playerButtons = Array.from(document.querySelectorAll(".player-button"));
playerButtons.forEach(playerButton => playerButton.addEventListener("click", playRound));

const resultsContainer = document.querySelector(".results-container");

/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose your shape by typing 'Rock', 'Paper', or 'Scissors'");
        let computerChoice = getComputerChoice();
        let roundOutcome = playRound(playerChoice, computerChoice);
        switch (roundOutcome) {
            case "win":
                playerScore += 1;
                console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
                break;
            case "lose":
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
                break;
            case "draw":
                console.log(`It's a draw! You both played ${playerChoice}.`)
                break;
        }
        console.log(`The current scores are Player: ${playerScore}, Computer: ${computerScore}.`);
        
    }
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won! ${playerScore} - ${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lost! ${playerScore} - ${computerScore}.`)
    } else {
        console.log(`It's a draw! ${playerScore} - ${computerScore}.`)
    }

}

game();
*/