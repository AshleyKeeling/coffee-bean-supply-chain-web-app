const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

// create JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

// sign up
const signupUser = async (req, res) => {
    const { email, password, role, ethereum_address } = req.body;

    try {
        //  validation checks
        if (!email || !password || !role || !ethereum_address) {
            return res.status(400).json({ error: "All fields must be filled" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ error: "Weak password" });
        }
        if (!validator.isEthereumAddress(ethereum_address)) {
            return res.status(400).json({ error: "Invalid Ethereum address" });
        }

        // Check if user exists
        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ error: "Email already in use" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({ email, password: hashedPassword, role, ethereum_address });

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ email, token });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

// sign in
const signinUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "All fields must be filled" });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Incorrect Email or Password" });
        }

        // Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: "Incorrect Password" });
        }

        // create JWT token
        const token = createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, signinUser };