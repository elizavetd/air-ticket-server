const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema(
  {
    country: String,
    city: String,
    IATAcode: String,
    ICAOcode: String
  }, 
  {
    timestamps: true
  }
);

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
