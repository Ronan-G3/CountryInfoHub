import React from 'react';
import spinnerGif from '../../assets/spinner.gif'; 
import styles from './Spinner.module.css';

// The Spinner component displays a loading animation.
const Spinner = () => {
  // The spinner is styled with a background image from the assets
  return (
    <div className={styles.spinner} style={{ backgroundImage: `url(${spinnerGif})` }}>
      {/* The div will show a spinner GIF as a background while loading content */}
    </div>
  );
};

export default Spinner;
