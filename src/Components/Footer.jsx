import React from "react";
import styles from "./cstyles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_about}>
          <h3>InfoHub</h3>
          <p>
            InfoHub is your one-stop platform to connect with clubs, societies,
            and events at your university. Discover opportunities, build
            connections, and engage with your community.
          </p>
        </div>
        <div className={styles.footer_links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.footer_social}>
          <h4>Follow Us</h4>
          <div className={styles.social_icons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p>&copy; 2025 InfoHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
