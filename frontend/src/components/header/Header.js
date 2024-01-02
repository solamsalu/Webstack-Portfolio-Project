// // Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header>
//       <div>
//         <h1>Selam Car Rental</h1>
//         <p>The Best Way to Travel</p>
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/cars">Cars</Link>
//         <Link to="/addcars">Locations</Link>
//         <Link to="/users">Admin</Link>
//         <Link to="/addusers">Services</Link>
//         <Link to="/about">About</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css'; // Import the Header.css file

const Header = ({ title, subtitle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/addcars">Locations</Link>
        <Link to="/users">Admin</Link>
        <Link to="/addusers">Services</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>
        <h1>Selam Car Rental</h1>
        <p>The Best Way to Travel</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;


