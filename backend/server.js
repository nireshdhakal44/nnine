const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
