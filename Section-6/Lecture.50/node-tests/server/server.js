// code for starting up the server - for testing an express application
const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000);
