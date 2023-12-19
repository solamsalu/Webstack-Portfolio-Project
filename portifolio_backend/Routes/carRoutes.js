// routes/carRoutes.js
const express = require('express');
const carController = require('../Controllers/carController');

const router = express.Router();

// Routes for Cars
router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
