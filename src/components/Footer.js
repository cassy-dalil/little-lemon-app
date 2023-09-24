import React from "react";
import footerLogo from './assets/Logo.jpg';
import '../components/styles/footer.css';

function Footer() {
    return (
      <footer>
        <img className="footer-img-logo" src={footerLogo} alt="Little Lemon logo"></img>
        <div className="footer-navigation">
            <li className="footer-nav-list-item list-item">Home</li>
            <li className="footer-nav-list-item list-item">About</li>
            <li className="footer-nav-list-item list-item">Menu</li>
            <li className="footer-nav-list-item list-item">Reservations</li>
            <li className="footer-nav-list-item list-item">Order Online</li>
            <li className="footer-nav-list-item list-item">Login</li>
        </div>
        <div className="footer-contact">
          <p>Contact</p>
          <ul className="footer-contact-list">
            <li className="footer-contact-list-item list-item">Address</li>
            <li className="footer-contact-list-item list-item">Phone number</li>
            <li className="footer-contact-list-item list-item">Email</li>
          </ul>
        </div>
        <div className="footer-social-media">
          <p>Social Media Links</p>
          <ul className="footer-social-media-list">
            <li className="footer-social-media-list-item list-item">Media link 1</li>
            <li className="footer-social-media-list-item list-item">Media link 2</li>
            <li className="footer-social-media-list-item list-item">Media link 3</li>
          </ul>
        </div>
      </footer>
    );
  }

export default Footer;