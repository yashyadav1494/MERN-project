import React from 'react';
import './Organics.css';
import { Link, Outlet } from "react-router-dom";

const Organics = () => {

  function toggleMenu() {
    const navLinks = document.querySelector('.navbar-links');
    navLinks.classList.toggle('open');
  }
  
  return (
    <div className="organics-container">
        {/* <header className="navbar">
    <div className="logo-container">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98d25f55899921.5997acd85feb8.jpg"
        alt="Organic Logo"
        className="logo"
      />
      <h2 className="company-title">ONLY ORGANICS<sup>TM</sup></h2>
    </div>

    <nav className="navbar-links">
      <ul className="nav-list">
        <li><Link className="nav-link" to="/organic">WHY ORGANIC</Link></li>
        <li><Link className="nav-link" to="/practice">ORGANIC PRACTICES</Link></li>
        <li><Link className="nav-link" to="/we">WHO WE ARE</Link></li>
        <li><Link className="nav-link" to="/actions">TAKE ACTION</Link></li>
        <li><Link className="nav-link" to="/donate">DONATE</Link></li>
      </ul>
    </nav>

    <Link className="sign-up-button" to="/signup">Sign Up</Link>

    <button className="toggle-button" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  </header> */}

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title"><b>Evergreen Farms</b></h1>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/98d25f55899921.5997acd85feb8.jpg"
            alt="Organic Food"
            className="hero-image"
          />
          <h2 className="hero-subtitle"><b> The Organic Food Revolution</b></h2>
          <p className="hero-quote">
            <i>
              “When people say they prefer organic food, what they often seem to mean is they don't want their food tainted with pesticides and their meat shot full of hormones or antibiotics.”
            </i>
          </p>
          <p className="hero-quote">
            <i>
              “Looking back, there is nothing wrong with that peace, love, and equality that the hippies espoused. In many ways, we have regressed because they were into organic food, back to nature, make love not war, be good to all men, share and share alike.”
            </i>
          </p>
          <h5 className="author-info">YASH YADAV: CEO & FOUNDER OF GO FOOD ORGANIC FOOD COMPANY</h5>
        </section>
      </main>

      <Outlet />
    </div>
  );
};

export default Organics;
