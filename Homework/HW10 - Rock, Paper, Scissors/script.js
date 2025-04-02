// This is the main function that runs the Rock, Paper, Scissors game
function rpsGame() {
    let userInput = prompt("Enter Rock, Paper, or Scissors:");

 // This convert's the user's input to lowercase to make it case-insensitive
    let userChoice = userInput.toLowerCase();

// This generates a random number between 0 and 1, and assigns a choice based on that number
    let randomNumber = Math.random();
    let computerChoice;

// This assigns a choice to the computer based on the random number generated
    if (randomNumber < 0.35) {
      computerChoice = "rock";
    } else if (randomNumber < 0.65) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

// This displays the choices of both the user and the computer to the console
    console.log("User Chose: " + userChoice);
    console.log("Computer Chose: " + computerChoice);
    
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
    }
    else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("Rock beats Scissors! You win!");
      } else {
        console.log("Paper beats Rock! You lose!");
      }
    }
    else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("Paper beats Rock! You win!");
      } else {
        console.log("Scissors beat Paper! You lose!");
      }
    }
    else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        console.log("Scissors beats Paper! You win!");
      } else {
        console.log("Rock beats Scissors! You lose!");
      }
    }
// If user input isn't rock, paper, or scissors, show error message
    else {
      console.log("That's not a valid choice. Please enter Rock, Paper, or Scissors.");
    }
    
// Ask the user if they want to play/try again
    let playAgain = confirm("Do you want to try again?");
    if (playAgain) {
      rpsGame();ro
    } else {
      console.log("Thanks for playing!");
    }
  }

// This starts the game by calling the function
rpsGame();
