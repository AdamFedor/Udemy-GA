// ********************************************************* //
// *********************** VARIABLES *********************** //
// ********************************************************* //

// used for array values when outputting results
var relativeLoudness;
var varAmpBrand;
var varAmpModel;
var varAmpType;
var varAmpWatts8;
var varAmpWatts6;
var varAmpWatts4;
var varAmpWatts;
var varAmpOhm;
var varAmpNoise;
var varAmpThd;
var varAmpPrice;
var varSpeakerBrand;
var varSpeakerModel;
var varSpeakerType;
var varSpeakerFrequencyMin;
var varSpeakerFrequencyMax;
var varSpeakerOhm;
var varSpeakerOhmMin;
var varSpeakerWattsMin;
var varSpeakerWattsMax;
var varSpeakerSensitivity;
var varSpeakerWeight;
var varSpeakerPrice;
var objectAmpNumber;
var objectSpeakerNumber;


// ********************************************************* //
// ************************* READY ************************* //
// ********************************************************* //

// run function for selection template
$(document).ready(function(){
  // This is the default state of the page. Allows 1 grouped selection.
  selectionRun();
  ampDropDown();
  speakerDropDown();
  document.getElementById("amp-select").onchange = ampImgSelect;
  document.getElementById("speaker-select").onchange = speakerImgSelect;
  document.getElementById("evaluateSelection").onclick = clearToResults;
  document.getElementById("resetPage").onClick = clearToSelection;
});

// on change to drop down, image changes to brand+" "+model

// on change the object is selected and var above are set to selected variable

// maybe instead flip the cards to show details of each? With results below? Or results seperate and this is for previewing.

// reset takes the user back to the original selectionRun() setup.

// ********************************************************* //
// *********************** FUNCTIONS *********************** //
// ********************************************************* //

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

