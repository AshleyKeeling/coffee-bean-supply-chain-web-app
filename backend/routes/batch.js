const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { verifyBatchDetails, newBatch, getAllBatches, getBatch, updateBatch } = require('../controllers/batchController');

const router = express.Router();

// this middleware is used before all below routes
router.use(requireAuth);

// verifiy details
router.post('/verify', verifyBatchDetails);

// new batch
router.post('/new', newBatch);

// get all batches
router.get('/all', getAllBatches);

// gets batch
router.get('/:smart_contract_address', getBatch);

// update batch
router.patch('/update', updateBatch)

module.exports = router;