function playRound(){
    let yourChoice = prompt("Chon keo, bao hay bua","keo");
    yourChoice = yourChoice.toLowerCase();
    const playerSelection = getPlayerSelection(yourChoice);
    const computerSelection = getComputerChoise();
    compare(playerSelection,computerSelection);
}
function game(){
for(let i =0;i<5;i++){
    playRound();
}
}

function getComputerChoise(){
    return parseInt(Math.random()*3);
}
function getPlayerSelection(string){
    switch (string){
        case "keo": return 0;
        case "bao": return 1;
        case "bua": return 2;
        default: alert("Ban co biet choi keo bao bua khong ??");
    }
}
function compare(chon1,chon2){
    if(chon1==chon2)alert(`ket qua hoa ${chon1==0?"keo":chon1==1?"bao":"bua"}`);
    else {
        if(chon1==0){
            if(chon2==1)alert("ban thang keo > bao");
            else alert("ban thua keo < bua");
        }
        if(chon1==1){
            if(chon2==0)alert("ban thua bao < keo");
            else alert("ban thang bao > bua")
        }
        if(chon1==2){
            if(chon2==0)alert("ban thang bua >keo");
            else alert("ban thua bua <bao");
        }
    }
}
game();
