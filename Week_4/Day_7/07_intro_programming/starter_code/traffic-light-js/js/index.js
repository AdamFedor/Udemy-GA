//buttons
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');

//lights
var stopLight = document.getElementById('stopLight');

//stopButton.onclick = illuminateRed;
stopButton.onclick = function(){
  illuminateLight(stopButton);
}
slowButton.onclick = function(){
  illuminateLight(slowButton);
}
goButton.onclick = function(){
  illuminateLight(goButton);
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
  var offColor = "black";
  document.getElementById('stopLight').style.backgroundColor = offColor;
  document.getElementById('slowLight').style.backgroundColor = offColor;
  document.getElementById('goLight').style.backgroundColor = offColor;
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
        clearLights();
        document.getElementById('goLight').style.backgroundColor = "green";
    }
}
