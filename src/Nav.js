import logo from '../icons/icons_assets/Logo .svg'

function Nav() {
    return (
      <nav>
        <img src={logo} alt="Little Lemon logo"></img>
        <ul>
            <li><a ref='#'>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
      </nav>
    );
  }