# BlueHarvest Frontend

## Overview

The **BlueHarvest Frontend** is an Angular-based web application that interacts with the **BlueHarvest API** to allow users to:
- **Open a current account** for an existing customer.
- **View customer information**, including account balance and transactions.

This project is built using **Angular 19.1.6**.

## Features

- **Account Management**
  - Open a new current account for an existing customer.
  - Automatically process an initial deposit transaction if provided.

- **Customer Details**
  - Retrieve and display customer details such as:
    - Name
    - Surname
    - Accounts
    - Transaction history

## Technologies Used

- **Angular 19.1.6**
- **TypeScript**
- **Angular Services & HTTP Client**

## API Integration

The frontend communicates with the **BlueHarvest API** using RESTful HTTP calls.

### **API Endpoints Used**
- **Open Account**: `POST /api/account`
- **Get Customer Info**: `GET /api/customer/{customerId}`
- **Create Dummy Customers**: `POST /api/customer}`

## Setup & Installation

### **Prerequisites**
- [Node.js (Latest LTS)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### **Clone the Repository**
git clone https://github.com/aamena-bohra/BlueHarvestAPI-Frontend.git
cd blueharvest-frontend

**Install Dependencies**
npm install

**Run the Application**
ng serve

By default, the app runs at **http://localhost:4200/.**

**Environment Configuration**
Modify the src/environments/environment.ts file to configure the API base URL.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5053/api' // Update based on backend URL
};
