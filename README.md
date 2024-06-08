# UrbanNex Real Estate Website

![License](https://img.shields.io/badge/license-ISC-blue.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Overview

UrbanNex is a comprehensive real estate website developed using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to search for properties, view property details, and manage user authentication and state persistency with Firebase and Redux. The website features a modern, responsive design powered by TailwindCSS and Swiper for smooth user interactions.

## Features

- **Property Listings**: Browse and search for properties.
- **Property Details**: View detailed information about each property.
- **User Authentication**: Secure user authentication using JWT and Firebase.
- **State Management**: Robust state management with Redux and Redux Persist.
- **Responsive Design**: Mobile-friendly, responsive UI built with TailwindCSS.
- **Smooth Navigation**: Enhanced user experience with Swiper for carousels.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/Aadityakesarwani/UrbanNexx
    ```

2. **Set up the server**
    - Navigate to the root directory and install server dependencies.
    ```bash
    npm install
    ```

    - Create a `.env` file in the root directory and add your environment variables.
    ```bash
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

3. **Set up the client**
    - Navigate to the `client` directory and install client dependencies and create a `.env` file in it.
    ```bash
    cd client
    npm install
    
    VITE_FIREBASE_API_KEY = "your_vite_api_key"
    ```

4. **Run the development server**
    - In the root directory, run the following command to start both the client and server.
    ```bash
    npm run dev
    ```

## Usage

- **Browse Properties**: Visit the homepage to browse the latest property listings.
- **Search Properties**: Use the search functionality to find specific properties.
- **View Property Details**: Click on a property to view more details, including images, price, and description.
- **User Authentication**: Sign up or log in to save favorite properties and access additional features.
- **List Properties**: If you want to rent, sell properites. you can list it on urbannex.


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or feature additions.

1. **Fork the repository**
2. **Create your feature branch**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**
    ```bash
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a new Pull Request**


