"use strict";

const shapes = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return shapes[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionTitleCase = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if ((playerSelectionTitleCase == "Rock" || computerSelection == "Rock") && (playerSelectionTitleCase == "Scissors" || computerSelection == "Scissors")) {
        return (playerSelectionTitleCase == "Rock") ? "win" : "lose";
    } else if ((playerSelectionTitleCase == "Scissors" || computerSelection == "Scissors") && (playerSelectionTitleCase == "Paper" || computerSelection == "Paper")) {
        return (playerSelectionTitleCase == "Scissors") ? "win" : "lose";
    } else if ((playerSelectionTitleCase == "Paper" || computerSelection == "Paper") && (playerSelectionTitleCase == "Rock" || computerSelection == "Rock")) {
        return (playerSelectionTitleCase == "Paper") ? "win" : "lose";
    } else {
        return "draw";
    }

}

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