// // AddCar.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddCar = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');

//   const handleSubmit = () => {
//     // Make a POST request to add a new car
//     axios.post('http://localhost:3001/api/cars', { name, description, price, image })
//       .then(response => {
//         console.log('Car added successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error adding car:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Add Car</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
//         <label>Description: <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
//         <label>Price: <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></label>
//         <label>Image: <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /></label>
//         <button type="submit">Add Car</button>
//       </form>
//     </div>
//   );
// };

// export default AddCar;


// CarForm.js (Assuming you have a form component for adding a car)
// import React, { useState } from 'react';
// import axios from 'axios';

// const uploadImage = async (imageFile) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(imageFile);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// const AddCar = () => {
//   const [carData, setCarData] = useState({
//     name: '',
//     description: '',
//     price: 0,
//     image: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCarData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageInputChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) { return; }
//     const base64Image = await uploadImage(file);
//     setCarData((prevData) => ({ ...prevData, image: base64Image }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post('http://localhost:3001/api/cars', carData);
//     if (response.status === 201) {
//       console.log('Car added successfully!');
//       setCarData({ name: '', description: '', price: 0, image: null });
//     } else {
//       console.error('Failed to add car. Server returned:', response.status, response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name:</label>
//       <input type="text" name="name" value={carData.name} onChange={handleInputChange} required />
//       <label>Description:</label>
//       <textarea name="description" value={carData.description} onChange={handleInputChange} required />
//       <label>Price:</label>
//       <input type="number" name="price" value={carData.price} onChange={handleInputChange} required />
//       <label>Image:</label>
//       <input type="file" accept="image/*" onChange={handleImageInputChange} required />
//       <button type="submit">Add Car</button>
//     </form>
//   );
// };

// export default AddCar;


import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    price: 0,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (!file) { return; }
    setCarData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', carData.name);
    formData.append('description', carData.description);
    formData.append('price', carData.price);
    formData.append('image', carData.image);

    const response = await axios.post('http://localhost:3001/api/cars', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 201) {
      console.log('Car added successfully!');
      setCarData({ name: '', description: '', price: 0, image: null });
    } else {
      console.error('Failed to add car. Server returned:', response.status, response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={carData.name} onChange={handleInputChange} required />
      <label>Description:</label>
      <textarea name="description" value={carData.description} onChange={handleInputChange} required />
      <label>Price:</label>
      <input type="number" name="price" value={carData.price} onChange={handleInputChange} required />
      <label>Image:</label>
      <input type="file" accept="image/*" onChange={handleImageInputChange} required />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
