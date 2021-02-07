const extraSetup = (sequelize) => {
  const {
    User,
    Role,
    Exam,
    Question,
    Enrollment,
    TakenExam,
    TakenExamAnswer,
  } = sequelize.models;

  User.belongsTo(Role, {
    foreignKey: "Type",
  });
  Role.hasOne(User, {
    foreignKey: "Type",
  });

  User.hasMany(Exam);
  Exam.belongsTo(User);

  Exam.hasMany(Question);
  Question.belongsTo(Exam);

  User.belongsToMany(Exam, { through: Enrollment });
  Exam.belongsToMany(User, { through: Enrollment });
  Enrollment.belongsTo(Exam);
  Enrollment.belongsTo(User);
  Exam.hasMany(Enrollment);
  User.hasMany(Enrollment);

  User.belongsToMany(Exam, { through: TakenExam });
  Exam.belongsToMany(User, { through: TakenExam });
  TakenExam.belongsTo(User);
  TakenExam.belongsTo(Exam);
  Exam.hasMany(TakenExam);
  User.hasMany(TakenExam);

  TakenExam.belongsToMany(Question, { through: TakenExamAnswer });
  Question.belongsToMany(TakenExam, { through: TakenExamAnswer });
  TakenExamAnswer.belongsTo(TakenExam);
  TakenExamAnswer.belongsTo(Question);
  TakenExam.hasMany(TakenExamAnswer);
  Question.hasMany(TakenExamAnswer);
};

module.exports = { extraSetup };
