var express = require("express");
const { ensureAuthenticated, ensureAuthorized } = require("../config/auth");
const examController = require("../controllers/ExamController");

var router = express.Router();

router.get(
  "/create",
  ensureAuthenticated,
  (req, res, next) => {
    ensureAuthorized(req.user.Type, "Teacher", req, res, next);
  },
  (req, res) =>
    res.render("Exam/create", {
      user: req.user,
    })
);

router.post(
  "/create",
  ensureAuthenticated,
  (req, res, next) => {
    ensureAuthorized(req.user.Type, "Teacher", req, res, next);
  },
  examController.create
);

router.get(
  "/edit/:ID",
  ensureAuthenticated,
  (req, res, next) => {
    ensureAuthorized(req.user.Type, "Teacher", req, res, next);
  },
  examController.edit
);

router.get("/:ID", ensureAuthenticated, examController.start)

router.get("/take/:ID", ensureAuthenticated, examController.take)

router.post("/take/:ID", ensureAuthenticated, examController.takeHandler)

router.get("/details/:ID", ensureAuthenticated, examController.details)

router.get("/paper/:ID", ensureAuthenticated, examController.paper)

router.post('/enroll', ensureAuthenticated, examController.enroll);

module.exports = router;
