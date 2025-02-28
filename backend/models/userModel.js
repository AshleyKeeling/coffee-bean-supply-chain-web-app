const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Farmer', 'Harvestor', 'Processor', 'Drying Specialist', 'Exporter', 'Roaster', 'Packaging Specialist', 'Distributor'],
        required: true
    },
    ethereum_address: {
        type: String,
        minLength: 42,
        maxLength: 42,
        required: true
    }
})

// static sign up method
userSchema.statics.signup = async function (email, password, role, ethereum_address) {
    // validation
    if (!email || !password || !role || !ethereum_address) {
        throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough");
    }
    if (!validator.isEthereumAddress(ethereum_address)) {
        throw Error("Invalid Ethereum address");
    }

    // check if email already in use
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("Email already in use");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await this.create({ email, password: hashPassword, role, ethereum_address });
    return user;
}

userSchema.statics.signin = async function (email, password) {
    // validation
    if (!email || !password) {
        throw Error("All fields must be filled");
    }

    // find user, if user exists in database
    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect Email or password")
    }

    // checks password to user stored hashed password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect Password')
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);