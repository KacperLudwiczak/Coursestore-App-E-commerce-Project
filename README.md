# Coursestore 🎓

## Project Description

This is a comprehensive web application designed for **purchasing courses online**, built using **React.js** for the frontend and **ASP.NET Core** for the backend. The application leverages **SQL Lite** to store user and courses data, while **Material UI** ensures a responsive and visually appealing user interface. Additionally, **Stripe Service** is integrated to facilitate secure and efficient payment processing.

## Technologies Used

- **React.js**: Modern JavaScript library for building user interfaces.
- **ASP.NET Core**: A modern, high-performance backend framework for handling business logic, APIs, and data access.
- **Material UI**: A framework that provides pre-built UI components for building responsive and user-friendly interfaces.
- **Stripe Service**: A payment processing service integrated to handle transactions securely, including card payments and order completion.

## Features

- User Registration and Login (with authentication & authorization).
- Courses Catalog Management (Add, Update, Delete, View Books).
- Shopping Cart System (Add to Cart, View Cart, Remove from Cart).
- Secure Payment Integration (using **Stripe Service**).
- Order Management (Order Details).
- Responsive UI (Built with **Material UI**).

### Installation and Setup

1. **Backend (ASP.NET Core)**:
   - Navigate to the backend directory.
   - Run the following command:
     ```bash
     dotnet run
     ```
   - The application will start on the default port (e.g., `https://localhost:5001`).

2. **Frontend (React.js)**:
   - Navigate to the client-app folder.
   - Install dependencies by running:
     ```bash
     cd client
     ```
   - Install the required npm packages:
     ```bash
     npm install
     ```
   - Then tart the React development server:
     ```bash
     npm start
     ```
   - The app will be available at `http://localhost:4200`.

### System Requirements

- **Node.js** version 12+ (for React.js)
- **.NET SDK** version 5.0+ (for ASP.NET Core)
- **SQL Lite** as the database

### Author
- [Kacper Ludwiczak](https://github.com/KacperLudwiczak) - Software Developer
