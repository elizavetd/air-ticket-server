const bcrypt = require('bcrypt');

const BcryptRounds = parseInt(process.env.BCRYPT_ROUNDS, 10) || 10;

function hashPassword (password) {
  return bcrypt.hash(password, BcryptRounds);
}

module.exports = {
  hashPassword
};
