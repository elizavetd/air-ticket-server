const { jwtHelpers } = require('../helpers');
const { Status, Errors } = require('../constants');
const { User } = require('../models');
const { create } = require('./user');
const { omit, isString } = require('lodash');

async function login (ctx) {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.throw(Status.BadRequest, Errors.EmailAndPasswordRequired);
  }

  try {
    const foundUser = await User.findOne({ email });
    const passwordCorrect = await foundUser.comparePassword(password);

    if (passwordCorrect) {
      ctx.status = Status.OK;
      ctx.body = {
        ...omit(foundUser.toObject(), ['password']),
        token: jwtHelpers.issueToken({ email })
      };
    } else {
      throw Errors.IncorrectEmailOrPassword;
    }
  } catch (error) {
    ctx.throw(Status.Unauthorized, Errors.IncorrectEmailOrPassword);
  }
}

async function signup (ctx) {
  const { name, email, password } = ctx.request.body;

  const isDataValid = name || email || password ||
    isString(name) || isString(email) || isString(password);

  ctx.assert(isDataValid, Status.BadRequest, Errors.UserDataRequired);

  try {
    const newUser = new User(ctx.request.body);
    const savedUser = await newUser.save();

    ctx.status = Status.OK;
    ctx.body = {
      ...omit(savedUser.toObject(), ['password']),
      token: jwtHelpers.issueToken({ email: savedUser.email })
    };
  } catch (error) {
    ctx.throw(Status.Unauthorized, error);
  }
}

module.exports = {
  login,
  signup
};
