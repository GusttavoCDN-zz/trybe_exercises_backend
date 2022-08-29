const validateToken = require('../helpers/validateToken');

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response } res
 * @param {import('express').NextFunction} next
 */
module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const user = validateToken(token);
    req.user = user;
    if (req.url === '/top-secret' && !user.admin) {
      return res.status(403).json({ message: 'Restricted acess' });
    }
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};
