// Import Express
const express = require('express');
const app = express();

// Define the port
const port = 3000;

// Dynamic GET route with route parameter and query parameter
// Example: /welcome/Julian?role=Admin
app.get('/welcome/:username', (req, res) => {
    // Extract route parameter
    const username = req.params.username;

    // Extract query parameter
    const role = req.query.role;

    // Check if role is provided
    if (!role) {
        return res.send(`Welcome ${username}, but your role is not specified.`);
    }

    // Send personalized response
    res.send(`Welcome ${username}, your role is ${role}`);
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
});
