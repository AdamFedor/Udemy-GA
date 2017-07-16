// variables
var citySwitcha = ["NYC", "SF", "LA", "ATX", "SYD"];
var backgroundImages = [];
var valueOption;
// functions
function processInputValue(){
  // find which value is selected, apply to array images by number.
  valueOption = document.getElementById("city-type").selectedIndex;
  $('body').css('background-image', 'url(images/'+backgroundImages[valueOption]+')');
}
// what runs the world, but waits for ready
$(document).ready(function(){
  // append the drop list to the array, adds each array in order
  for(i = 0; i < citySwitcha.length; i++){
    $("#city-type").append("<option>"+citySwitcha[i]+"</option>")
  }
  // push images into array for use
  backgroundImages.push(src = "citipix_skyline.jpg", "nyc.jpg", src = "sf.jpg", src = "la.jpg", src = "austin.jpg", src = "sydney.jpg");
  // run the function that runs the switch - when changed
  document.getElementById("city-type").onchange = processInputValue;
});
