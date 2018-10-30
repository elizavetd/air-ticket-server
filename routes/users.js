const Router = require('koa-router');
const { user: controller } = require('../controllers');

const router = new Router();

router
  .get('/', controller.findAll)
  .get('/:id', controller.findOne)
  .post('/', controller.create)
  .delete('/:id', controller.destroy);

module.exports = router.routes();
