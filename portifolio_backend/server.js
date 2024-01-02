const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const cors = require('cors');
const carRoutes = require('./Routes/carRoutes');
const userRoutes = require('./Routes/userRoutes');
const rentalRoutes = require('./Routes/rentalRoutes');

dotenv.config();



// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS
app.use(cors());
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes 
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rentals', rentalRoutes);

// Error handling middleware
app.use((err, req, res, next) => { // Add this middleware to handle errors
   res.status(500).send({ error: err.message });
});

// Start the server
app.listen(port, () => {
   console.log(`Server is listening at http://localhost:${port}`);
});
