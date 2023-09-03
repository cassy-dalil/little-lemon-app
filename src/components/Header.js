import React from "react";

function Header() {
    return (
      <header className="header-container">
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
        <div className="hamburger">

        </div>
      </header>
    );
  }

export default Header;