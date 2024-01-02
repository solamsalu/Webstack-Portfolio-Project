// // src/App.js
// import React from 'react';
// import UserList from './components/UserList';
// import AddUser from './components/AddUser';
// import CarList from './components/CarList'; // Import CarList component
// import RentalList from './components/RentalList'; // Import RentalList component
// import AddRental from './components/AddRental';
// import AddCar from './components/AddCar';

// function App() {
//   return (
//     <div>
//       <h1>Your Car Rental Company</h1>
//       <UserList />
//       <AddUser />
//       <CarList /> {/* Include CarList component */}
//       <AddCar />
//       <RentalList /> {/* Include RentalList component */}
//       <AddRental />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// // import CarList from './components/CarList';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/cars" component={CarList} /> */}
//         {/* Add more routes for other pages */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomeContent from './components/homeContent/HomeContent';
// import BenefitsSection from './components/benefitsSection/BenefitsSection';
import Footer from './components/footer/Footer';
import CarList from './components/CarList';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
// import CarList from './components/CarList';
// import RentalList from './components/RentalList';
// import AddRental from './components/AddRental';
import AddCar from './components/AddCar';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/addcars" element={<AddCar />} />
          <Route path="/addusers" element={<AddUser />} />
          {/* <Route path='/addrentals' element={<AddRental />} /> */}
          <Route path="/users" element={<UserList />} />
          {/* <Route path='/rentals' element={<RentalList />} /> */}
          <Route path="/cars" element={<CarList />} />
        </Routes>
        <HomeContent />

        {/* <BenefitsSection /> */}
        <Footer />
      </div>

    </Router>
  );
};


export default App;

