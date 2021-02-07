const { Sequelize } = require("sequelize");
const { extraSetup } = require("./extraSetup");
const { seedAll } = require("./seeders");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "storage/database.sqlite",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [
  require("./models/User.model"),
  require("./models/Role.model"),
  require("./models/Exam.model"),
  require("./models/Question.model"),
  require("./models/Enrollment.model"),
  require("./models/TakenExam.model"),
  require("./models/TakenExamAnswer.model"),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

extraSetup(sequelize);

seedAll(sequelize);

module.exports = sequelize;
