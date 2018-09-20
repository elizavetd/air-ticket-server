const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Cors = require('@koa/cors');
const BodyParser = require('koa-bodyparser');
const respond = require('koa-respond');

const app = new Koa();
const router = new Router();
require('./routes')(router);

if (process.env.NODE_ENV === 'development') {
  app.use(Logger());
}

app
  .use(Cors())
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

module.exports = app;
