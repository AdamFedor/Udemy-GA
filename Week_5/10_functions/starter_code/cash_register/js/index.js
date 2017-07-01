//7:30PM to 11:50PM - finally gave up, I'll try doing this tomorrow

var total = $("#total").val();
var resultElement = document.getElementById("total");
// gave up on how to pull the submitted value (15-20 articles on mdn and counting) - 2 hours .submit() causes an infinate loop or flicker effect in every way I've implemented it
// added fake input to finish the coded
var newValue = 1.993;

function isReallyANumber(allegedNumber){
    //because invalid numbers are assigned the value NaN
    return !isNaN(allegedNumber) && typeof allegedNumber === "number";
}
function addRow(receiptTable){
  var tableRec = document.getElementById(receiptTable);
  var addRow = tableRec.insertRow(0);
  var addCellR = addRow.insertCell(0);
  var valueRow = document.createTextNode(newValue);
  var addCellL = addRow.insertCell(0);
  var receiptText = document.createTextNode("oihaweoifhaweroihj");
    // if no column exists, then
  //if (document.getElementById("entries > tbody").rows[0].cells.length = 2){ // seems to be based off of tfoot and not tbody, adding "> tbody" errors out.
  addCellL.appendChild(receiptText);
  //}
  // do this every time
  addCellR.appendChild(valueRow)
}

$(document).ready(function(){
  console.log("ready")
  // input value is submitted... how?
  //$("#entry").submit(addNewNumber);
  // input value is processed
  console.log("" + newValue + "");
  newValue = newValue.toFixed(2);
  console.log("" + newValue + "");
  // workaround so I can move on and resolve code.
  $("#newEntry").click(addNewNumber);
  function addNewNumber(){
    console.log("entered function")
    // input value is now a number
    newValue = parseFloat(newValue);
    // if the input value is a true number
    if(isReallyANumber(newValue)){
      console.log("now I can do something")
      // input value is added to total
      console.log("" + total + "");
      total = total + newValue;
      console.log("" + total + "");
      resultElement.innerText = total;
      // table row is added
      addRow("entries");

      // new table row contains string in table cell to the left


    }
  }
})
