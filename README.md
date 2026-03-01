# Web Server Project

## Project Overview
This project is an example of a simple HTTP Web Server using NodeJS and Express.
The web server manages multiple HTML web documents and serves those documents by proper routing and serving of static files. 

## How the Server Works

This web server is made using Node.js and Express.js.

- The server uses Express to handle HTTP requests.
- Static files like CSS are served using Express middleware (`express.static`).
- The server defines routes for different pages:
  - `/`         Serves the Home page
  - `/about`    Serves the About page
  - `/contact`  Serves the Contact page
- Each route sends an HTML file using `res.sendFile()`.
- If a user visits a route that does not exist, the server returns a custom 404 error page using middleware.
- The server uses a dynamic PORT (`process.env.PORT`) so it works both locally and on Render deployment.

## Deployed Project Link
https://server-rnyy.onrender.com

## Tech Stack
- Node.js
- Express.js
- HTML
- CSS

## How to Run Locally

1. Clone the repository
2. Run `npm install`
3. Run `node server.js`
4. Open http://localhost:3000 in your browser

## Screenshots

### Home Page (/)
[Home Page](screenshots/HomePage.png)

### About Page (/about)
[About Page](screenshots/AboutUs.png)

### Contact Page (/contact)
[Contact Page](screenshots/ContactUs.png)

### 404 Error Page (Invalid Route)
[404 Page](screenshots/404.png)
