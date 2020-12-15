const db = require('./controller');
const { notFound } = require('../response');

/**
 * @description function - handler for '/user' route.
 * @param req - HTTP request object.
 * @param res - HTTP response object.
 * @param db - Queries
 */
function userHandler(req, res) {
  const cond = req.method + req.url;
  const routes = {
    getUsers: /^GET\/users\/?$/,
    getUser: /^GET\/users\/[0-9]+$/,
    postUser: 'POST/users',
    updateUser: /^PUT\/users\/[0-9]+$/,
    deleteUser: /^DELETE\/users\/[0-9]+$/,
  };
  
  switch (cond) {
    case routes.getUsers.test(cond)? cond: false :
      db.getUsers(req, res);
      break;
    case routes.getUser.test(cond)? cond: false :
      db.getUser(req, res);
      break;
    case routes.postUser :
      db.postUser(req, res);
      break;
    case routes.updateUser.test(cond)? cond: false :
      db.updateUser(req, res);
      break;
    case routes.deleteUser.test(cond)? cond: false :
      db.delete(req, res);
      break;
    default : notFound(res, 2);
  }
}

module.exports = userHandler;