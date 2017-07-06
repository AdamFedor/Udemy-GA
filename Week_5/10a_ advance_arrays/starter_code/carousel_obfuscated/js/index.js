//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a 3=["3/A.5","3/z.5","3/y.5","3/x.5","3/w.5","3/C.5"];a i=0;a 6=[];4 h(){i>0?e(--i):0}4 d(){i+1<3.b?e(++i):j()}4 e(){$("#k-g-7-9").F("E",3[i]);$("#c-7>D").G("u")}4 j(){a 8=0;f(6.b!==0){6.t(4(q){8+=v(q)});
//8=(s.B((8/6.b)*m)/m).Q(2)}$("#k-g-7-9+U").T("W H V X Y. S R K J: "+8)}$(I).L(4(){$("#c-7").9("M",4(){f(i<3.b){6[i]=$("#c-7").P();d()}});$("#r-p .o[l=\'O\']").9("n",d);$("#r-p .o[l=\'N\']").9("n",h)});',61,61,'|||images|function|jpg|votes|vote|ave|on|var|length|your|nextImage|changeImage|if|to|previousImage||calculateVotes|image|value|100|click|btn|wrapper|element|buttons|Math|forEach|selected|parseInt|food6|food5|food4|food3|food2|round|food7|option|src|attr|removeAttr|have|document|was|score|ready|change|Back|Skip|val|toFixed|deliciousness|Total|text|div|reached|You|the|end'.split('|'),0,{}))
// the above is split in 2, visually it looked like part of the array was not in the comment
//------------------------------------------------------------------------------------//
// the actions loop for amount of elements found in array.
  // person selects skip
    // form value = 0
    // value is stored as form value response
    // image rotates to next image, selection is cleared out
  // person selects value in form
    // form value = new value
    // value is stored as form value response
    // image rotates to next image, selection is claered out
  // after first element and vote, a person can select back
    // selecting back goes back in array image
    // if input changes, clears the form value response (no association of former input)
      // selecting skip = 0 or previous value input, new form value = new value
    // continue onto next form element.
// on final element after voting score is processed, image remains on last of array
// keeping on last element, user can go back at any point, score may change
// string appears followed by score.
// selection is not cleared out.
//------------------------------------------------------------------------------------//
// starting position
// form dropdown is selected and a value is picked, selecting blank does nothing
var toStore;
var calculatedArray = [ , , , , , , , ];
var finalScore = 0;
var i = 0;
var j = 1;
var k = 0;
var l = 0;
var imageCycle = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];
// identify if the drop down changed
document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('select[name="choiceList"]').onchange=didThisChange;
}, false);
// store the changed value of the dropdown select and go to next
function didThisChange(event){
  toStore = $("#your-vote").find(":selected").val();
  toStore = parseFloat(toStore);
  // value is submitted the value is added to the array
  if (toStore === 1 || toStore === 2 || toStore === 3 || toStore === 4 || toStore === 5){
    // store value to array
    if (i < 7){
      calculatedArray[i] = toStore;
    } else {
      calculatedArray[7] = toStore;
    }
    console.log(i);
    // ADD FUNCTIONS IN HERE TO PULL DATA IN AND OUT - DUH!
    // update i to add 1
    if(i < 7){
      i = addI(i);
      j = addJ(j);
    }
    // go to next image
    $("img").replaceWith('<img id="image-to-vote-on" src="images/food' + j + '.jpg">')
    console.log(calculatedArray);
  }
  // if statement if array for value 5 is submitted or skipped with variable
  // update score
  console.log(finalScore + " is the final score")
  // display text and score
}
// function for storing i values
function addI(addTheI) {
  return addTheI +1;
}
// function for storing j values
function addJ(addTheJ) {
  return addTheJ +1;
}
// back is selected
// i-- to adjust for array input
// previous image is pulled up
// variable for 5th array submitted is turned off



// skip is selected
// i++ to adjust for array input
// next image is pulled up



// final score
