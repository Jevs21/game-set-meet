const express = require('express');
const router = express.Router();
const sportsService = require('../services/sport');
const logger = require('../utils/logger');

// GET a list of sports
router.get('/list', async (req, res) => {
  try {
    logger.info('Getting all sports');
    const sports = await sportsService.getAllSports();
    logger.info(`Found ${sports.length} sports.`)
    res.json(sports);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ message: err.message });
  }
});

// GET a sport by id
router.get('/:id', async (req, res) => {
  try {
    const sport = await sportsService.getSportById(req.params.id);
    res.json(sport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST (add) a new sport
router.post('/', async (req, res) => {
  try {
    const newSport = await sportsService.addSport(req.body);
    res.status(201).json(newSport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a sport
router.delete('/:id', async (req, res) => {
  try {
    await sportsService.removeSport(req.params.id);
    res.json({ message: 'Sport deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT (edit) a sport
router.put('/:id', async (req, res) => {
  try {
    const updatedSport = await sportsService.updateSport(req.params.id, req.body);
    res.json(updatedSport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
