const { jwtHelpers } = require('../helpers');
const { Status, Errors } = require('../constants');
const { User } = require('../models');
const { omit } = require('lodash');

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

module.exports = {
  login
};
