import React from 'react';
import styles from './Layout.module.css'; 

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>Country Info Hub App</header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>© 2023 CountryInfoHub</footer>
    </div>
  );
};

export default Layout;