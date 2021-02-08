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
    return queryInterface.bulkInsert("Questions", [
      {
        ID: 0,
        Text: "Which of the following are cloud computing service models?",
        OptionA: "IaaS",
        OptionB: "KaaS",
        OptionC: "TaaS",
        OptionD: "LaaS",
        Answer: "A",
        ExamID: "cAt0lk",

      },
      {
        ID: 1,
        Text: "Which of the following is true for the SaaS model?",
        OptionA: "It only offers the development tools.",
        OptionB: "It offers the primitive infrastructure.",
        OptionC: "It offers the application which is ready to use.",
        OptionD: "It only offers the database service.",
        Answer: "C",
        ExamID: "cAt0lk",
      },
      {
        ID: 2,
        Text: "Which of the following are cloud computing service models?",
        OptionA: "TaaS",
        OptionB: "KaaS",
        OptionC: "LaaS",
        OptionD: "SaaS",
        Answer: "D",
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
    return queryInterface.bulkDelete("Questions", [
      {
        ID: 0,
      },
      {
        ID: 1,
      },
      {
        ID: 2,
      },
    ]);
  },
};
