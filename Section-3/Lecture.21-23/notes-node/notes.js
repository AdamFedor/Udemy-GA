console.log('Starting notes.js');

const fs = require('fs');

// annonomous arrow function
var addNote = (title, body) => {
  // console.log('Adding Note', title, body);
  var notes = [];
  var note = {
    title,
    body
  };
  // try catch will resolve opening to read the file if the file doesn't exist on the first time through.
  try{
    // fetch the notes otherwise writeFileSync will just override the file text and will lose anything found.
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e){ // feature of 'catch' is non-standard and won't work for everyone
    // if an error trying to load the data
  } // apparently does not require a semi-colon

  var duplicateNotes = notes.filter((note) => { //filter is why it looks through the multiple possible notes.
    return note.title === title;
  }); // return true or false via the immediately invoked function
  // (note) => note.title === title // valid alternative to the above for ES6.

  if (duplicateNotes.length ===0){
    // pushes into the array (reminder)
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
// instead of adding module to Exports, we can define an object using exports
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
  // addNote: addNote //ES5 way of doing the same above
};
