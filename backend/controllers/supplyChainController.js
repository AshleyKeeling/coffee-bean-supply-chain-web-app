const SupplyChain = require('../models/supplyChainModel');


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

const doesSupplyChainExist = async (supply_chain_id) => {
    try {
        const exists = await SupplyChain.exists({ supply_chain_id });
        return !!exists; // Converts to true/false
    } catch (error) {
        console.error("Error checking supply chain:", error.message);
        return false; // Returns false if an error occurs
    }
};



module.exports = { newSupplyChain, doesSupplyChainExist };
