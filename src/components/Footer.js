import React from "react";
import footerLogo from './assets/Logo.jpg';
import '../components/styles/footer.css';

function Footer() {
    return (
      <footer className="footer-container">
        <section className="footer-text">
          <img className="footer-img-logo" src={footerLogo} alt="Little Lemon logo"></img>
          <div className="footer-navigation footer-div">
              <h6 className="footer-subtitle">Navigation</h6>
              <li className="footer-nav-list-item list-item">Home</li>
              <li className="footer-nav-list-item list-item">About</li>
              <li className="footer-nav-list-item list-item">Menu</li>
              <li className="footer-nav-list-item list-item">Reservations</li>
              <li className="footer-nav-list-item list-item">Order Online</li>
              <li className="footer-nav-list-item list-item">Login</li>
          </div>
          <div className="footer-contact footer-div">
            <h6 className="footer-subtitle">Contact</h6>
              <li className="footer-contact-list-item list-item">2395 Maldove Way, Chicago Illinois</li>
              <li className="footer-contact-list-item list-item">(629)-243-6827</li>
              <li className="footer-contact-list-item list-item">info@littlelemon.com</li>
          </div>
          <div className="footer-social-media footer-div">
            <h6 className="footer-subtitle">Social Media Links</h6>
              <li className="footer-social-media-list-item list-item"><a href="https://www.facebook.com/thelittlelemonshop/" target="_blank" rel="noreferrer">Facebook</a></li>
              <li className="footer-social-media-list-item list-item"><a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li className="footer-social-media-list-item list-item"><a href="https://www.youtube.com/watch?v=BI3wesFc6b8&ab_channel=LittleLemonband" target="_blank" rel="noreferrer">Join Us!</a></li>
          </div>
        </section>
      </footer>
    );
  }

export default Footer;