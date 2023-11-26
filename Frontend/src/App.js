import React, { useState } from 'react';
import Layout from './Components/Layout/Layout';
import SearchInput from './Components/SearchInput/SearchInput';
import CountryInfoDisplay from './Components/CountryInfoDisplay/CountryInfoDisplay';
import { fetchCountryData } from './Context/CountryService';  
import Spinner from './Components/Spinner/Spinner.js';

function App() {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (countryName) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCountryData(countryName);
      setCountryData(data);
    } catch (err) {
      setError('Failed to fetch country data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Layout>
      <SearchInput onSearch={handleSearch} />
      {loading ? <Spinner /> : <CountryInfoDisplay countryData={countryData} />}
      {error && <p>{error}</p>}
    </Layout>
  );
}

export default App;
