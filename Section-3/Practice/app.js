const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const maths = require('./maths.js')
const argumentz = {
  describe: 'Mathamatical argument: value operator value',
  demand: true,
  alias: 'a'
}
const roundingz = {
  describe: 'Should the result round whole number? yes/no',
  demand: true,
  alias: 'r'
}

// output logs
const argv = yargs
  .command('compute', 'Add a mathematical argument',{
    theValue: argumentz,
    toRound: roundingz
  })
  .command('list', 'List all stored mathematical arguments')
  .command('read', 'Read a stored mathematical argument',{
    theValue: argumentz,
    toRound: roundingz
  })
  .command('delete', 'Delete a stored mathematical value',{
    theValue: argumentz,
    toRound: roundingz
  })
  .help()
  .argv;
var command = argv._[0];

// For argument1: value1 operator1 value2 is the format
if (command === 'compute'){
  // if(theValue.char() === 3) {
    var returnFile = maths.computeMaths(argv.theValue, argv.toRound);
    if (returnFile) {
      console.log('done');
      // add return for note statement similar to read note
    } else {
      console.log('Math value and rounding already added. Duplicate and not added.')
    };
  // }
} else if (command === 'update'){
// update a stored value (include update timestamp with and history)
} else if (command === 'list'){
// show all values
} else if (command === 'read'){
  var returnFile = maths.getOneMaths(argv.theValue, argv.toRound);
  if (returnFile) {
    console.log('read');
  } else {
    console.log('No valid entries. Nothing to read.');
  };
// pull a log of the one value and the details (timestamp and edits)
} else if (command === 'delete'){
  // delete a stored value
} else {
  console.log('Not a valid input command');
}
