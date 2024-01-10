// // CarList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DeleteCar from './DeleteCar';
// import './CarList.css';

// const CarList = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Make a GET request to fetch all cars
//     axios.get('http://localhost:3001/api/cars')
//       .then(response => {
//         setCars(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching cars:', error);
//       });
//   }, []);

//   const handleDeleteCar = (deletedCarId) => {
//     // Remove the deleted car from the car list
//     setCars(prevCars => prevCars.filter(car => car._id !== deletedCarId));
//   };

//   // Assuming car has properties like name, price, and description
//   return (
//     <div>
//       <h2>Car s List</h2>
//       {cars.map(car => (
//         <div key={car._id}>
//           <h3>{car.name}</h3>
//           <p>Price: {car.price}</p>
//           <p>Description: {car.description}</p>
//           <DeleteCar car={car} onDelete={handleDeleteCar} />
//         </div>
//       ))}
//     </div>
//   );

// };

// export default CarList;

// // CarList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddRental from './AddRental';
// import DeleteCar from './DeleteCar';
// import './CarList.css';

// const CarList = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Make a GET request to fetch all cars
//     // axios.get('http://localhost:3001/api/cars')
//     const headers = {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     };

//     axios.get('http://localhost:3001/api/cars', { headers })
//       .then(response => {
//         setCars(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching cars:', error);
//       });
//   }, []);

//   const handleDeleteCar = async (deletedCarId) => {
//     try {
//       // Make a DELETE request to delete the car
//       await axios.delete(`http://localhost:3001/api/cars/${deletedCarId}`);
//       // Remove the deleted car from the car list
//       setCars(prevCars => prevCars.filter(car => car._id !== deletedCarId));
//     } catch (error) {
//       console.error('Error deleting car:', error);
//     }
//   };

//   // Assuming car has properties like name, price, description, and image
//   return (
//     <div className="car-list"> {/* Apply the new CSS class to the container */}
//       {cars.map(car => (
//         <div key={car._id} className="car-card">
//           <img className="car-image" src={`data:image/jpeg;base64,${car.image}`} alt={car.name} />
//           <div className="car-details">
//             <h3>{car.name}</h3>
//             <p>Price: {car.price}</p>
//             <p>Description: {car.description}</p>
//             <AddRental car={car} />
//             <DeleteCar car={car} onDelete={handleDeleteCar} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CarList;

// CarList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteCar from './DeleteCar';
import './CarList.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all cars
    axios.get('http://localhost:3001/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleDeleteCar = async (deletedCarId) => {
    try {
      // Make a DELETE request to delete the car
      await axios.delete(`http://localhost:3001/api/cars/${deletedCarId}`);
      // Remove the deleted car from the car list
      setCars(prevCars => prevCars.filter(car => car._id !== deletedCarId));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car._id} className="car-card">
          <img className="car-image" src={`data:image/jpeg;base64,${car.image}`} alt={car.name} />
          <div className="car-details">
            <h3>{car.name}</h3>
            <p>Price: {car.price}</p>
            <p>Description: {car.description}</p>
            <DeleteCar car={car} onDelete={handleDeleteCar} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;



