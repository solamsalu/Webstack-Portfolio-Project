import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaFilter, FaSort } from 'react-icons/fa';

import './Car.css';

const Car = () => {
   return (
      <div className="car-page">
         <main>
            <section className="car-filter">
               <h2><FaFilter /> Filter</h2>
               <p>You can filter the cars by type, price, rating, and availability.</p>
               <div className="car-filter-options">
                  <div className="car-filter-option">
                     <label htmlFor="type">Type</label>
                     <select id="type" name="type">
                        <option value="all">All</option>
                        <option value="suv">SUV</option>
                        <option value="sedan">Sedan</option>
                        <option value="luxury">Luxury</option>
                        <option value="hatchback">Hatchback</option>
                        <option value="minivan">Minivan</option>
                     </select>
                  </div>
                  <div className="car-filter-option">
                     <label htmlFor="price">Price</label>
                     <select id="price" name="price">
                        <option value="all">All</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                     </select>
                  </div>
                  <div className="car-filter-option">
                     <label htmlFor="rating">Rating</label>
                     <select id="rating" name="rating">
                        <option value="all">All</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                     </select>
                  </div>
                  <div className="car-filter-option">
                     <label htmlFor="availability">Availability</label>
                     <select id="availability" name="availability">
                        <option value="all">All</option>
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                     </select>
                  </div>
               </div>
            </section>
            <section className="car-sort">
               <h2><FaSort /> Sort</h2>
               <p>You can sort the cars by name, price, rating, and availability.</p>
               <div className="car-sort-options">
                  <div className="car-sort-option">
                     <label htmlFor="name">Name</label>
                     <select id="name" name="name">
                        <option value="asc">A to Z</option>
                        <option value="desc">Z to A</option>
                     </select>
                  </div>
                  <div className="car-sort-option">
                     <label htmlFor="price">Price</label>
                     <select id="price" name="price">
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                     </select>
                  </div>
                  <div className="car-sort-option">
                     <label htmlFor="rating">Rating</label>
                     <select id="rating" name="rating">
                        <option value="high">High to Low</option>
                        <option value="low">Low to High</option>
                     </select>
                  </div>
                  <div className="car-sort-option">
                     <label htmlFor="availability">Availability</label>
                     <select id="availability" name="availability">
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                     </select>
                  </div>
               </div>
            </section>
            <section className="car-list">
               <h2><FaCar /> Cars</h2>
               <p>Here you can see the list of cars that match your criteria. You can click on the name of each car to see more details and photos of the car.</p>
               <div className="car-cards">
                  <div className="car-card">
                     <img src="suv1.png" alt="suv car" /> // Add the car image
                     <h3><Link to="/suv1">SUV 1</Link></h3>
                     <p>Price: $100/day</p>
                     <p>Rating: 4.5 stars</p>
                     <p>Availability: Available</p>
                  </div>
                  <div className="car-card">
                     <img src="sedan1.png" alt="sedan car" /> // Add the car image
                     <h3><Link to="/sedan1">Sedan 1</Link></h3>
                     <p>Price: $80/day</p>
                     <p>Rating: 4 stars</p>
                     <p>Availability: Available</p>
                  </div>
                  <div className="car-card">
                     <img src="luxury1.png" alt="luxury car" /> // Add the car image
                     <h3><Link to="/luxury1">Luxury 1</Link></h3>
                     <p>Price: $200/day</p>
                     <p>Rating: 5 stars</p>
                     <p>Availability: Unavailable</p>
                  </div>
            // Add more car cards as needed
               </div>
            </section>
         </main>
      </div>
   );
};

export default Car;