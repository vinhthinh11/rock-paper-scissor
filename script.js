const name1 = document.querySelector('img[data-key="bua"]');
const name2 = document.querySelector('img[data-key="bao"]');
const name3 = document.querySelector('img[data-key="keo"]');
const displayResult = document.querySelector('.display-result');
const displayPlayerScore = document.querySelector('.player');
const displayComputerScore = document.querySelector('.computer');
const displayImgP = document.querySelector('.player-choice1');
const displayImgPc = document.querySelector('.computer-choice1');
const music = document.querySelector('audio');
music.play();
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
    if(getmax(playerSC,computerScore)<5){
    let playerSeletion = selection;
    let computerSelection = Math.floor(Math.random()*3);
    compare(playerSeletion,computerSelection);
    displaySelection(selection,displayImgP);
    displaySelection(computerSelection,displayImgPc ); 
    }
}
function isGameOver(){
    return getmax(playerSC,computerScore)==5;
}
function displaySelection(number,display){
    if(number==0)    //bua
    display.src='rock.png';
    else if(number==1)display.src='paper.png';
    else display.src='scissors.png';

}

function compare(chon1,chon2){
    if(chon1==chon2){
        displayResult.textContent="Draw";

    }
    else {
        if(chon1==0){
            if(chon2==1){//0 bua 1 bao 2 keo
                displayResult.textContent="You Lose";
                playerSC++;
                update(playerSC,computerScore);
                
                        }
            else {
            displayResult.textContent="You Win";
            computerScore++;
            update(playerSC,computerScore);
                }
            if(isGameOver())anounceWinner();
        }
        if(chon1==1){
            if(chon2==0){
                displayResult.textContent="You Win";
            computerScore++;
            update(playerSC,computerScore);
                        }
            else{
                displayResult.textContent="You Lose"; 
            playerSC++;
            update(playerSC,computerScore);
                }
                if(isGameOver())anounceWinner();
        }
        if(chon1==2){
            if(chon2==0){
                displayResult.textContent="You Lose";
                playerSC++;
                update(playerSC,computerScore);
            }
            else{ 
                displayResult.textContent="You Win";
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
            music.pause();
}

