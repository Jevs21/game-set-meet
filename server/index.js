const express = require('express');
const testRouter = require('./routes/test');

const app = express();

app.use(express.json());
app.use('/test', testRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = app; // for testing
