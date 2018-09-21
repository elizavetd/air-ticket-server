const mongoose = require('mongoose');

// https://www.yestravel.ru/skyticket/aircraft-types/

const AirplaneSchema = new mongoose.Schema(
  {
    name: String,
    ICAOcode: String,
    IATAcode: String
  }, 
  {
    timestamps: true
  }
);

const Airplane = mongoose.model('Airplane', AirplaneSchema);

module.exports = Airplane;
