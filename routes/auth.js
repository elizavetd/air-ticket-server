const Router = require('koa-router');
const { auth: controller } = require('../controllers');

const router = new Router();

router.post('/', controller.login);

module.exports = router.routes();
