const express = require('express');
const cors = require('cors'); // Make sure cors is installed: npm install cors
const axios = require('axios');

// Initialize the Express app
const app = express();

// Apply cors middleware
app.use(cors());

// Define routes
app.get('/api/countries/:countryName', async (req, res) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching country data: ", error);
    res.status(500).send(`Error fetching country data: ${error.message}`);
  }
});



// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});