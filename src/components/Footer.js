import React from "react";
import footerLogo from './assets/Logo.jpg';
import '../components/styles/footer.css';

function Footer() {
    return (
      <footer>
        <img className="footer-img-logo" src={footerLogo} alt="Little Lemon logo"></img>
        <div className="footer-navigation footer-div">
            <li className="footer-nav-list-item list-item">Home</li>
            <li className="footer-nav-list-item list-item">About</li>
            <li className="footer-nav-list-item list-item">Menu</li>
            <li className="footer-nav-list-item list-item">Reservations</li>
            <li className="footer-nav-list-item list-item">Order Online</li>
            <li className="footer-nav-list-item list-item">Login</li>
        </div>
        <div className="footer-contact footer-div">
          <h6 className="footer-p">Contact</h6>
          <ul className="footer-contact-list">
            <li className="footer-contact-list-item list-item">Address</li>
            <li className="footer-contact-list-item list-item">Phone number</li>
            <li className="footer-contact-list-item list-item">Email</li>
          </ul>
        </div>
        <div className="footer-social-media footer-div">
          <h6 className="footer-p">Social Media Links</h6>
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