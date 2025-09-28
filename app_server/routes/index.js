const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlAuth      = require('../controllers/auth');

// Home (uses locations.homelist)
router.get('/', ctrlLocations.homelist);

// Auth
router.get('/login',    ctrlAuth.login);
router.post('/login',   ctrlAuth.doLogin);
router.get('/register', ctrlAuth.register);
router.post('/register',ctrlAuth.doRegister);

module.exports = router;
