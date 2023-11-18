import React, { useState } from "react";
import styles from './SearchInput.module.css';

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter country name"
        className={styles.searchInput}
        name="countryName" // Added name attribute
      />
      <button onClick={handleSearchClick} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
