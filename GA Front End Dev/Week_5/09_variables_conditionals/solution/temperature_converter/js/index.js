//determine if temperature is valid
function isReallyNumber(allegedNumber){
    return !isNaN(allegedNumber) && typeof allegedNumber === "number";
}

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

$(document).ready(function(){
    $('#convert').submit(function(event){
        event.preventDefault();
        var fValue = $("#fahrenheit").val(); //a number or NaN
        var cValue = $("#celsius").val(); //a number or NaN

        fValue = parseFloat(fValue);
        cValue = parseFloat(cValue);

        //determine which to convert to
        //if fValue and no cValue
        if(isReallyNumber(fValue) && !isReallyNumber(cValue)){
            cValue = fToC(fValue);
        }
        //if cValue and no fValue
        else if (isReallyNumber(cValue) && !isReallyNumber(fValue)){
            fValue = cToF(cValue);
        }

        //set the element with id of fahrenheit to fValue
        $("#fahrenheit").val(fValue);
        // set the element with id of celsius to cValue
        $("#celsius").val(cValue);
    });
});
