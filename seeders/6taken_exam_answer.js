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
    
    return queryInterface.bulkInsert("TakenExamAnswers", [
      {
        TakenExamID: 0,
        QuestionID: 0,
        Answer: "A",
      },
      {
        TakenExamID: 0,
        QuestionID: 1,
        Answer: "B",
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
    return queryInterface.bulkDelete("TakenExamAnswers", [
      {
        TakenExamID: 0,
        QuestionID: 0,
      },
      {
        TakenExamID: 0,
        QuestionID: 1,
      },
    ]);
  },
};
