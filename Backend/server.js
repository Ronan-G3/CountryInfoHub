const express = require('express');
const cors = require('cors'); // Make sure cors is installed: npm install cors
const axios = require('axios');

// Initialize the Express app
const app = express();

// Apply cors middleware
app.use(cors());

const API_BASE_URL = process.env.API_BASE_URL || 'https://restcountries.com/v3.1';

// Define routes
app.get('/api/countries/:countryName', async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/name/${req.params.countryName}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching country data: ", error);
    res.status(500).send(`Error fetching country data: ${error.message}`);
  }
});

const path = require('path');
if (process.env.NODE_ENV === "production") {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}


// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});