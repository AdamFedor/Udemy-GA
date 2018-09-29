var cards = [ 
    'heart_ace',
    'heart_2',
    'heart_3',
    'heart_4',
    'heart_5',
    'heart_6',
    'heart_7',
    'heart_8',
    'heart_9',
    'heart_10',
    'heart_J',
    'heart_Q',
    'heart_K',
    'spade_ace',
    'spade_2',
    'spade_3',
    'spade_4',
    'spade_5',
    'spade_6',
    'spade_7',
    'spade_8',
    'spade_9',
    'spade_10',
    'spade_J',
    'spade_Q',
    'spade_K',
    'diamond_ace',
    'diamond_2',
    'diamond_3',
    'diamond_4',
    'diamond_5',
    'diamond_6',
    'diamond_7',
    'diamond_8',
    'diamond_9',
    'diamond_10',
    'diamond_J',
    'diamond_Q',
    'diamond_K',
    'club_ace',
    'club_2',
    'club_3',
    'club_4',
    'club_5',
    'club_6',
    'club_7',
    'club_8',
    'club_9',
    'club_10',
    'club_J',
    'club_Q',
    'club_K' 
];

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// return index between min and max, inclusive
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// return a random element from array
function getRandomFromArray(array){
    var randomIndex = random(0, array.length-1);
    return array[randomIndex];
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
var getRandomCard = getRandomFromArray.bind(null, cards);