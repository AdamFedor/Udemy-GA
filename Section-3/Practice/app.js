const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const maths = require('./maths.js')
const argumentz = {
  describe: 'Mathamatical argument of 2 values and one operator'
  demand: true,
  alias: 'arg'
}
const roundingz = {
  describe: 'Should the result round?'
  demand: true,
  alias: 'rnd'
}

// output logs
const argv = yars
  .command('compute', 'Add a mathematical argument',{
    argument1: argumentz,
    round: roundingz
  })
  .command('update', 'Update a stored mathematical argument',{
    argument1: argumentz
  })
  .command('list', 'List all stored mathematical arguments')
  .command('read', 'Read a stored mathematical argument',{
    argument1: argumentz
  })
  .command('delete', 'Delete a stored mathematical value',{
    argument1: argumentz
  })
  .help()
  .argv;
var command = argv._[0];

// For argument1: value1 operator1 value2 is the format
if (command = 'compute'){
  var returnFile = maths.computeMaths(argv.theValue, argv.toRound);
  if (returnFile) {
    console.log(returnFile);
  } else {
    console.log('Math value and rounding already added. Duplicate and not added.')
  };
} else if (command = 'update'){
// update a stored value (include update timestamp with and history)
} else if (command = 'list'){
// show all values
} else if (command = 'read'){
// pull a log of the one value and the details (timestamp and edits)
} else if (command = 'delete'){
  // delete a stored value
} else {
  console.log('Not a valid input command');
}
