const Product = require('../models/productModel');
const newProduct = async (data) => {
    const { product_id, smart_contract_address, supply_chain_id, status } = data;

    try {
        // Validation check
        const exists = await Product.findOne({ product_id });

        if (exists) {
            throw new Error("Product already exists");
        }

        // Create new product
        return await Product.create({ product_id, smart_contract_address, supply_chain_id, status });

    } catch (error) {
        console.error("Product creation error:", error.message);
        throw error;
    }
};
module.exports = { newProduct };
