import React from "react";
import footerLogo from './assets/Logo.jpg';
import '../components/styles/footer.css';

function Footer() {
    return (
      <footer>
        <img className="footer-img-logo" src={footerLogo} alt="Little Lemon logo"></img>
        <div className="footer-navigation">
            <li className="footer-nav-list-item"><a>Home</a></li>
            <li className="footer-nav-list-item"><a>About</a></li>
            <li className="footer-nav-list-item"><a>Menu</a></li>
            <li className="footer-nav-list-item"><a>Reservations</a></li>
            <li className="footer-nav-list-item"><a>Order Online</a></li>
            <li className="footer-nav-list-item"><a>Login</a></li>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li className="footer-contact-list-item">Address</li>
            <li className="footer-contact-list-item">Phone number</li>
            <li className="footer-contact-list-item">Email</li>
          </ul>
        </div>
        <div className="footer-social-media">
          <h3>Social Media Links</h3>
          <ul className="footer-social-media-list">
            <li className="footer-contact-list-item"><a>Media link 1</a></li>
            <li className="footer-contact-list-item"><a>Media link 2</a></li>
            <li className="footer-contact-list-item"><a>Media link 3</a></li>
          </ul>
        </div>
      </footer>
    );
  }

export default Footer;