$(document).ready(function(){
    //when we click the button with id of "light_switch"
    $("#light_switch").click(function(){
        // if the body has the class dark
        // remove it
        // if the body does not have the class dark
        // add it
        $(document.body).toggleClass("dark");
    });
});