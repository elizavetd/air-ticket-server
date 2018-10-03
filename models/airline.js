const mongoose = require('mongoose');

const AirlineSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true,
      unique: true
    },
    country: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    ICAOcode: {
      type: mongoose.SchemaTypes.String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
      unique: true
    },
    IATAcode: {
      type: mongoose.SchemaTypes.String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 2,
      maxlength: 2,
      unique: true
    },
    description: {
      type: mongoose.SchemaTypes.String,
      trim: true,
      maxlength: 1000
    }
  },
  {
    timestamps: true
  }
);

const Airline = mongoose.model('Airline', AirlineSchema);

module.exports = Airline;
