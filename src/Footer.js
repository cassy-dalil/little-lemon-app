import footerLogo from '../icons/icons_assets/Logo.svg'

function Footer() {
    return (
      <footer>
        <img src={footerLogo} alt="Little Lemon logo"></img>
        <nav>
            <li><a ref='#'>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </nav>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
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