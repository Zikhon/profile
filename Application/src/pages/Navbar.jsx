import React, { useState } from "react"; // Import useState
import { Outlet, Link } from "react-router-dom";
import './style/Navbar.css'

const Layout = () => {
  const [navOpen, setNavOpen] = useState(false); // State to track navigation visibility

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <nav className={`navbar ${navOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-list ${navOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Outlet />
    
    </>
  )
};

export default Layout;
