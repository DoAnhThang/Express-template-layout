const express = require("express");
const router = express.Router();


var controllerUser = require("../controllers/user.controller.js")


router.get("/", controllerUser.index);

router.post("/", controllerUser.postIndex);

router.get("/:id/update", controllerUser.getUpdate);

router.post("/update", controllerUser.postUpdate);

router.get("/:id/delete", controllerUser.getDelete);

module.exports = router;
