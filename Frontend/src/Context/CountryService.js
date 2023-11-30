const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://165.22.113.31:3001/api';

// Function to fetch country data from the backend
const fetchCountryData = async (countryName) => {
  try {
    const response = await fetch(`${BASE_URL}/countries/${encodeURIComponent(countryName)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch country data:", error);
    throw error;
  }
};

export { fetchCountryData };
