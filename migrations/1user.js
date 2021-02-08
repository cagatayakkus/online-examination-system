const { DataTypes } = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Users",
      {
        ID: {
          type: DataTypes.INTEGER,
          field: "ID",
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        FirstName: {
          type: DataTypes.STRING,
          field: "FirstName",
          allowNull: false,
        },
        LastName: {
          type: DataTypes.STRING,
          field: "LastName",
          allowNull: false,
        },
        Email: {
          type: DataTypes.STRING,
          field: "Email",
          allowNull: false,
        },
        Password: {
          type: DataTypes.STRING,
          field: "Password",
          allowNull: false,
        },
        Type: {
          type: Sequelize.ENUM("Teacher", "Student"),
          field: "Type",
          allowNull: false,
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
