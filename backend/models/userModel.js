const mongoose = require('mongoose');
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

module.exports = mongoose.model('User', userSchema);