const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test route');
});

router.get('/:id', (req, res) => {
  res.send(`Test route with id ${req.params.id}`);
});


module.exports = router;
