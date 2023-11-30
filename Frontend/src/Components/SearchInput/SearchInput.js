import React, { useState } from "react";
import styles from './SearchInput.module.css';

// The SearchInput component allows the user to input a country name and initiate a search.
const SearchInput = ({ onSearch }) => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Handler to trigger search when the search button is clicked
  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  // Handler to trigger search when the "Enter" key is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <div className={styles.searchContainer}>
      {/* Text input for entering the country name */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter country name"
        className={styles.searchInput}
        name="countryName"
      />
      {/* Button to submit the search */}
      <button onClick={handleSearchClick} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;