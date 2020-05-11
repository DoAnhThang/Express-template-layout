const db = require("../db.js");
const shortid = require("shortid");

module.exports.index = function(req, res) {
  res.render("trans/trans", {
    trans: db.get("trans").value()
  });
};

module.exports.getCreate = function(req, res) {
  res.render("trans/create", {
    users: db.get("users").value(),
    books: db.get("books").value()
  });
};

module.exports.postCreate = (req, res) => {
  var id = shortid.generate();
  var userId = req.body.userId;
  var bookId = req.body.bookId;
  var userName = db
    .get("users")
    .find({ id: userId })
    .value().name;
  var bookTitle = db
    .get("books")
    .find({ id: bookId })
    .value().title;
  var transaction = { id, userId, bookId, userName, bookTitle };
  db.get("trans")
    .push(transaction)
    .write();
  res.redirect("/trans");
};
