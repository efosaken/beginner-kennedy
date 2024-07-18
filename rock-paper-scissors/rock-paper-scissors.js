//getting all our DOM elements
const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScoreEL = document.getElementById("computer-score")

//setting the score initially to zero
let playerScore = 0;
let computerScore = 0

//looping through the buttons and adding an event listener to them
buttons.forEach(button=> {
    button.addEventListener("click", () => {
     const result = playGame(button.id, computerMove())
     resultEl.textContent = result
     
     
    })
})
//function to get computer move
function computerMove(){
    const moves = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random() * moves.length);

    return moves[randomMove]
}

//function to play the game 
function playGame(playerChoice, computerChoice) {

    //conditional statements to track player's move and computer move
    if(playerChoice === computerChoice) {
        return "It's a tie!"
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
        //incrementing the score and putting it in the Html page
        playerScore++
        userScore.textContent = playerScore
return "You win! " + playerChoice + " beats " + computerChoice
} else{
    computerScore++
    computerScoreEL.textContent = computerScore
    return "You lose! " + computerChoice + " beats " + playerChoice
}
}