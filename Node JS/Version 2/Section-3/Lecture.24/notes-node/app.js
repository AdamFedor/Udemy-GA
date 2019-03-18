const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};
const argv = yargs // chaining method just like jQuery
  .command('add', 'Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('read', 'Read a notes',{
  title: titleOptions
  })
  .command('remove', 'Remove a note',{
    title: titleOptions
  })
  .help()
  .argv; // still including the argument but associated to yargs
var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){ // same as note !== undefined
    console.log('Note Created')
    notes.logNote(note);
  } else {
    console.log('Duplicate note, not added')
  };
  // list out note
} else if (command === 'list'){
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {notes.logNote(note)});
  // read out note
} else if (command === 'read'){
  var note = notes.getNote(argv.title);
  console.log(note);
  if (note) {
    console.log('Note Found');
    notes.logNote(note);
  } else {
    console.log('Cannot Read: No note found');
  };
  // remove note
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not removed: Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
};
