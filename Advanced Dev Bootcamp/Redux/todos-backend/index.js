const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(morgan('tiny')); // give a little bit of logging
app.use(bodyParser.json()); // not URL encoded, since this is the type of requests that are coming in
app.use(cors());
app.use('/api/todos', todoRoutes); // for any routes that come in, prefix with this

app.use(function(req, res, next) {
    // Error Handling: any kind of request we don't know about, throw and error
    let err = new Error('Not Found');
    err.status = 404;
    next(err)
});

app.use(function(err, req, res, next) {
    // Catch the error, whatever status is or 500
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    })
});

app.listen(3001, function() {
    console.log("server starting on port 3001");
});