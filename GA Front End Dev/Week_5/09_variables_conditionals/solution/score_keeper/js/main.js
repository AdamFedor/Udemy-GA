var score = 0;
var resultElement = document.getElementById("result");

function zeroScore(){
    //set score variable to 0
    score = 0;
    //update score display
    resultElement.innerText = score;
}

function add5(){
    //add 5 to score
    score = score + 5;
    //update score display
    resultElement.innerText = score;
}

function add10(){
    //add 10 to score
    score = score + 10;
    //update score display
    resultElement.innerText = score;
}

function sub1(){
    //subtract 1 from score
    score = score - 1;
    // same as below
    // score--;
    //update score display
    resultElement.innerText = score;
}

document.getElementById("zero").onclick = zeroScore;
document.getElementById("add5").onclick = add5;
document.getElementById("add10").onclick = add10;
document.getElementById("sub1").onclick = sub1;
