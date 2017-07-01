var total = $("#total").val();
var resultElement = document.getElementById("total");
var inputValue;
var newEx = 0;

function isReallyANumber(allegedNumber){
    //because invalid numbers are assigned the value NaN
    return !isNaN(allegedNumber) && typeof allegedNumber === "number";
}
function addRow(receiptTable){
  var tableRec = document.getElementById(receiptTable);
  var addRow = tableRec.insertRow(newEx); // starting with 0, this is forcing new rows under the previously created row
  var addCellR = addRow.insertCell(0);
  var valueRow = document.createTextNode(inputValue);
  var addCellL = addRow.insertCell(0);
  newEx = +newEx + +1;
  var receiptText = document.createTextNode("New Expense " + newEx);
  addCellL.appendChild(receiptText);
  addCellR.appendChild(valueRow)
}

$(document).ready(function(){
  console.log("ready")
  // input value is submitted
  $("#entry").submit(function(event) { // this wraps the action of the sumit and the result
    event.preventDefault();
    // store the value
    inputValue = $("input:first").val();
    console.log("I entered: " + inputValue)
    // make it a number
    inputValue = parseFloat(inputValue);
    // convert inputValue to a numbers
    if(isReallyANumber(inputValue)){
      console.log("And the number is a value");
      // remove extra decimals
      inputValue = inputValue.toFixed(2);
      console.log("truncated to " + inputValue);
      // add the numbers together
      total = +total + +inputValue;
      // update the receipt total
      resultElement.innerText = "$" + total.toFixed(2); // this makes values without .XX have .XX
      // add a row to the table
      addRow("entries");
      document.getElementById("entry").reset();
    }
  })
})
