
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
    if (playerSelection===computerSelection)
    return "It' s a tie no one won";
    else if (playerSelection==='rock' && computerSelection==='paper')
    return "computer chose papr\nYou won ";
    else if (playerSelection==='paper' && computerSelection==='rock')
    return "computer chose rock\nComputer won ";
    else if (playerSelection==='paper' && computerSelection==='scissors')
    return "computer chose scissors\nComputer won ";
    else if (playerSelection==='scissors' && computerSelection==='paper')
    return "computer chose papre\nYou won ";
    else if (playerSelection==='rock' && computerSelection==='scissors')
    return "computer chose scissors\nYou won ";
    else if (playerSelection==='scissors' && computerSelection==='rock')
    return "computer chose rock\nComputer won ";
}
computerSelection=getComputerChoice();
playerSelection=getPlayerChoice();


console.log(playRound(playerSelection, computerSelection));

