const express = require('express');
const testRouter = require('./routes/test');

const app = express();

app.use(express.json());
app.use('/test', testRouter);

module.exports = app; // for testing
