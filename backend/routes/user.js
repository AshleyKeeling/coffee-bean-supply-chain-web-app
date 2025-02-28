const express = require('express');

// controller
const { signupUser, signinUser } = require('../controllers/userController');

const router = express.Router();

// sign up route
router.post('/signup', signupUser);

// sign in route
router.post('/signin', signinUser);

// validate JWT token


module.exports = router;