import React from 'react';
import styles from './CountryInfoDisplay.module.css'; 

const CountryInfoDisplay = ({ countryData }) => {
  if (!countryData) return <div>No data to display.</div>;

  return (
    <div className={styles.countryDisplayContainer}>
      <h2>{countryData.name}</h2>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default CountryInfoDisplay;