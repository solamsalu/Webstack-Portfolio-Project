import React from 'react';

const rentcar = ({ car, onRent }) => {
  return (
    <div>
      <h2>{rentcar.name}</h2>
      <p>{rentcar.description}</p>
      <p>{rentcar.price}</p>
      {/* Remove the Delete Now button */}
      {/* <button onClick={() => onDelete(car.id)}>Delete Now</button> */}
      {/* Add the Rent Now button */}
      <button onClick={() => onRent(car.id)}>Rent Now</button>
    </div>
  );
};

export default rentcar;
