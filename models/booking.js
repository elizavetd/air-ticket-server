const mongoose = require('mongoose');
const Models = require('./model-names');

const BookingSchema = new mongoose.Schema(
  {
    flight: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Flight,
      required: true
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.User,
      required: true
    },
    passengerDetails: {
      type: [{
        firstName: {
          type: mongoose.SchemaTypes.String,
          required: true
        },
        lastName: {
          type: mongoose.SchemaTypes.String,
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

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
