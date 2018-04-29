const userDB = require('../config/connection');

module.exports = {
  save(user) {
    let salt = hasher.genSaltSync(10);
    let hash = hasher.hashSync(user.body.password, salt);
    const user = {
      email: user.body.email,
      password: hash,
      salt: salt,
    };
    return userDB.one(
      `INSERT INTO users(email, password, salt) VALUES($[email], $[password], $[salt]) RETURNING *`,
      user,
    );
  },
};
