var sum = 0;

function formatCurrency(value){
  return "$" + value.toFixed(2);
}

function addEntry(entry){
  $("#entries").append("<tr><td></td><td>" + entry + "</td></tr>");
}

function updateTotal(newTotal){
  $("#total").text(newTotal);
}


$(document).ready(function(){
  $("#entry").on("submit", function(event){
    // prevent submission of the form
    event.preventDefault();
    // get value and make sure it's a number
    var newValue = parseFloat($("#newEntry").val());
    // add to total
    sum = sum + newValue;
    // format the sum and total
    var itemInDollars = formatCurrency(newValue);
    var sumInDollars = formatCurrency(sum);
    // update the display
    addEntry(itemInDollars);
    updateTotal(sumInDollars);
    // clear the form
    $("#newEntry").val("");
  });
});