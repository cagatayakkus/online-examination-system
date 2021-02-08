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
        UserID: 1,
        ExamID: "cAt0lk",
      },
      {
        UserID: 1,
        ExamID: "p0lk4c",
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
        UserID: 1,
        ExamID: "cAt0lk",
      },
      {
        UserID: 1,
        ExamID: "p0lk4c",
      },
    ]);
  },
};
