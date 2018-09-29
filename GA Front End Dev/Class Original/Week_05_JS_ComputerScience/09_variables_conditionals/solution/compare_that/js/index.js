function isReallyANumber(allegedNumber){
    //because invalid numbers are assigned the value NaN
    return !isNaN(allegedNumber) && typeof allegedNumber === "number";
}

$(document).ready(function(){
    //when I click "submit"
    $("#submit").click(compareNumbers);

    function compareNumbers(){
        // get the value of the element with the id "a"
        var a = $("#a").val();
        // get the value of the element with the id "b"
        var b = $("#b").val();

        // convert a and b to numbers
        a = parseFloat(a);
        b = parseFloat(b);

        // console.log(typeof a);
        // console.log(typeof b);

        // if a and b are numbers
        if(isReallyANumber(a) && isReallyANumber(b)){
            // compare the numbers
            // if a is greater than b
            if (a > b){
                // set the text value of "comparision" to ">"
                $("#comparison").text(">");
            }
            // if b is greater than a
            else if (b > a){
                // set the text value of "comparison" to <
                $("#comparison").text("<");
            }
            // if they are equal
            else {
                // set the text value of "comparison" to =
                $("#comparison").text("=");
            }
        }
    }
});

