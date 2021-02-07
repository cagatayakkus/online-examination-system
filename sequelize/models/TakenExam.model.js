const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TakenExam",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
