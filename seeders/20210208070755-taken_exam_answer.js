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
        TakenExamID: 1,
        QuestionID: 1,
        Answer: "A",
      },
      {
        TakenExamID: 1,
        QuestionID: 2,
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
        TakenExamID: 1,
        QuestionID: 1,
      },
      {
        TakenExamID: 1,
        QuestionID: 2,
      },
    ]);
  },
};
