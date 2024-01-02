// Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import Font Awesome icons
import { IconContext } from 'react-icons/lib'; // Import IconContext to style the icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Follow us</h3>
          <IconContext.Provider value={{ color: '#fff', size: '1.5rem' }}> {/* Set the color and size of the icons */}
            <ul>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </IconContext.Provider>
        </div>
        <div className="footer-contact">
          <h3>Contact us</h3>
          <p><strong>Address:</strong> 123 Street, Addis Ababa, Ethiopia</p>
          <p><strong>Phone:</strong> +251 111 222 333</p>
          <p><strong>Email:</strong> info@selamcarrental.com</p>
        </div>
        <div className="footer-newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form>
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Selam Car Rental © 2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

