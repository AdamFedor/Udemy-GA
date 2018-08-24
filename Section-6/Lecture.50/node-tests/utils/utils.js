module.exports.add = (a, b) => a + b;

// module.exports.square = (x) => x * x + 1; // intentional error
module.exports.square = (x) => x * x; // switch for no error

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' '); // names array
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
