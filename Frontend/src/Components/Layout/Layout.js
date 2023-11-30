import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src={`${process.env.PUBLIC_URL}/Country_Info_Banner2.png`} alt="Country Info Banner" className={styles.banner} />
        </header>
      <div className={styles.logoContainer}>
        <img src={`${process.env.PUBLIC_URL}/Country_Info.png`} alt="Country Info Hub Logo" className={styles.logo} />
      </div>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>© 2023 CountryInfoHub</footer>
    </div>
  );
};

export default Layout;
