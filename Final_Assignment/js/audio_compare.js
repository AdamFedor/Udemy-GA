// ********************************************************* //
// *********************** VARIABLES *********************** //
// ********************************************************* //

// used for array values when outputting results
var resultsVarMatch;
var resultsVarNoise;
var resultsVarThd;
var resultsVarSensitivity;
var resultsVarSubwoofer;
var mathDb;

// ********************************************************* //
// ************************* READY ************************* //
// ********************************************************* //

// run function for selection template
$(document).ready(function(){
  // This is the default state of the page. Allows 1 grouped selection.
  // selectionRun();
  resultsRun();
});

// ********************************************************* //
// *********************** FUNCTIONS *********************** //
// ********************************************************* //

// function to reset variables
function varReset(){
  resultsVarMatch = 0;
  resultsVarNoise = 0;
  resultsVarThd = 0;
  resultsVarSensitivity = 0;
  resultsVarSubwoofer = 0;
}

// function navigation bar collapsing
$(function(){
  $('#lookingDownOnYou').data('size','big');
});

// enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// enable popovers
$(function () {
  $('[data-toggle="popover"]').popover()
})

// popover function to dismiss on click
$('.popover-dismiss').popover({
  trigger: 'focus'
})

// ********************************************************* //
// ****************** FUNCTIONS: SELECTION ***************** //
// ********************************************************* //

// function to run selection functions
function selectionRun(){
  selectionHigh();
  selectionMed();
  selectionLow();
}

