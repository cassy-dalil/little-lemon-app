import React from "react";
import footerLogo from './assets/Logo.jpg';

function Footer() {
    return (
      <footer>
        <img src={footerLogo} alt="Little Lemon logo"></img>
        <div className="footer-navigation">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li><a>Media link 1</a></li>
            <li><a>Media link 2</a></li>
            <li><a>Media link 3</a></li>
          </ul>
        </div>
      </footer>
    );
  }

export default Footer;