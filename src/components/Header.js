import React from "react";
import '../components/styles/header.css';
import Logo from '../components/assets/Logo.jpg';
import Nav from './Nav';

function Header() {
    return (
      <header className="header-container">
        <img className="logo-img" src={Logo} alt="Little Lemon logo"></img>
        <Nav/>
      </header>
    );
  }

export default Header;