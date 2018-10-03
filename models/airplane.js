const mongoose = require('mongoose');
const Models = require('./model-names');

const AirplaneSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    airline: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: Models.Airline
    },
    ICAOcode: {
      type: mongoose.SchemaTypes.String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 2,
      maxlength: 4
    },
    IATAcode: {
      type: mongoose.SchemaTypes.String,
      required: true,
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3
    },
    seats: {
      type: [{
        class: {
          type: mongoose.SchemaTypes.String,
          required: true,
          lowercase: true
        },
        numberOfSeats: {
          type: mongoose.SchemaTypes.Number,
          required: true
        }
      }],
      required: true
    },
    seatingSchema: {
      type: mongoose.SchemaTypes.String
    },
    grossWeightKg: {
      type: mongoose.SchemaTypes.Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Airplane = mongoose.model('Airplane', AirplaneSchema);

module.exports = Airplane;
