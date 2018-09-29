$(document).ready(function(){
    $('#convert').submit(function(event){
        event.preventDefault();
    });
    
});

// celsius to fahrenheit
// http://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.htm
function cToF(cTemp){
    return cTemp * 9/5 + 32;
}

// fahrenheit to celsius
// http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm
function fToC(fTemp){
    return (fTemp - 32) * 5/9;
}