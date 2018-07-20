// only doing this the first time to prove how things move around
console.log('Starting app:');

// you want to load all the contents of the fs module and store it in fs
const fs = require('fs');

// just like the fs constant, would need one for os
const os = require('os');

var user = os.userInfo();

// user returns the user name, homedir, shell, and myabe more.
// console.log(user);

// appends the file to 'Hello world!' - then replacing world with the user variable above
// this is printed to the .txt file - not a console log.
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '!');

fs.appendFile('greetings.txt', `Hello ${user.username}!`,function (err){
  if (err){
    console.log('Unable to write to file');
  }
});
