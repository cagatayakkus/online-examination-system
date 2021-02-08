const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Question",
    {
      // Model attributes are defined here
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OptionA: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OptionB: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OptionC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OptionD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Answer: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
