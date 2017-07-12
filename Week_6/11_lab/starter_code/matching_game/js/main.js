var $cards = $('#cards');

function addCard(className){
  var card_template = "<div class=\"card_container\"><div class=\"card\"><figure class=\"back\"></figure><figure class=\"front\"></figure></div></div>";
  // create an empty card
  var blank_card = $(card_template);
  // find the front of the card and add a class to give it a face
  blank_card.find(".front").addClass(className);
  blank_card.data("type", className);
  // add to cards
  $cards.append(blank_card);
}
function setupGame(){
  var NUM_CARDS = 16;
  // create empty array
  var randomCardClasses = [];
  //grab 8 random cards
  for(var i = 0; i < NUM_CARDS/2; i++){
    randomCardClasses.push(getRandomCard());
  }
  // duplicate them (this ensures we have matches)
  randomCardClasses = randomCardClasses.concat(randomCardClasses);
  // shuffle
  shuffle(randomCardClasses);
  // add the cards to the DOM
  randomCardClasses.forEach(function(card){
    addCard(card);
  });
}
function isMatch(cardsArray){
  console.log("The structure passed to isMatch looks like:"); // the + just states object, better to call it this way.
  console.log(cardsArray[0].data("type"), cardsArray[1].data("type")); // so it doesn't show up as a string.
  return cardsArray[0].data("type") === cardsArray[1].data("type");
}
function resetSelected(cardsArray){
  // removes the class from the cards
  cardsArray[0].removeClass("flipped");
  cardsArray[1].removeClass("flipped");
}
function removeHandlers(cardsArray){
  cardsArray[0].off("click"); // globally blows everything away.
  cardsArray[1].off("click");
}
$(document).ready(function(){
  // start the primary function
  setupGame(); // call this to reset the game by shuffling, but would need to make all face down too.
  var flippedCards = [];
  var locked = false;
  // add event listeners
  $(".card_container").on("click", function(event){
    // within an event listener "this" refers to the element the event occurred on
    var $this = $(this);
    console.log($this.data("flipped"));// mentioned in addCard, this pulls the info
    if(!$this.hasClass("flipped") && !locked){ // the flag of locked.
      $this.addClass("flipped");
      // making a jQuery object, don't need a var = varArgument
      flippedCards.push($this);
      // wait a second before doing the next steps
      if(flippedCards.length === 2){
        console.log("2 Cards are found");
        // lock game
        locked = true;
        setTimeout(function(){
          console.log("Do they match?");
          // match cards
          if(isMatch(flippedCards)){
            // if they don't match flip over
              //removeHandlers(flippedCards); - prevents clicking
              console.log("true match  wooooooot!");
          } else {
            //reset fliped cards
            resetSelected(flippedCards);
          }
          // redo array
          flippedCards = [];
          // unlock the game
          locked = false;
        }, 600);
      }
    }
  });
});
