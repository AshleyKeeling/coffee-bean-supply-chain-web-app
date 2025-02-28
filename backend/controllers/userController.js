const User = require('../models/userModel');


// sign up
const signupUser = async (req, res) => {
    const { email, password, role, ethereum_address } = req.body;

    try {
        // adds user to database with validation checks
        const user = await User.signup(email, password, role, ethereum_address);
        // create JWT token

        res.status(200).json({ message: "user created " })

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

        res.status(200).json({ message: "user signed in" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, signinUser };