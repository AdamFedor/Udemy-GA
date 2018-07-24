// only doing this the first time to prove how things move around
console.log('Starting app.js:');

// you want to load all the contents of the fs or os modules and store it in fs or os
const fs = require('fs');
const os = require('os');
// this isn't a module like above, so the string in require() is different - so it's going to notes.js
const notes = require('./notes.js')

var user = os.userInfo();

// user returns the user name, homedir, shell, and myabe more.
// console.log(user);

// appends the file to 'Hello world!' - then replacing world with the user variable above
// this is printed to the .txt file - not a console log.
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

// This is using notes.age and user.username
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}...`,function (err){
//   if (err){
//     console.log('Unable to write to file');
//   }
// });

// this looks to notes for the addNote that was created and returns a string.
var res = notes.addNote();
console.log(res);

var mathman = notes.add(2, 3);
console.log('results: ',mathman);
