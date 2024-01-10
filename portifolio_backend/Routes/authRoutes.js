// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');

// Define your authentication routes here
router.post('/login', authController.loginUser);

module.exports = router;
