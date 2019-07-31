const express = require('express');
const router = express.Router();
const { signup } = require('../handlers/auth'); // brings in that one function

//When a post request occurs
router.post('/signup', signup); // routes places in signup

module.exports = router;