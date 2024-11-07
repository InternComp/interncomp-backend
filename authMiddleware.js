function isLoggedIn(req, res, next) {
    return req.isAuthenticated() ? next() : res.sendStatus(401);
  }
  module.exports = isLoggedIn;