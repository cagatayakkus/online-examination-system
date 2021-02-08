var express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const db = require("../db");
const { Exam, Enrollment, User } = db.models;
const { hash } = require("../utilities");

var router = express.Router();

router.get("/", (req, res) => res.render("index"));

router.get("/test", async (req, res) => {
  let pass = [];
  const test = await hash("john123").then((hashed) => {
    pass[0] = hashed;
  });
  console.log(pass);
  res.render("Test/test");
});

router.get("/dashboard", ensureAuthenticated, async (req, res) => {
  const { ID, Type } = req.user;
  const users = await User.findAll();
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
