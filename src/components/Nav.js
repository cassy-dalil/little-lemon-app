import React from 'react';
import './styles/nav.css';


function Nav() {
    return (
      <nav className='nav-container'>
        <ul className='nav-list'>
            <li className='nav-list-item'><a>Home</a></li>
            <li className='nav-list-item'><a>About</a></li>
            <li className='nav-list-item'><a>Menu</a></li>
            <li className='nav-list-item'><a>Reservations</a></li>
            <li className='nav-list-item'><a>Order Online</a></li>
            <li className='nav-list-item'><a>Login</a></li>
        </ul>
      </nav>
    );
  }

export default Nav;