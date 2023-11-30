const BASE_URL = 'http://localhost:3001/api'; 


// Function to fetch country data from the backend
const fetchCountryData = async (countryName) => {
  try {
    // Encodes the country name to ensure the URL is properly formatted
    const response = await fetch(`${BASE_URL}/countries/${encodeURIComponent(countryName)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // This should be the data returned from the REST Countries API
  } catch (error) {
    console.error("Could not fetch country data:", error);
    // Handle errors
    throw error;
  }
};

export { fetchCountryData };