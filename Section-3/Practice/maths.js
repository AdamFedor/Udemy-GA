const fs = require('fs');

// calculate the data
var math_types = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
}
// var mathOutput = math_types['/'](3, 7); // want to understand [] better here
var mathOutput = (a, b, c) => math_types[b](a, c);
// var xyz = mathOutput(3, '-', 7); // using mathOutput

var pullFromFile = () => {
  try {
    var fileString = fs.readFileSync('maths-data.json');
    return JSON.parse(fileString);
  } catch (e) {
    return [];
  }
};

// write
var writeToFile = (outputData) => {
  fs. writeFileSync('maths-data.json', JSON.stringify(outputData));
};

// compute
var computeMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var formulaGiven = theValue.split('').filter((item) => item != ' '); // /|S/ // this is a universal whitespace regex
  var formulaJoined = formulaGiven.join('');
  var returnFile = {
    formulaJoined,
    toRound
  };
  var joinedValue = sourceFile.filter((returnFile) => returnFile.formulaJoined === formulaJoined);
  var theRound = sourceFile.filter((returnFile) => returnFile.toRound === toRound);
  var duplicateValue = Math.min(joinedValue.length, theRound.length);
  if (duplicateValue === 0) {
    sourceFile.push(returnFile);
    writeToFile(sourceFile);
    return returnFile;
  }
};

// get all
var getMaths

// single read
var getOneMaths = (theValue, toRound) => {
  console.log("get one maths");
};

// delete
var removeMaths


// export
module.exports = {
  computeMaths,
  getMaths,
  getOneMaths,
  removeMaths
}
