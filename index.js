const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const choices = ['rock', 'paper', 'scissor']
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function cleanUp(){
    resultDisplay.classList.remove("greenText", "redText");

    playerDisplay.textContent = "Players: ";
    computerDisplay.textContent = "Computer: ";
    resultDisplay.textContent = "";
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;

    cleanUp();
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
}

function playerWin(){
    resultDisplay.textContent = "Player Wins!";
    resultDisplay.classList.add("greenText");

    playerScore += 1;
    playerScoreDisplay.textContent = `${playerScore}`;
}

function computerWin(){
    resultDisplay.textContent = "Computer Wins!";
    resultDisplay.classList.add("redText");

    computerScore += 1;
    computerScoreDisplay.textContent = `${computerScore}`;
}

function tie(){
    resultDisplay.textContent += "It's a tie!";
}

function playGame(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    cleanUp();

    playerDisplay.textContent += `${playerChoice}`;
    computerDisplay.textContent += `${computerChoice}`;


    if(playerChoice == computerChoice){
        tie();
    }
    else{
        switch(playerChoice){
            case 'rock':   
                computerChoice === 'paper' ? computerWin() : playerWin();
                break;
            case 'paper':
                computerChoice === 'scissor' ? computerWin() : playerWin();
                break;
            case 'scissor':
                computerChoice === 'rock' ? computerWin() : playerWin();
                break;
        }
    }
}