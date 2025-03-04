const express = require('express');
const requireAuth = require('../middleware/requireAuth');


// controller
const { signupUser, signinUser } = require('../controllers/userController');

const router = express.Router();

// sign up route
router.post('/signup', signupUser);

// sign in route
router.post('/signin', signinUser);

// validate JWT token
router.post('/validate-token', requireAuth, (req, res) => {
    res.status(200).json({ isValid: true });
});

module.exports = router;