import React, { useState } from 'react';
import Layout from './Components/Layout/Layout';
import SearchInput from './Components/SearchInput/SearchInput';
import CountryInfoDisplay from './Components/CountryInfoDisplay/CountryInfoDisplay';
import { fetchCountryData } from './Context/CountryService';  
import Spinner from './Components/Spinner/Spinner.js';

// The App component serves as the root of the application.
function App() {
  // State variables to store country data, loading status, and any error messages
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // handleSearch is called when a search is initiated from the SearchInput component
  const handleSearch = async (countryName) => {
    setLoading(true); // Begin loading
    setError(''); // Reset any previous errors

    try {
      // Fetch the country data from the server
      const data = await fetchCountryData(countryName);
      setCountryData(data); // Update state with the fetched data
    } catch (err) {
      // If an error occurs, set the error message to state
      setError('Failed to fetch country data. Please try again.');
      console.error(err); // Also log the error to the console
    } finally {
      setLoading(false); // End loading regardless of the outcome
    }
  };

  // The layout includes a search input, spinner while loading, and the country info display
  return (
    <Layout>
      <SearchInput onSearch={handleSearch} />
      {loading ? <Spinner /> : <CountryInfoDisplay countryData={countryData} />}
      {error && <p>{error}</p>} {/* Display any error messages */}
    </Layout>
  );
}

export default App;
