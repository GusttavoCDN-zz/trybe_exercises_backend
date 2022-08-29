/* eslint-disable complexity */
const Joi = require('joi');
const generateToken = require('../helpers/generateToken');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const validateUser = (unknown) => {
  const schema = Joi.object({
    username: Joi.string().min(5).required(),
    password: Joi.string().min(5).required(),
  });

  const { error } = schema.validate(unknown);
  return error || null;
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const error = validateUser({ username, password });
  if (error) {
    return res.status(400).json({ message: 'User or password was not informed' });
  }

  if (username === 'GusttavoCDN' && password === 'otaku') {
    const token = generateToken({ username, admin: false }, jwtConfig);
    return res.status(200).json({ token });
  }

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const token = generateToken({ username, admin: true }, jwtConfig);
    return res.status(200).json({ token });
  }
  return res.status(400).json({ message: 'Invalid username or password' });
};

const getUser = (req, res) => res.status(200).json(req.user);

module.exports = {
  login,
  getUser,
};
