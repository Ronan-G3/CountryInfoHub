const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/countries/:countryName', async (req, res) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${req.params.countryName}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching country data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
