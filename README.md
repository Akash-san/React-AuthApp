# Passport.js Authentication Web Application

This is a web application that utilizes Passport.js for authentication with various social logins (Google, GitHub, Facebook, and Amazon). The backend is built with Node.js and Express, while the frontend is a static webpage developed using React.

![Screenshot (441)](https://github.com/Akash-san/React-AuthApp/assets/98251561/17a8059a-f855-4928-97a9-767c0cabddb5)


![Screenshot (442)](https://github.com/Akash-san/React-AuthApp/assets/98251561/88a2fc4a-b0e3-4bff-aae8-895f53ac1f7c)


## Features

- User authentication with various social logins.
- Protected routes for authenticated users.
- Static webpage built with React.
- Backend server using Node.js and Express.
- Uses Passport.js for authentication strategies.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

- Node.js and npm for the backend.
- React and npm for the frontend.


## Backend

The backend of this web application is built using Node.js and Express. It uses Passport.js for authentication with various social login providers like Google, GitHub, Facebook, and Amazon. Additionally, it utilizes `cookie-session` for managing user sessions and `cors` for handling Cross-Origin Resource Sharing.

### Dependencies

- [Express](https://expressjs.com/): A fast, unopinionated, and minimalist web framework for Node.js.
- [Passport.js](http://www.passportjs.org/): Simple, unobtrusive authentication for Node.js.
- [cookie-session](https://www.npmjs.com/package/cookie-session): Express middleware for cookie sessions.
- [cors](https://www.npmjs.com/package/cors): Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Setup

1. **Installation**: Navigate to the `backend` directory and install the required dependencies using npm:

   ```bash
   cd backend
   npm install ```
### Configuration:

Create a `.env` file in the backend directory to store your environment variables.

Add the following configuration variables to the .env file:

```
Copy code
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
AMAZON_APP_ID=your_amazon_app_id
AMAZON_APP_SECRET=your_amazon_app_secret

```

### Starting the Server: Start the backend server by running:

```bash
Copy code
npm start
The server will start on port 5000.
```

Usage: The backend server will be ready to handle authentication requests from the frontend application.

The backend provides the necessary authentication endpoints and handles the authentication logic using Passport.js and the specified strategies for Google, GitHub, Facebook, and Amazon logins. It also manages user sessions securely using cookie-session.

## Frontend
The frontend of the web application is built using React, a popular JavaScript library for building user interfaces. It includes components for handling authentication and accessing protected routes.

### Dependencies
React: A JavaScript library for building user interfaces.
axios: A promise-based HTTP client for making requests to the backend API.
Setup
**Installation:** Navigate to the frontend directory and install the required dependencies using npm:
```
bash
Copy code
cd frontend
npm install
```

**Starting the Development Server:** Start the React development server by running:
```
bash
Copy code
npm start
```
The development server will start on port 3000 and open the application in your default web browser.

**Usage:** Access the application in your web browser at http://localhost:3000. Click on the login buttons to use the social login providers.

## Temporary Cloudflare Tunnel Link

During development, you can access a temporary version of this application hosted on Cloudflare. This allows you to test and interact with the application as if it were live on the internet.

**Temporary Link:** [https://paper-james-behavioral-assisted.trycloudflare.com](https://paper-james-behavioral-assisted.trycloudflare.com)

**Important**: Please note that this link will be active as long as my local server (your laptop) is running and connected to Cloudflare using the tunnel. It provides a convenient way to test and share your work in progress with others before deploying it to a production environment.


### Acknowledgments
Passport.js for authentication.
React for the frontend.
Express for the backend.

