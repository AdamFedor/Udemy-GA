const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs.argv;

var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){ // same as note === undefined
    console.log('Note Created')
    notes.logNote(note);
  } else {
    console.log('Duplicate note, not added')
  };
  // list out note
} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {notes.logNote(note)});// it logs note each time
  // class action
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  console.log(note);
  if (note) {
    console.log('Note Found');
    // variable names line up already so no reason to change anything on "note"
    notes.logNote(note);
  } else {
    console.log('Cannot Read: No note found');
  };
  // remove note
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  // using the var, it lets an if statement (turinary operator in this example)
  // which is ... condition ? 'truth string' : 'false string';
  var message = noteRemoved ? 'Note was removed' : 'Note not removed: Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
};
