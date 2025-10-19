let express = require('express');
let router = express.Router();

let racesController = require('../controllers/races');
let usersController = require('../controllers/users');

router.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'OddsMatch API is running' });
});

// Races API routes
router.get('/races', racesController.raceList);
router.get('/races/:raceid', racesController.raceDetails);

// Users API routes
router.get('/users', usersController.userList);
router.get('/users/:userid', usersController.userDetails);
router.post('/users', usersController.userCreate);

module.exports = router;