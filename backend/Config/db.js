const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
   try {
      await mongoose.connect("mongodb://localhost:27017/selamCar", {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
   } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1); // Exit the process if unable to connect to the database
   }
};

module.exports = connectDB;
  