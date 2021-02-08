const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../db");
const { User, Role, Exam } = db.models;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Match User
      User.findOne({
        where: { Email: email },
        include: Exam,
      })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "That email is not registered.",
            });
          } else {
            // Match password
            bcrypt.compare(password, user.Password, (err, isMatch) => {
              if (err) throw err;

              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "Password incorrect." });
              }
            });
          }
        })
        .catch((err) => console.log(err));
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.ID);
  });

  passport.deserializeUser(async (id, done) => {
    await User.findByPk(id)
      .then((user) => done(null, user))
      .catch((err) => done(err, null));
  });
};
