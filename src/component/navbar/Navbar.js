import React from "react";
import {Link} from 'react-router-dom';
 import brand from '../../component/asset/img3.png';

let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light navbar-expand-sm">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                    <img src={brand} alt=""/>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item ">
                            <Link to="/location" className="nav-link">Bangalure</Link>
                            </li>
                         </ul>
                         <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/search" className="nav-link">Search</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link to="/login|signup" className="nav-link">
                            <i className="fa fa-sign-in-alt"/>Login|SignUp</Link>
                            </li>
                            </ul>
                            <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart</Link>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/storelocation" className="nav-link">StoreLocation</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/aboutus" className="nav-link">AboutUs</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/myaccount" className="nav-link">MyAccount</Link>
                                </li>
                            </ul>
                            <div className="collapse navbar-collapse">
                                <ul className="nav-item">
                                    <Link to="/products/list" className="nav-link">
                                        Categories<i className='fas fa-caret-down'/></Link>

                                    <li>Fruits</li>
                                    <li>Vegetables</li>
                                    <li>groceries</li>
                                    <li>Spices</li>
                                    <li>Egg & Meating</li>
                                </ul>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"></li>
                                    <Link to="/products/admin" className="nav-link">Admin</Link>
                                </ul>
                            </div>
                            </div>
                            </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Navbar;