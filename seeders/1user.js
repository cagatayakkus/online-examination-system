"use strict";
const bcrypt = require("bcryptjs");
const { hash } = require("../utilities");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const passwords = ["john123", "jane123"];

    await hash(passwords[0]).then((hashed) => {
      passwords[0] = hashed;
    });

    await hash(passwords[1]).then((hashed) => {
      passwords[1] = hashed;
    });

    return queryInterface.bulkInsert("Users", [
      {
        ID: 1,
        FirstName: "John",
        LastName: "Doe",
        Email: "john@doe.com",
        Password: passwords[0],
        Type: "Teacher",
      },
      {
        ID: 2,
        FirstName: "Jane",
        LastName: "Doe",
        Email: "jane@doe.com",
        Password: passwords[1],
        Type: "Student",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", [
      {
        ID: 1,
      },
      {
        ID: 2,
      },
    ]);
  },
};