// functions for selection template loaded
function selectionHigh(){
  var selectionTemplateVar = $("#selectionTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}
function selectionMed(){
  var selectionTemplateVar = $("#selectionButtons").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisMiddle").append($selectionTopText);
}
function selectionLow(){
  var selectionTemplateVar = $("#selectionBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisBottom").append($selectionTopText);
}

// ********************************************************* //
// ******************* FUNCTIONS: RESULTS ****************** //
// ********************************************************* //

// function to run results functions
function resultsRun(){
  resultsHigh();
  resultsPrice();
  resultsAmp();
  resultsSpeaker();
  resultsLoudness();
  resultsParagraph();
}

// functions for results template loaded
function resultsHigh(){
  var selectionTemplateVar = $("#resultsTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}
function resultsLow(){
  var selectionTemplateVar = $("#resultsBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}

// function to return the results of the amplifier
function resultsAmp(ampBrand,ampModel,ampType,ampWatts,ampOhm,ampNoise,ampThd,ampPrice){
  var ampBrand = "McIntosh";
  var ampModel = "MC301"
  var ampType = "Amplifier"
  var ampWatts = 300;
  var ampOhm = 8;
  var ampNoise = 120;
  var ampThd = 0.005;
  var ampPrice = 5000.00;
  var ampPriceFixed = ampPrice.toFixed(2);
  $("#ampBrandModelId").append(ampBrand+": "+ampModel);
  $("#ampTypeId").append(ampType);
  $("#ampWattsOhmId").append("Watts: "+ampWatts+" watts at "+ampOhm+" Ohm");
  $("#ampNoiseId").append("Signal to Noise Ratio: "+ampNoise);
  $("#ampThdId").append("THD: "+ampThd+"%");
  $("#ampPriceId").append("Price: $"+ampPriceFixed);
}

// function to return the results of the speaker
function resultsSpeaker(speakerBrand,speakerModel,speakerType,speakerFrequencyMin,speakerFrequencyMax,speakerOhm,speakerOhmMin,speakerWattsMin,speakerWattsMax,speakerSensitivity,speakerWeight,speakerPrice){
  var speakerBrand = "Bowers & Wilkins";
  var speakerModel = "CM10 S2";
  var speakerType = "Tower Speaker";
  var speakerFrequencyMin = 45;
  var speakerFrequencyMax = 28000;
  var speakerOhm = 8;
  var speakerOhmMin = 3.1;
  var speakerWattsMin = 30;
  var speakerWattsMax = 300;
  var speakerSensitivity = 90;
  var speakerWeight = 73.7;
  var speakerPrice = 4000.00;
  var speakerPriceFixed = speakerPrice.toFixed(2);
  $("#speakerBrandModelId").append(speakerBrand+": "+speakerModel);
  $("#speakerTypeId").append(speakerType);
  $("#speakerFrequencyId").append("Frequency: "+speakerFrequencyMin+"-"+speakerFrequencyMax+" Hz");
  $("#speakerOhmId").append("Ohm: "+speakerOhm);
  $("#speakerOhmMinId").append("Min Ohm: "+speakerOhmMin+" Ohm");
  $("#speakerWattsMaxId").append("Max Watts: "+speakerWattsMax+" watts");
  $("#speakerWattsMinId").append("Min Watts: "+speakerWattsMin+" watts");
  $("#speakerSensitivityId").append("Sensitivity: "+speakerSensitivity+"db");
  $("#speakerWeightId").append("Weight: "+speakerWeight+" lbs.");
  $("#speakerPriceId").append("Price: $"+speakerPriceFixed);
}

// function to return the relative loudness of the speaker and amp combo
function resultsLoudness(speakerSensitivity){
  var speakerSensitivity = 92;
  var isNumber = parseInt(speakerSensitivity);
  var startingPoint = isNumber-89;
  startingPoint = startingPoint/3;
  startingPoint = startingPoint*2*100;
  console.log(startingPoint);
  relativeLoudness = startingPoint;
  $("#resultsLoudnessId").append("Relative Loudness: "+relativeLoudness+" watts");
}

// function to return the total price of the speaker and amp combo
function resultsPrice(ampPrice,speakerPrice){
    var ampPrice = 5000;
    var speakerPrice = 4000;
    var ampPriceNum = parseInt(ampPrice);
    var speakerPriceNum = parseInt(speakerPrice);
    var priceCombinedNormal = ampPriceNum+speakerPriceNum;
    var priceCombined = priceCombinedNormal.toFixed(2);
    $("#resultsHeaderId").append("Amplifier & Speaker Results: $"+priceCombined);
}

// function to return the results paragraph with variables of results
function resultsParagraph(match,noise,SpeakerThd,Sensitivity,Subwoofer){
  var match = 1;
  var noise = 1;
  var speakerThd = 1;
  var sensitivity = 2;
  var subwoofer = 1;
  $("#resultsReplaceParagraph").append("The amplifier and speaker picked "+resultsMatch[match]+
    " Your amplifier's signal to noise ratio is "+resultsNoise[noise]+
    " Additionally, your amplifier's THD (the internally generated noise, this is the accuracy of the left and right channels) is "+resultsThd[SpeakerThd]+
    " For your speakers, relative loudness refers to how loud a speaker sounds at 100 watts on a speaker rated at 89db sensativity. Every 3db greater, it takes half the amount of power for the same volume. Every 3db less it takes twice the poewr for the same volume. Your setup sounds "+resultsSensitivity[sensitivity]+
    " another speaker and amp combo playing at 100 watts and 89db. And your speakers minimum frequency is "+resultsSubwoofer[subwoofer]);
}

// ********************************************************* //
// ******************** FUNCTIONS: MATH ******************** //
// ********************************************************* //

// function for below 98db
function decibelMathBelow() {
  
}

// function for equal to or above 98db
function decibelMathAbove() {

}

// ********************************************************* //
// ************************ ARRAYS ************************* //
// ********************************************************* //

// array of strings for results. First sentence.
var resultsMatch = ["are a good match.","technically work, but advise changes.","are not a match."];

// array of strings for results. Second sentence.
var resultsNoise = ["below the average. This will inject noise to the signal from your source to your speaker.","average. This mean's it will inject average noise to the signal from your source to your speaker.","above average. This mean's it will inject below average noise to the signal from your source to your speaker.","well above the average. This means it will inject the least noise to the signal from your source to your speaker."];

// array of strings for results. Third sentence.
var resultsThd = ["below average. You will incur noise.","average. You will incur acceptable noise.","above average. You will incur less than average noise.","well below the average. You will incur minimal noise."];

// array of strings for results. Fourth sentence.
var resultsSensitivity = ["louder than","exactly as loud as","quieter than"];

// array of strings for results. Fifth sentence.
var resultsSubwoofer = ["lower than 45hz. For full frequencies, try adding a subwoofer to your stereo setup. This will help round out the lowest frequencies.","low enough that you may not need additional bass by adding a subwoofer."];

// ********************************************************* //
// ************************ SCROLL ************************* //
// ********************************************************* //

// navigation bar collapsing details
$(window).scroll(function(){ /*working draft, looking for alternative for .scroll()*/
  if($(document).scrollTop() > 0) /*working draft, looking for alternative for .scrollTop()*/
{
  if($('#lookingDownOnYou').data('size') == 'big')
    {
    $('#lookingDownOnYou').data('size','small');
    $('#lookingDownOnYou').stop().animate({ /*experimental, looking for alternative for .animate()*/
      'padding-top' : 0,
      height:'90px'
    },300);
  }
}
else
  {
    if($('#lookingDownOnYou').data('size') == 'small')
      {
      $('#lookingDownOnYou').data('size','big');
      $('#lookingDownOnYou').stop().animate({ /*experimental, looking for alternative for .animate()*/
        'padding-top' : '25px',
        height:'141.219px'
      },100);
    }
  }
});
