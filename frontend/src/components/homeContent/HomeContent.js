// HomeContent.js
import React from "react";
import "./HomeContent.css";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Selam Car Rental</h1>
        <p>Your journey begins with us</p>
        <Link to="/carlist" className="button">
          Book Now
        </Link>
      </div>
      <div className="featured">
        <h2>Featured Cars</h2>
        <div className="cards">
          <div className="cards">
            <div className="card">
              <img src="/img/dashboard/01.jpg" alt="Car 1" />
              <div className="card-info">
                <h3>Car 1</h3>
                <p>$50 per day</p>
                <Link to="/rental-form" className="button">
          Rent Now
        </Link>
              </div>
            </div>
            <div className="card">
              <img src="/img/dashboard/02.jpg" alt="Car 2" />
              <div className="card-info">
                <h3>Car 2</h3>
                <p>$60 per day</p>
                <Link to="/rental-form" className="button">
          Rent Now
        </Link>
              </div>
            </div>
            <div className="card">
              <img src="/img/dashboard/03.jpg" alt="Car 3" />
              <div className="card-info">
                <h3>Car 3</h3>
                <p>$70 per day</p>
                <Link to="/login" className="button">
          Rent Now
        </Link>
              </div>
              <p>
        {/* Already have an account? <Link to="/login">Login</Link> */}
      </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
// // HomeContent.js
// import React from "react";
// import "./homecss.css";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Carousel, Card } from "react-bootstrap";
// import { CardGroup } from "react-bootstrap";
// import { Chart, registerables } from "chart.js";

// // Register the controllers, elements, scales, and plugins of Chart.js
// Chart.register(...registerables);

// // Create a functional component that returns the home page content
// function HomeContent() {
//   // Use the useState hook to create a state variable for the chart data
//   const [chartData, setChartData] = React.useState({
//     // Specify the labels for the x-axis
//     labels: ["Car 1", "Car 2", "Car 3"],

//     // Specify the datasets for the chart
//     datasets: [
//       {
//         // Specify the label for the dataset
//         label: "Price per day",

//         // Specify the data for the dataset
//         data: [50, 60, 70],

//         // Specify the background color for the bars
//         backgroundColor: ["red", "green", "blue"],
//       },
//     ],
//   });

//   // Use the useRef hook to create a reference to the canvas element
//   const chartRef = React.useRef();

//   // Use the useEffect hook to create the chart after the component is mounted
//   React.useEffect(() => {
//     // Get the canvas context
//     const ctx = chartRef.current.getContext("2d");

//     // Create a new chart instance
//     const chart = new Chart(ctx, {
//       // Specify the type of chart
//       type: "bar",

//       // Specify the data for the chart
//       data: chartData,

//       // Specify the options for the chart
//       options: {
//         // Specify the title for the chart
//         title: {
//           display: true,
//           text: "Featured Cars",
//         },

//         // Specify the scales for the chart
//         scales: {
//           // Specify the scale for the y-axis
//           yAxes: [
//             {
//               // Specify the ticks for the y-axis
//               ticks: {
//                 // Specify the minimum value for the y-axis
//                 min: 0,

//                 // Specify the step size for the y-axis
//                 stepSize: 10,
//               },
//             },
//           ],
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="container">
//       // The rest of the code remains the same

