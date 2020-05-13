const express = require("express");
const router = express.Router();


var controllerlogin = require("../controllers/auth.controller.js")

router.get("/login", controllerlogin.login);

router.post("/login", controllerlogin.postLogin)

module.exports = router;