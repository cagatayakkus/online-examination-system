const { nanoid } = require("nanoid");
const db = require("../db");
const {
  User,
  Exam,
  Enrollment,
  Question,
  TakenExam,
  TakenExamAnswer,
} = db.models;

const examController = {
  async create(req, res) {
    const { Title, Date, StartAt, FinishAt, NumberOfQuestions } = req.body;
    const user = req.user;
    await Exam.create({
      ID: nanoid(5),
      Title,
      Date,
      StartAt,
      FinishAt,
      NumberOfQuestions,
      UserID: user.ID,
    })
      .then((exam) => res.render("Question/create", { user, exam }))
      .catch((err) => res.send(err));
  },
  async edit(req, res) {
    const exam = await Exam.findByPk(req.params.ID);
    res.send(exam);
    /*
    res.render("Exam/edit", {
      user: req.user,
    });
    */
  },

  async enroll(req, res) {
    //oH7c9
    const { ExamID } = req.body;
    const { ID } = req.user;
    const exam = await Exam.findByPk(ExamID);
    if (exam) {
      await Enrollment.create({
        UserID: ID,
        ExamID,
      }).then((enrollment) => {
        req.flash(
          "success_msg",
          `You have successfully enrolled to ${enrollment.ExamID}`
        );
        res.redirect("/dashboard");
      });
    } else {
      req.flash(
        "error_msg",
        `Sorry, we can not find any associated exam belongs to this code.`
      );
      res.redirect("/dashboard");
    }
  },

  async start(req, res) {
    const exam = await Exam.findByPk(req.params.ID);
    res.render("Exam/start", { user: req.user, exam });
  },

  async take(req, res) {
    const { ID } = req.params;
    const exam = await Exam.findByPk(ID);

    const taken = await TakenExam.findOne({
      where: {
        UserID: req.user.ID,
        ExamID: ID,
      },
    });
    if (taken) {
      req.flash("error_msg", `You have already completed the exam!`);
      res.redirect("/dashboard")
    } else {
      const ISOFormat = new Date().toISOString();
      const currentDate = new Date(ISOFormat);

      const startHour = exam.StartAt.split(":")[0].padStart(2, "0");
      const startMinute = exam.StartAt.split(":")[1].padStart(2, "0");
      const finishHour = exam.FinishAt.split(":")[0].padStart(2, "0");
      const finishMinute = exam.FinishAt.split(":")[1].padStart(2, "0");

      const examStart = new Date(`${exam.Date}T${startHour}:${startMinute}`);
      const examFinish = new Date(`${exam.Date}T${finishHour}:${finishMinute}`);

      if (currentDate - examStart >= 0 && currentDate - examFinish < 0) {
        const questions = await Question.findAll({
          where: {
            ExamID: exam.ID,
          },
        });
        res.render("Exam/take", { user: req.user, exam, questions });
      } else {
        req.flash("error_msg", `You can not enter this exam!`);
        res.redirect("/dashboard");
      }
    }
  },

  async takeHandler(req, res) {
    const userId = req.user.ID;
    const examId = req.params.ID;
    const numberofQuestions = req.body.NumberOfQuestions;
    for (let index = 0; index < numberofQuestions; index++) {
      const answer = req.body[`Answer_${index}`];
      const questionId = req.body[`Question_${index}`];
      console.log(questionId);
      await TakenExam.create({
        UserID: userId,
        ExamID: examId,
      })
        .then(async (takenExam) => {
          await TakenExamAnswer.create({
            TakenExamID: takenExam.ID,
            QuestionID: questionId,
            Answer: answer,
          });
        })
        .then(() => {
          req.flash("success_msg", `You have successfully completed the exam.`);
          res.redirect("/dashboard");
        });
    }
  },

  async details(req, res) {
    const examId = req.params.ID;
    const exam = await Exam.findByPk(examId);
    const takenExams = await TakenExam.findAll({
      where: {
        ExamID: examId,
      },
      include: User,
    });
    res.render("Exam/details", {
      user: req.user,
      exam,
      takenExams,
    });
  },

  async paper(req, res) {
    const papers = await TakenExamAnswer.findAll({
      where: {
        TakenExamID: req.params.ID,
      },
      include: Question,
    });
    res.render("Exam/paper", { papers, user: req.user });
  },
};

module.exports = examController;
