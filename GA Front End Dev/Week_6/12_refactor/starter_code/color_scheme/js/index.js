//$('#grayButton').click(switchGray);
//$('#whiteButton').click(switchWhite);
//$('#blueButton').click(switchBlue);
//$('#yellowButton').click(switchYellow);

//function switchGray() {
//  $('body').attr('class', 'gray');
//}

//function switchWhite() {
//  $('body').attr('class', 'white');
//}

//function switchBlue() {
//  $('body').attr('class', 'blue');
//}

//function switchYellow() {
//  $('body').attr('class', 'yellow');
//}


// OR... do this:

//$("#switcher li").click(function(event){
//  switch(event.target.id){ // says what the class of the clicked element is - .id just pulls the ID in plain JS
//    case "grayButton":
//        $("body").attr("class","gray");
//      break; // without this it will fall to the next clause. Skip it and it will do the same as everything listed till break.
//    case "blueButton":
//      $("body").attr("class","blue");
//      break;
//    case "whiteButton":
//      $("body").attr("class","white");
//      break;
//    case "yellowButton":
//      $("body").attr("class","yellow");
//      break;
//  }
//});

// Or... do this:
function changeBodyClass(className){
  $("body").attr("class", className); // what is passed in then causes the change to the class. like a toggle.
}
//$("#switcher li").click(function(event){
//  var splitString = event.target.id.split("B");
//  changeBodyClass(splitString[0]);
//});
$("#switcher li").click(function(event){
  var colorName = event.target.id.split("B");
  changeBodyClass(colorName);
});
