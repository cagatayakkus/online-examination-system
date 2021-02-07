const seedAll = async (sequelize) => {
  const {
    User,
    Role,
    Exam,
    Question,
    Enrollment,
    TakenExam,
    TakenExamAnswer,
  } = sequelize.models;
  const bcrypt = require("bcryptjs");

  console.log("Cleaning the database...");

  await sequelize.sync({ force: true });

  console.log("Seeding role table...");

  await Role.bulkCreate([
    {
      Type: "Teacher",
    },
    {
      Type: "Student",
    },
  ]);

  console.log("Seeding user table...");

  bcrypt.genSalt(10, async (err, salt) =>
    bcrypt.hash("john123", salt, async (err, hash) => {
      if (err) throw err;
      await User.bulkCreate([
        {
          ID: 1,
          FirstName: "John",
          LastName: "Doe",
          Email: "john@doe.com",
          Password: hash,
          Type: "Teacher",
        },
      ]).then(async (user) => {
        await Exam.bulkCreate([
          {
            ID: "oH7c9",
            Title: "Cloud Computing Midterm",
            Date: "2021-02-07",
            StartAt: "07:30",
            FinishAt: "20:30",
            NumberOfQuestions: 2,
            UserID: 1,
          },
        ]).then(async (exam) => {
          await Enrollment.bulkCreate([
            {
              UserID: 2,
              ExamID: "oH7c9",
            },
          ]);

          await Question.bulkCreate([
            {
              ID: 1,
              Text:
                "Aşağıdakilerden hangisi bulut bilişim servis modellerindendir?",
              OptionA: "IaaS",
              OptionB: "KaaS",
              OptionC: "LaaS",
              OptionD: "TaaS",
              Answer: "A",
              ExamID: "oH7c9",
            },
            {
              ID: 2,
              Text: "Aşağıdakilerden hangisi Türkiye illerinden değildir?",
              OptionA: "İzmir",
              OptionB: "Kars",
              OptionC: "Miami",
              OptionD: "Hatay",
              Answer: "C",
              ExamID: "oH7c9",
            },
          ]);

          await TakenExam.bulkCreate([{ ID: 1, UserID: 2, ExamID: "oH7c9" }]);

          await TakenExamAnswer.bulkCreate([
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
        });
      });
    })
  );

  bcrypt.genSalt(10, async (err, salt) =>
    bcrypt.hash("jane123", salt, async (err, hash) => {
      if (err) throw err;
      await User.bulkCreate([
        {
          ID: 2,
          FirstName: "Jane",
          LastName: "Doe",
          Email: "jane@doe.com",
          Password: hash,
          Type: "Student",
        },
      ]);
    })
  );

  console.log("Seeding exam table...");
};

module.exports = { seedAll };
