// this will be a callback
var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };
  setTimeout(() => {
    callback(user); // this is passing user as the callback. Pushing to getUser()'s callback
  }, 3000);
};

// pass in the id first, then the second is a function we want to run when the user data comes back.
getUser('i123456', (user) => {
  // the callback grabs the user. Typically from a database, but here from the object created above.
  console.log(user);
});
