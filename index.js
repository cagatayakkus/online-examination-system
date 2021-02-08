const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const db = require("./db");
const userRouter = require("./routes/UserRouter");
const examRouter = require("./routes/ExamRouter");
const homeRouter = require("./routes/HomeRouter");
const questionRouter = require("./routes/QuestionRouter");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

const app = express();

// Passport config
require("./config/passport")(passport);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors("*"));
app.use(express.static(__dirname + "/public"));

// Session
app.use(
  session({
    key: "user",
    secret: "highly secretted",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/", homeRouter);

app.use("/exam", examRouter);

app.use("/user", userRouter);

app.use("/question", questionRouter);

const PORT = process.env.PORT || 5000;

db
  .authenticate()
  .then(() => console.log("DB connection is successful"))
  .catch((err) => console.log(err));

db
  .sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
