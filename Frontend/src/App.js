import React, { useState } from 'react';
import Layout from './Components/Layout/Layout';
import SearchInput from './Components/SearchInput/SearchInput'; 
import CountryInfoDisplay from './Components/CountryInfoDisplay/CountryInfoDisplay'; 
import './App.css';
import { fetchCountryData } from './Context/CountryService'; 

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
      {loading ? <p>Loading...</p> : <CountryInfoDisplay countryData={countryData} />}
      {error && <p>{error}</p>}
    </Layout>
  );  
}

export default App;
