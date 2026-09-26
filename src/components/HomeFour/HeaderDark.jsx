import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from "../../lib/useScrollPosition.js";
import logo1 from '../../assets/images/logo.png';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function Header({ className = '', scroll = false }) {
    const [menuState, setMenuState] = useState({
        isMobileMenuOpen: false,
        isSearchPopupOpen: false,
    });
    const isSticky = useScrollPosition(100);

    const toggleMenu = useCallback((menuType) => {
        setMenuState((prev) => ({
          ...prev,
          [menuType]: !prev[menuType],
        }));
    }, []);

    const closeMenu = useCallback((menuType) => {
        setMenuState((prev) => ({
          ...prev,
          [menuType]: false,
        }));
    }, []);

    return (
        <>
            <header className={`main-header header-style-six style-two ${className || ''}`}>
                {/* <!-- Header Top --> */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="header-top-inner">
                            <div className="inner-container">
                                <div className="top-left">
                                    <ul className="list-style-one">
                                        <li><i className="fa fa-envelope"></i> <a href="mailto:needhelp@company.com">needhelp@company.com</a></li>
                                        <li><i className="fa fa-map-marker-alt"></i> 88 Broklyn Golden Street. New York</li>
                                    </ul>
                                </div>
                                <div className="top-right">
                                    <ul className="useful-links">
                                        <li><Link to="#">Help</Link></li>
                                        <li><Link to="#">Support</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="outer-box">
                                <ul className="social-icon-one">
                                    <li><Link to="#"><span className="fab fa-twitter"></span></Link></li>
                                    <li><Link to="#"><span className="fab fa-facebook-square"></span></Link></li>
                                    <li><Link to="#"><span className="fab fa-pinterest-p"></span></Link></li>
                                    <li><Link to="#"><span className="fab fa-instagram"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Header Top --> */}

                {/* <!-- Header Lower --> */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="header-lower-inner">
                            <div className="main-box">
                                <div className="logo-box">
                                    <div className="logo"><Link to="/"><img src={logo1} alt="Image" title="Sotech"/></Link></div>
                                </div>
                                <div className="nav-outer">
                                    <nav className="nav main-menu">
                                        <Navigation />
                                    </nav>
                                    {/* <!-- Main Menu End--> */}
                                    <div className="outer-box">
                                        <Link to="/page-contact" className="theme-btn btn-style-one"><span className="btn-title">BOOK A CONSULTATION</span></Link>

                                        {/* <!-- Mobile Nav toggler --> */}
                                        <div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}><span className="icon lnr-icon-bars"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Header Lower --> */}

                {/* Mobile Menu */}
                <div className={`mobile-menu ${menuState.isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="menu-backdrop" onClick={() => closeMenu('isMobileMenuOpen')} />
                            <nav className="menu-box">
                                <div className="upper-box">
                                    <div className="nav-logo">
                                        <Link to="/"><img src={logo1} alt="Sotech" title="Sotech" /></Link>
                                    </div>
                                    <div className="close-btn" onClick={() => closeMenu('isMobileMenuOpen')}>
                                        <i className="icon fa fa-times" />
                                    </div>
                                </div>
                                <MobileMenu />
                                <ul className="contact-list-one">
                                    <li>
                                        <div className="contact-info-box">
                                            <i className="icon lnr-icon-phone-handset" />
                                            <span className="title">Call Now</span>
                                            <Link to="tel:+92880098670">+92 (8800) - 98670</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-info-box">
                                            <span className="icon lnr-icon-envelope1" />
                                            <span className="title">Send Email</span>
                                            <Link to="mailto:help@company.com">help@company.com</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="contact-info-box">
                                            <span className="icon lnr-icon-clock" />
                                            <span className="title">Opening Hours</span>
                                            Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                        </div>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-pinterest" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                </ul>
                            </nav>
                </div>
                {/* Search Popup */}
                <div className={`search-popup ${menuState.isSearchPopupOpen ? 'active' : ''}`}>
                    <span className="search-back-drop" onClick={() => closeMenu('isSearchPopupOpen')} />
                    <button className="close-search" onClick={() => closeMenu('isSearchPopupOpen')}>
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="/">
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    placeholder="Search..."
                                    required
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Sticky Header */}
                <div className={`sticky-header ${isSticky ? "fixed-header" : ""} animated slideInDown' : ''}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link to="/"><img src={logo1} alt="Company Logo" /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <Navigation />
                                </nav>
                                <div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}>
                                    <span className="icon lnr-icon-bars"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
