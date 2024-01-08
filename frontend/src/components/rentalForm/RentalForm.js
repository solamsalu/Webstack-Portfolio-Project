// RentalForm.js
import React, { useState } from "react";
import "./RentalForm.css";

const RentalForm = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleRentalSubmit = () => {
    // Add your rental submission logic here
    console.log("Rental Form Submitted");
  };

  return (
    <div className="rental-form-container">
      <h2>Rental Form Page</h2>
      <form>
        <label>Pickup Date:</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
        />

        <label>Dropoff Date:</label>
        <input
          type="date"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
        />

        <label>Select Car:</label>
        {/* Add your car selection dropdown or other UI elements here */}
        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.target.value)}
        >
          <option value="">Select Car</option>
          <option value="car1">Car 1</option>
          <option value="car2">Car 2</option>
          <option value="car3">Car 3</option>
        </select>

        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="button" onClick={handleRentalSubmit}>
          Submit Rental
        </button>
      </form>
    </div>
  );
};

export default RentalForm;
