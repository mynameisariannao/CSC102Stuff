var wins = 0;
var losses = 0;
var ties = 0;
function startsCraps(){
    console.log("Craps game started");
    var die1 = Math.ceil(6 * Math.random());
    var die2 = Math.ceil(6 * Math.random());
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var diceSum = die1 + die2;
    document.getElementById("sumRes").innerHTML = diceSum;
    //didn't understand what craps was but the coding was fun
    if(diceSum == 7 || diceSum == 11){
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!";
        losses = losses + 1;
    }else if(die1 == die2 && die1 % 2 == 0){ //interesting on how you can win and lose especially with evens
        document.getElementById("crapsRes").innerHTML = "Winner!";
        wins = wins + 1;
    }else { //I am addicted to playing now but the else is useful to change the different outcomes
        document.getElementById("crapsRes").innerHTML = "It's a tie! Play again";
        ties = ties + 1;
    }
    document.getElementById("winRes").innerHTML = wins; //wins are less than ties
    document.getElementById("lossRes").innerHTML = losses; //losses seem to be less frequent than ties
    document.getElementById("tieRes").innerHTML = ties;
}
//creating an extra function without having to use two separate js
function testCodeV1(){
    console.log("testCodeV1() stasrted"); //this will show that it is working in the console
    var currTime = 50;
    for(var i = 0; i < 11; i++){ //creates a countdown with less copy and pasting but also uses less numbers
        setTimeout(function(){
            console.log(currTime);
            document.getElementById("countDownRes").innerHTML = currTime;
            if(currTime == 0){ //if there is no extra '=' the code will not process well
                document.getElementById("countDownRes").innerHTML = "Blastoff!";
            }
            currTime = currTime - 5; //changed it to subtract 5 instead of 2
        }, i * 2000);
       
    }
}

// a second function allows a loop and the game of craps being playable
function btrCountDownV1(){
    console.log("btrCountDownV1() started");
    var currTime = 50; //creates the repeating loop for timers
    for(var i = 0; i < 11; i++){ // creates a loop to be played
       setTimeout(function(){
        console.log(currTime);
        document.getElementById("countDownRes").innerHTML = currTime; //presents Blastoff! within the page
        if(currTime == 0){
            //Makes 0 into blastoff
            document.getElementById("countDownRes").innerHTML = "Blastoff!";
        }
       currTime = currTime - 5;
       }, i * 5000);
    }
}
