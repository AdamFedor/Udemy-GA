const fs = require('fs');

// calculate the data
var math_types = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
}

// calculate
// var mathOutput = math_types['/'](3, 7); // want to understand [] better here
var mathOutput = (a, b, c) => math_types[b](a, c);
// using mathOutput
var xyz = mathOutput(3, '-', 7);
console.log(xyz);

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
  var returnFile = {
    theValue,
    toRound
  };
  var duplicateMaths = maths.filter((returnFile) => returnFile.theValue === theValue);
  if (duplicateMaths.length === 0) {
    maths.push(returnFile);
    writeToFile(maths);
    return returnFile;
  }
};

// change
var changeMaths

// get all
var getMaths

// single read
var getOneMaths

// delete
var removeMaths


// export
module.exports = {
  computeMaths,
  changeMaths,
  getMaths,
  getOneMaths,
  removeMaths
}
