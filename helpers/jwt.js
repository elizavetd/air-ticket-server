const jsonwebtoken = require('jsonwebtoken');

const SECRET = process.env.SECRET;

function JWTErrorHandler (ctx, next) {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        'error': 'Not authorized'
      };
    } else {
      throw err;
    }
  });
}

function issueToken (payload) {
  return jsonwebtoken.sign(payload, SECRET);
}

function checkPublicRoutes (ctx) {
  const { method, url } = ctx;

  const publicRoutes = {
    '/': ['GET'],
    '/airports': ['GET'],
    '/airplanes': ['GET'],
    '/flights': ['GET'],
    '/auth': ['POST']
  };

  return (publicRoutes[url] || []).includes(method);
}

module.exports = {
  errorHandler: () => JWTErrorHandler,
  issueToken,
  checkPublicRoutes
};
