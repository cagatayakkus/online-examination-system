const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TakenExamAnswer",
    {
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
