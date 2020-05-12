const db = require("../db.js")
const shortid = require("shortid");


module.exports.index = function(req, res) {
  res.render("users/users", {
    users: db.get("users").value()
  });
}

module.exports.postIndex = function(req, res) {
  req.body.id = shortid.generate();
  db.get("users")
    .push(req.body)
    .write();
  res.redirect("back");
}

module.exports.getUpdate = function(req, res) {
  var id = req.params.id;
  res.render("users/edit-name", {
    id: id
  });
}

module.exports.postUpdate = function(req, res) {
  db.get("users")
    .find({ id: req.body.id })
    .assign({ name: req.body.name })
    .write();
  res.redirect("/users");
}

module.exports.getDelete = function(req, res) {
  var id = req.params.id;
  db.get("users")
    .remove({ id: id })
    .write();
  res.redirect("back");
}