//$(document).ready(); //since this is jQuery and not plain vanilla JS. This is a global variable referencing the entire document.
//$("#submit").click(); Example of an event handler
//This is a jQuery thing.


$(document).ready(function(){
  // when submit is clicked
  $("#submit").click(compareNumbers); //for visibility, giving the name compareNumbers

  function compareNumbers(){
    // get the value of the element with the id "a"
    var a = $("#a").val() //pulls the value defined in a field where the HTML has value = "8"
    // get the value of the element with the id "b"
    var b = $("#b").val()
    // convert to numbers
    a = parseFloat(a); // makes a number - can be added to var a = parseFloat(...)
    b = parseFloat(b); // makes a number
    // if a and b are numbers
    // compare id "a" with id "b"
    // if a is greater than b
    if (a > b){
      // set the text value of "comparison" to >
      $("#comparison").text(">");
    // if b is greater than a
    } else if (b > a){
      // set the text value of "comparison" to <
      $("#comparison").text("<");
    // if they are equal
    }else{
      // set the text value of "comparison" to =
      $("#comparison").text("=");
    }
  }
})
