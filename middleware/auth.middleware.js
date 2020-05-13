const db = require("../db.js");
const shortid = require("shortid");

module.exports.requireAuth = function(req, res, next) {
  if (!req.cookies.userId) {
    res.redirect("/auth/login");
    return;
  }

  let user = db.get("users").find({ id: req.cookies.userId }).value();

  if (!user) {
    res.redirect("/auth/login");
    return;
  }

  res.locals.user = user;

  next();
};
