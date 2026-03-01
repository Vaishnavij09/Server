const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Root route 
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "home.html"));
});

// Home route
app.get("/home", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "home.html"));
});

// About route
app.get("/about", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "aboutus.html"));
});

// Contact route
app.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "webpages", "contactus.html"));
});

// 404 handler (KEEP LAST)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "webpages", "error.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
