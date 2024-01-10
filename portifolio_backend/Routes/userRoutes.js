// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/userController');
// const authe = require('../Middleware/auth');

const router = express.Router();

// Routes for Users
router.get('/', userController.getAllUsers);
// router.get('/profile', authe, userController.getProfile);
router.get('/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
