const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { newSupplyChain, getSupplyChainID } = require('../controllers/supplyChainController');

const router = express.Router();

// new supply chain (requires auth)
router.post('/new', requireAuth, newSupplyChain);

// get supply chain ID from batch using smart contract address (no auth required)
router.get('/:smart_contract_address', getSupplyChainID);

module.exports = router;