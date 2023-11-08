import React from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav className='nav-container'>
        <ul className='nav-list'>
            <li className='nav-list-item'><Link to="/Home">Home</Link></li>
            <li className='nav-list-item'><Link to="/About">About</Link></li>
            <li className='nav-list-item'><Link to="/Menu">Menu</Link></li>
            <li className='nav-list-item'><Link to="/Reservations">Reservations</Link></li>
            <li className='nav-list-item'><Link to="/OrderOnline">Order Online</Link></li>
            <li className='nav-list-item'><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    );
  }

export default Nav;