const mongoose = require('mongoose');
const Models = require('./model-names');

const FlightSchema = new mongoose.Schema(
  {
    number: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 3,
      maxlength: 6
    },
    originAirport: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Airport,
      required: true
    },
    destinationAirport: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Airport,
      required: true
    },
    departureTime: {
      type: mongoose.SchemaTypes.Date,
      required: true
    },
    arrivalTime: {
      type: mongoose.SchemaTypes.Date,
      required: true
    },
    airline: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Airline,
      required: true
    },
    airplane: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Airplane,
      required: true
    },
    fares: {
      type: [{
        class: {
          type: mongoose.SchemaTypes.String,
          required: true,
          lowercase: true
        },
        price: {
          type: mongoose.SchemaTypes.Number,
          required: true
        },
        ticketsLeft: {
          type: mongoose.SchemaTypes.Number,
          required: true
        }
      }],
      required: true
    }
  }, 
  {
    timestamps: true
  }
);

const Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
