const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

// Initialize the Express app
const app = express();

// Apply cors middleware
app.use(cors());

// Define routes for the API
app.get('/api/countries/:countryName', async (req, res) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching country data: ", error);
    res.status(500).send(`Error fetching country data: ${error.message}`);
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../Frontend/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
