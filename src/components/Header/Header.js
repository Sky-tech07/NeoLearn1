import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NeoLearnLogo from '../../assets/neolearn-logo.png'; 

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={NeoLearnLogo} alt="NeoLearn Logo" className={styles.logoImage} />
        <span className={styles.logoText}>NEOLEARN</span>
      </Link>

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/notes" className={styles.navLink}>Notes</Link>
        <button className={styles.ctaButton}>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
