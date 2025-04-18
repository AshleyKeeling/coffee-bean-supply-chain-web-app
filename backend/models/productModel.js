const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// product Schema
const productSchema = new Schema({
    product_id: {
        type: String,
        required: true,
        unique: true,
        maxlength: 36
    },
    smart_contract_address: {
        type: String,
        required: true,
        minlength: 42,
        maxlength: 42
    },
    supply_chain_id: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        maxlength: 100
    }
});

module.exports = mongoose.model('Product', productSchema);