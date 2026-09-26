import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="navigation">
            <li className="current dropdown"><Link to="/">Home</Link>
                <ul>
                    <li className="dropdown"><Link to="/">Blue Layouts <span className="badge-menu">Blue</span></Link>
                        <ul>
                            <li><Link to="/">Home Layout 1</Link></li>
                            <li><Link to="/index-2">Home Layout 2</Link></li>
                            <li><Link to="/index-3">Home Layout 3</Link></li>
                            <li><Link to="/index-4">Home Layout 4</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="/index-red">Red Layouts <span className="badge-menu badge-color-red">Red</span></Link>
                        <ul>
                            <li><Link to="/index-red">Home Layout 1</Link></li>
                            <li><Link to="/index-2-red">Home Layout 2</Link></li>
                            <li><Link to="/index-3-red">Home Layout 3</Link></li>
                            <li><Link to="/index-4-red">Home Layout 4</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="/index-yellow">Yellow Layouts <span className="badge-menu badge-color-yellow">Yellow</span></Link>
                        <ul>
                            <li><Link to="/index-yellow">Home Layout 1</Link></li>
                            <li><Link to="/index-2-yellow">Home Layout 2</Link></li>
                            <li><Link to="/index-3-yellow">Home Layout 3</Link></li>
                            <li><Link to="/index-4-yellow">Home Layout 4</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="/index-dark">Dark Layouts <span className="badge-menu badge-color-dark">Dark</span></Link>
                        <ul>
                            <li><Link to="/index-dark">Home Layout 1</Link></li>
                            <li><Link to="/index-2-dark">Home Layout 2</Link></li>
                            <li><Link to="/index-3-dark">Home Layout 3</Link></li>
                            <li><Link to="/index-4-dark">Home Layout 4</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="index-single">Single</Link>
                        <ul>
                            <li><Link to="/index-single">Home Layout 1</Link></li>
                            <li><Link to="/index-2-single">Home Layout 2</Link></li>
                            <li><Link to="/index-3-single">Home Layout 3</Link></li>
                            <li><Link to="/index-4-single">Home Layout 4</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">Header Styles</Link>
                        <ul>
                            <li><Link to="/">Header Style 1</Link></li>
                            <li><Link to="/index-2">Header Style 2</Link></li>
                            <li><Link to="/index-3">Header Style 3</Link></li>
                            <li><Link to="/index-4">Header Style 4</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown"><Link to="#">Pages</Link>
                <ul>
                    <li><Link to="/page-about">About</Link></li>
                    <li className="dropdown"><Link to="#">Projects</Link>
                        <ul>
                            <li><Link to="/page-projects">Projects List</Link></li>
                            <li><Link to="/page-project-details">Project Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown"><Link to="#">Team</Link>
                        <ul>
                            <li><Link to="/page-team">Team List</Link></li>
                            <li><Link to="/page-team-details">Team Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/page-testimonial">Testimonial</Link></li>
                    <li><Link to="/page-pricing">Pricing</Link></li>
                    <li><Link to="/page-pricing-switcher">Pricing Switcher</Link></li>
                    <li><Link to="/page-faq">FAQ</Link></li>
                    <li><Link to="/page-404">Page 404</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link to="#">Services</Link>
                <ul>
                    <li><Link to="/page-services">Services List</Link></li>
                    <li><Link to="/page-service-details">Service Details</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link to="#">Shop</Link>
                <ul>
                    <li><Link to="/shop-products">Products</Link></li>
                    <li><Link to="/shop-products-sidebar">Products with Sidebar</Link></li>
                    <li><Link to="/shop-product-details">Product Details</Link></li>
                    <li><Link to="/shop-cart">Cart</Link></li>
                    <li><Link to="/shop-checkout">Checkout</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link to="#">News</Link>
                <ul>
                    <li><Link to="/news-grid">News Grid</Link></li>
                    <li><Link to="/news-details">News Details</Link></li>
                </ul>
            </li>
            <li><Link to="/page-contact">Contact</Link></li>
        </ul>
    );
}

export default Navigation;