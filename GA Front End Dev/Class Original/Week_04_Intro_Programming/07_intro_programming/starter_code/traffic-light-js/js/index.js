//buttons
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');

//lights
var stopLight = document.getElementById('stopLight');

//stopButton.onclick = illuminateRed;
stopButton.onclick = function(){
  illuminateLight(stopButton);
}
slowButton.onclick = function(){
  illuminateLight(slowButton);
}

function illuminateRed() {
  clearLights();
  stopLight.style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "purple";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

function illuminateLight(button){
    if(button.id == 'stopButton'){
        clearLights();
        stopLight.style.backgroundColor = "red";
    }
    if(button.id == 'slowButton'){
        clearLights();
        document.getElementById('slowLight').style.backgroundColor = "yellow";
    }
    if(button.id == 'goButton'){

    }
}