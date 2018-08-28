var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // check if email exists
  // save the user to the database
  db.saveUser({email, password}); // but we need to replace the function with a spy
  // send that welcome email
};
