const { nanoid } = require("nanoid");
const sequelize = require("../sequelize");
const { Exam, Question } = sequelize.models;

const examController = {
  async create(req, res) {
    const { ID, Title, Date, StartAt, FinishAt, NumberOfQuestions } = req.body;
    const questions = [];
    for (let index = 0; index < NumberOfQuestions; index++) {
      const Text = req.body[`Question_${index}`];
      const OptionA = req.body[`OptionA_${index}`];
      const OptionB = req.body[`OptionB_${index}`];
      const OptionC = req.body[`OptionC_${index}`];
      const OptionD = req.body[`OptionD_${index}`];
      const Answer = req.body[`Answer_${index}`];
      await Question.create({
        Text,
        OptionA,
        OptionB,
        OptionC,
        OptionD,
        Answer,
        ExamID: ID,
      }).then((question) => questions.push(question));
    }
    res.render("Exam/preview", {
      exam: { ID, Title, Date, StartAt, FinishAt, NumberOfQuestions },
      questions,
      user: req.user,
    });
  },
};

module.exports = examController;
