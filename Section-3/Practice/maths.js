const fs = require('fs');

var math_types = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
};

var mathOutput = (a, b, c) => math_types[b](a, c);

var checkArray = (mathValue) => { // find more efficient way
  var plus1 = mathValue.split('+').length;
  var minus1 = mathValue.split('-').length;
  var times1 = mathValue.split('*').length;
  var divide1 = mathValue.split('/').length;
  examp = Math.max(plus1, minus1, times1, divide1);
  return examp;
};

var pullFromFile = () => {
  try {
    var fileString = fs.readFileSync('maths-data.json');
    return JSON.parse(fileString);
  } catch (e) {
    return [];
  }
};

var checkDup = (theValue, toRound, sourceData, return1, return2) => {
  var myFilter = {
    formulaJoined: theValue,
    toRound: toRound
  };
  var checkTheDup = sourceData.filter(function(item) {
    for (var key in myFilter) {
      if (item[key] === undefined || item[key] !== myFilter[key])
        return return1;
      };
    return return2;
  });
  return(checkTheDup);
};

var writeToFile = (outputData) => {
  fs.writeFileSync('maths-data.json', JSON.stringify(outputData));
};

// compute
var computeMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var formulaGiven = theValue.split('').filter((item) => item !== ' '); // /|S/ // this is a universal whitespace regex
  // replace the x with * for accidental use of x
  var checkIt = formulaGiven.indexOf('x');
  if (checkIt !== -1) {
      formulaGiven[checkIt] = '*';
  };
  var formulaJoined = formulaGiven.join('');
  var dateNow = new Date();
  var theDate = dateNow.toGMTString();
  var returnFile = {
    formulaJoined,
    toRound,
    theDate
  };
  if (checkArray(formulaJoined) === 2) {
    var aMatch = checkDup(theValue, toRound, sourceFile, false, true);
    // check for duplicates
    if (aMatch.length === 0) {
      sourceFile.push(returnFile);
      writeToFile(sourceFile);
      return returnFile;
    } else {
      console.log('Math value and rounding already added. Duplicate and not added.');
    };
  } else if (checkArray(formulaJoined) === 1) {
    console.log('Invalid input: Only use + - * /');
  };
};

// get all
var getMaths = () => {
  var sourceFile = pullFromFile();
  for (var zzz = 0; zzz < sourceFile.length; zzz++) {
    console.log('Computation Log: ' + zzz);
    logIt(sourceFile[zzz]);
  };
  return sourceFile;
};

// single read
var getOneMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var aMatch = checkDup(theValue, toRound, sourceFile, false, true);
  var breakOut = aMatch[0];
  return breakOut;
};

// delete
var removeMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var aMatch = checkDup(theValue, toRound, sourceFile, true, false);
  if (aMatch.length !== sourceFile.length) {
    writeToFile(aMatch);
    console.log('-----');
    console.log('Deleted Entry!');
    console.log('Calculation: '+ theValue);
    console.log('Rounding: ' + toRound);
    console.log('-----');
    return aMatch;
  } else {
    console.log('WARNING: No file found. File not deleted.')
  };
};

// display
var logIt = (returnFile) => {
  console.log(`Argument: ${returnFile.formulaJoined}`);
  console.log(`Round It: ${returnFile.toRound}`);
  var theFormula = returnFile.formulaJoined.split('');
  var calculatedOutput = mathOutput (Number(theFormula[0]), theFormula[1], Number(theFormula[2]));
  if (returnFile.toRound === 'yes') {
    calculatedOutput = Math.round(calculatedOutput);
  };
  console.log('Output: ' + calculatedOutput);
  console.log(`Timestamp: ${returnFile.theDate}`);
  console.log('-----');
};

// export
module.exports = {
  checkArray,
  computeMaths,
  getMaths,
  getOneMaths,
  logIt,
  pullFromFile,
  removeMaths,
  writeToFile
};
