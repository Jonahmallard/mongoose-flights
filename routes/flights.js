const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /movies
router.get('/', flightsCtrl.index)
// GET /movies/new
router.get('/new', flightsCtrl.new);
// POST /movies
router.post('/', flightsCtrl.create);

module.exports = router;