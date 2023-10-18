

var computerSelection;
var playerSelection;
var img = document.createElement("img")
var img2 = document.createElement("img")


var items = ["rock","paper","scissors"];

let buttons = document.querySelectorAll(".btn");
for(let i =0; i<3;i++){
    buttons[i].addEventListener("click",function(){
        playerSelection=items[i];
        img2.src= playerSelection +".png"
        document.getElementById("you").innerText="" //removes the "you" when picking a choice
        document.getElementById("you").appendChild(img2);
        playRound()
    });
}

var youWon =0;
var botWon =0;
var draw=0;

function playRound() {

    computerSelection = items[Math.floor(Math.random()*items.length)];
    img.src= computerSelection +".png"
    document.getElementById("bot").innerText=""
    document.getElementById("bot").appendChild(img);


    if (playerSelection===computerSelection){
    console.log("It' s a tie no one won");
        draw += 1;
    }
    else if (playerSelection==='rock' && computerSelection==='paper'){
    console.log("computer chose paper\nComputer won ");
    botWon +=1;
    }
    else if (playerSelection==='paper' && computerSelection==='rock'){
    console.log("computer chose rock\nYou won ");
    youWon +=1;}
    else if (playerSelection==='paper' && computerSelection==='scissors'){
    console.log("computer chose scissors\nComputer won ");
    botWon +=1;}
    else if (playerSelection==='scissors' && computerSelection==='paper'){
    console.log("computer chose paper\nYou won ")
    youWon+=1;}
    else if (playerSelection==='rock' && computerSelection==='scissors'){
    console.log("computer chose scissors\nYou won ")
    youWon +=1;}
    else if (playerSelection==='scissors' && computerSelection==='rock'){
    console.log("computer chose rock\nComputer won ")
    botWon +=1;}

    document.getElementById("youScore").innerText = youWon;
    document.getElementById("botScore").innerText = botWon;
    document.getElementById("draw").innerText = draw;
}



