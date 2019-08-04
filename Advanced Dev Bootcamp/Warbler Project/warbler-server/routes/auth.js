const express = require('express');
const router = express.Router();
const { signup, signin } = require('../handlers/auth'); // brings in that one function

//When a post request occurs
router.post('/signup', signup); // routes places in signup
router.post('/signin', signin);

module.exports = router;