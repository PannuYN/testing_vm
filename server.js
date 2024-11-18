const express = require('express');
const app = express();
const port = 3000; // You can change the port if needed

// Simple route to test
app.get('/', (req, res) => {
    res.send('Hello, your VM public IP address works!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
