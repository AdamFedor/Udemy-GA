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
  console.log(cardsArray[0].data("type"), cardsArray[1].data("type"));
  return cardsArray[0].data("type") === cardsArray[1].data("type");
}

function checkMatch(cardsArray){
  if (isMatch(cardsArray)){
    cardsArray.forEach(function($card){
      $card.off("click");
    });
  } else {
    cardsArray.forEach(function($card){
      $card.removeClass("flipped");
    });
  }
}

$(document).ready(function(){
  var flippedCards = [];
  var lock = false;
  setupGame();
  // add event listeners
  $(".card_container").on("click", function(event){
    // within an event listener "this" refers to the element the event occurred on
    var $this = $(this);
    // check if the card is flipped and we're not in a locked state
    if (!$this.hasClass("flipped") && !lock){
      // flip the card
      $this.addClass("flipped");
      // add to flippedCards array
      flippedCards.push($this);
      if (flippedCards.length === 2){
        // prevent more moves
        lock = true;
        setTimeout(function(){
          checkMatch(flippedCards);
          flippedCards = [];
          lock = false;
        }, 1000)
      }
    }
  });
});