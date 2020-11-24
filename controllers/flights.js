const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

// function show(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         res.render('flights/show', { title: 'Flight Detail', flight });
//     });
// }

function show(req, res) {
    Flight.findById(req.params.id).populate('ticket').exec(function(err, flight) {
        Ticket.find({
          // Mongoose Query API
          // .where('_id').nin(flight.ticket)
          // Native MongoDB syntax
          flight: flight._id 
        }, function(err, tickets) {
          res.render('flights/show', { title: 'Flight Detail', flight, tickets });
        });
      });
  }

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
}