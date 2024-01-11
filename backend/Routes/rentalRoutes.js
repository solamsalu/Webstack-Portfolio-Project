// rentalRoutes.js
const express = require('express');
const rentalController = require('../Controllers/rentalController');

const router = express.Router();

// Routes for Rentals
router.get('/', rentalController.getAllRentals);
router.get('/:id', rentalController.getRentalById);
router.post('/', rentalController.createRental);
router.put('/:id', rentalController.updateRental);
router.delete('/:id', rentalController.deleteRental);

module.exports = router;
