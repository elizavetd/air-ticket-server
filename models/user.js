const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Models = require('./model-names');
const { userHelpers } = require('../helpers');

mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      trim: true
    },
    avatar: {
      type: mongoose.SchemaTypes.String
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      match: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
      minlength: 5,
      maxlength: 50,
      trim: true
    },
    role: {
      type: mongoose.SchemaTypes.String,
      required: true,
      default: 'user',
      enum: ['user', 'admin']
    },
    bookings: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Models.Booking,
        index: true
      }
    ]
  }, 
  {
    timestamps: true
  }
);

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }

  return userHelpers
    .hashPassword(this.password)
    .then((hash) => {
      this.password = hash;
      next();
    });
});

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
