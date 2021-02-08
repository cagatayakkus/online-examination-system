const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    // Model attributes are defined here
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
