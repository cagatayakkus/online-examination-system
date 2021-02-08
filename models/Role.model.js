const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Role", {
    Type: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    timestamps: false,
  });
};
