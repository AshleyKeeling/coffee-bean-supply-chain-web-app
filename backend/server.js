require('dotenv').config();

const express = require('express');
const userRoutes = require('./routes/user');

// const mongoose = require('mongoose');

// express app
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/user', userRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Connected to db, listening on port ${process.env.PORT}`);
})

