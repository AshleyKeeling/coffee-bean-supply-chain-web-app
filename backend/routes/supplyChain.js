const express = require('express');

// controller
const { newSupplyChain } = require('../controllers/supplyChainController');

const router = express.Router();

// new supply chain
router.post('/new', newSupplyChain);

module.exports = router;