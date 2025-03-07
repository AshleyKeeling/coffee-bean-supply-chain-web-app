const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { newSupplyChain } = require('../controllers/supplyChainController');

const router = express.Router();

// this middleware is used before all below routes
router.use(requireAuth);

// new supply chain
router.post('/new', newSupplyChain);

module.exports = router;