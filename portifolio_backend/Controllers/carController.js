// controllers/carController.js
const Car = require('../Models/Car');

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const getCarById = async (req, res) => {
  const carId = req.params.id;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(car);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const createCar = async (req, res) => {
  const { make, model, year, rentalPrice } = req.body;

  try {
    const newCar = new Car({ make, model, year, rentalPrice });
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const updateCar = async (req, res) => {
  const carId = req.params.id;
  const updatedCarData = req.body;

  try {
    const updatedCar = await Car.findByIdAndUpdate(carId, updatedCarData, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(updatedCar);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

const deleteCar = async (req, res) => {
  const carId = req.params.id;

  try {
    const deletedCar = await Car.findByIdAndDelete(carId);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(deletedCar);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
