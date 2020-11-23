const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: String,
  destination: String,
  arrival: {
    type: Date,
    default: function() {
      return new Date().toLocaleDateString();
    },
  }, 
}, {
   timestamps: true
});

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo:  {
    type: Number,
    min: 10,
    max: 9999
  }, departs:  {
    type: Date,
    default: function() {
      return new Date().toLocaleDateString();
    },
  },
  destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);