function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  function getHumanChoice() {
    const userInput = prompt("Enter your choice: rock, paper, or scissors");
    const choice = userInput.toLowerCase();
    
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      console.log("Invalid choice. Please enter rock, paper, or scissors.");
      return null;
    }
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      
      if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
      } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
      }
    }
    
    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
      console.log(`\nRound ${i}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
      console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    // Announce final winner
    console.log(`\n=== GAME OVER ===`);
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  // Start the game
  playGame();