$( "form" ).submit(function( event ) {
if ( $( "input:first" ).val() === "correct" ) {
//  $( "span" ).text( "Validated..." ).show();
//return;
var inputValue = $( "input:first" ).val();
event.preventDefault();
console.log("right: " + inputValue);
} else {
//  $( "span" ).text( "Not valid!" ).show();
var inputValue = $( "input:first" ).val();
event.preventDefault();
console.log("wrong: " + inputValue)
}
});
