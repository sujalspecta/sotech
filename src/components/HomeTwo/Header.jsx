import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useScrollPosition from "../../lib/useScrollPosition";
import logo2 from '../../assets/images/logo-2.png';
import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation.jsx';
import MobileMenu from '../MobileMenu.jsx';

function HomeTwoHeader({ className = '', scroll = false }) {
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
    <header className={`main-header header-style-two style-transparent ${className || ''}`}>
		{/* <!-- Header Top --> */}
		<div className="header-top">
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
		{/* <!-- Header Top --> */}

		{/* <!-- Header Lower --> */}
		<div className="header-lower">
			{/* <!-- Main box --> */}
			<div className="main-box">
				<div className="logo-box">
					<div className="logo"><Link to="/"><img src={logo} alt="Image" title="Sotech"/></Link></div>
				</div>
				<div className="nav-outer">
					<nav className="nav main-menu">
						<Navigation />
					</nav>
					{/* <!-- Main Menu End--> */}
				</div>
				<div className="outer-box">
					<div className="ui-btn-outer">
						<button className="ui-btn ui-btn search-btn" onClick={() => toggleMenu('isSearchPopupOpen')}>
							<span className="icon lnr lnr-icon-search"></span>
						</button>
						<Link to="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
					</div>
					{/* <!-- Mobile Nav toggler --> */}
					<div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}><span className="icon lnr-icon-bars"></span></div>
				</div>
			</div>
		</div>
		{/* <!-- End Header Lower --> */}

		{/* <!-- Mobile Menu  --> */}
		<div className={`mobile-menu ${menuState.isMobileMenuOpen ? 'open' : ''}`}>
			<div className="menu-backdrop" onClick={() => closeMenu('isMobileMenuOpen')}/>
			<nav className="menu-box">
				<div className="upper-box">
					<div className="nav-logo"><Link to="/"><img src={logo} alt="Image" title="Image"/></Link></div>
					<div className="close-btn" onClick={() => closeMenu('isMobileMenuOpen')}><i className="icon fa fa-times"></i></div>
				</div>
				<ul className="navigation clearfix">
                    <MobileMenu />
				</ul>
				<ul className="contact-list-one">
					<li>
						<div className="contact-info-box">
							<i className="icon lnr-icon-phone-handset"></i>
							<span className="title">Call Now</span>
							<a href="tel:+92880098670">+92 (8800) - 98670</a>
						</div>
					</li>
					<li>
						<div className="contact-info-box">
							<span className="icon lnr-icon-envelope1"></span>
							<span className="title">Send Email</span>
							<a href="mailto:help@company.com">help@company.com</a>
						</div>
					</li>
					<li>
						<div className="contact-info-box">
							<span className="icon lnr-icon-clock"></span>
							<span className="title">Send Email</span>
							Mon - Sat 8:00 - 6:30, Sunday - CLOSED
						</div>
					</li>
				</ul>
				<ul className="social-links">
					<li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
					<li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
					<li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
					<li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
				</ul>
			</nav>
		</div>

		{/* <!-- Header Search --> */}
		<div className={`search-popup ${menuState.isSearchPopupOpen ? 'active' : ''}`}>
			<span className="search-back-drop" onClick={() => closeMenu('isSearchPopupOpen')}/>
			<button className="close-search" onClick={() => closeMenu('isSearchPopupOpen')}><span className="fa fa-times"></span></button>
			<div className="search-inner">
				<form method="post" action="index">
					<div className="form-group">
						<input type="search" name="search-field" placeholder="Search..." />
						<button type="submit"><i className="fa fa-search"></i></button>
					</div>
				</form>
			</div>
		</div>
		{/* <!-- End Header Search --> */}

		{/* <!-- Sticky Header  --> */}
		<div className={`sticky-header ${isSticky ? "fixed-header" : ""} animated slideInDown' : ''}`}>
			<div className="auto-container">
				<div className="inner-container">
					<div className="logo">
						<Link to="/"><img src={logo2} alt="Image" title="Image"/></Link>
					</div>
					<div className="nav-outer">
						<nav className="main-menu">
							<div className="navbar-collapse show collapse clearfix">
								<ul className="navigation clearfix">
									<Navigation />
								</ul>
							</div>
						</nav>
						<div className="mobile-nav-toggler" onClick={() => toggleMenu('isMobileMenuOpen')}><span className="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
		</div>
	</header>
     </>
    );
}

export default HomeTwoHeader;
