import React from 'react';
import styles from './Landing.module.css'; // Assuming you will create a CSS module for styling

const Landing = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>AI Speaking App</div>
        <nav className={styles.nav}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className={styles.cta}>Get Started</button>
        </nav>
      </header>
      <section className={styles.hero}>
        <h1>Elevate Your Communication Skills with AI</h1>
        <p>Empower yourself to speak confidently and fluently.</p>
        <button className={styles.cta}>Try it Now</button>
      </section>
      <section id="features" className={styles.features}>
        <h2>Why Choose Our App?</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>AI-Powered Feedback</div>
          <div className={styles.feature}>Personalized Coaching</div>
          <div className={styles.feature}>Practice Scenarios</div>
          <div className={styles.feature}>Progress Tracking</div>
        </div>
      </section>
      <section id="target-users" className={styles.targetUsers}>
        <h2>Who Can Benefit?</h2>
        <div className={styles.userGroup}>Students and Professionals</div>
        <div className={styles.userGroup}>Non-native Speakers</div>
        <div className={styles.userGroup}>Introverts</div>
        <div className={styles.userGroup}>Speaking Coaches and Educators</div>
        <div className={styles.userGroup}>Training Organizations</div>
      </section>
      <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonialCarousel}>[Testimonials Here]</div>
      </section>
      <section className={styles.callToAction}>
        <h2>Join Us Today!</h2>
        <button className={styles.cta}>Sign Up</button>
      </section>
      <footer className={styles.footer}>
        <div className={styles.socialMedia}>[Social Media Links]</div>
        <div className={styles.contactInfo}>Contact Us | Privacy Policy | Terms of Service</div>
      </footer>
    </div>
)};

export default Landing;