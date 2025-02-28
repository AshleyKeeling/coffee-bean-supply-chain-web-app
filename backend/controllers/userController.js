const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

// sign up
const signupUser = async (req, res) => {
    const { email, password, role, ethereum_address } = req.body;

    try {
        // adds user to database with validation checks
        const user = await User.signup(email, password, role, ethereum_address);

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ email, token })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// sign in
const signinUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // log user in
        const user = await User.signin(email, password);

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, signinUser };