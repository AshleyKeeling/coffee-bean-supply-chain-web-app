const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// batch Schema
const batchModel = new Schema({
    smart_contract_address: {
        type: String,
        required: true,
        minLength: 42,
        maxLength: 42,
    },
    supply_chain_id: {
        type: String,
        unique: false,
        required: true,
    },
    participant_addresses: [
        {
            role: {
                type: String,
                enum: ['Manager', 'Farmer', 'Harvestor', 'Processor', 'Drying Specialist', 'Exporter', 'Roaster', 'Packaging Specialist', 'Distributor'],
                required: true
            },
            ethereum_address: {
                type: String,
                required: true,
                minlength: 42,
                maxlength: 42
            }
        }
    ]
})

module.exports = mongoose.model('Batch', batchModel);