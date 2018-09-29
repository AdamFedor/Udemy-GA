module.exports.add = (a, b) => a + b;

// for async tests
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 500);
};

// module.exports.square = (x) => x * x + 1; // intentional error
module.exports.square = (x) => x * x; // switch for no error

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback (a * a);
  }, 600);
};

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' '); // names array
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
