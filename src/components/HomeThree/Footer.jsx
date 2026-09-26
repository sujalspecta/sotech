import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/resource/logo.png';
import Portfolio1 from '../../assets/images/resource/project-thumb-1.jpg';
import Portfolio2 from '../../assets/images/resource/project-thumb-2.jpg';
import Portfolio3 from '../../assets/images/resource/project-thumb-3.jpg';
import Portfolio4 from '../../assets/images/resource/project-thumb-4.jpg';
import Portfolio5 from '../../assets/images/resource/project-thumb-5.jpg';
import Portfolio6 from '../../assets/images/resource/project-thumb-6.jpg';

function FooterHomeOne({ className }) {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);
        // Add form submission logic here
    };

    return (
        <footer className={`main-footer ${className || ''}`}>
            <div className="bg-logo"/>
            <div className="auto-container">
                <div className="subscribe-form">
                    <div className="title-column">
                        <div className="logo-box"><img src={logo} alt="Image"/></div>
                        <h5 className="title">Subscribe now to Get <br/>Latest Updates</h5>
                    </div>
                    <div className="form-column">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="email" name="email" className="email" placeholder="Email Address" required=""/>
                                <button type="button" className="theme-btn"><i className="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        <div className="footer-column col-xl-3">
                            <div className="footer-widget about-widget">
                                <h6 className="widget-title">About</h6>
                                <div className="text">Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut labore.</div>
                                <ul className="social-icon-two">
                                    <li><Link to="#"><i className="fa fa-x"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-md-4">
                            <div className="footer-widget links-widget">
                                <h6 className="widget-title">Explore</h6>
                                <ul className="user-links">
                                    <li><Link to="#">About Company</Link></li>
                                    <li><Link to="#">Meet the Team</Link></li>
                                    <li><Link to="#">News & Media</Link></li>
                                    <li><Link to="#">Our Projects</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-md-4 col-sm-8">
                            <div className="footer-widget gallery-widget">
                                <h6 className="widget-title">Portfolio</h6>
                                <div className="widget-content">
                                    <div className="outer clearfix">
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio1} alt="Image"/></Link>
                                        </figure>
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio2} alt="Image"/></Link>
                                        </figure>
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio3} alt="Image"/></Link>
                                        </figure>
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio4} alt="Image"/></Link>
                                        </figure>
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio5} alt="Image"/></Link>
                                        </figure>
                                        <figure className="image">
                                            <Link to="#"><img src={Portfolio6} alt="Image"/></Link>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-column col-xl-3 col-md-4">
                            <div className="footer-widget contacts-widget">
                                <h6 className="widget-title">Contact</h6>
                                <div className="text">66 Road Broklyn Street, 600<br/> New York, USA</div>
                                <ul className="contact-info">
                                    <li><i className="fa fa-envelope"></i> <a href="mailto:needhelp@potisen.com">needhelp@company.com</a><br/></li>
                                    <li><i className="fa fa-phone-square"></i> <a href="tel:+926668880000">+92 666 888 0000</a><br/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">&copy; Copyright Reserved by <Link to="/">kodesolution</Link></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterHomeOne;
