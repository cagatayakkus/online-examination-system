"use strict";

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
    return queryInterface.bulkInsert("Enrollments", [
      {
        UserID: 2,
        ExamID: "cAt0lk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserID: 2,
        ExamID: "p0lk4c",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete("Enrollments", [
      {
        UserID: 2,
        ExamID: "cAt0lk",
      },
      {
        UserID: 2,
        ExamID: "p0lk4c",
      },
    ]);
  },
};
