// const express = require('express');
// const carController = require('../Controllers/carController');

// const router = express.Router();
// router.get('/', carController.getAllCars);

// // Routes for Cars
// // router.get('/:id', carController.getCarById);
// router.get('/:carName', carController.getCarByName);
// router.post('/', carController.createCar);
// router.put('/:id', carController.updateCar);
// router.delete('/:id', carController.deleteCar);

// module.exports = router;

const express = require('express');
const router = express.Router();
const carController = require('../Controllers/carController');
const multer = require('multer'); // Import multer

// Your storage configuration (you can adjust it as needed)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', carController.getAllCars);
router.get('/:id', carController.getCarById);
router.get('/name/:carName', carController.getCarByName);
router.post('/', carController.createCar);
router.post('/', upload.single('image'), carController.createCar);

router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
