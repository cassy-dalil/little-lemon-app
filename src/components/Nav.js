import React from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav className='nav-container'>
        <ul className='nav-list'>
            <li className='nav-list-item'><Link to="/Home" className='link'>Home</Link></li>
            <li className='nav-list-item'><Link to="/About" className='link'>About</Link></li>
            <li className='nav-list-item'><Link to="/Menu" className='link'>Menu</Link></li>
            <li className='nav-list-item'><Link to="/Reservations" className='link'>Reservations</Link></li>
            <li className='nav-list-item'><Link to="/OrderOnline" className='link'>Order Online</Link></li>
            <li className='nav-list-item'><Link to="/Login" className='link'>Login</Link></li>
        </ul>
      </nav>
    );
  }

export default Nav;