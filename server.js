const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to serve static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Route: Home
app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "home.html"));
});

// Route: About
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "aboutus.html"));
});

// Route: Contact
app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "contactus.html"));
});

// 404 Error Handling (invalid routes)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "webpages", "error.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
