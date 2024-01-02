import React from 'react';
import { Link } from 'react-router-dom';
// import CarList from './CarList';

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <h1>Selam Car Rental</h1>
          <p>The Best Way to Travel</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </nav>
      </header>

      <section>
        <div>
          <h2>Make Your Journey Memorable</h2>
          <p>Rent a car and explore your dream destinations at your own pace.</p>
          <Link to="/login">Login or Signup</Link>
        </div>
      </section>

      <section>
        <h2>Featured Cars</h2>
        {/* <CarList /> */}
      </section>

      <section>
        <h2>Benefits and Features</h2>
        <div>
          <h3>Safe and Reliable</h3>
          <p>Our cars undergo regular maintenance and safety checks to ensure your peace of mind during your journey.</p>
        </div>
        <div>
          <h3>Wide Selection of Cars</h3>
          <p>Choose from a diverse range of cars, including sedans, SUVs, luxury vehicles, and more, to suit your needs and preferences.</p>
        </div>
        <div>
          <h3>Affordable Prices</h3>
          <p>We offer competitive prices and flexible rental options, ensuring you get the best value for your money.</p>
        </div>
      </section>

      <section>
        <h2>What Our Customers Say</h2>
        {/* Customer testimonials go here */}
      </section>

      <footer>
        <p>Selam Car Rental &copy; 2023 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
