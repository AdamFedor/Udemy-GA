const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const maths = require('./maths.js')
const argumentz = {
  describe: 'Compute argument: value operator value',
  demand: true,
  alias: 'c'
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

// take arguments
if (command === 'compute'){
  var returnFile = maths.computeMaths(argv.theValue, argv.toRound);
  if (returnFile) {
    console.log('Computed and Logged');
    console.log('-----');
    maths.logIt(returnFile);
  };
} else if (command === 'list'){
  console.log('-----');
  maths.getMaths();
} else if (command === 'read'){
  var returnFile = maths.getOneMaths(argv.theValue, argv.toRound);
  if (returnFile) {
    console.log('Currently Logged Computation');
    console.log('-----');
    maths.logIt(returnFile);
  } else {
    console.log('No valid entries. Nothing to read.');
  };
} else if (command === 'delete'){
  // delete a stored value
  var returnFile = maths.removeMaths(argv.theValue, argv.toRound);
} else {
  console.log('Not a valid input command');
};
