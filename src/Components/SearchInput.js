import React, { useState} from "react";
import styles from './SearchInput.module.css';

const SearchInput = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleSearchClick = () => {
      onSearch(inputValue);
    };
  
    return (
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter country name"
          className={styles.searchInput}
        />
        <button onClick={handleSearchClick} className={styles.searchButton}>
          Search
        </button>
      </div>
    );
  };
  
  export default SearchInput;