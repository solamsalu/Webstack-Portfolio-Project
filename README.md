# 📌 Selam Car Rental Website

Selam Car Rental Website is a full-stack MERN application designed for car rental, integrating essential dependencies like Redux Toolkit, Axios, React, express, React Router, and Mongodb.

## 🔍 Table of Contents

- [📝 Project Summary](#-project-summary)
- [💻 Stack](#-stack)
- [⚙️ Setting Up](#-setting-up)
- [🚀 Run Locally](#-run-locally)

## 📝 Project Summary

Selam Car Rental is a comprehensive car rental platform with distinct directories and components in the client-side and server-side codebase:

- **client/src**: Main source code for the client-side application.
- **client/src/components**: Reusable UI components reside here.
- **client/src/features**: Feature-specific components and logic.
- **client/src/pages**: Different pages of the application.
- **client/src/utils**: Utility functions and helper methods.
- **server/controllers**: Implements the logic for handling HTTP requests.
- **server/models**: Defines the data models used by the server.

## 💻 Stack

- [reduxjs/toolkit](https://redux-toolkit.js.org/): Library simplifying Redux state management.
- [stripe/react-stripe-js](https://github.com/stripe/react-stripe-js): React components for integrating Stripe payments.
- [axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [react](https://reactjs.org/): JavaScript library for building user interfaces.
- [react-dom](https://reactjs.org/docs/react-dom.html): Provides the DOM-specific methods for React.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): Declarative routing for React applications.

## ⚙️ Setting Up

#### Environment Variables

To run this project, you need to add the following environment variables to your .env file in the server folder:

- `JWT_SECRET`
- `MONGO_URI`

## 🚀 Run Locally

1. **Clone the Rent a Car repository:**
   ```sh
   git clone https://github.com/solamsalu/Webstack-Portfolio-Project.git
   ```

````
2.For the backend, navigate to the "server" directory:
```bash
cd backend
npm install
nodemon server.js
````

3.For the frontend, navigate to the "client" directory:

```bash
cd frontend
npm install
npm start
```