//       // Add a canvas element where the chart will be rendered
//       <div className="chart">
//         <canvas ref={chartRef}></canvas>
//       </div>
//   <div className="container">
//       <Navbar bg="primary" expand="lg" sticky="top">
//         <Navbar.Brand style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: '#fff', fontSize: '2em' }} href="/">Car Rental</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link style={{ fontSize: '1.2em', color: '#fff', marginRight: '20px', transition: 'color 0.3s ease' }} href="/">Home</Nav.Link>
//             <Nav.Link style={{ fontSize: '1.2em', color: '#fff', marginRight: '20px', transition: 'color 0.3s ease' }} href="/cars">Cars</Nav.Link>
//             <Nav.Link style={{ fontSize: '1.2em', color: '#fff', marginRight: '20px', transition: 'color 0.3s ease' }} href="/about">About</Nav.Link>
//             <Nav.Link style={{ fontSize: '1.2em', color: '#fff', marginRight: '20px', transition: 'color 0.3s ease' }} href="/contact">Contact</Nav.Link>
//           </Nav>
//           <Nav className="ml-auto">
//             <Nav.Link style={{ fontSize: '1.2em', color: '#fff', transition: 'color 0.3s ease' }} href="/login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <div className="hero" style={{ marginTop: '20px', backgroundColor: '#f39c12' }}>
//         <Carousel>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/img/home/hero-1.png"
//               alt="First slide"
//             />
//             <Carousel.Caption style={{ textAlign: 'center', color: '#2c3e50' }}>
//               <h1 style={{ fontSize: '2.5em', marginBottom: '10px', fontFamily: 'Montserrat' }}>Welcome to Car Rental</h1>
//               <p style={{ fontSize: '1.2em', marginBottom: '20px', fontFamily: 'Roboto' }}>Your journey begins with us</p>
//               <Link to="/cars" className="button">
//                 Book Now
//               </Link>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/img/home/hero-2.png"
//               alt="Second slide"
//             />
//             <Carousel.Caption style={{ textAlign: 'center', color: '#2c3e50' }}>
//               <h1 style={{ fontSize: '2.5em', marginBottom: '10px', fontFamily: 'Montserrat' }}>Choose from a wide range of cars</h1>
//               <p style={{ fontSize: '1.2em', marginBottom: '20px', fontFamily: 'Roboto' }}>We have the best deals for you</p>
//               <Link to="/cars" className="button">
//                 Book Now
//               </Link>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="/img/home/hero-3.png"
//               alt="Third slide"
//             />
//             <Carousel.Caption style={{ textAlign: 'center', color: '#2c3e50' }}>
//               <h1 style={{ fontSize: '2.5em', marginBottom: '10px', fontFamily: 'Montserrat' }}>Enjoy a smooth and safe ride</h1>
//               <p style={{ fontSize: '1.2em', marginBottom: '20px', fontFamily: 'Roboto' }}>We take care of everything for you</p>
//               <Link to="/cars" className="button">
//                 Book Now
//               </Link>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//       <div className="featured" style={{ marginTop: '40px', textAlign: 'center' }}>
//         <h2 style={{ marginBottom: '20px', color: '#333' }}>Featured Cars</h2>
//         <CardGroup>
//           <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s', margin: '0 10px 20px', width: 'calc(33.33% - 20px)' }}>
//             <Card.Img variant="top" src="/img/dashboard/01.jpg" />
//             <Card.Body>
//               <Card.Title style={{ fontSize: '1.5em', marginBottom: '10px', fontFamily: 'Montserrat' }}>Car 1</Card.Title>
//               <Card.Text style={{ fontSize: '1.2em' }}>$50 per day</Card.Text>
//               <Link to="/rental-form" className="button">
//                 Rent Now
//               </Link>
//             </Card.Body>
//           </Card>
//           <Card style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', transition: '0.3s', margin: '0 10px 20px', width: 'calc(33.33% - 20px)' }}>
//             <Card.Img variant="top" src="/img/dashboard/01.jpg" />
//             <Card.Body>
//               <Card.Title style={{ fontSize: '1.5em', marginBottom: '10px', fontFamily: 'Montserrat' }}>Car 1</Card.Title>
//               <Card.Text style={{ fontSize: '1.2em' }}>$50 per day</Card.Text>
//               <Link to="/rental-form" className="button">
//                 Rent Now
//               </Link>
//             </Card.Body>
//           </Card>
//           {/* Add more Card components as needed */}
//         </CardGroup>
//       </div>
//       <footer className="footer" style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', backgroundColor: '#f8f9fa' }}>
//         <p style={{ fontSize: '1em', color: '#555' }}>&copy; 2024 Car Rental. All rights reserved.</p>
//       </footer>
//     </div>
//     </div>
//   );
// }

// export default HomeContent;


