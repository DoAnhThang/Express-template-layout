const db = require("../db.js");
const shortid = require("shortid");

module.exports.postCreate = function(req, res, next) {
  var errs = [];
  if (!req.body.name) {
    errs.push("name is required.");
  }
  if (req.body.name.split("").length > 30) {
    errs.push("name is required.");
  }
  if (errs.length) {
    res.render("users/users", {
      users: db.get("users").value(),
      errs,
      values: req.body
    });
    return;
  }
  next();
};
