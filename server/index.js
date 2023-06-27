const express = require('express');
const cors = require('cors');
const testRouter = require('./routes/test');
const sportRouter = require('./routes/sport');

const app = express();

const corsOptions = {
  origin: 'http://10.0.0.143:5173',  // specify the origin(s) that are allowed to access the server
  methods: ['GET', 'POST'],  // specify the HTTP methods that are allowed
  allowedHeaders: ['Content-Type', 'Authorization'],  // specify which HTTP headers are allowed
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/test', testRouter);
app.use('/sports', sportRouter);

module.exports = app; // for testing
