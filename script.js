const choices = ["rock", "paper", "scissors"];
let round = 0;
let computerScore = 0;
let playerScore = 0;

function computerPlay () {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playerPlay () {
    let playerChoice = prompt (`Type your choice: "rock", "paper" or "scissors".`).toLowerCase().trim();
    if (!choices.includes(playerChoice) || playerChoice == null) {
        alert (`Must enter a valid input! Type "Rock", "Paper" or "Scissors".`);
    } else {
        return playerChoice;
    }
}

function playRound (computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        round++;
        return (`|ROUND: ${round} | ❌ It's a tie!
            We both chose ${computerChoice}
            |Your - ${playerScore} vs ${computerScore} - Me|`);
    } else if (computerChoice === "rock") {
        if (playerChoice === "paper") {
            round++;
            playerScore++;
            return (`|ROUND: ${round} | 🙌 You Win!
            You Chose ${playerChoice} and I chose ${computerChoice}.
            ${playerChoice} beats ${computerChoice}.
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        } else {
            round++;
            computerScore++;
            return (`|ROUND: ${round} | 😫 You Lose...
            You Chose ${playerChoice} and I chose ${computerChoice}. 
            ${playerChoice} gets beaten by ${computerChoice}
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        }
    } else if (computerChoice === "paper") {
        if (playerChoice === "scissors") {
            round++;
            playerScore++;
            return (`|ROUND: ${round} | 🙌 You Win!
            You Chose ${playerChoice} and I chose ${computerChoice}.
            ${playerChoice} beats ${computerChoice}.
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        } else {
            round++;
            computerScore++;
            return (`|ROUND: ${round} | 😫 You Lose...
            You Chose ${playerChoice} and I chose ${computerChoice}. 
            ${playerChoice} gets beaten by ${computerChoice}
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        }
    } else if (computerChoice === "scissors") {
        if (playerChoice === "rock") {
            round++;
            playerScore++;
            return (`|ROUND: ${round} | 🙌 You Win! 
            You Chose ${playerChoice} and I chose ${computerChoice}.
            ${playerChoice} beats ${computerChoice}.
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        } else {
            round++;
            computerScore++;
            return (`|ROUND: ${round} | 😫 You Lose... 
            You Chose ${playerChoice} and I chose ${computerChoice}.
            ${playerChoice} gets beaten by ${computerChoice}
            |Your - ${playerScore} vs ${computerScore} - Me|`);
        }
    }
}

function game () {
    alert (`Welcome to JavaScript - Rock | Paper | Scissors - Console Game!`)
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        if (playerSelection == undefined) {
            i--;
        } else {
            console.log(playRound(computerPlay(), playerSelection));
        }
        
    }
    if (computerScore === playerScore) {
        console.log(`Final Score: |You - ${playerScore} vs ${computerScore} - Me|
             RESULTS: ❌ DRAW! ❌`);
    } else if (computerScore < playerScore) {
        console.log(`Final Score: |You - ${playerScore} vs ${computerScore} - Me|
             RESULTS: YOU WIN! CONGRATULATIONS! 🏆`)
    } else {
        console.log(`Final Score: |You - ${playerScore} vs ${computerScore} - Me|
             RESULTS: I WIN! 🤖`)
    }
}

game();