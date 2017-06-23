//Implement the red light using jQuery. Don't forget to add the script tags.
console.log("Script loaded");


//event handler
//$("#stopButton").click(test);
  // plain Jane vanilla JS
  //document.getElementByID("stopButton").onclick = test;

$("#stopButton").click(illuminateRed);
$("#slowButton").click(illuminateYellow);
$("#goButton").click(illuminateGreen);

//functions
function test(){
  console.log("test")
}
function resetLights(){
  //$("#stopLight, #slowLight, #goLight").css("background-color", "black")
  $(".bulb").css("background-color", "black")
}
function illuminateRed(){
  //test(); //now that this has been defined in the function above, we can use it here to test.
  resetLights()
  $("#stopLight").css("background-color", "red")
}
function illuminateYellow(){
  resetLights()
  $("#slowLight").css("background-color", "yellow")
}
function illuminateGreen(){
  resetLights()
  $("#goLight").css("background-color", "green")
}