// convert dollars to #,###.##
function addComma(valueConvert) {
    return valueConvert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// update amp image with updated selection
function ampImgSelect(){
  // change objectSpeakerNumber to selection
  ampSelection = document.getElementById("amp-select").selectedIndex;
  var oneLess = ampSelection - 1;
  objectAmpNumber = ampSelection;
  varAmpBrand = amp[oneLess].brand;
  varAmpModel = amp[oneLess].model;
  varAmpType = amp[oneLess].type;
  varAmpWatts8 = amp[oneLess].ohm8;
  varAmpWatts6 = amp[oneLess].ohm6;
  varAmpWatts4 = amp[oneLess].ohm4;
  varAmpOhm = amp[oneLess].minImpedence;
  varAmpNoise = amp[oneLess].signalToNoise;
  varAmpThd = amp[oneLess].thdAmp;
  varAmpPrice = amp[oneLess].cost;
  // remove spaces for image - custom stored images will later be done this way
  var ampUsed = ampImg[objectAmpNumber].replace(/\s+/g, '');
  // replace image with selected - custom images will later be done this way
  $(".defaultamp").css("background-image", "url('"+ampUsed+".jpg'");
}

// update speaker image with updated selection
function speakerImgSelect(){
  // change objectSpeakerNumber to selection
  speakerSelection = document.getElementById("speaker-select").selectedIndex;
  var oneLess = speakerSelection - 1;
  objectSpeakerNumber = speakerSelection;
  // now that the number of the drop down is selected, the object can be applied to the variables
  varSpeakerBrand = speaker[oneLess].brand;
  varSpeakerModel = speaker[oneLess].model;
  varSpeakerType = speaker[oneLess].type;
  varSpeakerFrequencyMin = speaker[oneLess].frequencyMin;
  varSpeakerFrequencyMax = speaker[oneLess].frequencyMax;
  varSpeakerOhm = speaker[oneLess].ohmNominal;
  varSpeakerOhmMin = speaker[oneLess].ohmMinimal;
  varSpeakerWattsMin = speaker[oneLess].recommendedMinPower;
  varSpeakerWattsMax = speaker[oneLess].recommendedMaxPower;
  varSpeakerSensitivity = speaker[oneLess].sensitivityDb;
  varSpeakerWeight = speaker[oneLess].weightLbs;
  varSpeakerPrice = speaker[oneLess].costPerPair;
  // remove spaces for image
  var speakerUsed = speakerImg[speakerSelection].replace(/\s+/g, '');
  // replace image with selected - custom stored images will later be done this way
  $(".defaultspeaker").css("background-image", "url('"+speakerUsed+".jpg'");
}

// prep for switching and switch to results page
function clearToResults() {
  $("#selectionAmpSpeaker").remove();
  $("#selectionButtons").remove();
  resultsRun();
}

// prep for switching and switch to results page
function clearToSelection() {
  $("#resultsSwitch").remove();
  selectionRun();
}

// ********************************************************* //
// ****************** FUNCTIONS: SELECTION ***************** //
// ********************************************************* //

// function to run selection functions
function selectionRun() {
  selectionHigh();
  // selectionMed();
  selectionLow();
}

// functions for selection template loaded
function selectionHigh() {
  var selectionTemplateVar = $("#selectionTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}
function selectionMed() {
  var selectionTemplateVar = $("#selectionMiddle").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisMiddle").append($selectionTopText);
}
function selectionLow() {
  var selectionTemplateVar = $("#selectionBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisBottom").append($selectionTopText);
}

// ********************************************************* //
// ******************* FUNCTIONS: RESULTS ****************** //
// ********************************************************* //

// function to run results functions
function resultsRun() {
  resultsHigh();
  // resultsPrice(varAmpPrice,varSpeakerPrice);
  // resultsAmp(varAmpBrand,varAmpModel,varAmpType,varAmpWatts,varAmpOhm,varAmpNoise,varAmpThd,varAmpPrice);
  // resultsSpeaker(varSpeakerBrand,varSpeakerModel,varSpeakerType,varSpeakerFrequencyMin,varSpeakerFrequencyMax,varSpeakerOhm,varSpeakerOhmMin,varSpeakerWattsMin,varSpeakerWattsMax,varSpeakerSensitivity,varSpeakerWeight,varSpeakerPrice);
  // resultsLoudness(varSpeakerSensitivity);
  resultsParagraph();
}

function resultsWattsToOhm() {
  if (speakerOhm === 8) {
    varSpeakerOhm = varAmpWatts8;
  } else if (speakerOhm === 6) {
    varSpeakerOhm = varAmpWatts6;
  } else if (speakerOhm === 4) {
    varSpeakerOhm = varAmpWatts4;
  }
}

// functions for results template loaded
function resultsHigh() {
  var selectionTemplateVar = $("#resultsTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}
function resultsLow() {
  var selectionTemplateVar = $("#resultsBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}

// function to return the results of the amplifier
function resultsAmp(ampBrand,ampModel,ampType,ampWatts,ampOhm,ampNoise,ampThd,ampPrice){
  var ampPriceFixed = ampPrice.toFixed(2);
  var ampPriceFormatted = addComma(ampPriceFixed);
  $("#ampBrandModelId").append(ampBrand+": "+ampModel);
  $("#ampTypeId").append(ampType);
  $("#ampWattsOhmId").append("Watts: "+ampWatts+" watts at "+ampOhm+" Ohm");
  $("#ampNoiseId").append("Signal to Noise Ratio: "+ampNoise);
  $("#ampThdId").append("THD: "+ampThd+"%");
  $("#ampPriceId").append("Price: $"+ampPriceFormatted);
}

// function to return the results of the speaker
function resultsSpeaker(speakerBrand,speakerModel,speakerType,speakerFrequencyMin,speakerFrequencyMax,speakerOhm,speakerOhmMin,speakerWattsMin,speakerWattsMax,speakerSensitivity,speakerWeight,speakerPrice){
  var speakerWattsMaxFormatted = addComma(speakerWattsMax);
  var speakerFrequencyMaxFormatted = addComma(speakerFrequencyMax);
  var speakerPriceFixed = speakerPrice.toFixed(2);
  var speakerPriceFormatted = addComma(speakerPriceFixed);
  $("#speakerBrandModelId").append(speakerBrand+": "+speakerModel);
  $("#speakerTypeId").append(speakerType);
  $("#speakerFrequencyId").append("Frequency: "+speakerFrequencyMin+"-"+speakerFrequencyMaxFormatted+" Hz");
  $("#speakerOhmId").append("Ohm: "+speakerOhm);
  $("#speakerOhmMinId").append("Min Ohm: "+speakerOhmMin+" Ohm");
  $("#speakerWattsMaxId").append("Max Watts: "+speakerWattsMaxFormatted+" watts");
  $("#speakerWattsMinId").append("Min Watts: "+speakerWattsMin+" watts");
  $("#speakerSensitivityId").append("Sensitivity: "+speakerSensitivity+"db");
  $("#speakerWeightId").append("Weight: "+speakerWeight+" lbs.");
  $("#speakerPriceId").append("Price: $"+speakerPriceFormatted);
}

// function to return the relative loudness of the speaker and amp combo
function resultsLoudness(speakerSensitivity) {
  var isNumber = parseInt(speakerSensitivity);
  decibelMathFunc(isNumber);
  $("#resultsLoudnessId").append("Relative Loudness: "+relativeLoudness+" watts");
}

// function to return the total price of the speaker and amp combo
function resultsPrice(ampPrice,speakerPrice) {
    var ampPriceNum = parseInt(ampPrice);
    var speakerPriceNum = parseInt(speakerPrice);
    var priceCombinedNormal = ampPriceNum+speakerPriceNum;
    var priceCombined = priceCombinedNormal.toFixed(2);
    var priceCombinedFormatted = addComma(priceCombined);
    $("#resultsHeaderId").append("Amplifier & Speaker Results: $"+priceCombinedFormatted);
}

// function to return the results paragraph with variables of results
function resultsParagraph(match,noise,SpeakerThd,Sensitivity,Subwoofer) {
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
// ******************** FUNCTION: MATH ********************* //
// ********************************************************* //

// function for below 98db
function decibelMathFunc(decibelMath) {
  // var validate = decibelMath;
  var validate = decibelMath;
  var validateNum = parseInt(validate);
  var aEightThird = 8/3;
  var aFourThird = 4/3;
  var aFourSixth = 4/6;
  var aThird = 1/3;
  var aSixth = 1/6;
  // calculate if less than 89
  if (validateNum < parseInt(89)) {
    // loop to do a less than formula. each reduced instance needs to apply to self
    for(var i=88, wattz=100; validateNum <= i; i--){
      if (wattz > 51) {
        wattz = wattz - (50 * aThird);
      } else if (wattz > 26) {
        wattz = wattz - (25 * aThird);
      } else if (wattz > 13) {
        wattz = wattz - (25 * aSixth);
      } else if (wattz > 6.3) {
        wattz = wattz - (12.5 * aSixth);
      } else if (wattz > 3.13) {
        wattz = wattz - (6.25 * aSixth);
      }
      relativeLoudness = wattz;
    }
  } // calculate if more than 89
  else if (validateNum > parseInt(89)) {
    // loop to do a more than formula. each increased instance needs to apply to self
    for(var i=90, wattz=100; validateNum >= i; i++){
      if (wattz < 199) {
        wattz = wattz + (100 * aThird);
      } else if (wattz < 399) {
        wattz = wattz + (100 * aFourSixth);
      } else if (wattz < 799) {
        wattz = wattz + (100 * aFourThird);
      } else if (wattz < 1599) {
        wattz = wattz + (100 * aEightThird);
      }
      relativeLoudness = wattz;
    }
  } // calculate if equal to 89
  else if (validateNum === parseInt(89)) {
    relativeLoudness = 100;
  };
  // push out decimal points
  relativeLoudness = relativeLoudness.toFixed(2);
  // round up
  relativeLoudness = Math.ceil(relativeLoudness, -1);
};

// ********************************************************* //
// *********************** DROPDOWN ************************ //
// ********************************************************* //

// function to do dropdown list of amp and setting images
function ampDropDown() {
  for (var i=0; i < amp.length; i++){
    $("#amp-select").append("<option>"+amp[i].brand+": "+amp[i].model+"</option>")
    ampImg.push(src="amps/"+amp[i].brand+" "+amp[i].model);
  }
}

// function to do dropdown list of speaker and setting images
function speakerDropDown() {
  for (var i=0; i < speaker.length; i++){
    $("#speaker-select").append("<option>"+speaker[i].brand+": "+speaker[i].model+"</option>")
    speakerImg.push(src="speakers/"+speaker[i].brand+" "+speaker[i].model);
  }
}

// ********************************************************* //
// ************************ SCROLL ************************* //
// ********************************************************* //

// navigation bar collapsing details
$(window).scroll(function() { /*working draft, looking for alternative for .scroll()*/
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

// ********************************************************* //
// ************************ ARRAYS ************************* //
// ********************************************************* //

// array for ampDropDown
var ampImg = ["img/default_speaker"];

// array for speakerDropDown
var speakerImg = ["img/default_amp"];

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

// array of objects for amp
var amp = [
  {
    brand: "McIntosh",
    model: "MA5200",
    type: "Integrated Amplifier",
    cost: 4500,
    ohm8: 100,
    ohm6: NaN,
    ohm4: NaN,
    signalToNoise: 110,
    minImpedence: 8,
    thdAmp: 0.005
  },
  {
    brand: "NAD",
    model: "C 338",
    type: "Integrated Amplifier",
    cost: 649.99,
    ohm8: 50,
    ohm6: 50,
    ohm4: 50,
    signalToNoise: 98,
    minImpedence: 4,
    thdAmp: 0.030
  },
  {
    brand: "NAD",
    model: "C 388",
    type: "Integrated Amplifier",
    cost: 1599.99,
    ohm8: 150,
    ohm6: 150,
    ohm4: 150,
    signalToNoise: 95,
    minImpedence: 4,
    thdAmp: "0.009%"
  },
  {
    brand: "NAD",
    model: "M32",
    type: "Integrated Amplifier",
    cost: 3999.99,
    ohm8: 180,
    ohm6: 180,
    ohm4: 180,
    signalToNoise: 91,
    minImpedence: 4,
    thdAmp: 0.030
  },
  {
    brand: "NAD",
    model: "M2",
    type: "Integrated Amplifier",
    cost: 5999.99,
    ohm8: 250,
    ohm6: 250,
    ohm4: 250,
    signalToNoise: 119,
    minImpedence: 4,
    thdAmp: 0.004
  },
  {
    brand: "Rotel",
    model: "RA-1572",
    type: "Integrated Amplifier",
    cost: 1699,
    ohm8: 120,
    ohm6: 120,
    ohm4: 120,
    signalToNoise: 100,
    minImpedence: 4,
    thdAmp: 0.030
  },
  {
    brand: "Rotel",
    model: "RA-1592",
    type: "Integrated Amplifier",
    cost: 2499,
    ohm8: 200,
    ohm6: 200,
    ohm4: 200,
    signalToNoise: 102,
    minImpedence: 4,
    thdAmp: 0.030
  },
  {
    brand: "Rotel",
    model: "RB-1590",
    type: "Amplifier",
    cost: 3000,
    ohm8: 350,
    ohm6: 350,
    ohm4: 350,
    signalToNoise: NaN,
    minImpedence: 4,
    thdAmp: 0.030
  },
  {
    brand: "Yamaha",
    model: "A-S301",
    type: "Integrated Amplifier",
    cost: 349.99,
    ohm8: 60,
    ohm6: 65,
    ohm4: 70,
    signalToNoise: 99,
    minImpedence: 4,
    thdAmp: 0.019
  },
  {
    brand: "Yamaha",
    model: "A-S501",
    type: "Integrated Amplifier",
    cost: 549.99,
    ohm8: 85,
    ohm6: 100,
    ohm4: NaN,
    signalToNoise: 99,
    minImpedence: 4,
    thdAmp: 0.019
  },
  {
    brand: "Yamaha",
    model: "A-S701",
    type: "Integrated Amplifier",
    cost: 799.99,
    ohm8: 100,
    ohm6: 120,
    ohm4: NaN,
    signalToNoise: 99,
    minImpedence: 4,
    thdAmp: 0.019
  },
  {
    brand: "Yamaha",
    model: "A-S2000",
    type: "Integrated Amplifier",
    cost: 1999.99,
    ohm8: 90,
    ohm6: 120,
    ohm4: 150,
    signalToNoise: 98,
    minImpedence: 4,
    thdAmp: 0.020
  },
  {
    brand: "Yamaha",
    model: "A-S3000",
    type: "Integrated Amplifier",
    cost: 6999.99,
    ohm8: 100,
    ohm6: 125,
    ohm4: 150,
    signalToNoise: 103,
    minImpedence: 4,
    thdAmp: 0.007
  }
];

// array of objects for amp ///////////////////////////////////////////////////
var speaker = [
  {
    brand: "Bowers & Wilkins",
    model: "CM10 S2",
    type: "Tower",
    costPerPair: 4000.00,
    ohmNominal: 8,
    ohmMinimal: 3.1,
    recommendedMinPower: 30,
    recommendedMaxPower: 300,
    frequencyMin: 45,
    frequencyMax: 28000,
    sensitivityDb: 90,
    weightLbs: 73.7
  },
  {
    brand: "Bowers & Wilkins",
    model: "CM8 S2",
    type: "Tower",
    costPerPair: 2399.96,
    ohmNominal: 8,
    ohmMinimal: 3,
    recommendedMinPower: 30,
    recommendedMaxPower: 150,
    frequencyMin: "48",
    frequencyMax: 28000,
    sensitivityDb: 88,
    weightLbs: 43
  },
  {
    brand: "Bowers & Wilkins",
    model: "CM6 S2",
    type: "Bookshelf",
    costPerPair: 1999.98,
    ohmNominal: 8,
    ohmMinimal: 3.7,
    recommendedMinPower: 30,
    recommendedMaxPower: 120,
    frequencyMin: 50,
    frequencyMax: 28000,
    sensitivityDb: 88,
    weightLbs: 19.6
  },
  {
    brand: "Bowers & Wilkins",
    model: "CM1 S2",
    type: "Bookshelf",
    costPerPair: 1099.98,
    ohmNominal: 8,
    ohmMinimal: 4,
    recommendedMinPower: 30,
    recommendedMaxPower: 100,
    frequencyMin: 50,
    frequencyMax: 28000,
    sensitivityDb: 84,
    weightLbs: 14.7
  },
  {
    brand: "Bowers & Wilkins",
    model: "800",
    type: "Tower",
    costPerPair: 30000.00,
    ohmNominal: 8,
    ohmMinimal: 3,
    recommendedMinPower: 50,
    recommendedMaxPower: 1000,
    frequencyMin: 13,
    frequencyMax: 35000,
    sensitivityDb: 90,
    weightLbs: 212
  },
  {
    brand: "Bowers & Wilkins",
    model: "804",
    type: "Tower",
    costPerPair: 9000.00,
    ohmNominal: 8,
    ohmMinimal: 3,
    recommendedMinPower: 50,
    recommendedMaxPower: 200,
    frequencyMin: 24,
    frequencyMax: 28000,
    sensitivityDb: 89,
    weightLbs: 73
  },
  {
    brand: "Bowers & Wilkins",
    model: "805",
    type: "Bookshelf",
    costPerPair: 6000.00,
    ohmNominal: 8,
    ohmMinimal: "4.6",
    recommendedMinPower: 50,
    recommendedMaxPower: 120,
    frequencyMin: 34,
    frequencyMax: 35000,
    sensitivityDb: 88,
    weightLbs: 28
  },
  {
    brand: "Focal",
    model: "Chorus 726",
    type: "Tower",
    costPerPair: 1899.98,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 40,
    recommendedMaxPower: 250,
    frequencyMin: 49,
    frequencyMax: 28000,
    sensitivityDb: 91,
    weightLbs: 51.7
  },
  {
    brand: "Focal",
    model: "Chorus 714",
    type: "Tower",
    costPerPair: 1298.00,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 30,
    recommendedMaxPower: 150,
    frequencyMin: 52,
    frequencyMax: 28000,
    sensitivityDb: 91,
    weightLbs: 35.6
  },
  {
    brand: "Focal",
    model: "Chorus 706",
    type: "Bookshelf",
    costPerPair: 749.00,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 25,
    recommendedMaxPower: 120,
    frequencyMin: 55,
    frequencyMax: 28000,
    sensitivityDb: 90,
    weightLbs: 18
  },
  {
    brand: "Focal",
    model: "Chorus 705",
    type: "Bookshelf",
    costPerPair: 549.99,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 25,
    recommendedMaxPower: 100,
    frequencyMin: 65,
    frequencyMax: 28000,
    sensitivityDb: 89,
    weightLbs: 12.5
  },
  {
    brand: "Focal",
    model: "Dome Flax",
    type: "Bookshelf",
    costPerPair: 799.98,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 25,
    recommendedMaxPower: 100,
    frequencyMin: 80,
    frequencyMax: 28000,
    sensitivityDb: 88,
    weightLbs: 4.2
  },
  {
    brand: "Klipsch",
    model: "Forte III",
    type: "Tower",
    costPerPair: 3599.98,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: NaN,
    recommendedMaxPower: 100,
    frequencyMin: 38,
    frequencyMax: 20000,
    sensitivityDb: 99,
    weightLbs: 72
  },
  {
    brand: "Klipsch",
    model: "RP-280F",
    type: "Tower",
    costPerPair: 1199.98,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: NaN,
    recommendedMaxPower: 150,
    frequencyMin: 32,
    frequencyMax: 25000,
    sensitivityDb: 98,
    weightLbs: 62.5
  },
  {
    brand: "Klipsch",
    model: "RP-24F",
    type: "Tower",
    costPerPair: 999.96,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: NaN,
    recommendedMaxPower: 75,
    frequencyMin: 45,
    frequencyMax: 24000,
    sensitivityDb: 95,
    weightLbs: 25
  },
  {
    brand: "Klipsch",
    model: "RP-160M",
    type: "Bookshelf",
    costPerPair: 549.99,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: NaN,
    recommendedMaxPower: 100,
    frequencyMin: 45,
    frequencyMax: 25000,
    sensitivityDb: 95,
    weightLbs: 19.9
  },
  {
    brand: "Klipsch",
    model: "R-15M",
    type: "Bookshelf",
    costPerPair: 199.99,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: NaN,
    recommendedMaxPower: 50,
    frequencyMin: 64,
    frequencyMax: 24000,
    sensitivityDb: 90,
    weightLbs: 7.13
  },
  {
    brand: "Martin Logan",
    model: "ESL X",
    type: "Tower",
    costPerPair: 4499.98,
    ohmNominal: 4,
    ohmMinimal: NaN,
    recommendedMinPower: 20,
    recommendedMaxPower: 200,
    frequencyMin: 46,
    frequencyMax: 25000,
    sensitivityDb: 90,
    weightLbs: 37
  },
  {
    brand: "Martin Logan",
    model: "ESL",
    type: "Tower",
    costPerPair: 2999.98,
    ohmNominal: 6,
    ohmMinimal: NaN,
    recommendedMinPower: 20,
    recommendedMaxPower: 300,
    frequencyMin: 42,
    frequencyMax: 22000,
    sensitivityDb: 91,
    weightLbs: 35.5
  },
  {
    brand: "Martin Logan",
    model: "Motion 20",
    type: "Tower",
    costPerPair: 1599.98,
    ohmNominal: 6,
    ohmMinimal: NaN,
    recommendedMinPower: 20,
    recommendedMaxPower: 300,
    frequencyMin: 42,
    frequencyMax: 22000,
    sensitivityDb: 91,
    weightLbs: 37
  },
  {
    brand: "Martin Logan",
    model: "35XT",
    type: "Bookshelf",
    costPerPair: 1249.98,
    ohmNominal: 4,
    ohmMinimal: NaN,
    recommendedMinPower: 20,
    recommendedMaxPower: 250,
    frequencyMin: 50,
    frequencyMax: 25000,
    sensitivityDb: 92,
    weightLbs: 18.5
  },
  {
    brand: "McIntosh",
    model: "XR100",
    type: "Tower",
    costPerPair: 10000.00,
    ohmNominal: 8,
    ohmMinimal: 4,
    recommendedMinPower: 75,
    recommendedMaxPower: 600,
    frequencyMin: 30,
    frequencyMax: 45000,
    sensitivityDb: 87,
    weightLbs: 68.5
  },
  {
    brand: "McIntosh",
    model: "LCR80",
    type: "Bookshelf",
    costPerPair: 5000.00,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 75,
    recommendedMaxPower: 300,
    frequencyMin: 80,
    frequencyMax: 45000,
    sensitivityDb: 81,
    weightLbs: 24
  },
  {
    brand: "McIntosh",
    model: "XR50",
    type: "Bookshelf",
    costPerPair: 4000.00,
    ohmNominal: 8,
    ohmMinimal: NaN,
    recommendedMinPower: 75,
    recommendedMaxPower: 300,
    frequencyMin: 40,
    frequencyMax: 45000,
    sensitivityDb: 81,
    weightLbs: 19.5
  },
  {
    brand: "Sonus Faber",
    model: "Venere S",
    type: "Tower",
    costPerPair: 4999.98,
    ohmNominal: 4,
    ohmMinimal: NaN,
    recommendedMinPower: 40,
    recommendedMaxPower: 300,
    frequencyMin: 40,
    frequencyMax: 25000,
    sensitivityDb: 90,
    weightLbs: 63.5
  },
  {
    brand: "Sonus Faber",
    model: "Venere 3.0",
    type: "Tower",
    costPerPair: 3498.00,
    ohmNominal: 6,
    ohmMinimal: NaN,
    recommendedMinPower: 40,
    recommendedMaxPower: 300,
    frequencyMin: 38,
    frequencyMax: 25000,
    sensitivityDb: 90,
    weightLbs: 47
  },
  {
    brand: "Sonus Faber",
    model: "Venere 2.0",
    type: "Bookshelf",
    costPerPair: 3999.98,
    ohmNominal: 6,
    ohmMinimal: NaN,
    recommendedMinPower: 50,
    recommendedMaxPower: 200,
    frequencyMin: 45,
    frequencyMax: 25000,
    sensitivityDb: 88,
    weightLbs: 15.5
  },
  {
    brand: "Sonus Faber",
    model: "Venere 1.5",
    type: "Bookshelf",
    costPerPair: 2399.98,
    ohmNominal: 6,
    ohmMinimal: NaN,
    recommendedMinPower: 30,
    recommendedMaxPower: 150,
    frequencyMin: 50,
    frequencyMax: 25000,
    sensitivityDb: 85,
    weightLbs: 13.3
  },
  {
    brand: "Sonus Faber",
    model: "Chameleon",
    type: "Tower",
    costPerPair: 1999.98,
    ohmNominal: 4,
    ohmMinimal: NaN,
    recommendedMinPower: 40,
    recommendedMaxPower: 300,
    frequencyMin: 38,
    frequencyMax: 25000,
    sensitivityDb: 90,
    weightLbs: 54.013
  },
  {
    brand: "Sonus Faber",
    model: "Chameleon B",
    type: "Bookshelf",
    costPerPair: 1799.98,
    ohmNominal: 4,
    ohmMinimal: NaN,
    recommendedMinPower: 30,
    recommendedMaxPower: 150,
    frequencyMin: 50,
    frequencyMax: 25000,
    sensitivityDb: 87,
    weightLbs: 14.77
  }
];
