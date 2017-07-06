// User types in city to input form
// User clicks on update button
// city is compared to arrays in a loop
  // if city matches one of the arrays, it's output is replacing the html for image
// -----------------------------------------------------------------------------------
var theImage = 0;
var city;
var newYork = ['new york', 'new york city','nyc'];
var sanFran = ['san francisco', 'sf', 'bay area'];
var losAng = ['los angeles', 'la', 'lax'];
var aust = ['austin', 'atx'];
var syd = ['sydney', 'syd'];
var truth = ['inAust', 'inLosAng', 'inNewYork', 'inSanFran', 'inSyd'];
var inNewYork;
var inSanFran;
var inLosAng;
var inAust;
var inSyd;
// process the input value
function processInputValue(){
  event.preventDefault();
  // take inputted string value
  city = $("#city-type").val();
  // city is lowercase
  city = city.toLowerCase();
  console.log("input value: " + city);
  // compare to arrays
    // arrays are reviewed and if matched, updateImage(city)
  // if found in array check - short on time, this is the fastest way without experimenting too much.
  inNewYork = $.inArray(city, newYork) > -1;
  inSanFran = $.inArray(city, sanFran) > -1;
  inLosAng = $.inArray(city,losAng) > -1;
  inAust = $.inArray(city,aust) > -1;
  inSyd = $.inArray(city,syd) > -1;
  // check if true
  for (var i = 0, j = 1; i < 5; i++, j++){
    var str='' + truth[i] + '';
    var obj=eval("("+str+")");
    isTrue = str;
    if (obj == true) {
      updateImage(j);
    }
  }
  //document.getElementById("city-type").reset(); // "reset is not a function" this is an invalid line. This document only does not permit it character for character works in cash register, fails here. No reason why.
}
// function to check what is true, looks for the first one that's true
function truthDetector(theTruth){
  if(theTruth = true){
    return 1;
  }
}
// process the background image
function updateImage(backImg){
  // ensure returned value is a number
  backImg = parseFloat(backImg);
  if (backImg === 1){ // right now there's know way of knowing how an array will change, but these could be an array with a loop looking for a number associated with it.
    // display austin
    $('body').css('background-image', 'url(images/austin.jpg)');
  } else if (backImg === 2) {
    // display la
    $('body').css('background-image', 'url(images/la.jpg)');
  } else if (backImg === 3) {
    // display nyc
    $('body').css('background-image', 'url(images/nyc.jpg)');
  } else if (backImg === 4) {
    // display sf
    $('body').css('background-image', 'url(images/sf.jpg)');
  } else if (backImg === 5) {
    // display sydney
    $('body').css('background-image', 'url(images/sydney.jpg)');
  } else {
    // display cicipix_skyline as no-image returned
    $('body').css('background-image', 'url(images/citipix_skyline.jpg)');
  }
}
// run the script
$(document).ready(function(){
  document.getElementById("submit-btn").onclick = processInputValue;
});
