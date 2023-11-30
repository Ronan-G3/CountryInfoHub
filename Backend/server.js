const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Define the base URL for the REST Countries API
const API_BASE_URL = process.env.API_BASE_URL || 'https://restcountries.com/v3.1';
console.log('API_BASE_URL:', process.env.API_BASE_URL);

// Define route for getting country information by name
app.get('/api/countries/:countryName', async (req, res) => {
  try {
    // Construct the full API URL including the country name
    const fullApiUrl = `${API_BASE_URL}/name/${req.params.countryName}`;
    const response = await axios.get(fullApiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching country data: ", error);
    res.status(500).send('Error fetching country data');
  }
});

// Serve static files from the React app in production
const path = require('path');
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
