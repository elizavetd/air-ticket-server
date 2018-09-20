module.exports = (router) => {
  router
    .use('/users', require('./users'))
    .use('/airports', require('./airports'))
    .use('/airplanes', require('./airplanes'))
    .use('/flights', require('./flights'));
};
