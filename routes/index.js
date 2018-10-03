module.exports = (router) => {
  router
    .get('/', (ctx) => { ctx.body = 'It is working!'; })
    .use('/auth', require('./auth'))
    .use('/users', require('./users'))
    .use('/airports', require('./airports'))
    .use('/airplanes', require('./airplanes'))
    .use('/airlines', require('./airlines'))
    .use('/flights', require('./flights'));
};
