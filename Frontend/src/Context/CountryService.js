// Configuration for the API's base URL; defaults to a specific URL if not found in environment variables
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://165.22.113.31:3001/api';

// Async function to fetch country data from the backend based on the country name provided
const fetchCountryData = async (countryName) => {
  try {
    // Encode the country name to ensure the URL is correctly formatted
    const response = await fetch(`${BASE_URL}/countries/${encodeURIComponent(countryName)}`);
    
    // If the response is not ok, throw an error
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response and return the country data
    const data = await response.json();
    return data;
  } catch (error) {
    // Log and re-throw any errors that occur during the fetch
    console.error("Could not fetch country data:", error);
    throw error;
  }
};

export { fetchCountryData };
