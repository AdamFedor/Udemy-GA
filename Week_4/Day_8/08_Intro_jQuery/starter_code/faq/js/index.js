$(document).ready(function(){

  function showQuestion1(){
    //show #answer1 if it's hidden
    //hide #answer1 if it's shown
    $("#answer1").slideToggle();
  }
  function showQuestion2(){
    $("#answer2").slideToggle();
  }
  function showQuestion3(){
    $("#answer3").slideToggle();
  }
  $("#question1").click(showQuestion1);
  $("#question2").click(showQuestion2);
  $("#question3").click(showQuestion3);
})
