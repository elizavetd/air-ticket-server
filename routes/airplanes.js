const Router = require('koa-router');
const { airplane: controller } = require('../controllers');

const router = new Router();

router
  .get('/', controller.findAll)
  .post('/', controller.create)
  .post('/:id', controller.update)
  .delete('/:id', controller.destroy);

module.exports = router.routes();
