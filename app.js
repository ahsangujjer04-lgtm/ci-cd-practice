const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello! CI/CD Pipeline Practice",
        status: "Application is running successfully",
        developer: "Ahsan"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

// Start the server only when this file is executed directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export the Express application for testing.
module.exports = app;