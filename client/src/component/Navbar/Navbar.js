import React from 'react';
import "./../../views/Home/Home.css";
import logo from "./../../assets/images/home images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white" data-aos="zoom-in-down" data-aos-duration="3000" data-aos-delay="1700">
      <div className="container-fluid">
        <img src={logo} alt="logo "  width="150px" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mx-4" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="/OPD">OPD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-4" href="/signin">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav justify-content-end">
          {/* Additional content can be added here */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
