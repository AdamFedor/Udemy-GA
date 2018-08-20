const express = require('express');
const hbs = require('hbs');

var app = express(); // to create an app call the method

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); // name value pair that's passed into .use()
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase(); // convert to caps
});

app.get('/',(req, res) => {
  // res.send('<h1>Hello Express</h1>');// response to the http request.
  // res.send({
  //   name: 'Adam',
  //   likes: ['Coding', 'Gaming']
  // }); // this tosses in a JSON page to return
  res.render('about.hbs', {
    pageTitle: 'Home Page', // passes in title to be used in html file
    // currentYear:  new Date().getFullYear(),// passes in year to html file

    messageP: "Welcome to my app's homepage. Where you will find basic 'things.'"
  }); // for use of templates via hbs
});

app.get('/about', (req, res) => {
  // res.send('About Page');// dummy text sent back
  res.render('about.hbs', {
    pageTitle: 'About Page', // passes in title to be used in html file
    // currentYear:  new Date().getFullYear(),// passes in year to html file
    messageP: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }); // for use of templates via hbs
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'
  });
});

app.listen(3000); //listening port
