// handles are just functions we export into our routes
const db = require('../models'); // assumes index.js instead of /models/index.js
const jwt = require('jsonwebtoken');

exports.signin = function () {}

exports.signup = async function (req, res, next) {
    try {
        // create a user
        // create a token (signing a token)
    } catch(err) {
        // see what kind of error
        // if it is a certain error
        // respond with username/email already tken
        // otherwise just send back a generic 400
    }
};