$(document).ready(function(){
  // causes a flicker
  // handle this in css
  // $("p").hide();

//  function showQuestion1(){
    //show #answer1 if it's hidden
    //hide #answer1 if it's shown
//    $('#answer1').slideToggle();
//  }

//  function showQuestion2(){
    //show #answer2 if it's hidden
    //hide #answer2 if it's shown
//    $('#answer2').slideToggle();
//  }

//  function showQuestion3(){
    //show #answer2 if it's hidden
    //hide #answer2 if it's shown
//    $('#answer3').slideToggle();
//  }

//  $("#question1").click(showQuestion1);
//  $("#question2").click(showQuestion2);
//  $("#question3").click(showQuestion3);
//});

// OR do this:

  $("#question1, #question2, question3").click(function(event){
    $(this).next("p").slideToggle;
  })
});
