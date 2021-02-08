const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Roles", {
      Type: {
        type: DataTypes.STRING,
        field: "Type",
        primaryKey: true,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Roles");
  },
};
