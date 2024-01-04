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
import React, { useLayoutEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css'; 
import { FaCar, FaMapMarkerAlt, FaUserCog, FaTools, FaInfoCircle, FaHome } from 'react-icons/fa'; 
import classnames from 'classnames'; // Import the classnames library
import { Helmet } from 'react-helmet'; // Import the react-helmet library
import  { useState } from 'react';


const Header = ({ title, subtitle }) => {
  const headerRef = useRef(null); // Create a reference to the header element
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const headerHeight = headerRef.current.getBoundingClientRect().height; // Get the header height
      if (offset > headerHeight) {
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
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={subtitle} />
      </Helmet>
      <header ref={headerRef} className={classnames({ scrolled })}> 
        <div className="logo-container">
          {/* <img src={process.env.PUBLIC_URL + '/img/logo/logo.png'} alt="logo" />  */}
          <h1>Selam Car Rental</h1>
          <p>The Best Way to Travel</p>
        </div>
        <nav>
          <NavLink exact to="/" activeClassName="active"><FaHome /> Home</NavLink> 
          <NavLink to="/car" activeClassName="active"><FaCar /> Cars</NavLink>
          <NavLink to="/locations" activeClassName="active"><FaMapMarkerAlt /> Locations</NavLink> 
          <NavLink to="/admin" activeClassName="active"><FaUserCog /> Admin</NavLink>
          <NavLink to="/services" activeClassName="active"><FaTools /> Services</NavLink>
          <NavLink to="/about" activeClassName="active"><FaInfoCircle /> About</NavLink>
        </nav>
      </header>
    </>
  );
};
 
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;



