// app_api/routes/index.js
const express = require('express');
const router = express.Router();

const races = require('../controllers/races');
const users = require('../controllers/users');

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'OddsMatch API is running' });
});

// Races
router.get('/races', races.raceList);
router.get('/races/:raceId', races.raceDetails);

// Users
router.post('/users', users.userCreate);
router.get('/users/by-email/:email', users.getUserByEmail);
router.get('/users/by-firstname/:firstName', users.getUserByFirstName);

module.exports = router;
