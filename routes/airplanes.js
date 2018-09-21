const Router = require('koa-router');
const { airplane: controller } = require('../controllers');

const router = new Router();

router.get('/', controller.hello);

module.exports = router.routes();
