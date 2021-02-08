const { DataTypes } = require("sequelize");
const db = require("../db");
const { User, Exam } = db.models;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Enrollments", {
      UserID: {
        type: DataTypes.INTEGER,
        field: "UserID",
        primaryKey: true,
        allowNull: false,
        references: { model: 'Users', key: "ID" },
      },
      ExamID: {
        type: DataTypes.STRING,
        field: "ExamID",
        primaryKey: true,
        allowNull: false,
        references: { model: 'Exams', key: "ID" },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Enrollments");
  },
};
