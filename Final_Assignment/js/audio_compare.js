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
var varAmpOhmMin;
var varAmpNoise;
var varAmpThd;
var varAmpWeight;
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
var foundError;
var foundWarning;
var ampUsed;
var speakerUsed;

// ********************************************************* //
// ************************* READY ************************* //
// ********************************************************* //

// run function for selection template
$(document).ready(function(){
  // These are the default state of the page. Allows 1 grouped selection.
  selectionRun();
  ampDropDown();
  speakerDropDown();
  // change image of amp when amp is selected or reselected
  document.getElementById("amp-select").onchange = ampImgSelect;
  // change image of speaker when speaker is selected or reselected
  document.getElementById("speaker-select").onchange = speakerImgSelect;
  // switch from selection to results
  document.getElementById("evaluateSelection").onclick = clearToResults;
});

// ********************************************************* //
// *********************** FUNCTIONS *********************** //
// ********************************************************* //

// function navigation bar collapsing
$(function(){
  $('#lookingDownOnYou').data('size','big');
});

// convert dollars to #,###.##
function addComma(valueConvert) {
    return valueConvert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// update amp image with updated selection
function ampImgSelect(){
  // change objectSpeakerNumber to selection
  ampSelection = document.getElementById("amp-select").selectedIndex;
  var oneLessAmp = ampSelection - 1;
  objectAmpNumber = ampSelection;
  varAmpBrand = amp[oneLessAmp].brand;
  varAmpModel = amp[oneLessAmp].model;
  varAmpType = amp[oneLessAmp].type;
  varAmpWatts8 = amp[oneLessAmp].ohm8;
  varAmpWatts6 = amp[oneLessAmp].ohm6;
  varAmpWatts4 = amp[oneLessAmp].ohm4;
  varAmpOhmMin = amp[oneLessAmp].minImpedence;
  varAmpNoise = amp[oneLessAmp].signalToNoise;
  varAmpThd = amp[oneLessAmp].thdAmp;
  varAmpWeight = amp[oneLessAmp].weightAmp;
  varAmpPrice = amp[oneLessAmp].cost;
  // remove spaces for image - custom stored images will later be done this way
  ampUsed = ampImg[objectAmpNumber].replace(/\s+/g, '');
  // replace image with selected - custom images will later be done this way
  $(".defaultamp").css("background-image", "url('"+ampUsed+".jpg'");
}

// update speaker image with updated selection
function speakerImgSelect(){
  // change objectSpeakerNumber to selection
  speakerSelection = document.getElementById("speaker-select").selectedIndex;
  var oneLessSpeaker = speakerSelection - 1;
  objectSpeakerNumber = speakerSelection;
  // now that the number of the drop down is selected, the object can be applied to the variables
  varSpeakerBrand = speaker[oneLessSpeaker].brand;
  varSpeakerModel = speaker[oneLessSpeaker].model;
  varSpeakerType = speaker[oneLessSpeaker].type;
  varSpeakerFrequencyMin = speaker[oneLessSpeaker].frequencyMin;
  varSpeakerFrequencyMax = speaker[oneLessSpeaker].frequencyMax;
  varSpeakerOhm = speaker[oneLessSpeaker].ohmNominal;
  varSpeakerOhmMin = speaker[oneLessSpeaker].ohmMinimal;
  varSpeakerWattsMin = speaker[oneLessSpeaker].recommendedMinPower;
  varSpeakerWattsMax = speaker[oneLessSpeaker].recommendedMaxPower;
  varSpeakerSensitivity = speaker[oneLessSpeaker].sensitivityDb;
  varSpeakerWeight = speaker[oneLessSpeaker].weightLbs;
  varSpeakerPrice = speaker[oneLessSpeaker].costPerPair;
  // remove spaces for image
  speakerUsed = speakerImg[speakerSelection].replace(/\s+/g, '');
  // replace image with selected - custom stored images will later be done this way
  $(".defaultspeaker").css("background-image", "url('"+speakerUsed+".jpg'");
}

// prep for switching and switch to results page
function clearToResults() {
  if (objectAmpNumber != 0) {
    $("#selectionAmpSpeaker").remove();
    $("#selectionButtons").remove();
    resultsRun();
  }
}

// prep for switching and switch to results page
// still working on this functionality
function clearToSelection() {
  console.log("cleartoselection");
  $("#resultsSwitch").remove();
  // selectionRun();
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
  resultsPrice();
  resultsAmp();
  resultsSpeaker();
  resultsLoudness();
  resultsImg()
  resultsWattsToOhm();
  resultsTooltip();
  resultsParagraphProcessed();
  // tooltip has to be run here - if run earlier the tooltip will fail
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
}

// display ohm of speaker and lower ohm (if allowed), else error
function resultsWattsToOhm() {
  if (varSpeakerOhm === 8) {
    if (varAmpOhmMin === 8) {
      $("#ampWattsOhmId").append("Watts: "+varAmpWatts8+" watts at 8 Ohm");
      varAmpWatts = varAmpWatts4;
    }
    if (varAmpOhmMin === 6) {
      $("#ampWattsOhmId").append("Watts: "+varAmpWatts8+" watts at 8 Ohm and "+varAmpWatts6+" watts at 6 ohm.");
      varAmpWatts = varAmpWatts6;
    }
    if (varAmpOhmMin <= 4) {
      $("#ampWattsOhmId").append("Watts: "+varAmpWatts8+" watts at 8 Ohm and "+varAmpWatts6+" watts at 6 ohm and "+varAmpWatts4+" watts at 4 ohm.");
      varAmpWatts = varAmpWatts8;
    }
  } else if (varSpeakerOhm === 6) {
    if (varAmpOhmMin === 6) {
      $("#ampWattsOhmId").append("Watts: "+varAmpWatts6+" watts at 6 Ohm");
      varAmpWatts = varAmpWatts4;
    }
    else if (varAmpOhmMin <= 4) {
      $("#ampWattsOhmId").append("Watts: "+varAmpWatts6+" watts at 6 Ohm and "+varAmpWatts4+" watts at 4 ohm");
      varAmpWatts = varAmpWatts6;
    }
  } else if (varSpeakerOhm >= 4) {
    $("#ampWattsOhmId").append("Watts: "+varAmpWatts4+" watts at 4 Ohm");
    varAmpWatts = varAmpWatts4;
  }
}

// functions for results template loaded
function resultsHigh() {
  var selectionTemplateVar = $("#resultsTop").text();
  var $selectionTopText = $(selectionTemplateVar);
  $("#hiddenWithResults").toggleClass("muteButton");
  $(".replaceThisTop").append($selectionTopText);
}

function resultsLow() {
  var selectionTemplateVar = $("#resultsBottom").text();
  var $selectionTopText = $(selectionTemplateVar);
  $(".replaceThisTop").append($selectionTopText);
}

// function to return the results of the amplifier
function resultsAmp(){
  var ampPriceFixed = varAmpPrice.toFixed(2);
  var ampPriceFormatted = addComma(ampPriceFixed);
  $("#ampBrandModelId").append(varAmpBrand+": "+varAmpModel);
  $("#ampTypeId").append(varAmpType);
  $("#ampNoiseId").append("Signal to Noise Ratio: "+varAmpNoise);
  $("#ampThdId").append("THD: "+varAmpThd+"%");
  $("#ampWeight").append("Weight: "+varAmpWeight+" lbs.")
  $("#ampPriceId").append("Price: $"+ampPriceFormatted);
}

// function to return the results of the speaker
function resultsSpeaker(){
  var speakerWattsMaxFormatted = addComma(varSpeakerWattsMax);
  var speakerFrequencyMaxFormatted = addComma(varSpeakerFrequencyMax);
  var speakerPriceFixed = varSpeakerPrice.toFixed(2);
  var speakerPriceFormatted = addComma(speakerPriceFixed);
  $("#speakerBrandModelId").append(varSpeakerBrand+": "+varSpeakerModel);
  $("#speakerTypeId").append(varSpeakerType);
  $("#speakerFrequencyId").append("Frequency: "+varSpeakerFrequencyMin+"-"+speakerFrequencyMaxFormatted+" Hz");
  $("#speakerOhmId").append("Ohm: "+varSpeakerOhm);
  $("#speakerOhmMinId").append("Min Ohm: "+varSpeakerOhmMin+" Ohm");
  $("#speakerWattsMaxId").append("Max Watts: "+speakerWattsMaxFormatted+" watts");
  $("#speakerWattsMinId").append("Min Watts: "+varSpeakerWattsMin+" watts");
  $("#speakerSensitivityId").append("Sensitivity: "+varSpeakerSensitivity+"db");
  $("#speakerWeightId").append("Weight: "+varSpeakerWeight+" lbs. each");
  $("#speakerPriceId").append("Price: $"+speakerPriceFormatted);
}

// function to return the relative loudness of the speaker and amp combo
function resultsLoudness() {
  var isNumber = parseInt(varSpeakerSensitivity);
  decibelMathFunc(isNumber);
  $("#resultsLoudnessId").append("Relative Loudness: "+relativeLoudness+" watts");
}

// function to return the total price of the speaker and amp combo
function resultsPrice() {
    var ampPriceNum = parseInt(varAmpPrice);
    var speakerPriceNum = parseInt(varSpeakerPrice);
    var priceCombinedNormal = ampPriceNum+speakerPriceNum;
    var priceCombined = priceCombinedNormal.toFixed(2);
    var priceCombinedFormatted = addComma(priceCombined);
    $("#resultsHeaderId").append("Amplifier & Speaker Results: $"+priceCombinedFormatted);
}

// function to update images for results page
function resultsImg() {
  $(".amplifierImg").css("background-image", "url('"+ampUsed+".jpg'");
  $(".speakerImg").css("background-image", "url('"+speakerUsed+".jpg'");
}

// calculate the details for the results tooltip warnings, errors, recommendations
function resultsTooltip() {
  if (varSpeakerWattsMax > (2 * varAmpWatts)){
    // speaker watts far exceed amplifier watts
    // blue on speaker max watts
    $("#speakerWattsMaxId").toggleClass("indentResultDetails");
    $("#notificationWattsMax").toggleClass("muteTooltip");
  }
  if (varAmpWatts > (1.25 * varSpeakerWattsMax)) {
    // speaker watts far exceed amplifer watts
    // yellow on amplifier watts
    $("#ampWattsOhmId").toggleClass("indentResultDetails");
    $("#notificationWattsAmp").toggleClass("muteTooltip");
    foundWarning = 1;
  }
  if (varAmpWatts < varSpeakerWattsMin) {
    // amplifier watts do not meet the minimum watts requirement for the speaker
    // red on speaker min watts
    $("#speakerWattsMinId").toggleClass("indentResultDetails");
    $("#notificationWattsMin").toggleClass("muteTooltip");
    foundWarning = 1;
  }
  if (varSpeakerOhmMin < varAmpOhmMin) {
    // amplifier does not support minimum ohm of speaker
    // red on speaker min ohm
    $("#speakerOhmMinId").toggleClass("indentResultDetails");
    $("#notificationOhmMin").toggleClass("muteTooltip");
    foundWarning = 1;
  }
  if (varSpeakerFrequencyMin > 45) {
    // minimum frequency is too high, recommend a subwoofer
    // blue on speaker frequency
    $("#speakerFrequencyId").toggleClass("indentResultDetails");
    $("#notificationFrequency").toggleClass("muteTooltip");
  }
  if (varAmpNoise < 95) {
    // signal to noise is below the average
    // yellow on noise
    $("#ampNoiseId").toggleClass("indentResultDetails");
    $("#notificationNoise").toggleClass("muteTooltip");
    foundWarning = 1;
  }
  if (varSpeakerOhm < varAmpOhmMin) {
    // amplifier does not support ohm of speaker
    // red on speaker ohm
    $("#speakerOhmId").toggleClass("indentResultDetails");
    $("#notificationOhm").toggleClass("muteTooltip");
    foundWarning = 1;
  }
}

// calculate the details for the results paragraph and details
function resultsParagraphProcessed(){
  var matchParagraph, noiseParagraph, thdParagraph, sensitivityParagraph, subwooferParagraph;
  // run calculations for if signal to noise is ok (<95, 95-101, 102-110, >110) - noise
  if (varAmpNoise <= 94) {
    noiseParagraph = 3;
    foundWarning = 1;
  } else if (varAmpNoise <= 101) {
    noiseParagraph = 2;
  } else if (varAmpNoise <= 109) {
    noiseParagraph = 1;
  } else if (varAmpNoise >= 110) {
    noiseParagraph = 0;
  }
  // run calculations for thd (>0.035, 0.021-0.035, 0.011-0.020, <0.011) - SpeakerThd
  if (varAmpThd <= 0.010) {
    thdParagraph = 3;
  } else if (varAmpThd <= 0.020) {
    thdParagraph = 2;
  } else if (varAmpThd <= 0.035) {
    thdParagraph = 1;
  } else if (varAmpThd >= 0.036) {
    thdParagraph = 0;
    foundWarning = 1;
  }
  // run calculations for Sensitivity (<89, =89, >89) - Sensitivity
  if (varSpeakerSensitivity <= 88) {
    sensitivityParagraph = 2;
  } else if (varSpeakerSensitivity === 89) {
    sensitivityParagraph = 1;
  } else if (varSpeakerSensitivity >= 90) {
    sensitivityParagraph = 0;
  }
  // run calculations for Subwoofer (>=45hz, <45hz) - Subwoofer
  if (varSpeakerWattsMin >=45) {
    subwooferParagraph = 1;
  } else if (varSpeakerWattsMin <= 44) {
    subwooferParagraph = 0;
  }
  // run calculations for match and other details (good, ok, bad) - match
  matchParagraph = 0;
  if (foundError === 1) {
    matchParagraph = 2;
  } else if (foundWarning === 1) {
    matchParagraph = 1;
  }

  // run function for results paragraph
  resultsParagraph(matchParagraph,noiseParagraph,thdParagraph,sensitivityParagraph,subwooferParagraph);
}

// function to return the results paragraph with variables of results
function resultsParagraph(match,noise,ampThd,sensitivity,subwoofer) {
  $("#resultsReplaceParagraph").append("The amplifier and speaker picked "+resultsMatch[match]+
    " Your amplifier's signal to noise ratio is "+resultsNoise[noise]+
    " Additionally, your amplifier's THD (the internally generated noise, this is the accuracy of the left and right channels) is "+resultsThd[ampThd]+
    " For your speakers, relative loudness refers to how loud a speaker sounds at 100 watts on a speaker rated at 89db sensativity. Every 3db greater, it takes half the amount of power for the same volume. Every 3db less it takes twice the power for the same volume. Your setup sounds "+resultsSensitivity[sensitivity]+
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
  if (validateNum < 89) {
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
  else if (validateNum > 89) {
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
  else if (validateNum === 89) {
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
  if($('#lookingDownOnYou').data('size') == 'big') {
    $('#lookingDownOnYou').data('size','small');
    $('#lookingDownOnYou').stop().animate({
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
      $('#lookingDownOnYou').stop().animate({
        'padding-top': '25px',
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
var resultsThd = ["above average. You will incur noise.","average. You will incur acceptable noise.","above average. You will incur less than average noise.","well below the average. You will incur minimal noise."];

// array of strings for results. Fourth sentence.
var resultsSensitivity = ["louder than","exactly as loud as","quieter than"];

// array of strings for results. Fifth sentence.
var resultsSubwoofer = ["higher than 45hz. And is expected to be quieter on low bass frequencies. For full frequencies, try adding a subwoofer to your stereo setup. This will help round out the lowest frequencies.","low enough that you may not need additional bass by adding a subwoofer."];

// array of objects for amp
var amp = [
  {
    brand: "Emotiva",
    model: "A-300",
    type: "Amplifier",
    cost: 399,
    ohm8: 150,
    ohm6: 225,
    ohm4: 300,
    signalToNoise: 120,
    minImpedence: 2,
    thdAmp: 0.020,
    weightAmp: 25.2
  },
  {
    brand: "Emotiva",
    model: "XPA Gen3",
    type: "Amplifier",
    cost: 999,
    ohm8: 300,
    ohm6: 395,
    ohm4: 490,
    signalToNoise: 115,
    minImpedence: 2,
    thdAmp: 0.005,
    weightAmp: 35.5
  },
  {
    brand: "McIntosh",
    model: "MA5200",
    type: "Integrated Amplifier",
    cost: 4500,
    ohm8: 100,
    ohm6: false,
    ohm4: false,
    signalToNoise: 110,
    minImpedence: 6.1,
    thdAmp: 0.005,
    weightAmp: 38
  },
  {
    brand: "McIntosh",
    model: "MC152",
    type: "Amplifier",
    cost: 4500,
    ohm8: 150,
    ohm6: 150,
    ohm4: 150,
    signalToNoise: 110,
    minImpedence: 2,
    thdAmp: 0.005,
    weightAmp: 75
  },
  {
    brand: "McIntosh",
    model: "MC301",
    type: "Amplifier",
    cost: 5000,
    ohm8: 300,
    ohm6: 300,
    ohm4: 300,
    signalToNoise: 110,
    minImpedence: 1,
    thdAmp: 0.005,
    weightAmp: 67
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
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 10.7
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
    minImpedence: 2,
    thdAmp: 0.009,
    weightAmp: 24.7
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
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 21.6
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
    minImpedence: 2,
    thdAmp: 0.004,
    weightAmp: 44.5
  },
  {
    brand: "NAD",
    model: "M22",
    type: "Amplifier",
    cost: 2999.99,
    ohm8: 250,
    ohm6: 250,
    ohm4: 250,
    signalToNoise: 100,
    minImpedence: 2,
    thdAmp: 0.003,
    weightAmp: 19.6
  },
  {
    brand: "Outlaw",
    model: "Model 2200",
    type: "Amplifier",
    cost: 759.98,
    ohm8: 200,
    ohm6: 250,
    ohm4: 300,
    signalToNoise: 100,
    minImpedence: 2,
    thdAmp: 0.050,
    weightAmp: 36
  },
  {
    brand: "Outlaw",
    model: "Model 5000",
    type: "Amplifier",
    cost: 599.99,
    ohm8: 120,
    ohm6: 150,
    ohm4: 180,
    signalToNoise: 100,
    minImpedence: 2,
    thdAmp: 0.050,
    weightAmp: 50
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
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 28.66
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
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 37.04
  },
  {
    brand: "Rotel",
    model: "RB-1572",
    type: "Amplifier",
    cost: 1295,
    ohm8: 250,
    ohm6: 375,
    ohm4: 500,
    signalToNoise: 109,
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 17.2
  },
  {
    brand: "Rotel",
    model: "RB-1582 MKII",
    type: "Amplifier",
    cost: 1595,
    ohm8: 200,
    ohm6: 200,
    ohm4: 200,
    signalToNoise: 116,
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 38.8
  },
  {
    brand: "Rotel",
    model: "RB-1590",
    type: "Amplifier",
    cost: 3000,
    ohm8: 350,
    ohm6: 350,
    ohm4: 350,
    signalToNoise: 120,
    minImpedence: 2,
    thdAmp: 0.030,
    weightAmp: 84
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
    minImpedence: 1,
    thdAmp: 0.019,
    weightAmp: 19.8
  },
  {
    brand: "Yamaha",
    model: "A-S501",
    type: "Integrated Amplifier",
    cost: 549.99,
    ohm8: 85,
    ohm6: 100,
    ohm4: 120,
    signalToNoise: 99,
    minImpedence: 1,
    thdAmp: 0.019,
    weightAmp: 22.7
  },
  {
    brand: "Yamaha",
    model: "A-S701",
    type: "Integrated Amplifier",
    cost: 799.99,
    ohm8: 100,
    ohm6: 120,
    ohm4: 160,
    signalToNoise: 99,
    minImpedence: 1,
    thdAmp: 0.019,
    weightAmp: 22.7
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
    minImpedence: 1,
    thdAmp: 0.020,
    weightAmp: 50
  },
  {
    brand: "Yamaha",
    model: "A-S2100",
    type: "Integrated Amplifier",
    cost: 3999.99,
    ohm8: 105,
    ohm6: 135,
    ohm4: 190,
    signalToNoise: 103,
    minImpedence: 1,
    thdAmp: 0.025,
    weightAmp: 51.6
  },
  {
    brand: "Yamaha",
    model: "A-S3000",
    type: "Integrated Amplifier",
    cost: 6999.99,
    ohm8: 100,
    ohm6: 150,
    ohm4: 200,
    signalToNoise: 103,
    minImpedence: 1,
    thdAmp: 0.007,
    weightAmp: 54.2
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
    frequencyMin: 48,
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
    ohmMinimal: 4.6,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
    recommendedMinPower: false,
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
    ohmMinimal: false,
    recommendedMinPower: false,
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
    ohmMinimal: false,
    recommendedMinPower: false,
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
    ohmMinimal: false,
    recommendedMinPower: false,
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
    ohmMinimal: false,
    recommendedMinPower: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
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
    ohmMinimal: false,
    recommendedMinPower: 30,
    recommendedMaxPower: 150,
    frequencyMin: 50,
    frequencyMax: 25000,
    sensitivityDb: 87,
    weightLbs: 14.77
  }
];
