const SupplyChain = require('../models/supplyChainModel');
const Batch = require('../models/batchModel');

// creates new supply chain
const newSupplyChain = async (req, res) => {
    const { supply_chain_id } = req.body;

    try {
        // validation checks
        const exists = await SupplyChain.findOne({ supply_chain_id });
        if (exists) {
            return res.status(400).json({ error: "Supply Chain ID already in use" });
        }

        // Create new supply chain
        const newSupplyChain = await SupplyChain.create({ supply_chain_id });

        res.status(200).json({ supply_chain_id });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// checks if supply chain exsists
const doesSupplyChainExist = async (supply_chain_id) => {
    try {
        const exists = await SupplyChain.exists({ supply_chain_id });
        return !!exists; // Converts to true/false
    } catch (error) {
        console.error("Error checking supply chain:", error.message);
        return false; // Returns false if an error occurs
    }
};

const getSupplyChainID = async (req, res) => {
    const { smart_contract_address } = req.params; // Retrieve from route params
    try {
        // Find the batch based on the smart_contract_address
        const batch = await Batch.findOne({ smart_contract_address });
        if (batch) {
            const supply_chain_id = batch.supply_chain_id;
            res.status(200).json({ supply_chain_id });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = { newSupplyChain, doesSupplyChainExist, getSupplyChainID };
