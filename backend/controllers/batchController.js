const Batch = require('../models/batchModel');
const Product = require('../models/productModel');
const { newProduct } = require('./productController');
const { doesSupplyChainExist } = require('./supplyChainController');
const validator = require('validator');

// verifiy details
const verifyBatchDetails = async (req, res) => {
    const { origin, batch_quantity, processing_type, roasting_type, bean_type, supply_chain_id, participant_addresses } = req.body;
    try {
        // validation checks
        // check particiapnt addresses contains 9 roles
        if (Object.values({ origin, batch_quantity, processing_type, roasting_type, bean_type, supply_chain_id, participant_addresses }).some(val => !val)) {
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

        res.status(200).json({ message: "verify sucess" });

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// creates new batch in mongoDB
const newBatch = async (req, res) => {
    const { batch_quantity, smart_contract_address, supply_chain_id, participant_addresses } = req.body;

    try {
        const exists = await Batch.findOne({ smart_contract_address });

        if (exists) {
            return res.status(400).json({ error: "Batch with that smart contract address already exsists" });
        }

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

            const product = await newProduct(productData);
            products.push(product);
        }
        res.status(200).json({ newBatch, products });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// finds all batches that the user is associated with
const getAllBatches = async (req, res) => {
    console.log(req.user);

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

const updateBatch = async (req, res) => {
    const { selected_products } = req.body;
    try {
        // Loop through selected products and update their status
        for (let i = 0; i < selected_products.length; i++) {
            const product = await Product.findOneAndUpdate(
                { product_id: selected_products[i] },  // Filter by product_id, not by _id
                { status: "Destroyed" },
                { new: true }  // Ensure the updated product is returned
            );

            // If no product is found or updated, return an error
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${selected_products[i]} not found` });
            }
        }

        // If all updates are successful, send a success response
        res.status(200).json({ message: 'Batch updated successfully' });

    } catch (error) {
        // If an error occurs during the process, send a failure response
        res.status(400).json({ error: error.message });
    }
}

module.exports = { verifyBatchDetails, newBatch, getAllBatches, getBatch, updateBatch };
