
function getComputerChoice()
{
var items = ["rock","paper","scissors"];
return items[Math.floor(Math.random()*items.length)];
}
function getPlayerChoice()
{
    const PlayerChoice = prompt("Choose rock, paper or scissors :");
    if (PlayerChoice.toLowerCase() === "rock"){
        return 'rock';
    } else if (PlayerChoice.toLowerCase() === "paper"){
        return 'paper';
    }else if (PlayerChoice.toLowerCase() === "scissors"){
        return 'scissors';}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection){
    console.log("It' s a tie no one won");
    return 0;}
    else if (playerSelection==='rock' && computerSelection==='paper'){
    console.log("computer chose paper\nYou won ");
    return 1;}
    else if (playerSelection==='paper' && computerSelection==='rock'){
    console.log("computer chose rock\nComputer won ");
    return -1;}
    else if (playerSelection==='paper' && computerSelection==='scissors'){
    console.log("computer chose scissors\nComputer won ");
    return -1;}
    else if (playerSelection==='scissors' && computerSelection==='paper'){
    console.log("computer chose paper\nYou won ")
    return 1;}
    else if (playerSelection==='rock' && computerSelection==='scissors'){
    console.log("computer chose scissors\nYou won ")
    return 1}
    else if (playerSelection==='scissors' && computerSelection==='rock'){
    console.log("computer chose rock\nComputer won ")
    return -1;}
}


function game (){
for(let i=0;i<5;i++){
computerSelection=getComputerChoice();
playerSelection=getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));
}
}

console.log(game());

