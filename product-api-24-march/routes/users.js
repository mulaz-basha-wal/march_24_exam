var express = require("express");
var router = express.Router();
var userControl = require("../controller/usersController");

router.get("/", userControl.getUsers);
router.post("/", userControl.addUser);
module.exports = router;
