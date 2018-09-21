const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    email: String,
    password: String,
    orders: [
      {
        flight: ObjectId
      }
    ]
  }, 
  {
    timestamps: true
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
