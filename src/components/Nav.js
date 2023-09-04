import React from 'react';
import './styles/nav.css';


function Nav() {
    return (
      <nav>
        <img src={logo} alt="Little Lemon logo" className='App-logo'></img>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
      </nav>
    );
  }

export default Nav;