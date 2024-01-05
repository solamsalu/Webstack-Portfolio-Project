const express = require('express');
const carController = require('../Controllers/carController');

const router = express.Router();
router.get('/', carController.getAllCars);

// Routes for Cars
// router.get('/:id', carController.getCarById);
router.get('/:carName', carController.getCarByName);
router.post('/', carController.createCar);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;

