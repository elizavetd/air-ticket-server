const Router = require('koa-router');
const controller = require('../controllers/flights');

const router = new Router();

router.get('/', controller.hello);

module.exports = router.routes();
