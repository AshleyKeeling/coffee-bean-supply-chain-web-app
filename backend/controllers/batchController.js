const Batch = require('../models/batchModel');
const Product = require('../models/productModel');
const { newProduct } = require('./productController');
const { doesSupplyChainExist } = require('./supplyChainController');
const validator = require('validator');


const newBatch = async (req, res) => {
    const { origin, batch_quantity, processing_type, roasting_type, bean_type, smart_contract_address, supply_chain_id, participant_addresses } = req.body;
    console.log(origin, batch_quantity, processing_type, roasting_type, bean_type, smart_contract_address, supply_chain_id, participant_addresses)
    try {
        // validation checks
        // check particiapnt addresses contains 9 roles
        if (Object.values({ origin, batch_quantity, processing_type, roasting_type, bean_type, smart_contract_address, supply_chain_id, participant_addresses }).some(val => !val)) {
            return res.status(400).json({ error: "All fields must be filled" });
        }
        // check each address is valid
        const invalidAddresses = participant_addresses.filter(participant =>
            !validator.isEthereumAddress(participant.ethereum_address)
        );

        if (invalidAddresses.length > 0) {
            return res.status(400).json({ error: "One or more Ethereum addresses are invalid" });
        }
        // check supply chain ID exists
        if (!(await doesSupplyChainExist(supply_chain_id))) {
            return res.status(400).json({ error: "Supply Chain ID does not exist, please create one" });
        }

        const exists = await Batch.findOne({ smart_contract_address });

        if (exists) {
            return res.status(400).json({ error: "Batch with that smart contract address already exsists" });
        }

        // extra check -- query the blockchain to verify the smart contract was created



        // Create new batch
        const newBatch = await Batch.create({ smart_contract_address, supply_chain_id, participant_addresses });

        // Create multiple products and store them in an array
        const products = [];
        for (let i = 0; i < batch_quantity; i++) {
            const productData = {
                product_id: `PROD-${Date.now()}-${i}`,
                smart_contract_address,
                supply_chain_id,
                status: "In-Progress"
            };


            // Call`newProduct`, but don't send `res`
            const product = await newProduct(productData);
            products.push(product);
        }
        res.status(200).json({ newBatch, products });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getAllBatches = async (req, res) => {
    console.log(req.user);

    // finds all batches that the user is associated with
    try {
        const userEthereumAddress = req.user.ethereum_address

        const batches = await Batch.find({ "participant_addresses.ethereum_address": userEthereumAddress });
        for (let i = 0; i < batches.length; i++) {
            const batch_smart_contract_address = batches[i].smart_contract_address;
            const products = await Product.find({ smart_contract_address: batch_smart_contract_address })

            // Convert Mongoose document to plain object to allow modification
            batches[i] = batches[i].toObject();
            batches[i].products = products;
        }

        // sends batches as json
        res.status(200).json(batches);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getBatch = async (req, res) => {
    const { smart_contract_address } = req.params;

    try {
        const batch = await Batch.find({ smart_contract_address });
        const products = await Product.find({ smart_contract_address })


        console.log(batch, products)
        res.status(200).json(batch, products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { newBatch, getAllBatches, getBatch };
