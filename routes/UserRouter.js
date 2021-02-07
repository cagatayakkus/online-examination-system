var express = require("express");
const userController = require("../controllers/UserController");

var router = express.Router();

router.get("/login", userController.login);

router.post("/login", userController.loginHandler);

router.get("/register", userController.register);

router.post("/register", userController.registerHandler);

router.get("/logout", userController.logout);


module.exports = router;
