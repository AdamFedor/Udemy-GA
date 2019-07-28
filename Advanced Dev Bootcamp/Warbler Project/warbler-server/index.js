const express = require('express');
const app = express(); // invoking it
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// error handlesr
// all routes here
app.use(function(req, res, next){
    // next allows to the next piece of middleware
    let err = new Error("Not Found")
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is starting on port ${PORT}`);
})