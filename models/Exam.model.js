const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Exam", {
    // Model attributes are defined here
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    StartAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    FinishAt: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    NumberOfQuestions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
