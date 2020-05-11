const db = require("../db.js")
const shortid = require("shortid");


module.exports.index = function(req, res) {
  res.render("users/users", {
    users: db.get("users").value()
  });
}

module.exports.postIndex = function(req, res) {
  req.body.id = shortid.generate();
  var errs = [];
  if(!req.body.name){
    errs.push('name is required.')
  }
  if(req.body.name.split("").length > 30){
    errs.push('name is required.')
  }
  if(errs.length){
    res.render("users/users", {
      users: db.get("users").value(),
      errs,
      values: req.body
    });

    return;
  }
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