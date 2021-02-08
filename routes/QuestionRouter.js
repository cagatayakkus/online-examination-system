var express = require("express");
const questionController = require("../controllers/QuestionController");

var router = express.Router();

router.post("/create", questionController.create);


module.exports = router;
