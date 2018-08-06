const fs = require('fs');

const joinedValue = require('./maths-data.json');

var math_types = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
};

var mathOutput = (a, b, c) => math_types[b](a, c);

var checkArray = (mathValue) => {
  var examp = mathValue.split('*' || '/' || '-' || '+').length;
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

var writeToFile = (outputData) => {
  fs. writeFileSync('maths-data.json', JSON.stringify(outputData));
};

// compute
var computeMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var formulaGiven = theValue.split('').filter((item) => item != ' '); // /|S/ // this is a universal whitespace regex
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
    // identify duplicates
    var myFilter = {
      formulaJoined: formulaJoined,
      toRound: toRound
    };
    var aMatch = joinedValue.filter(function(item) {
      for (var key in myFilter) {
        if (item[key] === undefined || item[key] != myFilter[key])
          return false;
        };
      return true;
    });
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
  var myFilter = {
    formulaJoined: theValue,
    toRound: toRound
  };
  var aMatch = joinedValue.filter(function(item) {
    for (var key in myFilter) {
      if (item[key] === undefined || item[key] != myFilter[key])
        return false;
      };
    return true;
  }); // object in the array
  var breakOut = aMatch[0];
  return breakOut;
};

// delete
var removeMaths = () => {
  // var sourceFile = pullFromFile();
  // var
};

// display
var logIt = (returnFile) => {
  console.log(`Argument: ${returnFile.formulaJoined}`);
  console.log(`Round It: ${returnFile.toRound}`);
  var theFormula = returnFile.formulaJoined.split('');
  var calculatedOutput = mathOutput (theFormula[0], theFormula[1], theFormula[2]);
  console.log('Output: ' + calculatedOutput);
  console.log(`Timestamp: ${returnFile.theDate}`);
  console.log('-----');
  // console.log(theFormula);
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
