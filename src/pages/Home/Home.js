import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContent}>
        <h1>Accelerate Your Learning with NeoLearn AI</h1>
        <p className={styles.tagline}>
          Intelligent note-taking and personalized guidance, powered by NeoLearn.<br></br>
          Students Learning platform
        </p>
        <Link to="/notes" className={styles.primaryCta}>
          Go to Your Notes
        </Link>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <span className={styles.icon}>📝</span>
            <h3>Organized Notes</h3>
            <p>Keep your study materials structured and accessible.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>🤖</span>
            <h3>Chatbot Assistant</h3>
            <p>Get instant answers and summaries while you study.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.icon}>✨</span>
            <h3>Modern UI/UX</h3>
            <p>A beautiful, dark-themed interface built for focus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
