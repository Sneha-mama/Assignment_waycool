import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <React.Fragment>
              <nav className="navbar">
                  <h3 className="logo">Logo</h3>
                  <ul className="nav-links">
                      <Link to="/Location" className="location">
                          <li>Location</li>
                      </Link>
                      <Link to="/search" className="search">
                          <li>Search</li>
                      </Link>
                      <Link to="/Login" className="Login">
                          <li>Login</li>
                      </Link>
                      <Link to="/signup" className="SignUp">
                          <li>SignUp</li>
                      </Link>
                      <Link to="/cart" className="Cart">
                          <li>Cart</li>
                          </Link>
                          <Link to="/storelocation" className="StoreLocation">
                          <li>StoreLocation</li>
                      </Link>
                        <Link to="/home" className="Home">
                          <li>Home</li>
                      </Link>
                      <Link to="/AboutUs" className="AboutUs">
                          <li>AboutUs</li>
                      </Link>
                      <Link to="/contact" className="Contact">
                          <li>Contact</li>
                      </Link>
                      <Link to="/myaccount" className="My Account">
                          <li>My Account</li>
                      </Link>
                  </ul>
              </nav>
        </React.Fragment>
    )
};
export default Navbar;