console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString); // instead of adding to a var, return it as a function return. Parse loops through.
  } catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}; // function just writes to the file

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) =>  note.title === title);
  if (duplicateNotes.length ===0){
    notes.push(note);
    saveNotes(notes);
    return note; // returned to app.js
  };
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title); // returns the right of the =>
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  // notes is our array of notes in the line above
  // filter is an array method that takes a callback, the callback is going to take an argument. So if I have an array of notes, it will take a single note.
  // this function returns true or false.
  // this filter knows note is a singular of notes, replace note and notes with anything that making the ones plural as plural and it works the same.
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length; // returns a boolean
};

// This allows this not to be repeated each time something is displayed.
var logNote = (note) => {
  // Debug challenge: Break on this line and use repl to output note
  debugger; // then type repl and type 'note'

  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}; // have to export it by adding it below to module.exports

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
