// handles are just functions we export into our routes
const db = require('../models'); // assumes index.js instead of /models/index.js
const jwt = require('jsonwebtoken');

// exports.signin = async function (req, res, next) {};
exports.signin = async function () {}

exports.signup = async function (req, res, next) {
    try {
        // waiting for a creation of the user, passing in req.body from an ajax request
        let user = await db.User.create(req.body);
        // creates the 3 from user to not pass in user.x for each to the token
        let { id, username, profileImageUrl } = user;
        // create a token (signing a token) and key from env
        let token = jwt.sign(
            {
                // what is passed in.
                id,
                username,
                profileImageUrl
            },
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        })
    } catch(err) {
        // if a validation fails
        if (err.code === 11000) {
            // so it doesn't return the mongoose error
            err.message = "Sorry, that username and/or email is taken.";
        }
        return next({
            status: 400,
            message: err.message
        });
    }
};