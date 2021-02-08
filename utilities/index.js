const bcrypt = require("bcryptjs");
const hash = async (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, async (err, salt) =>
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) reject(err);
        else {
          resolve(hash);
        }
      })
    );
  });
};

module.exports = { hash };
