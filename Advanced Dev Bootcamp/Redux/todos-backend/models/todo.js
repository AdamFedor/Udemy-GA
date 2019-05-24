const mongoose = require('mongoose'); // bring in Mongoose
mongoose.connect('monogodb://localhost/todos-backend'); // connect to Mongoose
mongoose.set('debug', true); // log any Mongo queries
mongoose.Promise = Promise; // use ES2015 promises

// create a quick schema
const todoSchema = new mongoose.Schema({
    task: String // all todos will have a task
})

const Todo = mongoose.model('Todo', todoSchema); // make a model

module.exports = Todo;