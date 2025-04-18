require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const supplyChainRoutes = require('./routes/supplyChain');
const batchRoutes = require('./routes/batch');

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/user', userRoutes);
app.use('/api/supplyChain', supplyChainRoutes);
app.use('/api/batch', batchRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db, listening on port 4000');
        })
    })
    .catch((error) => {
        console.log(error);
    })