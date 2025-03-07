const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// supply chain Schema
const supplyChainSchema = new Schema({
    supply_chain_id: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('SupplyChain', supplyChainSchema);