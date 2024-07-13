/* 
    -For now, remove the logic that plays exactly five rounds.
    -Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
    -Add a div for displaying results and change all of your console.logs into DOM methods.
    -Display the running score, and announce a winner of the game once one player reaches 5 points.
    -You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
 */

// global variables to be used in playRound and playGame

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const message = document.querySelector(".round-message");
const scores = document.querySelector(".scores");

rock.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
  
    // playRound determines the winner of the round, increments his score by one,
    // and returns a string announcing the winner of the round
    message.textContent = playRound("rock", getComputerChoice());
  
    if (playerScore === 5) {
      message.textContent = `Game ended! you won the game!`;
    }
    if (computerScore === 5) {
      message.textContent = `Game ended! you lost the game!`;
    }
  }
  scores.textContent = `your score is ${playerScore}, and the computer score is ${computerScore}`;
  console.log(message.textContent);
});


paper.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
   
    message.textContent = playRound("paper", getComputerChoice());
   
    if (playerScore === 5) {
      message.textContent = `Game ended! you won the game!`;
    }
    if (computerScore === 5) {
      message.textContent = `Game ended! you lost the game!`;
    }
  }
  scores.textContent = `your score is ${playerScore}, and the computer score is ${computerScore}`;
  console.log(message.textContent);
});


scissors.addEventListener("click", () => {
  if (playerScore < 5 && computerScore < 5) {
    
    message.textContent = playRound("scissors", getComputerChoice());
    
    if (playerScore === 5) {
      message.textContent = `Game ended! you won the game!`;
    }
    if (computerScore === 5) {
      message.textContent = `Game ended! you lost the game!`;
    }
  }
  scores.textContent = `your score is ${playerScore}, and the computer score is ${computerScore}`;
  console.log(message.textContent);
});

function playRound(player, computer) {
  // convert player input to lowercase to make it case insensitive
  player = player.toLowerCase();

  // Player plays rock
  if (player == "rock" && computer == "rock") {
    return "It's a Tie!";
  }

  if (player == "rock" && computer == "paper") {
    ++computerScore;
    return "You lose! paper beats rock";
  }

  if (player == "rock" && computer == "scissors") {
    ++playerScore;
    return "You Win! Rock beats scissors";
  }

  // Player plays paper

  if (player == "paper" && computer == "rock") {
    ++playerScore;
    return "You Win! Paper beats rock";
  }
  if (player == "paper" && computer == "paper") {
    return "It's a Tie!";
  }
  if (player == "paper" && computer == "scissors") {
    ++computerScore;
    return "You lose! Scissors beats paper";
  }

  // Player plays scissors

  if (player == "scissors" && computer == "rock") {
    ++computerScore;
    return "You lose! Rock beats scissors";
  }
  if (player == "scissors" && computer == "paper") {
    ++playerScore;
    return "You Win! scissors beats paper";
  }
  if (player == "scissors" && computer == "scissors") {
    return "It's a Tie!";
  }
}

// helper methods
function getRandomInt(int) {
  return Math.floor(Math.random() * int) + 1;
}

function getComputerChoice() {
  choice = getRandomInt(3);
  if (choice === 1) return "rock";
  if (choice === 2) return "paper";
  if (choice === 3) return "scissors";
}