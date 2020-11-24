const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  req.body.flight = req.params.flightId
    console.log(req.body)
  Ticket.create(req.body, function (err, ticket) {
    if (err) console.log(err);
    console.log(ticket);
    res.redirect(`/flights/${req.params.flightId}`);
  });
}

function newTicket(req, res) {
  res.render('tickets/new', {
    title: 'Add Ticket',
    id: req.params.flightId
  });
}