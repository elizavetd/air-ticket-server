const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const respond = require('koa-respond');
const mongoose = require('mongoose');
const { jwt } = require('./config');
const { jwtHelpers } = require('./helpers');

const app = new Koa();

const router = new Router();
require('./routes')(router);

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app
  .use(Cors())
  //.use(jwtHelpers.errorHandler())
  .use(jwt())
  .use(BodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: (err, ctx) => {
      ctx.throw('body parse error', 422);
    }
  }))
  .use(respond())
  .use(router.routes())
  .use(router.allowedMethods());
  

mongoose.connect(
  'mongodb://user:user123@ds263172.mlab.com:63172/air-ticket-database',
  { useNewUrlParser: true }
);

module.exports = app;
