import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from "../Assets/2020 logo.png";

import '../style/navbar.css';

const Navbar = () => {
   const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt='' />
      </div>
      <div className={`navbar-links-container ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/products">Gallery</Link>
            <Link to="/testimonials">Bookings </Link>
            <Link to="/testimonials">About Us</Link>
            <Link to="/testimonials">Contact us </Link>
               <Link to="/">
                <ShoppingCartIcon />
            </Link>
      </div>
      <div className="menu-icon-container">
        <MenuIcon className="menu-icon" onClick={toggleMobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;