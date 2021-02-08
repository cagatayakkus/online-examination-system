const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("TakenExams", {
      ID: {
        type: DataTypes.INTEGER,
        field: "ID",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      UserID: {
        type: DataTypes.INTEGER,
        field: "UserID",
        primaryKey: true,
        allowNull: false,
        references: { model: "Users", key: "ID" },
      },
      ExamID: {
        type: DataTypes.STRING,
        field: "ExamID",
        primaryKey: true,
        allowNull: false,
        references: { model: "Exams", key: "ID" },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("TakenExams");
  },
};
