const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String,
  airport: {
    type: String,
    default: 'DEN'
  },
  flightNo:  {
    type: Number,
    min: 10,
    max: 9999
  }, departs:  {
    type: Date,
    default: function() {
      return new Date().addFullYear();
    },
  },
});

module.exports = mongoose.model('Flight', flightSchema);