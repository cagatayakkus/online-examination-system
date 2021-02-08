const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TakenExamAnswers", {
      TakenExamID: {
        type: DataTypes.INTEGER,
        field: "TakenExamID",
        primaryKey: true,
        allowNull: false,
      },
      QuestionID: {
        type: DataTypes.INTEGER,
        field: "QuestionID",
        primaryKey: true,
        allowNull: false,
      },
      Answer: {
        type: DataTypes.CHAR(1),
        field: "Answer",
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TakenExamAnswers");
  },
};
