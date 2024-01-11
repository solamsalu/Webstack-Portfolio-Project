// authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login user and generate JWT
const loginUser = async (req, res) => {
   const { username, password } = req.body;
 
   try {
     const user = await User.findOne({ username });
 
     if (!user || !user.verifyPassword(password)) {
       return res.status(401).json({ message: 'Invalid credentials' });
     }
 
     const token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, {
       expiresIn: '1h',
     });
 
     res.json({ token });
   } catch (error) {
     console.error('Login error:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 };

module.exports = {
  loginUser,
  // Add other authentication-related functions here if needed
};
