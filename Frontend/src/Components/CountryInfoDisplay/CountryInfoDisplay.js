import React from 'react';
import styles from './CountryInfoDisplay.module.css'; 

const CountryInfoDisplay = ({ countryData }) => {
  if (!countryData || countryData.length === 0) return <div>No data to display.</div>;

  // Check if the country object has the expected structure
  const country = countryData[0];
  if (!country || !country.name || !country.flags) {
    return <div>Invalid country data received.</div>;
  }

  return (
    <div className={styles.countryDisplayContainer}>
      <h2>{country.name.common || 'N/A'}</h2>
      <p>Capital: {country.capital?.[0] || 'N/A'}</p>
      <p>Population: {country.population || 'N/A'}</p>
      <p>Region: {country.region || 'N/A'}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
};

export default CountryInfoDisplay;
