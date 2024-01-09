// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = auth;

