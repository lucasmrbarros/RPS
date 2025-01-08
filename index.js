const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playerWin(){
    resultDisplay.textContent = "Player Wins!";
}

function computerWin(){
    resultDisplay.textContent = "Computer Wins!";
}

function tie(){
    resultDisplay.textContent += "It's a tie!";
}

function playGame(playerChoice){
    let computerTurn = Math.floor(Math.random() * 3) + 1;

    switch (computerTurn){
        case 1:
            computerDisplay.textContent += "Rock";
            break;
        case 2:
            computerDisplay.textContent += "Paper";
            break;
        case 3:
            computerDisplay.textContent += "Scissor"
    }

    if(playerChoice == 'rock'){
        playerDisplay.textContent += "Rock";
        
        if(computerTurn == 1){
            tie();
        }else if(computerTurn == 2){
            computerWin();
        }
        else{
            playerWin();
        }
    }
    else if(playerChoice == 'paper'){
        playerDisplay.textContent += "Paper";

        if(computerTurn == 1){
            playerWin();
        }
        else if(computerTurn == 2){
            tie();
        }
        else{
            computerWin();
        }
    }
    else{
        playerDisplay.textContent += "Scissor";
        
        if(computerTurn	== 1){
            computerWin();
        }
        if(computerTurn == 2){
            playerWin();
        }
        else{
            tie();
        }
    }

    setTimeout(() => {
        playerDisplay.textContent = "Players:";
        computerDisplay.textContent = "Computer:";
        resultDisplay.textContent = "";
    }, 5000);
}