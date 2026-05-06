const resultsDiv = document.getElementById("results");

let humanScore = 0;
let computerScore = 0;

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
      resultsDiv.innerHTML += "<p>Invalid choice. Please enter rock, paper, or scissors.</p>";
      return null;
    }
  }
  
  function playRound(humanChoice, computerChoice) {
      humanChoice = humanChoice.toLowerCase();
      
      if (humanChoice === computerChoice) {
        resultsDiv.innerHTML += `<p>It's a tie! Both chose ${humanChoice}</p>`;
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
        humanScore++;
        resultsDiv.innerHTML += `<p>You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>`;
      } else {
        computerScore++;
        resultsDiv.innerHTML += `<p>You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}</p>`;
      }
    }

    function checkGameOver() {
    if (humanScore >= 3 || computerScore >= 3) {
      resultsDiv.innerHTML += "<h2>=== GAME OVER ===</h2>";
      resultsDiv.innerHTML += `<p>Final Score - You: ${humanScore}, Computer: ${computerScore}</p>`;
      if (humanScore > computerScore) {
        resultsDiv.innerHTML += "<p>Congratulations! You won the game!</p>";
      } else if (computerScore > humanScore) {
        resultsDiv.innerHTML += "<p>Computer wins the game!</p>";
      } else {
        resultsDiv.innerHTML += "<p>The game is a tie!</p>";
      }
      // Disable buttons after game ends
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
    }

    checkGameOver();
  }
  
  document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });