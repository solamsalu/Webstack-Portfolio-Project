// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path');
// const multer = require('multer');
// const jwt = require('jsonwebtoken'); // Add JWT

// const carRoutes = require('./Routes/carRoutes');
// const userRoutes = require('./Routes/userRoutes');
// const rentalRoutes = require('./Routes/rentalRoutes');
// dotenv.config();

// mongoose.connect("mongodb://localhost:27017/selamCar", { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const app = express();
// const port = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Set up multer for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Authentication user
// const auth = (req, res, next) => {
//   const token = req.header('x-auth-token');

//   // Check if token exists
//   if (!token) {
//     return res.status(401).json({ message: 'No token, authorization denied' });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Add user from payload
//     req.user = decoded.user;

//     next();
//   } catch (e) {
//     res.status(400).json({ message: 'Token is not valid' });
//   }
// };

// // Use the authentication middleware for protected routes
// app.use('/api/cars', auth, carRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/rentals', auth, rentalRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   res.status(500).send({ error: err.message });
// });

// // Route for handling file uploads
// app.post('/api/upload', upload.single('image'), (req, res) => {
//   // Access the uploaded file using req.file
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }

//   // Do something with the file, for example, save it to MongoDB
//   // const image = req.file.buffer.toString('base64');
//   // Save to MongoDB or perform other actions as needed

//   res.status(200).send('File uploaded successfully.');
// });

// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });


//server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
// const authRoutes = require('./Routes/authRoutes');
// const { auth } = require('./Middleware/auth');
const carRoutes = require('./Routes/carRoutes');
const userRoutes = require('./Routes/userRoutes')
const rentalRoutes = require('./Routes/rentalRoutes');
dotenv.config();

mongoose.connect("mongodb://localhost:27017/selamCar", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/cars', carRoutes); // Protected car routes
app.use('/api/users', userRoutes);
app.use('/api/rentals', rentalRoutes);

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
