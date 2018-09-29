console.log('Starting app.js:');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// good to leave a space for 3rd party from 1st party (where this comment is)
const notes = require('./notes.js')

// yargs version of the argv the app ran - but it does it better
const argv = yargs.argv;

// this makes command stand for the list from the argument vector (argv), 3rd item being list so [2]
// var command = process.argv[2];
var command = argv._[0]; // pulls instead of process.argv it pulls from yargs
// console.log('command: ',command);
// console.log('process: ',process.argv);
console.log('yargs', argv);

if (command === 'add'){
  // console.log('Adding new note');
  // using yarg, passing in an title and body
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  // console.log('Listing all notes');
  notes.getAll();
} else if (command === 'read'){ // requires title
  // console.log('Read note');
  notes.getNote(argv.title);
} else if (command === 'remove'){ // requires title
  // console.log('Removing note');
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
};
// this passes in strings, but only works on simple arguments writen specific ways.
