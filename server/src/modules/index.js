const {notFound} = require('./response');
const userRouter = require('./user');

/**
 * @description function - global handler for all http requests.
 * @param req - HTTP request object.
 * @param res - HTTP response object.
 */
function routeHandler(req, res) {
  if (req.url.startsWith('/users')){
    userRouter(req, res);
  } else {
    notFound(res, 1);
  }
}

module.exports = routeHandler;