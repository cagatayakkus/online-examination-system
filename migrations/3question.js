const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Questions", {
      ID: {
        type: DataTypes.INTEGER,
        field: "ID",
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Text: {
        type: DataTypes.STRING,
        field: "Text",
        allowNull: false,
      },
      OptionA: {
        type: DataTypes.STRING,
        field: "OptionA",
        allowNull: false,
      },
      OptionB: {
        type: DataTypes.STRING,
        field: "OptionB",
        allowNull: false,
      },
      OptionC: {
        type: DataTypes.STRING,
        field: "OptionC",
        allowNull: false,
      },
      OptionD: {
        type: DataTypes.STRING,
        field: "OptionD",
        allowNull: false,
      },
      Answer: {
        type: DataTypes.CHAR(1),
        field: "Answer",
        allowNull: false,
      },
      ExamID: {
        type: DataTypes.STRING,
        field: "ExamID",
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Questions");
  },
};
