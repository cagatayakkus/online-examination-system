const db = require("../db");
const { User } = db.models;
const bcrypt = require("bcryptjs");
const passport = require("passport");

const courseContoller = {
  login(req, res) {
    res.render("User/login");
  },
  loginHandler(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/user/login",
      failureFlash: true,
    })(req, res, next);
  },
  register(req, res) {
    res.render("User/register");
  },
  async registerHandler(req, res) {
    const { FirstName, LastName, Email, Password, Password2, Role } = req.body;

    const errors = [];

    // Required Fields
    if (!FirstName || !LastName || !Email || !Password || !Password2 || !Role) {
      errors.push({ msg: "Please fill in all fields." });
    }

    // Matching
    if (Password !== Password2) {
      errors.push({ msg: "Passwords do not match." });
    }

    // Password length
    if (Password.length < 6) {
      errors.push({ msg: "Password should be at least 6 characters." });
    }

    if (errors.length > 0) {
      res.render("User/register", {
        errors,
        FirstName,
        LastName,
        Email,
        Password,
        Password2,
        Role,
      });
    } else {
      await User.findOne({
        where: {
          Email,
        },
      }).then(async (user) => {
        if (user) {
          // User exists
          errors.push({ msg: "Email is already registered." });
          res.render("User/register", {
            errors,
            FirstName,
            LastName,
            Email,
            Password,
            Password2,
            Role,
          });
        } else {
          bcrypt.genSalt(10, async (err, salt) =>
            bcrypt.hash(Password, salt, async (err, hash) => {
              if (err) throw err;
              await User.create({
                FirstName,
                LastName,
                Email,
                Password: hash,
                Type: Role,
              })
                .then((user) => {
                  req.flash(
                    "success_msg",
                    "You are now registered and can log in!"
                  );
                  res.redirect("/user/login");
                })
                .catch((err) => console.log(err));
            })
          );
        }
      });
    }
  },
  logout(req, res) {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/user/login");
  },
};

module.exports = courseContoller;
