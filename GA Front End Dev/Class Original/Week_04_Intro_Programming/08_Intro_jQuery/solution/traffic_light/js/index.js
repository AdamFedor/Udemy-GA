//Implement the red light using jQuery. Don't forget to add the script tags.

//event handlers
// regular javascript way
// document.getElementById("stopButton").onclick = test;
// $("#stopButton").click(test);

$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);

//functions
function test(){
  console.log("test");
}

function resetLights(){
  //grab all the lights and set them to background-color: black
  // $("#stopLight, #slowLight, #goLight").css("background-color", "black");
  // $("div + div > div").css("background-color", "black");
  $(".bulb").css("background-color", "black");
}

function illuminateRed(){
  resetLights();
  $("#stopLight").css("background-color", "red");
}

function illuminateYellow(){
  resetLights();
  $("#slowLight").css("background-color", "yellow");
}

function illuminateGreen(){
  resetLights();
  $("#goLight").css("background-color", "green");
}