const { Sequelize } = require("sequelize");
const { extraSetup } = require("./extraSetup");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const modelDefiners = [
  require("../models/Role.model"),
  require("../models/User.model"),
  require("../models/Exam.model"),
  require("../models/Question.model"),
  require("../models/Enrollment.model"),
  require("../models/TakenExam.model"),
  require("../models/TakenExamAnswer.model"),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(db);
}

extraSetup(db);

module.exports = db;
