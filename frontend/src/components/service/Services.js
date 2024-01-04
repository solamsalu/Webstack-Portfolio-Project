// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <Header />
      <main>
        <section className="car-rental">
          <h2><FaCar /> Car Rental</h2>
          <p>We offer a wide range of cars for rent, from economy to luxury, at affordable prices. You can choose the car that suits your needs and budget, and book it online in a few clicks. You can also view the details and features of each car on our website.</p>
          <Link to="/cars">View Cars</Link>
        </section>
        <section className="location">
          <h2><FaMapMarkerAlt /> Location</h2>
          <p>We have multiple locations across Ethiopia, where you can pick up and drop off your rented car. You can also choose a different location for pick up and drop off, depending on your travel plans. You can find the nearest location to you on our website.</p>
          <Link to="/locations">Find Location</Link>
        </section>
        <section className="date">
          <h2><FaCalendarAlt /> Date</h2>
          <p>You can rent a car for any duration, from a few hours to several months. You can also change the date and time of your reservation online, if your plans change. You can check the availability and price of each car on our website.</p>
          <Link to="/booking">Book Now</Link>
        </section>
        <section className="driver">
          <h2><FaUserAlt /> Driver</h2>
          <p>If you need a driver for your rented car, we can provide you with a professional and experienced driver, who will take you to your destination safely and comfortably. You can also choose the driver's gender, language, and rating on our website.</p>
          <Link to="/drivers">Choose Driver</Link>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Services;
