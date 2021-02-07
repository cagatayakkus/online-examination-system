var express = require("express");
const sequelize = require("../sequelize");
const { Exam } = sequelize.models;
const questionController = require("../controllers/QuestionController");

var router = express.Router();

router.post("/create", questionController.create);


module.exports = router;
