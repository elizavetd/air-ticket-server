const jwt = require('koa-jwt');
const { jwtHelpers } = require('../helpers');

const SECRET = process.env.SECRET;
const jwtInstance = jwt({
  secret: SECRET
}).unless(jwtHelpers.checkPublicRoutes);

module.exports = () => jwtInstance;
