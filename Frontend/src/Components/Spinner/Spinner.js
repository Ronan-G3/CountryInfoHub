import React from 'react';
import spinnerGif from '../../assets/spinner.gif'; // Adjust the path according to where you place it
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner} style={{ backgroundImage: `url(${spinnerGif})` }}>
      {/* Spinner content */}
    </div>
  );
};

export default Spinner;
