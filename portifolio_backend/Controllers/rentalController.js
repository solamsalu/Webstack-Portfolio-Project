// controllers/rentalController.js
const Rental = require('../models/Rental');

const getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.status(200).json(rentals);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const getRentalById = async (req, res) => {
  const rentalId = req.params.id;

  try {
    const rental = await Rental.findById(rentalId);
    if (!rental) {
      return res.status(404).json({ message: 'Rental not found' });
    }
    res.status(200).json(rental);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const createRental = async (req, res) => {
  const { userId, carId, startDate, endDate } = req.body;

  try {
    const newRental = new Rental({ userId, carId, startDate, endDate });
    const savedRental = await newRental.save();
    res.status(201).json(savedRental);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const updateRental = async (req, res) => {
  const rentalId = req.params.id;
  const updatedRentalData = req.body;

  try {
    const updatedRental = await Rental.findByIdAndUpdate(rentalId, updatedRentalData, { new: true });
    if (!updatedRental) {
      return res.status(404).json({ message: 'Rental not found' });
    }
    res.status(200).json(updatedRental);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const deleteRental = async (req, res) => {
  const rentalId = req.params.id;

  try {
    const deletedRental = await Rental.findByIdAndDelete(rentalId);
    if (!deletedRental) {
      return res.status(404).json({ message: 'Rental not found' });
    }
    res.status(200).json(deletedRental);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = {
  getAllRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental,
  // Add more rental-related methods as needed
};
