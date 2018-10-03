const mongoose = require('mongoose');

const AirportSchema = new mongoose.Schema(
  {
    country: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    city: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    IATAcode: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 3,
      maxlength: 3,
      unique: true
    },
    ICAOcode: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      uppercase: true,
      minlength: 4,
      maxlength: 4,
      unique: true
    },
    timezone: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 6,
      maxlength: 6,
      match: /^(?:Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])$/
    }
  }, 
  {
    timestamps: true
  }
);

const Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
