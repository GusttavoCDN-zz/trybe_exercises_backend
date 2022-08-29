require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateToken = (token) => {
  const { username, admin } = jwt.verify(token, process.env.JWT_SECRET);
  return { username, admin };
};

module.exports = validateToken;
