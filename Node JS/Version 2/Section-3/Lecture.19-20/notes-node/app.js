console.log('Starting app.js:');

const fs = require('fs');
const _ = require('lodash');
// good to leave a space for 3rd party from 1st party (where this comment is)
const notes = require('./notes.js')

// this makes command stand for the list from the argument vector (argv), 3rd item being list so [2]
var command = process.argv[2];
console.log('command: ',command);
console.log(process.argv);

if (command === 'add'){
  console.log('Adding new note');
} else if (command === 'list'){
  console.log('Listing all notes');
} else if (command === 'read'){
  console.log('Read note');
} else if (command === 'remove'){
  console.log('Removing note');
} else {
  console.log('Command not recognized');
}
// this passes in strings, but only works on simple arguments writen specific ways.
