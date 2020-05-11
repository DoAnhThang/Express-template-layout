const express = require("express");
const router = express.Router();



var controllerBook = require("../controllers/book.controller.js")

router.get('/', controllerBook.index);

router.post('/',controllerBook.postIndex)

router.get('/:id/update', controllerBook.getUpdate)

router.post('/update', controllerBook.postUpdate)

router.get('/:id/delete', controllerBook.getDelete)
module.exports = router;