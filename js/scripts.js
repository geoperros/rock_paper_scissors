function getComputerChoice() {
    let choise_int = Math.floor(Math.random() * 3);
    if (choise_int === 0) {
        return "rock";
    }   else if (choise_int === 1) {
        return "paper"
    }   else {
        return "scissors"
    }
}

function playerSelection() {
    let prompt_player = prompt("Rock, Paper, or Scissors?");
    let prompt_player_lower = prompt_player.toLowerCase();
    return prompt_player_lower;
}

function game(){
    let player_score = 0
    let computer_score = 0
    for (let i = 0 ; i < 5 || (player_score < 5 || computer_score < 5) ; i++)   {
        console.log(`Round ${i + 1}`)
        let round_winner = playRound();
        if (round_winner === "player_win") {
            player_score = player_score + 1;
            console.log("Player Wins!")
            console.log(`Player's points = ${player_score}`)
            console.log(`Computer's score = ${computer_score}`)
        }   else if ( round_winner === "computer_win") {
            computer_score = computer_score + 1;
            console.log("Computer Wins!")
            console.log(`Player's points = ${player_score}`)
            console.log(`Computer's score = ${computer_score}`)
        }   else {
            console.log("Its a Tie!")
            console.log(`Player's points = ${player_score}`)
            console.log(`Computer's score = ${computer_score}`)
        }
        if (player_score === 5) {
            console.log("Player won the game!")
            break
        }   else if (computer_score === 5) {
            console.log("Computer won the game!")
            break
        }
    }


}

function playRound() {
    let computer_choise = getComputerChoice();
    let player_choise = playerSelection();
    if (computer_choise === "rock") {
        if (player_choise === "rock") {
            return "tie";
        }   else if (player_choise === "paper") {
            return "player_win";
        }   else if (player_choise === "scissors") {
            return "computer_win";
        }
    }   else if (computer_choise === "paper") {
        if (player_choise === "rock") {
            return "computer_win";
        }   else if (player_choise === "paper") {
            return "tie";
        }   else if (player_choise === "scissors") {
            return "player_win";
        }

    }   else if (computer_choise === "scissors") {
        if (player_choise === "rock") {
            return "player_win";
        }   else if (player_choise === "paper") {
            return "computer_win";
        }   else if (player_choise === "scissors") {
            return "tie";
        }
    }
}