const express = require('express');
const logger = require('../utils/logger');
const Database = require('../database/db');
const db = new Database();
const router = express.Router();

router.get('/', async (req, res) => {
  logger.info('Test route');
  await db.run("CREATE TABLE IF NOT EXISTS testtable (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
  await db.run("INSERT INTO testtable (name) VALUES (?)", ['testinngggg']);
  db.all("SELECT * FROM testtable").then((result) => {
    logger.info(result);
  });
  res.send('Test route');
});

module.exports = router;
