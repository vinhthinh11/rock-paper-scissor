const name1 = document.querySelector('img[data-key="bua"]');
const name2 = document.querySelector('img[data-key="bao"]');
const name3 = document.querySelector('img[data-key="keo"]');
const displayResult = document.querySelector('.display-result');
const displayPlayerScore = document.querySelector('.player');
const displayComputerScore = document.querySelector('.computer');
function update(num1,num2){
    displayPlayerScore.textContent=num1;
    displayComputerScore.textContent=num2;
}
let playerSC =0;
let computerScore=0;
let max = getmax(playerSC,computerScore);
function getmax(num1,num2){
    return num1>=num2?num1:num2;
}
name1.addEventListener('click',()=>getResult(0));
name2.addEventListener('click',()=>getResult(1));
name3.addEventListener('click',()=>getResult(2));
function getResult(selection){
    let playerSeletion = selection;
    let computerSelection = Math.floor(Math.random()*3);
    compare(playerSeletion,computerSelection);
    
}
function isGameOver(){
    return getmax(playerSC,computerScore)==5;
}




    //compare(mychoice,computerSelection);

// function game(){
//     playRound();
// }

// function getComputerChoise(){
//     return parseInt(Math.random()*3).toString();
// }
function compare(chon1,chon2){
    if(chon1==chon2){
        displayResult.textContent="Draw";
    }
    else {
        if(chon1==0){
            if(chon2==1){
                displayResult.textContent="You Win";
                playerSC++;
                update(playerSC,computerScore);
                
                        }
            else {
            displayResult.textContent="You Lose";
            computerScore++;
            update(playerSC,computerScore);
                }
            if(isGameOver())anounceWinner();
        }
        if(chon1==1){
            if(chon2==0){
                displayResult.textContent="You Lose";
            computerScore++;
            update(playerSC,computerScore);
                        }
            else{
                displayResult.textContent="You Win"; 
            playerSC++;
            update(playerSC,computerScore);
                }
                if(isGameOver())anounceWinner();
        }
        if(chon1==2){
            if(chon2==0){
                displayResult.textContent="You Win";
                playerSC++;
                update(playerSC,computerScore);
            }
            else{ 
                displayResult.textContent="You Lose";
                computerScore++;
                update(playerSC,computerScore);
            }
            if(isGameOver())anounceWinner();
        }
    }
}
function anounceWinner(){
    if(playerSC==5)displayResult.textContent="Congratulation!! You win the game";
            else displayResult.textContent="You Lose!!! Good Luck next time";
}

// game();
