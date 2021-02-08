const { Sequelize } = require("sequelize");
const { extraSetup } = require("./extraSetup");

/*
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "storage/database.sqlite",
  logQueryParameters: true,
  benchmark: true,
});
*/

const db = new Sequelize("examination", "cgtyakks", "Cagatay123*", {
  host: "cagatayakkuscc20.postgres.database.azure.com",
  dialect: "postgres",
});

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
