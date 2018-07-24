"use strict"
const playTheGame = prompt("Do you want to play the game" );

if (playTheGame.toLowerCase()==='yes'){
    let yes = prompt("Enter your name")
    let userHealth=40;
    let grantsHealth=10;
    let wins=0;

while (playTheGame){
    console.log(`${yes}s health: ${userHealth}`);
    console.log(`grants health:${grantsHealth}`);
    grantsHealth-=Math.floor(Math.random() * 2) + 1;
    userHealth-= Math.floor(Math.random() * 2) + 1; 
    if (userHealth<=0) {
        break;
    }
    if (grantsHealth<=0){
        grantsHealth=10;

    if (userHealth=0){

    console.log("Grant wins");
    
    }
}
}
else{
console.log("Do not start the game");
}

