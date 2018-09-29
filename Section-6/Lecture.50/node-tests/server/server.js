// code for starting up the server - for testing an express application
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.status(404).send('Hello world!'); //.status() gives a custom status response sending not a 200 server code but 404
  // res.send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

// nwe route: get /users that passes in an array via .send
// give users a name property and an age property

app.get('/users', (req, res) => {
  res.send(
    [
      {
        fullName: 'A Person',
        age: 93
      },
      {
        fullName: 'Adam Fedor',
        age: 34
      },
      {
        fullName: 'Bob Bobbert',
        age: 208
      }
    ]
  );
});

app.listen(3000);

// exports the app required for server.test.js
module.exports.app = app; // app is now available to other files
