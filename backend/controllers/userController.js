

// sign up
const signupUser = async (req, res) => {
    res.status(200).json({ message: "user sign up" })
}

// sign in
const signinUser = async (req, res) => {
    res.status(200).json({ message: "user sign in" })
}

module.exports = { signupUser, signinUser };