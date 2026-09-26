// MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure correct import for react-router-dom

const MobileMenu = () => {
    const [menuState, setMenuState] = useState({
        activeMenu: null,
        activeSubMenu: null
    });

    const handleMenuClick = (key) => {
        setMenuState(prev => ({
            ...prev,
            activeMenu: prev.activeMenu === key ? null : key
        }));
    };
    
    const handleSubMenuClick = (key) => {
        setMenuState((prev) => ({
            ...prev,
            activeSubMenu: prev.activeSubMenu === key ? null : key,
        }));
    };

    return (
        <>
        <ul className="navigation">
            <li className="current dropdown"><Link to="/">Home</Link>
                <ul className={menuState.activeMenu === 1 ? "d-block" : "d-none"}>
                    <li className="dropdown"><Link to="/">Blue Layouts <span className="badge-menu">Blue</span></Link>
                        <ul className={menuState.activeSubMenu === 1 ? "d-block" : "d-none"}>
                            <li><Link to="/">Home Layout 1</Link></li>
                            <li><Link to="/index-2">Home Layout 2</Link></li>
                            <li><Link to="/index-3">Home Layout 3</Link></li>
                            <li><Link to="/index-4">Home Layout 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(1)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-red">Red Layouts <span className="badge-menu badge-color-red">Red</span></Link>
                        <ul className={menuState.activeSubMenu === 2 ? "d-block" : "d-none"}>
                            <li><Link to="/index-red">Home Layout 1</Link></li>
                            <li><Link to="/index-2-red">Home Layout 2</Link></li>
                            <li><Link to="/index-3-red">Home Layout 3</Link></li>
                            <li><Link to="/index-4-red">Home Layout 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(2)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-yellow">Yellow Layouts <span className="badge-menu badge-color-yellow">Yellow</span></Link>
                        <ul className={menuState.activeSubMenu === 3 ? "d-block" : "d-none"}>
                            <li><Link to="/index-yellow">Home Layout 1</Link></li>
                            <li><Link to="/index-2-yellow">Home Layout 2</Link></li>
                            <li><Link to="/index-3-yellow">Home Layout 3</Link></li>
                            <li><Link to="/index-4-yellow">Home Layout 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(3)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="/index-dark">Dark Layouts <span className="badge-menu badge-color-dark">Dark</span></Link>
                        <ul className={menuState.activeSubMenu === 4 ? "d-block" : "d-none"}>
                            <li><Link to="/index-dark">Home Layout 1</Link></li>
                            <li><Link to="/index-2-dark">Home Layout 2</Link></li>
                            <li><Link to="/index-3-dark">Home Layout 3</Link></li>
                            <li><Link to="/index-4-dark">Home Layout 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(4)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="index-single">Single</Link>
                        <ul className={menuState.activeSubMenu === 5 ? "d-block" : "d-none"}>
                            <li><Link to="/index-single">Home Layout 1</Link></li>
                            <li><Link to="/index-2-single">Home Layout 2</Link></li>
                            <li><Link to="/index-3-single">Home Layout 3</Link></li>
                            <li><Link to="/index-4-single">Home Layout 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(5)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown"><Link to="#">Header Styles</Link>
                        <ul className={menuState.activeSubMenu === 6 ? "d-block" : "d-none"}>
                            <li><Link to="/">Header Style 1</Link></li>
                            <li><Link to="/index-2">Header Style 2</Link></li>
                            <li><Link to="/index-3">Header Style 3</Link></li>
                            <li><Link to="/index-4">Header Style 4</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(6)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div className={menuState.activeMenu === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(1)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">Services</Link>
                <ul className={menuState.activeMenu === 2 ? "d-block" : "d-none"}>
                    <li><Link to="/page-services">Services Grid</Link></li>
                    <li><Link to="/page-service-details">Service Details</Link></li>
                </ul>
                <div className={menuState.activeMenu === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(2)}>
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">Pages</Link>
                <ul className={menuState.activeMenu === 3 ? "d-block" : "d-none"}>
                    <li><Link to="/page-about">About</Link></li>
                    <li><Link to="/page-contact">Contact</Link></li>
                    <li><Link to="/page-faq">Faq</Link></li>
                    <li><Link to="/page-pricing">Pricing</Link></li>
                    <li><Link to="/page-testimonial">Testimonials</Link></li>
                    <li><Link to="/page-404">404</Link></li>
                    <li className="dropdown">
                        <Link to="#">Team</Link>
                        <ul className={menuState.activeSubMenu === 7 ? "d-block" : "d-none"}>
                            <li><Link to="/page-team">Team List</Link></li>
                            <li><Link to="/page-team-details">Team Details</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 7 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(7)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                    <li className="dropdown">
                        <Link to="#">Shop</Link>
                        <ul className={menuState.activeSubMenu === 8 ? "d-block" : "d-none"}>
                            <li><Link to="/shop-products">Products</Link></li>
                            <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                            <li><Link to="/shop-product-details">Product Details</Link></li>
                            <li><Link to="/shop-cart">Cart</Link></li>
                            <li><Link to="/shop-checkout">Checkout</Link></li>
                        </ul>
                        <div className={menuState.activeSubMenu === 8 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubMenuClick(8)} >
                            <i className="fa fa-angle-down"></i>
                        </div>
                    </li>
                </ul>
                <div className={menuState.activeMenu === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(3)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li className="dropdown">
                <Link to="#">News</Link>
                <ul className={menuState.activeMenu === 4 ? "d-block" : "d-none"}>
                    <li><Link to="/news-grid">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
                <div className={menuState.activeMenu === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleMenuClick(4)} >
                    <i className="fa fa-angle-down"></i>
                </div>
            </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        </>
    );
};

export default MobileMenu;