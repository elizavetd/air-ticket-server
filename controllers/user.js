const { User } = require('../models');
const { Errors, Status } = require('../constants');
const { isString } = require('lodash');

async function findAll (ctx) {
  try {
    const users = await User.find({}, '-password');
    ctx.body = users;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function findOne (ctx) {
  const id = ctx.params.id;

  try {
    const user = await User.findOne({ _id: id }, '-password');
    ctx.body = user;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function create (ctx) {
  const { name, email, password } = ctx.request.body;

  const isDataValid = name || email || password ||
    isString(name) || isString(email) || isString(password);

  ctx.assert(isDataValid, Status.BadRequest, Errors.UserDataRequired);

  try {
    const newUser = new User(ctx.request.body);
    const savedUser = await newUser.save();
    ctx.body = savedUser;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function destroy (ctx) {
  try {
    const id = ctx.params.id;
    const userToDelete = await User.findById(id);

    const deletedUser = await userToDelete.remove();
    ctx.body = deletedUser;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

async function update (ctx) {
  try {
    const id = ctx.params.id;
    const userToUpdate = await User.findByIdAndUpdate(id, ctx.request.body, { new: true });

    const updatedUser = await userToUpdate.save();
    ctx.body = updatedUser;
  } catch (error) {
    ctx.throw(Status.BadRequest, error);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  destroy,
  update
};
