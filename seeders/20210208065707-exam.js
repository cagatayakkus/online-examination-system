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
    return queryInterface.bulkInsert("Exams", [
      {
        ID: "cAt0lk",
        Title: "Cloud Computing Midterm",
        Date: "2021-02-08",
        StartAt: "08:30",
        FinishAt: "09:30",
        NumberOfQuestions: 2,
        UserID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ID: "p0lk4c",
        Title: "Cloud Computing Final",
        Date: "2021-02-08",
        StartAt: "10:30",
        FinishAt: "16:30",
        NumberOfQuestions: 1,
        UserID: 1,
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
    return queryInterface.bulkDelete("Exams", [
      {
        ID: "cAt0lk",
      },
      {
        ID: "p0lk4c",
      },
    ]);
  },
};
