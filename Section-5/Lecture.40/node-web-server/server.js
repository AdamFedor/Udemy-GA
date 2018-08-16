const express = require('express');

var app = express(); // to create an app call the method

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) => {
  // res.send('<h1>Hello Express</h1>');// response to the http request.
  res.send({
    name: 'Adam',
    likes: ['Coding', 'Gaming']
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'
  });
});

app.listen(3000); //listening port
