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
var calculatedArray = [ , , , , ];
// store the changed value
function didThisChange(event){
  toStore = $("#your-vote").find(":selected").val();
  console.log("" + toStore);
}
// identify if the drop down changed
document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('select[name="choiceList"]').onchange=didThisChange;
}, false);
// when ready code
$(document).ready(function(){








})
// giving up for the night, no clue what a drop down form is called. Assuming select. No clue how the select fires a trigger. Assuming some how the page has to associate to an array, no clue how to do that. Completely missing everything related to this outside of an array will do it and hot to inject array values if I can somehow fire the dropdown to a value.
