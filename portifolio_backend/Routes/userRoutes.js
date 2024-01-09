// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/userController');
const auth = require('../Middleware/auth');

const router = express.Router();

// Routes for Users
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/login', userController.loginUser);  // Correct function name here
router.get('/profile', auth, userController.getProfile);
router.post('/create', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
