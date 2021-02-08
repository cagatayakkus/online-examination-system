const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Exams", {
      ID: {
        type: DataTypes.STRING,
        field: "ID",
        primaryKey: true,
        allowNull: false,
      },
      Title: {
        type: DataTypes.STRING,
        field: "Title",
        allowNull: false,
      },
      Date: {
        type: DataTypes.DATEONLY,
        field: "Date",
        allowNull: false,
      },
      StartAt: {
        type: DataTypes.TIME,
        field: "StartAt",
        allowNull: false,
      },
      FinishAt: {
        type: DataTypes.TIME,
        field: "FinishAt",
        allowNull: false,
      },
      NumberOfQuestions: {
        type: DataTypes.INTEGER,
        field: "NumberOfQuestions",
        allowNull: false,
      },
      UserID: {
        type: DataTypes.INTEGER,
        field: "UserID",
        allowNull: false,
        references: { model: "Users", key: "ID" },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Exams");
  },
};
