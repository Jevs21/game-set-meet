const express = require('express');
const logger = require('../utils/logger');
const db = require('../database/db');
const router = express.Router();

router.get('/', async (req, res) => {
  logger.info('Test route');
  try {
    await db.query("CREATE TABLE IF NOT EXISTS testtable (id SERIAL PRIMARY KEY, name TEXT)");
    await db.query("INSERT INTO testtable (name) VALUES ($1)", ['testinngggg']);
    const result = await db.query("SELECT * FROM testtable");
    logger.info(result.rows);
    res.send('Test route');
  } catch (err) {
    logger.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
