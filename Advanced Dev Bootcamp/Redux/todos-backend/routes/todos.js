const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', function (req, res, next) {
    Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
}); // route to get all of our todos

router.post('/', function (req, res, next) {
    Todo.create(req.body) // not the most secure
        .then(todo => res.status(201).send(todo)) // set 201 status and send todos
        .catch(err => next(err));
}); // creating our todo

router.delete('/:id', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id) // find the id in req.params.id and remove it
        .then(todo => res.send(todo)) // send todo that was deleted
        .catch(err => next(err));
}); // delete a todo

module.exports = router;