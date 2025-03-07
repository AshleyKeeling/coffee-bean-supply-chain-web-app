const express = require('express');

// controller
const { newBatch } = require('../controllers/batchController');

const router = express.Router();

// new supply chain
router.post('/new', newBatch);

module.exports = router;