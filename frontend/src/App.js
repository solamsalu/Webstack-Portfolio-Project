// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
// import HomeContent from './components/homeContent/HomeContent';
// import Services from './components/service/Services';
// import Admin from './components/admin/Admin';
// // import BenefitsSection from './components/benefitsSection/BenefitsSection';
// import Footer from './components/footer/Footer';
// import CarList from './components/CarList';
// import UserList from './components/UserList';
// import AddUser from './components/AddUser';
// // import CarList from './components/CarList';
// // import RentalList from './components/RentalList';
// // import AddRental from './components/AddRental';
// import AddCar from './components/AddCar';
// import Location from './components/location/Location';
// import Car from './components/car/Car';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className='App'>
//         <Header />
//         <Routes>
//           <Route path="/services" element={<Services />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path='/locations' element={<Location />} />
//           <Route path="/addcars" element={<AddCar />} />
//           <Route path="/addusers" element={<AddUser />} />
//           {/* <Route path='/addrentals' element={<AddRental />} /> */}
//           <Route path="/users" element={<UserList />} />
//           <Route path='/car' element={<Car />} />
//           {/* <Route path='/rentals' element={<RentalList />} /> */}
//           <Route path="/cars" element={<CarList />} />
//         </Routes>
//         {/* <Services /> */}
//         {/* <CarList /> */}
//         {/* <AddCar /> */}
//         <HomeContent />
//         {/* <BenefitsSection /> */}
//         <Footer />
//       </div>

//     </Router>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home';
import Services from './components/service/Services';
import Admin from './components/admin/Admin';
import Footer from './components/footer/Footer';
import CarList from './components/CarList';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import AddCar from './components/AddCar';
import Location from './components/location/Location';
import Car from './components/car/Car';
import About from './components/about/About';
import './App.css';
import HomeContent from './components/homeContent/HomeContent';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/locations' element={<Location />} />
          <Route path='/about' element={<About />} />
          <Route path="/addcars" element={<AddCar />} />
          <Route path="/addusers" element={<AddUser />} />
          <Route path="/users" element={<UserList />} />
          <Route path='/car' element={<Car />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
