var express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const sequelize = require("../sequelize");
const { Exam, Enrollment, User } = sequelize.models;

var router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/test", ensureAuthenticated, (req, res) =>
  res.render("Test/test", {
    user: req.user,
  })
);

router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  const { ID, Type } = req.user;
  const data =
    Type == "Student"
      ? await Enrollment.findAll({
          where: {
            UserID: ID,
          },
          include: Exam,
        })
      : await Exam.findAll({
          where: {
            UserID: ID,
          },
        });
  res.render("dashboard", {
    user: req.user,
    data,
  });
});

module.exports = router;
