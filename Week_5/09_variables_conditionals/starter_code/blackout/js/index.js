$(document).ready(function(){
  // when we click the button with id of "Light_switch"
  $("#light_switch").click(function(){
    // if the body has a background that is white
      // set to black
    // if the body has a background that is black
      // set to white
    $(document.body).toggleClass("dark");
  })
})
