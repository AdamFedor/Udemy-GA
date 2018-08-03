const fs = require('fs');

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
  var formulaJoined = formulaGiven.join('');
  var dateNow = new Date();
  var theDate = dateNow.toGMTString();
  var returnFile = {
    formulaJoined,
    toRound,
    theDate
  };
  if (checkArray(formulaJoined) === 2) {
    // check for duplicates
    var joinedValue = sourceFile.filter((returnFile) => returnFile.formulaJoined === formulaJoined);
    var theRound = sourceFile.filter((returnFile) => returnFile.toRound === toRound);
    var duplicateValue = Math.min(joinedValue.length, theRound.length);
    if (duplicateValue === 0) {
      sourceFile.push(returnFile);
      writeToFile(sourceFile);
      return returnFile;
    } else {
      console.log('Math value and rounding already added. Duplicate and not added.');
    };
  };
};

// get all
var getMaths

// single read
var getOneMaths = (theValue, toRound) => {
  var sourceFile = pullFromFile();
  var filter = {
    theValue,
    toRound
  };


///////////////////////////////////////////////////////////////////
// what works how I want my code to work
  var filter = {
    address: 'England',
    name: 'Mark'
  };
  var users = [{
      name: 'John',
      email: 'johnson@mail.com',
      age: 25,
      address: 'USA'
    },
    {
      name: 'Tom',
      email: 'tom@mail.com',
      age: 35,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }
  ];


  users= users.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });

  console.log(users)
///////////////////////////////////////////////////////////////////








  // Needs fixing on the aMatch variable. Should return the right result.


  console.log(filter);
  var joinedValue = sourceFile.filter((sourceFile) => sourceFile.formulaJoined === theValue);
  // var theRound = sourceFile.filter((sourceFile) => sourceFile.toRound === toRound;
  console.log(joinedValue);
  var aMatch = joinedValue.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
      }
    return true;
  })
  console.log('Match?');
  console.log(aMatch);
};

// display
var logIt = (returnFile) => {
  console.log('-----');
  console.log(`Argument: ${returnFile.formulaJoined}`);
  console.log(`Round It: ${returnFile.toRound}`);
  var theFormula = returnFile.formulaJoined.split('');
  var calculatedOutput = mathOutput (theFormula[0], theFormula[1], theFormula[2]);
  console.log('Output: ' + calculatedOutput);
  console.log(`Timestamp: ${returnFile.theDate}`);
  console.log('-----');
  // console.log(theFormula);
};

// delete
var removeMaths


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
}
