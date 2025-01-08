const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const choices = ['rock', 'paper', 'scissor']

function cleanUp(){
    resultDisplay.classList.remove("greenText", "redText");

    playerDisplay.textContent = "Players: ";
    computerDisplay.textContent = "Computer: ";
    resultDisplay.textContent = "";
}

function playerWin(){
    resultDisplay.textContent = "Player Wins!";
    resultDisplay.classList.add("greenText");
}

function computerWin(){
    resultDisplay.textContent = "Computer Wins!";
    resultDisplay.classList.add("redText");
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