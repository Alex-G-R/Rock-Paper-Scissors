let playerScore = 0;
let computerScore = 0;
//for (playerScore < 5; computerScore < 5;) {
        
let choiceId;
choiceId = Math.floor(Math.random()*3)
    
function writeCoputerChoice (UID) {
    if (UID == 0) {
        return "Paper";
    }
    else if (UID == 1) {
        return "Rock";
    }
    else {
        return "Scissors";
    }
}
document.write("Computer chose: "+writeCoputerChoice(choiceId)+"<br>"+"<br>"+"<br>")
let userPrompt;
userPrompt = prompt("Rock, Paper, Scissors")
switch (userPrompt) {
    case "Paper":
    case "RAPER":
    case "paper":
    userPrompt = 0;
    break;
    case "Rock":
    case "ROCK":
    case "rock":
    userPrompt = 1;
    break;
    case "Scissors":
    case "SCISSORS":
    case "scissors":
    userPrompt = 2;
    break;
    default:
        alert("Invalid input, please try again");

}
function writePlayerChoice (UID) {
    if (UID == 0) {
        return "Paper";
    }
    else if (UID == 1) {
        return "Rock";
    }
    else {
        return "Scissors";
    }
}
document.write("Player chose: "+writePlayerChoice(userPrompt)+"<br>"+"<br>"+"<br>")

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "That is a tie!";
    }
    else if (playerSelection == 1 && computerSelection == 0) {
        computerScore++
        return "Computer wins, paper beats rock!";
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        playerScore++
        return "Player wins, rock beats scissors!";
    }
    else if (playerSelection == 2 && computerSelection == 0) {
        playerScore++
        return "Player wins, scissors beats paper!";
    }
    else if (playerSelection == 2 && computerSelection == 1) {
        computerScore++
        return "Computer wins, rock beats scissors!";
    }
    else if (playerSelection == 0 && computerSelection == 1) {
        playerScore++
        return "Player wins, paper beats rock!";
    }
    else if (playerSelection == 0 && computerSelection == 2) {
        computerScore++
        return "Computer wins, scissors beats paper!";
    }
}
document.write(playRound(userPrompt, choiceId)+"<br>")