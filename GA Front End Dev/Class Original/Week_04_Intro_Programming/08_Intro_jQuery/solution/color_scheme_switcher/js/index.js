// vanilla
// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }

// jQuery
$("#grayButton").click(switchGray);
$("#whiteButton").click(switchWhite);

function switchGray(){
  //$("body").css("backgroundColor", "gray").css("color", "white");
  $("body").css({
    "backgroundColor": "gray",
     "color" : "white"
   });
}

function switchWhite(){
  //$("body").css("backgroundColor", "white").css("color", "black");
  $("body").css({
    "backgroundColor": "white",
     "color" : "black"
   });
}
