const express = require('express');
const requireAuth = require('../middleware/requireAuth');

// controller
const { verifyBatchDetails, newBatch, getAllBatches, getBatch, updateBatch } = require('../controllers/batchController');

const router = express.Router();

// verifiy details
router.post('/verify', requireAuth, verifyBatchDetails);

// new batch
router.post('/new', requireAuth, newBatch);

// get all batches
router.get('/all', requireAuth, getAllBatches);

// gets batch
router.get('/:smart_contract_address', requireAuth, getBatch);

// update batch
router.patch('/update', requireAuth, updateBatch)

module.exports = router;