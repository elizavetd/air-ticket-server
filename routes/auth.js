const Router = require('koa-router');
const { auth: controller } = require('../controllers');

const router = new Router();

router.post('/login', controller.login);
router.post('/signup', controller.signup);

module.exports = router.routes();
