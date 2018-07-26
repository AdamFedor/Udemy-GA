console.log('Starting notes.js');

// Module is a pretty big object - this course we'll really use exports of module
module.exports.age = 34;

// the arrow function is the same as function(){} is now () => {}
module.exports.addNote = () => {
  console.log('addNote');
  return 'newNote';
};

module.exports.add = (a, b) => {
  console.log('add');
  return a + b;
};
