// var obj = {
//   name: 'Adam'
// }
// // the stored in object is turned into a string instead of an object
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// what it would be when receiving a JSON file data
// var personString = '{"name": "Adam","age": "34"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// storing to a file and pulling from a file
const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

// takes the file name then the object
fs.writeFileSync('notes.json',originalNoteString);

// reading from a particular file
var noteString = fs.readFileSync('notes.json')

// parsing what that file reads
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title, "and", note.body);
