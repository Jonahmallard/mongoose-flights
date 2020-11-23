var express = require('express');
var router = express.Router();
// require the yet to be created destinations controller
var destinationsCtrl = require('../controllers/destinations');

// define the route below
// POST /flights/:id/destinations
router.post('/flights/:flightId/destinations', destinationsCtrl.create);


module.exports = router;
