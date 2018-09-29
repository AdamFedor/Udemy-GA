//console.log("testing");
//alert("Yo");
var score = 0;
var resultElement = document.getElementById("result");// other option so I can do resultElement.innerText down below
function zeroScore (){
  //set score variable to 0
  score = 0;
  //update score display
  resultElement.innerText = score;
}
function add5 (){
  //add 5 to score
  score = score + 5;
  //update score display
  //document.getElementById("result").innerText = score; //this updates the result function - option 1, or var up above.
  resultElement.innerText = score; // option 2 with the var up above.
}
function add10 (){
  //add 10 to score
  score = score + 10;
  //update score display
  resultElement.innerText = score;
}
function sub1 (){
  //subtract 1 to score
  score = score - 1;
  //update score display
  resultElement.innerText = score;
}
document.getElementById("zero").onclick = zeroScore
document.getElementById("add5").onclick = add5;
document.getElementById("add10").onclick = add10;
document.getElementById("sub1").onclick = sub1;
