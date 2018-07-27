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
  var duplicateNotes = notes.filter((note) => { //filter is why it looks through the multiple possible notes.
    return note.title === title;
  });

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
  console.log('Reading Note', title);
};
var removeNote = (title) => {
  console.log('Removing Note', title);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
