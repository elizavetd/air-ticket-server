const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema(
  {
    country: String,
    city: String,
    code: String
  }, 
  {
    timestamps: true
  }
);

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
