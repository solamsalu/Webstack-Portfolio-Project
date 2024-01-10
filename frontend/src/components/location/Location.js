// Location.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Location.css';

const Location = () => {
  return (
    <div className="location-page">
      {/* <Header /> */}
      <main>
        <section className="location-intro">
          <h2><FaMapMarkerAlt /> Location</h2>
          <p>We have multiple locations across Ethiopia, where you can pick up and drop off your rented car. You can also choose a different location for pick up and drop off, depending on your travel plans. You can find the nearest location to you on our map or on our list of towns.</p>
          <Link to="/carlist">Book Now</Link>
        </section>
        <section className="location-map">
          <h2>Map</h2>
          <p>Here you can see the map of Ethiopia and the locations of our car rental offices. You can zoom in and out, and click on the markers to see the address and contact information of each office.</p>
          <img src="map.png" alt="map of Ethiopia with car rental locations" /> // Add the map image
        </section>
        <section className="location-list">
          <h2>List of Towns</h2>
          <p>Here you can see the list of towns where we have our car rental offices. You can click on the name of each town to see more details and photos of the office.</p>
          <ul>
            <li><Link to="/addis-ababa">Addis Ababa</Link></li>
            <li><Link to="/bahir-dar">Bahir Dar</Link></li>
            <li><Link to="/dire-dawa">Dire Dawa</Link></li>
            <li><Link to="/hawassa">Hawassa</Link></li>
          </ul>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Location;
