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
      <div className="header-text">
        <div className="div-text">
          <h1>Hello, <br />I am <span>Zikhona</span></h1>
          <button className="btnn"><a href="#projects">Portfolio</a></button>
        </div>
        <div className="image">
          <img src="/src/picture.png" alt="" />
        </div>
        
      </div>
    </>
  )
};

export default Layout;
