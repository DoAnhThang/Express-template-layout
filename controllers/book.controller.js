const db = require("../db.js")
const shortid = require("shortid");

module.exports.index =  function(req, res) {
  res.render("books", {
    books: db.get("books").value()
  });
}

module.exports.postIndex = function(req,res){
  req.body.id = shortid.generate();
  db.get('books')
    .push(req.body)
    .write()
  res.redirect('back')
}

module.exports.getUpdate = function(req,res){
  var id = req.params.id;
  res.render('update-title',{
    id:id
  })
}

module.exports.postUpdate = function(req,res){
  db.get('books')
    .find({id: req.body.id})
    .assign({title: req.body.title})
    .write()
  res.redirect('/books')
}

module.exports.getDelete = function(req,res){
  var id = req.params.id;
  db.get('books')
    .remove({id:id})
    .write()
  res.redirect('back')
}
