import React from 'react';
import styles from './CountryInfoDisplay.module.css'; 

// CountryInfoDisplay component is responsible for rendering the information about a country.
// It displays details like the capital, population, region, languages, and currency.

const CountryInfoDisplay = ({ countryData }) => {
  if (!countryData || countryData.length === 0) return <div>...</div>;

  const country = countryData[0];
  if (!country || !country.name || !country.flags) {
    return <div>Invalid country data received.</div>;
  }

  // Additional details
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A';

  return (
    <div className={styles.countryDisplayContainer}>
      <h2>{country.name.common || 'N/A'}</h2>
      <p>Capital: {country.capital?.[0] || 'N/A'}</p>
      <p>Population: {country.population?.toLocaleString() || 'N/A'}</p> {/* Formatting population with commas */}
      <p>Region: {country.region || 'N/A'}</p>
      <p>Languages: {languages}</p>
      <p>Currency: {currencies}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ maxWidth: '200px', marginTop: '10px' }} />
      {}
      {country.maps && (
        <p>
          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </p>
      )}
    </div>
  );
};

export default CountryInfoDisplay;