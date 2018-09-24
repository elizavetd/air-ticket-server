const mongoose = require('mongoose');

const AirplaneSchema = new mongoose.Schema(
  {
    name: String,
    ICAOcode: String,
    IATAcode: String,
    seats: [
      {
        class: String,
        numberOfSeats: Number
      }
    ],
    grossWeightKg: Number
  },
  {
    timestamps: true
  }
);

const Airplane = mongoose.model('Airplane', AirplaneSchema);

module.exports = Airplane;
