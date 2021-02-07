const bcrypt = require("bcryptjs");
const hash = async (Password) => {
  let hashed = "";
  await bcrypt.genSalt(
    10,
    async (err, salt) =>
      await bcrypt.hash(Password, salt, (err, hash) => {
        if (err) throw err;
        hashed = hash;
      })
  );
  return new Promise((resolve, reject) => {
    resolve(hashed);
    reject(err);
  });
};

module.exports = { hash };
