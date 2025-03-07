const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { newBatch, getAllBatches } = require('../controllers/batchController');

const router = express.Router();

// this middleware is used before all below routes
router.use(requireAuth);

// new supply chain
router.post('/new', newBatch);

// get all batches
router.get('/all', getAllBatches);

module.exports = router;