// Admin.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaUser, FaChartBar, FaCog } from 'react-icons/fa';
import { LineChart, PieChart } from 'react-chartkick';
import 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-page">
      <Header />
      <main>
        <section className="dashboard">
          <h2><FaChartBar /> Dashboard</h2>
          <p>Welcome to the admin panel of Selam Car Rental. Here you can manage your cars, users, statistics, and settings.</p>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>Cars</h3>
              <p>You have 50 cars in your fleet.</p>
              <Link to="/cars"><FaCar /> Manage Cars</Link>
            </div>
            <div className="dashboard-card">
              <h3>Users</h3>
              <p>You have 1000 registered users.</p>
              <Link to="/users"><FaUser /> Manage Users</Link>
            </div>
            <div className="dashboard-card">
              <h3>Add Cars</h3>
              <p>You have 50 cars in your fleet.</p>
              <Link to="/addcars"><FaCar /> Add Cars</Link>
            </div>
            <div className="dashboard-card">
              <h3>Add Users</h3>
              <p>You have 1000 registered users.</p>
              <Link to="/addusers"><FaUser /> Add Users</Link>
            </div>
            <div className="dashboard-card">
              <h3>Statistics</h3>
              <p>You have 500 bookings this month.</p>
              <Link to="/statistics"><FaChartBar /> View Statistics</Link>
            </div>
            <div className="dashboard-card">
              <h3>Settings</h3>
              <p>You can customize your website and profile.</p>
              <Link to="/settings"><FaCog /> Change Settings</Link>
            </div>
          </div>
        </section>
        <section className="statistics">
          <h2><FaChartBar /> Statistics</h2>
          <p>Here you can see the statistics of your car rental business.</p>
          {/* <div className="statistics-charts">
            <div className="statistics-chart">
              <h3>Revenue</h3>
              <LineChart data={{ "January": 10000, "February": 12000, "March": 15000, "April": 18000 }} />
              <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({ pathColor: '#f9c74f', textColor: '#333' })} />
            </div>
            <div className="statistics-chart">
              <h3>Bookings</h3>
              <LineChart data={{ "January": 200, "February": 250, "March": 300, "April": 350 }} />
              <CircularProgressbar value={70} text={`${70}%`} styles={buildStyles({ pathColor: '#90be6d', textColor: '#333' })} />
            </div>
            <div className="statistics-chart">
              <h3>Ratings</h3>
              <PieChart data={[["5 Stars", 400], ["4 Stars", 300], ["3 Stars", 200], ["2 Stars", 50], ["1 Star", 50]]} />
              <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ pathColor: '#277da1', textColor: '#333' })} />
            </div>
          </div> */}
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Admin;
