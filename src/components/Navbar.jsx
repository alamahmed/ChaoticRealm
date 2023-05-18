import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {

  const [activePage, setActivePage] = useState('Home');

  const handlePageClick = (page) => {
    setActivePage(page);
  }
  const menu = [{ label: 'Home', route: '' }, { label: 'Tournament', route: 'tournament' }, { label: 'About', route: 'about' }];
  const mobileMenu = [{ label: 'Tournament', route: 'tournament' }, { label: 'Home', route: '' }, { label: 'About', route: 'about' }];

  return (
    <>
      <header className="header-desktop">
        <div className="navbar-container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="nav-links" onLoad={() => handlePageClick('Home')}>
            {menu.map(e => <Link onClick={() => handlePageClick(e.label)} to={`/${e.route}`} className={`${e.label} ${activePage === e.label ? 'active' : ''}`} >{e.label}</Link>)}
          </div>
          <div></div>
        </div>
      </header>
      <header className="header-mobile">
        <nav className="navbar-mobile">
          <div className="navbar-container-mobile">
            <div className="nav-links">
              {mobileMenu.map(e => <Link onClick={() => handlePageClick(e.label)} to={`/${e.route}`} className={`${e.label} ${activePage === e.label ? 'active' : ''}`} >{e.label === 'Home' ? <img src={logo} alt="Home" className="logo" /> : e.label}</Link>)}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;